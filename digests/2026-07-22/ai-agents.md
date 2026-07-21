# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 22:16 UTC

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

**OpenClaw 项目动态日报**
**日期**: 2026-07-22 | **分析数据源**: 过去 24 小时 GitHub 活动

---

### 1. 今日速览
*   **高并发迭代与活跃度爆棚**: OpenClaw 在过去 24 小时内维持了极高的事件吞吐量，Issues 与 PR 更新均触及单日 500 条的数据抓取上限。项目正处于功能快速整合与深度架构优化的双轨高速运行期。
*   **质量保卫战打响**: 社区报告了多项涉及 macOS 端权限、SQLite 数据库损坏及底层事件循环阻塞的关键 Bug，官方及核心维护者（如 `steipete`）已迅速响应，提交了多个针对性修复与大规模重构 PR。
*   **安全与治理成为核心焦点**: 社区对 AI 智能体的权限隔离、密钥屏蔽及沙箱机制发出了强烈呼声，预示着项目正从“可用”向“企业级安全可控”演进。

---

### 2. 版本发布
* **无新版本发布 (0 个)**。
*(注：当前核心开发团队正集中于清理 P0/P1 级别的架构与稳定性 Bug，以及推进 Web UI 与核心网关的重构，预计在进行全面稳固后才会切分新的正式版本。)*

---

### 3. 项目进展
今日共有 157 个 PR 被合并或关闭，343 个新 PR 处于待合并状态，项目主要在以下维度取得实质性突破：

