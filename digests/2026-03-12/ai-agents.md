# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 03:19 UTC

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

# OpenClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
OpenClaw 项目今日保持**极高活跃度**，社区反馈热烈但同时也暴露出近期版本引入的严重回归问题。过去24小时内共有 **500 条 Issue 更新**（其中 409 条为新开/活跃）和 **500 条 PR 更新**，显示项目处于快速迭代期。然而，大量用户反馈集中在 **v2026.3.8 版本的严重回归**——尤其是 Cron 调度功能全面瘫痪和 Kimi 模型配置/调用失败，导致核心自动化场景受阻。虽然社区贡献者已迅速提交修复 PR，但尚未发布新版本，建议生产环境用户暂缓升级。

---

## 2. 版本发布
**今日无新版本发布。** 上一个版本为 2026.3.8（约 3 天前发布），但该版本引入了多个严重回归问题（详见第5节），社区正在等待修复版本。

---

## 3. 项目进展

今日共有 **161 条 PR 被合并或关闭**，339 条待合并。以下是已合并的重要修复：

| PR | 类型 | 说明 |
|---|---|---|
| [#43265](https://github.com/openclaw/openclaw/pull/43265) | 🐛 Fix | 修复 `opencode-go` 提供商的环境变量 API Key 解析问题 |
| [#43336](https://github.com/openclaw/openclaw/pull/43336) | 🐛 Fix | 修复 Nodes 工具在 `security=full` + `ask=off` 配置下仍弹出审批 UI 的问题 |
| [#28396](https://github.com/openclaw/openclaw/pull/28396) | 🐛 Fix | Docker Chromium 入口点改为版本无关路径，解决版本升级后路径失效问题 |
| [#43285](https://github.com/openclaw/openclaw/pull/43285) | 🐛 Fix | 修复 ACP 会话重启后无法恢复状态的问题 |
| [#43615](https://github.com/openclaw/openclaw/pull/43615) | 🐛 Fix | 处理 Claude API `stop_reason: "sensitive"` 导致的崩溃和轮询停滞 |

**待合并的关键修复 PR**（已提交但未合并）：
- [#43623](https://github.com/openclaw/openclaw/pull/43623) - 修复 Kimi 模型返回 XML 格式工具调用而非结构化数据的问题
- [#43138](https://github.com/openclaw/openclaw/pull/43138) - 修复 Kimi K2.5 配置验证失败问题
- [#43625](https://github.com/openclaw/openclaw/pull/43625) - 同 #43615，处理 "sensitive" stop reason

---

## 4. 社区热点

### 🔥 热议 Issue TOP 5

| 排名 | Issue | 评论 | 诉求分析 |
|---|---|---|---|
| 1 | [#32828](https://github.com/openclaw/openclaw/issues/32828) | 51 | **误报 API 限流**：用户报告 OpenClaw 在所有模型上显示 "API rate limit reached"，但外部验证 API 正常工作。已关闭，可能已修复。 |
| 2 | [#26534](https://github.com/openclaw/openclaw/issues/26534) | 48 | **钉钉集成**：用户希望钉钉作为首次安装向导的可选通道。目前钉钉支持已实现但未在安装向导中暴露。 |
| 3 | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 16 | **预编译 Android APK**：用户希望官方提供预编译的 Android 客户端 APK 下载，而非自行编译。 |
| 4 | [#9899](https://github.com/openclaw/openclaw/issues/9899) | 15 | **日期时间注入**：系统提示缺少星期信息，导致 Agent 日程查询时出错。 |
| 5 | [#41445](https://github.com/openclaw/openclaw/issues/41445) | 15 | **Kimi K2.5 配置失败**：配置 Kimi K2.5 模型时出现 Zod 验证错误，无法保存配置。已关闭。 |

### 💡 亮点讨论
- **[#28930](https://github.com/openclaw/openclaw/issues/28930)** - 一位名为 Brian 的 AI Agent（运行在树莓派上）提出了 Memory v2 的改进建议：关联遍历、显著性加权和基于访问的遗忘机制。展示了 OpenClaw 生态中 Agent 自我进化的有趣案例。
- **[#42938](https://github.com/openclaw/openclaw/issues/42938)** - 社区用户展示了基于 OpenClaw 构建的 "虾缘" AI 相亲交友平台，探索 Agent 间社交可能性。

---

## 5. Bug 与稳定性

### 🚨 严重级别（P0 - 核心功能受阻）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#41405](https://github.com/openclaw/openclaw/issues/41405) | **v2026.3.8 Cron 作业完全停止执行**，无错误日志 | - | 待修复 |
| [#41266](https://github.com/openclaw/openclaw/issues/41266) | Linux 上手动 `cron run` 入队但从未执行 | - | 待修复 |
| [#41798](https://github.com/openclaw/openclaw/issues/41798) | `sessionTarget="isolated"` 的 Cron 作业在 v2026.3.8 失败 | - | 待修复 |
| [#42883](https://github.com/openclaw/openclaw/issues/42883) | 升级到 v2026.3.8 后 Cron 作业停止运行 | - | 待修复 |
| [#42579](https://github.com/openclaw/openclaw/issues/42579) | Isolated agentTurn Cron 作业自死锁 | [#43594](https://github.com/openclaw/openclaw/pull/43594) | PR 待合并 |

### ⚠️ 高级别（P1 - 重要功能异常）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#39907](https://github.com/openclaw/openclaw/issues/39907) | Kimi K2.5 返回纯文本而非结构化工具调用 | [#43623](https://github.com/openclaw/openclaw/pull/43623) | PR 待合并 |
| [#41690](https://github.com/openclaw/openclaw/issues/41690) | Kimi 配置验证失败 - `requiresOpenAiAnthropicToolPayload` 未识别 | [#43138](https://github.com/openclaw/openclaw/pull/43138) | PR 待合并 |
| [#40977](https://github.com/openclaw/openclaw/issues/40977) | Control UI 连接失败 (4008) | - | 待修复 |
| [#42270](https://github.com/openclaw/openclaw/issues/42270) | LM Studio 本地后端响应为空 + WebSocket 1006 断开 | - | 待修复 |
| [#40818](https://github.com/openclaw/openclaw/issues/40818) | `config.get` 抛出 RangeError，导致 Dashboard Agents 页面崩溃 | - | 待修复 |

### 📝 中级别（P2 - 体验受损）

- [#40941](https://github.com/openclaw/openclaw/issues/40941) - 自定义/本地提供商不显示上下文长度和 token 使用量
- [#41083](https://github.com/openclaw/openclaw/issues/41083) - XAI 请求总是超时
- [#38902](https://github.com/openclaw/openclaw/issues/38902) - 本地 Qwen 模型返回 HTTP 422 参数错误
- [#35220](https://github.com/openclaw/openclaw/issues/35220) - OpenAI Codex Responses API 流式 server_error 不触发模型故障转移
- [#18282](https://github.com/openclaw/openclaw/issues/18282) - GPT-5.2 reasoning items 导致会话历史 400 错误

---

## 6. 功能请求与路线图信号

| 请求 | 描述 | 落地可能性 | 备注 |
|---|---|---|---|
| [#28744](https://github.com/openclaw/openclaw/issues/28744) | **Agent 视觉能力** - 支持接收和识别图片 | 🟡 中等 | 需平台层传递图片数据给多模态模型 |
| [#26534](https://github.com/openclaw/openclaw/issues/26534) | 钉钉作为首次安装通道选项 | 🟢 高 | 代码已实现，仅需 UI 暴露 |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 预编译 Android APK | 🟡 中等 | 需构建流程支持 |
| [#28930](https://github.com/openclaw/openclaw/issues/28930) | Memory v2 改进 | 🟡 中等 | 涉及架构变更 |
| [#39979](https://github.com/openclaw/openclaw/issues/39979) | 路径范围的 RWX 权限控制 | 🔴 低 | 需较大安全模型重构 |

**相关 PR 进展**：
- [#43016](https://github.com/openclaw/openclaw/pull/43016) - 新增 **HarmonyOS 客户端应用**，扩展平台覆盖
- [#41496](https://github.com/openclaw/openclaw/pull/43016) - 插件系统支持 AI 提供商能力（TTS/ASR/嵌入/图像/视频）
- [#41345](https://github.com/openclaw/openclaw/pull/41345) - 加密快照备份流程
- [#42989](https://github.com/openclaw/openclaw/pull/42989) - 新增 Model Hub 聚合提供商（面向中国用户）

---

## 7. 用户反馈摘要

### 😣 痛点集中
1. **v2026.3.8 升级灾难**：大量用户反馈升级后 Cron 作业完全停止工作，自动化流程中断
2. **Kimi 模型集成问题**：配置验证失败 + 工具调用格式异常，影响中国用户使用
3. **本地模型调试困难**：自定义提供商的 token 统计、上下文长度信息缺失
4. **连接稳定性**：Control UI 频繁断开、WebSocket 1006 闭包

### 👍 正面反馈
- 用户对 OpenClaw 的多渠道支持（Discord/Telegram/飞书/钉钉）表示认可
- Memory v2 讨论中有用户分享了自己 Agent 长期运行的积极体验
- 社区积极贡献修复 PR，响应速度快

### 🎯 典型使用场景
- 树莓派上 24/7 运行的 AI Agent
- 企业微信/钉钉/飞书办公自动化
- 定时 Cron 任务驱动的数据处理和报告生成
- 本地模型（Qwen、DeepSeek）+ 私有化部署

---

## 8. 待处理积压

### ⏰ 长期未解决的重要 Issue

| Issue | 天数 | 影响 | 建议 |
|---|---|---|---|
| [#3092](https://github.com/openclaw/openclaw/issues/3092) | ~43天 | 长操作时会话锁超时导致通道处理器失败 | 高优先级，影响稳定性 |
| [#13938](https://github.com/openclaw/openclaw/issues/13938) | ~29天 | 会话上下文无限累积直到超出模型限制 | 需实现自动截断/压缩策略 |
| [#8367](https://github.com/openclaw/openclaw/issues/8367) | ~37天 | GitHub Copilot Claude 模型不可用 | 可能需 GitHub API 层配合 |
| [#8366](https://github.com/openclaw/openclaw/issues/8366) | ~37天 | GitHub Copilot GPT-5+ 421 路由错误 | 需要 Responses API 路由支持 |
| [#19795](https://github.com/openclaw/openclaw/issues/19795) | ~22天 | Isolated Cron 无法访问全局/工作区技能 | 已有 #43594 PR 尝试解决 |
| [#11257](https://github.com/openclaw/openclaw/issues/11257) | ~33天 | Gateway 重启后浏览器进程孤立导致内存泄漏 | 需进程管理改进 |

### 📌 建议
1. **紧急发布 v2026.3.9**：修复 Cron 和 Kimi 相关的严重回归
2. **增强回归测试**：特别是 Cron 调度、模型配置验证、工具调用格式
3. **文档更新**：针对 v2026.3.8 已知问题添加迁移指南

---

**报告生成时间**: 2026-03-12 | **数据来源**: GitHub OpenClaw Repository

---

## 横向生态对比

# 开源 AI 智能体生态日报 (2026-03-12) - 横向对比分析

**分析师**: AI Agent Ecosystem Watcher
**报告日期**: 2026-03-12

---

## 1. 生态全景：爆发期后的"硬着陆"与"深水区"

2026年3月的开源 AI 智能体生态呈现出**"功能大爆发"与"稳定性阵痛"并存的典型特征**。以 **OpenClaw** 为首的头部项目正在经历快速迭代带来的严重回归问题（如 Cron 瘫痪），暴露出自动化测试覆盖率的不足。同时，全行业正集体迈向**多渠道接入（IM 集成）**和**成本控制（Token 优化）**的深水区。项目间的竞争焦点已从单纯的模型调用能力，转向**多智能体架构（Multi-Agent）**、**本地化模型支持（Local LLM）**以及**企业级安全与隔离**。

---

## 2. 各项目活跃度对比

| 项目名称 | Issue 活跃度 (24h) | PR 活跃度 (24h) | 最新版本/发布 | 健康度/状态评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **~500** (极高) | **~500** (极高) | v2026.3.8 (3d ago) | ⚠️ **震荡** (严重回归未修) | Cron瘫痪, Kimi集成, HarmonyOS |
| **PicoClaw** | ~21 | **~103** (极高) | **v0.2.2** (Today) | 🟢 **稳健** (架构重构中) | 多智能体, SOUL定义, Web UI |
| **NanoClaw** | ~54 | ~89 | v0.1.4.post3 | 🟢 **活跃** (成本优化) | Token压缩, 安全架构, OAuth |
| **IronClaw** | ~46 | ~50 | **v0.18.0** (Today) | 🟡 **冲刺** (兼容性痛点) | Podman, OpenClaw迁移, glibc |
| **CoPaw** | ~50 (估) | ~50 (估) | v0.0.6.post1 | 🟡 **迭代** (IM集成热) | 飞书/钉钉, 前端优化 |
| **Moltis** | ~23 (Closed) | ~20 (New) | - | 🟢 **修复** (高响应) | Docker修复, 本地模型, Web UI |
| **NanoBot** | ~54 | ~89 | - | 🟢 **活跃** | Z.AI, 记忆管理, Telegram |
| **ZeptoClaw** | ~13 (Closed) | ~13 (Merged) | **v0.7.6** (Today) | 🟢 **极健** (安全加固) | CLI交互, 安全边界, Ollama |
| **Zeroclaw** | ~50 | ~50 | v0.1.7-beta.30 | 🟡 **迁移** (分支策略) | Azure/百炼, 单分支模型 |
| **TinyClaw** | ~12 | ~6 | **v0.0.10** (Today) | 🚀 **转型** (品牌重塑) | Monorepo, TinyAGI, SQLite |
| **LobsterAI** | 中等 | 低 | **v0.2.3** (Today) | 🟡 **起步** (IM集成) | 企微/钉钉, 字符Bug |
| **EasyClaw** | 低 | 极低 | v1.6.6 | 🔴 **停滞** (阻塞性Bug) | macOS, OAuth失败 |

---

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了"大厂级"的流量吸纳能力，但也暴露了"巨型开源项目"的典型短板。

*   **优势**：
    *   **生态虹吸效应**：500+ Issues/PRs 的活跃度远超同类，意味着它是最快的 Bug 修复点和最新特性的试验田（如 HarmonyOS 客户端）。
    *   **渠道全覆盖**：从 Discord/Telegram 到飞书/钉钉，再到 HarmonyOS，OpenClaw 几乎成为了 IM 协议的万能适配器。
*   **技术路线差异**：
    *   相比 **PicoClaw/TinyClaw** 正在探索的 `SOUL/AGENT` 人格定义和多智能体编排，OpenClaw 目前仍更侧重于**单体自动化** 和**工具调用**的稳定性。
    *   相比 **ZeptoClaw/NanoClaw** 对安全和成本的深度优化，OpenClaw 目前的重心在于**修复严重回归**，其 Cron 和 Kimi 模型的故障显示其在快速迭代中牺牲了部分鲁棒性。
*   **社区规模**：处于绝对领先地位，但也因此产生了大量的待处理积压和噪音，信号提取难度大。

---

## 4. 共同关注的技术方向

全行业在今日呈现出惊人的一致性，以下四大方向成为竞相追逐的焦点：

1.  **IM 深度集成**:
    *   **涉及项目**: OpenClaw, LobsterAI, CoPaw, NanoBot, IronClaw.
    *   **具体诉求**: **飞书** 和 **钉钉** 的集成需求井喷。CoPaw 和 LobsterAI 甚至将其作为版本核心卖点。企业级 IM 已成为 AI Agent 落地的首选载体。

2.  **本地/国产模型支持**:
    *   **涉及项目**: OpenClaw, ZeptoClaw, Moltis, Zeroclaw, NanoBot.
    *   **具体诉求**: 对 **Kimi (Moonshot)**, **Ollama**, **GLM (智谱)**, **阿里百炼** 的适配成为刚需。用户强烈要求摆脱对 OpenAI 的单一依赖，且对国产模型的工具调用格式兼容性（如 XML vs JSON）极为敏感。

3.  **多智能体架构**:
    *   **涉及项目**: PicoClaw, TinyClaw, NanoClaw.
    *   **具体诉求**: 从单聊机器人转向 **Team/Group 模式**。PicoClaw 合并了 Team 分支，TinyClaw 重构支持 Teams，显示行业正从 "Copilot" 向 "Organization" 进化。

4.  **Token 成本优化**:
    *   **涉及项目**: NanoClaw, OpenClaw.
    *   **具体诉求**: **Inline Compaction (内联压缩)** 和 **Context Truncation (上下文截断)**。随着 Agent 长期运行，Token 成本成为核心痛点，NanoClaw 甚至将其作为核心功能发布。

---

## 5. 差异化定位分析

*   **全能型巨轮 vs. 精致型快艇**:
    *   **OpenClaw** 走的是全功能、全平台路线，但也因此背负了沉重的历史包袱和回归风险。
    *   **ZeptoClaw** 和 **Moltis** 选择了更深度的技术深耕，前者专注 **CLI 交互与安全边界** (Rust栈)，后者专注 **Docker化部署与本地模型**。

*   **架构演进代际**:
    *   **第一代 (API 代理)**: 如早期的各类 Bot，侧重转发。
    *   **第二代 (工具调用)**: 当前的 OpenClaw, CoPaw，侧重 Function Calling。
    *   **第三代 (原生多智能体)**: **PicoClaw** (SOUL.md) 和 **TinyClaw** (TinyAGI) 正在定义新的标准，试图在架构层面原生支持 Agent 的"人格"和"协作"，而非仅仅作为补丁存在。

*   **目标用户**:
    *   **开发者/极客**: NanoBot (高自定义), ZeptoClaw (CLI), IronClaw (去中心化).
    *   **企业用户**: CoPaw (飞书/钉钉), LobsterAI (企微), Zeroclaw (Azure/百炼).
    *   **个人用户**: EasyClaw (桌面端), OpenClaw (全渠道).

---

## 6. 社区热度与成熟度

*   **震荡期 (高风险)**: **OpenClaw**。极高的活跃度掩盖不住 P0 级 Bug 的频发，社区情绪出现波动，急需一次稳定性版本平息。
*   **快速迭代/功能扩张期**: **PicoClaw, CoPaw, Zeroclaw**。这些项目正疯狂合并 PR，补齐 IM 和模型支持的短板，处于抢占市场的关键期。
*   **质量巩固/深耕期**: **ZeptoClaw, Moltis**。重点在于修复底层 Bug 和安全漏洞，虽然 Issue 量不大，但 PR 质量极高，显示出成熟的维护节奏。
*   **停滞/起步期**: **EasyClaw**。关键的 OAuth Bug 和低活跃度表明项目可能面临维护资源不足的困境。

---

## 7. 值得关注的趋势信号

1.  **"Model Hub" 聚合模式兴起**:
    OpenClaw 和 Zeroclaw 都提出了针对中国用户的 **Model Hub** 或聚合提供商概念。这预示着未来的 AI Agent 将不再配置单一 API Key，而是通过统一网关访问 Kimi/DeepSeek/GLM/Qwen 等多种模型，**"模型中立"** 将成为标配。

2.  **MCP (Model Context Protocol) 协议的渗透**:
    PicoClaw, Moltis, Zeroclaw 均提及了 **MCP**。社区正在迫切要求解决工具调用的标准问题，MCP 很可能成为连接 Agent 与外部工具（如 Browserbase, Home Assistant）的通用语言，取代私有的 Tool Definition。

3.  **从 "Chat" 到 "Flow" 的转变**:
    TinyClaw 的看板驱动、PicoClaw 的事件驱动架构、以及各项目对 Cron 的高度依赖，表明 AI Agent 正在从被动的**对话系统** 转变为主动的**自动化流程节点**。

4.  **安全边界的收缩**:
    ZeptoClaw 的 Merkle 审计、NanoClaw 的密钥隔离讨论、以及 OpenClaw 的权限修复，显示随着 Agent 权限的增加（如 Shell 执行、文件读写），**安全隔离** 已不再是可选项，而是阻碍生产环境部署的最后一道墙。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-12)

## 1. 今日速览
NanoBot 项目今日保持**高度活跃**状态，社区协作势头强劲。过去24小时内，PR 更新量达到 **89 条**，Issue 交互达 **54 条**，其中新增/活跃 Issue 28 条，关闭 26 条，显示出维护团队较高的响应效率。虽然今日无新版本发布，但代码库合并了多个关键修复，涉及内存管理、会话历史和模型兼容性等核心模块。总体来看，项目处于快速迭代期，社区对多渠道接入（如 Telegram、微信）和本地模型支持的诉求持续升温。

---

## 2. 版本发布
**无新版本发布**。目前最新版本仍为 `v0.1.4.post3`，建议关注后续潜在的 `v0.1.5` 版本，预计将整合近期合并的多项稳定性修复。

---

## 3. 项目进展
今日共有 **58 条 PR 被合并或关闭**，显著推进了以下领域：

- **核心修复**：
  - [PR #1894](https://github.com/HKUDS/nanobot/pull/1894)：修复 `get_history()` 方法中 `max_messages=0` 时的切片逻辑错误（`[-0:]` 返回全量列表），避免会话历史加载异常。
  - [PR #1909](https://github.com/HKUDS/nanobot/pull/1909)：强制内存合并（consolidation）阶段调用 `save_memory` 工具，防止 LLM 跳过记忆存储。
  - [PR #1892](https://github.com/HKUDS/nanobot/pull/1892)：为非视觉模型过滤会话历史中的 `image_url` 内容块，避免 API 报错。

- **功能增强**：
  - [PR #1906](https://github.com/HKUDS/nanobot/pull/1906)：为 `exec` 工具添加输出截断配置（`max_output`、`truncate_mode`），解决长输出导致的性能问题。
  - [PR #1581](https://github.com/HKUDS/nanobot/pull/1581)：支持 `--config` 参数实现多实例部署，满足多租户场景需求。
  - [PR #1900](https://github.com/HKUDS/nanobot/pull/1900)：增强 Telegram 频道对 `reply_to_message` 的上下文理解能力。

- **跨平台与部署**：
  - [PR #44](https://github.com/HKUDS/nanobot/pull/44)：改进跨平台（Windows/Linux/macOS）的 `uv` 安装指引，优化开发者体验。

**整体评估**：项目核心稳定性和多场景适配能力得到显著加强，尤其是会话管理模块的健壮性提升。

---

## 4. 社区热点
以下话题引发最多讨论：

1. **[Issue #2](https://github.com/HKUDS/nanobot/issues/2)**（已关闭）  
   **诉求**：请求原生支持 Z.AI（智谱 AI）API 及最新 GLM 模型（GLM-4.x/GLM-4.7）。  
   **分析**：这是评论数最高（19 条）的 Issue，反映用户对国产高性能 LLM 集成的强烈需求，尤其 GLM-4.7 Flash 的低成本优势。该功能可能已被内部排期。

2. **[Issue #193](https://github.com/HKUDS/nanobot/issues/193)**（开放）  
   **诉求**：询问是否支持 Ollama API（当前仅支持 vLLM）。  
   **分析**：13 条评论显示本地部署场景需求旺盛，用户希望无缝切换 Ollama 生态。

3. **[Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)**（已关闭）  
   **诉求**：批评项目缺乏中文 README 文档。  
   **分析**：10 条评论体现中文用户群体对本地化文档的重视，建议维护者优先补充。

4. **[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)**（开放）  
   **诉求**：警告 NanoBot 可通过 `exec()` 泄露 `config.json` 中的密钥。  
   **分析**：8 条评论聚焦安全隔离，用户建议容器化部署时分离核心循环与配置文件。

---

## 5. Bug 与稳定性
按严重程度排序：

### 🔴 高危
- **[Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)**：密钥泄露风险  
  - **状态**：开放，无修复 PR。  
  - **建议**：需重构核心循环权限隔离机制。

### 🟠 中危
- **[Issue #1905](https://github.com/HKUDS/nanobot/issues/1905)**（已关闭）：技能内容在会话历史中被截断为 500 字符  
  - **状态**：已通过 [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) 修复。
- **[Issue #1833](https://github.com/HKUDS/nanobot/issues/1833)**：程序频繁异常退出（SIGTERM）  
  - **状态**：开放，无日志根因分析。需排查内存泄漏或信号处理问题。
- **[Issue #1577](https://github.com/HKUDS/nanobot/issues/1577)**（已关闭）：CLI 命令 `nanobot agent` 崩溃  
  - **状态**：由 `signal.SIGHUP` 兼容性问题引发，已修复。

### 🟡 低危
- **[Issue #1904](https://github.com/HKUDS/nanobot/issues/1904)**：子代理返回信息乱码  
  - **状态**：开放，可能为编码配置问题。
- **[Issue #1630](https://github.com/HKUDS/nanobot/issues/1630)**：部分技能（weather/skill-creator）不可用  
  - **状态**：开放，疑似环境配置错误。

---

## 6. 功能请求与路线图信号
结合 Issue 与 PR 分析，以下功能可能被纳入下个版本：

1. **Telegram 增强**：  
   - [Issue #471](https://github.com/HKUDS/nanobot/issues/471) 请求流式消息支持，[PR #1900](https://github.com/HKUDS/nanobot/pull/1900) 已实现回复上下文读取。  
   - **预测**：Telegram 频道将成为重点优化方向。

2. **本地 LLM 支持**：  
   - [Issue #193](https://github.com/HKUDS/nanobot/issues/193)（Ollama）、[Issue #45](https://github.com/HKUDS/nanobot/issues/45)（vLLM）呼声强烈。  
   - **预测**：可能通过统一适配层支持 OpenAI 兼容 API。

3. **多渠道集成**：  
   - [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)（微信）、[Issue #91](https://github.com/HKUDS/nanobot/issues/91)（飞书/钉钉）需求明确。  
   - **进展**：[PR #1707](https://github.com/HKUDS/nanobot/pull/1707) 已提交零依赖 Web UI 频道。

4. **安全加固**：  
   - [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873) 的密钥隔离需求可能推动沙箱机制引入。

---

## 7. 用户反馈摘要
从评论中提炼关键洞察：

- **痛点**：
  - 本地部署配置复杂（[Issue #855](https://github.com/HKUDS/nanobot/issues/855)），低显存设备（如 RTX 3050）难以运行 8B 模型。
  - 文档缺失导致上手成本高（[Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)）。
  - 非英语用户对本地化支持不满（中文、日语社区）。

- **满意点**：
  - 用户赞赏项目开放性和架构灵活性（[Issue #855](https://github.com/HKUDS/nanobot/issues/855)）。
  - 多渠道设计受肯定（Discord、Telegram 支持）。

- **典型场景**：
  - 个人助理（天气查询、日程提醒）。
  - 企业内部工具集成（飞书机器人）。

---

## 8. 待处理积压
以下长期未解决 Issue 需关注：

1. **[Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)**：Matrix 频道启动失败  
   - **状态**：开放 12 天，5 条评论。  
   - **建议**：优先排查 WebSocket 连接逻辑。

2. **[Issue #1157](https://github.com/HKUDS/nanobot/issues/1157)**：OpenRouter 调用 StepFun 模型报 400 错误  
   - **状态**：开放 15 天，5 条评论。  
   - **建议**：验证 `litellm` 兼容性或提供适配补丁。

3. **[Issue #1879](https://github.com/HKUDS/nanobot/issues/1879)**：WhatsApp 频道 QR 码生成失败  
   - **状态**：开放 1 天，3 条评论。  
   - **建议**：补充错误日志和平台环境信息。

---

**结语**：NanoBot 正在快速演进，社区对本地化、多渠道和安全性提出更高要求。建议维护者优先处理密钥泄露风险（#1873）和本地模型支持（#193），同时补充多语言文档以降低贡献门槛。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-12)

## 1. 今日速览
Zeroclaw 项目今日保持**极高活跃度**，呈现出典型的"版本发布后快速迭代"特征。社区贡献激增，全天共有 **50 条 Issue 更新**（关闭 29 条）和 **50 条 PR 更新**，显示出维护团队正在高效处理反馈并合并社区代码。继昨日发布 v0.1.7-beta.30/28 修复分支模型迁移问题后，今日重心转向**生态兼容性补全**（Azure/Bailian/Anthropic 支持）和**配置系统安全性增强**。虽然 GLIBC 兼容性和部分 Channel 配置问题仍在困扰部分用户，但整体项目健康度良好，正处于功能快速扩充期。

## 2. 版本发布
今日未发布全新版本，但昨日（或近期）发布的 **v0.1.7-beta.30** 影响深远，值得注意：
- **v0.1.7-beta.30** ([Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30))
  - **核心变更**：CI/CD 流程简化，正式迁移至 **单 `master` 分支模型**。
  - **破坏性变更/迁移注意**：原有的 `main` 分支已被弃用甚至删除 ([Issue #3061](https://github.com/zeroclaw-labs/zeroclaw/issues/3061))。所有贡献者需确保本地和 PR 的基准分支已切换至 `master`，否则可能导致代码冲突或基于过期代码构建。

## 3. 项目进展
今日虽然没有大量合并 PR（仅 14 条合并/关闭），但提交的 PR 质量极高，主要集中在**扩展 AI 模型提供商**和**修复关键配置 Bug**，为下一次版本发布打下基础：
- **Provider 生态扩充**：
  - [PR #3158](https://github.com/zeroclaw-labs/zeroclaw/pull/3158): 新增阿里云百炼大模型支持，解决国内用户接入痛点。
  - [PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246) / [PR #3007](https://github.com/zeroclaw-labs/zeroclaw/pull/3007): 两路并进添加 Azure OpenAI 支持，企业级需求得到响应。
  - [PR #3177](https://github.com/zeroclaw-labs/zeroclaw/pull/3177): 增强 Anthropic Provider 的视觉理解能力。
- **配置与安全性修复**（由 @Alix-007 密集提交）：
  - [PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255) / [PR #3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256): 修复了 Channel Secrets 在保存时未加密、加载时未解密的严重隐私泄露风险。
  - [PR #3254](https://github.com/zeroclaw-labs/zeroclaw/pull/3254): 修复 Gateway Pairing Token 重启后失效的问题。
- **Web UI 体验优化**：
  - [PR #3178](https://github.com/zeroclaw-labs/zeroclaw/pull/3178) / [PR #3185](https://github.com/zeroclaw-labs/zeroclaw/pull/3185): 增加了消息复制按钮和输入框自动扩展功能，对齐主流 Chat UI 体验。

## 4. 社区热点
今日讨论最热烈的问题集中在**部署兼容性**和**功能命名规范**上：
1.  **[Bug] GLIBC_2.39 Not Found ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))**
    - **热度**：👍 2，评论 9
    - **诉求**：用户在旧版本 Linux 发行版（如 Ubuntu 20.04）上运行二进制文件时报错。这反映了用户希望 ZeroClaw 具有更广泛的开箱即用兼容性，不应强制依赖最新的系统库。
    - **响应**：社区已提交 [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257) 尝试降低构建基线以解决此问题。
2.  **[Bug] Feishu/Lark Channel 命名混淆 ([Issue #3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012))**
    - **热度**：👍 1，评论 9
    - **诉求**：国内飞书用户无法找到 `channel-lark` 特性，且该核心功能默认未开启。
    - **响应**：[PR #3105](https://github.com/zeroclaw-labs/zeroclaw/pull/3105) 已添加 `channel-feishu` 别名并计划默认开启，等待合并。
3.  **[Feature] MCP Tool Support in Agent ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))**
    - **热度**：评论 3
    - **诉求**：目前 MCP 工具仅在 Channel 层生效，Agent 模式下被忽略。这是架构层面的缺口，阻碍了 Agent 利用外部工具生态。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响部署稳定性和特定渠道的可用性：
- **S1 / 部署受阻**：
  - **Docker on MacOS 初始化失败** ([Issue #2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930))：`bootstrap.sh` 脚本在 macOS 环境下报错 `Unbound variable`。
- **S2 / 功能降级**：
  - **Feishu 连接失败** ([Issue #2494](https://github.com/zeroclaw-labs/zeroclaw/issues/2494))：配置正确但无法建立连接。
  - **Matrix Channel 缺失** ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953))：官方构建版本未包含 Matrix 支持 flag。
  - **Browser Pairing 不持久化** ([Issue #2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960))：每次重启需重新配对。
  - **Ollama Tool Calling 回归** ([Issue #3079](https://github.com/zeroclaw-labs/zeroclaw/issues/3079))：Qwen 模型频繁输出空内容或格式错误。
- **修复状态**：针对 GLIBC 和配置加密的修复 PR 已提交，等待 Review；Ollama 问题尚在排查中。

## 6. 功能请求与路线图信号
结合 Issue 和 PR，可以看出项目正在向以下方向演进：
1.  **企业级云服务集成**：Azure OpenAI ([#3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176)) 和 阿里云百炼 ([#3059](https://github.com/zeroclaw-labs/zeroclaw/issues/3059)) 的支持 PR 均已就绪，**极大概率纳入下个版本**。
2.  **安全与合规**：社区对配置文件中明文存储 Secrets 表示担忧，相关加密 PR ([#3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255)) 显示项目正在加强安全性。
3.  **MCP 深度集成**：用户要求在 Agent 核心运行时中支持 MCP ([#3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))，甚至提出了动态加载工具以节省 Context 的需求 ([#3095](https://github.com/zeroclaw-labs/zeroclaw/issues/3095))。这是 Agent 智能进化的关键信号。

## 7. 用户反馈摘要
- **痛点**：
  - **文档与命名脱节**：用户普遍反映 `channel-lark` 难以联想到飞书，且文档更新滞后于代码变更（如 `main` vs `master` 分支）。
  - **容器化体验不佳**：Docker 部署在 Mac/WSL 环境下频遇脚本错误和权限问题。
  - **配置复杂且易错**：Web GUI 保存配置报 500 错误 ([#2947](https://github.com/zeroclaw-labs/zeroclaw/issues/2947))，且温度等参数配置不生效 ([#3033](https://github.com/zeroclaw-labs/zeroclaw/issues/3033))。
- **满意点**：
  - 社区响应速度极快，如 GLIBC 和 Feishu 别名问题在提出后 24 小时内即有对应的 PR 修复方案。
  - Web UI 的持续改进（自动扩展输入框、复制按钮）受到了开发者的认可。

## 8. 待处理积压
- **高优先级**：
  - [Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) (GLIBC 兼容性)：已有 [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257)，建议维护者尽快合并并发布 Hotfix，否则将阻塞大量 Linux 用户升级。
  - [Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153) (Agent MCP 支持)：目前仅评论 3 条，但涉及核心架构，建议架构师尽早介入评估。
- **一般关注**：
  - [Issue #3093](https://github.com/zeroclaw-labs/zeroclaw/issues/3093) (动态节点发现)：提出了类似 OpenClaw 的 P2P 节点功能，属于较大的架构特性，建议纳入长期 Roadmap。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
PicoClaw 项目今日呈现出**极高的开发活跃度**与社区互动热情。在过去 24 小时内，项目迎来了 **v0.2.2 正式版**的发布，并伴随着 3 个版本迭代，显示出交付节奏的加快。代码贡献方面，PR 更新量达到 **103 条**，其中包含大量针对 Web UI 和底层 Agent 架构的修复与重构。社区层面，共有 **21 条 Issue 更新**，讨论焦点集中在 Agent 架构重构（SOUL/AGENT 定义）以及 Web 端的易用性问题上。总体而言，项目正处于从功能堆叠向稳定性与架构优化转型的关键时期。

## 2. 版本发布
今日发布了 **v0.2.2 正式版** 及其对应的 Nightly 构建，标志着项目进入了一个新的稳定里程碑。

- **[v0.2.2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)**
  - **核心更新**：
    - **Web 设置增强**：增加了 `exec allow_remote` 配置支持，允许在 Web 界面直接配置远程执行权限 ([#1363](https://github.com/sipeed/picoclaw/pull/1363))。
    - **语音转录**：合并了 Echo 语音转录功能，增强了多模态交互能力 ([#1214](https://github.com/sipeed/picoclaw/pull/1214))。
  - **稳定性**：作为一个正式发布版，它整合了近期的多项修复，建议用户从 v0.2.1 尽快升级。

- **[v0.2.2-nightly.20260312](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.6612ca09)**
  - **新特性**：
    - **Matrix 渠道增强**：支持富文本消息，提升了 IM 渠道的消息表现力 ([#1370](https://github.com/sipeed/picoclaw/pull/1370))。
    - **新模型支持**：添加了 `LongCat` 模型提供商 ([#1317](https://github.com/sipeed/picoclaw/pull/1317))。
    - **MCP 修复**：修复了直接 Agent 模式下 MCP 初始化失败的问题。

## 3. 项目进展
今日共有 **41 个 PR 被合并或关闭**，主要集中在提升用户体验和修复边缘情况。

- **多智能体架构推进**：
  - **[#915](https://github.com/sipeed/picoclaw/pull/915) [CLOSED]**: 合并了 Feat/team 分支，标志着多智能体协作架构的初步落地，支持 Coordinator 调度多个子 Agent 并发执行任务。
  
- **Web UI 体验优化**：
  - **[#1385](https://github.com/sipeed/picoclaw/pull/1385)**: 修复了 Web 端无法恢复上次聊天会话的问题，提升了连续对话体验。
  - **[#1386](https://github.com/sipeed/picoclaw/pull/1386)**: 修复了 JSON 编辑器无法横向滚动的痛点。
  
- **底层稳定性修复**：
  - **[#1390](https://github.com/sipeed/picoclaw/pull/1390)**: 修复了 Telegram 渠道在 LLM 响应失败或挂起时，“正在输入”状态无限持续的问题。
  - **[#1391](https://github.com/sipeed/picoclaw/pull/1391)**: 修正了配置中模型轮询策略的逻辑，确保从第一个匹配项开始轮询。

## 4. 社区热点
今日讨论最激烈的话题集中在 Agent 的底层架构定义与未来规划上。

1.  **[Issue #1218 [OPEN]](https://github.com/sipeed/picoclaw/issues/1218) Agent 身份定义**
    - **热度**：评论 13 条
    - **核心诉求**：作者提出通过 `SOUL.md` 和 `AGENT.md` 两个文件来定义 Agent。`SOUL.md` 负责定义性格与价值观（自然语言），`AGENT.md` 负责定义具体行为与配置。
    - **分析**：这反映了社区对于 Agent 不仅仅是工具调用链，更具备“人格”和“灵魂”的高级定制化需求。

2.  **[Issue #1316 [OPEN]](https://github.com/sipeed/picoclaw/issues/1316) 事件驱动架构重构**
    - **热度**：评论 7 条
    - **核心诉求**：提议将当前的黑盒 Agent Loop 重构为事件驱动模式，支持 Hook、中断和动态注入消息。
    - **分析**：这是对可观测性和控制力的强需求，特别是对于构建复杂 UI 和自动化监控至关重要。

## 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，部分已有即时修复。

| 严重程度 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **High** | [Issue #748](https://github.com/sipeed/picoclaw/issues/748) | **Groq API 兼容性**：Groq 模型调用工具时格式报错 (400 tool_use_failed)。 | Open |
| **High** | [Issue #1151](https://github.com/sipeed/picoclaw/issues/1151) | **TUI 配置竞态**：PHI 标签页配置写入与其他标签页存在竞争条件，且路径未转义。 | Open |
| **Medium** | [Issue #1299](https://github.com/sipeed/picoclaw/issues/1299) | **Agent 模式 MCP 失效**：直接运行 Agent 忽略 MCP 工具。 | **Fixed** (v0.2.2-nightly) |
| **Medium** | [Issue #1350](https://github.com/sipeed/picoclaw/issues/1350) | **Docker 部署失败**：Launcher 镜像 Manifest 缺失。 | Open |
| **Low** | [Issue #1364](https://github.com/sipeed/picoclaw/issues/1364) | **Firefox UI Bug**：Web 端 Raw JSON 编辑器高度折叠。 | Open |

## 6. 功能请求与路线图信号
从开放的 PR 和 Issue 中，可以窥见项目下一阶段的重点方向：

- **多渠道接入扩展**：
    - **[PR #1351](https://github.com/sipeed/picoclaw/pull/1351)**: 新增 **Zalo** 渠道支持。
    - **[PR #1295](https://github.com/sipeed/picoclaw/pull/1295)**: 企业微信 AI Bot 长连接模式实现。
    - **[Issue #1372](https://github.com/sipeed/picoclaw/issues/1372)**: 用户请求 OpenIM 插件支持。
- **协议与模型兼容**：
    - **[PR #1284](https://github.com/sipeed/picoclaw/pull/1284)**: 添加 `anthropic-messages` 协议支持，预示着对 Anthropic 及其兼容模型（如 MiniMax、Xiaomi）的原生适配。
    - **[Issue #1347](https://github.com/sipeed/picoclaw/issues/1347)**: 请求集成 GitHub Copilot 的 Device Code 认证，可能意在将 PicoClaw 作为 Copilot 的后端或中间件。

## 7. 用户反馈摘要
- **痛点：Web 端交互细节**：用户对 Web UI 的细节敏感度提高，如 [#1373](https://github.com/sipeed/picoclaw/issues/1373) 反映的“无法恢复上次对话”和 [#1369](https://github.com/sipeed/picoclaw/issues/1369) 的“编辑器无法横向滚动”，显示出 Web 端正成为主要交互界面，对 UX 要求变高。
- **痛点：Provider 兼容性**：除了 Groq (#748)，还有 Volcengine SSL (#1375) 等问题，表明在接入非 OpenAI 标准模型时仍存在较多摩擦。
- **场景：作为库/框架使用**：用户开始尝试将 PicoClaw 作为 Headless 服务或嵌入其他系统（如 Termux Android），对 Node.js 能力 (#1371) 和库的引用 clean-checkout (#1348) 提出了要求。

## 8. 待处理积压
以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

1.  **[Issue #748](https://github.com/sipeed/picoclaw/issues/748)**: Groq API 工具调用失败。这是一个阻塞性问题，影响所有使用 Groq 便宜/快速模型的用户，且已存在两周以上。
2.  **[Issue #440](https://github.com/sipeed/picoclaw/issues/440)**: 硬性迭代限制问题。对于复杂任务，当前的 `max_tool_iterations: 20` 限制过于严格，导致任务无法完成。这涉及到核心 Agent 逻辑的调整，需要从架构层面考虑。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是 NanoClaw 项目 2026-03-12 的动态日报。

---

# 📊 NanoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
NanoClaw 今日呈现出**极高的社区研发活跃度**，核心焦点集中在 **Token 成本优化**与**系统稳定性增强**。社区贡献者 @gm4leejun-stack 提出并落地了一整套 Token 优化方案，包括内联压缩和响应长度控制，旨在降低 LLM 调用成本。同时，多个关键 PR 修复了 OAuth 刷新、流式消息泛滥及容器会话中断等问题。尽管功能迭代迅速，但 **33 个待合并 PR** 与 **Setup 复杂性**的反馈显示出项目在代码审核门槛与新用户入门体验上存在一定瓶颈。

## 2. 版本发布
*   **无新版本发布**。目前项目仍处于高频迭代阶段，大量功能通过 PR 等待合并，建议关注后续 `v1.x` 版本的整合情况。

## 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**（主要针对 Token 优化机制的拆分提交），另有大量功能 PR 进入待审核状态：

*   **Token 优化机制落地 ([Issue #983](https://github.com/qwibitai/nanoclaw/issues/983))**：社区贡献者完成了包含 **Inline Compaction（对话历史压缩）**、**Response Length Control（响应长度控制）** 和 **CLAUDE.md 自动压缩** 在内的全套方案。这标志着项目在**降低生产环境运行成本**方面迈出了关键一步。
*   **流式消息处理修复 ([PR #965](https://github.com/qwibitai/nanoclaw/pull/965))**：针对 Issue #732，修复了 WhatsApp 等渠道因流式输出导致的“刷屏”问题，改为 Agent 完成后一次性发送。
*   **新技能支持**：新增 **LanceDB 语义记忆** ([PR #979](https://github.com/qwibitai/nanoclaw/pull/979)) 和 **QQ Bot 频道** ([PR #836](https://github.com/qwibitai/nanoclaw/pull/836)) 支持，扩展了 Agent 的记忆能力与通信平台覆盖。

## 4. 社区热点
今日讨论焦点集中在**安全性**与**易用性**的权衡上：

*   **容器安全架构争议 ([Issue #865](https://github.com/qwibitai/nanoclaw/issues/865))**：
    *   **诉求**：资深用户 @calebfaruki 指出“仅使用容器并不等于安全”，批评当前架构对容器内部脚本过度信任，建议将大部分脚本移出 Agent 层以减少攻击面。
    *   **分析**：这反映了部分用户将 NanoClaw 用于生产环境时的安全焦虑，社区正在向更深度的防御架构演进。
*   **Token 优化方案 ([Issue #988](https://github.com/qwibitai/nanoclaw/pull/988))**：
    *   **诉求**：通过“零额外 Token 消耗”的巧思（如在正常对话中顺带压缩历史）来节省成本，引发了大量关注。
    *   **分析**：表明项目用户群体对**运营成本（ROI）**极其敏感，功能实用性高。

## 5. Bug 与稳定性
今日报告了若干影响使用的 High Priority 问题：

*   **[P0] Agent 无响应/卡死 ([Issue #958](https://github.com/qwibitai/nanoclaw/issues/958))**：用户完成 Setup 后发送消息无任何回复。目前尚未有确切修复方案，可能与会话管理或网络配置有关。
*   **[P0] WhatsApp 消息泛滥 ([Issue #732](https://github.com/qwibitai/nanoclaw/issues/732))**：
    *   **状态**：**已修复** ([PR #965](https://github.com/qwibitai/nanoclaw/pull/965))。
    *   **详情**：流式输出导致每个 Token 片段都发送一条消息，严重打扰用户。
*   **[P1] MCP 环境变量丢失 ([Issue #960](https://github.com/qwibitai/nanoclaw/issues/960))**：
    *   **状态**：**待修复**。
    *   **详情**：凭证代理迁移后，第三方 MCP 服务器无法读取 `.env` 中的变量（如 `${HA_TOKEN}`），导致智能家居等集成失效。
*   **[P1] OAuth Token 刷新失效 ([Issue #730](https://github.com/qwibitai/nanoclaw/issues/730))**：
    *   **状态**：**修复待合并** ([PR #969](https://github.com/qwibitai/nanoclaw/pull/969))。
    *   **详情**：修复了并发情况下的锁失效问题，增加了内存缓存。

## 6. 功能请求与路线图信号
*   **多实例支持 ([PR #970](https://github.com/qwibitai/nanoclaw/pull/970))**：允许在同一台机器上运行多个 NanoClaw 实例（通过 `NANOCLAW_INSTANCE` 命名空间隔离），这对于多租户或测试/生产混部场景至关重要，**极有可能合并**。
*   **OpenAI Codex 引擎支持 ([PR #963](https://github.com/qwibitai/nanoclaw/pull/963))**：引入 `AGENT_ENGINE=codex` 作为可选引擎。这显示了项目试图摆脱单一 LLM 供应商依赖的趋势。
*   **Podman 替代 Docker ([Issue #957](https://github.com/qwibitai/nanoclaw/issues/957))**：用户建议支持 Podman 以解决 macOS/Linux 上的 Docker Desktop 许可和性能问题。

## 7. 用户反馈摘要
*   **痛点**：
    *   **Setup 流程过长**：用户抱怨 "Setup takes ages" ([Issue #973](https://github.com/qwibitai/nanoclaw/issues/973))，质疑为何不使用简单的 JSON 配置。
    *   **认证方式不统一**：官方 CLI 使用 `ANTHROPIC_AUTH_TOKEN`，而 NanoClaw 仅支持 `API_KEY` 或 `OAUTH_TOKEN`，导致配置困惑 ([Issue #853](https://github.com/qwibitai/nanoclaw/issues/853))。
*   **满意点**：
    *   社区对 **Token 优化方案** 的设计思路（零额外成本、自动化）给予了高度评价，认为其切中了 Agent 长期运行的痛点。

## 8. 待处理积压
*   **PR 积压严重**：目前有 **33 个 PR 处于 Open 状态**，其中包括 OAuth 修复 ([#969](https://github.com/qwibitai/nanoclaw/pull/969)) 和核心功能 ([#970](https://github.com/qwibitai/nanoclaw/pull/970))。建议维护者优先处理涉及稳定性与安全性的 PR。
*   **长期 Issue**：Issue #958 (无响应) 虽然是最新提出，但属于“阻断性”问题，需立即排查是否为回归 Bug。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

IronClaw 项目今日处于**极高活跃度**状态，正在经历一次重大的版本迭代与功能密集发布期。过去 24 小时内，项目发布了 **v0.18.0** 新版本，并伴随着高达 **50 条 PR** 的更新流水线，显示出自动化 CI/CD 流程正在高频运行。社区方面，**46 条 Issues** 的活跃度揭示了当前版本在**安装兼容性**（glibc 版本限制）和**多渠道集成**（Telegram/Google Sheets）上存在显著痛点。尽管新功能（如 Podman 支持、数据导入）正在积极合并，但大量由 CI Bot 自动生成的 Staging Promotion PRs 表明项目正处于“快速迭代-测试-修复”的冲刺阶段。

## 2. 版本发布

### **v0.18.0** (发布于 2026-03-11)
- **更新性质**: 主要版本更新，包含大量 Staging 分支的合并。
- **核心变更**:
    - 主要是将 `staging` 分支的大量累积变更推广至 `main` 分支。
    - 包含了对 WASM `arti` 组件的更新。
    - 集成了过去 24 小时内合并的多项功能（详见第 3 节）。
- **潜在风险**: 今日 Issues 反馈显示新版本在旧版 Linux 系统（glibc < 2.35）上存在安装失败问题，建议运维团队关注。

## 3. 项目进展

今日共有 **33 条 PR 被合并/关闭**，项目在功能丰富度和架构解耦上取得了实质性进展：

- **核心功能扩展**:
    - **OpenClaw 数据迁移** ([PR #388](https://github.com/nearai/ironclaw/pull/388)): 实现了从 OpenClaw 导入记忆、历史记录和凭证的功能，降低用户迁移门槛。
    - **Podman 沙箱支持** ([PR #551](https://github.com/nearai/ironclaw/pull/551)): 除了 Docker 外，新增支持 Podman 运行沙箱环境，增强了 Linux 生态的适应性。
    - **汉化支持** ([PR #737](https://github.com/nearai/ironclaw/pull/737)): 社区贡献了 v0.1.0 的中文汉化包。

- **内部重构与优化**:
    - **内存索引优化** ([PR #203](https://github.com/nearai/ironclaw/pull/203)): 将记忆块的默认大小从 800 词减少至 300 词，旨在提高检索的召回率和精度。
    - **代码清理** ([PR #831](https://github.com/nearai/ironclaw/pull/831)): 重构了凭证测试代码，提升了测试代码的可维护性。

## 4. 社区热点

今日讨论最激烈的 Issues 集中在**强制认证**与**底层系统兼容性**上：

1.  **关于强制 NEAR AI 认证的争议** ([Issue #142](https://github.com/nearai/ironclaw/issues/142))
    - **热度**: 👍 1, 评论 9 条。
    - **分析**: 一位用户强烈质疑为何项目强制要求 NEAR AI 认证，认为这违背了开源精神且增加了不必要的修改成本。这反映了部分开发者对“开箱即用”和“去中心化/无依赖”的强烈诉求。

2.  **Linux 旧内核安装失败 (glibc < 2.35)** ([Issue #1008](https://github.com/nearai/ironclaw/issues/1008))
    - **热度**: 新开 Issue，迅速引起关注。
    - **分析**: 安装脚本在 Amazon Linux 2023 等系统上无法运行。这直接影响 IronClaw 在生产环境服务器（通常偏保守）中的部署，是一个严重的阻碍性问题。

3.  **Telegram 与 Google Sheets 集成问题频发** ([Issue #1001](https://github.com/nearai/ironclaw/issues/1001), [Issue #999](https://github.com/nearai/ironclaw/issues/999))
    - **热度**: Bug Bash 活动产生的大量反馈。
    - **分析**: 用户在使用 Telegram Bot 接收通知和通过 Google Sheets 操作数据时遭遇了 OAuth 失败、通知静默失败等问题，表明多渠道集成目前还不够稳定。

## 5. Bug 与稳定性

今日 Bug 报告主要集中在**部署**、**模型后端**及**工具集成**三个维度：

### 严重 - 阻断性
- **Linux 安装器无 Musl 回退** ([Issue #1008](https://github.com/nearai/ironclaw/issues/1008)): glibc < 2.35 系统无法安装。
  - **状态**: **已有 Fix PR** ([PR #1013](https://github.com/nearai/ironclaw/pull/1013))，提议增加 `musl` 目标支持。
- **AWS Bedrock 后端启动失败** ([Issue #1009](https://github.com/nearai/ironclaw/issues/1009)): 因凭证检查逻辑错误，导致无法使用 Bedrock。
  - **状态**: **已有 Fix PR** ([PR #1011](https://github.com/nearai/ironclaw/pull/1011))。

### 高危 - 功能受损
- **Ngrok 僵尸进程与隧道离线** ([Issue #733](https://github.com/nearai/ironclaw/issues/733)): 进程变为 `<defunct>`，导致 Webhook 失效。
- **Webhook 端口绑定错误** ([Issue #738](https://github.com/nearai/ironclaw/issues/738)): Tunnel 错误地绑定到了 3000 端口而非 8080，导致所有外部 Webhook 返回 404。

### 中危 - 体验受损
- **Google Sheets OAuth 403 错误** ([Issue #999](https://github.com/nearai/ironclaw/issues/999)): 认证成功后仍无权限调用 API。
- **Telegram 通知广播失败** ([Issue #994](https://github.com/nearai/ironclaw/issues/994)): Routine 触发时使用了错误的 `chat_id`。
- **MCP 协议握手违规** ([Issue #890](https://github.com/nearai/ironclaw/issues/890)): Stdio 传输层未发送 `initialize` 即调用 `tools/list`，导致部分 SDK 拒绝连接。

## 6. 功能请求与路线图信号

结合今日 Issues 与 PR 动态，可以看出项目的演进方向：

- **增强的本地/自托管支持**: 针对 Issue #142 的认证抱怨，未来可能会提供更灵活的“无认证模式”或本地模型默认配置，降低初次使用门槛。
- **全面的 Linux 兼容性**: PR #1013 的提交表明团队正在重视老旧 Linux 内核的兼容性，这是服务端部署的关键。
- **更丰富的 LLM 后端**: 修复 Bedrock 的问题以及对阿里云 Qwen (Issue #1012) 的兼容性讨论，显示出项目致力于成为全模态、全后端的 AI Agent 框架。

## 7. 用户反馈摘要

从今日密集的 Bug Bash 反馈中可以提炼出以下用户画像：

- **运维/开发者**: 对安装脚本的鲁棒性要求极高，不希望处理 glibc 依赖地狱；希望能通过环境变量灵活配置后端。
- **高级用户**: 倾向于将 IronClaw 作为自动化中枢，连接 Telegram 和 Google Sheets。目前的 OAuth 流程和参数传递（JSON 序列化问题）让他们感到挫败。
- **隐私/去中心化倡导者**: 强烈反对任何形式的强制云账号绑定（NEAR AI Auth），希望代码能够完全独立运行。

## 8. 待处理积压

- **MCP 服务器认证问题** ([Issue #299](https://github.com/nearai/ironclaw/issues/299)): 用户试图集成 Browserbase MCP 遇阻，该 Issue 自 2 月 22 日创建至今未获有效解决，随着 MCP 生态的火热，建议优先处理。
- **WASM 工具版本不兼容** ([Issue #840](https://github.com/nearai/ironclaw/issues/840)): 新手 Onboarding 安装的默认工具与 Host WIT 版本冲突，这会直接劝退新用户。
- **大量 Open Staging Promotion PRs**: 虽然是 CI 自动生成，但需确保它们不会长期阻塞主干合并，建议定期清理或自动化关闭过期的 Staging PRs。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于 LobsterAI 项目 2026-03-12 GitHub 数据生成的动态日报。

---

# LobsterAI 项目动态日报 (2026-03-12)

## 1. 今日速览
LobsterAI 今日保持**高度活跃**状态，社区互动与代码提交频繁。项目发布了 **v0.2.3** 版本，重点优化了文件交互体验。值得注意的是，社区对**即时通讯（IM）平台集成**（如钉钉、企微、QQ）表现出了极大的关注，相关 PR 频繁更新。然而，用户对**版本升级导致的配置丢失**以及**特定场景下的字符处理 Bug** 抱怨较多，需引起开发团队重视。整体而言，项目正处于快速功能迭代与生态扩展期。

## 2. 版本发布
### **v0.2.3** (发布于 2026-03-12)
本次更新主要聚焦于用户体验优化与 Bug 修复：
*   **新功能**：主界面附件上传现已支持多文件选择 ([PR #371](https://github.com/netease-youdao/LobsterAI/pull/371))。
*   **修复**：修复了 QQ 集成相关问题 ([PR #348](https://github.com/netease-youdao/LobsterAI/pull/348))。
*   **优化**：改进了聊天分页逻辑 ([PR #355](https://github.com/netease-youdao/LobsterAI/pull/355))。
*   **注意事项**：多位用户反馈更新后配置被重置，建议升级前备份配置文件。

## 3. 项目进展
今日共有 **7 个 PR 合并/关闭**，显著推进了多平台集成与稳定性建设：
*   **IM 平台 OpenClaw 集成**：合并了针对**钉钉** ([PR #378](https://github.com/netease-youdao/LobsterAI/pull/378))、**企微机器人** ([PR #383](https://github.com/netease-youdao/LobsterAI/pull/383)) 及 **QQ** ([PR #381](https://github.com/netease-youdao/LobsterAI/pull/381)) 的 OpenClaw 支持实现。这标志着 LobsterAI 正迅速打通主流办公 IM 渠道。
*   **稳定性修复**：修复了 Mac 端 Node 环境污染问题 ([PR #375](https://github.com/netease-youdao/LobsterAI/pull/375))，这对 Mac 用户的安装体验至关重要。
*   **UI 交互**：多文件选择功能的合并将提升文件处理效率。

## 4. 社区热点
今日讨论最热烈的问题集中在**核心功能缺陷**与**运维部署**上：
*   **[痛点] 字符串自动加空格 Bug** ([Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344))：用户 @mpapple 反馈包含“中文+数字”的字符串会被强制插入空格，且 AI 无法纠正。该 Issue 收获 5 条评论，被标记为严重阻碍使用的 BUG。
*   **[部署] Docker 支持请求** ([Issue #386](https://github.com/netease-youdao/LobsterAI/issues/386))：用户 @imlida 提出对 Docker 容器化部署的强烈需求，这通常是落地生产环境的关键门槛。
*   **[体验] 升级即重置** ([Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382))：用户抱怨频繁更新导致设置丢失，引发了关于软件持久化机制的讨论。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响文本处理与程序稳定性：
1.  **严重 - 文本处理逻辑缺陷**：Issue #344 报告的“中数混合自动加空格”问题，严重影响代码生成或数据处理的准确性。
    *   *状态*：Open，暂无关联 Fix PR。
2.  **严重 - 图片读取卡死**：Issue #357 报告 AI 读取图片时频繁出现卡死现象。
    *   *状态*：Open。
3.  **中等 - Bash 执行效率**：Issue #350 指出 Bash 命令执行极慢，存在不必要的等待，影响工具类 Agent 的体验。
    *   *状态*：Open，有评论补充细节。
4.  **已有修复 - Mac 环境问题**：PR #375 已合并，解决了 Mac 端 Node 环境污染导致的潜在崩溃或异常。

## 6. 功能请求与路线图信号
社区提出了多项具有前瞻性的功能请求，暗示了项目下一步的演进方向：
*   **Agent Teams 协作**：Issue #384 建议更新 Claude Agent SDK 以支持 "Agent Teams"，表明用户对**多智能体协作**有强烈需求。
*   **文件管理增强**：Issue #379 请求增加“打开文件所在路径”的功能，显示出用户对**工作流闭环**（从对话到本地文件系统）的渴望。
*   **环境变量管理**：Issue #377 提出需要在 App 内配置环境变量（如 API Key），以支持更复杂的 Skill 调用。
*   **待定 PR**：PR #376 提出的“小时级定时任务”和 PR #380 的“自定义 URI 协议”目前处于 Open 状态，有望在后续版本中纳入。

## 7. 用户反馈摘要
*   **满意度**：用户对主界面支持多文件选择表示欢迎，对 IM 集成速度感到惊喜。
*   **痛点**：
    *   **记忆能力**：Issue #186 持续有用户反馈记忆能力不如竞品 OpenClaw，即便配置了记忆功能也无效。
    *   **更新体验**：频繁的更新与不兼容的配置迁移（Issue #382）正在消耗用户耐心。
    *   **性能**：Bash 执行延迟和图片处理卡顿是当前主要的性能槽点。

## 8. 待处理积压
*   **Issue #186 (记忆能力差)**：自 2 月底提出至今未解决，是影响 AI 助手核心体验的关键问题，建议优先排查。
*   **Issue #273 (Linux 版本请求)**：已关闭但未见明确解决方案（可能是暂不支持或 Won't Fix），建议官方给予明确回复以管理用户预期。
*   **PR #240 (Workflow 增强)**：该 PR 涉及宏大的 Workflow 重构，已挂起近 10 天，建议维护者尽快 Review 以避免功能冲突。

---
*数据来源：GitHub LobsterAI Repo | 分析时间：2026-03-12*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是 **TinyClaw (TinyAGI)** 项目 2026-03-12 的动态日报。

# 📊 TinyClaw 项目日报 (2026-03-12)

### 1. 今日速览
TinyClaw 项目今日迎来了**架构重构与品牌升级的重大转折点**。开发团队合并了将单体应用拆分为 NPM Workspaces Monorepo 的关键 PR (#186)，并提交了将项目从 "TinyClaw" 全面重命名为 "TinyAGI" 的 PR (#191)，标志着项目正从单一工具向标准化 AI 智能体平台演进。今日共有 12 个 Issue 得到处理（关闭 9 个），6 个 PR 被合并，显示出极高的维护活跃度和迭代速度。此外，社区贡献的 Avian AI 提供商也被合并，生态扩展势头良好。

### 2. 版本发布
今日发布了 **v0.0.10** 版本，主要聚焦于运维体验优化和稳定性提升。
- **更新内容**:
  - **运维简化**: 移除了 tmux 会话中专用的日志窗格 (`daemon.sh`)，简化了 `heartbeat-cron.sh` 中的家目录检测逻辑。
  - **稳定性**: 将 Telegram 轮询监视器的超时时间从 2 分钟延长至 5 分钟，减少误报。
  - **代码质量**: 对 Task/TaskStatus 类型进行了本地化重构。
- **破坏性变更/迁移**: 无明显破坏性变更，主要是后台脚本和配置的逻辑调整，建议用户更新后检查 `heartbeat` 脚本是否正常运行。

### 3. 项目进展
今日合并的 PR 极大地推进了项目的底层架构和交互体验：
- **架构重构**: 合并了 #186，将原有扁平的 `src/` 目录重构为 5 个 NPM workspace 包 (`core`, `teams`, `channels`, `server`, `visualizer`)。同时用轻量级的 SQLite (better-sqlite3) 替代了 BullMQ/Redis，显著降低了部署依赖复杂度。
- **团队协作与实时流**: #190 修复了团队编排逻辑，现在 Agent 团队协作将统一通过 `~/.tinyclaw` 目录管理，并实现了团队响应的实时流式传输。
- **交互体验 (UX)**: 
  - #182 实现了看板任务拖拽自动触发 Agent 执行的功能，简化了操作流程。
  - #185 将所有 Bash 交互式提示迁移至 TypeScript (`@clack/prompts`)，提升了 CLI 的交互体验和可维护性。
- **生态集成**: 合并了 #143，新增了对 **Avian AI** 提供商的支持。

### 4. 社区热点
今日社区关注点集中在**功能扩展**与**易用性**上：
- **[Issue #66] Mission Control UI**: 讨论热烈（6 条评论），用户希望拥有类似 `missioncontrolhq.ai` 的可视化控制面板，能够追踪 Agent 的思考链路、工具使用和交互图谱。尽管 Issue 被关闭，但这反映了用户对可观测性的强烈需求。
- **[Issue #111] 本地模型支持**: 获得 👍 点赞，用户强烈呼吁原生支持 Ollama 和本地模型，以及自定义 API Key 的接入。
- **[PR #191] 品牌重塑**: 开发者提交了将项目重命名为 "TinyAGI" 的 PR，这可能意味着项目定位将超越目前的 "Claw" 工具集，转向更宏大的 AGI 智能体框架。

### 5. Bug 与稳定性
今日关闭了多个影响稳定性的问题，整体稳定性呈上升趋势：
- **[Issue #91] 消息无响应**: 修复了 WhatsApp 等渠道 Agent 显示"正在输入"但最终不回复消息的问题。此类通信 Bug 对用户体验打击较大，此次修复很关键。
- **[Issue #63] 进程清理**: 采纳了社区建议，在关闭信号时清除 `queue-processor.ts` 中的定时器，防止进程在清理未完成时退出导致的数据不一致。
- **[Issue #41/103] 提供商兼容性**: 通过合并支持 OpenAI 兼容端点 (#41) 和 GLM 4.7 (#103) 的相关讨论/代码，解决了模型源单一的问题。

### 6. 功能请求与路线图信号
根据新开 Issue 和最近的 PR 动向，项目正明显向 **"全功能 Web 端管理平台"** 演进：
- **Web 端控制塔**:
  - **[Issue #194]** 请求在 TinyOffice Web 门户中增加守护进程、队列、心跳和频道的运行时控制面板。
  - **[Issue #193]** 请求增加 Web 端的 "首次运行引导"，降低 CLI 配置门槛。
  - **[Issue #192]** 建议改进 TinyOffice 的 UX（如聊天持久化、历史记录加载）。
- **未来版本预测**: 结合 #191 的重命名动作和 #186 的架构拆分，下一版本极可能会集中精力完善 `@tinyagi/visualizer` 和 `@tinyagi/server` 包，将 CLI 优先的策略转变为 Web 优先，以响应 #194 和 #66 的诉求。

### 7. 用户反馈摘要
- **痛点**: 配置依赖 CLI 和修改配置文件对新手不够友好（#193）；缺乏对 Agent 思考过程的可视化追踪（#66）；偶尔出现的通信静默（#91）。
- **满意点**: 对新增多种模型提供商（Avian, GLM, OpenAI Compatible）表示欢迎；社区开发的卸载工具 ByeByeClaw (#189) 被提及，侧面反映项目已有一定用户基数。
- **场景**: 用户倾向于将 TinyClaw 用于多 Agent 协作场景（Team lead + members），并希望通过看板直接驱动工作流。

### 8. 待处理积压
- **[PR #191] feat: rebrand tinyclaw to tinyagi**: 目前状态为 **OPEN**。这是一个涉及全仓改名的大型 PR，需要维护者仔细审查合并冲突及对现有用户的影响，建议优先处理以统一社区认知。
- **[Issue #192/193/194] TinyOffice 增强**: 这三个新开的 Issue 均针对 Web 端体验，目前尚未有对应的 PR 关联，建议纳入近期的 Sprint 规划。

---
*分析师注：TinyClaw 正处于从一个 Telegram/CLI Bot 向完整的 Multi-Agent Platform（TinyAGI）跃迁的关键期。今日的重构（Monorepo + SQLite）为后续功能迭代打下了坚实的基础。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是 Moltis 项目 2026-03-12 的动态日报：

---

# 📊 Moltis 项目动态日报 (2026-03-12)

## 1. 今日速览
Moltis 项目今日呈现出**极高**的开发活跃度，虽然无新版本发布，但代码库经历了大规模的维护与功能迭代。过去 24 小时内，项目成功关闭了 **23 个 Issue**（主要是 Bug 修复），同时发起了 **20 个新的 PR**，显示出维护者（主要是 @penso）正在进行密集的代码提交与修复工作。目前的重点是提升系统稳定性（修复 Docker 和本地 LLM 的多个关键 Bug）以及完善 Web 端的 Onboarding（引导）流程。整体来看，项目处于“高质量快速迭代”阶段，正在为下一个版本积蓄功能。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
尽管没有发布新版本，但今日合并/关闭的 PR 和密集的待合并 PR 表明项目正在大规模修复已知问题并扩展兼容性。

*   **本地模型与推理修复**：
    *   修复了 MLX 后端流式输出中特殊标记（如 `<|im_end|>`）未被剔除的问题 ([PR #397](https://github.com/moltis-org/moltis/pull/397))，解决了 Issue [#306](https://github.com/moltis-org/moltis/issues/306)。
    *   修复了自定义 GGUF 模型在重启后丢失的问题 ([PR #417](https://github.com/moltis-org/moltis/pull/417))。
    *   新增了可选的 Vulkan GGUF 支持 ([PR #408](https://github.com/moltis-org/moltis/pull/408))，利好 AMD 显卡用户。

*   **Docker 与沙箱环境增强**：
    *   修复了 Docker-in-Docker 环境下沙箱挂载路径错误的问题 ([PR #405](https://github.com/moltis-org/moltis/pull/405))，这是一个影响较深的架构问题。
    *   增加了通用的 Docker Provider 环境变量引导支持 ([PR #401](https://github.com/moltis-org/moltis/pull/401))。

*   **聊天与通道修复**：
    *   修复了自动压缩（compact）在 Discord 等通道中错位的问题 ([PR #399](https://github.com/moltis-org/moltis/pull/399))，关闭了 Issue [#103](https://github.com/moltis-org/moltis/issues/103)。
    *   修复了 Telegram 语音消息重复输出的问题 ([Issue #173](https://github.com/moltis-org/moltis/issues/173) 已关闭)。
    *   增加了中断对话时保留部分历史记录的功能 ([PR #418](https://github.com/moltis-org/moltis/pull/418))，提升了用户体验。

*   **配置与兼容性**：
    *   支持旧版 Memory Embedding 配置键 ([PR #400](https://github.com/moltis-org/moltis/pull/400))，解决了升级导致的配置失效问题 ([Issue #109](https://github.com/moltis-org/moltis/issues/109))。

## 4. 社区热点
今日社区讨论主要集中在系统集成、部署难点及新功能提案上。

*   **Node 协议扩展提案** ([Issue #391](https://github.com/moltis-org/moltis/issues/391))
    *   **热度**: 评论 2 条 | 状态: Open
    *   **分析**: 这是一个 RFC（请求意见稿），提议让远程节点能够“广播”其可用的工具。目前远程节点只能执行基础 shell 命令，该提案旨在让 Agent 能自动发现并调用远程节点的特定工具，这对于分布式 AI Agent 架构具有重要意义。

*   **Docker 部署痛点** ([Issue #129](https://github.com/moltis-org/moltis/issues/129), [Issue #346](https://github.com/moltis-org/moltis/issues/346))
    *   **热度**: 评论 4 条 / 2 条
    *   **分析**: 用户反馈 Docker 部署后无法登录或添加节点。虽然维护者已修复部分相关问题，但这表明 Moltis 的容器化部署体验仍有优化空间，特别是网络配置和初始化流程。

*   **Webhook 功能需求** ([Issue #272](https://github.com/moltis-org/moltis/issues/272))
    *   **热度**: 评论 2 条 | 👍: 2
    *   **分析**: 用户强烈希望能通过 Webhook 触发 Agent 或接收事件，以便将 Moltis 集成到现有的自动化工作流中。

## 5. Bug 与稳定性
今日修复了大量 Bug，同时也出现了一些新的环境特定问题。

*   **已修复的关键 Bug**:
    *   **[高]** Docker 沙箱路径挂载错误 ([Issue #102](https://github.com/moltis-org/moltis/issues/102)): 导致容器内工作区为空，严重影响开发体验。已有修复 PR。
    *   **[高]** Crons 和 Heartbeat 无法设置 ([Issue #181](https://github.com/moltis-org/moltis/issues/181)): 已关闭，推测已在近期代码重构中修复。
    *   **[中]** 内存搜索 URL 出现双 `/v1` ([Issue #106](https://github.com/moltis-org/moltis/issues/106)): 已修复。

*   **新报告的 Bug (待处理)**:
    *   **[中]** z.ai 开箱即用网络错误 ([Issue #414](https://github.com/moltis-org/moltis/issues/414)): 用户反馈特定集成网络不通。
    *   **[中]** macOS 本地节点配对失败 ([Issue #366](https://github.com/moltis-org/moltis/issues/366)): WebSocket 端点返回 HTML 而非协议握手。
    *   **[低]** Github Copilot Provider 报错 ([Issue #261](https://github.com/moltis-org/moltis/issues/261)): 兼容性问题。

## 6. 功能请求与路线图信号
从 Open 的 PR 和 Issue 来看，近期版本的重点方向非常明确：

1.  **安全性增强**：支持远程 MCP URL 和 Headers 中的 Secrets 管理 ([PR #416](https://github.com/moltis-org/moltis/pull/416))，表明项目正在向企业级安全标准靠拢。
2.  **可配置性提升**：MCP 超时可配置 ([PR #419](https://github.com/moltis-org/moltis/pull/419)) 和 Agent 技能文件写入 ([PR #413](https://github.com/moltis-org/moltis/pull/413)) 显示了项目在赋予用户更多控制权。
3.  **多通道支持**：Discord、Whatsapp ([Issue #111](https://github.com/moltis-org/moltis/issues/111)) 和 Matrix ([Issue #233](https://github.com/moltis-org/moltis/issues/233)) 的支持正在逐步完善或被热烈讨论，显示出 Moltis 致力于成为全平台的 AI 中枢。

## 7. 用户反馈摘要
*   **痛点**：用户在配置 Docker 和本地 LLM（特别是 llama.cpp 构建）时遇到较多阻碍（如路径错误、编译失败）。配置文件的迁移（旧版 Embedding 配置）也造成了部分困惑。
*   **场景**：用户倾向于在 Docker 容器中运行 Moltis 并连接本地模型，或者通过 Telegram/Discord 进行交互。
*   **满意度**：尽管存在 Bug，但用户对项目方向表示认可。Issue 中有大量详细的 Bug 报告和功能建议，说明核心用户群技术能力较强，且愿意参与共建。

## 8. 待处理积压
*   **[Feature] Matrix Support** ([Issue #233](https://github.com/moltis-org/moltis/issues/233)): 创建于 2 月 25 日，虽然有人讨论但目前无明确排期。
*   **[Bug] Github Copilot provider errors** ([Issue #261](https://github.com/moltis-org/moltis/issues/261)): 2 月 28 日开启，至今未 Close，影响使用 Copilot 后端的用户。
*   **[Feature] Chinese Language Support** ([Issue #204](https://github.com/moltis-org/moltis/issues/204)): 2 月 22 日提出，目前尚未有相关 UI 国际化的 PR 动静，建议关注。

---
*以上数据基于 GitHub 2026-03-12 快照生成，分析由 AI 自动完成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-12)

## 1. 今日速览
CoPaw 项目在过去 24 小时内维持了**极高的社区活跃度**，共计产生 100 条 Issue 与 PR 更新。虽然未发布新版本，但社区贡献主要集中在**渠道适配**与**用户体验优化**上。 Issues 列表中关于飞书和钉钉的反馈占据主导，显示出 CoPaw 在国内企业级 IM 市场的关注度正在快速攀升。总体来看，项目处于**快速迭代期**，但大量 Pending PR 和 Bug 反馈也对维护者的 Review 速度提出了挑战。

## 2. 版本发布
*   **无新版本发布**。当前最新版本仍为 `v0.0.6.post1`。

## 3. 项目进展
今日共有 **24 个 PR 被合并或关闭**，主要集中在前端交互优化与后端稳定性增强，项目整体在多渠道支持与 UI 易用性上迈出了一大步。

*   **前端与 UI 增强**：
    *   [PR #1140](https://github.com/agentscope-ai/CoPaw/pull/1140) [MERGED]: Chat 界面增加模型选择功能，提升了多模型切换的便捷性。
    *   [PR #1112](https://github.com/agentscope-ai/CoPaw/pull/1112) [MERGED]: 工具列表增加“一键全开/全关”功能。
    *   [PR #1121](https://github.com/agentscope-ai/CoPaw/pull/1121) [MERGED]: Workspace 支持卡片拖拽排序。
    *   [PR #1221](https://github.com/agentscope-ai/CoPaw/pull/1221) [MERGED]: 引入 `chatId` 路由参数，优化国际化支持。

*   **Bug 修复与稳定性**：
    *   [PR #1307](https://github.com/agentscope-ai/CoPaw/pull/1307) [MERGED]: 修复了多个 Chat 请求详情去重逻辑问题。
    *   [PR #1242](https://github.com/agentscope-ai/CoPaw/pull/1242) [MERGED]: 修复了 API 调用导致子组件异常更新的 Bug。

*   **待合并的重要功能**：
    *   [PR #1290](https://github.com/agentscope-ai/CoPaw/pull/1290) [OPEN]: 实现 QQ 机器人频道 支持。
    *   [PR #1267](https://github.com/agentscope-ai/CoPaw/pull/1267) [OPEN]: 新增企业微信 智能机器人长连接模式。

## 4. 社区热点
今日讨论最活跃的 Issues 集中在**第三方模型接入**与**飞书渠道的稳定性**上：

1.  **[Issue #863](https://github.com/agentscope-ai/CoPaw/issues/863) [CLOSED]**: 关于 `copaw app` 终端报错 `websockets.legacy` 废弃警告的讨论（评论数 9）。这反映了用户对底层依赖库升级的敏感度。
2.  **[Issue #1292](https://github.com/agentscope-ai/CoPaw/issues/1292) [CLOSED]**: 硅基流动模型连接测试失败问题（评论数 5）。用户在使用非默认模型提供商时遇到连接阻碍，需要关注 Provider 适配层的兼容性。
3.  **[Issue #1100](https://github.com/agentscope-ai/CoPaw/issues/1100) [OPEN]**: 飞书频道出现重复回复消息的 Bug（评论数 5）。这是影响生产环境使用的严重问题。

## 5. Bug 与稳定性
今日 Bug 反馈较多，主要集中在 **v0.0.6 版本的飞书渠道** 和 **工具调用** 模块：

*   **严重**:
    *   **[Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136)**: Windows 系统下执行 `execute_shell_command` 导致会话卡死，需重启恢复。**Fix PR**: [PR #1250](https://github.com/agentscope-ai/CoPaw/pull/1250) (Open) 正在优化 Shell 执行和上下文管理。
    *   **[Issue #1243](https://github.com/agentscope-ai/CoPaw/issues/1243)**: v0.0.6Post1 版本中飞书 Channel 的 `/compact` 指令失效，导致上下文无法压缩，Token 消耗失控。

*   **中等**:
    *   **[Issue #1277](https://github.com/agentscope-ai/CoPaw/issues/1277)**: 对话崩溃，报错 `Exceeded limit on max bytes to request body`。上下文管理机制在长对话场景下表现不佳。
    *   **[Issue #1291](https://github.com/agentscope-ai/CoPaw/issues/1291)**: macOS 脚本安装失败 (`info: command not found`)。**Fix PR**: 无官方 PR，但有用户提供了修复建议。
    *   **[Issue #1287](https://github.com/agentscope-ai/CoPaw/issues/1287)**: 无法连接 Cline API，连接失败。

## 6. 功能请求与路线图信号
社区正在积极拓展 CoPaw 的生态边界：

*   **多渠道支持**: [PR #1290](https://github.com/agentscope-ai/CoPaw/pull/1290) (QQ机器人) 和 [PR #1267](https://github.com/agentscope-ai/CoPaw/pull/1267) (企业微信) 表明项目正向“全平台 IM 接入”方向发展。
*   **插件生态**: [Issue #1297](https://github.com/agentscope-ai/CoPaw/issues/1297) 希望支持飞书官方开源的 OpenClaw 插件（读写云文档等），这表明用户对 **RPA (机器人流程自动化)** 场景有强烈需求。
*   **Web UI 认证**: [PR #519](https://github.com/agentscope-ai/CoPaw/pull/519) 提出了基于环境变量的基础 Web UI 认证，这对公网部署的安全性至关重要。

## 7. 用户反馈摘要
*   **痛点**: **前端图片显示问题** ([Issue #1068](https://github.com/agentscope-ai/CoPaw/issues/1068)) 和 **Token 超限** ([Issue #1293](https://github.com/agentscope-ai/CoPaw/issues/1293)) 是用户的主要槽点。Web UI 的响应速度慢于飞书客户端，且文件/图片预览功能不完善。
*   **场景**: 用户频繁提及将 CoPaw 用于 **钉钉/飞书办公自动化** 以及 **本地图片处理**。
*   **满意度**: 社区对新功能的响应速度较快（如针对 UI 问题的 PR 合并），但对复杂 Bug（如 Shell 卡死、上下文压缩失效）的修复周期较长，目前主要依赖社区 PR 修复。

## 8. 待处理积压
*   **[PR #419](https://github.com/agentscope-ai/CoPaw/pull/419)**: 涉及 OpenAI-compatible providers 的 custom headers 支持。该 PR 已开启近 10 天，涉及底层 API 传输逻辑，建议维护者优先 Review 以解决大量第三方模型接入失败的问题。
*   **[Issue #809](https://github.com/agentscope-ai/CoPaw/issues/809)**: `news` 技能一直报错，虽然标记为 Bug，但目前未见明确的修复 PR 进展。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-03-12)

> **数据来源**: github.com/qhkm/zeptoclaw
> **分析周期**: 过去 24 小时

## 1. 今日速览
ZeptoClaw 今日迎来了极高强度的维护与更新，**单日关闭 13 个 Issue 和合并 13 个 PR**，并发布了 **v0.7.5 和 v0.7.6** 两个版本。项目重点聚焦于**安全性加固**（文件系统边界、Webhook 认证）和**开发者体验提升**（CLI 交互增强）。目前代码库处于高度活跃状态， backlog 清理工作进展显著，展现出极高的项目健康度与维护响应速度。

---

## 2. 版本发布

### 🚀 v0.7.6
**重点**: 安全修复与交互体验优化
*   **[Security]** 加固了入站认证和文件系统边界，修复了潜在的安全漏洞。
*   **[Feature]** CLI 交互模式新增斜杠命令自动补全与建议。
*   **[Fix]** 修复了 Claude 订阅令牌警告在启动时重复打印 3 次的问题。
*   **相关 PR**: [#320](https://github.com/qhkm/zeptoclaw/pull/320), [#323](https://github.com/qhkm/zeptoclaw/pull/323)

### 🚀 v0.7.5
**重点**: 配置管理与模型兼容性
*   **[Feature]** 新增 `zeptoclaw uninstall` 卸载命令。
*   **[Feature]** CLI 增加 `config reset` 配置重置命令。
*   **[Feature]** 引入模型提供商兼容性验证机制。
*   **相关 PR**: [#306](https://github.com/qhkm/zeptoclaw/pull/306), [#311](https://github.com/qhkm/zeptoclaw/pull/311)

---

## 3. 项目进展

今日项目核心推进主要集中在 **安全性重构** 和 **依赖治理** 两方面：

1.  **核心安全重构 (PR #324)**:
    合并了关键的 [PR #324](https://github.com/qhkm/zeptoclaw/pull/324)，全面加固了入站 Webhook 认证路径，并修复了 Telegram 用户名白名单的潜在风险。此举标志着项目在对抗 TOCTOU（检查与使用时间差）攻击和符号链接攻击方面迈出了关键一步。

2.  **Ollama 云端支持 (PR #316)**:
    合并了 [PR #316](https://github.com/qhkm/zeptoclaw/pull/316)，实现了 Ollama/vLLM 的云端无密钥认证支持。这允许本地实例无需配置 Dummy Key 即可运行，同时也兼容带鉴权的云端 Ollama 服务，极大地降低了本地开发门槛。

3.  **CLI 交互升级 (PR #323)**:
    通过 [PR #323](https://github.com/qhkm/zeptoclaw/pull/323) 引入了基于 rustyline 的命令自动补全功能，显著提升了交互式 Agent 的操作效率。

4.  **依赖批量更新**:
    合并了 10+ 个 Dependabot PR，重点包括 `jsonwebtoken` (v9→v10) 的破坏性升级和 `rustls` 的版本更新，确保了底层依赖的安全性与现代化。

---

## 4. 社区热点

尽管今日关闭了大量 Issue，但以下议题反映了近期的关注焦点：

*   **[feat] Merkle 哈希链审计 (Issue #221)**:
    唯一处于 **Open** 状态的活跃 Issue。提议为工具执行引入防篡改的 Merkle 哈希链审计日志。这表明社区/维护者正在探索增强 AI 智能体行为的可观测性与可信度，属于高价值的 Roadmap 信号。
    🔗 [Issue #221](https://github.com/qhkm/zeptoclaw/issues/221)

*   **[chore] jsonwebtoken 升级 (Issue #185)**:
    针对 `jsonwebtoken` v10 的迁移讨论，涉及 API 变更的手动适配。虽然已关闭，但反映了维护者对核心鉴权组件稳定性的重视。

---

## 5. Bug 与稳定性

今日报告的 Bug 大多已在当日修复，展现出“即报即修”的极高效率：

1.  **[P1-Critical] 文件系统与鉴权边界** (已修复 ✅)
    *   涉及 Issue: #318, #319, #321
    *   问题：Webhook 认证信任过度、文件写入路径存在 TOCTOU 漏洞、Telegram 用户名存在身份漂移风险。
    *   状态：均随 PR #324 的合并得到解决。

2.  **[P2-High] Channel 配置与安全** (已修复 ✅)
    *   涉及 Issue: #317, #325, #327
    *   问题：WhatsApp Cloud Webhook 签名未验证、Email Header 信任模型局限、Channel 设置清除逻辑异常。
    *   状态：已在 v0.7.6 中修复。

---

## 6. 功能请求与路线图信号

*   **Ollama 云模型支持**:
    用户 @rexzhang360 在 [Issue #284](https://github.com/qhkm/zeptoclaw/issues/284) 中请求支持云端 Ollama 模型。**状态**：已通过 [PR #316](https://github.com/qhkm/zeptoclaw/pull/316) 实现并合并。这表明项目正在快速响应本地模型私有化部署与云端托管并存的混合需求。
*   **可验证审计**:
    Issue #221 关于 Merkle 审计日志的提案目前仍处于 Open 状态，可能是下一个版本在“AI 安全与合规”方向的重点功能。

---

## 7. 用户反馈摘要

*   **痛点**：Ollama 配置繁琐（尤其是必须配置 Key 的问题）。
    *   *反馈来源*: Issue #284
    *   *解决*: 现已支持 Keyless 模式。
*   **体验优化**：CLI 交互中缺乏提示，用户需要记忆命令。
    *   *反馈来源*: Issue #322
    *   *解决*: v0.7.6 已添加 Tab 补全功能。
*   **安全性关注**：维护者主动识别并修复了 Email/Telegram/WhatsApp 集成中的身份验证弱点，表明项目在多渠道接入的安全基线上要求严格。

---

## 8. 待处理积压

*   **Merkle 审计日志功能 (Issue #221)**:
    作为目前唯一显眼的 Open 状态 Feature Request，且涉及 AI 智能体的核心安全属性（防篡改日志），建议维护者尽快排期或更新讨论状态。
    🔗 [Issue #221](https://github.com/qhkm/zeptoclaw/issues/221)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-12)

**分析师观点**：EasyClaw 今日处于**低频震荡、维护并进**的状态。虽然代码合并活动暂停，但社区通过 Issue 反馈了关于核心鉴权（OAuth）的关键阻碍，且项目保持了较高的版本发布频率（v1.6.6）。macOS 平台的安装体验虽有文档指引，但仍需关注 OAuth 问题是否会影响新用户留存。

---

### 1. 今日速览
项目今日整体**活跃度中等偏低**，主要集中在用户反馈与待审核代码的维持上。
- **版本迭代**：发布了 **v1.6.6** 版本，重点解决了 macOS 平台的安装指引问题。
- **社区反馈**：出现 1 条关于 **OpenAI OAuth 鉴权失败** 的高优先级反馈，涉及便携版与安装版。
- **代码贡献**：有 1 个针对 macOS UI 体验的 PR 处于待合并状态，暂无代码合并记录。

### 2. 版本发布
📦 **Release: v1.6.6** (发布于过去24小时内)
- **更新重点**：此版本主要聚焦于 **macOS 平台的兼容性与用户体验**。
- **关键变更**：
  - 针对 macOS Gatekeeper 拦截未签名应用导致提示“已损坏”的问题，在 Release Note 中提供了详细的终端修复命令指引。
  - **影响**：降低了 macOS 用户的安装门槛，但核心问题（代码签名）尚未从系统层面解决，仍需用户手动操作。
- **链接**：[EasyClaw v1.6.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6)

### 3. 项目进展
今日**无合并/关闭的 PR**，项目代码库未发生实质性变更。目前有 1 个活跃 PR 正等待维护者审核：
- **[OPEN] PR #15**: `fix: app icon in macos dock and system tray`
  - **内容**：修复了 macOS Dock 栏和系统托盘中的应用图标显示问题。
  - **分析**：这是一个提升品牌一致性和桌面端体验的重要 UI 补丁，建议尽快 Review 以便随下一版本发布。
  - **链接**：[PR #15](https://github.com/gaoyangz77/easyclaw/pull/15)

### 4. 社区热点
今日最活跃的讨论围绕**账号登录与鉴权**展开：
- **Issue #16** `[OPEN] OpenAI Oauth好像有问题`
  - **热度数据**：评论 1 条 | 👍 0 | 创建即活跃
  - **用户诉求**：用户在使用 EasyClaw 调用 OpenAI 服务时，OAuth 鉴权环节报错。这直接阻断了核心功能的使用，属于**阻断级问题**。
  - **链接**：[Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)

### 5. Bug 与稳定性
今日报告了 1 个严重的功能性 Bug，目前**尚未有修复 PR**：
- **🔴 严重 [Auth]**：OpenAI OAuth 登录失败 (Issue #16)
  - **表现**：便携版和安装版均出现相同的鉴权错误（见附件截图）。
  - **状态**：Open，待确认是 API 变更还是本地配置问题。
  - **建议**：维护者需优先复现，检查是否涉及 OpenAI 接口调整或 Token 过期逻辑。

### 6. 功能请求与路线图信号
- **UI/UX 优化信号**：PR #15 显示贡献者正在完善 macOS 端的视觉细节（Dock/托盘图标）。这表明项目正在向更成熟的桌面应用标准靠拢，下一版本可能会集中优化跨平台的桌面集成体验。
- **平台支持**：结合 v1.6.6 的 Release Notes，macOS 用户群体占据重要比例，未来的路线图应考虑引入正式的代码签名证书以解决“应用已损坏”的顽疾。

### 7. 用户反馈摘要
- **痛点 (macOS)**：尽管 v1.6.6 提供了解决“文件损坏”的文档，但这仍是 macOS 用户的典型痛点，用户期望能像普通 App 一样直接双击运行。
- **痛点 (核心功能)**：OpenAI OAuth 是连接 AI 服务的入口，该功能的异常（Issue #16）直接导致用户无法正常使用助手功能，引起了一定程度的焦虑。

### 8. 待处理积压
请维护者重点关注以下积压事项，避免社区热情冷却：
1.  **PR #15**: 已停留 1-2 天，涉及 macOS 基础体验，建议尽快合并。
2.  **Issue #16**: 今日新增的阻断性 Bug，若无及时响应可能导致新用户流失。

---
*数据来源：GitHub EasyClaw Repo Analytics*

</details>