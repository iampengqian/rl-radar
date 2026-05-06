# OpenClaw 生态日报 2026-05-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-06 22:13 UTC

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

# OpenClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
OpenClaw 项目在过去24小时内保持了**极高的社区活跃度与开发迭代速度**。项目单日处理了高达 500 条 Issue 更新（新开/活跃 274 条，关闭 226 条）以及 500 条 PR 更新（待合并 370 条，合并/关闭 130 条），展现出强大的社区吞吐能力与维护者响应力度。核心团队今日连续发布了 `v2026.5.5` 和 `v2026.5.6` 两个版本，重点修复了飞书多轮会话、微信通道兼容性以及 OpenAI Codex OAuth 路由被错误覆写的严重回归问题。整体来看，项目正处于快速功能扩张与高频除错并行的健康阶段，但近期版本在 Gateway 性能消耗和跨平台通道稳定性上暴露出了较多长尾 Bug，值得部署者持续关注。

## 2. 版本发布
今日连续发布 2 个新版本，主要针对近期出现的破坏性变更进行紧急修复：

### **v2026.5.6**
- **更新内容**：撤回了 `v2026.5.5` 中 `doctor --fix` 的修复逻辑。
- **破坏性变更/迁移注意**：在 `v2026.5.5` 中，`doctor --fix` 会错误地将有效的 `openai-codex/*` (ChatGPT/Codex OAuth) 路由重写为 `openai/*`。这会导致纯 OAuth 模式的 GPT-5.5 设置失效，或意外将用户切换至 OpenAI API-key 路由。`v2026.5.6` 已回退此更改，如果用户已经被 `v2026.5.5` 错误修改了配置，需手动检查 `openclaw.json`。

