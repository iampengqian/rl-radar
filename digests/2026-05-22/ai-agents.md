# OpenClaw 生态日报 2026-05-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-21 22:26 UTC

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

# OpenClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
OpenClaw 项目在过去 24 小时内保持了极高的社区热度，活跃度评估为 **🟢 高度活跃**。项目处理了高达 500 条 Issue 更新（新开/活跃 478 条，关闭 22 条）和 500 条 PR 更新（待合并 462 条，合并/关闭 38 条），这表明项目正处于功能快速迭代与社区深度参与的交汇期。今日发布了基于 Discord 语音功能增强和执行权限安全收缩的 `v2026.5.20` 正式版及两个 Beta 版本。然而，大量积压的 PR 和围绕核心会话状态（Session State）的 Bug 报告也提示，项目在快速奔跑的同时，稳定性治理正面临考验。

## 2. 版本发布
今日连续发布了 3 个版本，核心聚焦于安全策略收紧与 Discord 语音体验升级：

*   **v2026.5.20 (最新稳定版)**
    *   **破坏性变更 / 迁移注意**：移除了旧的 `cat SKILL.md && printf ... && <skill-wrapper>` 兼容性执行路径。现在，技能文件**必须**通过 `read` 工具加载，仅真实的可执行技能文件会被自动加入执行白名单。**升级建议：** 自定义技能的开发者需立即检查并调整技能加载方式，避免升级后执行失败。
    *   **新特性**：Discord 语音会话现在可以跟随配置的用户自动进入语音频道，支持多用户切换与 DAVE 恢复机制。
*   **v2026.5.20-beta.2** & **v2026.5.20-beta.1**
    *   包含上述相同的 Exec approvals 变更和 Discord 语音增强功能。

## 3. 项目进展
今日共有 38 个 PR 被合并/关闭（待处理 462 个），多个核心补丁正在推进项目向前迈进：

