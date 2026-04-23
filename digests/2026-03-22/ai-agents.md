# OpenClaw 生态日报 2026-03-22

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-21 22:01 UTC

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

# OpenClaw 项目动态日报 (2026-03-22)

## 1. 今日速览
OpenClaw 项目今日继续保持高强度的开发与社区互动，过去24小时内共有 **500 条 Issue 更新** 和 **500 条 PR 更新**，显示出极高的社区活跃度。然而，**今日无新版本发布**，表明项目正处于功能积累和缺陷修复的密集开发期，距离下一个稳定版本发布尚需时日。Issues 方面，尽管解决了部分积压问题（关闭 107 条），但新问题增长迅速（新开/活跃 393 条），导致积压总量仍在攀升。PR 方面，合并/关闭了 133 条，但待合并的 PR 积压严重（367 条），代码审查压力较大。

## 2. 版本发布
**无**。

## 3. 项目进展
尽管没有发布新版本，但今日合并/关闭的 PR 主要集中在提升系统健壮性、修复回归错误以及优化开发者体验上，项目正在为下一次发布夯实基础。

*   **CI/CD 优化**：合并了 [PR #51884](https://github.com/openclaw/openclaw/pull/51884)，通过回收 `unit-fast` CI 批次来优化测试资源使用。
*   **命令行工具修复**：合并了 [PR #51888](https://github.com/openclaw/openclaw/pull/51888)，增强了 `doctor` 命令的修复路径，提升了用户自诊断体验。
*   **代码重构**：合并了 [PR #51876](https://github.com/openclaw/openclaw/pull/51876)，继续从 `doctor` 模块中提取公共辅助函数，改善代码结构。
*   **Telegram 修复**：合并了 [PR #47624](https://github.com/openclaw/openclaw/pull/47624)，修复了 Cron 任务会话传递目标的丢失问题。

## 4. 社区热点
今日讨论最热烈的话题集中在国际化支持、新模型集成以及严重的低级代码错误上。

*   **国际化支持 (i18n) 缺失**：[Issue #3460](https://github.com/openclaw/openclaw/issues/3460) 以 112 条评论高居榜首。核心诉求是社区强烈希望 OpenClaw 支持多语言，但维护者表示目前精力不足以支撑该功能的开发和维护。
*   **钉钉集成体验不完整**：[Issue #26534](https://github.com/openclaw/openclaw/issues/26534) 指出虽然后端已支持钉钉，但在首次安装向导中缺失了配置入口，导致用户体验割裂。
*   **低级代码错误引发信任危机**：[Issue #51429](https://github.com/openclaw/openclaw/issues/51429) 报告了一个令人震惊的 Bug —— 开发者的本地工作路径 (`/Users/wangtao`) 被硬编码进了发布版本中。该问题引发了大量讨论，社区对代码审查流程的严谨性表示担忧。
*   **Kimi Web Search 认证失败**：[Issue #44851](https://github.com/openclaw/openclaw/issues/44851) 反映了 Kimi 模型的 Chat API 正常，但 Web Search 工具调用遭遇 401 错误，影响了国内用户的使用。

## 5. Bug 与稳定性
今日报告的 Bug 数量较多，且包含多个严重的回归问题和安全漏洞。

*   **严重/安全**：
    *   **硬编码路径**：[Issue #51429](https://github.com/openclaw/openclaw/issues/51429) - 如上所述，属于严重的低级错误，可能泄露开发者路径信息。
    *   **WhatsApp 监听器失效**：[Issue #30177](https://github.com/openclaw/openclaw/issues/30177) - 子代理通知发送失败，影响核心通信功能。
    *   **TLS 证书问题**：[Issue #49088](https://github.com/openclaw/openclaw/issues/49088) - Linux/VPS 环境下 `web_fetch` 工具静默失败，导致网络功能受损。

*   **回归/功能损坏**：
    *   **Google Vertex 认证**：[Issue #48479](https://github.com/openclaw/openclaw/issues/48479) - 最新版中 Gemini 3.x 模型认证方式回退，导致无法使用。
    *   **WhatsApp 消息发送**：[Issue #51558](https://github.com/openclaw/openclaw/issues/51558) - 监听器运行但无法发送消息。
    *   **设备控制**：[Issue #50438](https://github.com/openclaw/openclaw/issues/50438) - 设备命令在网关显示正常的情况下失败。

*   **已有修复 PR**：
    *   针对 `web_fetch`、WhatsApp 监听器等部分错误，社区已提交相关修复 PR（如 [PR #51731](https://github.com/openclaw/openclaw/pull/51731) 媒体处理重构，[PR #50045](https://github.com/openclaw/openclaw/pull/50045) 修复流式用量统计），正等待审查。

## 6. 功能请求与路线图信号
*   **MiniMax M2.7 支持**：[Issue #50234](https://github.com/openclaw/openclaw/issues/50234) - 请求支持最新的 MiniMax 模型。
*   **对话恢复功能**：[PR #51889](https://github.com/openclaw/openclaw/pull/51889) - 提议增加 `/restore` 命令以恢复已归档的会话记录，这对长程记忆和用户连续性体验至关重要。
*   **ClawHub 生态建设**：[Issue #50090](https://github.com/openclaw/openclaw/issues/50090) - 提出加强社区 Skill 开发能力的愿景。
*   **语音交互**：[Issue #49246](https://github.com/openclaw/openclaw/issues/49246) - 请求集成 TTS/STT 实现语音对话，适配智能家居硬件。

## 7. 用户反馈摘要
从 Issues 评论中可以看出，用户对 OpenClaw 的**多渠道集成能力**（如 Telegram, WhatsApp, Discord 等）表示认可，但也表达了对**代码质量和发布流程**的担忧。硬编码路径的 Bug ([#51429](https://github.com/openclaw/openclaw/issues/51429)) 尤其打击了用户信心。此外，**配置的复杂性**（如 OAuth 认证失败、环境变量冲突）和**特定平台（如 Raspberry Pi）的兼容性问题**也是常见的挫败点。

## 8. 待处理积压
*   **国际化支持 ([#3460](https://github.com/openclaw/openclaw/issues/3460))**：作为评论数最高的 Issue，长期未被正式纳入路线图，建议维护者重新评估社区贡献的可能性。
*   **Raspberry Pi 兼容性 ([#23909](https://github.com/openclaw/openclaw/issues/23909))**：ARM64 架构下的依赖编译失败问题长期未解决，阻碍了在边缘设备上的部署。
*   **视觉/图像识别故障 ([#23452](https://github.com/openclaw/openclaw/issues/23452))**：跨渠道的图像处理系统性故障，影响多模态功能的可用性。
*   **积压 PR 警告**：目前有 **367 条 PR 处于待合并状态**，其中包括大量修复和新功能（如 GigaChat 集成 [#48017](https://github.com/openclaw/openclaw/pull/48017)）。严重的积压可能导致社区贡献者流失，建议项目组尽快安排集中清理或增加审查人手。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-22)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**功能爆发与架构重构并行的震荡期**。各项目均在极力扩展多模态（语音/视觉）与多渠道（IM/Web）的接入能力，但普遍面临**稳定性与易用性的严峻挑战**。安全性与自主性的平衡成为分水岭，以 Zeroclaw 和 IronClaw 为代表的项目正在探索沙箱隔离与多租户架构，而轻量级项目则陷入配置复杂度过高的泥潭。整体生态呈现出"高活跃度、高回归率"的特征，多智能体协作（A2A）与标准化工具链成为下一阶段的竞争焦点。

## 2. 各项目活跃度对比

| 项目名称 | Issues (更新/新开) | PRs (更新/合并) | 版本发布 | 健康度评估 | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 393 | 500 / 133 | 无 | ⚠️ **风险高** | Issue 与 PR 积压严重，低级代码错误引发信任危机，处于维护瓶颈期。 |
| **NanoBot** | 16 / - | 52 / 19 | 无 | 🟢 **良好** | 核心架构重构中，多模态与渠道扩展进展顺利，社区响应及时。 |
| **Zeroclaw** | 30 / - | 50 / 27 | **v0.5.5** (及9个beta) | 🟢 **高度活跃** | 功能大爆炸，一日多版，但在安全策略与易用性上存在争议。 |
| **PicoClaw** | 28 / - | 35 / 14 | v0.2.3-nightly | 🟡 **中等** | 快速迭代，构建稳定性（Loong64/ARM）存在波动，多模态架构演进中。 |
| **NanoClaw** | 26 / - | 27 / 9 | 无 | 🟡 **中等** | 技能生态丰富但在合并管理上滞后，正经历架构清理。 |
| **IronClaw** | 22 / - | 50 / 7 | 无 | 🟡 **中等** | 企业级特性开发中，多模型兼容性（Gemini/Qwen）问题突出。 |
| **LobsterAI** | 16 / - | 29 / 16 | **v2026.3.21** | 🟠 **需关注** | 刚发布新版即遭遇 404 严重升级故障，安全审计暴露核心阻塞问题。 |
| **CoPaw** | 50 / 41 | 15 / 4 | 无 | 🔴 **严重** | v0.1.0 升级导致大规模数据丢失与兼容性崩溃，社区负面情绪高涨。 |
| **EasyClaw** | 2 / 0 | 0 / 0 | **v1.7.3/4/5** | 🟢 **极佳** | 极速迭代修复，Issue 清零，维护极其敏捷。 |
| **Moltis** | 0 | 2 (Open) | 无 | 🔵 **静默** | 低频维护，聚焦于特定平台（Windows/Nix）的底层修复。 |
| **ZeptoClaw** | 0 | 0 | 无 | 🔵 **静默** | 架构决策期，代码静默，讨论集中在底层 VM 隔离方案。 |

## 3. OpenClaw 在生态中的定位

*   **生态位**：**流量中心与基础设施参照**。尽管今日遭遇负面反馈，OpenClaw 凭借 500+ 的日更新量仍是生态中流量最大、集成度最广的项目，是其他项目对标的核心参照系。
*   **优势**：**全渠道覆盖能力**。相比 NanoBot 或 PicoClaw，OpenClaw 在 Telegram、Discord、钉钉等 IM 集成的广度上仍具优势。
*   **劣势**：**工程质量和响应速度**。硬编码路径（#51429）的低级错误和 367 条待合并 PR 的积压，暴露了其在快速迭代中代码审查流程的失控，相比之下 Zeroclaw 和 EasyClaw 的响应更为敏捷。
*   **技术路线**：走"大而全"的 **All-in-One 路线**，试图在单一项目中解决所有问题，导致复杂度急剧上升，这也是其目前配置复杂、Bug 频发的根源。

## 4. 共同关注的技术方向

1.  **多模态交互的深度集成**
    *   **现象**：PicoClaw (#1648)、NanoBot (#2340)、Zeroclaw 均在今日重点推进 TTS/ASR（语音）或独立视觉模型的配置。
    *   **诉求**：社区不再满足于单纯的文本对话，要求 Agent 具备"听、看、说"的能力，且希望能解耦文本模型与视觉模型（如文本用 GPT，视觉用 Gemini）。

2.  **安全性与自主性的博弈**
    *   **现象**：Zeroclaw (#1478) 爆发关于沙箱过严的讨论，IronClaw 合并 OAuth 漏洞修复，NanoClaw 引入信任框架。
    *   **诉求**：如何在允许 Agent 执行敏感操作（如安装软件、SSH）与防止系统崩溃之间寻找平衡，是企业级部署的核心痛点。

3.  **长程记忆与会话管理**
    *   **现象**：LobsterAI 修复内存泄漏，NanoClaw 请求 `/new` 命令重置会话，CoPaw 遭遇记忆丢失。
    *   **诉求**：随着 Agent 运行时间变长，上下文膨胀和数据持久化成为通用的性能与成本瓶颈。

## 5. 差异化定位分析

*   **全能型 vs 专精型**：
    *   **OpenClaw, Zeroclaw** 试图构建全能型 Agent 平台，集成硬件、IM、云服务，架构复杂。
    *   **NanoBot, PicoClaw** 更侧重于特定场景的轻量化部署（如智能家居、私有助手），对硬件（RPi）和特定渠道（QQ/钉钉）适配更深。
*   **企业级 vs 个人玩伴**：
    *   **IronClaw** 明确转向多租户、TEE 环境和持久化沙箱，瞄准企业运维场景。
    *   **EasyClaw, CoPaw** 界面化程度高，更倾向于作为个人用户的桌面效率工具或浏览器插件。
*   **架构演进**：
    *   **ZeptoClaw** 探索 Firecracker microVM 级别的物理隔离，代表了极端安全导向的差异化路线。

## 6. 社区热度与成熟度

*   **第一梯队 (活跃/快跑)**：**Zeroclaw, OpenClaw, NanoBot**。社区讨论极其热烈，代码提交频繁，但也伴随着高 Bug 率。
    *   *Zeroclaw* 处于"功能大爆炸"阶段。
    *   *OpenClaw* 处于"维护过载"阶段。
*   **第二梯队 (震荡/修复)**：**CoPaw, LobsterAI, PicoClaw**。近期有大版本发布，但正遭受严重的回归问题冲击（如 CoPaw 的数据丢失、LobsterAI 的 404 错误），处于质量巩固的关键期。
*   **第三梯队 (垂直/稳健)**：**IronClaw, NanoClaw, EasyClaw**。关注特定领域（安全/技能/易用），活跃度中等但更有针对性。EasyClaw 展现了极高的维护效率。

## 7. 值得关注的趋势信号

1.  **从 "Chat Bot" 到 "OS Agent" 的质变**
    *   IronClaw 的持久化沙箱 (#1458) 和 ZeptoClaw 的 Firecracker VM 讨论 (#387) 表明，行业正在试图解决 Agent "无状态、无记忆、无环境" 的问题。未来的 Agent 将更接近于一个长期运行的虚拟员工，而非一次性的问答程序。

2.  **模型路由成为标配**
    *   NanoBot (#2340) 和 PicoClaw 支持为不同模态配置不同模型，表明"单一模型打天下"的时代已过。架构上必须支持**Text Model + Vision Model + Code Model** 的混合调度，以优化成本和效果。

3.  **升级路径的脆弱性**
    *   CoPaw 和 LobsterAI 的案例警示开发者：**数据迁移是用户信任的"死穴"**。任何破坏用户数据（记忆/配置）的升级都将引发严重的社区 backlash。建议在 Roadmap 中将"无缝迁移"优先级提到最高。

4.  **A2A (Agent-to-Agent) 协议萌芽**
    *   Zeroclaw (#3566) 和 IronClaw (#1506) 均提及 A2A 或 ACP 协议。这预示着单打独斗的 Agent 即将退场，未来是**Multi-Agent 协作网络** 的竞争，能够委托任务给其他 Agent 的框架将具备更强的扩展性。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这里是 **NanoBot** 项目 2026-03-22 的动态日报。

# 📊 NanoBot 项目动态日报 (2026-03-22)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，社区开发与问题反馈呈现双向爆发态势。过去24小时内共有 **16 条 Issue 更新** 和 **52 条 PR 更新**，其中 PR 合并/关闭数达到 19 条，显示出核心团队正在积极审查代码并推进功能迭代。今日重点关注**多模态能力的增强**（视觉模型独立配置）以及**渠道接入的扩展**（NapCatQQ、Microsoft Teams）。虽然无新版本发布，但大量针对稳定性（如消息重复、Session持久化）的修复 PR 已被合并，预示着下个版本将重点解决稳定性与并发性能问题。

## 2. 版本发布
*   **无新版本发布**。
    *   *分析*：尽管没有发布新的 Release，但大量 `fix` 和 `feat` PR 的合并表明项目正处于下一个版本（可能是 v0.1.5 或 v0.2.0）的密集开发与整合阶段。

## 3. 项目进展
今日共有 19 个 PR 被合并或关闭，主要集中在**架构重构**、**渠道适配**和**交互体验优化**上：

*   **架构重构与性能优化**:
    *   [PR #2338](https://github.com/HKUDS/nanobot/pull/2338) **[MERGED]**: 重构了 `process_direct` 接口，统一返回 `OutboundMessage`，消除了 CLI 和其他调用方处理逻辑的不一致性，提升了代码健壮性。
    *   [PR #2277](https://github.com/HKUDS/nanobot/pull/2277) **[MERGED]**: 修复了 Prompt Token 估算逻辑，现在能够正确计算图像 Token，这对于多模态上下文管理至关重要。
*   **交互体验修复**:
    *   [PR #2333](https://github.com/HKUDS/nanobot/pull/2333) **[MERGED]**: 引入基于内容的合成确认机制（synthetic ack），配合模糊去重算法，有效解决了 LLM 在 Tool Loop 中重复输出进度条或思考文本的问题。
    *   [PR #2215](https://github.com/HKUDS/nanobot/pull/2215) **[MERGED]**: 进一步修复了进度消息重复的问题，提升了流式输出的整洁度。
*   **Web 搜索增强**:
    *   [PR #398](https://github.com/HKUDS/nanobot/pull/398) **[CLOSED/MERGED?]**: 增加了可配置的网络搜索提供商，支持 DuckDuckGo 和 Tavily 等，丰富了工具链。

## 4. 社区热点
今日社区讨论最热烈的话题集中在**易用性工具**和**多模态支持**：

*   **[Issue #1922](https://github.com/HKUDS/nanobot/issues/1922) [OPEN] nanobot-webui 管理面板**: 社区用户发布了一个自托管的 Web 管理界面，支持配置管理、实时聊天和多用户支持。该 Issue 获得了 **6 个点赞** 和积极讨论，反映了用户对 NanoBot 可视化管理工具的强烈需求。
*   **[Issue #623](https://github.com/HKUDS/nanobot/issues/623) [CLOSED] 自定义技能 "Tool Not Found"**: 一个关于自定义技能（Google Calendar 等）长期报错的问题终于在今日关闭。这表明最近的更新或文档修复解决了困扰技能开发者的核心痛点。
*   **[PR #2340](https://github.com/HKUDS/nanobot/pull/2340) 自定义视觉模型提供商**: 这是一个重要的功能性 PR，允许为多模态流程单独配置视觉模型（例如文本用 GPT，视觉用 Claude/Gemini），引发了关于架构扩展性的讨论。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已有修复方案：

*   **🔴 严重 - 钉钉文件/图片流中断**:
    *   [Issue #2327](https://github.com/HKUDS/nanobot/issues/2327): 钉钉下载图片后未传递给多模态管道，导致 Agent "失明"。
    *   *状态*: **待修复**。
*   **🟠 中等 - 本地模型工具调用静默失败**:
    *   [Issue #2293](https://github.com/HKUDS/nanobot/issues/2293): 使用 Ollama (qwen2.5) 时，一旦触发 Tool 调用，对话就会静默中断。
    *   *分析*: 可能与本地模型对 Function Calling 的指令遵循能力或超时有关。
*   **🟠 中等 - MCP 工具热更新失效**:
    *   [Issue #2325](https://github.com/HKSDS/nanobot/issues/2325): MCP Server 新增工具后，NanoBot 无法动态发现，必须重启。
    *   *状态*: **待修复**。
*   **✅ 已修复 - Telegram 语音转写回归**:
    *   [Issue #2141](https://github.com/HKUDS/nanobot/issues/2141): 升级后 Telegram 语音转写失效的问题已随相关 PR 的合并而关闭。

## 6. 功能请求与路线图信号
*   **多模态架构升级**: [Issue #2339](https://github.com/HKUDS/nanobot/issues/2339) 和 [PR #2340](https://github.com/HKUDS/nanobot/pull/2340) 均指向**分离文本模型与视觉模型**的架构设计。这对于在 Coding 场景下使用强推理模型（如 O1/GPT-5）而在视觉场景下使用多模态模型（如 Gemini/Claude）的用户来说是刚需，极有可能被合并。
*   **并发控制**: [PR #2335](https://github.com/HKUDS/nanobot/pull/2335) 提出将会局锁替换为会话级锁，允许不同会话并发处理。这标志着 NanoBot 正在向**高并发生产环境部署**方向演进。
*   **渠道扩展**:
    *   [PR #2337](https://github.com/HKUDS/nanobot/pull/2337): 增加 **NapCatQQ** 支持（支持图文）。
    *   [PR #2129](https://github.com/HKUDS/nanobot/pull/2129): 增加 **Microsoft Teams** 支持。
    *   [PR #2316](https://github.com/HKUDS/nanobot/pull/2316): QQ 语音消息支持。
    *   *趋势*: 项目正在迅速覆盖主流即时通讯软件，尤其是对国内生态（QQ/钉钉/微信）的支持正在加强。

## 7. 用户反馈摘要
*   **痛点**: 自定义模型接入渠道（如飞书）时配置复杂，容易报 401 错误（[Issue #2329](https://github.com/HKUDS/nanobot/issues/2329)）；本地模型（Ollama）在执行工具调用时的稳定性远不如云端模型。
*   **场景**: 用户正在尝试将 NanoBot 部署为**私有化 AI 助手**，通过 WebUI 管理家庭成员或团队员工，并接入 QQ/钉钉等私有通讯工具。
*   **评价**: 用户对项目的扩展性表示满意（"It's very exciting getting things to work!"），但对文档（如 `onboard` 命令参数变更未及时更新 [Issue #2250](https://github.com/HKUDS/nanobot/issues/2250)）和部分回归 Bug（语音转写、工具发现）感到困惑。

## 8. 待处理积压
*   **高优先级**: [PR #2317](https://github.com/HKUDS/nanobot/pull/2317) 提出的 **Context Budget (上下文预算)** 机制。该 PR 旨在解决长对话中工具调用导致 Token 消耗失控的问题，这是一个影响生产成本的关键特性，建议维护者优先审查。
*   **长期 Issue**: [Issue #981](https://github.com/HKUDS/nanobot/issues/981) 关于系统提示词中的 "Current Time" 导致 Prompt Cache 失效的问题。虽然是一个性能优化点，但对于使用按 Token 计费 API 的用户来说，这直接关系到成本，建议纳入路线图。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-22)

## 1. 今日速览
Zeroclaw 项目今日保持**极高的开发活跃度**，一天内发布了包括稳定版 `v0.5.5` 在内的 **10 个版本**，显示出团队正在密集迭代。社区互动方面，共有 **30 个 Issue 更新**和 **50 个 PR 更新**，PR 合并率较高，表明代码审核流程顺畅。今日重点明显在于**扩展生态集成**（如 DeepMyst、Slack API、硬件支持）以及**修复安装与构建流程**中的顽疾。虽然出现了关于安全策略过严导致易用性下降的强烈反馈，但整体项目正处于功能大爆炸阶段，向更强大的 Agent 框架迈进。

## 2. 版本发布
今日发布了主版本 **v0.5.5** 及多个测试版，主要更新如下：

*   **v0.5.5 (Stable)**
    *   **New Features**:
        *   集成 **DeepMyst** 作为兼容 OpenAI 的 Provider。
        *   新增 **WeatherTool**，通过 wttr.in 获取天气数据。
        *   **Slack Assistants API** 支持，增加了频道状态指示器。
        *   增加了 Cron 任务的前端编辑按钮和模态框。
    *   **Highlighted Beta Features (v0.5.5-beta.x series)**:
        *   **Channel Proxy**: 支持为特定频道配置 HTTP/SOCKS5 代理。
        *   **Hardware Support**: 新增 RPi GPIO, Aardvark I2C/SPI/GPIO 支持及硬件插件系统。
        *   **Memory**: 集成 mem0 (OpenMemory) 后端。
        *   **Auth**: 支持 OpenAI Codex 认证导入。

## 3. 项目进展
今日共有 27 个 PR 被合并或关闭，项目在稳定性、工具链和互操作性上取得显著进展：

*   **构建与安装体验优化**:
    *   [PR #4169]: 修复了 `curl | bash` 安装脚本中 sudo 密码输入的问题，现在会正确从 `/dev/tty` 读取。
    *   [PR #4165]: 实现了 macOS 上 Xcode 许可协议的自动接受，进一步减少用户手动干预。
    *   [PR #4172]: 修复了发布流程中 `aardvark-sys` 依赖缺失的问题。
    *   [PR #4167]: 从工作区移除了无依赖的 `robot-kit`，修复了 Docker 锁定构建失败的问题。
*   **核心功能修复**:
    *   [PR #4168]: 修复了私有远程 Ollama 服务器错误剥离 `:cloud` 标签的问题。
*   **大规模重构合并**:
    *   [PR #2759]: 恢复并重新集成了 SOP (Standard Operating Procedure) 子系统和 MQTT 接线，这是一个大型高风险 PR，标志着对 Agent 流程控制能力的回归和增强。

## 4. 社区热点
今日讨论最激烈的 Issue 集中在安全策略与易用性的平衡上：

*   **[Issue #1478] [Feature]: 除了安全,什么功能也没有**
    *   **热度**: 👍 6, 评论 44
    *   **分析**: 用户抱怨 Zeroclaw 的安全沙箱过于严格，即使手动配置放开权限，依然拒绝执行安装 等命令，导致 Agent 沦为单纯的聊天机器人。这反映了**高级用户/开发者**对于“开箱即用”与“系统安全”之间平衡点的强烈不满，呼吁提供更灵活的“全放开”模式。
*   **[Issue #4093] [Bug]: Provider streaming work stranded on deleted dev branch**
    *   **热度**: 👍 1, 评论 1
    *   **分析**: 开发者指出之前关于 Provider streaming 的工作（PRs #2868, #2873, #2875）曾被合并到已删除的 `dev` 分支，导致这些功能从未进入 `master`。这揭示了项目分支管理可能存在混乱，导致有效代码丢失。

## 5. Bug 与稳定性
今日报告了多个涉及核心运行时的 Bug，部分已有修复方案：

*   **S0 - 严重风险**:
    *   [Issue #4127]: **Runtime 幻觉执行**。用户报告在关闭所有安全设置后，Agent 似乎在非真实环境中执行命令（幻觉）。
    *   [Issue #4171]: **Telegram/Anthropic 循环 Panic**。在使用 Claude Sonnet 模型处理 Telegram 消息时出现无限循环导致程序崩溃。
    *   [Issue #4170]: **Weather Tool 不可用**。新发布的 WeatherTool 无法在 Channels 中调用（已有 Issue 提及，可能在后续版本修复）。
*   **S1 - 工作流阻塞**:
    *   [Issue #4139]: **UTF-8 Panic**。处理中文字符串切片时发生 Panic，这是典型的字节索引处理不当错误。
    *   [Issue #4107]: **模型切换失效**。`/model_switch` 命令在 QQ 频道显示成功，但实际推理仍使用旧模型。
    *   [Issue #4042]: **MCP Server 不可见**。Agent 无法发现或使用配置的 MCP server/tools。

## 6. 功能请求与路线图信号
社区正在积极推动 Zeroclaw 向更强大的多模态和标准化 Agent 平台发展：

*   **多 Agent 互操作性 (A2A)**:
    *   [Issue #3566] & [PR #4166]: 提出并实现 **A2A (Agent-to-Agent)** 协议支持。如果合并，Zeroclaw 将能与其他支持 A2A 协议的 Agent 互通。这极有可能被纳入下一版本，是通往多 Agent 协作的关键一步。
*   **本地化与隐私优先**:
    *   [Issue #4116] & [Issue #4119]: 请求支持**本地 GPU 加速 TTS (Piper/Coqui)** 和 **本地 Vision 模型路由**。这表明用户群体中有相当比例的 Local-First（本地优先）用户，希望摆脱对云端 API 的依赖。
*   **增强工具链**:
    *   [PR #4154]: 增加了 **Codex CLI** 和 **Gemini CLI** 的 Harness 工具，允许 Zeroclaw 委托任务给其他 CLI Agent，极大扩展了工具边界。

## 7. 用户反馈摘要
*   **痛点**:
    *   **安全限制过严**: 这是一个核心痛点。用户（尤其是个人玩家）希望有简单的“God Mode”来绕过沙箱限制，而不是与复杂的权限配置搏斗。
    *   **配置复杂度**: 相比简单的 Bot，Zeroclaw 的配置依然被认为过于繁琐（Issue #1478 提到因 OpenClaw 太复杂才转用 Zeroclaw，结果还是难用）。
    *   **Channels 功能不一致**: 多个 Issues 提到某些工具（如 Web Search, Weather）在 Agent 模式下正常，但在 Telegram/Discord 等 Channel 中失效。
*   **满意点**:
    *   对**硬件支持**（RPi GPIO）和**Slack 集成**的更新表示欢迎，认为这扩展了 Agent 的物理世界交互能力。

## 8. 待处理积压
*   **[Issue #4093] Streaming 代码丢失**: 这是一个急需维护者关注的技术债务问题。需要确认流失的 Streaming 代码是否需要重新通过 Cherry-pick 或重写的方式回归。
*   **[Issue #3683] 自主技能创建**: 关于 Agent 自我学习和技能生成的提案，虽然讨论热度一般，但对于 Agent 的长期进化至关重要，建议标记为 Roadmap 项目。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是为您生成的 **PicoClaw** 项目 2026-03-22 动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-03-22)

### 1. 今日速览
PicoClaw 项目今日保持**极高活跃度**，呈现出快速迭代与社区爆发式增长并行的态势。过去 24 小时内，项目发布了 **v0.2.3-nightly** 自动构建版本，同时 Issue 交互量高达 28 条，PR 更新达 35 条，显示开发节奏紧凑。社区侧重点明显向**多模态能力（TTS/ASR）**和**易用性改进（WebUI/Tools）**转移，但随之而来的是关于构建稳定性（如 Loong64 架构支持回滚）和 Provider 兼容性的讨论增加。总体而言，项目正处于功能扩展的关键期，但也面临着由架构重构带来的暂时性不稳定风险。

### 2. 版本发布
- **nightly: Nightly Build (v0.2.3-nightly.20260321.100720bb)**
  - **性质**: 自动化构建版本，可能存在不稳定性。
  - **更新范围**: 涵盖从 v0.2.3 到 main 分支的所有最新变更，主要包含最新的代码重构与功能提交。
  - **注意**: 官方提示该版本仅供测试，生产环境请谨慎使用。
  - 🔗 [Release Link](https://github.com/sipeed/picoclaw/releases/tag/nightly)

### 3. 项目进展
今日共有 **14 个 PR 被合并/关闭**，显著推进了以下领域：
- **核心功能增强**：
    - **执行工具重构**：合并了支持后台执行与 PTY 的增强型 Exec Tool（虽然曾因 Loong64 构建失败短暂回滚，后提交修复 PR #1869），这将赋予 Agent 处理长耗时任务和交互式命令的能力 ([PR #1752](https://github.com/sipeed/picoclaw/pull/1752))。
    - **子代理工具传递**：修复了 Spawn 工具创建的子代理无法继承工具列表的严重缺陷，修复了 Agent 协作的基础逻辑 ([PR #1717](https://github.com/sipeed/picoclaw/pull/1717))。
- **Provider 兼容性**：
    - 修复了 Anthropic API 重复工具调用 ID 导致的 400 错误，提升了 Claude 模型的稳定性 ([PR #1793](https://github.com/sipeed/picoclaw/pull/1793))。
    - 增加了对 Azure AI Foundry 的识别，以支持 Prompt Caching 等特性 ([PR #1860](https://github.com/sipeed/picoclaw/pull/1860))。
- **基础设施**：
    - 新增了 `docker/data` 到 `.gitignore`，避免本地数据库污染仓库 ([PR #1782](https://github.com/sipeed/picoclaw/pull/1782))。
    - 新增了 `agent-browser` 技能及重型 Docker 镜像，为浏览器自动化做好了准备 ([PR #1861](https://github.com/sipeed/picoclaw/pull/1861))。

### 4. 社区热点
今日社区讨论最活跃的话题集中在**语音交互架构**与**配置易用性**：
- **🔥 [Feature] Adding TTS and ASR Support (#1648)**: 评论数达 17 条。核心讨论在于如何将现有的 PR（#1642）优雅地集成到网关中，架构设计文档提出了灵活的语音交互（流式/非流式）方案，这是社区目前最期待的功能。
- **🌍 Add webUI support (#806)**: 评论数 7 条，点赞 7 个。社区对于降低非技术用户门槛的 WebUI 呼声很高，该项目正在进行重构，被视为降低入门门槛的关键。
- **💬 心跳消耗 Token 问题 (#1561)**: 虽然已由 PR #1617 修复，但其引发的讨论表明用户对隐形 Token 消耗非常敏感，任何后台默认行为都需要严格控制成本。

### 5. Bug 与稳定性
今日报告了若干影响体验的 Bug，部分已有修复方案：
- **🔴 P0 - API 兼容性**:
    - **Issue #1864**: `/v1/models` 端点未传递 API Key，导致某些本地网关（如 axonhub）无法连接。*(尚无 Fix PR)*
    - **Issue #1763**: aarch64 .deb 包安装失败，涉及依赖库冲突。*(Open)*
- **🟠 P1 - 功能异常**:
    - **Issue #1862**: MCP 返回的非文本 Base64 数据被错误传递给 LLM，导致占用大量 Context 甚至报错。*(Open)*
    - **Issue #1737**: Launcher 模式下 WebSocket 端口 18800 缺少文档，导致 Web UI 连接失败。*(Open)*
- **🟢 P2 - 体验优化**:
    - **Issue #1150**: 修复了连接池在 Panic 时导致死锁的问题。*(已由 PR #1717 等相关更新修复)*
    - **Issue #1815**: 模型返回空响应时的错误提示具有误导性，建议修改。*(Closed as perf/usage)*

### 6. 功能请求与路线图信号
- **语音交互**: 随着设计文档的完善，Discord 的 TTS/ASR 支持 ([PR #1852](https://github.com/sipeed/picoclaw/pull/1852)) 已经提交 PR，预计近期会合并。
- **执行能力**: PR #1869 正在解决 Loong64 构建问题，一旦合并，Agent 将具备真正的后台任务处理能力。
- **配置管理**: Issue #1352 正在重构配置文件结构以支持版本迁移，这预示着 v0.3.0 版本可能会有较大的配置格式变更。

### 7. 用户反馈摘要
- **痛点**: 
    - **Token 消耗**: 用户对不可见的 Token 消耗（如心跳包）非常敏感 ([#1561](https://github.com/sipeed/picoclaw/issues/1561))。
    - **日志噪音**: 用户希望有更细粒度的日志控制，而不是所有的 `--debug` ([#1848](https://github.com/sipeed/picoclaw/issues/1848))。
    - **模型对接**: OpenAI 兼容接口的认证问题依然是本地部署用户的常见障碍 ([#1864](https://github.com/sipeed/picoclaw/issues/1864))。
- **满意点**: 
    - 社区对 WebUI 重构 ([#806](https://github.com/sipeed/picoclaw/issues/806)) 和浏览器自动化技能 ([#1861](https://github.com/sipeed/picoclaw/pull/1861)) 表现出强烈的期待和正面反馈。

### 8. 待处理积压
- **🚨 高优先级**: Issue #1763 (aarch64 .deb 安装失败) 和 #1864 (OpenAI 兼容 API Key 缺失) 直接影响用户部署和基本使用，建议优先排查。
- **📢 需关注**: PR #1352 (Config 重构) 和 #1648 (TTS/ASR 架构) 处于 Open 状态较久且涉及核心变动，建议维护者尽快 Review 以防分支冲突。
- **⚠️ 误操作风险**: PR #1867 提交了重命名项目为 "Piconomous" 的 PR，虽然看起来像是误操作或测试 PR，但需维护者及时关闭以免混淆仓库。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-22)

**分析师摘要**：NanoClaw 项目今日呈现出极高活跃度的 "清理与冲刺" 态势。虽然无新版本发布，但社区提交了大量新技能与架构改进 PR。维护者集中关闭了大量自动化构建告警，显示出对主分支代码质量的高要求，同时也暴露出技能分支维护的滞后性。

---

### 1. 今日速览
NanoClaw 今日保持高度活跃，社区交互量显著（Issues 26条，PRs 27条）。
- **核心动态**：项目处于功能快速迭代期，重点集中在**多渠道集成（WhatsApp/Discord/Email）**与**底层架构优化（安全性与自治性）**。
- **维护状态**：维护者进行了大量 Issue 清理工作，特别是批量关闭了自动合并失败的告警，表明目前更倾向于手动维护特定的技能分支。
- **整体健康度**：良好。尽管存在积压的 PR，但社区贡献者正在积极解决代码审计发现的问题并扩展新功能。

### 2. 版本发布
- **状态**：❌ **无新版本发布**。
- 项目目前处于开发迭代阶段，今日主要是代码合并与问题修复，尚未打 Release 标签。

### 3. 项目进展
今日共有 **9 个 PR 被合并/关闭**，主要集中在提升用户体验与代码规范性上：

- **Telegram 交互增强**：
  - PR #1137 和 #1240 已合并，增加了 **Telegram 内联键盘支持** 和 **消息引用上下文转发** 功能，大幅提升了机器人在即时通讯软件中的交互体验。
  - PR #1138 已合并，引入了 `USER.md` 用户记忆系统，允许 Agent 持久化用户配置。
- **代码质量与工具**：
  - PR #1297 已合并，引入了 **ESLint 配置** 并修复了存量代码规范问题。
  - PR #1296 关闭（可能转为其他实现方式），CLI 技能正在演进中。

> **分析师注**：核心功能正在向更人性化的交互（记忆、按钮、引用）迈进，底层代码规范也在同步提升。

### 4. 社区热点
今日讨论热度最高的问题集中在**易用性**与**扩展性**上：

1.  **Issue #1211 [👍 2] - 增加 `/new` 命令重置会话**
    - **链接**：[qwibitai/nanoclaw Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211)
    - **诉求**：用户希望在聊天中随时开始全新会话，避免历史上下文无限累积导致 Token 浪费。
    - **信号**：这是 Agent 长期运行的痛点，目前已有相关 PR (#1311) 正在尝试解决此问题。

2.  **Issue #1273 [👍 1] - 多会话 Web 端实现**
    - **链接**：[qwibitai/nanoclaw Issue #1273](https://github.com/qwibitai/nanoclaw/issues/1273)
    - **诉求**：贡献者 `rozek` 分享了一个基于 Web 的多会话控制界面实现。
    - **信号**：社区对脱离 IM（如 Telegram/Matrix）独立运行 Agent 的需求在增加。

### 5. Bug 与稳定性
今日报告了多个关键 Bug，需引起注意：

- **🔴 严重：CLI 进程退出码异常**
  - **Issue**：[#1312](https://github.com/qwibitai/nanoclaw/issues/1312)
  - **现象**：`claw` CLI 在检测到结束标记并调用 `proc.kill()` 后，Happy path 仍然返回非零退出码。
  - **影响**：导致脚本无法正确判断命令执行成功与否，严重影响 CI/CD 集成。

- **🟠 中等：Duty Cycle 状态机失效**
  - **Issue**：[#1315](https://github.com/qwibitai/nanoclaw/issues/1315)
  - **现象**：Agent 的 "反思/休眠" 循环触发后无实际动作，卡死在当前状态。
  - **状态**：建议暂时禁用该功能。

- **🟡 一般：跨房间指令串扰**
  - **Issue**：[#1284](https://github.com/qwibitai/nanoclaw/issues/1284) [CLOSED]
  - **现象**：共享 Operator 账号导致不同 Matrix 房间的指令互相干扰。

### 6. 功能请求与路线图信号
从 Open PR 和 Issue 来看，下一版本可能包含以下重磅更新：

1.  **Trust & Autonomy Framework (Phase 3a)** - PR [#1308](https://github.com/qwibitai/nanoclaw/pull/1308)
    - 引入 "信任框架"，增加草稿路由和批准追踪机制，使 Agent 从单纯的响应者向半自主决策进化。
2.  **Skill Marketplace / Registry** - PR [#1309](https://github.com/qwibitai/nanoclaw/pull/1309)
    - 构建技能市场系统，允许用户通过 CLI 发现和安装第三方技能。这将极大改变目前的技能分发模式。
3.  **全渠道覆盖** - PR [#1313](https://github.com/qwibitai/nanoclaw/pull/1313)
    - 一键集成 WhatsApp, Discord, PDF, Voice 等多模态能力。
4.  **安全性增强** - Issue [#1316](https://github.com/qwibitai/nanoclaw/issues/1316) & PR [#1237](https://github.com/qwibitai/nanoclaw/pull/1237)
    - 计划用 macOS Keychain 和 OneCLI Gateway 替代明文 `.env` 凭证存储，安全架构正在重构。

### 7. 用户反馈摘要
- **痛点**：**上下文膨胀**。Issue #1211 反映目前无法有效清理对话历史，导致 Token 消耗过快。
- **场景**：**多终端管理**。Issue #1273 表明高级用户更倾向于通过 Web UI 而非单一的 IM 软件来管理多个 Agent 实例。
- **满意度**：用户 `rozek` 称赞工具 "wonderful"，但同时也指出现有的 IM-only 模式限制了其在教学等场景的应用。

### 8. 待处理积压
- **⚠️ 技能分支合并冲突严重**：
  - `skill/apple-container` 和 `skill/compact` 分支持续合并失败（Issues #1305, #1306, #1307 等）。
  - **风险**：如果这些分支长期不合并，相关功能将逐渐与主线脱节，导致使用这些实验性功能的用户遇到不可预测的错误。
  - **建议**：维护者需尽快手动解决冲突或重置这些分支。

- **📥 高价值 PR 待审查**：
  - **PR #1111 (API Usage Tracking)**：用于追踪 Agent 调用成本，对生产环境至关重要，停滞数日未合并。
  - **PR #1237 (Credential Proxy Replacement)**：涉及核心安全架构变更，需要核心维护者尽快 Review。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw** 项目 2026年3月22日 动态日报。

---

# IronClaw 项目日报 (2026-03-22)

**分析师观点**：IronClaw 今日处于高强度的迭代与修复周期，虽然无正式版本发布，但代码库极其活跃。项目目前正面临**多模型兼容性挑战**（Gemini/Qwen 错误频发）以及**安全与架构重构的关键节点**（OAuth 漏洞修复、多租户隔离）。同时，社区对 Slack 集成和沙箱持久化功能表现出强烈需求，建议维护者优先关注 TEE 环境下的凭证注入失败问题。

---

### 1. 今日速览
*   **高活跃度，零发布**：过去24小时内 Issues 活跃度极高（22条更新），PR 更新达 50 条，但无正式 Release，表明项目处于功能密集开发与代码质量整顿期。
*   **CI/CD 稳定性风险**：Staging 环境出现了 OAuth 测试竞态条件导致的关键 PR 阻塞（Flaky Tests），这可能拖慢后续版本的合并速度。
*   **重点转向企业级特性**：核心开发者的精力集中在多代理系统、多租户隔离以及持久化沙箱等高级功能上。
*   **安全响应迅速**：针对 OAuth 流程的密钥不匹配和 URL 验证中的凭据泄露风险，社区已提交并合并了修复。

### 2. 版本发布
*   **无新版本发布**：今日未检测到新的 Release 版本。建议关注 `staging` 分支的合并情况，预计下个版本将包含大量 Web UI 改进和 Bug 修复。

### 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**，主要集中在安全修复和架构增强：

*   **安全与正确性修复 ([PR #1454](https://github.com/nearai/ironclaw/pull/1454))**：
    *   修复了 OAuth 流程中状态解析的关键漏洞。旧代码允许格式错误的状态值静默失败，导致 flow_id 不匹配，现已强制执行严格解析。
*   **复杂 Schema 支持 ([PR #1397](https://github.com/nearai/ironclaw/pull/1397))**：
    *   大幅重构了 WASM 工具的参数强制转换与验证逻辑，现在支持 `oneOf`/`anyOf` 等复杂 JSON Schema，解决了 LLM 传参类型不一致导致工具调用失败的问题。
*   **Slack Socket Mode 迭代 ([PR #333](https://github.com/nearai/ironclaw/pull/333))**：
    *   关闭了旧版 PR，功能已被新的增强版 PR ([PR #1547](https://github.com/nearai/ironclaw/pull/1547)) 取代，新版本增加了附件支持，无需公网 IP 即可连接 Slack。

### 4. 社区热点
*   **[Issue #1538] Microsoft Defender 误报**
    *   **现象**：Windows 版本安装包被 Microsoft Defender 标记为 `Trojan:Win32/Wacatac.C!ml`。
    *   **诉求**：这是开源项目常见痛点，用户希望官方尽快与微软对接清除误报，或在文档中添加忽略指南。
    *   **链接**：[nearai/ironclaw Issue #1538](https://github.com/nearai/ironclaw/issues/1538)
*   **[Issue #1458] 持久化沙箱**
    *   **现象**：当前的沙箱容器是无状态的，用户无法执行 SSH、VPN 或 Kubectl 等需要保持连接状态的操作。
    *   **诉求**：强烈建议实现持久化容器支持，这是将 IronClaw 从“对话助手”转向“运维 agent”的关键。
    *   **链接**：[nearai/ironclaw Issue #1458](https://github.com/nearai/ironclaw/issues/1458)

### 5. Bug 与稳定性
今日报告了多个 **High/Critical** 级别的 Bug，主要集中在 LLM 供应商兼容性和 TEE 环境：

*   **🔴 Critical: TEE 环境凭证注入失败** ([Issue #1537](https://github.com/nearai/ironclaw/issues/1537))
    *   在 NEAR AI 托管的 TEE 环境中，WASM 凭证虽然存储成功但在运行时无法注入，导致 Agent 静默失败。**尚无 Fix PR**，需紧急关注。
*   **🔴 Critical: OAuth 流程不匹配** ([Issue #1441](https://github.com/nearai/ironclaw/issues/1441))
    *   Staging CI 发现的严重问题，注册与查找使用的 Key 不一致。已由 [PR #1454](https://github.com/nearai/ironclaw/pull/1454) 修复。
*   **🟠 High: LLM 供应商兼容性崩溃** (Gemini & Qwen)
    *   **Gemini** ([Issue #1510](https://github.com/nearai/ironclaw/issues/1510), [Issue #1521](https://github.com/nearai/ironclaw/issues/1521)): 调用工具时报错 `missing a thought_signature`。
    *   **Qwen** ([Issue #1520](https://github.com/nearai/ironclaw/issues/1520)): 报错 `Coding Plan is currently only available for Coding Agents`，疑似 API 端点或配置问题。
*   **🟡 Medium: CI 竞态条件** ([Issue #1280](https://github.com/nearai/ironclaw/issues/1280))
    *   Staging 推广 PR 因 OAuth 测试中的 `OAUTH_CALLBACK_HOST` 竞态条件而间歇性失败。

### 6. 功能请求与路线图信号
*   **多租户与安全隔离**：[PR #1118](https://github.com/nearai/ironclaw/pull/1118) (多租户认证) 和 [PR #1117](https://github.com/nearai/ironclaw/pull/1117) (工作区隔离) 正在审查中，这是迈向企业级部署的基石。
*   **Slack Socket Mode**：[PR #1547](https://github.com/nearai/ironclaw/pull/1547) 提供了无需公网暴露的 Slack 集成方案，并支持文件附件，预计很快会被合并。
*   **ACP 协议支持**：[Issue #1506](https://github.com/nearai/ironclaw/issues/1506) 提议增加 Agent Client Protocol 支持，以便委托任务给其他兼容的 Coding Agent（如 Cursor/Cline 等）。
*   **HTTP 域名白名单**：[Issue #1518](https://github.com/nearai/ironclaw/issues/1518) 建议为 Agent 配置 HTTP 请求白名单，减少频繁的人工审批打断。

### 7. 用户反馈摘要
*   **认证流程繁琐**：用户反馈在进行多步骤工作流（如 ACP 协作）时，每个 HTTP 请求都需要人工批准非常打断思路（[Issue #1518](https://github.com/nearai/ironclaw/issues/1518)）。
*   **飞书 Websocket 连接问题**：中国用户反馈飞书通道无法建立长连接，显示 "No connection detected"（[Issue #1516](https://github.com/nearai/ironclaw/issues/1516)）。
*   **Google 工具链不稳定**：连续报告了 Google 认证链接打开错误、第二次工具连接失败等问题（[Issue #1500](https://github.com/nearai/ironclaw/issues/1500), [Issue #1502](https://github.com/nearai/ironclaw/issues/1502)），表明 Google 生态集成目前不够稳定。

### 8. 待处理积压
*   **多代理系统高级特性 ([Issue #84](https://github.com/nearai/ironclaw/issues/84))**：
    *   作为 P2-P3 优先级的长期 Issue，涉及多代理路由和全局会话，自 2 月创建以来虽有讨论但进展缓慢，这是 IronClaw 迈向 Multi-Agent 架构的核心路标。
*   **Skill 存储架构重构 ([Issue #1504](https://github.com/nearai/ironclaw/issues/1504))**：
    *   计划将 Skill 存储从文件系统迁移到数据库/Workspace，这是一个 XL 尺寸的重构任务，目前尚未有对应的 PR 动静。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI** 项目 2026-03-22 的动态日报。

---

# 📊 LobsterAI 项目日报 (2026-03-22)

### 1. 今日速览
LobsterAI 今日迎来了 **v2026.3.21** 版本的发布，项目处于**高度活跃**状态。社区贡献主要集中在**系统稳定性**与**多模态输入体验**的重构上，共处理了 29 个 PR（其中 16 个已合并）和 16 个 Issue。新版引入了日志轮转机制和异步 SQLite 存储，显著优化了长期运行的性能瓶颈。与此同时，安全研究人员提交了大量关于内存泄漏和正则攻击的深度 Issue，显示项目正在经历一轮严格的代码审计。

### 2. 版本发布
**[Release v2026.3.21](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.21)**

本次更新包含重要的功能性增强与架构优化：
*   **日志系统重构**: 引入日志按日轮转、80MB 限制及 7 天保留策略 ([PR #569](https://github.com/netease-youdao/LobsterAI/pull/569))。
*   **IM 连接增强**: 泡泡IM 现支持 WebSocket 长连接模式 ([PR #556](https://github.com/netease-youdao/LobsterAI/pull/556))。
*   **飞书集成**: 新增一键飞书功能 (Release Notes 提及)。
*   **⚠️ 破坏性变更/迁移注意**:
    *   泡泡IM 连接模式变更，旧版 Webhook 配置需检查兼容性 (已有 [PR #615](https://github.com/netease-youdao/LobsterAI/pull/615) 处理迁移)。
    *   SQLite 存储层进行了异步化改造 ([PR #573](https://github.com/netease-youdao/LobsterAI/pull/573))，升级后首次启动可能需要进行数据迁移。

### 3. 项目进展
今日共有 **16 个 PR 被合并**，主要推进了以下领域：
*   **性能优化 (Critical)**: 合并 [PR #573](https://github.com/netease-youdao/LobsterAI/pull/573)，将 `SqliteStore` 转换为异步 IO 并加入防抖机制，解决了主进程阻塞问题。
*   **稳定性修复**: 
    *   [PR #617](https://github.com/netease-youdao/LobsterAI/pull/617) 修复了 Session 删除后的内存泄漏问题（清理 `stoppedSessions`）。
    *   [PR #620](https://github.com/netease-youdao/LobsterAI/pull/620) 修复了 Windows 下 OpenClaw 模式 Python 运行时查找失败的 Bug。
*   **用户体验 (UX)**: 
    *   [PR #612](https://github.com/netease-youdao/LobsterAI/pull/612) 优化了错误提示，将 "unknown error" 转化为友好文案。
    *   [PR #608](https://github.com/netease-youdao/LobsterAI/pull/608) 添加了首次启动的隐私协议弹窗。
*   **架构重构**: [PR #614](https://github.com/netease-youdao/LobsterAI/pull/614) 禁用了 IM 创建会话的输入控件，明确了远程管理与本地 UI 的边界。

### 4. 社区热点
今日讨论最受关注的问题主要集中在**升级后的兼容性**与**第三方集成**：
*   **[Issue #611] 升级后 404 错误**: 大量用户反馈升级到最新版后对话报 404 错误，疑似 Nginx 配置或路由变更导致，目前尚未有官方回复，需紧急关注。
*   **[Issue #498] 上下文记忆死循环**: 用户报告聊久了 AI 会复读上次的回答，涉及 Memory 机制，评论数较高。
*   **[Issue #632] MEEET World 集成请求**: 开发者请求集成拥有 707 个 AI Agent 的 MEEET World 生态。

### 5. Bug 与稳定性
今日报告了大量高质量的代码级 Bug，多由安全研究员 @BucleLiu 提交，建议优先处理：

| 严重程度 | Issue | 描述 | 状态/PR |
| :--- | :--- | :--- | :--- |
| **🔴 Critical** | [#621](https://github.com/netease-youdao/LobsterAI/issues/621) | **主进程阻塞**: `sqliteStore` 同步写磁盘导致 UI 卡顿 | **Fixed** (PR #573) |
| **🔴 Critical** | [#611](https://github.com/netease-youdao/LobsterAI/issues/611) | **服务不可用**: 升级后所有对话返回 404 | OPEN (需紧急排查) |
| **🟠 High** | [#630](https://github.com/netease-youdao/LobsterAI/issues/630) | **安全漏洞 (ReDoS)**: 记忆文本处理正则存在灾难性回溯风险 | OPEN |
| **🟠 High** | [#623](https://github.com/netease-youdao/LobsterAI/issues/623) | **稳定性**: 异步 IPC Handler 缺少错误捕获，可能导致主进程崩溃 | OPEN |
| **🟠 High** | [#622](https://github.com/netease-youdao/LobsterAI/issues/622) | **数据丢失**: 迁移失败后仍写完成标记，导致用户记忆永久丢失 | OPEN |
| **🟡 Medium** | [#571](https://github.com/netease-youdao/LobsterAI/issues/571) | **内存泄漏**: `stoppedSessions` 在删除 Session 后未清理 | **Fixed** (PR #617) |
| **🟡 Medium** | [#634](https://github.com/netease-youdao/LobsterAI/issues/634) | **兼容性**: Google Gemini 3 调用返回 400 错误 | OPEN |

### 6. 功能请求与路线图信号
*   **输入体验重构 ([PR #610](https://github.com/netease-youdao/LobsterAI/pull/610))**: 开发者正在重构 Cowork 输入框内核，计划支持类似 Cursor 的结构化 Prompt 输入（如 `/` 和 `@` 的无缝集成），这将是未来交互的重点。
*   **定时任务增强 ([PR #605](https://github.com/netease-youdao/LobsterAI/pull/605))**: 社区贡献了 Cron 表达式的未来 5 次执行时间预览功能，极大提升了配置易用性。
*   **工程化建设 ([PR #589](https://github.com/netease-youdao/LobsterAI/pull/589))**: 正在搭建完整的 CI/CD 流水线与安全扫描，标志着项目向企业级标准化迈进。

### 7. 用户反馈摘要
*   **痛点**: 升级失败导致系统不可用 (404 错误) 是目前最大的痛点，严重影响生产环境使用。
*   **体验问题**: 长对话中 AI 出现"复读机"现象 ([#498](https://github.com/netease-youdao/LobsterAI/issues/498))，用户猜测与 Context 压缩或 Memory 提取逻辑有关，影响对话质量。
*   **积极反馈**: 对新版 OpenClaw 引擎的错误提示优化 ([#612](https://github.com/netease-youdao/LobsterAI/pull/612)) 和输入框的防休眠功能 ([#633](https://github.com/netease-youdao/LobsterAI/pull/633)) 表示了潜在的高需求。

### 8. 待处理积压
*   **🔴 紧急**: [Issue #611](https://github.com/netease-youdao/LobsterAI/issues/611) (升级后 404) 需维护者立即介入确认是部署问题还是代码 Bug。
*   **⚠️ 重要**: [Issue #630](https://github.com/netease-youdao/LobsterAI/issues/630) (ReDoS 安全风险) 和 [Issue #622](https://github.com/netease-youdao/LobsterAI/issues/622) (数据迁移逻辑缺陷) 涉及安全与数据完整性，建议优先排期修复。
*   **⚠️ 重要**: [PR #609](https://github.com/netease-youdao/LobsterAI/pull/609) (定时任务重构) 和 [PR #610](https://github.com/netease-youdao/LobsterAI/pull/610) (输入框重构) 处于 Open 状态且改动较大，需要核心维护者进行 Code Review 以推进合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-03-22)**

**分析师洞察**：Moltis 项目今日处于“低频高质”的开发维护状态。虽然未观察到新功能发布或社区讨论爆发，但两个处于活跃状态的 PR 暴露了项目正在补齐关键短板：一是 **Windows 平台的兼容性顽疾**（文件锁问题），二是 **开发环境的标准化**（Nix 构建）。这表明维护者正在为吸引更多类型的贡献者及支持更广泛的用户环境打基础。

---

### 1. 今日速览
*   **整体状态**：项目今日整体活跃度较低，无新版本发布或 Issue 互动，重点在于现有代码库的优化与修复。
*   **核心进展**：共有 2 个 Pull Requests 处于活跃（Open）状态，分别针对 Nix 构建支持和 Windows 关键文件锁错误进行修复。
*   **社区健康**：社区反馈渠道（Issues）今日静默，表明项目当前功能相对稳定，或处于功能迭代的间歇期。
*   **紧迫性**：Windows 平台的文件锁定问题（PR #436）仍是阻碍部分用户体验的关键点，需重点关注。

### 2. 版本发布
*   **状态**：🚫 **无新版本发布**
    *   过去24小时内未检测到新的 Release 或 Tag。建议关注上述两个 PR 合并后的潜在补丁版本发布。

### 3. 项目进展
今日无合并记录，但以下 PR 正在积极推进，预示着下一阶段的质量提升：

*   **🛠️ 修复 Windows 平台严重兼容性问题**
    *   **PR [#436](https://github.com/moltis-org/moltis/pull/436)**: `fix(sessions): replace append(true) with write(true)+seek...`
    *   **分析**：该 PR 旨在解决 Windows 环境下 Session 模块的 `LockFileEx os error 5` 错误。
    *   **深度解读**：Root Cause 分析指出 Rust 标准库在 Windows 上的 `append` 模式会剥离 `FILE_WRITE_DATA` 权限，导致与 `LockFileEx` 冲突。该修复将底层 API 调用从简单的 `append` 切换为 `write+seek` 组合。**这是一个关键修复，直接决定了 Windows 用户的可用性。**

*   **🐧 开发环境与构建系统支持**
    *   **PR [#459](https://github.com/moltis-org/moltis/pull/459)**: `Feat/nix build fix`
    *   **分析**：引入了对 Nix 构建系统的支持，并涉及 "witness code" 的开发。
    *   **意义**：Nix 支持的加入通常意味着项目希望提供**可复现的构建环境**，这对吸引核心开发者非常有利；同时 "witness code" 暗示了可能正在引入形式化验证或特定逻辑的见证机制。

### 4. 社区热点
*   **状态**：😴 **静默**
    *   过去24小时内无新开 Issue 或活跃讨论。社区关注度主要集中在等待现有 PR 的合并。

### 5. Bug 与稳定性
今日无新报出的 Bug，但存在一个待合并的**历史遗留关键 Bug**：

*   **🔴 [高优先级] Windows 文件访问被拒绝**
    *   **现象**：Windows 用户在处理 Sessions 时遇到 `os error 5` (Access Denied)。
    *   **状态**：**已有修复 PR** -> 链接：[PR #436](https://github.com/moltis-org/moltis/pull/436)
    *   **建议**：Windows 用户建议在 PR 合并前暂时避免高频 Session 写入操作，或切换至 Linux/WSL 环境运行服务。

### 6. 功能请求与路线图信号
*   **基础设施即代码**：PR [#459](https://github.com/moltis-org/moltis/pull/459) 提到的 Nix 支持表明项目正在向**DevOps 友好型**和**高可维护性**方向演进。
*   **底层逻辑增强**：同一 PR 中提到的 "witness code" 可能是对 AI 智能体内部逻辑正确性校验的早期尝试，值得后续观察。

### 7. 用户反馈摘要
*   **痛点 (Windows 用户)**：根据 PR #436 的上下文，Windows 用户在过去一周中受困于文件锁定导致的程序崩溃或无法启动，这极大地影响了跨平台体验。
*   **整体情绪**：由于 Issues 区静默，推测现有用户多为观望状态或正在使用稳定版本。

### 8. 待处理积压
*   **⚠️ 需维护者立即响应**：
    *   [PR #436](https://github.com/moltis-org/moltis/pull/436)：该 PR 创建于 3月14日，昨日有更新但仍未合并。由于涉及操作系统底层的文件锁逻辑，建议维护者尽快进行 Code Review 并在 Windows CI 中验证，以便修复这一影响范围较广的 Blocker。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-22)

## 1. 今日速览
CoPaw 项目今日维持高热度，社区活跃度显著提升，过去24小时内 Issues 更新量达 50 条，其中新开/活跃议题 41 条。项目核心仍处于 **v0.1.0 大版本发布后的震荡期**，大量反馈集中在版本升级导致的数据丢失、配置失效及技能兼容性问题上。与此同时，社区贡献积极，共有 15 个 PR 更新，涵盖了从核心并发锁优化、新模型支持到文档补充的各个方面。虽然无新版本发布，但针对 v0.1.0 引入的回归问题，社区已提交多个修复 PR 等待合并。

## 2. 版本发布
*   **无新版本发布**。
*   **注**: 当前社区主要焦点在于修复 v0.1.0 正式版带来的兼容性与稳定性问题。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，主要集中在提升系统健壮性和文档完善：
*   **修复自定义通道启动失败 ([PR #1991](https://github.com/agentscope-ai/CoPaw/pull/1991))**: 修复了 `ChannelManager` 无法正确读取字典类型配置导致自定义通道无法启动的严重 Bug。
*   **补充 Windows 端口冲突文档 ([PR #1995](https://github.com/agentscope-ai/CoPaw/pull/1995))**: 针对 Windows Hyper-V 占用 8088 端口导致 Docker 启动失败的问题，补充了详细的故障排查指南。
*   **新增多智能体工作流 API ([PR #1952](https://github.com/agentscope-ai/CoPaw/pull/1952))**: 仍处于 Open 状态，但活跃度较高，旨在添加用户级工作流文件夹及 API，显示项目正在积极布局多智能体编排能力。

## 4. 社区热点
今日讨论最激烈的议题均围绕 **v0.1.0 升级后的体验断层** 展开：
*   **🔥 最热 Issue: 未知 Agent 错误与任务取消 ([Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976))**
    *   **评论数**: 14
    *   **焦点**: 升级后频繁出现 `RuntimeError: Task has been cancelled!`。用户 @caoronglin 指出该问题与 #1956 修复相关，表明核心任务调度仍存在不稳定因素。
*   **🔥 升级导致数据丢失与技能失效 ([Issue #2023](https://github.com/agentscope-ai/CoPaw/issues/2023))**
    *   **评论数**: 12
    *   **焦点**: Docker 升级至 1.0 后，安装的技能全部消失且记忆清空。这反映了用户对升级路径缺乏安全感的普遍焦虑。
*   **🔥 飞书渠道延迟回复顽疾 ([Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345))**
    *   **评论数**: 10
    *   **焦点**: 飞书 Bot 存在严重的 "Question-Answer Mismatch"（问答错位），即回答的是上一个问题的内容。这是渠道集成层面的长期痛点。

## 5. Bug 与稳定性
今日报告的 Bug 主要影响**数据持久化**与**工具调用**，部分已有修复方案：

| 严重程度 | 问题描述 | 状态/修复 PR |
| :--- | :--- | :--- |
| **🔴 Critical** | **JSONDecodeError 与会话文件损坏** ([#1950](https://github.com/agentscope-ai/CoPaw/issues/1950)): 聊天中突然报错，`chats.json` 被清空，魔法命令失效。 | Open, investigating |
| **🔴 Critical** | **异步死锁/卡死** ([#2016](https://github.com/agentscope-ai/CoPaw/pull/2016)): `TokenUsageManager` 在异步上下文中使用 `threading.Lock` 导致事件循环死锁。 | **Fix PR Open** |
| **🟠 High** | **Web Console 显示 JSON 污染** ([#1960](https://github.com/agentscope-ai/CoPaw/issues/1960)): Chat 界面直接裸露 `{"type": "text"...}` 等原始 JSON 结构。 | Open |
| **🟠 High** | **Google Gemini SDK 报错** ([#1985](https://github.com/agentscope-ai/CoPaw/issues/1985)): 调用 Google 模型时出现 `AttributeError`。 | Open |
| **🟠 High** | **Windows 端口冲突** ([#1485](https://github.com/agentscope-ai/CoPaw/issues/1485)): 默认 8088 端口在 Windows 上被保留。 | **Fixed/Doc PR Merged** |

## 6. 功能请求与路线图信号
*   **多智能体协同与全局技能库 ([Issue #2035](https://github.com/agentscope-ai/CoPaw/issues/2035), [Issue #2032](https://github.com/agentscope-ai/CoPaw/issues/2032))**:
    *   用户强烈需求 "多智能体协同" 及 "全局共享技能目录"。
    *   **信号**: 正在待合并的 [PR #1952](https://github.com/agentscope-ai/CoPaw/pull/1952) (User-level workflows) 与此需求高度契合，极有可能在下一版本中重点解决多智能体编排问题。
*   **审批逻辑优化 ([Issue #2009](https://github.com/agentscope-ai/CoPaw/issues/2009))**: 用户指出 `/approve` 交互逻辑不人性化，期望能支持 "边提问边挂起审批" 的异步交互模式。

## 7. 用户反馈摘要
*   **升级体验极差**: 多位用户反馈 Docker 从 0.0.7 升级到 0.1.0 后出现 "推倒重来" 的情况，配置丢失，且安装包体积过大（500M+）导致解压缓慢 ([#2031](https://github.com/agentscope-ai/CoPaw/issues/2031))。
*   **记忆与技能管理混乱**: 用户抱怨升级后技能分布在不同的目录，且不再自动同步 ([#2015](https://github.com/agentscope-ai/CoPaw/issues/2015))，甚至出现 "记忆全部缺失" 的严重事故 ([#2023](https://github.com/agentscope-ai/CoPaw/issues/2023))。
*   **Web UI 易用性问题**: 移动端访问 Console 布局错位 ([#2026](https://github.com/agentscope-ai/CoPaw/issues/2026))，刷新页面后历史记录丢失 ([#2034](https://github.com/agentscope-ai/CoPaw/issues/2034))，被用户批评为 "硬伤"。

## 8. 待处理积压
*   **🔒 安全性隐患 ([Issue #2007](https://github.com/agentscope-ai/CoPaw/issues/2007))**: Shell 命令审批可由发起方自行通过，存在严重权限绕过风险，需官方尽快确认并修复。
*   **⚒️ Tool Call 稳定性 ([Issue #1976](https://github.com/agentscope-ai/CoPaw/issues/1976))**: 核心的 Agent 任务取消错误虽提到已在 #1956 修复，但仍有大量反馈，需验证修复是否彻底。
*   **📂 文件编码问题 ([Issue #1935](https://github.com/agentscope-ai/CoPaw/issues/1935))**: Windows 下 CSV 写入中文乱码问题长期存在，影响作为笔记工具的基本功能。

---
**分析师建议**: 目前项目处于 "功能快速迭代 vs 稳定性欠佳" 的十字路口。建议官方优先发布一个 **v0.1.1 补丁版本**，重点解决 **数据迁移/丢失** 和 **异步死锁** 问题，以挽回用户对升级路径的信心。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026-03-22 动态日报：

---

# ZeptoClaw 项目动态日报 (2026-03-22)

### 1. 今日速览
ZeptoClaw 今日整体处于 **低活跃度、高议题深度** 的状态。过去 24 小时内，项目未产生新的代码提交、PR 合并或版本发布，开发节奏较为平缓。社区注意力集中在两个新开启的功能探讨 Issue 上，尤其是关于引入 Firecracker VM 架构的讨论引发了较为深度的技术交锋。虽然代码提交量为零，但架构层面的长期规划信号较为强烈。总体来看，项目目前正处于功能迭代方向的决策期，而非密集编码期。

### 2. 版本发布
*   **无新版本发布**。建议关注后续架构讨论结果落地情况。

### 3. 项目进展
*   **无新进展**。今日无 PR 合并或关闭，项目代码库在 2026-03-22 当天保持静态。主要精力似乎集中在 Issue #391 提到的"模式挑选"与回归测试设计上，尚未转化为实际代码提交。

### 4. 社区热点
今日讨论最活跃的议题是 **[#387 [feat] Core templates based on Containerfiles mapped-to/launched-in orchestrated Firecracker VM's](https://github.com/qhkm/zeptoclaw/issues/387)**。
*   **数据表现**：虽然创建于几日前，但今日仍有新评论，累计评论数已达 **6 条**。
*   **核心诉求**：作者 `taqtiqa-mark` 提出将现有的 Coding Agent Frameworks 视为普通应用节点，利用 Firecracker microVM 进行编排，旨在解决 **功能蔓延** 和 **安全攻击面扩大** 的问题。
*   **分析**：这是一个架构级的重大提案。如果采纳，将显著改变 ZeptoClaw 的底层运行时环境，增强隔离性与安全性，但也引入了编排复杂度。讨论热度表明核心团队正在权衡是将 Agent 能力内置，还是通过外置 VM 模块化。

### 5. Bug 与稳定性
*   **无新增 Bug 报告**。今日未发现严重崩溃或回归问题。
*   **稳定性信号**：Issue #391 提到了从 `pi_agent_rust` 评估中汲取教训，虽然不采纳其整体方案，但计划引入 **Conformance fixture testing（一致性固件测试）**，这表明维护者正在主动通过增加 JSON 回归测试来预防未来的工具调用错误，侧面反映了对工具链稳定性的重视。

### 6. 功能请求与路线图信号
今日出现了明确的路线图规划信号，主要集中在工具链的工程化完善：
*   **工具回归测试框架**：在 **[#391 feat(tools): conformance fixtures...](https://github.com/qhkm/zeptoclaw/issues/391)** 中，维护者 `qhkm` 提议增加 JSON fixture runner。
    *   **细节**：允许通过添加 JSON 文件来定义工具的输入与预期输出，无需编写 Rust 代码即可增加测试用例。
    *   **预测**：这极有可能是下一个版本的重点功能，旨在解决工具调用的准确性与可维护性问题。
*   **模糊匹配与输出截断**：同样在 #391 中被提及，暗示未来的工具流将具备更强的容错性（模糊匹配指令）和对长上下文的处理能力（输出截断）。

### 7. 用户反馈摘要
从 Issue #387 的讨论中可以提炼出以下用户/架构师痛点：
*   **安全边界焦虑**：社区对 Coding Agent 框架日益复杂带来的安全隐患表示担忧，倾向于物理隔离（如 Firecracker VM）而非逻辑隔离。
*   **拒绝"大而全"**：用户倾向于将复杂的 Agent 功能剥离，保持核心节点的轻量级，这表明 ZeptoClaw 的核心受众偏好模块化、可插拔的架构设计。

### 8. 待处理积压
*   **决策积压**：Issue #387 已经开放数日且有 6 条讨论，但尚未有明确的"Accept/Decline"结论。考虑到其对架构的巨大影响，建议维护者尽快给出初步意向（如打上 `area/architecture` 或 `decision/pending` 标签），以免阻碍相关子功能的开发。
*   **实现空窗期**：Issue #391 描述了清晰的测试需求，但目前尚未有对应的 PR 产出。考虑到这是 P3-normal 优先级，建议关注未来 48 小时内是否有 Draft PR 提交。

---
*分析师注：项目正处于"深蹲"期，看似平静的代码库背后正在进行架构级博弈。建议密切关注 #387 的最终决策，它将决定 ZeptoClaw 是走"全功能 Agent OS"路线还是"轻量级编排器"路线。*

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-22)

**分析师语**：今日 EasyClaw 项目呈现“高频迭代修复，社区响应及时”的特征，以下是详细数据分析。

## 1. 今日速览
EasyClaw 今日保持了**极高的版本发布节奏**，24小时内连续推出了 **v1.7.3, v1.7.4, v1.7.5** 三个版本，显示出开发团队正在快速修复已知问题或进行功能微调。在社区维护方面，项目**清理了 100% 的待处理活跃 Issue**（共关闭 2 条），且 PR 池保持清零状态，代码库维护非常整洁。整体来看，项目处于**高健康度、快速迭代期**，针对 macOS 的兼容性问题和 Windows 平台的报错正在进行针对性修复。

## 2. 版本发布
今日项目发布了三个连续的小版本更新，重点在于优化安装体验与修复运行时错误。

*   **v1.7.5 (Latest)**: [RivonClaw v1.7.5](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.5)
*   **v1.7.4**: [RivonClaw v1.7.4](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.4)
*   **v1.7.3**: [RivonClaw v1.7.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.3)

**更新重点与迁移注意**：
三个版本的 Release Notes 均重点提及了 **macOS 兼容性解决方案**。
*   **破坏性变更/阻碍**：macOS Gatekeeper 会拦截未签名应用，提示“已损坏”。
*   **解决方案**：Release Notes 中已内置了解决方案指导（通过 Terminal 移除隔离属性），建议 macOS 用户在升级后优先查阅 Release 说明。

## 3. 项目进展
今日无代码合并记录（PR 更新为 0），但关闭了 2 个 Issue。这表明：
1.  今日的三个新版本可能主要基于维护者的本地直接推送，或针对配置/构建脚本的微调，未产生显性的 PR 流程。
2.  **问题解决率 100%**：今日暴露的稳定性问题（Issue #25）和功能咨询（Issue #22）均已在最新版本或评论区得到解决并关闭。项目整体稳定性向前迈进了一大步。

## 4. 社区热点
今日社区关注点集中在**功能边界定义**与**运行稳定性**上。

*   **#22 [CLOSED] 提问：“多浏览器”功能是指多用户还是多平台一致呢？** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/22))
    *   **热度分析**：该 Issue 涉及核心功能“多浏览器/多账号”的定义。用户对“登录与不登录”的差异存在困惑。
    *   **诉求**：用户希望明确软件在跨平台同步和多账号管理上的实际能力，这反映了用户将该工具用于工作流隔离（如区分工作/个人账号）的强烈需求。
*   **#25 [CLOSED] Windows11 1.7.2版本 报错 "400 [] is too short - 'tools'"** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/25))
    *   **热度分析**：这是一个阻碍使用的严重报错，用户在 Win11 环境下遭遇 API 响应 400 错误。
    *   **结果**：该 Issue 已关闭，推测 v1.7.3+ 版本已修复此 API 调用载荷（Payload）过短或格式错误的问题。

## 5. Bug 与稳定性
今日记录并解决的 Bug 主要集中在 API 交互层：

*   **🔴 严重 - API 交互失败 (已修复)**
    *   **Issue**: [#25](https://github.com/gaoyangz77/rivonclaw/issues/25)
    *   **现象**: Windows 11 下提示 `⚠ 400 [] is too short - 'tools'`，导致对话无法进行。
    *   **状态**: 已关闭。推测在 v1.7.3+ 中已修复。此问题可能与发送给后端模型的工具调用参数为空或格式错误有关。

*   **🟡 一般 - macOS 安装受阻 (已有文档指引)**
    *   **现象**: 应用在 macOS 提示“已损坏”。
    *   **状态**: 未修复代码本身（可能涉及签名证书费用），但在 Release Notes 中提供了修复命令。属于已知外部限制。

## 6. 功能请求与路线图信号
*   **多账号/多实例管理**：从 Issue #22 可以看出，用户对“多浏览器”功能的期待不仅仅是打开多个窗口，更希望是**数据隔离**或**跨设备同步**。
    *   *信号*：未来版本可能需要进一步细化“登录”状态的权益说明，或推出更明确的“用户配置文件（Profile）”管理功能。

## 7. 用户反馈摘要
*   **痛点**：macOS 用户普遍面临“应用已损坏”的门槛，尽管有命令行修复方案，但对非技术用户仍有上手难度。
*   **场景**：用户正在尝试在 Windows 11 环境下深度集成使用，对 API 的稳定性要求较高。
*   **满意度**：Issue 的快速关闭（1-2天内）表明用户对维护者的响应速度满意度较高。

## 8. 待处理积压
*   **无严重积压**：截止今日，过去 24 小时内无待处理的新 Issue 或 PR。项目维护处于“清零”状态，维护者跟进了所有近期反馈。

---
*数据来源: EasyClaw GitHub Repository (2026-03-22 Snapshot)*

</details>