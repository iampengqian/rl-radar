# OpenClaw 生态日报 2026-06-13

> Issues: 500 | PRs: 479 | 覆盖项目: 13 个 | 生成时间: 2026-06-12 22:27 UTC

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

# 📊 OpenClaw 项目动态日报 (2026-06-13)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 统计周期：过去 24 小时

## 1. 今日速览

OpenClaw 项目今日保持了极高的社区热度与开发活跃度，24 小时内共有 **500 条 Issue 更新**（新增/活跃 396 条，关闭 104 条）和 **479 条 PR 更新**（待合并 356 条，合并/关闭 123 条）。项目在今日正式发布了 `v2026.6.6` 及其 Beta 版，**核心亮点在于全方位强化了安全边界机制**。社区层面，Gateway 内存泄漏、`memory_search` 索引崩溃、消息重复等严重 Bug 引发了大量讨论，同时多智能体协作、Slack/Telegram 等渠道的富媒体支持也是用户强烈期盼的方向。整体来看，项目正处于功能快速迭代与安全/稳定性加固并行的关键阶段。

## 2. 版本发布

今日发布了 2 个新版本：[`v2026.6.6`](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6) 和 [`v2026.6.6-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.6.6-beta.2)。

**核心更新内容：**
两个版本的 Release Notes 高度一致，属于安全与边界的重大加固版本。
*   **全方位安全边界收紧**：修复了多个安全隔离漏洞。
*   **关键修复领域**：
    *   **Transcripts (对话记录)** 与 **Sandbox binds (沙箱绑定)**
    *   **Host environment inheritance (宿主环境变量继承)** 与 **MCP stdio**
    *   **Codex HTTP access** 与 **Native search policy (本地搜索策略)**
    *   **Elevated sender checks (提权发送者检查)** 与 **Deleted-agent ACP bypasses (已删除代理的 ACP 绕过漏洞)**
    *   **Loopback tools (环回工具)**、**Discord moderation (Discord 审核机制)** 及 **Teams group actions (Teams 群组行为)**
    *   涉及 `exec` 工具的底层执行边界。

**迁移与升级注意事项**：
这是一次**强安全修复版本**。对于依赖特定环境变量透传、沙箱挂载机制或在 Discord/Teams 等渠道运行 OpenClaw 的用户，升级后可能会因为安全策略的严格化导致部分原有工作流（尤其是涉及权限提权或跨域访问的操作）被拦截。建议在升级生产环境前，仔细测试 MCP 配置及沙箱环境的工作流。

## 3. 项目进展

今日合并及关闭了 123 个 PR/Issues，项目在多个核心子系统上取得了实质性进展：

*   **内存与记忆系统修复**：合并了 PR [#92507](https://github.com/openclaw/openclaw/pull/92507) 和关闭了相关 Issue，修复了原子化重新索引期间内存元数据丢失的关键问题。此外，[#92524](https://github.com/openclaw/openclaw/pull/92524) 修复了混合搜索中纯文本关键词结果被误剔除的 Bug，显著提升了 `memory_search` 的召回率。
*   **沙箱安全性**：PR [#91791](https://github.com/openclaw/openclaw/pull/91791)（及相关后续修复）成功合并，阻止了沙箱启动提示回退到不安全的宿主全局 npm 路径，防止了潜在的路径提权攻击。
*   **渠道与消息集成**：修复了飞书多机器人群聊中 @mention 识别失败的问题 ([#40782](https://github.com/openclaw/openclaw/pull/40782))，并优化了 Telegram TTS 文本闪烁删除的问题 ([#83988](https://github.com/openclaw/openclaw/pull/83988) 状态活跃，待合并)。

## 4. 社区热点

今日社区讨论最热烈的问题集中在**安全性、核心系统稳定性和跨平台体验**上：

1.  **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (👍 1, 评论 32)**：**工具调用间的内部文本泄露到了 Slack/iMessage 等消息渠道**。用户强烈抗议 Agent 的内部处理错误日志、思维过程作为正式消息发送给了最终用户。这是一个严重的安全与体验双杀问题，目前仍悬而未决。
2.  **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) (👍 2, 评论 25)**：**请求提供预编译的 Android APK**。由 AI 助手代为提交的 Issue，反映出社区对 OpenClaw 移动端伴随 App 的强烈需求，目前仍无预编译包。
3.  **[Issue #32473](https://github.com/openclaw/openclaw/issues/32473) (👍 5, 评论 17)**：**Web 控制台强制要求 HTTPS 导致 VPS 用户无法登录**。在 Hostinger 等使用 Docker 的 VPS 环境下，由于缺乏安全上下文导致无法获取设备身份，阻碍了正常使用。
4.  **[Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (👍 0, 评论 17)**：**引入分层 Bootstrap 加载机制**。为了解决大型工作区浪费 LLM Token 的问题，提议按需加载配置文件，引发了关于上下文窗口管理的深度架构讨论。

## 5. Bug 与稳定性

近期报告的 Bug 多集中在**内存管理、会话死锁和状态丢失**，部分严重问题已引发崩溃：

*   **[P0] 严重内存泄漏导致 OOM 崩溃**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 报告网关进程的 RSS 内存从 350MB 在几天内飙升至 15.5GB，最终被系统 OOM Killer 杀死。目前暂无对应修复 PR，**严重威胁生产稳定性**。
*   **[P0] `memory_search` 失效**：[Issue #91778](https://github.com/openclaw/openclaw/issues/91778) 指出自 `v2026.6.1` 以来，向量搜索的元数据丢失，导致所有智能体“失明”。（注：今日 PR [#92507](https://github.com/openclaw/openclaw/pull/92507) 及 [#92538](https://github.com/openclaw/openclaw/pull/92538) 可能已着手修复此问题）。
*   **[P0] 消息重复发送**：[Issue #88951](https://github.com/openclaw/openclaw/issues/88951) 报告升级到 5.27 版本后，Bot 的回复会重复 2-4 次。
*   **[P1] Cron 任务环境变量丢失**：[Issue #31583](https://github.com/openclaw/openclaw/issues/31583) 指出 `exec` 工具无法继承技能配置中的环境变量，导致注入密码等操作失败。
*   **[P1] 180秒压缩超时死循环**：[Issue #92043](https://github.com/openclaw/openclaw/issues/92043) 指出长上下文压缩一旦超过 180 秒，每次会话都会在同一个地方失败，缺乏断点续传机制。

## 6. 功能请求与路线图信号

从活跃的 Feature Request 中，我们可以窥见 OpenClaw 下一步可能的演进方向：

*   **深度集成 Slack 富文本**：[Issue #12602](https://github.com/openclaw/openclaw/issues/12602) 要求支持 Slack Block Kit。结合正在讨论的 [Issue #33413](https://github.com/openclaw/openclaw/issues/33413)（在 Slack 中展示工具运行进度），OpenClaw 的 Slack 体验有望迎来史诗级增强。
*   **硬性策略 Hook (Hard Gates)**：[Issue #13583](https://github.com/openclaw/openclaw/issues/13583) 要求在金融/安全场景下，Agent 必须在**代码层面（而非提示词层面）**强制调用特定工具后才能输出结果。这是企业级安全合规的强烈信号。
*   **动态模型发现**：[Issue #10687](https://github.com/openclaw/openclaw/issues/10687) 要求彻底动态化模型选择（特别是 OpenRouter），以替代当前静态写死的方式。
*   **潜在实现进度**：今日的 PR [#91632](https://github.com/openclaw/openclaw/pull/91632)（工具搜索目录模式）和 PR [#92243](https://github.com/openclaw/openclaw/pull/92243)（添加 CoreWeave Serverless 推理提供商）表明项目正在积极优化 Token 开销和扩展模型提供商生态。

## 7. 用户反馈摘要

从 Issue 详情中提炼出的真实用户痛点如下：
*   **安全与环境配置痛苦**：用户在将 OpenClaw 部署到 Docker 或无 HTTPS 的 VPS 时频频受阻（如设备身份校验失败、沙箱路径映射错误 [Issue #31331](https://github.com/openclaw/openclaw/issues/31331)）。
*   **多渠道一致性体验差**：Agent 的内部沉思和错误信息（如“我无法执行此操作”）经常直接发送给用户 [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)。
*   **多会话/多智能体协调脆弱**：当从 Telegram 发起会话重置时，TUI 客户端不刷新 [Issue #38966](https://github.com/openclaw/openclaw/issues/38966)）；子智能体完成后，父会话经常假死 [Issue #47975](https://github.com/openclaw/openclaw/issues/47975)）。
*   **上下文 Token 浪费严重**：高级用户对每次会话加载冗长且未使用的工具 Schema 感到不满，认为是在白白烧钱（约 3500 tokens/会话）[Issue #14785](https://github.com/openclaw/openclaw/issues/14785)）。

## 8. 待处理积压

以下高影响力/长期悬挂的问题需要核心 Maintainer 尽快介入：

*   **内存泄漏顽疾**：[Issue #91588](https://github.com/openclaw/openclaw/issues/91588) 的网关内存泄漏问题导致服务需频繁重启，目前标记为 `needs-maintainer-review`。
*   **对话错位 Bug**：[Issue #32296](https://github.com/openclaw/openclaw/issues/32296) 中 Agent 经常回复“上一句”的内容，导致答非所问，严重影响对话体验。
*   **设备授权死锁**：[Issue #74484](https://github.com/openclaw/openclaw/issues/74484) 描述了 CLI 由于权限不足无法批准网关配对请求，导致死锁，设备完全无法配对。
*   **危险命令黑名单支持**：[Issue #6615](https://github.com/openclaw/openclaw/issues/6615) (👍 7) 提出的 `exec-approvals` 黑名单需求悬而未决，这在防误操作场景下极为关键。

---

## 横向生态对比

以下是为您整理的 2026 年 6 月 13 日个人 AI 助手与自主智能体开源生态横向对比分析报告。

### 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**从“单一对话工具”向“多模态、多渠道、高自主性操作系统”跨越的爆发期**。各项目普遍将**接入通讯渠道**（如 WhatsApp、Slack、Discord、微信）和**接管物理电脑**作为核心演进方向；底层架构上，为解决 Token 消耗和执行效率瓶颈，向**多 Agent 编排、沙箱安全隔离和 MCP (Model Context Protocol) 标准化工具链**迁移已成为行业共识。然而，伴随高自主性而来的是频发的内存溢出、上下文断裂和安全边界失控，生态整体在“狂奔迭代”与“稳定性重构”之间艰难平衡。

---

### 2. 各项目活跃度对比

| 项目名称 | Issues 活跃/更新 | PR 活跃/更新 | Release 情况 | 健康度与稳定性评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (396开/104关) | 479 (356待/123合) | `v2026.6.6` 及 beta | ⚠️ **高负载/风险期**。迭代极快，但存在 P0 级网关 OOM 和内存索引崩溃，安全收紧可能导致存量工作流失效。 |
| **IronClaw** | 50 (33开/17关) | 46 (25待/21合) | 无 (主干推进) | 🟢 **健康/重构期**。双轨并行，Reborn 异步引擎落地，大量端到端测试引入，WebUI 快速打磨。 |
| **CoPaw** | 23 (16开/7关) | 27 (16待/11合) | 无 (内部转 1.1.12b1)| ⚠️ **阵痛期**。向 AgentScope 2.0 迁移导致前端渲染和多渠道兼容性出现短期回归（P0 级内存飙升）。 |
| **ZeroClaw** | 50 (47开) | 50 (45待/5合) | **`v0.8.0`** (架构大更新) | 🟡 **爆发期/需控险**。迎来单进程多 Agent 架构，社区活跃度飙升，但随之暴露 WSL2 内存泄漏等 S1 级阻断 Bug。 |
| **Hermes Agent**| 50 (45开/5关) | 50 (42待/8合) | 无 | 🟡 **适配期**。重度投入第三方模型适配与桌面端体验，但存在高危 RCE 漏洞和上下文压缩泄漏痛点。 |
| **NanoBot** | 6 (3开/3关) | 29 (20待) | 无 | 🟢 **健康/蓄力期**。聚焦底座打磨，推进架构解耦与安全防护，Python SDK 扩展吸引二次开发。 |
| **PicoClaw** | 6 (5开/1关) | 14 (11待/3合) | Nightly v0.2.9 | 🟢 **稳健迭代**。专注 WebSocket 生命周期和多通道解耦，演进路线清晰。 |
| **NanoClaw** | 4 活跃 | 11 活跃 | 无 | 🟡 **架构跃迁期**。致力于企业级安全加固（防逃逸），但“静默失败”导致体验受阻。 |
| **LobsterAI** | 1 关闭 (历史) | 11 合并 | `2026.6.12` (发版合并) | 🟢 **体验收尾期**。高频合并防数据丢失 PR，Computer Use 与多模态分享功能确立。 |
| **NullClaw** | 1 活跃 | 3 待合并 | 无 | 🟢 **平稳期**。专注底层健壮性，面临 Ollama 本地模型解析断点问题。 |
| **Moltis** | 低活跃 | 1 待合并 | 无 | 🟢 **沉淀期**。聚焦核心通讯网关（WhatsApp）连通性与极速 STT 引擎集成。 |

*(注：TinyClaw 与 ZeptoClaw 过去 24 小时无活动，暂不列入对比)*

---

### 3. OpenClaw 在生态中的定位
*   **绝对规模领导者**：单日近 500 条 Issue 和 479 条 PR 的吞吐量远超生态内其他项目（如 ZeroClaw、IronClaw），具备最庞大的社区基盘和功能验证场景。
*   **极致的安全与边界先行者**：今日发布的 `v2026.6.6` 彰显了其企业级野心，相较于 NanoBot 或 PicoClaw 在局部修补沙箱逃逸，OpenClaw 直接在宿主环境变量继承、MCP stdio、Discord/Teams 群组行为等全域实施了最严苛的权限收紧（如 Hard Gates 代码级拦截）。
*   **高复杂度带来的稳定性阵痛**：与 LobsterAI 等专注 UI/UX 体验的项目不同，OpenClaw 庞大的网关架构正遭受 P0 级内存泄漏（15.5GB OOM）和向量检索失效的折磨。其技术路线偏向“大而全的吞吐”，但需要警惕生产环境的崩溃风险。

---

### 4. 共同关注的技术方向
1.  **长上下文压缩与记忆管理**
    *   *涉及项目*：OpenClaw, NanoBot, Hermes Agent, CoPaw。
    *   *行业诉求*：LLM 原生的上下文窗口限制与昂贵的 Token 成本，迫使项目自研“记忆归档”和“轮次后整合”。但这导致了大面积的“短期失忆”、“最新消息被清空”或“180秒压缩死循环”。如何实现无损、无干预的上下文裁剪是当前最大技术瓶颈。
2.  **多渠道网关与富媒体隔离**
    *   *涉及项目*：OpenClaw, IronClaw, PicoClaw, Moltis, Hermes Agent。
    *   *行业诉求*：AI 正在全面接管 IM 平台。但随之而来的是“内部思考过程泄漏到 Slack”、“WhatsApp 隐私消息静默丢弃”以及“Base64 污染会话记录”。跨平台的消息时序、格式序列化（Marshal/Unmarshal）容错成为必修课。
3.  **多 Agent 编排与独立沙箱运行**
    *   *涉及项目*：ZeroClaw (v0.8.0), OpenClaw, CoPaw, NanoBot。
    *   *行业诉求*：单体 Agent 已无法满足复杂工作流。ZeroClaw 重构了多 Agent 独立工作空间；CoPaw 迁移至 AgentScope 2.0；同时 NanoClaw 和 NanoBot 都在拼命修复路径越权、符号链接逃逸等底层安全问题。
4.  **严格的 API 兼容性与工具调用闭环**
    *   *涉及项目*：NanoBot, Hermes Agent, LobsterAI, ZeroClaw。
    *   *行业诉求*：接入第三方模型（如 MiniMax, Gemini, Ollama）时，由于各家对 `tool_call_id` 和函数返回序列的严格度不同，经常导致 400 报错或进入死循环。

---

### 5. 差异化定位分析
*   **全栈大管家**：**OpenClaw** 和 **Hermes Agent**。不仅管对话，还要接管系统环境（Cron 任务、VPS 部署、Docker 宿主绑定），强调“重度调度”，但在体量增大后显得笨重。
*   **通讯枢纽大脑**：**PicoClaw** 和 **Moltis**。极其轻量化，专注于做各大 IM（Telegram/WhatsApp/Matrix）背后的消息路由中枢与接入口。
*   **企业级安全与可观测性**：**IronClaw** 与 **NanoClaw**。侧重于细粒度权限审批（如 Approval Gates）、审计日志（Audit Webhooks）和防容器逃逸（`cap-drop`），面向多租户和 DevOps 自动化。
*   **桌面端体验与多模态**：**LobsterAI** 和 **CoPaw**。重点发力 Computer Use（接管鼠标键盘）、草稿防丢失防抖、TTS 语音驱动和多模态模型降级路由，产品形态更像传统的“超级助理客户端”。

---

### 6. 社区热度与成熟度分层
*   **第一梯队：狂飙期（功能大版本爆发）**
    *   *代表项目*：**ZeroClaw** (发布 v0.8.0), **OpenClaw** (发布 v2026.6.6)。
    *   *特征*：处于架构质变期，Issue 讨论量和 PR 堆积极高，但也面临严重的回归 Bug（OOM、阻断崩溃），需要警惕直接用于生产。
*   **第二梯队：打磨与阵痛期（还技术债）**
    *   *代表项目*：**IronClaw**, **CoPaw**, **Hermes Agent**。
    *   *特征*：正在向 2.0 架构或 AgentScope 迁移，主要精力在修前端的渲染 Bug、模型兼容回归和静默失败问题。合并率较高。
*   **第三梯队：稳健沉淀期（高质量迭代）**
    *   *代表项目*：**NanoBot**, **LobsterAI**, **PicoClaw**, **NanoClaw**。
    *   *特征*：PR 提交精准指向特定问题（如防抖、生命周期 Hook、容错提升）。正在扎实理顺底层逻辑（如 SDK 升级、通道解耦），代码质量较高。

---

### 7. 值得关注的趋势信号
1.  **Computer Use (电脑接管) 成为个人助手标配**：LobsterAI 等项目已上线接管 UI 的 MVP 版本。这意味着 AI 助手正在从“仅提供文本建议”向“拥有物理执行权（模拟点击/键盘）”进化。
2.  **静默失败成为众矢之的**：NanoClaw 和 OpenClaw 的社区反馈表明，用户对“超时卡死”、“额度耗尽假装成功返回 200”零容忍。未来 Agent 框架必须建立强一致性的异常抛出机制和 UI 强反馈。
3.  **“代为思考”的显式隔离**：OpenClaw 遭到强烈抗议的“将底层报错日志发给用户”事件说明，Agent 的内心独白与外部输出必须在系统级彻底隔离，暴露内部状态会严重破坏用户信任。
4.  **开源供应链安全收紧**：NanoClaw 提出“NPM 包 3 天发布期校验”防投毒，IronClaw 引入 Dependency Review。表明智能体生态在大量调用外部脚本和工具时，正面临严峻的供应链安全挑战。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot (HKUDS/nanobot) 项目动态日报**
**报告日期**: 2026-06-13

### 1. 今日速览
NanoBot 项目在过去 24 小时内展现出极高的研发活跃度与社区生命力，单日 PR 更新量达到 29 个（其中 20 个处于待合并状态），Issues 活跃度为 6 个（新开 3 个，关闭 3 个）。当前开发重心明显聚焦于**内存管理优化、系统安全加固、可观测性（审计模块）以及配置/WebUI 体系的解耦与完善**。尽管今日无新版本发布，但从待合并的高质量代码库来看，项目正为下一个重大迭代进行密集的代码整合与测试。

### 2. 版本发布
**今日无新版本发布。**

---

### 3. 项目进展
今日项目在架构解耦、安全防护和测试覆盖率上取得了重大进展。合并/关闭的 9 个 PR 主要清除了技术债务并修复了核心运行逻辑：

*   **架构清理与重组**：PR [#4294](https://github.com/HKUDS/nanobot/pull/4294) 将桌面端应用从核心主仓库中剥离，转移至独立私有仓库，标志着 NanoBot 正在理清其开源边界，将核心仓库专注于 Runtime、WebUI 及后端 API。
*   **多 Agent 运行修复**：PR [#4304](https://github.com/HKUDS/nanobot/pull/4304) 修复了定时任务派生子 Agent 时的生命周期管理问题，确保主任务在子 Agent 异步任务完成前保持阻塞，避免了任务流失。
*   **审计模块演进**：围绕 Agent 行为可观测性，今日连续提交了多个版本的审计 PR（#4318, #4319），最终沉淀为目前待合并的优化版本 PR [#4320](https://github.com/HKUDS/nanobot/pull/4320)。
*   **历史问题闭环**：关闭了包括 Issue [#4203](https://github.com/HKUDS/nanobot/issues/4203) 和 [#4006](https://github.com/HKUDS/nanobot/issues/4006) 在内的顽固 Bug，彻底解决了「孤立工具结果」破坏 API 请求合规性的问题。

---

### 4. 社区热点
今日讨论最为聚焦的领域是**上下文空间溢出与对话一致性**，引发了开发者的热烈探讨：

*   **🔥 上下文窗口与短时记忆丢失**：Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044)（5 条评论）和 Issue [#4307](https://github.com/HKUDS/nanobot/issues/4307) 揭示了一个高度痛点：当系统提示词过长或处于多轮高负载对话时，Agent 的「轮次后整合」机制会错误地归档刚刚交付的消息，导致 Agent 「失忆」。用户社区对此反馈强烈，要求重构 `context_window_tokens` 的触发时机。
*   **多自定义模型提供商**：Issue [#4305](https://github.com/HKUDS/nanobot/issues/4305) 探讨了支持多个 Custom/OpenAI 模型提供商的需求，反映出重度用户在构建复杂工作流时，对模型负载均衡和路由分配的强烈诉求。

---

### 5. Bug 与稳定性
今日报告的缺陷主要集中在内存处理和 API 兼容性上，按严重程度排序如下：

1.  **【严重】长对话后 Agent 交付消息被清除** (Issue [#4307](https://github.com/HKUDS/nanobot/issues/4307))：在 40k Token 限制下，长对话触发后置整合时会清空 Agent 自身的回复，导致用户无法引用刚收到的信息。**修复状态**：暂无直接修复 PR，但社区已定位 Root Cause。
2.  **【中等】OpenAI 兼容接口 Token 统计全为零** (Issue [#4309](https://github.com/HKUDS/nanobot/issues/4309))：`/v1/chat/completions` 端点硬编码了零 Token 返回，严重影响了基于 Token 计费或限流的下游应用。**修复状态**：暂无 PR，但定位到 Agent 循环已追踪真实消耗，仅需端点暴露。
3.  **【中等】Agent 短期记忆断链** (Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044))：`SOUL.md` 和 `MEMORY.md` 挤压了可用上下文，导致对话线程中断。**修复状态**：有待合并的 PR [#4315](https://github.com/HKUDS/nanobot/pull/4315)（忽略畸形历史记录）和 PR [#4256](https://github.com/HKUDS/nanobot/pull/4256)（保持游标单调）正在尝试从底层修复此类内存读写问题。

---

### 6. 功能请求与路线图信号
结合社区反馈与当前密集的待合并 PR，下一个版本的路线图已十分清晰：

*   **TTS（文本转语音）多渠道支持**：PR [#4316](https://github.com/HKUDS/nanobot/pull/4316) 提出集成 OpenAI、Groq 及 ElevenLabs 语音引擎，并赋予 Agent 自主决定何时发音的能力。这预示着 NanoBot 正向多模态/语音助手的实战场景迈进。
*   **Agent 行为可观测性体系**：PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) 引入 `tools.audit`，支持 loguru、Webhook 等 4 种传输方式记录工具调用。结合 WebUI 设置的一致性优化 (PR [#4313](https://github.com/HKUDS/nanobot/pull/4313))，表明项目在企业级可控性上迈出一大步。
*   **Python SDK 深度扩展**：PR [#4296](https://github.com/HKUDS/nanobot/pull/4296) 极大扩充了 Python SDK 的运行时控制能力，提供了稳定的会话和内存管理接口，表明 NanoBot 正在积极吸引二次开发者。

---

### 7. 用户反馈摘要
从今日的 Issues 和 PR 描述中，可以提炼出以下真实用户痛点：
*   **痛点 1：本地化部署的上下文焦虑**。用户喜欢丰富的系统配置（SOUL.md等），但受限于本地运行的显存/上下文限制，一旦多轮对话累积，Agent 就会「失忆」或「丢弃最新回复」。用户呼吁更智能的内存压缩而非粗暴的截断。
*   **痛点 2：OpenAI API 协议的严格合规性**。部分用户使用 NanoBot 对接严格的闭源大模型 API，发现由于内部消息序列未正确配对 `tool_call_id`，导致直接被 API 拒绝服务，这对系统的消息规范化提出了高要求。
*   **痛点 3：运行时的鲁棒性不足**。外部传入畸形的多媒体附件或错误的分页参数，曾导致 Agent 直接报错中断。社区开发者（如 @yu-xin-c）对此提交了系列防御性编程 PR（#4311, #4312），侧面反映了生产环境中边界异常频发。

---

### 8. 待处理积压（需维护者重点关注）
以下重要 PR/Issue 处于 Open 状态且涉及底层逻辑，需要核心团队投入精力进行 Review 或排期解决：

*   **核心架构解耦**：PR [#4314](https://github.com/HKUDS/nanobot/pull/4314) 正在切断配置层对工具运行时的依赖，这是个大动作的重构，需尽快 Review 合并以防止后续冲突。
*   **工作区安全沙箱逃逸**：PR [#4119](https://github.com/HKUDS/nanobot/pull/4119) 修复了通过相对路径符号链接导致的工作区逃逸漏洞；PR [#4053](https://github.com/HKUDS/nanobot/pull/4053) 阻止了只读根目录的越权写入。这些涉及安全底线的修复应被高优合并。
*   **MCP 协议异步崩溃**：PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) 解决了 `streamableHttp` MCP Server 会话终止时在异步任务上下文中引发的 `RuntimeError` 崩溃，对重度依赖 MCP 工具的用户至关重要。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

这份报告为您呈现开源项目 **Hermes Agent** 在 2026-06-12 至 2026-06-13 期间的 GitHub 动态数据分析。

---

# 📊 Hermes Agent 项目动态日报 (2026-06-13)

## 1. 今日速览
- **高度活跃的开发者生态**：过去 24 小时内，项目迎来了极高的社区参与度，共有 50 条 Issue 更新（45 条新开/活跃，5 条关闭）和 50 条 PR 更新（42 条待合并，8 条合并/关闭）。
- **无新版本发布**：项目目前处于高频迭代与漏洞修复阶段，尚未推送最新的 Release，但主干分支正积极收纳社区修复。
- **核心焦点**：今日的讨论与代码提交主要集中在**多平台 Gateway 稳定性**（如 Telegram 轮询、微信重复回复）、**安全漏洞修复**（RCE 漏洞、SSRF 防护）以及**上下文压缩机制优化**。
- **社区贡献飙升**：大量针对特定平台（如 SELinux 兼容、MiniMax 模型适配）的修复 PR 被提交，显示出项目在多端适配方面正经历阵痛并快速自我修正。

## 2. 版本发布
*今日无新版本发布。建议关注主干分支的频繁合并，预计近期会有 Patch 版本迭代。*

## 3. 项目进展
今日共有 8 个 PR 被合并/关闭，主要推进了桌面端体验和底层会话逻辑的修复：
- **桌面端体验优化**：合并了多个针对 Desktop 应用的修复，包括 [PR #45233](https://github.com/NousResearch/hermes-agent/pull/45233)（优化 Windows 应用控制拦截报错）、[PR #45229](https://github.com/NousResearch/hermes-agent/pull/45229)（修复重新打开时主窗口隐藏的问题）、[PR #45228](https://github.com/NousResearch/hermes-agent/pull/45228)（阻止向已归档会话发送消息）以及 [PR #45227](https://github.com/NousResearch/hermes-agent/pull/45227)（检测并报告更新后的构建失效状态）。
- **底层逻辑推进**：通过 [Issue #33256](https://github.com/NousResearch/hermes-agent/issues/33256) 和 [Issue #45230](https://github.com/NousResearch/hermes-agent/issues/45230) 的关闭，项目成功修复了上下文压缩摘要泄漏到用户聊天框的严重 Bug。

## 4. 社区热点
- **长文本截断历史遗留问题**：[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)（评论数高达 40）。该 Bug 导致 CLI 或 Gateway 在生成较长回复时被强制中断。这反映出社区对 Agent 处理长文本及流式输出稳定性的强烈诉求。
- **无障碍功能请求**：[Issue #26689](https://github.com/NousResearch/hermes-agent/issues/26689)（评论数 10）。一位完全失明的 VoiceOver 用户详细反馈了 Agent 在 macOS 上的 UX 痛点，呼吁增强 TUI 和 GUI 的屏幕阅读器支持，体现了社区对包容性设计的关注。
- **开发者本地构建受阻**：[Issue #41499](https://github.com/NousResearch/hermes-agent/issues/41499)。macOS 开发者反馈由于本地钥匙串包含 Apple 签名身份，导致 Ad-hoc 签名构建失败，该问题引发了多位开发者的共鸣。

## 5. Bug 与稳定性
今日报告了大量关键 Bug 和崩溃问题，整体稳定性面临跨平台和第三方模型适配的挑战：

**🔴 高危/安全性问题**
- **潜在 RCE 漏洞**：[Issue #45160](https://github.com/NousResearch/hermes-agent/issues/45160) 指出 TUI Gateway 中存在 `shell=True` 的命令执行调用，存在严重的远程代码执行风险。
- **SMTP 网关安全/连接失败**：[Issue #11842](https://github.com/NousResearch/hermes-agent/issues/11842) 指出邮件网关在 465 端口强制使用 STARTTLS 而非 SMTP_SSL。
- **Cron 环境变量污染**：[Issue #37968](https://github.com/NousResearch/hermes-agent/issues/37968) 暴露出 Gateway 审批机制中的 CVSS 7.0 安全漏洞。

**🟠 严重功能性 Bug**
- **会话恢复全面失效**：[Issue #44022](https://github.com/NousResearch/hermes-agent/issues/44022)。用户在桌面端或 TUI 恢复旧聊天时直接崩溃，提示 "No LLM provider configured"。
- **网关消息幽灵回复**：[Issue #44497](https://github.com/NousResearch/hermes-agent/issues/44497)。微信用户发送单条消息时，Agent 会基于不同上下文生成并发送两条独立回复。
- **桌面端渲染崩溃**：[Issue #41693](https://github.com/NousResearch/hermes-agent/issues/41693)。`@assistant-ui/store` 抛出越界错误导致整个 UI 卡死需重载。

## 6. 功能请求与路线图信号
基于今日的 Issue 和 PR，推测以下方向将被纳入近期的迭代路线图：
- **Cron 调度与提供商模型解耦**：社区接连提交了 [Issue #45245](https://github.com/NousResearch/hermes-agent/issues/45245) 及三个相似修复 PR（[PR #45244](https://github.com/NousResearch/hermes-agent/pull/45244), [PR #45248](https://github.com/NousResearch/hermes-agent/pull/45248)），修复定时任务路由到错误 API 的痛点。
- **依赖安全审查闸门**：[Issue #45041](https://github.com/NousResearch/hermes-agent/issues/45041) 提议在 PR 流程中引入 GitHub Dependency Review 动作，以拦截易受攻击的依赖项，预计很快会被官方采纳。
- **桌面端会话管理升级**：[Issue #45103](https://github.com/NousResearch/hermes-agent/issues/45103) 提议在侧边栏增加 AI 生成的会话悬停摘要卡片，目前已有对应草稿 PR，属于非常明确的前端体验路线。

## 7. 用户反馈摘要
- **本地模型集成痛点**：用户大量使用 LM Studio、Ollama Cloud、MiniMax 等本地或第三方服务，但遭遇诸如“KV Cache 不刷新”（[Issue #45029](https://github.com/NousResearch/hermes-agent/issues/45029)）、“Ollama 模型名后缀校验失败”（[Issue #45137](https://github.com/NousResearch/hermes-agent/issues/45137)）、“MiniMax-M3 思考标签未剥离”（[Issue #45211](https://github.com/NousResearch/hermes-agent/issues/45211)）等问题，说明提供商适配层需要加强兼容性。
- **安全机制误报阻碍自定义**：用户反馈启动扫描器将自定义的 Agent 角色配置文件 `SOUL.md` 误报为 C2 框架并拦截（[Issue #44631](https://github.com/NousResearch/hermes-agent/issues/44631)），引起重度定制用户的反感。
- **平台功能隐藏过深**：如 Telegram 中开启了 TTS 后 `/voice` 指令因优先级限制不显示（[Issue #45175](https://github.com/NousResearch/hermes-agent/issues/45175)），用户误以为功能损坏。

## 8. 待处理积压
- **环境隔离未解决**：[Issue #17415](https://github.com/NousResearch/hermes-agent/issues/17415) 请求在网关角色会话之间增加“受信任的内部触发器”，自 4 月底开放以来仍未被完全解决，这对于复杂的多 Agent 编排至关重要。
- **Telegram 多模态缺失**：[Issue #41366](https://github.com/NousResearch/hermes-agent/issues/41366) 提到 Telegram 视频消息虽被缓存但从未传递给视觉工具链，导致多模态能力在移动端失效，亟需维护者介入评估。

---
*数据来源：GitHub Hermes Agent (NousResearch/hermes-agent) 过去 24 小时公开数据。祝您开源探索愉快！*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the analytical daily report for the PicoClaw project based on the provided GitHub data.

---

# PicoClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持了**极高的开发活跃度与社区参与度**，各项指标均显示出健康的迭代速度。
- **工作流吞吐量**：共有 14 个 PR 发生状态变更，其中 11 个待合并，3 个顺利合入主线。同时处理了 6 个 Issue（5 新开，1 关闭）。
- **迭代节奏**：项目如期推送了 `v0.2.9` 的 nightly 自动构建版本，核心代码库持续高频演进。
- **生态建设**：开发者正积极拓展通信渠道（Delta Chat gateway）和底层协议，且社区对多模态（图像模型路由）及权限分级等企业级需求表现出了强烈的关注。

## 2. 版本发布
- **[nightly] Nightly Build v0.2.9-nightly.20260612.413d3749**
  - **更新内容**：包含截至今日的所有最新代码提交，涵盖了 WebSocket 生命周期修复、通道配置解析错误处理等多项底层优化。
  - **迁移与兼容性**：此为自动化构建的测试版本，**可能存在不稳定现象**。生产环境部署需谨慎，建议在测试环境中验证通道解析及 JSON 序列化相关的改动。
  - **完整变更日志**：[v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 3 个 Pull Requests 被合并/关闭，大幅提升了多通道架构的健壮性：

1. **架构解耦重构**：[#2551 refactor: standardize channel identification...](https://github.com/sipeed/picoclaw/pull/2551) 
   - *意义*：成功将通道名称（配置键）与通道类型（提供商 ID）解耦。允许同一提供商（如 Telegram）运行多个实例，极大提升了消息总线和 Agent 调度逻辑的可靠性。
2. **通道配置解析加固**：[#3113 fix(channels): check json marshal/unmarshal errors...](https://github.com/sipeed/picoclaw/pull/3113)
   - *意义*：修复了通道配置中 `json.Marshal` 和 `Unmarshal` 错误被静默丢弃的问题，防止因配置序列化失败导致的幽灵 Bug。
3. **工具调用容错提升**：[#3112 fix(tools): handle json.Marshal error in toolloop...](https://github.com/sipeed/picoclaw/pull/3112)
   - *意义*：修复了工具调用参数序列化失败导致历史对话数据丢失的隐患。

## 4. 社区热点
- **WebSocket 客户端生命周期完善**：Issue [#2984 Add explicit turn completion signal for Pico WebSocket clients](https://github.com/sipeed/picoclaw/issues/2984)（👍: 2）。
  - *诉求*：外部 WebSocket 客户端在 Agent 处理完毕后缺乏明确的结束信号（如 `turn.done`）。这反映了深度集成用户对构建可靠 Pico Protocol 客户端的迫切需求。
  - *进展*：该诉求已由 PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) 实现并提交审查，补全了请求生命周期的最后一块拼图。
- **Agent 进化模式的 Token 消耗异常**：Issue [#3012 Continuous consumption of tokens every minutes when evolution is enabled](https://github.com/sipeed/picoclaw/issues/3012)
  - *诉求*：用户反馈开启 Evolution 后，即使处于空闲状态，系统仍在持续消耗 Token。这是关乎运行成本的核心痛点，目前该 Issue 已被打上 `[stale]` 标签，亟待开发团队介入排查。

## 5. Bug 与稳定性
今日报告了多个影响特定渠道和模型稳定性的 Bug，按严重程度排列如下：

1. 🔴 **高危：Gemini 3.5 Flash 工具执行失败**
   - **Issue**：[#3111 Tool execution fails with Gemini 3.5 Flash](https://github.com/sipeed/picoclaw/issues/3111)
   - **详情**：由于本地响应 Schema 缺少 `thought_signature`，与 Google 最新 Agent 推理要求不兼容，导致直接抛出 `400 Bad Request`。**目前尚无 Fix PR**。
2. 🟡 **中危：图片输入 Base64 污染会话历史**
   - **Issue/PR**：[#3115 Fix inline data URL media extraction for generic tool output](https://github.com/sipeed/picoclaw/pull/3115)
   - **详情**：`read_file` 等普通工具输出的 Base64 字符串被误识别为真实的媒体附件，导致会话历史损坏。**已有对应修复 PR**。
3. 🟡 **中危：Telegram 论坛群组消息回复错乱**
   - **Issue**：[#3110 Telegram adapter ignores message_thread_id in Forum topics](https://github.com/sipeed/picoclaw/issues/3110)
   - **详情**：在开启了 Topics 的超级群组中，Bot 的回复会被错误地发送到 #General 根主题。**目前尚无 Fix PR**。

## 6. 功能请求与路线图信号
从近期的 Feature Request 及开放的 PR 中，可以看出 PicoClaw 的演进方向正聚焦于**企业级权限控制、多模态支持与端侧部署**：

- **多模态路由增强**：PR [#3117 route media turns to image models](https://github.com/sipeed/picoclaw/pull/3117) 引入了媒体轮次的智能路由，结合图像压缩 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964)，预示着视觉处理能力将在下一版本得到大幅强化。
- **Agent 远程管控**：PR [#3118 Add remote Pico WebSocket mode to picoclaw agent](https://github.com/sipeed/picoclaw/pull/3118) 新增了 `--remote` 模式，允许将本地 Agent 轻松挂载到远端中心化节点，释放了分布式部署的潜力。
- **细粒度权限隔离**：Issues [#3114](https://github.com/sipeed/picoclaw/issues/3114) 和 [#3109](https://github.com/sipeed/picoclaw/issues/3109) 强烈要求在 Telegram 等渠道实现按“私聊/群组/频道”的权限分级。考虑到此前关于 Channel 解耦的 PR [#2551] 已合入，此功能的底层架构阻碍已被扫清，极有可能在近期迭代中落地。

## 7. 用户反馈摘要
通过深入分析 Issue 细节，提炼出用户的真实使用体验：
- **真实痛点（成本与安全）**：配置文件中的白名单（`allow_from`）机制过于粗糙，无法满足将 Bot 拉入大型公开群组时的安全收敛（用户担心被恶意调用 `exec` 指令）。同时 Evolution 模式的静默 Token 消耗让用户对成本感到担忧。
- **接入场景多样化**：从用户引入了 Matrix、Delta Chat（PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) ），并探索 NEAR AI Cloud（PR [#2917](https://github.com/sipeed/picoclaw/pull/2917)）等动作来看，高级用户正致力于将 PicoClaw 作为“全平台 AI 中枢大脑”进行深度定制。

## 8. 待处理积压
- ⚠️ **需立即关注的遗留问题**：
  - Issue [#3012 Evolution Token 持续消耗问题](https://github.com/sipeed/picoclaw/issues/3012)：此 Bug 涉及核心计费与资源消耗，且已处于 `stale` 状态，建议维护者立刻重新评估并分配优先级。
  - PR [图像压缩功能 #2964](https://github.com/sipeed/picoclaw/pull/2964) 与 [NEAR AI 提供商 #2917](https://github.com/sipeed/picoclaw/pull/2917)：这两个高价值的 Feature PR 已经分别停滞了 15 天和 22 天，亟待核心团队进行 Code Review 以防贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了极高的社区活跃度，尤其是在底层架构优化与安全防御方面迎来了密集的代码提交。今日共有 11 个新的 Pull Request 提交（包含多个重量级安全加固与架构重构），且有 4 个活跃 Issue 引发了对系统稳定性的深入讨论。尽管项目尚未发布新版本，但贡献者正在积极修补运行时的静默失败 Bug，并推进 SDK 的跨版本升级。整体而言，项目正处于向企业级安全性、高容错性迈进的关键迭代期。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日虽然无 PR 被合并或关闭，但待合并的 11 个 PR 展示了项目即将迎来的重大进展，主要集中在**核心功能扩展**与**系统稳定性修复**：
*   **基础设施与安全加固**：PR [#2748](https://github.com/nanocoai/nanoclaw/pull/2748) 为 Agent 容器引入了 `cap-drop`、`no-new-privileges` 和 `pids-limit`，大幅提升了宿主机的防逃逸与抗拒绝服务能力。
*   **核心 SDK 升级**：PR [#2747](https://github.com/nanocoai/nanoclaw/pull/2747) 将 `@onecli-sh/sdk` 从 0.5.0 大跨度升级至 2.2.1，引入了凭据存根挂载和机器可校验引脚。
*   **系统底层的自愈与容错**：PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) 修复了因损坏的对话记录导致的无限崩溃循环；PR [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) 修复了容器被杀后导致 outbound.db 日志卡死的问题。

## 4. 社区热点
今日社区讨论的焦点集中在 **v2 架构的迁移与多 Agent 群体身份的确认**上：
*   **Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632)**：用户 @arthurkrupa 询问在 v2 版本中旧版 Telegram agent-swarm（多机器人身份）功能的状态，这反映出重度依赖旧版多渠道分发的开发者在进行 v1→v2 迁移时遇到了架构断层，急需官方明确路线图。
*   **Issue [#2711](https://github.com/nanocoai/nanoclaw/issues/2711)**：用户 @jonazri 指出 `create_agent` MCP 工具虽然标记为“仅限管理员”，但实际上未做任何鉴权拦截。该 Issue 暴露了潜在的安全越权风险，引发了关于 Agent 权限隔离边界的讨论。

## 5. Bug 与稳定性
今日报告了多个严重影响用户体验的静默失败与系统挂起 Bug，按严重程度排列如下：

*   🔴 **高危：静默丢失响应与超时** - [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)
    *   **现象**：当两次对话间隔小于 60 秒，或有流式请求未结束时收到新消息，Agent 会静默丢弃响应，导致客户端超时。
    *   **状态**：暂无直接修复 PR，是目前影响最广的通信时序 Bug。
*   🔴 **高危：权限绕过** - [Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711) (见社区热点)
*   🟠 **严重：MCP 工具无超时机制导致会话挂起** - [Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668)
    *   **现象**：单个工具在 SDK turn 中同步运行，若无响应会阻塞心跳更新，导致整个 Agent 会话卡死长达 30 分钟才被系统冷杀。
    *   **状态**：暂无直接修复 PR，需引入单工具级别的超时中断机制。
*   🟡 **中等：预算耗尽时的错误处理** - [Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751) *(今日已关闭)*
    *   **现象**：当 OneCLI 云组织额度耗尽时，网关返回合成的 HTTP 200 消息，Agent 误以为成功，导致用户得不到任何回复。

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 中，可以清晰地看出项目下一阶段的演进信号：
*   **提供商能力解耦与记忆架构**：PR [#2746](https://github.com/nanocoai/nanoclaw/pull/2746)（引入 Host 端注册表以声明 Provider 能力）和 PR [#2745](https://github.com/nanocoai/nanoclaw/pull/2745)（为 Provider 添加可选的持久化记忆脚手架），这两个 PR 表明 NanoClaw 正在为支持具备长期记忆的复杂 AI 智能体铺路。
*   **自动化代码审查工作流**：PR [#2742](https://github.com/nanocoai/nanoclaw/pull/2742) 提交了一个全新的 Recipe（“PR Factory”），旨在通过 Agent 自动拉取 PR Diff、生成测试计划并拉起 Slack 线程。这表明社区正在积极探索利用 NanoClaw 进行 DevOps 自动化。
*   **精细化包管理安全**：PR [#2749](https://github.com/nanocoai/nanoclaw/pull/2749) 提出对 Agent 请求安装的 npm 包执行“3天发布期”校验，防止供应链恶意投毒。

## 7. 用户反馈摘要
根据今日的动态，真实用户的核心痛点集中在**执行环境的不稳定性**和**异常状态缺乏反馈**：
1.  **“静默失败”是最大痛点**：无论是消息去重逻辑错误（#2506），额度耗尽返回假 200（#2751），还是 Signal 的表情回应丢失（#2744），用户极其反感“Agent 假装成功了但实际没执行”。用户强烈要求底层异常能显式抛出或反馈给前端。
2.  **长耗时任务缺乏干预手段**：Issue #2668 暴露出当前系统面对卡死的 MCP 工具束手无策，用户希望能有更细粒度的超时控制，而不是干等 30 分钟。
3.  **多渠道接入适配需要完善**：Discord 附件（#2752）和 Signal 互动（#2744）的 Bug 表明，随着接入平台增多，非文本富媒体数据的解析和宿主传递仍存在不少盲区。

## 8. 待处理积压
*   请维护者优先关注并指派修复 **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506)**（5月16日创建，核心通信时序Bug，至今未有直接 PR 修复，持续困扰用户）。
*   请维护者关注 **[Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668)**（6月1日创建，MCP 工具超时缺陷，严重影响 Agent 正常运转）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# 🐾 NullClaw 项目动态日报（2026-06-13）

> **数据源:** NullClaw (github.com/nullclaw/nullclaw)
> **分析周期:** 过去 24 小时

## 1. 今日速览
在过去 24 小时内，NullClaw 项目整体保持高度活跃的开发状态，但重心偏向于底层架构完善与平台稳定性提升。今日共有 3 个新的待合并代码提交（PR）处于活跃状态，全部由核心贡献者 `vernonstinebaker` 发起，且尚无代码被合并入库。与此同时，社区出现了一个关于本地模型集成的 Bug 反馈（#952），暴露了在对接 Ollama 等本地化方案时的兼容性边缘情况。

## 2. 版本发布
**今日无新版本发布 (0 个 Release)。**

## 3. 项目进展
尽管今日没有 PR 被正式合并，但待处理的 3 个 PR 展现了项目正在向**提升系统鲁棒性和配置灵活性**迈进：
*   **Discord 网关健壮性增强**：[PR #953](https://github.com/nullclaw/nullclaw/pull/953) 修复了 Discord 活动网关套接字关闭及预 HELLO 阶段重连卡死的问题，增加了回归测试覆盖。这将大幅减少因网络波动导致的 Bot 掉线问题。
*   **错误日志处理优化**：[PR #951](https://github.com/nullclaw/nullclaw/pull/951) 修复了 `agent_runner` 在执行失败时错误地将 stderr 初始化日志（如内存计划、MCP 服务器注册信息）当作正常回复发送至频道的逻辑漏洞，提升了异常状态下的用户体验。
*   **配置系统扩展**：[PR #949](https://github.com/nullclaw/nullclaw/pull/949) 将队列模式 (`QueueMode`) 的配置项抽离至 `config_types.zig`，允许用户直接通过 `config.json` 为新会话设置初始队列状态，增强了多会话并发管理的灵活性。

## 4. 社区热点
目前社区正处于“开发推进为主、讨论为辅”的阶段，暂无爆发式讨论热点。今日唯一一条活跃的 Issue 是：
*   🔥 **[Issue #952] Local model using ollama returns incomplete answers**（创建于 06-11，今日有更新）
    *   **链接:** [nullclaw/nullclaw Issue #952](https://github.com/nullclaw/nullclaw/issues/952)
    *   **诉求分析:** 开发者/用户正在尝试使用 Ollama 拉取并运行本地 `gemma` 模型作为 Agent 大脑。反馈指出模型输出无法生成完整的句子。这表明 NullClaw 社区中存在明确的“本地部署/隐私优先”用户群体，且他们正在积极测试与各类开源大模型的对接。

## 5. Bug 与稳定性
今日新增 1 个功能性 Bug，且尚未有对应的修复 PR 提交：
*   🟠 **[P1/中高] 本地模型输出截断问题** - [Issue #952](https://github.com/nullclaw/nullclaw/issues/952)
    *   **详情:** 使用 Ollama 运行 `gemma` 模型时，Agent 的回复被截断，无法输出完整句子。
    *   **分析:** 此类问题通常并非大模型本身的智力问题，而是 **API 响应解析（Stream parsing）逻辑异常**、**Token 限制设置过小** 或 **请求体参数（如 `num_predict` / `max_tokens`）未正确透传** 导致的。急需维护者介入排查 NullClaw 与 Ollama API 交互时的流式数据处理模块。

## 6. 功能请求与路线图信号
*   **配置驱动的会话管理:** 结合今日的 [PR #949](https://github.com/nullclaw/nullclaw/pull/949)，可以看出路线图中包含了对**企业级/多用户高并发场景**的支持。通过将队列模式外部化到配置文件，NullClaw 正在降低运维人员针对不同业务场景（如排队机制优先处理最新还是最旧任务）的定制化成本。
*   **隐私与本地化集成:** 从 Issue #952 可以看出，对接 Ollama 是重点使用场景。预计后续版本会针对本地模型增加特定的适配器或优化参数预设。

## 7. 用户反馈摘要
从现有 Issue 中可以提炼出以下用户痛点：
*   **痛点：开箱即用的本地模型体验存在断点。** 用户倾向于使用 Ollama + Gemma 这种轻量级的本地化方案来驱动 Agent，但在未进行深度参数调优前，直接使用会导致输出质量严重劣化（句子不完整），这会对新手开发者造成“框架不稳定”的错觉。
*   **痛点：错误反馈机制不够优雅。** 此前当 Agent 崩溃时，系统会把底层的初始化日志直接推送到 Discord 等前端渠道（见 [PR #951](https://github.com/nullclaw/nullclaw/pull/951) 的修复背景），这说明用户在使用中曾遭遇 Agent 报错时的“日志洗屏”，期待更干净的错误提示。

## 8. 待处理积压（提醒关注）
*   ⚠️ **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952) 亟待认领:** 此 Ollama Bug 虽为昨日创建，但今日处于活跃状态且尚无评论和修复计划。Ollama 是目前开源 AI 助手领域引流的重要支柱，建议维护者优先跟进测试 `ollama run gemma` 的调用链路。
*   ⚠️ **3 个核心 PR 等待 Review:** 贡献者 `vernonstinebaker` 提交的 #949、#951、#953 均处于 Open 状态且更新于今日。这些 PR 包含了关键的 Bug 修复（如 Discord 断线重连）和架构优化，建议项目 Owner 尽快完成代码审查（Code Review）并予以合并，以保持主干的稳定性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是基于您提供的 GitHub 数据为您生成的 IronClaw 项目 2026-06-13 动态日报：

# IronClaw 项目动态日报 (2026-06-13)

## 1. 今日速览
过去 24 小时，IronClaw 项目整体保持**高活跃度**与**快速迭代**的健康状态，重点聚焦于底层的 Reborn 引擎重构与系统稳定性的打磨。项目今日共处理了 50 条 Issue 和 46 条 PR，其中 **17 个 Issue 被成功关闭，21 个 PR 被合并**，表明核心团队在高效推进代码合并与问题修复。当前开发主线呈现出明显的“双轨并行”特征：一是由核心贡献者 `henrypark133` 和 `serrrfirat` 领衔的**架构优化与 Slack 渠道深度重构**；二是由 `sunglow666` 密集提交的 **WebUI v2 用户体验与 UI 缺陷修复**。

## 2. 版本发布
今日**无**新版本发布。（注：当前存在未合并的发布 PR #3708，预计将在各项 Reborn 架构重构稳定后择机合入主干）。

## 3. 项目进展
今日合并/关闭的核心 PR 显著提升了 Reborn 引擎的健壮性、异步工作流处理能力以及 CI 测试效率：
*   **Reborn 异步工作流完善**：核心 PR [#4811](https://github.com/nearai/ironclaw/pull/4811) (已合并) 解决了运行被审批/授权门阻塞时，新 Slack 消息导致的“静默/无响应” UX 问题。配合 [#4812](https://github.com/nearai/ironclaw/pull/4812) 的 Drain 机制，系统现可自动排队并恢复被阻塞的线程。
*   **关键依赖与安全更新**：[#4826](https://github.com/nearai/ironclaw/pull/4826) (已合并) 快速响应了最新发布的 RUSTSEC 安全漏洞，完成了 postgres 相关依赖的修补，恢复了主干 CI 的正常运行。
*   **测试与 CI 基础设施优化**：[#4769](https://github.com/nearai/ironclaw/pull/4769) (已合并) 引入了 22 个全新的端到端确定性强测试；长期运行的旧网关 UI/CLI 问题修复 PR [#2700](https://github.com/nearai/ironclaw/pull/2700) 与 [#2699](https://github.com/nearai/ironclaw/pull/2699) 也在今日成功落地。

## 4. 社区热点
今日讨论最热烈的问题集中在核心业务逻辑的正确性与前端的交互细节上：
*   **模型保存逻辑缺陷** ([#4703](https://github.com/nearai/ironclaw/issues/4703)，3条评论)：用户 `sunglow666` 报告 NEAR AI 模型选择器错误地保存了 `Display Name` 而非 `Model ID`，导致底层调用逻辑可能混乱，该问题已被快速确认并关闭。
*   **SSO 登录故障** ([#4705](https://github.com/nearai/ironclaw/issues/4705)，2条评论)：本地环境部署 Reborn 时，GitHub、Google 和 NEAR Wallet 的 SSO 流程均失败，反映了当前版本在本地开发和接入时的 OAuth 回调配置存在痛点。
*   **Reborn 线程并发架构设计讨论** ([#4817](https://github.com/nearai/ironclaw/issues/4817) 与 [#4831](https://github.com/nearai/ironclaw/issues/4831)，各1条评论)：贡献者就 DeferredBusy 消息的重新提交入口、批量排空 和架构边界进行了深入的技术探讨，体现了项目对高并发异步任务调度的严谨设计。

## 5. Bug 与稳定性
今日报告了大量 UI 交互与底层状态的 Bug，按严重程度分类如下：

*   **P0 - 核心工作流阻断**：
    *   工具工作流失败导致后续消息乱序 ([#4762](https://github.com/nearai/ironclaw/issues/4762))：LLM 工具调用失败后，破坏了线程的活动状态排序，影响后续对话交互，尚在修复中。
*   **P1 - 状态不一致与逻辑失效**：
    *   推理设置中活动 Provider 显示与实际不符 ([#4697](https://github.com/nearai/ironclaw/issues/4697))。
    *   本地 Ollama 即使在未运行状态也显示连接测试成功 ([#4696](https://github.com/nearai/ironclaw/issues/4696))。
    *   “始终允许”权限跨越线程失效，重复弹窗 ([#4825](https://github.com/nearai/ironclaw/issues/4825))。
*   **P2 - UI/UX 与小缺陷**：
    *   会话链接点击导致页面跳出当前对话 ([#4733](https://github.com/nearai/ironclaw/issues/4733))。
    *   删除正在运行的会话失败时无任何 UI 反馈 ([#4823](https://github.com/nearai/ironclaw/issues/4823))。
    *   Composer 处于 Working 状态时仍可触发 Hover 交互 ([#4725](https://github.com/nearai/ironclaw/issues/4725))。
    *   附件跨会话警告无法清除 ([#4720](https://github.com/nearai/ironclaw/issues/4720)) 及亮色模式下警告难以阅读 ([#4819](https://github.com/nearai/ironclaw/issues/4819))。

## 6. 功能请求与路线图信号
从近两日的 Issue 提交中可以看出清晰的演进路线：
*   **多通道与 Slack 集成深化**：[#4828](https://github.com/nearai/ironclaw/issues/4828) 请求将通道连接状态与出站目标作为 Runtime 上下文暴露给模型，这说明 IronClaw 正在向“多通道智能体”进化，确保 LLM 能“感知”自己的对话环境。
*   **LLM 时间感知**：[#4796](https://github.com/nearai/ironclaw/issues/4796) 提出需要为 LLM 注入当前时间上下文，这对于日历规划、任务追踪等个人助理核心功能至关重要。
*   **可观测性与合规**：[#4822](https://github.com/nearai/ironclaw/issues/4822) 提出需追踪 Engine V2 的 LLM 调用用量，表明产品正在为企业级多租户计量计费铺路。

## 7. 用户反馈摘要
综合近日活跃用户的反馈，当前 IronClaw 的使用体验呈现以下特征：
*   **痛点**：**“状态残留”**是 WebUI 体验的顽疾，如草稿箱在离开后丢失 ([#4724](https://github.com/nearai/ironclaw/issues/4724))、侧边栏“置顶”逻辑仅代表当前活跃会话 ([#4721](https://github.com/nearai/ironclaw/issues/4721))、UI 闪烁 ([#4719](https://github.com/nearai/ironclaw/issues/4719)) 等。这反映出前端状态机在多会话切换时的管理尚不完善。
*   **满意度**：用户对架构调整（如工具调用审批机制的改进）响应积极，Reborn 引擎中“异步任务 drain”机制的快速落地解决了用户被“吞消息”的痛点，获得了架构层面的认可。

## 8. 待处理积压
*   **大型重构 PR 滞留**：由机器人提交的自动发布 PR [#3708](https://github.com/nearai/ironclaw/pull/3708) 已开启近一个月，包含多项破坏性更新（API breaking changes），目前仍在等待最终 QA 验证与合并。
*   **巨型模块拆分**：[#4818](https://github.com/nearai/ironclaw/issues/4818) 指出 `slack_delivery.rs` 已经逼近 4000 行，严重超出架构规范（3000行限制），需要开发者尽快排期进行模块化解耦。
*   **CI 性能瓶颈**：[#4813](https://github.com/nearai/ironclaw/issues/4813) 指出当前的 PR CI 运行缓慢，大型单分片测试拖慢了反馈周期，建议维护者优先处理相关的 Shard 拆分 PR。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI 项目动态日报 (2026-06-13)**

**1. 今日速览**
过去 24 小时内，LobsterAI 展现出极高的开发活跃度与工程推进效率。项目今日成功合并了包含 `2026.6.12` 发版合并在内的 11 个 PR，集中优化了 Computer Use、多媒体处理及内容防丢失等核心体验。值得注意的是，今日有 6 个标记为 `[stale]` 的历史社区 PR 活跃并处于待合并状态，且团队关闭了今年 2 月份遗留的 API 兼容性 Issue，整体项目健康度良好，正处于新版本发布后的快速迭代与收尾阶段。

**2. 版本发布**
*今日无独立 Release Tag 发布，但代码库已主干合并发版分支：*
*   **[PR #2158](https://github.com/netease-youdao/LobsterAI/pull/2158): chore(release): merge release/2026.6.11 into main**
    *   **更新内容**：将 `2026.6.11` 分支合并入 `main` 以准备 `2026.6.12` 版本。本次版本核心亮点包括：新增 Computer Use（电脑接管）MVP 及内置工具包；为 Cowork 提示词新增实时 ASR（语音转写）输入；新增 HTML artifact 公开分享模式选择；增加对图片和 SVG artifact 的分享支持。

**3. 项目进展**
今日共有 11 个 PR 被合并/关闭，项目在多模态交互和用户体验稳定性上迈出坚实一步：
*   **Computer Use 运行时更新**：[PR #2156](https://github.com/netease-youdao/LobsterAI/pull/2156) 将 Computer Use 运行时升级至 1.0.7，更新了 CDN 包的 SHA-256 校验，并在 Helper 中加入了 UIA 面包屑（breadcrumbs）以诊断意外退出问题。
*   **多媒体处理规范化**：[PR #2157](https://github.com/netease-youdao/LobsterAI/pull/2157) 修复了文生图保存图片时的扩展名错误。系统现在会通过文件字节识别真实格式，强制覆盖服务端返回的错误后缀（如 PNG 被存为 .jpg），并补充了对应的回归测试。
*   **语音输入防抖优化**：[PR #2155](https://github.com/netease-youdao/LobsterAI/pull/2155) 修复了 cowork 场景下重复触发实时 ASR 启动请求的竞态问题。
*   **流中断数据保留**：[PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154) 确保在用户手动停止流式输出时，已生成的部分回复及模型元数据能够被正确保存。
*   **模型选择状态隔离**：[PR #2153](https://github.com/netease-youdao/LobsterAI/pull/2153) 修复了同名包模型与自定义模型在渲染层选择状态的冲突，优化了模型归一化逻辑。

**4. 社区热点**
*   **[Issue #1](https://github.com/netease-youdao/LobsterAI/issues/1) [CLOSED] hit API error with OpenAI API Type**
    *   该 Issue 由用户 simson2010 创建于 2026-02-19，今日被官方正式关闭（历史共有 7 条评论）。这反映了早期版本中第三方大模型 API（如 MiniMax）接入时，消息体类型校验不兼容的问题已得到彻底解决。这说明核心诉求在于**更宽容/兼容的第三方模型 API 适配能力**。

**5. Bug 与稳定性**
今日虽然没有新增严重崩溃的 Issue，但合入了大量针对**数据静默丢失**与**异常边界处理**的修复 PR（主要由贡献者 MaoQianTu 提交并合并），大幅提升了应用稳定性：
*   **高危：弹窗/导航强制退出导致配置丢失**
    *   [PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475)：修复了创建 Agent 弹窗、Agent 设置面板、MCP 服务器配置弹窗在点击遮罩层或按下 Escape 键关闭时，不提示保存而直接丢失配置的问题。
*   **高危：未发送草稿被清空**
    *   [PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476)：修复了切换会话或导航视图时，输入框中未发送的草稿因为去抖定时器被清除而静默丢失的问题。
*   **中危：历史消息重新编辑覆盖逻辑**
    *   [PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477)：修复了重新编辑历史消息时，直接覆盖当前输入框内容的问题，现已加入覆盖确认机制。

**6. 功能请求与路线图信号**
从目前积压的 PR 和今日合并的动态来看，LobsterAI 的近期路线图信号非常明确：
1.  **全面拥抱 Computer Use (电脑接管)**：结合主干更新与运行时升级，让 AI 拥有直接操作图形界面（MVP）的能力是接下来的核心卖点。
2.  **多模态与分享生态**：ASR 实时语音输入、文生图格式规范化、HTML/SVG Artifact 分享，表明项目正致力于打通“输入-生成-分享”的闭环。
3.  **会话管理体验升级**（待合并需求）：用户 [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 提出对定时任务多次执行记录进行折叠分组展示，这有望在后续版本中被采纳，以解决侧边栏会话泛滥的痛点。

**7. 用户反馈摘要**
从历史遗留 Issue 和高质量的外部 PR 提交中，可以提炼出当前用户的真实使用反馈：
*   **痛点 1：多模型接入的边界情况**。用户倾向于将 LobsterAI 作为统一客户端对接各类自建或第三方大模型（如 OpenAI 兼容接口的 MiniMax），但对底层的参数兼容性极其敏感（Issue #1）。
*   **痛点 2：草稿与配置的“安全感”**。重度用户（如经常配置复杂 MCP Server、定时任务和 Agent 提示词的用户）对误操作导致的数据丢失零容忍，这正是今日集中合并防丢失 PR 的原因。
*   **痛点 3：高频自动化任务的视觉干扰**。通过 [PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 可以看出，部分用户正在高频使用 Cowork 定时任务，但受困于侧边栏会话堆积。

**8. 待处理积压**
项目目前有 6 个带有 `[stale]` 标记且处于 OPEN 状态的优质 PR 积压，建议维护团队尽快 Review：
1.  **[PR #1446](https://github.com/netease-youdao/LobsterAI/pull/1446) [stale]**：修复 OpenClaw 网关由于竞态条件（进程退出仍触发无限重启）导致的系统瘫痪问题。**（高优，影响系统可用性）**
2.  **[PR #1453](https://github.com/netease-youdao/LobsterAI/pull/1453) [stale]**：修复已停用技能的提示词仍被注入对话的同步漏洞。
3.  **[PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) [stale]**：定时任务多次执行记录的折叠分组展示。
4.  **[PR #1454](https://github.com/netease-youdao/LobsterAI/pull/1454) [stale]**：修复创建不重复定时任务清空日期时按钮无响应的“无声失败”问题。
5.  **[PR #1448](https://github.com/netease-youdao/LobsterAI/pull/1448) [stale]** & **[PR #1456](https://github.com/netease-youdao/LobsterAI/pull/1456) [stale]**：修复 i18n 国际化遗漏及快捷键冲突不检测的问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 **Moltis** 项目 2026-06-13 动态日报：

# 📊 Moltis 项目动态日报 (2026-06-13)

### 1. 今日速览
过去 24 小时内，Moltis 项目整体活跃度保持平稳，主要集中在问题排查与社区功能探讨上。今日项目未发布新版本，也无合并或关闭的代码变更（PR/Issue 均保持 Open 状态），代码库处于稳定沉淀期。社区互动展现了对**多渠道消息网关稳定性**（如 WhatsApp）以及**本地高性能语音识别（STT）**的强烈诉求。当前暂无严重崩溃反馈，项目整体运行健康。

### 2. 版本发布
**无新版本发布。**（今日无新 Tag 或 Release 产出）

### 3. 项目进展
今日项目**无已合并的 PR 或已关闭的 Issue**。虽然缺乏代码层面的直接推进，但开发者提交了关于 WhatsApp 消息投递失败的关键修复 PR（#1116），目前正等待维护者 Review。总体而言，项目今日处于功能维护与 Bug 修复的验证阶段。

### 4. 社区热点
今日讨论热度最高的是关于引入新本地语音引擎的功能请求。
*   **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102) [Feature]: Add FunASR/SenseVoice as local STT engine**
    *   **热度数据**：评论 1 条，持续活跃中。
    *   **诉求分析**：用户 `LauraGPT` 高度赞扬了 Moltis 作为语音助手的潜力，并强烈建议集成阿里开源的 `FunASR` 或 `SenseVoice`。其核心痛点在于**实时交互的延迟**。用户明确指出现有方案可能在响应速度上不够极致，而 SenseVoice-Small 处理 10 秒音频仅需约 70ms，且支持原生流式处理。这反映出高阶用户对“端到端极速语音对话”有着极高的性能期待。

### 5. Bug 与稳定性
今日收到 1 个明确的渠道连通性 Bug 报告，目前已有对应的修复 PR 提交。
*   **[中高] [Issue #1115](https://github.com/moltis-org/moltis/issues/1115) [Bug]: Fastmail MCP Authorisation**
    *   **表现**：用户在使用 Fastmail 作为 MCP（Message Control Protocol）接入时遇到授权失败/阻断问题。该问题影响了邮件网关的连通性。当前已有 2 条评论探讨，暂无直接针对该 Issue 的 fix PR。
*   **[高] [PR #1116](https://github.com/moltis-org/moltis/pull/1116) fix(whatsapp): deliver replies to @lid chats via PN JID rewrite**
    *   **表现**：当 WhatsApp 用户开启隐私保护（隐藏手机号使用 @lid 聊天）时，AI 智能体生成的回复会被**静默丢弃**。系统 Web UI 显示已发送，但用户永远收不到消息，且没有“已送达”回执。
    *   **状态**：开发者 `juanlotito` 已提交修复 PR，通过重写出站 JID（PN JID rewrite）来解决此静默崩溃问题，亟待合并。

### 6. 功能请求与路线图信号
结合近期的 Issue 动态，Moltis 未来的演进可能呈现以下趋势：
*   **语音处理能力升级**：[Issue #1102](https://github.com/moltis-org/moltis/issues/1102) 中提出的 FunASR/SenseVoice 集成请求，契合 AI 智能体向“实时流畅语音交互”发展的行业趋势。如果维护者采纳，这将是 Moltis 在本地化、低延迟语音处理模块的重要里程碑。
*   **通讯协议兼容性与隐私强化**：今日的 [PR #1116](https://github.com/moltis-org/moltis/pull/1116) 表明，随着 WhatsApp 等平台收紧隐私策略（如 @lid 机制），Moltis 必须持续适配上游通讯协议的底层变化，以保障消息链路的绝对可靠性。

### 7. 用户反馈摘要
通过对近期 Issue 的提炼，真实用户反馈呈现以下特征：
*   **核心使用场景**：用户主要将 Moltis 用作跨平台（WhatsApp、邮件）的 AI 语音/文本助手，且高度依赖其自动化网关功能。
*   **痛点**：
    1.  **隐蔽性通讯失败**：如 WhatsApp 隐私聊天中的消息“假发送”问题，这对自动化 Agent 是致命伤，极易导致业务流程断裂。
    2.  **授权配置门槛**：如 Fastmail 接入报错，说明在接入第三方服务（MCP）时，鉴权流程的容错率和文档指引仍有提升空间。
*   **满意度**：用户对 Moltis 定位为“Voice assistant project”表示了认可（"Great voice assistant project!"），说明项目在语音交互方向的产品定义深入人心。

### 8. 待处理积压
*   **[PR #1116](https://github.com/moltis-org/moltis/pull/1116)**：作为修复 WhatsApp 高频使用场景（消息静默丢弃）的阻断性 Bug，强烈建议维护者优先进行 Code Review 并推进测试合并。
*   **[Issue #1115](https://github.com/moltis-org/moltis/issues/1115)**：Fastmail 授权 Bug 自昨日报告以来仍在排查，需要项目组确认是通用配置问题还是代码级 Bug，以防阻断用户的邮件集成体验。

---
*分析注记：今日数据量虽不大，但暴露出 AI 智能体在真实通讯场景落地时常见的“协议适配与鉴权”摩擦。关注 WhatsApp PR 的合并进度将是明日的重点。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 2026-06-13 CoPaw (QwenPaw) 项目动态日报。作为 AI 智能体与个人助手领域的开源项目，今日数据展现出该项目处于**高度活跃且快速迭代**的阶段，同时也面临着复杂系统升级带来的阵痛期。

---

# 📊 CoPaw (QwenPaw) 开源项目日报 (2026-06-13)

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内共有 23 条 Issue 更新（16 活跃/新开，7 关闭）与 27 条 PR 更新（16 待合并，11 合并/关闭）。
- **处于版本迭代阵痛期**：社区大量反馈集中在 `v1.1.11` 及其后续版本（如 `.post2`）中，暴露出前端渲染、资源下载和多渠道兼容性方面的短期退化。
- **底层架构正在蜕变**：开发者正全力推进底层从 AgentScope 1.x 向 2.0 迁移（#4727），并引入了模块化的 Runtime 2.0 架构与统一的外部能力驱动层。
- **版本线流转迅速**：尽管今日无正式 Release 发布，但维护者已经通过 PR 将内部版本号推向了 `1.1.12b1`，预示着集中修复即将到来。

## 2. 版本发布
**今日无正式新版本发布。** 
*注：维护者今日已合并代码将内部版本对齐至 `1.1.12b1` 和 `1.1.12.beta1` (PR #5159, #5157)，预计下一个小版本将集中修复目前社区反馈强烈的 v1.1.11 系列回归 Bug。*

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在以下方面取得了实质性向前迈进：
- **记忆机制与表单修复**：合并了 PR #5144，通过强制渲染 Collapse 面板修复了长期记忆配置（如向量模型）保存时丢失的问题；合并了 PR #5154，重构了记忆搜索工具的前端结果样式。
- **前端路由与体验优化**：合并了 PR #5147，修复了 Coding 模式下刷新页面导致 Session 重置的问题；合并了 PR #4144 修复了 Windows 环境下绑定 `0.0.0.0` 时的启动就绪检查死循环问题。
- **发布流水线增强**：合并了 PR #5121，在打包发布前引入了端到端的安装与健康检查门禁，提升了后续版本的发布稳定性。
- **安全隔离**：合并了 PR #5022，限制了 Agent 的工作区目录，防止其被错误放置在系统级 `plugins` 或 `secrets` 目录中，提升了系统安全性。

## 4. 社区热点
今日讨论最热烈的话题聚焦于**底层架构升级**与**Agent 团队协作能力**：
- 🔥 **[Breaking Change] 迁移至 AgentScope 2.0** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727))：获得大量关注，核心团队计划放弃现有的单体执行器，全面拥抱 AgentScope 2.0。这是项目迈向企业级/高阶复杂场景的必经之路。
- 🔥 **[Feature] 增加原生 Agent 团队/群体协作能力** ([Issue #5139](https://github.com/agentscope-ai/QwenPaw/issues/5139))：用户强烈希望 QwenPaw 能像 WorkBuddy 或 JiuwenSwarm 一样，支持多 Agent 组成的专家团队协同解决复杂任务，这代表了个人助手向“AI 员工编排平台”演进的核心用户诉求。
- 🔥 **定时任务功能失效** ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))：携带 11 条评论，Agent 生成定时任务后无法触发且不可编辑，成为重度用户日常工作流的阻断点。

## 5. Bug 与稳定性
近期版本的稳定性出现波动，以下为按严重程度排列的 Bug 集中区：
- **P0 级别 (系统级崩溃/死循环)**：
  - [Issue #5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)：Windows 客户端进程持续增加，内存占用飙升至 90% 以上，严重影响系统可用性。
  - [Issue #5155](https://github.com/agentscope-ai/QwenPaw/issues/5155)：Docker 部署环境下频繁出现自动宕机重启。
  - [Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)：Agent 对话思考逻辑进入死循环，消耗 Token 且无响应。
- **P1 级别 (核心功能阻断)**：
  - [Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)：v1.1.11.post2 版本中 docx/pdf 等非纯文本附件下载报 404 错误。
  - [Issue #5163](https://github.com/agentscope-ai/QwenPaw/issues/5163)：确认 Gemini Tool Calling 在 v1.1.10 到 post2 之间发生了严重回归。
  - [Issue #5165](https://github.com/agentscope-ai/QwenPaw/issues/5165)：打包脚本引用了不存在的模块，导致安装后白屏。
- **P2 级别 (UI 展示与交互)**：
  - [Issue #5098](https://github.com/agentscope-ai/QwenPaw/issues/5098)：`auto_memory_search` 结果在 UI 上渲染为空/unknown（**已通过 PR #5154 修复待发布**）。
  - [Issue #5143](https://github.com/agentscope-ai/QwenPaw/issues/5143) / [Issue #5148](https://github.com/agentscope-ai/QwenPaw/issues/5148)：前端数学公式（根号）渲染异常。

## 6. 功能请求与路线图信号
结合开发动向，以下新功能有极大概率被纳入下一版本或中期路线图：
- **支持 Kimi 本地/Coding 套餐接入** ([Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156))：用户呼吁将其加入 `uv` 白名单。这反映出用户对“自带 API Key (BYOK)”灵活接入的强烈需求。
- **桌面端体验完善** ([Issue #5164](https://github.com/agentscope-ai/QwenPaw/issues/5164))：要求增加系统托盘、开机自启、后台常驻功能。这也是个人 AI 助手实现“常驻服务”的标配。（目前对应的底层优化 PR #5153 正在准备中，试图为 pywebview 客户端带来瞬态启动体验）。
- **可视化多模态降级策略** (PR #5069 处于活跃状态)：允许主模型为纯文本时，自动调用副视觉模型转写图片/视频，这将极大改善无视觉能力大模型的使用体验。

## 7. 用户反馈摘要
- **痛点**：部分用户对 `v1.1.11` 更新带来的“副作用”感到疲惫，尤其是附件下载 404 ([#5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)) 和配置丢失 ([#5137](https://github.com/agentscope-ai/QwenPaw/issues/5137))，这暴露出项目 CI 缺乏充足的端到端覆盖（团队已通过 PR #5121 认识并着手修复）。
- **场景挖掘**：用户 `wjt0321` 提到已经在付费订阅特定的 Coding 套餐，说明用户开始将 QwenPaw 作为严肃的生产力工具，而不仅仅是玩具。
- **满意度**：尽管存在 Bug，社区对 QwenPaw 的多渠道（钉钉、飞书、Slack、元宝）拓展能力给予高度评价。开发者 `hongxicheng` 等人正在积极完善腾讯元宝渠道的引用消息支持 ([PR #5160](https://github.com/agentscope-ai/QwenPaw/pull/5160))，多端融合能力业界领先。

## 8. 待处理积压
- 🚨 **[PR #5088] 统一治理与沙盒接口讨论** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/5088))：处于 Review 状态，安全沙箱是 Agent 执行外部代码的关键，建议尽快推进结论。
- 🚨 **[PR #4622] DataPaw 数据分析插件 (12 个 BI 技能)** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/4622))：由首次贡献者 EliasMei 在 5 月 22 日提交，已停滞近 3 周。这是一个极高质量的扩展贡献，建议维护团队优先 review 并提供合并支持。
- 🚨 **[Issue #5166] Python 3.13 插件安装失败** ([链接](https://github.com/agentscope-ai/QwenPaw/issues/5166))：因标准库 `imghdr` 被移除导致报错，需尽快调整依赖以适配最新的 Python 运行时。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-06-13 | **分析数据来源**: GitHub Public API

---

### 1. 今日速览
ZeroClaw 今日迎来了项目演进的重要里程碑——**v0.8.0 大版本正式发布**。该版本核心重构了多智能体架构，支持单守护进程运行多个具备独立工作空间和记忆的命名 Agent。得益于新版本的发布，社区活跃度呈现爆发式增长，过去 24 小时内共处理了 50 条 Issues（47 条活跃）和 50 条 PRs（45 条待合并）。从提交内容来看，当前核心开发团队正集中精力修复 v0.8.0 引入的回归问题，并快速整合社区针对多实例部署、新通信渠道（如 WhatsApp Web）和 MCP 工具兼容性的代码贡献。

---

### 2. 版本发布：v0.8.0
- **Release**: [v0.8.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0)
- **核心变更**：这是一次架构级大更新。单守护进程现在可以运行多个命名 Agent，每个 Agent 支持配置独立的工作区、内存、模型提供商、安全策略、渠道和人格设定。
- **破坏性变更与迁移**：引入了全面重写的配置模式。官方强调该版本**支持现有配置的自动平滑迁移**，用户无需手动重构配置文件即可升级。
- **里程碑追踪**：此项工作在 [Issue #7112 (v0.8.0 release queue)](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) 中得到了全面闭环。

---

### 3. 项目进展
尽管今日仅有 5 个 PR 被合并/关闭，但 v0.8.0 的发布吸引了大量开发者提交功能增强与修复，当前有 **45 个高质量 PR 正在等待审核**，项目储备极为雄厚。主要进展包括：
- **架构重构落地**：[PR #7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) 实施了 [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) 的 RFC，将现有的三个 Agent 轮次引擎（`run_tool_call_loop`, `turn_streamed`, `Agent::turn`）成功合并到单一引擎中，大幅降低了后续维护和优化的复杂度。
- **多 Agent 适配推进**：[PR #7544](https://github.com/zeroclaw-labs/zeroclaw/pull/7544) 修复了工作区诊断工具，使其能够完全兼容 v0.8.0 的多 Agent 模式。
- **插件系统升级**：[PR #7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) 引入了 `wasmtime` 依赖，为未来弃用 Extism 并构建更安全的 WASM 插件生态打下基础。

---

### 4. 社区热点
讨论最热烈的问题集中在 **多实例/多 Agent 架构的稳定性和配置** 上：
1. **[Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) (3 评论)**：关于统一 Agent 轮次引擎的 RFC。维护者与社区就“一次性合并还是分阶段迁移”达成了共识，直接催生了今天的重量级 PR #7540。
2. **[Issue #6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) (4 评论)**：请求网关支持基于别名路径的 webhook 路由，以支持多实例渠道。维护者更新称已通过 `?agent=` 参数实现了按请求调度，多机器人单网关共存已落地。
3. **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (7 评论)**：最热议题。指出 `tool_filter_groups` 对真正的 MCP 工具无效（仅检查了前缀）。这反映出开发者正深度将 ZeroClaw 与各类外部 MCP Server 集成，对细粒度工具权限控制有强烈需求。

---

### 5. Bug 与稳定性
随着 v0.8.0 的铺开，部分高危阻断性 Bug 浮出水面（部分已有热修复 PR）：

*   **[S1 阻断] Dashboard 无法加载 ([Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523))**
    *   问题：macOS Homebrew 安装后 Web Dashboard 不可用。
    *   修复状态：已有 [PR #7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529)（修复 URL 误导）和 [PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534)（修复 Docker 构建 C++ 依赖缺失）。
*   **[S1 阻断] 上下文预算超载导致死循环 ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808))**
    *   问题：默认 32k 的上下文预算在全新对话的第一轮迭代中，仅系统提示词和工具定义就超出了约 3.3 倍，导致持续性的上下文裁剪。
*   **[S1 阻断] WSL2 下连续 OOM 崩溃 ([Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542))**
    *   问题：在 Windows WSL2 环境下，守护进程持续发生内存泄漏并最终被系统 OOM Killer 杀死。
*   **[S2 降级] MCP 子进程泄漏 ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903))**
    *   问题：开启心跳检测（默认开启）时，每个 tick 会泄漏一个 stdio MCP 子进程，一天可能产生约 48 个孤儿进程。

---

### 6. 功能请求与路线图信号
基于近期的 Feature Request 和社区 PR，我们可以推断出 v0.8.x 或 v0.9 的演进方向：
1. **原生渠道体验强化**：社区正积极完善 WhatsApp Web 支持。[PR #7536](https://github.com/zeroclaw-labs/zeroclaw/pull/7536) 添加了媒体和引用消息转发，[PR #7535](https://github.com/zeroclaw-labs/zeroclaw/pull/7535) 实现了表情回应（ACK 机制），同时 [Issue #6443](https://github.com/zeroclaw-labs/zeroclaw/issues/6443) 正在推进 Twitch IRC 直播聊天适配。
2. **跨平台与自更新健壮性**：Windows 平台的支持正在被全面加固，包含 [PR #7530](https://github.com/zeroclaw-labs/zeroclaw/pull/7530)（支持 .zip 自更新）和 [PR #7538](https://github.com/zeroclaw-labs/zeroclaw/pull/7538)（修复 macOS Cmd+C 误触退出）。
3. **新型接入提供商**：[PR #6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842) 正在接入基于 TEE（可信执行环境）推理的 NEAR AI Cloud。

---

### 7. 用户反馈摘要
从今天的 Issue 讨论中，可以提炼出真实用户的几个核心痛点：
*   **本地化缺失**：在非英语环境（如 `zh-CN`）下，部分运行时命令仍是硬编码的英文 ([Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548))。
*   **多模型 API 兼容性脆弱**：接入不同提供商（如 Gemini、MiniMax）时，由于消息序列结构（如 Assistant 带有 tool_calls 放在首位，或上下文压缩时丢弃 tool_calls）不符合各家 API 的严格校验，频繁导致 400 错误，中断工作流 ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302), [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361))。
*   **高自主性受限**：用户反馈在配置了 `level = "full"` 的最高自主权限下，Shell 工具调用依然被拒绝，给自动化 Agent 的部署带来了阻碍 ([Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434))。

---

### 8. 待处理积压 ( backlog 提醒 )
虽然 v0.8.0 解决了大量历史问题，但仍有数个高优（`priority:p1`）问题积压超过三周，需维护者介入：
*   **[Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)**：节点缺乏真实心跳追踪（Dashboards 显示的 "Online" 不可靠），目前处于 `blocked` 状态。
*   **[Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)**：主循环中 `allowed_tools` / `denied_tools` 拦截未在执行层强制生效，存在安全隐患，目前处于 `blocked` 状态。
*   **[Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)**：长时间运行的 Cron 任务会被重复调度触发（曾出现 3 分钟内爆发执行 20 次的情况）。

</details>