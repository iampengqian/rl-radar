# OpenClaw 生态日报 2026-05-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-11 22:19 UTC

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

# OpenClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持着**极高**的社区活跃度。Issues 和 PR 更新双双达到 500 条，其中新开或活跃的 Issues 占比高达 79%（395 条），表明社区用户和开发者的参与热情持续高涨。今日项目连续发布了 3 个 Beta 版本（`v2026.5.10-beta.3` 至 `.5`），显示出核心团队正在为下一个稳定版进行高密度的集成和测试。尽管更新频繁，但大量的 QA 测试和对齐工作（尤其是针对 Codex 运行时）表明项目正处于严谨的质量保障期。

## 2. 版本发布
今日连续发布了 3 个 Beta 版本，主要聚焦于 CI/CD 增强、底层运行时环境和代码质量：
*   **v2026.5.10-beta.5** & **v2026.5.10-beta.4**
    *   **更新内容**：CI 增加了非阻塞的 `plugin-inspector-advisory` 产物，用于在预发布阶段捕获插件兼容性分类，且不改变阻塞主流程；运行时/Fly 环境下，优化了从环境变量检测 Fly Machines 容器环境的逻辑，改善了网关的绑定行为。
*   **v2026.5.10-beta.3**
    *   **更新内容**：启用了更严格的 Vitest 代码检查规则（涵盖 hook、matcher 等风险点）；在共享格式化配置中固定了 `oxfmt` 默认设置以保证跨升级的格式稳定性；TypeScript 启用了更严格的编译器检查。
*   **迁移注意事项**：近期版本暂无面向用户的破坏性变更，但启用更严格的 TS 和 Vitest 检查可能对插件开发者或贡献者产生构建影响。

