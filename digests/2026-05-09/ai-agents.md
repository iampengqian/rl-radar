# OpenClaw 生态日报 2026-05-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-08 22:16 UTC

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

# OpenClaw 项目动态日报 (2026-05-09)

## 1. 今日速览
OpenClaw 项目在过去24小时内保持了极高的社区活跃度，共产生了 **500 条 Issue 更新**（新开与活跃 285 条，关闭 215 条）以及 **500 条 PR 更新**（待合并 342 条，合并/关闭 158 条）。尽管今日没有发布新的软件版本，项目底层架构正处于深度重构期。核心关注点集中在运行时的 SQLite 数据库迁移、ACP（智能体通信协议）会话稳定性的全面修复，以及多渠道（Telegram、Discord、飞书）的回归问题排查。整体来看，项目处于“高迭代、修内功、稳架构”的健康状态。

## 2. 版本发布
**今日无新版本发布。**
（注：当前项目主干主要围绕 `2026.5.5` 及后续版本的核心重构进行大量 PR 提交，尚未冻结发布版本。）

## 3. 项目进展
今日的代码库迎来了大量底层架构改进和关键 Bug 修复，最核心的进展包括：

- **运行时状态全面迁移至 SQLite** ([PR #78595](https://github.com/openclaw/openclaw/pull/78595)): 这是一个极其庞大的重构 PR（标记为 size: XL），旨在将 OpenClaw 从分散的 JSON、JSONL 和锁文件等存储模式，迁移到统一的、强类型的 SQLite 存储模型。这将为后续的高并发和状态管理奠定坚实基础。
- **包管理器升级至 pnpm 11** ([PR #79414](https://github.com/openclaw/openclaw/pull/79414)): 将整个工作空间的依赖管理升级到 pnpm 11，现代化工程链路。
- **ACP (Agent Communication Protocol) 稳定性大幅增强**：今日合入了多个针对 ACP 的修复，包括热恢复会话 ([PR #79541](https://github.com/openclaw/openclaw/pull/79541))、持久化 Token 使用量 ([PR #79540](https://github.com/openclaw/openclaw/pull/79540))、流式思考事件可见性修复 ([PR #79536](https://github.com/openclaw/openclaw/pull/79536)) 等。
- **Codex 子智能体深度集成** ([PR #79512](https://github.com/openclaw/openclaw/pull/79512), [PR #79518](https://github.com/openclaw/openclaw/pull/79518)): 优化了 Codex 原生子智能体的生命周期追踪，并优先使用 OpenClaw 的 `sessions_spawn` 进行任务委派。
- **中文本地化与安装向导完善** ([PR #79175](https://github.com/openclaw/openclaw/pull/79175)): 修复了简体/繁体中文词库的不准确翻译，并为 CLI 安装向导添加了完整的中文支持。

## 4. 社区热点
今日社区讨论最热烈的问题反映了多渠道接入和配置管理方面的挑战：

- **核心工具链异常丢失** ([Issue #34810](https://github.com/openclaw/openclaw/issues/34810), 👍9, 评论 29): 一位用户报告 OpenClaw 突然失去了对文件系统和系统命令（exec/read/write）的操作能力。此问题引发了大量讨论，涉及沙箱环境配置和权限丢失。
- **Discord 网关挂起深水区排查** ([Issue #77668](https://github.com/openclaw/openclaw/issues/77668), 评论 21): macOS 上 Discord 网关在重启后静默挂起。开发者通过原始 WebSocket 测试将故障定位到 Carbon Client 生命周期，体现了社区极客的深度排查能力。
- **`openclaw doctor` 惊天“反向升级”Bug** ([Issue #78407](https://github.com/openclaw/openclaw/issues/78407), 评论 19): 自动修复工具在更新版本时，错误地将 `openai-codex/*` 模型重写为 `openai/*`，导致 ChatGPT-OAuth 用户被直接锁定。目前已有对应的修复 PR ([PR #79494](https://github.com/openclaw/openclaw/pull/79494))。
- **深度用户的11项平台缺口总结** ([Issue #65824](https://github.com/openclaw/openclaw/issues/65824), 评论 15): 一位高强度使用用户提交了经过审计的平台功能请求合集，涵盖工作流、安全性与自动化等方面的进阶需求。

## 5. Bug 与稳定性
今日报告了大量行为异常和回归 Bug，反映出近期高频重构带来的短期不稳定性：

### 🔴 严重
- **Google Gemini 主会话全面挂起** ([Issue #78502](https://github.com/openclaw/openclaw/issues/78502)): Gemini 3.1 Pro 和 2.5 Pro 在主会话中挂起/超时，但直接 API 和子智能体调用正常。涉及底层事件循环阻塞。
- **网关因看门狗频繁重启** ([Issue #78601](https://github.com/openclaw/openclaw/issues/78601)): 事件循环延迟高达 23 秒（占用率 98%），触发网关自身的存活性探针导致不断重启。
- **子智能体负载导致 WhatsApp 断连与网关失稳** ([Issue #76315](https://github.com/openclaw/openclaw/issues/76315)): Linux 环境下，高强度的嵌入式子智能体运行导致 WhatsApp 408 断连和事件循环停滞。

### 🟡 中等
- **飞书群聊@机器人无响应** ([Issue #78949](https://github.com/openclaw/openclaw/issues/78949)): 机器人收到消息但 AI 回复无法发出（已有修复验证）。
- **模型白名单静默破坏定时任务** ([Issue #78000](https://github.com/openclaw/openclaw/issues/78000)): 升级后，使用 `claude-haiku-4-5` 的定时任务被白名单拦截。
- **Claude Opus 4.7 返回空响应** ([Issue #79492](https://github.com/openclaw/openclaw/issues/79492)): Agent 运行时调用 Opus 4.7 持续失败，但直接 CLI 运行正常。
- **Telegram DM 路由失效** ([Issue #79455](https://github.com/openclaw/openclaw/issues/79455)): Telegram 私信 DM 的 topic 路由参数变更导致机器人无法回复。
- **WebUI 历史记录消失** ([Issue #77374](https://github.com/openclaw/openclaw/issues/77374)): 在控制台 UI 中，发送新消息会导致上一条 Assistant 回复在界面上消失。

## 6. 功能请求与路线图信号
社区正在推动项目向更细粒度的控制和多模态发展，以下功能需求值得路线图关注：

- **直接执行模式的定时任务** ([Issue #18160](https://github.com/openclaw/openclaw/issues/18160), 👍9): 呼吁不需要 LLM 介入的纯脚本级 Cron Job，以降低 API 成本和超时风险。
- **Slack Block Kit 富文本支持** ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602)): 使 Agent 能够在 Slack 中发送按钮、卡片等结构化交互信息。
- **Webhook 多轮会话支持** ([Issue #11665](https://github.com/openclaw/openclaw/issues/11665)): 修复目前 Webhook hook 无法按设计通过 `sessionKey` 保持多轮会话上下文的问题。
- **Matrix 语音消息接收** ([Issue #78016](https://github.com/openclaw/openclaw/issues/78016)): 拓展除了 Telegram/WhatsApp 之外的语音多模态输入能力。
- **基于能力的权限模型** ([Issue #12678](https://github.com/openclaw/openclaw/issues/12678)): 为 Skills 和工具引入默认拒绝的高危操作访问控制。

## 7. 用户反馈摘要
从近期的 Issue 提炼，用户的真实痛点主要集中在以下几点：
1. **升级带来的破坏性变更**：用户对 `2026.5.4` 和 `2026.5.5` 版本升级导致的模型名重写 ([Issue #78407](https://github.com/openclaw/openclaw/issues/78407)) 和白名单阻断 ([Issue #78000](https://github.com/openclaw/openclaw/issues/78000)) 感到沮丧，期望 `openclaw doctor` 和升级脚本能够更加保守。
2. **多智能体架构的脆弱性**：随着 `sessions_spawn` 和子智能体的广泛使用，主网关在负载下的稳定性（如事件循环阻塞）成为进阶用户的核心痛点。
3. **沙箱与文件权限交互差**：在沙箱模式下，文件权限被限制为 `0o600` 导致媒体上传静默失败 ([PR #79528](https://github.com/openclaw/openclaw/pull/79528))，暴露了系统在不同 OS 环境下的边界测试不足。

## 8. 待处理积压
以下重要的高关注度 Issue 或 PR 长期处于等待状态，建议维护团队关注：

- **WebUI 代理消息分发失效** ([Issue #77908](https://github.com/openclaw/openclaw/issues/77908)): 非 main agent 的回复无法送回 Telegram/Discord，已关闭但可能需要长期监控。
- **`memoryFlush` 触发不可靠** ([Issue #12590](https://github.com/openclaw/openclaw/issues/12590)): 自动压缩时内存写入逻辑隔次触发的问题依然悬而未决。
- **Tool Schema 巨量 Token 消耗** ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785)): 每次会话固定消耗约 3500 tokens 用于工具的 JSON Schema，这在长对话中成为了不可忽视的成本，目前尚无明确的优化 PR。

---

## 横向生态对比

以下是基于 2026 年 5 月 9 日各大开源项目社区动态的横向对比与生态分析报告：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“架构深水区重构”与“多模态/多渠道业务扩张”并行的关键演进期**。项目底座正在从早期的单体脚本和简单的 JSON 文件管理，全面向基于数据库和容器化的高可用企业级架构迁移。同时，行业对本地化/边缘端部署的呼声极高，倒逼项目在云端大模型与本地小模型之间建立更灵活的路由与混合计算能力。

### 2. 各项目活跃度对比
*(统计周期：过去 24 小时内的 GitHub 交互数据)*

| 项目名称 | Issue 动态 | PR 动态 | 发版情况 | 活跃度/健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (活跃285/关215) | 500 (待合342/合关158) | 无 (主干重构中) | 🔥 极高。社区规模庞大，处于高频重构与修内功阶段。 |
| **Hermes Agent** | 49 新增/活跃 | 44 待合并，6 合并 | 无 | 🔥 极高。社区讨论热度高，正经历多平台适配阵痛。 |
| **ZeroClaw** | 15 新增/活跃 | 48 (待合36，合关12) | **v0.7.5** 正式版 | 🔥 极高。正处于架构切核与桌面端体验完善期。 |
| **IronClaw** | 11 更新 | 45 (待合20，合关多) | 无 (筹备 0.28.0) | 🔥 极高。核心团队重构执行力极强，合码效率高。 |
| **CoPaw** | 36 (活跃20/关16) | 36 (待合15/合关21) | v1.1.6-beta.1 | 🟢 高。前端性能与多渠道同步是当前主线。 |
| **PicoClaw** | 20 (活跃6/关14) | 44 (待合26/合关18) | Nightly 测试版 | 🟢 高。Issue 闭环率极高，社区向心力强，偏向端侧。 |
| **LobsterAI** | 2 新增 | 29 (合关27) | 无 (分支测试中) | 🟢 高。UI/UX 打磨期，PR 高度集中在发布分支。 |
| **NanoClaw** | 5 更新 | 17 (待合15/合关2) | 无 | 🟡 中高。主干构建受阻，亟待核心 PR 合并解冻。 |
| **NanoBot** | 10 更新 | 22 (待合8/合关14) | 无 | 🟡 中高。核心机制（如死循环防御）落地，代码质量上升。 |
| **Moltis** | 0 新增 | 5 (待合3/合关2) | 20260508.01 | 🟡 中等。稳健迭代，静待大型重构 Feature 合并。 |
| **NullClaw** | 0 新增 | 5 (合关4) | 无 | 🟢 平稳。基建与协议适配期，零 Bug 报告。 |
| **ZeptoClaw** | 0 新增 | 1 (待合) | 无 | ⚪ 低频。处于提示词等底层逻辑优化期。 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 休眠。过去24小时无动态。 |

### 3. OpenClaw 在生态中的定位
*   **社区规模与体量绝对领先**：OpenClaw 以单日近千条（Issue+PR）的交互量级稳居生态头部，是真正的“社区枢纽型”项目。
*   **技术底座最深厚**：相较于其他项目还在解决基础的渠道适配，OpenClaw 已经率先进入了强类型的数据库底层运行时（全面迁移至 SQLite），并深度整合了 ACP（智能体通信协议）和 Codex 子智能体调度，具备成为“AI 助手界操作系统”的潜质。
*   **痛点与挑战**：作为头部项目，它正承受着“破坏性变更”带来的最大反噬（如 `openclaw doctor` 的反向升级 Bug），亟需在快速重构与向下兼容之间找到平衡。

### 4. 共同关注的技术方向
从各项目的 PR 和 Issue 中，涌现出以下明确的技术共振：
*   **本地模型与路由机制优化** (OpenClaw, Hermes, PicoClaw, ZeroClaw)：用户强烈要求改善本地模型（Ollama/vLLM/Llama.cpp）的接入体验。痛点包括静默降级到云端、本地路径解析错误以及本地端点的连接超时。
*   **容器化与数据库迁移** (OpenClaw, NanoClaw, IronClaw)：生态正在放弃零散的 JSON 文件，转而采用 SQLite (OpenClaw) 或将配置迁移至数据库 (NanoClaw) 并支持 K8s 编排，以应对高并发和多租户需求。
*   **智能体执行死循环与上下文断裂** (NanoBot, CoPaw, IronClaw)：由于 LLM 的幻觉或重复推理，多项目（NanoBot、CoPaw）报告了工具调用的无限死循环问题。同时，强制中止 Agent 后导致的“上下文失忆”也是共性痛点。
*   **基础设施协议标准化** (NullClaw, Moltis, OpenClaw)：ACP (Agent Client Protocol) 等通信协议正被广泛集成，项目正从单一的“聊天机器人”向支持多轮会话、外部 Agent 调度（如 Codex, Claude Code 深度集成）的控制中枢演进。

### 5. 差异化定位分析
*   **全栈中枢型**：**OpenClaw, Hermes Agent**。追求全平台渠道接入（TG/Discord/Slack/企微等）、极强的扩展性，适合极客和开发者自建全能中控。
*   **端侧与轻量型 (Edge-first)**：**PicoClaw, ZeptoClaw**。高度关注 Android/Termux、树莓派等资源受限环境，对本地模型（如 LM Studio）的开箱即用需求强烈。
*   **企业级多租户型**：**IronClaw, ZeroClaw**。凭借其强依赖的数据库架构和严苛的多工作区隔离（如修复跨租户 SSE 泄漏），目标直指企业级私有化部署和桌面级原生应用。
*   **体验与场景驱动型**：**LobsterAI, CoPaw, NanoBot, Moltis**。在 WebUI 打磨、富文本渲染（引入 CodeMirror 6）、语音实时交互等特定场景或前端表现上更为细腻，注重 C 端用户的开箱即用体验。

### 6. 社区热度与成熟度
*   **快速迭代扩张期 (高热度，多阵痛)**：**OpenClaw, Hermes, CoPaw**。这三个项目社区极其活跃，但同时也被大量渠道 API 变更（如 TG API 10.0）和前端性能瓶颈（如 WebUI 巨卡、无限重渲染）所困扰，处于“边修边跑”的状态。
*   **深度架构重构期 (中热度，蓄势待发)**：**IronClaw, NanoClaw, ZeroClaw**。代码层面变动剧烈（如 IronClaw 的 Reborn 架构，ZeroClaw 的配置基座重塑），甚至面临 CI 流水线阻断或构建失败，但都是在为下一次大版本（如 v0.8.0）做底层铺垫。
*   **质量巩固与打磨期 (稳健，体验优先)**：**LobsterAI, NanoBot, Moltis, NullClaw**。主要精力放在解决死循环、完善 UI 骨架屏、补充开发文档上，整体代码库健康度向好。

### 7. 值得关注的趋势信号
1.  **“本地大脑”与混合路由成为刚需**：重度用户对 API 费用和延迟极其敏感。开发者应当考虑在架构中内置“意图识别与路由分流”机制（如 Hermes 讨论的按需专家模型升级），日常闲聊走本地轻量模型，复杂 coding 走云端大模型。
2.  **桌面端正在“复活”，RPA 趋势明显**：依托 Tauri 等现代跨端框架，AI 助手正从浏览器退回到系统底层。如 ZeroClaw 开始引入系统级截屏和点击控制，这意味着开源 AI 助手正加速具备类似 Computer Use 的本地自动化能力。
3.  **Agent 自愈与“停止”机制亟待标准化**：当前各项目的用户对于“AI 失控无法停止”和“强行停止后丢失记忆”感到极度沮丧。设计优雅的并发门控、上下文断点快照以及安全重置指令，将是下一波 AI 助手架构设计的核心考点。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 5 月 9 日 NanoBot (github.com/HKUDS/nanobot) 项目动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-09)

## 1. 今日速览
过去 24 小时内，NanoBot 项目保持着**非常高的活跃度与良好的健康状态**。社区共产生了 10 条 Issue 更新（6 新开/活跃，4 关闭）以及高达 22 条 PR 更新（8 待合并，14 已合并/关闭）。项目当前的重点明显聚焦于**提升系统稳定性（解决 Agent 死循环与内存崩溃问题）**以及**完善多渠道（飞书、微信、WebSocket）的边界场景支持**。核心维护者与社区贡献者的代码合入效率极高，项目正在稳步向前迭代。今日无新版本发布。

## 2. 版本发布
* **最新 Releases**: 无。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，涵盖了 WebUI 重构、核心 Bug 修复以及 Agent 安全机制的增强，大幅提升了项目的鲁棒性：

* **WebUI 与配置体验重构**：PR [#3703](https://github.com/HKUDS/nanobot/pull/3703) 合并，重新设计了 WebUI 设置侧边栏，并引入了 BYOK (Bring Your Own Key) 供应商管理视图，极大改善了用户的初始配置体验。
* **Agent 死循环防御机制落地**：PR [#3701](https://github.com/HKUDS/nanobot/pull/3701) 和 [#3702](https://github.com/HKUDS/nanobot/pull/3702) 相继合并。前者为单轮对话中的重复本地工具调用添加了去重保护，后者增加了可配置的循环升级（escalation）中断策略，彻底解决了 LLM 陷入无限推理死循环的痛点。
* **流媒体与内容生成支持**：PR [#3695](https://github.com/HKUDS/nanobot/pull/3695) 合并，新增了一流的图像生成工具及 WebUI 交互模式。
* **多渠道与系统级 Bug 修复**：
  * **飞书**：PR [#3704](https://github.com/HKUDS/nanobot/pull/3704) 修复了在群组 Topic 中发送多文件时，消息串流到外部的严重 Bug。
  * **CLI/Windows**：PR [#3697](https://github.com/HKUDS/nanobot/pull/3697) 修复了 Windows 下输入 Emoji 导致 `json.dumps()` 崩溃的 Surrogate 代理对字符问题。
  * **内存**：PR [#3687](https://github.com/HKUDS/nanobot/pull/3687) 修复了重放窗口隐藏导致的历史记录合并丢失问题。
* **接入向导修复**：PR [#3690](https://github.com/HKUDS/nanobot/pull/3690) 与 [#3691](https://github.com/HKUDS/nanobot/pull/3691) 修复了初始化向导无法输入空字符串的交互缺陷。

## 4. 社区热点
今日社区讨论的焦点集中在**Agent 的自主控制权与上下文记忆**上：
* **Issue [#3650](https://github.com/HKUDS/nanobot/pull/3650)**（👍 0，评论 3）：用户强烈希望能够自定义机器人的名称和图标，以打造个性化的 Agent。该 Issue 已被打上 `good first issue` 标签，有望吸引开源新手参与。
* **Issue [#3652](https://github.com/HKUDS/nanobot/pull/3652)**（评论 3）：关于是否应该允许用户完全禁用 "Dream"（自主思考/记忆整理）功能的讨论，反映了高级用户对 Agent 后台行为的敏感度。
* **Issue [#3689](https://github.com/HKUDS/nanobot/pull/3689)**（评论 0）：用户反馈打断正在死循环的 Agent 时，它会丢失上一轮的聊天记录（上下文断裂）。这直接触及了 Agent 长短期记忆管理的痛点。

## 5. Bug 与稳定性
今日报告并处理了多个影响系统稳定性的关键 Bug：

* **🚨 严重 - Agent 无限死循环**：Issue [#3699](https://github.com/HKUDS/nanobot/pull/3699) 指出本地工具调用缺乏幂等保护导致死循环。**状态：已修复**（通过 PR #3701 和 #3702 解决）。
* **🚨 严重 - 飞书群消息错乱**：Issue [#3694](https://github.com/HKUDS/nanobot/pull/3694) 报告飞书 Topic 隔离失效，文件错发到主群。**状态：已修复**（通过 PR #3704 解决）。
* **⚠️ 中等 - 语音转录配置歧义**：Issue [#3637](https://github.com/HKUDS/nanobot/pull/3637) 指出 Groq 语音转录的配置项不透明，极易导致无效设置。**状态：待修复**。
* **⚠️ 中等 - 打断操作导致上下文丢失**：Issue [#3689](https://github.com/HKUDS/nanobot/pull/3689) 指出强行中断 Agent 任务会丢失当前会话记忆。**状态：待修复**。
* **💡 低危 - 微信静默丢消息**：PR [#3684](https://github.com/HKUDS/nanobot/pull/3684) 正在着手修复微信通道中由于 Token 过期或异常被吞没导致的消息静默丢失问题。

## 6. 功能请求与路线图信号
从当前的 PR 和 Issue 动态来看，项目下一阶段的功能演进将集中在以下几个方向：

* **模型路由与预设管理**：PR [#3696](https://github.com/HKUDS/nanobot/pull/3696) 引入了 `ModelPresetConfig`，旨在支持命名模型预设和故障自动转移。这是向高可用性生产部署迈进的重要信号。
* **SSE 流式工具事件注入**：Issue [#3698](https://github.com/HKUDS/nanobot/pull/3698) 建议在 API Server 的流式响应中注入 Tool 的 Progress 事件。这表明社区正在将 NanoBot 作为后端基础设施与其他前端框架（如 hermes-agent）集成。
* **后台任务的集中管控**：PR [#3693](https://github.com/HKUDS/nanobot/pull/3693) 试图统一 LLM 的并发门控，以解决 Heartbeat、Dream 等后台任务与用户请求抢占资源导致 Ollama/vLLM 报错的问题。

## 7. 用户反馈摘要
通过分析今日的 Issue，提炼出真实用户的典型使用反馈：
* **真实痛点**：在执行自动化测试等长任务时，由于 Prompt 触发了 LLM 的重复推理，用户不得不手动打断，但打断后 Agent 沦为“失忆”状态（来源 [#3689](https://github.com/HKUDS/nanobot/pull/3689)）。
* **企业级应用场景**：用户正在将 NanoBot 深度接入企业协作流。例如在飞书群中批量下达“处理多个文件”的任务，这暴露了当前 Topic 强制隔离机制不够灵活的问题（来源 [#3692](https://github.com/HKUDS/nanobot/pull/3692)）。
* **API 集成诉求**：开发者希望获取比单纯文本流式输出更细粒度的 Event，以便在前端渲染 Tool 的加载和调用状态（来源 [#3698](https://github.com/HKUDS/nanobot/pull/3698)）。

## 8. 待处理积压
* **长期未决的跨 Bot 联动需求**：Issue [#1412](https://github.com/HKUDS/nanobot/pull/1412)（创建于 2026-03-02，带 👍 1）请求支持与 HomeAssistant 等其他 Bot 的联动通知。该 Issue 已沉默近两个月，建议维护者评估是否纳入 Roadmap 或给出替代方案。
* **需要 Review 的核心功能 PR**：PR [#3684](https://github.com/HKUDS/nanobot/pull/3684)（微信静默消息丢失修复）和 PR [#3696](https://github.com/HKUDS/nanobot/pull/3696)（模型预设）目前处于 Open 状态，对社区有较高价值，建议优先排期 Code Review。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-09)

## 1. 今日速览
Hermes Agent 今日保持着**极高的社区活跃度与开发推进速度**。在过去 24 小时内，项目迎来了 49 条新增/活跃的 Issue 和 44 条待合并的 Pull Request，社区参与热情高涨。尽管没有发布新版本，但合并的 PR 主要聚焦于扫除 CI 积压、完善 Windows 原生支持和修复关键启动项，为下一次大版本发布打下了坚实基础。

当前社区焦点呈现出明显的**多平台适配阵痛**：随着 Telegram Bot API 10.0 的发布以及钉钉、Teams 等企业通讯平台的接入，相关的网络通信、Session 管理与流式消息 Bug 频发。此外，本地化部署（如 Ollama、vLLM）与云端的配置冲突问题也成为了用户反馈的重灾区。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 6 个 PR 被合并/关闭，主要由核心开发者 @teknium1 推进，重点在于清理技术债务和改善跨平台体验：

*   **解除 CI 阻塞**：[PR #22098](https://github.com/NousResearch/hermes-agent/pull/22098) 删除了 50 个陈旧且损坏的测试，成功让主分支的 CI 恢复绿灯状态，大幅提升了后续代码合并的效率。
*   **修复关键启动失败问题**：[PR #22091](https://github.com/NousResearch/hermes-agent/pull/22091) 修复了在部分更新过程中因缺失 `hermes_bootstrap` 导致整个 Agent "变砖"（无法启动）的严重问题。
*   **完善 Windows 原生支持**：[PR #22099](https://github.com/NousResearch/hermes-agent/pull/22099) 和 [PR #22089](https://github.com/NousResearch/hermes-agent/pull/22089) 分别在安装向导中增加了 Windows 计划任务的网关配置，并更新了全面的 Windows 部署文档，标志着对 Windows 的支持已达到一等公民级别。
*   **加速系统更新**：[PR #22101](https://github.com/NousResearch/hermes-agent/pull/22101) 将网关在执行完优雅退出后的重启等待时间从约 60 秒压缩至 5 秒，大幅优化了系统更新的用户体验。

## 4. 社区热点
今日社区讨论最激烈的问题集中在**核心逻辑、多平台网关与配置隔离**上：

*   **[Issue #20249](https://github.com/NousResearch/hermes-agent/issues/20249) (👍0, 评论 7)**：用户提议引入“按需专家模型升级”功能。即在日常对话使用廉价快速的 Flash 模型，当遇到复杂代码调试或深度推理时，系统自动在当前 turn 切换至 Opus 等高级模型。这反映了重度用户对“成本控制与极致性能兼顾”的强烈诉求。
*   **[Issue #5151](https://github.com/NousResearch/hermes-agent/issues/5151) (👍8, 评论 4)**：流式输出重试机制导致状态消息堆积，严重干扰了用户在终端的阅读体验。
*   **[Issue #21981](https://github.com/NousResearch/hermes-agent/issues/21981) (👍5, 评论 3) & [Issue #22022](https://github.com/NousResearch/hermes-agent/issues/22022) (👍5, 评论 1)**：Telegram 平台的严重故障。特别是 API 10.0 更新后，私聊 Topic 模式下发消息丢失。考虑到 Hermes 广泛用于 Telegram 部署，该问题引起了较多关注。
*   **[Issue #10376](https://github.com/NousResearch/hermes-agent/issues/10376) (评论 1)**：多配置文件之间的隔离失败，`--clone` 操作会泄露历史记忆，引发了对数据隐私隔离架构的探讨。

## 5. Bug 与稳定性
今日报告了多个高优先级 (P1/P2) 的稳定性问题，部分问题严重影响用户体验：

**🔴 P1 级别 (严重阻断)**
*   **Telegram Topic 无响应**：[#22032](https://github.com/NousResearch/hermes-agent/issues/22032) - 与 API 10.0 变更有关，私聊无法回复。目前尚无对应修复 PR。
*   **网关模型回退**：[#12146](https://github.com/NousResearch/hermes-agent/issues/12146) - 即使在 `config.yaml` 中明确配置了本地 Ollama/vLLM，Agent 依然静默回退到 OpenRouter 路由，导致私有化部署失败。
*   **NFS 文件系统锁死**：[#22032](https://github.com/NousResearch/hermes-agent/issues/22032) - 当 `~/.hermes` 挂载在网络文件系统上时，SQLite 锁协议导致历史记录、恢复等基础功能全部失效。
*   **工具并发解析崩溃**：[#21937](https://github.com/NousResearch/hermes-agent/issues/21937) - `_priority_key` 解包错误导致工具并发调用时报 `ValueError`。

**🟠 P2 级别 (功能受损)**
*   **DeepSeek V4 Pro 记忆断层**：[#21946](https://github.com/NousResearch/hermes-agent/issues/21946) - 深度思考模式下，思考内容未持久化到 session，导致多轮对话直接报 HTTP 400。**已提交修复尝试**：[PR #22097](https://github.com/NousResearch/hermes-agent/pull/22097) 等正在处理视觉与回退提供者相关的持久化问题。
*   **Slack 上下文丢失**：[#15421](https://github.com/NousResearch/hermes-agent/issues/15421) - 未开启线程回复时，顶层消息相互隔离，无法形成连续会话。
*   **TUI 换行符识别异常**：[#18228](https://github.com/NousResearch/hermes-agent/issues/18228) - 终端的 Shift+Enter 发送 LF 被错误识别为直接提交。

## 6. 功能请求与路线图信号
结合今日提交的 PR 与 Issue，项目生态正在向**更深度的多模态、本地化与智能化**演进：

*   **混合云架构**：[Issue #21992](https://github.com/NousResearch/hermes-agent/issues/21992) 提出了“本地大脑”概念，即使用本地小模型负责意图识别与路由，结合云端大模型执行复杂任务。
*   **混合检索记忆引擎**：[PR #22075](https://github.com/NousResearch/hermes-agent/pull/22075) 引入了基于 LanceDB 的混合记忆插件（向量检索 + BM25 + 交叉编码器重排），极有可能在下一版本成为默认记忆后端。
*   **无痕流式通信**：[PR #22093](https://github.com/NousResearch/hermes-agent/pull/22093) 适配了 Telegram Bot API 9.7+ 的 `sendMessageDraft` 特性，提供无“已编辑”标签的真流式体验。
*   **新兴平台支持**：用户正在要求接入 Nostr 网络（[Issue #22033](https://github.com/NousResearch/hermes-agent/issues/22033)），同时官方也收到了 Telemus 平台的适配器 PR（[PR #22094](https://github.com/NousResearch/hermes-agent/pull/22094)）。

## 7. 用户反馈摘要
从今天的 Issue 描述中，可以清晰地描绘出当前 Hermes 用户的典型痛点：

1.  **“透明代理”还不够透明**：用户在使用本地模型（vLLM/Ollama）时，对系统静默降级到云端 API 非常敏感（如 Issue #12146）。用户强烈要求在配置了本地端点时，绝不应该触发外部网络请求。
2.  **部署环境复杂性被低估**：包括对 NFS 共享存储的支持不完善（SQLite 锁）、Windows 下的环境变量覆盖导致版本降级（[Issue #22054](https://github.com/NousResearch/hermes-agent/issues/22054)），表明企业级部署场景面临的挑战越来越大。
3.  **多平台一致性体验欠缺**：Dashboard 的 WebSocket 无故断开（[Issue #21948](https://github.com/NousResearch/hermes-agent/issues/21948)）、Slack 会话不连贯、钉钉文件解析为空等，反映出 Gateway 层对各平台 API 规范的抽象封装仍需打磨。

## 8. 待处理积压
以下重要高优先级问题目前依然悬而未决或缺乏核心维护者的实质性响应，建议优先排查：

*   **[Issue #12146](https://github.com/NousResearch/hermes-agent/issues/12146)**：本地 Custom Provider 配置无效，被静默路由至 OpenRouter（P1，严重影响本地化私有部署用户）。
*   **[Issue #21937](https://github.com/NousResearch/hermes-agent/issues/21937)**：并发工具调用时的解包 ValueError（P1，高频调用时容易触发的系统崩溃）。
*   **[Issue #22071](https://github.com/NousResearch/hermes-agent/issues/22071)**：多达 29% 的 Session 因为强杀进程未能正确写入 `ended_at`，导致后台产生大量僵尸会话泄露。
*   **[PR #16225](https://github.com/NousResearch/hermes-agent/pull/16225)**：限制 API Server 暴露的模型列表（防止直接透传上游 Provider 目录），该 PR 已开启数日，是一个重要的安全与隐私保护改进，亟待 Review 合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project daily report for PicoClaw based on the provided data.

---

# PicoClaw 项目动态日报 (2026-05-09)

## 1. 今日速览
PicoClaw 在过去24小时内保持了**极高的活跃度与健康度**，展现出强大的社区向心力与核心团队的快速迭代能力。
- **开发节奏紧凑**：今日共有 44 个 PR 更新（其中 26 个待合并，18 个已合并/关闭），项目正在为下一个稳定版本进行密集的功能收敛和 Bug 修复。
- **社区响应迅速**：Issues 的关闭率高达 70%（20 条活跃中 14 条已关闭），表明维护者对社区反馈的响应非常及时。
- **生态持续扩展**：从多智能体交互、原生多模态（音频）到全平台多渠道（WhatsApp、Telegram、MQTT），项目正在快速补齐企业级与端侧智能体的基础设施。

## 2. 版本发布
今日发布了 **Nightly Build** 自动化测试版本：
- **版本号**：[v0.2.8-nightly.20260508.2834db13](https://github.com/sipeed/picoclaw/releases) (基于 `main` 分支)
- **说明**：包含了最新的代码提交，主要用于测试和反馈，**可能不稳定，请谨慎用于生产环境**。
- **变更范围**：基于 v0.2.8 以来的所有主线提交，涵盖了大量的流式输出、工具调用安全防护及渠道修复。

## 3. 项目进展
今日合并/关闭的核心 PR 极大地推动了项目在**渠道适配、模型兼容性及底层架构**上的演进：
- **新渠道支持落地**：[PR #2705](https://github.com/sipeed/picoclaw/pull/2705) 成功合并，PicoClaw 现正式支持 **MQTT 协议通道**，为 IoT 场景下的轻量级通信铺平了道路。
- **头部大模型兼容性修复**：[PR #2681](https://github.com/sipeed/picoclaw/pull/2681) 修复了在使用 Gemini 模型调用 MCP 工具时的 400 崩溃问题，引入了 Schema 清理机制。
- **核心安全性及架构修复**：
  - [PR #2655](https://github.com/sipeed/picoclaw/pull/2655) 恢复并加固了统一内核运行时的不变量，修复了单次执行语义和会话连续性相关的基础缺陷。
  - [PR #2522](https://github.com/sipeed/picoclaw/pull/2522) 修复了 OpenAI 兼容提供商的流式请求 Usage 统计问题。
- **开发体验提升**：[PR #2662](https://github.com/sipeed/picoclaw/pull/2662) 重新组织并统一了 Providers 文档，大幅降低了开发者的阅读成本。

## 4. 社区热点
以下是今日引发最多讨论或关注的议题，反映了社区的核心诉求：
- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28)** (👍 2, 评论 18)：关于 **LM Studio Easy Connect** 的历史性功能请求。由于 PicoClaw 在本地/边缘设备（如 Android）上的广泛使用，社区对免配置连接本地模型（如 LM Studio、Ollama）的需求极其强烈。
- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** (👍 2, 评论 10)：`exec` 工具的安全防御机制误杀问题。当前的相对路径正则校验过于粗暴，将正常的网络请求误判为目录穿越，这是高级玩家在工具调用时的主要痛点。
- **[Issue #2580](https://github.com/sipeed/picoclaw/issues/2580)** (👍 2, 评论 3)：**国内飞书用户生态诉求**。由于网络限制，国内用户强烈希望优化飞书插件，实现流式输出及状态展示，这标志着 PicoClaw 在国内企业级 IM 的渗透率正在上升。

## 5. Bug 与稳定性
今日报告了多个影响正常使用的 Bug，部分已处于修复状态（🔴 严重，🟡 中等，🟢 轻微）：
- 🟡 **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)** (👍 3)：OpenAI Codex OAuth 后端流式返回数据时，响应体为空。这是核心 Provider 层的解析 Bug，可能导致使用 ChatGPT 后端的用户完全无法对话。
- 🟡 **[Issue #2738](https://github.com/sipeed/picoclaw/issues/2738)**：升级至 v0.2.8 后，**图片识别功能完全失效**。多模态功能的回归问题，影响范围较广。
- 🟢 **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)**：`exec` 工具的误拦截（如 `wttr.in/Beijing`）。**（注：已有对应的修复 PR [PR #2826](https://github.com/sipeed/picoclaw/pull/2826) 提交，修复了相对路径解析逻辑）**。
- 🟢 **[Issue #2744](https://github.com/sipeed/picoclaw/issues/2744)**：Android v0.2.8 端 Tab 页数据无法加载的 UI 缺陷。

## 6. 功能请求与路线图信号
结合当前待合并的 PR，项目的下一阶段演进方向已经非常清晰：
- **多智能体协作**：[PR #2158](https://github.com/sipeed/picoclaw/pull/2158) 引入了多智能体发现机制，标志着 PicoClaw 正从单一 AI 助手向 **AI 智能体集群网络** 演进。
- **全双工多模态**：[PR #2626](https://github.com/sipeed/picoclaw/pull/2626) 及相关的语音队列修复 PR（[#2828](https://github.com/sipeed/picoclaw/pull/2828)）正在打通原生音频输入的闭环。
- **Web 搜索能力增强**：[PR #2763](https://github.com/sipeed/picoclaw/pull/2763) 提出了基于 Gemini 的网络搜索提供商，未来用户将可以在工具层灵活切换搜索源。

## 7. 用户反馈摘要
从真实的 Issues 互动中，可以提炼出以下典型用户画像及反馈：
1. **极客与硬件玩家**：PicoClaw 在 Android (Termux) 和 Raspberry Pi 上极具人气。用户 [duckida](https://github.com/sipeed/picoclaw/issues/2625) 在树莓派 Zero 2 上运行，请求预编译带有 WhatsApp 支持的 arm64 包；也有用户请求增加串口（UART）工具支持。
2. **追求轻量化的企业用户**：用户 [wowowowowowowowonojieba](https://github.com/sipeed/picoclaw/issues/2580) 强调“PicoClaw 的初衷就是轻量化”，希望在接入飞书时不给系统增加负担的前提下体验高级功能。
3. **MCP 生态依赖者**：高级用户频繁接入各种外部工具，对 `workspace` 目录的安全沙箱隔离（[Issue #2519](https://github.com/sipeed/picoclaw/issues/2519)）和 JSON Schema 的兼容性有严苛要求。

## 8. 待处理积压
以下重要 Issue/PR 暂未得到核心团队的实质性回复或合并推进，需要关注：
- **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)**：Codex OAuth 空响应问题，导致部分代理提供商不可用，已被标为 `stale`，亟待确认是否在 Nightly 版本中复现。
- **[Issue #2625](https://github.com/sipeed/picoclaw/issues/2625)**：树莓派预编译包缺少 WhatsApp 支持，属于较低优先级但社区确实存在的硬需求。
- **[PR #2645](https://github.com/sipeed/picoclaw/pull/2645)**：为 AWS Bedrock 提供原生的 `StreamingProvider` 支持，此 PR 已停留多日，是补齐企业级云厂商生态的重要一环，建议合并测试。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-05-09)

## 1. 今日速览
NanoClaw 项目在过去24小时内保持了**高度活跃**的开发状态。今日没有新版本发布，但代码库迎来了密集的提交和讨论，共有 17 个 PR 更新（其中 15 个待合并）和 5 个 Issue 更新（3 个已关闭）。项目重心明显向**容器运行时增强、安全性加固和数据库架构迁移**倾斜。多个核心贡献者同时提交了针对 Linux 环境兼容性、构建超时和系统配置的重要修复，显示出项目正积极应对生产环境（尤其是自托管和网络文件系统场景）中暴露的实际挑战。

---

## 2. 版本发布
**无新版本发布。** 
大量修复和架构改进型 PR 目前正处于待合并状态（详见第 3、5 节），预计在当前的构建错误修复和核心 PR 合并后，将迎来一次包含多项破坏性变更的版本迭代。

---

## 3. 项目进展
今日共有 **2 个 PR 被合并/关闭**，整体推进了用户体验和代码健壮性：
*   **CLI 架构确立**：关闭了 [PR #2350 `feat(cli): add ncl admin CLI`](https://github.com/qwibitai/nanoclaw/pull/2350)。该 PR 为项目引入了全新的管理命令行工具，支持通过 Unix socket 查询和修改中央数据库，标志着 NanoClaw 在可观测性和运维便捷性上迈出重要一步。
*   **文档/引导修复**：关闭了 [PR #2300 `setup: correct Slack member-ID card directions`](https://github.com/qwibitai/nanoclaw/pull/2300)。修复了 Slack 集成引导卡片中图标和按钮位置描述的错误，提升了新用户的上手体验。

---

## 4. 社区热点
今日的讨论焦点主要集中在**系统健壮性、自托管支持扩展以及构建阻塞**三个维度：
*   **企业级自托管诉求（Kubernetes 支持）**：由 netadmincmh-hash 提交的 [Issue #2354](https://github.com/qwibitai/nanoclaw/issues/2354) 提议使用 K8s Pods 替代本地 Docker 运行 Agent。这反映出社区对将 NanoClaw 投入大规模企业级部署的强烈意愿。
*   **敏感命令权限管控**：prasta1 提交的 [Issue #2341](https://github.com/qwibitai/nanoclaw/issues/2341) (已关闭) 指出 `/restart` 等核心控制指令缺乏严格的用户级鉴权。项目方迅速响应，表明安全防线的进一步完善已在推进中。
*   **主分支构建受阻**：[PR #2344](https://github.com/qwibitai/nanoclaw/pull/2344) 和 [PR #2339](https://github.com/qwibitai/nanoclaw/pull/2339) 均指出由于近期类型定义的更新（`RoutableAgentMessage` 接口变动），导致当前 `pnpm run build` 失败。这是目前亟待维护者合并阻断性问题的热点。

---

## 5. Bug 与稳定性
今日暴露的 Bug 集中在**生产环境监控、容器构建与权限挂载**方面：

*   🔴 **P0 级别：`main` 分支构建失败**
    *   状态：待合并 Fix
    *   描述：[PR #2344](https://github.com/qwibitai/nanoclaw/pull/2344) 指出由于 `in_reply_to` 等字段的必填化，导致当前主分支 TypeScript 构建报错。该问题可通过合并此 PR 或 [PR #2339](https://github.com/qwibitai/nanoclaw/pull/2339) 解决。
*   🟠 **P1 级别：Linux Root 环境下 Agent 启动死循环**
    *   状态：待合并 Fix
    *   描述：[PR #2353](https://github.com/qwibitai/nanoclaw/pull/2353) 修复了当主机以 Root 权限运行、且数据目录在网络文件系统时，由于 UID 映射导致的不可恢复的容器生成死循环。
*   🟠 **P1 级别：网络请求超时导致容器构建崩溃**
    *   状态：待合并 Fix
    *   描述：[PR #2352](https://github.com/qwibitai/nanoclaw/pull/2352) 将 `install_packages` 的构建超时时间从 5 分钟提升至 15 分钟，修复了慢速网络环境下的构建中断问题。
*   🟡 **P2 级别：系统监控与告警失灵**
    *   状态：已通过 Issue 确认
    *   描述：[Issue #2343](https://github.com/qwibitai/nanoclaw/issues/2343) (凭证丢失未触发警报) 和 [Issue #2342](https://github.com/qwibitai/nanoclaw/issues/2342) (网络看门狗进程自 5 月 1 日起停机)。

---

## 6. 功能请求与路线图信号
通过今日的 Issue 与 PR 动态，可以捕捉到项目演进的明确路线图信号：
1.  **数据层重构（数据库优先）**：[PR #2351](https://github.com/qwibitai/nanoclaw/pull/2351) 提议将容器配置从文件系统 (`container.json`) 迁移至数据库 (`container_configs` 表)。这是典型的平台化中台改造信号，将极大增强多节点部署的配置一致性。
2.  **多运行时支持（Docker -> K8s/Apple Container）**：配合今日的 [Issue #2354 (K8s 支持)](https://github.com/qwibitai/nanoclaw/issues/2354)，表明 NanoClaw 正试图脱离单一的本地 Docker 依赖，向更灵活的企业级容器编排靠拢。
3.  **角色与指令系统模块化**：[PR #2345](https://github.com/qwibitai/nanoclaw/pull/2345) 允许按组自动导入 `CLAUDE.role.md`，结合 [PR #1917](https://github.com/qwibitai/nanoclaw/pull/1917) 对 `@Andy` 触发器的重命名修复，暴露出项目正在构建一套多角色、多指令集的灵活 Agent 路由架构。

---

## 7. 用户反馈摘要
基于真实使用场景的反馈提炼：
*   **网络代理痛点**：[PR #2330](https://github.com/qwibitai/nanoclaw/pull/2330) 暴露出在使用 OneCLI 等仅支持 `CONNECT` 方法的网关时，axios 默认的代理行为会导致静默失败，这在企业内网隔离环境中极为痛苦。
*   **进程生命周期管理**：[Issue #2342](https://github.com/qwibitai/nanoclaw/issues/2342) 显示 OrbStack 的 Docker 宕机曾导致长达数天的监控盲区，反映出用户对“自愈能力”和更强有力进程守护机制的迫切需求。
*   **无用命令静默丢弃引发的困惑**：[PR #2346](https://github.com/qwibitai/nanoclaw/pull/2346) 修复了未知斜杠命令被静默吞没的问题，表明终端用户在面对无响应的 Bot 时会产生明显的挫败感。

---

## 8. 待处理积压
以下长期/高价值的 Issue 和 PR 需要维护团队关注：
*   🔴 **紧急：主分支构建阻断**：[PR #2344](https://github.com/qwibitai/nanoclaw/pull/2344) 和 [PR #2339](https://github.com/qwibitai/nanoclaw/pull/2339) 需尽快合并其一以修复 CI 流水线。
*   🟡 **长期悬挂的代码健壮性优化**：来自贡献者 boskodev790 在 4 月下旬提交的多个基础修复 PR 至今未获响应，建议维护者进行 Review 以防产生代码冲突：
    *   [PR #1916 守护数值类型环境变量防止 NaN](https://github.com/qwibitai/nanoclaw/pull/1916)
    *   [PR #1913 助手名称变更时的触发器联动重命名](https://github.com/qwibitai/nanoclaw/pull/1913)
    *   [PR #1912 容器无输出时的 fallback 解析空指针问题](https://github.com/qwibitai/nanoclaw/pull/1912)
*   🟡 **安全性存检**：针对 Telegram 控制权限的鉴权缺失问题，需确认是否正在内部推进或需要社区提供针对 [Issue #2340](https://github.com/qwibitai/nanoclaw/issues/2340) 的具体实现 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 项目 2026-05-09 动态日报：

# NullClaw 项目动态日报 (2026-05-09)

## 1. 今日速览
过去 24 小时，NullClaw 项目展现出**高度活跃且聚焦于基础设施建设**的开发状态。今日共有 5 个 Pull Request 发生状态变更，其中 4 个重要 PR 顺利合并，项目在 CI/CD 自动化、协议适配和文档完善方面取得了实质性进展。虽然未迎来新版本发布，且未观察到大量新的社区 Bug 反馈，但核心维护者正在积极为更规范的“Nightly”滚动发布以及底层协议接入铺路，项目整体健康度良好。

## 2. 版本发布
今日无新版本发布。不过，基于刚合并的 CI 相关 PR，预计项目即将具备常态化的 Nightly 预发布能力。

## 3. 项目进展
今日共关闭/合并 4 个 PR，极大推进了项目的工程化与可用性：

*   **支持原生 ACP (Agent Client Protocol) 适配**：维护者 @DonPrus 合并了 [PR #896](https://github.com/nullclaw/nullclaw/pull/896)。该 PR 在 `nullclaw` 主程序中新增了 `nullclaw acp` 命令，实现了基于 stdio 的 JSON-RPC 适配器。**意义**：标志着项目在支持 AI 智能体标准通信协议方面迈出重要一步，优化了多模态（文本/资源）处理和会话管理能力。
*   **完善 CI/CD 夜间构建机制**：@DonPrus 集中合并了两个关于发布流水线的 PR：
    *   [PR #898](https://github.com/nullclaw/nullclaw/pull/898)：强制计划中的 Nightly 构建传递 `force=true`，解决了因去重机制导致的日常构建跳过问题。
    *   [PR #899](https://github.com/nullclaw/nullclaw/pull/899)：正式启用 Nightly 预发布版本的自动发布功能。**意义**：未来社区和开发者可以更便捷地获取每日最新特性。
*   **补充 Zig 环境配置文档**：社区贡献者 @kunalk16 合并了 [PR #897](https://github.com/nullclaw/nullclaw/pull/897)，为 Debian 等系统补充了 Zig 的安装指南。

## 4. 社区热点
今日的讨论主要围绕环境配置展开，Issue [#820 [documentation] How to install Zig on Debian?](https://github.com/nullclaw/nullclaw/issues/820) 以 5 条评论成为今日焦点。
*   **背后诉求分析**：用户在部署 NullClaw 时，对非常规语言（Zig）的本地环境配置存在疑虑，特别是对“是否必须依赖 Docker”提出疑问。这表明项目虽然提供了容器化部署方案，但本地开发环境（特别是特定 Linux 发行版）的依赖说明仍有待强化。好消息是，该 Issue 已通过 PR #897 得到正式回应并关闭。

## 5. Bug 与稳定性
过去 24 小时内，未监测到新提交的严重 Bug、崩溃或回归问题报告。项目在当前的迭代中表现出较高的稳定性。

## 6. 功能请求与路线图信号
*   **数据治理层探索**：由 @sleep3r 提交的 [PR #885 feat(memory): Add NullClaw Data Governance Layer](https://github.com/nullclaw/nullclaw/pull/885) 目前处于 OPEN 状态。该 PR 旨在为 AI 记忆模块增加治理能力。考虑到其作为 Hackathon 参赛作品，如果被主团队合并，将意味着 NullClaw 在未来版本中会更加重视本地 AI 的数据安全、隐私或生命周期管理。

## 7. 用户反馈摘要
基于近期的 Issue 讨论，提炼出用户的真实痛点如下：
*   **环境依赖困惑**：用户对基于 Zig 构建的项目存在天然的配置门槛感（如 Issue #820），更倾向于有清晰的本地原生安装指引，而非完全绑定 Docker。
*   **生态兼容性期待**：通过底层 ACP 协议的接入（PR #896）可以看出，用户群体期望该 AI 助手能够与现有的智能体生态或标准协议（JSON-RPC）进行无缝对接，实现作为“个人 AI 助手”核心控件的潜力。

## 8. 待处理积压
目前处于 OPEN 状态的高价值待办：
*   **[PR #885] Add NullClaw Data Governance Layer**：链接 [PR #885](https://github.com/nullclaw/nullclaw/pull/885)。此 PR 自 5 月 4 日创建以来尚未合并，建议维护团队尽快对该特性进行代码审查与可行性评估，以推动项目在数据安全与智能体记忆管理方面的演进。

---
*分析师注：本报告数据截取自 GitHub NullClaw 官方仓库截至 2026-05-09 的 24 小时动态。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-05-09)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日处于**极高活跃度状态**，过去 24 小时内共产生 11 条 Issue 更新和高达 45 条 PR 更新。项目核心团队（serrrfirat, ilblackdragon 等）正在全力推进底层架构的大规模重构。从活动轨迹来看，当前开发重心明确分为两线：一是代号 **"Reborn"** 的智能体底层执行循环架构全面升级；二是针对多租户安全、跨渠道认证（Telegram/Slack）的稳定性修复。项目目前虽无新 Release 发布，但从 `chore: release` 的准备 PR 来看，主网版本（0.24.0 -> 0.28.0）的发布已箭在弦上。

---

## 2. 版本发布

今日无正式发版。但值得关注的是，CI 机器人已经提起了版本发布预演 PR [#3388](https://github.com/nearai/ironclaw/pull/3388)。
*   **预计更新范围**：`ironclaw_common` (0.4.1 -> 0.4.2)，核心 `ironclaw` 主网大幅跃升至 **0.28.0** (从 0.24.0)。
*   **潜在影响**：由于次要版本发生跨越式增长，通常意味着包含了大量新特性或架构调整。建议下游集成商密切关注后续正式 Release Note 中的 Breaking Changes 及迁移指南。

---

## 3. 项目进展

今日共有 **20 个 PR 被合并或关闭**，展现了核心团队极高的代码吞吐量。进展主要集中在以下两大支柱：

**支柱一：Reborn 架构重构（核心驱动层解耦）**
*   **凭据与安全基座**：合并了持久化凭据存储 [#3401](https://github.com/nearai/ironclaw/pull/3401) 及其加密负载实现 [#3408](https://github.com/nearai/ironclaw/pull/3408) 和 [#3335](https://github.com/nearai/ironclaw/pull/3335)，为多租户环境下的密钥安全性打下基础。
*   **执行循环支持**：[#3391](https://github.com/nearai/ironclaw/pull/3391) 成功合入，引入了 `ironclaw_loop_support` MVP，定义了全新的上下文、模型和转录端口适配器。
*   **网关与注册表**：[#3403](https://github.com/nearai/ironclaw/pull/3403) 增加了基于线程的生产级模型网关；[#3405](https://github.com/nearai/ironclaw/pull/3405) 引入了具体的 loop-driver 注册表，标志着 Reborn 架构的核心组件已初步成型。

**支柱二：多租户隔离与关键安全修复**
*   **多租户隔离**：[#3374](https://github.com/nearai/ironclaw/pull/3374) 修复了严重的多租户工作区内存隔离问题，将私有工作区重新绑定到会话用户，有效防止了越权访问。
*   **SSE/WS 跨租户泄露**：[#3390](https://github.com/nearai/ironclaw/pull/3390) 解决了 WebSocket/SSE 在发送状态事件时的跨租户数据泄漏黑盒问题。

---

## 4. 社区热点

今日讨论热度最高、架构影响最深远的议题全部集中在 **Reborn 架构规划** 上，主要由核心架构师 serrrfirat 推进：

*   🔥 **集成测试方案大讨论**：Issue [#3067](https://github.com/nearai/ironclaw/issues/3067)（+32条评论）。为了确保 Reborn 架构在公开入口处的可靠性，社区与团队花费大量精力讨论了垂直切面集成测试套件的引入方案，这表明团队对此次重构的质量保障极其重视。
*   🏗️ **核心门面与契约定义**：Issue [#3016](https://github.com/nearai/ironclaw/issues/3016)（+11条评论）讨论 `AgentLoopHost` 门面模式；Issue [#3193](https://github.com/nearai/ironclaw/issues/3193)（+5条评论）确认了会话绑定和线程契约的语义切片。这些密集讨论揭示了项目正在为未来的高并发、高可插拔智能体架构制定严格的规范。

---

## 5. Bug 与稳定性

今日发现了几个关键的阻塞性缺陷，部分已被紧急修复：

*   🔴 **[P0] Nightly E2E 测试失败**：Issue [#3323](https://github.com/nearai/ironclaw/issues/3323)。夜间定时端到端测试全线失败（涉及 v2-engine 等）。此问题目前尚未标记为已解决，可能表明主分支存在不稳定性，需要核心团队紧急干预。
*   🟠 **[P1] 跨租户事件越权泄漏**：Issue 及 PR [#3390](https://github.com/nearai/ironclaw/pull/3390) 披露。心跳、沙箱作业等后台进程曾将状态事件广播给所有连接的 SSE/WS 客户端。**状态：已提交修复 PR，待合并**。
*   🟡 **[P2] Telegram Pairing 流程阻断**：PR [#3381](https://github.com/nearai/ironclaw/pull/3381) 修复了 Telegram 认证中的三个级联 Bug（#3317, #3319, #3320），导致用户在 OAuth 验证后对话卡死。
*   🟡 **[P2] Missions 卡死**：PR [#3366](https://github.com/nearai/ironclaw/pull/3366) 修复了任务在 OAuth 审批门通过后，依旧保持暂停状态无法自动恢复的阻塞问题。

---

## 6. 功能请求与路线图信号

根据今日开放的 Issues 和外部贡献者的 PR，可以清晰地捕捉到产品下一阶段的演进方向：

*   **多渠道无缝集成**：
    *   社区贡献者 PierreLeGuen 提交了 PR [#3396](https://github.com/nearai/ironclaw/pull/3396)，增加了 `pairing_approve` 工具，允许用户直接通过 IronClaw 聊天框输入代码绑定 Slack，极大地简化了跨平台账户绑定的 UX。
*   **富媒体处理能力增强**：
    *   PR [#3065](https://github.com/nearai/ironclaw/pull/3065) 提出持久化内联图像构件，允许图像编辑工具直接复用历史图片路径。
    *   PR [#3331](https://github.com/nearai/ironclaw/pull/3331) 完善了非图像附件的 Web UI 交互和持久化逻辑。
    *   PR [#3004](https://github.com/nearai/ironclaw/pull/3004) 试图解耦图像生成工具的配置，使其不再挤占 LLM 聊天通道的配置。
*   **Reborn 远期路线图**：Issues [#3409](https://github.com/nearai/ironclaw/issues/3409)、[#3407](https://github.com/nearai/ironclaw/issues/3407)、[#3406](https://github.com/nearai/ironclaw/issues/3406) 提出了主机级提示词打包、文本驱动工厂、状态暂存存储等前瞻性设计。

---

## 7. 用户反馈摘要

从具体的 Issue 反馈来看，除了复杂的后端架构诉求外，终端用户对 UI 呈现细节极其敏感：

*   **对话标题未自动生成**：Issue [#3385](https://github.com/nearai/ironclaw/issues/3385) 由用户 sunglow666 提出。用户发现侧边栏的对话标题是生硬地截取用户输入的第一段文本，而非采用 LLM 进行语义化概括。这表明用户对 AI 助手的交互精细化要求正在提高，基础的“摘要标题”功能目前缺失。
*   **MCP 连接健壮性不足**：PR [#3006](https://github.com/nearai/ironclaw/pull/3006) 提到，在容器启动阶段如果 MCP 服务器因鉴权时序问题拒绝连接，会导致工具一直处于失效状态，只能依靠手动重连。这说明在生产环境的复杂网络和启动编排下，工具层的自愈重试能力是刚需。

---

## 8. 待处理积压

*   ⚠️ **MCP 重试机制悬而未决**：[#3006](https://github.com/nearai/ironclaw/pull/3006) 暴露了 MCP 启动重试问题，该 PR 已活跃一天但尚未合并，鉴于其能显著提升系统自愈能力，建议维护者优先 Review。
*   ⚠️ **E2E 监控警报**：[#3323](https://github.com/nearai/ironclaw/issues/3323) 展现的 Nightly E2E 失败需要立即排查，以免在即将发布 0.28.0 大版本时带入严重的回归缺陷。
*   ⚠️ **大型重构 PR 积压**：目前仍有 25 个待合并的 PR，其中包括像 [#3366](https://github.com/nearai/ironclaw/pull/3366)、[#3381](https://github.com/nearai/ironclaw/pull/3381) 这样涉及面广的核心修复，建议团队尽快完成测试闭环，防止长期分支带来的冲突风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 2026 年 5 月 9 日 LobsterAI 项目动态日报。

---

# 📡 LobsterAI 项目动态日报 (2026-05-09)

**分析师洞察**：LobsterAI 今日呈现出极高的研发活跃度与清晰的发版节奏。项目正处于 `release/2026.05.08` 分支的密集测试与代码合入阶段，重点关注 UI 体验优化与底层代码块渲染架构的重构。整体项目健康度良好，Issue 反馈聚焦于视觉细节，说明核心功能已趋于稳定。

## 1. 今日速览
过去 24 小时内，LobsterAI 经历了高度活跃的更新迭代。项目共处理了 **29 个 PR**（其中 27 个已合并/关闭，2 个待合并），核心开发团队正密集将前序积累的 feature 分支 cherry-pick 至发布分支。同时，社区在一天内提交了 **2 个新 Issue**，均精准聚焦于 UI 交互细节与空状态体验优化。今日无新版本 Release tag 发布，但基于 PR 的合入轨迹，预计近期将有一次包含重大 UI 重构的正式版本发布。

## 2. 版本发布
* 今日无新版本 发布。

## 3. 项目进展
今日合入/关闭的 27 个 PR 极大地推动了项目的前进，核心进展如下：

* **🚀 渲染引擎重大重构**：PR [#1306](https://github.com/netease-youdao/LobsterAI/pull/1306) 与 cherry-pick 版本 [#1922](https://github.com/netease-youdao/LobsterAI/pull/1922) 已合入。将原有的 `react-syntax-highlighter` 全面替换为 **CodeMirror 6**，新增了 50+ 种语言的语法高亮、搜索、折叠、放大查看等高级能力，彻底重构了聊天代码块的交互体验。
* **🎨 全局 UI/UX 深度优化**：
  * **表单体验**：PR [#1511](https://github.com/netease-youdao/LobsterAI/pull/1511) 为全局 21 处表单输入框补充了红色的必填字段 `*` 标记。
  * **布局与视觉**：PR [#1928](https://github.com/netease-youdao/LobsterAI/pull/1928) 优化了侧边栏 UI，PR [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924) 优化了 Agents 布局。
  * **空状态优化**：PR [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) 为技能管理器增加了图标和副标题。
* **⏰ 定时任务能力扩展**：PR [#1519](https://github.com/netease-youdao/LobsterAI/pull/1519) 引入了自定义 Cron 表达式调度类型，并优化了可视化构建器，提升了复杂定时任务的配置能力。
* **🐛 关键逻辑与稳定性修复**：
  * **停止指令失效修复**：PR [#1923](https://github.com/netease-youdao/LobsterAI/pull/1923) 解决了用户点击「停止」后，多步爬虫工具调用仍被自动审批继续执行的严重问题。
  * **数据展示修复**：PR [#1925](https://github.com/netease-youdao/LobsterAI/pull/1925) 修复了预览文件重复和有效性校验的问题。

## 4. 社区热点
今日的 Issue 集中反映了用户对产品精细化打磨的诉求，目前开发团队已迅速响应：
* **Issue [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) [UI] Cowork initialization shows blank loading state**：用户指出 Cowork 初始化时仅显示干瘪的 `Loading...` 纯文本，与项目其他地方的骨架屏风格割裂。该 Issue 已收到 1 条评论，且对应的修复 PR [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) 已提交待合并。
* **Issue [#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) [UI] Skills Manager empty states lack icons**：用户反馈技能管理和历史任务的空状态缺乏图标和描述。该需求已被 PR [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) 完美解决。

## 5. Bug 与稳定性
* **[Medium] 会话停止状态下的异步失控**：在 Cowork 会话中执行包含多步工具调用的爬虫任务时，用户点击停止后任务仍在后台执行（[#1923](https://github.com/netease-youdao/LobsterAI/pull/1923)）。根因是 auto-approve 逻辑在 stop-cooldown 检查之前执行。目前**已修复并合入发布分支**。
* **[Low] 界面异常字符展示**：会话中出现 `NO_REPLY` 及其前缀异常显示的问题，目前已通过 PR [#1918](https://github.com/netease-youdao/LobsterAI/pull/1918) 修复。
* **[Low] 缓存读取为 0 时的冗余展示**：当缓存读取量为 0 时，UI 仍然展示该字段，PR [#1927](https://github.com/netease-youdao/LobsterAI/pull/1927) 已将其隐藏。

## 6. 功能请求与路线图信号
通过今日完成的 Issue 与 PR 交叉比对，可以明确以下功能点已被纳入近期的发布路线图：
* **消息元数据可见性**：PR [#1147](https://github.com/netease-youdao/LobsterAI/pull/1147) 的合入标志着项目开始重视对话过程的量化展示（新增消息时间戳与模型响应耗时统计），这将是未来评估 Agent 效率的关键指标。
* **个人知识/消息管理闭环**：PR [#1664](https://github.com/netease-youdao/LobsterAI/pull/1664) 正式上线了消息收藏功能，支持 Markdown 渲染和双向滚动定位，预示着 LobsterAI 正在从单纯的“对话工具”向“个人知识库/工作流沉淀平台”演进。

## 7. 用户反馈摘要
* **期待高水准的视觉一致性**：用户对 UI 的审查极为细致，对 Loading 态、空状态等细节有极高的要求，期待全局统一的骨架屏和丰富的图文化表达（来源于 #1920, #1921）。
* **强依赖“中止”能力**：在长链条的 Agent 执行（如多步爬虫）场景中，用户对“失控”极其敏感，必须保证中止指令的绝对执行权限（来源于 #1923 修复的前置痛点）。
* **表单容错率低**：早期版本缺少必填标记导致用户需通过报错来试错，反映出现代用户对开箱即用、零学习成本的极致追求（来源于 #1511 前置痛点）。

## 8. 待处理积压
* **Open PR 关注**：目前有 2 个 PR 正在等待合入。除了前文提到的 UI 优化 PR [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) 和 [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) 外，建议维护者尽快完成 Code Review 并将其合入主分支，以配合即将到来的 release 打包。整体来看，项目无明显长期积压的腐烂 Issue。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 9 日 Moltis 开源项目动态日报。

---

# 📊 Moltis 开源项目日报 (2026-05-09)

## 1. 今日速览
过去 24 小时，Moltis 项目整体处于**高活跃度、稳步推进**的状态。虽然今天没有新增的 Issue 讨论，但开发重心明显向功能迭代和生态完善倾斜。项目在今天合并/关闭了 2 个 PR，并保持了 3 个核心功能的 PR 持续开放，涵盖 UI 交互重构、外部智能体会话持久化以及文档站点的全面升级。此外，项目发布了一个新版本 `20260508.01`，表明近期的一系列改动已正式落地并向用户推送。总体而言，项目健康度良好，核心开发团队（尤其是核心贡献者 @penso）推进迅速。

## 2. 版本发布
- **[Release 20260508.01](https://github.com/moltis-org/moltis/releases/tag/20260508.01)**
  - **更新内容**：根据今日关闭的 PR 轨迹推断，此版本主要整合了最新的国际化（繁体中文）优化，以及 OpenAI 语音模型的配置引导功能（详见下文进展）。
  - **破坏性变更/迁移注意事项**：暂未在近期 PR 中发现明显的破坏性变更，建议用户及下游集成商平滑升级。

## 3. 项目进展
今日共有 **2 个 PR 被关闭**，项目在本地化体验和 AI 语音配置方面迈出了坚实的一步：
- **[PR #986](https://github.com/moltis-org/moltis/pull/986) [CLOSED] Update and improve zh-TW Traditional Chinese locale**
  由社区成员 @PeterDaveHello 贡献。该 PR 统一并标准化了繁体中文的翻译术语（如统一使用“AI 助理”等），大幅提升了繁体中文用户的界面阅读一致性与专业度。此类本地化贡献对个人 AI 助手拓展非英语市场至关重要。
- **[PR #984](https://github.com/moltis-org/moltis/pull/984) [CLOSED] feat(voice): surface OpenAI realtime model guidance**
  由 @penso 主导。引入了对 OpenAI 最新 STT 模型（如 `gpt-4o-transcribe` 系列）的支持，并在语音设置中添加了 Realtime 模型的专属引导，防止用户将其误配用于常规剪辑转录。这显著降低了用户在配置 OpenAI 实时语音交互时的试错成本。

## 4. 社区热点
虽然过去 24 小时内未产生拥有大量新增评论的“爆款”议题，但今日更新/创建的 PR 代表了当前项目的技术焦点：
- **[PR #566](https://github.com/moltis-org/moltis/pull/566) [OPEN] feat(external-agents): add persistent agent sessions**
  该 PR 虽于 4 月初创建，但在昨日有活跃更新。它旨在为 ACP 和 Codex CLI 添加持久化的外部 Agent 会话，并支持 Claude Code 的 resume 功能。这标志着 Moltis 正在从单纯的 UI 客户端向**多智能体调度与生命周期管理中枢**演进，是极具战略价值的功能。
- **[PR #985](https://github.com/moltis-org/moltis/pull/985) [OPEN] Refresh web chat composer**
  核心交互的 UI 重构。将聊天输入框重构为居中的圆角编辑器，并集成了模型选择、推理控制、附件等页脚控制。这反映了项目对提升核心聊天交互体验（UX）的持续打磨。

## 5. Bug 与稳定性
- **今日状态**：良好。过去 24 小时内，项目未收到任何新开的 Bug 报告、崩溃或回归问题 Issue。
- 这可能得益于项目近期在测试覆盖（如 PR #984 专门增加了 Playwright 端到端测试覆盖）上的投入。

## 6. 功能请求与路线图信号
从目前 OPEN 状态的 PR 中，我们可以捕捉到 Moltis 近期的产品路线图信号：
- **全链路多智能体支持**：[PR #566](https://github.com/moltis-org/moltis/pull/566) 暗示项目将深度整合 Claude Code、Codex 等 CLI Agent 工具，“跨轮次保持会话绑定”是迈向复杂 AI 工作流的关键一步。
- **文档站现代化重构**：[PR #987](https://github.com/moltis-org/moltis/pull/987) 提出使用 Astro 替代传统的 mdBook 来构建文档站，引入了更好的导航、搜索和主题切换。这表明项目正在为迎接更广泛的社区受众做基础设施准备。
*预测：上述两个重构级别的 PR 极有可能被合并到下一个主要版本中。*

## 7. 用户反馈摘要
- **对本地化的重视**：从 [PR #986](https://github.com/moltis-org/moltis/pull/986) 可以看出，开源社区对 Moltis 的多语言支持热情很高，用户对产品细节（如专业术语的统一）有较高要求。
- **对前沿 AI 能力的渴望**：语音交互（[PR #984](https://github.com/moltis-org/moltis/pull/984) 中的 Whisper 和 Realtime 模型）和外部 Agent 调度（[PR #566](https://github.com/moltis-org/moltis/pull/566)）的活跃推进，反映出用户不仅将 Moltis 视为文本聊天工具，更期望它能成为接入多模态 AI 和底层终端智能体的统一入口。

## 8. 待处理积压
当前项目的“隐性积压”主要集中在大型重构 Feature 的合并上：
- **[PR #566](https://github.com/moltis-org/moltis/pull/566)** 已开启超过一个月，仍在更新中。
- **[PR #985](https://github.com/moltis-org/moltis/pull/985) 与 [PR #987](https://github.com/moltis-org/moltis/pull/987)** 均为较大规模的重构。
- **提醒**：由于今日 0 新开 Issue，建议维护者可以集中精力 Review 当前这 3 个积压的 OPEN 状态大 PR，推动它们在下一个版本周期内顺利落地。

---
*数据分析基于 Moltis GitHub 仓库北京时间 2026-05-09 早晨的数据快照生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🐾 CoPaw 项目动态日报 (2026-05-09)

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**的开发与社区互动状态。过去24小时内，项目迎来了 **v1.1.6-beta.1** 的测试版发布，标志着新一轮的迭代周期开启。项目工单处理效率极高，共处理了 36 条 Issues（20 新开/活跃，16 关闭）和 36 条 PRs（15 待合并，21 已合并/关闭），展现出维护者高效的代码审查和问题闭环能力。值得关注的是，当前社区反馈的重心正向“前端UI性能优化”、“多渠道（微信/钉钉）消息同步”以及“MCP连接稳定性”等深水区转移。

## 2. 版本发布
- **[v1.1.6-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/4082)** 
  - **更新内容**：正式将版本号切入 `1.1.6b1` 测试阶段。包含了应用启动与环境变量的冒烟测试，以及针对控制台 SSE (Server-Sent Events) 崩溃问题的初步修复。
  - **破坏性变更/迁移注意**：作为 Beta 版本，不建议用于生产环境。特别是针对依赖包和运行环境有严格测试需求，建议开发者仅在本地测试环境中拉取验证。

## 3. 项目进展
今日共有 21 个 PR 被合并，项目在**跨平台体验、核心性能和稳定性**上迈出了坚实的一步：
- **前端性能大幅优化**：合并了 [PR #4110](https://github.com/agentscope-ai/QwenPaw/pull/4110)，针对控制台轮询导致的频繁重渲染进行了深度优化，这直接缓解了用户反馈的“WebUI 巨卡”问题。
- **打包与部署修复**：[PR #4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) 修复了 Windows 桌面版打包时 `conda-pack` 与 `pip install` 的严重冲突，保障了分发版的顺利构建。
- **底层架构优化**：[PR #4064](https://github.com/agentscope-ai/QwenPaw/pull/4064) 重构了 Agent 热重载机制，优化了任务排空逻辑，有效解决了因热更导致的钉钉流式响应中断问题。
- **日志轮转统一**：[PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076) 修复了非 macOS 系统下日志无限增长的遗漏 Bug，统一了全平台的日志切割行为。

## 4. 社区热点
今日社区讨论最为激烈的话题集中在**UI 交互体验**与**多渠道调度**：
1. **WebUI 严重卡顿**：[Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108)（4条评论）。多位用户反馈生成回复时系统资源占用极高，导致鼠标掉帧。该问题与今日合并的前端性能优化 PR 高度契合，期待在 v1.1.6 正式版中得以解决。
2. **Agent 切换与会话丢失**：[Issue #3919](https://github.com/agentscope-ai/QwenPaw/issues/3919)（9条评论）。社区剖析了前端 `lastChatIdByAgent` 功能缺失的底层原因，属核心交互逻辑的盲区。
3. **定时任务路由错发 Channel**：[Issue #3783](https://github.com/agentscope-ai/QwenPaw/issues/3783) 与 [Issue #2964](https://github.com/agentscope-ai/QwenPaw/issues/2964)（各3条评论）。集中反映了微信个人版与钉钉等渠道在接收定时任务推送时的 Channel 路由混乱（如配置 wechat 却发到了 console），这是个人助理场景的致命痛点。
4. **更新后 venv 依赖重置**：[Issue #2382](https://github.com/agentscope-ai/QwenPaw/issues/2382)（10条评论）。老问题持续发酵，用户更新版本后虚拟环境被重置，导致 Skill 依赖失效，暴露出升级 Migration 逻辑的不完善。

## 5. Bug 与稳定性
今日报告的新 Bug 主要聚焦于外部模型对接与系统级交互，按严重程度划分如下：
- **🔴 严重（影响核心使用流程）**
  - [Issue #4133](https://github.com/agentscope-ai/QwenPaw/issues/4133)：升级至 v1.1.5.post2 后，opencode 模型提供商完全无法使用（报 `MODEL_EXECUTION_FAILED`），属于严重的退化问题。*（暂无 fix PR）*
  - [Issue #4102](https://github.com/agentscope-ai/QwenPaw/issues/4102)：视觉模型不断截图并塞入上下文，导致 Token 消耗无端激增且不释放。*（暂无 fix PR）*
  - [Issue #4100](https://github.com/agentscope-ai/QwenPaw/issues/4100)：MCP `streamable_http` 连接断开后无法自动恢复，客户端状态僵死。
- **🟡 中等（特定场景或系统影响）**
  - [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)：Windows 下调用 `execute_shell_command` 时不断闪烁控制台黑框，严重影响体验。
  - [Issue #4104](https://github.com/agentscope-ai/QwenPaw/issues/4104)：文件名解析 Bug，中英数字混合（如"2026年报告"）会被强行插入空格变为"2026 年报告"。
  - [Issue #4128](https://github.com/agentscope-ai/QwenPaw/issues/4128)：长上下文下，MiMo-V2.5 和 DeepSeek-V4-Pro 模型出现严重的重复响应循环。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以捕捉到项目未来的演进方向：
1. **多角色项目组群聊调度**：[Issue #4131](https://github.com/agentscope-ai/QwenPaw/issues/4131) 提出了“构建项目组，多角色入群共享记忆”的设想。这与 [PR #3525](https://github.com/agentscope-ai/QwenPaw/pull/3525)（支持 Cron 定时任务在 Discord 频道创建独立线程）在架构思路上不谋而合，预示着 CoPaw 将向**多 Agent 协同与群组隔离调度**发力。
2. **上下文 / Session 回溯机制**：[Issue #4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) 呼吁引入类似 Claude Code 的 `/rewind` 功能，以便在 Agent 产生幻觉或污染上下文时进行状态回滚。
3. **桌面级系统托盘化**：[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) 正在补充 Windows 下的系统托盘静默运行能力，表明 CoPaw 正致力于从“网页工具”向“常驻后台的个人助理桌面端”转型。
4. **定时任务 Session 隔离**：[Issue #3111](https://github.com/agentscope-ai/QwenPaw/issues/3111) 与 [PR #3255](https://github.com/agentscope-ai/QwenPaw/pull/3255) 正在推动 Cron 定时任务每次执行时的上下文清零与归档功能。

## 7. 用户反馈摘要
通过对工单的聚合分析，提炼出真实用户的三大核心痛点：
- **“资源刺客”问题**：用户对前端性能（[Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108)）和无意义的上下文堆积（[Issue #4102](https://github.com/agentscope-ai/QwenPaw/issues/4102)）极其敏感。本地部署用户期望 AI 助理是轻盈的，任何导致电脑卡顿或 Token 暴涨的设计都会严重降低好感度。
- **“消息孤岛”现象**：多端用户非常苦恼。在微信端对话时，看不到浏览器端的工作过程（[Issue #4000](https://github.com/agentscope-ai/QwenPaw/issues/4000)）；定时的晨报推送到不了微信（[Issue #2964](https://github.com/agentscope-ai/QwenPaw/issues/2964)）。用户迫切需要全端、全渠道的**状态同步与一致性**。
- **升级体验割裂**：用户对升级带来的破坏性（如环境依赖被清空 [Issue #2382](https://github.com/agentscope-ai/QwenPaw/issues/2382)，硬编码覆盖自定义名称 [Issue #4099](https://github.com/agentscope-ai/QwenPaw/issues/4099)）缺乏耐心，希望项目能提供更平滑的升级迁移保护。

## 8. 待处理积压
以下重要 Issue/PR 长期处于 Open 或 Under Review 状态，需要核心团队关注以免社区热情流失：
- **[PR #3238](https://github.com/agentscope-ai/QwenPaw/pull/3238)**（已停滞 28 天）：实验性引入 PlanNotebook 以支持 ReAct Agent 复杂任务规划。这是架构级增强，亟待团队评估合并或提出修改意见。
- **[PR #2771](https://github.com/agentscope-ai/QwenPaw/pull/2771)**（已停滞 37 天）：限制 `mlx-lm` 仅在 Apple Silicon 上安装。属于跨平台兼容性的前置防御 PR。
- **[Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578)**（长期活跃）：受 OpenClaw 启发的“复合 Agent 价值”元特性请求，获得了大量社区讨论，需要官方明确是否纳入长期 Roadmap。
- **[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)**：Windows 系统托盘功能，对于常驻后台的 Agent 至关重要，建议尽快推进 Test 和 Review 进度。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-09)

**数据统计周期**：2026-05-08 19:00 UTC — 2026-05-09 19:00 UTC

---

## 1. 今日速览
过去 24 小时，ZeptoClaw 项目整体保持**平稳低频**的维护状态，未产生新的代码合并或版本发布。今日无新增社区 Issue，项目活跃度主要体现为现有 PR 的持续推进。目前有 1 个待合并的功能 PR 正在审查中，聚焦于 AI 智能体底层工具的提示词优化与规范化。总体而言，项目处于稳健迭代期，代码库健康度良好，暂无待处理的紧急故障。

## 2. 版本发布
**无**。
（过去 24 小时内项目未发布任何新版本。）

## 3. 项目进展
过去 24 小时内，项目**无已合并或已关闭的 PR**，整体代码库未发生变更。当前最重要的进展是核心贡献者持续推进待合并的功能分支（详见第 4 节），为后续版本更新积蓄代码。

## 4. 社区热点
今日项目唯一的动态集中在核心开发者关于工具提示词优化的 PR 上，该 PR 在过去一天内迎来了更新：

- **[PR #571](https://github.com/qhkm/zeptoclaw/pull/571) `[OPEN]` feat(tools): trigger-phrase nudges in longterm_memory description**
  - **作者**: [qhkm](https://github.com/qhkm)
  - **动态更新**: 2026-05-08
  - **内容分析**: 该 PR 旨在重写 `longterm_memory` 工具的 `description()` 方法。通过引入具体的 "Use when" (何时使用) 和 "Do NOT use when" (何时不使用) 触发短语，减少模型调用工具时的幻觉或误判。此外，该 PR 参照了 Hermes Agent 的 `memory_tool.py` 设计模式，并新增了文档测试（`test_tool_description_has_trigger_phrases`）以确保未来的代码编辑不会破坏该逻辑。
  - **意义**: 这表明 ZeptoClaw 正在深耕 **AI Agent 的指令遵循与对齐能力**，通过细化底层工具的描述来提升智能体在复杂任务中的记忆调度准确率。

## 5. Bug 与稳定性
**无新增 Bug 报告**。
过去 24 小时内，社区未提交任何与崩溃、回归或系统故障相关的 Issue，项目当前运行稳定。

## 6. 功能请求与路线图信号
今日无新增用户驱动的功能请求（Issues）。
**路线图信号研判**：从正在开放的 [PR #571](https://github.com/qhkm/zeptoclaw/pull/571) 可以看出，项目下一阶段的隐性路线图包含**“Agent 基础设施与提示词工程的标准化”**。引入类似 Hermes Agent 的设计模式，说明项目正在积极吸收业界优秀的开源智能体构建经验，未来可能会有更多内置 Tools 进行类似的 Trigger-phrase 改造。

## 7. 用户反馈摘要
今日无活跃的用户反馈或评论。

## 8. 待处理积压
- **[PR #571](https://github.com/qhkm/zeptoclaw/pull/571)**：该 PR 创建于 5 月 3 日，并于昨日（5 月 8 日）进行了更新。作为一项底层的核心工具重构，它已经处于 Open 状态达 6 天。建议项目维护者尽快完成最终的 Code Review 并将其合并到主分支，以便进入下一轮的集成测试。

---
*本报告由 AI 开源项目分析师基于 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# 🐾 ZeroClaw 项目动态日报 (2026-05-09)

## 1. 今日速览
今日 ZeroClaw 项目保持了**高度活跃**的开发状态。随着 **v0.7.5 的正式发布**，项目重心正向完善桌面端（Tauri）体验与底座架构重构转移。过去 24 小时内，共有 15 个新开/活跃 Issue 和 48 个 PR 更新（其中 36 个待合并），显示出核心贡献者和社区正在密集推进 v0.7.5 版本的后续修复与 v0.8.0 的前期预研。整体来看，当前阶段的迭代重心在于**提升多 provider 兼容性、修复通信渠道的边缘 Bug 以及为桌面应用脱机运行打基础**。

---

## 2. 版本发布
### 🚀 v0.7.5 正式发布
- **链接**: [Release v0.7.5](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.7.5)
- **核心更新**:
  - **浏览器内引导与配置**: 引入了基于 Schema 驱动的 `/onboard` 流程，支持在 UI 界面直接进行完全配置。
  - **OpenAPI 3.1 CRUD 支持**: 为每个属性提供了网关 CRUD 接口，并配合强类型 CLI 支持。
  - **三位一体性格编辑器**: 支持在 CLI、Tauri 桌面端和 Web 端无缝编辑 Agent 个性设定。
- **迁移与注意事项**: 
  - 此次更新改变了配置加载的部分初始化逻辑。从 Issue #6533 可以看出，部分用户的环境变量（如 `ZEROCLAW_CONFIG_DIR`）可能未在路径默认值中正确生效，建议升级后检查自定义路径配置是否被正确读取。

---

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，重点修复了底层 Provider 兼容性、事件分发机制和 CI 构建流程，项目整体稳定性向前迈进了一大步：

- **Mistral Provider 修复落地**: PR [#5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121) 被合并，修复了 Mistral API 兼容的 `tool_call.id` 序列化问题，使 Mistral 模型能正常调用工具。
- **Matrix 频道去重合并**: PR [#6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306) 关闭，重构了同步循环的事件处理器注销逻辑，解决了多次重启导致消息重复 N 次的严重体验问题。
- **Llama.cpp 独立 Provider**: PR [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) 合并，将 Llama.cpp 从通用 OpenAI 兼容 provider 中剥离，全面转用 Responses API，极大提升了本地模型的调用稳定性。

---

## 4. 社区热点
今日社区和开发者主要围绕**架构重构、核心机制修复与桌面端演进**展开热烈讨论：

- **统一 Provider 架构重构** (🔥 👍 0, 评论 8): Issue [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 引发了关于重构 `providers` 模块和 `reqwest` 客户端的深入探讨，社区呼吁解决代码重复和配置碎片化问题。
- **Matrix 语音转写失败探讨** (评论 7): Issue [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) 记录了主流 Matrix 客户端语音格式识别失败的问题，维护者与用户正在复现及排查。
- **v0.7.5 发布的 CI 修复** (评论活跃): PR [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) 揭示了 v0.7.5 发布期间前端 API 生成导致的流水线阻塞问题，反映出项目对 CI 依赖生成的把控仍在磨合中。

---

## 5. Bug 与稳定性
今日报告了多个影响工作流的 Bug，部分高优先级缺陷已有对应的 Fix PR：

### 🔴 S1 级别：工作流阻塞
- **Fallback Providers 凭证丢失** (Issue [#6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)): 触发降级时无法继承主 Provider 的凭证，导致 429 宕机后无法无缝切换（已关闭/计划修复）。
- **多模态本地图片路径处理错误** (Issue [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)): 自定义远程 Provider 错误地将本地绝对路径发送给大模型。
  - ✅ **Fix PR**: PR [#6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) 正在着手修复 ACP 沙箱和网关会话的路径解析问题。
- **WebSocket 绕过审批管理器** (Issue [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)): Web UI 无法弹出受监督模式下的工具调用确认框。
  - ✅ **关联 Fix PR**: PR [#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522) 与 PR [#6536](https://github.com/zeroclaw-labs/zeroclaw/pull/6536) 正在解决前端 Approval UI 的实现与后端错误码抛出。

### 🟠 S2 级别：体验降级
- **SSE 事件丢失** (Issue [#6526](https://github.com/zeroclaw-labs/zeroclaw/issues/6526)): `/api/events` 静默丢弃了由 `process_message` 发出的工具调用事件。
  - ✅ **Fix PR**: PR [#6527](https://github.com/zeroclaw-labs/zeroclaw/pull/6527) 重构了 `BroadcastObserver` 以解决此问题。
- **Matrix 编译递归溢出** (Issue [#6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)): `matrix-sdk v0.16.0` 导致编译失败。
- **LLM 重复调用** (Issue [#6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)): 处理 1 次用户请求时，后台触发了两次 LLM 推理。

---

## 6. 功能请求与路线图信号
从近期的 Enhancement Issues 和活跃 PRs 中，可以清晰看到项目接下来的路线图重点：

- **桌面端 离线化与交互增强**:
  - 桌面菜单栏聊天离线渲染 (Issue [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465)) 已被接受，将允许 Tauri 纯静态打包启动。
  - macOS 系统级控制能力（截屏、点击、AX 等）已提上日程 (Issue [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499))，这标志着 ZeroClaw 将拥有类似 Computer Use 的深度本地自动化能力。
- **v0.8.0 破坏性变更预演**:
  - PR [#6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523) 提出重构环境变量语法的计划，旨在彻底清除遗留的覆盖机制。这明确释放了 v0.8.0 将重点重塑配置基座的信号。

---

## 7. 用户反馈摘要
- **痛点：本地/自托管模型兼容性依然脆弱**。大量用户反馈在接入 Llama.cpp、vLLM、Ollama 及自定义端点时，容易遭遇路径解析、 thinking output 解析错误 等问题。
- **痛点：SOP 机制形同虚设**。PR [#6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534) 暴露出 `SopEngine` 从未在其调用方中触发 `reload()`，导致用户即使配置了 `sops_dir` 也无法在运行时加载，这对高级 Agent 流程编排用户是一个重大打击。
- **场景反馈：强内网与自签证书环境支持不佳**。Issue [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) 反映了企业用户在使用私有 CA 证书时的困难，表明 ZeroClaw 在企业级私有化部署场景下仍需打磨安全证书信任链。

---

## 8. 待处理积压
1. **Webhook 重试逻辑停滞** (PR [#5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838)): 尽管增加了带抖动的指数退避重试机制，但该 PR 自 4 月中旬至今仍未合并，且当前打上了 `needs-author-action` 标签，可能由于冲突或测试覆盖不足受阻，需原作者或维护者尽快推进。
2. **Ollama Provider 参数调优扩展** (PR [#6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178)): 允许通过配置文件细粒度调整 `num_ctx` 等参数的 PR 仍在排队审核，这对于提升长上下文本地模型的可用性至关重要。
3. **并发启动导致 SQLite 内存初始化失败** (Issue [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431)): 涉及底层并发竞态条件的 Bug 目前处于 "In progress" 状态，鉴于其对 daemon 启动稳定性的威胁，建议维护者优先予以关注。

</details>