# OpenClaw 生态日报 2026-04-06

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-05 22:03 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

这里是 **OpenClaw** 项目 2026-04-06 的动态日报。

### 📅 OpenClaw 项目日报 (2026-04-06)

#### 1. 今日速览
OpenClaw 今日维持了极高的社区活跃度，过去 24 小时内共有 **500 条 Issue 更新** 和 **500 条 PR 更新**，显示出该项目强大的迭代动力和庞大的用户基数。开发重心明显集中在 **Agent 核心稳定性**（特别是子代理会话和心跳机制）以及 **OpenAI 兼容层的数据处理**（如流式传输和工具调用解析）。虽然官方未发布新版本，但社区提交了大量针对 OpenAI 流式输出泄漏、Discord/Matrix 通道缺陷的修复 PR。值得注意的是，关于 **MCP (Model Context Protocol)** 原生支持的讨论正在升温，预示着项目可能即将迎来架构层面的重要扩展。

#### 2. 版本发布
*   **无新版本发布**：过去 24 小时内无官方 Release。

#### 3. 项目进展
尽管没有版本发布，但代码库合并活动频繁，主要集中在修复由于引入复杂特性（如 Phase-aware 文本提取）导致的回归问题：

*   **OpenAI 流式输出与注释泄漏修复**：
    *   PR #61481 和 #61463 修复了 Agent 在使用 OpenAI 格式时的“注释泄漏”问题，防止内部推理内容发送给用户。
    *   PR #61528 和 #61529 优化了 OpenAI WebSocket 流的重放逻辑，修复了参数解析和阶段标记继承问题。
*   **子代理与任务流稳定性**：
    *   PR #61525 修复了子代理在重试时向父会话重复发送完成通知的 Bug。
    *   PR #61526 修复了心跳任务错误路由到子代理会话的问题，确保心跳始终锚定在主会话。
*   **通道与集成修复**：
    *   PR #61372 恢复了 Discord DM 语音消息的转录功能。
    *   PR #61450 优化了 Matrix 通道的流式通知逻辑，减少了不必要的打扰。
    *   PR #59115 修复了 Slack 无法读取转发消息上下文的问题。

#### 4. 社区热点
今日社区讨论主要集中在架构扩展、执行故障和特定模型适配问题上：