## 3. 项目进展
今日项目整体向前迈进了坚实的一步，主要体现在基础设施优化和体验修复上。尽管 PR 待合并数量庞大（465 条），但已合并/关闭的 PR 解决了多项关键问题：
*   **核心运行时与修复**：[PR #62206](https://github.com/openclaw/openclaw/pull/62206) 引入了助手结论新鲜度门控，减少模型使用过时状态回答的风险；[PR #62201](https://github.com/openclaw/openclaw/pull/62201) 缓解了过时 `toolResult` 在会话历史中的重放污染问题。
*   **频道与工具支持**：[PR #62307](https://github.com/openclaw/openclaw/pull/62307) 新增了 WhatsApp 消息编辑和撤回的支持；[PR #80713](https://github.com/openclaw/openclaw/pull/80713) 修复了 iMessage 的 Tapback 反应路由，防止触发回复死循环；[PR #80788](https://github.com/openclaw/openclaw/pull/80788) 修复了 Discord gzip 响应解析问题。
*   **架构与性能**：[PR #77158](https://github.com/openclaw/openclaw/pull/77158) 大幅优化了数千个会话转录文件场景下的 CPU 消耗，引入了持久化导出状态缓存；[PR #59859](https://github.com/openclaw/openclaw/pull/59859) 推进了原生 GTK Linux 客户端的落地。

## 4. 社区热点
今日社区讨论的焦点主要集中在**外部渠道连接稳定性**、**测试框架的准确性**以及**系统底层状态管理**上：
*   **Slack 连接稳定性问题**：[Issue #72808](https://github.com/openclaw/openclaw/issues/72808) (16 条评论)。用户报告 OpenClaw 与 Slack 的连接会在毫无征兆的情况下静默断开，导致错失重要消息。这引发了关于长连接保活机制的广泛讨论。
*   **智能体工作流中断回归**：[Issue #76877](https://github.com/openclaw/openclaw/issues/76877) (14 条评论)。多位用户反馈 `2026.5.2` 版本中，智能体在调用工具后会突然停止响应，严重干扰连续任务。
*   **QA 测试套件与 Codex 的兼容性争论**：由贡献者 `100yenadmin` 发起的一系列高讨论度 Issues（如 [Issue #80319](https://github.com/openclaw/openclaw/issues/80319) 12条评论、[Issue #80320](https://github.com/openclaw/openclaw/issues/80320) 等），详细揭示了当前的 QA 测试框架与 Codex 运行时在工具调用平替上存在误判。社区花大力气澄清了哪些是产品 Bug，哪些只是 Mock 环境的假阳性。

## 5. Bug 与稳定性
今日报告的 Bug 涉及网关、授权和 UI 交互等多个层面。按严重程度排列如下：

**🔴 严重 / 网关崩溃与重连级别**
*   **OAuth 级联失败与上下文丢失**：[Issue #80040](https://github.com/openclaw/openclaw/issues/80040)。主提供者 OAuth 失效会导致空回复，切换提供者又会引发重复工具执行，且冷启动时会丢失近期上下文。
*   **高可用性导致的 OOM 崩溃**：[Issue #57349](https://github.com/openclaw/openclaw/issues/57349)。网关在长时间运行（约 17-20 小时）后，进行文件系统扫描时会触发 JS 堆内存耗尽（OOM）。暂无对应 Fix PR。
*   **Slack 静默断连**：[Issue #72808](https://github.com/openclaw/openclaw/issues/72808)。网关未抛出异常，但停止接收 Slack 消息。

**🟠 中等 / 功能受阻级别**
*   **敏感信息日志未脱敏**：[Issue #80777](https://github.com/openclaw/openclaw/issues/80777)。升级后，历史日志 (`config-audit.jsonl`) 中的 Slack/Telegram 明文 Token 依然保留在磁盘中，存在严重安全隐患。
*   **模型切换静默失败**：[Issue #58957](https://github.com/openclaw/openclaw/issues/58957)。上下文过大时，模型切换失败但无明确报错提示。
*   **Android 引导页卡死**：[Issue #61005](https://github.com/openclaw/openclaw/issues/61005)。当操作员离线时，Android 客户端的 "Connect" 按钮处于未激活状态，导致新用户无法完成配置。

**🟡 低级 / UI 与边缘场景**
*   **Control UI 逐渐卡顿**：[Issue #45698](https://github.com/openclaw/openclaw/issues/45698)。长时间打开仪表盘会导致 UI 逐渐无响应（疑似内存泄漏）。
*   **Raw 模式被强制禁用**：[Issue #59330](https://github.com/openclaw/openclaw/issues/59330) (👍12)。Config 编辑器的 Raw 模式因配置往返检查逻辑错误被永久禁用。

## 6. 功能请求与路线图信号
结合用户诉求与现有 PR，以下是未来版本可能落地的功能方向：
*   **多槽记忆架构**：[Issue #60572](https://github.com/openclaw/openclaw/issues/60572) 提议替换单一 Memory 插件槽，支持多种内存提供程序同时工作。这符合 AI Agent 向多层记忆（短期/长期/情景）演进的趋势。
*   **多租户支持 (RBAC)**：[Issue #60127](https://github.com/openclaw/openclaw/issues/60127) 强烈要求在单实例中支持租户隔离，而不是依赖多开部署。这对于 OpenClaw 向中小企业团队渗透至关重要。
*   **只读工具配置文件**：[PR #61961](https://github.com/openclaw/openclaw/pull/61961) 正在引入 `readonly` 工具配置，允许构建仅具备观察和搜索能力的 Agent。这为构建监控和审计类 AI 智能体铺平了道路。
*   **异步任务完成机制重构**：[Issue #52305](https://github.com/openclaw/openclaw/issues/52305) 揭示了系统事件唤醒目标不准确的缺陷，推动底层调度机制的进一步完善。

## 7. 用户反馈摘要
从今日的 Issue 评论和交互中，可以提炼出以下真实用户画像与痛点：
*   **开发者 / 极客用户**：热衷于将 OpenClaw 部署在 Raspberry Pi ([Issue #61137](https://github.com/openclaw/openclaw/issues/61137)) 或 Fly.io 上，对跨平台（特别是 ARM64）的稳定性要求高，遇到 JSON 解析异常时排查较为困难。
*   **重度依赖第三方渠道的团队**：重度使用 WhatsApp 和 Slack 进行自动化工作流。他们对**消息静默丢失**（[Issue #50093](https://github.com/openclaw/openclaw/issues/50093)）和**断线后无法补发**的容忍度极低，认为网关的健壮性目前不如预期。
*   **对状态管理感到困惑的用户**：多位用户反馈智能体会“假装工作”（[Issue #58450](https://github.com/openclaw/openclaw/issues/58450)），即口头承诺稍后回复，但实际并未触发任何后台进程。这反映了大模型在工具调用边界判断上的局限性，需要 OpenClaw 在运行时层面强制进行状态约束。

## 8. 待处理积压
以下高价值但长期未得到根本解决的问题需核心维护团队重点关注：
1.  **控制面板内存泄漏**：[Issue #45698](https://github.com/openclaw/openclaw/issues/45698)（已持续近 2 个月）。UI 逐渐卡死严重影响管理体验。
2.  **多机器人路由缺陷**：[Issue #61012](https://github.com/openclaw/openclaw/issues/61012)。配置了多个 Telegram 机器人时，外发消息路由错误，阻碍了多 Agent 场景的落地。
3.  **CLI 后端分发绕过问题**：[Issue #57326](https://github.com/openclaw/openclaw/issues/57326)。部分 Helper 路径绕过了 CLI 代理逻辑，导致模型调度不一致。
4.  **后台任务无法取消**：[Issue #61610](https://github.com/openclaw/openclaw/issues/61610)。`tasks cancel` 命令形同虚设，僵尸任务只能通过重启清理，缺乏任务生命周期管理。

---

## 横向生态对比

基于 2026 年 5 月 12 日各大开源项目的社区动态，为您生成 AI 智能体与个人 AI 助手开源生态的横向对比分析报告：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多模态、多租户、集群化协同”演进的关键爆发期**。整体生态呈现出明显的分层与细分态势：轻量级项目正攻克特定渠道的兼容性，而头部项目则在全力重构底层运行时，以解决复杂状态管理和长时记忆的架构瓶颈。**“模型降级容灾”、“跨平台无缝集成”以及“企业级安全隔离”**成为各层级项目共同面临的下一个护城河级命题。

### 2. 各项目活跃度对比
*(注：健康度评估基于 Bug 修复速度、PR 积压情况及版本稳定性综合得出)*

| 项目名称 | 24h Issues 动态 | 24h PR 动态 | Release 情况 | 综合健康度 / 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (极高) | ~500 (极高) | v2026.5.10-beta.3~5 | 🟢 极佳 / 密集 Beta 测试与 QA 收敛 |
| **Hermes Agent**| 50 | 50 | 桌面端测试版 | 🟡 中等 / 重构与严重 Bug 并存 (TUI/路由) |
| **IronClaw** | 38 | 50 | 无 (蓄力中) | 🟢 良好 / "Reborn"核心架构收尾合并期 |
| **CoPaw** | 49 | 35 | 无 | 🟡 中等 / 功能大爆发，但存在网络/状态同步痼疾 |
| **ZeroClaw** | 15 | 48 | 无 (准备 0.7.6) | 🟢 良好 / 渠道兼容与多模态高强度修复 |
| **LobsterAI** | <10 | >30 (极高) | 无 (整合中) | 🟢 良好 / 架构精简与性能优化 (POPO集成) |
| **NanoBot** | 10 | 21 | 无 | 🟡 中等 / 多租户架构重构，PR积压较多 |
| **NanoClaw** | 4 | 17 | 无 | 🟢 良好 / 核心痛点修复 (压缩/路由)，稳步推进 |
| **PicoClaw** | 12 | 28 | Nightly v0.2.8 | 🟢 极佳 / 自演化架构落地，边缘设备适配活跃 |
| **NullClaw** | 2 | 7 | 无 | 🟢 良好 / 底层网络重构导致的回归问题修复中 |
| **ZeptoClaw** | 1 | 2 | 无 | 🟢 优秀 / 代码质量与安全审计双收敛 |
| **Moltis** | 3 | 2 | 无 | 🟢 优秀 / 零新增积压，部署与沙箱 Bug 立竿见影修复 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 静默 |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与头部项目**，OpenClaw 展现出了绝对的老大哥姿态：
*   **社区规模与成熟度碾压**：单日近 500 个 Issue/PR 的处理量级远超其他竞品（甚至高于多个项目活跃度之和），其核心团队具备极强的多线程协同开发与 QA 闭环能力。
*   **技术路线的“基石”化**：与同体量项目相比，OpenClaw 正在从“功能实现”向“工业级严谨”过渡。启用严格的 TypeScript 与 Vitest 检查，以及对 Fly.io 运行时的深度优化，表明其目标是成为生产级高可用架构的基石。
*   **竞品差异化**：面对 Hermes 或 NanoBot 在多智能体编排上的激进尝试，OpenClaw 显得更稳健，它优先解决状态污染（如 PR #62201 缓解过时 toolResult 重放），体现出极高的企业级生产部署责任感。

### 4. 共同关注的技术方向
通过跨项目的 Issue 提炼，当前生态涌现出高度一致的四大技术诉求：
1.  **多渠道连接与静默断连治理**：涉及项目。
    *   *诉求*：长连接保活、断线重连补发机制极缺，静默丢消息是痛点。
2.  **状态记忆与压缩机制的健壮性**：涉及项目。
    *   *诉求*：大模型自动压缩上下文后极易“失忆”（丢失任务目标、错发消息路由），急需重构底层的 Poll-loop 与事件唤醒机制。
3.  **多租户与权限隔离 (RBAC)**：涉及项目。
    *   *诉求*：从极客玩具向团队生产力工具演进，多用户状态/记忆互不干扰成为刚需。
4.  **模型降级容灾与 Token 统计**：涉及项目。
    *   *诉求*：支持 Provider 故障转移、动态模型路由，以及高昂 API 成本的实时监测。

### 5. 差异化定位分析
*   **企业内部深度集成派**：高度侧重 IM 渠道的功能对齐与私有化部署体验。
*   **底层架构重构激进派**：IronClaw 推进名为 "Reborn" 的重大底层重塑，ZeptoClaw 专注 Phase 2 中间件管道重构，二者均致力于将 Agent 核心逻辑从巨石代码解耦为可插拔的 Pipeline。
*   **多模型算力调度派**：NanoClaw 专注探索按负载动态分配推理算力的路由策略，ZeroClaw 专攻混合不同大模型的视觉/听觉能力的综合调度。
*   **端侧与轻量自演化派**：PicoClaw 极具特色地迈出了“Agent 自演化”的第一步（自动聚类成功任务并生成技能草稿），并深受边缘硬件（树莓派/Yocto）开发者喜爱；Moltis 则在极轻量级沙箱部署上做到了极致响应。

### 6. 社区热度与成熟度
*   **稳健收敛期（高成熟度）**：OpenClaw、ZeptoClaw、Moltis。这些项目不再盲目追求新功能，而是通过严格的 TS 编译、安全审计和 100% Bug 清帐来构筑发布门槛。
*   **架构阵痛期（高风险/高回报）**：IronClaw、Hermes、NanoBot。这三个项目近期均在进行大刀阔斧的底层重构（如 Hermes 的 3128 行循环解耦），积压了大量未合并的巨型 PR。解决不好容易引发系统级死机，但一旦趟过将实现架构升维。
*   **快速扩张期（高活跃）**：PicoClaw、ZeroClaw、CoPaw。处于疯狂吸收社区需求和合并新特性的阶段，生态广度（如接 X/Twitter、ComfyUI、POPO）快速拓展，但长期稳定性面临考验。

### 7. 值得关注的趋势信号
1.  **“黑盒”正在走向“白盒”，可观测性成为标配**：ZeroClaw 和 NullClaw 的用户均强烈呼吁提供 Token 消耗、工具调用频次的运行时统计报告。开发者不再只满足于“AI 能干活”，而是要求“看到 AI 怎么干、花了多少钱”。
2.  **工具级的安全防线正在下沉**：Hermes 曝出本地 SQLite 权限泄露用户记录的严重问题，ZeptoClaw 引入了自动化代码漏洞审计。在 Agent 频繁执行 Shell 命令和操作文件的当下，**强制性的系统级安全门控（如 IronClaw 的 LoopExitApplier）将取代单纯的“提示词约束”**。
3.  **终端 TUI (CLI) 体验依然是高级开发者的基本盘**：Hermes 曝出了大量关于 TUI 死锁、按键拦截、命令无法输入的 P0 级 Bug。在IDE和WebUI高度发达的今天，仍有一大批硬核 AI 用户在终端重度使用 Agent。跨平台（Windows/NixOS）的 CLI 稳定性直接决定了开发者的第一印象。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报 (2026-05-12)

> 数据来源：[NanoBot (github.com/HKUDS/nanobot)](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日维持了极高的社区活跃度，过去 24 小时内共产生 **10 条 Issue 更新**（7 新开/活跃，3 关闭）和 **21 条 PR 更新**（16 待合并，5 合并/关闭）。项目当前正处于功能大爆发的迭代阶段，社区贡献者围绕多租户隔离、插件化架构、多智能体协同等企业级特性提交了大量高质量 PR。同时，用户对系统稳定性（如系统级死机）和跨平台/多渠道（如企业微信、飞书）的兼容性反馈强烈。整体来看，项目健康度良好，功能迭代与缺陷修复双轨并行，但较高的 PR 积压量（16条待合并）需要维护团队投入更多精力进行代码审查。

---

## 2. 版本发布

**无新版本发布。**
（注：鉴于目前主干分支有大量涉及架构重构和多租户特性的重要 PR 待合并，预测项目正在为下一个较大的 Minor/Major 版本做蓄力准备。）

---

## 3. 项目进展

今日共有 5 个 PR 被合并或关闭，这些核心提交显著提升了项目的稳定性和模型适配能力：

*   **修复 MiMo 模型推理状态控制缺陷**：[PR #3734](https://github.com/HKUDS/nanobot/pull/3734) 成功解决了小米 MiMo 模型无法通过配置显式关闭思考/推理模式的问题，完善了国产大模型的接入体验。
*   **新增美团的 LongCat 模型支持**：[PR #3736](https://github.com/HKUDS/nanobot/pull/3736) 扩展了 NanoBot 的 LLM 生态，兼容 LongCat-Flash 等系列模型，丰富了用户的模型选择。
*   **修复 WebSocket 媒体分发阻断问题**：[PR #3673](https://github.com/HKUDS/nanobot/pull/3673) 修复了 `_dispatch_envelope` 方法静默丢弃图片等媒体路径的严重缺陷，确保了客户端富媒体通信的稳定性。
*   **修复 WebUI 安全上下文兼容性**：[PR #3733](https://github.com/HKUDS/nanobot/pull/3733) 解决了在局域网 HTTP 环境下 `crypto.randomUUID` 失效导致的前端崩溃问题。

---

## 4. 社区热点

今日社区最关注的话题集中在 **企业级协作场景** 和 **底层架构扩展** 上，以下两条讨论具有代表性：

*   **多用户环境下的会话与记忆隔离（[Issue #3744](https://github.com/HKUDS/nanobot/issues/3744)）**：
    用户 IamWWT 提出了在团队合作中多个 IM 用户共享同一个 Agent 时，`USER.md` 和 `MEMORY.md` 发生冲突的痛点。这暴露出 NanoBot 在从“个人助手”向“团队 AI 助理”转型过程中的架构瓶颈。此 Issue 直接催生了多租户特性的开发。
*   **WebUI 性能顽疾（[Issue #3746](https://github.com/HKUDS/nanobot/issues/3746)）**：
    用户 Ygrowly 指出 WebUI 在启动后会盲目预加载超过 1MB 的代码高亮模块。在轻量级对话场景下，这不仅浪费带宽，还严重拖慢了首屏加载速度，反映出前端资源异步加载策略亟待优化。

---

## 5. Bug 与稳定性

今日报告了数个关键 Bug，部分已确认引发系统级故障，部分已有对应的修复 PR：

1.  🔴 **严重 (P0)**：DuckDuckGo 搜索导致整个系统死机（[Issue #2828](https://github.com/HKUDS/nanobot/issues/2828)）。在执行网络搜索时，不仅 Agent 卡死，甚至导致宿主机无法正常关机。*（状态：已关闭，推测已在底层修复或规避）*
2.  🟠 **中等 (P1)**：MCP 服务未启动导致 Agent 报错崩溃（[Issue #3739](https://github.com/HKUDS/nanobot/issues/3739)）。网络异常时事件循环崩溃。*（状态：已有对应修复方案 [PR #3740](https://github.com/HKUDS/nanobot/pull/3740)，通过增加 TCP 探针规避）*
3.  🟡 **低级 (P2)**：企业微信文件名解析错误（[Issue #3737](https://github.com/HKUDS/nanobot/issues/3737)）。因下载头信息处理不当导致文件无法正确保存。
4.  🟡 **低级 (P2)**：VolcEngine 网关参数冲突（[Issue #3738](https://github.com/HKUDS/nanobot/issues/3738)）。火山引擎 API 不允许 `max_tokens` 和 `max_completion_tokens` 共存。*（状态：已有修复 PR [PR #3738](https://github.com/HKUDS/nanobot/pull/3738)）*

---

## 6. 功能请求与路线图信号

结合今日的新开 Issues 和提交的 PR，可以观察到 NanoBot 下一阶段明确的演进路线图信号：

*   **信号一：多租户与状态隔离（企业级 SaaS 转型）**
    *   [PR #3749](https://github.com/HKUDS/nanobot/pull/3749) 引入了基于 WebUI 的多租户账户系统，实现按用户 ULID 隔离状态，直击团队协作痛点。
*   **信号二：插件化与自我进化架构**
    *   [PR #3729](https://github.com/HKUDS/nanobot/pull/3729) 对工具系统进行了大刀阔斧的重构，从硬编码转向自描述插件模式。
    *   [PR #3728](https://github.com/HKUDS/nanobot/pull/3728) 和 [PR #3748](https://github.com/HKUDS/nanobot/pull/3748) 引入了 `LoopDetectHook` 等机制，赋予 Agent 自我纠错和反思重试的能力。
*   **信号三：底层 LLM 服务的深度整合**
    *   云端托管工具支持：[PR #3743](https://github.com/HKUDS/nanobot/pull/3743) 旨在支持由 Provider 托管的 Web 搜索工具。
    *   动态模型切换：[Issue #3742](https://github.com/HKUDS/nanobot/issues/3742) 呼叫支持 `/model` 命令以在网络不稳定时动态切换模型提供商。

---

## 7. 用户反馈摘要

通过对 Issue 描述的提炼，当前用户的核心反馈如下：
*   **真实痛点**：中国大陆用户在使用海外模型（如 Codex GPT-5.5）时面临严重的网络超时问题，亟需客户端实现无缝的 Provider 故障转移（[Issue #3742](https://github.com/HKUDS/nanobot/issues/3742)）。
*   **成本控制诉求**：使用按量计费（OpenRouter 等）的用户难以追踪跨会话的累计 Token 消耗，希望能在 Agent 内部直接看到历史花费（[Issue #3731](https://github.com/HKUDS/nanobot/issues/3731)）。
*   **定制化与易用性**：用户希望能修改 Agent 默认的名称和图标（如去掉默认的猫 Icon），使其更贴合自身品牌形象（[Issue #3650](https://github.com/HKUDS/nanobot/issues/3650)）。

---

## 8. 待处理积压

当前项目有高达 **16 个待合并的 PR**，其中不乏大型架构调整。建议维护团队优先关注以下长期或高影响的积压项目，避免分支冲突：

*   **[PR #3621](https://github.com/HKUDS/nanobot/pull/3621) - 多角色 Agent 编排部署**：这是一个针对 Hugging Face Spaces 的多 Agent 编排方案，已开启数日，需要审慎评估其对单容器内存的消耗。
*   **[PR #3408](https://github.com/HKUDS/nanobot/pull/3408) - MGP 跨会话记忆整合**：此 PR 引入了记忆治理协议，涉及会话记忆的长期存储架构，影响深远，需尽快推进 Review。
*   **[PR #3693](https://github.com/HKUDS/nanobot/pull/3693) - LLM 并发控制门控**：修复了后台任务（如心跳、自动压缩）绕过并发限制导致 Ollama 等本地模型崩溃的问题，对本地部署用户极为重要，建议尽快合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-12)

## 1. 今日速览
Hermes Agent 项目在过去24小时内维持了**高度活跃**的状态，社区互动与代码提交频繁。今日共产生 **50 条 Issue 动态**（新开/活跃 45 条，关闭 5 条）以及 **50 条 PR 动态**（待合并 44 条，合并/关闭 6 条）。

从数据分布来看，项目当前正处于**功能大范围重构与多平台适配并行的阶段**。值得注意的是，今日报告了大量与 TUI（终端交互死锁）和 Provider 路由相关的 P1 级严重 Bug；同时，围绕 `AgentLoop` 的架构重构及飞书、WhatsApp、Discord 的生态集成 PR 也在密集推进中。此外，桌面端发布了针对安装程序 UX 的测试版本。

## 2. 版本发布
- **`desktop-pr20059-installers`**
  - **性质**：测试/临时版本 (Unsigned / ad-hoc builds)
  - **更新内容**：主要用于 PR #20059 的桌面端安装程序 UX 冒烟测试。基于 `bb/gui` 分支的 `bff052d61` 提交构建。
  - **支持平台**：包含 macOS arm64 DMG, Windows x64 + arm64 NSIS, Linux x64 + arm64 AppImage。
  - **注意事项**：官方明确说明此版本**未经过签名**，并非稳定版，仅供开发测试使用。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，主要修复了跨平台构建、数据分析看板等底层核心问题；同时有大量重磅 PR 正在等待合并，正在深刻重塑系统能力：

**已合并/关闭的关键 PR：**
- **修复分析接口崩溃 ([PR #24031](https://github.com/NousResearch/hermes-agent/pull/24031))**：解决配置非 UTC 时区导致分析看板崩溃的问题（`utcoffset(None)` 返回 None 引发异常）。
- **TUI 构建跨平台兼容 ([PR #18036](https://github.com/NousResearch/hermes-agent/pull/18036))**：使用 `esbuild` 替换 `tsc + babel`，去除了运行时的 `node_modules` 依赖。
- **修复 Windows TUI 构建 ([PR #23973](https://github.com/NousResearch/hermes-agent/pull/23973))**：解决了 POSIX 独有的 `chmod +x` 导致 Windows 原生版本 npm 构建失败的问题。

**正在推进的重磅 PR (Open)：**
- **核心架构重构 ([PR #23978](https://github.com/NousResearch/hermes-agent/pull/23978))**：将 `AIAgent.run_conversation()` 中长达 3128 行的 `while` 循环解耦为可测试、可组合的中间件管道（Phases 1-3），将极大提升系统的扩展性。
- **飞书 CardKit 支持 ([PR #23488](https://github.com/NousResearch/hermes-agent/pull/23488))**：改进飞书网关输出，使用 CardKit 代替传统的 `im.v1.message.update`，大幅优化 LLM 流式输出的体验。
- **CDP 浏览器自动启动 ([PR #21612](https://github.com/NousResearch/hermes-agent/pull/21612))**：增强 `/browser connect`，可在本地自动启动基于 Chromium 的浏览器。

## 4. 社区热点
今日社区讨论的焦点主要集中在 **API 接入报错**、**多智能体协同** 以及 **终端严重卡顿** 上：

1. **Claude Max OAuth 验证失败 ([Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080), 8条评论)**：
   - **诉求**：使用 Claude Max 20x 订阅和本地凭证时，所有请求均被 Anthropic API 以 HTTP 400 拒绝，严重阻断了重度 Anthropic 用户的日常使用。
2. **多智能体 Discord 协作 ([Issue #14853](https://github.com/NousResearch/hermes-agent/issues/14853), 6条评论)**：
   - **诉求**：高级用户在 Discord 部署多实例时，发现 Agent 彼此之间处于“信息孤岛”，亟需“历史注入与级联预防”机制来实现真正的协同工作流。
3 **智能路由与上下文压缩冲突 ([Issue #7798](https://github.com/NousResearch/hermes-agent/issues/7798), 4条评论)**：
   - **诉求**：当系统将请求路由给廉价模型时，重新构建的压缩器会采用较小的上下文窗口，导致触发不必要的预检压缩，引发请求失败。

## 5. Bug 与稳定性
今日报告了多个严重影响使用体验的 Bug（尤其是 TUI 与 Provider 相关），部分已有 PR 介入跟进：

**🔴 P1 级 (高优先级/阻塞使用)：**
- **TUI 与 CLI 终端死锁/卡顿系列**：
  - 终端覆盖层冻结：`useInput` 句柄冲突导致按键无法穿透 ([Issue #13618](https://github.com/NousResearch/hermes-agent/issues/13618), 已关闭)。
  - `/new`, `/reload-mcp` 确认导致死锁：守护线程 input() 阻塞原始模式 ([Issue #23853](https://github.com/NousResearch/hermes-agent/issues/23853), 已关闭, [PR #24025](https://github.com/NousResearch/hermes-agent/pull/24025) 修复跟进中)。
  - 自动补全拦截命令：输入 `/reset` 回车被识别为补全而非执行 ([Issue #23919](https://github.com/NousResearch/hermes-agent/issues/23919))。
- **Nix 环境本地化缺失 ([Issue #23943](https://github.com/NousResearch/hermes-agent/issues/23943))**：NixOS 安装包未包含 locales，导致 Telegram 命令回复直接输出原始 i18n 键名（如 `gateway.reset.header_default`）。
- **数据库安全漏洞 ([Issue #24027 PR](https://github.com/NousResearch/hermes-agent/pull/24027))**：SQLite 默认创建权限为 644，导致对话历史和记忆库对所有本地用户可读（已提交修复 PR）。*注：此为安全修正，因极其重要在此特别标出。*

**🟠 P2 级 (中等优先级)：**
- **Ollama 上下文识别错误 ([Issue #23949](https://github.com/NousResearch/hermes-agent/issues/23949))**：`kimi-k2.6` API 报告 256K 上下文，但 Hermes 错误截断识别为 32K 并拒绝运行。
- **记忆组件无限重生与孤儿进程 ([Issue #23799](https://github.com/NousResearch/hermes-agent/issues/23799))**：每次调用工具都会重新生成 OpenClaw MCP 子舰队，会话结束后留下孤儿进程。
- **辅助任务绕过免费限制扣费 ([Issue #24029](https://github.com/NousResearch/hermes-agent/issues/24029))**：标题生成、压缩等辅助任务绕过了用户设置的 `:free` 限制，回退到付费模型导致账单异常。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 来看，项目的发展路线图呈现出向**企业级协作、精细化权限控制、底层稳健性**演进的趋势：

- **工具权限精细化管理**：社区呼吁对文件写入、浏览器等危险工具实行基于规则的门控系统，而不仅是针对终端命令 ([Issue #21849](https://github.com/NousResearch/hermes-agent/issues/21849))。
- **机器人死循环检测机制**：提出在网关层引入运行时的“Bot-to-Bot 循环检测” ([PR #24028](https://github.com/NousResearch/hermes-agent/pull/24028))，这对于 Telegram/WhatsApp 上的自动化部署是刚需。
- **长连接保活**：针对部分 API（如 Kimi）空闲断开的问题，请求增加类似 OpenClaw 的心跳/保活机制 ([Issue #24026](https://github.com/NousResearch/hermes-agent/issues/24026))。
- **JMAP 邮件协议支持**：用户希望原生支持比 IMAP 更现代的 JMAP 协议以整合 Fastmail 等服务 ([Issue #11424](https://github.com/NousResearch/hermes-agent/issues/11424))。

## 7. 用户反馈摘要
通过对反馈的提炼，可以发现用户对 Hermes Agent 的核心能力期望很高，但在实际部署中遇到了以下痛点：
1. **隐蔽的 Token 浪费与成本失控**：用户非常反感 Agent 在遇到工具失败时，不查阅历史记录就盲目“猜测”各种替代方案并自主重试 ([Issue #24012](https://github.com/NousResearch/hermes-agent/issues/24012))，以及免费模型配置被辅助任务静默绕过导致的额外扣费。
2. **Niche 平台集成不够平滑**：飞书用户反馈包含表格时直接丢失全部 Markdown 格式 ([Issue #23938](https://github.com/NousResearch/hermes-agent/issues/23938))；Windows 用户对路径截断 ([Issue #24032](https://github.com/NousResearch/hermes-agent/issues/24032)) 及终端死锁感到挫败。
3. **记忆与上下文系统不够健壮**：有用户指出系统的习惯追踪和记忆清洗机制形同虚设，导致低价值记忆不断堆积，挤占了核心事实的上下文空间 ([Issue #20595](https://github.com/NousResearch/hermes-agent/issues/20595))。

## 8. 待处理积压
以下高优先级或高热度的问题目前仍处于 Open 状态且尚未有明确修复 PR，建议维护者重点关注：

1. **Anthropic OAuth 接入阻断问题 ([Issue #15080](https://github.com/NousResearch/hermes-agent/issues/15080))**：影响使用 Claude Max 高级订阅的付费用户，阻断级别高。
2. **智能模型路由阈值冲突 ([Issue #7798](https://github.com/NousResearch/hermes-agent/issues/7798))**：影响使用 `smart_model_routing` 的多模型调度场景。
3. **Telegram 思维链泄露 ([Issue #7233](https://github.com/NousResearch/hermes-agent/issues/7233))**：恢复会话时将内部推理过程暴露给用户，对于对外的 Bot 应用存在严重的人设崩塌风险。
4. **未确认即执行高危命令 ([Issue #10199](https://github.com/NousResearch/hermes-agent/issues/10199))**：Agent 未经确认执行了卸载操作，直接违反了系统设定的安全红线。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the PicoClaw project daily report for May 12, 2026, based on the provided GitHub data.

---

# 📊 PicoClaw 开源项目日报 (2026-05-12)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**的状态，社区开发与迭代速度显著提升。过去 24 小时内，项目共处理了 **12 条 Issue**（关闭 8 个历史遗留/已解决问题）和 **28 条 PR**，其中包含多个核心功能的重构与提交。项目刚刚发布了 `v0.2.8` 的最新 Nightly 构建版，标志着项目正在为下一个正式版本进行密集的代码合并与功能验证。整体来看，项目在多渠道适配、模型配置 UI 以及 Agent 自演化等前沿方向上取得了实质性突破，项目健康度极佳。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.8-nightly.20260511.6e6293e5](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新性质**：自动化的每日构建版本。
  - **注意事项**：官方提示该版本可能不稳定，建议开发者谨慎使用。此版本包含了 main 分支上最新的功能提交（如 Agent 演化、Pico channel streaming 等），不建议直接用于生产环境。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，项目在以下几个重大领域向前迈出了关键一步：
- **Agent 自演化基础架构落地**：PR [#2847](https://github.com/sipeed/picoclaw/pull/2847) 成功合并，引入了 Agent 自我演化的安全循环机制（记录成功任务、聚类模式、生成技能草稿）。这是一项极具前瞻性的核心功能。
- **Web UI 与模型配置重构 (PR1)**：PR [#2831](https://github.com/sipeed/picoclaw/pull/2831) 合并，为 Web 后端引入了 CRUD 模型端点和 Provider 元数据基础，大幅优化了用户配置模型的体验。
- **Provider 兼容性与输出修复**：
  - 修复了 ChatGPT Codex 后端流式输出导致空响应的棘手问题 ([#2581](https://github.com/sipeed/picoclaw/pull/2581))。
  - 合并了 AWS Bedrock 的实时 Token 流式传输支持 ([#2645](https://github.com/sipeed/picoclaw/pull/2645))。
- **渠道与配置修补**：修复了群组触发配置 `mention_only=false` 被忽略的问题 ([#2565](https://github.com/sipeed/picoclaw/pull/2565))，并增加了 `slack_webhook` 单向推送渠道 ([#2719](https://github.com/sipeed/picoclaw/pull/2719))。

## 4. 社区热点
- **🔥 最受关注/投票的 Bug**：Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674) (👍 4)。使用 OpenAI Codex OAuth 时，由于后端通过 `response.output_item.done` 推送流式项目，导致 PicoClaw 显示空回复。该问题反映了社区对兼容非标准 OpenAI 接口的强烈需求。
- **💡 异步工具结果的路由争议**：Issue [#2829](https://github.com/sipeed/picoclaw/issues/2829) 与对应 PR [#2830](https://github.com/sipeed/picoclaw/pull/2830)。针对 Subagent 产生异步结果时重复注入 Parent agent 导致多余消耗的问题，社区正在讨论引入显式的 `delivery_mode` 配置。这显示了项目在复杂 Agent 编排上的深度探索。

## 5. Bug 与稳定性
今日新报告或活跃的 Bug 集中在**数据展示与边缘平台运行**上，整体严重程度为中等：
1. **历史消息渲染丢失（高）**：[#2796](https://github.com/sipeed/picoclaw/issues/2796) 报告在包含多条用户消息的长对话中，通过历史记录查看时只能看到最后一条消息。这严重影响了上下文追溯体验，目前暂无关联 Fix PR。
2. **Android 服务启动失败（中）**：[#2590](https://github.com/sipeed/picoclaw/issues/2590) 反馈在部分 Android 设备上无法执行 `libpicoclaw.so` 二进制文件。
3. **配置热加载导致语音识别损坏（中）**：[#2780](https://github.com/sipeed/picoclaw/issues/2780) 指出在通过 Docker 重载配置后，Groq-asr 语音识别功能失效。
4. **第三方技能地址解析错误（低）**：[#2684](https://github.com/sipeed/picoclaw/issues/2684)，在 Android APK 中搜索第三方技能时出现解析异常。

## 6. 功能请求与路线图信号
通过近期的 Issues 和 PRs，可以清晰地看到 v0.3.0 版本的**三大路线图信号**：
1. **搜索工具的多元化与高可用**：
   - 用户请求集成免费的 Serp API ([#2232](https://github.com/sipeed/picoclaw/issues/2232))。
   - 开发者已提交 PR 添加 Gemini Web Search Provider ([#2763](https://github.com/sipeed/picoclaw/pull/2763))。
   - 社区强烈要求实现 API 额度耗尽时的自动 Fallback（如 Brave → Tavily → DuckDuckGo）([#2582](https://github.com/sipeed/picoclaw/issues/2582)，且相关修复 DuckDuckGo 默认配置的 PR [#2647](https://github.com/sipeed/picoclaw/pull/2647) 正在等待合并）。
2. **Web 端工作流优化**：PR [#2832](https://github.com/sipeed/picoclaw/pull/2832) 和 [#2833](https://github.com/sipeed/picoclaw/pull/2833) 正在重构 Web UI 的模型获取与连通性测试流程。
3. **代码解释与文件操作可视化的增强**：用户期望在 `edit_file` 工具执行后返回 unified diff 预览 ([#2848](https://github.com/sipeed/picoclaw/issues/2848))，这表明项目正逐渐向更加专业的开发辅助助手方向演进。

## 7. 用户反馈摘要
- **真实痛点**：用户对**消息压缩机制对用户的可见性**存在不满（Issue #2796），认为后台发给大模型的内容可以压缩，但在前端 UI 展示历史记录时必须是完整的，当前的行为具有误导性。
- **边缘硬件部署需求旺盛**：在 Raspberry Pi / Pi Zero 2W 等 ARM 设备上运行 PicoClaw 的呼声依然很高 ([#2675](https://github.com/sipeed/picoclaw/issues/2675))，且第三方开发者专门开发了 Yocto/OpenEmbedded layer (`meta-picoclaw`) 以便将 PicoClaw 烧录进专业嵌入式设备 ([#2851](https://github.com/sipeed/picoclaw/pull/2851))。
- **高度认可**：社区对 Agent 自演化（#2847）的合并反应热烈，认为这将极大降低用户定制个性化技能的门槛。

## 8. 待处理积压
以下重要的长期 PR/Issue 仍处于待处理状态，部分已被标记为 `stale`，需要 Maintainer 关注：
- **Web 搜索 API 积压**：关于 Web 搜索 YAML 配置支持及 DuckDuckGo 默认启用的 PR ([#2647](https://github.com/sipeed/picoclaw/pull/2647)) 已停滞数周，建议尽快 Review 合并，以配合未来的 Fallback 机制。
- **LLM 网络容错性优化**：PR [#2768](https://github.com/sipeed/picoclaw/pull/2768) 试图修复 HTTP 500 瞬态错误导致 Agent turn 直接失败的问题，对于稳定性至关重要，目前处于 Stale 状态。
- **DeepSeek 思维模式兼容性**：PR [#2740](https://github.com/sipeed/picoclaw/pull/2740) 修复了 DeepSeek 流式输出时 `reasoning_content` 丢失的问题，等待 Core 团队验证合并。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026年5月12日 NanoClaw 项目动态日报：

# 📊 NanoClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
NanoClaw 项目今日保持了**高度活跃**的开发状态。过去24小时内，项目共产生了 **17 项 PR 更新**（其中 10 项被合并或关闭）和 **4 项 Issue 更新**。尽管今天没有发布新的版本，但核心开发者将精力集中在修复自动压缩机制引发的消息路由丢失问题、增强模型的容灾降级能力，以及扩充诸如 X/Twitter 和长期记忆等关键集成上。高合并率表明项目当前处于快速迭代与稳步推进阶段，健康度良好。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，项目整体在**消息路由稳定性**和**系统鲁棒性**上迈出了一大步：

*   **修复自动压缩引发的消息丢失/错误问题**：
    *   [PR #2412](https://github.com/nanocoai/nanoclaw/pull/2412) (CLOSED): 回退了 PR #2327，移除了压缩后事件处理程序中引发意外消息的 `[system]` 标记提醒。
    *   [PR #2413](https://github.com/nanocoai/nanoclaw/pull/2413) (CLOSED): 修复了压缩机制，将消息路由提醒强制放置在压缩摘要的末尾，防止模型遗忘发送目标。
    *   [PR #2414](https://github.com/nanocoai/nanoclaw/pull/2414) (CLOSED): 修复了裸文本输出问题，当输出缺少 `<message>` 包装时，系统会推送一次性纠正提示。
*   **提升系统容错与兼容性**：
    *   [PR #1785](https://github.com/nanocoai/nanoclaw/pull/1785) (CLOSED): 隔离了单个频道的连接失败故障（如 Gmail OAuth 过期），防止单点崩溃导致整个服务宕机。
    *   [PR #2410](https://github.com/nanocoai/nanoclaw/pull/2410) (CLOSED): 修复了数据库缺失 `on_wake` 列时的容器无限重启循环问题。
*   **其他清理**：
    *   [PR #2408](https://github.com/nanocoai/nanoclaw/pull/2408) (CLOSED): 将代码库中残留的 `qwibitai` 引用重命名为 `nanocoai`。
    *   [PR #2407](https://github.com/nanocoai/nanoclaw/pull/2407) (CLOSED): 更新了上游 PR 审查的文档规范。

## 4. 社区热点
今日社区讨论的焦点主要集中在多代理架构下的具体配置与端点兼容性：

*   **[Issue #1984](https://github.com/nanocoai/nanoclaw/issues/1984)**: 请求支持自定义/本地 OpenAI 兼容端点（Codex + OpenCode）。该 Issue 创建于4月底，今日再次活跃（4条评论）。这反映了核心用户群体在使用 NanoClaw 时，有着强烈的**接入本地私有化大模型**或**非官方定制模型**的诉求，目前的路由设计对非内置端点不够友好。

## 5. Bug 与稳定性
今日报告了数个关键 Bug，部分已有社区提交的修复 PR：

*   **[严重] 容器首次生成失败**：[Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415) 报告 `ncl groups create` 命令会跳过 `container_configs` 数据库行的创建，导致首次生成容器失败并抛出 "Container config not found"。
    *   *修复状态*：✅ 已有对应修复 [PR #2416](https://github.com/nanocoai/nanoclaw/pull/2416)。
*   **[中等] 消息双重投递**：[Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) 报告当代理在同一次操作中同时调用 `send_message` MCP 工具和 `<message>` 块时，会导致消息重复发送。
    *   *修复状态*：⏳ 暂无直接修复 PR，但今日合并的几个 Poll-loop 路由重构 PR 可能与此有关联。
*   **[中等] 压缩后任务丢失**：[Issue #2411](https://github.com/nanocoai/nanoclaw/pull/2411) (PR形式) 指出 SDK 自动压缩后，模型丢失原始任务指令导致提前结束。
    *   *修复状态*：✅ 已有对应修复 [PR #2411](https://github.com/nanocoai/nanoclaw/pull/2411) 待合并。

## 6. 功能请求与路线图信号
今日涌现了几个高质量的功能请求和对应实现，暗示了项目下一阶段的演进方向：

*   **模型降级容灾机制**：[Issue #2417](https://github.com/nanocoai/nanoclaw/issues/2417) 提出 `fallbackModel` 支持，当主模型（如 Claude Opus）触发限流时自动降级到备用模型。对应实现 [PR #2418](https://github.com/nanocoai/nanoclaw/pull/2418) 已提交。**极高的合并概率**，将大幅提升生产环境稳定性。
*   **计算资源动态路由**：[PR #2406](https://github.com/nanocoai/nanoclaw/pull/2406) 提出按消息负载动态分配推理算力（`reasoning-effort` routing），替代当前静态配置，旨在兼顾响应速度和深度思考成本。
*   **长期记忆与生态扩展**：
    *   [PR #2420](https://github.com/nanocoai/nanoclaw/pull/2420): 集成 Hindsight 记忆引擎，为代理增加长期记忆能力。
    *   [PR #2409](https://github.com/nanocoai/nanoclaw/pull/2409): 将 X (Twitter) 集成扩展至 Linux 并增加至 25 种工具，全面对标人类在 Web UI 上的操作。

## 7. 用户反馈摘要
从今日的 Issue 描述及近期活跃项目中，可以提炼出以下真实痛点：
1.  **自动压缩（Compaction）机制体验脆弱**：由于模型在自动压缩上下文后容易“失忆”，导致频繁出现不包裹消息标签、丢失任务目标的现象，这是目前高级用户使用中最核心的痛点。
2.  **CLI 数据库状态不同步**：用户在使用 CLI 工具（`ncl`）创建群组时，预期后台会自动完成所有依赖配置，但实际上存在数据库落盘遗漏，导致“第一步就踩坑”。
3.  **MCP 工具与原生标签的冲突**：高级开发者在组合使用 MCP 工具和 XML 标签时，缺乏明确的冲突解决优先级，导致了消息双重投递的困惑。

## 8. 待处理积压
*   **长期阻塞的 PR**：[PR #63](https://github.com/nanocoai/nanoclaw/pull/63)（WhatsApp 认证重试机制）自 2 月份以来一直处于 Blocked 状态，今日虽有更新但未见实质进展，建议维护者评估是否关闭或解冻。
*   ** Sentry 集成**：[PR #1662](https://github.com/nanocoai/nanoclaw/pull/1662) 自 4 月初提交以来一直未合并，鉴于其涉及监控体系的变更，建议社区尽快安排 Code Review。

---
*分析师注：NanoClaw 项目目前正处于从基础代理执行框架向“具备容错、记忆、多端点动态路由”的复杂智能体系统演进的关键时期。今日的核心动作都在于弥补上下文压缩带来的架构脆弱性。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 2026 年 5 月 12 日 NullClaw 项目动态日报：

# NullClaw 项目日报 (2026-05-12)

## 1. 今日速览
NullClaw 项目在过去24小时内保持了高度活跃的开发与社区互动状态，整体健康度良好。项目今日共处理了 2 条 Issue 更新（1 开 1 闭）以及高达 7 条 PR 更新（5 待合并 2 合并）。核心开发团队目前正集中火力解决近期网络/DNS底层重构带来的稳定性问题，特别是在多架构（如 Android riscv64）和外部 Provider（如 siliconflow）兼容性方面。整体来看，项目正在向更加安全、稳定且具备可观测性的下一代 AI 智能体架构稳步推进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 2 个重要的修复 PR 被合并/关闭，显著提升了系统的启动速度与跨平台兼容性：
- **优化启动性能 ([PR #906](https://github.com/nullclaw/nullclaw/pull/906))**：合并了关于 Shell 沙箱检测的延迟执行修复。现在沙箱探测不再阻塞网关和频道启动，避免了启动时产生多余的子进程，大幅提升了系统初始化速度。
- **Android 兼容性与网络重试 ([PR #905](https://github.com/nullclaw/nullclaw/pull/905))**：修复了 Android 平台网关启动时的 DNS 解析卡顿问题，引入了对所有已解析网关地址的重试机制，并将 A2A 运行时设为延迟加载，提高了移动端部署的稳定性。

## 4. 社区热点
今日最值得关注的讨论是围绕**性能统计报告**展开的：
- **([Issue #909](https://github.com/nullclaw/nullclaw/issues/909))**：用户 @jacktang 发起提议，希望 NullClaw 增加 Agent 运行时的性能统计报告。诉求包括：Token 的输入/输出统计、工具调用（成功/失败）的频次分析，以及相关的安全告警汇总。这反映了社区对于 AI 智能体“可观测性”的强烈需求，希望从黑盒运行走向数据驱动的成本与效果量化。

## 5. Bug 与稳定性
今日核心聚焦于 `2026.5.x` 版本引入的网络/DNS底层重构导致的回归问题：
- **🔴 高优先级：特定 Provider Host 解析失败 ([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))**
  - **现象**：升级到 `2026.5.x` 后，使用 `siliconflow` provider 时直接抛出 `Error: error.HostResolutionFailed`，而在 `2026.4.9` 版本下相同的配置和网络环境一切正常。
  - **定位与修复状态**：已确认为 HTTP/DNS 客户端重构引入的回归 Bug。目前已有对应的修复 PR 提交（见下文待合并 PR），正处于修复流程中。该 Issue 今日已被关闭，说明修复代码可能已合入主线。

## 6. 功能请求与路线图信号
结合今日新开的 PR 与 Issue，可以洞察到项目近期的演进路线图：
- **增强可观测性与审计**：基于 ([Issue #909](https://github.com/nullclaw/nullclaw/issues/909)) 的诉求，配合今日提交的 ([PR #911](https://github.com/nullclaw/nullclaw/pull/911))（隐私保护型秘密分类审计），表明项目正在构建一套完善的安全与数据分析闭环。
- **底层网络与进程稳定性加固**：开发者 @vernonstinebaker 提交了多项底座加固 PR（如 ([PR #910](https://github.com/nullclaw/nullclaw/pull/910))），通过移除长尾锁和修复心跳饥饿，强化分布式节点（特别是异构架构如 riscv64）的 WebSocket 稳定性。
- **安全的进程调用**：([PR #883](https://github.com/nullclaw/nullclaw/pull/883)) 引入了 spawn 前的可执行文件存在性检查，修复了 Zig 标准库可能导致的静默失败问题，进一步收严了智能体执行外部命令的安全边界。

## 7. 用户反馈摘要
从([Issue #902](https://github.com/nullclaw/nullclaw/issues/902))的反馈中可以提炼出典型的用户痛点：
- **用户痛点**：用户（特别是依赖第三方推理提供商的开发者）对底层网络库的静默崩溃或解析失败极其敏感。由于 NullClaw 作为个人 AI 助手，网络请求是核心链路，此类“配置未变但升级后报错”的回归问题会直接中断服务，导致用户对特定版本的信任度下降。
- **反馈建议**：用户期望在发生 DNS/Host 解析错误时，系统能提供更具指导性的日志（如提示网络环境变化或底层库重构的 Breaking Change），而不是直接抛出底层硬错误。

## 8. 待处理积压
当前代码库中有 5 个重要的待合并 PR 需要维护者进一步 Review，以解决现有的功能积压与 Bug：
- **长期活跃 PR**：([PR #783](https://github.com/nullclaw/nullclaw/pull/783))（Cron 子代理与历史记录功能）自 4 月初开启至今仍在更新，该功能对 Agent 的定时自动化调度至关重要，建议尽快推进合并。
- **回归问题关键修复**：由黑客松参与者提交的 ([PR #908](https://github.com/nullclaw/nullclaw/pull/908)) 似乎包含了针对近期 DNS 初始化 Bug 的修复代码，这可能是解决上述 `siliconflow` 解析问题的关键，建议维护者优先进行代码审查并验证其有效性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the daily project status report for IronClaw based on the provided data.

---

# 📊 IronClaw 项目动态日报 (2026-05-12)

## 1. 今日速览
过去 24 小时内，IronClaw 项目处于**高度活跃**状态，社区与核心开发团队双轨并行推进。共产生 **38 条 Issue 更新**（新开/活跃 23 条，关闭 15 条）和 **50 条 PR 更新**（待合并 19 条，合并/关闭 31 条）。
当前项目重心明显向代号 **"Reborn"** 的下一代架构重构倾斜，大量核心子系统（如 Turn 协调、循环驱动、信任边界）的 PR 被密集合并，标志着底层重构正在快速收尾。同时，端侧 UI 和集成通道也迎来了多项实用功能更新。

## 2. 版本发布
**无新版本发布。** 
项目当前正处于高频的底层架构重构与代码合并期，预计在 "Reborn" 架构的关键 Milestone 全部落地后，将会发布包含重大架构升级的全新版本。

## 3. 项目进展
今日共有 31 个 PR 被合并或关闭，核心进展集中在 **Reborn 架构重塑**、**代码解耦** 和 **UI 优化**：

*   **Reborn 架构核心收尾**：
    *   合并了 [PR #3462](https://github.com/nearai/ironclaw/pull/3462)：增加了用户可选的模型路由和提供商池。
    *   合并了 [PR #3460](https://github.com/nearai/ironclaw/pull/3460)：引入了可信的 `LoopExitApplier`，增强了循环退出的验证策略。
    *   合并了 [PR #3470](https://github.com/nearai/ironclaw/pull/3470) 和 [PR #3471](https://github.com/nearai/ironclaw/pull/3471)：分别引入了确定性的信任感知 `SkillContextService` 和 `MemoryPromptContextService` 生产适配器。
*   **重构与稳定性提升**：
    *   合并了 [PR #3416](https://github.com/nearai/ironclaw/pull/3416)：重构了 LLM 模块，将特定于提供商的 auth、模型获取和 embeddings 配置隐藏在 Facade 之后，大幅优化了外部调用的整洁度。
    *   合并了 [PR #3493](https://github.com/nearai/ironclaw/pull/3493)：修复了 Reborn 内存错误编辑和 SQL 重放游标问题，防止底层 SQL 细节泄漏给用户。
*   **新引擎与集成探索**：
    *   关闭了 [PR #2819](https://github.com/nearai/ironclaw/pull/2819)（Python-only engine）：虽未合并，但完成了对其"通过 Python 寻求更清晰的智能体意图控制"这一替代路径的探索。

## 4. 社区热点
今日讨论度最高的议题依然由核心架构师和社区驱动：

*   **[#3193](https://github.com/nearai/ironclaw/issues/3193) [6 评论] - [Reborn] 定义对话绑定与会话线程契约**：作为 Reborn 架构的核心追踪器之一，讨论了具体在 `origin/reborn-integration` 分支上的语义切片实现，此 Issue 现已关闭，表明该组件已成功落地。
*   **[#3204](https://github.com/nearai/ironclaw/issues/3204) [5 评论] - [Reborn] 定义转录和线程存储边界**：明确了 `ironclaw_turns` 的 crate 边界，为后续多组件并行开发打下了基础。
*   **[#748](https://github.com/nearai/ironclaw/issues/748) [6 👍] - 发布 ironclaw-worker Docker 镜像**：这是一个长期存在的社区痛点（详见后文积压），用户在今天再次进行了关注/表态。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，主要集中在第三方集成、多租户权限和生产环境下的表现：

*   **🔴 P1: 多租户权限失效**：([#3490](https://github.com/nearai/ironclaw/issues/3490)) 管理员在设置中禁用 "shell" 工具后，用户的 Agent 仍然可以访问。*目前尚无关联的修复 PR，需紧急关注。*
*   **🔴 P1: Gmail 集成认证 502**：([#3128](https://github.com/nearai/ironclaw/issues/3128)) 用户通过聊天助手添加 Gmail 时，在身份验证流程的回调环节持续发生 502 错误。
*   **🟡 P2: Telegram 长文本静默失败**：([#2903](https://github.com/nearai/ironclaw/issues/2903)) 如果机器人的回复过长，不会发送报错提示，而是直接静默失败。
*   **🟡 P2: Hosted 环境下的文件保存越界**：([#2905](https://github.com/nearai/ironclaw/issues/2905)) Agent 将文件保存在用户无法访问的 `/home/agent` 目录。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 来看，项目正在为下一次大版本的功能爆发做准备：

*   **Reborn 贡献者跑道就绪**：([#3484](https://github.com/nearai/ironclaw/issues/3484)) 正在建立最小化的稳定 Reborn 路线，以便多个贡献者可以并行移植 **skills、tools/capabilities 和 channels**。这释放了即将大幅扩展 Agent 工具生态的信号。
*   **UI/UX 全面升级**：待合并的 [PR #3461](https://github.com/nearai/ironclaw/pull/3461) 引入了移动端侧边抽屉布局，以及 [PR #3331](https://github.com/nearai/ironclaw/pull/3331) 完善了非图片附件的 UI 展示和持久化，这将极大改善本地部署的 Web 体验。
*   **企业微信 (WeCom) 支持**：[PR #2394](https://github.com/nearai/ironclaw/pull/2394) 正在添加独立的 `wecom` WASM 通道，表明项目正在向更广泛的 IM 生态扩展。

## 7. 用户反馈摘要
从最新的 Issue 描述中，可以提炼出真实用户的以下核心痛点：

1.  **新手引导断裂（Onboarding 真实体验差）**：([#3500](https://github.com/nearai/ironclaw/issues/3500)) 用户在进行 `cargo run` 本地安装时，默认配置缺乏 Web UI 的任何启动提示，导致本地跑起来后"一脸懵"，认为没有可视化界面可用。
2.  **Markdown 格式不兼容**：([#3499](https://github.com/nearai/ironclaw/issues/3499)) Slack 频道扩展直接将 LLM 生成的标准 Markdown 吐给 Slack API，导致排版错乱（Slack 需要特定的 `mrkdwn` 格式）。
3.  **工具配置对用户不透明**：([#3034](https://github.com/nearai/ironclaw/issues/3034)) V2 引擎的 HTTP 工具默认被禁用，且没有任何引导让用户知道如何开启。

## 8. 待处理积压
以下几个高价值/高影响议题长期未得到彻底解决或合并，建议维护团队重点关注：

*   **[Issue #748] Docker 沙箱开箱即用失败**：([#748](https://github.com/nearai/ironclaw/issues/748)) 由于没有公开的镜像仓库，`auto_pull_image` 总是失败，获得了 6 个赞，是社区 Local 部署的重大阻碍。
*   **[Issue #3069] 独立 Reborn 二进制文件发布**：([#3069](https://github.com/nearai/ironclaw/issues/3069)) 虽然已建立基础并有关联的 [Issue #3483](https://github.com/nearai/ironclaw/issues/3483) 追踪发布打包，但仍未完成，这是 Reborn 面向用户的最终交付物。
*   **[PR #2819] Python-only Engine 的决策悬而未决**：虽然今日已关闭，但长达数月的讨论反映了团队对"如何更好控制 LLM 意图"的挣扎，其替代方案（Heuristics 的改进）需要清晰的路线图补充。
*   **[PR #3361/3360] 依赖批量升级停滞**：由 Dependabot 发起的 43 个依赖更新（[PR #3361](https://github.com/nearai/ironclaw/pull/3361)）和 6 个 Tokio 生态更新（[PR #3360](https://github.com/nearai/ironclaw/pull/3360)）自 5月7日 以来一直处于 Open 状态，存在后续合并冲突的风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-05-12 动态日报：

# 📄 LobsterAI 项目动态日报 (2026-05-12)

## 1. 今日速览
过去 24 小时，LobsterAI 项目展现出**极高的开发活跃度与工程迭代速度**。团队在单日内完成了多达 30 个 PR 的合入与关闭，重心主要聚焦于**多实例 IM 支持（特别是 POPO）、会话分页架构升级、Artifacts 预览修复以及 UI 交互打磨**。项目整体处于快速功能迭代与稳定性收敛并行的阶段，自动化依赖更新机器人（dependabot）也在持续运作。此外，社区端出现了一例关于对话追问时输出异常的 Bug 反馈，值得研发团队关注。

## 2. 版本发布
- **最新发布**：今日无独立新版本发布。
- **发版信号**：值得注意的是，包含大量核心功能与修复的 `Release/2026.05.01` 分支已于昨日（05-11）完成合并（[#1902](https://github.com/netease-youdao/LobsterAI/pull/1902)），预计近期将正式发布新版。

## 3. 项目进展
今日共有 30 个 PR 被合并或关闭，项目在以下几个重要方向取得了实质性进展：

- **架构与性能优化**：
  - **分页加载落地**：[#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) 引入了会话列表与消息历史的分页加载机制，有效解决了长对话轮次带来的内存占用和前端渲染卡顿问题。
  - **引擎架构精简**：[#1884](https://github.com/netease-youdao/LobsterAI/pull/1884) 移除了废弃的 `yd_cowork` 引擎分支，统一为 `openclaw` 单引擎，净减少 65 行冗余代码。
  - **主工作区解耦**：[#1890](https://github.com/netease-youdao/LobsterAI/pull/1890) 将主 Agent 工作区与用户工作目录解耦，避免了更改目录导致 Agent 状态丢失的风险（配合迁移修复 [#1894](https://github.com/netease-youdao/LobsterAI/pull/1894)）。

- **IM 集成与多实例支持**：
  - **POPO 深度集成**：通过 [#1883](https://github.com/netease-youdao/LobsterAI/pull/1883) 和修复补丁 [#1887](https://github.com/netease-youdao/LobsterAI/pull/1887) 实现了 POPO 多机器人实例支持架构。[#1901](https://github.com/netease-youdao/LobsterAI/pull/1901) 修复了相关的 UI 展示和国际化问题。
  - **微信配置增强**：[#1893](https://github.com/netease-youdao/LobsterAI/pull/1893) 允许微信插件直接从配置文件读取 `dmPolicy` 和 `allowFrom`，提升了私有化部署的灵活性。

- **渲染与 UI 修复**：
  - **流式输出健壮性**：[#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) 修复了流式文本合并时因边界重叠检测误判导致的字符吞没问题。
  - **文件预览体验**：[#1945](https://github.com/netease-youdao/LobsterAI/pull/1945) 全面增强了 Mermaid/PPTX 的预览能力并修复了缩放报错；[#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) 专门解决了 Windows 环境下文件路径导致的重复卡片和预览失败问题。
  - **UI 细节打磨**：[#1942](https://github.com/netease-youdao/LobsterAI/pull/1942) 优化了消息元数据的悬浮行为；[#1946](https://github.com/netease-youdao/LobsterAI/pull/1946) 优化了输入框 UI。

- **技能与记忆系统**：
  - [#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) 重构了设置中的记忆页面，新增了 Dreaming 内容展示和 IPC 通道。
  - [#1916](https://github.com/netease-youdao/LobsterAI/pull/1916) 为 IMAP/SMTP 连接失败引入了 AI 诊断入口，利用 LLM 辅助用户排障。

## 4. 社区热点
由于系统数据统计时间内（过去24小时）大部分 PR 的合并处理较为迅速，评论数暂未形成大量堆积。热点主要体现在以下两端：
- **活跃 Issue**：[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)（追问时无响应/输出中断）在过去一天内有新的社区评论，反映了用户在进行多轮深度对话时遇到的阻断性体验问题。
- **长期挂起 PR**：[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 是 dependabot 提出的 Electron 大版本（40.2.1 -> 42.0.1）升级依赖 PR，自 4 月初开启至今仍在待合并状态（Open），说明维护者对待核心框架升级持谨慎态度。

## 5. Bug 与稳定性
根据今日 Issue 动态与合入的 PR，重点关注以下 Bug 及其修复情况：

- **🟡 中高严重程度：追问导致输出停滞**
  - **表现**：[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 用户反馈连续追问时出现无限 `NO_REPLY` 或输出几个字就停止。
  - **状态**：已定位为任务被提前 complete 导致页面无响应。虽然 [#1940](https://github.com/netease-youdao/LobsterAI/pull/1940) 尝试修复了消息尾部的 `NO_REPLY` 同步问题，但该 Issue 目前仍处于 Open 状态，需观察是否完全闭环。
- **🟢 中低严重程度：前端渲染与显示 Bug（均已修复）**
  - **流式字符吞没**：[#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) 修复了分块造成的字符丢失（如 `.pptx` 变成 `.ptx`）。
  - **代码块样式溢出**：[#1944](https://github.com/netease-youdao/LobsterAI/pull/1944) 修复了水平滚动时代码块背景色无法延伸的问题。
  - **Windows 路径解析错误**：[#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) 修复了 Win 环境下 `D:\D:\path` 的路径报错。

## 6. 功能请求与路线图信号
- **AI 辅助运维**：[#1916](https://github.com/netease-youdao/LobsterAI/pull/1916) 引入的 "AI Diagnostics" 揭示了项目未来的一个演进方向——利用 AI Agent 能力反哺产品自身的异常诊断与配置排查。
- **记忆系统深化**：[#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) 暴露出 `Dreaming` 机制的存在，表明 LobsterAI 正在探索更高级的长短期记忆管理和沉淀能力（日记、场景、高级子模块）。

## 7. 用户反馈摘要
结合 [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 的讨论与今日的修复侧重点，提炼真实用户痛点如下：
- **多轮对话连贯性敏感**：用户对 Agent 在连续对话（追问）时的响应状态极为敏感，任务状态机与前端 UI 状态的同步断层是目前最大的痛点之一。
- **文档与长文本消费需求大**：大量关于 Artifacts 预览（PPTX, Mermaid，长代码块）的修复表明，用户非常频繁地使用 LobsterAI 生成和查阅复杂文档/图表，对排版和缩放交互要求极高。

## 8. 待处理积压
- **[Important PR]** [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：Electron 核心框架升级（至 v42）。此 PR 由 dependabot 发起已超过 1 个月未处理。由于涉及底层大规模重构，建议维护团队尽快排期评估兼容性，以防技术债累积。
- **[Open Issue]** [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849)：对话中断问题仍有反馈，建议结合已合并的 [#1940](https://github.com/netease-youdao/LobsterAI/pull/1940) 和 [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) 在下一版本中验证并主动关闭。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-05-12)

## 1. 今日速览
过去 24 小时，Moltis 项目整体呈现出**高解决率、零新增积压**的健康状态。项目未发布新版本，但在基础设施与部署安装层面的维护非常及时。社区共报告并迅速关闭了 3 个 Bug（其中 2 个已有对应的修复 PR 被合并），同时合并了 2 个 Pull Requests，实现了 Issues 与 PRs 的 100% 清帐。整体来看，项目活跃度适中，维护者对社区反馈的响应速度极快，重点集中在提升本地部署和沙箱环境的稳定性上。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目合并了 2 个关键的修复 PR，显著提升了安装部署的成功率和沙箱构建的稳定性：
- **修复 Proxmox 部署失败问题**：PR [#992](https://github.com/moltis-org/moltis/pull/992) 已合并。该 PR 重构了 Proxmox LXC 的安装路径，修复了在无交互式终端（无 TTY）情况下 Docker 沙箱提示失败的问题，并在有 TTY 时保留了交互式体验。这使得在自动化部署环境中的安装更加健壮。
- **修复沙箱构建路径失效问题**：PR [#989](https://github.com/moltis-org/moltis/pull/992) 已合并。由于外部依赖 `discrawl` 的仓库 URL 发生变更，导致沙箱容器构建失败。该 PR 及时更新了 Go 模块路径和元数据，并添加了回归断言以防止此类问题再次发生。

## 4. 社区热点
今日社区的热点围绕**部署体验**展开。
- 讨论最活跃的 Issue 是 [#990](https://github.com/moltis-org/moltis/issues/990)（获得了 1 条评论）。该 Issue 反映了用户自定义代理模式失效的问题。尽管尚未有明确的修复 PR 提交，但该问题的暴露说明社区正积极尝试深度定制化使用 Moltis，这是高级用户探索产品边界的重要信号。
- Proxmox 安装报错（[Issue #991](https://github.com/moltis-org/moltis/issues/991)）和 `discrawl` 依赖失效（[Issue #988](https://github.com/moltis-org/moltis/issues/988)）也引发了高度关注，得益于维护者的极速响应，这些痛点已在今日彻底解决。

## 5. Bug 与稳定性
今日共处理 3 个 Bug，均已在当日关闭，整体稳定性控制得当：
1. **[高] 沙箱构建阻断性错误**：外部依赖 `discrawl` 仓库 URL 变更导致沙箱容器构建完全失败。（[Issue #988](https://github.com/moltis-org/moltis/issues/988)） -> **已修复**：[PR #989](https://github.com/moltis-org/moltis/pull/989)。
2. **[高] 部署安装阻断性错误**：Proxmox 环境下创建 LXC 容器时在第 29 行报错，导致自动化部署中断。（[Issue #991](https://github.com/moltis-org/moltis/issues/991)） -> **已修复**：[PR #992](https://github.com/moltis-org/moltis/pull/992)。
3. **[中] 功能级 Bug**：用户在定义 Agent 模式时功能失效，无法按预期工作。（[Issue #990](https://github.com/moltis-org/moltis/issues/990)） -> 状态为已关闭（可能在主分支已修复或已确认解决方案，但目前未见今日对应的合并 PR）。

## 6. 功能请求与路线图信号
今日的数据未显示明显的新功能请求，但 [Bug #990](https://github.com/moltis-org/moltis/issues/990) 揭示了一个重要的路线图信号：**用户对“自定义 Agent 模式”的核心诉求非常强烈**。这说明 Moltis 的用户群体正在从基础对话向复杂的、垂直定制的 AI 智能体工作流演进。未来版本中，进一步增强 Agent 编排能力、提供更完善的自定义模式 UI 和 API，将是提升项目竞争力的关键方向。

## 7. 用户反馈摘要
从今日的 Issue 标题与摘要中，可以提炼出以下真实用户反馈与痛点：
- **私有化/本地化部署需求活跃**：多位用户（如 @Thndr）在使用 Proxmox 进行底层虚拟化部署，证明 Moltis 在注重数据隐私的极客和企业级用户中颇受欢迎。
- **自动化运维要求高**：用户对于非交互式环境下的安装（如 CI/CD 自动化构建、脚本批量部署）有强烈需求，任何阻塞静默安装的 Bug 都会直接影响他们的体验。
- **依赖变更敏感**：作为一款 AI 智能体框架，项目依赖外部工具（如 `discrawl`），开源社区上游的突然变动（如更改 URL）容易引发连锁反应。

## 8. 待处理积压
**无新增积压**。过去 24 小时内，新增 Issue 数量为 0（今日更新的 3 个 Issue 均已关闭），新增待合并 PR 数量为 0（更新的 2 个 PR 均已合并/关闭）。项目当前的仓库积压清理效率极高，项目健康度处于极佳状态。建议维护者在后续继续保持对“自定义 Agent 功能”的测试覆盖，以防类似 #990 的 Bug 复现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
**日期**: 2026-05-12 | **分析师**: AI 智能体与个人 AI 助手开源项目分析

---

## 1. 今日速览
CoPaw 项目在过去 24 小时内保持了极高的社区活跃度，共产生 **49 条 Issue 更新**（28 新开/活跃，21 关闭）和 **35 条 PR 更新**（19 待合并，16 合并/关闭）。项目当前处于快速迭代的“功能扩展与稳定性修复并重”阶段。虽然今天没有发布新的版本，但社区贡献激增，尤其在多渠道体验优化（如飞书语音、钉钉引用消息）、核心工具增强（如自定义 Shell、浏览器批量动作）和系统健壮性（如僵尸会话清理、内存索引同步）等方面取得了实质性进展。

## 2. 版本发布
今日无新版本发布。当前主版本仍停留在 v1.1.6 阶段。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，核心推进了以下几个重要领域：

*   **核心会话机制修复**：
    *   [CLOSED] `PR #4203`：修复了会话历史消失且消息被路由到错误会话的严重 Bug（关联 `Issue #3843`）。通过修正 `applyChatsToSessionList` 中对 `sessionId` 的匹配逻辑，解决了多会话状态串台的问题。
*   **记忆系统升级**：
    *   [CLOSED] `PR #4204`：引入了自动记忆管理功能，增加了 `auto_memory_search` 和触发式摘要等机制，显著提升了长程对话的记忆提取与上下文压缩能力。
*   **渠道与前端体验增强**：
    *   [CLOSED] `PR #4209`：钉钉渠道现已支持处理用户回复的引用消息。
    *   [CLOSED] `PR #1791`：控制台现已支持为不同 Agent 上传头像，优化了多智能体工作流的视觉辨识度。
    *   [CLOSED] `PR #4197`：为 `delegate_external_agent` 增加了异步执行支持，提升了长时外部工作流的流畅度。
*   **浏览器工具增强**：
    *   [CLOSED] `PR #4139`：`browser_use` 工具新增批量动作支持，允许通过 JSON 数组一次性执行多个子动作（如点击、输入、悬停等）。

## 4. 社区热点
今日讨论最热烈的问题集中在**模型兼容性**与**长时间任务的用户体验**上：

*   **升级导致的模型调用失败**：`Issue #4133`（10 条评论）。多名用户反馈升级到 `v1.1.5.post2` 后，部分第三方模型提供商（如 opencode）无法正常使用，引发 `MODEL_EXECUTION_FAILED` 错误，这表明近期的底层改动可能引入了小众 Provider 的兼容性回归。
*   **网络波动导致 Agent 假死**：`Issue #2429`（10 条评论）与 `Issue #2435`（6 条评论）。用户抱怨在网络波动或定时任务执行时，经常遭遇连接中断且无法自动重连，需要手动重启。这暴露出底层心跳检测和网络重连机制的脆弱性。
*   **长耗时任务的黑盒状态**：`Issue #4170`（3 条评论）。用户指出当前 Agent 在执行耗时动作（5-10分钟）时，信息仅在完全结束后才显示，导致用户无法感知进度或及时终止。反映出前端流式输出与后端状态推送需要优化。

## 5. Bug 与稳定性
今日报告了多个影响核心稳定性的 Bug，部分已处于修复状态：

1.  **[P0 严重] 会话历史丢失与消息串流** (`Issue #3843` [CLOSED])：已有 Fix PR (`PR #4203` 被合并)。
2.  **[P1 较严重] 向量索引未同步记忆文件** (`Issue #4220` [OPEN])：`auto_memory_interval` 写入文件后，新会话无法搜到记忆内容，当前索引同步机制存在断点，暂无关联 Fix PR。
3.  **[P1 较严重] DashScope Provider 配置读取失效** (`Issue #4159` [OPEN])：明明配置了 API Key，运行时却被置空导致 401。已由 `PR #4186` 提出修复方案（保留 provider metadata），等待合并。
4.  **[P1 较严重] Cron 定时任务复活“僵尸会话”** (`Issue #4162` 关联)：`PR #4223` 引入了软删除机制，防止已删除的聊天上下文被 Cron 任务重新加载。
5.  **[P2 中等] Windows 环境控制台闪烁与 Shell 编码问题** (`Issue #4123`, `Issue #3183`)：Windows 下执行命令会闪控，且默认调用 PowerShell 5 导致中文乱码。

## 6. 功能请求与路线图信号
社区提出了多项极具价值的功能诉求，且部分已有高度匹配的草稿 PR，极有可能在下一版本落地：

*   **自定义 Shell 执行环境**：
    *   *需求*：`Issue #3767`, `Issue #4103`（希望能指定使用 Bash 而非 /bin/sh，或解决 Windows 编码问题）。
    *   *进度*：`PR #4215` 已就绪，新增 `shell_command_executable` 配置项，允许用户强制指定 Shell。
*   **多附件与图片参考上传**：
    *   *需求*：`Issue #4192`（多文件上传）, `Issue #4167`（图片生成传入参考图）。
    *   *进度*：针对多附件上传的 `PR #4206` 已提交。
*   **控制台原生语音气泡**：
    *   *需求*：改善语音交互体验。
    *   *进度*：`PR #4202` 实现了飞书频道的原生语音气泡支持（不再是普通文件）。
*   **桌面应用重构（重大架构演进）**：
    *   *进度*：`PR #3813` 正在评审中，该项目正在引入 `Tauri 2.x` 替代老旧架构，这将对桌面版性能和资源占用带来质的飞跃。

## 7. 用户反馈摘要
从今日的 Issues 互动中，可以提取出以下核心用户画像与真实反馈：
*   **痛点 - 阻碍多模态与高频使用**：
    *   “一次只能上传一个附件太影响效率了。”
    *   “思考过程（thinking）没有折叠，占据了大量屏幕空间。”（`Issue #4174`）
    *   “我等了 10 分钟不知道 Agent 在干嘛，也没法停止它。”
*   **使用场景挖掘**：
    *   大量开发者利用 CoPaw 搭建 **定时任务集成（Cron Jobs）** 并通过钉钉/飞书/Telegram 等多渠道接收消息。
    *   用户高频使用 `execute_shell_command` 进行系统级自动化，因此对底层 Shell 的兼容性（Dash vs Bash，编码问题）极其敏感。
*   **满意点**：用户非常认可多渠道（Telegram, 钉钉等）的接入能力以及浏览器工具（browser_use）的潜力，并积极贡献插件（如 `PR #4171` 带来的记忆蒸馏插件）。

## 8. 待处理积压
以下是近期提出但尚未得到有效解决的关键 PR/Issue，需要维护团队重点关注：

1.  **架构级 PR 悬而未决**：
    *   `PR #3813`：Tauri 2.x 桌面端重构支持。状态为 Under Review，因涉及底层架构变更，需要核心维护者投入精力评审。
2.  **长期存在的网络/状态同步痼疾**：
    *   `PR #4084`：修复 CronManager 中的并发状态泄漏。这是一个复杂的并发状态修复，已被搁置数天，需尽快验证合并以防数据异常。
3.  **高价值功能开发停滞**：
    *   `PR #2308`：基于 AnalyticDB for PostgreSQL 的长期可插拔记忆管理器，状态为 OPEN，等待核心接口对接。
4.  **桌面端基础功能缺失**：
    *   `Issue #4182`：桌面版目前无法设置自定义智能体为默认启动项，严重影响了重度桌面用户的开箱体验，当前尚无官方回应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是为您生成的 ZeptoClaw 项目 2026-05-12 动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-05-12)

**分析师洞察**：ZeptoClaw 项目今日整体处于“底层架构演进与安全加固并行”的稳健状态。虽然代码合并量不大，但核心维护者正在为智能体的中间件流水线进行关键的 Phase 2 阶段重构，同时自动化安全审计机制正在高效运转。

## 1. 🌟 今日速览
过去 24 小时内，ZeptoClaw 仓库呈现出**中等但极具质量的开发活跃度**。项目今日未发布新版本，但核心开发工作正在向底层架构深水区推进。主仓库维护者 `qhkm` 提交了重构智能体核心消息处理循环的重要 PR，标志着 AI 处理管道的 Phase 2 阶段正式落地。与此同时，系统安全能力得到进一步验证，由自动化系统发起的深度安全漏洞审计任务已被顺利识别并关闭。整体来看，项目正处于“重构优化期”，代码质量与安全性是当前的重中之重。

## 2. 📦 版本发布
**无**。项目今日无新版本发布。

## 3. 🚀 项目进展
- **核心架构重构推进（Phase 2）**：维护者 `qhkm` 提交并开放了 PR [#583](https://github.com/qhkm/zeptoclaw/pull/583) `refactor(agent): wire Pipeline into process_message + CoreLoop (phase 2 of #399)`。该 PR 将 `AgentLoop` 中的管道上下文成功接入 `process_message` 与 `CoreLoop`，并引入了 `LegacyTerminal` 存根机制以处理结构化错误短路。虽然当前处于待合并状态，但这标志着智能体中间件管道（Pipeline）底层调通的节点性进展。
- **安全审计自动化闭环**：Issue [#584](https://github.com/qhkm/zeptoclaw/issues/584) 被成功关闭。该任务利用 `role-orchestrator` 技能对整个代码库进行了深度的单点漏洞审计，并成功产出了 `.codex-audit-work` 相关的共享内存与边界追踪报告，项目安全基线得到进一步确认。

## 4. 🔥 社区热点
今日社区最核心的关注点在于**自动化安全审计工作流的验证**（[Issue #584](https://github.com/qhkm/zeptoclaw/issues/584)）。
- **背后诉求分析**：该 Issue 由用户/机器人 `liey1` 发起，产生了 2 条评论。这反映了开源 AI 智能体项目对供应链和代码安全的严苛要求。通过引入“仅基于证据的发现”和“负向边界追踪”，项目正在建立一套高度自动化的漏洞扫描与防御机制，这也为 ZeptoClaw 未来在企业级场景的应用扫清了安全信任障碍。

## 5. 🛡️ Bug 与稳定性
- **无新增用户报告的严重 Bug 或崩溃问题**。
- 值得注意的是，在 PR [#583](https://github.com/qhkm/zeptoclaw/pull/583) 中，开发者通过添加 `LegacyTerminal` 存根来主动进行短路错误处理。这属于**预防性架构设计**，旨在避免在管道重构期间引入未处理的异常，说明项目在代码稳定性把控上具备前瞻性。

## 6. 🗺️ 功能请求与路线图信号
- **明确的路线图信号**：从 PR [#583](https://github.com/qhkm/zeptoclaw/pull/583) 的标题可以看出，这是对整体规划 Issue `#399` 以及前置 PR `#564` 的后续跟进。
- **预测**：项目正在执行一项系统级的“智能体消息处理管道”重构计划。随着 Phase 2 脚手架的搭建完成，预计下一个版本或未来的 PR 将集中在旧版代码的彻底剥离、中间件链的扩展，以及消息处理吞吐量的性能优化上。

## 7. 🗣️ 用户反馈摘要
今日无典型的终端用户功能使用反馈。但从 `liey1` 在安全审计 Issue 中的操作可以提炼出技术社区的痛点：
- **痛点/场景**：在复杂的 AI Agent 工作流中，自动化排查底层代码的安全边界和潜在阻断点往往非常困难。
- **满意度**：高度满意。Issue #584 的顺利运行并产生结构化审计工件（artifacts），表明 ZeptoClaw 在基础设施研发体验和自动化治理方面表现优异。

## 8. 📋 待处理积压
- **PR [#583](https://github.com/qhkm/zeptoclaw/pull/583) 待合并**：作为关键的 Phase 2 基础设施重构，目前仍处于 OPEN 状态，建议维护团队优先进行 Code Review，以确保后续依赖于此管道的业务逻辑开发能够顺利解阻塞。

---
*数据来源：GitHub API (qhkm/zeptoclaw) | 统计周期：2026-05-11 至 2026-05-12*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-12)

> **数据源**: [ZeroClaw Labs / ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) | **分析师**: AI 智能体项目分析组

---

### 1. 今日速览

ZeroClaw 项目今日保持着**极高的开发活跃度与社区健康度**，过去 24 小时内共产生 **15 条 Issue 更新**（10 新开/活跃，5 关闭）与 **48 条 PR 更新**（34 待合并，14 已合并/关闭）。开发重心明显聚焦于 **多渠道（Channel）健壮性增强**（Discord、Telegram、Matrix）与 **OpenAI 兼容 Provider 生态适配**。社区贡献呈现出强烈的“自驱动修复”特征，多名核心贡献者和外部开发者针对近期暴露的多模态视觉路由、深度思考内容解析等痛点，迅速提交了对应的 Fix PR。整体来看，项目正为下一个 minor 版本（预计 v0.7.6）进行密集的缺陷修复和架构打磨。

---

### 2. 版本发布

**今日无新版本发布**。
但值得注意的是，社区已通过 [Issue #6576](https://github.com/zeroclaw-labs/zeroclaw/issues/6576) 明确提出设立 **v0.7.6 版本发布门禁**，要求在合并 `matrix-sdk 0.17` 升级后增加冒烟测试。结合当前大量处于待合并状态的修复 PR，预计近期将迎来一次包含多项渠道和兼容性修复的 Patch 版本更新。

---

### 3. 项目进展

今日共有 14 个 PR 被合并或关闭，另有 34 个高含金量的 PR 正在等待合入，整体项目向前迈出了坚实的一步：

*   **Web UI 与易用性优化**：修复了令人困扰的 Cron 任务表头丢失问题 ([PR #6505](https://github.com/zeroclaw-labs/zeroclaw/pull/6505) 已合入，对应修复 [Issue #6504](https://github.com/zeroclaw-labs/zeroclaw/issues/6504))。
*   **Provider 生态扩充**：引入了对本地大模型启明星 的支持 ([PR #6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513) 已合入)。
*   **文档与基建修正**：连续合并了多个文档修复 PR（[PR #6570](https://github.com/zeroclaw-labs/zeroclaw/pull/6570), [PR #6581](https://github.com/zeroclaw-labs/zeroclaw/pull/6581)），将过时的 Docker Hub 镜像地址统一迁移至 `ghcr.io`。
*   **核心缺陷攻坚**：开发者 `Audacity88` 提交了收紧发行版资产选择的更新机制修复 ([PR #6585](https://github.com/zeroclaw-labs/zeroclaw/pull/6585))，以及针对 DuckDuckGo 搜索反爬的精准侦测 ([PR #6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582))。

---

### 4. 社区热点

*   **OpenAI 兼容 Provider 的思维链 丢失事件**：[Issue #6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584) 指出 ZeroClaw 仅读取 `reasoning_content`，导致通过 vLLM/OpenRouter 输出的 `reasoning` 字段被静默抛弃。开发者 `zwffff` 在同一天迅速提交了兼容性修复 ([PR #6587](https://github.com/zeroclaw-labs/zeroclaw/pull/6587))，体现了极快的社区响应。
*   **混合大模型视觉路由静默失效**：[Issue #6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) 曝光了在复杂多模型配置下（如 TogetherAI + Anthropic 混用），视觉能力回退机制由于 `.any()` 逻辑错误而静默绕过的问题。这引发了关于重构多模态能力的讨论，并引申出了新的特性请求 [Issue #6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574)。

---

### 5. Bug 与稳定性

今日报告的关键 Bug 集中在运行时核心和多渠道通讯，按严重程度排列如下：

*   **[S1 - 工作流阻塞]** **丢失用户消息**：[Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) 报告在使用 OpenAI 兼容接口（Qwen3.5-35B）进行多轮对话时，偶现 User Message 丢失导致 400 报错。目前状态为 `Accepted`，亟待修复。
*   **[S2 - 行为降级]** **Discord 渠道媒体收发异常**：[PR #6572](https://github.com/zeroclaw-labs/zeroclaw/pull/6572) 修复了 Discord 渠道中并行附件处理导致的多重下载和类型映射丢失问题。
*   **[S2 - 行为降级]** **Telegram TTS 修复**：[Issue #6588](https://github.com/zeroclaw-labs/zeroclaw/issues/6588) 修复了在 `partial` 流式输出模式下，Telegram 机器人 TTS 语音回复被异常禁用的缺陷。
*   **[S2 - 行为降级]** **Matrix 线程上下文断裂**：[PR #6579](https://github.com/zeroclaw-labs/zeroclaw/pull/6579) 修复了开启 `reply_in_thread` 后，Matrix 根消息被错误当成独立线程导致多轮对话上下文丢失的严重 Bug。

---

### 6. 功能请求与路线图信号

从今日的提案中，可以明显看出 ZeroClaw 正向**更丰富的多媒体智能体**和**高隐私搜素**方向演进：

*   **支持 ComfyUI 作为媒体生成 Provider**：[Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) 提议接入 ComfyUI/Comfy Cloud 作为一等公民媒体生成后端。这标志着 ZeroClaw 有意从“文本智能体”向“多模态内容生成中枢”拓展。
*   **SearXNG 隐私搜索与反爬优化**：[Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) 提议集成 SearXNG，结合今日的 [PR #6582](https://github.com/zeroclaw-labs/zeroclaw/pull/6582) (DDG反爬优化)，表明项目在强化 Agent 自主上网能力上的决心。
*   **多渠道交互事件统一**：[PR #6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) 正在为 WhatsApp、Signal 等渠道引入投票和交互式回复的抽象层，这将极大增强智能体在社交软件上的互动能力。

---

### 7. 用户反馈摘要

通过深度分析今日的 Issue 报告，提炼出以下真实用户痛点：

1.  **“静默失败”体验不佳**：多位用户反馈在多模态视觉 ([Issue #6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589)) 或深度思考 ([Issue #6584](https://github.com/zeroclaw-labs/zeroclaw/issues/6584)) 场景中，如果配置不匹配，系统倾向于静默丢弃内容而不是报错提示。
2.  **Homebrew 安装断层**：([Issue #6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547)) 反映了包管理器同步滞后的问题，导致部分 Mac 用户无法通过 `brew` 升级到最新版本，阻碍了新用户的平滑上手。
3.  **UI 细节困扰**：对于重度依赖 WebUI 设置定时任务的用户，表头消失严重影响了可用性 ([Issue #6504](https://github.com/zeroclaw-labs/zeroclaw/issues/6504))。
4.  **渠道操作的安全审核反馈**：Telegram 用户希望能够明确看到工具批准按钮点击后的状态变化，而不是按钮持续保持可点击状态 ([Issue #6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565))。

---

### 8. 待处理积压

以下是近期需核心 Maintainer 重点关注的积压项目：

*   **[历史代码库审计]** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)：追踪 3 月份因紧急回滚丢失的 153 个 Commits。这是一个高危的维护性问题，目前状态为 `In-progress`，需要持续跟进以防已修复的 Bug 再次浮现。
*   **[工具重构滞留]** [PR #4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944)：关于文件、网络等核心工具的 Bundle 包装器迁移。该 PR 体积庞大且已停滞，被打上了 `needs-author-action` 标签，其合入进度将直接影响后续 Tool 层的开发。
*   **[多模态架构规范化]** [PR #6183](https://github.com/zeroclaw-labs/zeroclaw/pull/6183)：关于图像标记在 Agent 和 Tool 历史中规范化的修复。该 PR 解决了长期存在的多模态上下文记忆痛点，目前等待作者响应。
*   **[安全与网关提示修复]** [Issue #6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561)：非环回地址下，恢复提示中包含被 Admin Guard 拒绝的 URL 问题，涉及安全配对机制，需尽快排期。

</details>