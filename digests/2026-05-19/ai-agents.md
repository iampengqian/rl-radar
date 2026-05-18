# OpenClaw 生态日报 2026-05-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-18 22:16 UTC

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

# OpenClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
过去 24 小时，OpenClaw 项目展现出**极高的社区活跃度与开发迭代速度**。项目在一天内新增/活跃了 448 个 Issue，并处理了 432 个待合并的 Pull Request，同时发布了 4 个新版本（包含 1 个稳定版和 3 个 Beta 版）。从社区讨论的重心来看，**多 Agent 编排、会话内存管理、以及渠道（特别是 Telegram 和 Discord）的稳定性**是当前的绝对焦点。虽然系统暴露出一些 P0/P1 级别的状态丢失和内存泄漏问题，但社区贡献者响应迅速，多项关键修复 PR 已处于自动合并就绪状态。整体而言，项目正处于功能快速扩张与技术债消化并行的健康阶段。

## 2. 版本发布
今日连续发布了 4 个版本，项目正在为下一个稳定周期的交付做密集的依赖升级与底层架构优化：

*   **v2026.5.18 (Stable)**: [Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.5.18)
    *   **核心变更**：明确了 Agent 修复策略，要求默认采用“干净的边界重构”，并引入明确的插件 SDK/API 废弃路径，为后续大版本升级做铺垫。
    *   **依赖升级**：将底层 Pi 包升级至 0.75.1，并将最低支持的 Node.js 22 版本线提升。
    *   **其他更新**：`@openclaw/proxyline` 升级至 0.3.3。
*   **v2026.5.18-beta.1 & v2026.5.16-beta.7**: Beta 测试版，主要包含上述稳定版的测试特性。
    *   **容器化改进**：新增 `OPENCLAW_IMAGE_APT_PACKAGES` 构建参数，支持在 Docker/Podman 运行时注入额外的 apt 包，增强了部署灵活性。
*   **v2026.5.16-beta.6**: 
    *   **Mac 客户端重构**：大幅重新设计了设置页面，引入一致的卡片布局、缓存导航，并对权限、语音、技能等面板进行了视觉和交互优化。

## 3. 项目进展
今日合并/关闭了 68 个 PR，主要围绕**渠道集成修复、Agent 安全策略和 CLI 体验优化**，大幅提升了系统的鲁棒性：

