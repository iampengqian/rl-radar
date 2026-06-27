# OpenClaw 生态日报 2026-06-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-27 22:19 UTC

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

# 📊 OpenClaw 项目动态日报
**日期**: 2026-06-28 | **分析数据源**: github.com/openclaw/openclaw

---

### 1. 今日速览
OpenClaw 项目在过去 24 小时内展现了极高的社区活跃度与开发热度，共计产生 **500 条 Issue 更新**（其中 483 条新开或活跃）以及 **500 条 PR 更新**（待合并 446 条）。
* **开发重心**：今日绝大多数的贡献与讨论集中在 **Gateway 底层稳定性（内存泄漏、锁机制）**、**多渠道适配器修复（飞书、Telegram、Mattermost）** 以及 **多智能体/复杂工作流状态管理** 方面。
* **健康度评估**：新提的 PR 品质较高，普遍附带有测试证明，但项目整体的 Bug 积压（尤其是 3 月份遗留的 P1/P2 级别核心缺陷）仍需核心团队投入精力进行集中清理。

---

### 2. 版本发布
* **今日无新版本发布** (Releases: 0)。

---

### 3. 项目进展
今日共有 **54 个 PR 被合并或关闭**，整体进展显著，尤其是核心开发者 (`Jerry-Xin`, `galiniliev`, `ianalloway` 等) 在消消息丢失和渠道交互适配上迈出了一大步：
* **消息可靠性提升**：PR [#89039](https://github.com/openclaw/openclaw/pull/89039) 修复了 SDK 重试导致静默消息丢失的问题；PR [#88992](https://github.com/openclaw/openclaw/pull/88992) 修复了 `message_tool_only` 模式下 LLM 偶尔遗忘调用工具而导致的回复搁浅问题。
* **定时任务健壮性**：PR [#83933](https://github.com/openclaw/openclaw/pull/83933) 修复了手动运行会错误消耗并删除 `deleteAfterRun` 一次性任务的严重逻辑漏洞。
* **多渠道体验优化**：PR [#97286](https://github.com/openclaw/openclaw/pull/97286) 修复了 Telegram 渲染时错误剥离推理标签的问题；PR [#97307](https://github.com/openclaw/openclaw/pull/97307) 修复了飞书 Markdown 单行换行符失效导致文字挤在一起的缺陷。

---

### 4. 社区热点
今日讨论热度最高的问题反映了社区对 **跨平台兼容性** 和 **安全隔离** 的强烈诉求：
* **多文件名编码支持** (👍 1, 💬 18): [Issue #48788](https://github.com/openclaw/openclaw/issue/48788)
  * **诉求**：针对飞书中文文件名乱码问题，社区呼吁不应只做表面修补，而需要建立集中的多编码（Shift-JIS, GB18030 等）解析通用底层工具。
* **系统提示词注入漏洞** (💬 14): [Issue #45740](https://github.com/openclaw/openclaw/issue/45740)
  * **诉求**：`gh-issues` 技能直接将未受信任的 GitHub Issue 正文注入子代理提示词中，存在严重的 Prompt 注入风险，急需进行沙箱隔离或过滤。
* **社区技能生态建设** (👍 2, 💬 15): [Issue #50090](https://github.com/openclaw/openclaw/issue/50090)
  * **诉求**：开发者希望 ClawHub 能像应用市场一样，建立规范的生命周期管理与社区审核机制，打破当前“Primitive 各自为战”的散乱状态。

---

### 5. Bug 与稳定性
当前系统中最致命的稳定性问题集中在长时间运行的 Gateway 内存暴涨与多智能体死锁状态上：

* **[P1 - 崩溃/OOM] Gateway 内存泄漏**：[Issue #54155](https://github.com/openclaw/openclaw/issue/54155) / [Issue #55334](https://github.com/openclaw/openclaw/issue/55334)
  * **现象**：运行 4 天后内存从 389MB 暴涨至 14.7GB；`sessions.json` 因包含完整的 `skillsSnapshot` 且不清理临时会话而无界增长，最终导致 OOM。
* **[P1 - 安全/回归] 身份验证范围被意外剥离**：[Issue #51396](https://github.com/openclaw/openclaw/issue/51396)
  * **现象**：非本地 Token 认证客户端的 `clearUnboundScopes()` 会无条件剥离操作员权限，导致后端 API 客户端的发消息功能彻底失效。
* **[P1 - 状态死锁] ACP 父会话等待卡死**：[Issue #52249](https://github.com/openclaw/openclaw/issue/52249) / [Issue #95833](https://github.com/openclaw/openclaw/issue/95833) *(已关闭/推进中)*
  * **现象**：多智能体协作时，子任务完成后父会话依然挂起，需手动刷新 UI 才能恢复；且子代理中止时未能释放 `.jsonl.lock` 文件，导致会话永久阻塞。

---

### 6. 功能请求与路线图信号
从近期的 Feature Request 和对应 PR 中，可以清晰看出项目下一阶段的演进路线：
* **LLM 路由高可用**：[Issue #51441](https://github.com/openclaw/openclaw/issue/51441) 呼吁在 `session_status` 中暴露 LiteLLM 解析后的实际后端模型。相关修复 PR [#97328](https://github.com/openclaw/openclaw/pull/97328) 提出为 Gemini API 请求实现多密钥轮换机制，表明 **高可用与多模型代理路由调度** 是下个版本的重点。
* **上下文溯源与治理**：[Issue #35203](https://github.com/openclaw/openclaw/issue/35203) 和 [Issue #54373](https://github.com/openclaw/openclaw/issue/54373) 提出 RFC，要求给上下文片段添加“来源/易失性”元数据，并引入 Token 成本治理与能力画像，这描绘了 **企业级可控的多智能体黑板架构** 路线图。
* **生命周期前置记忆刷盘**：[Issue #45608](https://github.com/openclaw/openclaw/issue/45608) 提出在执行 `/new` 或每日重置前，应利用现有的压缩机制进行一次静默的记忆刷盘，防止上下文丢失。

---

### 7. 用户反馈摘要
通过提取 Issue 评论，总结出终端用户在使用 OpenClaw 时的核心痛点：
* **“消息去哪了？”**：消息渠道的**静默丢失**是用户最大的痛点。如 WhatsApp 断线重连后不回补消息（[#50093](https://github.com/openclaw/openclaw/issue/50093)），以及 Discord 无法强制回复到原频道（[#54531](https://github.com/openclaw/openclaw/issue/54531)），给用户体验造成了极大伤害。
* **“谁动了我的工作区？”**：部分用户遭遇了极其令人困惑的“灵异事件”，例如开发者硬编码了工作路径，导致系统莫名其妙自动创建了 `/Users/wangtao` 的文件夹（[#51429](https://github.com/openclaw/openclaw/issue/51429)）；以及 `OPENCLAW_HOME` 解析错误引发的深层嵌套目录问题（[#45765](https://github.com/openclaw/openclaw/issue/45765)）。
* **“编造结果的定时任务”**：部分用户反馈 Cron 会话在遭遇工具调用失败或数据缺失时，没有静默报错，而是让 LLM **伪造了看似合理的输出**发送给用户（[#49876](https://github.com/openclaw/openclaw/issue/49876)），引发了严重的信任危机。

---

### 8. 待处理积压
以下重要且未解决的 Issue 已经滞留超过 3 个月，急需 Maintainer 介入处理或纳入里程碑：
* **[#57326](https://github.com/openclaw/openclaw/issue/57326)** [P1] CLI 辅助路径绕过调度器，直接走 API Provider 导致行为不一致。
* **[#48003](https://github.com/openclaw/openclaw/issue/48003)** [P1] Steer 模式未在主会话运行期间注入中间用户消息，导致意图引导失效。
* **[#53599](https://github.com/openclaw/openclaw/issue/53599)** [P1] Chrome 扩展跨机器中继被移除后无替代方案，破坏了托管服务商的现有架构。
* **[#53628](https://github.com/openclaw/openclaw/issue/53628)** [P2] Docker 环境下 `XDG_CONFIG_HOME` 变量未生效，导致技能安装位置错误。

---
*分析师结语*：OpenClaw 目前在架构扩展和日常迭代上保持着惊人的活力（每日数百级别的 PR/Issue 更新），展现出极强的生命力。然而，项目重心需要逐渐从“横向扩展渠道”转移到“纵向夯实基础”上，尤其是内存管理机制、锁机制以及 Prompt 隔离边界，将是决定其能否进一步被企业级市场接纳的关键。

---

## 横向生态对比

这份报告基于 2026 年 6 月 28 日各大开源 AI 智能体与个人助手项目的社区动态，进行了多维度的深度横向分析。

---

# 📊 2026年 AI 智能体与个人助手开源生态横向分析报告
**报告周期**: 2026-06-28 | **分析师视角**: 资深技术架构与开源生态

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话工具”向“全平台自动化执行节点”跨越的临界点**。各个项目不再满足于简单的 LLM API 封装，而是将重心转移到了**跨平台渠道接入（IM集成）、高并发状态管理、本地/小模型兼容以及企业级安全隔离**上。虽然生态整体呈现出百花齐放、高度活跃的态势，但内存泄漏、并发死锁、工具调用沙箱逃逸等“深水区”问题，正成为制约项目迈向企业级生产环境的核心瓶颈。

## 2. 各项目活跃度对比
今日生态中，各项目的迭代节奏与重心呈现出明显差异。OpenClaw 在绝对活跃度上断层领先，而 NanoBot、IronClaw 等项目正处于密集修错与架构重构的关键期。

| 项目名称 | Issues 更新 | PR 更新 | Release | 核心焦点 | 健康度评估 |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **OpenClaw** | ~500 | ~500 (合并54) | 0 | Gateway 稳定性、渠道适配、多智能体死锁 | ⚠️ 活跃极高，但存在严重的内存与历史 Bug 积压 |
| **Hermes Agent** | ~50 | ~50 (合并11) | 0 | Windows 桌面端 UX、多平台网关、本地模型适配 | 🟢 高速迭代，跨平台体验痛点正在集中爆发 |
| **NanoBot** | ~10 | ~46 (合并29) | 0 | 核心安全拦截、执行器稳健性、并发工具调用 | 🟢 极佳，代码审查与问题消化能力极强 |
| **IronClaw** | ~50 | ~50 (合并17) | 0 | WebUI v2 收敛、OAuth修复、结构化记忆 | 🟢 质量巩固期，工程化与测试覆盖率提升显著 |
| **ZeroClaw** | ~45 | ~50 (合并3) | 0 | WASM 插件架构、SOP 控制平面、供应链安全 | 🟢 架构演进健康，社区对于安全与自治讨论热烈 |
| **CoPaw** | ~5 | ~16 (待合并15) | 0 | Agentscope 2.0 迁移修复、模型兼容性测试 | 🟡 积压较重，正在经历大版本升级的阵痛期 |
| **NanoClaw** | ~3 | ~7 (合并0) | 0 | 容器底层重构、技能热更新修复 | 🟡 PR 审查阻塞，存在功能重构积压风险 |
| **LobsterAI** | ~2 | ~8 (合并7) | 0 | 网关稳定性、MCP 流式协议支持 | 🟡 代码清理积极，但桌面端遭遇阻断性高危 Bug |
| **PicoClaw** | ~2 | ~5 (合并2) | 0 | Simplex/LINE 渠道扩展、国际化清理 | 🟢 稳健，主攻去中心化隐私通讯协议接入 |
| **Moltis** | 1 | 3 (合并0) | 0 | 本地小模型 JSON 输出容错、浏览器自动化 | 🟢 活跃度一般，但切口极准（RPA+本地模型） |
| **NullClaw** | 1 | 0 | 0 | Android/Termux 构建兼容 | 🔴 严重沉寂，移动端自构建路径阻断 |

## 3. OpenClaw 在生态中的定位
作为生态的**绝对头部与核心参照系**，OpenClaw 展现出了强大的社区号召力（单日数百级 PR/Issue 更新）。其优势在于**极其庞大的渠道生态覆盖**与**丰富的前沿功能尝试**（如 ACP 多智能体黑板架构、LiteLLM 路由）。
* **对比优势**：相比于 NanoBot 或 PicoClaw，OpenClaw 的功能广度与社区贡献者基数具有压倒性优势；其 LLM 路由与多渠道消息触达能力更为成熟。
* **当前劣势与技术债**：大而不强是其最大隐患。相比于 IronClaw 积极推进的 E2E 测试和 ZeroClaw 的 WASM 架构，OpenClaw 在底层稳定性上显得较为粗糙。其 Gateway 运行数日后因 `sessions.json` 无限膨胀导致 OOM（内存从 389MB 暴涨至 14.7GB），以及多智能体死锁问题，暴露出其在内存管理与锁机制上的严重缺陷。

## 4. 共同关注的技术方向
跨项目分析显示，以下几个技术方向正在成为全行业的共识：
1. **IM 渠道的高并发与流式健壮性**（*涉及：OpenClaw, Hermes Agent, PicoClaw, CoPaw*）
   * **诉求**：解决 Discord/Telegram/WhatsApp 等高并发场景下的消息静默丢失、流式回复交叉污染（如 NanoBot 引入 `_stream_id`）、以及富文本卡片超长更新失败等问题。
2. **本地/开源小模型的工具调用容错**（*涉及：Moltis, Hermes Agent, CoPaw*）
   * **诉求**：真实世界中，DeepSeek V4、Gemma 4 等模型输出的 JSON Schema 经常存在类型偏差（如将布尔值输出为字符串）或多轮对话流式解析报错。系统必须具备底层兜底的清洗与容错机制，而非理想化地依赖模型自觉。
3. **LLM 路由高可用与动态切换**（*涉及：OpenClaw, NanoClaw, IronClaw*）
   * **诉求**：面对单一模型 API 限流或宕机，社区强烈呼吁模型凭证池自动轮换（如 OpenClaw 的 Gemini 密钥轮换）、基于会话的动态模型预设（NanoBot）以及多后端异构路由（NanoClaw）。
4. **高危命令与 Prompt 注入防御**（*涉及：OpenClaw, PicoClaw, NanoBot, IronClaw*）
   * **诉求**：安全隔离成为核心痛点。NanoBot 修复了 `&&` 链式执行绕过白名单的漏洞；OpenClaw 曝光了子代理未过滤 GitHub Issue 正文导致的注入风险；PicoClaw 社区则呼吁区分私聊与群组权限，防止在开放空间执行恶意 `shell` 命令。

## 5. 差异化定位分析
* **全功能与企业级基座型**：以 **OpenClaw** 和 **IronClaw** 为代表。OpenClaw 致力于横向扩展渠道与复杂工作流；IronClaw 则转向纵向深耕企业级稳定性，推进结构化数据 CRUD 记忆与严格的 E2E 测试矩阵。
* **极客轻量化与边缘侧部署型**：以 **NanoBot** 和 **NullClaw** 为代表。追求极致轻量（剥离 Node.js 依赖），强调在树莓派、NAS 甚至 Android Termux 环境下的低资源消耗运行。
* **RPA 与具身智能结合型**：以 **Moltis** 为代表。差异化聚焦于浏览器自动化操作，通过引入“每步操作后自动截图”的可视化回放，缓解用户的“黑盒焦虑”。
* **高安全与去中心化社交型**：以 **PicoClaw** 和 **ZeroClaw** 为代表。PicoClaw 发力 Simplex 与 Matrix 等端到端加密通讯协议；ZeroClaw 则重构 WASM 插件隔离机制，并推进硬件 PGP 密钥签名的供应链安全。

## 6. 社区热度与成熟度
* **爆发增长，缝缝补补期**：**OpenClaw** 和 **Hermes Agent** 处于用户激增、功能大爆发的阶段，但随之而来的是体验割裂（如 Hermes 的 Windows 弹窗闪烁）与严重的稳定性债务。
* **质量收敛，蓄力发版期**：**NanoBot**、**IronClaw** 和 **LobsterAI** 正在进行大规模的底层重构与积压代码清理，添加严格的单元测试与 E2E 覆盖，为下一个重要的稳定版（v0.9.0 或 v0.2.3）做代码冻结。
* **架构演进，探索边界期**：**ZeroClaw** 正在重构底层的插件模型（转向 WASM 组件模型），并探讨 SLSA 等前沿安全规范，属于生态中架构最前沿的探路者。

## 7. 值得关注的趋势信号
开发者与终端用户的真实痛点，揭示了未来 3-6 个月 AI 智能体演进的必然趋势，对开发者具有极高的参考价值：
1. **“静默失败”是信任的头号杀手**：无论是 Cron 定时任务中 LLM 的“伪造结果”（OpenClaw #49876），还是数据备份导致的进程卡死（LobsterAI #2214），智能体在遇到工具调用失败时，**决不能保持沉默或伪造输出**。引入“澄清提问”机制（如 NanoBot 的 `ask_clarification`）与可靠的错误重试恢复链路是刚需。
2. **记忆治理与上下文 Token 成本控制**：系统提示词的无限膨胀会瞬间击穿 Token 预算（ZeroClaw #5808）。未来的系统必须具备**上下文元数据治理能力**（OpenClaw #35203），例如根据易失性对上下文分级，并在长对话中主动进行前置记忆刷盘与缓存断点优化（NanoBot #4371）。
3. **全自治模式的安全边界**：将“始终允许符合条件的工具”设为默认（IronClaw #5364）反映了用户对高自动化产能的渴望。但伴随着 Shell 权限的下放，如何通过沙箱（WASM）、审计拦截以及目标模式的安全预算控制，将是决定 Agent 能否真正接手生产环境工作流的前提。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报
**报告日期**: 2026-06-28 | **数据周期**: 过去 24 小时
**项目仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览
NanoBot 今日保持了极高的开发活跃度，项目正处于**集中修错与底层重构**的高产阶段。过去 24 小时内，项目处理了高达 46 个 PR（其中合并/关闭 29 个），并关闭了 7 个 Issue，展现出维护团队极强的代码审查与问题消化能力。今日的焦点主要集中在**核心安全漏洞的紧急拦截**、**执行器底层的稳健性增强**以及**大语言模型接口的兼容性修复**。整体来看，项目健康度优秀，代码迭代正在为下一个大版本发布蓄力。

---

## 2. 版本发布
**本日无新版本发布 (0 Releases)。** 
*注：结合今日大量合并的修复类 PR，预计项目正在为下一个minor或patch版本（如 v0.2.3）进行代码冻结和测试准备。*

---

## 3. 项目进展
今日共有 29 个 PR 被合并或关闭，大幅推进了项目的稳定性与功能广度，重点进展如下：

*   🔒 **安全性加固与执行器修复**
    *   修复了命令执行器的安全绕过问题：`exec.allowPatterns` 此前由于仅检查前缀，导致可通过 `&&` 链式执行恶意命令，现已通过按段落分割验证修复（[PR #4562](https://github.com/HKUDS/nanobot/pull/4562)）。对应的底层 Issue ([#4521](https://github.com/HKUDS/nanobot/issues/4521), [#4518](https://github.com/HKUDS/nanobot/issues/4518)) 已关闭。
*   🧠 **AI Agent 核心循环与多模型兼容性**
    *   修复了 Anthropic 提供商未验证 `type` 字段的问题（[PR #4532](https://github.com/HKUDS/nanobot/pull/4532)）。
    *   修复了 OpenAI 兼容接口非流式解析器中工具调用 ID 重复的隐患（[PR #4530](https://github.com/HKUDS/nanobot/pull/4530)）。
    *   优化了流式响应合并机制，引入 `_stream_id` 防止同聊天框内多并发流的交叉污染（[PR #4531](https://github.com/HKUDS/nanobot/pull/4531)）。
*   ⚡ **性能与架构提升**
    *   **信任并行工具调用**：当 LLM 返回多个工具调用时，系统不再按类串行执行，而是信任模型判断并发执行，大幅降低 Agent 响应延迟（[PR #4557](https://github.com/HKUDS/nanobot/pull/4557)）。
    *   **引入轻量级插件系统**：通过加载 `plugin.json` 清单文件支持外部工具与技能扩展（[PR #4558](https://github.com/HKUDS/nanobot/pull/4558)）。

---

## 4. 社区热点
今日社区最关注的话题围绕**环境依赖、UI 状态同步**以及**定时任务的静默执行**展开：

*   **[Issue #660] [CLOSED] [👍: 5]** - 关于项目自称“超轻量”却强依赖 Node.js 与 Python 的讨论。
    *   **诉求分析**：用户对个人 AI 助手的资源占用非常敏感，期望 Docker 镜像能做到极简。该历史遗留讨论于今日正式关闭，推测底层重构已将其依赖剥离或给出了解决方案。（[链接](https://github.com/HKUDS/nanobot/issues/660)）
*   **[Issue #4500] [OPEN]** - WebUI 在自我重启后流式响应卡死，停止按钮失效。
    *   **诉求分析**：WebUI 是用户交互的核心，Agent 重启时的生命周期管理与前端 WebSocket 状态同步存在脱节，亟待前端状态机重构。（[链接](https://github.com/HKUDS/nanobot/issues/4500)）
*   **[PR #4225 / #4357] [CLOSED]** - 定时任务的静默执行。
    *   **诉求分析**：开发者社区希望将 NanoBot 作为后台监控代理使用。目前的 Cron 每次执行必定回复，打扰过度。合并相关 PR 后，后台监控任务将变得更加“乖巧”，仅在触发条件时才通知用户。

---

## 5. Bug 与稳定性
今日报告并追踪的 Bug 主要集中在底层逻辑与会话管理，按严重程度排列如下：

1.  **[严重/Critical] `exec.allowPatterns` 链式命令绕过** ([Issue #4521](https://github.com/HKUDS/nanobot/issues/4521) - 已关闭)
    *   **状态**: 已在 [PR #4562](https://github.com/HKUDS/nanobot/pull/4562) 修复。
    *   **详情**: 安全沙箱失效问题，允许 LLM 生成特定前缀结合 `&&` 绕过白名单执行危险命令。
2.  **[高/High] WebUI 自重启导致任务状态卡死** ([Issue #4500](https://github.com/HKUDS/nanobot/issues/4500) - 待处理)
    *   **状态**: 尚无修复 PR。
    *   **详情**: 后台任务重启导致前端无限“处理中”，用户失去控制权。
3.  **[中/Medium] 会话键在磁盘上发生碰撞** ([Issue #4057](https://github.com/HKUDS/nanobot/issues/4057) - 已关闭)
    *   **状态**: 已在 [PR #4533](https://github.com/HKUDS/nanobot/pull/4533) 修复。
    *   **详情**: 诸如 `telegram:a_b` 和 `telegram:a:b` 经文件名清洗后映射为同一文件，导致会话历史覆盖。
4.  **[低/Low] 不稳定测试** ([PR #4523](https://github.com/HKUDS/nanobot/pull/4523) - 已关闭)
    *   **状态**: 已修复。
    *   **详情**: 现代文件系统亚毫秒级的 `mtime` 一致性导致历史修剪测试随机失败。

---

## 6. 功能请求与路线图信号
结合今日开放或合并的 PR，可以明确 NanoBot 未来版本的演进方向：

*   **多模型动态切换**：正在引入 Per-session model preset 功能，允许用户针对不同对话上下文使用不同的 AI 模型（[PR #4555](https://github.com/HKUDS/nanobot/pull/4555)）。**纳入下版本概率：极高。**
*   **记忆系统增强**：为避免幻觉，给 Dream 模块添加了写入保护，阻止创建重复技能目录（[PR #4554](https://github.com/HKUDS/nanobot/pull/4554)），并支持了模型覆盖配置（[PR #4556](https://github.com/HKUDS/nanobot/pull/4556)）。
*   **澄清机制**：新增 `ask_clarification` 工具，当 Agent 遇到模糊指令时，会主动提出结构化问题，而非自行臆测执行（[PR #4527](https://github.com/HKUDS/nanobot/pull/4527)）。
*   **更广泛的接入能力**：正在集成 Serper.dev 作为新的网络搜索提供商（[PR #4406](https://github.com/HKUDS/nanobot/pull/4406)），并增强 WhatsApp 语音转录前的音频标准化处理（[PR #4353](https://github.com/HKUDS/nanobot/pull/4353)）。

---

## 7. 用户反馈摘要
通过对 Issue 和 PR 描述的挖掘，当前用户的真实反馈集中在以下几点：

*   **痛点 (部署与资源)**：用户普遍反映个人助手跑在边缘设备（如树莓派、NAS）上，对 Docker 镜像大小和多余运行时（Node.js）非常反感，追求纯粹的 Python 体验。
*   **痛点 (前端体验)**：WebSocket 断开或 Agent 逻辑重启时，前端缺乏重试或状态重置机制，导致用户以为程序死机。
*   **满意点 (可扩展性)**：开发者用户非常喜欢 NanoBot 的工具集成能力（如 Web 搜索、Cron 定时任务），并积极为社区贡献新的 Provider 和修复补丁。
*   **使用场景扩展**：用户不仅将其作为聊天机器人，还大量尝试作为后台自动化执行节点和定时监控助手。

---

## 8. 待处理积压
以下重要 PR/Issue 处于 Open 状态且涉及核心逻辑，需维护者优先 Review：

*   ⚠️ **[PR #4534] feat(agent): add verification gates and provider recovery** ([链接](https://github.com/HKUDS/nanobot/pull/4534))
    *   *理由*: 此 PR 为 Agent 循环添加了可靠性层与验证门，涉及底层执行架构的重大变更，对减少 Agent 幻觉至关重要。
*   ⚠️ **[Issue #4500] WebUI self-restart leaves stuck streaming** ([链接](https://github.com/HKUDS/nanobot/issues/4500))
    *   *理由*: 直接影响核心 Web UI 用户体验的 Blocker 级别 Bug，目前尚无对应 Fix PR。
*   ⚠️ **[PR #4371] fix(cache): add breakpoint before Recent History** ([链接](https://github.com/HKUDS/nanobot/pull/4371))
    *   *理由*: 通过优化 Prompt 结构增加缓存断点，能大幅降低 API 调用时的重复 Token 计费，对节省用户成本有直接帮助，建议尽快验证合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent 开源项目动态日报**
**日期**: 2026-06-28
**数据来源**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 今日速览
过去 24 小时内，Hermes Agent 项目维持了极高的活跃度，共处理了 50 条 Issue 更新（44 条新开/活跃）和 50 条 PR 更新。**Windows 桌面端的用户体验（UX）是今日的绝对焦点**，控制台弹窗闪烁问题引发了大量反馈与修复尝试。同时，开发者社区在多平台网关接入（Discord, LINE）、本地模型（GLM/Qwen/DeepSeek）适配以及内存工具优化方面贡献了大量高质量 PR。整体来看，项目正处于快速迭代的爬坡期，新功能引入与存量 Bug 修复（尤其是跨平台稳定性）同步密集进行。

### 2. 版本发布
**无新版本发布。** (当前 Desktop 版本推测停留在 v0.17.0，CLI 版本 v0.15.x，社区正密集筹备下一版本的跨平台稳定性更新)。

### 3. 项目进展
今日合并不明显（共 11 个 PR 被合并或关闭），但提交了 39 个待合并 PR，显示出强劲的开发势头，重点集中在以下几个方面：
*   **桌面端与网关体验优化**：引入了原生移动端外壳（[PR #52673](https://github.com/NousResearch/hermes-agent/pull/52673)），并改进了 Discord 繁忙会话的控制体验（[PR #53842](https://github.com/NousResearch/hermes-agent/pull/53842)）。
*   **跨模型兼容性修复**：针对 GLM/Qwen/DeepSeek 模型的工具调用失败问题注入了执行引导（[PR #53847](https://github.com/NousResearch/hermes-agent/pull/53847)）。
*   **多平台消息处理改善**：LINE 适配器加入了观察模式和提及门控（[PR #43445](https://github.com/NousResearch/hermes-agent/pull/43445)），修复了 Slack 挂载卡片超长导致更新失败的问题（[PR #53701](https://github.com/NousResearch/hermes-agent/pull/53701)）。
*   **凭证池计费调度**：OpenCode 达到月度用量限制时将自动轮换凭证池（[PR #53843](https://github.com/NousResearch/hermes-agent/pull/53843)）。

### 4. 社区热点
今日讨论度最高的问题反映了用户在**视觉体验**与**IM 平台集成**上的强烈诉求：
*   **仪表盘主题可读性差**（[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)，🔥 44 赞，25 评论）：用户集中吐槽当前默认字体（衬线体）、对比度低导致阅读困难，呼吁重构 UI 主题系统。
*   **自建技能缺乏正确性保证**（[Issue #25833](https://github.com/NousResearch/hermes-agent/issues/25833)，7 评论）：核心开发者关注 Agent 自动创建 Skill 后的执行一致性缺乏底层机制保障。
*   **消息平台命令冲突**（[Issue #12688](https://github.com/NousResearch/hermes-agent/issues/12688) 与 [Issue #25184](https://github.com/NousResearch/hermes-agent/issues/25184)）：Matrix 和 Mattermost 移动端拦截了带有 `/` 前缀的命令，社区呼吁允许自定义网关命令前缀。

### 5. Bug 与稳定性
Windows 平台的稳定性问题呈爆发趋势，已吸引核心团队提交多个修复 PR：

*   **[P1 严重] Windows 终端/CMD 窗口持续闪烁**
    *   **表现**: 每次执行工具调用、甚至执行定时任务时，cmd.exe 黑框不断弹出抢夺焦点，严重破坏体验（[Issue #53273](https://github.com/NousResearch/hermes-agent/issues/53273), [Issue #53016](https://github.com/NousResearch/hermes-agent/issues/53016), [Issue #42544](https://github.com/NousResearch/hermes-agent/issues/42544)）。
    *   **状态**: 根因在于 `gh auth token` 和 `git` 探针未正确隐藏窗口，已有修复 PR 待合并（[PR #53844](https://github.com/NousResearch/hermes-agent/pull/53844), [PR #53123](https://github.com/NousResearch/hermes-agent/pull/53123)）。
*   **[P2 危险] Telegram 上下文压缩导致消息"消失"**
    *   **表现**: 会话压缩时，用户历史消息在界面上被直接抹除，引发严重恐慌（[Issue #40416](https://github.com/NousResearch/hermes-agent/issues/40416)）。
*   **[P2 危险] Playwright Chromium 安装卡死**
    *   **表现**: 在 Ubuntu/Warp 终端中，安装依赖时无响应且无法通过 Ctrl+C 中断（[Issue #35166](https://github.com/NousResearch/hermes-agent/issues/35166)）。
*   **[P2 危险] 会话状态丢失与大请求 502 错误**
    *   **表现**: 恢复会话时可能丢失进行中的工具循环状态；大体量网关请求触发 Cloudflare 502 而未被压缩截断（[Issue #51089](https://github.com/NousResearch/hermes-agent/issues/51089), [Issue #53771](https://github.com/NousResearch/hermes-agent/issues/53771)）。

### 6. 功能请求与路线图信号
从近期的 Feature Request 和社区提交的 PR 来看，项目接下来的演进路线图信号清晰：
*   **多后端与工作流整合**：强烈请求桌面端同时连接本地与远程后端（[Issue #37876](https://github.com/NousResearch/hermes-agent/issues/37876)），并将多 Agent 协同的 Kanban 看板原生集成到桌面应用中（[Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222)）。
*   **本地/开源自定义化**：暴露 ACP（外部进程模型后端）的一等扩展能力（[Issue #53769](https://github.com/NousResearch/hermes-agent/issues/53769)），印证了项目对非 OpenAI 系模型（如 GLM, Qwen）的包容性策略。
*   **安全与审计**：用户希望引入危险命令自定义拦截（[Issue #5528](https://github.com/NousResearch/hermes-agent/issues/5528)）以及事实核查与引用源展示机制（[Issue #26742](https://github.com/NousResearch/hermes-agent/issues/26742), [Issue #28289](https://github.com/NousResearch/hermes-agent/issues/28289)）。

### 7. 用户反馈摘要
*   **痛点 1：Windows 体验割裂**。多名用户反馈桌面端在 Windows 上运行不够优雅，后台进程对前台干扰极大。
*   **痛点 2：记忆系统难以驾驭**。用户指出内存工具缺乏 `read` 检查机制，满了之后报错模糊；且历史记录语义搜索能力太弱（"完全匹配词才能搜到历史" - [Issue #44075](https://github.com/NousResearch/hermes-agent/issues/44075)）。同时发现非 UTF-8 编码的历史文件会导致工具直接崩溃（[Issue #53833](https://github.com/NousResearch/hermes-agent/issues/53833)）。
*   **好评：高自由度与自动化**。用户非常认可 Agent 的自定义技能循环（auto-creation loop）和定时任务能力，但在复杂 Cron 状态下存在文件校验缺失的小瑕疵（[PR #53723](https://github.com/NousResearch/hermes-agent/pull/53723) 修复了假文件路径问题）。

### 8. 待处理积压
以下重要 Issue 创建时间较早但今日才重现活跃迹象，建议维护者优先排期：
*   **[Issue #40187](https://github.com/NousResearch/hermes-agent/issues/40187)** (创建于 06-06)：macOS 桌面端应用在 `hermes update` 最后阶段编译 Electron 失败，阻塞了 Mac 用户的更新。
*   **[Issue #12938](https://github.com/NousResearch/hermes-agent/issues/12938)** (创建于 04-20)：MacOS 下本地终端后端执行 `crontab -l` 返回与用户真实 Shell 不一致的结果，涉及潜在的权限与沙箱隔离边界问题，悬而未决近两个月。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**报告日期**: 2026-06-28  
**项目定位**: AI 智能体与个人 AI 助手开源生态  
**数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 📈 今日速览
PicoClaw 在过去 24 小时内保持**高度活跃**的开发与维护状态。社区今日发起了 **5 个全新的 Pull Requests**，核心聚焦于多通讯渠道扩展（Simplex、LINE）、底层稳定性修复以及工程规范化（国际化、Docker 升级）。同时，维护者今日成功关闭了 2 个历史遗留的 Issue 和 2 个过期的 PR，有效地控制了项目积压。虽然今日没有发布新版本，但大量累积的 Bug 修复与功能增强预示着项目正在为下一次迭代进行密集整合。

---

### 2. 🚀 版本发布
**本日无新版本发布 (0 个 Release)。** 
当前最新代码主要围绕 v0.2.6 版本进行补丁修复与新特性开发，预计近期可能会有新的补丁版或迭代版本发出。

---

### 3. 🛠️ 项目进展
今日共有 2 个 PR 被关闭/合并，且有 5 个高活跃度的新 PR 正在等待审核，项目在**多平台渠道接入**和**系统健壮性**方面迈出了坚实的一步：

*   **多渠道能力大扩充**：开发者 @dim 提交了全新的 Simplex 渠道类型支持 ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193))。结合此前对 LINE 渠道的修复，PicoClaw 正在显著扩大其作为个人 AI 助理的跨平台消息触达能力。
*   **代码质量与维护性提升**：开发者 @chengzhichao-xydt 今日极其活跃，一口气提交了 4 个改进 PR，包括：
    *   LINE 渠道响应体关闭错误的精准修复 ([PR #3189](https://github.com/sipeed/picoclaw/pull/3189))。
    *   Docker 基础镜像从 Alpine 3.21 向上升级至 3.23 ([PR #3192](https://github.com/sipeed/picoclaw/pull/3192))，提升构建安全性与时效性。
    *   国际化（i18n）孟加拉语与捷克语的翻译键值对齐 ([PR #3190](https://github.com/sipeed/picoclaw/pull/3190))。
    *   `.gitignore` 冗余配置清理 ([PR #3191](https://github.com/sipeed/picoclaw/pull/3191))。
*   **技术债务清理**：维护者主动关闭了已过期（stale）的 MCP 参数解析修复 PR ([PR #3048](https://github.com/sipeed/picoclaw/pull/3048))。

---

### 4. 🔥 社区热点
今日社区讨论与互动最密集的议题集中在**安全边界**与**跨平台兼容性**：

*   **Telegram 权限分级控制诉求** ([Issue #3114](https://github.com/sipeed/picoclaw/issues/3114))：
    该 Feature Request 获得了社区的高度共鸣。用户指出，当 PicoClaw 被加入 Telegram 群组时，缺乏对危险操作（如 `exec` 执行 shell 命令、文件修改删除等）的上下文感知。用户强烈呼吁项目引入“安全边界”，区分私聊（全量权限）、群组/频道（受限权限）。这反映出 PicoClaw 正在被更多团队用于群组场景，企业级/团队级权限隔离已成为核心痛点。
*   **Windows 路径解析顽疾** ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472))：
    由于 Windows 反斜杠 `\` 与 Go 语言 `fs.FS` 强制要求的正斜杠 `/` 不兼容，导致 `list_dir` 工具调用崩溃。该 Bug 历经数月终于在今日修复关闭，解决了 Windows 用户的切肤之痛。

---

### 5. 🐛 Bug 与稳定性
今日新报告了影响部分渠道网关运行的 Bug，整体系统核心未受动摇：

*   **🚨 [严重高] Matrix 加密消息处理失败** ([Issue #3194](https://github.com/sipeed/picoclaw/issues/3194))：
    *   **状态**：`OPEN` (暂无修复 PR)
    *   **详情**：在 picoclaw v0.2.4+ 版本中，网关模式下接收到 Matrix 加密消息时，报错 `Received encrypted message but crypto is not enabled` 并中断。考虑到 Matrix 协议以隐私和端到端加密为核心，此 Bug 严重阻碍了 PicoClaw 在高隐私诉求用户群体中的使用。
*   **🟡 [已修复] Windows 目录读取异常** ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472))：
    *   **状态**：`CLOSED`
    *   **详情**：核心 Agent 工具 `list_dir` 在 Windows 环境下因路径分隔符问题抛出 `invalid argument`。今日已被成功关闭，恢复了 Windows 环境的正常运作。

---

### 6. 🗺️ 功能请求与路线图信号
结合今日的 Issues 与 PR 趋势，可以洞察到 PicoClaw 下一步的演进方向：

1.  **通讯协议隐私化与去中心化**：Simplex 渠道 PR ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)) 的提交，加上用户对 Matrix 加密功能的支持诉求，释放出强烈信号——**PicoClaw 正在向去中心化、抗审查和强隐私保护的 IM 平台倾斜**。
2.  **群组协作与安全沙盒化**：Telegram 群组权限分级 ([Issue #3114](https://github.com/sipeed/picoclaw/issues/3114)) 如果能在后续版本被纳入，将标志着 PicoClaw 从“单点个人助手”向“团队协作 Agent”过渡。

---

### 7. 💬 用户反馈摘要
从今日的 Issue 描述与评论中，可以提炼出真实用户的画像与反馈：
*   **痛点 1：跨平台一致性体验差**。Windows 开发者饱受 Go 语言底层路径规则不兼容的折磨，即便是在 v0.2.6 版本依然存在 `invalid argument` 问题，让试图将开发环境迁移到 Windows 的用户感到沮丧。
*   **痛点 2：缺乏防“手贱”机制**。用户反馈中提到“如果配置宽松则是任何人都可以让机器人执行 shell 命令”，用户对于 AI Agent 在开放空间（如 TG 群）内拥有高危工具（`exec`、`write_file`）感到不安。
*   **痛点 3：隐私部署受挫**。选择 Matrix 作为通讯底座的用户非常看重加密，报错信息让用户感到自身的隐私通信被系统“拒之门外”。

---

### 8. ⏳ 待处理积压
系统维护机制正在发挥作用，但仍有需要核心团队关注的积压项：

*   **⚠️ 警惕新积压**：Matrix 加密问题 ([Issue #3194](https://github.com/sipeed/picoclaw/issues/3194)) 是今日刚暴露的致命问题，目前 0 评论，急需维护者确认是否是缺少 Crypto DB 配置引发的通病。
*   **🧹 陈年 PR 搁浅**：[@afjcjsbx](https://github.com/sipeed/picoclaw/pull/2937) 提交的 `Feat/agent collaboration`（多 Agent 协作总线）是一个重量级架构重构 PR（[PR #2937](https://github.com/sipeed/picoclaw/pull/2937)）。该 PR 创建于一个多月前，今日被标记为 `stale` 并关闭。建议核心团队评估该功能是否会在未来的路线图中以其他形式复活，因为“多 Agent 通信”是目前 AI 助手领域的高阶竞争力。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报**
**日期**: 2026-06-28 | **分析数据源**: GitHub 过去 24 小时活动数据

---

### 1. 今日速览
NanoClaw 在过去 24 小时内呈现出**高强度的代码贡献活跃度，但整体处于功能重构与积压消化期**。今日项目无新版本发布，且有高达 7 个 PR（均为待合并状态）处于活跃更新中。开发者的重心集中在核心容器（Container）运行机制的底层重构、提示词（Prompt）逻辑清理，以及针对 OpenCode 的新功能扩展。尽管没有新版本释出，但大量高质量、遵循规范的修复与功能 PR 介入，表明项目正处于下一个重要版本的密集筹备阶段。

### 2. 版本发布
*今日无新版本发布（Releases: 0）。*

### 3. 项目进展
今日虽然 **0 个 PR 被合并或关闭**，但有多项关键的代码库改进正在并行推进，整体代码库正在经历一轮深度优化：
*   **架构与冗余清理**：开发者 CutSnake01 集中发力，提交了多个重构/修复 PR。包括移除无效的 `/workspace/global` 挂载点 ([PR #2822](nanocoai/nanoclaw PR #2822))、移除会被宿主端在启动时反复删除的 `groups/global/CLAUDE.md` ([PR #2823](nanocoai/nanoclaw PR #2823))，以及从主提示词中剔除过时的 "Global Memory" 指令 ([PR #2824](nanocoai/nanoclaw PR #2824))。这批 PR 旨在收敛系统资源管理逻辑，减少不必要的 I/O 与状态错误。
*   **监控与可观测性**：开发者 grantland 引入了仪表盘推送功能（`dashboard-pusher`），支持定期收集 NanoClaw 状态快照并向外部服务器推送 ([PR #2871](nanocoai/nanoclaw PR #2871))，大幅提升了项目在生产环境下的可监控性。

### 4. 社区热点
今日社区最显著的技术讨论围绕**技能更新机制失效**与 **Signal 通道稳定性**展开：
*   **技能更新形同虚设**：[Issue #2868](nanocoai/nanoclaw Issue #2868) 报告了 `/update-skills` 对已安装的频道是“静默无操作”，根本无法刷新适配器代码与依赖。维护者或社区迅速响应，glifocat 已经提交了 [PR #2873](nanocoai/nanoclaw PR #2873) 试图解耦预检逻辑与凭据检查，以修复此问题。这反映出用户对“热更新/无损升级”能力的强烈诉求。
*   **Signal 连接稳定性**：bogdano2 提交了针对 `signal-cli` 启动抖动的修复 ([PR #2874](nanocoai/nanoclaw PR #2874))，以避免因信号端短暂的网络或服务波动导致 AI 容器陷入崩溃循环。消息通道底层的连接韧性是目前的重点优化方向。

### 5. Bug 与稳定性
根据今日数据，以下 Bug 与稳定性问题正待处理（按严重程度排序）：
*   **[严重] /update-skills 完全失效**：导致用户无法通过指令平滑升级已安装的频道适配器与依赖，直接中断了 CHANGELOG 中引导的迁移路径。**状态：已有 fix PR ([#2873](nanocoai/nanoclaw PR #2873)) 正在审核。**
*   **[高] signal-cli 崩溃循环 (Crash-looping)**：在遇到启动抖动时，缺乏重试与容错机制导致系统直接崩溃。**状态：已有 fix PR ([#2874](nanocoai/nanoclaw PR #2874)) 提交修复。**
*   **[中] 启动期无效文件操作与指令冲突**：宿主端每次启动都尝试删除特定的 `CLAUDE.md`，同时主提示词中包含无效的 Global Memory 指令，造成资源浪费与潜在的 Prompt 污染。**状态：已有多个 fix PR ([#2823](nanocoai/nanoclaw PR #2823), [#2824](nanocoai/nanoclaw PR #2824))。**

### 6. 功能请求与路线图信号
从目前的 PR 列表中，我们可以清晰洞察到 NanoClaw 的下一步演进路线图信号：
*   **多模型群组路由（Model Override）**：开发者 grantland 提交了 [PR #2872](nanocoai/nanoclaw PR #2872)，允许通过读取配置，在不同的 OpenCode 智能体群组中注入并运行不同的大语言模型。这预示着 NanoClaw 正向**多模型协同/异构计算集群**方向演进。
*   **原生可观测性**：Dashboard pusher ([PR #2871](nanocoai/nanoclaw PR #2871)) 的加入，暗示项目正在为规模化生产部署准备配套的监控基础设施（结合生态中的 `@nanoco/nanoclaw-dashboard`）。

### 7. 用户反馈摘要
从近期 Issue 和 PR 的动机中提炼出现阶段真实用户的痛点与场景：
*   **痛点 1：版本迁移成本高**。用户（如 glifocat）极度依赖平滑的 `/update-skills` 来同步大版本（如 4.29+）的更改，当发现该命令只是“假装执行”时非常受挫。
*   **痛点 2：IM 通道断连焦虑**。基于 Signal 等第三方或不稳定协议构建的 Agent 通道，极易因为底层服务重启而彻底瘫痪，用户迫切需要更健壮的容错机制（如 PR #2874 解决方案）。
*   **痛点 3：环境部署碎片化**。多模型混用（例如在一个 Agent 系统中，A组用 Claude，B组用本地模型）是真实的高阶使用场景，用户需要能从容器层面直接配置不同 Agent 群组的底层模型。

### 8. 待处理积压
⚠️ **注意：今日项目存在明显的 Review 积压风险。**
目前有高达 **7 个 Pending PRs**，其中既包含针对高危 Bug 的紧急修复，也包含核心重构。特别是来自 6 月 20 日的 CutSnake01 的系列重构 PR（[#2822](nanocoai/nanoclaw PR #2822), [#2823](nanocoai/nanoclaw PR #2823), [#2824](nanocoai/nanoclaw PR #2824)）已在社区挂起超过一周且于今日被重新激活。
**建议**：维护团队应优先进行一批 Code Review 与合并验证，尤其是 #2873 与 #2874 这两个直接关乎系统能否正常运转和升级的修复 PR，以推动下一版本的顺利发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**报告日期**: 2026-06-28
**数据来源**: [NullClaw GitHub Repository](https://github.com/nullclaw/nullclaw)

---

### 1. 今日速览
NullClaw 项目在过去 24 小时内整体代码层面的活跃度处于低位，未观测到新的 Pull Requests 提交、代码合并或版本发布。然而，社区互动保持了一定的粘性，一条历史 Bug 报告引发了新的讨论。从整体健康度来看，项目当前正处于功能迭代或维护的平稳/沉寂期，开发推进速度较缓，但在移动端及边缘场景的受众仍有持续的问题反馈。

### 2. 版本发布
* **过去 24 小时内无新版本发布。** (当前文档显示最新标签约为 `v2026.4.17`)

### 3. 项目进展
* 今日 **无 PR 被合并或关闭**。
* 今日 **无 Issue 被关闭**。
项目近期在核心代码库的推进上缺乏明显动作。结合 4 月份的版本标签，项目可能面临维护者精力受限或正在进行底层大型重构的阶段。建议社区关注后续的代码提交动态。

### 4. 社区热点
今日唯一的热点集中在以下移动端构建障碍的讨论中：
* **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868) [bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat**
  * **活跃表现**: 该 Issue 创建于近两个月前，于昨日（06-27）产生了新的评论互动，目前累计评论数已达 4 条。
  * **背后诉求**: 用户在尝试将 NullClaw 引入到移动端/边缘计算场景（通过 Android Termux 环境）时，遭遇了文件系统权限和链接问题。这反映出部分开发者群体对于 NullClaw 在跨平台（特别是移动 aarch64 架构）上的轻量化部署有着强烈需求。

### 5. Bug 与稳定性
今日无新增 Bug 报告。历史重点 Bug 追踪如下：
* **🔴 [高] 移动端构建失败 ([Issue #868](https://github.com/nullclaw/nullclaw/issues/868))**
  * **症状**: 在 Android/Termux (aarch64) 环境下执行 `zig build -Doptimize=ReleaseSmall` 时，系统抛出 `AccessDenied` 错误，具体卡在 `options.zig` 的 `linkat` 操作上。
  * **环境**: Android (LineageOS 22.2) / Termux / Zig 0.16.0 / Nullclaw v2026.4.17。
  * **当前状态**: 仍未解决，暂无对应的修复 PR (fix PR) 提交。该问题阻断了所有 Android 平台用户的自构建路径。

### 6. 功能请求与路线图信号
* 今日无新的功能请求。
* **隐性路线图信号**: 通过 Issue #868 可以看出，社区正在尝试将基于 Zig 构建的 NullClaw 推向 Android 环境。若项目未来的路线图包含“拓展移动端/物联网生态”，则修复 Termux 兼容性、支持交叉编译或放宽特定文件系统的权限操作将成为必须跨越的里程碑。

### 7. 用户反馈摘要
从 Issue #868 及其评论中，可以提炼出以下真实用户反馈：
* **痛点**: 交叉编译体验不佳。用户希望在常用的安卓设备（如 Redmi Note 9）上直接拉取代码进行原生构建，但 Zig 的构建系统在 Termux 这种非标准 Linux 环境下暴露了底层文件系统（如 `linkat` 硬链接机制）的兼容性缺陷。
* **使用场景**: 在无 PC 环境下，利用安卓手机进行 AI 智能体相关依赖的轻量化（`ReleaseSmall`）编译、测试或直接部署运行。
* **情绪状态**: 用户具有一定的耐心（Issue 存活 2 个月并有持续评论），但由于迟迟未见官方提供修复方案，可能会逐渐流失至其他对移动端支持更好的替代方案。

### 8. 待处理积压
⚠️ **提醒维护者关注**：
* **[Issue #868](https://github.com/nullclaw/nullclaw/issues/868)**: 此 Issue 自 2026-04-23 创建至今已逾两个月，期间产生了 4 条讨论，但未见项目维护者提供明确的修复时间表或 Workaround（临时解决方案）。建议优先审阅此 Bug，或引导社区用户通过调整 Termux 权限（如 `termux-fix-shebang` 或关闭沙盒）来暂时绕过该问题。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

这里是为您生成的 IronClaw 项目 2026-06-28 动态日报。报告基于过去 24 小时的开源数据，从开发进度、稳定性、社区诉求等维度进行了深度分析。

---

# 📊 IronClaw 项目动态日报 (2026-06-28)

## 1. 今日速览
IronClaw 项目今日保持**极高的研发活跃度**，单日代码合并与审查频率达到高峰。过去 24 小时内共有 50 个 PR 发生状态流转（17 个被合并或关闭），且核心团队集中推送了大量针对 **Reborn WebUI v2** 的功能完善、端到端测试框架搭建以及 LLM 交互底层机制的重构。
同时，社区端暴露出当前 **`local-dev` 与 `hosted-single-tenant` 部署环境中的诸多痛点**，特别是 OAuth 授权回调与 Token 刷新缺陷引起了开发者的关注，但核心团队响应迅速，相关修复已在今日合并。整体来看，项目正处于新版 WebUI 发布前的密集收敛与质量加固阶段。

## 2. 版本发布
*今日暂无正式版本发布。*

**即将到来的版本变更信号：**
虽然今日无新 Release，但自动发版机器人的 Chore PR 揭示了下个版本的破坏性变更：
*   [PR #5311](https://github.com/nearai/ironclaw/pull/5311) 显示，核心依赖即将迎来自 `0.24.0` 至 `0.29.1` 的大版本跃迁。
*   **⚠️ 破坏性变更 (API breaking changes)**：涉及 `ironclaw_common` (0.4.2 -> 0.5.0) 和 `ironclaw_skills` (0.3.0 -> 0.4.0)，第三方插件或二次开发者需关注 API 兼容性。

## 3. 项目进展
今日共有 17 个 PR 被合并/关闭，项目在**智能体工作区结构化存储、LLM 接口规范化、WebUI 功能修复**方面取得了重大进展：

*   **🚀 核心架构与功能跃迁：**
    *   [PR #1937](https://github.com/nearai/ironclaw/pull/1937) **合并**：引入面向智能体工作区的「结构化集合」类型化 CRUD 工具，解决了智能体无法优雅更新现有文档（如购物清单）的痛点，大幅提升工作区记忆与整理能力。
    *   [PR #5099](https://github.com/nearai/ironclaw/pull/5099) **合并**：完成 OpenAI 兼容的 Responses 外部工具往返调用（Phase 4b-4f），支持将暂存的工具调用作为 `function_call` 暴露并恢复执行。
*   **🧹 LLM 底层优化：**
    *   [PR #2196](https://github.com/nearai/ironclaw/pull/2196) **合并**：新增 `CleaningProvider` 装饰器，自动剥离 LLM 输出中的 `<think>`/`<thinking>` 标签，防止未闭合的工具调用标签破坏解析。
    *   [PR #2294](https://github.com/nearai/ironclaw/pull/2294) **合并**：在 LLM 请求元数据中添加稳定的 `conversation_id`，使得有状态的 OpenAI 兼容后端能够基于会话而非短暂的线程 ID 进行路由。
*   **🛠 WebUI v2 修复与回归测试：**
    *   [PR #5379](https://github.com/nearai/ironclaw/pull/5379) **合并**：修复了在本地开发和单租户托管环境下，OAuth 令牌刷新失败导致每小时需要重新鉴权的问题。
    *   [PR #5382](https://github.com/nearai/ironclaw/pull/5382) **关闭/修复**：修复了由 PR #5346 引入的托管卷运行时启动回归问题。

## 4. 社区热点
今日讨论与反馈最密集的点集中在**多渠道接入体验**与**智能体自动化执行权限**：

*   🔥 **[Issue #5368](https://github.com/nearai/ironclaw/issues/5368)**: `[reborn-webui] Wire non-Slack channel personal pairing end-to-end`
    *   **分析**：开发者正在推进 Reborn WebUI 的多渠道接入，目前除了 Slack 外，其他非 Slack 渠道的配对脚手架已就绪但尚未实现端到端支持。社区对于将 IronClaw 接入更广泛的消息通道抱有很高期待。
*   🔥 **[Issue #5364](https://github.com/nearai/ironclaw/issues/5364)** `[CLOSED]`: `Make "Always allow eligible tools" the default`
    *   **分析**：用户强烈要求将“始终允许符合条件的工具”开关默认设置为开启（ON）。背后的诉求是，当前每次工具调用都弹窗审批极大拖慢了工作流，用户期望 AI 助手具备更高的自主执行权。

## 5. Bug 与稳定性
今日报告并处理的 Bug 高度集中在 `hosted-single-tenant` (Railway 部署) 及本地运行环境，核心影响授权与基础功能：

1.  **[严重] Google OAuth 每小时强制重新鉴权**
    *   **问题**：[Issue #5378](https://github.com/nearai/ironclaw/issues/5378) 报告在 Railway 或 local-dev 模式下，Google 全家桶（Gmail, Calendar, Drive）由于 Token 无法按需刷新，导致每小时必定断开连接。
    *   **状态**：✅ 已有修复 [PR #5379](https://github.com/nearai/ironclaw/pull/5379) 并于今日合并。
2.  **[中等] Notion OAuth 在 Railway 部署中重定向至 localhost**
    *   **问题**：[Issue #4928](https://github.com/nearai/ironclaw/issues/4928) 指出 Notion MCP 授权在本地正常，但在云端部署时生成了用户无法访问的 localhost 回调 URL。
    *   **状态**：✅ Issue 已关闭。
3.  **[低] WebUI 日历事件发现失败**
    *   **问题**：Reborn 无法有效抓取未来的 Google 日历事件。
    *   **状态**：✅ 通过 [PR #5363](https://github.com/nearai/ironclaw/pull/5363) 优化了默认参数（如 `singleEvents=true` 和按开始时间排序）解决。

## 6. 功能请求与路线图信号
从当前活跃的待合并 PR 中，可以清晰看出近期项目迭代的重点路线（**Reborn WebUI 质量与自动化**）：

*   **完善错误恢复机制**：[PR #4841](https://github.com/nearai/ironclaw/pull/4841) 致力于消除导致运行中断的致命错误，未来的目标是“除安全相关错误外，所有错误均可被解释或重试恢复”。配套的审计文档见 [PR #5383](https://github.com/nearai/ironclaw/pull/5383)。
*   **构建强大的 E2E 测试矩阵**：为了保障 WebUI 稳定性，核心成员正在推进 [PR #5381](https://github.com/nearai/ironclaw/pull/5381)（集成测试框架）、[PR #5354](https://github.com/nearai/ironclaw/pull/5354)（Live QA 金丝雀监控）以及 [PR #5380](https://github.com/nearai/ironclaw/pull/5380)（QA 矩阵覆盖）。这预示着下个大版本将具备企业级的可靠性。

## 7. 用户反馈摘要
通过对今日 Issues 与 PR 描述的深度分析，提炼出 IronClaw 真实用户的三大核心反馈：

*   **痛点 1：自动化被打断极其恼火**。用户在使用 AI 助手时，反感频繁的工具调用审批弹窗（Issue #5364），他们渴望一个“设定好就放手去干”的智能体。
*   **痛点 2：托管部署配置存在隐形深坑**。多位开发者在尝试将 IronClaw 部署到 Railway 或进行本地开发时，踩到了 OAuth 回调、Token 刷新的坑（Issue #5378, #4928）。这表明当前的“开箱即用”体验在非默认托管环境下还有较大缺失。
*   **痛点 3：智能体缺乏持久且结构化的记忆**。（PR #1937 摘要提及）用户抱怨 AI 每次都会新建重复的文件而不是更新现有清单。这说明在个人助手场景下，Agent 对工作区内结构化数据的 CRUD 操作是刚需。

## 8. 待处理积压
以下重要的自动化流水线或核心重构任务长期 Open，需要引起维护团队关注：

*   ⚠️ **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E failed**: 由 Github Action 报告的夜间端到端测试在 `extensions` 模块持续失败。考虑到目前团队正在大张旗鼓地重构 E2E 测试矩阵（见第6节），此问题有望在近期被顺带解决。
*   ⚠️ **[PR #5271](https://github.com/nearai/ironclaw/pull/5271) - 大规模依赖升级积压**: 标记为 `risk: high`，涉及多达 45 个包的统一升级（包括 rustls 等底层库），涉及面极广，由于兼容性原因一直处于积压状态。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这份日报基于 LobsterAI 2026-06-28 的 GitHub 活动数据生成，旨在客观反映项目的当前状态、社区动态与健康度。

---

# 🦞 LobsterAI 项目动态日报 (2026-06-28)

### 1. 今日速览
过去 24 小时内，LobsterAI 代码仓库迎来了**较大规模的 PR 清理与合并**（共处理 8 个 PR，其中 7 个被关闭/合并），主要集中在底层网关稳定性、MCP 协议支持、定时任务管理及国际化等核心模块的优化。然而，社区端今日报告了 2 个**阻断级别的高严重性 Bug**（特别是桌面端数据备份导致的进程卡死），对重度用户的数据安全构成了直接威胁。总体而言，项目开发端正在积极推进历史积压代码的流转，但在桌面端关键路径的稳定性测试上需要加强。今日无新版本发布。

### 2. 版本发布
* **今日无新版本发布**。

### 3. 项目进展
今日项目重点推进了历史 PR 的审查与清理（标记为 `[stale]` 或近期活跃），主要进展包括：
* **网关与协议底座修复**：
  * 关闭了关于 OpenClaw 网关反复启动失败导致无限重启循环的修复 PR（[#1446](https://github.com/netease-youdao/LobsterAI/pull/1446)），提升了 Agent 引擎底层的稳定性。
  * 推进了增加对 SSE 和流式 HTTP 的 MCP 支持的修复 PR（[#1001](https://github.com/netease-youdao/LobsterAI/pull/1001)），进一步完善了工具协议的兼容性。
* **交互与体验优化**：
  * 推进了定时任务多次执行记录折叠分组展示的 PR（[#1449](https://github.com/netease-youdao/LobsterAI/pull/1449)），解决了历史会话堆积导致界面混乱的问题。
  * 处理了快捷键设置缺少重复检测的问题（[#1456](https://github.com/netease-youdao/LobsterAI/pull/1456)），增强了设置模块的健壮性。
  * 推进了国际化（i18n）修复，解决 Agent 设置页面部分文案硬编码英文的问题（[#1448](https://github.com/netease-youdao/LobsterAI/pull/1448)）。
* **核心逻辑解耦**：
  * 目前仍有 1 个待合并的 PR 正在推进：使用短 UUID 替代名称生成 Agent ID（[#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) [OPEN]），这将从根本上解决删除同名 Agent 导致“旧数据复活”的严重逻辑漏洞。

### 4. 社区热点
今日社区最关注的焦点集中在**重度使用场景下的系统可用性**。
* [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215)：用户 `woxinsjw` 详细记录了极其详尽的排错过程。用户为了解决 `Resource extraction failed` 错误，不仅进行了日志深度分析、关闭安全软件，甚至手动解包分析了 NSIS 安装程序，最终发现是多磁盘路径（C盘与G盘）冲突导致。这表明 LobsterAI 的用户群体具备极强的技术背景，但也侧面反映出安装程序在复杂磁盘环境下的兼容性不足。
* [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)：关于数据备份卡死的问题引发了高度关注。当面临高频使用（SQLite 达 71.6 MB 且 WAL 频繁写入）时，备份功能会导致主进程 100% 卡死。这说明高频/重度用户对“平滑导出/备份”有强烈诉求，当前的单线程/同步阻塞设计已无法满足。

### 5. Bug 与稳定性
今日报告了 2 个严重级别极高的 Bug，目前均处于 `[OPEN]` 且无对应 fix PR 状态：
* **🔴 [严重] 桌面端数据备份导致主进程卡死**（[Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)）
  * **影响**：100% 可复现。在进行数据备份时，主窗口变白无响应，用户只能强制结束进程，可能导致数据损坏。
  * **原因分析**：疑似在 WAL 模式高频写入时，同步执行大体积 SQLite 备份引发了主进程 I/O 或计算阻塞。
* **🟠 [较高] 安装程序资源提取失败**（[Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215)）
  * **影响**：部分多硬盘/复杂环境用户无法正常安装或更新应用，退出码异常 `ERROR_BAD_ENVIRONMENT`。
  * **原因分析**：NSIS 安装包在路径寻找与提取逻辑上存在硬编码或环境变量识别缺陷。

### 6. 功能请求与路线图信号
结合今日的 Issue 与积压的 PR，可以洞察到项目接下来的演进方向：
* **数据生命周期管理重构**：从 [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 可以看出，团队正在意识到“删除 Agent 不彻底”带来的孤儿数据风险。将 ID 逻辑与名称解耦，是后续实现彻底清理本地文件、workspace 和 sessions 的前置信号。
* **复杂网络协议支持**：[PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) 表明项目正在积极适配 SSE 和流式 HTTP 的 MCP 协议，路线图明显在向更强大的外部工具链调用能力倾斜。
* **面向重度用户的会话管理**：[PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449) 对定时任务产生的海量历史记录进行折叠，说明产品正在从“能用”向“长期高频好用”演进，UI 架构开始适应复杂工作流。

### 7. 用户反馈摘要
* **痛点**：进程级卡死（Issue #2214）极大地伤害了用户对**本地数据安全**的信任感；复杂的安装失败（Issue #2215）消耗了用户极大的耐心。
* **使用场景**：有用户每天产生数百条消息，且依赖定时任务进行自动化运作，导致本地 SQLite 数据库膨胀极快。这类“自动化+高频”的场景对内存释放、数据库并发处理、UI 虚拟化渲染提出了严苛要求。
* **满意度**：尽管遇到严重 Bug，但用户表现出了极高的宽容度和参与感（如手动逆向分析安装包日志），证明产品核心价值（AI 智能体/自动化能力）对用户具有极高的粘性。

### 8. 待处理积压
* ⏳ **[PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) [OPEN]**: 「使用短 UUID 替代名称生成 Agent ID」已标记为 `stale`，但此修改对于解决底层数据冲突至关重要，建议维护者优先 review 并合并。
* ⏳ **[Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) & [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215)**: 今日爆发的两个高危 Bug 尚无修复动向，紧急程度极高，建议立即介入分配资源排查，防止影响即将发布的新版本口碑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📊 Moltis 项目动态日报
**报告日期**: 2026-06-28  
**数据来源**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. 📈 今日速览
过去 24 小时内，Moltis 项目整体活跃度呈**稳健上升**趋势，核心关注点高度聚焦于**AI 智能体的浏览器自动化能力与本地小模型兼容性**。今日共有 1 条 Issue 新开，3 条 PR 处于活跃状态（均为待合并），但暂无新版本发布或代码合并。开发重心明显集中在优化工具调用的鲁棒性上，多名贡献者正致力于解决本地小模型（如 Gemma 4 等）在输出严格 JSON 格式时的行为偏差，展现了项目对“端侧 AI 及私有化部署”场景的高度重视。

### 2. 🚀 版本发布
**本日无新版本发布（0 个 Release）。**

### 3. 🛠 项目进展
今日虽然没有 PR 被合并或关闭，但有 3 个关键的待合并 PR 正在积极推进，整体代码库正在向**“高容错、强可视化”**的方向迈进：
*   **底层调度容错性增强**：[PR #1136](https://github.com/moltis-org/moltis/pull/1136) 修复了由于小模型将标量参数输出为 JSON 字符串（如 `"true"`）导致的工具调用验证失败问题。该 PR 大幅提升了 Moltis 在接入轻量级本地模型时的鲁棒性，是打通“端侧 Agent 闭环”的关键一步。
*   **浏览器自动化能力扩充**：[PR #1135](https://github.com/moltis-org/moltis/pull/1135) 引入了一个极具实用价值的功能——在每次执行改变浏览器状态的操作后自动截图。这为前端的 AI 对话界面提供了一种“逐步操作可视化回放”的能力，大幅增强了 Agent 执行过程的可解释性和用户体验。

### 4. 🔥 社区热点
当前社区的技术讨论焦点几乎全部围绕**“如何让非头部大模型（尤其是本地/开源小模型）稳定驱动浏览器工具”**展开。
*   **最活跃领域：本地小模型工具调用适配**
    开发者 [@resumeparseeval](https://github.com/resumeparseeval) 连续提交了多个高质量 PR（如 #1136 和更新于今日的 #1098）。背后的核心诉求是：**Moltis 目前在处理严格 JSON Schema 时过于理想化**。真实世界中的开源模型（如 Gemma 4、oMLX）经常会输出 `null` 值或把布尔值/数字转为字符串。社区正在合力重构反序列化逻辑，使得 Moltis 能够成为真正“接地气”的本地化 AI 助手框架。

### 5. 🐛 Bug 与稳定性
今日新报告了 1 个 Bug，且属于系统边界限制问题：
*   📌 **[P1/Medium] Apple Container ID 超出名称限制**
    *   **链接**: [Issue #1137](https://github.com/moltis-org/moltis/issues/1137)
    *   **状态**: [OPEN] | 报告者: @holgzn
    *   **分析**: 该 Bug 暴露了 Moltis 在为 Apple 平台生成或映射容器实例 ID 时，可能未遵循 Apple 底层容器服务的字符长度限制。这会导致在 macOS 环境下特定容器的创建或调用直接失败。
    *   **修复进度**: 暂无针对此问题的 fix PR，需要核心维护者关注。

### 6. 🗺 功能请求与路线图信号
通过近期 PR 走向，我们可以清晰窥探出 Moltis 接下来短期的**路线图信号**：
1.  **全面拥抱本地化部署**：从 PR #1098 和 #1136 看，项目正在大规模进行兼容性适配，预计在下个版本中，Moltis 将能原生且稳定地支持基于 Ollama / MLX 等本地运行的小型模型作为 Agent 的大脑。
2.  **可观察性增强**：[PR #1135](https://github.com/moltis-org/moltis/pull/1135) 提示，Moltis 正在完善其前端可视化反馈机制。自动截图功能的加入，意味着未来 AI 执行网页爬取、自动化测试、网页操作时，用户能获得更强的安全感和控制感。

### 7. 💬 用户反馈摘要
结合 Issue 与 PR 的上下文，提炼出当前真实用户的两大核心痛点：
*   **“小模型太难伺候”**：开发者和私有化部署用户非常希望使用 Gemma 4 等小参数模型来节省成本和保护隐私，但这些模型在 API Payload 输出的规范性上较差（如输出多余字段、类型不匹配、显式输出 null）。用户迫切需要 Moltis 框架层来做“兜底容错”，而不是自己写代码预处理模型输出。
*   **“Agent 黑盒焦虑”**：用户在让 AI 控制浏览器时，缺乏对中间过程的感知。社区强烈呼吁能在每一步动作后有视觉反馈（如截图回传）。

### 8. ⏳ 待处理积压
以下 PR/Issue 需要引起核心团队的注意，防止长期挂起：
*   **[长期挂起 PR] [PR #1098](https://github.com/moltis-org/moltis/pull/1098)**
    *   *创建于*: 2026-06-03（已悬挂 25 天）
    *   *状态*: 于昨日（06-27）刚刚有更新，但未合并。该 PR 旨在解决浏览器工具可选参数为 null 的报错问题。建议维护者尽快 review 并与最新的 PR #1136 一起合并，因为这直接影响本地模型用户的核心体验。
*   **[新开高优 Issue] [Issue #1137](https://github.com/moltis-org/moltis/issues/1137)**
    *   Apple 环境的容器名称截断 Bug 刚刚被报告，虽然影响面可能有限，但会阻断特定 Apple 生态开发者的初始化流程，建议排期修复。

---
*分析师结语：Moltis 今日无 Release 并不意味着停滞，反而正处于大量底层容错逻辑（“脏活累活”）的积蓄期。项目正通过积极接纳开源小模型的容错处理，构建自身的差异化护城河。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 **CoPaw (agentscope-ai/CoPaw)** 项目 2026-06-28 动态日报：

### 1. 今日速览
CoPaw 项目今日整体呈现出**“底层测试加固”与“大模型兼容性攻坚”**并重的态势。过去 24 小时内项目保持着极高的活跃度，共产生 5 条 Issue 更新（4 被激活）和 16 条 PR 更新。从提交轨迹来看，核心开发团队与社区贡献者正大力推进前后端（特别是 Agentscope 2.0 架构下）的单元测试覆盖率，同时针对近期热门的 DeepSeek V4 模型兼容性及系统级稳定性（如对话断电丢失）问题展开了密集修复。当前有 15 个 PR 待合并，表明项目正处于下一个重要版本发布前的代码整合与质量验证期。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)。**
项目当前仍处于大量 PR 积压与代码审查阶段，推测团队正在为下一个大版本或迭代版本（ Sprint W1-W3 ）做代码冻结前的准备。

### 3. 项目进展
今日项目的显著进展主要集中在**测试覆盖率提升**与**框架破坏性变更修复**上，整体代码质量与健壮性向前迈进了一大步：
*   **测试覆盖全面提升：** 开发者 hanson-hex 连续提交/更新了多个测试 PR，包括后端 `app-infra` 层（[PR #5581](https://github.com/agentscope-ai/QwenPaw/pull/5581)）、前端 M2/M3 模块（[PR #5409](https://github.com/agentscope-ai/QwenPaw/pull/5409), [PR #5434](https://github.com/agentscope-ai/QwenPaw/pull/5434), [PR #5438](https://github.com/agentscope-ai/QwenPaw/pull/5438)）。这表明项目正在建立严格的契约测试，以防回归。
*   **修复 2.0 迁移阵痛：** 修复了由于 agentscope 1.x → 2.0 迁移导致的 5 个官方插件全部无法安装的严重破坏性问题（[PR #5568](https://github.com/agentscope-ai/QwenPaw/pull/5568)）。
*   **CI/CD 与桌面端优化：** 修复了 Tauri 桌面端在 Windows/macOS 上初始化验证流程失败的问题（[PR #5578](https://github.com/agentscope-ai/QwenPaw/pull/5578)）。

### 4. 社区热点
*   **最热门/关键的 Bug 报告：** [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)。非官方 DeepSeek V4 兼容端点在开启 thinking 模式时引发的 400 错误。该问题由于涉及多轮对话与流式输出，引发了开发者对底层 Schema 清洗机制的讨论。
*   **最受关注的架构级需求：** [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) 反映了 Agent 执行重启命令或服务崩溃导致**对话记录完全丢失**的问题。这暴露了当前系统在异常场景下缺乏持久化兜底机制的痛点，直指系统的“生产环境可用性”软肋。
*   **重磅功能 PR 推进：** DataPaw 数据分析插件（[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)）引入了 12 个 BI 技能；Scroll 上下文管理器（[PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)）提出了基于 SQLite 的持久化历史记录召回方案。这两个长期 Under Review 的 PR 在今日均有活动，显示出社区对扩展 CoPaw 数据分析与长上下文能力的强烈诉求。

### 5. Bug 与稳定性
按严重程度排列今日报告的 Bug：
1.  **[Critical] 对话记录异常中断丢失 ([#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579))**
    *   **表现：** 宿主机重启或服务崩溃后，当前对话记录消失，无断点保存机制。
    *   **状态：** 暂无直接关联的修复 PR，属于高优先级架构缺陷。
2.  **[High] Ascend-vLLM 模型连接断开 ([#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584))**
    *   **表现：** 1.1.7 之后的版本无法连接自定义的 ascend-vLLM 模型，抛出 `APIConnectionError`。
    *   **状态：** 属于版本回归问题，需排查 SDK 兼容性。
3.  **[Medium] DeepSeek V4 流式输出错误 ([#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573))**
    *   **表现：** 多轮对话必现 400 错误，流式 `reasoning_content` 缺失未兜底，Schema null 类型未清洗。
    *   **状态：** **已有修复 PR ([#5582](https://github.com/agentscope-ai/QwenPaw/pull/5582)) 提交**，正在处理流式状态下的错误捕获。
4.  **[Low] UI 细节瑕疵 ([#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583))**
    *   **表现：** 聊天界面右侧对话弹出层默认选中背景不明显。属交互体验优化。

### 6. 功能请求与路线图信号
从近期的 PR 动向中，可以清晰捕捉到 CoPaw 下一阶段的路线图信号：
*   **多渠道与消息聚合：** [PR #5585](https://github.com/agentscope-ai/QwenPaw/pull/5585) 为 Matrix 协议增加了类似 Discord 的流式回复模式；[PR #5577](https://github.com/agentscope-ai/QwenPaw/pull/5577) 引入了消息回复聚合功能。这预示着 CoPaw 正在强化其作为全平台 Bot/Agent 的渠道适应能力。
*   **Agent 治理与子代理调度：** [PR #5524](https://github.com/agentscope-ai/QwenPaw/pull/5524) 重新在 Runtime 2.0 中注册了 `spawn_subagent`，并作为内部治理工具；[PR #5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) 推广了治理策略模式。这表明项目正在构建更复杂的多智能体协作与安全管控机制。

### 7. 用户反馈摘要
*   **真实使用场景延伸：** 用户正尝试将 CoPaw 接入各类异构算力（如华为昇丹 Ascend-vLLM）和非官方中转 API（如 DeepSeek V4 中转站），证明其在极客和开发者群体中的受青睐度。
*   **痛点直击：** 用户对“不稳定状态下的数据持久化”极其敏感（Issue #5579）。AI 操控宿主机执行高权限命令（如重启）是典型的 Agentic 场景，但由于缺乏写前日志（WAL）或软删除机制，糟糕的容错体验大幅降低了信任度。
*   **版本升级阵痛：** 从 1.x 甚至 1.1.7 升级到 2.0 后，出现了插件失效（#5568）和特定模型连接断开（#5584）的问题，提示维护者需要在发版时提供更清晰的 Breaking Changes 迁移指南。

### 8. 待处理积压
*   **长期重磅 PR 需推进：** 
    *   DataPaw 数据分析插件 ([PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)，创建于 5月22日)
    *   Scroll 持久化上下文管理器 ([PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)，创建于 6月19日)
    *   *建议：* 这两个 PR 均标记为 `Under Review` 且代码量/影响面极大，建议维护团队尽快分配 Reviewer 资源推进合并，以防与近期 2.0 架构的频繁改动产生严重冲突。
*   **高危架构问题需立项：** 异常对话丢失问题（[Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579)）目前仅停留在反馈阶段，建议尽早转化为 RFC 或核心功能迭代任务。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-06-28 | **分析数据源**: GitHub Issues & Pull Requests

---

### 1. 今日速览
ZeroClaw 项目今日保持极高的开发与社区活跃度，过去 24 小时内共有 45 条 Issue 更新（33 条新开/活跃）和 50 条 PR 更新。项目当前正处于 **v0.8.3 稳定化收尾与 v0.9.0 架构演进的关键交汇期**，核心维护者（如 Audacity88, singlerider, ConYel）正大力推进 WASM 插件系统、SOP（标准作业程序）控制平面以及 CI 供应链安全的重构。尽管今日有大批量自动化任务相关的无效 Issue 被关闭，但围绕真实用户体验的深度讨论和大型架构 PR 持续涌现，显示出项目极为健康的迭代势头。

---

### 2. 版本发布
**本日无新版本发布 (0 releases)。**
当前主干分支正聚焦于 [v0.8.3 里程碑](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) 和 [v0.9.0 追踪队列](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 的开发，尚未冻结发版标签。

---

### 3. 项目进展
今日项目虽然仅合并/关闭了 3 个 PR，但提交了大量处于核心架构位的更新，推进重点如下：

*   **CI 与发布流程规范化**：
    *   [PR #8344](https://github.com/zeroclaw-labs/zeroclaw/pull/8344)：修复了由于版本号前置更新导致的文档部署硬失败问题，将稳定版指针检查推迟至部署阶段。
    *   [PR #8343](https://github.com/zeroclaw-labs/zeroclaw/pull/8343)：重构稳定版发布工作流，使其从标准的“功能注册表”构建产物，统一了容器、脚本和 Nix 构建表面。
*   **自动化无效任务清理**：
    *   关闭了大量诸如 `002-dms-gst-extraction` 的无效/误报 Issue（如 [#8371](https://github.com/zeroclaw-labs/zeroclaw/issues/8371) - [#8378](https://github.com/zeroclaw-labs/zeroclaw/issues/8378)），这表明项目在进行自动化机器人清理或防止垃圾信息注入。

---

### 4. 社区热点
今日讨论热度最高的话题集中在**安全签名、上下文管理与全自治模式**：

1.  **供应链安全与签名机制 (RFC)** - [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (10条评论)
    *   **诉求**：社区强烈要求引入基于硬件 PGP 密钥的 SLSA 来源证明和密封构建。安全担忧是当前企业采用 AI 智能体的最大阻碍，此项 RFC 旨在从底层保障容器镜像和二进制文件的安全。
2.  **系统记忆权重过高导致行为偏差** - [Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) (7条评论)
    *   **诉求**：用户反馈系统在执行定时任务 时，过度依赖历史记忆，从而忽略了当前提示词。社区呼吁调整 Prompt 策略，平衡长短期上下文。
3.  **目标模式 设想** - [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) (3条评论)
    *   **诉求**：用户期望 ZeroClaw 能拥有持久的“目标导向”模式，在预算耗尽或被取消前，持续自主追踪并完成单一用户目标。

---

### 5. Bug 与稳定性
按严重程度排列，当前影响工作流的核心 Bug 如下：

*   **[S1 - 工作流受阻] Shell 工具调度失败** - [Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)
    *   **问题**：在配置为 `[autonomy] level = "full"` 的全自治模式下，Shell 工具调用被拒绝，指令无法到达运行时。
    *   **修复状态**：已有对应进展，状态更新为 `in-progress`。
*   **[S1 - 工作流受阻] Gemini CLI OAuth 持续报错** - [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)
    *   **问题**：Gemini 模型 认证后遭遇限流或 API 错误，导致 Provider 彻底不可用。今日已修复并关闭。
*   **[S1 - 工作流受阻] 默认 32k 上下文预算瞬间超限** - [Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)
    *   **问题**：系统提示词加上工具定义在首次对话迭代中就超出了 32k 的预算上限（约 3.3 倍），导致不断发生预防性修剪。

---

### 6. 功能请求与路线图信号
从当前的 PR 活动可以清晰看出即将合入下一版本的路线图信号：

*   **WASM 插件架构重大重构 (即将合并)**：[PR #8368](https://github.com/zeroclaw-labs/zeroclaw/pull/8368) 和 [PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)。彻底移除 Extism，转向基于 `wasmtime` 组件模型的插件主机，并支持渠道、内存和工具的 WIT 定义。配合 [Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) 的 RFC，Wasm-first 将成为默认选项。
*   **WhatsApp 被动上下文支持**：[PR #8389](https://github.com/zeroclaw-labs/zeroclaw/pull/8389) 为 WhatsApp Web 添加了群聊被动上下文功能，未提及机器人的消息将作为背景知识存储而不触发 Agent 回复。
*   **SOP (标准作业程序) 控制平面落地**：[PR #8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) 和 [PR #8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) 正在为守护进程添加 SOP 维护 tick 和执行器，朝着 [Tracker #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) 设定的 5/5 完整度推进。

---

### 7. 用户反馈摘要
通过对 Issue 的语义分析，总结用户的真实痛点与反馈如下：

*   **痛点 1：多渠道体验不一致。** 用户在 [Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) 中抱怨，CLI 模式下 Prompt 缓存工作正常，但在 Telegram 中强制要求全量重新处理，导致延迟和资源浪费。
*   **痛点 2：内存与记忆管理不够智能。** 用户明确表示不希望 Agent “想太多”或过度引用历史记录，特别是在无交互的 Cron 自动化任务中，当前的记忆权重严重干扰了任务执行 ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844))。
*   **痛点 3：模型容灾能力弱。** 用户指出当单一 LLM 挂掉或限流时系统直接崩溃，强烈呼吁支持 OpenRouter 的模型数组回退机制 ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138))。

---

### 8. 待处理积压
提醒维护者关注以下需要审核或推进的重要项目：

*   **长期挂起的大型 PR**：
    *   [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)：添加 ARM64 Docker 编译目标（创建于 2026-04-02，已停滞近 3 个月，标记为 `stale-candidate`）。随着边缘计算部署增多，该需求愈发重要。
    *   [PR #6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966)：增强 LLM 调用链路追踪，捕获完整 Prompt/Completion。此 PR 对于可观测性至关重要，亟待作者采取进一步行动。
*   **需要排期确认的 RFC**：
    *   [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)：**协议优先的 Provider 模型 RFC**。提议将 `wire_api` 作为代码组织的主要轴，这是一项可能涉及底层大规模重构的提议，需团队评估其优先级与风险。

</details>