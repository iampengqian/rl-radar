# OpenClaw 生态日报 2026-03-31

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-03-30 22:07 UTC

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

# OpenClaw 项目动态日报 (2026-03-31)

**分析师：** AI 开源项目观察员
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持了极高的社区热度与开发活跃度，Issues 更新量高达 500 条（其中 87% 为新开/活跃议题），PR 更新量同样达到 500 条，显示出项目正处于快速迭代期。然而，这种高活跃度伴随着显著的稳定性挑战，大量用户反馈 3 月中旬发布的 `2026.3.13` 版本存在严重的回归问题，导致 Gateway 崩溃、认证失效和上下文管理混乱。虽然提交队列中有 307 个待合并 PR 试图修复这些问题，但社区目前的情绪在功能期待与稳定性焦虑之间剧烈摇摆。

## 2. 版本发布

**无新版本发布。**
尽管有大量修复 PR 正在排队等待合并，但在过去 24 小时内官方未发布新的 Release 版本。鉴于当前 Issues 中关于 `2026.3.13` 版本的严重回归报告（如 WebSocket 握手超时、工具调用静默挂起），建议用户关注即将到来的补丁版本。

## 3. 项目进展

今日共有 **193 个 PR 更新**（合并或关闭），主要集中在修复核心运行时错误和提升测试稳定性：

*   **Gateway 与连接稳定性：** 合并了 PR #50923 (Harden chat stream idempotency) 和 PR #50930 (Fix 429 rate limit silent no-reply)，试图解决流式传输中断和静默失败的问题。
*   **跨平台兼容性：** PR #57616 和 PR #57710 针对 Windows CI 的长期挂起和文件锁定问题进行了修复，表明团队正在努力确保跨平台一致性。
*   **插件生态：** PR #57936 修复了 Matrix 频道的 E2EE（端到端加密）发送问题，PR #57873 修复了 memory-core 扩展的路径映射错误。

**总体评价：** 项目正在通过大量微观修复来填补 `2026.3.x` 重构带来的宏观漏洞，距离稳定版尚需等待更多修复 PR 合并。

## 4. 社区热点

今日社区讨论集中在 **模型集成失败** 和 **频道连接稳定性** 上：