*   **渠道与集成增强**：
    *   修复 Discord 响应的生命周期管理 ([PR #76091](https://github.com/openclaw/openclaw/pull/76091))，确保消息反馈的连贯性。
    *   修复 Twitch 认证刷新失效问题 ([PR #83750](https://github.com/openclaw/openclaw/pull/83750))，已进入 automerge 状态。
    *   飞书带引用消息的 @提及 规范化处理 ([PR #48976](https://github.com/openclaw/openclaw/pull/48976))。
*   **Agent 核心与稳定性**：
    *   阻止子 Agent 在仓库根目录重复创建启动文件 ([PR #83787](https://github.com/openclaw/openclaw/pull/83787))。
    *   修复 Anthropic Claude 模型图像能力识别丢失的回归问题 ([PR #83756](https://github.com/openclaw/openclaw/pull/83756))。
    *   内存核心搜索向量路径中的事件循环让步优化 ([PR #83758](https://github.com/openclaw/openclaw/pull/83758))，有效防止大规模数据查询时的主线程阻塞。
*   **安全与隔离**：
    *   引入 `tools.exec.deniedPaths` 配置 ([PR #83729](https://github.com/openclaw/openclaw/pull/83729))，允许阻断 Agent 访问特定的敏感文件路径，提升了多租户/托管场景下的安全边界。

## 4. 社区热点
今日讨论最热烈的问题集中在**文件编码、数据丢失和 UI 交互体验**上：

*   **多编码文件名处理痛点**：Issue [#48788](https://github.com/openclaw/openclaw/issues/48788) (评论 17 条) 提出需构建集中式的文件名编码工具。目前的补丁仅修复了 UTF-8 被误读为 Latin-1 的情况，但面对 Shift-JIS、GB18030 等亚洲语言编码依然乏力，社区强烈呼吁在所有渠道适配器中实现统一的架构级解决方案。
*   **严重的状态丢失问题**：Issue [#48183](https://github.com/openclaw/openclaw/issues/48183) 和 [#44925](https://github.com/openclaw/openclaw/issues/44925) (均获 17 条评论) 反映了底层的严重问题。前者指出飞书插件在停止监控时未能完全清理状态导致 HTTP Server 内存泄漏；后者指出子 Agent 执行超时后其完成状态会被静默丢弃，无重试机制，严重影响了自动化任务的可靠性。
*   **UI 需求与权限困惑**：Issue [#42840](https://github.com/openclaw/openclaw/issues/42840) (👍 5) 呼吁在 Control UI 中支持 LaTeX/MathJax 数学公式渲染，以改善科研场景下的输出体验；而 Issue [#45698](https://github.com/openclaw/openclaw/issues/45698) 则报告了 UI 在长时间开启后会出现进行性卡顿甚至完全无响应的严重体验问题。

## 5. Bug 与稳定性
今日报告了多起 P1 级别的回归和系统崩溃问题，部分已确认根因并提交修复：

*   **[P1] Gateway 内存 RSS 暴涨 (已修复)**：[#83752](https://github.com/openclaw/openclaw/issues/83752) 指出在 2026.5.18 版本中，Telegram 使用 Active Memory 全上下文预检时会导致网关内存从 450MB 飙升至 1GB 以上。
*   **[P1] Subagent 僵尸态与无响应**：[#48573](https://github.com/openclaw/openclaw/issues/48573) 报告当父 Agent 终止时，使用 `embedded-run` 参数生成的子 Agent 可能会变成“僵尸状态”残留在会话存储中。
*   **[P1] Cron 定时任务产生幻觉输出**：[#49876](https://github.com/openclaw/openclaw/issues/49876) 是一个严重的信任安全问题。当工具调用失败或数据缺失时，LLM 不会静默失败，而是“编造”看似合理的内容发送给用户。
*   **[P1] 飞书监控状态内存泄漏**：[#48183](https://github.com/openclaw/openclaw/issues/48183)，`httpServers` 的 Map 对象在服务关闭前就被删除，导致连接未能正确释放 (已有关联 PR 处理)。
*   **[P2] 配置目录嵌套死循环**：[#45765](https://github.com/openclaw/openclaw/issues/45765) 报告若将 `OPENCLAW_HOME` 设置为默认的 `~/.openclaw`，会导致内部产生 `.openclaw/.openclaw` 嵌套目录，引发配置错乱。

## 6. 功能请求与路线图信号
结合今日 Issue 与 PR 走势，项目接下来的迭代方向正在向**精细化资源管控、安全沙箱隔离及多技能调度**倾斜：

*   **成本控制前置**：[#42475](https://github.com/openclaw/openclaw/issues/42475) 提出在网关层面对每个 Agent 强制执行每日/月度的 Token 消耗预算上限，以防止失控消耗。这与目前的 Token usage 相关 PR 结合，预示着项目即将引入更完善的财务管控体系。
*   **Agent 沙箱与权限隔离**：[#83018](https://github.com/openclaw/openclaw/issues/83018) 提出了允许在 Docker 沙箱运行时禁用 Codex 内部沙箱的功能请求。结合今日合并的 `deniedPaths` 安全 PR，说明项目正在构建一套立体的 Agent 权限隔离墙。
*   **技能级别的模型路由**：[#43260](https://github.com/openclaw/openclaw/issues/43260) 建议在 `SKILL.md` 中支持配置模型。这样简单技能可以使用轻量模型，复杂推理任务才调用昂贵模型。已引起维护者关于架构改动的讨论。
*   **Agentic Memory 刷新机制**：[#45608](https://github.com/openclaw/openclaw/issues/45608) (👍 3) 提议在会话重置或销毁前，强制执行一次静默的记忆刷写。这一设计直接关乎跨会话长期记忆的连续性，极有可能被纳入近期的架构重构中。

## 7. 用户反馈摘要
从评论和标签中提炼的真实用户声音：

*   **多智能体编排依然脆弱**：多个真实用户反馈（如 [#43367](https://github.com/openclaw/openclaw/issues/43367)），在 CLI 下尝试并行配置多个 Agent 时，极易发生配置相互覆盖、Session 死锁等情况，说明多 Agent 并发架构在文件锁和状态隔离上仍需打磨。
*   **渠道消息截断体验差**：Telegram 和 Discord 渠道目前存在严重的 HTML/Markdown 解析问题。如 [#49104](https://github.com/openclaw/openclaw/issues/49104) 指出，Agent 回复中如果包含 `<thinking>` 或代码块，会被 Telegram 的 HTML 解析器直接截断，导致用户只能看到残缺回复。
*   **模型供应商 API 兼容性痛点**：[#49055](https://github.com/openclaw/openclaw/issues/49055) 和 [#83615](https://github.com/openclaw/openclaw/issues/83615) 反映了 OpenClaw 在处理上游大模型（如 Anthropic, Kimi）特定报错（如 `overloaded_error`）时的静默丢弃问题，用户对于“对话突然消失且不报错”感到困惑和沮丧。

## 8. 待处理积压
以下高影响力/高安全风险的 Issue 和 PR 虽已讨论多时，但长期处于 `needs-maintainer-review` 或 `needs-product-decision` 状态，亟需核心团队介入定夺：

*   **Issue #45740** - `[impact:security]`：gh-issues 技能存在严重的 Prompt 注入风险。未经清洗的 GitHub Issue 内容直接注入到子 Agent 的 Prompt 中，黑客可通过提交特定文本进行攻击。已等待维护者安全审查超过 2 个月。
*   **Issue #40001** - `[impact:data-loss]`：`write` 工具缺乏 append 追加模式，导致 Cron 隔离会话在并发写入共享文件（如记忆文件）时会互相覆盖擦除，引发静默数据丢失。已提交关联修复 PR 但合并停滞。
*   **PR #76091** - `[status: 👀 ready for maintainer look]`：关于 Discord 响应生命周期的重要修复，旨在解决消息被吞或重复发送的顽疾。该 PR 体量较大且涉及核心调度逻辑，目前正等待维护者进行最终代码走查。
*   **PR #49488** - `[merge-risk: 🚨 compatibility]`：关于 Android 客户端 minSdk 降级（降至 API 26）的 PR。虽然能显著扩大应用兼容设备范围，但涉及 UI 动态颜色特性（Material You）的向下兼容妥协，仍需产品侧确认取舍。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 19 日各大开源项目的社区动态，我为您整理了如下横向对比与深度分析报告。

---

# 📊 AI 智能体开源生态横向对比与趋势分析报告 (2026-05-19)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体聊天”向“多智能体协同与集群化部署”跨越的关键爆发期**。项目间的竞争与演进焦点已全面转移到**多 Agent 编排、长短期记忆管理、细粒度权限沙箱以及跨平台渠道（特别是 IM 端的微信/Telegram/Discord）的鲁棒性**上。尽管多模态接入和大模型上下文窗口（最高支持 2M）的拓展日新月异，但系统级的技术债（如内存泄漏、状态死锁、静默报错）和底层架构重构，正成为各大项目能否迈入企业级生产可用门槛的核心决胜点。

## 2. 各项目活跃度对比
*(注：数据基于过去 24 小时动态统计，健康度综合考量了修复速度、Issue 积压与社区互动情况)*

| 项目名称 | 活跃 Issues (新/评) | 活跃 PRs (新/评) | 今日合并/关闭 | 版本发布动态 | 核心焦点/状态评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 448 | 432 | 68 PRs | **v2026.5.18** (Stable) | **极高活跃度**。聚焦多 Agent 状态机与渠道稳定性，处于功能扩张与技术债消化期。 |
| **ZeroClaw** | 26 (15新) | 50 (39待) | 11 PRs | 无 (准备 v0.7.6) | **高活跃度**。系统底座重构，集中修复 Cron 与 WebSocket 级别的 P0/P1 阻塞性 Bug。 |
| **Hermes Agent**| 50 (42新) | 50 (44待) | 6 PRs | 无 (在 v0.14.0) | **高活跃度**。多平台网关并发处理与 Provider 兼容性修复，Bug 积压较多亟待收敛。 |
| **CoPaw** | 31 (19新) | 24 (17待) | 7 PRs | **v1.1.8-beta.1** | **高活跃度**。限流机制重构与微信/DeepSeek 模型兼容性调优，用户需求响应极快。 |
| **NanoClaw** | 5 (4新) | 38 (31待) | 7 PRs | **v2.0.64** | **中等活跃/高压**。多代理会话路由修复，PR 积压严重（31个待合并），Review 压力大。 |
| **PicoClaw** | 8 | 26 (18待) | 8 PRs | **v0.2.8-nightly**| **中等活跃度**。发力边缘计算与流式输出架构，聚焦国内本地化供应商接入。 |
| **NanoBot** | 7 (5新) | 21 (10合) | 10 PRs | 无 | **健康平稳**。核心 AgentRunner 架构大幅重构，多模态图像生成能力快速扩展。 |
| **LobsterAI** | 0 | 18 (6待) | 12 PRs | **2026.5.18** | **健康平稳**。底层性能大幅优化 (O(n)降至 O(1))，UI 组件重构，代码质量巩固期。 |
| **Moltis** | 8 (1新, 7关) | 6 (全合) | 6 PRs | 无 | **极佳健康度**。维护者响应神速，同日暴露的底层 Hook 失效 Bug 已全量修复合并。 |
| **NullClaw** | 1 | 1 | 0 | 无 | **低活跃/稳定**。聚焦跨平台底层修复和细粒度记忆控制参数。 |
| **TinyClaw / ZeptoClaw / IronClaw**| 0 | 0 | 0 | 无 | 暂无动态或摘要生成失败。 |

## 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与龙头项目**，OpenClaw 在以下几个方面确立了其护城河：
*   **绝对规模优势**：日均 400+ 的 Issue/PR 活跃度，其社区规模和迭代速度远超同类项目（甚至高于 ZeroClaw 和 Hermes 的总和），证明了其广泛的采用率。
*   **多智能体编排的先驱**：当其他项目（如 NanoBot、PicoClaw）还在解决单 Agent 基础工具调用时，OpenClaw 已经深陷于多子 Agent 并发配置覆盖、Session 死锁、跨会话状态丢失等深水区。
*   **企业级管控视野**：今日路线图中出现的“按模型独立配置 Context Window (最高2M)”、“按 Token 预算限制”以及 `tools.exec.deniedPaths`，表明 OpenClaw 正在将金融管控与企业级安全隔离作为首要任务。
*   **技术路线差异**：相比 Hermes Agent 纠结于跨平台网关的凭证池、CoPaw 专注国内 IM 通道穿透，OpenClaw 更侧重于**系统内核底座的重构与规范**（如引入明确的插件废弃路径、强制干净边界的重构）。

## 4. 共同关注的技术方向
多个项目在今天“不谋而合”地暴露了相同的需求与演进方向，这构成了当前 AI Agent 基础设施的技术共鸣：

1.  **长短期记忆与上下文路由** 
    *   *涉及项目*：OpenClaw, NullClaw, NanoBot, LobsterAI
    *   *诉求*：**细粒度控制与会话压缩**。NullClaw 呼吁按消息粒度禁用自动记忆召回以节省 Token；OpenClaw 探讨在会话销毁前静默刷写记忆；LobsterAI 正在实现 `/compact` 命令以适配 2M 长上下文。系统默认的全量注入已无法满足成本与性能需求。
2.  **Agent 沙箱与执行安全隔离**
    *   *涉及项目*：OpenClaw, Moltis, NanoBot, ZeroClaw
    *   *诉求*：**防止 Agent 失控与宿主机被破坏**。OpenClaw 引入了 `deniedPaths` 和 Codex 沙箱；ZeroClaw 正在设计 Agent 能力标志系统限制越权访问；Moltis 优化了危险命令（如 `rm -rf`）的扫描防误报。Agent 权限正从“粗放”走向“细粒度沙箱”。
3.  **静默失败的排查与可观测性**
    *   *涉及项目*：Hermes Agent, ZeroClaw, NanoClaw
    *   *诉求*：**拒绝“静默吞错”**。Hermes 用户对错误被 try-except 吞掉极度愤怒；ZeroClaw 正在推进 `--log-llm` 原始负载追踪；Hermes 社区呼吁构建 `hermes doctor` 一键诊断工具。开发者需要明确知道工具调用失败或模型超时的真实原因。
4.  **多渠道路由与会话隔离**
    *   *涉及项目*：NanoClaw, OpenClaw, Hermes Agent
    *   *诉求*：解决多入口的消息串台。NanoClaw 修复了 GitHub PR 线程与 Signal DM 被错误匹配的问题；Hermes 发现 Telegram 群组消息会路由到错误的 Session。

## 5. 差异化定位分析
*   **“多智能体与集群化”重装堡垒**：**OpenClaw, NanoClaw**。它们致力于解决多 Agent 互联、容器配置共享、Docker 沙箱部署，适合构建复杂的自动化工作流集群。
*   **“全平台网关与 IM 深度融合”轻量化枢纽**：**CoPaw, Hermes Agent**。高度依赖即时通讯（微信、Telegram、Discord）作为交互前端，将重点放在 IM 协议的稳定性、消息防截断和通道凭证刷新上，适合个人用户的日常 AI 助理挂机部署。
*   **“多模态与模型协议适配”先锋**：**NanoBot, ZeroClaw, LobsterAI**。NanoBot 极速扩展图像生成供应商；LobsterAI 提供独立的模型上下文窗口限制；ZeroClaw 快速适配 Morph、GLM-5.1 等最新大模型，它们是大模型能力与 Agent 生态的坚实桥梁。
*   **“边缘计算与端侧 AI”探索者**：**PicoClaw**。引入 Yocto/OpenEmbedded 层，解决 RISC-V 架构适配，走的是低资源消耗、面向 IoT 设备的差异化路线。

## 6. 社区热度与成熟度
*   **激进扩张与阵痛期 (快速迭代)**：**OpenClaw, Hermes Agent, CoPaw**。热度极高，但由于底层调度逻辑复杂，面临严峻的内存泄漏（RSS 暴涨）、僵尸态子 Agent 和死循环等问题，系统鲁棒性正在经历高并发场景的严酷考验。
*   **架构重构与质量巩固期 (成熟演进)**：**LobsterAI, Moltis, NanoBot**。项目活跃度不一定最高，但代码质量显著提升。Moltis 实现了 Bug 报告 100% 当日修复闭合；LobsterAI 甚至对 5000+ 行的设置组件进行专项拆分重构，说明项目正在为长期可维护性还债。
*   **需求泛滥与 Review 瓶颈**：**NanoClaw (31 PRs 积压), ZeroClaw (39 PRs 积压)**。社区贡献热情极高，但核心维护团队的 Review 吞吐量成为项目发展的限制性因素，需警惕社区贡献者因长期等待而流失。

## 7. 值得关注的趋势信号
从今日的社区反馈中，我们可以为 AI 智能体开发者提炼出以下极具价值的行业趋势：

1.  **基于“技能级别”的动态成本控制将成为标配**：随着 Token 消耗剧增，系统不再一刀切使用最贵模型。OpenClaw 提出的在 `SKILL.md` 中配置模型路由，以及 Moltis 提出的按轮次限制可用工具，标志着 Agent 调度正走向“低成本小模型做规划，昂贵大模型做重度推理”的精细化管理。
2.  **从 BYOK (Bring Your Own Key) 到 BYO-Endpoint (自定义端点)**：本地化与内网部署需求爆发式增长。NanoClaw、PicoClaw 等项目中，大量用户抱怨强制校验官方 URL 导致本地代理无法穿透。确保 Agent 框架能平滑对接内网反代、本地 vLLM 端点，是获取企业级用户的关键。
3.  **“Agentic Memory”需要明确的界限**：AI 的记忆不再是越大越好。NullClaw 暴露出用户对“系统自动检索背景知识”导致额外计费的担忧。未来的 Agent 记忆架构必须支持“按需/按回合关闭”和“本地向量检索预算上限”。
4.  **安全维度的上移 (Prompt 注入与 RCE 防御)**：从 OpenClaw 中未经清洗的 GitHub Issue 导致的子 Agent Prompt 注入，到 CoPaw 爆出的前端控制台 RCE 漏洞。随着 Agent 获得执行代码和访问文件系统的权限，安全防御（如路径遍历保护、Heredoc 误报阻断）已从“可选项”变为阻断发布 P0 前提。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 5 月 19 日 NanoBot 项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-05-19)

## 1. 今日速览
过去 24 小时内，NanoBot 项目呈现出**极高的社区开发活跃度与健康的迭代节奏**。项目共处理了 21 个 Pull Requests（其中 10 个已顺利合并/关闭），并产生了 7 个 Issue 更新（5 新开，2 关闭）。从代码层面看，社区正大力推进**多模态能力扩展（图像生成重构与新增供应商）**以及**部署体验优化（Docker/WebUI 配置与权限隔离）**。整体而言，项目处于功能快速演进、社区积极响应的高健康度状态。

## 2. 版本发布
- **无新版本发布**。今日主要以代码合并和主分支功能积累为主。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，项目在多模态、WebUI 体验、底层架构和部署文档上取得了实质性进展：
- **多模态图像生成能力大跃升**：
  - `PR #3886` 合并：新增 Gemini 图像生成支持（涵盖 Imagen 4 和 Gemini Flash）。
  - `PR #3879` 合并：新增 MiniMax 图像生成支持。
  - `PR #3897` 关闭：视觉相关代码清理。
- **WebUI 交互与部署优化**：
  - `PR #3899` 合并：为文件编辑操作添加了实时活动事件流，提升前端实时反馈体验。
  - `PR #3889` 合并：修复了 Markdown 渲染时单换行符被吞掉的问题，改善了帮助文档等输出的排版。
  - `PR #3875` 合并：完善了 Docker 部署文档，补充了 WebUI 和 bwrap 沙箱的安全配置细节。
- **架构重构与新供应商接入**：
  - `PR #3892` 合并：重构了核心 `AgentRunner.run()` 方法，将 330 行的庞大逻辑拆分为 9 个专注的方法，大幅提升代码可维护性。
  - `PR #3890` 合并：在 CLI 引导流程中新增了模型预设向导。
  - `PR #3900` 合并：新增 Ant Ling 作为一级 OpenAI 兼容大模型供应商。

## 4. 社区热点
目前社区讨论最热烈的领域集中在**微信集成、本地部署安全控制以及记忆系统优化**：
- **微信登录兼容性问题** ([Issue #3863](https://github.com/HKUDS/nanobot/issues/3863))：产生了 5 条评论。用户反馈在使用扫码登录微信时触发版本过低报错，这反映了用户将 NanoBot 作为个人 IM 助手的高频需求。
- **全局开关与记忆系统定制** ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885))：用户对 Dream 系统作业（记忆整理）无条件注册到 Cron 感到困扰，强烈要求提供全局禁用开关。这表明高级用户对系统底层资源的占用具有极高的敏感度。
- **危险命令授权机制** ([Issue #3887](https://github.com/HKUDS/nanobot/issues/3887))：用户指出当前硬编码的拦截机制（如 `rm -rf`）过于死板，希望引入用户授权机制。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，涉及前端渲染、API 循环调用和供应商实现：
1. **严重 (High)**：X 平台定时检查任务陷入死循环 ([Issue #3901](https://github.com/HKUDS/nanobot/issues/3901)) - Agent 在执行 API 检查时触发最大工具调用迭代次数限制，**目前尚无 Fix PR**，影响自动化任务的稳定性。
2. **中等**：图像生成 API 硬编码与规范绕过 ([Issue #3903](https://github.com/HKUDS/nanobot/issues/3903)) - 发现 MiniMax 和 AIHubMix 强制假设图像为 PNG，且绕过了底层的 HTTP 客户端。**已有相关重构 PR 提交 ([PR #3893](https://github.com/HKUDS/nanobot/pull/3893)) 正待合并以修复此问题**。
3. **低**：WebUI 工具调用轨迹不显示 ([PR #3894](https://github.com/HKUDS/nanobot/pull/3894)) - 前后端对 phase 状态过滤不一致导致，已有修复。

## 6. 功能请求与路线图信号
结合今日的 Issue 和 PR 趋势，可以看出项目下一阶段的演进方向：
- **沙箱与权限细粒度管控**：`PR #3898` (Restricted mode tool isolation) 正在审查，结合用户对危险命令授权的呼声，项目正在构建一套更完善的权限隔离体系。
- **多 Agent 编排与生产部署**：`PR #3621` 正在推进面向 Hugging Face Spaces 的多角色 Agent 协同部署方案，标志着 NanoBot 正从单机工具向集群化/生产级部署迈进。
- **上下文记忆持久化**：社区正在集成 Mnemon ([Issue #3888](https://github.com/HKUDS/nanobot/issues/3888)) 以解决跨会话遗忘问题，且开发者正在提交 `skill_load` 工具 ([PR #3847](https://github.com/HKUDS/nanobot/pull/3847)) 来防止长对话中的技能上下文丢失。

## 7. 用户反馈摘要
从 Issues 和 PR 描述中提炼出真实用户的典型痛点与使用场景：
- **痛点 1：Docker / 远程部署仍有门槛**。用户在配置反向代理和 WebUI 时经常遇到 403 错误或 localhost 限制，期待更灵活的网络配置（如 `PR #3891` 和 `PR #3904` 正在解决此问题）。
- **痛点 2：复杂 Cron 任务处理能力不足**。在执行需要多步逻辑的 API 查询时，Agent 容易陷入死循环。
- **满意点**：对 Docker 沙箱隔离和接入多样化 LLM 供应商的架构设计表示认可，社区贡献者对新供应商的适配速度极快。

## 8. 待处理积压
以下高价值/长期运行的 PR 和 Issue 需要核心维护者重点关注以推进合并：
- **待合并的大型重构 PR**：
  - [PR #3893](https://github.com/HKUDS/nanobot/pull/3893)：图像生成模块的 Provider 注册表重构，此 PR 是解决今日暴露的多个图像生成 Bug 的关键。
- **长期未合并的核心 Feature PR**：
  - [PR #3621](https://github.com/HKUDS/nanobot/pull/3621)：多 Agent 生产级部署方案，已打开 14 天，需评估合并风险。
  - [PR #3847](https://github.com/HKUDS/nanobot/pull/3847)：解决多轮对话上下文丢失的 `skill_load` 工具，对核心体验提升极大。
- **需要确认的 Issue**：
  - [Issue #3901](https://github.com/HKUDS/nanobot/issues/3901)：X 平台检查死循环问题，需要确认是 Prompt 导致的 Bug 还是底层调度逻辑缺陷。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-19)

## 1. 今日速览
Hermes Agent 项目今日保持了**高度活跃**的状态，社区互动与代码提交均呈现繁荣景象。在过去24小时内，共有 **50 个 Issues** 发生状态更新（新增/活跃 42 个，关闭 8 个），同时有 **50 个 PR** 发生更新（其中 44 个处于待合并状态，6 个被合并或关闭）。尽管今日**没有新的版本发布**，但待合并的 PR 池中积累了大量关键的 Bug 修复与安全加固代码。整体来看，项目处于 v0.14.0 发布后的**高频迭代与漏洞收敛期**，开发者正在积极解决多平台网关、本地模型适配以及系统安全等核心边界问题。

## 2. 版本发布
**无新版本发布。**
当前最新版本仍为 v0.14.0。鉴于当前大量待合并的修复类 PR（涉及打包、网关重启、认证等），预计项目在完成这些核心修复后，可能会在近期推送一个补丁版本（如 v0.14.1）。

## 3. 项目进展
今日合并或关闭的 PR 与 Issues 数量相对较少（共处理 6 个），重点集中在**修复阻塞性打包问题与清理边缘测试用例**。项目整体通过密集的 PR 提交（44个待合并）在多个维度向前迈进：
- **打包与分发修复**：修复了由于 `pyproject.toml` 配置错误导致 wheel 包缺失 `hermes_cli/proxy/` 的严重问题，解决了 pip 安装用户无法使用代理功能的痛点 ([PR #28231](https://github.com/NousResearch/hermes-agent/pull/28231))。
- **多租户架构推进**：关闭了多租户命名空间隔离测试的 PR，为后续企业级或多用户并发场景打下基础 ([PR #28225](https://github.com/NousResearch/hermes-agent/pull/28225))。
- **底层重构与同步**：核心分支进行了大量代码同步与上游重构，包含 256 个提交的合流 ([PR #28222](https://github.com/NousResearch/hermes-agent/pull/28222))。

## 4. 社区热点
今日讨论热度最高的问题集中在**第三方 Provider 兼容性**与**系统调度资源泄漏**上，反映了用户在复杂部署环境下面临的挑战：
- **Gemini CLI 的 429 限流之谜** ([Issue #15895](https://github.com/NousResearch/hermes-agent/issues/15895)，13条评论，👍3)：用户在使用 Gemini CLI 通过 OAuth 接入时，尽管显示配额充足，却持续遭遇 HTTP 429 错误。这暴露出 Hermes 在处理特定 Provider 限流响应头时的解析缺陷。
- **OpenClaw MCP 子进程 Fleet 频繁重建与孤儿进程** ([Issue #23799](https://github.com/NousResearch/hermes-agent/issues/23799)，5条评论)：高级用户在 WSL2 中将 Hermes 与 OpenClaw 互设为 Tool 时，发现每次调用都会重新生成整套 MCP 子进程，且会话结束后遗留 `claude mcp serve` 孤儿进程。这揭示了当前网关在 Tool 生命周期管理上的内存与资源泄漏隐患。
- **Kanban Worker 僵尸状态** ([Issue #28181](https://github.com/NousResearch/hermes-agent/issues/28181)，2条评论)：当进程收到 SIGTERM 信号时，未能正确释放任务 Claim，导致任务被永久阻塞。

## 5. Bug 与稳定性
今日报告了大量底层逻辑 Bug，按严重程度（优先级）排列如下：

### P1 严重
- **视觉 Fallback 静默失效** ([Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555))：参数传递错误导致整个视觉降级链 TypeError 并被静默吞掉。
  - *状态*：已引起关注，等待修复。
- **Anthropic 原生流卡死 15 分钟** ([Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161))：Stuck streams 触发了错误的 OpenAI 客户端重建逻辑。
  - *状态*：已提交 Issue。
- **TUI 命令注入安全漏洞** ([Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560))：`tui_gateway/server.py` 中存在 `shell=True` 注入风险。
  - *状态*：**已有对应 Fix PR** ([PR #28214](https://github.com/NousResearch/hermes-agent/pull/28214))，对快速执行命令和 shell.exec 进行了集中防护。

### P2 核心功能受损
- **自定义 Provider max_output_tokens 被静默丢弃** ([Issue #21498](https://github.com/NousResearch/hermes-agent/issues/21498))：导致输出固定在 2048 tokens。
- **macOS launchd 服务无法自启动** ([Issue #28135](https://github.com/NousResearch/hermes-agent/issues/28135))：网关更新后 shutdown 返回 exit 0，导致 launchd 不再拉起服务。
  - *状态*：**已有对应 Fix PR** ([PR #28200](https://github.com/NousResearch/hermes-agent/pull/28200))，修改退出码为 75 以触发重启。
- **Telegram 群组会话路由串台** ([Issue #28153](https://github.com/NousResearch/hermes-agent/issues/28153))：群组回复衍生的 thread ID 可能会将人工接管的消息路由到错误的 Session。
- **WhatsApp 网关强制回复诊断垃圾信息** ([Issue #28208](https://github.com/NousResearch/hermes-agent/issues/28208))：无法处理“已读不回”的正常群聊逻辑。

## 6. 功能请求与路线图信号
近期的 Feature Request 明确指向了**系统可观测性、平滑迁移与任务控制**三大方向：
- **`hermes doctor` 一键诊断** ([Issue #28223](https://github.com/NousResearch/hermes-agent/issues/28223))：鉴于近期大量由静默失败（如插件加载异常、凭证池为空）导致的 "it doesn't work" 问题，社区强烈需求一个系统级的健康检查命令。
- **Agent 设定迁移系统** ([Issue #524](https://github.com/NousResearch/hermes-agent/issues/524))：实现从 Claude Code、Cursor、Codex 等竞品一键导入 API Keys 和配置的迁移工具。这将极大降低新用户的上手门槛，有望成为下个小版本的核心卖点。
- **运行中质量门控** ([Issue #28056](https://github.com/NousResearch/hermes-agent/issues/28056))：为 Cron 定时任务引入有界重试和质量验证机制，确保 Agent 不只是“生成了文本”，而是真正完成了任务。

## 7. 用户反馈摘要
通过对 Issues 的深度分析，提炼出目前用户的三个核心痛点：
1. **静默失败是最大杀手**：用户对于错误被 `try-except` 静默吞掉（如 [Issue #28137](https://github.com/NousResearch/hermes-agent/issues/28137) 中的插件加载失败，和 [Issue #28140](https://github.com/NousResearch/hermes-agent/issues/28140) 空凭证池显示为已认证）极度沮丧。用户宁愿看到崩溃堆栈，也不愿意在错误的方向上浪费时间 Debug。
2. **Provider 适配存在“玄学”问题**：在对接本地重度模型（[Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069) 因 prefill 超时导致无限重试）、Bedrock、Azure APIM 等企业级网关时，超时、认证和路由逻辑依然不够健壮。
3. **硬件与原生平台适配亟待完善**：由于缺少路径遍历保护和正确的进程锁释放，系统在 macOS（Tahitio 26.4.1）和 WSL 环境下的长期运行稳定性受到挑战。

## 8. 待处理积压
以下高价值 PR 和 Issue 在今日更新后仍处于 Open 状态，呼吁维护者重点关注与合入：
- **[PR #27418](https://github.com/NousResearch/hermes-agent/pull/27418) [P1]**：文件工具路径遍历保护与 Skills 扫描仪加固。这是目前处于 Open 状态的最重要的安全 PR。
- **[PR #28230](https://github.com/NousResearch/hermes-agent/pull/28230) [P2]**：修复流式输出最后阶段触发限流导致消息丢失的严重 Bug。
- **[PR #21080](https://github.com/NousResearch/hermes-agent/pull/21080) [P2]**：为 Telegram/Discord 等多平台网关增加每条消息的“忙碌会话控制（Steer/Stop）”内联按钮，大幅提升交互体验，此 PR 已开启近 10 天。
- **[Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069)**：本地重度 LLM 预处理超时引发的无限重试循环问题，该 Issue 自 4 月初提交至今未彻底解决，严重影响本地部署用户的体验。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
PicoClaw 项目在过去的 24 小时内保持了高度活跃的开发状态，共产生 8 条 Issues 和 26 条 PRs 的更新。项目如期推送了 `v0.2.8` 的 nightly 自动构建版本，表明核心代码库正在为下一个稳定版迭代进行密集的代码合入与功能验证。社区方面，开发者不仅积极提交了针对新平台的支持（如 SiliconFlow、Server酱³），还深入到了核心模块的优化（如上下文内存控制、流式输出）。整体来看，项目处于健康且快速演进的阶段，但在部分边缘硬件（如 RISC-V）和特定供应商协议（如 OpenAI Codex）上仍面临一些稳定性挑战。

## 2. 版本发布
- **[nightly] Nightly Build v0.2.8-nightly.20260518.0df050ff**
  - **详细说明**：基于 `main` 分支的自动化构建版本，涵盖了最新的 Bug 修复和功能提交。
  - **破坏性变更/迁移注意事项**：由于是不稳定的夜间构建，官方提示需谨慎使用。结合今日的 PR 动态，部分配置文件结构（如通道解耦、流式输出配置）正在发生改变，依赖 nightly 版本的用户需关注后续的正式 Release Notes。

## 3. 项目进展
今日共有 **8 个 PR 被合并/关闭**，另有 18 个处于待合并状态，这些进展显著提升了项目的可用性和扩展性：
- **新增供应商支持**：[#2885](https://github.com/sipeed/picoclaw/pull/2885) 成功合入，正式将 SiliconFlow 作为一等公民（独立 Provider）纳入支持体系，极大降低了国内用户的接入门槛。
- **Web UI 交互优化**：[#2882](https://github.com/sipeed/picoclaw/pull/2882) 合并，为 Web 聊天界面的代码块增加了独立的复制和折叠控制，改善了包含大量代码输出的阅读体验。
- **通道架构解耦重构**：[#2551](https://github.com/sipeed/picoclaw/pull/2551) 持续推进，致力于标准化通道识别并将名称与提供者类型解耦，这为未来支持多实例同类型通道（如同时挂载多个飞书应用）奠定了底层架构基础。

## 4. 社区热点
今日社区的关注点集中在 AI 智能体的记忆系统、主流大模型接入以及嵌入式生态：
- **AI 记忆机制探讨**：[#1919](https://github.com/sipeed/picoclaw/issue/1919) 讨论了受海马体启发的 Seahorse 记忆系统，该 Issue 获得了高达 11 条的深度探讨，反映了社区对 AI 上下文无损压缩和长期记忆能力的高度关注。
- **OpenAI Codex 接入痛点**：[#2674](https://github.com/sipeed/picoclaw/issue/2674) 反映了通过 OAuth 接入 ChatGPT 后端时流式响应为空的问题（👍 4 个），说明大量用户试图将 PicoClaw 作为跨平台大模型前端使用。
- **嵌入式部署实践**：[#2851](https://github.com/sipeed/picoclaw/pull/2851) 提交了针对 Yocto/OpenEmbedded 的 `meta-picoclaw` 层，凸显了 PicoClaw 在低资源边缘计算设备（结合 Sipeed 硬件特性）中的独特应用价值。

## 5. Bug 与稳定性
今日报告并处理了多个影响核心体验和稳定性的 Bug，部分已迅速产生修复 PR：
- **[Critical] 上下文预算溢出 (Seahorse)**：[#2894](https://github.com/sipeed/picoclaw/issue/2894) 指出 `FreshTail` 绕过了上下文长度预算限制，导致 API 返回 `400 BadRequestError`。**已修复**：开发者同日提交了修复 PR [#2895](https://github.com/sipeed/picoclaw/pull/2895)。
- **[High] macOS 路径验证失败**：由于 macOS 的 `/var` 到 `/private/var` 的符号链接特性，导致文件执行安全检查报错。**已修复**：通过 [#2890](https://github.com/sipeed/picoclaw/pull/2890) 解决了路径解析不一致问题。
- **[High] Exec 工具相对路径解析错误**：[#2826](https://github.com/sipeed/picoclaw/pull/2826) 和 [#2750](https://github.com/sipeed/picoclaw/pull/2750) 修复了 Bash 执行工具在限制工作区时，将相对路径误判为绝对路径的安全漏洞。
- **[Medium] 历史记录消息丢失**：[#2796](https://github.com/sipeed/picoclaw/issue/2796) 报告了多轮对话的历史记录中，只能看到最后一条用户消息的严重 UI/存储 Bug，目前暂未看到针对此问题的明确修复 PR。
- **[Medium] RISC-V 架构适配问题**：[#2887](https://github.com/sipeed/picoclaw/issue/2887) 报告 `.deb` 版本在 RISC-V 芯片上调用 OpenAI 模型无法正常工作，需要关注底层交叉编译或依赖问题。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以清晰地看出 PicoClaw 的下一步演进方向：
1. **全面拥抱流式输出**：[#2892](https://github.com/sipeed/picoclaw/pull/2892) 提出了通用的 Streaming 支持架构，结合 [#2853](https://github.com/sipeed/picoclaw/pull/2853) 对 WebSocket 的 `ChatStream` 支持，流式输出很可能成为下一版本的核心特性。
2. **丰富的消息推送通道**：随着 [#2893](https://github.com/sipeed/picoclaw/pull/2893) (Server酱³ Bot)、[#2849](https://github.com/sipeed/picoclaw/pull/2849) (Telegram 访客模式) 和 [#2845](https://github.com/sipeed/picoclaw/pull/2845) (Telegram 商业模式) 的提交，项目正在迅速扩展其作为全平台 AI Agent 触角的能力。
3. **UI 细粒度控制**：[#2886](https://github.com/sipeed/picoclaw/pull/2886) 增加了聊天详情的选择器（推理/工具调用可见性），表明项目在 Agent 可解释性方面的 UI 体验正在精细化。

## 7. 用户反馈摘要
通过对社区 Issue 的分析，提炼出以下核心用户反馈：
- **真实痛点**：用户对“模型返回空响应”（尤其是代理穿透场景下）非常反感；配置文件在不同版本间的兼容性较差（[#2891](https://github.com/sipeed/picoclaw/pull/2891) 旨在解决此问题）；对国内主流平台（如 SiliconFlow、Server酱）的本地化接入需求强烈。
- **典型使用场景**：用户正在尝试将 PicoClaw 部署在 Yocto 构建的嵌入式边缘设备上；高级玩家正在利用其处理复杂的 Steering-heavy（多步工具调用及事后渲染）任务。
- **正面反馈**：社区开发者对项目的模块化设计参与度极高，频道解耦和 MCP 动态头支持等高级特性均有外部开发者贡献代码，显示了良好的架构吸引力。

## 8. 待处理积压
部分重要的问题和贡献由于复杂性或缺乏维护者响应，正处于积压或 Stale 状态，需要团队重点关注：
- **频道架构重构停滞**：[#2551](https://github.com/sipeed/picoclaw/pull/2551) 是一个涉及核心逻辑的大型重构 PR，已停留较长时间，需要核心维护者进行 Review 以防后续产生严重代码冲突。
- **底层工具安全性修复待决断**：针对相对路径的修复存在两个重复的 PR（[#2826](https://github.com/sipeed/picoclaw/pull/2826) 和 [#2750](https://github.com/sipeed/picoclaw/pull/2750)），需要确认采用哪种实现方案并合入。
- **历史消息丢失 Bug**：[#2796](https://github.com/sipeed/picoclaw/issue/2796) 涉及基础的数据展示逻辑，但未见处理进展，直接影响用户的使用体验，建议优先排查。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-05-19)

> 数据来源：[NanoClaw (github.com/qwibitai/nanoclaw)](https://github.com/qwibitai/nanoclaw) | 分析周期：过去 24 小时

---

### 1. 🚀 今日速览

NanoClaw 项目今日维持了**极高的开发活跃度与社区热度**，聚焦于系统稳定性修复与周边生态拓展。在过去的 24 小时内，项目迎来 **1 次重要的补丁版本发布**，产生了 38 条 PR 动态（其中 7 条被合并/关闭，待合并达 31 条），同时社区新开/激活了 4 个 Issue，解决了 1 个历史问题。

从贡献流向来看，当前开发重心集中在**核心轮询机制的健壮性**、**CLI 数据库层面的级联处理**以及**新通信渠道（ACP、WhatsApp、Signal）的接入与修复**。大量待合并的 PR 表明项目正处于一个功能密集迭代周期，维护者的 Review 压力较大。

---

### 2. 📦 版本发布

- **[v2.0.64](https://github.com/nanocoai/nanoclaw/releases/tag/v2.0.64)**
  - **更新内容**：修复了审批流中 `ncl destinations add` 和 `remove` 指令的严重时序问题。此前，通过审批流新添加的 destination 无法实时同步到接收代理的本地会话状态中，导致代理在随后调用 `send_message` 时静默抛出 `unknown destination` 错误。
  - **破坏性变更/迁移注意事项**：无。属于向下兼容的 Bug 修复，建议多代理协作场景下的部署实例尽快升级，以恢复消息路由的准确性。

---

### 3. 🛠️ 项目进展

今日共有 7 个 PR 被合并或关闭，在文档、数据库会话隔离和消息路由等方面取得了实质性进展：

- **会话路由与隔离修复**：PR [#2375](https://github.com/nanocoai/nanoclaw/pull/2375) 成功合并，修复了 `findSessionByAgentGroup` 错误匹配的问题。此前，当代理同时配置了 `per-thread`（如 GitHub PR 线程）和 `agent-shared`（如 Signal DM）渠道时，DM 消息会被错误路由到 GitHub PR 会话中。
- **文档与操作规范**：
  - PR [#2376](https://github.com/nanocoai/nanoclaw/pull/2376) 合并，在文档中增加了针对混合使用 `per-thread` 与 `agent-shared` 渠道的警告。
  - PR [#2536](https://github.com/nanocoai/nanoclaw/pull/2536) 合并，补充了 v2.0.64 的 Changelog 记录。
  - PR [#1310](https://github.com/nanocoai/nanoclaw/pull/1310) 关闭，完善了凭证与环境变量的配置指南。
- **陈旧问题清理**：PR [#867](https://github.com/nanocoai/nanoclaw/pull/867) 和 PR [#1874](https://github.com/nanocoai/nanoclaw/pull/1874) 被关闭，清理了早期针对调度任务消息发送和 pre-commit 配置的历史遗留分支。

---

### 4. 🌟 社区热点

目前讨论度最高、影响面最广的议题主要集中在本地化部署支持、外部协议扩展及多渠道媒体处理：

- **本地/自定义 OpenAI 兼容端点支持 ([#1984](https://github.com/nanocoai/nanoclaw/issues/1984))**：该 Issue 活跃度极高（6条评论）。用户反馈尽管文档中宣称支持 BYO（Bring Your Own）兼容端点，但在实际使用 Codex 和 OpenCode 时，非官方端点的路由常常失败。这反映了社区在私有化部署和企业内网场景下的强烈需求。
- **ACP 客户端协议的扩展 ([PR #2542](https://github.com/nanocoai/nanoclaw/pull/2542))**：贡献者提出了全新的 `acp-client` provider，允许 NanoClaw 通过 JSON-RPC 2.0 驱动任何兼容 ACP 的外部代理。这标志着 NanoClaw 正在从单一的 AI 容器编排工具，向异构代理网络控制面板演进。
- **代理网络能力引入 ([PR #2497](https://github.com/nanocoai/nanoclaw/pull/2497))**：提出了 Agent Network 特性，预示着 NanoClaw 多代理协同交互范式（Multi-Agent Swarm）的进一步升级。

---

### 5. 🐛 Bug 与稳定性

今日报告了多个影响核心功能流转的关键 Bug，按严重程度排列如下：

1. **高优先级：CLI 组删除遭遇数据库外键约束报错**
   - **状态**：[OPEN] | 链接：[#2525](https://github.com/nanocoai/nanoclaw/issues/2525)
   - **描述**：`ncl groups delete` 在清理任何已使用过的非空组时失败，抛出 `FOREIGN KEY constraint failed`。原因是底层直接执行了无事务清理的硬删除。
   - **修复进展**：**已有修复 PR**。贡献者已提交 [PR #2540](https://github.com/nanocoai/nanoclaw/pull/2540) 引入了级联删除逻辑，同时顺带修复了自动生成 ID 不符合 OneCLI 校验规则的问题（另有 [PR #2543](https://github.com/nanocoai/nanoclaw/pull/2543) 作为独立 ID 前缀修复方案）。
2. **高优先级：组创建后缺失容器配置**
   - **状态**：[OPEN] | 链接：[PR #2539](https://github.com/nanocoai/nanoclaw/pull/2539)
   - **描述**：`createAgentGroup` 仅写入了组信息，未同步初始化 `container_configs`，导致新创建的代理在启动时永远抛出 `Container config not found` 错误。
   - **修复进展**：**已提交修复 PR**，补充调用了 idempotent 的 `ensureContainerConfig`。
3. **中优先级：Signal 渠道附件无法访问**
   - **状态**：[OPEN] | 链接：[#2528](https://github.com/nanocoai/nanoclaw/issues/2528)
   - **描述**：通过 Signal 发送的图片和 PDF，虽然到达了宿主机，但容器内的代理无法打开和读取这些文件（典型的 Volume 挂载/权限脱节问题）。
4. **中优先级：消息解析器被 Body 中的标签误导**
   - **状态**：[OPEN] | 链接：[PR #2541](https://github.com/nanocoai/nanoclaw/pull/2541)
   - **描述**：如果代理回复的内容文本中恰好包含 `</message>` 字符串，解析器会将其误判为消息结束标记导致截断。

---

### 6. 🗺️ 功能请求与路线图信号

从当前的 Issue 动态与 PR 池来看，项目的下一阶段演进路线图呈现以下特征：

- **动态推理成本控制**：[PR #2406](https://github.com/nanocoai/nanoclaw/pull/2406) 提出了“按消息粒度分配推理算力”的功能。针对简单聊天降低算力，针对多文件分析/复杂推理拉满算力。此功能一旦合并，将极大优化生产环境下的 Token 成本。
- **重度适配无端口/内网环境**：针对前面的 [Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984)，[PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) 正在为 GitHub 适配器引入无端口要求的 Polling 模式（每30秒轮询一次），这对于受限于 NAT/防火墙的本地部署用户是极大的利好，这一特性极有可能在下一版本落地。
- **安全防御纵深强化**：[PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538) 加入了包名称校验，防御通过 Dockerfile 插值注入引发的 OS 命令执行漏洞 (CWE-78)，表明项目在企业级安全合规方面正在加码。

---

### 7. 💬 用户反馈摘要

通过对近期 Issue 的梳理，可以清晰勾勒出当前用户的核心痛点：

- **本地化与 BYO 用户的受挫感**：用户在将 NanoClaw 与非官方 LLM 端点（特别是本地网络环境）对接时遇到阻碍（[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984)），文档与实际表现的落差引发了困惑。
- **数据持久化与多渠道路由冲突**：采用高级编排（如同时监听 IM 和 GitHub PR）的用户，深受消息串台和陈旧会话状态（[Issue #2533](https://github.com/nanocoai/nanoclaw/issues/2533)）的困扰。这表明在复杂并发场景下，本地 SQLite 的状态机需要更强的容错机制。
- **端到端加密通信上的多媒体处理短板**：用户在尝试构建多媒体助理时，发现 WhatsApp ([Issue #2535](https://github.com/nanocoai/nanoclaw/issues/2535)) 和 Signal ([Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)) 的图片/文件流转链路存在断点。

---

### 8. ⚠️ 待处理积压

当前项目有高达 **31 个待合并的 PR**，积压现象值得维护团队关注。建议优先 Review 以下几个高价值/阻塞型提交：

1. **基础设施保障**：[PR #2537](https://github.com/nanocoai/nanoclaw/pull/2537) 提议引入 `pre-commit` hooks (Prettier, ESLint, TypeCheck, Vitest)。在当前代码库快速膨胀的阶段，尽早合并该 PR 能有效降低后续 CI 的失败率和代码风格冲突。
2. **核心会话压缩问题**：[PR #2405](https://github.com/nanocoai/nanoclaw/pull/2405) 修复了自动压缩上下文后模型常常丢失 `<message>` 包装标签的问题。此 Bug 对长期运行的记忆型 Agent 影响深远。
3. **底层状态同步**：[Issue #2533](https://github.com/nanocoai/nanoclaw/issues/2533)（服务重启后会话状态假死）直接影响了生产环境的可靠性，目前尚无对应的修复 PR 提交，需要核心层评估干预。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 项目 2026-05-19 动态日报：

---

# 📊 NullClaw 项目动态日报 (2026-05-19)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体保持平稳、聚焦的开发状态，无紧急版本发布。项目今日新增 1 个 Issue 和 1 个 PR，均处于待处理（Open）状态，暂无 PR 合并或 Issue 关闭。社区关注点主要聚焦于两个方面：一是核心记忆检索机制（FTS5）的性能与灵活性优化诉求；二是 Windows 环境下网络解析的基础可用性修复。整体来看，项目正在稳步推进跨平台兼容性及 AI 核心功能的精细化配置，项目健康度良好。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日未有合并或关闭的 Pull Request。项目整体进展目前取决于待审核的两个重要提交，分别涉及底层网络修复和未来架构优化的前置工作。

## 4. 社区热点
今日活跃度主要体现在新提交的 Issue 和 PR 上，反映了开发者和用户在具体使用场景中的深入探索：
*   **[Issue #919](https://github.com/nullclaw/nullclaw/issues/919) - 允许按消息粒度禁用自动记忆召回**：该 Issue 引发了关于 AI 智能体记忆管理机制的探讨。用户指出当前的 FTS5 + BM25 检索逻辑强制应用于每条消息，且硬编码了 Token 限制，缺乏灵活的关闭或配置开关。
*   **[PR #920](https://github.com/nullclaw/nullclaw/pull/920) - 修复 Windows DNS 解析异常**：由社区开发者提交，修复了非 localhost 环境下的解析报错问题，直接命中了 Windows 用户的痛点。

## 5. Bug 与稳定性
*   🟠 **中/高严重度：Windows 环境 DNS 解析失败**
    *   **现象**：在 Windows 系统下，连接任何远程 AI 模型提供商（非 localhost）时，系统抛出 `error.HostResolutionFailed` 错误。
    *   **原因**：`net.zig` 模块中的 `getAddressList()` 函数在处理 Windows 环境时存在逻辑遗漏，导致统一返回 `UnknownHostName`。
    *   **状态**：**已有修复 PR** 👉 [PR #920](https://github.com/nullclaw/nullclaw/pull/920)。等待维护者审核合并，该修复对 Windows 用户群体的稳定性至关重要。

## 6. 功能请求与路线图信号
*   **[Feature Request] 按消息禁用 FTS5 检索** ([Issue #919](https://github.com/nullclaw/nullclaw/issues/919))
    *   **诉求分析**：用户 `weissfl` 请求提供一种机制，以禁用 `enrichMessageWithRuntime()` 中的自动记忆召回。目前硬编码的参数（如 `DEFAULT_RECALL_LIMIT = 5` 和 `MAX_CONTEXT_BYTES = 4000`）可能不适用于所有对话场景（例如简单的闲聊或不需要长上下文检索的任务），这既浪费了计算资源，也可能增加 Token 消耗。
    *   **路线图信号**：这一请求暗示项目在下一阶段可能会向**“细粒度记忆/上下文控制”**方向发展，为用户提供更高阶的自定义 AI Agent 行为的能力。此类功能通常是高级 AI 助手架构成熟的标志。

## 7. 用户反馈摘要
从今日的 Issue 和 PR 中，可以提炼出以下真实用户痛点：
*   **上下文与成本控制需求**：用户对 AI 不可控的 Token 消耗和上下文注入感到担忧（见 Issue #919）。他们希望在某些特定对话中关闭背景知识检索，表明现有功能在某些场景下显得过于“沉重”。
*   **跨平台体验缺失**：Windows 用户在尝试连接远程大模型时遭遇基础性阻断错误（见 PR #920），表明项目在非 Linux/macOS 环境下的边缘情况测试还需要进一步加强。

## 8. 待处理积压
今日的新提交均处于等待维护者响应的阶段，建议项目核心团队优先关注：
1.  **[PR #920](https://github.com/nullclaw/nullclaw/pull/920)**：由于这是一个阻断部分 Windows 用户正常连接远程 Provider 的 Bug，建议尽快进行代码评审及合并验证，以恢复平台可用性。
2.  **[Issue #919](https://github.com/nullclaw/nullclaw/issues/919)**：涉及核心检索逻辑的重构，建议维护者介入讨论，评估是否需要引入全局配置项或消息级别的参数覆盖（例如在 `sendMessage` 的 payload 中增加 `enable_memory_recall` 布尔值）。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-05-19 动态日报：

# 📊 LobsterAI 项目动态日报 (2026-05-19)

## 1. 今日速览
LobsterAI 在过去 24 小时内保持了**非常高的开发活跃度**，项目正处于紧凑的迭代周期中。今日顺利交付了 `2026.5.18` 正式版本，核心变更集中在模型上下文配置的灵活性提升与 UI 交互优化。过去一天内共有 18 个 PR 产生动态（其中 12 个已合并/关闭，6 个处于待合并/活跃状态），且合并了多项关键重构与性能优化代码。尽管 Issues 板块今日无新增讨论，但大量高质量的代码提交表明项目核心团队正在集中精力推进底层架构完善与下个版本的研发，整体项目健康度优秀。

---

## 2. 版本发布
**[LobsterAI 2026.5.18](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.18)** 已正式发布。
- **核心新特性**：
  - **频道归属打包与请求上下文**：新增 `keyfrom` 追踪机制（[PR #1991](https://github.com/netease-youdao/LobsterAI/pull/1991)）。
  - **独立模型上下文窗口限制**：在模型设置中新增按模型独立配置 Context Window 的滑动条，支持非线性刻度，最高可支持 200万（2M）Tokens（[PR #2001](https://github.com/netease-youdao/LobsterAI/pull/2001)）。
- **破坏性变更与迁移注意**：暂无明显的破坏性 API 变更。但对于自定义或本地部署的模型提供商，此次引入了新的模型类型字段，建议更新相关配置以适配 `contextWindow` 属性。

---

## 3. 项目进展
今日共有 **12 个 PR 被合并或关闭**，显著提升了项目的代码质量与稳定性：

- **重大重构**：
  - **[PR #2004](https://github.com/netease-youdao/LobsterAI/pull/2004)**：将臃肿的 `Settings.tsx`（5162行）拆分为独立的 `ModelSettingsSection` 组件（降至3502行），大幅提升了设置模块的可维护性。
- **重要修复**：
  - **[PR #2006](https://github.com/netease-youdao/LobsterAI/pull/2006)**：修复了 OpenClaw 不兼容非 ASCII 字符（如中文 MCP 服务器名）的问题，现采用 MD5 生成稳定的 ASCII 别名。
  - **[PR #2002](https://github.com/netease-youdao/LobsterAI/pull/2002)**：修复了 Markdown 文件预览时，相对路径本地图片资源无法正常解析和显示的问题。
  - **[PR #2007](https://github.com/netease-youdao/LobsterAI/pull/2007)**：恢复了新建任务页面的主题背景色，解决了由于 CSS 类名误用导致的白底问题。
- **UI/UX 升级**：
  - **[PR #2005](https://github.com/netease-youdao/LobsterAI/pull/2005)**：将“梦境（DREAMING）”设置替换为标准的 Toggle Switch 组件，统一了产品开关视觉体验。
  - **[PR #2003](https://github.com/netease-youdao/LobsterAI/pull/2003)**：将内部沟通工具泡泡插件 `moltbot-popo` 从 2.1.1 升级到了 2.1.8。
- **性能优化**：
  - **[PR #811](https://github.com/netease-youdao/LobsterAI/pull/811)**：通过引入索引表，将流式消息更新查找的复杂度从 O(n) 大幅降至 O(1)，有效解决了长会话场景下的性能瓶颈。

---

## 4. 社区热点
今日（由于时区或统计延迟）未捕捉到用户端高活跃度的新开 Issue。但部分长期活跃的开发者 PR 维持了更新：
- **[PR #748](https://github.com/netease-youdao/LobsterAI/pull/748)** 与 **[PR #749](https://github.com/netease-youdao/LobsterAI/pull/749)**：社区开发者 `coderliguoqing` 提交的关于重构 IM 平台配置处理器及渲染层性能优化的 PR 今日再次被标记更新，显示出社区贡献者在持续跟进代码审查反馈。

---

## 5. Bug 与稳定性
- **已修复的 Bug**：
  - 🟡 **中高优先级**：OpenClaw 中文节点名解析异常（[PR #2006](https://github.com/netease-youdao/LobsterAI/pull/2006)），导致国内用户在使用 CJK 命名 MCP 服务器时无法被正确识别。现已修复并合并。
  - 🟢 **低优先级**：UI 主题色显示回归错误（[PR #2007](https://github.com/netease-youdao/LobsterAI/pull/2007)）及 Markdown 图片相对路径加载失败（[PR #2002](https://github.com/netease-youdao/LobsterAI/pull/2002)），目前均已解决。
- **新增崩溃或回归问题**：过去 24 小时内未收到新报告的重大 Bug。

---

## 6. 功能请求与路线图信号
虽然没有通过 Issue 提出的直接功能请求，但积压的 PR 泄露了项目近期的**路线图信号**：
- **高优先级方向：Cowork（多智能体协同）**
  - **[PR #752](https://github.com/netease-youdao/LobsterAI/pull/752)**：正致力于实现 `/compact` 命令和自动会话压缩机制。随着模型上下文窗口（Context Window）上限支持到 2M，该功能将成为控制成本和提升速度的必备配套。
- **数据导出能力建设**：
  - **[PR #755](https://github.com/netease-youdao/LobsterAI/pull/755)**：支持将聊天记录导出为 Markdown/JSON，意味着 LobsterAI 正在加强企业级数据审计与归档能力。

---

## 7. 用户反馈摘要
*过去 24 小时内暂无新增的带评论 Issue 数据，以下反馈基于已提交 PR 的摘要提炼：*
- **多语言环境体验痛点**：用户在将 MCP Server 命名为中文（如“天眼查-中文”）时遇到系统报错或无法识别（[PR #2006](https://github.com/netease-youdao/LobsterAI/pull/2006)）。这反映出国际化与本地化支持中，对于非英文字符集的解析还有待加强，目前核心团队已快速响应。
- **视觉一致性需求**：UI 中存在不同类型的 Toggle 组件样式，导致设置页面不够统一（[PR #2005](https://github.com/netease-youdao/LobsterAI/pull/2005)），表明用户对客户端的 UI 细节有着较高的要求。

---

## 8. 待处理积压
以下长期未合并的重要 PR/Issues 需要维护团队关注：

- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**：Electron 核心依赖自动升级提示（40.2.1 -> 42.1.0）。作为基础架构级更新，可能涉及底层的兼容性测试，已开启近 2 个月，建议团队尽快安排排期测试或关闭。
- **[PR #752](https://github.com/netease-youdao/LobsterAI/pull/752)**（compact 压缩机制）、**[PR #748](https://github.com/netease-youdao/LobsterAI/pull/748)**（IM 重构）及 **[PR #755](https://github.com/netease-youdao/LobsterAI/pull/755)**（聊天导出）目前均处于 `[stale]`（逾期/停滞）状态。这些功能对丰富 LobsterAI 的智能体协作生态至关重要，建议项目组清理冲突并与提交者同步预期合并时间。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这是一份为您生成的 2026年5月19日 Moltis 开源项目动态日报。

---

# 📊 Moltis 项目状态日报 (2026-05-19)

## 1. 今日速览
过去 24 小时，Moltis 项目展现出**极高的维护活跃度与出色的社区响应速度**。项目今日没有发布新版本，但一口气合并了 6 个重要的修复 PR，并成功关闭了 7 个长期存在或新发现的 Issue。值得注意的是，Issue 关闭比高达 7/8，且大部分 Bug 报告都在同日内得到了核心开发者的 Fix 响应，显示出项目健康度极高、处于强劲的迭代上升期。此外，围绕底层 QMD（内存/进程管理）的架构改进 PR 正在积极审核中。

## 2. 版本发布
**本日无新版本发布。**
（注：鉴于今日集中合并了大量核心 Bug 修复，预计近期将会有一个 Patch 或 Minor 版本发布。）

## 3. 项目进展
今日共有 **6 个 PR 被合并**，项目在**稳定性、钩子机制和 LLM 兼容性**方面取得了实质性进展：

*   **核心机制修复：** 
    *   PR [#1017](https://github.com/moltis-org/moltis/pull/1017)：修复了 `BeforeAgentStart` 钩子事件未触发的回归问题，恢复了生命周期钩子的完整性。
    *   PR [#1018](https://github.com/moltis-org/moltis/pull/1018)：修复了 `BeforeLLMCall` 钩子的载荷修改被静默丢弃的严重问题，确保了开发者能正确干预 LLM 请求。
*   **多模型与安全兼容性：**
    *   PR [#1016](https://github.com/moltis-org/moltis/pull/1016)：使底层解析器正确识别 `<thought>` 标签，解决 Gemma-4 等模型推理标签被当作普通文本输出的问题。
    *   PR [#1019](https://github.com/moltis-org/moltis/pull/1019)：改进了危险命令扫描（如 `rm -r`），现在能够智能忽略 heredoc 正文中的误报。
*   **配置与依赖：**
    *   PR [#1015](https://github.com/moltis-org/moltis/pull/1015)：阻止了启动时配置的自动压缩，修复了语音合成（Coqui TTS）配置丢失的问题。
    *   PR [#1021](https://github.com/moltis-org/moltis/pull/1021)：同步并更新了沙箱环境中的 `slacrawl` Go 模块路径。

## 4. 社区热点
今日最受瞩目的动态是核心贡献者/维护者对社区反馈的“神速响应”。虽然大部分 Issue 评论数和点赞数尚未累积（多为 0-1），但以下几个 Issue 揭示了社区的高级使用场景：

*   **[#858 [Bug]: Heartbeat re-fires in tight loop...](https://github.com/moltis-org/moltis/issues/858)**：这是一个较早期的活跃 Issue，涉及 Agent 在心跳轮次中使用 exec 导致死循环的底层并发/调度问题。今日被重新激活并最终关闭，表明项目团队攻克了这一棘手的异步执行难题。
*   **[#1011 [Feature]: Per-turn tool_choice...](https://github.com/moltis-org/moltis/issues/1011)**：由高级用户提出，反映了在部署小型/低成本 LLM（如 Claude Haiku）时，由于无法按轮次限制可用工具而导致的“路由漂移”痛点。这代表了社区在**成本控制与小模型生产级部署**方面的强烈诉求。

## 5. Bug 与稳定性
今日报告并处理的 Bug 集中在**会话执行流和配置解析**上，目前**所有 Bug 均已有对应的合并 PR**：

1.  🔴 **严重 [已修复]：** 钩子调度丢失与失效。因 4 月份重构引入的回归导致 `BeforeAgentStart` ([#1012](https://github.com/moltis-org/moltis/issues/1012)) 和 `BeforeLLMCall` ([#1013](https://github.com/moltis-org/moltis/issues/1013)) 形同虚设。*(Fix: PR #1017, PR #1018)*
2.  🟠 **中等 [已修复]：** Agent 心跳机制死循环 ([#858](https://github.com/moltis-org/moltis/issues/858))，严重影响执行稳定性。
3.  🟡 **轻微 [已修复]：** 大模型标签解析错误 ([#1007](https://github.com/moltis-org/moltis/issues/1007))、沙箱预处理失败 ([#1020](https://github.com/moltis-org/moltis/issues/1020))、正则误杀 ([#1014](https://github.com/moltis-org/moltis/issues/1014))、默认配置被剥离 ([#1006](https://github.com/moltis-org/moltis/issues/1006))。

## 6. 功能请求与路线图信号
*   **精细化 Agent 路由控制 ([#1011](https://github.com/moltis-org/moltis/issues/1011))**：用户请求引入“按轮次限制 `tool_choice` 和 `active_tools`”的功能。这符合当前 AI Agent 框架走向**高阶可控**的趋势，预计该功能将被纳入近期的版本规划中。
*   **存储与进程管理升级 (待合并 PR)**：
    *   PR [#1010](https://github.com/moltis-org/moltis/pull/1010)：提议允许嵌套子文件夹和集合感知写入，释放了底层 QMD 架构支持复杂知识库和多级 Memory 的信号。
    *   PR [#1009](https://github.com/moltis-org/moltis/pull/1009)：修复超时时子进程未被 Kill 导致内存泄漏的问题，表明项目正在强化生产环境的资源管控能力。

## 7. 用户反馈摘要
从 Issue 标题和摘要来看，Moltis 的用户群体具有较高的技术深度：
*   **痛点：** 用户正在深度使用 Hook 机制进行业务拦截，使用小模型进行低成本部署，以及广泛尝试最新的开源模型（如 Gemma-4）。近期 4 月份的底层重构（`e9674b2a`）对他们的高阶用法造成了一定干扰（Hooks失效）。
*   **满意度：** 尽管存在回归 Bug，但用户报告问题时preflight checklist完成度极高，且表述专业，说明社区开发者体验良好，对项目的长期关注度高。

## 8. 待处理积压
目前项目积压极少，以下 2 个待合并 PR 需要维护者重点关注：

*   ⏳ **[PR #1010](https://github.com/moltis-org/moltis/pull/1010) `feat(memory): allow nested subfolders...`**：涉及底层存储逻辑的重构，建议维护者仔细评估对现有 QMD 集合的兼容性影响。
*   ⏳ **[PR #1009](https://github.com/moltis-org/moltis/pull/1009) `fix(qmd): kill child process...`**：涉及进程生命周期管理，直接关系到生产环境服务器的内存泄漏问题，属于 High Priority，建议尽快合并并发版。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是 **CoPaw (github.com/agentscope-ai/CoPaw)** 项目 2026年5月19日 的开源项目动态日报。

---

# 📊 CoPaw 项目动态日报 (2026-05-19)

## 1. 今日速览
CoPaw 项目在过去24小时内保持**极高的社区活跃度与开发迭代速度**。项目今日共产生了 **31 条 Issue 动态**（19个新增/活跃，12个关闭）以及 **24 条 PR 动态**（17个待合并，7个合并/关闭），并发布了 **v1.1.8-beta.1** 测试版本。从社区互动来看，围绕微信通道稳定性、第三方大模型（如 DeepSeek、ChatGPT-5.5）接入的讨论热度居高不下。核心开发团队正集中精力修复阻碍用户日常聊天的“无响应/转圈”致命 Bug，并在前端体验、Token 统计和定时任务等模块推进了大量优化。

---

## 2. 版本发布
今天项目发布了最新的测试版本，主要针对规划模式和浏览器工具进行了强化：
- **Release: [v1.1.8-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/4346)**
  - **版本号升级**：Bumping version to 1.1.8b1 (PR [#4346](https://github.com/agentscope-ai/QwenPaw/pull/4346))
  - **功能增强**：强化了 Plan Mode 下从用户消息中的计划重申能力 (PR [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198))
  - **Bug修复**：修复了 Browser tool 的实现问题。

---

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，显著提升了多通道稳定性和前端性能，项目整体在**高并发处理、内存泄漏和限流机制**上迈出了一大步：
- **🚀 核心限流重构**：PR [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) 将全局单一的 `LLMRateLimiter` 替换为按模型实例化的限流器，成功解决了多模型并发导致的“请求过频”报错。
- **🚀 前端内存泄漏修复**：PR [#4488](https://github.com/agentscope-ai/QwenPaw/pull/4488) 升级了 `@agentscope-ai/chat` 依赖，修复了用户在切换页面时 SSE 连接未被销毁导致浏览器连接数耗尽的问题。
- **📊 Token 统计增强**：PR [#4476](https://github.com/agentscope-ai/QwenPaw/pull/4476) 重构了 Token 用量统计，新增了按模型聚合的 token 使用追踪。
- **🔧 模型兼容性提升**：PR [#4489](https://github.com/agentscope-ai/QwenPaw/pull/4489) 将 `max_tokens` 的最低要求从 1 提升至 20，修复了部分严格校验 API（如 qwen3.5-omni-plus）的 400 报错。
- **🎥 新增内置技能**：PR [#4471](https://github.com/agentscope-ai/QwenPaw/pull/4471) 添加了单文件 HTML 视频演示内置技能（支持中英文）。

---

## 4. 社区热点
今日社区讨论最激烈的问题集中在**聊天无响应**及**底层通道/模型兼容性**上：
- **🔥 [Bug]: 聊天窗口发消息一直三个点跳动** ([#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469), 👍0, 17条评论)：大量用户反馈无论切换模型或重启 Docker 都无法正常聊天。该问题被确认为全局限流器 Bug 导致，目前已通过 PR [#4487](https://github.com/agentscope-ai/QwenPaw/pull/4487) 修复。
- **🔥 [Question]: ChatGPT-5.5 支持情况** ([#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474), 6条评论)：用户积极探索最新模型 ChatGPT-5.5 的接入配置，反映出社区对前沿模型的极强跟进诉求。
- **🔥 [Bug]: 微信 iLink 定时任务推送失败** ([#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477), 7条评论)：用户反馈微信通道在隔夜静默后 `context_token` 过期且缺乏重试机制。已提交修复方案 PR [#4490](https://github.com/agentscope-ai/QwenPaw/pull/4490)。
- **🔥 [Bug]: DeepSeek 模型的 think 内容解析问题** ([#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051), 8条评论)：DeepSeek v4 flash 开启思考模式后，部分内容卡在 `<thinking>` 标签内未能正常输出给用户。

---

## 5. Bug 与稳定性
今日报告了多个中高危 Bug，部分已有对应修复 PR：
- **[高危] 插件界面存在未授权远程代码执行 (RCE) 漏洞** ([#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470))：安全研究人员指出版本 1.1.7 存在RCE风险，涉及前端 Console，**强烈建议开发团队紧急审查**。
- **[高危] 聊天流输出中断，误报“用户打断”** ([#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494))：在长上下文或调用超过10轮工具后，Console 流常中途卡死并提示被中断。
- **[中危] Context Compaction 失败** ([#4448](https://github.com/agentscope-ai/QwenPaw/issues/4448))：长对话中频繁发生“invalid format (missing ## header)”错误，导致上下文压缩失败。
- **[中危] AGENTS.md 加载错误** ([#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496))：升级到 1.1.7 后，系统提示词错误地加载了内置默认模板而非工作区文件。*(尚无 Fix PR)*
- **[中危] Windows GBK 编码顽疾** ([#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481))：现有针对 Windows 的 GBK 编码修复过于零散，执行 Shell 命令等场景依然频繁出错，呼吁进行系统性修复。*(尚无 Fix PR)*

---

## 6. 功能请求与路线图信号
结合社区提交的 Issue 和 PR，项目下一步的演进方向呈现出以下信号：
- **信号一：长上下文与 Token 成本精细化管理**
  - 用户请求：支持删除会话中的单轮对话 ([#4437](https://github.com/agentscope-ai/QwenPaw/issues/4437))、拆分会话 ([#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436))、显示当前对话轮数 ([#4435](https://github.com/agentscope-ai/QwenPaw/issues/4435))。
  - *预测*：这些功能极有可能被纳入下个小版本的迭代，以优化 API 开销。
- **信号二：插件生态分发的完善**
  - PR [#4482](https://github.com/agentscope-ai/QwenPaw/pull/4482) 正在为官方插件增加打包、CDN分发及Console端一键安装的支持，这将极大丰富 Agent 的能力边界。
- **信号三：桌面端与隔离安装支持**
  - 持续推进 Tauri 2.x 桌面客户端的落地 ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))，同时社区也提出了适配 Flatpak 以实现 Linux 环境安全隔离的诉求 ([#4486](https://github.com/agentscope-ai/QwenPaw/issues/4486))。
- **信号四：基础设施底层重构**
  - 计划将 CLI 框架从 `click` 迁移至支持类型注解和彩色输出的 `typer` ([#4472](https://github.com/agentscope-ai/QwenPaw/issues/4472))。

---

## 7. 用户反馈摘要
从评论和 Issue 描述中，可以提取出当前用户的真实体验情绪：
- **痛点**：**响应卡死（转圈）**是近期最引发用户暴躁情绪的问题，有用户因反复尝试无果而在 Issue 中抱怨“阿里技术不行，是不是用AI写的代码”([#4475](https://github.com/agentscope-ai/QwenPaw/issues/4475))，这表明稳定性目前压倒一切。
- **痛点**：Markdown 渲染解析能力仍有不足，特别是表格中的 `<br>` 换行符失效，导致依赖表格输出的工作流可读性变差 ([#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497))。
- **满意点**：用户对 CoPaw 的**多通道支持（特别是微信、飞书接入）表现出了极大的兴趣**，且有越来越多的开发者开始贡献垂直领域的内置 Skill（如 HTML 视频生成、世界杯赛程伴侣），表明项目在 AI 进军生产力工具（IM通讯）方面的定位非常精准且受欢迎。

---

## 8. 待处理积压
以下重要 Issue/PR 仍处于 Open 状态，需核心维护者关注以避免社区热情流失：
- **⚠️ 安全漏洞警告**：[RCE 远程代码执行漏洞](https://github.com/agentscope-ai/QwenPaw/issues/4470) 需要立即分配安全团队跟进。
- **长期悬而未决**：[Help Wanted: Open Tasks (#2291)](https://github.com/agentscope-ai/QwenPaw/issues/2291) 已经活跃了近2个月（更新于 05-18），积累了 62 条评论，需确认是否已全部被认领或需要更新优先级。
- **复杂底层重构待审核**：
  - Tauri 2.x 桌面端支持 PR ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) 挂起已超 3 周。
  - 浏览器工具增强 PR ([#4438](https://github.com/agentscope-ai/QwenPaw/pull/4438)) 和轻量级 Goal 模式 PR ([#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443)) 正在等待深入的 Code Review。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-19)

> 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

ZeroClaw 项目今日保持**高度活跃**的开发与维护节奏。过去 24 小时内，项目共处理了 **26 个 Issues**（新开/活跃 15 个，关闭 11 个）以及 **50 个 PRs**（待合并 39 个，合并/关闭 11 个），显示出核心团队和社区极高的代码审查与迭代效率。

今日的重心主要集中在**提高系统健壮性与修复阻塞性 Bug**，特别是修复了长期存在的 Cron 调度、WebSocket 流式输出以及 CI 流水线失效等高风险问题。同时，社区生态持续繁荣，新增了对 MiniMax 模型区域拆分、DeepSeek 自定义 URL 及 Tauri 桌面端权限管理等重要功能的 PR。目前项目整体处于 v0.7.6 发布前的功能打磨与稳定性强化阶段，尚未发布新版本。

---

## 2. 版本发布

**无新版本发布。** 
项目当前正集中精力处理 v0.7.6 相关的追踪任务（[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)）以及高风险 Bug 修复，预计在完成 Skills 体验优化及 Cron/Channel 稳定性修复后将推出版本更新。

---

## 3. 项目进展

今日共有 11 个 PR 被合并或关闭，重点推进了以下领域的功能完善与修复：

*   **可观测性与事件生命周期：** 关闭了 [PR #6757](https://github.com/zeroclaw-labs/zeroclaw/pull/6757)，为 Gateway 广播钩子增加了作用域生命周期管理，防止进程级 SSE 广播钩子泄漏，并更新了 `/api/events` 的安装逻辑。
*   **多模态兼容性修复：** 合并了 [PR #6743](https://github.com/zeroclaw-labs/zeroclaw/pull/6743)，修复了包含无法解析图片的请求导致整个 Provider 准备步骤失败的问题，提升了多模态场景的鲁棒性。
*   **测试覆盖与回归修复：** 
    *   [PR #6744](https://github.com/zeroclaw-labs/zeroclaw/pull/6744) 被合并，增加了 `--log-llm` 原始负载追踪在流式场景下的测试覆盖。
    *   [PR #6616](https://github.com/zeroclaw-labs/zeroclaw/pull/6616) 被合并，增加了 Tavily 搜索路由的别名测试，完善了 Web 搜索工具的可靠性。

---

## 4. 社区热点

今日社区活跃度极高，讨论主要集中在跨平台支持、AI 编程模型接入和系统底座架构优化上：

*   **FreeBSD 平台支持呼声极高：** [Issue #1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924)（评论数 7，👍 1）引发了大量讨论。用户表示在 TrueNAS 等 FreeBSD 系统上每次必须从源码编译极其不便，强烈呼吁官方提供预编译的二进制文件。
*   **Morph (Fast Apply) 模型接入：** [Issue #6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) 讨论了引入专精于代码快速修改的 Morph 模型。由于 ZeroClaw 作为智能体经常需要精准改写代码，该模型高达 10,500+ tok/s 的速度对提升 Agent 工作流体验具有极大吸引力。
*   **Bulk Revert 历史遗留追踪：** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)（评论数 2）显示社区核心贡献者正在仔细梳理之前因紧急回滚丢失的 153 个提交，这对于恢复潜在的优秀功能至关重要。

---

## 5. Bug 与稳定性

今日报告了多个影响核心工作流的高严重级别 Bug，部分已积极响应修复：

**🔴 S1 - 工作流阻塞**
*   **Skills 安装引发运行时崩溃：** [Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)。在 Tokio 异步运行时中使用了阻塞 `reqwest` 导致 `zeroclaw skills install clawhub:*` 直接 panic。
    *   *状态：* 待修复。
*   **Cron 时区合约不一致：** [Issue #6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739)。Cron 调度在运行时、工具模式和 API 接口之间的时区处理逻辑不一致，可能导致定时任务在错误的时间执行。
    *   *状态：* 已关闭/跟进处理。

**🟠 S2 - 行为降级**
*   **手动 Cron 运行状态持久化错误：** [Issue #6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)。手动触发的 `cron_run` 仍会将尽力而为的投递失败错误记录为 `ok`，严重干扰监控和重试逻辑。
    *   *状态：* 待修复。
*   **GLM-5.1 "思考过程" 泄漏：** [Issue #6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643)。使用 GLM-5.1 模型时，其内部思考内容会合并到最终输出中。
    *   *状态：* 已确认。

**🟠 高风险：配置与通道异常**
*   **Custom Provider 配置失效：** [Issue #6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756)。`zeroclaw models list` 在自定义 Provider 中失败，因为底层未正确读取存储在 config 中的 API key。
    *   *状态：* 待修复。
*   **Channels 监督程序崩溃循环：** [Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)。当所有配置的通道均设置为 `enabled=false` 时，Channels 编排器会不断重启，每 2 秒产生大量无用日志。
    *   *状态：* 待修复。

---

## 6. 功能请求与路线图信号

通过分析最新提交与需求，以下几个功能方向极有可能在 v0.7.6 及后续版本落地：

*   **Provider 兼容性持续扩充：**
    *   [PR #6758](https://github.com/zeroclaw-labs/zeroclaw/pull/6758) 正在拆分 MiniMax 为全球和中国区独立入口，配合 [PR #6759](https://github.com/zeroclaw-labs/zeroclaw/pull/6759) 更新了其过时的 API 端点。
    *   [PR #6753](https://github.com/zeroclaw-labs/zeroclaw/pull/6753) 修复了 DeepSeek 忽略自定义 `base_url` 的问题，增强了本地部署兼容性。
    *   [Issue #6444](https://github.com/zeroclaw-labs/zeroclaw/issues/6444) 提出接入 GitHub Models，提供统一 Token 访问多种闭源模型，已获支持。
*   **Agent 安全与沙盒隔离（v0.8.0 路线图）：** [Issue #6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) 提出了详细的 Agent 能力标志系统，控制 Agent 是否能访问全局 `shared/` 目录或逃逸出自己的工作空间。
*   **严格工具解析模式：** [PR #6675](https://github.com/zeroclaw-labs/zeroclaw/pull/6675) 引入了 `agent.strict_tool_parsing`，允许用户强制要求模型使用原生工具调用，禁止回退到宽松的文本解析。
*   **桌面端权限管理优化：** [PR #6766](https://github.com/zeroclaw-labs/zeroclaw/pull/6766) (Tauri) 增加了 Full Disk Access (FDA) 权限撤销检测和恢复时的重新检查机制，大幅改善 macOS 桌面端体验。

---

## 7. 用户反馈摘要

从近期的 Issues 提炼出用户在实际部署 ZeroClaw 时的核心反馈如下：

*   **痛点 1：边缘平台编译困难。** FreeBSD 用户（[Issue #1924](https://github.com/zeroclaw-labs/zeroclaw/issues/1924)）对源码编译感到疲惫，尤其是依赖更新时极易出现环境冲突，期望官方提供开箱即用的分发版。
*   **痛点 2：配置与状态不持久。** 微信通道用户（[PR #6238](https://github.com/zeroclaw-labs/zeroclaw/pull/6238)）反馈重启后经常丢失 `context_tokens`，导致需要重新扫码，非常影响生产环境的可用性。
*   **痛点 3：LLM 联调错误排查难。** （[Issue #6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742)）开发者在与特定模型（如 Qwen3.5、自定义 Provider）对接时遇到 405 等错误，目前缺乏细粒度的 tracing 日志来排查请求体是否正确，期待 `--log-llm` 功能更加完善。

---

## 8. 待处理积压

以下是维护团队需要优先关注的长期/高风险积压项：

*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) - 丢失提交的恢复审计 (Priority: P2, Risk: High)：** 153 个被回滚的提交仍需逐个审查恢复，工作量巨大，且存在引入新 Bug 的风险。
*   **[Issue #6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751) - CI PR 标题检查彻底失效 (Priority: P2, Risk: High)：** 该 Action 自合并以来从未成功运行，导致代码提交规范处于无人监管的状态。（注：[PR #6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) 正在尝试用内联脚本替换来解决此问题，亟待 Merge）。
*   **[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) - v0.7.6 Skills 系统优化总追踪 (Priority: P1)：** 作为下个版本的核心卖点，目前仍有诸多子任务（如 `SkillForge` 的 Schema 校验 #6128 和 #6210）在处理中，需要确保按时交付。
*   **[PR #6503](https://github.com/zeroclaw-labs/zeroclaw/pull/6503) - Tauri 核心依赖升级 (Risk: High)：** 桌面端依赖从 2.10.3 升级到 2.11.1，涉及底层框架大版本更新，虽然长时间未合并，但需要评估是否会导致内存泄漏或 API 不兼容。

</details>