*   **Web UI 与网关核心体验升级**: 核心维护者 `steipete` 连续推进了多个 XL 级别的基础设施重构。
    *   **会话观察 HUD 与设置面世** ([PR #112260](https://github.com/openclaw/openclaw/pull/112260)): 为 Web 控制面板增加了浮动状态 HUD 和侧边栏摘要，极大提升了多智能体并发时的可视化监控能力。
    *   **频道设置架构精简** ([PR #112319](https://github.com/openclaw/openclaw/pull/112319)): 将 `ChannelSetupInput` 缩减为带有废弃兼容层的通用信封，大幅清理了核心 SDK 的历史技术债务。
*   **云厂商与本地算力兼容性增强**:
    *   **Ollama 云端上下文修复** ([PR #112430](https://github.com/openclaw/openclaw/pull/112430)): 修复了 Ollama 云端模型被错误施加 32K 上下文限制的问题，使云端模型能正确广播原生上下文窗口。
    *   **Google Vertex AI 接入向导** ([PR #87800](https://github.com/openclaw/openclaw/pull/87800)): 深度修复了 ADC (应用默认凭证) 认证阻塞问题，并补充了完整的开发者文档。
*   **定时任务与投递稳定性**:
    *   **Cron 脚本限制与熔断** ([PR #112415](https://github.com/openclaw/openclaw/pull/112415)): 修复了 cron 脚本超时限制被静默截断的问题，并增加了对永久性失败的正确处理。

---

### 4. 社区热点
当前社区讨论最激烈的议题集中在**大型语言模型上下文开销**、**智能体安全防御**以及**多渠道接入规范**上：

*   ** 🔥 密钥屏蔽防泄漏机制** ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659) - 15 评论): 用户强烈要求系统实现 "Masked Secrets"，允许 Agent 调用 API 但绝对禁止其“看到”密钥，以防止 Prompt 注入攻击窃取凭证。这反映了用户在生产环境中对 AI 越权控制的深度担忧。
*   ** 💸 削减冗余的 Token 开销** ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785) - 9 评论): 开发者指出每次会话加载完整的工具 JSON Schema 会产生约 3,500 Token 的固定“过路费”，呼吁实现按需加载，以降低长对话成本。
*   ** 📱 Telegram Business API 支持** ([Issue #20786](https://github.com/openclaw/openclaw/issues/20786) - 9 评论): 大量用户请求支持 Telegram 商业版消息接入，以接管个人聊天业务，相关联动 PR 已处于草拟状态。
*   ** 🔧 阻断性本地模型解析报错** ([Issue #106779](https://github.com/openclaw/openclaw/issues/106779) - 11 评论): 针对 `2026.7.1` 版本，大量 macOS 本地部署用户反馈 `llama.cpp` 提供商解析器生成失败，引发广泛共鸣。

---

### 5. Bug 与稳定性
按严重程度（P0 为最高）排列，今日报告的异常情况直击底层架构：

1.  **[P0 数据库损坏] 网关运行时 SQLite 数据库损坏** ([Issue #101290](https://github.com/openclaw/openclaw/issues/101290))
    *   **现象**: macOS 环境下，CLI 健康检查命令导致正在运行的网关状态数据库被写坏（`database disk image is malformed`）。
    *   **状态**: 🚨 暂无直接修复 PR，影响数据持久化底座，需要维护者最高优排查并发写入锁问题。
2.  **[P1 事件循环阻塞] Active Memory 导致网关卡顿** ([Issue #86996](https://github.com/openclaw/openclaw/issues/86996))
    *   **现象**: 开启 `active-memory` 结合 Codex 主模型时，造成长达十几秒的响应延迟、Hook 超时和事件循环停滞。
    *   **状态**: 🛠️ **已有修复 PR** ([PR #89040](https://github.com/openclaw/openclaw/pull/89040) 和 [PR #97175](https://github.com/openclaw/openclaw/pull/97175))，通过引入任务级超时和异步 I/O 修复阻塞。
3.  **[P1 数据丢失] 手动压缩会话清除历史记录** 
    *   **状态**: 🛠️ **已有修复 PR** ([PR #111122](https://github.com/openclaw/openclaw/pull/111122))，修复了手动执行 `compact` 时历史记录被物理删除却谎称“已归档”的致命逻辑错误。
4.  **[P1 隐私泄漏] macOS 权限无限请求循环** ([Issue #94147](https://github.com/openclaw/openclaw/issues/94147))
    *   **现象**: 因轮询 Bug，macOS 客户端每秒重建定位管理器，导致 TCC 权限弹窗疯狂弹出。
    *   **状态**: 🛠️ **已有修复 PR** ([PR #112321](https://github.com/openclaw/openclaw/pull/112321))，重写了敏感权限的请求逻辑。

---

### 6. 功能请求与路线图信号
通过近期的 Issue 与 PR 联动，可以明确洞察到 OpenClaw 即将发生的架构进化：

*   **细粒度能力权限模型**: 
    *   功能诉求：用户提出通过 `skill.yaml` 清单控制技能权限 ([Issue #12219](https://github.com/openclaw/openclaw/issues/12219)) 以及子 Agent 的按需工具限制 ([Issue #15032](https://github.com/openclaw/openclaw/issues/15032))。
    *   **路线图信号**: 未来版本极有可能引入默认拒绝的网关级安全沙箱，以此防范恶意技能和指令注入。
*   **更智能的任务调度与后备机制**:
    *   功能诉求：用户希望 Cron 任务能感知配额耗尽或限流，自动熔断而非盲目重试 ([Issue #14376](https://github.com/openclaw/openclaw/issues/14376))，以及通过命令测试模型的降级后备链路 ([Issue #6599](https://github.com/openclaw/openclaw/issues/6599))。
    *   **路线图信号**: 官方正在增强网关调度层的“容错智能”，后续将支持基于 HTTP 状态码的退避策略。
*   **安全更新与自动回滚**:
    *   功能诉求：VPS 生产环境用户强烈呼吁提供“备份+健康检查+自动回滚”的安全更新模式 ([Issue #14526](https://github.com/openclaw/openclaw/issues/14526))。

---

### 7. 用户反馈摘要
从深层分析 Issues 中的具体描述，提炼出真实用户的三大痛点与赞誉：

*   **痛点 1：多层级 Agent 协作的不可控性**: 用户在使用 `sessions_spawn` 分发任务时，对“子 Agent 经常不遵守预设的系统提示词”、“模型不遵循指令发送 `ANNOUNCE_SKIP` 导致消息轰炸”感到沮丧（如 [Issue #8299](https://github.com/openclaw/openclaw/issues/8299)）。用户需要的是确定性的代码级控制，而非依赖概率性的模型自觉。
*   **痛点 2：长对话的“失忆”与静默失败**: 多名用户反馈在经历十几轮深度对话后，模型开始输出空参数的工具调用，或静默丢弃执行内容（如 [Issue #53408](https://github.com/openclaw/openclaw/issues/53408)），这严重打击了对 AI 助手处理长周期工程的信心。
*   **满意点：极其强大的跨平台整合能力**: 尽管存在 Bug，大量用户积极尝试将其接入 iMessage、WhatsApp 语音通话事件（如 [Issue #7540](https://github.com/openclaw/openclaw/issues/7540)）、甚至要求增加自定义 Emoji 支持，证明 OpenClaw 的“全能物联网/通讯中枢”定位深受极客与企业用户的青睐。

---

### 8. 待处理积压
以下带有高优先级标签但长期处于 `clawsweeper:no-new-fix-pr` 或 `needs-maintainer-review` 的重要议题需官方关注：

*   **[安全沙箱积压]** 文件系统沙箱配置支持 ([Issue #7722](https://github.com/openclaw/openclaw/issues/7722)) 自 2026 年 2 月提出，仅获得少量关注，但随着 OpenClaw 部署量的增加，沙箱隔离已是必选项。
*   **[鉴权治理积压]** 飞书插件过度索取通讯录权限 ([Issue #13751](https://github.com/openclaw/openclaw/issues/13751))，飞书企业版用户对授予 `contact.base:readonly` 极度抗拒，该问题停滞数月，阻碍了企业版客户的飞书集成进程。
*   **[状态持久化积压]** 请求添加配置、Cron 历史及会话的统一备份/恢复工具 ([Issue #13616](https://github.com/openclaw/openclaw/issues/13616))，灾难恢复机制的缺失是用户将 OpenClaw 投入生产环境前最大的顾虑。

---

## 横向生态对比

以下是基于 2026 年 7 月 22 日各大开源 AI 智能体与个人助手项目动态生成的横向对比与技术生态分析报告。

---

# 📊 2026.07.22 AI 智能体开源生态横向对比与趋势分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体可用”向“企业级安全可控与深度调度”跨越的关键拐点**。各核心项目在维持极高吞吐量（单日互动经常破百）的同时，不约而同地将重心转向底层重构、并发容灾与安全沙箱建设。多渠道通讯协议接入（如 Telegram、Matrix）与本地/云端异构算力的无缝整合已成为行业标配，而对“有界自治”的追求正促使架构向目标驱动（Goal-driven）和细粒度权限隔离快速演进。

## 2. 各项目活跃度对比
*(注：数据基于过去 24 小时抓取上限与状态评估)*

| 项目名称 | Issue 动态 | PR 动态 | 版本发布 | 健康度评估 | 核心开发状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 触及上限 (~500) | 触及上限 (~500) | 无 | 🟢 极度活跃 | 安全治理打响，底层架构重构期 |
| **IronClaw** | 43 | 50 | **v1.0.0-rc.1** | 🟢 高度活跃 | 架构重生冲刺，权限模型收敛 |
| **CoPaw** | 41 | 46 | **v2.0.1-beta.1** | 🟢 高度活跃 | 大版本发布后密集除虫，模块解耦 |
| **ZeroClaw** | 触及上限 (~50) | 触及上限 (~50) | 无 | 🟡 高风险 | 引入目标模式，爆出高危安全漏洞 |
| **Hermes Agent**| 50 | 50 | 无 | 🟠 阵痛期 | 数据库并发修复，跨平台网关排障 |
| **NanoBot** | 11 | 34 | 无 | 🟢 健康 | 边界异常修复，本地大模型适配 |
| **PicoClaw** | 8 | 8 | 无 | 🟢 健康 | 协议合规修复，特定模型适配 |
| **LobsterAI** | 较少 | 10 | 无 | 🟡 负债压力 | 商业化闭环构建，前端体验优化 |
| **Moltis** | 0 | 1 (自动) | 无 | 🟢 平稳 | 常规依赖更新维护 |
| **TinyClaw / ZeptoClaw 等**| 0 | 0 | 无 | ⚪ 静默 | 过去 24 小时无明显活动 |

## 3. OpenClaw 在生态中的定位
作为本阶段的**生态领头羊与核心参照系**，OpenClaw 呈现出以下显著特征：
*   **规模与吞吐壁垒**：其单日 PR/Issue 处理量轻松触及抓取上限（500+），远超 IronClaw、CoPaw 等同类项目，拥有最庞大的核心维护者群体与测试样本。
*   **引领安全治理范式**：率先打响“质量保卫战”，从关注基础功能转向社区呼声极高的“密钥屏蔽机制”和细粒度能力权限模型，正努力从极客玩具向企业级安全可控标杆演进。
*   **全能中枢定位**：相比其他专注于特定领域的项目，OpenClaw 在跨平台整合（iMessage, WhatsApp, 甚至物联网通讯）上表现最具侵略性，充当了“全能连接器”的角色。

## 4. 共同关注的技术方向
通过交叉比对，以下四大技术痛点已成为整个生态的共同演进方向：

1.  **精细化权限与沙箱隔离**
    *   *涉及项目*：OpenClaw, ZeroClaw, IronClaw, NanoBot
    *   *诉求*：防止 Agent 越权调用（如 ZeroClaw 爆出的子代理绕过白名单 S0 级漏洞）、建立默认拒绝的网关级安全沙箱、文件系统防目录穿越。
2.  **有界自治与死循环熔断**
    *   *涉及项目*：NanoBot, OpenClaw, ZeroClaw, CoPaw
    *   *诉求*：打破 Agent 陷入死循环或重复轮询引发的“僵尸态”（如 NanoBot 的 Endless loop、CoPaw 的并发风暴），需要引入任务级强制干预（如 `/cancel-goal`）、Cron 任务熔断与退避机制。
3.  **大模型上下文冗余优化**
    *   *涉及项目*：OpenClaw, CoPaw
    *   *诉求*：静态加载完整工具 JSON Schema 造成的惊人“过路费”（高达数千至上万 Token）。迫切需要按需加载工具，以及对本地模型（如 Ollama）友好的 Prompt 缓存机制。
4.  **数据持久化与 I/O 稳定性**
    *   *涉及项目*：OpenClaw, Hermes Agent, CoPaw
    *   *诉求*：SQLite 在高并发或大体积下的锁损坏、内存溢出（OOM）成为灾难级痛点（Hermes 甚至遇到 Windows 更新清零数据库）。底座可靠性成为生产环境前置条件。

## 5. 差异化定位分析
*   **OpenClaw & ZeroClaw**：主打**全能物联网/通讯中枢与复杂调度**。ZeroClaw 正押注“有界自治目标模式”与 SOP 控制；OpenClaw 则在多渠道通讯扩展上走得更深。
*   **IronClaw**：主打**企业级多租户与架构重写**。抛弃旧单体，通过 Witness 见证者机制和状态机重构，死磕高安全要求的敏感数据场景。
*   **NanoBot**：主打**本地部署与极客扩展**。对国内开源大模型（Qwen, DeepSeek）和本地算力（Ollama）的适配最友好，强调模块化代码级控制。
*   **Hermes Agent**：主打**开发者终端 Copilot**。高度聚焦终端命令执行（如守护进程死锁问题）与轻量级后台常驻陪伴。
*   **LobsterAI**：主打**商业化与多模态创作**。重心在桌面端无感更新、前端商业化拦截闭环及 AI 视频创作流的探索。

## 6. 社区热度与成熟度
*   **狂飙迭代期（OpenClaw, ZeroClaw）**：功能极速膨胀，但在安全与边界控制上正在交纳一定的“技术学费”，频繁出现 P0/P1 级阻断 Bug。
*   **架构稳固/质量收敛期**：
    *   **IronClaw**：主动进行破坏性大重构，牺牲平滑升级换取 v1.0 的终极稳定。
    *   **CoPaw**：大版本发布后的高密度除虫，社区反馈极其活跃，新旧架构交替阵痛明显。
    *   **NanoBot**：进入底层异常与内存泄漏的深度清扫阶段，代码质量快速上升。
*   **平稳演进期**：代表项目如 **PicoClaw**，聚焦于特定协议适配与合规修复。

## 7. 值得关注的趋势信号（开发者行动指南）
1.  **“无信任”安全模型的确立**：AI Agent 不再享有“默认信任”。开发者必须为 Agent 佩戴“眼罩”（Masked Secrets，不暴露 API Key 即可调用）和“镣铐”（严格的工作区边界防符号链接逃逸）。
2.  **Token 经济学驱动架构演进**：随着模型上下文窗口的扩大，无效 Token 消耗成本激增。动态按需注入工具描述、隐藏冗余思维链将是下一代 Agent 框架的刚需。
3.  **模型降级与自治容灾**：面对云端大模型频繁的 503 宕机或限流，Agent 网关需要具备智能感知能力，自动触发 Fallback 备用模型链，而不是盲目重试。
4.  **系统级 I/O 兼容依然是硬骨头**：无论是 Windows 平台的权限认证（TCC/UAC）漏洞，还是不同系统下 SQLite 的并发锁机制，都在提醒开发者：跨平台系统级编程的边缘 Bug，往往比大模型本身的不确定性更致命。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-07-22  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内维持了极高的开发热度与社区活跃度，共处理了 **11 条 Issue 更新（关闭 9 条）** 以及 **34 条 PR 更新（合并/关闭 22 条）**。项目当前处于密集的缺陷修复与稳定性强化阶段，核心维护者与社区贡献者重点攻克了内存泄漏、API 密钥安全、孤儿进程清理等底层架构痛点。尽管本日无新版本发布，但大量高优先级（P0/P1）修复 PR 的合并表明，项目正在为下一个大版本进行扎实的质量收敛。

---

### 2. 项目进展
今日共有数十个 PR 被合并或关闭，项目在系统健壮性、安全性和多模型适配方面取得了实质性进展：
*   **安全合规提升**：[PR #5010](https://github.com/HKUDS/nanobot/pull/5010) 更新了安全文档，明确推荐使用环境变量引用替代明文 API Key，并配合 [Issue #4803](https://github.com/HKUDS/nanobot/issues/4803) 彻底审视了配置文件的秘钥存储问题。
*   **底层执行稳定性修复**：合并了多项关键稳定性修复，包括原子化写入配置文件以防损坏 ([PR #4984](https://github.com/HKUDS/nanobot/pull/4984))、解决语音转录 API 的环境变量解析错误 ([PR #4989](https://github.com/HKUDS/nanobot/pull/4989))，以及修复 UTF-16 代理字符导致 LLM 请求崩溃的问题 ([PR #4952](https://github.com/HKUDS/nanobot/pull/4952))。
*   **生态接入扩展**：合并了 ModelScope（魔搭社区）作为内置模型提供商的 PR ([PR #4965](https://github.com/HKUDS/nanobot/pull/4965)），显著扩展了国内开源大模型（Qwen, DeepSeek 等）的接入便利性。

---

### 3. 社区热点
今日社区讨论的焦点集中在**复杂任务的死循环处理**与**本地大模型（如 Ollama）的性能优化**上：
*   **[Issue #4864](https://github.com/HKUDS/nanobot/issues/4864) [bug] Endless loop for `<tool_call>`**：用户反馈 Agent 在执行 `complete_goal` 时陷入无限循环。这反映出当前架构中“持续目标”与“用户打断”之间的优先级冲突。
*   **[Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) [enhancement] Preserve exact prompt prefix (Ollama caching)**（22 条评论）：一位本地开发者指出 NanoBot 额外添加的前缀导致 Ollama 每次请求增加 60 秒延迟，完全无法发挥 32GB VRAM 的性能。该问题引发了大量关于缓存友好型和 Prompt 预处理机制的深入讨论。

---

### 4. Bug 与稳定性
今日报告并处理的 Bug 展现了项目在应对极端边界情况时的不足，目前多数已有对应修复：

*   **[P0 级/安全] 工作区文件校验绕过风险** ([PR #4987](https://github.com/HKUDS/nanobot/pull/4987))：工作区校验未绑定到已打开的文件句柄，存在目录穿越风险。目前通过 `O_NOFOLLOW` 和 `fstat` 比较的修复 PR 已提交且处于待合并状态。
*   **[P1 级/崩溃] 多 GB 文件读取导致 OOM** ([Issue #4785](https://github.com/HKUDS/nanobot/issues/4785))：`read_file` 工具在截断前会将整个文件加载到内存，导致网关进程直接崩溃。（已关闭，推测内部已修复）。
*   **[P1 级/内存泄漏] Session 消息列表无限增长** ([Issue #4787](https://github.com/HKUDS/nanobot/issues/4787))：长期运行的 Session 中 `messages` 列表无上限，最终耗尽内存。（已关闭）。
*   **[P1 级/进程管理] 孤儿进程堆积** ([Issue #4794](https://github.com/HKUDS/nanobot/issues/4794) & [PR #5021](https://github.com/HKUDS/nanobot/pull/5021))：Exec 会话关闭时未清理子进程，导致大量 Shell 子进程成为孤儿。目前有专门 PR 处理 `/stop` 命令时的级联终止。
*   **[P1 级/模型适配] Qwen 模型思维链泄露** ([Issue #4934](https://github.com/HKUDS/nanobot/issues/4934) & [PR #5023](https://github.com/HKUDS/nanobot/pull/5023))：Qwen 3.5/3.6 等模型的 Reasoning 内容被错误地作为常规聊天内容返回给用户。

---

### 5. 功能请求与路线图信号
从当前 Open 的 PR 和 Feature Request 中，可以清晰看出项目下一步的演进路线：
*   **更细粒度的任务控制权**：用户强烈需要打破 Agent 的死循环。[PR #5022](https://github.com/HKUDS/nanobot/pull/5022) 提出了 `/cancel-goal` 命令，允许系统级强制清除 session metadata 中的激活状态。
*   **技能系统增强**：[PR #5018](https://github.com/HKUDS/nanobot/pull/5018) 添加了显式上下文加载功能，允许调用者直接预加载指定的 Skills，这将大幅提升复杂任务的执行效率。
*   **多实例 WebUI 隔离**：[PR #4399](https://github.com/HKUDS/nanobot/pull/4399) 引入了 `hidden_settings_sections`，允许管理员对非技术用户隐藏复杂的 UI 设置选项，表明 NanoBot 正在向团队协作和多租户部署场景迈进。

---

### 6. 用户反馈摘要
通过对 Issue 和 PR 评价的语义分析，用户当前的核心痛点与反馈如下：
*   **痛点：隐式执行带来的失控感**。用户对 Agent 陷入“死胡同”（如无限重试不可达的服务）感到沮丧，尤其是在 WebUI 或 IM 渠道（如飞书/微信）中，用户感觉自己丧失了对 Bot 的绝对控制权（参考 [Issue #5013](https://github.com/HKUDS/nanobot/issues/5013) 要求 Shell 执行前需人工确认）。
*   **痛点：本地部署的性能瓶颈**。重度本地部署用户（Ollama 配合高显存显卡）对非必要的网络请求和 Prompt 冗余极其敏感。
*   **满意点：高度可扩展的架构**。多位贡献者（如 @ekarad1um, @chengyongru）能够快速通过 PR 补齐 Provider 适配（如 Codex Fast mode、ModelScope）和工具网关防护，证明项目的插件化和模块化设计得到了社区认可。

---

### 7. 待处理积压
请维护团队关注以下长期活跃且具备高优先级的 Open PRs/Issues：
1.  **[PR #4987](https://github.com/HKUDS/nanobot/pull/4987) [P0] 文件系统工作区越权修复**：标记为 Conflict 状态，涉及底层文件句柄操作，需尽快 Review 合并以防止潜在的安全漏洞。
2.  **[PR #4963](https://github.com/HKUDS/nanobot/pull/4963) WebUI 输出和 App 发现全面重构**：标记为 Conflict，涉及将原始工具日志替换为统一的活动语言，影响面极大，需谨慎评估合并策略。
3.  **[PR #4594](https://github.com/HKUDS/nanobot/pull/4594) Shell workspace guard 绕过修复**：已提交近一个月，修复了 `curl --output=/etc/passwd` 绕过路径校验的危险漏洞，需尽快推进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 开源项目日报 — 2026-07-22**

---

### 1. 今日速览
在过去 24 小时内，Hermes Agent 社区保持了极高的活跃度，共处理了 50 条 Issue 更新（36 条新开/活跃，14 条已关闭）以及 50 条 PR 更新（46 条待合并，4 条已合并/关闭），但未发布新版本。项目的核心焦点目前高度集中在**底层架构稳定性**上，特别是 SQLite/Kanban 数据库并发损坏、会话状态泄漏以及跨平台（特别是 Windows/macOS）网关连接问题。大量针对 P1/P2 级别严重 Bug 的修复 PR 于今日集中提交，表明维护团队和贡献者正处于紧张的故障清扫阶段。

---

### 2. 版本发布
**本日无新版本发布。** 
当前代码库正处于针对 v0.19.0 引入的底层数据库架构变更（如 in-place compaction 和 FTS 维护）的密集修复期。

---

### 3. 项目进展
今日有大量关键修复 PR 被提出，项目在**状态管理、TUI 内存泄漏和终端执行**方面取得了重要修复进展：
*   **会话泄漏修复：** [PR #68949](https://github.com/NousResearch/hermes-agent/pull/68949) 和 [PR #68947](https://github.com/NousResearch/hermes-agent/pull/68947) 彻底修复了 TUI/Desktop 长期存在的 `active-session` 租约泄漏问题，防止达到最大并发会话数后阻塞新会话。
*   **数据库 I/O 性能优化：** [PR #68891](https://github.com/NousResearch/hermes-agent/pull/68891) 收窄了 FTS UPDATE 触发器的范围，避免了大型 `state.db` 在压缩时因仅状态字段变更引发的全量 FTS 删除/重插入，有效缓解了磁盘 I/O 饱和。
*   **基础设施重构：** [PR #66520](https://github.com/NousResearch/hermes-agent/pull/66520) 正在推进将所有 GitHub Actions 工作流迁移至 GKE 自托管运行器（ARC）；[PR #68217](https://github.com/NousResearch/hermes-agent/pull/68217) 计划剥离对 Homebrew 和 PyPI wheel 的支持，精简分发路径。

---

### 4. 社区热点
今日讨论热度最高的问题反映了用户对**Agent 自主权控制**和**底层数据可靠性**的强烈诉求：
*   **[Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349) (13 评论): 可配置记忆后端。** 用户对当前硬编码的 `MEMORY.md` 快照注入方式感到不便，希望改为重命名为 `rules.md` 并支持 honcho/fact_store 等动态后端，这反映了重度用户对高级 RAG 和动态记忆管理的需求。
*   **[Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083) (7 评论): 不可变/受保护的 Skills。** 用户强烈呼吁建立“治理规则”沙箱，防止 Agent 自行修改或删除关键技能，这是 Agent 自治安全性的一大痛点。
*   **[Issue #54675](https://github.com/NousResearch/hermes-agent/issues/54675) (4 评论): 多路复用网关的 Token 越权。** 多 Profile 环境下，次级配置错误使用了默认配置的 Bot Token。这一安全问题引起了社区的高度担忧，目前已被标记为已实现/已修复。

---

### 5. Bug 与稳定性
今日报告了多个影响严重的 P1/P2 级 Bug，部分已有对应的修复 PR：

**🔴 P1 级别 (严重阻碍使用):**
*   **Worker 进程死锁 ([Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)):** 当 LLM 使用 `&` 将服务器置于后台（如 `node server.js &`）时，由于孤立的子 shell 占用 stdout 管道，导致 Worker 发生 Python 级别的永久死锁。
    * *修复状态：已有针对终端重写逻辑的修复提案 [PR #68948](https://github.com/NousResearch/hermes-agent/pull/68948)。*
*   **Windows 更新导致数据库清零 ([Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)):** Desktop 应用在 Win10 上更新至 v0.19.0 时，95MB 的 `state.db` 被完全替换为 null 字节，导致会话数据彻底丢失。

**🟠 P2 级别 (功能异常/兼容性):**
*   **网关消息平台大面积故障:**
    * Windows 上 Telegram 网关卡在连接尝试阶段 ([Issue #68465](https://github.com/NousResearch/hermes-agent/issues/68465))。
    * Signal 平台 SSE 流在 Windows 上秒断 ([Issue #68167](https://github.com/NousResearch/hermes-agent/issues/68167))。
*   **大型 DB 压缩导致网关挂起 ([Issue #68858](https://github.com/NousResearch/hermes-agent/issues/68858)):** v0.19 版本对超大 `state.db` 的压缩和双 FTS 维护导致磁盘 I/O 饱和，阻碍网关关闭。

---

### 6. 功能请求与路线图信号
结合用户诉求与代码变动，以下方向极有可能被纳入近期版本：
*   **跨平台消息触达增强：** 
    * 用户请求支持 Block 公司刚开源的本地团队工作区 **Buzz** ([Issue #68871](https://github.com/NousResearch/hermes-agent/issues/68871))。
    * 桌面端向移动端推送需求增加，用户希望支持将 **Atomic Hermes (Mobile)** 作为推送目标 ([Issue #68951](https://github.com/NousResearch/hermes-agent/issues/68951))。
*   **更智能的容灾与回退：** 用户希望当提供商返回 503 (容量超载) 时，Hermes 能将其视为**触发备用模型链**的信号，而不是无脑重试后失败 ([Issue #68771](https://github.com/NousResearch/hermes-agent/issues/68771))。

---

### 7. 用户反馈摘要
从 Issue 描述中可以清晰提取出当前真实用户的使用画像和痛点：
*   **重度依赖终端验证的开发场景：** Hermes 被广泛用于编写代码和启动本地开发服务器。Agent 在终端执行 `cd X && node server.js &` 导致的死锁 ([Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)) 是极其高频的开发场景，修复此问题对提升开发者体验至关重要。
*   **长期常驻后台运行的稳定性痛点：** 大量用户（如 [Issue #68920](https://github.com/NousResearch/hermes-agent/issues/68920)）将 Hermes 作为常驻后台的 Copilot。会话状态文件 (`active_sessions.json`) 和排队能力的泄漏导致了“永久报错通知”，这极大消耗了用户信任。
*   **Windows 生态的脆弱性：** 今日暴露的多个严重 Bug（DB 清零、Telegram/Signal 兼容性）均发生在 Windows 原生环境下，表明 Windows 平台的 I/O 处理和进程管理亟待加强。

---

### 8. 待处理积压
建议维护团队关注以下积压的潜在风险项：
*   **Kanban 数据库并发损坏顽疾：** [Issue #34385](https://github.com/NousResearch/hermes-agent/issues/34385) 和 [Issue #53819](https://github.com/NousResearch/hermes-agent/issues/53819) 报告了在高并发 Worker 负载下，`kanban.db` 在 WAL 模式下持续发生索引损坏。尽管已有相关 PR，但此类状态问题极易复发，需长期监控。
*   **OpenAI Codex 凭证池过期：** [Issue #63413](https://github.com/NousResearch/hermes-agent/issues/63413) 指出 `openai-codex` 提供商在 `refresh_token` 过期后无法从本地恢复，导致提供商永久失效。
*   **Gateway 配置残留 Bug：** [Issue #68943](https://github.com/NousResearch/hermes-agent/issues/68943) 报告移除 API Provider 后，模型列表中依然残存该 Provider 的模型记录。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-07-22 | **追踪仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 📈 今日速览
过去 24 小时内，PicoClaw 仓库保持高度活跃状态，共产生 **8 条 Issue 更新**（4 个新开/活跃，4 个关闭）与 **8 条 PR 更新**（5 个待合并，3 个已合并/关闭）。项目当前无新版本发布，开发者主要精力集中于修复近期暴露的 OAuth 登录阻断、协议合规性以及大模型 API 适配问题。值得注意的是，针对今日爆发的严重 Bug（如 Google OAuth 阻断、工具调用泄露），社区贡献者表现出了极高的响应速度，均在当天提交了针对性修复 PR。整体来看，项目处于积极迭代与稳固优化的健康阶段。

---

### 2. 🚀 版本发布
**本日无新版本发布（0 个 Release）。**
当前最新代码推进主要基于主干分支（`main`）的 Bug 修复与功能补齐，推测项目团队正在为下一个大版本或稳定版进行积压问题清理。

---

### 3. ⚙️ 项目进展
今日共有 3 个重要的 PR 被合并或关闭，项目在自定义配置与安全执行节点方面取得了实质性进展：
*   **[PR #3282] `feat(nodes): add policy-gated system exec`** ([链接](https://github.com/sipeed/picoclaw/pull/3282))
    *   **进展**: 已合并。
    *   **意义**: 为轻量级节点伴侣增加了可选的 `system.exec.v1` 策略门控执行功能。该更新支持直接执行无 Shell 的规范化参数，并在执行前强制验证执行权限、根目录、环境变量和超时限制。极大提升了 Agent 在调用系统级执行时的安全性。
*   **[PR #303] `fix: make bot greeting name configurable via bot_name setting`** ([链接](https://github.com/sipeed/picoclaw/pull/303))
    *   **进展**: 已合并。
    *   **意义**: 修复了长期存在的自定义身份标识问题。现在 Telegram 的 `/start` 问候语和钉钉回复标题不再被硬编码为 "PicoClaw"，用户可通过 `bot_name` 自定义，提升了白标/定制化体验。
*   **[PR #3233] `Fix pr 3222 backward compat`** ([链接](https://github.com/sipeed/picoclaw/pull/3233))
    *   **进展**: 已关闭。
    *   **意义**: 针对前序提交的向后兼容性问题进行了收尾处理。

---

### 4. 🔥 社区热点
今日社区的讨论焦点集中在 **底层加密库的替换** 和 **特定大模型提供商的兼容性** 上：
*   **[Issue #3088] [help wanted, priority: high] [Feature] use vodozemac instead of libolm** ([链接](https://github.com/sipeed/picoclaw/issues/3088))
    *   **热度**: 9 条评论，2 次点赞。
    *   **分析**: 由于 `libolm` 已停止维护且存在安全隐患，社区强烈呼吁改用官方推荐的替代库 `vodozemac`。该 Issue 被标记为高优先级且请求社区帮助，表明核心维护团队已将其提上日程，但可能缺乏足够的研发带宽，需要依赖外部贡献者（当前已有编译级别的讨论）。
*   **Antigravity (Google) 接入问题集中爆发**: 多个 Issue（如 [#3274](https://github.com/sipeed/picoclaw/issues/3274), [#3278](https://github.com/sipeed/picoclaw/issues/3278)）反映了近期接入 Google 新 OAuth 策略和 Provider 时遇到的阻斷与参数报错，说明在应对上游平台策略突变时，项目的容错与自适应机制需要加强。

---

### 5. 🐛 Bug 与稳定性
今日报告并处理的 Bug 较多，按严重程度（阻塞性 > 逻辑错误 > UI 体验）排列如下：

*   **🔴 严重: Google OAuth 登录被全面阻断**
    *   **Issue**: [#3278](https://github.com/sipeed/picoclaw/issues/3278) - Google 以违反 OAuth 2.0 安全政策为由拒绝登录。
    *   **状态**: **已有修复 PR**。[@honbou] 迅速提交了 [PR #3280](https://github.com/sipeed/picoclaw/pull/3280)，修复了真实回调环境下的 4 种独立故障，确保授权码不被烧毁。
*   **🟠 高: Matrix 频道断线后“静默死亡”**
    *   **Issue**: [#3203](https://github.com/sipeed/picoclaw/issues/3203) - 网络中断或服务器重启后，`/sync` 长轮询循环永久死亡，且不触发 systemd 重启。
    *   **状态**: 待修复，严重影响部署在服务器上的长时运行 Agent 稳定性。
*   **🟡 中: 大模型工具调用泄露为纯文本**
    *   **Issue**: [#3153](https://github.com/sipeed/picoclaw/issues/3153) (Doubao)、[#3274](https://github.com/sipeed/picoclaw/issues/3274) (Antigravity) - 模型未正确触发工具，而是将 `<seed:tool_call>` 等标签作为普通文本返回给用户。
    *   **状态**: **已有修复 PR**。[@MrTreasure] 提交了 [PR #3279](https://github.com/sipeed/picoclaw/pull/3279)，通过改进 `seahorse` 的解析逻辑，防止工具调用格式泄露到 LLM 摘要中。
*   **🟢 低: Web UI 输入卡顿**
    *   **Issue**: [#3281](https://github.com/sipeed/picoclaw/issues/3281) - 当单个会话历史记录较长时，Web UI 输入框出现严重卡顿（前端渲染/状态管理性能问题）。

---

### 6. 🗺️ 功能请求与路线图信号
综合近期的 Issue 需求与待合并的 PR，可以推测下一阶段版本的更新重点：
*   **配置化模型容灾与回退链**: [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) 报告了未设置 fallback 模型时 RPM 限流失效的问题。而 [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) (`feat(models): add configurable default fallback chain`) 已经提供了在 Web UI 中配置默认回退链的方案。**预计该 PR 将很快合并，并成为下一版本的核心特性之一。**
*   **富媒体消息的原生解析支持**: 用户越来越不满足于仅接收文件，[PR #3256](https://github.com/sipeed/picoclaw/pull/3256) 旨在让飞书渠道将音频和视频作为原生可播放消息发送，而非普通文件下载，这是提升多模态体验的重要一步。

---

### 7. 💬 用户反馈摘要
从 Issues 描述与评论区提炼出当前用户的几个核心痛点与场景：
1.  **部署环境多样性带来的阻塞性问题**: 许多用户在无头服务器或 Docker ([#3232](https://github.com/sipeed/picoclaw/issues/3232)) 中使用 PicoClaw，浏览器端 OAuth 认证极其脆弱，导致体验割裂。
2.  **对国产/特定模型协议的强需求**: 火山引擎豆包大模型 ([#3153](https://github.com/sipeed/picoclaw/issues/3153)) 的用户在逐渐增多，但在处理 Tool Calls (Agent 节点) 时，由于各家模型对 Prompt 的遵循度不同，极易出现 XML 格式泄露。项目需要更强的 Prompt 鲁棒性和底层的容错清洗机制。
3.  **精细化定制诉求**: 用户希望深度定制 Bot 的身份标识 ([#303](https://github.com/sipeed/picoclaw/pull/303)) 和消息样式，PicoClaw 正从一个单纯的 LLM 聊天工具向可高度定制的 Agent 载具演进。

---

### 8. ⏳ 待处理积压
以下重要 Issue/PR 被标记了 `stale`（停滞/陈旧）或长期未得到合并，建议核心团队 (@sipeed) 关注：
*   **[PR #3228] `fix(anthropic-messages): send SystemParts as system blocks with cache_control`** ([链接](https://github.com/sipeed/picoclaw/pull/3228))
    *   *原因*: 该 PR 修复了 Anthropic 提示词缓存完全失效（0% 命中率）的严重问题，对降低高昂的 API 成本至关重要，但已被标记为 `stale`，亟待维护者 Review。
*   **[Issue #3255] 钉钉会话列表预览固定显示 "PicoClaw"** ([链接](https://github.com/sipeed/picoclaw/issues/3255))
    *   *原因*: 虽然 [PR #303](https://github.com/sipeed/picoclaw/pull/303) 修复了问候语的硬编码，但钉钉特有的 `SimpleReplyMarkdown` 标题硬编码问题仍未解决，属于遗留的体验缺陷。
*   **[PR #3233] 向后兼容性修复** ([链接](https://github.com/sipeed/picoclaw/pull/3233)) 与 **[Issue #3153] 豆洞工具调用泄露**: 均处于 `stale` 状态，需确认是否已被新方案取代或需要重新激活。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-22  
**分析维度**: AI 智能体架构演进、开发者生态、企业级部署就绪度

---

## 1. 今日速览
IronClaw 项目今日处于**超高强度的架构重构与发布冲刺期**。随着 `v1.0.0-rc.1` 候选版本的正式发布，项目彻底完成了从旧版单体架构向 Reborn 内核的跨越，老版 `src/` 代码树已被移除。过去 24 小时内项目展现出惊人的开发活跃度，共产生 43 条 Issue 更新与 50 条 PR 更新。核心维护者（如 `ilblackdragon` 和 `serrrfirat`）正集中精力打磨运行时组合、状态机见证者机制以及端到端 QA 测试覆盖率，整体项目正向生产级稳定性和 v1.0 正式版全速推进。

---

## 2. 版本发布
### [ironclaw-v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/v1.0.0-rc.1) (发布于 2026-07-20)
这是一个具有里程碑意义的版本，标志着 IronClaw 架构的彻底重生。
- **核心重构**: 对智能体运行时、存储层、扩展宿主和 Web UI 进行了**从零开始的彻底重构**。
- **破坏性变更**: `ironclaw` 二进制文件已完全替换为重构后的 CLI。原有的 v1 单体架构现独立构建为旧版兼容包，直至彻底退役。
- **迁移注意事项**: 此版本并非基于 `0.29.x` 的平滑升级。生产部署环境（如 Railway、GCP systemd、Docker CI）需要将部署目标完全重定向至 Reborn 技术栈。

---

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，主要围绕**权限模型统一化、底层存储健壮性及测试基座建设**：

- **权限与见证者模型收敛**: PR [#6432](https://github.com/nearai/ironclaw/pull/6432) 与 PR [#6436](https://github.com/nearai/ironclaw/pull/6436) 成功落地了 `Authorized` 见证者作为能力分发的唯一入口，并删除了旧的无回退路径。PR [#6438](https://github.com/nearai/ironclaw/pull/6438) 实现了密封进程重新调度。这标志着 Reborn 架构中的权限隔离与调度安全达到了生产可用标准。
- **存储与编译统一**: PR [#6429](https://github.com/nearai/ironclaw/pull/6429) 移除了底层数据库（`libsql`、`postgres`）的 Cargo 特性开关，强制后端实现统一编译；PR [#6430](https://github.com/nearai/ironclaw/pull/6430) 移除了内存中的棘轮存储，将其迁移至文件系统支持的持久化存储中，大幅提升了系统容灾能力。
- **WebUI 与错误恢复**: PR [#6425](https://github.com/nearai/ironclaw/pull/6425) 修复了在导航期间重载或切换线程时服务器发送事件（SSE）流中断的严重体验问题。

---

## 4. 社区热点
今日讨论度最高的议题揭示了**企业级配置与多账号支持**的强烈需求：

- 🥇 **#2987 [EPIC] Reborn 架构落地策略 (44 评论)**: [Issue #2987](https://github.com/nearai/ironclaw/Issue/2987)  
  *诉求*: 社区高度关注如何在不产生巨型 PR 的情况下，安全、平滑地将庞大的 Reborn 架构合并到主干，说明外部贡献者对底层变更的追踪感到吃力。
- 🥈 **#6389 统一 Runtime 组装路径 (10 评论)**: [Issue #6389](https://github.com/nearai/ironclaw/Issue/6389)  
  *诉求*: 核心团队正在提议将本地构建和生产构建的工厂函数融合，社区围绕如何处理配置多态性展开了深入讨论。
- 🥉 **#3036 Reborn 配置即代码 (7 评论)**: [Issue #3036](https://github.com/nearai/ironclaw/Issue/3036)  
  *诉求*: 运维人员苦于手动修改混合配置（`.env`、JSON、系统文档）。呼吁引入声明式的租户蓝本和统一配置 schema，提供版本控制和审计追踪。

---

## 5. Bug 与稳定性
Reborn 架构在冲刺 RC1 的过程中，暴露出了一些关键的体验与稳定 Bug，当前团队正在密集修复：

1. **[HIGH] SSE 流生命周期中断**: WebUI 在执行自动化任务时，用户一旦切换标签页或路由，活跃的 SSE 连接就会断开或状态混乱。（*已有 Fix PR*: [#6425](https://github.com/nearai/ironclaw/pull/6425)）
2. **[HIGH] 运行状态首次显示缺失**: 自动化工作流首次运行时，UI 无法正确显示 `Running` 状态，导致用户误以为程序假死。（*已有 Fix PR*: [#6153](https://github.com/nearai/ironclaw/pull/6153)）
3. **[MEDIUM] 模型错误恢复缺失 (Error Recoverability)**: 大量中间运行错误未结构化暴露给大模型，导致 Agent 无法自我纠错而直接崩溃。（*已有 Epic 跟踪*: [#6284](https://github.com/nearai/ironclaw/Issue/6284)，*修复进行中*: PR [#6437](https://github.com/nearai/ironclaw/pull/6437)）

---

## 6. 功能请求与路线图信号
从近期的 Issues 和 PR 中，可以清晰看出 IronClaw v1.0 正式版前的演进路线图：

- **路线图信号 1：自动化 QA 与 E2E 测试**  
  v1 正式发布前的前置条件是“零人工干预的自动化 QA”。PR [#6439](https://github.com/nearai/ironclaw/pull/6439) 正在引入通过 `Emulate.dev` 重放 QA 轨迹的适配器；PR [#6422](https://github.com/nearai/ironclaw/pull/6422) 正在收集每个案例的完整 LLM 跟踪目录。
- **功能请求：自定义主提示词**  
  [Issue #6433](https://github.com/nearai/ironclaw/Issue/6433) 请求提供类似 ChatGPT/Claude 的“Custom Instructions（全局个性化设置）”面板。由于这与 AI 助手的核心体验高度相关，大概率会在近期的 WebUI v2 更新中纳入。
- **功能请求：多身份持久化浏览器**  
  [Issue #2355](https://github.com/nearai/ironclaw/Issue/2355) 提出基于 Chrome + CDP 实现多身份、长生命周期的自动化浏览。目前已有相关的底层能力（如沙盒凭证注入）正在构建中。

---

## 7. 用户反馈摘要
提炼自 GitHub 上的直接反馈，用户目前的核心痛点与满意点如下：

- **痛点 1：配置过于硬核**。目前想要运行一个具备外部工具调用的 Reborn 实例，用户需要深入理解内部系统文件甚至手动配置凭证环境变量，普通开发者上手门槛极高。
- **痛点 2：消息渠道的单账号限制**。[Issue #2392](https://github.com/nearai/ironclaw/Issue/2392) 指出，很多企业用户需要在一台宿主机上同时挂载多个 Telegram 或企业微信账号，但当前架构强行绑定了 1:1 的映射，阻碍了实际部署。
- **满意点：底层权限模型的专业度**。核心企业用户对 `Witness (见证者)` 权限收敛架构表示高度赞赏，认为彻底摒弃了不安全的降级路径，使其具备了在敏感数据场景下运行的信任基础。

---

## 8. 待处理积压
虽然项目整体推进极快，但仍有一些巨型未合并 PR 需要引起核心团队注意，防止形成阻塞：

- ⚠️ **大型扩展运行时合并**: [PR #6116](https://github.com/nearai/ironclaw/pull/6116) (统一通用扩展运行时 + 诚实状态机)。这是一个包含 92 个提交的巨型分支，对现有的通用架构进行了重新表达，涉及 Web、Sandbox、工作流的深度整合，需要极高强度的 Review。
- ⚠️ **Google 扩展能力增强**: [PR #5503](https://github.com/nearai/ironclaw/pull/5503)。为 Gmail 和 Google Calendar 引入极其紧凑的上下文能力，已经开放了 3 周，建议尽快合并或拆分，避免与主干产生严重冲突。
- ⚠️ **多账号支持阻塞**: [Issue #2392](https://github.com/nearai/ironclaw/Issue/2392)。作为实际部署的硬需求，此 Epic 级别问题需要尽快排期分配里程碑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是为您生成的 LobsterAI 项目动态日报。

# 🦞 LobsterAI 项目动态日报 (2026-07-22)

## 1. 今日速览
LobsterAI 项目今日保持较高的开发活跃度，在过去 24 小时内共有 10 个 PR 更新（其中 5 个被合并/关闭，5 个处于开放状态），但无新版本发布。开发重心主要集中在 **Artifacts（创意工件）分享与部署逻辑优化**、**浏览器标注交互完善**以及**多模态（视觉模型）状态同步修复**。值得注意的是，项目当前仍面临一定的历史技术债压力，自动依赖更新机器人提示有多个核心依赖（如 React 19, Vite 8）需要跨大版本升级。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日团队合并/关闭了 5 个 PR，主要向前推进了产品体验的细节打磨：
*   **Artifacts 权限与商业化拦截**：合并了 [PR #2370](https://github.com/netease-youdao/LobsterAI/pull/2370)，统一了文件分享与本地服务部署的订阅拦截弹窗；同时合并 [PR #2369](https://github.com/netease-youdao/LobsterAI/pull/2369)，优化了访问权限的提交流程，区分了创建与管理状态。这表明项目正在完善商业化变现和权限控制的闭环。
*   **浏览器辅助标注能力**：合并了 [PR #2371](https://github.com/netease-youdao/LobsterAI/pull/2371)，进一步完善了浏览器注释内容（支持无评论的样式修改），优化了元素修改的展示（原值到新值），并修复了草稿清空时 webview 标注状态残留的问题。
*   **Windows 静默更新**：合并了 [PR #2368](https://github.com/netease-youdao/LobsterAI/pull/2368)，引入了通过 PowerShell 静默安装 Windows (NSIS) 更新的功能，并在用户拒绝 UAC 时提供更友好的降级提示，大幅提升了桌面端升级体验。
*   **OpenClaw 流截断修复**：关闭了修复 SSE 截断问题的 [PR #2372](https://github.com/netease-youdao/LobsterAI/pull/2372)。

## 4. 社区热点
*   **[Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861) 图片附件不随模型切换重新处理（supportsImage 状态不同步）**
    *   该问题今日引发了重点关注。用户反馈在首页添加图片后切换模型，附件的底层处理方式（base64 vs 文件路径）不会随之更新。这导致视觉模型收不到图片，或非视觉模型被强塞 base64 导致报错。这反映了用户在频繁切换不同厂商、不同能力模型时，对于**上下文与附件状态智能平滑过渡**的强烈诉求。

## 5. Bug 与稳定性
1.  **【严重 - 多模态交互】视觉模型状态不同步**：即 [Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)，模型切换后由于未清理旧状态导致图片发送失败。**状态：已有 Fix PR**。开发者 yaodong-shen 提交了 [PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373)，专门解决图片附件与模型视觉能力的同步问题。
2.  **【中等 - 体验】侧边栏广告无法永久关闭**：用户此前只能单次关闭广告。**状态：已有 Fix PR**。[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 新增了在设置中永久隐藏侧边栏横幅的开关。

## 6. 功能请求与路线图信号
*   **界面专注模式需求**：从 [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 可以看出，用户对客户端内的广告/营销元素容忍度较低，未来版本大概率将内置一个“清爽模式”或永隐广告的设置项。
*   **商业化壁垒构建**：从今日合并的多个 Artifacts 相关 PR（[#2369](https://github.com/netease-youdao/LobsterAI/pull/2369), [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370)）释放出明显信号：LobsterAI 正在收紧或规范“文件分享”与“本地部署”功能的权限，将其与登录/订阅状态强绑定。这将是下一版本中影响用户工作流的重要变更。

## 7. 用户反馈摘要
*   **痛点**：多模型混用时的上下文兼容性差。用户习惯在一个工作流中对比不同模型的表现（如 glm-5.1 与 Doubao-Seed-2.0-lite），但目前系统对附件的理解未能做到“动态自适应”，导致需要反复删除并重新添加附件。
*   **期待**：桌面端用户对自动化要求极高。从 [PR #2368](https://github.com/netease-youdao/LobsterAI/pull/2368) 的推进可以看出，用户期望更新过程完全无感，连系统的 UAC 弹窗都被视为打断体验的阻碍。

## 8. 待处理积压
维护者需要关注以下长期搁置的基础设施升级（标记为 `[stale]`），存在安全或兼容性隐患：
*   **[PR #1280](https://github.com/netease-youdao/LobsterAI/pull/1280) bump react-dom from 18.3.1 to 19.2.4**：React 大版本升级积压已久（自 4 月起），可能阻碍生态系统新特性的引入。
*   **[PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281) bump vite from 5.4.21 to 8.0.9**：构建工具 Vite 跨度达 3 个大版本，可能导致潜在的构建性能衰退或插件不兼容。
*   **[PR #1279](https://github.com/netease-youdao/LobsterAI/pull/1279) bump cross-env from 7.0.3 to 10.1.0**：基础环境依赖更新。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 Moltis 项目 2026-07-22 动态日报。

---

# 📊 Moltis 项目动态日报 (2026-07-22)

**数据统计周期**：过去 24 小时
**项目整体健康度评估**：🟢 稳定（日常维护期）

### 1. 📌 今日速览
在过去 24 小时内，Moltis 项目的整体活跃度呈现平稳的日常维护状态，未产生新的用户 Issues 或版本发布。项目的自动化依赖管理机制运转良好，成功拦截并提交了 1 个依赖项更新 PR。目前暂无正在处理的用户反馈或社区讨论，项目处于极其稳定的积攒与迭代阶段，核心维护团队的重心未在当前的公开工单流中体现。

### 2. 🚀 版本发布
*过去 24 小时内无新版本发布。*

### 3. 🛠️ 项目进展
今日项目未合并核心代码，但自动化流程推进了基础设施的升级：
*   **[PR #1161](https://github.com/moltis-org/moltis/pull/1161) [待合并]**：由 `dependabot[bot]` 自动发起，将 `/docs` 目录下的 `astro` 依赖从 `7.0.9` 升级至 `7.1.3`。这属于 `npm_and_yarn` 安全组别的常规小版本迭代，有助于提升文档站点的安全性与构建性能，为后续的文档更新打下更安全的基础。

### 4. 🔥 社区热点
*过去 24 小时内无高活跃度讨论。*
（今日无新开 Issues 或带有活跃评论的 PRs，社区反馈渠道保持静默。）

### 5. 🐛 Bug 与稳定性
*过去 24 小时内未收到新的 Bug 报告。*
（当前未见影响系统稳定性的崩溃报告或功能回归问题，项目线上运行态势平稳。）

### 6. 🗺️ 功能请求与路线图信号
*过去 24 小时内未收到新的功能请求。*
（注：从今日的依赖更新 PR [#1161](https://github.com/moltis-org/moltis/pull/1161) 可以微调预测，维护者正在持续关注前端工具链及文档建设的现代化，这可能是下一阶段对外宣发或优化的隐性路线图之一。）

### 7. 💬 用户反馈摘要
今日无新增用户评论与反馈。项目目前交付的功能处于满足用户现有诉求的状态，未引发使用困惑或负面情绪。

### 8. ⏳ 待处理积压提醒
*   **需关注 PR**：[PR #1161](https://github.com/moltis-org/moltis/pull/1161) （chore(deps): bump astro to 7.1.3）。建议维护者在 CI（持续集成）跑通无报错后，尽快 Code Review 并合并，以防依赖漏洞积压或在未来引发依赖冲突。

---
*本报告由 AI 开源项目分析师基于 GitHub 实时数据自动生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 🐾 CoPaw (QwenPaw) 项目动态日报
**报告日期**：2026-07-22 | **数据统计周期**：过去 24 小时
**仓库**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (原 QwenPaw)

---

### 1. 今日速览
过去 24 小时内，CoPaw 项目保持极高的开源社区活跃度，共处理了 **41 条 Issue 更新**（20 个活跃/新开，21 个关闭）以及 **46 条 PR 更新**（19 个待合并，27 个合并/关闭），并成功发布了 **v2.0.1-beta.1** 版本。项目目前正处于 2.0 大版本发布后的“高密度除虫”与架构解耦阶段，核心维护者（如 @XiuShenAl, @rayrayraykk）与社区贡献者配合紧密。针对 2.0 版本引入的上下文污染、时区转换 Bug 及并发处理回归问题，社区已涌现出多个高质量修复 PR，项目健康度与响应速度表现优异。

---

### 2. 版本发布
#### 🚀 [v2.0.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1) (发布于 2026-07-21)
2.0 系列的首个 beta 补丁版本发布，主要聚焦于稳定性修复与底层打包优化：
* **修复打包入口**：修复了 Tauri (桌面端) 入口点的绝对路径导入问题 ([PR #6234](https://github.com/agentscope-ai/QwenPaw/pull/6234))。
* **异常捕获增强**：在 `_saved_tool_refs` 中增加了对 `OSError` 的捕获，提升了内存空间操作的鲁棒性。
* **迁移注意事项**：当前处于 2.0 早期适配阶段，建议企业级用户谨慎在生产环境使用，优先等待 v2.0.1 正式版。

---

### 3. 项目进展
今日共有大量关键 PR 被合并/关闭，极大推进了系统的模块化与稳定性，主要进展包括：
* **ACP(通讯协议)与安全检查解耦**：合并了 [PR #5796](https://github.com/agentscope-ai/QwenPaw/pull/5796)，将斜杠命令注册动态化，并提取了公共的 `safety_checks` 模块。
* **多工作流模式 (OMP) 整合**：关闭了 [PR #5882](https://github.com/agentscope-ai/QwenPaw/pull/5882)，正式引入了 UltraQA, Ralph, Autopilot 等 5 种工作流模式，并扩展了子智能体 (`spawn_subagent`) 的工具权限与批量分发能力。
* **治理与工具注册重构**：通过 [PR #6190](https://github.com/agentscope-ai/QwenPaw/pull/6190)，统一了内置/插件工具的注册入口，将其收敛至 `@tool_descriptor`，消除了手工维护列表带来的隐患。
* **可观测性与易用性提升**：合并了 [PR #6183](https://github.com/agentscope-ai/QwenPaw/pull/6183) 允许自定义日志滚动大小，[PR #6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) 支持一键复制 Agent 配置，[PR #6270](https://github.com/agentscope-ai/QwenPaw/pull/6270) 支持用户自定义 Agent 模式。

---

### 4. 社区热点
今日社区讨论极其火热，以下为热度最高的议题：
* **🐾 开发任务认领汇总**：核心开发者 @cuiyuebing 维护的 [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 继续作为贡献者指南，吸引大量新开发者参与。
* **v2.0 性能倒退质疑**：开发者 @lululau 在 [Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 中指出 v2.0 架构变更导致每次简单对话产生约 2 秒的固定开销，引发了关于重构副作用的深入讨论。
* **对话体验优化呼声**：用户 @rerbin 提出的 [Issue #6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)（要求在 Web 端直接拖拽上传图片/PDF/Office 文档）获得了积极反响，反映了 CoPaw 在“日常办公助手”场景下的高使用频次。

---

### 5. Bug 与稳定性
根据今日反馈，v2.0 引入的部分回归问题集中爆发，严重程度由高到低排列：
1. 🔴 **严重：跨会话上下文污染与数据残留**
   * 现象：删除会话后，新建会话会串入旧会话内容，且导致网页 CPU 占满。
   * 进展：已由 @arcol 在 [Issue #6299](https://github.com/agentscope-ai/QwenPaw/issues/6299) 定位为 `history.db` 全局序列号未清理所致。修复方案已提交至 [PR #6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) (Under Review)。
2. 🔴 **严重：时区转换错误**
   * 现象：容器部署在 UTC 时区，但前端错误将其当做用户本地时间，导致时间戳错乱。
   * 进展：开发者 @wananing 已火速提交修复 [PR #6309](https://github.com/agentscope-ai/QwenPaw/pull/6309)。
3. 🟠 **中等：子智能体并发轮询风暴**
   * 现象：同时开启两个子智能体导致主 Agent 无限快速轮询，且飞书端无法打断 ([Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873))。
   * 进展：对应修复 [PR #6317](https://github.com/agentscope-ai/QwenPaw/pull/6317) 已提交，正在加固工作区隔离与拒绝门控。
4. 🟠 **中等：计划模式死循环**
   * 现象：Agent 针对同一未修改的脚本文件执行连续 5 次以上的重复读取操作 ([Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759))。

---

### 6. 功能请求与路线图信号
结合用户诉求与现有 PR，以下方向极有可能被纳入下一版本：
* **模型绑定粒度下沉**：用户 @earthjasonlin 在 [Issue #6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) 请求按“对话级”指定模型。实际上，开发者 @mango8853 已经提交了 [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 实现了单会话模型覆盖功能，合并在即。
* **移动端 Web 适配与桌面端优化**：针对 [Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) (移动端适配) 和 [Issue #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) (桌面端工作区文件快捷访问按钮)，表明前端 UX 正向“多端无缝文件流转”演进。
* **动态时间感知**：[Issue #6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) 提出在每次上下文中自动注入真实时间，解决跨天继续旧会话时模型认知混乱的问题。
* **AI 视频创作流探索**：[PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) 正在引入 QwenPaw Creator 插件，打通“脚本->素材->分镜->视频”的链路，标志着项目正向多模态内容生成发力。

---

### 7. 用户反馈摘要
通过对 Issue 评论区的数据挖掘，真实用户痛点呈现如下分布：
* **高频痛点：Token 消耗与控制**
  * 用户 @feng183043996 指出 22 个内置工具的描述每次请求都会消耗 8000-10000 Tokens，希望能自定义/禁用 ([Issue #6286](https://github.com/agentscope-ai/QwenPaw/issues/6286))。
  * 也有用户反映 Channel（如 QQ/飞书）侧工具调用过程信息太长，容易造成消息刷屏。
* **真实使用场景 (Contract Review / Coding)**：
  * 大量用户使用 CoPaw 进行合同审核与代码分析。用户反馈在进行多文件拖拽对比、以及 Coding 模式下需要自定义终端输入时遇到阻碍 ([Issue #6308](https://github.com/agentscope-ai/QwenPaw/issues/6308))。
* **本地模型兼容性挑战**：用户接入第三方 OpenAI 兼容模型 (如 StreamLake) 时，由于模型单轮生成大量无意义的 `tool_call`，导致框架级工具调用失控 ([Issue #2055](https://github.com/agentscope-ai/QwenPaw/issues/2055))。

---

### 8. 待处理积压
*请维护团队关注以下可能引发社区反馈停滞的关键议题：*
* **[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) - 等待审核**：针对单会话模型覆盖的首个贡献者 PR，已提交 10 天，需推进 Review 进度。
* **[PR #6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) - 等待审核**：解决严重的跨会话历史污染问题，建议优先合并验证。
* **[Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) - 待回复**：v2.0 每次回复增加 2 秒固定延迟的问题，需要核心架构维护者介入进行 Profiling 并向社区同步排查进展。

---
*本报告由 AI 自动化分析生成。数据拉取与语义分析如有偏差，请以 GitHub 实际 Issue/PR 状态为准。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 ZeroClaw 项目 2026-07-22 的动态日报。本期报告基于过去 24 小时的 GitHub 活动数据生成。

### 1. 今日速览
- **整体活跃度极高**：过去 24 小时内共有 50 条 Issue 更新（48 条活跃）和 50 条 PR 更新，显示出社区和开发团队密集的协作态势。
- **核心焦点转向“有界自治”**：从 PR 动态来看，大量的 `XL`（超大型）代码提交集中在引入 Goal（目标）模式及其控制平面，项目正从被动响应的助手向主动执行复杂任务的 Agent 平台深度演进。
- **评测系统大幅重构**：项目今日合并或提交了多个关于 Eval（评估测试）系统的 PR，致力于增加历史趋势追踪和隔离记忆测试，提升 AI 评估的严谨性。
- **安全与稳定性警报**：今日报告了两个 S0 级别（极高风险）的 Bug，涉及 Shell 工具越权和子代理权限绕过，需引起开发者和使用者高度警惕。

### 2. 版本发布
**无新版本发布**。考虑到目前有大量核心功能（如 Goal 模式、SOP 控制平面）的 `XL` PR 处于待合并状态，项目目前应处于重大版本的积累与重构期。

### 3. 项目进展
今日共关闭/合并了 9 个 PR，主要集中在修复历史 Bug、提升系统鲁棒性和改善文档/测试流程：
- **SOP（标准作业程序）路由逻辑修复**：[PR #9183](https://github.com/zeroclaw-labs/zeroclaw/pull/9183) 修复了当顶层 `when` 守卫为 false 时，错误评估 `switch` 导致路由异常的 Bug。这直接关闭了 [Issue #9120](https://github.com/zeroclaw-labs/zeroclaw/issues/9120)。
- **ZeroCode 界面优化**：[PR #9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011) 在 Dashboard 中直观展示当前连接的 Runtime 上下文（守护进程、配置、端点等），大幅提升开发调试体验。
- **文档与构建可复现性**：[PR #9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055) 重构了文档翻译刷新机制，确保在干净的检出环境中也能稳定生成 mdBook，减少对中间产物的依赖。
- **Windows 平台测试兼容**：[PR #8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) 修复了 Windows 环境下媒体标记断言的路径匹配问题，提升了跨平台测试的稳定性。

### 4. 社区热点
讨论最热烈的问题集中在多租户配置、消息渠道兼容性以及底层架构演进：
- **多租户 Agent 配置**：[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)（6 条评论）。用户迫切需要为内置的 Git 操作引入非敏感的 `runtime_context` 和掩码 `runtime_secrets`，以解决跨共享 MCP 实例时的身份和参数冲突。
- **Telegram 渠道配置故障**：[Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)（6 条评论，P1 级别）。多位用户反馈使用 `zeroclaw channels doctor` 及 quickstart 配置后，Telegram 机器人仍然无法响应，这成为了阻碍新用户上手的重要痛点。
- **OpenAI API 兼容适配器**：[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（4 条评论）。作为一个高风险 RFC，社区正在讨论如何让 ZeroClaw 原生支持 OpenAI Chat Completions API 协议，以便 LobeChat 等主流前端能直接无缝接入。

### 5. Bug 与稳定性
今日报告了多个高危 Bug，尤其是安全隔离方面的漏洞：
- **S0 级：Shell 工具工作区边界绕过**：[Issue #9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)。如果工作区内存在指向外部的符号链接，Shell 工具将允许命令读写外部目录，打破了文件工具的沙箱隔离限制。**（暂无关联 fix PR）**
- **S0 级：Delegate（委派）工具越权**：[Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)。P1 严重程度安全风险，子 Agent 在使用 delegate 工具时可以绕过父 Agent 的工具白名单，调用被策略禁止的危险工具。
- **S2 级：MCP 僵尸进程堆积**：[Issue #8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)。基于 stdio 的本地 MCP 服务器在超时或关闭后未能被干净地清理，随时间推移会拖垮系统资源。
- **S2 级：MCP 模式克隆导致 OOM**：[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)。在 Agent 循环中，MCP 和工具 Schema 的不断克隆导致进程内存 (RSS) 无限增长，最终引发内存溢出 (OOM)。
- **配置静默失效**：[Issue #9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)。`Config::save_dirty()` 在处理包含点号的模型 ID（如 `gpt-4.1`, `claude-3.5-sonnet`）时会静默丢弃写操作。

### 6. 功能请求与路线图信号
- **有界自治目标模式**：用户正在推进 [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 的 RFC。该特性旨在允许 Agent 针对单一用户目标持续运行，直到完成、暂停或预算耗尽。今日活跃的多个 XL 级 PR（如 [PR #8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [PR #8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746), [PR #8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)）表明该功能正在紧锣密鼓地开发中，预计将是下一个大版本的核心卖点。
- **混合代理虚拟提供商**：[Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)。社区提议引入 MoA 架构，将一个聚合/裁判模型作为可选择的预设模型，后台先并行运行多个参考模型，以此大幅提升复杂任务的解答质量。
- **Gemini 实时语音对话**：[Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)。RFC 提议添加实时的多模态渠道，结合 ZeroClaw 的工具调用和跨渠道记忆能力，直接对接 Gemini Live 实现端到端的语音对话。

### 7. 用户反馈摘要
- **配置体验存在门槛**：用户反馈 ZeroClaw 的配置项颗粒度虽细，但极易出错。例如 `zeroclaw config init` 自带的模板由于参数不兼容，会导致守护进程直接拒绝并静默关闭语音转写功能（[Issue #8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)）；配置解析器无法处理包含点的别名（[Issue #8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834)）。
- **渠道生态丰富但亟待打磨**：用户对于 Matrix、Telegram、Slack 等多渠道接入高度关注。例如，有用户指出 ZeroClaw 在 Matrix 渠道将线程锚点与对话边界混淆（[Issue #8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541)），以及在 Telegram 中无法优雅处理“保持静默”的逻辑导致发送无用回复（[Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)）。
- **SOP（标准作业程序）文档严重不足**：多位用户表示 SOP 引擎是个极棒的构想，但官方文档除了基础语法外几乎一片空白，缺乏实际复杂场景的示例（[Issue #8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587)），严重阻碍了高级用户的使用。

### 8. 待处理积压
以下重要 Issue 需要维护者重点关注或推进：
- **SkillForge 悬空问题**：[Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)。自 2026 年 2 月合并以来，自动技能发现引擎 SkillForge 在运行时竟然完全没有被接入。维护者需要决定是完善接线还是将其移除，这是一个长期的技术债。
- **OpenAI Responses API 的 SSE 流式解析隐患**：[PR #8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) 和 [PR #9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070) 暴露了不同提供商在处理 SSE 流时可能出现的挂死和工具块未闭合问题，目前 PR 处于 `needs-author-action` 状态，亟需作者响应推进合并。
- **长期高优 Bug 追踪**：如 Telegram 配置问题（[Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)）自 6 月底一直未彻底解决，随着时间推移评论数持续增加，对项目口碑影响较大，建议集中精力提供彻底的修复方案（今日已有 [PR #9242](https://github.com/zeroclaw-labs/zeroclaw/pull/9242) 补充端到端文档尝试缓解）。

</details>