1.  **[#53870](https://github.com/openclaw/openclaw/issues/53870) Matrix 插件安装安全扫描阻塞 [CLOSED]**
    *   **热度：** 👍 9 | 评论 15
    *   **摘要：** 用户尝试安装 `@openclaw/matrix` 插件时被 VirusTotal 安全扫描挂起，导致无法正常部署。这反映了 Clawhub 插件市场的发布流水线可能存在瓶颈或误报。

2.  **[#52037](https://github.com/openclaw/openclaw/issues/52037) OpenAI Codex OAuth Token 持久化失败 [OPEN]**
    *   **热度：** 评论 10
    *   **摘要：** OpenAI Codex 的 OAuth 令牌在刷新后未能写入磁盘，导致服务重启后认证失效。这是集成 OpenAI 生态的关键阻碍。

3.  **[#51085](https://github.com/openclaw/openclaw/issues/51085) STT 语音识别被网关安全头阻止 [OPEN]**
    *   **热度：** 评论 10
    *   **摘要：** Control UI 的麦克风按钮因 Gateway 默认的 `Permissions-Policy` 头配置而静默失败。用户对看似可用但实际受限于安全策略的功能感到困惑。

4.  **[#51056](https://github.com/openclaw/openclaw/issues/51056) OpenRouter 认证头缺失 [OPEN]**
    *   **热度：** 评论 10
    *   **摘要：** 尽管配置了有效 API Key，OpenClaw 未能正确发送 `Authorization: Bearer` 头，导致所有 OpenRouter 请求返回 401 错误。

## 5. Bug 与稳定性

今日报告的 Bug 数量巨大且影响范围广，主要围绕 **上下文处理** 和 **多模态能力**：

### 🔴 严重
*   **[#51987](https://github.com/openclaw/openclaw/issues/51987) [Regression] 本地 Gateway WebSocket 握手超时**
    *   症状：`ws://127.0.0.1:18789` 连接在握手前关闭，导致本地客户端完全无法连接。
    *   状态：**OPEN** | Fix PR: 待定 (可能是 PR #57953 的范围)
*   **[#51083](https://github.com/openclaw/openclaw/issues/51083) [Crash] ReferenceError: ANTHROPIC_MODEL_ALIASES 初始化失败**
    *   症状：CLI 命令执行时崩溃，无法读取配置文件。
    *   状态：**OPEN** | Fix PR: 待定
*   **[#51144](https://github.com/openclaw/openclaw/issues/51144) [Crash] Docker 容器无限重启**
    *   症状：官方 Docker 镜像启动后立即重启，Gateway 无法保持运行。
    *   状态：**CLOSED** (可能由 #52445 修复)

### 🟠 中等
*   **[#52024](https://github.com/openclaw/openclaw/issues/52024) Context Trimmer 损坏 tool_use/tool_result 配对**
    *   症状：上下文截断逻辑破坏了 API 要求的工具调用配对结构，导致请求被 LLM API 拒绝。
    *   状态：**OPEN**
*   **[#51629](https://github.com/openclaw/openclaw/issues/51629) Gemini 2.5 Flash 404 错误**
    *   症状：嵌入式运行时无法找到模型，但直接调用 API 正常。
    *   状态：**OPEN**

## 6. 功能请求与路线图信号

*   **[#51372](https://github.com/openclaw/openclaw/issues/51372) 支持 Gemini Context Caching**
    *   **诉求：** 用户希望像 Anthropic 模型一样，为 Gemini 模型提供上下文缓存功能以降低长 System Prompt 的成本。
    *   **前景：** 随着多模态和长上下文场景的增加，这是降低运营成本的关键功能，预计会被高优先级纳入路线图。
*   **[#52196](https://github.com/openclaw/openclaw/issues/52196) 自愈机制**
    *   **诉求：** 讨论 OpenClaw 在 Gateway 崩溃时无法自我重启或诊断的问题，提议引入 "Watchdog" 机制。
    *   **前景：** 这是一个架构层面的功能请求，对于生产环境的高可用性至关重要。

## 7. 用户反馈摘要

*   **痛点：多模态处理的 "黑盒" 失败**
    用户在 Issue [#51857](https://github.com/openclaw/openclaw/issues/51857) 中强烈抱怨 "Blind Spot Problem"（盲点问题）。用户发送了图片，Agent 报告处理成功，但实际上完全忽略了图片内容。这种 "静默失败" 比直接报错更令用户沮丧。
*   **痛点：模型选择器混乱**
    多个 Issues (如 [#52474](https://github.com/openclaw/openclaw/issues/52474), [#52127](https://github.com/openclaw/openclaw/issues/52127)) 反馈 Control UI 的模型下拉菜单会错误地添加前缀（如将 DeepSeek 标记为 `moonshot/` 或给所有模型加 `anthropic/`），导致配置失败。这表明前端 UI 与后端 Provider 解析逻辑存在脱节。
*   **场景：隔离会话的输出转发**
    Issue [#52136](https://github.com/openclaw/openclaw/issues/52136) 指出，Cron 任务产生的隔离会话内容被转发到主频道时，主 Agent 并没有 "阅读" 这些内容，导致 Agent 对自己产生的定时报告一无所知。

## 8. 待处理积压

*   **[#50800](https://github.com/openclaw/openclaw/issues/50800) [Bug] 自建 Docker 镜像因 axios 模块缺失启动失败**
    *   **状态：** OPEN (自 2026-03-20)
    *   **提醒：** 这是一个阻塞性的构建问题，影响了希望自行编译部署的高级用户，需要关注依赖树是否完整。
*   **[#52433](https://github.com/openclaw/openclaw/issues/52433) [Bug] ACPX 插件版本回退死循环**
    *   **状态：** OPEN (自 2026-03-22)
    *   **提醒：** 无论用户如何升级到 0.3.1，系统总是回退到 0.1.16。这表明插件加载逻辑可能存在硬编码或缓存失效问题，严重影响 ACP 功能的可用性。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-03-31)

**分析师：** AI 开源生态观察组
**报告周期：** 2026-03-31

---

## 1. 生态全景

2026 年第一季度末，个人 AI 助手与自主智能体开源生态正处于**从"单一模型对话"向"多模态、多工具、长程自主运行"跨越的关键期**。OpenClaw 凭借先发优势和庞大的插件生态稳坐流量中心，但正面临严重的稳定性阵痛；NanoBot、PicoClaw 等挑战者在架构解耦（SDK化）和垂直场景（端侧部署）上快速追赶。企业级需求（多租户、金融安全）与生产级痛点（上下文管理、部署体验）成为今日生态最显著的关注点，标志着该领域正从技术尝鲜向实际落地 hardening（加固）阶段演进。

---

## 2. 各项目活跃度对比

| 项目名称 | 核心定位 | Issues 更新 | PR 更新 | 今日发布 | 健康度/状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 生态核心/参照系 | 500 (87%活跃) | 500 (307待合并) | 无 | ⚠️ **过热/不稳定** (高吞吐但回归严重) |
| **CoPaw** | 多智能体协作 | 50 | 50 | **v1.0.0** | 🟢 **里程碑** (架构趋稳，正式版发布) |
| **PicoClaw** | 轻量级/端侧 | 29 | 80 | Nightly | 🟡 **高开发活跃** (性能修复中) |
| **NanoBot** | SDK/框架 | 20 | 46 | 无 | 🟡 **快速重构** (架构调整期) |
| **NanoClaw** | 技能/容器化 | 17 | 50 | 无 | 🟡 **社区驱动** (高PR，核心待合并) |
| **LobsterAI** | 企业级/桌面端 | 27 | 50 | v2026.3.30 | 🟢 **稳定迭代** (功能增强) |
| **IronClaw** | 金融级/安全 | N/A | 50 | v0.24.0 (筹备) | 🟢 **质量加固** (发布前冲刺) |
| **Moltis** | 隐私/Rust原生 | 少量 | 5 | 无 | 🟢 **高维护性** (高质量修复) |
| **TinyClaw** | 可视化/Office | 0 | 2 (合并) | 无 | ⚪ **低频/内部重构** |
| **ZeptoClaw** | CLI/工具链 | 1 | 0 | 无 | ⚪ **规划期** (架构讨论) |
| **EasyClaw** | 轻量/兼容层 | 2 (关闭) | 0 | 无 | ⚪ **维护模式** |

---

## 3. OpenClaw 在生态中的定位

作为生态的**核心参照系**，OpenClaw 展现出了典型的"平台级"特征，但也暴露了高速扩张下的治理危机。

*   **优势 vs 同类**：
    *   **生态广度**：307 个待合并 PR 远超其他项目，覆盖 Matrix、WhatsApp、各类 MCP 技能，生态丰富度无敌。
    *   **社区规模**：单日 500+ Issue 讨论量确立了其作为"流量入口"的地位。
*   **技术路线差异**：
    *   相比 **NanoBot** 和 **PicoClaw** 正在进行的底层架构重构（SDK化、配置系统重写），OpenClaw 显得更为"臃肿"，主要通过大量微观 Patch (#50923, #57616) 来维持运转，尚未进行彻底的底层解耦。
    *   相比 **IronClaw** 的"安全优先"和 **Moltis** 的"Rust 原生"，OpenClaw 在安全默认配置（如 Gateway 头、权限策略）上显得较为粗糙，频频出现静默失败。
*   **核心挑战**：目前 OpenClaw 正陷入**"版本回归"泥潭**（`2026.3.13` 版本严重崩溃），而其他竞品（如 CoPaw, LobsterAI）正处于发布稳定版的上升期。如果不能尽快解决稳定性问题，其作为"默认选择"的地位可能被动摇。

---

## 4. 共同关注的技术方向

多项目今日涌现的技术诉求揭示了行业共性痛点：

1.  **上下文与记忆管理**
    *   **涉及项目**：OpenClaw, NanoBot, CoPaw, ZeptoClaw
    *   **具体诉求**：随着 Agent 运行时间增长，上下文无限增长导致崩溃或成本失控。
        *   *NanoBot* 报告心跳历史导致 56 万 Token 消耗。
        *   *CoPaw* 用户强烈请求物理删除单条对话和更高级的摘要/向量检索机制。
        *   *OpenClaw* 的 Context Trimmer 被指破坏工具调用结构。
2.  **MCP (Model Context Protocol) 集成**
    *   **涉及项目**：NanoClaw, LobsterAI, OpenClaw
    *   **具体诉求**：MCP 正成为连接外部工具的标准。*LobsterAI* 增加了 Per-Session 开关，*NanoClaw* 社区贡献了大量 Home Assistant/Tailscale 的 MCP 技能，表明**通过标准协议扩展能力**已成共识。
3.  **容器化与私有化部署**
    *   **涉及项目**：NanoClaw, IronClaw, Moltis, LobsterAI
    *   **具体诉求**：企业用户强烈要求"开箱即用"的 Docker 部署和非 HTTPS 环境支持。*NanoClaw* 甚至被批评安装脚本存在供应链风险，迫切需要完全容器化；*IronClaw* 和 *Moltis* 都在解决私有网络或反向代理的兼容性。

---

## 5. 差异化定位分析

| 维度 | **第一梯队 (OpenClaw)** | **架构重构派** | **垂直场景派** | **企业/安全派** |
| :--- | :--- | :--- | :--- | :--- |
| **核心目标** | 全能型平台，做大生态 | 解耦核心，提供 SDK/嵌入能力 | 极致轻量，端侧/特定场景 | 安全合规，金融/办公集成 |
| **技术特征** | 插件多，Patch 多，架构复杂 | 强调 Session 隔离，Hooks 解耦 | 适配 Termux/嵌入式，低资源占用 | Rust/Go 原生，严格鉴权，审计日志 |
| **用户痛点** | 稳定性差，配置混乱 | 文档缺失，API 变更频繁 | 功能相对简陋，渠道接入少 | 部署门槛高，模型兼容性限制 |

---

## 6. 社区热度与成熟度

*   **快速迭代期**：
    *   **CoPaw**：发布 v1.0.0，标志着从 MVP 迈向成熟，社区贡献意愿强烈。
    *   **NanoClaw**：社区贡献极其活跃，但核心合并速度滞后，处于"社区推着官方走"的状态。
*   **质量巩固期**：
    *   **IronClaw**：发布 v0.24.0，专注清理技术债和提升安全性，显示出成熟项目的稳健。
    *   **LobsterAI**：频繁更新，专注于修复企业级部署中的 SQLite 损坏、SSRF 漏洞等深层问题。
*   **动荡期**：
    *   **OpenClaw**：虽然热度最高，但负面反馈（崩溃、回归）占比显著，处于信心重建的关键期。

---

## 7. 值得关注的趋势信号

1.  **Agent 的"静默失败"成为体验杀手**
    *   OpenClaw (Issue #51857) 和 NanoBot (Issue #235) 均报告了 Agent "假装在工作"但实际未产出的问题。这表明**可观测性** 将是下一阶段的开发重点，开发者需要确切的执行日志而非黑盒反馈。
2.  **记忆系统正从"文本文件"向"数据库/知识图谱"演进**
    *   CoPaw 和 NanoBot 的用户都在抱怨简单的文本追加导致检索效率低下。引入向量数据库或 Graphiti 知识图谱（NanoClaw #1458）将是解决长程记忆的主流方案。
3.  **配置体验成为留存关键**
    *   OpenClaw 和 PicoClaw 今日均因"模型前缀混乱"、"Web UI 保存失败"遭到大量投诉。**Opinionated Defaults（强约定配置）** 和 **UI 交互健壮性** 对用户留存的重要性不亚于核心算法。
4.  **安全性从"可选项"变为"必选项"**
    *   随着 Agent 开始接触敏感数据（Email、金融），类似 IronClaw 的敏感信息清洗和 LobsterAI 披露的 SSRF 漏洞表明，**安全沙箱和权限细粒度控制** 将是项目能否进入企业生产环境的准入证。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-03-31 NanoBot 项目动态日报。

---

# 📊 NanoBot 项目动态日报 (2026-03-31)

## 1. 今日速览
NanoBot 今日保持了**极高的社区活跃度**，单日 Issue 更新达 20 条，PR 更新高达 46 条，显示出项目正处于快速迭代与功能扩展期。开发重心明显向**企业级特性（多租户、SDK 隔离）**和**架构解耦（Memory、Hooks）**倾斜。然而，随着功能复杂度增加，稳定性问题逐渐显现，特别是内存管理与会话历史无限增长引发的崩溃问题成为用户痛点。整体而言，项目正在从单一 Agent 工具向可嵌入的 SDK 框架演进。

## 2. 版本发布
- **无新版本发布**。
- 虽然没有正式 Release，但主分支合并频繁，预计正在为下一个 minor 版本积累功能。

## 3. 项目进展
今日共有 **14 个 PR 被合并或关闭**，主要推进了以下核心能力：

*   **SDK 化与多租户支持**：PR #2653 引入了 Python SDK facade 及会话隔离机制，允许将 NanoBot 作为库集成到其他应用中，支持 OpenAI 风格的 API 接口，标志着项目正式支持嵌入模式。
*   **模型兼容性增强**：PR #2654 修复了智谱 AI (ZhipuAI) 因非标准字段导致的 API 报错问题，PR #3 和 #2629 分别增强了对 GLM 和 DashScope Coding Plan 的支持。
*   **架构解耦**：PR #2615 引入了 `CompositeHook`，解决了之前生命周期钩子无法在外部扩展的问题；PR #1627 正在推进历史记录与记忆巩固逻辑的解耦，以防止数据截断丢失。
*   **渠道修复**：PR #1150 增加了 Discord 文件上传支持。

## 4. 社区热点
今日讨论最激烈的问题集中在**资源消耗**与**响应稳定性**：

*   **[Issue #2375] [Bug] Heartbeat session history causes ENORMOUS token usage** (👍 1, 评论 10)
    *   **链接**: [HKUDS/nanobot Issue #2375](https://github.com/HKUDS/nanobot/issues/2375)
    *   **分析**: 用户反馈心跳任务每 30 分钟消耗高达 56 万 Token。这反映出当前的心跳机制在持久化历史记录时缺乏清理机制，导致成本失控。
*   **[Issue #235] "I've completed processing but have no response to give."** (👍 8, 评论 10)
    *   **链接**: [HKUDS/nanobot Issue #235](https://github.com/HKUDS/nanobot/issues/235)
    *   **分析**: 这是一个长期存在的问题，Agent 处理完毕但拒绝回复。这通常与模型指令遵循能力或上下文窗口溢出有关，严重影响用户体验。

## 5. Bug 与稳定性
今日报告了多个严重的稳定性问题，部分已有修复方案：

*   **严重 - 内存泄漏导致崩溃**:
    *   **[Issue #2638] Session history grows unbounded** ([Link](https://github.com/HKUDS/nanobot/issues/2638)): 记忆巩固系统失败时，会话历史无限增长，最终导致 Agent 无响应。
    *   **[Issue #2635] 内存泄漏问题** ([Link](https://github.com/HKUDS/nanobot/issues/2635)): 用户通过代码审查指出 `loop.py` 中回调逻辑错误导致任务永不移除。**目前尚无针对性 Fix PR**。
*   **中等 - 配置与兼容性**:
    *   **[Issue #2570] Ollama 404 / Port 18790** ([Link](https://github.com/HKUDS/nanobot/issues/2570)): 本地模型配置困难，网关端口监听异常。
    *   **[Issue #2639] OpenRouter API Key Error** ([Link](https://github.com/HKUDS/nanobot/issues/2639)): 最新版本 (v0.1.4.post6) 导致 OpenRouter 无法使用。
*   **已修复/待合并**:
    *   **[PR #2654]** 已修复 ZhipuAI 报错 1214。
    *   **[PR #2648]** 修复了 Subagent 在配置禁用时仍保留命令执行能力的权限漏洞。

## 6. 功能请求与路线图信号
*   **心跳控制优化**: 用户强烈呼吁优化心跳机制 ([Issue #2406](https://github.com/HKUDS/nanobot/issues/2406) - 👍 2)，建议在无任务时跳过 LLM 调用，以及提供完全禁用 Heartbeat 的配置项 ([Issue #2647](https://github.com/HKUDS/nanobot/issues/2647))。
*   **记忆系统重构**: PR #2649 提出了激动人心的 "Two-stage memory system with Dream consolidation"，引入类似人类睡眠整理记忆的机制，这可能成为下个版本的核心亮点。
*   **Telegram 体验增强**: PR #2628 支持了 Forum topics，PR #2650 修复了长消息流式传输被截断的问题。

## 7. 用户反馈摘要
*   **痛点**: Token 消耗不可控（特别是后台任务）、本地模型（Ollama）接入门槛高、升级版本后经常出现破坏性变更（如 API Key 失效）。
*   **场景**: 用户主要将 NanoBot 用于 Telegram 机器人、飞书办公集成以及本地自动化任务。
*   **评价**: 用户对项目的功能丰富度表示认可，但对代码质量（如内存泄漏）和文档（如 Subagent 配置缺乏官方示例）表示担忧。

## 8. 待处理积压
*   **[Issue #2102] 多租户数据完全隔离** ([Link](https://github.com/HKUDS/nanobot/issues/2102)): 这是一个已关闭但需求强烈的 Issue，目前的 PR #2653 似乎正在尝试从架构层面解决这一问题，需关注后续进展。
*   **[Issue #2599] Official way to add subagents** ([Link](https://github.com/HKUDS/nanobot/issues/2599)): 文档缺失导致用户配置困难，建议维护者优先补充示例。
*   **[Issue #2635]**: 指出的代码逻辑错误非常具体且严重，建议立即确认是否需要修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-31)

**分析师摘要**：PicoClaw 今日保持了极高的开发活跃度，代码提交频繁，社区反馈热烈。项目正处于 v0.2.4 版本发布后的快速迭代期，重点集中在修复关键性性能问题（CPU 占用）、完善多渠道集成（Telegram/Discord/飞书）以及增强易用性（自动更新、Web UI）。

---

### 1. 今日速览
项目今日呈现出**高吞吐量**的开发状态。共有 **109 次** Issue/PR 更新，显示出社区与核心团队的高频互动。
*   **活跃度**：极高。PR 活跃度（80次）显著高于 Issue（29次），表明目前处于“代码密集交付期”。
*   **核心动态**：连夜发布了 `nightly` 版本以验证新功能；紧急修复了 v0.2.4 引入的高 CPU 占用问题；社区正在激烈讨论配置系统的重构以解决供应商混淆问题。
*   **健康度**：⚠️ **需关注**。虽然贡献者众多，但“破坏性变更”和“Web UI 配置保存失败”类 Bug 有上升趋势，建议在下一个正式版发布前加强回归测试。

---

### 2. 版本发布
*   **版本号**：`nightly` (Build: **v0.2.4-nightly.20260330.93f4c4a8**)
*   **类型**：自动构建
*   **变更范围**：Full Changelog 显示包含自 v0.2.4 以来的所有 Main 分支提交。
*   **警告**：官方标注为可能不稳定，建议测试者仅在非生产环境使用。

---

### 3. 项目进展
今日共有 **45 个 PR 被合并或关闭**，主要进展如下：

*   **性能修复**：合并了 PR #2044，**修复了 #2001 提出的闲置时 CPU 占用过高（~10%）的严重问题**。根因是 Agent 循环中缺少 `go` 关键字导致阻塞。
*   **构建与更新器增强**：PR #2201 正在重构自动更新器，增加了对 Nightly 版本的检测与下载支持，这将极大方便测试用户。
*   **渠道稳定性**：PR #1826 修复了 Docker 容器收到 SIGTERM 信号不停止的问题；PR #2088 增加了开放机器人的安全审计。
*   **新渠道支持**：PR #2167 正在推进 **Chatmail (Delta Chat)** 的集成，PR #1843 正在增强 WhatsApp 的多模态能力。

---

### 4. 社区热点
今日讨论最激烈的话题集中在**配置体验**与**核心架构**：

1.  **[Proposal] 配置系统重构 (#1883)**
    *   **热度**：🔥🔥🔥
    *   **链接**：[sipeed/picoclaw Issue #1883](https://github.com/sipeed/picoclaw/issues/1883)
    *   **分析**：用户反馈当前的隐式供应商解析（如 `openai/` 前缀）导致配置混乱。建议引入显式的 `provider` 字段。这是一个潜在的**破坏性变更**，直接关系到 v0.3.0 的 API 设计方向。

2.  **[Bug] Web UI 无法保存 Token (#2195, #2072)**
    *   **热度**：🔥🔥
    *   **链接**：[sipeed/picoclaw Issue #2195](https://github.com/sipeed/picoclaw/issues/2195) | [Issue #2072](https://github.com/sipeed/picoclaw/issues/2072)
    *   **分析**：Telegram 和 Discord 渠道在 Web UI 保存 Token 时报错 "This field is required"。这反映了前端表单校验与后端 API 之间的不同步，是阻碍新用户入驻的高优先级阻碍。

---

### 5. Bug 与稳定性
今日报告的 Bug 较多，且部分影响核心功能：

*   **🔴 严重 - CPU 占用过高**
    *   **Issue**：[#2001](https://github.com/sipeed/picoclaw/issues/2001) (v0.2.4 idle CPU 10%+)
    *   **状态**：✅ **已修复** (PR #2044 已合并)。问题源于代码逻辑错误导致忙循环。
*   **🟠 中等 - Anthropic Prompt Caching 失效**
    *   **Issue**：[#2191](https://github.com/sipeed/picoclaw/issues/2191)
    *   **状态**：🚧 待处理。`anthropic_messages` provider 发送了扁平化字符串，破坏了缓存机制。
*   **🟠 中等 - API 调用过于频繁**
    *   **Issue**：[#2172](https://github.com/sipeed/picoclaw/issues/2172)
    *   **状态**：🚧 待确认。PicoClaw 每秒调用 `/v1/models`，对本地推理服务器造成压力。
*   **🟡 低 - Web UI 历史记录显示不全**
    *   **Issue**：[#1996](https://github.com/sipeed/picoclaw/issues/1996)
    *   **状态**：Open。Web UI 仅显示内置 Pico 会话，隐藏了 Telegram 等外部渠道的聊天记录。

---

### 6. 功能请求与路线图信号
根据 Issue 和 PR 趋势，下一阶段路线图可能包含：

1.  **LLM 限流与保护**
    *   **需求**：[#2194](https://github.com/sipeed/picoclaw/issues/2194) 请求动态限流以应对 429 错误。
    *   **进展**：PR #2198 已经实现了基于令牌桶的限流机制，**极大概率合入**。

2.  **登录页与鉴权**
    *   **需求**：[#2179](https://github.com/sipeed/picoclaw/issues/2179) 指出 Commit 6ea364e 引入了鉴权但缺乏登录页。
    *   **进展**：PR #2196（首次向导）正在解决新用户引导问题，可能会包含鉴权流程的优化。

3.  **更多本地模型支持**
    *   **需求**：对 SiliconFlow (#2045) 和 LM Studio (#2193) 的支持。PR #2193 已提交，正在优化本地 Provider 的默认行为。

---

### 7. 用户反馈摘要
*   **痛点**：**配置门槛高**。用户在配置飞书、Discord 和 Telegram 时频繁遇到 Token 验证失败或 Webhook 配置不明的问题（#2030, #2072, #2195）。
*   **场景**：大量用户尝试在 **Termux (Android)** 或 **WSL** 环境下运行，对 Docker 和 Systemd 的服务化部署有强需求。
*   **满意度**：用户对“支持多种 AI 模型”和“跨平台”表示认可，但对“文档缺失”和“Web UI 报错”感到沮丧。

---

### 8. 待处理积压
*   **长期悬而未决**：
    *   **[#1830](https://github.com/sipeed/picoclaw/issues/1830)**：文档改进与国际化（i18n）。虽然有人提了 PR，但整合速度较慢。
    *   **[#1491](https://github.com/sipeed/picoclaw/issues/1491)**：配置文件加载逻辑错误（"no API key configured"），困扰部分旧版本升级用户，尚未有明确根因。

---
*数据来源：GitHub PicoClaw Repository (2026-03-31 08:00 UTC Snapshot)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 **NanoClaw** 项目 2026-03-31 动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-03-31)

## 1. 今日速览
NanoClaw 今日维持高热度开发状态，社区贡献极其活跃。过去24小时内共有 **50 条 PR 更新**（其中 39 条待合并）和 **17 条 Issue 更新**，显示项目正处于功能快速迭代与社区协作的高峰期。重点关注包括容器化部署的安全性争议、AWS Bedrock 认证支持的呼声以及 Web Dashboard 等核心功能的 PR 进展。虽然无新版本发布，但大量 Community Skill 的提交表明生态系统正在自发扩张。

## 2. 版本发布
*   **无新版本发布**。

## 3. 项目进展
今日无 PR 合并记录，但有多达 **39 条 PR 处于 Open/Active 状态**，显示出社区贡献的巨大惯性。主要推进方向如下：

*   **核心功能增强**：PR #1514 提出的 **Web Dashboard** 备受关注，旨在提供 SQLite 数据库的可视化监控面板；PR #1343 试图引入 CLI Backend 以解决订阅用户合规性问题。
*   **集成与技能扩展**：社区正积极提交 MCP 集成技能，包括 **Home Assistant** (#1327)、**Tailscale API** (#1260) 和 **UnraidClaw** (#1188)，显著增强了 NanoClaw 在智能家居和私有云场景下的能力。
*   **稳定性修复**：PR #700 (Session 轮转) 和 PR #1546 (自动恢复陈旧会话) 正在审查中，有望解决容器超时和无限重试循环等痛点。

## 4. 社区热点
今日讨论最热烈的话题集中在基础设施与认证支持上：

*   **[#1492 Support AWS Bedrock as Authentication Backend](https://github.com/qwibitai/nanoclaw/issues/1492)** (👍 3)
    *   **诉求**：用户 `rashid301` 指出目前仅支持 Anthropic 直连 API，强烈建议增加对 **AWS Bedrock** 的认证支持，以便企业用户在不迁移架构的情况下使用 Claude 模型。
*   **[#1503 nanoclaw.dev has an invalid ssl cert](https://github.com/qwibitai/nanoclaw/issues/1503)** (💬 4)
    *   **诉求**：用户 `lactose` 报告官方网站 SSL 证书失效。虽然这是基础设施问题，但高评论量显示出用户对项目可用性的关注度极高。
*   **[#1554 Log file grows unbounded](https://github.com/qwibitai/nanoclaw/issues/1554)** (👍 2)
    *   **诉求**：用户 `apparentsoft` 报告日志文件 (`nanoclaw.log`) 膨胀至 600MB+，引发对系统资源占用的担忧。

## 5. Bug 与稳定性
今日报告的关键 Bug 涉及容器运行逻辑、日志管理及部署安全，部分已有对应修复方案：

*   **[Critical] 容器内运行导致崩溃 (Docker-in-Docker)**
    *   Issue: [#1487](https://github.com/qwibitai/nanoclaw/issues/1487) - `cohix` 报告在 Docker 容器内运行 NanoClaw 会导致自身容器被杀掉。
    *   Issue: [#1485](https://github.com/qwibitai/nanoclaw/issues/1485) - `andaag` 批评当前的 `curl | sh` 安装方式存在供应链攻击风险，建议容器化运行。
*   **[High] 逻辑缺陷导致无限重试**
    *   Issue: [#1531](https://github.com/qwibitai/nanoclaw/issues/1531) - 失败的容器返回旧 Session ID 会被重新写入数据库，导致死循环。
    *   **Fix PR**: [#1546](https://github.com/qwibitai/nanoclaw/pull/1546) 已提交，尝试在 Exit Code 1 时自动清除陈旧 Session。
*   **[High] Sidecar 异常退出**
    *   Issue: [#1454](https://github.com/qwibitai/nanoclaw/issues/1454) - 环境变量未设置导致 Sidecar 直接退出，进而取消所有异步任务。
*   **[Medium] 日志无限增长**
    *   Issue: [#1554](https://github.com/qwibitai/nanoclaw/issues/1554) - 缺乏日志轮转机制。
*   **[Medium] IPC 状态判断错误**
    *   Issue: [#1482](https://github.com/qwibitai/nanoclaw/issues/1482) - Host 将 `success` 结果误判为容器已空闲，导致状态混乱。

## 6. 功能请求与路线图信号
结合 Issues 与 PR，可以看出项目接下来的演进方向：

*   **多渠道与远程代理**
    *   **信号**：Issue [#1537](https://github.com/qwibitai/nanoclaw/issues/1537) 提出为远程代理（Telegram/WhatsApp）增加对话式审批流，解决无终端环境下的权限确认问题。
    *   **信号**：Issue [#1522](https://github.com/qwibitai/nanoclaw/issues/1522) 请求支持 WhatsApp 媒体文件（图片/语音）的解析。
*   **上下文与记忆增强**
    *   **信号**：Issue [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) 与 [#1494](https://github.com/qwibitai/nanoclaw/issues/1494) 分别建议集成 **Headroom** (API 压缩代理) 和 **RTK** (CLI 输出压缩)，以优化 Token 消耗。
    *   **信号**：Issue [#1458](https://github.com/qwibitai/nanoclaw/issues/1458) 提议引入 **Graphiti** 知识图谱替代当前的文件记忆系统。
*   **部署安全性**
    *   **信号**：Issue [#1500](https://github.com/qwibitai/nanoclaw/issues/1500) 建议代理 Gmail/Calendar OAuth 令牌，防止提示词注入攻击窃取凭证。

## 7. 用户反馈摘要
*   **痛点：部署体验割裂**：用户强烈希望 NanoClaw 自身能完全容器化运行 (#1485)，目前的宿主机脚本安装方式被认为“脏且危险”。
*   **痛点：企业级支持缺失**：对 AWS Bedrock 的支持需求强烈 (#1492)，表明企业用户正在尝试采用该项目。
*   **场景：自动化需求增加**：用户正在尝试将 NanoClaw 用于 YouTube 历史记录查询 (#1547) 和 Instacart 购物车自动化 (#1382)，反映出用户对“Agent 执行实际操作”的期望很高。

## 8. 待处理积压
以下重要 Issue/PR 长期未获合并或官方响应，建议维护者关注：

*   **PR #700 [Blocked]**: 修复超大 JSONL Session 导致容器超时的问题。此 PR 自 3 月 4 日开启，状态仍为 Blocked，严重影响大负载下的稳定性。
    *   链接: [qwibitai/nanoclaw PR #700](https://github.com/qwibitai/nanoclaw/pull/700)
*   **PR #1089 / #1090**: 关于 Linux/Docker 部署支持和修复 EROFS 崩溃的 PR 自 3 月中旬开启至今，虽讨论活跃但未合并。
    *   链接: [qwibitai/nanoclaw PR #1089](https://github.com/qwibitai/nanoclaw/pull/1089)

---
*分析师结语：NanoClaw 社区目前处于“功能爆发期”与“架构磨合期”并存阶段。虽然社区技能层出不穷，但核心的容器化部署稳定性和日志/会话管理基础问题仍需官方重点投入，以免阻碍企业级落地。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

您好，我是 AI 开源项目分析师。根据 2026-03-31 的 GitHub 数据，为您生成 **IronClaw (nearai/ironclaw)** 项目动态日报。

---

# 📊 IronClaw 项目日报 (2026-03-31)

### 1. 今日速览
IronClaw 项目今日保持**极高的开发活跃度**，正处于 **v0.24.0 版本发布前的关键冲刺阶段**。过去 24 小时内共有 50 个 PR 更新，其中核心团队提交了多个针对安全性和扩展性的重大修复。项目今日成功完成了从 staging 到 main 的批量代码提升，修复了 Slack、Feishu 等渠道的已知问题。社区方面，关于金融执行层的安全架构和本地私有化部署的讨论成为焦点。整体来看，项目核心功能向更安全的“金融级”智能体演进，但也暴露了部分模型兼容性和私有化部署的阻碍。

### 2. 版本发布
虽然 Release 页面暂未发布正式包，但根据 PR #1745 显示，**v0.24.0 版本已进入发布流程**。
*   **版本号**: v0.24.0 (从 v0.23.0 升级)
*   **破坏性变更 (API Breaking Changes)**:
    *   涉及外部可构造结构体新增字段，API 接口有不兼容更新。
    *   **迁移建议**: 开发者需检查直接实例化相关结构体的代码，确保新增字段被正确处理或忽略。
*   **关联 PR**: [chore(ironclaw): release v0.24.0 #1745](https://github.com/nearai/ironclaw/pull/1745)

### 3. 项目进展
今日核心进展集中在**安全性增强**、**渠道修复**及**异步工具能力**的构建：
*   **基础设施与发布**: 顺利将 staging 分支批量合并至 main ([PR #1698](https://github.com/nearai/ironclaw/pull/1698))，并修复了 Discord、Slack ([PR #1766](https://github.com/nearai/ironclaw/pull/1766)) 和 Feishu ([PR #1765](https://github.com/nearai/ironclaw/pull/1765)) 的版本号冲突，为 v0.24.0 铺平道路。
*   **安全性加固**: 核心贡献者 henrypark133 提交了针对 API 响应的敏感信息清洗 ([PR #1719](https://github.com/nearai/ironclaw/pull/1719))，防止内部错误细节泄露给客户端；同时拦截 Telegram 明文 Token 传输 ([PR #1598](https://github.com/nearai/ironclaw/pull/1598))。
*   **金融能力扩展**: 新增 WalletConnect 异步交易审批功能 ([PR #1759](https://github.com/nearai/ironclaw/pull/1759))，允许通过外部钱包安全批准交易，这是向 DeFi 智能体迈进的重要一步。
*   **Routines 优化**: 合并了 Routine 状态追踪功能 ([PR #1716](https://github.com/nearai/ironclaw/pull/1716))，确保例程在验证通过前保持“未验证”状态。

### 4. 社区热点
今日社区讨论主要集中在**架构规划**与**渠道集成问题**：
*   **[高关注] 金融执行层架构设计 ([Issue #1712](https://github.com/nearai/ironclaw/issues/1712))**:
    *   作者 serrrfirat 提议构建安全的金融执行层，解决托管、签名和跨应用加密操作的问题。这标志着 IronClaw 正从通用的 AI 助手向具备金融操作能力的 Agent 转型，社区对此高风险、高回报的功能表示关注。
*   **[高关注] 飞书/Lark 渠道配对失败 ([Issue #1673](https://github.com/nearai/ironclaw/issues/1673))**:
    *   用户反馈飞书渠道卡在“等待配对”状态，且已有 2 个点赞。鉴于今日 v0.24.0 刚修复了 Feishu 的版本问题，该 Bug 是否在新版中解决值得重点关注。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在**模型兼容性**和**网络配置**，部分已有修复方案：

| 严重度 | 问题 | 状态/修复 | 链接 |
| :--- | :--- | :--- | :--- |
| **High** | **Gemini 模型工具调用失败**: `gemini-3.1-flash-lite` 在调用工具时报 400 错误，缺少 `thought_signature`。 | **Open** (需确认是否受 PR #1599 扩展状态注入修复影响) | [#1510](https://github.com/nearai/ironclaw/issues/1510) |
| **High** | **私有网络 HTTP 限制**: 禁止使用非 TLS 的 HTTP 连接远程私有模型 (`litellm-proxy`)。 | **Open** (安全策略限制，暂无修复 PR) | [#1754](https://github.com/nearai/ironclaw/issues/1754) |
| **Medium** | **Ollama + Qwen 本地报错**: Windows 部署下 `qwen3.5:9b` 出现瞬态错误重试。 | **Open** | [#1672](https://github.com/nearai/ironclaw/issues/1672) |
| **Medium** | **Google Auth 二次连接失败**: 连接第二个 Google 工具时生成错误的 Auth 链接。 | **Closed** (已在近期提交中修复) | [#1500](https://github.com/nearai/ironclaw/issues/1500) |
| **Low** | **Slack 线程回复丢失**: 未 @mention 时忽略后续消息。 | **Closed** (已修复) | [#1404](https://github.com/nearai/ironclaw/issues/1404) |

### 6. 功能请求与路线图信号
*   **自我修复技能**: Issue #1760 提议增加 `skill-repair` 任务，允许 v2 引擎根据执行结果自动修复过时的 Skill。结合 PR #1738 的 `agent review` 功能，预示着 IronClaw 正在构建**具备自我进化能力的 Agentic Loop**。
*   **阿里云百炼支持**: PR #1446 正在添加对 Aliyun BaiLian Coding Plan 的支持。虽然尚未合并，但这表明项目正在积极扩展非西方云厂商的 LLM 支持。
*   **邮件/密码登录**: Issue #1494 请求增加邮箱注册选项，反映出部分用户希望摆脱 OAuth 依赖，主要用于私有化部署场景。

### 7. 用户反馈摘要
*   **私有化部署痛点**: 用户在配置私有网络模型时遭遇强制 HTTPS 限制 (#1754)，这表明 IronClaw 的安全策略可能过于严格，阻碍了在内网/企业环境的使用。
*   **多模态/多工具体验不佳**: 无论是 Gemini 的工具调用错误 (#1510) 还是 Google 工具的二次授权失败 (#1500)，都显示出在“多工具协同”场景下，稳定性仍有待提升。
*   **Benchmark 需求**: 维护者 ilblackdragon 提出的 Workplace Simulation Benchmark (#1750) 显示，项目正致力于证明其在真实企业高管工作流（邮件、Slack、决策）中的实用价值。

### 8. 待处理积压
*   **[需关注] Gemini 兼容性 (#1510)**: 此问题已持续一周，随着 v0.24.0 发布，需验证是否依然存在。
*   **[需关注] 私有网络 HTTP 支持 (#1754)**: 这是一个典型的企业级需求，目前官方尚未回应，建议维护者考虑增加 `--insecure-network` 或白名单配置。

---
**分析师点评**: IronClaw 今日的动作显示出其正在经历从“能用”到“安全、金融级可用”的蜕变。v0.24.0 的发布清理了大量技术债务，但随之而来的私有化部署限制和特定模型兼容性问题可能会成为下一阶段社区支持的主要负担。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是基于您提供的 GitHub 数据生成的 **LobsterAI** 项目动态日报（2026-03-31）。

---

# 📅 LobsterAI 项目日报 (2026-03-31)

> **数据时间范围**：过去 24 小时
> **项目状态**：🟢 **高度活跃** (Day-to-day Dev)
> **分析师观察**：项目正处于高频迭代期，今日发布了 `2026.3.30` 版本，重点增强了定时任务与技能管理。社区方面，Issue 讨论热度极高，特别是围绕 `main.ts` 代码臃肿、数据持久化及安全漏洞的讨论反映了项目从 MVP 向企业级稳定版过渡的阵痛。

---

## 1. 🚀 今日速览
- **整体活跃度**：极高。过去 24 小时内 Issues 活跃度达 27 条（24 新开），PR 更新达 50 条，显示开发团队与社区正在密集交互。
- **版本动态**：发布了 **v2026.3.30**，主要涉及定时任务和模型供应商兼容性修复。
- **核心进展**：开发重心集中在 **定时任务增强**、**MCP (Model Context Protocol) 生态集成** 以及 **代码架构重构**（尤其是对 `main.ts` 的拆分讨论）。
- **风险提示**：社区提交了多个关于 **SSRF 安全漏洞**、**SQLite 数据完整性** 及 **配置文件重置** 的严重 Bug 报告，需引起维护者高度重视。

---

## 2. 📦 版本发布
### [LobsterAI 2026.3.30](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.30)
本次更新主要针对功能增强与兼容性修复：
- **✨ 新功能**：
  - **定时任务增强**：支持小时级选择，每周可选择具体某一天执行，并增加了定时任务模型的选择 ([PR #1017](https://github.com/netease-youdao/LobsterAI/pull/1017))。
  - **技能更新**：添加技能更新逻辑，支持技能一键更新 ([PR #1018](https://github.com/netease-youdao/LobsterAI/pull/1018))。
- **🛠 修复**：
  - 修复 OpenAI 和 Gemini 模型供应商的兼容性 Bug ([PR #1019](https://github.com/netease-youdao/LobsterAI/pull/1019))。

---

## 3. 🛠 项目进展
今日共有 **9 个 PR 被合并/关闭**（主要是发布相关的 PR），**41 个 PR 待合并**。重点合并与进展如下：

- **🚀 发布分支合并**：[PR #1064](https://github.com/netease-youdao/LobsterAI/pull/1064) (Release/2026.03.30) 和 [PR #1063](https://github.com/netease-youdao/LobsterAI/pull/1063) (依赖锁更新) 已合并，标志着新版本的正式交付。
- **🧩 MCP 生态增强**：
  - [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070)：实现了 **Per-Session MCP 开关**，允许不同会话独立启用/禁用 MCP Server，极大提升了灵活性。
  - [PR #1073](https://github.com/netease-youdao/LobsterAI/pull/1073)：优化 MCP 管理页面 UI，支持搜索框和 Tab 栏悬浮，提升操作体验。
- **📊 监控与调试**：
  - [PR #1079](https://github.com/netease-youdao/LobsterAI/pull/1079)：新增「当前进程」右侧面板，展示工具执行记录与 Diff 视图，显著增强了 Agent 执行过程的可观测性。
- **🧹 架构重构**：
  - [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069)：尝试拆分庞大的 `CoworkSessionDetail.tsx` (2100+ 行)，提升代码可维护性与渲染性能。

---

## 4. 🔥 社区热点
今日社区讨论主要集中在**架构治理**与**安全漏洞**：

1.  **架构治理：`main.ts` 瘦身**
    - **[Issue #1024](https://github.com/netease-youdao/LobsterAI/issue/1024)**：开发者指出 `src/main/main.ts` 包含过多业务逻辑，导致维护困难，建议按 Electron 最佳实践进行模块化拆分。这反映了社区对项目代码质量的高度关注。
2.  **数据持久化危机**
    - **[Issue #1006](https://github.com/netease-youdao/LobsterAI/issue/1006)**：用户报告配置文件（`openclaw.json`）和工作空间文件（`AGENTS.md`）在重启后被强制重置，严重影响自定义配置。该 Issue 评论数较多，显示出这是一个普遍痛点。
3.  **安全性预警**
    - **[Issue #1041](https://github.com/netease-youdao/LobsterAI/issue/1041)**：披露了 SSRF 攻击风险与本地文件读取漏洞。
    - **[Issue #1031](https://github.com/netease-youdao/LobsterAI/issue/1031)**：指出 `shell:openExternal` 未校验协议，存在任意协议调用风险。

---

## 5. 🐛 Bug 与稳定性
今日报告的 Bug 数量较多，且多涉及核心逻辑与稳定性：

### 🔴 严重
- **配置重置**：[Issue #1006](https://github.com/netease-youdao/LobsterAI/issue/1006) - 重启后用户配置丢失（暂无 Fix PR）。
- **SQLite 数据损坏风险**：[Issue #1071](https://github.com/netease-youdao/LobsterAI/issue/1071) - CASCADE 失效导致孤儿消息累积，非原子写可能导致崩溃后数据损坏。**[Fix PR #1072](https://github.com/netease-youdao/LobsterAI/pull/1072) 已提交**。
- **登录态丢失**：[Issue #1016](https://github.com/netease-youdao/LobsterAI/issue/1016) - 网易员工登录后客户端未下发 Token，导致无法使用。

### 🟠 一般
- **模型连接问题**：[Issue #1080](https://github.com/netease-youdao/LobsterAI/issue/1080) - 通义千问 测试通过但实际报 "no body" 错；[Issue #248](https://github.com/netease-youdao/LobsterAI/issue/248) - DeepSeek/Qwen 报 401 错误。
- **定时任务 Bug**：[Issue #1062](https://github.com/netease-youdao/LobsterAI/issue/1062) - 修改时间后标题与实际不符。
- **UI 交互**：[Issue #1022](https://github.com/netease-youdao/LobsterAI/issue/1022) - Agent 图标无法上传图片；[Issue #1053](https://github.com/netease-youdao/LobsterAI/issue/1053) - Modal 关闭按钮失效。

### 🟢 已修复
- **心跳对话干扰**：[Issue #1066](https://github.com/netease-youdao/LobsterAI/issue/1066) - 系统心跳日志未过滤。**[PR #1067](https://github.com/netease-youdao/LobsterAI/pull/1067)** 已提交修复，阻止心跳自动创建会话。

---

## 6. 💡 功能请求与路线图信号
- **GitHub Copilot 集成**：[PR #707](https://github.com/netease-youdao/LobsterAI/pull/707) 正在推进 GitHub Copilot 的 OAuth 认证与 API 支持，这将为用户提供除 OpenAI/Claude 外的又一强大模型选择。
- **定时任务绑定会话**：[PR #1065](https://github.com/netease-youdao/LobsterAI/pull/1065) 提议允许定时任务绑定到已存在的 Cowork Session，而不是每次新建，这将增强任务的上下文连贯性。
- **快捷键录制**：[PR #845](https://github.com/netease-youdao/LobsterAI/pull/845) 建议将快捷键设置从文本输入改为键盘录制组件，提升用户体验。

---

## 7. 📢 用户反馈摘要
- **痛点**：
  - **部署困难**：[Issue #1025](https://github.com/netease-youdao/LobsterAI/issue/1025) & [Issue #1015](https://github.com/netease-youdao/LobsterAI/issue/1015) 指出外部开发者构建时，因内网 npm registry (`npm.nie.netease.com`) 不可达导致打包卡死/失败。
  - **配置持久化**：用户对重启后配置被覆盖感到非常沮丧 ([Issue #1006](https://github.com/netease-youdao/LobsterAI/issue/1006))。
- **满意点**：
  - 对新版本的**定时任务粒度优化**（小时级、周级）表示欢迎。
  - 对 **MCP 管理界面的优化**（悬浮搜索、状态保持）给予了正面反馈。

---

## 8. 📥 待处理积压
- **[Issue #205](https://github.com/netease-youdao/LobsterAI/issue/205) [CLOSED]**：安装问题长期未解决，用户抱怨“拖了很久”。
- **[Issue #353](https://github.com/netease-youdao/LobsterAI/issue/353)**：关于性能与 OpenClaw 执行环境的建议，涉及架构层面的优化，需长期关注。
- **[PR #1072](https://github.com/netease-youdao/LobsterAI/pull/1072)**：针对 SQLite 严重数据完整性问题的修复 PR，目前处于 Open 状态，建议维护者优先 Review 并合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

根据您提供的 2026-03-31 GitHub 数据，以下是 **TinyClaw** (TinyAGI) 项目的每日动态日报。

---

# 📊 TinyClaw 项目日报 (2026-03-31)

### 1. 📰 今日速览
TinyClaw 项目今日处于**低频维护与内部重构**状态，并未发布新版本。虽然社区 Issue 讨论区显得较为冷清（0 条新动态），但核心开发团队仍在后台推进代码质量优化。今日共有 **2 个 PR 成功关闭并合并**，主要集中在修复 Teams 模块的类型错误以及重构 Office 模块的 UI 布局与路由。整体来看，项目今日无破坏性更新，正在为后续功能迭代整理代码架构。

### 2. 🚀 版本发布
*   **无新版本发布**：过去 24 小时内未检测到新的 Release 或 Tag。

### 3. 🛠 项目进展
今日共有 2 个 PR 合并入主分支，均由贡献者 `jlia0` 提交并关闭。这些变更显示项目正在致力于优化前端交互体验和代码健壮性。

*   **[CLOSED/merged] fix(teams): remove invalid pathOptions prop from Edge type** ([PR #270](https://github.com/TinyAGI/tinyagi/pull/270))
    *   **内容**：修复了 Teams 模块中 Edge 类型的属性错误，移除了无效的 `pathOptions` 属性。
    *   **意义**：这是一个针对 TypeScript 类型定义的修复，有助于消除控制台警告，提升代码的静态检查通过率，确保类型安全。

*   **[CLOSED/merged] refactor(office): reorganize navigation, routes, and office UI** ([PR #269](https://github.com/TinyAGI/tinyagi/pull/269))
    *   **内容**：对 "tinyoffice" 应用进行了全面重构。将 App shell 简化为仅侧边栏布局，重新组织了路由结构，并利用 ReactFlow 改进了 Agent 和 Team 卡片的可视化设计。
    *   **意义**：这是一个较大的 UI/UX 重构，表明项目正在尝试解决界面复杂度问题，并引入更现代化的可视化方案（如 ReactFlow 树状图），这可能意味着未来的版本中用户配置 Agent 的交互将更加直观。

### 4. 🔥 社区热点
*   **讨论冷清**：过去 24 小时内 Issues 数量为 0，PR 评论数为 undefined（通常表示无新评论）。
*   **焦点分析**：由于缺乏公开的社区讨论，今日的关注点完全集中在核心开发者 `jlia0` 的提交上。从 [PR #269](https://github.com/TinyAGI/tinyagi/pull/269) 的内容来看，"Office" 场景下的可视化呈现是当前的开发重心。

### 5. 🐛 Bug 与稳定性
今日未收到来自用户的新 Bug 报告（Issues 为 0）。
*   **内部修复**：虽然无用户报告，但项目组主动修复了一个代码层面的隐患。
    *   **低严重度**：Edge 类型属性错误 ([PR #270](https://github.com/TinyAGI/tinyagi/pull/270))，已修复并合并。

### 6. 🗺 功能请求与路线图信号
*   **信号探测**：虽然没有显式的 "Feature Request" Issue，但从 [PR #269](https://github.com/TinyAGI/tinyagi/pull/269) 的变更可以推断出以下路线图信号：
    *   **可视化编辑增强**：引入 ReactFlow 树状可视化，暗示项目正朝着“低代码/可视化编排 Agent”的方向演进。
    *   **UI 简化**：简化 App shell 为侧边栏模式，表明项目试图降低用户进入 "tinyoffice" 场景的认知负担。

### 7. 💬 用户反馈摘要
*   **数据缺失**：由于今日无活跃的 Issue 或 PR 评论，暂时无法提取真实用户的痛点或满意度反馈。

### 8. 📥 待处理积压
*   **数据不足**：基于提供的过去 24 小时数据（Issues: 0），今日未检测到长期未响应的积压问题活跃化。建议关注后续是否有历史 Issue 被重新开启。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于 2026-03-31 数据生成的 Moltis 项目动态日报。

# Moltis 项目日报 (2026-03-31)

## 1. 今日速览
Moltis 项目今日呈现出**高维护度、高迭代效率**的特征。虽然未发布新的正式版本，但开发团队集中处理了大量积压与突发问题，单日**关闭 5 个 Issues 并合并 5 个 PRs**，吞吐量表现优异。重点修复了 Web 端在非安全上下文（HTTP）下的兼容性问题以及反向代理后的节点连接错误。社区方面，关于第三方 Provider 集成和 Matrix 协议支持的讨论推动了相关 PR 的提交，显示出项目正在积极扩展其生态兼容性。

## 2. 版本发布
*   **无新版本发布**：今日无 Tag 或 Release 更新。

## 3. 项目进展
今日共有 **5 个 PRs 被合并**，显著提升了系统的健壮性与用户体验：

*   **Web 兼容性修复**：PR [#522](https://github.com/moltis-org/moltis/pull/522) 修复了在非 HTTPS（如局域网 HTTP）环境下 `crypto.randomUUID()` 报错导致无法创建会话的问题，这对于本地部署用户至关重要。
*   **网络/代理修复**：PR [#519](https://github.com/moltis-org/moltis/pull/519) 解决了反向代理场景下节点加入 URL 错误显示内部 Docker 端口的问题，优化了网络配置体验。
*   **安全性逻辑调整**：PR [#518](https://github.com/moltis-org/moltis/pull/518) 调整了 "Vault Sealed" 状态下的行为，允许在此状态下访问未加密的历史记录端点，修复了之前版本中过于严格的安全拦截导致的可用性问题。
*   **功能迭代与重构**：PR [#503](https://github.com/moltis-org/moltis/pull/503) 引入了跨会话召回、SSH 运行时管理优化及技能包便携式导出/导入功能。
*   **代码重构**：PR [#487](https://github.com/moltis-org/moltis/pull/487) 虽被关闭，但其核心逻辑被整合进后续 PR，标志着 OpenAI 提供商的 Rust 原生实现取得进展。

## 4. 社区热点
*   **最受关注的功能请求**：Issue [#185](https://github.com/moltis-org/moltis/issues/185)（Z.AI Coding Plan）获得 **5 个 👍**，虽然已于今日关闭，但高点赞数表明社区对自动化编程规划功能有强烈需求。
*   **核心功能增强**：Issue [#313](https://github.com/moltis-org/moltis/issues/313)（Tool Search 工具搜索功能）今日关闭，该功能旨在解决工具调用时的检索效率问题，是提升 Agent 智能化的关键一环。
*   **新功能提案**：Issue [#523](https://github.com/moltis-org/moltis/issues/523) 提出了针对 Discord/Channel 类型会话的重命名需求，反映了用户在多渠道集成场景下对会话管理的精细化诉求。

## 5. Bug 与稳定性
今日修复了两个影响核心可用性的 Bug，均已有合并的修复 PR：

1.  **[高] 无法创建会话 (Web端)**：
    *   **现象**：在非 localhost/HTTPS 环境下（如 HTTP 局域网访问），新建会话按钮失效。
    *   **状态**：**已修复** (PR [#522](https://github.com/moltis-org/moltis/pull/522))。
    *   **关联 Issue**：[#520](https://github.com/moltis-org/moltis/issues/520)。

2.  **[中] 安全状态下的 UI 逻辑冲突**：
    *   **现象**：Vault 处于 "Sealed" 状态时，UI 错误地隐藏会话列表，但用户仍可通过 Context 按钮查看完整历史，导致逻辑不一致。
    *   **状态**：**已修复** (PR [#518](https://github.com/moltis-org/moltis/pull/518))。
    *   **关联 Issue**：[#428](https://github.com/moltis-org/moltis/issues/428)。

## 6. 功能请求与路线图信号
*   **第三方模型支持增强**：PR [#521](https://github.com/moltis-org/moltis/pull/521)（新增 `openai-oxide` 提供商）目前处于 **Open** 状态。这表明项目正致力于解耦对官方 OpenAI 库的依赖，转而使用更轻量、Rust 原生的实现，未来版本可能会推荐用户迁移至新的 Provider 配置。
*   **多协议集成**：PR [#500](https://github.com/moltis-org/moltis/pull/500) 提出集成 **Matrix 协议**。作为一个开放的去中心化通讯协议，这显示了 Moltis 试图成为全能型 AI 通讯 Hub 的野心，该功能一旦合并，将极大地扩展其在隐私通讯和开源社区的应用场景。

## 7. 用户反馈摘要
*   **部署体验痛点**：从 Issue [#520](https://github.com/moltis-org/moltis/issues/520) 反馈来看，部分用户仍在使用 HTTP 协议进行局域网部署，且遇到了浏览器 API 限制，说明前端代码需要更好的降级处理（Polyfill）来兼容非标准环境。
*   **安全与便捷的平衡**：Issue [#428](https://github.com/moltis-org/moltis/issues/428) 揭示了用户对 "Sealed"（加封/锁定）概念的困惑。用户期望 "Sealed" 意味着完全不可见，或者完全可用，而不是当前这种“UI 隐藏但接口暴露”的中间状态。

## 8. 待处理积压
*   **新功能 PR 待审查**：
    *   PR [#500](https://github.com/moltis-org/moltis/pull/500) (Matrix 集成) 和 PR [#521](https://github.com/moltis-org/moltis/pull/521) (OpenAI-Oxide) 均处于待定状态，建议维护者优先进行 Code Review，以避免大型功能分支长期 diverge。
*   **新 Issue 待响应**：
    *   Issue [#523](https://github.com/moltis-org/moltis/issues/523) (Channel 会话重命名) 目前无人评论，这是一个合理的 UX 改进建议，建议团队确认优先级。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-31)

## 1. 今日速览
CoPaw 项目今日迎来了**里程碑式的重大更新**，正式发布了 **v1.0.0** 版本，标志着项目核心架构趋于稳定。社区活跃度达到近期峰值，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，其中新开/活跃 Issue 37 条，合并/关闭 PR 43 条。除了版本发布外，社区重点讨论了长上下文记忆管理、多智能体协作的稳定性以及各渠道（钉钉/微信）的集成痛点。整体来看，项目正处于功能迭代与稳定性修复并行的快速上升期。

## 2. 版本发布
今日连续发布了 4 个版本，最终锁定在 **v1.0.0** 正式版，包含以下核心更新：

*   **v1.0.0 (Latest)**
    *   **✨ Multi-Agent System 增强**: 引入后台任务支持，允许智能体间通信在后台执行，并提供任务追踪、状态轮询和取消功能（CLI 支持 `--background` 参数）。
    *   **🔄 Agent 开关控制**: 增加了智能体启用/禁用的切换功能。
    *   [查看 Release 详情](https://github.com/agentscope-ai/CoPaw/releases/tag/v1.0.0)

*   **v1.0.0-beta.3 及此前版本**
    *   修复了 Toolguard 前端响应问题。
    *   更新了 `@agentscope-ai/chat` 依赖。
    *   重构了 `react_agent` 配置路径以优化 `recent_max_bytes` 设置。

## 3. 项目进展
今日共有 **43 个 PR 被合并或关闭**，项目推进力度极大，主要集中在 v1.0.0 的发布准备与文档/网站更新，以及部分关键修复：

*   **核心功能与修复**:
    *   [PR #2566](https://github.com/agentscope-ai/CoPaw/pull/2566): **修复钉钉定时任务消息投递**。通过保存 `conversation_id` 修复了 webhook 过期导致定时任务无法发送消息的问题，直接解决了 [Issue #2221](https://github.com/agentscope-ai/CoPaw/issues/2221)。
    *   [PR #2568](https://github.com/agentscope-ai/CoPaw/pull/2568): **企业微信图片压缩**。解决了大图上传失败（>2MB）的问题，自动将 PNG 转 JPEG 并压缩。
    *   [PR #2574](https://github.com/agentscope-ai/CoPaw/pull/2574): 优化了摘要记忆的检索逻辑，将其前置到聊天历史处理中，旨在改善长对话的记忆召回能力。
*   **文档与基础设施**:
    *   大量 PR（如 [#2585](https://github.com/agentscope-ai/CoPaw/pull/2585), [#2588](https://github.com/agentscope-ai/CoPaw/pull/2588)）集中于版本号更新、官网建设及 Google Analytics 集成，表明项目正在完善对外形象与数据追踪。

## 4. 社区热点
今日讨论最活跃的议题集中在**重度使用场景下的体验优化**：

1.  **[Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291) [OPEN]**: **"Help Wanted: Open Tasks"**
    *   **热度**: 38 条评论
    *   **分析**: 官方发布的任务认领列表，吸引了大量开发者关注，社区贡献意愿强烈，涉及文件回滚、MCP 服务器支持等高级功能。

2.  **[Issue #2482](https://github.com/agentscope-ai/CoPaw/issues/2482) [OPEN]**: **"重度用户痛点：对话管理与上下文压缩"**
    *   **热度**: 13 条评论
    *   **分析**: 用户反馈了三个核心痛点：(1) 无法物理删除单条对话导致上下文污染；(2) 现有压缩机制导致记忆混乱；(3) 大文件读取被截断且无法自动续读。这反映了高级用户对**精细化上下文控制**的迫切需求。

3.  **[Issue #2289](https://github.com/agentscope-ai/CoPaw/issues/2289) [OPEN]**: **"MEMORY.md 文件过大导致效率降低"**
    *   **热度**: 9 条评论
    *   **分析**: 随着使用时间增长，基于文本文件的记忆检索效率成为瓶颈。用户建议引入向量数据库或更高效的索引机制，而非简单的文本堆积。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复方案：

*   **严重/阻塞**:
    *   **MCP 服务器初始化失败** ([Issue #2591](https://github.com/agentscope-ai/CoPaw/issues/2591)): CoPaw 无法连接本地 stdio MCP 服务器，导致相关工具无法加载。目前尚无 Fix PR。
    *   **网络波动导致 Agent 停摆** ([Issue #2435](https://github.com/agentscope-ai/CoPaw/issues/2435)): 在网络不稳定环境下，Shell 命令和 GitHub API 调用频繁超时，导致工作流中断。
*   **一般/已知修复**:
    *   **钉钉定时任务失效** ([Issue #2221](https://github.com/agentscope-ai/CoPaw/issues/2221)): 已通过 [PR #2566](https://github.com/agentscope-ai/CoPaw/pull/2566) 修复。
    *   **子智能体定时任务显示错位** ([Issue #2569](https://github.com/agentscope-ai/CoPaw/issues/2569)): 在子智能体中创建的定时任务错误地显示在默认智能体列表中。
    *   **Gemini 模型调用失败** ([Issue #2406](https://github.com/agentscope-ai/CoPaw/issues/2406)): 上传图片后 Gemini 全系模型报错，疑似多模态参数处理问题。

## 6. 功能请求与路线图信号
结合 Issue 讨论与 PR 趋势，以下功能可能进入下一阶段开发重点：

1.  **文件操作回滚机制** ([Issue #2590](https://github.com/agentscope-ai/CoPaw/issues/2590)): 开发者已认领任务，计划支持撤销 Agent 对工作区的修改（如恢复误删文件）。预计近期会有相关 PR。
2.  **结构化 Skill 输出** ([Issue #2535](https://github.com/agentscope-ai/CoPaw/issues/2535)): 用户希望 Skill（如生成 PPT）能返回结构化的元数据（路径、主题等），以便后续流程调用。这表明**Workflow/Chain 编排**需求正在上升。
3.  **全双工通信支持** ([Issue #2548](https://github.com/agentscope-ai/CoPaw/issues/2548)): 请求在任务执行中插入新消息（如即时修正指令），而非目前的"停止即终止"模式。
4.  **上下文压缩策略插件化** ([Issue #2521](https://github.com/agentscope-ai/CoPaw/issues/2521)): 针对 AIOps 长流程场景，请求支持自定义上下文压缩算法，而非仅依赖简单的截断。

## 7. 用户反馈摘要
从今日的评论中可以提炼出以下用户画像与痛点：

*   **痛点**:
    *   **上下文管理**: "Memory 越来越大，检索变慢"、"压缩后记忆混乱"、"无法删除特定对话" 是高频吐槽点。
    *   **安装与更新**: 多个用户反馈安装失败 ([Issue #2536](https://github.com/agentscope-ai/CoPaw/issues/2536)) 或版本更新卡在旧版 ([Issue #2537](https://github.com/agentscope-ai/CoPaw/issues/2537))。
    *   **大文件处理**: Agent 读取长文件时表现不佳，经常截断或不自动续读。
*   **满意点**:
    *   v1.0.0 的发布被积极看待，尤其是后台任务和 Multi-Agent 的增强。
    *   社区对 "Help Wanted" 的响应积极，显示了健康的开源生态。

## 8. 待处理积压
以下重要 Issue 长期未彻底解决或需维护者重点关注：

*   **[Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291)**: 仍有大量 P0/P1 任务待认领，建议持续运营以保持社区热度。
*   **[Issue #2312](https://github.com/agentscope-ai/CoPaw/issues/2312)**: 关于国家超算互联网 API 兼容性问题，虽然标记为 Bug 但进展缓慢，可能影响特定用户群体。
*   **[PR #2576](https://github.com/agentscope-ai/CoPaw/pull/2576)**: 首次贡献者提交的微信渠道修复 PR 仍处于 Open 状态，建议 Reviewer 及时响应以鼓励社区贡献。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这份 **ZeptoClaw 项目动态日报 (2026-03-31)** 基于您提供的 GitHub 数据生成。

---

### 📅 ZeptoClaw 项目日报 (2026-03-31)

#### 1. **今日速览**
ZeptoClaw 项目今日整体呈现**低频高质**的研发动态。过去 24 小时内未观测到代码合并或版本发布，重点活动集中在社区对架构优化的讨论上。虽然仅有 1 条 Issue 更新，但其涉及 CLI 工具链与运行时核心的解耦，具有较高的架构改进信号。项目目前处于功能迭代前的重构规划期，核心代码库暂无变动。

#### 2. **版本发布**
*   **无新版本发布**。今日无 Tag 或 Release 生成，建议关注后续 CLI 重构完成后的 Minor 版本更新。

#### 3. **项目进展**
*   **无已合并 PR**。今日无 PR 进展，代码库暂无向前推进的提交记录。

#### 4. **社区热点**
今日最活跃的讨论为关于 CLI 工具列表机制的重构提案：
*   **[Issue #465](https://github.com/qhkm/zeptoclaw/issues/465) `rfc(cli): tools list should use runtime registry instead of hardcoded array`**
    *   **动态**：新增评论 1 条，持续保持 Open 状态。
    *   **分析**：作者 `stuartbowness` 指出当前 CLI 命令 `zeptoclaw tools list` 与运行时环境存在严重的**状态不一致**问题。目前 CLI 仅读取硬编码的 33 个静态工具列表，导致用户实际运行时加载的插件、MCP 工具和组合工具在查询时“不可见”。这是一个关于**可扩展性架构**的重要讨论，意味着项目正在寻求从静态 CLI 向动态运行时查询的转变。

#### 5. **Bug 与稳定性**
*   **无新增严重 Bug 报告**。
*   *潜在风险提示*：虽然 Issue #465 被标记为 RFC（征求修正意见），但其实质上描述了一个**功能性缺陷**（Functionality Gap）。对于使用了自定义工具的高级用户，目前的 CLI 会产生误导性输出，属于逻辑层面的 UX 问题，目前尚无关联的 Fix PR。

#### 6. **功能请求与路线图信号**
*   **增强扩展性与动态加载能力**：
    *   来源：[Issue #465](https://github.com/qhkm/zeptoclaw/issues/465)
    *   **信号解读**：社区（或核心贡献者）正致力于消除 CLI 层与 Agent 运行时层的信息孤岛。未来的路线图极可能包含对 `ToolRegistry` 的重构，使其成为单一事实来源。这将为 ZeptoClaw 支持更复杂的插件生态系统（如 MCP 工具）铺平道路。

#### 7. **用户反馈摘要**
*   **痛点：工具可见性差**。从 Issue #465 的描述中可以看出，用户（或开发者）发现 CLI 查询结果与实际运行环境不符，特别是“自定义工具和插件在列表中隐形”，这给调试和配置验证带来了困扰。

#### 8. **待处理积压**
*   **需关注的架构决策**：[Issue #465](https://github.com/qhkm/zeptoclaw/issues/465) 虽然刚创建不久，但涉及底层逻辑修改。建议维护者尽快确认是否接受该 RFC，以便社区着手实现将 `cli/tools.rs` 迁移至动态读取 `ToolRegistry` 的方案。

---

**分析师点评**：ZeptoClaw 今日虽无代码产出，但 Issue #465 暴露了当前静态 CLI 实现与动态 Agent 运行时之间的技术债。解决这一问题将是项目迈向成熟插件平台的关键一步。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

这里是 **EasyClaw** (github.com/gaoyangz77/easyclaw) 项目的 **2026-03-31** 动态日报。

---

### 📅 EasyClaw 项目日报 (2026-03-31)

#### 1. 今日速览
EasyClaw 项目今日整体处于**低活跃度、高维护**状态。过去 24 小时内未观察到代码提交或版本发布，但维护者高效地处理了社区反馈，连续关闭了 2 个 Issues。这表明虽然项目开发节奏可能较平缓，但维护者对用户问题的响应速度较快。目前项目焦点似乎集中在解决与其他同类工具的兼容性冲突以及 API 参数配置问题上。

#### 2. 版本发布
*   **无新版本发布**：今日未检测到新的 Release 或 Tag 推送。当前最新版本仍保持为历史版本（根据 Issue 推测用户侧主要使用 V1.7.7）。

#### 3. 项目进展
*   **Issue 清理**：今日成功关闭了 2 个用户反馈强烈的 Issue，推进了问题的解决闭环。
    *   解决了与腾讯 QClaw 的软件冲突问题（#30）。
    *   修复了关于百炼模型切换时的参数错误反馈（#28）。
*   **代码合并**：今日无 PR 合并记录。

#### 4. 社区热点
今日社区（Issues）主要关注以下两个痛点，虽然评论数为 0，但关闭状态表明已得到官方定性：

*   **[冲突问题] rivonclaw和QClaw能不能同时使用 (#30)**
    *   **链接**: [gaoyangz77/rivonclaw Issue #30](https://github.com/gaoyangz77/rivonclaw/issues/30)
    *   **分析**：用户反馈 EasyClaw (rivonclaw) 与腾讯 QClaw 存在底层网络/代理冲突，无法共存。该 Issue 的迅速关闭可能意味着维护者确认了已知限制，或判定为无法支持的非技术性冲突。
*   **[配置错误] [Bug] 百炼套餐模型切换后出现 HTTP 400 InvalidParameter 错误 (#28)**
    *   **链接**: [gaoyangz77/rivonclaw Issue #28](https://github.com/gaoyangz77/rivonclaw/issues/28)
    *   **分析**：用户在从 qwen3.5 切换至 KIMI2.5/GLM5 时遇到输入长度参数校验失败。该问题的迅速关闭可能意味着这是一个配置错误或已在开发版中修复。

#### 5. Bug 与稳定性
根据今日关闭的 Issues，发现以下稳定性挑战：

*   **🔴 严重 (P0) - 软件共存冲突 (Issue #30)**
    *   **描述**：EasyClaw 与 QClaw 同时运行会导致双方网络连接中断。
    *   **状态**：已关闭。需关注是否有修复方案或仅作为“已知限制”文档化。
*   **🟡 中等 (P1) - API 参数校验失败 (Issue #28)**
    *   **描述**：V1.7.7 版本在切换非默认模型（如 KIMI2.5）时，触发 `HTTP 400 InvalidParameter`，提示输入长度范围错误。
    *   **状态**：已关闭。可能涉及不同模型 API 对上下文窗口（Context Window）限制的处理差异。

#### 6. 功能请求与路线图信号
*   **多模型适配优化**：从 Issue #28 可以看出，用户有强烈的跨模型使用需求（从通义千问切换至 Kimi/GLM）。这暗示项目需要增强对不同 LLM 提供商 API 参数的自动适配能力，特别是针对 Input Length 的自动裁剪或映射机制。

#### 7. 用户反馈摘要
*   **真实痛点**：
    1.  **互斥性**：用户工作流中常需同时运行多个 AI 辅助工具，当前 EasyClaw 的独占模式影响了用户体验。
    2.  **模型切换门槛**：用户期望无缝切换模型，但目前切换后需要处理底层报错（如 Token 长度限制），说明“开箱即用”的体验还有提升空间。

#### 8. 待处理积压
*   **暂无明显积压**：今日所有活跃更新的 Issues 均已被关闭，目前暂无长期未响应的“僵尸”Issue 出现在今日的动态中。建议持续关注后续是否有新增未处理的 Bug 报告。

---
*分析师注：虽然今日无代码变动，但 Issue 处理效率较高，建议后续关注 Release Note 以确认针对 #28 的修复是否正式发布。*

</details>