# OpenClaw 生态日报 2026-06-08

> Issues: 298 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-07 22:19 UTC

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

# OpenClaw 项目动态日报 (2026-06-08)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) 
> 分析周期：过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日保持**极高的开发与社区活跃度**。过去 24 小时内，社区共产生了 **298 条 Issue 动态**（新开/活跃 176 条，关闭 122 条）以及 **500 条 PR 动态**（待合并 378 条，合并/关闭 122 条）。项目刚刚发布了 `v2026.6.5-beta.2` 版本，重点修复了渠道消息泄露和 MCP 工具健壮性问题。当前待处理的 PR 数量（378条）表明项目正处于一个密集的迭代重构期，特别是在多渠道接入（飞书、Telegram、Slack、iMessage）、多模型路由和底层状态存储（向 SQLite 迁移）方面有大量代码正在并行演进。

## 2. 版本发布

项目今日发布了 1 个新版本：

- **[v2026.6.5-beta.2](https://github.com/openclaw/openclaw/releases)**

**核心更新内容：**
1. **安全与UX修复 (QQBot)**：QQ 机器人在原生消息下发前，现在会主动剥离模型的推理/思考脚手架（如 `<thinking>` 标签）。这彻底防止了原始的内部推理内容意外泄露到频道回复中。
2. **MCP 工具健壮性提升**：MCP 工具返回结果现在强制兼容处理 `resource_link`、`resource`、`audio`、格式错误的图像及未来的未知类型，防止了解析时的意外崩溃。

*注：本次更新未提及破坏性变更，建议所有使用 QQBot 或 MCP 工具的用户尽快升级至该 beta 版本。*

## 3. 项目进展

今日共有 122 个 PR 被合并或关闭，项目在多个关键基础架构和渠道适配上取得实质性进展：

- **渠道消息投递稳定性**：
  - [PR #89143](https://github.com/openclaw/openclaw/pull/89143)：修复了代理消息发送的死循环检测逻辑，规范化了投递字段的哈希计算。
  - [PR #82864](https://github.com/openclaw/openclaw/pull/82864)：修复了 OpenAI Codex 运行时的 Provider 路由问题，确保正确路由到 `openai-codex` 节点。
- **安全与权限管控**：
  - [PR #90261](https://github.com/openclaw/openclaw/pull/90261)：恢复了通过网关 HTTP 暴露的“仅限所有者”核心工具的发送者门禁验证，封堵了非特权用户的越权调用风险。
- **多渠道兼容性改进**：
  - [PR #91041](https://github.com/openclaw/openclaw/pull/91041)：专门针对 macOS 26 改进了 iMessage 渠道，增加了私有 API 不可用时的明确错误提示及独立的发送超时机制。
- **可观测性增强**：
  - [PR #91256](https://github.com/openclaw/openclaw/pull/91256)：补全了 OTel 诊断链路中缺失的 Tool Input/Output 内容捕获生产者。

## 4. 社区热点

今日社区讨论最热烈的问题集中在**跨渠道消息状态管理**及**底层状态存储架构**：

1. **文本消息意外泄露至通讯渠道**（27条评论）
   - 链接：[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)
   - 分析：Agent 在执行工具调用期间生成的内部文本（如错误处理、中间步骤的旁白）被错误路由到了 Slack/iMessage 等外部渠道。这是一个严重的 UX 切断问题。虽然 `v2026.6.5-beta.2` 刚修复了 QQBot 的同类问题，但底层的泛化路由机制仍有待确认修复。
2. **会话/转录状态向 SQLite 迁移路径讨论**（18条评论）
   - 链接：[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
   - 分析：维护者及核心贡献者在讨论如何将核心 session/transcript 状态从现有存储平滑迁移到 SQLite，提议采用“抽象分支”策略拆分为多个小型、可审查的 PR，避免高风险的大爆炸式重写。
3. **Cron 触发器污染全局运行时状态**（13条评论）
   - 链接：[Issue #90991](https://github.com/openclaw/openclaw/issues/90991)
   - 分析：定时任务（Cron）触发器被指控在并发执行时污染全局状态，导致系统出现瞬时全局过载崩溃。

## 5. Bug 与稳定性

今日报告了多个高优先级（P1）的回归 Bug 和稳定性问题：

- 🔴 **[P1] Codex app-server 轮次完成停滞** (回归问题)
  - 链接：[Issue #88312](https://github.com/openclaw/openclaw/issues/88312)
  - 状态：多工具代理执行时稳定复现 "Codex stopped before confirming the turn was complete"，阻塞了正常交互。
- 🔴 **[P1] 飞书消息投递恢复机制失效**
  - 链接：[Issue #91212](https://github.com/openclaw/openclaw/issues/91212)
  - 状态：网关重启后，`delivery-recovery` 报告“0 recovered”，因为恢复逻辑在 WebSocket 未就绪时就开始重试，导致消息静默丢失。已提交 [PR #89045](https://github.com/openclaw/openclaw/pull/89045) 修复同类状态卡死问题。
- 🔴 **[P1] Context 压缩机制失效导致上下文撑爆**
  - 链接：[Issue #90639](https://github.com/openclaw/openclaw/issues/90639)
  - 状态：在 `safeguard` 模式下，会话被允许增长到 200K+ tokens，触发过晚或不触发，最终导致网关报错。需重新调整阈值逻辑。
- 🟠 **[P1] WSL2 环境下 exec 工具触发网关 SIGTERM 重启**
  - 链接：[Issue #90428](https://github.com/openclaw/openclaw/issues/90428)
  - 状态：在 Node 24 环境下，执行工具导致信号向父进程渗透。已提 PR [PR #90441](https://github.com/openclaw/openclaw/pull/90441) 修复。

## 6. 功能请求与路线图信号

通过近期的 Issues 和活跃的 PRs，可以看出项目下一阶段的发展方向：

1. **Gateway-lite 瘦身模式**：[Issue #86881](https://github.com/openclaw/openclaw/issues/86881) 提出剥离 AI harness，仅提供 Webhook/Cron 和确定性插件执行的轻量级部署模式。
2. **Topic-session 家族模型**：[Issue #90916](https://github.com/openclaw/openclaw/issues/90916) 建议为单个助手引入“命名上下文车道”，在不同车道间隔离近期对话，但共享长期记忆。这预示着复杂的多线程 Agent 记忆架构即将落地。
3. **模型运行时与选择器解耦**：[PR #90328](https://github.com/openclaw/openclaw/pull/90328) 正在将 Agent 运行时元数据暴露给 UI 的模型选择器，为后续无缝切换后端计算节点打下基础。
4. **Otel 深度集成**：[PR #91256](https://github.com/openclaw/openclaw/pull/91256) 表明项目正在加强企业级可观测性建设，完善 Tracing 链路。

## 7. 用户反馈摘要

从 Issue 列表提炼出的真实用户痛点如下：

1. **文件操作痛点**：`write` 工具缺乏 `append` 模式，导致独立的 Cron 会话互相覆盖共享文件（如 `memory/YYYY-MM-DD.md`），造成严重的数据丢失（[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)）。
2. **多端同步割裂**：在 Telegram 或 Discord 执行 `/new` 重置会话后，TUI 和 Web UI 无法实时感知并刷新，依然显示旧对话，多端状态同步体验较差（[Issue #38966](https://github.com/openclaw/openclaw/issues/38966)）。
3. **飞书用户体验缺陷**：飞书机器人的 Typing（正在输入）指示器使用了错误的 Reaction API 实现，导致用户根本看不到“正在处理”的状态提示（[Issue #69572](https://github.com/openclaw/openclaw/issues/69572)）。
4. **上下文使用盲区**：用户强烈希望能通过 `/usage` 指令看到当前**累积消耗的上下文占比**（已用 tokens / 总窗口大小），以便主动判断何时需要重置会话（[Issue #40215](https://github.com/openclaw/openclaw/issues/40215)）。

## 8. 待处理积压

以下高优先级或高影响度的 Issue 包含大量子标签（如 `clawsweeper:needs-maintainer-review`），但长期处于停滞或多次被重新打开状态，建议维护团队重点关注：

1. **[Bug] `exec` 工具无法继承 `skills.entries.*.env` 环境变量**：导致用户无法安全地为子进程注入密钥。
   - 链接：[Issue #31583](https://github.com/openclaw/openclaw/issues/31583)（P1，已停滞数月）
2. **[Bug] 配置目录 `agentDir` 下的 Bootstrap 文件被静默忽略**：导致系统提示词无法按预期加载，严重影响了多 Agent 配置的自定义能力。
   - 链接：[Issue #29387](https://github.com/openclaw/openclaw/issues/29387)（P1，长期未解决）
3. **沙箱隔离导致文件只读**：将 `workspaceAccess` 设置为 `none` 后，分配的独立工作空间居然是只读的，Agent 无法执行写操作。
   - 链接：[Issue #37634](https://github.com/openclaw/openclaw/issues/37634)（P1，影响沙箱安全模型的核心功能）
4. **WebSocket 重连导致进行中的对话被 terminated**：Webchat 用户在网络波动时面临会话被直接终结的严重问题。
   - 链接：[Issue #38091](https://github.com/openclaw/openclaw/issues/38091)（P1，影响所有 Web UI 用户）

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 6 月 8 日的社区动态数据，为您提供横向对比分析报告。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单一对话向多端融合、多模态与企业级复杂编排演进”的深水区**。项目间竞争的核心已从单纯的模型接入能力，转向**长短期记忆治理、多渠道无缝切换、本地安全沙箱隔离及高并发下的状态一致性**。生态呈现出明显的分层：头部项目在重构底层架构以支撑企业级需求，腰部项目在快速修补跨平台适配的边界 Bug，同时高度定制化的轻量级项目正在向边缘设备（如移动端、低成本 ARM 板）渗透。

### 2. 各项目活跃度对比
*(注：Issue/PR 数据涵盖新增、活跃、关闭/合并的总量)*

| 项目名称 | 今日 Issue 动态 | 今日 PR 动态 | 新版本发布 | 健康度与迭代特征评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 298 | 500 | **是** (Beta) | **极高且重构中**：处理量巨大，处于底层存储迁移和架构重构期，积压风险并存。 |
| **IronClaw** | 50 | 37 | 否 | **高强度重构中**：深陷 "Reborn" 核心架构演进，代码合并活跃，主攻 WebUI 和安全边界。 |
| **ZeroClaw** | 50 | 50 | 否 | **高度活跃**：PR 积压严重 (43个待合并)，功能扩展与社区提交并行，处于大爆发前夕。 |
| **Hermes Agent**| 100 (活跃/新) | 88 (41待合并) | 否 | **活跃但受阻**：社区反馈热烈，集中于多渠道和成本控制，但桌面端稳定性存在痛点。 |
| **PicoClaw** | 20 | 19 | **是** (Nightly)| **健康高效**：处理与关闭比例极高，核心团队 Review 敏捷，侧重底层防御性编程。 |
| **NanoBot** | 7 | 19 | 否 | **稳健上行**：响应速度极佳，重点在沙箱隔离、上下文治理等企业级防线构建。 |
| **NanoClaw** | 3 (新) | 6 (新) | 否 | **聚焦基建**：专注 Setup 流程与账号轮换机制修复，处于底层加固阶段。 |
| **CoPaw** | 6 (新/活跃) | 2 (新) | 否 | **需求井喷，代码暂缓**：社区重点讨论记忆框架与多模态分离，等待核心团队推进。 |
| **Moltis** | 1 | 3 | 否 | **稳定迭代**：聚焦流式输出优化和企业级权限管控，处于量变积累期。 |
| **LobsterAI** | 15 | 0 | 否 | **停滞风险**：社区有高价值输入，但工程端“零输出”，疑似面临维护资源瓶颈。 |

### 3. OpenClaw 在生态中的定位
*   **核心参照与流量洼地**：OpenClaw 毫无疑问是生态内的**核心枢纽项目**，其单日近 300 个 Issue 和 500 个 PR 的处理体量远超其他同类项目，具有最强的社区号召力和贡献者基数。
*   **架构演进差异**：当部分项目（如 ZeroClaw, Hermes）还在解决多端接入的基础可用性时，OpenClaw 已经在攻坚**底层的泛化路由机制**（如向 SQLite 迁移状态存储、Topic-session 家族模型抽象）。它的技术路线更加偏向于构建一个标准化的“Agent 基础设施网关”，而不仅仅是某个端点的 Bot。
*   **当前挑战**：优势在于功能全面和迭代极快，但劣势在于**并行演进带来的稳定性抖动**（如严重的全局过载崩溃、飞书消息恢复失效等 P1 Bug），急需在“大重构”与“可用性”之间寻找平衡。

### 4. 共同关注的技术方向
从多项目的动态中，涌现出高度一致的四大技术方向：
1.  **企业级安全与沙箱隔离**（NanoBot, IronClaw, NanoClaw）：社区对本地部署的安全要求急剧上升，包括修复 bwrap 沙箱逃逸、相对符号链接越权、MCP HTTP 的 SSRF 防护拦截，以及容器级别的鉴权缺失。
2.  **上下文与记忆治理**（OpenClaw, NanoBot, CoPaw, ZeroClaw）：长对话导致的 Token 撑爆成为普遍痛点。各项目都在引入“上下文压缩”、“Tool 结果体积限制”、基于压力动态调整的 `ContextGovernor` 或是分层记忆系统。
3.  **多渠道 IM 融合与死磕**（Hermes, PicoClaw, Moltis, OpenClaw）：将 AI 接入飞书、Telegram、Slack、Discord 是刚需，但目前在 **OAuth 认证**、**群组 @ 解析机制**、**流式输出中断**及**状态同步割裂**（如 WebUI 与手机端不同步）上充满痛点。
4.  **本地化与边缘设备部署**（PicoClaw, CoPaw, NanoBot）：项目正在适配 Android Termux、树莓派及本地 vLLM 架构，反映出用户对“数据绝对私有”和“低成本硬件运行”的强烈诉求。

### 5. 差异化定位分析
*   **OpenClaw / ZeroClaw**：定位为**全栈式/网关级 AI 基础设施**。架构重，依赖多，适合作为中大型社区或企业的接入中枢，需要处理海量的消息路由和 Cron 任务。
*   **NanoBot / PicoClaw**：定位为**高性能/极客向的本地 Agent 运行时**。更侧重底层执行的安全防守（错误处理、沙箱隔离）和轻量级部署，适合开发者在本地或小型服务器上跑复杂自动化任务。
*   **Hermes / IronClaw**：定位为**多模态协同与企业工作台**。Hermes 关注多平台成本控制（模型按需路由），IronClaw 专注于 WebUI/SSO 和细粒度权限管控（审批租约、隔离可见性）。
*   **CoPaw / LobsterAI**：偏向**开箱即用的生产力工具**。用户更关注 UI 交互体验（如图片预览抖动、多行输入）、Token 消耗感知以及会话分类管理。

### 6. 社区热度与成熟度
*   **重构深水区（OpenClaw, IronClaw）**：这两个项目正在经历“推倒重来”或底层大重构。社区热度最高，但代码合并多为基建性质，面临 P0/P1 级阻断项的挑战，属于**阵痛期**。
*   **质量巩固期（NanoBot, PicoClaw）**：展现出极高的工程成熟度。核心团队对边界错误（如文件 I/O 校验、断言崩溃）响应极快，代码 Review 质量高，处于健康的**上行巩固期**。
*   **功能扩张期（ZeroClaw, Hermes Agent）**：社区热情高涨，PR 和 Feature Request 泛滥，但带来了严重的积压（40+ PR 待合并），基础体验（如桌面端闪烁、UI 报错）存在短板。
*. **维护停滞期（LobsterAI）**：出现了“社区高价值输入，工程零输出”的危险信号，基础 CI/CD 报错无人修复，Issue 被大面积标记为 Stale。

### 7. 值得关注的趋势信号
1.  **API 调用的幂等性与防污染至关重要**：NanoBot 暴露的“重试导致历史消息重复”问题是一个危险信号。随着 Agent 自主规划能力增强，底层 Client 必须实现严格的请求去重和状态回滚，否则自主 Agent 会陷入死循环并搞乱上下文。
2.  **模型路由向细粒度发展**：从 Hermes Agent 提出的“技能级独立模型覆盖”到 CoPaw 的“独立视觉中转站模型”，表明开发者正试图**精细控制 Token 成本**。未来的个人助手必须支持“主干用便宜模型、复杂推理用昂贵模型、视觉单独解耦”的编排策略。
3.  **安全红线从“网络防护”转向“工具执行防护”**：各大项目都在密集修复 `exec`、`write`、MCP 工具带来的本地文件系统逃逸和越权。**构建一套安全、无副作用（不污染全局环境变量、正确处理进程信号）的确定性执行沙箱**，将是下一阶段各框架的核心卖点。
4.  **对“静默失败”零容忍**：用户对“前端转圈无报错后台”、“文件写入提示成功但丢失”极其反感。可观测性（如 OTel 深度集成、结构化 Tool Error 反馈给 LLM）正从加分项变为必选项。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目动态日报 (2026-06-08)

> 数据来源：[NanoBot (github.com/HKUDS/nanobot)](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

---

### 1. 今日速览

过去 24 小时，NanoBot 项目保持**高度活跃**的开发与社区互动状态。项目共产生 **26 次代码与问题追踪更新**（7 条 Issues，19 条 PRs），且待合并 PR 高达 15 个，显示出核心团队与贡献者正在密集推进多项新特性与稳定性修复。今日重点聚焦于**系统健壮性提升**（API 重试机制修复、上下文孤立消息处理、沙箱安全隔离）以及**用户体验优化**（WebUI 版本展示、ANSI 终端渲染、全局语音输入）。整体而言，项目处于健康、快速迭代的上行通道，安全与边界条件的加固是当前的核心演进方向。

---

### 2. 版本发布
*过去 24 小时内无新版本发布。*

---

### 3. 项目进展
今日共有 4 个 PR 被合并或关闭，这些进展显著提升了多渠道兼容性和特定 Provider 的稳定性：

*   **🔒 修复 Custom Provider 推理内容丢失问题**：合并了 [PR #4227](https://github.com/HKUDS/nanobot/pull/4227)。该 PR 修复了自定义 Provider 在遇到 `reasoning_content` 为空字符串时错误地将其转为 `None` 的问题，确保了 DeepSeek 等模型在工具调用状态下的字段完整性（关联 Issue [#4105](https://github.com/HKUDS/nanobot/issues/4105)）。
*   **💬 优化飞书群机器人的 @ 解析**：关闭了 [PR #2885](https://github.com/HKUDS/nanobot/pull/2885)。完善了飞书渠道中 mention 数据的解析逻辑，提升了群聊内精准识别 Bot 被提及的能力。
*   **🎨 增强 WebUI 终端输出渲染**：关闭了 [PR #4240](https://github.com/HKUDS/nanobot/pull/4240)。在 WebUI 代码块中实现了 ANSI 彩色输出的渲染，支持 256色、RGB 和粗体/斜体等样式，极大地改善了开发调试和终端工具返回结果的可视化体验。
*   **📱 修复 WhatsApp 群组提及机制**：关闭了 [PR #2663](https://github.com/HKUDS/nanobot/pull/2663)，规范化了 WhatsApp LID 格式的 JIDs 处理，解决了特定设备后缀下的 Bot 识别失效问题。

---

### 4. 社区热点
今日社区关注点集中在**沙箱隔离机制**和**上下文/会话管理**的边界情况处理上：

*   **Ubuntu 24.04 上的 bwrap 沙箱权限问题**：由用户 primit1v0 提交的 [Issue #4236](https://github.com/HKUDS/nanobot/issues/4236) 反映了在现代 Linux 内核限制非特权用户命名空间的情况下，bwrap 沙箱执行静默失败。这暴露出主流 OS 升级给 AI 工具本地执行带来的兼容性挑战，目前作者已提交修复 PR。
*   **UI 与多模型编排需求**：[Issue #4233](https://github.com/HKUDS/nanobot/issues/4233) 要求在 UI 显式展示版本及更新提示，[Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) 则要求 `spawn` 工具支持子代理模型覆盖。这两个需求反映出用户在**多模型成本调度**与**多实例运维状态感知**上的强烈诉求。

---

### 5. Bug 与稳定性
今日报告了多个关键 Bug，大部分已迅速得到社区提交的 Fix PR，整体响应速度极佳。按严重程度排序如下：

*   **🚨 [严重] API 空响应重试导致历史消息被污染**
    *   **现象**：OpenAI 兼容 API 触发重试时，会导致用户消息被重复持久化到会话中。
    *   **进度**：已提交修复 [PR #4234](https://github.com/HKUDS/nanobot/pull/4234)。
*   **🔴 [较高] 孤立工具结果导致会话上下文被完全清空**
    *   **现象**：当用户消息后紧跟无对应 assistant 调用的 `tool` 结果时，历史消息计算错误，切片导致返回空列表，**所有上下文丢失**（[Issue #4203](https://github.com/HKUDS/nanobot/issues/4203)）。
    *   **进度**：已提交修复 [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) 和 [PR #4229](https://github.com/HKUDS/nanobot/pull/4229)。
*   **🟠 [中等] bwrap 沙箱未重置 `$HOME` 环境变量**
    *   **现象**：沙箱内写入操作因 `$HOME` 指向无权限的宿主真实目录而失败（[Issue #4237](https://github.com/HKUDS/nanobot/issues/4237)）。
    *   **进度**：已提交修复 [PR #4239](https://github.com/HKUDS/nanobot/pull/4239)。
*   **🟡 [低] MCP HTTP 连接无限期挂起**
    *   **现象**：`streamableHttp` 传输未设置超时，若握手无响应会导致 MCP 启动永久阻塞。
    *   **进度**：已提交修复 [PR #4230](https://github.com/HKUDS/nanobot/pull/4230)。

---

### 6. 功能请求与路线图信号
基于今日的 Issue 与 PR 动向，可以洞察出项目接下来的演进重点：

1.  **企业级安全与沙箱隔离加固**：除了修复现有沙箱问题，[PR #4119](https://github.com/HKUDS/nanobot/pull/4119)（阻止相对符号链接越权）和 [PR #4123](https://github.com/HKUDS/nanobot/pull/4123)（MCP HTTP 的 SSRF 防护拦截）表明项目正在构建严密的本地与网络安全防线，这是向企业级生产环境迈进的关键信号。
2.  **智能上下文治理与容错**：[PR #4238](https://github.com/HKUDS/nanobot/pull/4238) 引入了 `ContextGovernor` 概念，将微压缩逻辑从 AgentRunner 抽离，基于实际上下文压力动态执行。结合日益完善的 Runner 测试用例，预示着多轮长对话的记忆管理正走向工程化、自动化。
3.  **多模态与全局能力复用**：[PR #4232](https://github.com/HKUDS/nanobot/pull/4232) 将语音输入从特定渠道抽离为全局能力，标志着 NanoBot 正在加速向全端融合的桌面/语音 AI 助理形态进化。
4.  **子代理架构增强**：[Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) 提出的多级模型调度需求，若被接纳，将极大丰富复杂任务的编排策略。

---

### 7. 用户反馈摘要
从社区提交的内容中，可以提炼出以下核心用户画像与痛点：
*   **深度本地化部署用户**：遇到 bwrap 沙箱问题的用户（primit1v0）代表了在本地严格执行安全隔离的开发者群体，他们对文件系统权限、命名空间隔离极其敏感。
*   **重度 API 集成开发者**：关于 OpenAI 兼容 API 重试污染历史记录的反馈，反映出将 NanoBot 作为核心 Agent 引擎集成到第三方应用的开发者，对底层 API 的**幂等性**和**状态严格性**有极高要求。
*   **运维与多实例管理者**：希望在 WebUI 看到版本号的诉求，反映了当同时管理多个 NanoBot 实例时，版本追踪和升级提示是极大的管理痛点。

---

### 8. 待处理积压
*以下为活跃且尚在 Open 状态的重要长期/近期工作项，建议维护者关注 Review 进度：*

1.  **待合并的大型测试框架与重构 PR**：
    *   [PR #3982](https://github.com/HKUDS/nanobot/pull/3982) (Scripted agent runner harness) 和 [PR #3983](https://github.com/HKUDS/nanobot/pull/3983) - 这两个 PR 搁置近半个月，包含了大量核心 Runner 的测试脚本，是保障后续迭代稳定性的基石，亟待最终 Review 合并。
2.  **高价值安全修复待合并**：
    *   [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) (修复相对符号链接逃逸) 和 [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) (限制只读路径写入) 涉及核心文件系统安全，建议优先排期合并。
3.  **遗留的飞书话题群回复问题**：
    *   [Issue #2256](https://github.com/HKUDS/nanobot/issues/2256) 虽然被关闭，但作为 `good first issue`，可能仍有社区成员关注其在不同飞书版本中的表现，建议确认其彻底解决或补充说明。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-06-08)

## 1. 今日速览
Hermes Agent 项目今日维持了极高的社区活跃度，共处理了 100 个 Issues 和 Pull Requests（其中 47 个为新发起/活跃议题，41 个待合并 PR）。项目当前的重心明显向**多平台适配（如 Telegram、WhatsApp、飞书）、桌面端（TUI/Dashboard）稳定性修复以及 Provider 兼容性（特别是 Bedrock 和 Ollama）**倾斜。虽然今日没有发布新的稳定版本，但大量针对桌面端 UI 闪烁、配置文件加载和底层安全拦截的修复 PR 正在排队等待合并，预示着项目正在为下一次重要的补丁更新做代码储备。

---

## 2. 版本发布
**无新版本发布。** 
近期的迭代主要集中在主分支的 Bug 修复和功能完善上。大量关键的修复 PR（如 Gateway 配置覆盖、桌面端路径解析等）目前处于 Open 状态等待合并，预计将在合并潮后发布包含重要稳定性提升的下一个版本。

---

## 3. 项目进展
今日共有 9 个 PR 被合并/关闭，由核心贡献者 `@mfolofy` 集中推进。这些合并标志着项目在**成本控制、技能管理和辅助模型提示词**方面取得了实质性进展：

*   **辅助模型成本优化**：[PR #36900](https://github.com/NousResearch/hermes-agent/pull/36900) (P1) 将默认的辅助任务模型从付费的 Gemini Flash 替换为 `openrouter/free`，大幅降低了用户的隐式运行成本。
*   **技能隔离与定制**：合并了两个重要的技能相关 PR。 [PR #36951](https://github.com/NousResearch/hermes-agent/pull/36951) 允许通过配置为特定技能单独覆盖所用模型；[PR #36924](https://github.com/NousResearch/hermes-agent/pull/36924) 引入了 `.protected` 机制，防止 Agent 在运行时自动篡改关键技能文件。
*   **用户体验优化**：[PR #36940](https://github.com/NousResearch/hermes-agent/pull/36940) 优化了未配置辅助 LLM 时的控制台警告信息，使其更具指导性。

---

## 4. 社区热点
今日讨论热度最高的问题是关于 **Google Vertex AI 的原生支持** 以及 **桌面端的稳定性反馈**：

*   **[Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639) (👍7, 💬8)**：社区强烈呼吁原生支持 Google/Vertex AI Provider。用户目前通过 OpenRouter 路由 Gemini 3.1 Pro 时频繁遇到 `HTTP 402` (收费加价) 和限流错误。诉求明确：需要绕过第三方中间商，直接调用官方 API。
*   **[Issue #38015](https://github.com/NousResearch/hermes-agent/issues/38015) (👍3, 💬2)**：Linux Wayland 原生环境下的桌面端闪烁问题引发了原生日志输出用户的集体共鸣，目前尚无绕过方案。
*   **[Issue #41355](https://github.com/NousResearch/hermes-agent/issues/41355) (P1)**：Gateway 忽略 `--profile` 标志导致加载默认配置，引发了多配置用户的严重关注，该问题直接影响数据隔离。

---

## 5. Bug 与稳定性
今日报告了大量影响核心体验的 Bug，其中多个高危 Bug（P1/P2）已有对应的修复 PR 待合并：

*   🔴 **[P1] Docker 容器启动失败**：[Issue #36208](https://github.com/NousResearch/hermes-agent/issues/36208) 指出 2026.5.28 版本后官方 Docker 容器无法启动（已关闭，可能已修复或在特定环境复现）。
*   🟠 **[P2] Gateway 配置文件污染**：[Issue #41355](https://github.com/NousResearch/hermes-agent/issues/41355) 忽略 profile 隔离。**➡️ 已有修复 PR**：[PR #41474](https://github.com/NousResearch/hermes-agent/pull/41474)。
*   🟠 **[P2] Bedrock 区域推理配置断裂**：[Issue #41296](https://github.com/NousResearch/hermes-agent/issues/41296) 会话中切换模型无法正确设置 `_bedrock_region`。
*   🟠 **[P2] 安全钩子失效**：[Issue #41457](https://github.com/NousResearch/hermes-agent/issues/41457) TUI 和 ACP 入口点未注册 `pre_tool_call` 钩子，导致安全拦截失效。**➡️ 已有修复 PR**：[PR #41555](https://github.com/NousResearch/hermes-agent/pull/41555)。
*   🟠 **[P2] Cron 崩溃**：[Issue #41392](https://github.com/NousResearch/hermes-agent/issues/41392) 当任务无投递目标时 `hermes cron list` 直接抛出 TypeError 崩溃。
*   🟡 **[P3] 桌面端视觉体验下降**：包括 macOS 代码签名失败 ([Issue #41499](https://github.com/NousResearch/hermes-agent/issues/41499))、Wayland 闪烁 ([Issue #38015](https://github.com/NousResearch/hermes-agent/issues/38015)) 以及 iTerm2 状态栏闪烁 ([Issue #41480](https://github.com/NousResearch/hermes-agent/issues/41480))。

---

## 6. 功能请求与路线图信号
从近期的 Feature Request 和 PR 动向来看，Hermes Agent 正在向**多模态企业级协同助手**演进：

*   **飞书生态深度集成**：[Issue #10356](https://github.com/NousResearch/hermes-agent/issues/10356) 提出将 Hermes 的能力扩展到飞书的文档、表格、日历等全生态。随着中国企业出海和全球化办公，多端集成成为刚需。
*   **Agent 自愈与防死锁机制**：[Issue #41313](https://github.com/NousResearch/hermes-agent/issues/41313) 和 [Issue #41314](https://github.com/NousResearch/hermes-agent/issues/41314) 提出了“停滞检测器”和“错误智能分类”。这表明社区希望 Agent 在遇到死循环或错误时能自主判断并恢复，而非盲目重试。
*   **可观测性增强**：[PR #41542](https://github.com/NousResearch/hermes-agent/pull/41542) 增加了实时玻璃事件总线，为后续构建更强大的 UI 监控面板和运行日志分析奠定了基础。

---

## 7. 用户反馈摘要
通过对今日 Issue 的分析，提取出用户的以下核心反馈：
1.  **本地部署体验存在痛点**：在 Mac（代码签名冲突）和本地 Docker 环境中，用户遇到了不少阻塞性问题，期望针对原生开发环境提供更开箱即用的体验（如自动 Ad-hoc 签名）。
2.  **多渠道消息处理残缺**：WhatsApp 群组/LID 消息发送静默失败 ([Issue #41407](https://github.com/NousResearch/hermes-agent/issues/41407)) 和 Telegram 视频无法被 Agent 感知 ([Issue #41366](https://github.com/NousResearch/hermes-agent/issues/41366)) 表明，虽然集成了通讯平台，但边界情况（如多模态解析和高级 JID 寻址）处理尚不完善。
3.  **路径和状态管理亟待重构**：Auxiliary 模型切换保留旧 base_url ([Issue #41092](https://github.com/NousResearch/hermes-agent/issues/41092))、Kanban worker 路径错乱 ([Issue #41312](https://github.com/NousResearch/hermes-agent/issues/41312)) 等问题集中爆发，反映出在状态切换和上下文清理方面的底层逻辑需要进一步解耦。

---

## 8. 待处理积压
*提醒：以下重要的 Issue 和 PR 已提交但尚未得到核心团队的 Review 或合并，存在积压风险。*

*   **待合并的 PR 积压**：目前有 **41 个 PR 处于 Open 状态**。其中包含多个至关重要的修复（如 Gateway 配置污染修复 [PR #41474](https://github.com/NousResearch/hermes-agent/pull/41474)、安全修复 [PR #41559](https://github.com/NousResearch/hermes-agent/pull/41559) 和 [PR #41555](https://github.com/NousResearch/hermes-agent/pull/41555)），建议维护团队优先进行 Code Review 以便尽快发版。
*   **[Issue #31135](https://github.com/NousResearch/hermes-agent/issues/31135) 自托管 Mem0 集成**：允许使用本地 REST 客户端对接 Mem0 开源版本，此 Feature 请求开放已久，但目前仍未有官方 PR 将其纳入主线，对于关注数据隐私的企业用户这是一个强需求。
*   **[Issue #41480](https://github.com/NousResearch/hermes-agent/issues/41480) / [Issue #38015](https://github.com/NousResearch/hermes-agent/issues/38015) UI 渲染闪烁**：影响日常阅读体验，目前似乎尚未有针对性的底层修复方案。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-06-08)

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日维持了**极高的活跃度与健壮性**，整体处于高速迭代期。过去 24 小时内项目共处理了 19 个 Pull Requests（其中 12 个顺利合并/关闭）和 20 个 Issues（17 个得到关闭），展现了核心团队高效的代码审查与社区问题响应能力。今日工程重心明显向**系统稳定性与防御性编程**倾斜，多位贡献者集中提交了针对类型断言、文件 I/O 错误处理的加固修复。同时，项目发布了最新的 `v0.2.9-nightly` 版本，集成了一系列底层优化。

---

## 2. 版本发布

- **[nightly: Nightly Build v0.2.9-nightly.20260607.7d2b0c2a](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新内容**：自动集成了当前 `main` 分支的最新代码，包含了今日合并的 Anthropic 模型 ID 修复、多项底层文件 I/O 及并发安全相关的防御性增强。
  - **稳定性提示**：官方明确提示此为自动化构建，可能存在不稳定性，建议谨慎用于生产环境。

---

## 3. 项目进展

今日合并的 PR 极大提升了系统的容错能力、多渠道兼容性及底层性能，项目整体在质量维度迈出了扎实的一步：

- **底层稳定性加固（合并 6 项）**：
  - 修复了 `mcp add` 子命令的全局参数解析混乱问题 ([PR #3048](https://github.com/sipeed/picoclaw/pull/3048))。
  - 修复了模型探测缓存中的类型断言潜在崩溃 ([PR #3040](https://github.com/sipeed/picoclaw/pull/3040))。
  - 集中处理了多处文件写入 (`io.Copy`, 飞书资源下载等) 后 `Close()` 错误被静默忽略的隐患，防止磁盘满时产生损坏文件 ([PR #3033](https://github.com/sipeed/picoclaw/pull/3033), [PR #3034](https://github.com/sipeed/picoclaw/pull/3034), [PR #3035](https://github.com/sipeed/picoclaw/pull/3035))。
- **多渠道与模型支持优化**：
  - 修复了 Anthropic 默认模型 ID 格式错误（从带点的 `claude-sonnet-4.6` 改为 API 要求的 `claude-sonnet-4-6`），解决了新用户首次调用 404 的问题 ([PR #3036](https://github.com/sipeed/picoclaw/pull/3036))。
  - 支持了 Telegram 群组中“回复机器人消息”等同于 @提及的交互优化 ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975))。
- **架构与性能突破**：
  - 改进了消息总线背压处理机制，提升了高负载下的稳定性 ([PR #2906](https://github.com/sipeed/picoclaw/pull/2906))。
  - 优化了 Skill 加载逻辑，自动跳过运行环境缺失依赖二进制文件的技能，避免 LLM 产生无效调用 ([PR #2936](https://github.com/sipeed/picoclaw/pull/2936))。

---

## 4. 社区热点

今日社区讨论聚焦于多渠道接入、边界条件报错及部署文档：

1. **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) - Codex OAuth 流式响应空内容** (👍 4, 评论 8)
   - **诉求分析**：用户在使用 ChatGPT 后端的 Codex OAuth 时遇到返回空响应。这反映了高级用户将 PicoClaw 作为多种 LLM 后端统一网关的强烈需求。
2. **[Issue #286](https://github.com/sipeed/picoclaw/issues/286) - 请求 Android Termux 部署文档** (👍 2, 评论 8)
   - **诉求分析**：社区对将 PicoClaw 运行在移动端（尤其是低成本 ARM64 设备上）作为个人 AI 助手表现出浓厚兴趣，对应的 [PR #2902](https://github.com/sipeed/picoclaw/pull/2902) 已提交待最终合并。
3. **[Issue #3044](https://github.com/sipeed/picoclaw/issues/3044) - Matrix 协议 `allow_from` 规则失效** (评论 0，但衍生多个同名被误开的 Issue)
   - **诉求分析**：去中心化通讯协议 Matrix 的用户 ID 格式特殊（包含冒号），导致现有权限校验被错误截断。该问题今日被报告后，立即有贡献者跟进并提交了 [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)。

---

## 5. Bug 与稳定性

今日报告的 Bug 集中在身份校验、命令行解析和 Provider 默认配置上，整体已得到社区的快速响应：

- **🟡 中度：MCP 添加命令参数解析错位** ([Issue #3041](https://github.com/sipeed/picoclaw/issues/3041))
  - **现象**：使用 `picoclaw --no-color mcp add` 时，全局标志被错误解析为位置参数，导致添加 HTTP/SSE 服务器失败或发生静默错误命名。
  - **状态**：✅ **已修复**，待合并 [PR #3048](https://github.com/sipeed/picoclaw/pull/3048)。
- **🟡 中度：Matrix 用户 ID 权限拦截异常** ([Issue #3044](https://github.com/sipeed/picoclaw/issues/3044))
  - **现象**：`@localpart:domain` 格式在 `allow_from` 校验时被错误分割，导致合法消息被拒。
  - **状态**：✅ **已修复**，待合并 [PR #3045](https://github.com/sipeed/picoclaw/pull/3045)。
- **🟢 轻微：默认 Anthropic 模型 ID 不合规** ([Issue #2941](https://github.com/sipeed/picoclaw/issues/2941))
  - **现象**：默认生成的配置中使用了带点号的模型 ID，导致 Anthropic API 返回 404 Not Found。
  - **状态**：✅ **已修复并合并** [PR #3036](https://github.com/sipeed/picoclaw/pull/3036)。

---

## 6. 功能请求与路线图信号

从近期的 Issues 提炼出项目的演进方向，多渠道适配与 Agent 能力扩展是下一步重点：

- **集成新的 Web 搜索提供商**：用户请求将 Kagi 搜索 ([Issue #2978](https://github.com/sipeed/picoclaw/issues/2978)) 作为原生 Provider。目前社区已提交 [PR #3037](https://github.com/sipeed/picoclaw/pull/3037) 实现了该功能，有望在下一版本纳入。
- **会话历史记录深度查询**：针对 Web UI 的能力增强，[PR #3047](https://github.com/sipeed/picoclaw/pull/3047) 增加了绕过归档标记读取完整 JSONL 历史记录的功能，使得前端可以展示更深度的长周期上下文。
- **Agent 循环与重载机制**：开发者正在深度重构 Agent 循环以解决并发阻塞和 Panic 恢复问题 ([PR #2904](https://github.com/sipeed/picoclaw/pull/2904))，这对于 PicoClaw 作为智能体运行时的稳定性至关重要，预计将显著提升复杂任务执行的鲁棒性。

---

## 7. 用户反馈摘要

从 Issues 讨论与标签中，可以提取出当前真实用户的几个核心体验切片：

- **痛点：模型配置与接入门槛依然偏高**。有用户反馈在 QQ 渠道使用时容易触发额外多余命令报错，且界面模型配置不够直观（希望支持 API 一键拉取模型列表并复用 Key） ([Issue #2952](https://github.com/sipeed/picoclaw/issues/2952))。
- **场景：边缘设备私人部署**。大量用户尝试在 Android Termux 或极便宜的硬件（如 $10 的树莓派级别设备）上运行 PicoClaw，期待官方提供更轻量的构建和预配置的二进制文件。
- **满意度：社区响应极快**。部分用户在发现阻塞性 Bug 后（如 Matrix ID 和 MCP 解析问题），在当天就收到了核心贡献者的针对性修复 PR，对项目的维护效率表示高度认可。

---

## 8. 待处理积压

以下长期关注的事项仍处于开启或待 Review 状态，建议维护团队评估优先级：

1. **[PR #2904](https://github.com/sipeed/picoclaw/pull/2904) - Fix agent loop reload and panic cleanup stability**
   - **说明**：涉及重构 Agent 核心调度逻辑，解决 goroutine 泄露及 panic 阻断问题。属于核心架构改动，合并需谨慎评估，但对长期稳定性极为关键。
2. **[PR #3018](https://github.com/sipeed/picoclaw/pull/3018) & [PR #3043](https://github.com/sipeed/picoclaw/pull/3043) - 全局防御性错误处理**
   - **说明**：大量修复代码中 `ok` 未检查及错误被 `_` 静默吞没的早期历史债务。涉及面较广，需要集中进行一轮完整的 Code Review。
3. **[Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) - Codex OAuth 空响应**
   - **说明**：已活跃较久，属于 OpenAI 特定接口的流式解析边界问题，建议在下一个版本排期解决。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 6 月 8 日 NanoClaw (github.com/qwibitai/nanoclaw) 项目动态日报：

---

# 📊 NanoClaw 开源项目日报 (2026-06-08)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目保持了**高度活跃**的开发与社区参与状态，共产生了 3 个新开 Issues 和 6 个待合并的新 PR。项目整体重心目前明显聚焦于**部署稳定性优化（Setup 流程与容器生命周期管理）**以及**多模型账号轮换机制**的深度修复。社区对多后端（如 Ollama、OneCLI）的兼容性及企业级权限控制（RBAC）表现出了强烈诉求。今日无新版本发布，但代码库主干正在为更健壮的升级和鉴权机制积蓄代码量。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 3 个 Pull Requests 被关闭（其中包含重要的机制修复），项目在稳定性和多模型适配方面取得了实质性进展：

*   **PR #2707 [CLOSED] feat(upgrade): startup tripwire + upgrade marker**：这是一个核心健壮性提升。合并后，系统将拒绝通过非标准路径（如直接 `git pull`）启动，强制要求通过 `/setup` 或 `/migrate-nanoclaw` 执行升级。这从根本上避免了因数据库未迁移导致的静默崩溃。
*   **PR #2706 [CLOSED] fix(账号轮换): 限制模式并校准切换状态**：针对多 AI 提供商（Codex/Gemini/Anthropic）共存时的账号额度混乱问题进行了修复。优化了轮换前的 DB 游标漂移校准，并改进了进程结束信号（SIGTERM -> SIGKILL 兜底），显著提升了多账号并发场景下的稳定性。
*   **PR #2710 [CLOSED] docs(ollama): allow prompt caching**：完善了官方文档，指导用户如何在使用本地 Ollama 模型时绕过破坏缓存的哈希机制，提升本地模型响应速度。

## 4. 社区热点
今日社区的关注点集中在**配置文件污染**和**新手体验受挫**上：

*   **Issue #2312 [OPEN] groups/global/CLAUDE.md 被无条件删除**：(2 条评论)。这是一个长期存在的开发体验痛点，`migrateGroupsToClaudeLocal()` 逻辑导致每次启动都会删除该文件，使得 Git 工作树永远处于脏数据状态。虽然 Issue 存在已有一月，但今日再次引发讨论。
*   **Issue #2703 [OPEN] setup: 推荐路径导致 `pnpm run chat hi` 卡死**：社区严格遵循官方推荐的新手安装流程，却发现 CLI 未正确连接，导致命令硬等 120 秒后超时。这暴露了 Setup 流程在特定环境下的断连问题。

## 5. Bug 与稳定性
今日报告了数个影响系统稳定性和安全性的 Bug，按严重程度排列如下：

*   **🔴 P0 严重 - 权限绕过**：**Issue #2711** `create_agent` MCP tool 未做权限校验。虽然文档标记为“仅限管理员”，但任何容器都可以调用它来创建新的 Agent 组，存在严重的多租户隔离和越权风险。目前尚无对应 Fix PR。
*   **🟠 P1 较高 - 核心体验损坏**：**Issue #2703** 安装推荐路径产生的 CLI 断连挂起（120s Timeout），直接影响开发者首次使用体验。
*   **🟡 P2 中等 - 凭证网关失效**：**PR #2705** 揭示了 `use-native-credential-proxy` 在真实环境（systemd/launchd）下静默降级回退的 Bug，PR 已提交修复方案。
*   **🟢 P3 一般 - UI/输出异常**：**PR #2531** 修复了在 Agent 轮询期间发送消息导致文本重复输出的显示 Bug。

## 6. 功能请求与路线图信号
从今日活跃的 PR 和 Issue 中，可以捕捉到项目下一阶段的演进信号：

*   **强化容器与底层基础设施管理**：**PR #2709** 正在为 `container_configs` 引入数据库支持的 JSON 列（环境变量 `env` 和屏蔽主机 `blocked_hosts`）。这表明项目正在向更复杂、更安全的分布式容器编排演进（响应维护者自己的 Issue #1867）。
*   **多通道集成（Telegram）**：长期存续的 **PR #1626**（Telegram topic 隔离与自动注册）今日再次活跃，表明社区对将 NanoClaw 接入即时通讯平台作为前端 Client 的需求非常强烈。
*   **底层代码的可测试性重构**：**PR #2704** 提议导出 `parseArgs` 以进行单元测试。反映出社区正在帮助项目补齐核心 Setup 模块的测试覆盖率。

## 7. 用户反馈摘要
综合今日的 Issue 和 PR 描述，提炼出真实用户的反馈特征：

*   **痛点 1：多后端混合部署的磨合成本高**。用户在整合 Ollama (本地) 和 OneCLI/Claude (云端) 时，频繁遇到缓存失效、凭证网关失效等问题，配置缺乏开箱即用的顺畅感。
*   **痛点 2：生命周期管理的孤儿进程**。**PR #2708** 指出在服务停止时，经常残留“孤儿 Agent 容器”未能正确清理，导致系统资源泄漏，说明 NanoClaw 在高负载容错处理上需要加强。
*   **正面反馈**：社区开发者（如 markbala, Luggagethecat）正在积极遵循项目的 `contributing-guide` 贡献文档和单测，说明项目的开源治理规范（PR 模板、指南）执行度良好，社区建设健康。

## 8. 待处理积压
*   **[维护者请关注] 长期未解的 Git 树污染问题**：**Issue #2312** 已开启超过一个月，引起了至少 2 次讨论，至今无官方 Fix PR。此问题严重影响需要频繁 `git pull` 的开发者体验，建议优先排期。
*   **[需确认] 孤儿容器清理机制**：**PR #2708** 提出了服务停止时清理孤儿容器的修复，目前状态为 Open 且待审，需维护者确认其与现有 K8s/Docker 编排策略的兼容性。
*   **[安全隐患] MCP 鉴权缺失**：今日爆出的 **Issue #2711**（MCP Agent 无鉴权创建）涉及核心安全边界，建议维护团队立即介入评估并打上 P0 标签。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-06-08)

> **数据来源**: [nearai/ironclaw](https://github.com/nearai/ironclaw) | **分析周期**: 过去 24 小时

---

### 1. 今日速览

IronClaw 项目今日维持了**高强度的开发与社区互动活跃度**。在过去 24 小时内，项目共处理了 50 条 Issue 更新（新增/活跃 40 条，关闭 10 条）以及 37 条 PR 更新（待合并 22 条，合并/关闭 15 条），展现了核心团队极高的迭代效率。

从动态轨迹来看，项目目前处于 **"Reborn" 架构演进的深水区**，核心开发者（serrrfirat, zmanian 等）正密集推进主机内核安全（Host Kernel）、WebUI Beta 以及多渠道集成等关键里程碑。PR 活动中有大量关于 Web 端会话管理、技能系统和 Slack 渠道对接的具体实现，表明项目正在为下一个重要版本的发布进行功能收尾与整合。

---

### 2. 版本发布

**今日无新版本发布。**

*注：目前在 [PR #3708](https://github.com/nearai/ironclaw/pull/3708) 中正处于版本发布准备阶段，计划将核心组件（如 `ironclaw_common` 从 0.4.2 升级到 0.5.0）推送至新的版本号，其中包含部分破坏性 API 变更，但目前尚未正式合并发布。*

---

### 3. 项目进展

今日已合并/关闭了 15 个 PR，项目在以下几个关键领域取得了实质性向前迈进：

*   **WebUI 会话与删除能力完善**：合并了 [PR #4516 Add WebChat v2 thread deletion](https://github.com/nearai/ironclaw/pull/4516)，为 Web 端用户提供了完整的会话生命周期管理（删除线程），并严格实现了鉴权与越权防护。
*   **Slack 宿主集成闭环**：[PR #4463 feat(slack): wire host-beta durable stores](https://github.com/nearai/ironclaw/pull/4463) 的合并标志着 Slack 渠道在 Reborn 架构下实现了持久化状态支持，能够可靠唤醒 turn runner 并完成对话闭环。
*   **工具可见性与可恢复性增强**：[PR #4530 Add structured model-visible tool observations](https://github.com/nearai/ironclaw/pull/4530) 合并，优化了底层工具调用的错误边界，使得 LLM 在工具执行失败时能够获得结构化且安全的恢复上下文。
*   **CI 与质量门禁优化**：[PR #3565 ci: extend nightly e2e timeout](https://github.com/nearai/ironclaw/pull/3565) 和 [PR #3298 chore(ci): add hermetic local gate](https://github.com/nearai/ironclaw/pull/3298) 相继合入，极大地改善了端到端测试的稳定性和本地代码提交的安全性验证。

---

### 4. 社区热点

今日讨论最密集、关注度最高的焦点依然集中在 **"Reborn" 核心架构的重构与 WebUI Beta 的推出**：

*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280) [7 评论]**：关于增加 `ProductWorkflow` 和 `InboundTurnService` 外观层的讨论。这是 Reborn 架构中连接产品适配器和底层核心服务的关键枢纽，大量关联 Issue 表明这是当前架构重构的咽喉要道。
*   **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) [5 评论, 👍1]**：配置即代码基础设施的史诗级议题。社区及开发者对目前繁杂的配置方式（.env, json等）感到痛点明显，强烈呼唤声明式、可审计的配置模式，这将是多租户和规模化部署的基础。
*   **Hooks 安全性重构系列 (by zmanian)**：包括 [Issue #3957 Third-party activation hardening](https://github.com/nearai/ironclaw/issues/3957) 和 [Issue #3956 FS-hardening follow-up](https://github.com/nearai/ironclaw/issues/3956)。核心贡献者正在对第三方 Hook 激活机制进行严格的沙箱隔离与安全防逃逸审查，反映出项目对生产级安全标准的高度重视。

---

### 5. Bug 与稳定性

今日报告的缺陷和稳定性风险主要集中在 **Reborn 架构的安全边界和缺失组件** 上，多为阻碍上线的 P0/P1 级别阻断项，暂未观察到常规的业务 UI Bug：

*   **[P0 阻滞] [Issue #3333](https://github.com/nearai/ironclaw/issues/3333) Production wiring and missing crates**：审计发现 Reborn 技术栈中仍然存在一些伪装的/内存中的/空操作的接缝，缺乏真实的生成环境实现组件，这是上线的直接阻断因素。
*   **[P0 安全] [Issue #3032](https://github.com/nearai/ironclaw/issues/3032) Reborn cutover blocker: no-exposure safeguards**：防止原始敏感数据跨越公共/模型可见边界的生产就绪安全层缺失。
*   **[P1 缺陷修复] [PR #4492](https://github.com/nearai/ironclaw/pull/4492) fix configured extension credential staging**（已提交，待合并）：修复了本地开发环境下扩展凭证暂存区无法正确传递给首次能力调用的配置缺陷。

---

### 6. 功能请求与路线图信号

根据今日的活跃 Issue 和 PR，可以看出项目在短期内正集中向以下几个战略目标发力，相关功能极有可能会在近期合入主干：

*   **WebUI v2 管理端完善**：
    *   **用户技能管理 UI**：[PR #4527 Add user-scoped skills settings UI](https://github.com/nearai/ironclaw/pull/4527) 正在审查中，将赋予用户自定义和管理 Agent 技能的完整界面。
    *   **Slack 渠道管理**：[PR #4532 Add Slack allowed-channel picker](https://github.com/nearai/ironclaw/pull/4532) 正在开发，允许管理员在 WebUI 中直接配置允许接入的 Slack 频道。
*   **开发体验与本地运行时**：
    *   **一键式本地运行时配置**：[Issue #3044](https://github.com/nearai/ironclaw/issues/3044) 提出了简化本地编码代理启动流程的需求（目标只需一条命令即可跑起全套环境）。配套的 [PR #4517 Seed Reborn config.toml on first runtime start](https://github.com/nearai/ironclaw/pull/4517) 已经提交，表明这项大幅优化开发者体验的功能即将落地。
*   **兼容性与生态扩展**：
    *   **SSO 平移**：[Issue #4116](https://github.com/nearai/ironclaw/issues/4116) 提出了将 Google/GitHub/NEAR SSO 登录无缝平移至 WebChat v2 的需求，这是用户账户体系互通的重要信号。

---

### 7. 用户反馈摘要

通过对今日更新的 Issue 及 PR 描述进行语义提炼，获取到的核心用户/开发者反馈如下：

*   **开发者体验（DX）亟待轻量化**：开发者对当前繁杂的手动配置（如手动连接 grants, mounts, 网络策略等）感到疲惫。反馈指出，IronClaw 作为个人 AI 助手/智能体底座，其本地启动理应做到一键式、开箱即用（参考 Issue #3044）。
*   **对数据持久化与合规性的安全感不足**：企业级或进阶用户非常关注多租户环境下的隔离与数据不越界暴露（Issue #3032, #3957）。用户期望系统能够在底层提供强有力的证明机制，确保 LLM 不会将敏感数据意外持久化或跨权限流转。
*   **LLM 上下文恢复能力需增强**：底层开发者指出，目前当工具调用失败时，反馈给大模型的错误信息过于保守，导致大模型难以进行有效的自我纠正或重试（Issue #4059），呼唤更丰富的“带安全边界的上下文反馈”。

---

### 8. 待处理积压

以下重要高优先级（P0）项目虽有活跃讨论，但横跨多模块，依赖关系复杂，需重点跟进以防延误版本：

*   **[P0 架构/安全] [Issue #3609](https://github.com/nearai/ironclaw/issues/3609) Re-attenuate approval leases against reviewed descriptor**：关于修复审批租约解析过度信任 UI 提供的衰减值的安全缺陷。如果被绕过可能导致越权，目前仍处于 Open 状态，是 WebUI Beta 发布的先决条件。
*   **[P0 架构/组合] [Issue #3026](https://github.com/nearai/ironclaw/issues/3026) Reborn cutover blocker: add config-driven production composition root**：定义配置驱动的生产组合根，是 Reborn 从测试走向生产的必经之路，目前仍未见明确的关闭或合并 PR 动作。
*   **[P0 核心流程] [Issue #3423](https://github.com/nearai/ironclaw/issues/3423) Add loop input resume and cancellation semantics**：Reborn 循环输入的恢复和取消语义定义。这直接关系到 Agent 长时间运行任务的容错率和控制力，属于关键缺失拼图，建议维护团队优先排期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-06-08)

## 1. 今日速览
过去 24 小时，LobsterAI 项目整体呈现出 **“高社区输入、零工程输出”** 的停滞特征。项目今日收到 15 条 Issues 更新（其中包含 1 条全新 Bug 报告），但在代码工程侧表现为“零合并 PR、零新发版本”。大量历史功能缺陷和体验优化建议因长期未获官方响应被自动标记为 `[stale]`，反映出项目维护团队当前可能面临资源瓶颈。尽管如此，社区用户依然保持着较高的参与热情，积极为 AI 会话管理、多端 IM 互通等核心场景贡献深度诊断报告和建设性需求。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
**本日无已合并或已关闭的 PR。**
目前项目暂无可见的代码合并记录，这意味着近期社区反馈的缺陷（如状态同步、UI 校验等）尚未转化为实际的代码修复。项目整体在代码工程推进上处于暂缓状态。

## 4. 社区热点
今日最活跃的讨论集中在历史遗留的痛点反馈上，多位核心用户针对产品的易用性和功能完整性进行了深入剖析，这些 Issue 虽已进入 `[stale]` 状态，但依然具有极高的产品参考价值：
*   **AI 理解与执行过程不可见**：[#1509](https://github.com/netease-youdao/LobsterAI/issues/1509) 引发了关于模型长时生成阻塞且缺乏中间态展示的讨论，用户直言竞品在同等模型下表现更优，直指产品交互体验软肋。
*   **会话管理能力亟待升级**：多个高频 Issue 聚焦于此，包括要求提供会话颜色标注（[#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)）、多维度标签分类（[#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)）、消息收藏/书签功能（[#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)）以及批量导出（[#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)）。
*   **基础 CI/CD 修复建议**：开发者 @swuzjb 在 [#1518](https://github.com/netease-youdao/LobsterAI/issues/1518) 中指出了 Labeler 权限错误等底层工作流问题，体现了社区对项目基础设施健康度的关注。

## 5. Bug 与稳定性
今日报告的 Bug 呈现出两个极端：一个是阻塞性的业务逻辑失效，另一个是潜在的 Token 资源消耗漏洞。按严重程度排列如下：

*   **🚨 严重 (P0 - 资源消耗/计费相关)**：
    *   [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)：全新报告的 Bug。AI 出现重复输出文字的现象，用户严重怀疑这会导致无效的 Token 消耗（“大量吃我的token”）。*（目前无 Fix PR）*
*   **🔶 高 (P1 - 核心功能失效与状态不一致)**：
    *   [#1500](https://github.com/netease-youdao/LobsterAI/issues/1500)：禁用技能后未从 `activeSkillIds` 移除，导致禁用失效。
    *   [#1516](https://github.com/netease-youdao/LobsterAI/issues/1516)：关闭设置面板导致 GitHub Copilot OAuth 轮询未取消，认证成功后 Token 静默丢失。
    *   [#1502](https://github.com/netease-youdao/LobsterAI/issues/1502)：Agent 技能列表保存后当前会话不生效，需手动切换 Agent 强制刷新。
    *   [#1506](https://github.com/netease-youdao/LobsterAI/issues/1506)：定时任务选择 IM 通知后，会话为空仍可提交，导致运行时通知静默失败。
*   **🟡 中 (P2 - UI 交互与数据校验)**：
    *   [#1512](https://github.com/netease-youdao/LobsterAI/issues/1512)：QQ Bot 白名单模式缺失 UI 输入框，无法配置。
    *   [#1504](https://github.com/netease-youdao/LobsterAI/issues/1504)：POPO 的 AES Key 缺失必填校验。
    *   [#1513](https://github.com/netease-youdao/LobsterAI/issues/1513)：「声明条款」内容排版混乱，存在序号重复和括号不完整。

*当前所有 Bug 均无对应的 Fix PR。*

## 6. 功能请求与路线图信号
从近期的 Issues 动态来看，重度用户对 LobsterAI 的期望正从“基础对话工具”向“高级生产力/知识管理工具”演进。以下关键功能请求建议纳入产品路线图规划：
*   **信息管理与检索体系**：引入颜色标注（[#1525](https://github.com/netease-youdao/LobsterAI/issues/1525)）、标签系统（[#1541](https://github.com/netease-youdao/LobsterAI/issues/1541)）和消息书签（[#1537](https://github.com/netease-youdao/LobsterAI/issues/1537)），解决长文本和海量会话场景下的信息回溯难题。
*   **数据所有权支持**：支持批量导出会话为 JSON 等结构化文件（[#1528](https://github.com/netease-youdao/LobsterAI/issues/1528)），满足设备迁移和团队备份需求。
*   **数据洞察**：增加本地会话使用统计面板（[#1532](https://github.com/netease-youdao/LobsterAI/issues/1532)）。

## 7. 用户反馈摘要
基于今日动态的深度挖掘，LobsterAI 的真实用户痛点集中在以下三个维度：
1.  **Token 焦虑与黑盒执行**：用户对模型算力消耗极其敏感（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）。同时，Skills 生成时的阻塞无提示让用户对系统是否在运作产生严重怀疑（[#1509](https://github.com/netease-youdao/LobsterAI/issues/1509)）。
2.  **状态同步割裂感**：前端 UI 状态与后端数据存在明显脱节，用户频繁遇到“表面操作成功，实际未生效”的错觉（如关闭技能不生效、保存配置不加载、IM 通知静默失败等），严重损害了产品的可信度。
3.  **重度使用效率低下**：随着用户沉淀的会话增多，扁平化的列表管理方式已遭遇体验瓶颈，急需引入立体的分类检索机制。

## 8. 待处理积压
当前项目的最大风险在于**积压清理机制的误伤与官方响应缺位**。高达 14 个 Issues 在今日被标记为 `[stale]`，但这其中绝大部分包含了极其详尽的复现步骤、根本原因分析（甚至深入到 Redux 状态流和主进程 Polling 机制）。
*   **强烈呼吁维护团队重点关注**：包含详尽代码级诊断的高质量 Issue，如 OAuth Token 丢失（[#1516](https://github.com/netease-youdao/LobsterAI/issues/1516)）、Skills 状态残留（[#1500](https://github.com/netease-youdao/LobsterAI/issues/1500)）。
*   **基础设施待修复**：CI/CD 工作流报错（[#1518](https://github.com/netease-youdao/LobsterAI/issues/1518)）直接影响社区贡献者的 PR 提交体验，建议优先修复，以重新激活社区贡献热情。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是 `moltis-org/moltis` 项目 2026-06-08 的动态日报：

---

# Moltis 项目动态日报 (2026-06-08)

## 1. 今日速览
过去 24 小时内，Moltis 项目整体处于**稳定且活跃的开发迭代状态**，重心向系统稳定性、数据持久化优化及多端体验倾斜。
- **活跃度指标**：新增/活跃 Issues 1 条，活跃 Pull Requests 3 条；无新版本发布。
- **开发聚焦**：核心贡献者 `s-salamatov` 集中处理了流式输出修复、上下文体积控制及可见性权限等底层逻辑，显示出项目正在为更大规模的生产部署做架构打磨。
- **社区动态**：移动端 Web UI 的体验优化成为用户侧关注的新焦点。

---

## 2. 版本发布
**本日无新版本发布。**
当前项目处于密集的功能补充与底层代码优化阶段，多个活跃 PR 尚待合并，预计将在这些核心优化落盘后发布下一个迭代版本。

---

## 3. 项目进展
今日虽然没有 PR 被合并或关闭，但多个关键 PR 迎来了实质性活跃更新，这些工作正在显著提升项目的健壮性：

- **[#1113 hotfix(telegram): stream final replies without completion notify](https://github.com/moltis-org/moltis/pull/1113)**
  - **进展**：针对 PR #1099 引入的 Telegram 流式输出（streaming）功能发布了 Hotfix。
  - **价值**：修复了在禁用“完成通知”时，最终答案未能作为流式最终回复处理的边缘场景，提升了 Telegram 端用户获取 AI 回复的流畅度与可靠性。
- **[#1089 Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089)**
  - **进展**：涉及会话历史重载的深水区重构。
  - **价值**：限制重新注入到上下文中的 `tool` 和 `tool_result` 内容大小。此举全面覆盖了常规对话、流式输出、重试、静默记忆轮次及压缩提示词等场景，将大幅降低长对话场景下的 Token 消耗和内存溢出风险。
- **[#1093 Add channel activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093)**
  - **进展**：细化了渠道可见性控制粒度。
  - **价值**：引入了账号级、频道级和用户级的 `activity_log` 可见性设置（支持 `all`, `errors_only`, `off`）。这一特性对于多租户或企业级部署至关重要，满足了不同层级对日志隐私和 auditing 的管理诉求。

---

## 4. 社区热点
今日社区最受瞩目的讨论是关于移动端体验的功能增强：

- **[#1107 [Feature]: Multiline text input in the mobile web UI](https://github.com/moltis-org/moltis/issues/1107)**
  - **热度数据**：1 条评论，自 6 月 5 日创建以来保持活跃。
  - **诉求分析**：随着 AI 对话逐渐复杂，用户在移动端输入长文本或多行代码的痛点显现。该 Issue 核心诉求是移动 Web 端支持多行文本输入，这直接关系到移动端用户的日常交互体验，是提升助手类产品易用性的关键一环。

---

## 5. Bug 与稳定性
今日未报告严重的基础设施崩溃或系统性回归 Bug，整体稳定性良好。但需关注边缘场景的缺陷：

- **中度逻辑缺陷**：Telegram 机器人流式输出在特定配置下的中断。已有对应修复方案，详见 [PR #1113](https://github.com/moltis-org/moltis/pull/1113)。

---

## 6. 功能请求与路线图信号
- **移动端 Web 深化布局**：[#1107](https://github.com/moltis-org/moltis/issues/1107) 表明 Moltis 正在扩展其“全平台适配”的边界，移动 Web 端不再仅是基础功能的简单映射，而是开始追求交互的完善。
- **企业级权限与资源管控**：从 [PR #1093](https://github.com/moltis-org/moltis/pull/1093) 的细粒度日志权限，到 [PR #1089](https://github.com/moltis-org/moltis/pull/1089) 对 Tool 结果的体积限制，释放出明确的**面向 B 端/生产环境优化**的信号。预计这些 PR 合并后，系统在资源开销控制上将迈上一个新台阶。

---

## 7. 用户反馈摘要
- **输入体验亟待升级**：用户反馈高度聚焦于交互界面的人性化，特别是移动端多行文本输入（[Issue #1107](https://github.com/moltis-org/moltis/issues/1107)）的缺失，表明用户正频繁通过手机浏览器进行深度/复杂的 Prompt 编写。
- **流式体验敏感度高**：Telegram 频道的流式输出缺陷被迅速发现并提出修复（[PR #1113](https://github.com/moltis-org/moltis/pull/1113)），说明用户对 AI 生成内容的“实时反馈感”要求极高，任何输出卡顿或遗漏都会被敏锐感知。

---

## 8. 待处理积压
为了保持项目的高效流转，建议维护者关注以下待处理积压：

- **PR 积压风险**：当前有 3 个高质量的核心 PR（[#1113](https://github.com/moltis-org/moltis/pull/1113), [#1089](https://github.com/moltis-org/moltis/pull/1089), [#1093](https://github.com/moltis-org/moltis/pull/1093)）处于 Open 状态且集中在同一开发者名下。建议及时安排 Code Review 并进行合并测试，以避免分支逻辑过度发散或影响后续版本的发布节奏。
- **移动端体验跟进**：针对备受关注的 [Issue #1107](https://github.com/moltis-org/moltis/issues/1107)，建议维护团队尽早确认需求边界（如采用何种交互触发多行输入），并打上 `help wanted` 或 `confirmed` 标签，鼓励社区贡献代码。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026-06-08

作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是基于过去 24 小时 GitHub 数据对 CoPaw 项目生成的动态日报。

## 1. 今日速览
过去 24 小时，CoPaw 项目整体保持着极高的社区活跃度。虽然今日没有发布新版本，也没有合并或关闭任何代码/议题，但社区输入呈现“井喷”状态——单日新增并活跃了 **6 个 Issues** 和 **2 个 PRs**。从议题分布来看，当前的焦点非常明确：**本地化部署的兼容性瓶颈**、**多模态视觉能力的灵活扩展**，以及**智能体底层记忆系统的深度演进**。整体而言，项目正处于一个积极收集社区需求与代码贡献的生态建设期。

## 2. 版本发布
今日 **无** 新版本发布。

## 3. 项目进展
虽然今日暂无 PR 被合并，但有 2 个非常关键的 PR 处于活跃的推进状态中：
*   **ACP 终端协议扩展（#4949）**：由开发者 `ekzhu` 提交，目前已进入 `[Under Review]` 状态。该 PR 大幅扩展了 QwenPaw 的 Agent Client Protocol (ACP)，使得终端 UI 客户端能够接收命令广播、错误暴露、工具参数及模型元数据等。这标志着 QwenPaw 正在积极构建其多端生态，未来在纯命令行环境下的体验将得到质的提升。[查看 PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949)
*   **渲染器工具输出修复（#4995）**：由首次贡献者 `AbbyJL` 提交。修复了在禁用 `show_tool_details` 时，渠道渲染器丢失工具输出附件和可见文本的问题。这是一个提升用户体验细节的高质量社区贡献，目前等待合并。[查看 PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995)

## 4. 社区热点
今日社区讨论最为热烈、参与度最高的话题集中在两个方向：
*   **独立视觉模型的“中转站”构想**（[Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)）：由 `lecheng2018` 发起，获得了 2 条深度评论。社区对于“图片 -> 视觉模型转文字 -> 主模型处理”的解耦架构呼声很高，这反映出重度文本用户（如使用 deepseek-v4-flash 或本地部署纯文本模型）在低成本接入多模态能力时的强烈痛点。
*   **本地 vLLM 部署无响应Bug**（[Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)）：用户 `Cancerhzc` 反馈的严重兼容性问题引发了讨论。用户在标准 OpenAI 协议下对接本地千问3.6-27B模型时遭遇彻底卡死，且是在 1.1.5 之后版本才出现的回归问题，说明近期的版本迭代可能改变了底层的流式通信或超时处理逻辑。

## 5. Bug 与稳定性
今日报告了 2 个明确的 Bug，按严重程度排序如下：
1.  **[P0/严重] 本地模型流式响应卡死**：`Cancerhzc` 报告在 V1.1.9 和 1.1.10 版本中，使用 Docker 结合本地 vLLM 部署的模型时，即使测试连接成功，实际对话也会永久转圈（无报错日志）。而在 1.1.5.post2 版本正常。这是一个典型的严重回归Bug。目前 **尚无 Fix PR**。
    [追踪 Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)
2.  **[P2/一般] 前端图片预览交互异常**：`Guo-HT` 报告在 macOS 客户端（V1.1.10）中，放大图片并拖拽时会出现严重的异常抖动，影响前端视觉体验。目前 **尚无 Fix PR**。
    [追踪 Issue #4993](https://github.com/agentscope-ai/QwenPaw/issues/4993)

## 6. 功能请求与路线图信号
今日社区释放了几个强烈的架构演进信号，值得维护团队关注：
*   **[架构演进] 分层记忆系统框架**：`rescodexa` 在 [Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) 中指出当前 Agent 记忆系统较弱，缺乏“自进化”逻辑。这符合当前主流 Agent 向 Long-term Memory 和反思型架构发展的趋势，有望成为下半年的核心 Roadmap。
*   **[多模态] 视觉能力解耦**：如前文所述，`visual_model` 的配置支持（[Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)）将极大拓宽 QwenPaw 作为个人助手的模型兼容范围。
*   **[渠道拓展] 接入 MAX Messenger**：俄罗斯及东欧地区用户 `pavelvladimirovich258614-sys` 提交了接入 MAX 平台的请求（[Issue #4886](https://github.com/agentscope-ai/QwenPaw/issues/4886)），这契合项目“Every channel”的愿景，有助于项目的国际化扩张。

## 7. 用户反馈摘要
从今日的 Issue 详情与评论中，可以提炼出以下真实用户画像与反馈：
*   **部署喜好**：重度技术用户非常倾向于使用 Docker 配合本地 vLLM/vLLM 架构运行开源模型（如 Qwen3.6-27B），且极度依赖标准的 OpenAI 协议格式。
*   **痛点与摩擦**：版本升级带来的“静默失败”（如后台无报错但前端转圈）极大地增加了用户的排错成本。
*   **满意度**：社区开发者对 QwenPaw 的底层设计（如 ACP 协议）表现出浓厚兴趣，已经开始基于此构建第三方 TUI 客户端；同时，项目对开源社区保持开放态度，吸引了 First-time contributor 提交 PR，说明项目具备健康的贡献者流入率。

## 8. 待处理积压
以下关键问题处于待响应状态，需核心维护者（Paw Team）尽快介入或流转：
*   **🔴 紧急回归排查**：针对本地 Docker + vLLM 用户在升级到 1.1.9+ 后无响应的严重反馈（[Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)），建议核心开发者尽快在本地环境复现，或请求用户提供 vLLM 的详细路由日志。
*   **🟡 空白模板审核**：用户 `Benson2333` 提交了一个包含截图但无实质文字描述的 Issue（[Issue #4991](https://github.com/agentscope-ai/QwenPaw/issues/4991)），目前已有 1 条评论，需维护者确认其意图或补充模板引导。
*   **🟢 PR 审核推进**：首次贡献者的代码（[PR #4995](https://github.com/agentscope-ai/QwenPaw/pull/4995)）和 ACP 重大架构更新（[PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949)）均等待 Review，建议尽快分配 Reviewer 以保持社区参与热情。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 2026-06-08 ZeroClaw 项目动态日报。

---

# 📊 ZeroClaw 项目动态日报 (2026-06-08)

## 1. 今日速览
ZeroClaw 在过去24小时内保持了极高的社区与开发活跃度，共产生 **50 条 Issue 更新**（新开/活跃 31，关闭 19）和 **50 条 PR 更新**（待合并 43，合并/关闭 7）。项目当前处于“功能大扩展与基础设施重构”并行阶段：核心开发者正密集提交 RFC 和大型架构 PR（如出站消息队列、实时模型切换），而社区则聚焦于多渠道适配（QQ/飞书）、Docker 部署体验优化以及 WASM 插件生态的丰富。尽管无新版本发布，但高并行的待合并 PR（43个）预示着下一个版本将包含重大改进。

## 2. 版本发布
**无新版本发布。**

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要集中在文档规范、CI/CD 优化和特定 Provider 的缺陷修复，为后续的大型功能合并铺平道路：
*   **Bedrock 兼容性修复**：合并了 [PR #7315](https://github.com/zeroclaw-labs/zeroclaw/pull/7315)，修复了非 Claude/Nova 模型（如 Qwen）在 Bedrock 提供商上的 Prompt 缓存报错问题。
*   **测试与回归修复**：关闭了 [PR #7357](https://github.com/zeroclaw-labs/zeroclaw/pull/7357)，更新了渠道图像历史回归测试的字段以适配最新架构。
*   **CI 缓存预热**：提交了 [PR #7355](https://github.com/zeroclaw-labs/zeroclaw/pull/7355) 并进入待合并状态，通过在 `master` 分支触发 CI 来预热 Rust 编译缓存，有望大幅缩短后续 PR 的构建时间。

## 4. 社区热点
今日讨论最热烈的问题依然围绕**部署体验**、**多 Agent 架构**与**令牌开销**展开：
*   **Web 仪表盘依然不可用（28评论）**：[Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) 反映通过 Tauri 桌面端或直接访问 Web UI 时频繁报错，跨版本持续存在，严重阻碍了非开发者用户的体验。
*   **Docker 全功能镜像诉求（9评论）**：[Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) 指出当前为了节省内存禁用了部分功能（如 WhatsApp），导致新手部署门槛升高，呼吁提供包含所有特性的开箱即用 Docker 镜像。
*   **Agent-to-Agent (A2A) 协议支持（6评论，7 👍）**：[Issue #3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) 建议原生支持 Linux 基金会的 A2A 协议，实现与外部智能体的互联互通，获得社区较高点赞。
*   **技能编译以最小化 Token 消耗（9评论）**：[Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) 提出当前每次调用技能都会发送完整的 `SKILL.md`（400+行），建议通过编译机制优化 Token 消耗。

## 5. Bug 与稳定性
今日暴露了多个关键阻断性 Bug (S1/S0)，尤其是 Docker 环境、Channel 模式和 OAuth 认证方面：
*   **S0 数据丢失风险**：[Issue #4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) 报告 Docker 模式下 `file_write` 工具提示成功，但在宿主机文件系统中完全不可见。
*   **S1 渠道上下文丢失**：[Issue #4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827)（已关闭）指出 Channel 模式丢弃了中间的 tool-call 上下文。
*   **S1 OAuth 认证失败**：[Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) 反映 Gemini CLI OAuth 认证后依然报 `rate_limited` 导致完全不可用。
*   **S1 委托智能体配置无效**：[Issue #5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) 指出 Delegate agents 会忽略全局的 `[skills].prompt_injection_mode = "compact"` 设置，强行注入完整技能，极易导致上下文溢出。
*   **S2 SSRF 安全策略失效**：[Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) 指出 `web_fetch` 的 `allowed_private_hosts` 配置对于解析到私有 IP 的域名无效。

## 6. 功能请求与路线图信号
从待合并的大型 PR 和社区 Issue 中，可以清晰看出项目近期的演进路线图：
*   **UI/UX 大幅重构**：核心贡献者提交了多个大型 PR，包括出站消息队列侧边栏注入 ([PR #7190](https://github.com/zeroclaw-labs/zeroclaw/pull/7190))、UI 主题色彩深度适配 ([PR #7249](https://github.com/zeroclaw-labs/zeroclaw/pull/7249)) 以及实时模型/提供商选择器 ([PR #7209](https://github.com/zeroclaw-labs/zeroclaw/pull/7209))。这些极有可能在下一版本集中发布。
*   **WASM 插件生态爆发**：社区正积极扩展工具链，今日新增了自托管音乐生成插件 ACE-Step ([PR #7331](https://github.com/zeroclaw-labs/zeroclaw/pull/7331)) 和触发自动化工作流的 n8n 插件 ([PR #7328](https://github.com/zeroclaw-labs/zeroclaw/pull/7328))。
*   **第三方模型集成扩容**：[PR #7260](https://github.com/zeroclaw-labs/zeroclaw/pull/7260) 一次性添加了 morph, github_models 等 7 个兼容 OpenAI schema-v3 架构的提供商。

## 7. 用户反馈摘要
*   **飞书集成痛点**：[Issue #4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) 表明用户在对接飞书时，期望直接调用完整的 Agent，但系统默认仅调用底层 LLM，导致多轮对话和工具使用能力丢失。
*   **内存追踪困难**：针对 [Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880)，用户反馈在 daemon 模式下 `context_compression` 无法触发，长文本对话极易达到上下文瓶颈。
*   **安全误杀反馈**：[Issue #4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) 指出 `LeakDetector` 会将微信随机文件名或 MD5 哈希误判为敏感信息并替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，干扰正常业务逻辑。
*   **标准化数据库诉求**：[Issue #4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) 表明部分企业用户受限于基础设施规范无法使用 PostgreSQL，强烈希望支持 MariaDB 作为记忆后端。

## 8. 待处理积压
*   **核心架构瓶颈**：多 Agent 路由机制 [Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)（9 👍）和 QQ/Napcat 渠道支持 [Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) 获得极高关注，但长期处于 `status:accepted` 或 `status:blocked` 状态，建议维护者更新里程碑进度。
*   **Webhook 通用性缺失**：[Issue #2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) 提出的 Webhook 转换层需求已停滞，导致部分自动化场景难以打通，建议引入社区力量协助。

</details>