### **v2026.5.5**
- **更新内容**：
  1. **Feishu (飞书)**：修复了会话路由前缺少原生话题启动线程 ID 的问题，确保了首轮对话和后续跟进保持在同一话题会话中 (Fixes #78262)。
  2. **LINE**：增加了对未配置通配符 `allowFrom` 的 `dmPolicy: "open"` 配置的拒绝机制，确保 Webhook DM 验证直接失败而非产生预期外的行为。

## 3. 项目进展
今日有 130 个 PR 被合并或关闭，主要在**系统安全性加固、性能防泄漏、架构重构**三大方向取得了显著进展：

- **安全漏洞修复**：
  - [#77492](https://github.com/openclaw/openclaw/pull/77492): 修复了预认证 WS 握手中的 CPU DoS 漏洞，防止未认证攻击者通过 `crypto.createPublicKey` 耗尽网关资源。
  - [#77527](https://github.com/openclaw/openclaw/pull/77527) & [#76322](https://github.com/openclaw/openclaw/pull/76322): 为 Bootstrap token 认证路径增加了速率限制，修复了潜在的 Mutex DoS 问题。
  - [#78392](https://github.com/openclaw/openclaw/pull/78392): 修复了工作流模板注入漏洞，并加固了 Docker 沙箱和网关的边界信任机制。
- **性能与资源泄漏优化**：
  - [#77952](https://github.com/openclaw/openclaw/pull/77952): 限制了 Discord REST 实体缓存的无界 Map 增长。
  - [#77973](https://github.com/openclaw/openclaw/pull/77973) & [#77987](https://github.com/openclaw/openclaw/pull/77987): 分别为 `agentRunCache` 和 `auth-rate-limit` 增加了最大容量上限，防止在大量并发请求下的内存泄漏。
  - [#78645](https://github.com/openclaw/openclaw/pull/78645): 限制了 exec 实时输出事件的数量，修复了因输出过大导致客户端/通道断连的问题。
- **架构与重构**：
  - [#78595](https://github.com/openclaw/openclaw/pull/78595): 启动了重大重构，将传统的会话索引和 JSONL 迁移统一纳入 `doctor` 修复流，SQLite 成为运行时的唯一真实来源。

## 4. 社区热点
今日社区讨论最热烈的问题集中在**跨平台客户端支持、API 认证回归及底层性能表现**上：

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75) [104评论, 👍74]**：呼吁推出 Linux 和 Windows 原生的 Clawdbot 桌面应用。这反映了高级用户和开发群体对在服务器端或非 macOS 环境下实现体验一致的本地节点的强烈需求。
2. **[Issue #78407](https://github.com/openclaw/openclaw/issues/78407) [15评论, 👍3]**：反映了 `v2026.5.5` 升级导致 `openai-codex` 用户被锁定的严重问题。此问题突显了自动化修复工具 (`doctor --fix`) 在处理复杂 OAuth 配置时的风险，促使团队在第二天紧急发布了 `v2026.5.6`。
3. **[Issue #73655](https://github.com/openclaw/openclaw/issues/73655) [16评论, 👍1]**：深度分析了 Gateway 在插件重启时的“泄漏三联症”（端口占用重试循环、信号处理程序堆积、JSONL 同步 IO 导致 WS 饥饿）。这类深度的开发者反馈直接推动了网络层和异步 IO 的重构。
4. **[Issue #73323](https://github.com/openclaw/openclaw/issues/73323) [16评论, 👍1]**：报告了 Windows 环境下 Gateway 的长期性能退化（网络超时、长轮询停滞）。表明项目在跨 OS 的 Node.js 底层网络/定时器调度上仍存在挑战。

## 5. Bug 与稳定性
今日报告了多起与近期版本更新相关的严重稳定性问题（特别是 Windows 环境与网关负载能力）：

- **严重 (Critical)**：
  - **[Issue #78402](https://github.com/openclaw/openclaw/issues/78402)**：升级至 `2026.5.5` 后，网关因事件循环饥饿反复断开连接 (1000/1005/1006)。**状态**：已有对应修复 PR [#78645](https://github.com/openclaw/openclaw/pull/78645)。
  - **[Issue #78232](https://github.com/openclaw/openclaw/issues/78232)** & **[Issue #78434](https://github.com/openclaw/openclaw/issues/78434)**：微信插件 (`@tencent-weixin/openclaw-weixin@2.4.1`) 与 OpenClaw `v2026.5.4` 不兼容， inbound 消息处理中断且登录报 `TypeError: fetch failed`。**状态**：社区正在排查兼容性 API 变更。
- **高**：
  - **[Issue #73323](https://github.com/openclaw/openclaw/issues/73323)**：Windows 11 + Node 24 环境下网关运行时退化（超过 60s 的拉取超时）。**状态**：长期追踪中。
  - **[Issue #75839](https://github.com/openclaw/openclaw/issues/75839)**：中度负载下 `sessions.list` 延迟高达 10-16s，且伴随 10s 的 `pi-trajectory-flush` 超时。**状态**：性能排查中。
  - **[Issue #78000](https://github.com/openclaw/openclaw/issues/78000)**：`v2026.5.4` 的模型白名单静默破坏了使用旧版模型名的 Cron 任务。**状态**：已有修复 PR [#78641](https://github.com/openclaw/openclaw/pull/78641)。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 动态来看，OpenClaw 正在演进为一个更加安全、企业级的多 Agent 编排框架：

1. **MCP 与 Agent 调用权限控制**：
   - [Issue #78308](https://github.com/openclaw/openclaw/issues/78308) 提议为 MCP 工具调用增加通道介导的批准管道 (Consent Envelope)。
   - [Issue #6615](https://github.com/openclaw/openclaw/issues/6615) 提出为 `exec-approvals` 增加黑名单支持。
   - *路线图信号*：项目对**执行安全与细粒度权限控制**的诉求急剧上升，未来版本有望深度集成策略引擎。
2. **Agent 终止与恢复代数**：
   - [PR #75165](https://github.com/openclaw/openclaw/pull/75165) 引入了可组合的终止代数和用于幻觉检测的 GSAR 评分器。
   - *路线图信号*：多 Agent (A2A) 循环的可靠性是目前的研发重心，旨在解决 Agent 无限循环和上下文漂移问题。
3. **移动端与分发**：
   - [Issue #9443](https://github.com/openclaw/openclaw/issues/9443) 请求提供预编译的 Android APK。
   - *路线图信号*：核心团队可能会在年内优化 CI/CD 流程，提供更丰富的一键式移动端侧载包。

## 7. 用户反馈摘要
通过对近期 Issue 的提炼，发现用户的痛点和满意点集中在以下几个方面：

- **痛点**：
  - **升级体验脆弱**：频繁出现静默破坏配置的回归（如 OAuth 路由重写、Cron 模型白名单过滤、插件 API 不兼容），用户对执行 `openclaw doctor --fix` 和跨大版本升级感到焦虑。
  - **沙箱与文件系统隔离矛盾**：用户反馈沙箱模式 (`workspaceAccess: "none"`) 导致内部隔离工作区变为只读（[Issue #37634](https://github.com/openclaw/openclaw/issues/37634)），这违背了让 Agent 在安全环境内编写文件的使用直觉。
  - **上下文丢失与队列失效**：Agent 意外压缩导致状态丢失，且 Steer/Collect 消息队列模式表现不及预期，无法在工具调用间隙注入指令。
- **满意点**：
  - **多通道支持广泛**：尽管存在各通道的边缘 Bug，用户对飞书、微信、Telegram、Discord 等一站式接入的满意度极高。
  - **底层问题响应快**：对于 Gateway 内存泄漏、死锁、CPU 100% 等底层核心问题，维护者通常能在 1-2 天内提供深度的 Root cause 分析并提交防御性 PR。

## 8. 待处理积压
以下高影响力/长期议题缺乏实质性关闭进展，需核心维护者优先关注：

1. **[Issue #2597](https://github.com/openclaw/openclaw/issues/2597) [👍0]**：Agent 无法感知上下文窗口的使用率，导致意外的压缩和状态丢失。作为提升自主 Agent 稳定性的核心功能，长期未被解决。
2. **[Issue #64500](https://github.com/openclaw/openclaw/issues/64500) [👍0]**：全局熔断机制只阻止单一工具，未阻止配对工具的“乒乓球式”循环调用，导致防死锁机制失效。
3. **[Issue #1210](https://github.com/openclaw/openclaw/issues/1210) [👍0]**：Discord 等渠道的图片以 Base64 存储在会话记录中，导致迅速触及 200K Token 上限。此问题严重影响重度多模态用户的使用体验。
4. **[Issue #147](https://github.com/openclaw/openclaw/issues/147) [👍0]**：关于使用 Brabble 作为分布式语音唤醒节点的构想，虽被标记为增强功能，但长期未见规划落地。

---

## 横向生态对比

基于您提供的 2026 年 5 月 7 日各开源项目社区动态数据，以下是一份关于 AI 智能体与个人 AI 助手开源生态的横向对比与技术分析报告：

---

# 📊 个人 AI 助手与自主智能体开源生态横向对比分析报告 (2026-05-07)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话客户端”向“多模态、多渠道、多租户编排操作系统”演进的关键重构期**。项目间的竞争焦点已从基础的 LLM API 对接，全面转向 **企业级权限管控（MCP 安全）、复杂会话状态管理（长期记忆与上下文续接）以及跨平台网关的高并发稳定性**。随着 GPT-5.5、DeepSeek-R 等具备深度推理能力的模型普及，社区正面临架构层面的大洗礼，底层资源隔离与敏捷的工具调用路由成为核心壁垒。

## 2. 各项目活跃度对比
*注：统计基于 2026-05-07 单日 GitHub Issue 与 PR 活跃数据。健康度评估综合考量响应速度、积压情况及 Bug 严重性。*

| 项目名称 | Issue 动态 (新开/活跃) | PR 动态 (待合并) | 单日 Release | 开发健康度评估 | 核心特征标签 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 274 | 370 | **2 次** (紧急修复) | 🟢 极高吞吐 | 生态核心，网关枢纽，高并发 |
| **IronClaw** | 极高 (未精确计数) | 47 (合并 25) | 0 | 🟢 架构进化 | Reborn 重构，多租户，契约化 |
| **ZeroClaw** | 41 | 36 | 0 | 🟡 爆发扩张 | 硬件/IoT 融合，渠道大扩容 |
| **CoPaw** | 24 | 12 (合并 14) | 1 (v1.1.5.post2)| 🟢 快速收敛 | 企业级适配，本地模型兼容 |
| **NanoBot** | 6 | 20 (合并 14) | 0 | 🟢 稳步迭代 | WebUI 安全，思考模式适配 |
| **Moltis** | 低 | 11 (合并 9) | 0 | 🟢 极其健康 | 沙箱并发，去中心化身份 |
| **LobsterAI**| 低 | 0待处理 (合并 29) | 0 | 🟢 极佳收敛 | 架构解耦，IM 集成，漏洞暴露 |
| **Hermes Agent**| 43 | 42 | 0 | 🟠 积压较重 | CLI/TUI 交互，长文本截断痛点 |
| **NanoClaw** | 低 | 22 | 0 | 🟡 PR 拥堵 | v2 迁移阵痛，Slack 体验优化 |
| **NullClaw** | 0 | 0 (1个长期Open) | 0 | ⚪ 静默蓄力 | Cron 子代理，无人值守 |
| 其他 | - | - | - | ⚪ 无明显活动 | - |

## 3. OpenClaw 在生态中的定位
作为生态的**“核心参照系”与“基础设施枢纽”**，OpenClaw 展现出了极强的统治力与火车头效应。
* **压倒性的社区规模**：单日近 300 个活跃 Issue 和数百个 PR 的处理量，其社区参与度、贡献者基数和核心团队的响应速度远超同类项目。
* **技术路线差异**：相比同业还在解决单个 IM 渠道接入或基础 WebUI 挂载，OpenClaw 已经完全进入**“多网关高并发防泄漏”**与**“复杂认证路由 (如 OAuth)”**的深水区。其将 SQLite 作为唯一真实来源、通过 `doctor` 流程统管会话生命周期的设计，确立了其在复杂部署场景下的企业级标准。

## 4. 共同关注的技术方向
跨项目动态揭示了整个行业正在共同攻坚的底层技术瓶颈：

* **LLM 深度推理适配与上下文截断**
  * **涉及项目**：NanoBot, Hermes Agent, ZeroClaw, Moltis。
  * **具体诉求**：大模型（如 DeepSeek）返回的 `reasoning_content` 在重试、压缩或流失时极易被丢弃或触发阻断报错。此外，Agent 在执行长代码生成时频频触及 Output Length Limit 导致中断（Hermes #7237），上下文的无损续接成为刚需。
* **沙箱执行与系统级并发安全**
  * **涉及项目**：OpenClaw, Moltis, LobsterAI。
  * **具体诉求**：Agent 频繁调用系统命令引发内存泄漏、异步 I/O 饥饿或 Docker 容器名称冲突。针对 MCP (Model Context Protocol) 的工具执行，急需引入批准管道和防篡改机制，避免恶意代码注入。
* **跨平台与多渠道网关的健壮性**
  * **涉及项目**：OpenClaw, NanoClaw, Hermes Agent, LobsterAI。
  * **具体诉求**：私有化部署下，各 IM 平台（微信、WhatsApp、Slack、飞书）的 API 协议变更极易导致长连接断开或静默丢弃消息。Web 端与本地客户端（如 Tauri 桌面端）的安全鉴权漏洞（如绕过审批流、任意文件读取）急需修补。

## 5. 差异化定位分析
* **OpenClaw & IronClaw（企业级重型基座）**：面向高可用、高并发的企业生产环境。IronClaw 正在推进名为 "Reborn" 的多租户底层架构重构，OpenClaw 则在死磕网关稳定性，它们是支撑成百上千个子代理并发调用的“操作系统”。
* **Moltis & ZeroClaw（边缘计算与全场景互联）**：定位为去中心化与万物互联的节点。Moltis 提出了基于 Ed25519 的跨代理身份互操作性协议；ZeroClaw 则大举接入智能家居（Home Assistant）与短信网关，向 B2C 场景无限延伸。
* **NanoBot & CoPaw（轻量级开发者/个人客户端）**：侧重开箱即用的前端交互体验与大模型 API 透传。重点解决 WebUI 安全、本地接入（如 Ollama 兼容）以及前端交互体验优化。
* **Hermes Agent & NanoClaw（特定交互形态探索）**：更偏向于 CLI/TUI 极客向或特定工作流（如重度 Slack 集成），目前正经历跨 OS 兼容性与架构迁移的阵痛。

## 6. 社区热度与成熟度分层
* **快速扩张期（需要严控代码质量）**：**OpenClaw, ZeroClaw**。社区热度极高，功能快速膨胀，但带来了配置向后兼容性破坏（OpenClaw `doctor --fix` 事故）和底层并发崩溃的隐患。
* **架构重构期（稳固阵型）**：**IronClaw, NanoClaw, NullClaw**。放弃了短期的功能发布（无 Release），集中精力进行底层重构（如 IronClaw 的 Reborn 合并、NullClaw 的 Cron 引擎）。IronClaw 展现了极高的代码治理水平，单日合入 25 个底层 PR。
* **质量巩固与打磨期（高成熟度）**：**Moltis, LobsterAI, CoPaw**。项目已经能够平稳运行，社区和核心团队的工作重心转移至安全漏洞修补、依赖升级、日志轮转以及本地化等生产级打磨上（如 LobsterAI 单日合并 29 个优化 PR）。

## 7. 值得关注的趋势信号
1. **“静默失败”是当前自主 Agent 的最大毒药**：多个项目（NanoBot, Hermes Agent）的用户强烈抱怨工具调用超时或拦截时缺乏前端反馈。未来的 Agent 框架必须建立强大且对用户透明的 **回退降级与异常上报 UI 机制**，而非简单的抛出异常。
2. **MCP 生态呼唤“带刀侍卫”**：单纯的工具调用已无法满足安全诉求。OpenClaw 社区呼吁引入通道介导的同意管道和基于黑名单的执行控制。**带有细粒度权限管控的沙箱化 MCP 执行引擎**将成为下一个版本的兵家必争之地。
3. **从“云端附属”向“独立互操作身份”演进**：Moltis 引入了 Layer 2 身份协议，旨在让不同的个人代理之间能够进行去中心化的认证与任务委托。这意味着**个人 AI 助手正在演变为点对点网络中的独立实体**，而非仅仅是大模型厂商 API 的套壳客户端。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这份 NanoBot 项目动态日报基于您提供的 GitHub 数据（日期：2026-05-07）整理而成。报告从项目进展、社区生态、稳定性和未来规划等多个维度进行了客观分析。

---

# 📊 NanoBot 项目动态日报 (2026-05-07)

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内，NanoBot 仓库产生了 **15 条 Issue 更新**（6 新开/9 关闭）和 **34 条 PR 更新**（20 待合并/14 已合并或关闭），展现出强劲的开发迭代势头和极高的社区参与度。
- **多渠道兼容性大修缮**：今日的核心进展集中在通信渠道的修复与优化，尤其是针对 WebUI 的局域网访问鉴权修复和微信通道的静默错误处理。
- **大模型推理（Thinking Mode）适配成焦点**：随着 DeepSeek、OpenAI Codex 等推理模型的 API 规范收紧，社区集中报告了 `reasoning_content` 相关的报错，开发者已迅速提交了针对局部 Token 计算和流式输出机制的修复。

## 2. 版本发布
- **无新版本发布**：今日无正式版、RC 版或 Patch 版本发布。项目当前处于高频的功能迭代与 Bug 修复聚合阶段，预计大量已合并的修复（如 WebUI、Dream、Token 计算）将在下一个小版本中集中释放。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，项目在 WebUI 体验、安全性和多渠道接入方面取得了实质性突破：
- **WebUI 体验与安全升级**：
  - `chengyongru` 提交的 [PR #3658](https://github.com/HKUDS/nanobot/pull/3658) 修复了一个高危配置漏洞：当服务器绑定 `0.0.0.0` 时，强制要求提供 `token_issue_secret` 以防止局域网内未授权设备非法获取 Token。
  - `Re-bin` 提交的 [PR #3661](https://github.com/HKUDS/nanobot/pull/3661) 和 [PR #3653](https://github.com/HKUDS/nanobot/pull/3653) 大幅优化了 WebUI 的侧边栏、聊天交互和异步会话标题生成。
- **核心机制与通道修复**：
  - `Jefsky` 提交的 [PR #3660](https://github.com/HKUDS/nanobot/pull/3660) 修复了 Dream 机制在回滚时 `.dream_cursor` 未同步的问题。
  - `chengyongru` 提交的 [PR #3659](https://github.com/HKUDS/nanobot/pull/3659) 解决了微信通道在 API 故障时静默丢弃消息不重试的严重缺陷。
  - [PR #3646](https://github.com/HKUDS/nanobot/pull/3646) 为 Whisper 语音转写服务引入了指数退避重试机制。

## 4. 社区热点
当前社区讨论最激烈的话题集中在**大模型区域限制**与**复杂 API 的上下文传递**：
- **区域封锁导致的业务中断**：由 `bigsinger` 提交的 [Issue #3618](https://github.com/HKUDS/nanobot/issues/3618) 引发热议（11 条评论）。该问题暴露了由于模型提供商（如 GLM）的区域 403 限制，导致 NanoBot 的定时任务和消息队列大面积阻塞。这反映出用户在构建自动化 Agent 时，对多供应商容灾机制的迫切需求。
- **多智能体信任协议探索**：`vystartasv` 在 [Issue #3639](https://github.com/HKUDS/nanobot/issues/3639)（3 条评论）中提出了构建 Layer 2 身份认证协议的建议，要求使用 Ed25519 为 NanoBot 提供可验证的身份。这标志着社区开始将 NanoBot 视作多智能体边缘计算网络的节点，而非单纯的聊天机器人。

## 5. Bug 与稳定性
今日报告的 Bug 多与最新版的高级特性（Thinking Mode、MCP 协议）相关，按严重程度排序如下：

| 严重程度 | Bug 描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | MCP `streamable_http_client` 取消范围不匹配导致 CPU 100% 泄露 | [#3638](https://github.com/HKUDS/nanobot/issues/3638) | 已标记 good first issue |
| **严重** | DeepSeek API 抛出 `reasoning_content` 未传回错误，阻断对话 | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | 无对应 PR |
| **严重** | GPT-5.5 模型调用时触发 `Duplicate item found with id` 错误 | [#3633](https://github.com/HKUDS/nanobot/issues/3633) | 已标记 good first issue |
| **中等** | 运行时上下文元数据直接合并到 `user message` 中，导致污染 | [#2132](https://github.com/HKUDS/nanobot/issues/2132) | **已有修复 PR [#3666](https://github.com/HKUDS/nanobot/pull/3666)** |
| **中等** | WhatsApp 在调用支持 progress delta 的模型时，逐 Token 疯狂发送消息 | [#3625](https://github.com/HKUDS/nanobot/issues/3625) | 无对应 PR |
| **中等** | `exec` 工具被安全机制拦截时，错误提示未能发送至用户端（表现为静默卡死） | [#3605](https://github.com/HKUDS/nanobot/issues/3605) | 无对应 PR |

## 6. 功能请求与路线图信号
结合今日的 Issues 与待合并 PR，可以推断出项目下一阶段的演进方向：
- **离线可用性与性能优化**：用户 `hudaxian999` 在 [Issue #3647](https://github.com/HKUDS/nanobot/issues/3647) 中指出 `tiktoken` 强依赖网络拉取编码器导致延迟。`Jefsky` 随即提交了 [PR #3662](https://github.com/HKUDS/nanobot/pull/3662) 实现本地缓存和离线字符估算。**该特性极大概率进入下个版本**。
- **细粒度功能开关**：用户开始要求对高级特性进行更精细的控制。例如 `skyline75489` 请求提供关闭 Dream 功能的开关（[Issue #3652](https://github.com/HKUDS/nanobot/issues/3652)），对应的 [PR #3591](https://github.com/HKUDS/nanobot/pull/3591) 已经在酝酿中。
- **个性化与 UI 定制**：[Issue #3650](https://github.com/HKUDS/nanobot/issues/3650) 请求支持自定义机器人的名称和头像，显示出 NanoBot 正在被越来越多地作为独立品牌产品向终端用户交付。

## 7. 用户反馈摘要
- **核心痛点**：**“静默失败”** 是目前用户体验最大的毒药。多位开发者反馈，在微信通道、安全护栏拦截或 API 异常时，机器人常常既不回复也不报错，导致用户误以为系统死机（参考 [Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) 和 [#3659](https://github.com/HKUDS/nanobot/pull/3659)）。
- **使用场景拓展**：用户正在尝试将 NanoBot 接入复杂的自动化工作流（如定时自动撰写推文草稿 [Issue #3597](https://github.com/HKUDS/nanobot/issues/3597)）。
- **满意度**：尽管存在边缘情况下的 Bug，但用户对其轻量级架构和修复后的恢复能力表示认可（如 [Issue #3618](https://github.com/HKUDS/nanobot/issues/3618) 中用户称赞其备份恢复机制完善）。

## 8. 待处理积压
以下重要且解决条件成熟但尚未得到官方合入或积极响应的功能与修复，建议维护者重点关注：
1. **[PR #3666](https://github.com/HKUDS/nanobot/pull/3666) (Fix/cli runtime context leak)**：解决了系统提示词污染用户消息的核心问题，关联已存在的 Issue #2132，建议尽快 Review 合入。
2. **[PR #3664](https://github.com/HKUDS/nanobot/pull/3664) (fix: log errors in silent exception handlers)**：针对 Matrix 和微信通道的静默异常吞没问题，直接提升系统可观测性。
3. **[PR #2526](https://github.com/HKUDS/nanobot/pull/2526) (fix(agent): preserve user message on /stop)**：修复了用户使用 `/stop` 中断任务时上下文丢失的顽疾，该 PR 自 3 月底提交至今，需要官方重新评估合入可能性。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-07)

## 1. 今日速览
Hermes Agent 项目在过去24小时内保持着**极高的社区活跃度**，共产生 50 条 Issue 更新（43 条新开/活跃，7 条关闭）和 50 条 PR 更新（42 条待合并，8 条合并/关闭），但**没有发布任何新版本**。当前项目的重心明显倾向于**多平台集成（Telegram/Matrix/Slack）和底层架构修复**，尤其是跨平台路径兼容性和不同 LLM 提供商（Codex、Qwen、Custom provider）的适配问题。社区反馈显示，Agent 在处理复杂长代码任务时的上下文截断与记忆丢失依然是核心痛点。

## 2. 版本发布
**无新版本发布。** 
鉴于当前主干存在大量关于 Provider 兼容性、TUI 交互和 Gateway 媒体分发的 Bug 修复 PR，预计项目正在为下一个 Minor 版本（可能为 v0.13.0）积累变更。

## 3. 项目进展
今日共有 8 个 PR 被合并或关闭，另有大量核心修复 PR 处于待合并状态，主要推进了以下领域：
* **依赖安全更新**：`dependabot` 提交了 GitPython 的安全升级（[#20910](https://github.com/NousResearch/hermes-agent/pull/20910)），修复了潜在的安全漏洞。
* **TUI 与交互修复**：修复了 TUI 退出时清除终端历史记录的问题（[#20916](https://github.com/NousResearch/hermes-agent/pull/20916)），并优化了会话滚动条行为（[#20917](https://github.com/NousResearch/hermes-agent/pull/20917)）。
* **跨平台架构优化**：PR [#20920](https://github.com/NousResearch/hermes-agent/pull/20920) 统一了对 `HERMES_HOME` 环境变量的支持，修复了硬编码路径导致的跨平台权限/寻址错误。
* **模型提供商兼容性**：提交了针对 Qwen 模型系统提示词顺序的严格校验修复（[#20913](https://github.com/NousResearch/hermes-agent/pull/20913)），以及 Codex 模型超长消息 ID 的截断处理（[#20912](https://github.com/NousResearch/hermes-agent/pull/20912)）。

## 4. 社区热点
* **🔥 Claude 订阅认证受限 ([#6475](https://github.com/NousResearch/hermes-agent/issues/6475))**：获得 17 个 👍 和 30 条评论。用户反馈使用 Anthropic/Claude 订阅认证时，即使重置登录也会频繁触发 `HTTP 400: You're out of extra usage`。这表明 Hermes 在处理 Claude 的 API 配额状态码时可能存在缓存或重试机制缺陷。
* **🔥 长文本输出截断问题 ([#7237](https://github.com/NousResearch/hermes-agent/issues/7237))**：14 条评论。在通过 CLI 或 Gateway 生成长文本时，Agent 频繁抛出 `Response truncated due to output length limit` 错误导致输出中断，严重影响使用体验。
* **📝 流式重试状态信息刷屏 ([#5151](https://github.com/NousResearch/hermes-agent/issues/5151))**：8 个 👍。当 LLM 请求失败并触发后台重试时，重试的状态警告会在聊天界面中累积，即使最终成功也会污染上下文。

## 5. Bug 与稳定性
今日报告了多个高优先级（P1/P2）Bug，整体稳定性面临跨平台及复杂任务场景的挑战：

* **[P1] 交互式 CLI 无法自动降级 ([#20465](https://github.com/NousResearch/hermes-agent/issues/20465))**：当主 Provider (`openai-codex`) 触发 429 限流时，Cron 任务可以正常回退，但交互式 CLI 会话却直接卡住报错。**暂无 Fix PR**。
* **[P2] Windows 11 (ATLAS OS) 工具执行全面失效 ([#20782](https://github.com/NousResearch/hermes-agent/issues/20782))**：Agent 调用 `terminal` 和 `write_file` 工具时一致返回 exit 126 或空文件。**暂无 Fix PR**。
* **[P2] 复杂代码工作流中的严重上下文丢失 ([#20849](https://github.com/NousResearch/hermes-agent/issues/20849))**：在多天复杂代码任务中，出现严重的上下文丢失和记忆覆盖，导致代码被破坏。关联了架构层面的缺陷。
* **[P2] Kanban 迁移失败 ([#20842](https://github.com/NousResearch/hermes-agent/issues/20842))**：自动更新后 SQLite 数据库报错 `no such column spawn_failures`，导致看板调度器宕机。
* **[P2] ACP 子代理任务委托虚假汇报 ([#20807](https://github.com/NousResearch/hermes-agent/issues/20807))**：`delegate_task` 完成子任务时，可能返回成功但实际未产生任何文件变更（副作用不可验证）。

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR，项目下一步的演进方向呈现出以下特征：
* **Web 嵌入式聊标准化**：新 PR [#20911](https://github.com/NousResearch/hermes-agent/pull/20911) 引入了基于 HTTP+SSE 的 Web 聊天适配器，表明 Hermes 正在积极拓展脱离第三方 IM（如 Telegram/Discord）的独立部署场景。
* **Agent 自治与工具路由增强**：
  * 请求暴露 `model_switch` 作为 Agent 可调用的工具，以便根据任务复杂度自动路由模型 ([#16525](https://github.com/NousResearch/hermes-agent/issues/16525))。
  * 请求增加自我学习策略控制，防止 Agent 擅自执行 `git push` 等破坏性操作 ([#19324](https://github.com/NousResearch/hermes-agent/issues/19324))。
* **Mistral 原生支持**：社区提出原生集成 Mistral 作为 LLM Provider 的需求 ([#20859](https://github.com/NousResearch/hermes-agent/issues/20859))。
* **Web 工具解耦重构**：PR [#19198](https://github.com/NousResearch/hermes-agent/issues/19198) 提出将搜索、提取、爬取后端进行基于能力的解耦，这可能会大幅提升 Agent 调用外部 API 的灵活性。

## 7. 用户反馈摘要
从今日的 Issue 描述和评论中，可以提炼出用户的以下几个核心反馈维度：
* **多平台网关体验参差不齐**：Telegram 用户受困于原生 LaTeX 字符泄露 ([#13262](https://github.com/NousResearch/hermes-agent/issues/13262))；Discord 用户反馈附件经常性无法传递给 Agent ([#11860](https://github.com/NousResearch/hermes-agent/issues/11860))。
* **CLI 交互缺乏灵活性**：用户强烈要求支持在发送前删除误粘贴的图片 ([#7640](https://github.com/NousResearch/hermes-agent/issues/7640))，并且要求自定义 Provider 能够在 `/model` 面板中正常显示模型 ([#20582](https://github.com/NousResearch/hermes-agent/issues/20582))。
* **边缘环境兼容性差**：Termux 等移动终端环境下 TUI 刷新存在严重 Bug ([#18390](https://github.com/NousResearch/hermes-agent/issues/18390))，网络受限地区（如俄罗斯）Telegram 推送容易失败 ([#20914](https://github.com/NousResearch/hermes-agent/issues/20914))。

## 8. 待处理积压
* **[建议关注] Issue #6475**：Claude 订阅认证的限流判定错误已持续近一个月（创建于 04-09），作为最多点赞的 Issue 之一，影响了大量付费用户的使用，需要核心维护者介入排查认证头的发送逻辑。
* **[长期未决] Issue #11860**：Discord 附件无法稳定传入上下文的问题已存在近 20 天，限制了基于 Discord 进行多模态开发的场景。
* **[架构追踪] PR #17170 & #16519**：这两个关联 Gateway 身份和会话持久化的大型重构 PR 已经开启超过一周，目前仍为 Open 状态。建议维护团队尽快安排 Code Review 并合并，以修复底层会话丢失的隐患。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 📊 NanoClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
NanoClaw 在过去 24 小时内维持了**极高的社区开发活跃度**，共处理了 26 个 Pull Requests 和 5 个 Issues。项目当前正处于 v2 架构迁移后的**密集维护与修补期**，核心焦点集中在 Slack 渠道接入的易用性优化、v1 迁移脚本的各类边界错误修复，以及底层工具链的依赖升级。高达 22 个待合并的 PR 表明社区贡献热情高涨，但也给 Maintainer 带来了不小的 Code Review 压力。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭，主要围绕核心稳定性修复与代码清理，具体包括：
*   **PR #2308 (CLOSED)**: 修复了提示词中指向不存在工具（`list_recent_batches`）的“幽灵引用”，并优化了审批卡片的冗长文本，提升了 Agent 核心指令的准确性。
*   **PR #2309 (CLOSED)**: 引入内部的 `better-sqlite3` 包装器，替换了对系统级 `sqlite3` CLI 的直接调用。此举有效解决了因宿主机缺少 CLI 工具而导致的迁移失败问题（直接修复了 Issue #2191）。
*   **PR #2302 (CLOSED)**: 修复了 WhatsApp 适配器的过滤逻辑，允许“自聊天”消息通过 `fromMe` 过滤器，扩展了单一用户场景下的交互能力。

## 4. 社区热点
今日的活动主要集中在**新手引导体验的重构（特别是 Slack 集成）**以及**架构清理**上：
*   **Slack 体验大修系列 (由 @alipgoldberg 发起)**：该提交者今日一口气提出了 6 个相关 PR（[#2295](https://github.com/qwibitai/nanoclaw/pull/2295), [#2296](https://github.com/qwibitai/nanoclaw/pull/2296), [#2297](https://github.com/qwibitai/nanoclaw/pull/2297), [#2299](https://github.com/qwibitai/nanoclaw/pull/2299), [#2300](https://github.com/qwibitai/nanoclaw/pull/2300), [#2303](https://github.com/qwibitai/nanoclaw/pull/2303), [#2304](https://github.com/qwibitai/nanoclaw/pull/2304), [#2305](https://github.com/qwibitai/nanoclaw/pull/2305)），旨在降低非技术用户的接入门槛（如解释专业术语、修正错误的 UI 提示位置等）。
*   **v1 遗留架构清理**：Issue [#2311](https://github.com/qwibitai/nanoclaw/issues/2311) 建议彻底弃用旧版 `/claw` 技能，反映了社区推动纯粹 v2 架构的决心。

## 5. Bug 与稳定性
今日报告了数个关键 Bug，主要集中在迁移工具与多渠道适配层，按优先级排列如下：
*   🔴 **[P0/High] 脏树与启动逻辑冲突**: [Issue #2312](https://github.com/qwibitai/nanoclaw/issues/2312)。每次启动都会无条件删除 `groups/global/CLAUDE.md`，导致 Git 仓库状态永久处于 dirty 状态。*（目前尚无对应修复 PR）*
*   🟠 **[P1/Medium] v2 迁移导致渠道凭证丢失**: [Issue #2294](https://github.com/qwibitai/nanoclaw/issues/2294)。`migrate-v2.sh` 未能正确映射并迁移 Matrix 和 Discord 所需的新环境变量名，导致升级后渠道静默失败。*（目前尚无对应修复 PR）*
*   🟢 **[P2/Low] SDK 解析容错性不足**: [PR #2310](https://github.com/qwibitai/nanoclaw/pull/2310) 暴露出 `chat-sdk-bridge` 在遇到无效 Block 时缺乏降级策略的问题。该 PR 已提交待合并。

## 6. 功能请求与路线图信号
从近期的 PR 动向可以看出，项目正在拓宽其多模态与多平台支持边界：
*   **本地化语音转文字支持**：[PR #2009](https://github.com/qwibitai/nanoclaw/pull/2009) 提出增加基于本地 Whisper 的语音转录技能，满足用户对隐私保护和零成本 API 的需求。
*   **无轮询的 GitHub 集成**：[PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301) 引入了 GitHub API 的 Polling Mode (Mode B)，解决了处于 NAT/防火墙后无法暴露端口的用户的接入痛点。
*   **底层容器轻量化**：[PR #2307](https://github.com/qwibitai/nanoclaw/pull/2307) 建议将基础镜像切换至 Debian Trixie 并升级依赖，预示着项目在为更轻量的边缘部署做准备。
*   **MCP 工具链扩展**：[PR #2298](https://github.com/qwibitai/nanoclaw/pull/2298) 添加了 6 个 Tier 1 MCP 工具，表明 NanoClaw 正在积极拥抱 Model Context Protocol 生态。

## 7. 用户反馈摘要
结合今日的 Issues 和 PR 描述，提炼出以下真实用户痛点：
*   **迁移断崖体验**：从 v1 升级到 v2 的用户（如 [Issue #2191](https://github.com/qwibitai/nanoclaw/issues/2191) 和 [#2294](https://github.com/qwibitai/nanoclaw/issues/2294)）经常因为隐藏的依赖缺失（如 sqlite3）或未迁移的隐秘环境变量而卡死，且报错信息具有误导性。
*   **对非技术用户不友好**：Slack 集成被反馈为“对非程序员来说像是一堵墙”，存在大量逆序的操作指引和专业术语（如 ngrok、Webhook），这直接促成了今日大量体验优化 PR 的诞生。
*   **多工作区需求**：用户倾向于为 Agent 建立独立的 Slack 工作区以避免干扰日常工作，这要求系统具备更灵活的多账号/多工作区路由能力。

## 8. 待处理积压
当前有 **22 个待合并的 PR** 处于 Open 状态，其中部分已积压数日，需核心团队介入 Review：
*   **关键路径修复积压**：如 [@alex-shepel] 提交的 [PR #2187](https://github.com/qwibitai/nanoclaw/pull/2187)（修复 CLI 裸平台 ID 的命名空间问题）已 open 5 天。
*   **安全修复积压**：[@Hinotoi-agent] 提交的 [PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004)（限制仅信任官方渠道的 Git 远程源，防范供应链攻击）已 open 超过 10 天。作为安全类 PR，建议 Maintainer 优先排期审查。
*   **架构清理积压**：针对平台 ID 命名空间的修复（[PR #2187](https://github.com/qwibitai/nanoclaw/pull/2187)）也亟待合入以稳定下游开发者。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度呈现**低频开发状态**。项目今日未收到新的 Issue（Bug 报告或功能请求），也未发布任何新版本。然而，开发者的核心精力依然集中在底层架构的迭代上，昨日更新了一项重量级的功能 PR，聚焦于计划任务引擎及安全性的强化。当前代码库处于功能蓄积期，整体健康状况稳定，社区层面处于静默观察期。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日没有已合并或关闭的 PR。项目目前的前进动力主要依赖于正在等待审核的开放拉取请求，核心开发工作正在向系统级后台任务和 CLI 输出标准化方向延伸。

- **重点推进中的 PR**: [PR #783 feat(cron): cron subagent, run history, JSON output, security hardening](https://github.com/nullclaw/nullclaw/pull/783)
  - **状态**: Open (待合并)
  - **作者**: yanggf8
  - **进展解析**: 这是一个大特性的合并请求，于 2026-05-06 产生了更新。该 PR 为 NullClaw 引入了完整的 Cron 子代理引擎，包含数据库支持的调度器、运行历史记录表（`cron_runs`）、工作队列以及原子化操作。此外，还新增了 JSON 格式的 CLI 输出支持（`cron list --json` 等），并重点进行了安全加固。这标志着 NullClaw 正在向支持复杂、无人值守定时任务的企业级 AI 智能体架构迈进。

## 4. 社区热点
**今日无高频讨论内容。**
- 过去 24 小时内，新增 Issue 为 0，现有 PR 和 Issue 的评论数为 undefined（暂无新增有效评论），社区互动今天处于真空期。目前唯一的关注点仍然是 [PR #783](https://github.com/nullclaw/nullclaw/pull/783)。

## 5. Bug 与稳定性
**今日无新增 Bug 报告。**
- 过去 24 小时内，新增 Issue 数为 0，已关闭 Issue 数为 0。项目的日常稳定性未出现用户反馈的波动或回归。

## 6. 功能请求与路线图信号
**今日无新增功能请求（0 条新 Issue）。**
- **路线图推演**: 虽然用户今日未提出新需求，但从 [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 的开发动向可以明确捕捉到项目近期的**内置路线图信号**：
  - **自动化与调度**: AI 智能体的定时执行、时区偏移支持和交付路由将成为核心内置功能。
  - **系统集成与可观测性**: `cron_runs` 历史记录的引入，表明项目正在加强智能体动作的可观测性。
  - **标准化输出**: `--json` 参数的广泛支持，预示着 NullClaw 正在为更好地与其他系统或上层 UI 工具集成做准备。

## 7. 用户反馈摘要
**今日无直接用户反馈。**
- 由于今日缺乏 Issue 互动和评论数据，暂时无法提炼用户的具体痛点或使用场景。等待 PR #783 合并及后续版本发布后，预计将引发关于子任务调度稳定性的新一轮用户反馈。

## 8. 待处理积压
- **待审阅 PR**: [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 自 4 月初创建至今已超过一个月，昨日有更新但尚未合并。建议项目维护者重点关注此 PR 的代码审查，因其涉及数据库表结构新增及安全相关逻辑，需要确保在合并前完成充分的测试与架构对齐。
- **僵尸议题**: 今日 0 条活跃 Issue，同时 0 条关闭 Issue，建议维护者后续对历史遗留的 Issue 进行一次集中排查与清理，以保持看板的健康度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
IronClaw 项目今日维持了极高的开发活跃度，过去24小时内共有 38 条 Issue 更新和 47 条 PR 更新。项目当前正处于代号为 **"Reborn"** 的大规模底层架构重构与产品面迁移阶段，核心维护者（`serrrfirat`, `ilblackdragon`, `zmanian` 等）密集提交了关于会话绑定、会话线程、回合协调及事件流等底层契约的代码。社区方面表现同样亮眼，不仅迎来了外部贡献者关于多租户 Slack 中继的重要合并，还见证了核心代码的持续稳定性修复与 CI 流程优化。整体而言，项目架构演进坚决且推进迅速，健康度极高。

## 2. 版本发布
**无新版本发布。** 
项目当前主要精力集中在 `Reborn` 架构的代码合并与垂直切片构建上，尚未发布新的稳定版或测试版。

## 3. 项目进展
今日共有 **25 个 PR 被合并或关闭**，显著推进了 `Reborn` 底层基础设施和系统稳定性：

*   **多租户通道与身份解析落地**：PR [#3253](https://github.com/nearai/ironclaw/pull/3253) 成功合并，引入了多租户 Slack 中继通道支持，实现了基于 OTP 的用户配对与身份解析，极大增强了企业级多用户场景的支持。
*   **Reborn 回合与循环架构完善**：
    *   PR [#3305](https://github.com/nearai/ironclaw/pull/3305) 合并，增加了运行侧的 `apply_loop_exit` 验证，提升了无效循环退出的恢复能力。
    *   PR [#3311](https://github.com/nearai/ironclaw/pull/3311) 合并，引入了 `TurnRunWakeNotifier` 契约，优化了持久化提交后的唤醒提示机制。
*   **工具与参数类型修复**：PR [#3197](https://github.com/nearai/ironclaw/pull/3197) 合并，修复了引擎在处理 JSON 字符串格式整数参数时的类型转换错误，恢复了 `mission_create` 等工具的正常调用。
*   **重构与 CI 优化**：
    *   PR [#3180](https://github.com/nearai/ironclaw/pull/3180) 合并，完成了 Reborn 内存基底的隔离防护和模块拆分。
    *   PR [#3312](https://github.com/nearai/ironclaw/pull/3312) 和 PR [#3307](https://github.com/nearai/ironclaw/pull/3307) 修复了近期的 E2E 夜间测试告警和并发迁移测试导致的 CI 失败。

## 4. 社区热点
今日讨论最热烈的议题几乎全部聚焦于 **"Reborn" 产品面迁移的架构设计**，核心开发者正在密集对齐底层契约：

*   **[Reborn] 核心 TurnCoordinator 阻碍项**：Issue [#3013](https://github.com/nearai/ironclaw/issues/3013)（7条评论）。讨论集中在主机层的 TurnCoordinator 实现，这是决定系统何时能够进行 Reborn 切换的关键阻碍。
*   **[Reborn] 产品面迁移总表**：Issue [#3031](https://github.com/nearai/ironclaw/issues/3031)（6条评论）。作为 Reborn 迁移的总体跟踪节点，串联了兼容性门控与最终切分确认。
*   **TurnCoordinator 公共 API 形态定义**：Issue [#3198](https://github.com/nearai/ironclaw/issues/3198)（5条评论）。敲定了面向适配器安全的 API 结构，已被关闭并进入实施阶段。
*   **多租户 Slack 中继的后续规划**：Issue [#3300](https://github.com/nearai/ironclaw/issues/3300)。由社区贡献者 `PierreLeGuen` 发起，列出了多租户 Slack 支持合并后的安全与测试后续跟进项。

## 5. Bug 与稳定性
今日报告了 1 个导致系统不可用的严重级别 Bug，且**已有修复 PR 并合入主线**：

*   **🔥 [Critical] LLM 供应商配置回退破坏用户数据**：Issue [#3229](https://github.com/nearai/ironclaw/issues/3229)。用户报告在 v0.27.0 版本中，若 LLM Provider 启动时失败，系统会将回退配置写入数据库，从而永久覆盖用户原先的模型/供应商设置。目前正在处理中。
*   **[Medium] Mission 创建参数类型校验错误**：Issue [#3132](https://github.com/nearai/ironclaw/issues/3132)。LLM 传递字符串格式的数字导致 `cooldown_secs` 报错。该问题已通过 [PR #3197](https://github.com/nearai/ironclaw/pull/3197) 修复并合并。

## 6. 功能请求与路线图信号
从近期的 Issues 和活跃的 PR 来看，项目正在向**高度模块化、多租户和企业级安全**方向演进：

*   **Reborn 外部 API 与服务解耦**：Issue [#3283](https://github.com/nearai/ironclaw/issues/3283) 提出了将 OpenAI 兼容 API 迁移至 Reborn 工作流的规划；Issue [#3280](https://github.com/nearai/ironclaw/issues/3280) 提出了新增 `ProductWorkflow` 外观门面。结合目前大量的 `feat(reborn): add ... contract` PR，预计下一阶段将全面收口外部接口至统一的 Adapter 契约中。
*   **Slack 多租户安全强化**：基于新合并的 Slack 支持，Issue [#3300](https://github.com/nearai/ironclaw/issues/3300) 暗示了接下来的版本将重点处理 OAuth state 验证、重放攻击防护等安全特性。

## 7. 用户反馈摘要
从近期的缺陷报告中，可以提炼出以下真实用户痛点：

*   **配置持久化逻辑过于激进**：Issue [#3229](https://github.com/nearai/ironclaw/issues/3229) 反映出用户在部署时（特别是在 LXC 容器或网络隔离环境），对“系统自动修改数据库并覆盖用户意图”的行为感到困惑和不可接受。系统需要更安全的降级策略（如只读回退，而不写入 DB）。
*   **大模型输出格式的脆弱性**：Issue [#3132](https://github.com/nearai/ironclaw/issues/3132) 暴露出系统在处理 LLM 生成内容时，对数据类型的宽容度不足。用户在使用 Agent 构建 Mission 时，常因底层未做好强制类型转换（Coercion）而遭遇阻断。

## 8. 待处理积压
以下重要的积压项目前处于 Open 状态，需要维护者关注推进：

*   **核心架构大型 PR 待审阅**：
    *   [PR #3212](https://github.com/nearai/ironclaw/pull/3212)：Add Reborn event projection service（Size: XL，包含大量事件投影服务重构）。
    *   [PR #3122](https://github.com/nearai/ironclaw/pull/3122)：Support externally-provided tools in Responses API（Size: XL，影响 Agent 核心调用逻辑）。
*   **大量 Reborn 体系未分配的 Feature Issues**：今日新建了大量标记为 `[reborn]` 的架构定义 Issues（如 [#3285](https://github.com/nearai/ironclaw/issues/3285), [#3286](https://github.com/nearai/ironclaw/issues/3286), [#3284](https://github.com/nearai/ironclaw/issues/3284)），目前虽已建立追踪，但需防范 Epic 过于庞大导致的交付周期拉长。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI (github.com/netease-youdao/LobsterAI) 项目 2026-05-07 动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-05-07)

## 1. 今日速览
过去 24 小时，LobsterAI 项目保持了**极高的迭代活跃度与代码收敛速度**。项目今日成功处理并关闭了高达 29 个 Pull Requests（包含功能迭代、历史版本合并与多项关键修复），同时待合并 PR 数量清零，显示出维护团队强劲的代码审查与合并执行力。不过，今日社区新增了一个潜在的**高危安全漏洞（路径穿越）**，需引起开发团队及使用邮箱 SKILL 用户的高度关注。整体而言，项目正处于架构优化与多端稳定性提升的快速演进阶段。

## 2. 版本发布
今日无新版 release 发布。

## 3. 项目进展
今日共有 29 个 PR 被合并或关闭，代码变更涉及架构解耦、多 IM 平台支持、安全加固及代码瘦身。重大推进包括：

- **架构解耦与代码重构**：
  - [PR #1890](https://github.com/netease-youdao/LobsterAI/pull/1890)：将主代理工作区与用户配置的“工作目录”彻底解耦，避免更改工作目录导致代理状态丢失。
  - [PR #1884](https://github.com/netease-youdao/LobsterAI/pull/1884)：移除已废弃的 `yd_cowork` 引擎分支逻辑，统一为 `openclaw` 单引擎，净减少 65 行冗余代码。
- **IM 生态与渠道增强**：
  - [PR #1883](https://github.com/netease-youdao/LobsterAI/pull/1883)：正式支持 POPO 多机器人实例，新增多实例配置管理组件。
  - [PR #1893](https://github.com/netease-youdao/LobsterAI/pull/1893)：修复微信插件读取配置问题，支持从 `openclaw.json` 动态读取策略。
- **历史版本合并**：
  - [PR #1876](https://github.com/netease-youdao/LobsterAI/pull/1876)：将 `release/2026.04.27` 分支成功合并入 `main`，整合了此前开发的 ChatGPT OAuth 登录、小米 mimo 支持及多项网关修复。

## 4. 社区热点
由于系统仅抓取了摘要信息，今日暂无评论数超过 0 的热门讨论贴。
但从 Issue 趋势来看，**安全与本地文件系统的交互**成为今日焦点。白帽/安全研究人员开始深入审计项目内置的扩展能力（如 IMAP/SMTP 脚本），这表明 LobsterAI 的 SKILL 机制正在吸引更多外部技术视线。

## 5. Bug 与稳定性
今日报告的缺陷及稳定性问题按严重程度排列如下：

- 🔴 **高危：路径穿越漏洞**
  - [Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885)：邮箱服务 SKILL 的附件下载逻辑未对文件名进行过滤，存在路径穿越风险。**目前状态为 OPEN，尚无修复 PR。**
- 🟠 **中危：工作空间迁移与状态丢失**
  - [PR #1894](https://github.com/netease-youdao/LobsterAI/pull/1894)：修复了由 #1890 引起的回归问题，旧目录中的 `memory/` 文件夹未能正确迁移到新的工作空间。
- 🟡 **低危：UI/UX 渲染及环境兼容性问题**
  - [PR #1895](https://github.com/netease-youdao/LobsterAI/pull/1895)：修复了 Markdown 表格偶尔渲染失败的问题。
  - [PR #1897](https://github.com/netease-youdao/LobsterAI/pull/1897)：修复了模型回复后不停止的问题。
  - [PR #1886](https://github.com/netease-youdao/LobsterAI/pull/1886)：修复 ChatGPT OAuth 导致的 `/models` 命令展示不全。
  - [PR #1891](https://github.com/netease-youdao/LobsterAI/pull/1891)：修复 Windows 环境下删除 SKILL 目录时的 EPERM 权限报错。

## 6. 功能请求与路线图信号
今日无明确的新功能请求 Issue，但从近期合并的 PR 中可以捕捉到明确的研发路线图信号：
- **多实例与多渠道网关支持**：随着 POPO 多实例（#1883）和微信策略修复（#1893）的落地，项目正致力于打造高可用的多端微服务网关。
- **日志与可观测性标准化**：日志轮转机制（[PR #1892](https://github.com/netease-youdao/LobsterAI/pull/1892)）与敏感信息自动脱敏工具（[PR #1844](https://github.com/netease-youdao/LobsterAI/pull/1844)）的完善，表明项目正在为生产环境的合规与运维做准备。
- **插件热补丁机制**：多个针对 `openclaw` 的修复采用了 `ensure-openclaw-plugins.cjs` 补丁注入的方式，这表明项目正在形成一套灵活的第三方依赖运行时修补策略。

## 7. 用户反馈摘要
由于今日未开放带有大量评论的 Issue，反馈主要隐含在提交记录中：
- **跨平台痛点**：Windows 环境下的路径处理（如 PR #1891, #1848）仍是用户遇到阻碍的集中区域。
- **IM 接入诉求强烈**：大量针对微信、钉钉（DingTalk）、POPO 的修复与清理说明，B2B 用户正在积极将 LobsterAI 集成到企业内部通讯工作流中，对多媒体消息（图片等）的稳定解析提出了更高要求。

## 8. 待处理积压
- 🚨 **紧急需处理**：[Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 涉及本地文件系统越权读写风险，建议维护团队立即介入评估，或暂时在 README 中增加相关 SKILL 的风险提示，并尽快提交针对 `imap.js` 的文件名过滤 patch。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目动态日报 (2026-05-07)**

### 1. 今日速览
过去 24 小时，Moltis 项目保持了**非常高的开发活跃度与出色的项目健康度**。社区与核心团队共处理了 11 个 Pull Requests，其中 9 个顺利合并/关闭，覆盖了沙箱并发修复、认证机制优化、依赖库升级等多个核心领域。同时，新增了关于 Docker 浏览器沙箱的 Bug 报告以及关于跨服务身份互操作性的深度提案。整体来看，项目正在快速吸收社区贡献，向后端云化部署及 Agent 间通信协议方向稳步推进。

### 2. 版本发布
**无新版本发布**。预计当前合并的大量修复和特性正在为下一个 Minor 或 Major 版本进行集成和回归测试。

### 3. 项目进展
今日合并的 9 个 PR 极大地提升了项目的稳定性与环境适应性，项目整体向前迈进了坚实的一步：
- **安全沙箱并发修复**：合并了 PR [#971](https://github.com/moltis-org/moltis/pull/971)，通过序列化容器启动过程，解决了 Docker/Podman 环境下并行工具调用时的名称冲突问题。
- **身份认证与代理环境修复**：PR [#970](https://github.com/moltis-org/moltis/pull/970) 修复了反向代理场景下因 `Secure` 属性导致的登录失败问题；PR [#358](https://github.com/moltis-org/moltis/pull/358) 修复了 Copilot 企业版 Token 路由的 HTTP 421 错误。
- **LLM 推理兼容性**：PR [#961](https://github.com/moltis-org/moltis/pull/961) 完善了对 DeepSeek 思考模式的支持，确保 `reasoning_content` 能在后续请求中正确回放。
- **系统易用性与自动化**：PR [#974](https://github.com/moltis-org/moltis/pull/974) 引入了基于恢复密钥的 Vault 自动解密功能，极大改善了系统的无头启动体验。
- **文档与依赖更新**：修复了 Matrix OIDC 注册重定向日志 ([#957](https://github.com/moltis-org/moltis/pull/957))，更新了本地 TTS 文档 ([#962](https://github.com/moltis-org/moltis/pull/962))，并由 Dependabot 完成了多项 Rust 核心依赖升级 ([#975](https://github.com/moltis-org/moltis/pull/975), [#967](https://github.com/moltis-org/moltis/pull/967))。

### 4. 社区热点
今日最受关注的议题是 Issue **[#959](https://github.com/moltis-org/moltis/issues/959) [Bug]: DeepSeek - Error: The reasoning_content...**（获 👍 1，评论 1 条）。
- **背后诉求**：用户在使用 DeepSeek 的深度思考模式时遇到了报错，这反映了用户对无缝接入前沿推理大模型的强烈需求。值得称赞的是，该问题被快速响应并已通过 PR [#961](https://github.com/moltis-org/moltis/pull/961) 修复合并。

### 5. Bug 与稳定性
今日新增 Bug 报告 2 个，已关闭 Bug 4 个，整体修复效率极高：
- **[高] Docker 浏览器沙箱崩溃**：Issue [#977](https://github.com/moltis-org/moltis/issues/977) 报告了在 Proxmox LXC 容器挂载 Docker 运行时，浏览器沙箱工具一致报错（目前状态：Open，尚无 Fix PR）。
- **[中] 登录失败问题**：Issue [#968](https://github.com/moltis-org/moltis/issues/968) 报告了登录异常（已关闭，推测由 PR [#970](https://github.com/moltis-org/moltis/pull/970) 修复）。
- **[中] 沙箱名称冲突问题**：Issue [#964](https://github.com/moltis-org/moltis/issues/964)（已关闭，已由 PR [#971](https://github.com/moltis-org/moltis/pull/971) 修复）。
- **[低] 文档过期链接**：Issue [#958](https://github.com/moltis-org/moltis/issues/958)（已关闭，已由 PR [#962](https://github.com/moltis-org/moltis/pull/962) 修复）。

### 6. 功能请求与路线图信号
- **Agent 身份互操作性提案**：Issue [#973](https://github.com/moltis-org/moltis/issues/973) 提出了一套个人代理服务器间的发现、身份验证与能力交换标准（基于 Ed25519 密钥对）。配合同日开启的文档级 PR [#976](https://github.com/moltis-org/moltis/pull/976)，这释放出强烈的信号：**Moltis 正致力于从“孤岛式的个人助手”向“互联互通的去中心化 Agent 网络节点”演进**。
- **云端与多云沙箱支持**：目前仍处于 Open 状态的大型 PR [#942](https://github.com/moltis-org/moltis/pull/942) 提议引入 Vercel、Daytona 等多后端沙箱。结合今日修复的 Docker 沙箱并行问题，可以看出项目正在重构底层代码，为彻底支持无 Docker-in-Docker 环境的云端部署铺平道路。

### 7. 用户反馈摘要
从今日的 Issue 提炼来看，Moltis 的用户群体呈现以下特征：
- **部署场景复杂化**：用户不再局限于本地运行，大量尝试在 Proxmox (LXC)、Docker、局域网反向代理等环境下私有化部署。
- **紧跟 AI 行业前沿**：用户高度依赖最新发布的模型特性（如 DeepSeek V4 的推理模式），对工具链快速适配前沿 API 的期望极高。
- **重度依赖沙箱能力**：用户频繁使用并行工具调用来执行复杂任务，这要求 Moltis 具备极强的资源隔离与高并发处理稳定性。

### 8. 待处理积压
以下重要 PR 长期/近期未合并，需要架构师或核心维护者重点关注：
- **大型重构 PR 搁置**：PR [#942](https://github.com/moltis-org/moltis/pull/942)（多后端云沙箱支持）自 4 月 30 日开启至今，涉及底层架构变动，需要推进代码审查以打破目前的胶着状态。
- **新提案需回应**：针对全新的 Agent 互操作性协议提案 PR [#976](https://github.com/moltis-org/moltis/pull/976) 及 Issue [#973](https://github.com/moltis-org/moltis/issues/973)，维护团队需要表明官方立场或排期。
- **Docker 沙箱严重 Bug**：今日新开的 Issue [#977](https://github.com/moltis-org/moltis/issues/977)（Docker 环境浏览器沙箱失效）目前尚无开发人员认领，需要尽快分配资源跟进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-07)

## 1. 今日速览
CoPaw 项目在 2026-05-07 保持了高度活跃的开发与社区互动状态。过去 24 小时内，项目成功发布了 **v1.1.5.post2** 补丁版本，主要聚焦于文档同步与底层消息处理的修复。项目今日共处理了 **41 条 Issue**（新开/活跃 24，关闭 17）和 **26 条 PR**（待合并 12，合并/关闭 14），显示维护团队具有极高的响应速度和代码审阅能力。从社区动向来看，当前用户焦点集中在**企业级 API Key 支持**、**长上下文处理稳定性**以及**UI 交互体验优化**上，开源贡献者正积极通过 PR 完善日志、系统托盘及多语言等周边生态。

---

## 2. 版本发布
- **新版本**: [v1.1.5.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post2)
- **更新内容**:
  - **文档更新**: 同步官方文档至 v1.1.5 版本（by @xieyxclack）。
  - **新特性**: 增加了通过 LLM 异步生成会话标题的功能，提升用户体验（by @ekzhu）。
  - **Bug修复**: 修复了消息处理模块中返回值异常的问题。
- **破坏性变更/迁移注意事项**: 无。属于常规补丁更新，建议所有 v1.1.5 用户平滑升级以获得更稳定的消息处理体验。

---

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，项目在功能增强和稳定性修复上取得了实质性进展：
- **CLI 技能管理支持**: 合并了 [PR #4053](https://github.com/agentscope-ai/QwenPaw/pull/4053)，新增了通过 URL 安装和卸载技能的 CLI 命令，极大地便利了自动化 Bot 部署。
- **审批与超时机制修复**: 修复了 `/approve` 指令忽略 `request_id` 的问题 ([PR #4014](https://github.com/agentscope-ai/QwenPaw/pull/4014))，并修正了 MCP 工具超时时间误用 HTTP 连接超时参数的隐患 ([PR #4061](https://github.com/agentscope-ai/QwenPaw/pull/4061))。
- **平台适配与国际化**: 合并了 Windows 系统托盘启动项支持（[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)）以及巴西葡萄牙语国际化支持 ([PR #4009](https://github.com/agentscope-ai/QwenPaw/pull/4009))。
- **代码质量清理**: 移除了文件下载工具中的冗余代码 ([PR #4048](https://github.com/agentscope-ai/QwenPaw/pull/4048))。

---

## 4. 社区热点
今日社区讨论最热烈的问题聚焦于**安全性**与**UI 易用性**：
1. **Windows 服务器任意文件遍历漏洞 ([#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955))**: 获得了 17 条评论，该严重安全漏洞已被确认并关闭。说明团队已介入处理，建议所有 Windows 用户检查版本更新。
2. **控制台输入框严重卡顿 ([#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023))**: 6 条评论。用户反馈前端交互存在明显延迟，影响高频输入体验。
3. **添加模型步骤过于繁琐 ([#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036))**: 3 条评论。多名用户吐槽目前配置 API Key 和添加模型需要多次跳转页面（Settings -> Provider -> Models），强烈要求简化为一站式配置流程。

---

## 5. Bug 与稳定性
今日报告了多个影响核心功能的 Bug，部分已有修复方案：
- **[严重] 原生模型与架构不兼容 ([#4015](https://github.com/agentscope-ai/QwenPaw/issues/4015))**: 在 MacBook M5pro 上，子进程在 Rosetta 下以 i386 运行，导致 Ollama 等本地 ARM 工具无法调用。（状态：已关闭/已解决）
- **[严重] 企微 Key 无法输入 ([#4072](https://github.com/agentscope-ai/QwenPaw/issues/4072))**: 控制台目前不支持输入 QWen3.6plus 企业级 key，阻断了企业级用户的部署。（状态：待修复）
- **[严重] Anthropic 兼容 provider 响应截断 ([#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040))**: 硬编码 `max_tokens=2048` 导致第三方长文本输出被腰斩。（状态：已关闭）
- **[中等] 长对话任务中断 ([#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059))**: 即使执行 `/compact`，长上下文生成仍会中途停止，需重启会话。（状态：待修复）
- **[中等] Heartbeat 网络重连失败 ([#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017))**: 开启 HEARTBEAT.md 后，网络波动会导致消息渠道掉线且无法自愈。（状态：已关闭）

---

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR，项目下一阶段的迭代重心已初现端倪：
- **交互与 UI 改造**: 用户强烈要求改进技能选择器 UI（[Issue #4078](https://github.com/agentscope-ai/QwenPaw/issues/4078)），希望将纯文本列表升级为交互式下拉菜单，这可能成为前端改造的重点。
- **Shell 执行智能化**: 提出了自适应执行 `execute_shell_command` 的需求（[Issue #4045](https://github.com/agentscope-ai/QwenPaw/issues/4045)），期望短命令同步执行，长耗时脚本异步执行。
- **存储自定义路径**: [Issue #4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) 提出支持自定义 Workspace 存储路径，以解决 C 盘空间不足的问题。
- **定时任务扩展**: 开发者希望 `qwenpaw cron create` 支持 `--at <datetime>` 以实现一次性定时任务（[Issue #4029](https://github.com/agentscope-ai/QwenPaw/issues/4029)）。
- **语言与语音处理**: [PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) 正在审查中，准备用 Whisper 替换 Web Speech API，以解决部分国产浏览器语音输入不兼容的问题。

---

## 7. 用户反馈摘要
通过对今日 Issue 的提炼，挖掘出以下真实用户痛点：
- **企业级用户痛点**: 企业版 API Key 在前端被拦截无法配置，严重影响 ToB 场景的交付落地（[#4072](https://github.com/agentscope-ai/QwenPaw/issues/4072)）。
- **重度依赖用户痛点**: 处理长文档或复杂多步 Agent 任务时，极易触发上下文截断且无法通过压缩恢复，导致“不断开新会话就无法继续工作”的割裂感（[#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059)）。
- **Agent 开发者痛点**: 缺乏直观的 CLI 管理工具，自动化脚本难以优雅地管理技能安装（此痛点已通过今日合并的 PR #4053 解决）。
- **本地部署用户痛点**: 对于本地模型（如 QwenPaw-Flash-9B、LMStudio）的接入容错率低，环境配置极易报错且报错信息不清晰（[#4049](https://github.com/agentscope-ai/QwenPaw/issues/4049), [#4063](https://github.com/agentscope-ai/QwenPaw/issues/4063)）。

---

## 8. 待处理积压
以下几个有价值的重要 Issue/PR 目前处于 Open 状态，建议维护团队持续关注推进：
1. **[PR] 跨平台日志轮转支持 ([PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076))**: 目前 Windows/Linux 端日志无限增长已导致部分机器磁盘占用异常，该 PR 提供了修复，需尽快 Review 合并。
2. **[Issue] DeepSeek Prefix Cache 命中率优化 ([Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891))**: 涉及大量使用 DeepSeek 模型时的成本控制问题，用户反馈强烈，长期未获彻底解决。
3. **[Issue] 大规模技能池语义路由 ([Issue #3091](https://github.com/agentscope-ai/QwenPaw/issues/3091))**: 随着技能生态扩大，上下文溢出和技能选取准确率下降的问题亟待架构层面的优化。
4. **[PR] DingTalk 渠道优雅重载修复 ([PR #4064](https://github.com/agentscope-ai/QwenPaw/pull/4064))**: 解决了配置热更新时钉钉长连接中断导致消息丢失的 Race Condition 问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-07)

## 1. 今日速览
ZeroClaw 在过去 24 小时内展现了**极高的社区活跃度与开发推进速度**。项目共处理了 100 条 Issue 与 PR 动态（其中 41 条为新开/活跃 Issue，36 条为待合并 PR），这表明项目正处于密集的功能迭代与社区互动期。尽管今日没有新的版本发布，但围绕 `v0.7.5` 里程碑的发布自动化确认，以及针对 `v0.8.0` 的底层架构重构（如 Provider 体系拆分）正在紧锣密鼓地进行。今日最显著的特征是**渠道和 IoT 集成的爆发式增长**（涵盖 SMS、IRC、智能家居等），以及社区对安全、运行时稳定性的集中反馈。

## 2. 版本发布
**今日无新版本发布。** 
项目当前的重心在于为 `v0.7.5` 完善发布自动化流程，并在 `integration/v0.8.0` 分支上推进破坏性架构更新（如配置类型系统重构）。

---

## 3. 项目进展
今日没有产生已合并的大型 PR（大部分处于 Open 状态待评审），但多项重量级提交拉开了功能扩展的序幕：

- **核心架构与重构推进**：
  - **Provider 体系拆分**：PR [#6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417) 将 `llama.cpp` 独立为专属 Provider kind；PR [#6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) （目标分支 v0.8.0）重构了模型与 TTS Provider 的配置类型拆分，这将为后续支持更多异构计算后端打下基础。
- **渠道生态大扩容**：
  - **短信网关矩阵成型**：Twilio [#6429](https://github.com/zeroclaw-labs/zeroclaw/pull/6429)、Plivo [#6467](https://github.com/zeroclaw-labs/zeroclaw/pull/6467)、Telnyx [#6468](https://github.com/zeroclaw-labs/zeroclaw/pull/6468)、Sinch [#6469](https://github.com/zeroclaw-labs/zeroclaw/pull/6469) 等四大 SMS 渠道同日提交，确立了标准化的网关路由架构。
  - **开源与社区平台接入**：Mastodon、Lemmy、Rocket.Chat、Twitch 等平台适配 PR 均已就绪，极大拓宽了 AI 助手的触达边界。
- **Agent 工具链强化（IoT 与生活场景）**：
  - 提交了智能家居与生活类工具 PR，包括 Philips Hue [#6470](https://github.com/zeroclaw-labs/zeroclaw/pull/6470)、Home Assistant [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464)、Eight Sleep 智能床 [#6471](https://github.com/zeroclaw-labs/zeroclaw/pull/6471) 和 Spotify [#6478](https://github.com/zeroclaw-labs/zeroclaw/pull/6478)。

---

## 4. 社区热点
- **v0.7.5 里程碑确认**：Issue [#5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) 获得了 8 条评论，作为 v0.7.5 的权威范围定义，社区正围绕“摒弃手动版本推进，全面实现发布意图自动化”展开最后的确认。
- **数据库优先的长期记忆架构**：由社区开发者提出的 Issue [#4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) （已关闭，5条评论）引发了关于引入 `pgvector` 与图数据库能力的深入讨论，反映了重度用户对 AI 智能体持久化知识库的强烈诉求。
- **WhatsApp 协议变更引发的故障探讨**：针对 4 月底 WhatsApp Web 的协议升级导致的断流问题，Issue [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) 汇集了多个开发者的排障经验（4条评论）。

---

## 5. Bug 与稳定性
今日暴露了多个高危级别（S1/S2）且影响核心流程的 Bug：

**严重级别 S1 (工作流受阻)**：
- **Agent 自主权失效**：Issue [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) 报告在配置 `[autonomy] level = "full"` 时，Shell 工具调用会被拒绝。*当前暂无关联 Fix PR。*
- **WhatsApp 历史遗留安全/逻辑漏洞**：Issue [#6413](https://github.com/zeroclaw-labs/zeroclaw/issues/6413) 报告了 Agent 会错误响应用户自己账号发出的消息。**已有 Fix PR [#6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) 提交修复**。
- **Windows 平台兼容缺陷**：Issue [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) 揭示了 `google_workspace` 工具在 Windows 上无法找到 `.cmd` 后缀的依赖，且伴随 JSON 参数解析错误。*当前暂无关联 Fix PR。*
- **Matrix 心跳阻断**：Issue [#6433](https://github.com/zeroclaw-labs/zeroclaw/issues/6433) 指出当前硬编码的心跳目标不包含 Matrix 渠道，导致该渠道工作流受阻。

**严重级别 S2 (行为退化/隐患)**：
- **Context 压缩丢失推理细节**：Issue [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) 指出长对话压缩时，DeepSeek 模型所需的 `reasoning_content` 会被丢弃。
- **Postgres 运行时并发崩溃**：Issue [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) 曝光了 `Cannot start a runtime from within a runtime` 的 Tokio 异步运行时严重报错。
- **SQLite 并发初始化失败**：Issue [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) 反映在多组件并发启动时，SQLite schema 初始化极易失败。

---

## 6. 功能请求与路线图信号
- **桌面端零配置体验**：Issue [#6466](https://github.com/zeroclaw-labs/zeroclaw/issues/6466) 与 [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) 提出将网关和 UI 作为静态资源内嵌至 Tauri 桌面应用二进制文件中。这释放了明确的信号：**ZeroClaw 正在加速推进 B2C/C2C 桌面端开箱即用体验**，降低非技术用户门槛。
- **Morph 模型接入**：Issue [#6439](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) 请求集成主打极速代码应用的 Morph 模型，这与其 Agent 频繁执行代码文件局部重写的场景高度契合，预计将被快速纳入主分支。
- **配置预检机制**：Issue [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) 提议在 `zeroclaw onboard` 时增加配置文件校验。这符合项目近期致力于改善“首次配置体验”的发展方向。

---

## 7. 用户反馈摘要
1. **本地化/私有化部署需求强烈**：从引入 Home Assistant、Lemmy、Mastodon 以及各种 SMS 网关的反馈可以看出，ZeroClaw 的核心受众非常倾向于数据掌握在自己手中的私有化部署方案。
2. **主流渠道连接脆弱性**：WhatsApp Web 频繁因上游协议更新或 `is_from_me` 判定逻辑导致业务中断，社区对稳定可靠的消息通道表达了迫切诉求。
3. **Provider 管理复杂度遭遇瓶颈**：多位开发者（如 #6273, #6418）反馈由于各种模型提供商参数标准不一，当前配置方式极易出错（如 Failover 认证失败），急需一种更结构化、强类型的 Provider 配置方案。

---

## 8. 待处理积压
- **网关监控数据缺失**：Issue [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001)（S1 级别）报告网关聊天成功后，API 成本计费持续为 0 且无日志写入，该问题自 4 月 22 日提出后至今未彻底解决，可能会影响用户的实际成本核算。
- **Web 端安全审批流缺失**：Issue [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) 提到通过 Web 仪表盘进行交互时，工具的审批流程被绕过，这在多模态/桌面化进程中是一个需要优先解决的权限安全隐患。
- **核心文档缺位**：Issue [#5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) （标记为 good first issue）呼吁补充关于 Skills（技能）格式与添加方法的文档，该文档是降低开发者入门门槛的关键，建议维护者及时排期。

</details>