# OpenClaw 生态日报 2026-04-18

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-17 22:09 UTC

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

# OpenClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
OpenClaw 在过去 24 小时内维持了极高的社区活跃度。Issues 和 Pull Requests 的单日更新量双双触及 **500 条**大关（其中新开/活跃 Issues 318 条，待处理 PRs 328 条），表明项目正处于高频迭代期。今日无新版本发布，但社区通过大量反馈和 PR 提交，正全力冲击下一个稳定版。项目当前的重心明显聚焦于修复近几个版本（2026.4.x 系列）引入的多个回归缺陷，以及围绕 OAuth 鉴权、模型兼容性和智能体安全架构进行深度重构。

## 2. 版本发布
**无新版本发布**。项目在最近几天内集中爆发了针对 2026.4.14/4.15 版本的回归问题报告，维护团队目前可能正在累积修复，以准备推出更为稳定的 2026.4.x 后续版本。

## 3. 项目进展
今日虽无合并数量上的爆发，但出现了数个具有架构级意义的重量级提交（PR），为项目的稳定性和未来扩展打下了关键基础：

*   **OAuth 架构集中化重构**：由 @vincentkoc 提交的 `fix(auth): centralize oauth lifecycle manager` ([PR #68284](https://github.com/openclaw/openclaw/pull/68284)) 将分散的 OAuth 逻辑进行了集中式重构，直击近期频发的 Token 刷新竞态问题。
*   **Agent 运行时扩展**：@OFABLE 提交的 XL 级特性 `Agents: add claude-sdk runtime` ([PR #68135](https://github.com/openclaw/openclaw/pull/68135)) 引入了 Anthropic 官方 Claude Agent SDK 的原生支持，为重度依赖 Claude 生态的用户提供了无缝接入方案。
*   **内存系统架构演进**：@BowieSequoia 提交了 `feat(memory-core): Memory v2 foundation` ([PR #67836](https://github.com/openclaw/openclaw/pull/67836))，引入了基于 SQLite 的侧车扩展和重排管道，为未来智能体的长期记忆能力奠定了基础。
*   **重要安全加固**：@thesomewhatyou 提交了针对网关和 Cron 子系统的安全修复 ([PR #68292](https://github.com/openclaw/openclaw/pull/68292))，堵住了包括 MCP 身份欺骗和信任升级在内的 5 个关键漏洞。

## 4. 社区热点
今日讨论最热烈的问题集中在提供商兼容性、鉴权重置及系统核心稳定性上：

*   **Docker 环境 Skill 安装失败**：[#14593](https://github.com/openclaw/openclaw/issues/14593)（👍17，评论 24）。官方 Docker 镜像内缺乏 `brew` 支持导致技能安装受阻。这反映了社区对开箱即用轻量容器的强烈需求。
*   **OAuth Token 竞态导致故障转移失效**：[#26322](https://github.com/openclaw/openclaw/issues/26322)（👍14，评论 21）。当多智能体并发刷新 Token 时引发大面积鉴权失败。此问题已得到核心团队重视，并推动了今日 OAuth 重构 PR 的诞生。
*   **Volcengine 模型识别异常**：[#64799](https://github.com/openclaw/openclaw/issues/64799)（评论 23）。macOS 环境下火山引擎模型解析失败的回归问题。
*   **多步工具调用严重延迟**：[#36399](https://github.com/openclaw/openclaw/issues/36399)（评论 21）。使用原生 OAuth 配合 Gemini 时出现固定 60 秒挂起，而使用自建代理则畅通无阻，引发了关于官方网关网络层策略的热烈讨论。
*   **高级安全议题：技能行为信誉系统**：[#55342](https://github.com/openclaw/openclaw/issues/55342)（评论 15）。针对 ClawHub 恶意技能泛滥的问题，社区发起 RFC 提议在身份验证之上构建基于行为的动态信誉层。

## 5. Bug 与稳定性
今日报告了大量影响正常使用的回归缺陷，特别是 2026.4.14 版本发布后，UI 和基础配置问题尤为突出：

**严重级别：阻断性 / 崩溃**
*   **Windows 聊天 UI 退化**：输入文本被吞，流式响应不可见 ([#67035](https://github.com/openclaw/openclaw/issues/67035))。
*   **QuickStart 引导崩溃**：选择 "Skip for now" 时触发 `TypeError: Cannot read properties of undefined (reading 'trim')` ([#67074](https://github.com/openclaw/openclaw/issues/67074), [#67649](https://github.com/openclaw/openclaw/issues/67649))。
*   **TTS 未配置导致智能体无限循环**：产生数百条重复消息直至上下文溢出 ([#67744](https://github.com/openclaw/openclaw/issues/67744))。

**严重级别：核心功能回归**
*   **Coding Agent 停止工作**：更新后编码智能体无法完成任何实际任务 ([#62505](https://github.com/openclaw/openclaw/issues/62505))。
*   **Azure OpenAI 工具调用失败**：2026.4.11 版本破坏了 Azure Foundry GPT 模型的 schema 解析 ([#65603](https://github.com/openclaw/openclaw/issues/65603))。
*   **Opus 4.7 前向兼容性缺失**：`supportsAdaptiveThinking()` 遗漏了最新模型导致首次请求必定 400 报错 ([#67888](https://github.com/openclaw/openclaw/issues/67888))。
*   **网关 SSRF 防护误杀**：v2026.4.7 的安全更新阻断了通过局域网 IP 调用本地 Whisper/STT 服务的请求 ([#63132](https://github.com/openclaw/openclaw/issues/63132))。

**严重级别：鉴权与网络配置**
*   **`agents add` 写入错误 baseUrl**：同时破坏了 OpenRouter, Arcee, OpenAI-Codex 等多个提供商的路由 ([#67295](https://github.com/openclaw/openclaw/issues/67295))。
*   **Google Vertex 鉴权异常**：从 4.9 升级至 4.10 后，OAuth/SA 认证全面失效报 401 错误 ([#64852](https://github.com/openclaw/openclaw/issues/64852))。

## 6. 功能请求与路线图信号
从近期的 PR 和 RFC 可以清晰看出项目正在演进的路线图方向：

*   **多用户与权限管理 (RBAC)**：Issue [#8081](https://github.com/openclaw/openclaw/issues/8081)（👍 28）反映了用户在家庭/团队共享场景下的强烈需求。
*   **更多 LLM 提供商的原生接入**：社区正在积极为主流平台添加插件，如 DeepInfra ([PR #53805](https://github.com/openclaw/openclaw/pull/53805)) 和 Abliteration ([PR #67948](https://github.com/openclaw/openclaw/pull/67948))。
*   **Skill 评估与安全框架**：随着恶意技能问题的显现，`Eval Framework` ([PR #35071](https://github.com/openclaw/openclaw/pull/35071)) 和行为信誉系统 ([Issue #55342](https://github.com/openclaw/openclaw/issues/55342)) 正在成为生态建设的重点。

## 7. 用户反馈摘要
从今日的 Issue 中可以提炼出以下真实用户痛点和使用反馈：

*   **自托管与局域网用户受挫**：不少高级用户喜欢通过本地代理或在局域网内使用自托管模型/工具。近期对 SSRF 的严格防御以及对 baseUrl 的错误改写，严重干扰了这部分极客用户的进阶使用场景。
*   **UI 流式渲染体验下降**：Web 和 Telegram 等渠道的流式输出问题频发（如闪烁、内容重复吞没），暴露出前端会话状态管理与后端流组装之间存在同步脱节。
*   **版本升级焦虑**：大量包含 `regression` 标签的 Issue 表明，近期的快节奏发布破坏了原本稳定的基础功能。用户呼吁在 CI 中强化回归测试，尤其是针对各主流 LLM 提供商的鉴权和 API Schema 兼容性测试。

## 8. 待处理积压
以下重要或高关注度的问题长期处于打开或陈旧状态，需要核心维护团队介入：

*   **缺乏细粒度的 RBAC 权限控制**：[Issue #8081](https://github.com/openclaw/openclaw/issues/8081)（自 2 月开启，👍 28，高票积压）。
*   **内置 OpenTelemetry 插件无法加载**：[Issue #28222](https://github.com/openclaw/openclaw/issues/28222)（自 2 月底开启，可观测性核心功能受损）。
*   **长时间会话自动压缩损坏思考块**：[Issue #36229](https://github.com/openclaw/openclaw/issues/36229)（导致 Anthropic API 调用全盘失败，严重影响重度用户）。
*   **默认子工作空间继承逻辑错误**：[Issue #29367](https://github.com/openclaw/openclaw/issues/29367)（阻碍了多智能体环境的目录隔离）。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 4 月 18 日各大开源项目的社区动态，我为您梳理了如下横向对比与深度分析报告。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话工具”向“多模态、多端协同与自主任务执行”跨越的爆发期**。以 OpenClaw 为首的基础设施型项目正在经历高频迭代带来的稳定性阵痛，集中攻克鉴权重构、上下文记忆与模型兼容性等底层架构难题。同时，NanoBot、CoPaw 等项目引领了向“多 Agent 协作”和“复杂任务自主规划”演进的范式。整体而言，生态在快速膨胀中呈现出强烈的**企业级化（RBAC/安全加固）**和**端侧轻量化**双重趋势。

### 2. 各项目活跃度对比
*健康度评估标准：A=极其健康/高效闭环，B=活跃/需消化积压，C=平稳/低频维护，D=停滞。*

| 项目名称 | 今日新开/活跃 Issues | 今日待处理/合并 PRs | 版本发布情况 | 核心当前状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 318 | 328 | 无 (积蓄修复) | 高频迭代，集中修复回归 Bug 与安全漏洞 | **B** |
| **CoPaw** (QwenPaw) | 28 | 20 | **v1.1.2** | 架构重大升级，发布 Mission 自主任务模式 | **A** |
| **PicoClaw** | - (109 总更新) | 111 (积压严重) | Nightly 构建 | 社区贡献狂热，渠道与兼容性重构中 | **B** |
| **Moltis** | 7 | 5 | **20260417.01** | 极其高效的 Bug 闭环，代码索引落地 | **A** |
| **IronClaw** | 21 | 36 | 无 | 经历 QA 众测，密集修复阻断性 Bug | **B** |
| **NanoBot** | 11 | 28 | 无 | 专注核心稳定性修复，解决流式与死锁 | **A** |
| **NanoClaw** | 10 | 10 | 无 | v2 架构底层重构 (Bun 运行时迁移) | **B** |
| **LobsterAI** | 6 | - (21 总合并) | **2026.4.17** | 专注跨平台 IM 集成与包体积瘦身 | **A** |
| **TinyClaw** | 0 | 0 (1 关闭) | 无 | 低频平稳，评估架构重构 | **C** |
| **EasyClaw** | 0 | 0 | **v1.7.13** | 修复更新失败问题，平稳维护期 | **C** |
| **ZeptoClaw**| 0 | 0 | 无 | 停滞状态 | **D** |

### 3. OpenClaw 在生态中的定位
* **生态“底座”与事实标准**：OpenClaw 在 Issues 和 PRs 的绝对体量（单日 500+ 级别）使其成为生态内最具统治力的核心参照系。LobsterAI 等项目直接基于其核心引擎进行二次开发。
* **与同类相比的优势**：架构的前瞻性布局。今日的动态显示其正在推进 OAuth 集中化管理、基于 SQLite 的 Memory v2 基础架构以及 MCP 身份防欺骗安全加固，这些企业级特性远超 NanoBot、PicoClaw 等轻量级竞品。
* **当前的短板与风险**：“引擎过热”。快节奏的迭代导致近期 2026.4.x 系列版本出现了严重的 UI 退化、SSRF 误杀及提供商兼容性回归问题。相比于 Moltis 和 NanoBot 迅速的缺陷闭环能力，OpenClaw 目前在**版本质量把控与 CI 回归测试**上面临巨大挑战。

### 4. 共同关注的技术方向
* **长期记忆与上下文管理机制的演进**：
  * *涉及项目：OpenClaw, PicoClaw, NanoBot, CoPaw*
  * *行业诉求：* 传统的整块文本注入已无法满足长周期任务。OpenClaw 正在重构 Memory v2 架构，PicoClaw 在微调 Seahorse 记忆系统，NanoBot 社区呼吁引入 RAG 架构，CoPaw 则推出了 BaseMemoryManager。智能体的“长期记忆”是当前生态最大的技术攻坚战。
* **LLM 提供商兼容性 vs. 通用网关设计**：
  * *涉及项目：OpenClaw, PicoClaw, NanoBot, TinyClaw*
  * *行业诉求：* 面对不断涌现的模型（Opus 4.7, DeepInfra, Novita 等），硬编码适配已不可行。OpenClaw 出现了大量路由写错的回归，TinyClaw 拒绝了硬编码提供商的 PR。生态正全面转向“Bring Your Own Provider (BYOP)”的通用兼容架构。
* **复杂任务的容错与执行反馈机制**：
  * *涉及项目：Moltis, NanoBot, IronClaw, PicoClaw*
  * *行业诉求：* LLM 接口的限流、静默失败或流式中断极大伤害了用户体验。Moltis 呼唤一键重试，NanoBot 和 PicoClaw 正在修复流式截断，IronClaw 致力于消除 Agent 的“工具调用幻觉”。强化任务执行的可靠性与状态反馈是刚需。

### 5. 差异化定位分析
* **全能型基座引擎**：**OpenClaw** 提供全链路能力，侧重于成为标准化的智能体操作系统。
* **任务编排与模式创新者**：**CoPaw (QwenPaw)** 凭借 Mission Mode 脱颖而出，更关注 Agent 执行复杂工作流的规划与自我纠错能力。
* **重度通讯协议集成商**：**LobsterAI** 和 **IronClaw** 深度绑定企业级即时通讯（钉钉、Slack、网易 Popo、微信），定位为企业级协同门户。
* **极致轻量化与边缘部署**：**NanoBot** 和 **PicoClaw** 注重轻量级，常被部署在树莓派等边缘设备上。
* **前沿架构探索者**：**NanoClaw** 勇于尝试 Bun 运行时、Bun 容器化等现代技术栈；**Moltis** 则在深度整合 Nostr、Matrix 等去中心化隐私通信协议。

### 6. 社区热度与成熟度
* **快速扩张与功能膨胀期（OpenClaw, PicoClaw, CoPaw）**：社区热度极高，PR 和 Issue 呈井喷态势。但代码审查积压严重（如 PicoClaw 111 个待处理 PR），正处于“狂奔后需踩刹车重整质量”的阶段。
* **高质量稳健迭代期（Moltis, NanoBot, LobsterAI）**：这三个项目展现了极佳的项目健康度。Issue 的提出与关闭基本持平，PR 描述规范且合并迅速，核心团队对 Bug 的把控力极强。
* **停滞或收敛期（ZeptoClaw, TinyClaw, EasyClaw）**：活跃度极低。其中 TinyClaw 正在重新评估底层架构，处于暴风雨前的宁静；EasyClaw 仅维持基础修复。

### 7. 值得关注的趋势信号
1. **“静默失败”与“状态黑盒”成为众矢之的**：开发者对 LLM 调用报错导致无限死循环、流式无反馈等现象容忍度降至冰点。未来 AI Agent 框架必须内建完善的 Timeout、Fallback 和静默重试机制。
2. **从“单打独斗”到“多智能体网关”**：CoPaw 社区强烈呼唤多 Agent 编排网关，NanoClaw 和 OpenClaw 也在处理相关的 RBAC 和并发隔离问题。个人助手正演变为“个人 AI 集群调度中心”。
3. **开源合规与数据隐私面临大考**：NanoClaw 因安装脚本静默发送遥测数据遭到社区严厉抨击，OpenClaw 面临恶意技能泛滥的挑战。这表明随着项目规模扩大，**无 Opt-in 的数据收集和缺乏沙箱隔离的技能执行将带来严重的信任危机**，安全与合规将成为下一步架构设计的重中之重。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-18)

## 1. 今日速览
过去 24 小时，NanoBot (github.com/HKUDS/nanobot) 保持了高度活跃的开发与社区互动节奏，共产生 18 条 Issue 更新（11 新开，7 关闭）和高达 54 条 PR 更新（26 条已合并/关闭，28 条待合并）。项目当前正聚焦于核心稳定性的打磨，社区集中围攻流式响应中断、配置解析、记忆系统归档以及 API 网关兼容性等核心痛点。整体来看，项目处于高速迭代期，社区贡献参与度极高，Bug 修复响应迅速，但部分长期存在的架构设计（如记忆系统）正面临更复杂场景的挑战。

## 2. 版本发布
**无新版本发布。** 考虑到今日合并了大量涉及 API 流、内存归档、安全校验的核心修复，预计项目正在为下一个 Minor/Patch 版本积累提交。

## 3. 项目进展
今日共有 26 个 PR 被合并或关闭，项目在**稳定性和边缘场景处理**上迈出了坚实的一步，核心进展如下：

- **流式响应可靠性修复**：PR [#3262](https://github.com/HKUDS/nanobot/pull/3262) 修复了后端异常时流式请求仍返回 `finish_reason: "stop"` 的"静默失败"问题；PR [#3266](https://github.com/HKUDS/nanobot/pull/3266) 修复了流式中途断开导致系统崩溃退出的严重问题。
- **数据丢失与网关兼容性修复**：PR [#3247](https://github.com/HKUDS/nanobot/pull/3247) 和 [#3248](https://github.com/HKUDS/nanobot/pull/3248) 修复了当 LLM 返回错误（如 minimax 529）时，记忆归档误将错误信息写入导致历史数据永久丢失的致命 Bug。PR [#3233](https://github.com/HKUDS/nanobot/pull/3233) 修复了历史截断导致不符合智谱 API 规范而报错 1214 的问题。
- **安全与权限加固**：PR [#3261](https://github.com/HKUDS/nanobot/pull/3261) 修复了 `my` 工具在 check 时暴露嵌套敏感配置（如 api_key）的漏洞。
- **无限循环死锁修复**：PR [#3249](https://github.com/HKUDS/nanobot/pull/3249) 增加了对 `finish_reason` 的严格校验，成功解决因第三方 API 网关注入异常触发导致的工具调用无限循环。
- **工具链优化**：PR [#3163](https://github.com/HKUDS/nanobot/pull/3163) 修复了 cron 工具的 schema 与运行时校验不一致导致的 LLM 重试死循环。

## 4. 社区热点
- **长期记忆系统架构大讨论**：Issue [#3227](https://github.com/HKUDS/nanobot/issues/3227)（👍4，评论 9）。开发者指出在大型长周期项目中，现有的 `history.jsonl` 与 `MEMORY.md` 采用整块文本注入上下文的方式难以保留细节，引发了社区对 RAG 检索增强、分段记忆架构的深入探讨。
- **用户黑盒痛点与改进建议**：Issue [#3107](https://github.com/HKUDS/nanobot/issues/3107)（评论 6）。用户系统性地提出了 7 项增强建议（其中 3 项已实现），主要呼吁改善 LLM 请求的重试可见性、支持多 Provider fallback 和 Timeout 自定义，以缓解当前 Agent 运行时的"黑盒"体验。
- **第三方大模型兼容性**：Issue [#3143](https://github.com/HKUDS/nanobot/issues/3143)（评论 9）和 [#2588](https://github.com/HKUDS/nanobot/issues/2588)（评论 9）。围绕使用 Qwen、Home Assistant 等生态时遇到的参数非法和工具调用失败问题，反映出社区对 NanoBot 兼容更多开源/私有模型的强烈诉求。

## 5. Bug 与稳定性
今日报告并处理了多个高优先级 Bug：

1. **P0 级 - 环境变量未解析导致鉴权静默失败**：Issue [#3251](https://github.com/HKUDS/nanobot/issues/3251)。`config.json` 支持 `${VAR}` 但底层未解析，导致长期鉴权失败（目前暂无对应修复 PR，需高度关注）。
2. **P0 级 - 邮件通道陷入疯狂死循环**：Issue [#3215](https://github.com/HKUDS/nanobot/issues/3215)。SMTP 配置下自己发邮件给助理会触发数千次自动回复死循环。
3. **P1 级 - 流式截断不重试**：Issue [#3256](https://github.com/HKUDS/nanobot/issues/3256)。流式响应中途断开被误判为成功，已有对应修复 PR [#3266](https://github.com/HKUDS/nanobot/pull/3266) 并合并。
4. **P1 级 - PPTX 文件内容提取丢失**：Issue [#3250](https://github.com/HKUDS/nanobot/issues/3250)。解析 PPT 时丢失表格和组合形状中的文本。
5. **P2 级 - Gemini API 认证冲突**：Issue [#3206](https://github.com/HKUDS/nanobot/issues/3206)。多重凭证传入导致 Gemini 报 400 错误。

## 6. 功能请求与路线图信号
结合用户诉求与待合并 PR，以下特性极有可能在近期纳入主分支：

- **自定义 LLM Provider 支持**：用户长久呼唤的多供应商配置（Issue [#3107](https://github.com/HKUDS/nanobot/issues/3107)），目前已有完善的实现提交在 PR [#3264](https://github.com/HKUDS/nanobot/pull/3264) 中等待合并。
- **静默重试模式**：Issue [#3246](https://github.com/HKUDS/nanobot/issues/3246) 提出当前重试逻辑会向用户发送 3-5 条报错信息，产生严重打扰，希望增加静默重试机制。
- **语音管线延迟监控**：Issue [#3257](https://github.com/HKUDS/nanobot/issues/3257) 提出语音交互存在 35-60 秒高延迟，需增加 STT→LLM→TTS 的全链路耗时埋点。
- **LangSmith 追踪恢复**：PR [#3140](https://github.com/HKUDS/nanobot/pull/3140) 试图完整恢复在早期版本中丢失的 LangSmith 链路追踪能力。
- **Prompt 引导优化**：PR [#3263](https://github.com/HKUDS/nanobot/pull/3263) 旨在通过系统提示词引导 LLM 主动阅读 Session History，弥补上下文遗漏。

## 7. 用户反馈摘要
从今日的 Issue 互动可以看出：
- **正面反馈**：不少新用户表达了对项目的喜爱，称赞代码“整洁、轻量、易上手”，并成功运行于树莓派等边缘设备上。
- **核心痛点 1 - 状态黑盒**：用户在使用不同供应商（如智谱、Minimax、Gemini）时常遇到限流或非标准报错，但当前 NanoBot 缺乏 timeout 配置、fallback 机制和优雅的重试提示，导致体验较差。
- **核心痛点 2 - 记忆局限**：重度用户在大型项目中受制于简单的文本注入记忆机制，无法精准复现早期上下文细节。
- **核心痛点 3 - 插件与通道坑洼**：Webhook 插件安装报错（Issue [#3188](https://github.com/HKUDS/nanobot/issues/3188)）、UI 刷屏（Issue [#3265](https://github.com/HKUDS/nanobot/issues/3265)）等问题，表明项目在非核心链路（边缘通道、UI渲染）上还存在不少粗糙之处。

## 8. 待处理积压
- **高优先级积压**：Issue [#3251](https://github.com/HKUDS/nanobot/issues/3251)（环境变量解析失效）彻底阻断了部分用户的部署，当前处于 OPEN 状态且无人认领，需维护者立即介入。
- **长期未解决诉求**：
  - Issue [#1672](https://github.com/HKUDS/nanobot/issues/1672)：WhatsApp 自发消息无法回复的 Bug 挂单已超过 40 天。
  - PR [#3216](https://github.com/HKUDS/nanobot/pull/3216)：涉及 WebSocket 生命周期、推理内容处理的大重构，因涉及面广，正处于长期 Review 阶段。
- **存在风险的修改**：PR [#3255](https://github.com/HKUDS/nanobot/pull/3255) 试图通过文件系统底层拦截来保护 `history.jsonl` 不被篡改，这改变了原有的安全模型边界，可能需要架构层面的进一步评估。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 PicoClaw 开源项目 2026-04-18 动态日报：

# 📊 PicoClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
PicoClaw 项目今日继续保持高度活跃的开发与社区互动状态。在过去 24 小时内，项目处理了多达 137 条 Pull Requests（其中 26 条已合并/关闭，111 条待处理）和 109 条 Issues。项目发布了最新的 `v0.2.6-nightly.20260417` 自动构建版本，开发重心明显向**多平台渠道支持（如 Mattermost）、AI 记忆系统以及 Provider 兼容性重构**倾斜。庞大的待处理 PR 数量（111条）表明社区贡献热情高涨，但也对核心团队的代码审查能力构成了不小挑战，整体项目处于高速演进期的“痛并快乐着”的阶段。

## 2. 版本发布
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)** 
  - **版本号**: `v0.2.6-nightly.20260417.ba08d523`
  - **说明**: 自动化发布的每日构建版本，包含最新的代码提交，可能存在不稳定性，建议谨慎用于生产环境。
  - **变更范围**: 对比 `v0.2.6` 至 `main` 分支的完整变更。

## 3. 项目进展
今日共有 26 个 PR 被合并或关闭，推动了多个关键领域的进展：
- **架构与包重构**: 由 @lc6464 提交的 [PR #2566](https://github.com/sipeed/picoclaw/pull/2566) 对 `pkg/providers` 和 `pkg/tools` 进行了包结构的重组，减少了根目录文件冗余，提升了代码可维护性。
- **文档体系化**: 合并了多个文档优化 PR，包括 [PR #2571](https://github.com/sipeed/picoclaw/pull/2571)（添加会话和路由文档）和 [PR #2567](https://github.com/sipeed/picoclaw/pull/2567)（按类型重组文档并添加布局指导），标志着项目正在完善开发者生态体验。
- **核心流式处理修复**: @grearsl 的 [PR #2437](https://github.com/sipeed/picoclaw/pull/2437) 修复了 Codex/OpenAI Responses 流式 API 中 `response.completed` 事件返回空数组的严重问题，显著改善了 OAuth provider 的响应稳定性。

## 4. 社区热点
今日讨论热度最高的话题集中在**大模型兼容性**与**本地部署体验**上：
- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28)** (👍1, 评论 15): 社区强烈呼声希望增加 **LM Studio 的快捷接入支持**，反映出大量用户存在将 PicoClaw 作为本地/边缘设备 AI 智能体的强需求。
- **[Issue #629](https://github.com/sipeed/picoclaw/issues/629) & [Issue #1919](https://github.com/sipeed/picoclaw/issues/1919)** (各 9 条评论): 分别探讨了“大模型调用失败缺乏重试机制”和“ Seahorse 生物启发式 AI 记忆系统”。这说明在长时间运行任务中，系统的**容错能力**和**长短期记忆管理**是当前用户最关注的架构短板。
- **[Issue #748](https://github.com/sipeed/picoclaw/issues/748)** (8 条评论): Groq API 兼容性问题。模型返回 `<function=name{...}>` 格式导致被拒，暴露了项目在处理非标准 OpenAI tool_calls 格式时的解析痛点。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键 Bug，部分已有社区提交修复：
1. **P0 - Provider 响应空内容**: 使用 OpenAI Responses 流式 API 时输出为空。（已通过 [PR #2437](https://github.com/sipeed/picoclaw/pull/2437) 修复并合并）
2. **P0 - Tool Call 提取逻辑存在缺陷**: [Issue #2136](https://github.com/sipeed/picoclaw/issues/2136) 指出正则提取 `tool_calls` 的逻辑存在明显漏洞，可能导致工具调用失败。
3. **P1 - Gateway 端点路由失效**: [Issue #1708](https://github.com/sipeed/picoclaw/issues/1708) 中指出在 Docker 部署 v0.2.3 时，Gateway 仅健康检查端点可用，核心 REST API (`/chat`, `/a2a`) 无法访问。
4. **P1 - 多重身份验证冲突**: [Issue #2548](https://github.com/sipeed/picoclaw/issues/2548) 配置特定模型（如 Gemini）时出现多重认证凭据错误。
5. **P1 - 界面语言修改破坏后端路由**: [Issue #2573](https://github.com/sipeed/picoclaw/issues/2573) 提到 Launcher 的 UI 语言修改会意外影响全局的 `web_search` 路由，已有对应 Fix PR。

## 6. 功能请求与路线图信号
结合 Issue 呼声与已有 PR，以下功能极有可能在近期版本落地：
- **统一的工具执行反馈动画**: [PR #2569](https://github.com/sipeed/picoclaw/pull/2569) 正在实现跨 Discord、Telegram 和飞书的工具执行状态反馈机制，以解决 [Issue #571](https://github.com/sipeed/picoclaw/issues/571) 中“长时间思考无反馈”的用户痛点。
- **Mattermost 原生频道支持**: [PR #1586](https://github.com/sipeed/picoclaw/pull/1586) 已提交完整的 Mattermost 频道支持实现，响应了 [Issue #1587](https://github.com/sipeed/picoclaw/issues/1587) 的诉求。
- **可配置的上下文状态监控**: [PR #2537](https://github.com/sipeed/picoclaw/pull/2537) 引入了 `/context` 命令，可实时报告会话记录大小和 Token 消耗，有助于用户精准控制长文本消耗。
- **Seahorse 记忆系统微调**: [PR #2570](https://github.com/sipeed/picoclaw/pull/2570) 将 Seahorse 的 `fresh_tail_size` 提取为可配置项，增强了智能体记忆模块的灵活性。

## 7. 用户反馈摘要
- **部署与运维痛点**: Docker 用户反馈较多，如端口修改导致 Web 端禁言（[Issue #2236](https://github.com/sipeed/picoclaw/issues/2236)）、缺乏开箱即用的开发工具（[Issue #1228](https://github.com/sipeed/picoclaw/issues/1228) 请求内置 python/curl 等）以及自升级功能缺失（[Issue #618](https://github.com/sipeed/picoclaw/issues/618)）。
- **配置复杂度**: Provider 的模型命名和鉴权机制让不少新手感到困惑，如本地 OpenAI 兼容节点需要写 `openai/openai/model-name`，引起了社区对重构 Provider 解析逻辑的讨论（[Issue #1883](https://github.com/sipeed/picoclaw/issues/1883)）。
- **国产化渠道支持**: 中文用户对 QQ 和飞书的稳定性与功能完备性关注度高（如 QQ 渠道 bindings 无法区分 agent，飞书文件保存路径需优化）。

## 8. 待处理积压
以下高价值或高热度 Issue/PR 处于待处理状态较久，建议维护团队重点关注：
- **[PR #2313](https://github.com/sipeed/picoclaw/pull/2313)**: 涉及“多用户支持与安全加固”，这是一个影响面极广的架构级 PR，目前缺乏足够的 Maintainer 审查反馈。
- **[Issue #618](https://github.com/sipeed/picoclaw/issues/618) (👍2)**: 自更新支持请求，由于涉及不同操作系统的包管理权限，推进较为缓慢。
- **[Issue #2171](https://github.com/sipeed/picoclaw/issues/2171)**: 迁移至 OpenAI Responses API 的重构提案，目前仍有诸多端点未适配，属于长期架构优化任务。
- **[Issue #2233](https://github.com/sipeed/picoclaw/issues/2233)**: 入站上下文标准与路由解耦的重构设计，此 Issue 的及时定调将直接影响后续更多 Channel 接入的难易程度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 4 月 18 日 NanoClaw (qwibitai/nanoclaw) 项目动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
过去 24 小时内，NanoClaw 项目保持了极高的活跃度与社区热度，共产生 **22 笔 PR 更新**（其中 12 笔顺利合并/关闭）与 **10 笔 Issue 更新**。项目当前的迭代重心明显聚焦于 **v2 架构的底层重构**（如 Bun 运行时迁移、包管理器迁移、核心拆分）以及 **企业级/多 Agent 功能的完善**（如邮件分类、API 服务与团队协作）。大量外部开发者（如 `nhod`、`topcoder1`、`gavrielc`）正在积极提交深度代码贡献与严格的质量审查，整体项目呈现出健壮的“自维护”与高健康成长态势。

## 2. 版本发布
- **最新发布**：过去 24 小时内**无**新版本发布。
- *注：合并了大量诸如 pnpm 迁移、Bun 运行时支持及测试覆盖率达 90% 的重构 PR，预计项目正在为下一个主要版本（可能是 v2.1.0 或 v3.0 稳定版）进行底层铺垫。*

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，标志着项目在架构稳定性、运行效率和功能丰富度上取得了重大实质性进展：

- **底层架构全面现代化**：
  - **[#1813](https://github.com/qwibitai/nanoclaw/pull/1813) feat(v2): Bun container runtime + build-surface improvements**：容器运行时从 Node+pnpm+tsc 切换为 **Bun**，彻底解决了原生依赖编译问题，大幅缩减镜像构建时间。
  - **[#1771](https://github.com/qwibitai/nanoclaw/pull/1771) chore: migrate v2 from npm to pnpm**：全面迁移至 **pnpm@10.33.0**，提升依赖解析效率与安全性。
  - **[#1816](https://github.com/qwibitai/nanoclaw/pull/1816) refactor: large-scale split + test coverage ≥90%**：对超 400 行的核心模块进行拆分，并强行引入 CI 覆盖率门禁（≥90%）。
- **Agent 运行与生态增强**：
  - **[#1776](https://github.com/qwibitai/nanoclaw/pull/1776) feat(v2): OpenCode agent provider**：新增 OpenCode 作为 v2 的 `AgentProvider`，拓展了底层轮询模型的支持边界。
  - **[#1814](https://github.com/qwibitai/nanoclaw/pull/1814) refactor(v2/providers): self-registration barrel**：重构了 provider 注册模式，使其具备完全的独立声明宿主环境能力。
- **智能化与多任务调度**：
  - **[#1811](https://github.com/qwibitai/nanoclaw/pull/1811) feat(triage): v1 LLM-backed email triage pipeline**：上线了基于 LLM 分层路由（Haiku → Sonnet → Opus）的邮件分类系统。
  - **[#1821](https://github.com/qwibitai/nanoclaw/pull/1821) feat(agent-runner): parallelize independent work**：优化了系统提示词，强制指导 Agent 将独立任务并行化处理，大幅减少耗时阻塞。

## 4. 社区热点
今日的社区关注点主要集中在容器健壮性与隐私合规性上（数据来源于活跃 Issue 与 PR 互动）：

- **[#957](https://github.com/qwibitai/nanoclaw/issues/957) [Enhancement] 支持 Podman 替代 Docker**：获得了 **6 个 👍 和 6 条深度评论**。该议题反映了社区对无守护进程容器工具的强烈需求。
- **[#1819](https://github.com/qwibitai/nanoclaw/issues/1819) setup.sh 静默发送遥测数据**：用户 `nhod` 严厉指出 `setup.sh` 在未经明确同意的情况下向 PostHog 发送数据，引发了关于开源项目隐私合规性与数据透明的广泛担忧。
- **[#1809](https://github.com/qwibitai/nanoclaw/pull/1809) Merge upstream (1.2.35 → 1.2.53)**：长期跟进的开发者正在艰难同步大量底层代码，侧面印证了主仓库近期迭代速度之快。

## 5. Bug 与稳定性
今日报出多个影响实际运行的关键 Bug，部分已迅速响应并提交修复 PR：

- **高危 (P0) - 级联崩溃与阻塞**：
  - **[#1824](https://github.com/qwibitai/nanoclaw/issues/1824) openclaw 的崩溃循环导致 NanoClaw 被迫终止**：被标记为 CLOSED。底层（openclaw）错误导致 systemd 资源耗尽，直接向主进程发送 SIGTERM，引发长达 5 分钟的服务不可用。
  - **[#1812](https://github.com/qwibitai/nanoclaw/issues/1812) Agent Teams 导致用户消息被完全阻断**：[OPEN] 当 Agent 团队执行任务时，主 Agent 陷入非交互模式，用户在此期间被完全屏蔽无法干预。
- **中危 (P1) - 凭证与调度失效**：
  - **[#1818](https://github.com/qwibitai/nanoclaw/issues/1818) ONECLI_API_KEY 未传递给宿主机**：[OPEN] 已有修复 PR **[#1823](https://github.com/qwibitai/nanoclaw/pull/1823)**。
  - **[#1820](https://github.com/qwibitai/nanoclaw/issues/1820) 环境变量被容器无条件覆盖**：[OPEN] 导致无法动态调整自动压缩阈值。
  - **[#1806](https://github.com/qwibitai/nanoclaw/issues/1806) 容器内 schedule/RemoteTrigger 失败 (org UUID 错误)**：[OPEN] 使得持久化定时任务在容器内部完全不可用。
- **低危 (P2) - 路径与 UX**：
  - **[#1825](https://github.com/qwibitai/nanoclaw/issues/1825) 硬编码路径导致脚本失效**：[OPEN] 清理脚本忽略了自定义目录变量。
  - **[#1805](https://github.com/qwibitai/nanoclaw/issues/1805) Telegram 长时间处理无状态指示**：[OPEN] 超过 10 分钟的处理时间会导致前端看似“假死”。

## 6. 功能请求与路线图信号
从用户的提议和提交的 PR 来看，NanoClaw 正在拓宽其作为“个人 AI 集群”的外延：

- **多模态与平台扩展**：
  - **[#1624](https://github.com/qwibitai/nanoclaw/pull/1624) Matrix 端到端加密通道 + 群组级模型配置**：有望在下一版本合并，将隐私通讯支持提升到新级别。
  - **[#1774](https://github.com/qwibitai/nanoclaw/pull/1774) 支持 OpenAI 兼容模型 + Token 追踪统计 API**：正在审核中，这将大幅降低部署成本并支持本地 Ollama 模型。
- **工作流编排与 API 化**：
  - **[#1800](https://github.com/qwibitai/nanoclaw/pull/1800) add-api-server v2.0.0**：将其包装为生产级 OpenAI 兼容 HTTP 端点。
  - **[#1826](https://github.com/qwibitai/nanoclaw/pull/1826) 四重收件箱任务编排模式**：通过延迟队列实现容器间的安全任务传递。
- **生态集成提议**：
  - **[#1827](https://github.com/qwibitai/nanoclaw/issues/1827) 引入 SkillClaw 作为长期技能生命周期层**：探讨与外部项目集成的可能性。

## 7. 用户反馈摘要
- **痛点 1：容器调试与配置反直觉**：用户 `nhod` 等多次提到，硬编码路径（#1825）、强制覆盖变量（#1820）以及 API-Key 断流（#1818）让非核心开发者在 Fork 同步与二次开发时举步维艰。
- **痛点 2：服务假死与静默失败**：在对接通讯软件时，用户极其反感缺乏反馈机制。长达 11 分钟无回应（#1805）以及团队协作时的一刀切阻断（#1812）极大损害了终端体验。
- **满意度反馈**：在 #957 中，用户明确表示项目 "very useful and well designed"，证明其核心价值（轻量级 Agent 运行时）已被广泛认可，当前的问题主要集中在复杂的容器化与高级调度层面。

## 8. 待处理积压
以下为长期未彻底解决或亟待官方维护者定夺的关键项，需重点跟进：

- **[重要 PR 待合并]** **[#1774](https://github.com/qwibitai/nanoclaw/pull/1774) (OpenAI 模型支持)** 与 **[#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Matrix E2EE 支持)**：均提交数日且为重大架构变更，需要维护团队分配时间进行深度 Review。
- **[重大体验缺陷]** **[#1812](https://github.com/qwibitai/nanoclaw/issues/1812) (Agent 团队阻塞主控交互)**：该缺陷严重影响了多 Agent 场景的可用性，目前无对应 PR 修复，需要核心团队介入重新设计消息队列机制。
- **[生态合规警告]** **[#1819](https://github.com/qwibitai/nanoclaw/issues/1819) (无 Opt-in 的遥测数据收集)**：涉及开源合规红线，官方应尽快在主分支加入遥测同意提示或提供一键关闭选项，以防引发社区信任危机。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 IronClaw 项目 2026-04-18 动态日报：

---

# 📊 IronClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
IronClaw 项目今日处于**高活跃度**状态。在过去的 24 小时内，项目迎来了大规模的 QA 漏洞众测，导致 Issues 激增（共 28 条更新，其中 21 条新开/活跃，7 条关闭）。同时，Pull Requests 活跃度极高（共 50 条更新，36 条待合并），核心开发者与社区正密集修复 Web 网关、Telegram 频道以及 WASM 运行时的稳定性问题。整体来看，项目当前正处于 v0.25.0 发布后的关键稳定性打磨期，研发重心聚焦于安全漏洞修补、MCP 扩展体验优化以及前端交互体验的修复。

## 2. 版本发布
今日无新版本发布。目前项目主要在 `staging` 分支进行密集集成，最新一次集成由机器人自动提升至 `staging-promote` 分支 ([PR #2588](https://github.com/nearai/ironclaw/pull/2588))。

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，修复了多个阻断性 Bug 及基础架构问题，项目整体稳定性得到显著提升：
*   **网关登录与前端阻断修复**：修复了 staging 环境中前端 `app.js` 解析错误导致 Web 登录崩溃的问题，并补充了本地语法检查与 CI 校验，已合入主线 ([PR #2592](https://github.com/nearai/ironclaw/pull/2592))。
*   **Agent 引擎执行能力增强**：修复了事件驱动的 Routines 在首次成功后被标记为 `Completed` 而导致无法再次触发的问题，使长期运行的任务能够正常循环执行 ([PR #2570](https://github.com/nearai/ironclaw/pull/2570))。
*   **前端体验优化**：修复了聊天侧边栏显示无意义十六进制哈希值 ID 的问题，现在能正确显示基于对话主题的描述性标题 ([PR #2348](https://github.com/nearai/ironclaw/pull/2348))。
*   **依赖更新**：Dependabot 关闭了旧版本的 Actions 更新 ([PR #2265](https://github.com/nearai/ironclaw/pull/2265))，开启了包含 14 个依赖更新的新批次 ([PR #2593](https://github.com/nearai/ironclaw/pull/2593))。

## 4. 社区热点
今日最受关注的焦点是 **QA Bug Bash 集中测试活动**（标签：`bug_bash_P1`, `bug_bash_P2`）。测试人员 `joe-rlo` 提交了大量高质量反馈，揭示了当前系统尤其是 UI 与 Agent 交互层面的诸多痛点：
*   **安全与私密性泄露**：Agent 暴露了内部推理过程（Chain-of-Thought leaked）直接展示给用户 ([Issue #2581](https://github.com/nearai/ironclaw/issues/2581))。
*   **工具与文件系统的幻觉**：Agent 声称发送了 Telegram 消息或创建了 Markdown 文件，但实际并未提供或内容丢失 ([Issue #2580](https://github.com/nearai/ironclaw/issues/2580), [Issue #2582](https://github.com/nearai/ironclaw/issues/2582))。
*   **系统状态异常**：内部系统文件和目录意外暴露在 App UI 的文件查看器中 ([Issue #2584](https://github.com/nearai/ironclaw/issues/2584))。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

**P0 / 严重安全漏洞**
*   **[已修复] Engine V2 绕过密钥扫描**：当开启 V2 引擎时，用户输入的 API 密钥等敏感信息绕过了安全检查，直接发送给 LLM。该 Issue 已关闭，推测已通过底层安全架构重构解决 ([Issue #2491](https://github.com/nearai/ironclaw/issues/2491))，核心安全认证重构正在推进 ([PR #2367](https://github.com/nearai/ironclaw/pull/2367))。

**P1 / 核心功能阻断**
*   **本地配置崩溃**：本地数据库初始化 (`ironclaw onboard`) 保存 API key 时发生 Database error ([Issue #2522](https://github.com/nearai/ironclaw/issues/2522))。
*   **Web/Chat 状态丢失**：页面刷新后聊天记录消失，且发送消息后文字会自行消失 ([Issue #2285](https://github.com/nearai/ironclaw/issues/2285), [Issue #2409](https://github.com/nearai/ironclaw/issues/2409))。
*   **Telegram 渠道失效**：在 Staging 环境中，Telegram 机器人 Token 保存无效 ([Issue #2411](https://github.com/nearai/ironclaw/issues/2411))。目前已有针对网关和 Telegram 配对的修复 PR 正在审核 ([PR #2594](https://github.com/nearai/ironclaw/pull/2594))。

**P2 / 架构隐患**
*   **WASM 生命周期管理混乱**：WASM channels 目前在启动时无视激活状态自动运行，且在缺失 Auth 时疯狂重连 ([Issue #2556](https://github.com/nearai/ironclaw/issues/2556), [Issue #2557](https://github.com/nearai/ironclaw/issues/2557))。
*   **LLM 上下文溢出**：超长对话未能有效裁剪，直接超出模型 200K token 限制导致报错 ([Issue #2408](https://github.com/nearai/ironclaw/issues/2408))。

## 6. 功能请求与路线图信号
从近期的 PR 和 Issue 中，可以明确看到 IronClaw 接下来的演进方向：
*   **引入企业级通讯工具支持**：社区正在大力推进对钉钉和 Slack 的原生支持。新增了钉钉“防沉默 UX”功能，确保 Agent 在长时间思考时给予用户进度反馈 ([PR #2589](https://github.com/nearai/ironclaw/pull/2589))；同时引入了基于 WebSocket 的 Slack Socket Mode，免除了配置公网 URL 的烦恼 ([PR #1549](https://github.com/nearai/ironclaw/pull/1549))。
*   **国内大模型本土化支持**：添加了对阿里云百炼 Coding Plan 的专属 Provider 支持，兼容 Anthropic Messages API，目前正等待合并 ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))。
*   **MCP 交互与工具可视化**：提出了新增 `web_fetch` 专用工具的请求，旨在结合小型 LLM 抓取并总结网页内容 ([Issue #2569](https://github.com/nearai/ironclaw/issues/2569))。配合正在开发的“Tool output previews”前端渲染特性 ([PR #2571](https://github.com/nearai/ironclaw/pull/2571))，未来用户将能看到工具调用的可视化输出。

## 7. 用户反馈摘要
通过对 Issue 的提炼，当前用户的真实痛点和使用场景集中在：
1.  **本地部署体验较差**：特别是树莓派（ARM 架构）等边缘设备的交叉编译支持薄弱 ([Issue #1339](https://github.com/nearai/ironclaw/issues/1339))，本地 TUI 界面不支持多行文本粘贴 ([Issue #2448](https://github.com/nearai/ironclaw/issues/2448))。
2.  **Agent“幻觉”严重影响信任**：Agent 经常“谎报军情”（如 Issue #2580, #2582），声称完成了发送消息或创建文件的操作，但实际并没有执行。这表明 Tool call 的结果校验机制仍需加强。
3.  **对技能扩展机制的关注**：用户希望有更灵活的技能加载机制，例如通过环境变量 (`SKILLS_BUNDLED_ENABLED`) 按需关闭编译内置的 Skills ([Issue #2591](https://github.com/nearai/ironclaw/issues/2591))。

## 8. 待处理积压
*   **[PR] 大规模架构变更长驻审核**：由核心开发者提交的认证流重构 ([PR #2367](https://github.com/nearai/ironclaw/pull/2367)) 及 E2E 测试修复 ([PR #2503](https://github.com/nearai/ironclaw/pull/2503)) 虽标记为高优先级，但已停留数日，需重点推进 Review 及合并。
*   **[Issue] Staging 环境的 Agent 生命周期问题**：Agent 实例在无活动 1 小时后会静默死亡的 Bug 仍未解决 ([Issue #2284](https://github.com/nearai/ironclaw/issues/2284))，这对需要长期挂机的用户场景是致命打击，需尽快排查是否与沙箱或网关的保活机制有关。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-04-18)

## 1. 今日速览
LobsterAI 项目在过去 24 小时内保持了**极高的开发活跃度与良好的项目健康度**。项目于昨日成功发布了 `2026.4.17` 全新版本，并在过去一天内完成了高达 **21 项 PR 的合并与关闭**，涵盖了 IM 通道扩展、协同会话修复与 UI 稳定性提升。同时，社区反馈积极，共产生 **7 条 Issue 更新**（6 条新开，1 条关闭）。但需警惕的是，社区正遭遇一波垃圾广告信息的侵扰，需要维护者及时介入清理。总体而言，项目正在向更稳定、更多平台支持的方向快速迭代。

---

## 2. 版本发布
全新版本 **LobsterAI 2026.4.17** 已正式发布，核心更新如下：
- **依赖升级**: 将核心引擎 OpenClaw 升级至 `2024.4.8` 版本 ([PR #1709](https://github.com/netease-youdao/LobsterAI/pull/1709))。
- **微信通道修复**: 恢复了 `gatewayMethods` 补丁并修复了频道配置问题 ([PR #1592](https://github.com/netease-youdao/LobsterAI/pull/1592))。

---

## 3. 项目进展
今日共推进了 21 个 PR（已合并/关闭），项目在跨平台集成、底层架构优化和包体积缩减上取得显著进展：
- **IM 生态扩展**: 
  - 新增了基于电子邮件的 AI 代理通信网关支持（已提交待合并） ([PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719))。
  - 引入 NIM 多 Bot 投递、专属 NIM 二维码登录绑定流程，并支持通过 GitHub 安装 OpenClaw 插件 ([PR #1711](https://github.com/netease-youdao/LobsterAI/pull/1711))。
  - 升级了网易 Popo IM 插件 ([PR #1712](https://github.com/netease-youdao/LobsterAI/pull/1712))。
- **协同架构优化**: 修复了多 Cowork session 并发时 `session_id` 丢失的严重问题，提升了服务端会话识别的稳定性 ([PR #1715](https://github.com/netease-youdao/LobsterAI/pull/1715), [PR #1713](https://github.com/netease-youdao/LobsterAI/pull/1713))。
- **性能与瘦身**: 清理了遗留的 `@tloncorp/tlon-skill` 原生二进制文件，成功为 macOS 安装包缩减了约 65MB 的体积 ([PR #1684](https://github.com/netease-youdao/LobsterAI/pull/1684))。
- **代码整洁**: 彻底清理了旧的 `yd_cowork` 遗留代码及相关死逻辑 ([PR #1689](https://github.com/netease-youdao/LobsterAI/pull/1689))。

---

## 4. 社区热点
- **多渠道 IM 网关集成提议**: 开发者 @shanxinstart-lab 发起提议，希望将 `hermes-agent` 作为除 OpenClaw 之外的可选 AI 代理引擎，反映了社区对底层引擎多样化的强烈诉求 ([Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614))。
- **垃圾广告攻击**: 昨日项目遭遇集中广告刷屏，用户 @changan1524 连续创建了大量涉赌广告 Issue。这反映出项目需要加强 GitHub Actions 的 Issue 自动化过滤机制或调整仓库权限策略 ([Issue #1716](https://github.com/netease-youdao/LobsterAI/issues/1716), [Issue #1718](https://github.com/netease-youdao/LobsterAI/issues/1718), [Issue #1717](https://github.com/netease-youdao/LobsterAI/issues/1717))。

---

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分涉及特定操作系统环境或复杂的网络配置：
1. **[高严重度] Win11 图标异常**: 用户报告在 Windows 11 环境下，安装过程大概率出现桌面图标显示为白色且点击无效的问题，影响新用户首次体验 ([Issue #1714](https://github.com/netease-youdao/LobsterAI/issues/1714))。
2. **[中严重度] 聊天无响应/静默错误**: 用户反馈提问后系统不运行且无任何信息提示，这通常与底层网络请求或代理超时有关 ([Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569))。
3. **[中严重度] MCP 配置失效**: 已修复。由于启动时序竞态，MCP bridge 配置未能同步到 OpenClaw gateway 导致功能失效，现已通过强制网关重启解决 ([PR #1708](https://github.com/netease-youdao/LobsterAI/pull/1708))。
4. **[低严重度] Linux 网络登录失败**: 用户在 Deepin V25 环境下，因浏览器鉴权回调网络错误导致无法登录系统（已关闭，可能为特定网络环境所致） ([Issue #1687](https://github.com/netease-youdao/LobsterAI/issues/1687))。

---

## 6. 功能请求与路线图信号
- **邮箱网关 (已实现)**: 社区此前对多通信渠道的期盼正在落地，当前的 [PR #1719](https://github.com/netease-youdao/LobsterAI/pull/1719) 已经完成了将 Lobster Email 作为 IM 通道的集成。
- **代理引擎扩展**: [Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614) 提出引入 `hermes-agent`。结合近期项目频繁优化 OpenClaw、重写 cowork 模块的动作，预示着项目在下一阶段可能会将“引擎解耦”作为重点方向。

---

## 7. 用户反馈摘要
分析近期的 Issue 与讨论，提炼出以下真实用户痛点：
- **UI 状态反馈不足**: 在遇到网络波动或服务挂起时，客户端不显示任何错误信息（如 [Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 所示），导致用户无法自行排查问题。
- **第三方 OAuth 登录脆弱**: 在国产 Linux 发行版（如 Deepin）中，调用系统浏览器进行账户绑定时极易出现“网络错误”阻断。
- **满意点**: 核心开发团队对用户反馈的响应非常迅速，例如针对配置导入导致崩溃的问题，开发者在同日就提交了修复补丁 ([PR #1699](https://github.com/netease-youdao/LobsterAI/pull/1699))。

---

## 8. 待处理积压
以下重要自动化 PR 长期处于待合并状态，存在依赖安全风险，建议维护团队评估并尽快合并：
- **Vite 大版本升级**: Vite 需从 `5.4.21` 升级至 `8.0.3`，属于跨代际大版本更新，需重点回归测试构建流 ([PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281))。
- **React 核心库升级**: React 需从 `18.3.1` 升级至 `19.2.4`，涉及底层 API 变动 ([PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283))。
- **Electron 升级**: 桌面端底层框架 Electron 需从 `40.2.1` 升级到 `41.1.1` ([PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277))。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-18)

**数据统计周期**：过去 24 小时 | **分析师**：AI 智能体开源项目分析组

---

### 1. 今日速览
过去 24 小时内，TinyClaw 项目整体处于**低频收敛状态**，未产生新的 Issues 或版本发布。项目唯一的动态为处理了一项历史 Pull Request。PR [#243](https://github.com/TinyAGI/tinyagi/pull/243) 在近一个月的沉淀后被正式关闭，标志着项目在扩展第三方大模型供应商的整合策略上保持克制，或处于代码架构的重新评估期。整体来看，项目当前维护活跃度较低，核心库处于平稳维护阶段。

### 2. 版本发布
**本日无新版本发布。**
*(注：项目近期未推出新的 Release，主分支可能正在积蓄底层重构或重大特性更新。)*

### 3. 项目进展
今日没有新增合并的代码，但有一项重要的功能级 PR 被关闭：
*   **[#243 [CLOSED] feat: add Novita AI as a built-in LLM provider](https://github.com/TinyAGI/tinyagi/pull/243)**
    *   **作者**: Alex-wuhu
    *   **动态分析**：该 PR 旨在将 [Novita AI](https://novita.ai) 作为继 Anthropic、OpenAI 和 OpenCode 之后的内置一级 LLM 提供商。由于 Novita AI 暴露了兼容 OpenAI 的 API，该方案复用了现有的 **codex harness**，仅通过自定义 `OPENAI_BASE_URL` 即可实现对接，无需引入新的 CLI 依赖。
    *   **项目影响**：此 PR 于 2026-03-20 创建，并于昨日（04-17）更新后被关闭（未合并）。这可能意味着维护者拒绝了这种通过“硬编码新增 Provider”的扩展方式，未来可能会转向更通用的“自定义 OpenAI 兼容节点”架构设计，以避免核心代码库随供应商增加而无限膨胀。

### 4. 社区热点
今日项目无新增活跃 Issues 或热门讨论。
外部贡献者 @Alex-wuhu 提交的 Novita AI 集成 PR（[#243](https://github.com/TinyAGI/tinyagi/pull/243)）是近期唯一的社区交互信号。该 PR 带来的核心诉求是：**用户希望低成本地接入更多廉价或具有区域优势的开源模型 API（如 Novita AI）**。虽然该 PR 被关闭，但这种“OpenAI-compatible API 复用”的思路值得在后续架构中作为参考。

### 5. Bug 与稳定性
**本日无新增 Bug 报告或崩溃反馈。**
项目在过去 24 小时内未收到任何与稳定性相关的 Issue，当前已发布版本的线上运行状态保持稳健。

### 6. 功能请求与路线图信号
今日无直接的用户功能请求 Issuse。
但通过对 PR [#243](https://github.com/TinyAGI/tinyagi/pull/243) 的间接分析，可以提取出以下路线图信号：
*   **开放模型接入需求增强**：社区对于除了头部大厂（OpenAI/Anthropic）之外的 AI Provider 接入需求正在增加。
*   **架构演进预测**：针对此类 OpenAI 兼容 API 的供应商，项目可能会在未来的路线图中推出“Bring Your Own Provider (BYOP)”功能，即允许用户在配置文件中自行填入 `base_url` 和 `api_key`，而不是在代码库中逐一将其设为内置 Provider。

### 7. 用户反馈摘要
今日无直接的 Issue 评论或用户反馈数据可供提炼。

### 8. 待处理积压
目前项目表面的 Issue 流处于停滞状态（0 新开 / 0 活跃）。建议核心维护团队（@TinyAGI）关注以下潜在风险：
*   **社区贡献者体验**：[#243](https://github.com/TinyAGI/tinyagi/pull/243) 历时近一个月后被关闭，建议在 PR 中补充详尽的 Close 原因（例如：“计划重构 Provider 加载机制”或“不符合当前架构规划”），以鼓励开源社区后续继续贡献力量，保持社区健康度。

---
*本报告由 AI 基于 GitHub 事件日志自动生成，致谢所有为 TinyClaw 贡献代码与智慧的开发者。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-18)

## 1. 今日速览
过去 24 小时，Moltis 项目保持了**极高的开发活跃度与出色的 Issue 解决率**。项目今日实现了 Issues 的"进出平衡"（新开 7 个，关闭 7 个），并有高达 12 个 PR 被合并或关闭，展现出维护者高效的代码审查与合并节奏。核心进展集中在**代码索引功能的落地、多项关键通信渠道的 Bug 修复，以及 TypeScript Web UI 迁移的正式启动**。整体而言，项目处于极其健康的快速迭代期。

## 2. 版本发布
- **[Release 20260417.01](https://github.com/moltis-org/moltis/releases/tag/20260417.01)**
  - **更新内容**：根据今日密集合并的 PR 推断，此版本主要包含代码索引底层的重构、Nostr NIP-59 安全私信支持、Matrix 连接稳定性修复，以及 Podman 沙箱兼容性更新。
  - **破坏性变更/迁移注意**：移除了测试代码中的硬编码密钥。如果下游用户或贡献者在本地测试环境中依赖了之前的写死的测试 Secret，可能需要适配新的动态生成逻辑。

## 3. 项目进展
今日共合并/关闭了 12 个 PR，推进了以下重大功能与优化：
- **代码索引核心重构落地**：经过 4 个 PR 的精细化拆分，今日全部合并。包括脚手架与文件发现 ([PR #753](https://github.com/moltis-org/moltis/pull/753))、编排与增量同步 ([PR #754](https://github.com/moltis-org/moltis/pull/754))、网关集成 ([PR #755](https://github.com/moltis-org/moltis/pull/755)) 以及最终的 SQLite+FTS5 后端整合 ([PR #756](https://github.com/moltis-org/moltis/pull/756))。为后续 AI Agent 深度理解代码库打下坚实基础。
- **安全与通信协议升级**：合并了 Nostr NIP-59 Gift Wrap 支持 ([PR #763](https://github.com/moltis-org/moltis/pull/763))，大幅提升了私密 DM 的元数据安全性。
- **稳定性与多环境兼容修复**：修复了 Matrix 同步循环的断连死锁问题 ([PR #761](https://github.com/moltis-org/moltis/pull/761))，并解决了在 Podman 环境下因 `tmpcopyup` 导致的启动失败问题 ([PR #765](https://github.com/moltis-org/moltis/pull/765))。
- **安全合规清理**：清除了测试中间件和认证模块中的硬编码加密值，解决了 CodeQL 的安全警告 ([PR #768](https://github.com/moltis-org/moltis/pull/768))。

## 4. 社区热点
- **[Issue #748](https://github.com/moltis-org/moltis/issues/748) [Feature]: easy way to "retry" a prompt on error**
  - **热度数据**：评论 7 条，👍 1
  - **诉求分析**：这是今日讨论最热烈的帖子。用户与开发团队就“当 LLM 报错时如何优雅地实现 Prompt 重试”进行了深入探讨。这反映了用户在实际使用中频繁遇到网络或模型生成的瞬时错误，对容错机制和 DX（开发者体验）有较高要求。
- **[Issue #769](https://github.com/moltis-org/moltis/issues/769) [Docs]: Clarify heartbeat/cron behavior with multi-agent workspaces**
  - **热度数据**：评论 3 条
  - **诉求分析**：随着多 Agent 架构的普及，用户对全局工作空间心跳与特定 Agent 上下文之间的生命周期关系感到困惑，呼吁完善官方文档。

## 5. Bug 与稳定性
今日共处理了多项 Bug，部分已在最新版本中修复：
- **[已修复] PWA 推送 404 与日志洪水**：
  - [Issue #760](https://github.com/moltis-org/moltis/issues/760)：Schema 标准化导致每次会话打印 1000+ 次 WARN 日志。已通过 [PR #762](https://github.com/moltis-org/moltis/pull/762) 修复。
- **[已修复] Matrix 与 Slack 集成故障**：
  - [Issue #758](https://github.com/moltis-org/moltis/issues/758)：Matrix 瞬态网络错误导致同步循环永久中断。已通过 [PR #761](https://github.com/moltis-org/moltis/pull/761) 增加指数退避重试机制修复。
  - [Issue #766](https://github.com/moltis-org/moltis/issues/766)：Slack slash commands 在 Webhook 模式下返回 404。已通过 [PR #767](https://github.com/moltis-org/moltis/pull/767) 修复。
- **[已修复] Podman 运行环境崩溃**：
  - [Issue #757](https://github.com/moltis-org/moltis/issues/757)：先前的一个修复导致在 Ubuntu 24.04/26.04 上的 Podman 容器启动失败。已通过 [PR #765](https://github.com/moltis-org/moltis/pull/765) 修复。
- **[待确认] 环境变量解析失败**：
  - [Issue #770](https://github.com/moltis-org/moltis/issues/770)：报告部分环境变量无法被系统正确解析，目前尚未看到对应的修复 PR。
- **[待确认] PWA 推送 404**：
  - [Issue #773](https://github.com/moltis-org/moltis/issues/773)：PWA 推送消息的 CTA（Call to Action）链接失效导致 404。

## 6. 功能请求与路线图信号
- **Web UI 现代化启动**：[PR #775](https://github.com/moltis-org/moltis/pull/775) 提议将 Web UI 迁移至 Vite + Preact + TypeScript，表明项目正致力于改善前端性能与开发者体验。
- **多 Agent 管理精简化**：[Issue #774](https://github.com/moltis-org/moltis/issues/774) 提出“主 Agent / 子 Agent 概念过于笨重”的反馈，预示着项目可能在下个小版本重构多 Agent 编排的 UX 逻辑。
- **网络与基础设施扩展**：
  - [Issue #764](https://github.com/moltis-org/moltis/issues/764)：社区请求支持 Netbird（ WireGuard 组网），反映出用户在安全私有网络中部署 Moltis 的强烈需求。
  - [PR #745](https://github.com/moltis-org/moltis/pull/745)：Nix Flake 支持已提交待合并，这将极大方便 NixOS 用户的部署测试。
- **重试机制的 UX 改进**：结合热点 [Issue #748](https://github.com/moltis-org/moltis/issues/748)，预计“Prompt 一键重试”功能将很快作为 DX 提案被纳入开发计划。

## 7. 用户反馈摘要
- **真实痛点**：用户在日志排查（如 #760 日志风暴）和部署环境差异（如 #757 Podman 兼容性）上耗费了较多精力。
- **使用场景**：项目正被广泛应用于复杂的异步通信场景，高度依赖 Matrix 和 Nostr 集成，且很多用户将其作为 PWA 在移动端使用。
- **满意度分析**：用户反馈极其具体且专业，提交的 Bug 报告均符合规范（Preflight Checklist 完整），说明 Moltis 吸引了较高素质的开发者群体。团队响应速度极快，几乎所有阻断性 Bug 都在 24 小时内给出了代码级解决方案。

## 8. 待处理积压
以下重要 PR/Issue 目前处于 Open 状态，需维护者重点关注以保持项目推进势头：
- **[PR #775](https://github.com/moltis-org/moltis/pull/775) TypeScript Web UI 迁移**：这是一个重大架构变更，需要前端专家进行细致的代码审查。
- **[PR #771](https://github.com/moltis-org/moltis/pull/771) 代码索引独立 Crate**：此前的一拆四 PR 已合并，此独立 PR 可能存在上下文重叠或冲突，需要作者更新或维护者确认状态。
- **[PR #745](https://github.com/moltis-org/moltis/pull/745) Nix Flake 支持**：已开启两日，建议维护者尽快推进 CI 测试与合并，以丰富项目的包管理生态。
- **[Issue #776](https://github.com/moltis-org/moltis/issues/776) task_list.list 报错**：今日新出的 Bug 且尚无评论，可能影响任务管理相关功能，需尽快确认是否为核心模块回归。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-04-18)

> **数据来源**: [agentscope-ai/CoPaw (QwenPaw)](https://github.com/agentscope-ai/QwenPaw)
> **分析师**: AI 智能体与个人 AI 助手开源项目分析组

---

## 1. 今日速览

CoPaw 项目今日保持**极高的社区活跃度与开发迭代速度**。项目在过去24小时内处理了 50 条 Issue（新开/活跃 28，关闭 22）和 45 条 PR（合并/关闭 25，待合并 20），展现出维护团队强大的吞吐量和高效的问题闭环能力。

项目刚刚发布了备受瞩目的 **v1.1.2 正式版**，引入了重大的系统级更新——**Mission Mode（自主任务模式）**，标志着 CoPaw 从单步执行的助手向具备规划、执行和自我纠错能力的复杂智能体系统迈出了关键一步。从社区讨论来看，目前用户核心关注点集中在 **品牌重构（CoPaw 到 QwenPaw）的迁移兼容性**、前端 UI 交互体验优化，以及底层记忆与上下文管理的重构上。整体而言，项目正处于架构演进和功能快速扩张的黄金期。

---

## 2. 版本发布

### 🚀 v1.1.2 正式发布
- **核心更新 (Added)**:
  - **Agent System - Mission Mode**: 引入 `/mission` 命令，支持自主、多阶段任务执行。Agent 能够自主进行任务规划、执行以及迭代式自我纠错。
  - 支持通过 `/mission status` 和 `/mission list` 监控正在运行的异步任务 ([#3364](https://github.com/agentscope-ai/QwenPaw/issues/3364))。
- **迁移注意事项**: 根据社区反馈，从旧版 CoPaw 升级或双存的用户，需注意工作目录环境变量（`WORKING_DIR`）的指向问题，详见 [Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)。

---

## 3. 项目进展

今日有大量高质量 PR 被合并或取得关键性进展，极大提升了系统的扩展性、性能和安全性：

- **架构与性能优化**:
  - **启动性能大幅提升** ([PR #3386](https://github.com/agentscope-ai/QwenPaw/pull/3386)): 通过延迟加载和并行初始化，QwenPaw 的服务就绪时间从约 4.5 秒骤降至约 0.05 秒。
  - **模型运行时分发优化** ([PR #3550](https://github.com/agentscope-ai/QwenPaw/pull/3550)): 配合 UI 路由功能，在运行时实现作用域感知的模型选择（Agent 级别覆盖全局配置）。
- **渠道生态扩展**:
  - **新增 Signal 渠道** ([PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508)): 基于 `signal-cli` 实现了无 Docker 副依赖的原生 Signal 接入。
  - **新增 WhatsApp 渠道** ([PR #3498](https://github.com/agentscope-ai/QwenPaw/pull/3498)): 适配最新协议，补齐了跨平台通讯的重要一环。
- **安全与可用性**:
  - **工具护栏信息精简与风险分级** ([PR #3515](https://github.com/agentscope-ai/QwenPaw/pull/3515)): 优化了工具执行审批的用户体验，通过醒目的红/黄标识提醒用户操作风险等级。
- **底层重构进行中**:
  - **记忆管理重构** ([PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)): 提出了全新的 `BaseMemoryManager` 抽象类，正在引入后台摘要与裁剪逻辑。

---

## 4. 社区热点

今日社区讨论主要集中在架构升级后的阵痛与多 Agent 架构的期待：

1. **品牌升级与目录迁移混乱** ([Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356) - 18条评论, [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309) - 11条评论):
   - **背后诉求**: 从 CoPaw 更名为 QwenPaw 后，新旧版本在 Windows 上的目录（`.copaw` 与 `.qwenpaw`）未能平滑过渡，导致用户升级后出现命令找不到、历史数据/workspace 读取异常。
2. **MCP 架构配置冲突** ([Issue #3445](https://github.com/agentscope-ai/QwenPaw/issues/3445) - 6条评论):
   - **背后诉求**: 用户反馈 QwenPaw 内部存在两套 MCP 系统，导致 GUI 配置无法传递给后端模块。这是项目在集成多样化工具协议时必须理清的架构设计问题。
3. **多 Agent 编排网关的强烈呼声** ([Issue #508](https://github.com/agentscope-ai/QwenPaw/issues/508) - 6条评论, 👍 2):
   - **背后诉求**: 社区对 CoPaw 打破“单 Agent 架构”限制的期望非常高，希望能实现具备独立会话和并行执行能力的多智能体协作网络。

---

## 5. Bug 与稳定性

近期 Bug 主要集中在 API 兼容性、前端展示和死循环问题上：

**严重级别 (P0/P1 - 影响核心功能)**:
- **Agent 死循环无法中断** ([Issue #3026](https://github.com/agentscope-ai/QwenPaw/issues/3026)): Agent 在执行持续失败的任务（如启动 Java 服务失败）时会陷入死循环，且用户无法通过常规方式中断，只能强杀进程。
- **Anthropic 兼容性 API 400 错误** ([Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489)): 传递无效的 `None` 值导致兼容 API 报错崩溃。
- **初始化挂起** ([Issue #2943](https://github.com/agentscope-ai/QwenPaw/issues/2943)): `copaw init` 卡在安全警告提示，阻塞 Python 3.13 用户初始化。

**一般级别 (P2/P3 - 影响体验/特定场景)**:
- **企业微信产生重复聊天记录** ([Issue #3523](https://github.com/agentscope-ai/QwenPaw/issues/3523)): 群聊触发时生成了两条记录，一条 `user_id` 为空。
- **前端 UI Bug** ([Issue #3421](https://github.com/agentscope-ai/QwenPaw/issues/3421) 图片预览丢失, [Issue #3541](https://github.com/agentscope-ai/QwenPaw/issues/3541) 技能搜索框失效 & 暗黑模式显示问题)。暗黑模式问题目前已有对应的 Fix PR ([PR #3547](https://github.com/agentscope-ai/QwenPaw/pull/3547), [PR #3539](https://github.com/agentscope-ai/QwenPaw/pull/3539)) 正在处理。
- **版本验证错误** ([Issue #3549](https://github.com/agentscope-ai/QwenPaw/issues/3549)): ARM 架构设备上出现 `ValidationError`，影响边缘设备部署。

---

## 6. 功能请求与路线图信号

通过近期的 Feature Requests 和活跃的 PRs，可以洞察项目近期的路线图重点：

1. **记忆与上下文管理**: 用户迫切需要完善的会话钩子和记忆管理 ([Issue #2621](https://github.com/agentscope-ai/QwenPaw/issues/2621))，目前 [PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548) 已经着手重构底层 Memory 模块，预计将在下个小版本合入。
2. **语义技能路由**: [PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) 引入了基于嵌入检索的技能过滤，以解决大量技能安装时的 Token 消耗问题。这是向 RAG 增强智能体能力迈出的一步。
3. **全面拥抱 Human-in-the-Loop**: 结合 [Issue #415](https://github.com/agentscope-ai/QwenPaw/issues/415) 和今日合并的工具护栏优化，项目正在构建一套完善的“执行前确认、风险评估提示”机制。
4. **ACP (Agent Client Protocol) 支持**: [PR #3487](https://github.com/agentscope-ai/QwenPaw/pull/3487) 预示着 QwenPaw 正在寻求与外部代码编辑器（如 Zed, OpenCode）的深度生态整合。

---

## 7. 用户反馈摘要

从 Issues 提炼出的真实用户声音：
- **痛点**: **升级体验割裂**是最集中的抱怨，很多用户不知道 CoPaw 和 QwenPaw 该保留哪个；**本地模型接口灵活性不足**（如无法配置远程 LM Studio 的具体 API 地址 [Issue #3532](https://github.com/agentscope-ai/QwenPaw/issues/3532)）。
- **使用场景**: 用户常将 CoPaw 作为自动化运维/开发助手使用，比如联调 Vue/Java 服务、控制 Armbian 边缘设备、生成桌面截图。这也暴露了 Agent 在长复杂任务中容易“迷失”或死循环的问题。
- **满意点**: 社区对 v1.1.2 引入的自主多阶段任务模式 倾注了极高的热情，认为这是从“对话工具”向“数字员工”转变的核心能力。此外，快速响应的 PR 和丰富的渠道接入也获得了好评。

---

## 8. 待处理积压

以下重要问题悬而未决或需要核心维护者尽快介入：

1. **多 Agent 编排网关** ([Issue #508](https://github.com/agentscope-ai/QwenPaw/issues/508)): 已开放近一个半月，获得极高的关注度和点赞，急需官方确认架构排期。
2. **Agent 死循环问题** ([Issue #3026](https://github.com/agentscope-ai/QwenPaw/issues/3026)): 缺乏任务中断机制是威胁系统可用性的严重隐患，目前无对应 Fix PR。
3. **品牌迁移遗留的路径混乱** ([Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356), [Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309)): 影响大量升级用户，亟需发布官方迁移脚本或在下一次 patch 版本中实现路径自动对齐。
4. **WebUI 访问与响应慢** ([Issue #3499](https://github.com/agentscope-ai/QwenPaw/issues/3499)): 反映接口响应时快时慢，可能与底层引擎启动或并发阻塞有关，需进一步诊断。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-18)

## 1. 今日速览
EasyClaw 项目今日整体处于**平稳且健康**的维护状态。过去24小时内，项目未出现活跃的代码提交或新开的 Issue，但成功发布了 **v1.7.13** 新版本，且关闭了 1 个近期反馈的更新失败问题。PR 合并记录今日为零，显示项目目前处于新版本发布后的功能沉淀期。整体来看，项目维护者对关键错误的响应速度较快，项目健康度保持在良好水平。

---

## 2. 版本发布
- **版本号**: [v1.7.13: RivonClaw v1.7.13](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.13) 
- **更新重点**：
  - **核心变更**：根据版本号迭代（由近期的 v1.7.11 升级至 v1.7.13）及 Issue 动态推测，此版本主要修复了旧版本（如 v1.7.11）中存在的应用更新机制失败或崩溃的问题。
  - **重点文档更新**：Release Notes 中详细补充了 **macOS 环境下的安装说明**。针对困扰众多用户的 `"'RivonClaw' is damaged and can't be opened"` 错误，明确指出这是 macOS Gatekeeper 安全机制对未签名应用的拦截，并非文件损坏，并提供了 Terminal 命令行的修复指导。
- **破坏性变更/迁移注意事项**：当前日志未提及破坏性变更，但 macOS 用户在升级或新安装时，需要具备基础的命令行操作能力以绕过苹果的签名验证限制。

---

## 3. 项目进展
过去24小时内，项目代码库层面的可见进展较少：
- **活跃 PR**：0 条（待合并 0，已合并 0）。
- **项目推进**：今日无直接的代码合并记录，项目重心的推进主要体现在 v1.7.13 版本的打包与发布上，将后端的修复代码正式转化为用户可下载的分发物。

---

## 4. 社区热点
今日社区未产生大量新讨论（0 条新开 Issue），但近期的热点聚焦于版本更新与系统兼容性：
- **历史活跃 Issue**：[#33 1.7.11更新失败](https://github.com/gaoyangz77/rivonclaw/issues/33)（现已关闭）
  - **背景分析**：该问题于前日（04-16）提出，用户附带了更新失败的截图。此类问题通常反映了底层网络请求超时、安装包签名校验失败或 CI/CD 流程中的打包错误。维护者在该 Issue 下的快速响应与随后的 v1.7.13 发布，体现了对用户核心诉求（能否正常使用）的高度重视。

---

## 5. Bug 与稳定性
今日没有新报告的 Bug，但成功解决了一个历史遗留 Bug：
- **已修复**：[#33 1.7.11更新失败](https://github.com/gaoyangz77/rivonclaw/issues/33) —— 严重程度：**高（P0/P1）**。应用无法更新是影响所有存量用户的阻断性问题，该 Issue 的关闭及 v1.7.13 的发布标志着此更新链路的稳定性得到恢复。
- **待观察**：macOS 端频繁触发的安全拦截问题（文档中已提供规避方案），虽然不属于代码层面的 Bug，但严重影响 macOS 用户的首次体验，未来可能需要引入正式的 Apple 开发者证书来解决。

---

## 6. 功能请求与路线图信号
- 今日无直接的新功能请求或相关的推进 PR。
- **路线图推测**：从 v1.7.13 的发布说明可以看出，项目当前处于**跨平台体验优化的打磨期**，特别是针对 macOS 用户面临的“未签名应用”痛点，未来版本可能会在应用签名和公证上投入精力，以降低用户的安装门槛。

---

## 7. 用户反馈摘要
通过对近期 Release 和 Issues 的综合分析，可以提炼出以下真实用户画像与痛点：
1. **更新机制脆弱**：用户在执行自动或手动更新时遭遇失败，说明部分用户可能处于网络受限环境，或客户端的容错与回滚机制不够完善。
2. **macOS 体验摩擦**：大量用户遇到“应用已损坏”的系统提示，容易引发对软件安全性的担忧和非技术用户的流失。
3. **沟通满意度高**：针对更新失败（Issue #33），维护者能在一两天内给出反馈并发布修复版本，用户对项目的响应速度整体表现满意。

---

## 8. 待处理积压
- 当前数据未显示有长期未响应（Stale）的活跃 Issue。
- **给维护者的建议**：鉴于 Issue #33 涉及应用无法更新的关键问题，建议在项目的主 README 中进一步高亮强调 v1.7.13 及以上版本的重要性，提醒 v1.7.11 及更早版本的用户务必跳过中间版本，直接下载 v1.7.13 完整包进行覆盖安装。

</details>