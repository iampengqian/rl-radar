# OpenClaw 生态日报 2026-06-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-19 22:16 UTC

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

这份报告分析了 OpenClaw（一款高度模块化的个人 AI 助手与智能体框架）在 2026-06-19 至 2026-06-20 期间的 GitHub 动态。基于过去 24 小时的 500 条 Issue 更新（446 活跃/54 关闭）和 500 条 PR 更新（467 待合并/33 合并或关闭）数据，生成的项目动态日报如下：

# 🐾 OpenClaw 项目动态日报 (2026-06-20)

## 1. 今日速览
OpenClaw 今日维持了极高的社区活跃度，数据处理显示有近 450 条新开或活跃的 Issue，以及超 460 个处于开放或审查状态的 PR。项目核心目前正处于**底层架构向 SQLite 迁移的深水区**，大量讨论集中在状态管理、上下文压缩以及多渠道消息投递的稳定性上。同时，围绕记忆系统和多智能体编排的功能迭代在密集进行，虽然带来了部分回归 Bug，但整体生态呈现出“破旧立新、快速迭代”的健康态势。

## 2. 版本发布
- **[Release] v2026.6.9-beta.1: openclaw 2026.6.9-beta.1** ([查看详情](https://github.com/openclaw/openclaw/releases))
  - **更新亮点**：全面增强了 Telegram 渠道的消息投递能力。现在支持发送富 HTML，保留 Markdown 和贴纸路径，并更加忠实地渲染进度草稿和命令输出。
  **注意**：对于深度依赖 Telegram 渠道进行分发的用户，此版本将显著提升用户体验。

## 3. 项目进展
今日项目合并/关闭了 33 个 PR，在提升系统健壮性和多平台体验上迈出重要一步：
- **SQLite 核心快照功能就绪**：PR [#94805](https://github.com/openclaw/openclaw/pull/94805) 引入了核心 SQLite 快照命令 (`openclaw snapshot create|verify|restore|list`)，大幅强化了状态备份能力。
- **飞书深度适配与修复**：维护者集中合并了多个飞书相关修复，包括修复 bitable schema 验证报错问题（[#94884](https://github.com/openclaw/openclaw/pull/94884)）以及流式卡片回复错误（[#94933](https://github.com/openclaw/openclaw/pull/94933)）。
- **记忆系统插槽架构合并**：PR [#88504](https://github.com/openclaw/openclaw/pull/88504) 增加了多插槽记忆角色架构，允许记忆插件组合使用，而不是通过全局单一选择器相互覆盖。

## 4. 社区热点
讨论最热烈的问题反映了用户在**高负载/长对话场景下的痛点**：
- **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)** (👍31 评论): **核心会话状态 SQLite 迁移**。维护者正在跟踪这次大重构，社区高度关注迁移如何以低风险、小步快跑（分支抽象）的方式进行。
- **[Issue #85333](https://github.com/openclaw/openclaw/issues/85333)** (👍13 评论): **`doctor --fix` 性能大幅衰退**。用户反馈在特定版本下，快照路径遍历成为了瓶颈，执行时间从 55 秒暴增到 229 秒以上。
- **[Issue #63829](https://github.com/openclaw/openclaw/issues/63829)** (👍9 评论): **多智能体独立记忆库需求**。用户强烈希望在多 Agent 设置中，每个 Agent 都能维护自己隔离的知识 Wiki，而不是共享全局配置。

## 5. Bug 与稳定性
按严重程度排列的当前关键系统隐患：

- 🚨 **P0 致命级：网关内存泄漏导致 OOM 崩溃** 
  - **[Issue #91588](https://github.com/openclaw/openclaw/issues/91588)**: 网关进程 RSS 在正常使用 2-3 天后从 350MB 暴增至 15.5GB，导致被操作系统反复杀掉并进入 `launchd-handoff` 重启死循环。
- ⚠️ **P0 致命级：Cron 任务状态静默迁移导致数据丢失/投递失败**
  - **[Issue #90378](https://github.com/openclaw/openclaw/issues/90378)**: 从 5.28 升级到 6.1 时，Cron 存储静默迁移至 SQLite，且未保留先前配置，导致新任务投递模式错误，引发大量频道报错。
- ⚠️ **P1 严重级：上下文压缩 导致系统卡死**
  - **[Issue #90639](https://github.com/openclaw/openclaw/issues/90639)**: Safeguard 模式下，会话被允许膨胀至 200K+ tokens 直到触发 "Something went wrong" 错误，且无法在渠道内恢复，导致单次会话成本失控。
- ⚠️ **P1 严重级：Windows 平台下文件系统死锁**
  - **[Issue #78640](https://github.com/openclaw/openclaw/issues/78640)**: Windows 下记忆索引重建因 `EPERM` 权限报错持续失败，此问题已历经两次修复仍未根除。

## 6. 功能请求与路线图信号
基于近期 Issues 与活跃 PR，下一版本的重点演进方向预测：
- **针对 Agent 的精细化权限与会话隔离**：用户希望实现同一助手下的多上下文车道隔离（[Issue #90916](https://github.com/openclaw/openclaw/issues/90916)），这呼应了正在推进的多插槽记忆架构 PR [#88504](https://github.com/openclaw/openclaw/pull/88504)。
- **本地与局域网执行能力的强化**：[Issue #94032](https://github.com/openclaw/openclaw/issues/94032) 揭示了 `exec` 工具在访问私有局域网时的网络隔离 Bug。解决此类问题将推动 OpenClaw 更好地作为本地系统级助手运行。
- **Web UI 控件增强**：用户呼吁在 WebChat 中支持行内按钮（[Issue #46656](https://github.com/openclaw/openclaw/issues/46656)），使其达到与 Telegram 渠道同等的交互体验。

## 7. 用户反馈摘要
从大量 Issue 摘要中提炼出的真实用户反馈：
- **痛点 1：版本升级如履薄冰**。大量带有 `regression`（回归）标签的 Bug 涌现，特别是 6.1 版本带来的 SQLite 隐式迁移（[Issue #90213](https://github.com/openclaw/openclaw/issues/90213)），让不少生产环境用户感到困惑和数据丢失风险。
- **痛点 2：压缩与记忆机制黑盒化**。用户难以理解为何活跃记忆注入会导致 LLM 缓存命中率从 99.9% 骤降至 22%（[Issue #91223](https://github.com/openclaw/openclaw/issues/91223)），以及为何后台压缩失败会直接丢弃已生成的回复（[Issue #94878](https://github.com/openclaw/openclaw/pull/94878)）。
- **满意点：高度可插拔与多渠道支持**。用户极度赞赏 OpenClaw 对 QQBot、飞书、Slack 和 Telegram 的深度集成，并积极贡献如 `parallel`、`tavily` 等搜索插件的对齐修复（[PR #94373](https://github.com/openclaw/openclaw/pull/94373)）。

## 8. 待处理积压
以下高影响力或长期未解决的问题需要维护团队优先关注：
- 🔴 **[Issue #85334](https://github.com/openclaw/openclaw/issues/85334) (标记为 stale)**: `openclaw doctor --fix` 错误地注入自带插件目录路径，导致循环警告。这是一个自 5.20 版本就存在干扰性 Bug。
- 🔴 **[Issue #78061](https://github.com/openclaw/openclaw/issues/78061) (已关闭但影响广泛)**: Slack 线程会话能生成响应但无法向 Slack 投递，用户反馈强烈。
- 🟡 **[PR #88992](https://github.com/openclaw/openclaw/pull/88992) (等待审核多日)**: 修复了在特定工具模式下，LLM 偶发性忘记调用消息工具而导致**回复被静默丢弃**的严重问题，该 PR 已获充分证明但仍在等待 Maintainer 审核。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，基于 2026 年 6 月 20 日各大开源项目的 GitHub 动态数据，我为您生成了如下横向对比与技术演进分析报告。

---

# 📊 2026.06.20 个人 AI 助手与智能体开源生态横向对比报告

## 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**“从单体对话向全渠道、多租户协同中枢”演进**的深水区。项目间竞争的焦点已从单纯的 LLM 接入，转移到了**企业级安全隔离、高并发调度与复杂记忆持久化**等底层基础设施的较量。众多项目不约而同地开启了底层架构重构（如 OpenClaw 的 SQLite 迁移、IronClaw 的 Reborn 引擎），标志着该生态正在加速向生产级、工业化应用阶段迈进。

## 2. 各项目活跃度对比
今日（06.20）各项目的整体研发与社区活动呈现出不同的节奏。OpenClaw 和 Hermes Agent 在绝对数据上展现了庞大的社区基本盘，而 NanoBot、IronClaw 和 ZeroClaw 则在密集进行代码合并与架构迭代。

| 项目名称 | Issues 动态 | PRs 动态 | Release 情况 | 健康度与迭代状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (446活跃) | 500 (467待合) | v2026.6.9-beta.1 | 🟢 极高活跃，处于底层重构深水区，有积压回归 Bug 风险 |
| **Hermes Agent** | 50 (45活跃) | 50 (45待合) | v0.17.0 (前日发布) | 🟢 爆发期，多端触达与企业级特性快速融合 |
| **NanoBot** | 9 (6关闭) | 33 (19合并) | 无 | 🟢 高效收敛，精细化控制与异步执行功能扩充 |
| **PicoClaw** | 3 (活跃) | 7 (待合) | v0.3.0 Nightly | 🟡 稳定维护，重点推进安全防御与多智能体架构 |
| **IronClaw** | 5 (活跃) | 28 (12合并) | 无 | 🟢 核心重构，CI/CD 提效与高并发引擎升级中 |
| **ZeroClaw** | 50 (47活跃) | 50 (15合并) | v0.8.1 (修复版) | 🟢 高频修复，向安全架构重构与 WASM 插件演进 |
| **CoPaw** | 11 (活跃) | 17 (活跃) | 无 | 🟢 密集维护，多模型兼容与记忆系统大幅优化 |
| **LobsterAI** | 4 (3关闭) | 0 (无变动) | 2026.6.18 (近期) | 🟡 反馈收集期，转向跨模型编排平台探索 |
| **NanoClaw** | - | 14 (0合并) | 无 | 🟠 审查停滞，社区高输入但核心团队响应滞后 |
| **NullClaw** | 2 (活跃) | 1 (待合) | 无 | 🟡 兼容性修复，重心在解决边缘移动端网络阻断 |

*(注：TinyClaw, Moltis, ZeptoClaw 过去 24h 无活动)*

## 3. OpenClaw 在生态中的定位
作为核心参照项目，**OpenClaw 展现出了作为“生态基石”的庞大体量与最高的社区参与度**。
*   **社区规模对比**：其单日近 500 条的 Issue 与 PR 活动量远超生态内的 ZeroClaw 和 Hermes Agent，拥有最广泛的开发者基座。
*   **技术路线差异**：不同于新锐项目（如 IronClaw）直接引入复杂的调度引擎，OpenClaw 选择在**保持高度模块化和多渠道支持**的同时，进行“带电起飞”式的底层 SQLite 核心状态迁移。其多插槽记忆架构走在行业前列。
*   **当前优势与隐患**：OpenClaw 在跨平台（QQBot、飞书、Telegram、Slack）的深度适配上具有压倒性优势。然而，庞大的重构也带来了高昂的复杂性，如网关 OOM、静默数据丢失等 P0 级 Bug 的涌现，说明其在快速扩张后面临严峻的质量回归考验。

## 4. 共同关注的技术方向
从今日多项目的 PR 与 Issue 趋势中，提炼出行业高度共振的四大技术方向：

1.  **基于渠道/场景的动态沙箱与权限隔离**
    *   *涉及项目*：PicoClaw, NanoClaw, ZeroClaw, OpenClaw
    *   *具体诉求*：防止 Agent 在群聊中被恶意诱导执行高危 Shell 命令或读取宿主文件。各项目正在引入严格的目录限制（如 NanoClaw 限制在 `/workspace/agent`）和基于上下文的分级权限熔断机制。
2.  **长效、防串扰的智能记忆管理**
    *   *涉及项目*：OpenClaw, ZeroClaw, Hermes Agent, CoPaw
    *   *具体诉求*：解决多 Agent 环境下的记忆污染（如 Hermes 的后台审查串扰）、历史记忆优先级过高覆盖当前指令（ZeroClaw），以及基于时间衰减的记忆检索（CoPaw）。
3.  **大上下文的预压缩与 Token 优化**
    *   *涉及项目*：OpenClaw, Hermes Agent, ZeroClaw
    *   *具体诉求*：面对不断膨胀的系统提示词和工具输出，单次会话压缩已不够。社区强烈呼吁针对单次工具执行结果的预压缩，以及避免因 token 溢出导致的回复静默丢弃。
4.  **多模型降级容灾与精细路由**
    *   *涉及项目*：NanoBot, IronClaw, OpenClaw
    *   *具体诉求*：应对主流 API 的限流或空响应。要求系统支持主备模型无缝降级，甚至允许主对话使用 GPT-4o，后台 Cron 任务（或子 Agent）使用廉价本地模型，从而优化成本。

## 5. 差异化定位分析
*   **OpenClaw & Hermes Agent**：定位为**“全渠道中枢级助手”**。强调尽可能广的触达率（Slack、WhatsApp、飞书等），适合需要在多通讯平台部署数字员工的团队级用户。
*   **IronClaw & ZeroClaw**：定位为**“企业级/工程化编排引擎”**。侧重于提供 WASM 插件加载、单租户托管、并发调度器和细粒度工具审批（如 IronClaw 的每次询问/禁用模型），面向严肃的 B 端生产环境。
*   **NanoBot & CoPaw**：定位为**“极客与轻量级本地工作流引擎”**。高度关注 TUI 终端交互体验、本地模型（如 30B 模型）兼容、以及基于 Conda/Tauri 的本地部署，适合个人开发者。
*   **LobsterAI**：定位正从**“内容生成助手”向“协作与编排平台”转型**，其核心差异在于对 Artifact（多格式文档分享）流转的重视，瞄准的是非技术工种（如运营、 HR）的 AI 协作痛点。

## 6. 社区热度与成熟度
当前生态项目的成熟度呈现明显的梯队分化：
*   **快速迭代与破旧立新期（高活跃，高风险）**：**OpenClaw** 和 **ZeroClaw**。它们正经历架构重构带来的阵痛，大量回归 Bug 涌现（如预编译文件功能丢失、状态机死锁），但社区反馈积极，修复极快。
*   **功能收敛与质量巩固期（稳健增长）**：**NanoBot** 和 **IronClaw**。这两个项目今日合并了大量高质量的修复与基础设施提效代码（如 IronClaw 引入 mold 链接器），代码合入率高，工程效率极佳。
*   **生态停滞与预警期（需警惕）**：**NanoClaw**。出现了单日 14 个 PR 待合并但无一被批阅的停滞现象，需警惕因 Maintainer 缺席导致的社区贡献者流失。

## 7. 值得关注的趋势信号
从今日的社区动态中，我们捕捉到对 AI 智能体开发者极具价值的三大趋势信号：

1.  **Cron 定时任务成为 Agent 的标配，但挑战重重**：多个项目反馈定时任务存在“消息轰炸”（NanoBot）、缺乏并发锁（ZeroClaw）等问题。**建议**：开发者在引入后台自动化时，必须设计完善的防抖机制和任务级独立模型配置。
2.  **多 Agent 协同从理论走向落地**：OpenClaw 的多插槽记忆、NanoClaw 的父级权限继承、PicoClaw 的内部协作总线均表明，**单打独斗的单体 Agent 正在被淘汰**。构建支持 Agent 间通信和记忆隔离的集群框架，将是下半年的决胜点。
3.  **安全合规成为核心护城河**：非标环境下的 DNS 泄露、第三方 OAuth Token 的管理死锁、以及 WASM 沙箱的引入说明：**插件生态越丰富，沙箱隔离的优先级就越高**。随着 AI 助手掌握越来越多的系统执行权，安全防御架构必将成为项目选型的“一票否决项”。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-06-20  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
在过去 24 小时内，NanoBot 项目保持了**极高的研发与社区活跃度**。项目共计处理了 9 条 Issue 更新（关闭 6 条，新开 3 条）以及 33 条 PR 更新（合并/关闭 19 条，待合并 14 条）。尽管今日没有发布新的稳定版，但核心团队与社区贡献者合入了大量关键修复，包括多渠道兼容性（飞书、Discord、OpenAI 图像）与底层执行链路的优化。当前项目正处于 v0.2.x 迭代的快速收敛与功能扩充期，尤其在子代理调度和定时任务方面迎来了重要架构升级。

---

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。
*当前项目正处于功能密集开发与 Bug 修复阶段，推测团队正在为下一个大版本（可能是 v0.2.2 或 v0.3.0）积累改动。*

---

### 3. 项目进展
今日共有 19 个 PR 被合并或关闭，项目在**渠道适配、上下文持久化、工具链细化**方面取得了显著进展：

*   **多渠道与通信协议修复**：
    *   [PR #4342](https://github.com/HKUDS/nanobot/pull/4342): 修复了飞书通过 WebSocket 传输的卡片消息结构不匹配导致渲染失败的问题。
    *   [PR #2655](https://github.com/HKUDS/nanobot/pull/2655): 全面重构 Discord 频道，升级至 `discord.py 2.x`，并引入了斜杠命令、UI 组件和 API 工具强化。
*   **多模态与媒体支持**：
    *   [PR #4394](https://github.com/HKUDS/nanobot/pull/4394): 支持 OpenAI 图像参考编辑，将带有参考图的请求路由至 `/images/edits`。
*   **底层稳定性与状态管理**：
    *   [PR #4246](https://github.com/HKUDS/nanobot/pull/4246): 修复了 `delete_session` 未清理旧版目录文件导致历史会话“复活”的数据一致性 Bug。
    *   [PR #4138](https://github.com/HKUDS/nanobot/pull/4138): 为内置文件系统工具增加了 `enable` 开关，满足了要求模型仅通过 MCP 服务器执行操作的严格沙箱部署需求。

---

### 4. 社区热点
今日社区讨论的焦点集中在**多模型上下文调度与频道交互体验**上：

*   **[Issue #4389](https://github.com/HKUDS/nanobot/issues/4389) [question] Per-model contextWindowTokens for fallback models**
    *   **热度**: 多人参与讨论。
    *   **分析**: 用户指出当主模型发生故障，系统降级到上下文窗口较小的备用模型时，NanoBot 没有自动裁剪提示词。这反映了高级用户在生产环境中重度依赖“多模型 Fallback 机制”，并要求更智能的底层 Token 控制。
*   **[Issue #4413](https://github.com/HKUDS/nanobot/issues/4413) [enhancement] Telegram Bot API 10.1 rich messages**
    *   **热度**: 新开即获关注。
    *   **分析**: 用户希望支持 Telegram 最新的富文本格式。由于 NanoBot 大量被用作个人 Telegram 助手，消息排版的美观度直接影响用户体验，此类需求通常具有极高的采用率。

---

### 5. Bug 与稳定性
今日报告并处理了多个关键 Bug，整体稳定性进一步得到夯实。按严重程度排列：

1.  **🔴 [严重] 定时任务消息轰炸** - [Issue #4410](https://github.com/HKUDS/nanobot/issues/4410)
    *   **问题**: 从 v0.1.5 升级后，即使 LLM 明确表示“无事发生”，心跳定时任务仍会强制向用户发送消息。
    *   **状态**: 已提交修复 [PR #4412](https://github.com/HKUDS/nanobot/pull/4412)，重新启用了“常规响应抑制”逻辑。
2.  **🟠 [中等] 模型空响应未触发降级** - [Issue #4287](https://github.com/HKUDS/nanobot/issues/4287) (已关闭)
    *   **问题**: 高峰期 DeepSeek API 返回空响应（无 choices）时，NanoBot 错误地将其分类为“不可降级”，导致流程中断。该问题已被确认并关闭（预期在最新代码中修复）。
3.  **🟠 [中等] 图片降级处理泄露路径** - [Issue #4345](https://github.com/HKUDS/nanobot/issues/4345) (已关闭)
    *   **问题**: 当模型不支持图片输入时，NanoBot 会剥离图片重试。但底层实现导致模型产生了“幻觉”，认为自己看到了图片，并在回复中泄露了服务器的本地文件路径。
4.  **🟡 [轻微] MCP 进度通知解析失败** - [Issue #4052](https://github.com/HKUDS/nanobot/issues/4052) (已关闭)
    *   **问题**: v0.2.0 中 Pydantic 校验器未包含 `notifications/progress`，导致长时间运行的 MCP 服务器报错。

---

### 6. 功能请求与路线图信号
从近期的 Issue 和 PR 走向来看，NanoBot 的演进路线图发出了强烈的 **“精细化控制”与“异步执行”** 信号：

*   **信号一：子代理与定时任务的独立模型控制**
    *   [PR #4416](https://github.com/HKUDS/nanobot/pull/4416) (feat: cron 支持 model presets) 和 [PR #4415](https://github.com/HKUDS/nanobot/pull/4415) (spawn 支持模型重写) 表明，项目正在解耦全局模型配置。未来用户可以让主对话使用昂贵的 GPT-4o，而后台定时任务或子代理使用廉价的本地模型。
*   **信号二：Human-in-the-loop (人机交互回环) 架构落地**
    *   [PR #4411](https://github.com/HKUDS/nanobot/pull/4411) 引入了 `SuspendTurn` 机制，允许工具暂停当前轮次，等待人类输入后继续。这意味着 NanoBot 正从一个单纯的聊天机器人向**自动化工作流引擎**转型。
*   **信号三：终端 UI (TUI) 大幅增强**
    *   [PR #4329](https://github.com/HKUDS/nanobot/pull/4329) 为 `nanobot agent` 添加了默认的内联 TUI，提升了开发者和高级用户的本地命令行体验。

---

### 7. 用户反馈摘要
对 Issues 和 PR 描述的文本挖掘显示了当前用户的典型画像与痛点：

*   **👍 满意点**: 大量用户赞扬 v0.2.x 系列的 WebUI 相比 0.1.5 有了质的飞跃；对引入 Heartbeat（心跳机制）实现后台自主运行表示极度赞赏。
*   **💔 痛点 1 (降级策略)**: 用户极度依赖 DeepSeek 等偶尔不稳定的 API，当遇到“流式传输停滞 90 秒”（[Issue #4013](https://github.com/HKUDS/nanobot/issues/4013)）或返回空值时，如果 NanoBot 不能完美无缝地进行 Fallback，就会导致用户的实际业务阻断。
*   **💔 痛点 2 (文件与状态隔离)**: 高级开发者将 NanoBot 部署在不同项目目录时，发现配置文件存在“读写不对称”（[Issue #4374](https://github.com/HKUDS/nanobot/issues/4374)），全局状态污染了局部工作区，呼吁更严格的 Workspace 隔离。

---

### 8. 待处理积压
以下重要 PR/Issue 长期开启或未获合并，建议维护者重点关注：

*   **[PR #1945] XMPP channel** (创建于 2026-03-12):
    *   提供了完整的 XMPP 协议支持及文件传输功能。该 PR 已积压超过两个月，对于扩展 NanoBot 的非主流通讯平台支持有重要意义，需 review 以防严重代码冲突。
    *   🔗 [链接](https://github.com/HKUDS/nanobot/pull/1945)
*   **[PR #3591] feat(dream): add update scope controls** (创建于 2026-05-02):
    *   允许用户限制 Dream 模块仅更新记忆/上下文，防止自动整合导致技能偏移。涉及核心 Agent 行为控制，积压超 1 个半月。
    *   🔗 [链接](https://github.com/HKUDS/nanobot/pull/3591)
*   **[PR #3662] fix(tokens): avoid network loads during estimation** (创建于 2026-05-06):
    *   解决了在内网/离线环境下由于缺少本地 tiktoken 缓存而导致的不必要网络请求问题。这对于重视隐私和本地部署的用户群体至关重要。
    *   🔗 [链接](https://github.com/HKUDS/nanobot/pull/3662)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 开源项目动态日报**
**报告日期：** 2026-06-20
**项目：** NousResearch/hermes-agent

---

### 1. 今日速览
- **整体活跃度极高：** 项目在刚刚发布 v0.17.0 重大版本后，社区热情空前高涨。过去 24 小时内共有 50 条 Issue 更新（45 条活跃/新开）和 50 条 PR 更新（45 条待合并）。
- **基础设施全面开花：** 当前贡献者正在集中发力修复 Desktop 桌面端 UI/UX 痛点，并深度完善多平台网关（Telegram, Signal, Matrix, WhatsApp）的稳定性。
- **多模型与 OAuth 生态扩展：** 针对 OpenAI Codex、Anthropic Max、Z.AI GLM-5.2 等最新前沿模型与鉴权体系的适配与修复占据了核心议程，反映出项目追踪前沿模型生态的极速响应力。

### 2. 版本发布
项目于昨日（2026-06-19）发布了重磅里程碑 **[v2026.6.19: Hermes Agent v0.17.0 (The Reach Release)](https://github.com/NousResearch/hermes-agent/releases)**。
- **规模与体量：** 自 v0.16.0 以来，包含约 1,475 次提交、800 次合并 PR、1,693 个文件变更，代码新增 23.5 万行，删除 5 万行。超 300 个 Issue 被关闭，并汇聚了 245 位社区贡献者。
- **版本定性：** 继 v0.16.0 实现“将 Hermes 放到你的桌面”之后，v0.17.0 被定义为“The Reach Release”，标志着项目在多端触达、模型适配广度以及企业级可用性上的全面成熟。

### 3. 项目进展
今日的 PR 活动主要集中在提升系统健壮性、CI 效率以及会话性能：
- **性能大幅跃升：** PR [#48921](https://github.com/NousResearch/hermes-agent/pull/48921) 与 [#48932](https://github.com/NousResearch/hermes-agent/pull/48932) 将 Dashboard 统计接口的查询逻辑从 O(N) 循环优化为单次 `GROUP BY` 查询，使 `/api/sessions/stats` 响应时间从约 575ms 骤降至 <1ms。
- **CI 流程精简：** PR [#49272](https://github.com/NousResearch/hermes-agent/pull/49272) 重构了 CI 系统，使其仅运行受影响代码路径的测试，并将沉重的多架构 Docker 构建移至 main 分支，大幅降低开发者等待时间；PR [#49286](https://github.com/NousResearch/hermes-agent/pull/49286) 进一步增加了网络瞬断重试机制。
- **安全与鉴权修复：** PR [#49127](https://github.com/NousResearch/hermes-agent/pull/49127) 修复了 OpenAI Codex 多配置下 OAuth Token 轮换写入失效的高危安全漏洞，避免了死锁授权。

### 4. 社区热点
今日社区讨论最密集的领域聚焦于**企业级安全代理**与**上下文压缩机制**：
- **零知识凭证代理守护进程（Issue #4656）：** 获得 11 条深度讨论。用户提出实现 HTTP/HTTPS 代理层面的凭证零知识传递，以彻底解决子进程环境变量泄露的攻击面问题。这表明重度用户对企业级数据安全有极高诉求。
- **工具输出压缩机制（Issue #39691）：** 获得 9 个点赞和 6 条讨论。当前 LLM 上下文压缩主要发生在全局会话级别，社区强烈呼吁引入针对单次工具执行结果（如大量的 Web 抓取）的预压缩能力。
- **后台记忆串扰（Issue #32858）：** 暴露出 Agent 后台自我审查机制将其自身的“系统提示词”误认为是人类用户的偏好，并写入了长期记忆中。这触及了 AI 助手“幻觉记忆”的核心痛点。

### 5. Bug 与稳定性
按严重程度（P1 最高）排列，今日新报告或高度活跃的稳定性障碍如下：

- **[P1 - CLI] `hermes update` 在系统 Python 环境下崩溃 (Issue #48721)：** 
  在无 venv 环境下使用 uv 更新时，命中 macOS Homebrew Python 3.14 的 PEP 668 限制导致静默失败或错误更新。⚠️ *目前暂无对应修复 PR，需官方介入。*
- **[P1 - Cron/系统] 后台进程因 stderr 输出被异常误杀 (PR #49214)：** 
  Node.js 等子进程向 stderr 输出无害警告（如 "stdin is not a TTY"）时，触发监控将其 kill。目前已有针对此回归问题的修复 PR。
- **[P2 - 桌面端] 聊天界面疯狂跳动无法阅读 (Issue #47795)：** 
  桌面版在流式输出时及输出结束后，视口疯狂跳动，严重影响基础可用性。
- **[P2 - 兼容性] 严格的 Chat Completions 提供商拒绝带有时间戳元数据的请求 (Issue #47868 / #48523)：** 
  Hermes 在网关重播时会泄漏 `timestamp` 和 `observed` 等内部字段，导致 Fireworks 等严格的 OpenAI 兼容平台直接返回 400/404 错误。
- **[P2 - 鉴权] Anthropic Max OAuth Token 交换 404 (Issue #48534)：** 
  Anthropic 官方屏蔽了 `claude-cli/` 的 User-Agent，导致 Hermes 内置的 Claude Max OAuth 登录全面失效。

### 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 中，可以明确提取出项目下一阶段的演进路线图信号：
1. **全平台 Failover 与降级机制：** Issue [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) 呼吁支持 Web 搜索/抓取后端的“有序故障转移链”。结合近期的网关健壮性 PR，多源容灾将是下个版本的重点。
2. **多平台网关深度适配：** Issue [#49229](https://github.com/NousResearch/hermes-agent/issues/49229) 要求增加 Zulip 平台适配器；PR [#49280](https://github.com/NousResearch/hermes-agent/pull/49280) 正在修复 Signal 的静默发送失败。Hermes 正从单纯的“桌面助手”演变成“全渠道消息中枢”。
3. **前沿大模型原生能力支持：** Issue [#49279](https://github.com/NousResearch/hermes-agent/issues/49279) 要求为 GLM-5.x 添加原生的 Adaptive Thinking（自适应思考）支持；PR [#43217](https://github.com/NousResearch/hermes-agent/pull/43217) 正在将 Codex 的 app-server 审批路由至网关。

### 7. 用户反馈摘要
- **配置与部署痛点频发：** Windows 用户在使用 WhatsApp 网关和桌面更新时，遭遇系统 PATH 冲突（Issue [#49242](https://github.com/NousResearch/hermes-agent/issues/49242)）。企业用户呼吁提供免污染的 Windows 便携式/隔离化部署指南（Issue [#46199](https://github.com/NousResearch/hermes-agent/issues/46199)）。
- **TUI/Markdown 渲染硬伤：** Issue [#20084](https://github.com/NousResearch/hermes-agent/issues/20084) 反馈 TUI 界面渲染代码块时会“吃掉”星号（`*`），导致 C/C++ 的指针语法不可读，严重干扰开发者的代码审查体验。
- **桌面端自动行为引发反感：** Issue [#47500](https://github.com/NousResearch/hermes-agent/issues/47500) 反馈桌面端将聊天中的外部链接自动预览，导致触发了系统级的自定义协议（如 `bitbrowser://`），引发弹窗炸弹，用户期望更克制的渲染策略。

### 8. 待处理积压
以下重要 Issue 已沉淀较长时间，建议维护者团队优先关注排期：
- **Issue [#19753](https://github.com/NousResearch/hermes-agent/issues/19753)** (创建于 2026-05-04)：第三方 Anthropic 兼容提供商（如 Kimi Coding Plan）因 URL 拼接问题导致生成标题等辅助任务报 404 错误，至今未完全修复。
- **Issue [#38478](https://github.com/NousResearch/hermes-agent/issues/38478)** (创建于 2026-06-03)：使用 `camofox` 作为浏览器引擎时，截图存在严重的视口裁切与缩放错误，直接影响基于浏览器的 Agent 自动化任务链。
- **Issue [#33480](https://github.com/NousResearch/hermes-agent/issues/33480)** (创建于 2026-05-27)：Telegram 机器人的斜杠命令受到平台 30 个上限的截断，导致用户安装的自定义插件命令在菜单中不可见，限制了 Bot 插件生态的发展。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**日期**: 2026-06-20 | **追踪仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 📌 今日速览
过去 24 小时内，PicoClaw 保持了高度活跃的开发与维护状态。项目例行推送了 **v0.3.0** 的最新 Nightly 构建，标志着核心代码库正在向新大版本稳步迭代。社区侧活跃度回升，产生了 3 条新开或活跃的 Issue 以及高达 7 条活跃的 PR（包含多项关键安全修复与架构演进）。尽管新增了部分高优 Bug 报告（如助手失忆、Windows 路径异常），但代码贡献者积极响应，提报了涵盖 SSRF 防护增强、MCP 参数解析修复等高质量 PR，展现出项目健康的“响应-修复”正循环。

---

### 2. 🚀 版本发布
- ** nightly: Nightly Build (v0.3.0-nightly.20260619.287853ab)**
  - **详情**: [Release 链接](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)
  - **说明**: 这是基于 `main` 分支的自动化构建版本，包含最新的功能提交与 Bug 修复。
  - **注意事项**: Nightly 版本可能存在不稳定现象，仅建议测试与开发环境尝鲜，生产环境部署需谨慎。

---

### 3. 🔀 项目进展
今日项目整体在**安全防御机制与代码健壮性**方向迈出了坚实的一步。虽然单日合并的 PR 数量较少（1 条），但待审核队列中包含了大量重磅更新：

- **配置合并修复**: [PR #2956](https://github.com/sipeed/picoclaw/pull/2956)（已关闭）处理了加载 `.security.yml` 时导致先前已启用的 channels 被意外禁用的问题，保障了用户配置的稳定性。
- **SSRF 防护进阶**: [PR #3143](https://github.com/sipeed/picoclaw/pull/3143) 针对潜在的 `web_fetch` SSRF 绕过漏洞（Issue #3074），提升了 IP 分类器对 ISATAP IPv6 字面量的识别能力，封堵了内网探测风险。
- **类型断言加固**: 连续多个 PR（[PR #3091](https://github.com/sipeed/picoclaw/pull/3091), [PR #3053](https://github.com/sipeed/picoclaw/pull/3053)）修复了底层 Go 代码中未校验的类型断言可能引发的静默失败或 Panic 问题。

---

### 4. 🔥 社区热点
当前社区讨论的焦点集中在**AI 原生能力的边界与安全管控**上：

1. **[Issue #3114](https://github.com/sipeed/picoclaw/issues/3114): Telegram 渠道按对话类型的权限分级控制**
   - **热度**: 👍 1 | 评论 1
   - **分析**: 用户反馈在 Telegram 群组或频道中，现有的白名单机制无法限制 AI 执行高危操作（如 `exec` 或文件修改）。这反映了 PicoClaw 在走向多人群聊场景时，急需建立更细粒度的“安全沙箱”和上下文执行边界。
2. **[Issue #3150](https://github.com/sipeed/picoclaw/issues/3150): 它给自己整失忆了**
   - **热度**: 评论 2
   - **分析**: 极具画面感的标题背后，揭示了用户在长期对话或多轮复杂交互中遇到的上下文丢失痛点，直击 Agent 记忆管理机制的短板。

---

### 5. 🐛 Bug 与稳定性
今日报告的 Bug 主要围绕跨平台兼容性与状态记忆，按严重程度排列如下：

- **🔴 P0 严重 - Agent 上下文丢失（AI 失忆）**
  - **状态**: [Issue #3150](https://github.com/sipeed/picoclaw/issues/3150) (暂无关联修复 PR)
  - **表现**: 助手在交互过程中丢失历史记忆，严重影响多轮对话体验，需官方尽快定位是缓存清理机制还是内存溢出导致。
- **🟡 P1 高危 - Windows 环境读取目录崩溃**
  - **状态**: [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) (暂无关联修复 PR)
  - **表现**: `list_dir` 在 Windows 下因路径分隔符（`\` 与 `/`）不兼容 Go 的 `fs.FS` 规范，抛出 `invalid argument`。这会导致基于 Windows 的桌面端 Agent 彻底失去文件系统感知能力。
- **🟢 P2 中危 - Matrix 平台 ID 解析截断**
  - **状态**: [Issue #3044](https://github.com/sipeed/picoclaw/issues/3044) | **修复**: [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)
  - **表现**: `allow_from` 机制误判 Matrix 标准 ID（`@alice:example.com`），导致白名单授权静默失效。

---

### 6. 🗺️ 功能请求与路线图信号
从近期的 Issue 与 Feature PR 中，可以清晰捕捉到项目下一阶段的演进信号：

- **🤖 多智能体协同架构**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 提议引入第一方内部 Agent Collaboration Bus。这标志着 PicoClaw 正计划从“单体助手”向“多智能体通信集群”过渡，提供每个 Agent 独立邮箱与会话隔离。
- **🛡️ 基于场景的动态权限网络**: 结合 [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) 的诉求，未来 PicoClaw 有望在 `security.yml` 中引入基于 Channel 类型（私聊 vs 群组）的动态工具降级/熔断机制。
- **🧩 MCP 生态健壮性**: [PR #3048](https://github.com/sipeed/picoclaw/pull/3048) 修复了 CLI 继承参数泄露到 MCP 子命令的问题，说明项目正在持续优化对 Model Context Protocol 工具链的兼容性。

---

### 7. 🗣️ 用户反馈摘要
基于 Issue 报告与 PR 描述的真实用户反馈，提炼出以下几点核心观察：
- **跨平台体验不均衡**: Windows 用户遭遇路径硬编码导致的工具失效，反映出项目在 CI/测试矩阵中对 Windows 环境覆盖的不足。
- **部署范围扩展引发的安全焦虑**: 用户将 PicoClaw 接入 IM（如 Telegram）后，迅速意识到 AI 具有执行 Shell 的能力，对“误操作泄露隐私或破坏系统”存在明显担忧，急需官方提供“开箱即用”的分级权限模版。
- **隐蔽 Bug 导致的“玄学”问题**: 多个 PR 修复了 Go 代码中未经校验的类型断言（如 `native_search` 静默失效），说明部分用户可能遇到过 AI 工具能力莫名降级的体验，这通常与这些底层隐蔽 Bug 相关。

---

### 8. ⏳ 待处理积压
*提醒维护者：以下重要资产互动较少或已被标记为 `stale`，需要Review或人工介入。*

- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Feat/agent collaboration** (创建于 5 月 24 日)
  - **状态**: Stale。这是一个巨大的架构级 Feature，停滞近一个月，可能需要核心团队介入架构评估或 Rebase 代码。
- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) Windows 路径错误** (创建于 4 月 10 日)
  - **状态**: Stale。存活了 2 个月之久且有用户点赞，属于影响 Windows 可用性的硬伤，建议优先排期修复。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-06-20）

**数据来源**：github.com/qwibitai/nanoclaw
**分析师视角**：AI 智能体与个人 AI 助手开源项目

---

### 1. 今日速览
- **整体状态**：今日项目呈现出极高的社区贡献活跃度，共有 14 个 Pull Requests 更新，但无一合并，表明核心团队目前正处于代码审查或功能集成停滞期。
- **贡献者涌入**：大量新外部贡献者（如 mseep-ai, caburi00 等）提交了修复与新功能，主要聚焦于安全性加固、渠道集成优化及底层架构升级。
- **官方动态**：过去 24 小时内官方未发布任何新版本，这导致许多针对 Bug 和安全性的高质量修复 PR 正在积压等待合入。
- **健康度评估**：生态处于“高输入、缓输出”阶段，需警惕 PR 审查周期过长导致的社区贡献者流失风险。

---

### 2. 版本发布
**本日无新版本发布。**
*注：社区已有关于 v2.1.17 更新日志扩写的 PR (#2798) 提交，暗示近期可能有版本迭代计划，但今日无实际 Tag 或 Release 产出。*

---

### 3. 项目进展
虽然今日没有代码合并，但从待合并的 PR 中可以看出项目正在向以下几个重要方向推进：

- **安全基线大幅提升**：贡献者 `mksocial19-code` 提交了一系列高深度安全修复，包括将 `send_file` 读取限制在 `/workspace/agent` 内以防止目录遍历 (#2818, #2817)，以及 CLI 群组目录创建的防穿越校验 (#2814)。这些进展将显著提升 NanoClaw 作为个人助手在容器化运行时的安全性。
- **多渠道路由与消息适配优化**：针对 Discord 渠道长文本消息截断的痛点，多名贡献者通过不同路径提交了修复方案 (#2812, #2816)，促使 Chat SDK 桥接器成功引入 `maxTextLength` 分块机制。
- **安全与信任背书接入**：安全评估平台 MseeP.ai 官方提交了徽章添加申请 (#2819)，表明 NanoClaw 正在获得第三方安全审计生态的关注。
- **底层架构演进**：引入了 Apple Container 运行时及远程 OneCLI 网关的支持 (#2809)，这在架构上为 macOS 用户提供了一种 Docker 的原生替代方案。

---

### 4. 社区热点
今日讨论最活跃的聚焦点在**安全性与工作区隔离**：

- **[PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817) & [PR #2818](https://github.com/nanocoai/nanoclaw/pull/2818) (安全隔离探讨)**
  - **背后诉求**：AI 智能体在执行文件操作时具有极高的权限风险。社区（及 GPT Pro 的安全指导）强烈要求 AI 助手只能在被严格隔离的 `/workspace/agent` 目录内进行读取，阻断通过软链接或前缀伪造（如 `/workspace-extra`）访问宿主机敏感文件的路径。
- **[PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) (Apple Container 运行时)**
  - **背后诉求**：macOS 开发者希望摆脱 Docker Desktop 的资源开销，转用苹果原生虚拟化框架，这要求 NanoClaw 具备无缝切换底层容器运行时的能力。

---

### 5. Bug 与稳定性
今日报告的缺陷及隐患按严重程度排列如下：

1. **【严重 / 安全】工作区目录穿越漏洞**
   - **问题**：`send_file` 允许读取整个 `/workspace`，可能被恶意 Prompt 利用读取同级挂载的敏感配置。
   - **状态**：已有 Fix PR 等待合并：[#2818](https://github.com/nanocoai/nanoclaw/pull/2818)
2. **【中等 / 稳定性】Router 解析非对象 JSON 导致路由失败**
   - **问题**：当接收到原始基元 JSON（如纯数字或单字符串）时，`safeParseContent` 解析成功但返回非对象，导致 `.text` 属性读取为 `undefined`，消息直接丢弃。
   - **状态**：已有 Fix PR 等待合并：[#2815](https://github.com/nanocoai/nanoclaw/pull/2815)
3. **【中等 / 状态同步】Approvals 审批单上下文丢失**
   - **问题**：`pending_approvals` 数据库表中 `channel_type` 等字段始终为 `NULL`，导致审批列表 UI 无法正确跳转回原始消息上下文。详见 [PR #2820](https://github.com/nanocoai/nanoclaw/pull/2820)。
4. **【较低 / 触发器缺陷】容器运行器代码同步失效**（今日活跃 Issue）
   - **问题**：Session 源码新鲜度检查逻辑只监听 `index.ts`，如果开发者修改了 `ipc-mcp-stdio.ts` 但未改动 `index.ts`，容器内运行的 Agent 将使用过时代码。
   - **状态**：Issue [#2784](https://github.com/nanocoai/nanoclaw/issues/2784) 活跃中，暂无对应 Fix PR。

---

### 6. 功能请求与路线图信号
从待处理 PR 和 Issue 中，可以提取出关于项目下一步演进的关键信号：

- **权限继承与 CLI 编排**：PR [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) 请求通过 OneCLI 实现子 Agent 继承父级 Agent 权限。这表明用户正在将 NanoClaw 用于**多 Agent 编排**，急需细粒度的权限下放机制。极可能被纳入下一版本。
- **只读洞察面板**：PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) 添加了基于 CLI 派生数据的只读仪表盘 Skill。反映出用户不仅把 NanoClaw 当作执行器，还希望它能作为状态监控中心。
- **iMessage 渠道集成**：PR [#2792](https://github.com/nanocoai/nanoclaw/pull/2792) 修复了全新 checkout 时 iMessage 渠道文件写入失败的问题，说明 Apple 生态的深度融合依然是个人 AI 助手的重要路线图。

---

### 7. 用户反馈摘要
根据 Issue #2784 及各 PR 摘要提炼出当前真实用户痛点：

- **开发体验痛点**：在进行容器化测试时，由于缓存判定逻辑存在盲区（Issue #2784），开发者经常遇到“代码明明更新了，但 AI 助手还在跑旧逻辑”的灵异事件，极大地影响了开发调试效率。
- **长文本交互痛点**：Discord 用户频繁遇到 AI 回复被生硬截断的情况。用户期望 AI 能够智能感知不同平台的限制（Discord 2000 字符限制）并自动进行分段连贯输出。
- **跨平台管理痛点**：在处理工作流审批时，由于缺乏目标投递记录，用户经常在审批列表中迷失上下文（不知道这个审批请求是从哪个平台/频道发出来的）。

---

### 8. 待处理积压
⚠️ **维护者重点关注事项**：

- **长期高价值 PR 积压**：PR [#2605](https://github.com/qwibitai/nanoclaw/pull/2605)（父级权限继承）自 2026-05-24 创建至今已近一个月，更新于昨日但仍未合并。该功能涉及核心权限系统，长期搁置可能打击核心贡献者的积极性。
- **同一缺陷的并行冗余修复**：目前社区针对 Discord 截断（#2812, #2816）、JSON 解析（#2801, #2815）和工作区安全（#2817, #2818）分别提交了多个替代方案。**强烈建议维护团队尽快介入评判，关闭次要 PR，减少社区的算力浪费。**
- **Issue #2784 尚无回应**：核心缓存机制的缺陷目前仅有 1 条评论且无认领迹象，需排期修复。

---
*本报告基于 24 小时内 GitHub 动态数据自动生成与深度分析。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**: 2026-06-20 | **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

### 1. 今日速览
过去 24 小时内，NullClaw 项目整体活跃度呈现“维护与诊断”状态。项目暂无新版本发布，也没有任何 Issue 或 PR 被合并或关闭，研发重心当前集中于解决社区反馈的边缘环境兼容性问题。今日共有 2 条已有 Issue 更新了动态，并诞生了 1 条用于修复底层网络调用的代码提交（PR #966）。整体代码库保持稳定，开发者和维护者正在积极推进 Android/Termux 环境下的已知阻断性 Bug 修复。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
*今日无已合并或关闭的 PR。*
尽管今日没有代码合并进主分支，但针对 Termux (Android) 环境的网络请求阻断问题迎来了实质性的进展。开发者 [vernonstinebaker](https://github.com/vernonstinebaker) 提交了修复方案，试图将 HTTP 请求路由至原生的 curl，这标志着项目在跨平台底层网络通信优化的道路上迈出了关键一步。

### 4. 社区热点
今日社区的核心关注点高度集中在**跨平台适配（特别是移动端）**上：
*   **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)** 和 **[PR #966](https://github.com/nullclaw/nullclaw/pull/966)** 形成了标准的 Bug 报告与修复响应闭环，引发了开发者对 Zig 0.16 stdlib 在 Android 系统中 DNS 解析底层机制的探讨。
*   **[Issue #484](https://github.com/nullclaw/nullclaw/issues/484)** 反映了移动端（飞书平台）用户的集成体验问题，用户期望开箱即用的联网能力，这表明非桌面端用户群体正在扩大，对移动端 AI 助手能力的稳定性需求日益增加。

### 5. Bug 与稳定性
按严重程度排列，今日重点关注以下稳定性问题：

*   🔴 **严重 / P0：Android/Termux 构建失败及网络请求崩溃**
    *   **问题**: 在 Termux 环境下（`aarch64-linux-android`），执行构建或在运行时调用 `std.http.Client` 失败，提示 `AccessDenied` 或 `error.NameServerFailure`。
    *   **根因**: Termux 缺乏标准的 `/etc/resolv.conf`，导致 Zig 0.16 标准库底层的 `getaddrinfo()` 调用失败。
    *   **修复状态**: ✅ **已有对应 fix PR**。见 [PR #966](https://github.com/nullclaw/nullclaw/pull/966)，等待维护者 Code Review 与合并。
*   🟡 **中等 / P1：移动端网络查询功能失效**
    *   **问题**: 飞书端集成时无法进行联网查询。
    *   **修复状态**: ❌ 暂无对应 PR，仍需社区或维护者进一步提供复现日志以定位原因。详见 [Issue #484](https://github.com/nullclaw/nullclaw/issues/484)。

### 6. 功能请求与路线图信号
*   **信号一：跨平台兼容性增强（预期纳入下一版本）**。从 [PR #966](https://github.com/nullclaw/nullclaw/pull/966) 可以看出，项目正在通过条件编译或底层路由重写，剥离对特定 OS 标准库的绝对依赖。将 stdlib HTTP 强制路由至 `curl` 的策略极有可能作为热修复或小版本更新发布。
*   **信号二：企业级 IM 平台集成需求**。用户在 [Issue #484](https://github.com/nullclaw/nullclaw/issues/484) 中暴露了在飞书中使用 NullClaw 的场景。未来项目可能会在网关层或插件层加强对国内主流 IM 工具的网络代理/鉴权支持。

### 7. 用户反馈摘要
通过对今日评论和动态的提炼，真实用户痛点主要集中在**“在受限的 Linux/Android 环境中使用开源 AI 助手架构”**：
1.  **“沙盒/非标准环境”痛点**：用户习惯在诸如 Termux 这样的非 Root Android 终端环境中进行开发或运行轻量级服务，但底层语言（如 Zig）的标准库在处理 DNS 和网络套接字时，严重依赖原生系统配置，导致 `AccessDenied` 报错，极大地提高了移动部署门槛。
2.  **“开箱即用”预期落差**：普通飞书用户（如 Issue #484）期望 AI 助手具备自动的 Web 搜索能力，但实际受限于网络环境或配置缺失，导致“无法联网”的体验落差。

### 8. 待处理积压
*   ⚠️ **[PR #966](https://github.com/nullclaw/nullclaw/pull/966) (待 Review)**: 虽然是今日刚创建，但考虑到其解决了阻断性的构建/运行错误，建议维护者优先进行评审测试并尽快合并。
*   ⚠️ **[Issue #484](https://github.com/nullclaw/nullclaw/issues/484) (长期挂起)**: 该问题自 3 月创建至今已逾 3 个月，虽有 3 条讨论但未形成明确结论。建议维护者 @相关专家，或引导用户提供更多的网络抓包/控制台日志，以推进解决或将其标记为已知限制。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目动态日报**
**日期**: 2026-06-20
**分析数据源**: 过去 24 小时 GitHub 活动

---

### 1. 今日速览
IronClaw 项目在今日保持着极高的开发活跃度，共有 28 次 PR 更新与 5 条 Issue 更新。团队的核心精力目前高度聚焦于 **"Reborn"（重生）** 架构升级，涵盖底层并发处理、CI/CD 流水线优化以及功能特性的平滑迁移。今日的合并请求主要集中在基础设施提效上，例如引入 `mold` 链接器大幅缩短编译时间。虽然核心开发热火朝天，但端到端（E2E）测试出现挂起失败，且社区在特定大模型 API 兼容性上的反馈仍有待进一步解决。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。
当前项目处于密集的底层重构与功能并行开发阶段（特别是 Reborn 子系统），预计团队正在为下一个大版本或里程碑累积代码。

### 3. 项目进展
今日共有 12 个 PR 被合并或关闭，标志着项目在**工程效能**和**基础运行时**上迈出了坚实的一步：

*   **CI 编译性能大幅跃升**：合并了 [PR #5089](https://github.com/nearai/ironclaw/pull/5089) 和 [PR #5090](https://github.com/nearai/ironclaw/pull/5090)，全面采用 `mold` 链接器并解除了 `CARGO_BUILD_JOBS=1` 的串行限制。此举预计将为繁重的 Reborn Rust 编译任务减少近 40% 的时间，极大提升了 CI 的反馈效率。
*   **Reborn 项目前端页面落地**：合并了 Stack 5/5 的 [PR #5019](https://github.com/nearai/ironclaw/pull/5019)，WebChat v2 的 `/api/webchat/v2/projects` 接口及前端 CRUD 页面正式打通。
*   **QA 与测试基建完善**：关闭了 [PR #5095](https://github.com/nearai/ironclaw/pull/5095)、[PR #5096](https://github.com/nearai/ironclaw/pull/5096) 和 [PR #5097](https://github.com/nearai/ironclaw/pull/5097)，引入了 Reborn QA 录制/回放测试夹具，将 7 个项目设置的基准测试进行了端口对接，增强了跨层测试规范。
*   **遗留代码清理**：合并了 [PR #5064](https://github.com/nearai/ironclaw/pull/5064)，修复了之前紧急合并的 Projects 模块中遗留的类型时间戳和代码审查意见。

### 4. 社区热点
*   **审批系统 UI 痛点**：[Issue #5078](https://github.com/nearai/ironclaw/issues/5078) (已关闭) 反映了当 Shell 命令过长时，Reborn 的审批弹窗会被撑爆，导致用户难以查看操作详情并点击批准。这暴露了前端渲染长文本时的边界缺陷。
*   **Reborn 架构的开放性讨论**：由核心成员 ilblackdragon 发起的 [Issue #5091](https://github.com/nearai/ironclaw/issues/5091) 提出了构建统一特性开关 的构想，表明项目正在为未来的 A/B 测试、灰度发布和 SaaS 化多租户控制做准备。

### 5. Bug 与稳定性
按严重程度排列的当前 Bug 及稳定性问题：

*   **🔴 高 - Nightly E2E 测试失败**：[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)
    *   **状态**：由 github-actions 报告，Full E2E (features) 运行失败。
    *   **影响**：可能阻塞正式版本的发布。目前尚未有明确指向该问题的 Hotfix PR。
*   **🟡 中 - Shell 审批提示词误导**：[Issue #5088](https://github.com/nearai/ironclaw/issues/5088)
    *   **状态**：在本地使用 Reborn 时，系统有时会要求用户批准一个不存在的 `reads` 命令。
    *   **影响**：降低用户对安全审批机制的信任度。
*   **🟡 中 - 审批弹窗长命令渲染溢出**：[Issue #5078](https://github.com/nearai/ironclaw/issues/5078)
    *   **状态**：相关 Issue 已关闭，但需关注是否有对应的 UI 修复 PR 进入主干。
*   **🟠 低 - 阿里云 Qwen API 兼容失败**：[Issue #1012](https://github.com/nearai/ironclaw/issues/1012)
    *   **状态**：在使用 `openai_compatible` 接入阿里 Coding Plan 时触发 405 错误，社区反馈已有但仍在跟进中。

### 6. 功能请求与路线图信号
结合目前的 Issue 和待合并 PR，项目下一步的路线图信号非常清晰：

*   **精细化并发调度与引擎升级**：
    *   [PR #5085](https://github.com/nearai/ironclaw/pull/5085) 引入 `TurnRunScheduler`，打破串行执行瓶颈，支持基于用户和类型的并发执行上限，这是迈向多用户高并发的关键。
    *   [PR #4989](https://github.com/nearai/ironclaw/pull/4989) 将 Engine V2 的 LLM 调用接入 CostGuard，说明计费和 Token 统计系统正在向新一代引擎对齐。
*   **可扩展的工具与触发器生态**：
    *   [PR #5062](https://github.com/nearai/ironclaw/pull/5062) 引入了针对每个工具的细粒度权限覆盖模型（总是允许/每次询问/禁用），极大增强企业级部署的安全管控能力。
    *   [PR #5065](https://github.com/nearai/ironclaw/pull/5065) 增加了 One-shot 单次定时触发器，丰富了自动化工作流的编排能力。
*   **企业级托管雏形 (Hosted Single-tenant)**：
    *   [PR #5081](https://github.com/nearai/ironclaw/pull/5081) 添加了基于 PostgreSQL 的单租户托管配置文件，标志着 IronClaw 正在从纯本地工具向云端托管预览版过渡。

### 7. 用户反馈摘要
*   **真实痛点：UI 交互安全与冗余**：用户 [sunglow666](https://github.com/nearai/ironclaw/issues/5078) 指出，Agent 在执行复杂任务时，大量的命令文本不仅没有帮助，反而成为“视觉噪音”，干扰了人类监督者做出快速的 Allow/Deny 决策。
*   **真实痛点：多模型接入的一致性体验**：用户 [wznmickey](https://github.com/nearai/ironclaw/issues/1012) 表示，在其他类似框架中能顺利跑通的阿里通义千问 API，在 IronClaw 的 `openai_compatible` 模式下却遭遇了重试失败，反映出 IronClaw 在处理非标 OpenAI 接口时的容错机制有待加强。
*   **隐性诉求**：用户对本地 Agent 的“静默运行”抱有期待（如 [Issue #5088](https://github.com/nearai/ironclaw/issues/5088) 中对无关紧要审批的抱怨），说明项目需要进一步优化“自动放行安全操作”的智能策略。

### 8. 待处理积压
*   **长尾依赖升级阻塞**：[PR #4002](https://github.com/nearai/ironclaw/pull/4002) 由 Dependabot 于 5 月底发起，涉及 16 个 GitHub Actions 目录依赖的大版本升级（如 `actions/checkout` 从 v4 跨越到 v7），因潜在破坏性风险一直处于 Open 状态，建议团队尽快评估并分批消化。
*   **废弃工作流迁移**：[PR #4829](https://github.com/nearai/ironclaw/pull/4829)（已挂起多日）提议废弃休眠的 `reborn-integration` 工作流并将其整合到 nightly deep CI 中，这是技术债清理的重要一环，需引起 Maintainer 关注以避免 CI 资源的无效浪费。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**报告日期**: 2026-06-20
**项目分析期**: 过去 24 小时
**数据来源**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览
在过去 24 小时内，LobsterAI 迎来了较高的开发产出与社区维护动作，整体项目健康度良好。项目于 6 月 18 日（数据收录期内）成功发布了最新版本，重点升级了 Artifact 文件分享能力与语音输入模块。同时，社区互动保持活跃，共有 4 条 Issue 发生状态变更（3 条历史陈旧 Bug 被清理关闭，1 条重大架构级新功能提案被提交）。值得注意的是，今日代码合并（PR）活动相对静默，重心转向了版本发布后的反馈收集与积压问题清理。

### 2. 版本发布
**最新 Release: LobsterAI 2026.6.18**
- **发布时间**: 2026-06-18
- **核心更新**:
  - **功能升级**: Artifact 分享能力大幅增强，现已全面支持 Word, PPT, Excel, PDF, Markdown 和 Mermaid 等多种主流文件格式的分享。极大提升了 AI 生成内容在团队协作和多端互通场景下的实用性。
  - **缺陷修复**: 精简并修复了语音输入模块，移除了冗余机制，目前仅保留实时 ASR（自动语音识别），提升了语音交互的响应速度和稳定性。
- **迁移/破坏性变更提示**: 无明显破坏性变更，但依赖语音输入相关 API 的开发者需留意“仅保留 realtime asr”这一底层逻辑的调整。

### 3. 项目进展
今日虽无新的 PR 提交或合并（PR 更新: 0），但结合最新发布的 `2026.6.18` 版本，项目在功能完备性上迈出了坚实的一步：
- **多格式文件生态闭环**: 通过 [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) 落地的 Artifact 多格式分享功能，标志着 LobsterAI 正在从纯文本 AI 助手向“全能型文档处理与协作中枢”演进。
- **技术债务清理**: 关闭了 3 个长期悬而未决的陈旧 Issue，展现了维护团队对 Issue Tracker 进行春季大扫除的决心，有助于团队将精力聚焦于新版本的核心功能迭代。

### 4. 社区热点
今日社区最热点是用户 **woxinsj** 提交的全新架构级提案：
- **[Issue #2180] Build "AI Collaborator" Form...**（[链接](https://github.com/netease-youdao/LobsterAI/issues/2180)）
- **深度解析**: 该用户提议将 OpenClaw 从底层工具集升级为“AI 协作者平台”，主要面向“懂技术的非精英程序员”。核心诉求是引入自然语言命令栏和任务分发控制台，以实现**跨模型编排** 和**项目级记忆**。这反映了重度用户对 LobsterAI 的期望已不再局限于单点问答，而是希望它成为项目研发工作流中的“中枢调度大脑”。

### 5. Bug 与稳定性
今日未新增严重 Bug 报告，主要集中处理了由于生命周期管理导致的交互级缺陷（均已被关闭/标记为 stale）：
1. **[高] 输入框草稿丢失 Bug** ([#1471](https://github.com/netease-youdao/LobsterAI/issues/1471)): 用户在 300ms 内快速切换会话时，组件卸载导致防抖定时器失效，草稿未持久化而丢失。涉及状态管理的生命周期处理，目前已被关闭。
2. **[中] 历史消息重写覆盖 Bug** ([#1472](https://github.com/netease-youdao/LobsterAI/issues/1472)): 点击历史消息“重新编辑”时，直接静默覆盖输入框内未发送的新内容，缺少确认弹窗，目前已被关闭。
3. **[中] 本地大模型脚本兼容性问题** ([#1487](https://github.com/netease-youdao/LobsterAI/issues/1487)): 用户在使用本地 30B 模型时，调用 Python 脚本技能失败。这暴露了在对接较小参数量/本地化模型时，Agent 调度能力可能存在兼容性波动。已被关闭。

### 6. 功能请求与路线图信号
从最新的 Issue 动态和刚发布的版本中，我们可以捕捉到 LobsterAI 接下来的演进路线图信号：
- **从“执行器”到“编排器”**: [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) 的跨模型编排诉求，若被官方采纳，将是下一阶段的核心攻坚方向。
- **工作流无感化**: 解决诸如草稿丢失、静默覆盖（#1471, #1472）等边缘交互问题，说明团队正在追求“零打断”的沉浸式 Cowork（协作）体验。
- **多模态与本地化并行**: 优化语音实时识别及处理本地 30B 模型的报错，暗示项目正在为支持更多终端设备和私有化部署场景做底层加固。

### 7. 用户反馈摘要
从近期的 Issue 摘要中，可以提炼出当前用户的几个核心画像与痛点：
- **高频创作者的痛点**: 对“数据安全与防丢失”极度敏感。用户极其反感输入内容的意外丢失（如 #1471 和 #1472 的情况），期望 AI 助手具备像现代 IDE 一样极其可靠的本地草稿持久化机制。
- **私有化部署用户的诉求**: 部分用户使用本地算力（如 30B 模型）跑 Agent 任务，但发现 Skills 在不同 CLI 环境下的表现存在差异，说明社区对于模型能力边界的容错处理有较高期待。
- **内容流转的刚性需求**: 最新版本更新了 Artifact 的分享能力，精准命中了职场用户“需要将 AI 生成的结果一键转化为办公文档并分享”的核心痛点。

### 8. 待处理积压
虽然今日关闭了 3 个陈旧 Issue，但仍有需要官方重点关注的事项：
- **[高优待确认] Issue #2180 的产品评估**: 这是一个高质量的架构级 Proposal。建议维护团队尽早介入讨论，明确是否将其纳入 Roadmap，以免挫伤核心社区贡献者的积极性。
- **本地模型报错排查**: [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) 虽然因为长期未更新被关闭，但“本地模型跑 Python 脚本失败”可能并非个例。建议在后续版本中增加针对本地模型 Function Calling 兼容性的容错日志，辅助排查。

---
*分析师结论：LobsterAI 正处于从“好用的 AI 助手工具”向“全方位 AI 生产力及编排平台”转型的关键节点。新版本的文档分享功能极大增强了其实用价值，而社区对于跨模型调度（#2180）的呼声为项目指明了下一阶段的星辰大海。建议持续关注其多模态与 Agent 编排生态的演进。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报**
**日期**: 2026-06-20
**分析人**: AI 智能体与个人 AI 助手开源项目分析师

---

### 1. 今日速览
过去 24 小时内，CoPaw (QwenPaw) 展现出极高的社区活跃度与开发势头。项目共处理了 11 个 Issue 和 17 个 PR，核心开发团队与社区贡献者（如 nguyenthanhthe, lecheng2018 等）产出效率极高，单日提交了大量功能性增强与 Bug 修复。总体来看，项目目前正处于 v1.1.12 版本发布后的密集维护与功能迭代期，特别是在 UI 交互、多模型供应商适配和底层记忆（RAG）稳定性方面取得了显著进展。

### 2. 版本发布
* **今日无新版本发布**。项目当前主要围绕 `v1.1.12` 及 `v1.1.12.post1` 收集反馈并进行热修复。

### 3. 项目进展
今日虽然无新版本发布，但代码合入与审查工作极为密集，多项核心功能与修复已准备就绪：
* **内存与性能优化**：PR [#5332](https://github.com/agentscope-ai/QwenPaw/pull/5332) 已提交，针对 ChromaDB 引入索引维护和超时保护，彻底解决了长期使用导致的内存泄漏与崩溃问题。
* **多模型兼容性突破**：针对智谱 API 的模型级别连接测试全部失败的痛点，PR [#5339](https://github.com/agentscope-ai/QwenPaw/pull/5339) 通过修复 `check_model_connection` 的载荷格式，实现了对非标准 OpenAI 格式供应商的完美兼容。
* **核心交互逻辑重构**：今日多个高价值功能 PR 被提出，包括系统托盘最小化 ([#5326](https://github.com/agentscope-ai/QwenPaw/pull/5326))、基于时间衰减的记忆检索 ([#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325)) 以及多步任务原生 Todo 进度面板 ([#5323](https://github.com/agentscope-ai/QwenPaw/pull/5323))。

### 4. 社区热点
今日社区讨论最为热烈的焦点集中在**移动端/精简模式下的交互缺失**以及**Agent 思考过程的卡死现象**：
* **Issue [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329)** (左侧栏简化模式切换 Agent)：用户反馈在手机端访问 Web UI 时，侧边栏精简后无法切换 Agent。这反映出 CoPaw 在移动端适配和便携设备操控场景下的需求正在激增。（已有对应 PR #5334 提交）
* **Issue [#5328](https://github.com/agentscope-ai/QwenPaw/issues/5328) & [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333)** (DeepSeek 思考卡死 & UI 状态未复位)：多位用户反馈在使用 DeepSeek 模型时，Agent 经常在 thinking 阶段卡死，且提交后 UI 停滞。这暴露出当前控制台前端与不同 LLM 供应商流式输出/长思维链兼容性方面的痛点。

### 5. Bug 与稳定性
按严重程度排列，今日报告的核心 Bug 如下：
* **[Critical] 向量索引无限膨胀 (已有 Fix PR)**: Issue [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) 报告日常使用 3 个月后，ChromaDB 索引膨胀至 37GB，导致 `memory_search` 每半小时崩溃一次。PR [#5332](https://github.com/agentscope-ai/QwenPaw/pull/5332) 已提供自动压缩策略修复此严重稳定性隐患。
* **[High] 模型 API 测试连接全失败 (已有 Fix PR)**: Issue [#5330](https://github.com/agentscope-ai/QwenPaw/issues/5330) 报告智谱供应商 API 测试成功，但模型测试全军覆没。PR [#5339](https://github.com/agentscope-ai/QwenPaw/pull/5339) 已查明原因是智谱不支持多模态数组格式的 Ping 测试。
* **[High] Agent 响应卡死且 UI 未阻塞 (已有 Fix PR)**: Issue [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) 指出指令提交后 Agent 停滞，但输入框依然可输入。PR [#5335](https://github.com/agentscope-ai/QwenPaw/pull/5335) 通过在异常时 yield 失败事件修复了此状态机错乱。
* **[Medium] v1.1.12 升级导致图片不显示 (已有 Fix PR)**: Issue [#5320](https://github.com/agentscope-ai/QwenPaw/issues/5320) 指出 `send_file_to_user` 在新版失效。PR [#5324](https://github.com/agentscope-ai/QwenPaw/pull/5324) 发现是因为 `FileResponse` 默认为了附件下载而非内联展示，已修复。

### 6. 功能请求与路线图信号
从今日的 Issues 和 PRs 趋势来看，CoPaw 下一阶段的演进路线图信号非常明确：
* **更强大的记忆系统**：PR [#5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) 引入了 `scroll` 上下文管理策略（检索驱动而非原生压缩），以及 [#5325](https://github.com/agentscope-ai/QwenPaw/pull/5325) 引入的时间衰减记忆机制，表明项目正致力于打造接近人类记忆习惯的长期记忆引擎。
* **企业级多 Agent 交互体验**：Issue [#5327](https://github.com/agentscope-ai/QwenPaw/issues/5327) 提出在「智能体办公室」页面直接发起对话和切换会话；PR [#5323](https://github.com/agentscope-ai/QwenPaw/pull/5323) 添加了原生 Todo 进度面板。这预示着 CoPaw 正从一个简单的聊天机器人，向复杂任务编排和多 Agent 协同的工作台转型。
* **安全性强化**：PR [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310) 引入了基于 Linux 的 Bubblewrap 沙盒隔离，表明团队对代码执行环境的安全性要求正在向生产级标准靠拢。

### 7. 用户反馈摘要
从今日的互动中，可以提炼出 CoPaw 真实用户的以下核心痛点与评价：
* **痛点 1：升级带来的破坏性体验**。多位用户抱怨升级到 `v1.1.12` 后出现了图片无法显示、Tauri 版 Python 环境丢失 ([#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)) 等回归问题，影响了日常自动化技能的运行。
* **痛点 2：模型深度思考 机制的适配不足**。使用 DeepSeek 等具备深度思考能力的模型时，极易出现断流或 UI 假死，用户需要频繁手动点击“停止”和“继续”，极大破坏了沉浸感。
* **亮点：API 集成与自动化能力受认可**。Issue [#5322](https://github.com/agentscope-ai/QwenPaw/issues/5322) 表明，有大量用户正通过 API (`POST /api/console/chat`) 将 CoPaw 嵌入到自己的业务流或多 Agent 通讯录中，这说明其作为 Backend 服务的价值正在凸显。

### 8. 待处理积压
* **Issue [#5317](https://github.com/agentscope-ai/QwenPaw/issues/5317)** (Tauri 找不到 Python 环境)：此问题导致用户编写的 Skill 脚本全部失效，严重影响了重度用户的使用，目前仅 2 条评论，尚需官方开发人员确认是否为 Tauri 打包时剥离了 Conda 依赖所致。
* **PR [#5310](https://github.com/agentscope-ai/QwenPaw/pull/5310)** (Linux 沙盒隔离)：这是一个较为底层的安全架构改动，已经停留等待审查，建议维护团队优先 Review，以尽早提升代码执行的安全性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw 开源项目动态日报**
**日期**: 2026-06-20 | **分析维度**: AI 智能体与个人助手生态
**项目仓库**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
ZeroClaw 项目在过去 24 小时内保持**极高的活跃度**，共处理了 50 条 Issues（47 条新开/活跃）和 50 条 PR 更新（15 条已合并/关闭）。项目刚刚发布了 **v0.8.1 修复版本**，重点稳定了多 Agent 运行时、通信渠道与 Provider 栈，标志着 v0.8.x 系列进入成熟期。当前社区和核心贡献者正在迅速跟进 v0.8.0 遗留的高风险回归问题（如 Slack/Discord 渠道失效），同时为 **v0.9.0** 的安全架构重构（如 OIDC 支持）和 **v0.8.3** 的 MCP 管理面板做 RFC 层面的铺垫。整体来看，项目在快速迭代新功能的同时，展现出了良好的自查与修复能力。

---

### 2. 版本发布
**🚀 ZeroClaw v0.8.1 (首个 v0.8.x 补丁版本)**
- **更新规模**: 包含来自 45 位贡献者的 207 次提交，重点修复了 123 个 Bug，并新增了 46 项特性。
- **核心目标**: 巩固在 v0.8.0 中引入的多 Agent 运行时、渠道集成和 Provider 基础架构。
- **影响评估**: 这是一个至关重要的稳定性版本，解决了 v0.8.0 大版本更迭带来的架构割裂问题。建议所有运行 v0.8.0 的用户尽快升级。

---

### 3. 项目进展
今日共有 15 个 PR 被合并或关闭，项目在以下关键领域取得了实质性推进：
- **安全防护加固**: 合并了针对 `http_request` 工具的 SSRF 防御机制 ([PR #7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902))，将 DNS 解析强制路由到审查过的 IP 地址，防止 Agent 在执行网络请求时被恶意引导。
- **Provider 兼容性修复**: 修复了 OpenAI 兼容模型在剥离原生工具后历史记录的角色合并问题 ([PR #7931](https://github.com/zeroclaw-labs/zeroclaw/pull/7931))。
- **系统健壮性提升**: 修复了 Shell 工具执行时因管道缓冲区满导致的死锁问题 ([PR #7935](https://github.com/zeroclaw-labs/zeroclaw/pull/7935))。
- **MCP 协议深化**: 增加了每个 Agent 级别的 MCP Server 作用域限制 ([PR #7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747))，确保不同 Agent 只能调用授权的外部工具，大幅提升了企业级部署的安全性。

---

### 4. 社区热点
以下是过去 24 小时内讨论最热烈的 Issue，反映了社区的核心关切：
- **🔥 [Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) | v0.8.0 预编译二进制文件丢失 Slack/Discord 功能**
  - **热度**: 6 条评论 | **风险**: High | **优先级**: P1
  - **诉求分析**: 用户抱怨 v0.8.0 官方下载的二进制文件根本无法使用 Slack/Discord，降级到 0.7.5 才恢复正常。这是一个严重的构建流水线回归，直接切断了核心用户的通讯渠道接入。
- **🔥 [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) | [Bug]: 赋予了记忆过高的优先级**
  - **热度**: 6 条评论 | **风险**: High
  - **诉求分析**: 开发者发现 Agent（特别是在执行 Cron 定时任务时）过度依赖历史记忆，而忽视了当前系统提示词的指令。社区在讨论如何调整系统 Prompt 权重以平衡长短期记忆。
- **🔥 [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | [Feature]: 支持 OIDC 身份验证提供程序**
  - **热度**: 5 条评论 | **目标**: v0.9.0
  - **诉求分析**: 针对 Web Gateway 的企业级安全需求，社区强烈呼吁支持可插拔的 OIDC（OpenID Connect）认证体系。

---

### 5. Bug 与稳定性
今日报告的严重 Bug 集中在配置持久化和上下文处理层面：
1. **🔴 [P1] Agent 重命名导致状态损坏 ([Issue #7907](https://github.com/zeroclaw-labs/zeroclaw/issues/7907))**
   - **严重度**: S1 (阻塞工作流)
   - **描述**: 在 Gateway 中重命名 Agent 时，系统会在配置持久化写入磁盘前移动外部状态，若发生中断会导致严重的数据不一致。
2. **🔴 [P1] Agent 删除引发镜像级联故障 ([Issue #7941](https://github.com/zeroclaw-labs/zeroclaw/issues/7941))**
   - **严重度**: S1 (阻塞工作流)
   - **描述**: `delete_agent_cascade()` 具有与上述重命名完全相同的持久化顺序缺陷，会导致状态被提前清除。
3. **🟠 [P1] 默认 32k 上下文预算被系统提示词撑爆 ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))**
   - **严重度**: S1 (阻塞工作流)
   - **描述**: 默认最大 Token 设为 32000，但现在光系统 Prompt 和工具定义就占了约 3.3 倍的预算，导致 Agent 在第一轮对话就开始疯狂截断上下文。*目前已有相关 PR ([#7973](https://github.com/zeroclaw-labs/zeroclaw/pull/7973)) 正在尝试修复上下文压缩逻辑。*
4. **🟠 [P1] Gemini 模型 400 错误: 违反历史记录序列化不变量 ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302))**
   - **严重度**: S1
   - **描述**: ZeroClaw 在调用 Gemini 时，错误地将包含 `tool_calls` 的 Assistant 消息置于第一条 User 消息之前，触发 Gemini API 的严格校验导致请求被拒绝。

---

### 6. 功能请求与路线图信号
从今日的 PR 和 Issue 中，可以清晰看出 ZeroClaw 接下来几个版本的演进方向：
- **Next Step (v0.8.x 系列): 智能清理与界面优化**
  - **临时文件自动清理** ([PR #7923](https://github.com/zeroclaw-labs/zeroclaw/pull/7923)): 为存储受限的设备（如树莓派、低端 VPS）提供自动清理下载附件和快照的能力。
  - **UI 交互升级** ([PR #8000](https://github.com/zeroclaw-labs/zeroclaw/pull/8000)): 为 ZeroCode TUI 添加了更直观的上下文窗口使用率进度条 ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946))。
- **Mid-term (v0.8.3): 插件与 MCP 管理**
  - 正在规划基于 Web 的 MCP 插件仪表盘 ([Tracker #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320))。
  - 引入了 **WASM Component-Model 插件宿主代码** ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928))，这意味着 ZeroClaw 将支持以 WebAssembly 形式安全地加载第三方扩展，这是一个巨大的架构跨越。
- **Long-term (v0.9.0): 全面安全化与多租户支持**
  - OAuth 认证爆发：除了 OIDC，今天还合并了对 xAI/Grok OAuth 登录的支持 ([PR #7945](https://github.com/zeroclaw-labs/zeroclaw/pull/7945)) 和 Email OAuth2 设备码授权流程 ([PR #8008](https://github.com/zeroclaw-labs/zeroclaw/pull/8008))。

---

### 7. 用户反馈摘要
从 Issues 描述中，我们提炼出目前真实用户的几个核心体验痛点：
- **多模态处理的脆弱性**: Telegram 用户反馈，当发送两张或以上的图片时，Agent 会把每张图片当成一次独立的 LLM 请求，导致回复多条错乱信息 ([Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514))。此外，视觉提供者的静默失效也是常见痛点 ([Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841))。
- **定时任务不可靠**: 有用户报告其每日简报 Cron Job 在 3 分钟内被触发了 20 次 ([Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037))，表明当前的调度器缺乏并发锁机制。
- **可观测性缺失**: 开发者对于“模型成本未计入定时任务和 Web 渠道”感到沮丧 ([Issue #5221](https://github.com/zeroclaw-labs/zeroclaw/issues/5221))，说明在多入口接入下，ZeroClaw 的计费和日志监控粒度仍需细化。

---

### 8. 待处理积压
以下重要 Issue 需要维护者团队投入精力或给予状态更新：
- **⚠️ MQTT 安全漏洞集群待修 ([Issue #5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869))**
  - 状态：Blocked | 积压时长：2个月
  - 原因：`cargo deny` 检查出 4 个 RUSTSEC 安全警告，均源于唯一的 MQTT 客户端传递依赖 `rumqttc v0.25.1`。需要尽快寻找替代方案或向上游提交 Patch。
- **⚠️ 上下文回复意图预检耗时严重 ([Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067))**
  - 状态：Accepted
  - 原因：目前渠道回复意图的判定占用了主模型的大量时间，阻塞了 Agent 响应。社区希望使用轻量级小模型加硬超时来替代。
- **⚠️ MCP 协议功能缺失 ([Issue #4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467))**
  - 状态：In-progress | 积压时长：近 3 个月
  - 原因：当前 ZeroClaw 仅把 MCP 当作“纯工具”调用，未能暴露 MCP Resources 和 Prompts，限制了与其他生态体系的深度集成。

</details>