*   **底层稳定性增强**：[PR #80886](https://github.com/openclaw/openclaw/pull/80886) (P1) 修复了子代理（subagent）完成状态的误报问题，将终端 `blocked` 状态正确作为错误抛出，避免系统误报“成功”。[PR #84219](https://github.com/openclaw/openclaw/pull/84219) 引入了对 App-server 桥接断连的安全重试机制。
*   **安全与合规补全**：[PR #81974](https://github.com/openclaw/openclaw/pull/81974) 与 [PR #81981](https://github.com/openclaw/openclaw/pull/81981) 引入了 Policy 1.0 框架，在网关控制层面增加了密钥认证和暴露面的合规检查。
*   **体验修复**：[PR #83154](https://github.com/openclaw/openclaw/pull/83154) 清理了过期的运行时覆盖固定记录，解决通道响应被错误绑定到旧运行时的问题。[PR #84423](https://github.com/openclaw/openclaw/pull/84423) 修复了 CLI 插件日志污染 JSON 标准输出的问题。

## 4. 社区热点
今日讨论最热烈的话题集中在**全平台支持**与**高价值安全特性**上：

*   **全平台客户端呼声（最高热度）**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) (评论 105, 👍75)。社区对 Linux 和 Windows 原生 Clawdbot 客户端的需求极为强烈，作为 macOS/iOS/Android 的补齐，这是扩大用户基数的核心阻碍。
*   **凭证安全隔离（架构级诉求）**：[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (评论 12, 👍4)。用户强烈要求实现“掩码密钥”，允许 Agent 调用 API 但不能明文读取，以防提示词注入攻击窃取凭证。这反映了生产环境部署对权限最小化的急迫需求。
*   **安卓独立包需求**：[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) (评论 24)。AI 助理代为提交的 Issue，请求提供预编译的 Android APK，降低普通移动端用户的上手门槛。
*   **Slack 富文本支持**：[Issue #12602](https://github.com/openclaw/openclaw/issues/12602) (评论 13)。请求支持 Slack Block Kit，反映出企业用户将 OpenClaw 接入内部通讯系统时对排版和交互质量的较高要求。

## 5. Bug 与稳定性
今日报告了多个与**会话状态**和**上下文丢失**相关的 P1 级严重 Bug，系统稳定性面临挑战：

*   **🔥 [P1] 升级导致会话状态并发接管崩溃**：[Issue #84059](https://github.com/openclaw/openclaw/issues/84059)。从旧版本升级到 05.18 后，所有嵌入式代理运行均因 `EmbeddedAttemptSessionTakeoverError` 失败。核心冲突点在本地 `.jsonl` 文件的并发读写锁机制上。**暂无关联 Fix PR。**
*   **🔥 [P1] 核心编码代理“罢工”（回归）**：[Issue #62505](https://github.com/openclaw/openclaw/issues/62505)。代理在执行编码任务时陷入死循环，仅输出模糊的状态更新而无法产出实质代码。这是一个严重的回归问题。**暂无明确 Fix PR。**
*   **⚠️ [P1] OOM 内存泄漏**：[Issue #55334](https://github.com/openclaw/openclaw/issues/55334)。`sessions.json` 无限增长导致网关内存激增（50-100 MB/min）直至 OOM。原因在于快照未被有效修剪。
*   **⚠️ [P1] Codex 沙箱逃逸漏洞**：[Issue #83796](https://github.com/openclaw/openclaw/issues/83796)。当结合 Docker 沙箱运行时，Codex 原生执行可能绕过容器隔离在宿主机网关运行，极其危险。**暂无关联 Fix PR。**

## 6. 功能请求与路线图信号
结合近期 PR 走势，以下功能极有可能在近期版本落地：

*   **更细粒度的执行黑白名单**：[Issue #6615](https://github.com/openclaw/openclaw/issues/6615) (👍7) 提出执行审批的拒绝名单，与 `v2026.5.20` 收紧 Allowlist 的举措一脉相承，属于项目安全治理的核心演进路线。
*   **Secrets 外部托管集成**：[Issue #13610](https://github.com/openclaw/openclaw/issues/13610) 请求支持 AWS Secrets Manager 等，结合目前处于活跃状态的 [PR #23096 (Bitwarden 集成)](https://github.com/openclaw/openclaw/pull/23096)，打通外部密钥管家已提上日程。
*   **智能模型上下文长度降级**：[Issue #9986](https://github.com/openclaw/openclaw/issues/9986) 请求在超出上下文限制时不报错，而是自动回退到大上下文模型，这是构建高可用代理的刚需。

## 7. 用户反馈摘要
从 Issues 及 PR 的反馈中，提炼出以下真实用户画像与痛点：

*   **生产环境受挫**：大量企业用户在将 OpenClaw 接入飞书、Telegram 和 Slack 时，卡在配置验证变更（如 [Issue #63101](https://github.com/openclaw/openclaw/issues/63101) 飞书配置报错）和多账户配置上。版本升级缺乏平滑兼容。
*   **Token 消耗焦虑**：[Issue #14785](https://github.com/openclaw/openclaw/issues/14785) 指出，每个会话初始化加载 JSON Schema 就要消耗约 3,500 tokens。高频调用的开发者对这种“隐形浪费”感到不满。
*   **多租户隔离缺失**：初创团队用户（[Issue #60127](https://github.com/openclaw/openclaw/issues/60127)）迫切需要单实例多租户（RBAC）支持，而不是被迫为每个团队部署独立的网关。
*   **边缘设备极客玩家**：部分用户尝试在 RISC-V64 系统上运行（[Issue #54253](https://github.com/openclaw/openclaw/issues/54253)），表明 OpenClaw 在极客和硬件开发者圈层具有一定吸引力，但跨架构兼容性有待提升。

## 8. 待处理积压
以下是长期未被维护者有效推进的高权重积压项目，需关注：

*   **[安全] 鉴权机制根本性重构**：[Issue #57326](https://github.com/openclaw/openclaw/issues/57326) (P1)。CLI 后端路径绕过调度程序的安全隐患，虽然已提交 PR 但修复并不彻底，底层架构仍需重构。
*   **[架构] Bootstrap 文件 Token 浪费严重**：[PR #22439](https://github.com/openclaw/openclaw/pull/22439) 提出了引导文件的分层加载机制，用以大幅降低 Context 占用，但长期停滞未能合并，严重影响大规模工作空间的可用性。
*   **[体验] 预编译安卓包缺失**：[Issue #9443](https://github.com/openclaw/openclaw/issues/9443)。移动端拓展的重要里程碑，但目前似乎未纳入官方发布流水线。

---

## 横向生态对比

基于2026年5月22日各开源项目的社区动态，以下为您呈现个人 AI 助手与自主智能体开源生态的横向对比分析报告。

### 1. 生态全景
当前开源 AI 智能体生态正处于**从“单体对话聊天”向“多智能体自动化与生产级调度”跨越**的关键阶段。项目普遍面临**高并发多通道网关稳定性、上下文窗口限制及安全隔离**等底层基础设施的严峻考验。同时，生态呈现出**横向整合与垂直分化并行的趋势**：一方面，跨平台接入和国际主流通讯软件深度适配成为标配；另一方面，依托特定架构（如 CLI 终端 TUI、云原生 WASM、本地化 RISC-V）的差异化护城河正在形成。

### 2. 各项目活跃度对比
*活跃度评估标准：🟢极高(处理量>40) | 🟡中等(处理量10-40) | ⚪低(处理量<10)*

| 项目名称 | 今日处理 Issue 数 | 今日处理 PR 数 | 新版本发布 | 核心关注点/健康度 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (积压严重) | 500 (462待合并) | **v2026.5.20** | 🟢 极高活跃。核心面临会话并发稳定性与 PR 积压治理考验。 |
| **Hermes Agent** | 50 | 50 | 无 | 🟢 极高活跃。聚焦多渠道平台适配，前端TUI和流输出体验急需重构。 |
| **ZeroClaw** | 21 | 50 | **v0.8.0-beta-1** | 🟢 架构大重构。正式迈入多智能体并行时代，推进RPC与终端TUI生态。 |
| **IronClaw** | 24 | 46 | 无 | 🟢 架构重构中。"Reborn"底层大翻新，积攒大量代码等待发布。 |
| **CoPaw** | 26 | 27 | 无 | 🟢 快速迭代。国内多端通道（微信/钉钉/飞书）修复与性能优化。 |
| **NanoBot** | 10 | 31 | 无 | 🟢 健康良好。前端WebUI重构与多模型提供商扩充并行。 |
| **PicoClaw** | 9 | 30 | Nightly Build | 🟡 中度活跃。集中清理Telegram通道与多Agent架构的历史Bug。 |
| **NanoClaw** | 3 | 13 | 无 | 🟡 中度活跃。发力去Claude化，全面引入Codex与ACP协议。 |
| **Moltis** | 5 | 5 | 无 | 🟡 中度活跃。聚焦底层Docker沙箱隔离与语音TTS链路修复。 |
| **LobsterAI** | 0 | 11 (唤醒历史) | 无 | ⚪ 低活跃。底层静默重构，9个高质量PR等待最终Review合并。 |
| **NullClaw** | 0 | 2 | 无 | ⚪ 静默孵化。无新报错，聚焦内置定时任务引擎的深度打磨。 |
| **TinyAGI** | 0 | 0 | 无 | ⚪ 停滞。过去24小时无任何活动。 |

### 3. OpenClaw 在生态中的定位
作为生态的**核心参照系与流量池**，OpenClaw 具备显著的规模优势：
* **优势与规模**：拥有压倒性的社区基数（单日超千条 Issue/PR 互动），在多通道网关支持（Discord/飞书/Slack）上具有先发优势，吸引大量企业级与极客用户。
* **技术路线差异**：相比同类，OpenClaw 更偏向**网关控制与安全合规治理**（今日推出 Policy 1.0 与执行权限白名单收紧）。而 NanoClaw 等新锐则更注重去中心化与多供应商解耦；Hermes Agent 侧重全平台 TUI 覆盖。
* **当前隐患**：规模反噬。其面临的多租户隔离缺失（#60127）、会话状态并发崩溃（#84059）及严重的 PR 积压（462个），是其他中轻量级项目当前未遇到的“幸福的烦恼”。

### 4. 共同关注的技术方向
从今日多项目的动态中，涌现出四个高度重合的研发方向：
1. **多 LLM 供应商与去中心化解耦**：**NanoClaw**（Codex-only与ACP协议）、**NanoBot**（Skywork/Novita支持）、**NullClaw/Moltis**（NEAR AI Cloud接入）均在致力于打破对单一闭源大模型（如 Claude/OpenAI）的强依赖。
2. **上下文压缩与长期记忆重构**：针对 Token 消耗痛点，**OpenClaw** 提出分层加载机制；**NanoBot** 重构了长期记忆系统（MECE）；**CoPaw** 呼吁引入基于 DAG 的无损上下文压缩。
3. **自动化任务编排**：从“被动对话”转向“主动执行”。**NullClaw** 引入了数据库级别的 Cron 定时引擎；**OpenClaw** 增加了凭证安全隔离；**ZeroClaw** 实现了多智能体间的协同工作。
4. **严苛的安全与沙箱隔离机制**：**OpenClaw** 收紧了执行白名单以防提示词注入；**IronClaw** 进行了网络出站隔离测试；**Moltis/Hermes Agent** 都在集中修复 Docker 环境下的逃逸或权限问题。

### 5. 差异化定位分析
* **企业级网关派**：**IronClaw** 完全拥抱 WASM 进行长周期重构，主打模块化与高安全性，适合大厂内部基础设施集成。
* **全平台极客派**：**Hermes Agent** 在低资源设备（树莓派）适配和多平台 TUI 上发力，试图打造极客手中的“万能通讯节点”。
* **多端客服/自动化派**：**CoPaw** 紧抓国内生态（微信iLink、钉钉、飞书），深耕消息必达与流式卡片展示，更偏向于数字员工场景。
* **前沿协议与多模态派**：**NanoClaw**（ACP 协议双向互通与 Veo 3.1 视频生成）和 **ZeroClaw**（多智能体并行 RPC 调度），代表了更具未来感的终端多模态形态。

### 6. 社区热度与成熟度
* **狂奔期（快速迭代/高风险）**：**OpenClaw** 与 **ZeroClaw**。单日处理数据庞大，接连发布大版本（多智能体架构），但随之而来的并发 Bug（OOM、死循环）较多。
* **深水区（架构重构/质量巩固）**：**IronClaw**（Reborn 重构）、**LobsterAI** 和 **NullClaw**。表面 Issue 冰冷，实则底层代码有大动作，项目正在偿还技术债，积蓄发版力量。
* **平稳期（查漏补缺/体验优化）**：**CoPaw**、**NanoBot**、**PicoClaw**。处于 v1.x 阶段，重心明确指向各渠道通讯的稳定性和前端 WebUI/TUI 的渲染性能优化。

### 7. 值得关注的趋势信号
1. **“多智能体”正式落地：** ZeroClaw 发布多智能体并行架构，以及 NanoClaw ACP 协议的双向打通，宣告开源社区已具备在本地/私有环境调度 Agent 集群的能力。
2. **Token 经济学倒逼架构演进：** 从 OpenClaw 用户对“隐形浪费”的声讨，到各项目引入上下文路由策略，说明 **Token 消耗已经成为阻碍 AI Agent 在生产环境高频调用的核心瓶颈**。构建具备“Token 感知”的路由和压缩机制将是开源项目的必修课。
3. **AI Agent 的“控制权”争夺：** NanoBot 用户对后台自动耗损 Token 的 Dream 系统表达不满，这反映了用户对 AI 自治行为的焦虑。未来的系统设计需要提供更精细的“开关”和“预算熔断”机制，将最终控制权交还给人类。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project daily report for NanoBot based on the provided data.

---

# 📊 NanoBot 项目动态日报 (2026-05-22)

## 1. 今日速览
过去 24 小时内，NanoBot 项目呈现出**极高的社区开发活跃度与良好的项目健康度**。项目今日共处理了 31 个 PR（其中 23 个已合并/关闭）和 10 个 Issue（8 个已关闭），展现出维护者高效的审查与响应速度。今日的进展主要集中在**完善多模型提供商支持**（如 xAI、Ollama、Novita）、**大幅优化 WebUI 性能与交互体验**，以及**核心组件的稳定性修复**。目前仍有 8 个 PR 待合并，涉及长期记忆系统优化和路由算法升级等核心特性，项目正处在快速迭代与功能扩充的上升期。

## 2. 版本发布
今日**无**新版本发布。

## 3. 项目进展
今日共有 23 个 PR 被合并或关闭，项目在功能拓展和工程健壮性上取得了显著突破，主要包括：
*   **多 LLM 提供商支持扩充**：
    *   合并了添加 Novita AI 提供商 ([PR #3927](https://github.com/HKUDS/nanobot/pull/3927)) 和 Skywork 一级支持 ([PR #3916](https://github.com/HKUDS/nanobot/pull/3916)) 的 PR，进一步扩大了模型的兼容生态。
*   **WebUI 核心体验重构**：
    *   优化了侧边栏性能，引入了针对大型聊天记录的批量渲染机制 ([PR #3953](https://github.com/HKUDS/nanobot/pull/3953))。
    *   重构了可折叠侧边栏，提升了桌面端的视觉一致性与交互体验 ([PR #3951](https://github.com/HKUDS/nanobot/pull/3951))。
    *   修复了新对话在会话刷新时意外丢失的痛点 ([PR #3944](https://github.com/HKUDS/nanobot/pull/3944))。
*   **工具链与稳定性提升**：
    *   引入了结构化的 `apply_patch` 工具，优化了多文件代码编辑的工作流 ([PR #3923](https://github.com/HKUDS/nanobot/pull/3923))。
    *   修复了 Shell 安全防护对 URL 类命令的误拦截问题 ([PR #3933](https://github.com/HKUDS/nanobot/pull/3933))，并修复了 Windows 环境下 Shell 测试的稳定性 ([PR #3947](https://github.com/HKUDS/nanobot/pull/3947))。
    *   修复了 exec 工具标准输入未分离导致的潜在挂起问题 ([PR #3922](https://github.com/HKUDS/nanobot/pull/3922))。
*   **渠道与模型兼容性**：
    *   修复了微信渠道静默丢消息的严重问题，显著提升了国内用户的可用性 ([PR #3684](https://github.com/HKUDS/nanobot/pull/3684))。
    *   解决了 OpenRouter 针对思考模型注入参数的异常 ([PR #3867](https://github.com/HKUDS/nanobot/pull/3867))。

## 4. 社区热点
*   **WebUI 显示与交互问题**：关于 WebUI 会话打印内容错乱的讨论 ([Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)) 累计获得了 14 条评论，是今日讨论热度最高的议题，表明前端渲染稳定性是目前用户关注的焦点。
*   **Dream 系统作业的不可控性**：多位用户就“梦境生成（记忆整理）”功能自发运行且难以关闭表达了困扰，呼吁提供全局开关 ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885), [Issue #3948](https://github.com/HKUDS/nanobot/issues/3948))，反映出用户对后台资源消耗和自动化任务控制权的强烈诉求。

## 5. Bug 与稳定性
今日报告并处理了多个影响体验的 Bug，部分已迅速修复：
*   **[严重] WebUI 会话首答后关闭 / 刷新丢失**：用户在 WebUI 中发首条消息后会话关闭 ([Issue #3884](https://github.com/HKUDS/nanobot/issues/3884))，该问题已通过 PR #3944 修复。
*   **[严重] 安全策略误拦截合法 Web 请求**：开启工作目录限制后，正常的 `curl` 等网络命令被错误拦截 ([Issue #3931](https://github.com/HKUDS/nanobot/issues/3931))，该回归问题已通过 PR #3933 修复。
*   **[中等] Moonshot (Kimi) 模型 API 冲突**：调用 k2.5/k2.6 时，因同时传递 `thinking` 和 `reasoning_effort` 导致报错 ([Issue #3939](https://github.com/HKUDS/nanobot/issues/3939))，已通过 PR #3940 修复。
*   **[低] WebUI 重复 tool_call_id 报错**：在某些对话场景下出现键值重复错误 ([Issue #3945](https://github.com/HKUDS/nanobot/issues/3945))，已关闭。
*   **[低] Docker 容器外无法访问 WebUI bootstrap**：由于 localhost 限制导致 Docker 部署无法引导 ([Issue #3876](https://github.com/HKUDS/nanobot/issues/3876))，已确认并关闭。

## 6. 功能请求与路线图信号
结合新开 Issue 与待合并 PR，项目未来的迭代方向露出端倪：
*   **自动化与 Agent 工具链增强**：用户提出 exec 工具无法在隔离环境中使用 `pip` 安装第三方库的痛点 ([Issue #3934](https://github.com/HKUDS/nanobot/issues/3934))，预示着沙箱环境中的包管理机制可能会被重构。
*   **长期记忆（MECE）重做**：待合并的 [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) 试图彻底解决长期记忆系统的信息重叠与分类混乱问题，这是 Agent 走向深水区的重要一步。
*   **模态与平台扩展**：新增的 OpenAI/Codex 图像生成支持 ([PR #3954](https://github.com/HKUDS/nanobot/pull/3954))、xAI Grok OAuth 登录支持 ([PR #3936](https://github.com/HKUDS/nanobot/pull/3936)) 表明项目正在多模态和无缝鉴权上发力。
*   **性能与架构优化**：提出基于 BM25-lite 的技能路由器，旨在将系统提示词体积减少 60% ([PR #3865](https://github.com/HKUDS/nanobot/pull/3865))，这将是大幅降低 Token 消耗的重磅优化。

## 7. 用户反馈摘要
从今日的 Issue 互动中，可以提取出以下真实用户反馈：
*   **部署与集成痛点**：Docker 部署时的网络隔离限制给部分运维人员造成了困扰；系统默认的 Python 环境限制过死，阻碍了高级用户通过 Agent 动态执行复杂脚本。
*   **对自动化行为缺乏控制感**：部分用户对 Dream 记忆生成功能感到不满，认为其“不可控、重复性高、白白消耗 Token”，并希望获得完全的开关控制权。
*   **前端体验需求**：用户对 WebUI 的稳定性和性能要求极高，频繁的页面刷新和渲染错乱极大地影响了日常使用体验。

## 8. 待处理积压
*   **Dream 系统全局开关缺失**：([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)) 和 ([Issue #3948](https://github.com/HKUDS/nanobot/issues/3948)) 目前仍处于 Open 状态，建议维护者尽快回应，并考虑在配置文件中引入 `agents.defaults.dream.enabled` 参数以平息社区不满。
*   **Exec 工具环境变量优先级**：([Issue #3934](https://github.com/HKUDS/nanobot/issues/3934)) 提出的 `$PATH` 追加优先级导致无法使用虚拟环境的问题尚在等待官方确认。
*   **重量级架构 PR 待评审**：如长期记忆重构 [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) 和技能路由优化 [PR #3865](https://github.com/HKUDS/nanobot/pull/3865)，涉及核心逻辑变更，需维护者投入精力进行深度评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是为您生成的 Hermes Agent 项目 2026-05-22 日报：

# 📊 Hermes Agent 项目动态日报 (2026-05-22)

## 1. 今日速览
今日 Hermes Agent 项目维持了极高的社区活跃度，过去 24 小时内共处理了 50 条 Issue 更新（新开/活跃 43，关闭 7）和 50 条 PR 更新。虽然今日**无新版本发布**，但社区提交了大量高质量的缺陷报告（尤其是针对 Gateway 和 TUI 组件），并涌现出多个平台适配（Telegram/Slack/Matrix）和架构优化的 PR。整体来看，项目正处于功能快速迭代与深度排错的并行阶段，**待合并的 PR 数量（46 个）表明项目正积攒大量代码等待最终测试与发版**，项目健康度与社区参与度均处于高水平。

## 2. 版本发布
- **最新 Releases**: 无 (距离上一版本发布有一定时间，目前 main 分支正积攒大量修复与功能特性)。

## 3. 项目进展
今日虽仅合并/关闭了 4 个 PR，但包含了一些关键的架构修复和安全补丁，直接提升了系统的稳定性：

- **修复 Curator 技能归档逻辑缺陷**：PR [#30064](https://github.com/NousResearch/hermes-agent/pull/30064) (已关闭，由新 PR [#30076](https://github.com/NousResearch/hermes-agent/pull/30076) 接替) 修复了 Curator 在归档技能时未检查活跃 cron 任务的严重逻辑漏洞，防止了定时任务发生静默失败。
- **飞书平台鉴权共享**：PR [#30048](https://github.com/NousResearch/hermes-agent/pull/30048) 重构了飞书网关的 Lark 客户端，使文档/云盘工具能够复用认证信息，解决了 DM 和群聊代理无法调用飞书 API 的问题。
- **Matrix 网关高危安全漏洞修复**：PR [#30062](https://github.com/NousResearch/hermes-agent/pull/30062) 提交了 P0 级别的修复，解决了当未配置允许用户名单时，审批反应鉴权出现“默认放行”的安全隐患。
- **SQLite 阻塞主线程导致的掉线问题**：PR [#30067](https://github.com/NousResearch/hermes-agent/pull/30067) 修复了 Gateway 内部长耗时数据库查询阻塞异步事件循环，导致 Discord WebSocket 因心跳超时而断连的顽疾。

## 4. 社区热点
今日社区讨论焦点集中在 **UI 易用性** 和 **输出长度限制** 上：
- **长文本输出截断问题**：Issue [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) 以 31 条评论成为今日热度最高的议题。用户频繁在 CLI 或 Telegram 中遇到 `Response truncated due to output length limit` 错误，这暴露出 Agent 在处理长内容流式输出时的边界处理存在痛点。
- **Dashboard 视觉体验急需重构**：Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) (👍 24) 收获了大量点赞。用户直言当前的主题配色非标准，衬线字体过小且对比度极差，严重影响阅读体验，呼吁对 TUI 进行彻底的 UI/UX 改版。
- **Docker 基础镜像 CVE 漏洞积压**：Issue [#30073](https://github.com/NousResearch/hermes-agent/issues/30073) 指出当前 Docker 镜像包含 172 个严重/高危 CVE，呼吁团队重建镜像以获取 Debian 13 的底层安全补丁。

## 5. Bug 与稳定性
今日报告了多个影响正常使用的 Bug，按严重程度划分如下：

**🔴 P0/P1 高危级别**
- **网关内存SIGPIPE异常退出**：Issue [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) 指出在使用 Byterover 作为 `memory.provider` 时，Gateway 进程会在会话中途静默退出（exit_group(0)），导致 TUI 完全不可用。*暂无对应 Fix PR。*
- **流超时导致无限重试**：Issue [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) 指出在搭配本地重型 LLM 时，由于 prefill 时间大于默认的 180 秒超时时间，Agent 会陷入无限报错重试的死循环。*暂无对应 Fix PR。*

**🟠 P2 核心功能受损**
- **Kanban 模式误删源代码目录**：Issue [#28818](https://github.com/NousResearch/hermes-agent/issues/28818) 报告了灾难性的数据安全问题，当看板任务使用 `scratch` workspace 但指向了真实的代码目录时，清理机制会删除用户的真实源码。
- **TUI 交互缺陷集中爆发**：包括 Chat 界面无法使用 Ctrl+V 粘贴文本 ([#24860](https://github.com/NousResearch/hermes-agent/issues/24860))、看板横向溢出无法查看 ([#30023](https://github.com/NousResearch/hermes-agent/issues/30023))、Ctrl+C 会意外清空输入框 ([#29989](https://github.com/NousResearch/hermes-agent/issues/29989)) 等。
- **Slack 平台忽略配置强制回复话题**：Issue [#29921](https://github.com/NousResearch/hermes-agent/issues/29921) 指出即便将 `reply_in_thread` 设为 false，机器人依然会回复到 Thread 中。

**相关修复 PR 进展**：
针对部分 UI 和数据库小缺陷，社区迅速提交了修复，包括 SQLite 连接池泄露修复 ([#30027](https://github.com/NousResearch/hermes-agent/pull/30027)) 等。

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 中，可以明显看出项目正在向**多模态、全平台、强集成**的方向演进：

- **桌面端发布在即**：PR [#20059](https://github.com/NousResearch/hermes-agent/pull/20059) 提交了基于 Electron/Vite 构建的独立桌面端应用程序，这意味着 Hermes 很可能在下一版本正式出桌面 GUI。
- **更多平台级定制化支持**：
  - **Slack 自由频道**：Issue [#29922](https://github.com/NousResearch/hermes-agent/issues/29922) 请求支持无需 @提及即可自动回复的特定频道配置。
  - **Telegram 消息更新机制**：Issue [#30045](https://github.com/NousResearch/hermes-agent/issues/30045) 提议利用 Telegram 的消息编辑 API，取代当前不断发送新消息刷屏的进度更新方式。
- **定价与账号体系优化**：Issue [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) (👍 5) 呼吁支持 Claude 订阅 OAuth 接入，避免用户既要支付订阅费又要承担按量计费的 API 费用。这可能成为吸引白嫖/订阅型用户的重要路线。
- **多模态图片生成扩展**：Issue [#29999](https://github.com/NousResearch/hermes-agent/issues/29999) 提议扩展 `image_gen` 架构以支持传入参考图 URL，这表明项目正着手适配类似 Luma UNI 1.1 等高级多模态大模型。

## 7. 用户反馈摘要
分析今日数据，提炼出用户的真实反馈与使用场景如下：
- **本地化与边缘计算玩家增多**：出现了大量在树莓派 4B (4GB) 上跑 Hermes Agent 的硬核玩家（如 Issue [#29688](https://github.com/NousResearch/hermes-agent/issues/29688) 请求接入 Vosk 替代 Whisper），表明项目在低资源消耗方面表现不错，但本地模型接入的兼容性（超时、断流）仍需加强。
- **对操作隐私与数据安全高度敏感**：无论是误删源码目录的 Bug 报告，还是 BlueBubbles 的消息路由泄露修复（PR [#24229](https://github.com/NousResearch/hermes-agent/pull/24229)），都反映出用户将 Hermes 部署在日常生产环境中，对数据安全性有极高要求。
- **UI 框架体验滞后**：Web TUI 和 CLI 的基础交互（复制、粘贴、长输出渲染、字体配色）招致了大量抱怨，亟需一次彻底的前端基建翻新。

## 8. 待处理积压
以下几个高影响力且处于 Open 状态的积压项目需要核心维护者重点关注：

1. **v0.13.0 引入的 APIConnectionError 激增**：Issue [#22986](https://github.com/NousResearch/hermes-agent/issues/22986)。自上次大版本更新后，API 连接重试率飙升了约 8 倍，疑似特定 commit 引入了流超时回归，严重消耗 Token 和时间。
2. **智能路由关键字硬编码**：Issue [#11814](https://github.com/NousResearch/hermes-agent/issues/11814) (Open 已达 1 个月)。用户强烈要求将 `smart_model_routing` 复杂判定词的列表写入 `config.yaml`，这关乎高级用户的模型调度体验。
3. **孤立的 Docker 镜像 CVE 漏洞**：Issue [#30073](https://github.com/NousResearch/hermes-agent/issues/30073)。172 个高危 CVE 可能会成为企业级部署的拦路虎，建议在下次 CI/CD 流程中重建基础镜像。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-05-22)

> **数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **分析周期**: 过去 24 小时

## 1. 今日速览

PicoClaw 项目在过去 24 小时内保持了**极高的活跃度与健康的迭代节奏**。项目成功发布了 `v0.2.8` 的最新 Nightly 构建版本，持续推进迈向下一个稳定版。社区互动热烈，共处理了 9 条 Issue（7 关闭 / 2 新开）和 30 条 PR（10 关闭或合并 / 20 待处理）。维护者（特别是核心贡献者 bogdanovich）集中清理了大量与 Telegram 频道、多 Agent 架构及会话历史相关的积压缺陷。同时，生态版图进一步扩展，社区提交了包括 NEAR AI Cloud、请求上下文策略等在内的高质量新特性 PR，前端依赖也迎来了全面升级。

## 2. 版本发布

- **[nightly: Nightly Build v0.2.8-nightly.20260521.33f9d638](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新性质**: 自动化夜间构建版本，包含近期合并的 main 分支最新代码。
  - **包含亮点**: 整合了今日集中关闭的多个 Telegram 频道缺陷修复（如 Forum Topic 丢失问题），以及 Agent 历史记录和上下文隔离的相关优化。
  - **迁移/注意**: 官方提示该版本为自动构建，可能存在不稳定性，不建议直接用于生产环境。如需体验最新功能，请谨慎更新。

## 3. 项目进展

今日共有 **10 个 PR 被合并或关闭**，项目在**渠道集成（尤其是 Telegram）和消息处理机制**上迈出了坚实的一步。主要进展包括：

- **Telegram 频道与交互优化（贡献者：bogdanovich）**：
  - 合并了 [PR #2772](https://github.com/sipeed/picoclaw/pull/2772)：修复了通过 `message` 工具发送消息时，Telegram Forum Topic 路由丢失的关键问题。
  - 合并了 [PR #2776](https://github.com/sipeed/picoclaw/pull/2776) 和 [PR #2779](https://github.com/sipeed/picoclaw/pull/2779)：优化了 Telegram 输入状态（typing）的清理逻辑，并增加了针对特定话题的触发覆盖机制。
  - 合并了 [PR #2778](https://github.com/sipeed/picoclaw/pull/2778)：引入了 `working_summary` 工具反馈样式，让 Chat 频道的进度提示更紧凑、直观。
  - 合并了 [PR #2777](https://github.com/sipeed/picoclaw/pull/2777)：修复了定时任务错误地将工具运行进度反馈发送到前台聊天窗口的 Bug。
- **工程与依赖清理**：
  - 关闭了 [PR #2812](https://github.com/sipeed/picoclaw/pull/2812)（根目录 Dockerfile 支持），该需求可能已被其他方式取代或暂不合并。

## 4. 社区热点

今日社区关注的焦点集中在**底层性能优化、多账号/多会话的隔离**以及**集成扩展**上：

- **架构优化呼声高**：新开的 Issue [#2916 CPU, Memory and IO optimizations](https://github.com/sipeed/picoclaw/issues/2916) 引发了关于底层性能改进的讨论。作者深入分析了代码库，提出了针对 IO 模式和技能系统的优化方案。
- **长期痛点被修复**：今日关闭了几个带有“stale”标签但讨论度较高的问题。例如 [#629 LLM 调用失败未重试](https://github.com/sipeed/picoclaw/issues/629)（高达 15 条评论，历经 3 个月终获修复）和 [#2775 子Agent继承根Agent身份混淆](https://github.com/sipeed/picoclaw/issues/2775)。这表明维护者在持续推进深层架构级 Bug 的修复。

## 5. Bug 与稳定性

今日集中处理了一批影响用户体验的 Bug，按严重程度排列如下：

- **🔥 P0 - 核心交互中断**：
  - **LLM 调用失败挂起**（[Issue #629](https://github.com/sipeed/picoclaw/issues/629)）：长任务中遇到 HTTP 500 时不重试导致任务彻底挂起。**状态**: 已关闭。
  - **PDF 附件导致会话崩溃**（[Issue #2798](https://github.com/sipeed/picoclaw/issues/2798)）：在 Telegram 中发送 PDF 导致 stream 断裂。**状态**: 已关闭。
- **⚠️ P1 - 数据一致性与界面展示**：
  - **多用户群组发送者丢失**（[Issue #2702](https://github.com/sipeed/picoclaw/issues/2702)）：默认会话下，历史消息无法区分发送者。**状态**: 已关闭。
  - **对话历史显示不全**（[Issue #2795](https://github.com/sipeed/picoclaw/issues/2795)）：用户切换会话后只能看到最后一条消息，前面的被隐藏。**状态**: 已关闭。
  - **消息时间戳错乱**（[Issue #2787](https://github.com/sipeed/picoclaw/issues/2787)）：API 缺少单条消息时间戳，前端只能套用会话更新时间。**状态**: 已关闭。

## 6. 功能请求与路线图信号

结合最新的 PR 动态，PicoClaw 的下一阶段演进路线显现出以下信号：

- **细粒度权限与策略管控**：[PR #2914](https://github.com/sipeed/picoclaw/pull/2914) 提出增加 `request-scoped context policies`，允许全局控制是否携带历史记录、系统上下文和工具。同时，[PR #2838](https://github.com/sipeed/picoclaw/pull/2838) 提出在 `AGENT.md` 中支持 frontmatter 工具策略过滤。这表明项目正在**从“全量上下文”向“精细化、按需裁剪上下文”演进**，以适应更复杂的工业级场景。
- **多 LLM Provider 扩展**：[PR #2917](https://github.com/sipeed/picoclaw/pull/2917) 增加了 NEAR AI Cloud 提供商，配合之前社区提议的 GPT4Free 支持（[Issue #2901](https://github.com/sipeed/picoclaw/issues/2901)），项目在**低成本推理后端接入**上持续发力。
- **前端技术栈更新**：[PR #2924](https://github.com/sipeed/picoclaw/pull/2924) 至 [PR #2927](https://github.com/sipeed/picoclaw/pull/2927) 集中升级了 React、TanStack 和 Shadcn 等前端依赖，预示着 Web UI 可能正在酝酿较大的交互体验优化。

## 7. 用户反馈摘要

从今日的 Issue 提交与评论中，可以提炼出真实用户的几个典型痛点：

1. **上下文压缩导致的体验降级**：用户反馈对话历史被过度压缩或隐藏，查看历史时无法看到完整上下文。
2. **多群组/多角色设定混乱**：在多 Agent 架构下，用户期望不同角色有明确的身份隔离，而不是继承同一个根 Agent 身份，这反映了用户在**构建复杂自动化工作流时对隔离性的强烈需求**。
3. **部署便利性需求**：有用户建议添加 `FUNDING.yml`（[Issue #2912](https://github.com/sipeed/picoclaw/issues/2912)），也有用户持续关注开箱即用的 Dockerfile 部署方案，说明个人用户和极客群体对部署门槛较为敏感。

## 8. 待处理积压

以下重要的 PR/Issue 处于 Open 状态，建议维护团队重点关注：

- **[PR #2838 Frontmatter 工具策略过滤器](https://github.com/sipeed/picoclaw/pull/2838)**：涉及核心 Agent 执行逻辑的变更，目前待合并，需仔细评估对现有工具调用的影响。
- **[PR #2914 请求上下文策略](https://github.com/sipeed/picoclaw/pull/2914)**：全局默认配置的重大变更，建议补充详尽的兼容性测试。
- **[PR #2920 Anthropic SDK 升级](https://github.com/sipeed/picoclaw/pull/2920)**：跨多个小版本的大版本升级（1.26.0 -> 1.44.1），可能包含破坏性变更，需审查 API 调用兼容性。
- **[Issue #2916 CPU/内存/IO 优化提案](https://github.com/sipeed/picoclaw/issues/2916)**：社区深度参与的架构优化建议，尚未有对应的 PR 提交，需要项目核心成员评估可行性并给出路线图反馈。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目保持高活跃度，社区共有 **3 个新开/活跃 Issue** 和 **13 个活跃 PR**（其中 2 个已合并/关闭，11 个待处理）。核心开发团队及社区贡献者正聚焦于多 AI 供应商接入能力（Codex、LiteLLM、ACP），以及主流通讯渠道（Signal、WhatsApp、Telegram）的稳定性修复。暂无新版本发布。整体来看，项目处于功能横向扩张与既有组件深度打磨并行的阶段。

---

## 2. 版本发布
无新版本发布。

---

## 3. 项目进展

### 已关闭/合并 PR（2 条）

| PR | 标题 | 作者 | 说明 |
|---|---|---|---|
| [#2576](https://github.com/nanocoai/nanoclaw/pull/2576) [CLOSED] | fix(progress): assistant text block 改用 progressType=text | tier2tech-tian | 修复 `ea21e58` 引入的回归——SDK 模式下用户看不到 agent 在工具调用之间的中间叙述文本。根因是 `flushPendingThought` 双重抑制了 assistant text block，改为 `progressType=text` 后恢复可见性。提升交互体验。 |
| [#2577](https://github.com/nanocoai/nanoclaw/pull/2577) [CLOSED] | feat(deshi): auto-inject channelContext from session_routing | HokutoMorita | 废止 agent 自行 fabricate `channelContext`，改为容器内从 SQLite `session_routing` 表自动读取注入，同时清理未使用的 `isGroup` 字段。降低 agent 幻觉风险，简化调用链。 |

### 高影响力待合并 PR 精选

| PR | 标题 | 作者 | 亮点 |
|---|---|---|---|
| [#2532](https://github.com/nanocoai/nanoclaw/pull/2532) | feat: Edna Veo 3.1 — generation + stitching + inbound media (Slack) | nightlaro | 端到端接入 Google Veo 3.1 视频生成/拼接，并支持 Slack 渠道用户上传图片 inbound 处理，属于重量级功能扩展。 |
| [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) | feat(codex): full Codex-only installation support | chiptoe-svg | 实现 Codex-only 安装路径，含凭据管理、技能目录、persona 全链路支持，是去 Claude 强绑定的关键一步。 |
| [#2542](https://github.com/nanocoai/nanoclaw/pull/2542) | feat(providers): add ACP Client Protocol provider | joka-7 | 新增 Agent Client Protocol 客户端，允许任意 ACP 兼容外部 AI 代理接入 agent group。 |
| [#2575](https://github.com/nanocoai/nanoclaw/pull/2575) | feat: add claw-acp — ACP server bridge for IDE integration | joka-7 | 与 #2542 配套的 ACP 服务端桥接，WebStorm 已可使用 NanoClaw 作为 agent 后端。 |
| [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) | fix(signal-auth): read 'number' field from signal-cli 0.13+ listAccounts JSON | snymanpaul | 直接修复 Issue #2581，详见下文 Bug 段。 |

---

## 4. 社区热点

今日所有 Issues 和 PRs 评论数均为 0，属于典型的"提交多、讨论少"工作日模式。但以下条目因质量/影响力值得关注：

- **[#2583](https://github.com/nanocoai/nanoclaw/issues/2583)** — `restartService` 在 launchd plist 已卸载时静默无操作，影响 macOS 部署可靠性。由核心贡献者 snymanpaul 提出，属于平台集成层面的关键发现。
- **[#2532](https://github.com/nanocoai/nanoclaw/pull/2532)** — Edna Veo 3.1 视频能力是近期功能迭代中规模最大的 PR，跨 outbound/inbound 两个方向。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue / PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 高 | [#2582](https://github.com/nanocoai/nanoclaw/issues/2582) | `signal-auth listAccounts` 死锁：当 signal-cli daemon 已持 config-file lock 时，`spawnSync` 无超时将永远阻塞，导致安装流程卡死。 | **暂无 fix PR** |
| 🟡 中 | [#2583](https://github.com/nanocoai/nanoclaw/issues/2583) | `restartService` 使用 `launchctl kickstart -k` 但 plist 未加载时静默失败，服务不会重启且无报错。 | 暂无 fix PR |
| 🟡 中 | [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) | signal-cli >= 0.13 JSON 字段从 `account` 改为 `number`，导致 `listAccounts()` 始终返回空数组，用户被错误引导重新链接。 | **已有 fix PR** [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) |
| 🟡 中 | [#2579](https://github.com/nanocoai/nanoclaw/pull/2579) | WhatsApp 强制登出 (401) 后残留凭据导致重启循环失败。PR 提出立即清除凭据。 | PR 待合并 |
| 🟢 低 | [#2576](https://github.com/nanocoai/nanoclaw/pull/2576) (已关闭) | SDK 模式中间叙述文本被双重抑制的回归。 | 已修复合并 |

---

## 6. 功能请求与路线图信号

从今日 PR 活动中可以提取出以下路线图方向：

1. **多供应商战略加速落地**
   - Codex-only 全链路支持 ([#2580](https://github.com/nanocoai/nanoclaw/pull/2580)) + AI-coding CLI picker ([#2474](https://github.com/nanocoai/nanoclaw/pull/2474)) + Codex provider contracts 收紧 ([#2361](https://github.com/nanocoai/nanoclaw/pull/2361))
   - LiteLLM 供应商接入 ([#2490](https://github.com/nanocoai/nanoclaw/pull/2490))
   - ACP Client/Server 双向协议 ([#2542](https://github.com/nanocoai/nanoclaw/pull/2542), [#2575](https://github.com/nanocoai/nanoclaw/pull/2575))
   - **信号判断**：项目正系统性地解除对 Claude Code 的硬依赖，下一版本很可能正式宣布多 AI 供应商矩阵。

2. **视频/多模态能力扩展**
   - Edna Veo 3.1 ([#2532](https://github.com/nanocoai/nanoclaw/pull/2532)) 标志着从纯文本交互向视频生成+媒体处理的跃迁。

3. **渠道覆盖持续扩展**
   - Telegram claim link ([#2578](https://github.com/nanocoai/nanoclaw/pull/2578)) — 新渠道接入
   - WhatsApp 凭据清理 ([#2579](https://github.com/nanocoai/nanoclaw/pull/2579)) — 成熟渠道稳定性提升
   - Signal 兼容性修复 (Issues #2581–#2583) — 适配新版 signal-cli

4. **跨供应商技能共享**
   - Claude Code skill catalog 导出给非 Claude 供应商 ([#2337](https://github.com/nanocoai/nanoclaw/pull/2337))

---

## 7. 用户反馈摘要

今日 Issues 均为代码级 Bug 报告（由贡献者 snymanpaul 提交），暂无终端用户评论。从中可提炼以下使用场景痛点：

- **Signal 集成在升级后大面积失效**：三个 Issue 全部围绕 signal-cli 兼容性，说明 Signal 渠道在生产环境中被实际使用，且 `signal-cli` 版本升级频率给 NanoClaw 带来了持续维护负担。
- **macOS (launchd) 部署存在静默失败模式**：服务重启不报错但不生效，增加了排查成本。
- **WhatsApp 强制登出场景处理不完善**：凭据残留导致服务重启死循环，影响无人值守运行的可靠性。

---

## 8. 待处理积压

| 条目 | 状态 | 天龄 | 风险 |
|---|---|---|---|
| [#2582](https://github.com/nanocoai/nanoclaw/issues/2582) signal-auth listAccounts 死锁 | OPEN，无 fix PR | 1 天 | 🔴 高 — 阻塞 Signal 新用户安装流程 |
| [#2583](https://github.com/nanocoai/nanoclaw/issues/2583) restartService launchd 静默失败 | OPEN，无 fix PR | 1 天 | 🟡 中 — macOS 日常运维隐患 |
| [#2532](https://github.com/nanocoai/nanoclaw/pull/2532) Edna Veo 3.1 视频 | OPEN，待合并 | 4 天 | 🟡 中 — 大型 PR 需充分 review |
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) Codex provider contracts | OPEN，待合并 | 13 天 | 🟡 中 — 基础设施变更，合并前需与 #2580 协调 |
| [#2337](https://github.com/nanocoai/nanoclaw/pull/2337) Claude Code skill catalog 共享 | OPEN，待合并 | 15 天 | 🟢 低 — 功能增强，无紧迫性 |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) LiteLLM provider | OPEN，待合并 | 7 天 | 🟢 低 — 社区贡献，需 review |

**建议维护者优先处理**：Issue #2582（死锁，无超时保护，可通过添加 `timeout` 参数快速止血）以及 PR #2584（signal-cli 0.13 兼容性 fix，改动小、风险低）。

---

*数据来源：GitHub nanocoai/nanoclaw 仓库，统计周期 2026-05-21 至 2026-05-22。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这份 NullClaw 项目 2026-05-22 的动态日报已经为您整理完毕。报告基于昨日数据提取分析，结构如下：

# 📊 NullClaw 项目动态日报 (2026-05-22)

### 1. 今日速览
过去 24 小时，NullClaw 项目整体处于 **低活跃、重积累** 的状态。项目今日无新版本发布，无新增或关闭的 Issue，且没有任何代码合并入主分支。不过，社区提交了 2 个待合并的功能性 PR（累计等待合并），分别聚焦于**内置定时任务引擎**和**集成 NEAR AI 云服务商**。综合来看，项目目前没有紧急的稳定性危机或用户反馈积压，正处于新功能开发的静默孵化期。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
*今日无已合并的 PR 或已关闭的 Issue。项目整体代码库在今日保持静止，未见向前推进的合并记录。*

### 4. 社区热点
由于今日 Issues 更新数量为 0，且 PR 评论数极少（记录为 undefined/0），今日缺乏爆发性的社区讨论热点。相对而言，以下两个 PR 是今日的核心关注点：
*   **[PR #783] feat(cron): cron subagent, run history, JSON output, security hardening** ([nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783))
    *   **亮点**: 由贡献者 `yanggf8` 提交，引入了底层数据库支持的定时任务调度引擎。
    *   **分析**: 这是一个重量级功能，涉及历史记录表、工作队列、时区偏移和安全加固。该 PR 自 4 月初创建以来仍在迭代（昨日有更新），说明团队在对其稳定性和安全性进行深度打磨，这是向“企业级/生产可用”迈进的重要信号。
*   **[PR #922] feat(providers): add NEAR AI Cloud provider** ([nullclaw/nullclaw PR #922](https://github.com/nullclaw/nullclaw/pull/922))
    *   **亮点**: 由 `PierreLeGuen` 于昨日刚刚提交，为 NullClaw 增加了兼容 OpenAI 接口的 NEAR AI Cloud 提供商支持。
    *   **分析**: 这反映了社区对扩展 NullClaw 模型接入源的强烈需求，尤其是去中心化或特定云服务生态的接入。

### 5. Bug 与稳定性
*今日无新报告的 Bug、崩溃或回归问题。当前项目的稳定性指标保持健康。*

### 6. 功能请求与路线图信号
虽然今日没有通过 Issue 提出新的功能请求，但从近期活跃的 PR 可以反推出项目近期的演进路线图：
*   **信号一：从“对话工具”向“自动化调度框架”演进**。[PR #783](https://github.com/nullclaw/nullclaw/pull/783) 表明 NullClaw 正在构建强大的自动化任务执行能力（支持 skill/agent/shell 作业类型），未来用户可将其作为稳定的后台自动化 Agent。
*   **信号二：模型供应商生态持续扩张**。[PR #922](https://github.com/nullclaw/nullclaw/pull/922) 证明项目致力于降低用户接入各种大模型后端的门槛。如果有类似需求的用户（如需要特定合规或私有化部署的模型），可以持续关注此 PR 的合并进度。

### 7. 用户反馈摘要
*今日无直接的 Issues 评论可供提取。基于目前提交的 PR 类型可以侧面推断：核心开发者及重度用户目前最大的诉求在于“复杂任务的自动化调度（Cron）”以及“灵活的底层模型路由（Providers）”。*

### 8. 待处理积压
需提醒项目维护者关注以下长期/新增的 PR 审批进度，避免社区贡献者流失：
*   **重点跟进 1**：[nullclaw/nullclaw PR #783](https://github.com/nullclaw/nullclaw/pull/783)（已开启 45 天，需确认是否卡在代码审查或架构调整阶段）。
*   **重点跟进 2**：[nullclaw/nullclaw PR #922](https://github.com/nullclaw/nullclaw/pull/922)（昨日新开，需尽快进行初步的架构兼容性评估并给予作者反馈）。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
IronClaw 项目在过去24小时内维持了**极高的活跃度与开发迭代速度**，整体处于架构重构与功能横向扩展的快车道。项目今日共处理了 24 条 Issue（新开/活跃 15 条，关闭 9 条）和 46 条 PR（待合并 25 条，合并/关闭 21 条），代码吞吐量表现优异。开发主轴依然围绕底层的 **"Reborn" 架构大重构**，涵盖内核、授权、密钥和渠道适配器的全面翻新。同时，社区生态侧也传来佳音，企业微信和 IronHub 等重量级外部集成 PR 取得了重要进展。

## 2. 版本发布
**无新版本发布**。
*注：目前下游依赖仍受限于 `crates.io` 上停滞的 `v0.24.0` 版本（详见 [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)），主要系 wasmtime 28.x CVEs 所致。建议持续关注该阻断性问题的解决进展。*

## 3. 项目进展
今日合并或关闭了多个核心 PR 和 Issue，显著推进了 Reborn 架构的落地与系统的稳定性：

*   **Reborn 核心追踪器关闭：** 多个标志性的 P0/P1 架构追踪 Issue 被标记为已完成（如 TurnCoordinator、AgentLoopHost 等），标志着 Reborn 底层基础模块已基本成型（[Issue #3016](https://github.com/nearai/ironclaw/issues/3016), [Issue #3013](https://github.com/nearai/ironclaw/issues/3013)）。
*   **内核服务组合优化：** 合并了 `ironclaw_host_runtime` 服务组合（[Issue #3087](https://github.com/nearai/ironclaw/issues/3087)）及 First-party API bindings 分组（[PR #3827](https://github.com/nearai/ironclaw/pull/3827)），明确了调用服务的绑定解析机制。
*   **持久化与幂等性支撑：** 产品工作流的幂等账本 PR 已关闭（[PR #3759](https://github.com/nearai/ironclaw/pull/3759)），配合共享存储层重构（[Issue #3419](https://github.com/nearai/ironclaw/issues/3419)），为系统的容错与恢复能力打下基础。
*   **审查与测试补齐：** 网络出站隔离测试（[PR #3851](https://github.com/nearai/ironclaw/pull/3851)）及 inbound policy 审查修复（[PR #3852](https://github.com/nearai/ironclaw/pull/3852)）均已落地，系统安全性测试覆盖率进一步提升。

## 4. 社区热点
今日讨论最密集的集中在架构重构的统筹设计与核心模块的阻断性问题上：

*   **[Issue #3016](https://github.com/nearai/ironclaw/issues/3016) Reborn 切换阻断器：AgentLoopHost 外观模式** (13条评论)
    *   *分析*：作为核心架构的追踪节点，汇聚了各模块（TurnCoordinator、持久化、API）的依赖关系讨论，反映出团队在重构过程中对接口边界和分层设计的严谨把控。
*   **[Issue #3022](https://github.com/nearai/ironclaw/issues/3022) Reborn 切换阻断器：事件底层集成测试** (11条评论)
    *   *分析*：社区及核心贡献者正在敲定跨服务、重放及脱敏等高级特性的测试套件方案，这将是保障 Reborn 平稳切换的关键门槛。
*   **[Issue #3031](https://github.com/nearai/ironclaw/issues/3031) [EPIC] Reborn 产品表面迁移** (7条评论)
    *   *分析*：此史诗级 Issue 追踪了所有 UI/UX 和 API 兼容性工作，确保新架构对用户的平滑过渡。
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 发布阻断：下游依赖被 pinned 至 0.24.0** (7条评论)
    *   *分析*：由于安全漏洞导致的版本锁定引发了生态使用者的担忧，如何尽快推送到 `crates.io` 是目前的社区痛点之一。

## 5. Bug 与稳定性
今日报告了若干涉及工作流执行和会话恢复的 Bug，以及持续的 CI 不稳定现象：

*   **P0 (功能性阻断): Mission 重试机制失效** - [Issue #3839](https://github.com/nearai/ironclaw/issues/3839)
    *   *详情*：失败的 Mission 点击 "Retry" 调用 `/fire` 端点返回 `fired: false`，提示为 terminal 或预算耗尽，导致无法重试。目前尚无对应 Fix PR。
*   **P1 (底层逻辑缺陷): 会话上下文注入丢失** - [Issue #3821](https://github.com/nearai/ironclaw/issues/3821)
    *   *详情*：`Thread::restore_from_messages` 在 chronological walk 时会丢弃孤立的 `assistant` 行，导致带外上下文注入失败。尚无对应 Fix PR。
*   **P1 (CI/基础设施): Nightly E2E 测试持续失败** - [Issue #3447](https://github.com/nearai/ironclaw/issues/3447)
    *   *详情*：自动化每日 E2E 运行报告失败，可能影响主分支部署的健康度。
*   **P2 (上下文流失): Routine 通知缺乏聊天上下文** - [Issue #1519](https://github.com/nearai/ironclaw/issues/1519)
    *   *详情*：Routine 发送的通知没有沉淀在用户的聊天线索中，导致用户上下文割裂。

## 6. 功能请求与路线图信号
今日涌现出多项明确指向多渠道支持和原生集成能力的功能需求：

*   **Slack 渠道 MVP 原生支持**：[Issue #3857](https://github.com/nearai/ironclaw/issues/3857) 提议增加基于预配置凭证的 Slack ProductAdapter。结合当前正在进行的 Telegram v2 ([PR #3590](https://github.com/nearai/ironclaw/pull/3590)) 和 WebChat v2 ([PR #3815](https://github.com/nearai/ironclaw/pull/3815)) 适配器重构，**多渠道网关全面 Reborn 化**将成为下个版本的主旋律。
*   **企业微信 独立渠道适配**：[PR #2394](https://github.com/nearai/ironclaw/pull/2394) 提出建立独立的 `wecom` WASM 通道，以解耦现有的 `wechat` 通道，这表明项目正将企业级 IM 集成提上日程。
*   **IronHub 运行时安装工具/技能**：[PR #3737](https://github.com/nearai/ironclaw/pull/3737) 提出通过 CLI 或 AI Agent 工具直接从 IronHub 动态安装工具。这释放出构建**插件化开放生态**的强烈信号。

## 7. 用户反馈摘要
从近期开放的 Issue 中，可以清晰地提取出终端用户和运营者在实际使用 Web UI 和 Mission 系统时的核心痛点：

1.  **多渠道会话的 UI 割裂感**：用户反馈 Web UI 中的多渠道标签（如 WECHAT, TELEGRAM）视觉处理不一致，难以快速扫描，呼吁增加绿色高亮和特定渠道图标（[Issue #3840](https://github.com/nearai/ironclaw/issues/3840)）。
2.  **渠道源继承逻辑不透明**：用户在查看带有特定标签（如 TELEGRAM）的对话时创建 Mission，Mission 会隐式继承该渠道源，导致对 `notify_channels` 的默认行为产生困惑（[Issue #3846](https://github.com/nearai/ironclaw/issues/3846)）。
3.  **重试机制的用户体验缺陷**：UI 提供的 "Retry" 按钮无法正常工作，不仅未触发重试，还给出了令人困惑的“预算耗尽”提示（[Issue #3839](https://github.com/nearai/ironclaw/issues/3839)）。

## 8. 待处理积压
尽管开发极度活跃，仍有一些关键的大体量 PR 和长期问题急需维护者进行Review或推进：

*   **[PR #1378](https://github.com/nearai/ironclaw/pull/1378) 基于 Channel 的 MCP 与内置工具路由过滤**：这是一个 XL 级别的特性 PR，自 3月18日开启至今已达 2 个月，对于多渠道部署至关重要，似乎陷入了 Review 停滞。
*   **[PR #3590](https://github.com/nearai/ironclaw/pull/3590) Telegram v2 入站追踪器重构**：涉及数据库迁移的核心大 PR，需要着重审查其幂等性账本的实现。
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) Crates.io 版本发布停滞**：自 5月5日提出以来，下游依赖锁定在旧版本的问题仍未解决，直接影响了公共生态的健康度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-05-22)

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 分析周期：过去 24 小时

---

## 1. 今日速览

过去 24 小时，LobsterAI 项目整体呈现出**“低开高走、底层重构优先”**的态势。项目在今日无新版本发布，且未收到新的 Issue 反馈，表面交互热度处于低位。然而，核心开发者在底层架构上保持了较高活跃度，一次性**提交并关闭了 2 个重要的重构/优化 PR**。值得注意的是，**共有 9 个历史遗留 PR 在今日被唤醒并标记为活跃状态**，大量涉及国际化（i18n）、核心引擎体验及状态管理的修复，暗示项目可能正处于下一轮集中合并或版本发布前的代码审查阶段。

---

## 2. 版本发布

*今日无新版本发布。*

---

## 3. 项目进展

今日共有 2 个 Pull Request 被标记为 `[CLOSED]`，均由核心贡献者 `fisherdaddy` 提交，主要聚焦于底层架构与交互体验的优化：

*   **[#2024] optimize: optimize gateway restart in settings**
    *   **链接：** [netease-youdao/LobsterAI PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024)
    *   **进展：** 优化了设置面板中网关重启的逻辑。这将直接提升用户在修改配置后的体验，减少不必要的等待或卡顿。
*   **[#2025] refactor(im): redesign im bot management UI**
    *   **链接：** [netease-youdao/LobsterAI PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)
    *   **进展：** 对 IM 机器人管理界面进行了全新重构设计。涉及 renderer、主进程及 OpenClaw 等多个核心区域，为后续更强大的 IM 集成能力打下 UI 互操作基础。

---

## 4. 社区热点

由于今日无新开 Issue 且现有 PR 评论数据未显著增长，社区讨论热点主要集中在**长期未合并但极具价值的 PR** 上。这些 PR 反映了社区开发者对项目细节的高度关注：

*   **系统通知与用户体验：** `iroving` 提交的 [#1536] 引入了 Cowork 会话完成/失败时的系统原生通知功能，直击用户在多任务切换时的“盲等”痛点。
    *   **链接：** [netease-youdao/LobsterAI PR #1536](https://github.com/netease-youdao/LobsterAI/pull/1536)
*   **深度国际化（i18n）修复：** 社区连续提交了多个解决英文模式下硬编码中文的 PR，如 [#1540]（设置面板编辑按钮）和 [#1543]（审批对话框硬编码）。这表明海外用户的接纳度正在提升，国际化成为刚需。
    *   **链接：** [netease-youdao/LobsterAI PR #1540](https://github.com/netease-youdao/LobsterAI/pull/1540) | [#1543](https://github.com/netease-youdao/LobsterAI/pull/1543)

---

## 5. Bug 与稳定性

今日无新报告的崩溃或严重 Bug。但大量处于待合并状态的 PR 修复了现存的稳定性与逻辑缺陷，按影响范围评估如下：

*   **🔴 核心逻辑/P0 级：**
    *   **[#1544] OAuth 轮询导致内存/资源泄漏：** 关闭设置面板时，若 GitHub Copilot 授权仍在进行，会导致后台持续阻塞轮询（长达 15 分钟），甚至导致 Token 静默丢失。（修复方案已就绪）
        *   **链接：** [netease-youdao/LobsterAI PR #1544](https://github.com/netease-youdao/LobsterAI/pull/1544)
    *   **[#1545] Agent 技能状态不同步：** 修改 Agent 技能后，当前对话未能即时更新 `activeSkillIds`，导致功能表现与设置不符。（修复方案已就绪）
        *   **链接：** [netease-youdao/LobsterAI PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545)
*   **🟡 交互体验/P1 级：**
    *   **[#1546] 引擎启动卡死无响应：** OpenClaw 引擎启动异常时，用户需硬等 5 分钟。PR 新增了 30 秒超时后的“取消启动”和“查看日志”逃生舱机制，极大提升了排障体验。
        *   **链接：** [netease-youdao/LobsterAI PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)
    *   **[#1547] 定时任务状态回退 Bug：** 定时任务的通知渠道选择后无法改回“不通知”。属于历史遗留逻辑缺陷。
        *   **链接：** [netease-youdao/LobsterAI PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)

---

## 6. 功能请求与路线图信号

从活跃的 PR 动向来看，LobsterAI 正在向**“精细化、多端协同、知识沉淀”**的方向演进。以下功能信号强烈，大概率被纳入近期的版本迭代：

1.  **AI 对话内容知识管理：**
    *   `MaoQianTu` 提交的 [#1538] 支持 AI 回复的收藏/书签功能（基于 SQLite 持久化），解决了长上下文中重要信息易丢失的问题。
    *   **链接：** [netease-youdao/LobsterAI PR #1538](https://github.com/netease-youdao/LobsterAI/pull/1538)
2.  **会话维度组织能力（标签系统）：**
    *   `MaoQianTu` 提交的 [#1542] 引入了完整的会话标签分类系统（自定义创建、侧边栏筛选过滤），将极大增强重度用户的 session 管理能力。
    *   **链接：** [netease-youdao/LobsterAI PR #1542](https://github.com/netease-youdao/LobsterAI/pull/1542)

---

## 7. 用户反馈摘要

尽管今日无新增 Issue 文本，但通过对过去 24 小时活跃的 PR 提取隐性反馈，我们可以勾勒出当前用户的核心使用场景：
*   **痛点 1：多任务处理缺乏感知。** 用户经常在等待 AI 运行长任务时切换窗口，导致任务结束后无法及时感知（对应 PR #1536 系统通知）。
*   **痛点 2：英文环境下的割裂感。** 深度英文用户在执行危险操作时，依然会弹出纯中文的审批对话框，破坏了多语言体验的一致性（对应 PR #1543）。
*   **痛点 3：IM 集成与自动化场景。** 用户正在积极使用 LobsterAI 的定时任务和 IM 机器人联动能力，但在状态配置（如通知模式）上遇到了历史遗留的阻碍（对应 PR #1547, #2025）。

---

## 8. 待处理积压

今日有 **9 个高质量 PR** 处于待合并状态（其中多个已标记为 `[stale]`），需要项目维护团队投入时间进行最终审查：

1.  **[#1536] Cowork 系统通知** - 核心体验增强，已等待 45 天。
2.  **[#1538] AI 消息书签收藏** - 核心功能扩展，已等待 45 天。
3.  **[#1540] 设置面板 i18n 翻译缺失** - 低风险修复。
4.  **[#1542] 会话标签分类系统** - 功能量级较大，需重点 review。
5.  **[#1543] 审批对话框 i18n 硬编码** - 影响全球化体验。
6.  **[#1544] GitHub Copilot OAuth 内存泄漏** - 核心稳定性修复，应优先合并。
7.  **[#1545] Agent 技能状态同步** - 状态管理核心修复。
8.  **[#1546] 引擎启动超时交互** - 体验兜底机制。
9.  **[#1547] 定时任务通知状态回退** - 表单逻辑修复。

**维护者建议：** 这些 PR 大多集中在 4 月 7 日提交，目前处于积压状态。建议按 **`稳定性修复 (#1544, #1545)` -> `国际化 (#1543, #1540)` -> `体验增强与功能 (#1546, #1536)` -> `大型重构 (#1542, #1538)`** 的顺序进行代码审查并推进合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 22 日 Moltis 项目动态日报：

# 📊 Moltis 项目动态日报 (2026-05-22)

## 1. 今日速览
过去 24 小时，Moltis 项目保持了**高度活跃且聚焦于修复与优化**的态势。社区共产生了 5 条活跃的 Issues 和 5 条 PR 更新。整体来看，项目当前的重心明显偏向于**基础设施稳定性（Docker/沙箱）**以及**多模态交互体验（电话语音/TTS）**的完善。今日唯一合并的 PR 提升了核心模型的推理能力支持，同时多名核心开发者（如 penso）针对近期高发的容器环境 Bug 和电话网关缺陷迅速提交了修复方案，展现了维护团队快速响应的健康度。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日项目的显著向前推进主要体现在大模型推理能力支持的增强，以及对关键语音通讯 Bug 的排查：
*   **[CLOSED] feat(openai-codex): add reasoning effort support [PR #1005](https://github.com/moltis-org/moltis/pull/1005)**
    *   **进展说明：** 该 PR 已于今日合并。它为 OpenAI Codex 提供商引入了 `reasoning_effort` 参数支持，并在 Responses API 请求中序列化该配置。同时，它确保了在没有明确设置该参数时，现有的加密推理内容（`encrypted_content`）依然会被保留。这标志着 Moltis 在兼容前沿大模型（如 GPT-5 系列）的高级推理特性上迈出了重要一步。

## 4. 社区热点
今日社区最活跃的讨论集中在容器化部署的痛点上：
*   **[Bug]: Browser sandbox fails when Moltis runs in Docker [Issue #977](https://github.com/moltis-org/moltis/issues/977)**
    *   **分析：** 该 Issue 创建于 5 月 6 日，但在过去 24 小时内新增了多轮讨论（目前共 4 条评论）。用户在 Proxmox LXC 环境中挂载 Docker Socket 运行浏览器沙箱时遇到数据目录权限创建失败的问题。由于容器化和沙箱隔离是 AI 智能体自托管部署的核心刚需，该问题引发了较高关注。
*   **[Feature]: Handle Piper TTS audio conversions [Issue #1029](https://github.com/moltis-org/moltis/issues/1029)** 与 **[Feature]: Agent should have access to Moltis docs OOTB [Issue #1028](https://github.com/moltis-org/moltis/issues/1028)**
    *   **分析：** 社区正在积极为项目出谋划策。不仅关注底层的 TTS 音频转换效率（Piper TTS），还提出了“开箱即用（OOTB）”的改进诉求——要求智能体默认能够访问 Moltis 官方文档，这反映了用户希望降低 Agent 配置门槛、提升 Agent 自主解决系统级问题能力的强烈愿望。

## 5. Bug 与稳定性
今日报告了多个影响特定场景的 Bug，按严重程度排列如下：

1.  **🔴 P0: 严重 - 电话语音交互完全失效**
    *   **问题：** [Bug]: Phone (Twilio) call: the agent greets me but never responds... [Issue #1032](https://github.com/moltis-org/moltis/issues/1032)
    *   **影响：** 基于 Twilio 的电话呼叫功能中，Agent 会说开场白，但无法识别和回应用户的语音输入，导致语音通话功能单边瘫痪。
    *   **状态：** **已有对应 Fix PR**。开发者 `penso` 提交了 [PR #1034](https://github.com/moltis-org/moltis/pull/1034)，修复了 Twilio gather 解析逻辑，确保在处理 `CallStatus=in-progress` 之前先处理 `SpeechResult` 和 `Digits`。

2.  **🟠 P1: 较高 - 浏览器沙箱在 Docker 环境中崩溃**
    *   **问题：** [Bug]: Browser sandbox fails when Moltis runs in Docker [Issue #977](https://github.com/moltis-org/moltis/issues/977)
    *   **影响：** 挂载 Docker socket 运行时，浏览器工具无法创建配置目录。
    *   **状态：** **已有对应 Fix PR**。开发者 `penso` 提交了 [PR #1035](https://github.com/moltis-org/moltis/pull/1035)，实现了 Docker 宿主机数据挂载的自动检测，并为浏览器 `SingletonLock` 权限拒绝问题增加了备用路径解析机制。

3.  **🟡 P2: 中等 - Open AI TTS 兼容性问题**
    *   **问题：** [Bug]: Open AI TTS always requires response_format to be `opus`... [Issue #1030](https://github.com/moltis-org/moltis/issues/1030)
    *   **影响：** 系统强制要求 OpenAI TTS 的响应格式为 `opus`，导致不支持该格式的后端（如 Speaches）无法正常工作。目前尚无针对性 PR。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 来看，项目下一阶段的迭代路线图呈现出清晰的方向信号：
*   **集成去中心化 AI 算力/隐私计算：** 社区成员提交了 [Add NEAR AI Cloud provider PR #1031](https://github.com/moltis-org/moltis/pull/1031)。该 PR 不仅新增了 NEAR AI Cloud 作为 OpenAI 兼容的提供商，还引入了 TEE（可信执行环境）感知的推荐和能力发现机制。这表明 Moltis 正在探索向隐私计算和去中心化 AI Agent 基础设施拓展。
*   **安全性与配置灵活性的平衡：** [PR #1033](https://github.com/moltis-org/moltis/pull/1033) 提出了允许禁用静态 Vault 加密的选项。对于在受信任的内网环境中部署的用户，这降低了配置复杂度；同时提供的解密 API 和 UI 操作确保了降级过程的安全性。预计该功能将在下一版本中作为高级设置被纳入。

## 7. 用户反馈摘要
结合今日的 Issue 动态，提炼出以下真实用户痛点与使用场景：
*   **自托管场景（Homelab）越来越受重视：** 用户在 Proxmox 的 LXC 容器中嵌套运行 Docker 并挂载 Socket。这要求 Moltis 具备更强健的文件系统权限自适应能力（[Issue #977](https://github.com/moltis-org/moltis/issues/977)）。
*   **语音交互链路的脆弱性：** 用户反馈 Twilio 通话“听得见但说不出”（[Issue #1032](https://github.com/moltis-org/moltis/issues/1028)），以及 TTS API 格式硬编码导致的本地部署受阻（[Issue #1030](https://github.com/moltis-org/moltis/issues/1030)）。这说明 AI 语音到文本、文本到语音的串联调度是当前除大模型文本生成之外最易出错的环节。
*   **对“开箱即用”的极度渴望：** 用户希望 Agent 在出厂时就具备查阅 Moltis 文档的能力（[Issue #1028](https://github.com/moltis-org/moltis/issues/1028)），反映出用户期望 Agent 能够“自我救赎”，减少人工介入排查配置问题的成本。

## 8. 待处理积压
以下重要 Issue 或 PR 虽然在近期更新，但仍处于等待处理的积压状态，建议维护团队重点关注：
*   **[OPEN] [PR #1031 Add NEAR AI Cloud provider](https://github.com/moltis-org/moltis/pull/1031)：** 这是一个大型功能 PR，涉及新的提供商集成、文档更新和 TEE 功能适配，目前处于等待 Review 状态，需要核心架构师评估其对系统稳定性的影响。
*   **[OPEN] [PR #1033 Allow disabling vault encryption at rest](https://github.com/moltis-org/moltis/pull/1033)：** 涉及核心安全模块的变更，允许解密并导出环境变量和密钥，此类安全敏感代码需要经过严格的代码审查后才能合并。
*   **[OPEN] [Issue #1030 TTS format not supported in Speaches](https://github.com/moltis-org/moltis/issues/1030)：** 作为今日新暴露的兼容性 Bug，目前缺乏开发者和作者的进一步互动，阻碍了部分依赖 Speaches 进行本地 TTS 部署的用户。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 - 2026年05月22日

## 1. 今日速览
CoPaw 项目今日保持高度活跃，社区互动与代码提交频繁。过去24小时内，项目共处理了 **26条 Issues**（新开/活跃18条，关闭8条）和 **27条 PRs**（待合并8条，合并/关闭19条），合入产出比极高。尽管今日无新版本发布，但大量针对通道稳定性（特别是微信、钉钉、飞书）的修复和底层体验优化代码已合入主分支。整体来看，项目正处于 v1.1.8 发布后的快速集中修复与迭代阶段，社区对多通道消息下发和本地模型上下文管理的关注度最高。

---

## 2. 版本发布
**无新版本发布。**
当前项目仍处于 v1.1.8.post1 版本的基础维护中。根据目前的 PR 合入密度（涉及底层技能市场重构、多通道核心Bug修复），预计项目正在为下一个补丁版本或 minor 版本积累代码。

---

## 3. 项目进展
今日共有 19 个 PR 被合并或关闭，项目在通道鲁棒性、前端交互体验和底层架构上取得了实质性进展：

*   **通道稳定性大幅增强：**
    *   合入 PR [#4576](https://github.com/agentscope-ai/QwenPaw/pull/4576)：修复了长期困扰微信 iLink 通道的消息去重失效和 `context_token` 过期导致的无限重试问题。
    *   合入 PR [#4569](https://github.com/agentscope-ai/QwenPaw/pull/4569)：优化了工具调用被拒绝时的系统提示，避免 Agent 盲目重试。
*   **控制台 UI 与体验优化：**
    *   合入 PR [#4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) / [#4598](https://github.com/agentscope-ai/QwenPaw/pull/4598)：实现了聊天输入框草稿的跨页面持久化。
    *   合入 PR [#4599](https://github.com/agentscope-ai/QwenPaw/pull/4599)：修复了暗黑模式下桌面宠物导入区域的隐形 Bug。
*   **底层架构与技能系统重构：**
    *   合入 PR [#4518](https://github.com/agentscope-ai/QwenPaw/pull/4518)：将底层 HTTP 客户端重构为异步 `httpx`，并引入统一技能市场，极大提升了技能获取的并发性能。
    *   合入 PR [#4567](https://github.com/agentscope-ai/QwenPaw/pull/4567)：增强了上下文处理中对文件块（file block）的解析能力。

---

## 4. 社区热点
今日社区讨论聚焦于多端通道对接的稳定性与长期记忆机制：

*   **[Bug] 微信定时任务与接口透传失效** ([#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) - 14条评论)：讨论焦点集中在微信 iLink 通道的 `context_token` 隔夜失效且无重试机制。这反映了重度用户将 QwenPaw 作为自动化推送节点的强烈诉求。
*   **[Bug] Agent 数量过多导致 WebUI 卡顿** ([#4559](https://github.com/agentscope-ai/QwenPaw/issues/4559) - 8条评论)：用户反馈配置超过 40 个 Agent 后前端性能急剧下降，引发了关于前端虚拟列表渲染和状态管理机制的探讨。
*   **[Feature] 无损上下文压缩 (DAG-based Summarization)** ([#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) - 2条评论)：提出了极具建设性的架构升级建议，指出当前基于滑动窗口的摘要会导致长期跨天任务的核心细节丢失，呼吁引入 DAG 依赖以保留关键上下文。

---

## 5. Bug 与稳定性
今日报告了多个影响核心功能流程的 Bug，按严重程度排列如下：

**严重级别：高 (核心工作流阻断/多通道消息遗漏)**
*   **语音转写配置失效** ([#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556))：强制配置 Whisper API 时，仍回退使用浏览器原生 API。*(注：已有对应 Fix PR [#4601](https://github.com/agentscope-ai/QwenPaw/pull/4601) 提交)*
*   **钉钉 API 接口只能 Console 落盘** ([#4604](https://github.com/agentscope-ai/QwenPaw/issues/4604))：通过 API 发送消息指定 Dingtalk 通道时，消息不到达用户端，仅在控制台显示。
*   **话题列表在复杂工具调用中被清空** ([#4519](https://github.com/agentscope-ai/QwenPaw/issues/4519) - 已关闭)：高频使用工具后发送新消息会导致前端历史话题瞬间清空。

**严重级别：中 (特定通道/界面显示异常)**
*   **飞书 CardKit 流式输出失效** ([#4572](https://github.com/agentscope-ai/QwenPaw/issues/4572) - 已关闭)：因 sequence 初始值设为 `0` 导致飞书流式卡片 API 报错拦截。
*   **Gemini/Gemma 模型参数校验崩溃** ([#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605))：传递了 `max_tokens` 导致 Pydantic 抛出校验异常，致使应用崩溃。
*   **桌面进程孤立遗留** ([#4587](https://github.com/agentscope-ai/QwenPaw/issues/4587))：关闭 Desktop 应用后，后端 `app` 进程仍在后台运行不被清理。
*   **钉钉发送文件中文乱码** ([#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586))：*(注：已有对应 Fix PR [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) 提交)*。

---

## 6. 功能请求与路线图信号
从今日的 Issue 提交来看，以下功能可能成为项目下一阶段的演进方向：

*   **插件 Agent Hook 机制** ([#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613))：开发者希望提供 `register_agent_hook` 接口，使外部知识库插件能介入 Agent 的行为决策链路。这标志着社区生态正从“工具调用”向“行为深度定制”迈进。
*   **Playwright 优先的浏览器自动化** ([#4584](https://github.com/agentscope-ai/QwenPaw/issues/4584))：由于 CDP 连接极易被反爬检测和导致僵尸进程，社区呼吁在 Browser-use 中将 Playwright 作为默认引擎替代 CDP。*(注：相关预警 PR [#4603](https://github.com/agentscope-ai/QwenPaw/pull/4603) 已提交)*。
*   **基于模型自动推断上下文长度** ([#4004](https://github.com/agentscope-ai/QwenPaw/issues/4004) - 重新活跃)：要求 `max_input_length` 与挂载的具体模型能力动态解绑，减少用户在切换本地模型与云端模型时的配置负担。*(注：相关 PR [#4595](https://github.com/agentscope-ai/QwenPaw/pull/4595) 已提交)*。

---

## 7. 用户反馈摘要
通过对 Issue 描述和评论的语义分析，提炼出当前用户的三个核心反馈触点：
1.  **多端通讯的“伪成功”痛点**：用户普遍表示（如 [#4521](https://github.com/agentscope-ai/QwenPaw/issues/4521), [#4612](https://github.com/agentscope-ai/QwenPaw/issues/4612)），API 返回 `success: true` 但微信/钉钉等通道实际未送达的情况非常影响使用信任，迫切需要建立完善的消息投递回执与状态反馈机制。
2.  **多 Agent 管理的性能焦虑**：用户正在将 QwenPaw 用作“多数字员工调度中心”，但随着 Agent 数量增加，前端加载和切换体验出现明显 degradation（降级）。
3.  **工作空间整洁度需求**：高级用户（如 [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408)）希望将运行时产生的杂项文件收敛至类似 `.qwenpaw` 的隐藏目录中，表明项目正被越来越多地应用于生产级严肃工作流中。

---

## 8. 待处理积压
以下长期未彻底解决或需重点关注的 Issue/PR 仍在等待官方 Core Team 的介入响应：

*   **[积压 PR] Tauri 2.x 桌面端支持** ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))：该 PR 创建于近一个月前，涉及重大的底层架构变更（将 WebUI 迁移至 Tauri），当前仍在审核中，需官方明确合并时间表。
*   **[积压 PR] E2E Mock 基础设施迁移** ([#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464))：涉及端到端测试框架的重构，属于高风险高收益的变更，同样悬而未决。
*   **[积压 Issue] OneBot 频道定时任务群发失效** ([#3054](https://github.com/agentscope-ai/QwenPaw/issues/3054))：该问题自 4 月初被报告至今未解决，直接影响了 QQ 等生态的群组自动化推送，受影响群体较大，建议维护者优先排期。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-22)

## 1. 今日速览
ZeroClaw 项目今日迎来了重大里程碑，正式发布了 `v0.8.0-beta-1` 版本，标志着项目从单智能体守护进程成功蜕变为真正的多智能体主机。项目活跃度极高，过去 24 小时内共产生了 50 条 PR 更新和 21 条 Issues 更新。大量新特性（尤其是终端 TUI 界面和 RPC 架构）被集中提出并推进，反映出核心团队在 beta 版发布后正迅速展开下一阶段的网络与交互层建设。此外，社区贡献者持续修复各渠道和提供商的兼容性问题，展现出健康的开源生态协同效应。

## 2. 版本发布
- **[v0.8.0-beta-1](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-1)**
  - **更新内容**：ZeroClaw 正式进入多智能体并行时代。一次安装即可同时运行多个具名智能体，每个智能体拥有独立的身份、工作区、记忆、模型提供商、通道和安全配置文件。
  - **核心能力**：多智能体之间现已支持内部通信与协同工作。
  - **迁移注意事项**：从 v0.7.x 升级的用户需注意，配置文件（Config）和运行时架构已发生重构，建议在测试环境中验证原有的单智能体工作流是否正常映射至新版本架构。

## 3. 项目进展
今日项目通过合并 6 个 PR 和关闭 2 个 Issue，在核心架构与社区治理上取得了实质性进展：
- **多智能体运行时落地**：伴随着 `v0.8.0-beta-1` 的发布，PR [#6398 feat!: multi-agent runtime and schema V3](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 已被合并。这是今日最具分量的代码合并，彻底重构了底层的运行时和模式，是多智能体架构的基石。
- **RPC 与 TUI 基础铺设**：核心维护者 singlerider 提交并关闭了 PR [#6839 feat(runtime): RPC dispatch layer and Unix socket transport](https://github.com/zeroclaw-labs/zeroclaw/pull/6839)，成功引入了基于 Unix socket 的 RPC 调度层，为接下来脱离 HTTP/WS 的独立 TUI 终端交互打下底层通信基础。
- **社区治理与 RFC 推进**：Issue [#5890 RFC: Multi-agent UX flow — design](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) 被正式关闭并标记为 `accepted`，多智能体用户体验的设计规范已达成共识并提档。

## 4. 社区热点
今日的社区焦点集中在**深度模型兼容性**和**项目维护流程优化**上：
1. **DeepSeek-V4 API 兼容性危机**（[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)）：获得了 12 条评论和 4 个点赞。多位开发者在切换至 DeepSeek-V4-Pro/Flash 时遇到了 Thinking Mode 导致的 API 报错。这反映了用户对主流高性价比模型的高需求，目前状态为 `in-progress`。
2. **MCP 工具过滤失效问题**（[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)）：由核心贡献者提出，指出了在真实 MCP 工具表面的前缀检查 Bug 及加载延迟问题，引发了对安全策略与运行时调度逻辑的深入讨论（5条评论）。
3. **社区治理 RFC 提案**（[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）：社区成员提出了关于“工作泳道、看板自动化和标签清理”的治理 RFC，获得了 3 条评论，表明社区不仅关注代码，也对项目的高效协同管理提出了更高要求。

## 5. Bug 与稳定性
今日报告了多个影响工作流的 Bug，部分阻塞了特定场景下的正常使用：
- **S1 级（工作流阻塞）**：
  - **[Issue #6841]** **多模态视觉提供商失效**：配置了 `vision_provider` 后，图片仍被路由至 fallback 提供商，导致视觉处理中断。目前尚无对应修复 PR。
  - **[Issue #6844]** **Slack 机器人令牌环境变量读取失败**：必须硬编码在配置文件中，影响容器化部署的安全性。属于历史遗留问题的复发。
  - **[Issue #6771]** **安全策略误拦截 Heredocs**：多行 Heredoc 被 `SecurityPolicy` 错误拦截，阻碍了正常的自动化 PR 提交流程（已关闭/已有修复方案）。
- **S2 级（体验降级）**：
  - **[Issue #6836]** **Windows 精简构建体积超标**：使用 `--minimal` 标记编译后体积为 26MB 而非预期的 6MB。阻碍了资源受限环境的部署。
  - **[Issue #6059]** **DeepSeek 提供商兼容性报错**。

## 6. 功能请求与路线图信号
从今日密集的 Issue 提交可以看出，ZeroClaw 的下一阶段重心将是**打造独立于 Web 的终端生态与底层通信协议扩展**：
1. **TUI 生态全面建设**：核心开发者一口气提出了 5 个相关 Issue（[Tracker: ZeroClaw TUI #6826](https://github.com/zeroclaw-labs/zeroclaw/issues/6826)、TUI Agent Chat、TUI ACP Bridge 等），旨在通过 Ratatui 构建对标 Web 仪表盘的强力终端界面。配套的构建迁移请求（[Issue #6821](https://github.com/zeroclaw-labs/zeroclaw/issues/6821)）和发布流添加（[Issue #6822](https://github.com/zeroclaw-labs/zeroclaw/issues/6822)）也已就位。
2. **ACP 协议扩展与文件传输**：提出针对 Diff 显示和文件建议的 ACP 协议扩展（[Issue #6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820)），以及文件/附件上传协议（[Issue #6819](https://github.com/zeroclaw-labs/zeroclaw/issues/6819)）。对应的 PR（如支持表情反馈的 [#6840](https://github.com/zeroclaw-labs/zeroclaw/pull/6840)）已提交，预计很快合入。
3. **搜索引擎扩展**：用户提议将 Jina AI 作为网络搜索提供商，因其极慷慨的免费额度（[Issue #6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827)），对应的实现 PR（[#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833)）已由社区提交。
4. **运行时粒度控制增强**：`--ephemeral` 守护进程模式（[Issue #6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818)）和无需重载的会话级参数覆盖（[Issue #6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817)）被提上日程，将极大改善多会话并发场景下的开发体验。

## 7. 用户反馈摘要
- **痛点：配置复杂与文档表现力不足**：多个 Bug 报告（如 Windows 构建体积、环境变量不生效、多模态 Provider 静默失败）表明，用户在处理高级配置（如多 Provider 路由、多模态管道）时经常遇到与预期不符的情况，且系统往往静默失败而非主动报错。
- **痛点：特定渠道和工具的边界情况**：如 Slack 的线程回填问题（[PR #6428](https://github.com/zeroclaw-labs/zeroclaw/pull/6428)）和 Email 格式渲染问题（[PR #6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512)），反映了 ZeroClaw 在整合长尾渠道时的交互深度仍有打磨空间。
- **满意点：架构的开放性**：社区积极贡献新的 LLM Provider（如 NEAR AI Cloud [PR #6842](https://github.com/zeroclaw-labs/zeroclaw/pull/6842)）和渠道定制化构建功能（[PR #6830](https://github.com/zeroclaw-labs/zeroclaw/pull/6830)），说明 ZeroClaw 的模块化架构设计深得开发者认可，扩展门槛较低。

## 8. 待处理积压
目前有大量关键 PR 处于 Open 状态且需要维护者审查，建议核心团队分配精力跟进：
1. **大型外部贡献审查**：PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (Jira 深度集成) 和 PR [#6700](https://github.com/zeroclaw-labs/zeroclaw/pull/6700) (Skills 管理 API) 标记为 `needs-author-action`，需要进一步的代码重构或维护者测试才能推进。
2. **安全敏感模块**：PR [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) 提出的 Shell 工具 TOTP 门控机制涉及高风险的安全模块，且已开启近一个月，需安全专家尽快介入 Review 以防止阻塞 v0.8 的最终发布。
3. **基础设施与环境支持**：针对 ARM64 Docker 的支持（[PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)）和 Nix 包构建（[PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987)）是扩大部署覆盖率的关键，目前停滞等待作者动作，需提醒推进。

</details>