1.  **[RFC] 原生 MCP 客户端支持** (Issue #29053 👍 17)
    *   **链接**: [openclaw/openclaw Issue #29053](https://github.com/openclaw/openclaw/issues/29053)
    *   **分析**: 社区强烈呼吁 OpenClaw 原生支持作为 MCP 客户端连接外部 MCP 服务器。这表明用户希望 OpenClaw 能打破现有的工具孤岛，融入更广泛的 AI 工具链生态，而不仅仅是作为服务端提供工具。
2.  **Docker 容器内 Skill 安装失败** (Issue #14593 👍 15)
    *   **链接**: [openclaw/openclaw/openclaw/issues/14593](https://github.com/openclaw/openclaw/issues/14593)
    *   **分析**: 这是一个高赞老问题，反映了在容器化环境中依赖 `brew` 安装 Skill 的痛点。这暴露了 OpenClaw 在无状态或标准化部署环境下的包管理依赖缺陷。
3.  **国际化支持** (Issue #3460 👍 7, 评论 120)
    *   **链接**: [openclaw/openclaw Issue #3460](https://github.com/openclaw/openclaw/issues/3460)
    *   **分析**: 官方虽然关闭了此 Issue 并表示“目前没有带宽支持多语言”，但高达 120 条的评论和持续的反馈表明，全球化部署是阻碍 OpenClaw 普及的一大门槛。
4.  **Agent 身份与信任验证 RFC** (Issue #49971)
    *   **链接**: [openclaw/openclaw Issue #49971](https://github.com/openclaw/openclaw/issues/49971)
    *   **分析**: 涉及 ERC-8004 和 W3C DID 标准，讨论为 Agent 增加原生密码学身份。这反映了企业级用户对 Agent 间交互安全性和可追溯性的高级需求。

#### 5. Bug 与稳定性
今日报告了多个影响核心功能的严重 Bug，尤其是模型调用和会话管理方面：

*   **严重 - OpenRouter 认证失败** (Issue #51056)
    *   **描述**: OpenClaw 未发送 `Authorization` 头，导致所有 OpenRouter 请求返回 401。
    *   **状态**: Open，无修复 PR。
*   **严重 - GPT-5.3-codex 拒绝执行工具** (Issue #53959)
    *   **描述**: 更新到 2026.3.23-2 后，Codex 模型确认任务但不再调用任何工具。
    *   **状态**: Open，疑似回归。
*   **严重 - Session_send 找不到会话** (Issue #52875)
    *   **描述**: 升级后主 Agent 无法联系其他 Agent，Session 列表查询异常。
    *   **状态**: Open，回归 Bug。
*   **高危 - gh-issues Skill 提示词注入** (Issue #45740)
    *   **描述**: `gh-issues` 技能直接将未经清洗的 GitHub Issue 内容注入提示词，存在 Prompt Injection 风险。
    *   **状态**: Open，安全问题。
*   **中等 - WhatsApp 语音转录失效** (Issue #59437)
    *   **描述**: 2026.4.1 版本回归导致 WhatsApp 语音无法自动转录。
    *   **状态**: Closed (已有修复提交)。

#### 6. 功能请求与路线图信号
*   **原生 MCP 支持**: 结合 #29053 的热度，MCP 客户端集成极有可能成为下一阶段的核心功能，以解决工具碎片化问题。
*   **会话主动唤醒 API** (PR #60951): 正在开发允许插件向冷会话注入消息的 API。这将为“定时提醒”、“后台监控报警”等自动化场景铺平道路。
*   **Gemma 4 前向兼容** (PR #61507): 已提交对 Gemma 新模型的支持，显示项目对前沿模型跟进速度很快。

#### 7. 用户反馈摘要
*   **痛点：升级导致的模型行为异常**。多位用户反馈升级到 2026.3.x/4.x 版本后，原本正常的工具调用链条断裂（如 Issue #53959, #54844）。
*   **痛点：内部思考内容泄漏**。用户对 Agent 将内部推理过程直接发送到 Slack/Telegram 感到困扰（Issue #59150, #25592），这促使开发者今日提交了多个关于 Phase-aware text extraction 的修复。
*   **场景：Docker 部署困难**。容器化用户对 Linux 环境下缺乏 `brew` 导致的 Skill 安装失败感到沮丧，希望官方镜像能预置常用依赖。

#### 8. 待处理积压
*   **[Security] Matrix 插件危险代码模式** (Issue #59085): 尽管已被官方标记为已解决（通过拦截安装），但其根源代码仍需审查。
*   **SQL 注入风险** (Issue #29951): `/api/metrics/database` 端点的 SQL 注入漏洞报告尚未得到代码层面的修复确认，建议安全团队优先关注。
*   **长时间运行会话的上下文压缩破坏** (Issue #27804): 长期存在的 Bug，会导致 `tool_use` 配对丢失，严重影响长程对话的稳定性。

---
*分析师总结：OpenClaw 目前处于快速功能迭代与稳定性磨合的深水区。虽然 OpenAI 兼容性和多模态能力在不断增强，但近期频繁的回归问题（特别是工具调用和会话路由）表明代码重构（如引入 Phase 机制）带来了短期阵痛。建议用户在升级至 4 月版本时注意测试工具调用链路的完整性。*

---

## 横向生态对比

# 2026-04-06 开源 AI 智能体生态横向对比分析报告

## 1. 生态全景
2026年 4 月的开源 AI 智能体生态正处于**从“单一对话工具”向“多模态自动化平台”转型的深水区**。项目间的竞争焦点已不再局限于模型接入，而是转向了**架构稳定性**（解决回归问题）、**生态连通性**（MCP 协议、IM 渠道）以及**企业级可用性**（安全沙箱、高可用部署）。虽然 OpenClaw 凭借庞大的用户基数占据了流量中心，但 NanoBot、IronClaw 等挑战者在架构先进性和垂直场景稳定性上正迅速追赶，整个生态呈现出“功能大爆发”与“维护成本高企”并存的态势。

## 2. 各项目活跃度对比

| 项目名称 | Issue 更新 | PR 更新 | 版本发布 | 健康度/状态 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | 🟡 **高负载/震荡** | 修复流式输出回归，讨论 MCP 客户端支持，社区热度最高但 Bug 频发。 |
| **NanoBot** | 20 | 120 | 无 | 🟢 **高活跃/修正** | 修复系统死锁，引入沙箱安全，Windows 稳定性获赞，PR 积压严重。 |
| **IronClaw** | 3 | 46 | 无 | 🟢 **基建冲刺** | 专注 E2E 测试覆盖与 CI 安全，强化 Slack/Telegram 渠道，企业级特质显现。 |
| **NanoClaw** | 7 | 39 | 无 | 🟢 **架构重构** | 引入多实例 API，集成 Google Workspace，解决内存与死锁问题。 |
| **CoPaw** | 39 | 8 | 无 | 🟡 **修复期** | 重点解决 Windows 平台兼容性及 CPU 空闲占用过高问题，扩展 WhatsApp。 |
| **LobsterAI** | 2 | 6 | 无 | 🟢 **功能演进** | 新增 Gmail 触发器与模型故障转移，UI 现代化升级。 |
| **Moltis** | 6 | 8 | 无 | 🟢 **快速响应** | 修复 Provider 管理痛点，增加代理支持与多模型选择，用户体验提升显著。 |
| **EasyClaw** | 0 | 1 (Open) | 无 | ⚪ **静默维护** | 仅有一个国际化 PR 待合并，处于低活跃状态。 |
| **PicoClaw** | - | - | - | 🔴 **无数据** | 数据抓取失败/无活动。 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ **休眠** | 过去 24 小时无活动。 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ **休眠** | 过去 24 小时无活动。 |

> **注**：健康度评估基于 Issue/PR 比例、严重 Bug 数量及社区反馈情绪。

## 3. OpenClaw 在生态中的定位

*   **生态流量入口与事实标准**：OpenClaw 依然保持着压倒性的社区活跃度（单日千级更新），是新手入门和大众讨论的首选。其 OpenAI 兼容层的优化（如流式传输修复）直接影响着下游大量应用的体验。
*   **优势**：**生态规模**与**多模态能力**。庞大的用户基数意味着问题暴露快，但也意味着不仅有更多的 Bug 报告，也有更快的社区补丁。
*   **劣势**：**稳定性与包袱**。相比于 NanoBot 等轻量级竞品，OpenClaw 近期频发的回归问题（如工具调用失效、会话路由错误）显示出其代码库的复杂性已成为负担。此外，Docker 环境下的 Skill 安装痛点长期未解，限制了其在标准化部署中的表现。
*   **定位差异**：如果说 NanoBot 追求“小而美、稳而快”，IronClaw 追求“企业级安全与编排”，OpenClaw 则是一个“大而全但略显臃肿”的通用型平台。

## 4. 共同关注的技术方向

1.  **MCP (Model Context Protocol) 原生支持**
    *   **涉及项目**：OpenClaw (Issue #29053), Moltis (PR #555)
    *   **趋势**：社区强烈呼吁从“私有工具链”转向“标准化工具协议”。OpenClaw 的 RFC 显示用户希望 Agent 能作为客户端连接外部 MCP 服务器，打破工具孤岛；Moltis 则已率先支持 Streamable HTTP MCP。
2.  **多渠道与即时通讯 (IM) 深度集成**
    *   **涉及项目**：NanoBot (Telegram 线程), CoPaw (WhatsApp), IronClaw (Slack/Telegram E2E), LobsterAI (Gmail)
    *   **趋势**：Agent 正在从 Web Console 走向用户日常沟通的 IM 渠道。重点已从简单的消息收发转向复杂的线程管理、语音转录和通知逻辑优化。
3.  **沙箱安全与权限控制**
    *   **涉及项目**：NanoBot (bubblewrap 沙箱), CoPaw (File Guard 绕过), NanoClaw (只读挂载)
    *   **趋势**：随着 Agent 执行能力的增强，如何防止 `rm -rf` 或读取敏感文件成为核心议题。社区正在从简单的路径限制转向系统级沙箱隔离。

## 5. 差异化定位分析

*   **OpenClaw (全能型)**：侧重于 Agent 核心框架与多模态，目标是成为“全能助手”。主要痛点在于新旧架构交替期的稳定性。
*   **NanoBot (轻量高效型)**：侧重于底层稳定性与 Windows 兼容性。适合个人开发者在本地或边缘设备（如嵌入式）上运行，强调“养得顺手”。
*   **IronClaw (企业/基建型)**：侧重于 E2E 测试、CI 安全和确定性工作流。适合对稳定性有极高要求的企业级场景，近期并未追求新功能，而是通过测试覆盖率来换取信任。
*   **Moltis & LobsterAI (易用型/垂直场景)**：Moltis 专注于解决 Provider 管理和代理配置的痛点，体验更像一个完善的商业软件；LobsterAI 则在自动化触发（Gmail/定时）上发力，向 RPA（机器人流程自动化）方向演进。

## 6. 社区热度与成熟度

*   **第一梯队 (快速迭代/高负载)**：**OpenClaw**。处于“大版本前的阵痛期”，功能迭代极快但 Bug 丛生，需要依靠社区大量补丁维持运行。
*   **第二梯队 (质量巩固/上升期)**：**NanoBot, IronClaw, NanoClaw**。这些项目虽然体量小于 OpenClaw，但代码质量把控更严，架构更现代。特别是 NanoBot 在解决死锁和安全问题后，展现出极强的后劲。
*   **第三梯队 (功能补全/细分市场)**：**CoPaw, Moltis, LobsterAI**。正在填补特定领域的空白（如 CoPaw 的 WhatsApp 支持，LobsterAI 的自动化），处于功能完善阶段。
*   **长尾梯队 (休眠/低活跃)**：**EasyClaw, TinyClaw**。目前缺乏显著维护动力。

## 7. 值得关注的趋势信号

1.  **回归问题频发警示架构老化**：OpenClaw 和 CoPaw 均报告了严重的空闲 CPU 占用或工具调用失效问题。这表明在现有架构上堆砌功能（如 Phase-aware 机制）已接近临界点，**重构与解耦**将是下一阶段各项目的核心任务。
2.  **“被动触发”成为新标配**：LobsterAI 的 Gmail 监听、OpenClaw 的会话唤醒 API，标志着 Agent 正在从“你问我答”的 Chatbot 进化为“监听-响应”的**后台自动化进程**。
3.  **本地模型适配的“最后一公里”难题**：多个项目（LobsterAI, CoPaw）的用户反馈在接入本地 30B+ 模型或特定模型（Gemma 4, Minimax）时存在工具调用解析失败的问题。这暗示了**通用协议层（如 OpenAI Compatible）与本地模型实际能力之间仍存在鸿沟**，谁能填平这个鸿沟，谁就能赢得离线/隐私敏感型用户的市场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-06)

**数据来源**: GitHub (HKUDS/nanobot)
**分析师**: AI 开源项目观察组

---

## 1. 今日速览

NanoBot 今日呈现出**高活跃度与高维护成本并存**的态势。社区贡献极其活跃，单日 PR 更新量高达 120 条，显示出强大的开发动力，主要集中在多渠道接入（Teams、WebSocket）和核心功能增强上。然而，v0.1.4.post6 版本似乎引入了显著的回归问题，导致 Issues 激增（单日 20 条），特别是针对嵌入式设备兼容性、搜索功能挂起及 Ollama 工具调用等方面的故障报告。目前仍有 95 个 PR 处于待合并状态，代码积压较为明显，建议维护者关注合并节奏。

## 2. 版本发布

*   **无新版本发布**。
    *   *注*：虽然无正式 Release，但社区正通过 PR 修复 `nightly` 版本中的严重 Bug（如 DuckDuckGo 挂起），建议用户关注 `nightly` 分支动态。

## 3. 项目进展

今日共有 **25 个 PR 被合并/关闭**，显著提升了系统的健壮性与扩展性：

*   **🚀 核心修复**:
    *   **DuckDuckGo 挂起修复** ([PR #2805](https://github.com/HKUDS/nanobot/pull/2805)): 为 DDG 搜索添加了 `asyncio` 超时保护，解决了导致系统全面死锁的严重问题。
    *   **Jina 搜索修复** ([PR #2808](https://github.com/HKUDS/nanobot/pull/2808)): 修正了 Jina API 请求格式并恢复了向 DuckDuckGo 的回退机制。
    *   **Telegram 线程支持** ([PR #2793](https://github.com/HKUDS/nanobot/pull/2793)): 适配了 Telegram 最新的 Bot 线程模式，修复了 DM 场景下的兼容性。
*   **🛡️ 安全性增强**:
    *   **沙箱执行** ([PR #1940](https://github.com/HKUDS/nanobot/pull/1940)): 引入 `bubblewrap` 沙箱包装 exec 调用，防止 Agent 访问工作空间以外的文件系统，初步回应了配置泄露风险。
*   **🧹 代码重构**:
    *   [PR #2794](https://github.com/HKUDS/nanobot/pull/2794) 优化了 Hook 方法调用链并增强了错误日志，提升了可维护性。

## 4. 社区热点

*   **[争议] 安全与便利的博弈** ([Issue #1873](https://github.com/HKUDS/nanobot/issues/1873))
    *   **热度**: 👍 0 | 评论: 10
    *   **分析**: 尽管该 Issue 已关闭，但讨论仍在继续。用户 `kinchahoy` 指出 NanoBot 能够通过 `exec()` 读取 `config.json` 并泄露密钥。虽然 [PR #1940](https://github.com/HKUDS/nanobot/pull/1940) 提供了沙箱方案，但社区仍在讨论是否需要更深层的架构重构（如分离用户权限）。
*   **[反馈] 稳定性完胜竞品** ([Issue #2774](https://github.com/HKUDS/nanobot/issues/2774))
    *   **热度**: 👍 1 | 评论: 6
    *   **分析**: 用户 `bigsinger` 实测对比了 NanoBot 与 `openclaw`，高度赞扬 NanoBot 在 Windows 下的稳定性，称其 "完爆 openclaw"，未出现崩溃或中毒现象。这表明项目在核心稳定性上已建立良好口碑。
*   **[阻塞] 搜索功能导致系统挂起** ([Issue #2828](https://github.com/HKUDS/nanobot/issues/2828) & [Issue #2804](https://github.com/HKUDS/nanobot/issues/2804))
    *   **分析**: 多名用户反馈 DuckDuckGo 搜索会导致整个系统（不仅是进程）挂起，甚至无法通过 Ctrl+C 终止。这是目前影响可用性的最高优先级问题。

## 5. Bug 与稳定性

今日报告的 Bug 集中在 **v0.1.4.post6** 版本及 **网络搜索模块**，按严重程度排序如下：

*   **🔴 严重**:
    *   **系统级死锁** ([Issue #2828](https://github.com/HKUDS/nanobot/issues/2828)): DuckDuckGo 搜索导致宿主机假死，需强制断电。*(已有 Fix PR #2805)*
    *   **嵌入式设备失效** ([Issue #2816](https://github.com/HKUDS/nanobot/issues/2816)): 升级 post6 后，全志 H618 开发板上 Agent 无法回复消息，影响了 IoT 场景部署。
    *   **Ollama 工具调用损坏** ([Issue #2829](https://github.com/HKUDS/nanobot/issues/2829)): Ollama 模型无法调用任何工具，疑似格式转发错误。
*   **🟠 中等**:
    *   **安全策略误杀** ([Issue #2796](https://github.com/HKUDS/nanobot/issues/2796)): 新的安全模块阻止了对 `localhost` 的访问，导致 PinchTab 等本地浏览器自动化工具失效。
    *   **工作空间限制失效** ([Issue #2826](https://github.com/HKUDS/nanobot/issues/2826)): 即使开启了 `restrictToWorkspace=true`，Agent 仍可删除任意位置的文件。
    *   **Minimax 提供者失效** ([Issue #2590](https://github.com/HKUDS/nanobot/issues/2590)): post6 版本导致内置 Minimax 提供者无法工作。
*   **🟡 轻微**:
    *   **思考过程泄露** ([Issue #2795](https://github.com/HKUDS/nanobot/issues/2795)): Telegram 端会将 Agent 的内部思考过程 一起发送给用户。

## 6. 功能请求与路线图信号

*   **🚀 多渠道统一会话** ([Issue #2798](https://github.com/HKUDS/nanobot/issues/2798))
    *   用户希望实现跨平台（Discord/Telegram 等）的会话同步。这暗示了向 "Personal Cloud Agent" 方向演进的强需求。
*   **🔌 WebSocket 支持** ([Issue #2819](https://github.com/HKUDS/nanobot/issues/2819) & [PR #1341](https://github.com/HKUDS/nanobot/pull/1341))
    *   社区强烈建议增加 WebSocket Server Channel，以便开发自定义客户端。目前 [PR #1341](https://github.com/HKUDS/nanobot/pull/1341) 正在推进此功能，大概率会被纳入下个版本。
*   **🧠 关键词触发记忆** ([PR #2827](https://github.com/HKUDS/nanobot/pull/2827))
    *   提出了一套基于关键词的主动记忆召回系统，弥补了当前被动记忆的不足。
*   **📊 状态命令增强** ([Issue #2820](https://github.com/HKUDS/nanobot/issues/2820))
    *   建议在 `/status` 指令中显示 Web Search API 的配额消耗情况。

## 7. 用户反馈摘要

*   **痛点**: 近期版本（post6）兼容性差，特别是对 MiniMax 提供者和嵌入式环境的支持出现倒退。
*   **安全担忧**: 用户对企业级部署中的密钥泄露风险非常敏感，现有的沙箱方案被认为只是 "最小化修复"。
*   **满意度**: 相比竞品（如 openclaw），NanoBot 在 Windows 环境下的稳定性获得极高评价，被认为 "养得很顺手"。
*   **安装障碍**: ARM 平台安装遇到依赖库 `oauth-cli-kit` 找不到版本的问题 ([Issue #2818](https://github.com/HKUDS/nanobot/issues/2818))。

## 8. 待处理积压

*   **PR 积压严重**: 当前有 **95 个 PR** 处于 Open 状态，其中包括重要的功能如 **Microsoft Teams Channel** ([PR #2600](https://github.com/HKUDS/nanobot/pull/2600)) 和 **HTTP API Channel** ([PR #722](https://github.com/HKUDS/nanobot/pull/722))。建议维护者进行批量 Review 或设立社区协作者机制。
*   **长期未决**: [Issue #2796](https://github.com/HKUDS/nanobot/issues/2796) 提到的 localhost 访问限制问题，直接影响了本地服务集成的核心场景，目前尚无官方 PR 修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 (2026-04-06)**

---

### 1. 今日速览
NanoClaw 项目今日呈现出**极高的开发活跃度**，虽然无新版本发布，但代码库经历了大规模的重构与功能增强。过去 24 小时内共有 **39 个 PR 更新**（其中 19 个已合并/关闭）和 **7 个 Issue 更新**。本次更新重点围绕**扩展性**（支持多 Agent 后端、多实例）和**生态集成**（Google Workspace、Telegram 增强）展开，同时也修复了若干关键的系统稳定性问题（如全局内存路径错误、死锁）。整体来看，项目正处于功能快速迭代与架构解耦的阶段。

---

### 2. 版本发布
*   **无新版本发布**。

---

### 3. 项目进展
今日共有 **19 个 PR 合并/关闭**，显著推进了项目的以下方面：

*   **架构解耦与扩展性**：
    *   **[PR #1651](https://github.com/qwibitai/nanoclaw/pull/1651)**: 引入了多实例支持 API (`AgentLite.createInstance`)，允许隔离的路径、DB 和消息循环，极大地提升了单机多租户能力。
    *   **[PR #1657](https://github.com/qwibitai/nanoclaw/pull/1657)**: 重构 Group 类型系统，将布尔值 `isMain` 替换为枚举 `GroupType`，为更复杂的群组管理打下基础。
*   **重要修复**：
    *   **[PR #1644](https://github.com/qwibitai/nanoclaw/pull/1644)**: 修复了 Main agent 无法读写全局内存的严重路径错误。
    *   **[PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623)**: 解决了消息管道可能导致 30 分钟死锁的问题。
    *   **[PR #1630](https://github.com/qwibitai/nanoclaw/pull/1630)**: 将 agent-runner 源码挂载为只读，防止 Agent 自我修改代码带来的安全/稳定性风险。
*   **生态集成与功能**：
    *   **[PR #1654](https://github.com/qwibitai/nanoclaw/pull/1654)**: 集成了 Google Workspace MCP，支持 Gmail/Calendar/Drive 等服务。
    *   **[PR #1656](https://github.com/qwibitai/nanoclaw/pull/1656)**: Telegram 模块增加了 Topic/Thread 支持，优化了群组体验。
    *   **[PR #1653](https://github.com/qwibitai/nanoclaw/pull/1653)**: 移除了 OAuth 直通模式，全面转向 API Key 认证，简化了鉴权流程。

---

### 4. 社区热点
今日社区关注点主要集中在**非标准环境兼容性**和**底层架构调整**：

*   **[Issue #1659](https://github.com/qwibitai/nanoclaw/issues/1659)**: **Apple Container 构建失败**。
    *   *分析*：用户在尝试使用 Apple 原生容器运行时构建时遇到兼容性问题，涉及 esbuild 和 Bun 的打包冲突。这反映了部分开发者希望在非 Docker 环境（如 macOS 原生）运行 NanoClaw 的强烈诉求。
*   **[Issue #1641](https://github.com/qwibitai/nanoclaw/issues/1641)**: **Shebang 可移植性问题**。
    *   *分析*：关于 `#!/bin/bash` vs `#!/usr/bin/env bash` 的讨论，显示出社区对在 NixOS 等特殊发行版上部署的细节关注。
*   **[Issue #1642](https://github.com/qwibitai/nanoclaw/issues/1642)**: **全局内存失效**。
    *   *分析*：这是一个影响核心功能的 Bug，已由 PR #1644 修复，表明用户正在积极测试 Agent 的长期记忆能力。

---

### 5. Bug 与稳定性
今日报告并处理了多个影响系统稳定性的 Bug：

1.  **[Critical - Fixed] Main Agent 全局内存读写失效**
    *   *详情*：配置文档路径与实际挂载点不一致，且缺乏写权限。
    *   *状态*：已由 [PR #1644](https://github.com/qwibitai/nanoclaw/pull/1644) 修复。
2.  **[High - Fixed] 消息管道导致死锁**
    *   *详情*：Soft-busy 状态下消息管道可能卡死进程长达 30 分钟。
    *   *状态*：已由 [PR #1623](https://github.com/qwibitai/nanoclaw/pull/1623) 修复。
3.  **[Medium - Open] Agent-runner 同步机制缺陷**
    *   *详情*：[Issue #1639](https://github.com/qwibitai/nanoclaw/issues/1639) 指出目前仅检查 `index.ts` 的修改时间，可能导致其他文件变更未被同步。
4.  **[Medium - Open] Apple Container 构建失败**
    *   *详情*：[Issue #1659](https://github.com/qwibitai/nanoclaw/issues/1659) 涉及依赖扫描器读取宿主机文件及 SDK 版本兼容性问题。
5.  **[Low - Fixed] 安全隐患**
    *   *详情*：Agent 可修改自身运行源码。
    *   *状态*：已由 [PR #1630](https://github.com/qwibitai/nanoclaw/pull/1630) 通过只读挂载修复。

---

### 6. 功能请求与路线图信号
*   **多引擎支持趋势**：[PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628) (OpenCode SDK) 和 [PR #963](https://github.com/qwibitai/nanoclaw/pull/963) (OpenAI Codex) 均在尝试引入非 Anthropic 的 Agent 后端。这表明项目正在演进为一个**跨模型的 AI 智能体平台**。
*   **安全与审计**：[Issue #1655](https://github.com/qwibitai/nanoclaw/issues/1655) 提议增加 Ed25519 签名收据，用于记录每一次工具调用。这显示出企业级用户对**可审计性** 和**操作不可抵赖性**的需求。
*   **通信渠道扩展**：[PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121) (Signal) 仍在推进中，结合已合并的 Telegram/Google 支持，项目正致力于成为全渠道的 AI 接入层。

---

### 7. 用户反馈摘要
*   **部署痛点**：用户在 Apple Container 和 NixOS 等环境下的部署遇到阻碍，反映出安装脚本的可移植性有待提高。
*   **稳定性担忧**：全局内存失效和死锁问题表明近期的高速迭代可能引入了一些回归错误，用户在升级时需注意测试核心交互流程。
*   **认证简化**：OAuth 的移除（PR #1653）可能对依赖订阅制的用户造成影响，但也简化了自托管用户的配置流程。

---

### 8. 待处理积压
以下重要的长期 PR/Issue 仍需关注：

*   **[PR #1121](https://github.com/qwibitai/nanoclaw/pull/1121) (Signal Channel)**: 状态为 "Needs Review"，已持续数周，是社区呼声较高的集成功能。
*   **[PR #744](https://github.com/qwibitai/nanoclaw/pull/744) (S3 Storage)**: 状态为 "Blocked"，涉及存储后端的扩展，需维护者协助解除阻塞。
*   **[Issue #1636](https://github.com/qwibitai/nanoclaw/issues/1636) (Channel Connection)**: 频道连接阻塞启动的问题尚未解决，影响启动速度和鲁棒性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw 项目日报 - 2026-04-06**

### 1. 今日速览
IronClaw 项目今日保持**极高的开发活跃度**，呈现出"重测试、强基建"的显著特征。过去24小时内共有 46 个 PR 更新，其中 30 个处于待合并状态，主要集中在 E2E 测试覆盖（Slack/Telegram）、CI 安全加固和生产级工具链的构建。项目今日成功关闭了 3 个 Issues 和 16 个 PRs，尽管没有发布新版本，但大量关于测试基础设施的 PR 合并表明项目正在进行发布前的稳定性冲刺。整体来看，核心团队正致力于提升多渠道支持的健壮性和供应链安全。

### 2. 版本发布
**无新版本发布**。

### 3. 项目进展
今日项目主要在**测试基础设施**、**安全加固**和**Bug修复**方面取得实质性进展：

*   **测试覆盖率大幅提升**：核心贡献者 `serrrfirat` 和 `ilblackdragon` 推动并合并了多项关于 Slack 和 Telegram WASM Channel 的 E2E 测试及集成测试（[PR #2041](https://github.com/nearai/ironclaw/pull/2041), [PR #2036](https://github.com/nearai/ironclaw/pull/2036)）。引入了模拟 API 服务器（`fake_slack_api.py`），显著降低了外部依赖风险。
*   **CI/CD 安全加固**：合并了关于 Dependabot 配置和 GitHub Actions SHA 哈希绑定的更新（[PR #2035](https://github.com/nearai/ironclaw/pull/2035)），有效防范了软件供应链攻击，并引入了带有 LLM 评判机制的双模式测试工具（[PR #2039](https://github.com/nearai/ironclaw/pull/2039)），提升了自动化测试的智能性。
*   **Agent 稳定性修复**：修复了 Agent 在自我修复循环中的通知垃圾邮件问题（[PR #1867](https://github.com/nearai/ironclaw/pull/1867)），优化了状态机逻辑，防止卡死的任务无限重试。

### 4. 社区热点
今日社区互动主要集中在功能性扩展和底层架构支持上：

*   **[Feature Request] Kubernetes 运行时支持 ([Issue #2023](https://github.com/nearai/ironclaw/issues/2023))**：
    用户 `craisis` 指出当前硬编码的 Docker 隔离在 K8s 环境中极其脆弱。这反映了 IronClaw 正在被更多企业级用户尝试部署到生产环境，对容器编排的灵活性提出了更高要求。
*   **[Feature Request] Rust 原生工作流 Shell ([Issue #2045](https://github.com/nearai/ironclaw/issues/2045))**：
    用户 `salem221094` 提议构建 `ironclaw-lobster`。这表明高级用户希望 IronClaw 能具备更复杂的确定性工作流编排能力，而不仅仅是单一的对话交互。

### 5. Bug 与稳定性
今日修复了几个关键的系统稳定性问题：

*   **[已修复] Anthropic API 404 风暴 ([Issue #1811](https://github.com/nearai/ironclaw/issues/1811))**：
    *   **问题**：IronClaw 在内部调用时错误地发送 `model: "default"` 字符串给 Anthropic API，导致 7 小时内产生 330+ 次失败重试。
    *   **状态**：Issue 已关闭，相关修复逻辑可能已包含在近期的 Agent 重构 PR 中。
*   **[已修复] 通知系统垃圾邮件 ([PR #1867](https://github.com/nearai/ironclaw/pull/1867))**：
    *   **问题**：卡住的作业会触发重复的 `ManualRequired` 通知。
    *   **修复**：引入了 HashSet 去重机制，并在状态机中添加了 `Pending -> Failed` 转换路径。

### 6. 功能请求与路线图信号
通过分析 Open 的 PR 和 Issue，可以看出以下功能极有可能纳入下个版本：

*   **生产级文件处理与技能系统**：[PR #2025](https://github.com/nearai/ironclaw/pull/2025) 正在添加 `glob`、`grep` 和 `file_undo` 工具。这表明项目正在补齐作为开发助手的基础能力（文件搜索、历史回退），使其更接近完整的 IDE Agent 形态。
*   **结构化数据存储**：[PR #1937](https://github.com/nearai/ironclaw/pull/1937) 提出的 "Collections" 功能，旨在解决 Agent 难以维护结构化数据（如购物清单）的问题。这是 Agent 长期记忆和状态管理的关键升级。
*   **云厂商深度集成**：[Issue #1501](https://github.com/nearai/ironclaw/issues/1501) (AWS Bedrock Embeddings) 和 [PR #1446](https://github.com/nearai/ironclaw/pull/1446) (Aliyun Support) 显示了项目向多云、多模型后端兼容的战略方向。

### 7. 用户反馈摘要
*   **痛点**：用户在 Kubernetes 环境部署时遇到困难（[Issue #2023](https://github.com/nearai/ironclaw/issues/2023)），现有的 Docker-in-Docker 方案被认为不稳定且不安全。
*   **场景**：用户希望 Agent 能够执行确定性的工作流管道（[Issue #2045](https://github.com/nearai/ironclaw/issues/2045)），而不仅仅是基于 LLM 的非确定性任务。
*   **反馈**：Telegram 轮询中的 404 错误（[Issue #1811](https://github.com/nearai/ironclaw/issues/1811)）严重影响了机器人的可用性，目前已被关注并修复。

### 8. 待处理积压
*   **Aliyun Coding Plan 支持 ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))**：该 PR 已创建半个月以上，涉及大量文件修改，属于大型功能添加。建议维护者尽快进行 Review 或标记为 "Staging"，以便中文社区用户能够尽早测试。
*   **Web Gateway 调试面板 ([PR #1873](https://github.com/nearai/ironclaw/pull/1873))**：此 PR 挂起数日，对于 Web 端用户调试 Prompt 和 Session 非常有帮助，建议优先合并以提升前端开发体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI** 项目 2026-04-06 的动态日报。

# LobsterAI 项目动态日报 (2026-04-06)

## 1. 今日速览
LobsterAI 今日保持**高活跃度**的开发状态，虽然无新版本发布，但代码库迎来了 6 个功能性 PR 和 1 个已关闭的 Bug。项目重心明显向**自动化与鲁棒性**倾斜，新增了 Gmail 触发器和模型故障转移功能，标志着项目正从单一对话工具向自动化 Agent 平台演进。然而，Ubuntu 构建白屏问题（#1418）虽然被关闭，但需警惕其是否通过文档更新而非代码修复解决。

## 2. 版本发布
*   **无新版本发布**。今日主要以代码合并请求（PR）积累为主，预计将在下一版本中集中释放新功能。

## 3. 项目进展
今日共有 **6 个活跃 PR**（待合并），主要围绕 **自动化集成**、**系统鲁棒性** 和 **UX 体验优化** 三大方向：

*   **自动化能力突破**：
    *   [PR #1484](https://github.com/netease-youdao/LobsterAI/pull/1484): 新增 Gmail 监听模块，允许 Agent 自动响应新邮件，填补了与竞品 OpenClaw 在邮件触发能力上的差距。
*   **稳定性增强**：
    *   [PR #1483](https://github.com/netease-youdao/LobsterAI/pull/1483): 引入模型自动故障转移机制，当主模型（如 GPT-4）不可用时自动切换至备用模型，极大提升了服务的连续性。
    *   [PR #1485](https://github.com/netease-youdao/LobsterAI/pull/1485): 修复了禁用的技能仍被触发的安全隐患，强化了系统提示词中的策略控制。
*   **UX 体验重构**：
    *   [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488): 对定时任务模块进行了全面的 UI 升级，从表格转向卡片式布局，增加了历史任务查询功能。
    *   [PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486): 新建任务时增加了“测试运行”按钮，缩短了调试路径。

## 4. 社区热点
*   **Issue [#1418](https://github.com/netease-youdao/LobsterAI/issues/1418) [CLOSED]**: 该 Issue 反映了 2026.03.30 版本在 Ubuntu 下构建白屏的严重问题。该 Issue 已于今日关闭，且拥有 5 条评论，是今日互动最多的帖子。这表明维护者可能已定位问题或提供了临时解决方案，建议关注关闭时的 Commit 关联。
*   **Issue [#1487](https://github.com/netease-youdao/LobsterAI/issues/1487) [OPEN]**: 关于本地 30B 模型调用 Python 脚本（Skills）失败的问题。用户指出同样的脚本在 Claude Code CLI 中正常，暗示 LobsterAI 的本地模型工具调用适配可能存在兼容性差距。

## 5. Bug 与稳定性
*   **P0 - 系统崩溃/无法启动**:
    *   [Issue #1418](https://github.com/netease-youdao/LobsterAI/issues/1418) (已关闭): Ubuntu 构建 deb 包安装后白屏。影响范围涉及 Linux 用户，需确认是否已有 PR 修复或仅是构建环境问题。
*   **P1 - 功能受损**:
    *   [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487) (待处理): 会话中调用 Python 脚本失败。影响使用本地大模型进行 Agent 工具调用的体验。
*   **P2 - 逻辑错误**:
    *   [PR #1482](https://github.com/netease-youdao/LobsterAI/pull/1482) (修复中): 编辑定时任务后描述被清空、启用状态被覆盖。目前已提交修复 PR。

## 6. 功能请求与路线图信号
*   **模型容灾**: [PR #1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 表明项目正式将“高可用性”纳入路线图，支持用户配置 Fallback 模型。
*   **外部触发集成**: [PR #1484](https://github.com/netease-youdao/LobsterAI/pull/1484) 暗示 LobsterAI 正在构建“被动触发”能力，未来可能会支持更多外部事件源（如 Webhook、IM 消息）。
*   **UI 现代化**: [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 显示项目正在进行界面重构，统一采用卡片式设计语言。

## 7. 用户反馈摘要
*   **痛点 - 环境搭建**: Linux 端的构建体验仍不够丝滑，存在白屏等环境依赖问题。
*   **痛点 - 本地模型兼容**: 用户尝试使用开源 30B 模型替代商业模型，但在工具调用环节遇到障碍。这反映出用户对“离线/低成本 Agent”的强烈需求，以及当前适配的不足。
*   **痛点 - 调试体验**: [PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486) 的背景描述反映了用户在进行自动化任务配置时，缺乏即时反馈，调试流程繁琐。

## 8. 待处理积压
*   **Issue #1487 (Skill 调用失败)**: 涉及本地模型与工具链的深层兼容问题，建议维护者优先排查 `skills` 模块在非 Claude 系模型下的指令解析逻辑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-06)

你好！我是 Moltis 开源项目分析师。根据今日（2026-04-06）的 GitHub 数据，项目呈现出**高活跃度、高迭代速度**的特征。维护者进行了大规模的 Bug 修复和功能完善，解决了多个影响用户体验的关键问题。以下是详细日报。

## 1. 今日速览
Moltis 今日维持了极高的开发活跃度，虽然无新版本 Release 发布，但代码库发生了显著变化。**过去 24 小时内共有 6 个 Issue 被关闭，8 个 PR 被合并**，显示出维护者对社区反馈的极快响应速度。今日重点集中在**修复 Provider 管理方面的用户体验问题**（如模型检测、多选、报错提示）以及**底层基础设施的增强**（代理支持、安全性证明）。整体项目健康度极佳，正处于快速迭代修正期。

## 2. 版本发布
*   **无新版本发布**。
    *   尽管没有发布新的 Release Tag，但大量已合并的修 PR 预示着一个新的补丁版本（可能是 v0.x.x）即将到来。

## 3. 项目进展
今日共有 **8 个 PR 被合并**，显著推进了项目的稳定性与功能性：

*   **基础设施与安全性 ([PR #562](https://github.com/moltis-org/moltis/pull/562), [PR #561](https://github.com/moltis-org/moltis/pull/561))**:
    *   合并了 GitHub Artifact Attestations，增强了发布流程的安全性（SLSA v1.0）。
    *   新增了应用级 HTTP 代理支持 (`upstream_proxy`)，允许用户通过配置文件路由所有出站流量，解决了特定网络环境下的访问难题。
*   **Provider 与模型管理体验优化 ([PR #560](https://github.com/moltis-org/moltis/pull/560), [PR #557](https://github.com/moltis-org/moltis/pull/557), [PR #559](https://github.com/moltis-org/moltis/pull/559))**:
    *   修复了 "Detect All Models" 逻辑，现在会在探测前重新查询 `/v1/models`，确保发现新模型。
    *   前端 UI 改进：允许在设置 Provider 时**多选模型**，而非强制单选，极大改善了多模型部署的配置体验。
    *   修复了探测失败时的错误提示，现在会显示真实错误而非笼统的 "Service unavailable"。
*   **多模态与协议支持 ([PR #558](https://github.com/moltis-org/moltis/pull/558), [PR #555](https://github.com/moltis-org/moltis/pull/555))**:
    *   调整了视觉模型识别逻辑，对未知模型默认开启 Vision 支持，修复了 Mistral/Qwen 等模型无法传图的问题。
    *   增加了 Streamable HTTP MCP Server 支持，提升了工具链的扩展性。
*   **渠道集成 ([PR #500](https://github.com/moltis-org/moltis/pull/500))**:
    *   Matrix 渠道集成 PR 已关闭（可能是合并或终止，根据上下文推测为功能合入），扩展了 Moltis 的 IM 连接能力。

## 4. 社区热点
今日社区（用户与维护者）互动最密集的领域集中在**功能请求的实现与反馈**：

*   **[Feature]: Proxy Support ([Issue #548](https://github.com/moltis-org/moltis/issues/548))**
    *   **热度分析**：虽然评论数仅为 1，但该 Issue 直接促成了今日 [PR #561](https://github.com/moltis-org/moltis/pull/561) 的合并。这表明维护者对用户的核心痛点（网络访问受限）响应非常直接。
    *   **诉求**：用户需要在应用层面配置代理以访问外部 API。
*   **MCP 协议支持 ([Issue #294](https://github.com/moltis-org/moltis/issues/294))**
    *   **热度分析**：这是一个长期请求（创建于 3 月），今日随着 [PR #555](https://github.com/moltis-org/moltis/pull/555) 的合并而关闭。
    *   **诉求**：社区对 MCP (Model Context Protocol) 的 Streamable HTTP 支持有明确需求，用于构建更灵活的 Agent 工具链。

## 5. Bug 与稳定性
今日修复了多个影响核心功能（Provider 配置）的 Bug，且均已合并修复代码：

| 严重程度 | Issue/PR | 问题描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **高** | [Bug #554](https://github.com/moltis-org/moltis/issues/554) / [PR #559](https://github.com/moltis-org/moltis/pull/559) | **API Key 探测报错误导**：有效的 API Key 被报告为 "Service unavailable"，导致用户无法正常添加 Provider。 | **已修复** |
| **中** | [Bug #551](https://github.com/moltis-org/moltis/issues/551) / [PR #560](https://github.com/moltis-org/moltis/pull/560) | **模型检测不全**：Detect models 功能仅探测已有模型，无法发现 API 中新增的模型。 | **已修复** |
| **中** | [Bug #552](https://github.com/moltis-org/moltis/issues/552) / [PR #557](https://github.com/moltis-org/moltis/pull/557) | **UI 强制单选**：添加 Provider 时无法一次性选择多个模型，导致重复配置。 | **已修复** |
| **低** | [Bug #556](https://github.com/moltis-org/moltis/issues/556) / [PR #558](https://github.com/moltis-org/moltis/pull/558) | **Vision 功能失效**：Mistral/Qwen 等支持视觉的模型在 Moltis 中被错误地屏蔽了图片上传功能。 | **已修复** |

## 6. 功能请求与路线图信号
*   **Microsoft Teams 集成 ([PR #529](https://github.com/moltis-org/moltis/pull/529) [OPEN])**:
    *   虽然今日未合并，但该 PR 处于活跃更新状态（更新于 04-05）。这是一个庞大的功能实现（包含 JWT 验证、重试机制等），表明 Moltis 正 seriously 推进企业级 IM 渠道的支持。这是下一个值得关注的重大功能。
*   **代理支持**:
    *   随着 [PR #561](https://github.com/moltis-org/moltis/pull/561) 的合并，Moltis 在企业内网部署场景下的可用性大幅提升。

## 7. 用户反馈摘要
从今日关闭的 Issues 中，我们可以提炼出以下用户画像：
*   **企业/高级用户**：提出 Proxy 支持的用户表明 Moltis 正在被网络环境受限的企业环境采用。
*   **多模型重度用户**：用户 bsarkisov 一口气提交了 3 个关于 Provider 配置和模型检测的 Bug。这反映出用户倾向于接入大量不同来源的模型（包括本地 Ollama 和远程 API），并希望 Moltis 能提供流畅的批量管理体验，而非单一模型的玩具式演示。
*   **多模态需求**：用户 brunoxylo 反馈的 Vision 问题表明，社区正在积极使用 Moltis 进行图文交互任务。

## 8. 待处理积压
*   **[OPEN] MS Teams 集成 ([PR #529](https://github.com/moltis-org/moltis/pull/529))**: 这是一个大型 PR，需要进行细致的代码审查。建议维护者重点关注其安全性（JWT 验证）和稳定性。
*   **新 Issue 响应**: 过去 24 小时 "新开/活跃: 0"，说明今日主要是消化存量反馈。随着今日大量修复的合并，建议观察未来几天是否有新的回归问题反馈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是根据 CoPaw 项目 2026-04-06 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目日报 (2026-04-06)

## 1. 今日速览
CoPaw 项目今日保持**高度活跃**状态，社区反馈强烈。过去24小时内共有 **39 条 Issue 更新**（其中 5 条已关闭）和 **8 条 PR 更新**（其中 3 条已合并）。虽然无新版本发布，但开发重心明显集中在**稳定性修复**（特别是 Windows 平台和资源消耗）以及**新渠道扩展**（WhatsApp）。社区关注焦点主要集中在空闲状态下的高 CPU 占用问题以及各类模型兼容性 Bug。整体来看，项目正处于快速迭代修复期，核心维护者正在积极响应由新功能引入的边缘情况问题。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日共有 3 个 PR 被合并，主要集中在提升跨平台兼容性和修复阻塞性 Bug：

*   **Windows 用户体验修复**：合并了 PR [#2951](https://github.com/agentscope-ai/CoPaw/pull/2951)，修复了使用 `--defaults` 标志时 `copaw init` 卡在安全警告提示的问题，解决了 CI/CD 自动化部署中的阻塞点。
*   **Token 计数器修复**：合并了 PR [#2070](https://github.com/agentscope-ai/CoPaw/pull/2070)，修复了 `CopawTokenCounter` 处理列表类型内容时的 TypeError，解决了 Anthropic 等模型返回非字符串格式时的内存压缩崩溃问题。
*   **代码库维护**：合并了 PR [#2946](https://github.com/agentscope-ai/CoPaw/pull/2946)（关联 PR [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962)），清理并重新提交了 WhatsApp 渠道的实现代码，为合并做准备。

## 4. 社区热点
今日讨论最热烈的问题集中在性能和基础可用性上：

*   **[Bug] 空闲状态下高 CPU 占用** (Issue [#2888](https://github.com/agentscope-ai/CoPaw/Issue/2888))
    *   **热度**：评论 8 条
    *   **分析**：这是目前最严重的性能问题。用户报告 CoPaw 在空闲时单核 CPU 占用率达 100%。调查指向 `anyio` 库在处理取消操作时的死循环。该问题直接影响 CoPaw 作为后台助手的可用性，急需修复。
*   **[Bug] Console 语音按钮禁用** (Issue [#2231](https://github.com/agentscope-ai/CoPaw/Issue/2231))
    *   **热度**：评论 7 条，已关闭
    *   **分析**：前端控制台的麦克风按钮始终禁用，尽管后端 Whisper 已就绪。该 Issue 已关闭，暗示修复代码可能已合入主分支或在即将发布的版本中解决。
*   **[Feature] 新增 /models 命令** (Issue [#2763](https://github.com/agentscope-ai/CoPaw/Issue/2763))
    *   **热度**：评论 3 条，点赞 2 个
    *   **分析**：用户强烈希望能通过对话直接切换模型，而非频繁修改后台配置。这反映了用户对**多模型动态对比**和**快捷调试**的强需求。

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，按严重程度排序：

1.  **严重 - 资源泄漏与挂起**：
    *   **AnyIO 死循环** ([#2888](https://github.com/agentscope-ai/CoPaw/Issue/2888))：空闲时 CPU 满载。
    *   **MCP 客户端泄漏** ([#2960](https://github.com/agentscope-ai/CoPaw/Issue/2960))：热重载配置时 MCP 客户端未清理，导致 CPU 飙升。
    *   **Browser Use 进程泄漏** ([#2934](https://github.com/agentscope-ai/CoPaw/Issue/2934))：`close` 动作未终止 Chromium 主进程，导致无限制的进程堆积。

2.  **中等 - 功能受阻**：
    *   **Windows 弹窗干扰** ([#2950](https://github.com/agentscope-ai/CoPaw/pull/2950))：执行 Shell 命令时频繁弹出 CMD 窗口并抢占焦点（已有 Fix PR）。
    *   **Gemma4 模型死循环** ([#2947](https://github.com/agentscope-ai/CoPaw/Issue/2947))：模型陷入无限工具调用，无法终止任务。
    *   **Telegram 频道无响应** ([#2956](https://github.com/agentscope-ai/CoPaw/Issue/2956))：长时间运行后 Telegram Bot 失去响应。

3.  **安全 - 沙箱逃逸风险**：
    *   **Shell 绕过 File Guard** ([#2967](https://github.com/agentscope-ai/CoPaw/Issue/2967))：Agent 可以通过 `execute_shell_command` 绕过文件访问控制读取敏感文件。

## 6. 功能请求与路线图信号
*   **渠道扩展**：PR [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) 提出了基于 `neonize` 库的 WhatsApp 渠道支持，表明项目正在向更多主流即时通讯平台扩展。
*   **个人知识库 (RAG)**：Issue [#2969](https://github.com/agentscope-ai/CoPaw/Issue/2969) 建议在控制台集成知识库功能，结合 Agent 执行能力。这是目前 AI 助手赛道的标配功能，极有可能被纳入路线图。
*   **技能管理优化**：Issue [#2961](https://github.com/agentscope-ai/CoPaw/Issue/2961) 建议对技能池进行分类（文件夹管理），解决技能过多时的选择困难问题。

## 7. 用户反馈摘要
*   **痛点：配置持久化**：多位用户反馈 `config.json` 中的 `providers` 配置在重启后被重置 ([#2930](https://github.com/agentscope-ai/CoPaw/Issue/2930))，严重影响自托管体验。
*   **痛点：UI 干扰**：用户对 Web 面板无法关闭"思考过程"感到困扰，认为刷屏严重，影响阅读体验 ([#2972](https://github.com/agentscope-ai/CoPaw/Issue/2972))。
*   **场景：模型兼容性**：用户尝试接入各种本地模型（如 llama.cpp, Qwen3）时经常遇到解析错误 ([#2598](https://github.com/agentscope-ai/CoPaw/Issue/2598), [#2930](https://github.com/agentscope-ai/CoPaw/Issue/2930))，说明 CoPaw 需要增强对不同模型输出格式的容错能力。

## 8. 待处理积压
*   **PR [#2448](https://github.com/agentscope-ai/CoPaw/pull/2448) (MiniMax OAuth)**：该 PR 已开启数日，作者在 Issue [#2907](https://github.com/agentscope-ai/CoPaw/Issue/2907) 中请求 Review。这是一个较大的功能更新，建议维护者尽快 Review 以免阻塞后续开发。
*   **PR [#2962](https://github.com/agentscope-ai/CoPaw/pull/2962) (WhatsApp)**：作为新渠道支持，该 PR 刚刚提交，需要重点关注其连接稳定性。
*   **Issue [#1217](https://github.com/agentscope-ai/CoPaw/Issue/1217)**：关于聊天突然中断的"Unknown agent error"问题，自 3月11日 创建以来虽有更新但尚未彻底解决，属于长期遗留的稳定性问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

这份 **EasyClaw 项目动态日报 (2026-04-06)** 已为您生成。

今日项目整体处于**低活跃度、维护期**状态。虽然过去24小时内没有新的代码合并或版本发布，但一个关于**国际化（i18n）扩展**的重要 PR (#21) 仍在待处理队列中，显示出项目正在通过支持多语言（日/韩/越/印地语等）来拓宽潜在用户群。由于缺乏新发版和社区讨论，项目今日无显著功能变更或稳定性风险。

---

### 1. 今日速览
*   **整体状态**：项目今日处于**静默维护**状态，无新代码合并，无新 Issue 产生。
*   **活跃度评估**：**低**。虽然 Issues 为 0，但有一个活跃的 PR 正在等待 Review，表明外部贡献者仍在推动项目功能完善。
*   **关键信号**：社区贡献者正在大力补齐国际化短板，新增了5种亚洲语言支持，这可能预示着项目正准备面向更广泛的非英语用户推广。
*   **健康度**：代码库稳定，无新发版意味着当前 Master 分支保持不变，适合用户平稳使用。

### 2. 版本发布
*   **无**：过去24小时内未发布任何新版本。

### 3. 项目进展
*   **今日合并**：无（0 PRs merged）。
*   **待处理进展**：
    *   正在推进的功能：**多语言国际化扩展**。
    *   详情：PR #21 正在请求合并，该 PR 新增了繁体中文、日语、韩语、越南语和印地语。一旦合并，将显著提升 EasyClaw 在亚太地区的可用性。

### 4. 社区热点
*   **关注度最高**：[PR #21 feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **状态**：Open（待合并）
    *   **分析**：这是目前唯一活跃的动态。该 PR 包含了完整的 1333 个翻译键值对，工作量较大（由贡献者 chinayin 提交），显示了贡献者较高的诚意。然而，该 PR 自 3 月 18 日创建至今仍未合并，且评论数为 undefined/0，可能表明维护者审查周期较长，或者项目正处于低活跃维护期。

### 5. Bug 与稳定性
*   **今日报告**：无（0 new issues）。
*   **稳定性评估**：过去24小时无崩溃或回归报告，推测当前版本稳定性良好。

### 6. 功能请求与路线图信号
*   **信号来源**：[PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **解读**：虽然不是 Issue 形式的请求，但该 PR 直接指明了路线图的一个分支——**本地化（Localization）**。如果该 PR 被接纳，下一版本极大概率会官方支持这 5 种新语言，这将极大地降低相关地区用户的上手门槛。

### 7. 用户反馈摘要
*   **反馈缺失**：由于今日无新增 Issue 或评论，暂无最新的用户痛点或使用场景反馈。这通常意味着现有用户群处于稳定使用状态，或者项目目前曝光度较低。

### 8. 待处理积压
*   **重要提醒**：[PR #21 feat(i18n): add 5 new languages](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **积压时长**：该 PR 创建于 2026-03-18，至今已近 3 周（截至日报日期 2026-04-06）。
    *   **建议**：建议项目维护者 @gaoyangz77 尽快审查此 PR。这是一个高质量的翻译贡献，长时间的搁置可能会打击贡献者的积极性。如存在翻译质量问题，建议在 PR 下留言指出，而非直接忽略。

</details>