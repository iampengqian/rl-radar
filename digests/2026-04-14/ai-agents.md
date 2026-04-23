# OpenClaw 生态日报 2026-04-14

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-13 22:12 UTC

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

# OpenClaw 项目动态日报 (2026-04-14)

## 1. 今日速览

过去 24 小时，OpenClaw 项目的社区活跃度保持在极高水平，共产生 **500 条 Issue 更新**（新开与活跃 387 条，关闭 113 条）和 **500 条 PR 更新**（待合并 358 条，合并/关闭 142 条）。项目今日正式发布了 `v2026.4.12` 稳定版及对应的 Beta 版，核心聚焦于插件加载机制优化、本地模型支持拓展以及内存管理稳定性的提升。整体来看，项目正在快速迭代，但在 OAuth 鉴权、特定模型兼容性（如 Ollama, Vertex, Qwen）以及 Telegram 等渠道的稳定性上仍面临较大的社区反压和挑战。

---

## 2. 版本发布

今日共发布 **2 个新版本**，核心更新集中在插件隔离机制和测试管理工具链：

*   **[v2026.4.12](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12) (Stable)**
    *   **更新内容**：这是一个以广谱质量提升为目标的版本。重点优化了插件加载机制，增强了内存和 dream（离线思考）功能的可靠性，引入了新的本地模型选项，并大幅简化了飞书的配置流程。
    *   **具体变更**：在 QA/实验室环境中增加了基于 Convex 的池化 Telegram 凭证租赁功能及 `openclaw qa credentials` 管理命令。
*   **[v2026.4.12-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.12-beta.1) (Beta)**
    *   **破坏性变更/迁移注意**：重构了插件的激活机制。将 CLI、provider 和 channel 的激活严格限制在 manifest 声明的范围内，保留了显式的作用域和信任边界。
    *   **影响评估**：该变更集中了 manifest-owner 策略，确保在启动、命令发现和运行时不会加载无关的插件运行环境。插件开发者需检查其插件的 `manifest` 声明是否覆盖了所有必要的权限和作用域（关联 PR: #65120, #65259）。

---

## 3. 项目进展

今日共有 142 个 PR 被合并或关闭，重点关注了 AI 模型调用的稳定性、UI 展示以及基础设施修复，项目在健壮性方面取得了实质性进展：

*   **多模型容错与上下文修复**：[#66167](https://github.com/openclaw/openclaw/pull/66167) 修复了 OpenAI 推理模型只输出思考过程而无用户可见答案时的中断问题；[#66141](https://github.com/openclaw/openclaw/pull/66141) 统一了默认根内存的处理逻辑，消除了大小写文件名引发的幽灵内存库问题。
*   **安全与沙箱**：[#64701](https://github.com/openclaw/openclaw/pull/64701) 修复了 Matrix 头像参数可引用本地文件路径的沙箱逃逸漏洞；[#65933](https://github.com/openclaw/openclaw/pull/65933) 阻止了模型参数将 exec 工具的 `security=full` 安静降级的隐患。
*   **前端与接入优化**：[#46707](https://github.com/openclaw/openclaw/pull/46707) 将前端 Markdown 渲染引擎替换为 `markdown-it`，彻底解决了嵌套 JSON 导致的 ReDoS UI 冻结问题；[#65545](https://github.com/openclaw/openclaw/pull/65545) 在控制面板增加了 Model Auth 状态卡片，让 OAuth 令牌健康度一目了然。

---

## 4. 社区热点

今日社区讨论最激烈的问题集中在**共享鉴权状态下的并发处理**以及**主流渠道（Telegram/Discord）的消息投递稳定性**：

1.  **[OAuth token 刷新竞争导致频繁故障转移 (#26322)](https://github.com/openclaw/openclaw/issues/26322)** (👍14, 评论 21)
    *   **诉求分析**：当多个 Agent 共享同一个 OAuth 配置时，并发刷新令牌导致后续请求报 401 错误。这暴露了 OpenClaw 在高并发多 Agent 场景下的核心鉴权锁机制缺失。
2.  **[Discord 斜杠命令只返回 "✅ Done." 而无实际内容 (#58986)](https://github.com/openclaw/openclaw/issues/58986)** (👍6, 评论 7)
    *   **诉求分析**：升级到 3.31 版本后，Discord 渠道交互严重受损。用户对这种"阻断式"基础功能退化表达不满，急需修复。
3.  **[Control UI 要求安全上下文导致 VPS 无法使用 (#32473)](https://github.com/openclaw/openclaw/issues/32473)** (👍4, 评论 12)
    *   **诉求分析**：在非本地或非 HTTPS 的 VPS 环境下部署时，UI 强制要求设备身份认证导致服务不可用。反映了自托管用户对部署灵活性和环境兼容性的强烈需求。

---

## 5. Bug 与稳定性

今日报告了大量回归 Bug，尤其是针对特定模型供应商和渠道集成，部分已有社区 PR 跟进：

*   **🔴 严重 (P0 - 阻断核心功能)**：
    *   *[Google Vertex 鉴权回归 (#48479)](https://github.com/openclaw/openclaw/issues/48479)*：API key auth 覆盖了 ADC 导致 Gemini 3.x 请求全线失败。
    *   *[Telegram 语音转录全面失效 (#62496, #17101)](https://github.com/openclaw/openclaw/issues/62496)*：音频文件在处理流中被错误过滤。👉 **已有诊断 PR**：[#63278](https://github.com/openclaw/openclaw/pull/63278) 介入处理。
    *   *[Gateway 重启导致服务永久死亡 (#40089)](https://github.com/openclaw/openclaw/issues/40089)*：macOS 下 `launchctl bootout` 执行后未触发 bootstrap。
*   **🟠 中等 (P1 - 影响特定模型/工具)**：
    *   *[Ollama 适配器丢弃 tool_calls (#60101)](https://github.com/openclaw/openclaw/issues/60101)*：当模型返回 `thinking` 字段时，工具调用被丢弃导致 Agent 空转。
    *   *[会话模型覆盖存在竞态条件 (#27858)](https://github.com/openclaw/openclaw/issues/27858) (已关闭)*：子代理启动时总是使用默认模型，`sessions.patch` 来不及生效。👉 **已有修复 PR**：[#47994](https://github.com/openclaw/openclaw/pull/47994) 尝试通过引入 Fallback 标志解决。
    *   *[本地模型鉴权失败 (#64799, #59943)](https://github.com/openclaw/openclaw/issues/64799)*：Ollama 和火山引擎模型在最新版被误报为 "Unknown model"。

---

## 6. 功能请求与路线图信号

从近期的 RFC 和 PR 动向来看，项目正在向**更细粒度的权限控制**和**更多平台原生能力**延伸：

*   **行为信誉系统 (RFC)**：用户提出 [Behavioral reputation for skills (#55342)](https://github.com/openclaw/openclaw/issues/55342)，旨在通过行为层而不仅仅是身份验证来拦截恶意插件（响应近期 ClawHub 的恶意插件安全事件）。
*   **可配置的 LLM 超时**：[feat: configurable timeout (#34644)](https://github.com/openclaw/openclaw/issues/34644) 要求打破 15 秒的硬编码超时限制，这对于高延迟的长上下文思考模型至关重要。
*   **TTS 情感控制**：[Add Typecast provider (#10356)](https://github.com/openclaw/openclaw/pull/10356) 集成了带情感预设的 TTS 引擎，表明项目正致力于增强语音交互的拟真度。
*   **预期纳入版本**：[#64066 Roam 频道扩展](https://github.com/openclaw/openclaw/pull/64066) 和 [#66179 Android Talk Mode 暴露](https://github.com/openclaw/openclaw/pull/66179) 已经具备合入条件，有望在下一个迭代中release。

---

## 7. 用户反馈摘要

通过对高频评论的语义提取，真实用户的痛点集中在以下三个方面：

1.  **复杂网络下的部署体验支离破碎**：用户在结合不同供应商（如 Ollama 自带云、Azure OpenAI、Google Vertex）配置时，经常遇到 "Unknown model" 或 "No provider registered" 错误。配置校验过度严格且报错信息含糊（[#57099](https://github.com/openclaw/openclaw/issues/57099), [#64238](https://github.com/openclaw/openclaw/issues/64238)）。
2.  **消息重复与流式渲染问题**：在 Telegram 和飞书的群聊场景中，使用流式输出（`blockStreaming`）极易引发消息重复发送（多达 30 次刷屏）或截断（[#65701](https://github.com/openclaw/openclaw/issues/65701), [#33883](https://github.com/openclaw/openclaw/issues/33883)），极大影响了终端用户的体验。
3.  **TTS 与 STT 的断链**：语音通话工具暴露端口冲突（[#58115](https://github.com/openclaw/openclaw/issues/58115)），而 Telegram 的语音消息转录由于底层的路径规范问题被默默丢弃（[#63511](https://github.com/openclaw/openclaw/pull/63511)），导致 AI 的"听"与"说"能力存在严重硬伤。

---

## 8. 待处理积压

以下是长时间处于 Open 状态且未得到妥善解决的高影响度积压项，建议维护团队重点关注：

*   **Exec 工具环境变量阻断 (已打开 43 天)**：[Issue #31583](https://github.com/openclaw/openclaw/issues/31583)。由于 `exec` 工具不继承 `skills.entries.*.env` 环境变量，导致用户无法安全地注入密码等敏感信息，严重限制了技能脚本的实用性。
*   **Bedrock API Key 认证缺失 (已打开 44 天)**：[Issue #30215](https://github.com/openclaw/openclaw/issues/30215)。目前只支持 AWS SDK 默认凭证链，限制了无法使用实例角色的环境部署。
*   **子代理完成后的生命周期钩子缺失 (已打开 52 天)**：[Issue #22358](https://github.com/openclaw/openclaw/issues/22358)。缺少 `post_subagent_complete` 钩子使得复杂的 Agent 编排难以实现自动化的轨迹记录和结果回收。

---

## 横向生态对比

一份基于 2026 年 4 月 14 日各大开源项目社区动态的横向对比与技术生态分析报告。

---

# 📊 个人 AI 助手与自主智能体开源生态横向分析报告 (2026-04-14)

## 1. 生态全景
个人 AI 助手与自主智能体开源生态目前正处于**从“单体对话”向“多端协同与高并发编排”演进的高速扩张期**。各项目在底层模型适配上的边界正在被打破，多模态（尤其是语音 TTS/STT）和跨平台渠道（IM、邮件、Matrix）接入已成为标配。然而，**复杂性屏障开始显现**：随着插件生态、沙箱权限和长期记忆的引入，OAuth 凭证竞争、容器逃逸、上下文溢出及工具调用路由幻觉等深层次工程挑战，正成为决定项目生死的关键分水岭。

## 2. 各项目活跃度对比

| 项目名称 | Issues 动态 (24h) | PRs 动态 (24h) | 版本发布情况 | 健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (新开/活跃 387) | 500 (待合并 358) | **2 个** (Stable & Beta) | 🟢 **极高**：生态核心，迭代极快，面临规模并发带来的鉴权/稳定性压力。 |
| **NanoBot** | 45 (新开/活跃 19) | 60 (待合并 30) | 0 | 🟢 **高**：功能累积期，底层工具链重构与多模型路由开发热烈。 |
| **PicoClaw** | 5 (新开/活跃 4) | 38 (待合并 28) | **1 个** (Nightly) | 🟡 **中高**：底层架构重构中（多实例支持），合规性暴露出隐患。 |
| **NanoClaw** | 5 (新开/活跃 4) | 14 (待合并 8) | 0 | 🟢 **高**：功能大扩展，容器隔离与宿主机交互成为攻坚重点。 |
| **IronClaw** | 44 (新开/活跃 37) | 50 (待合并 45) | 0 | 🟠 **中**：企业级多租户改造阵痛期，Web UI 和长上下文任务存在阻断性 Bug。 |
| **LobsterAI** | 未明确总量 | 22 (合并 15) | **1 个** (2026.4.13 正式版) | 🟢 **高**：重质量与代码整洁，OpenClaw 运行时的企业级封装表现优异。 |
| **Moltis** | 7 (全部关闭) | 17 (全部合并) | **2 个** | 🟢 **极高**：零积压，极速响应。架构解耦和本地化/隐私化支持进展神速。 |
| **CoPaw** | 40 (新开/活跃 28) | 50 (合并 20) | **1 个** (v1.1.1-beta.1) | 🟠 **中**：品牌更名带来显著的社区阵痛与配置迁移问题。 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 0 | 🔴 **静默**：过去 24 小时无活动。 |
| **EasyClaw** | 0 | 0 (更新 1) | 0 | 🟡 **平稳**：底座稳定，处于 i18n 等长尾功能的积累期。 |

## 3. OpenClaw 在生态中的定位
*   **绝对的核心参照与“底座”**：OpenClaw 在社区规模（单日近千条 Issue/PR 交互）和功能广度上处于统治地位。它甚至为 LobsterAI 等项目提供底层运行时支持。
*   **技术路线差异**：相较于 NanoBot 或 Moltis 专注在轻量级或特定语言的重构，OpenClaw 采取的是“大而全”的平台化策略，强攻插件隔离、高级鉴权和多 Provider 容错。
*   **优势与隐患**：其优势在于庞大的贡献者基数和极快的问题发现速度；但隐患在于**回归测试难度剧增**。今日暴露的 Google Vertex 鉴权失效、Telegram 语音流失和 OAuth 高并发锁缺失，说明其系统复杂度已接近单点架构的极限。

## 4. 共同关注的技术方向
*   **容器/沙箱安全与隔离边界**
    *   *涉及项目*：**OpenClaw, NanoClaw, PicoClaw**
    *   *具体诉求*：如何防止大模型工具调用越权。OpenClaw 修复了路径引用导致的沙箱逃逸，PicoClaw 遇到了正则守卫误杀正常命令的痛点，而 NanoClaw 则在讨论彻底绕过 Docker 的 Native 模式以获取宿主机控制权。安全与能力之间的博弈是核心。
*   **长期记忆 与状态管理**
    *   *涉及项目*：**NanoBot, NanoClaw, OpenClaw**
    *   *具体诉求*：解决长时间运行后的上下文污染与 token 暴涨。NanoBot 遭遇了 Dream 机制意外清空核心记忆以及心跳机制导致单次消耗 56 万 Token 的严重问题。基于 SQLite 的自我改进与分级记忆清洗机制成为破局关键。
*   **多渠道融合与流式渲染稳定性**
    *   *涉及项目*：**OpenClaw, NanoBot, CoPaw, Moltis**
    *   *具体诉求*：Telegram、Discord、飞书等 IM 渠道对流式输出（Streaming）的处理差异极大。消息重复刷屏（甚至高达 30 次）、截断、空消息引发崩溃是各项目共同的 Bug 重灾区。
*   **工具调用降级与超时控制**
    *   *涉及项目*：**OpenClaw, IronClaw, CoPaw**
    *   *具体诉求*：当 LLM 遇到 404 错误或陷入死循环时，如何进行降级。OpenClaw 呼吁可配置的 15s 以上超时，IronClaw 则受困于工具调用失败导致的 50 次盲目重试。

## 5. 差异化定位分析
*   **OpenClaw / CoPaw**：定位为**通用全能型 AI 接入网关**。强调多模型（Ollama, Vertex, vLLM）和企业级 IM（飞书、微信）的无缝打通。
*   **IronClaw / LobsterAI**：定位为**企业级/私有化 SaaS 部署方案**。重点发力 Web UI 管理面板、多租户 RBAC 权限控制、以及 EFS 文件系统层面的数据持久化。
*   **NanoBot / Moltis**：定位为**极客与轻量级玩家的高效工具**。Moltis 极致追求全栈本地化（整合本地 Voicebox 和 Whisper），NanoBot 则在积极探索零依赖的模型路由以降低运行成本。
*   **NanoClaw**：定位为**宿主机深度集成智能体**。不仅在聊天层面，更注重通过 MCP 桥接（如 MS Graph）和浏览器自动化，实现真正的“数字员工”操作。

## 6. 社区热度与成熟度
*   **疯狂扩张期（规模与阵痛并存）**：**OpenClaw** 和 **CoPaw**（更名QwenPaw）。面临架构瓶颈和用户体验（升级迁移）的严峻考验。
*   **高质量迭代期（架构重构）**：**Moltis**（单日清零 Issue 且合并 17 个架构解耦 PR）、**PicoClaw**（重写核心支持多 Channel 实例）。这两个项目正在为后续的爆发夯实底层。
*   **功能累积与探索期**：**NanoBot**、**NanoClaw**、**IronClaw**。前沿功能（Web UI、ACP、深度记忆）正在密集开发但尚未稳定，P0 级别的阻断性 Bug（如编译静默崩溃、死循环）频发。

## 7. 值得关注的趋势信号
1.  **“安静降级”是当前 AI Agent 最大的易用性杀手**：多个项目（如 NanoClaw, IronClaw）暴露出 Agent 在底层报错或 Token 超限时“静默失败”或陷入“死循环”。**对开发者的启示**：必须建立比 LLM 自身更强硬的外部熔断和超时兜底机制。
2.  **标准化微支付与 API 路由觉醒**：NanoClaw 引入了基于 x402 协议的按调用微支付，NanoBot 实现了轻量级大/小模型路由。这表明 Agent 的商业化运行和极致成本控制已成为开发者的核心刚需。
3.  **IM 群控矩阵成为企业新刚需**：PicoClaw 和 CoPaw 的用户强烈要求多实例、多飞书/微信账号共存。Agent 正在从“单打独斗的私人秘书”演变为“社群矩阵的运营中枢”。
4.  **从沙盒隔离走向“受控的宿主机掌控”**：以 NanoClaw 为代表的项目开始尝试绕过 Docker 以直接操作宿主机的 GUI 和底层工具。这预示着下一波 AI Agent 的主战场将从“纯云端文本处理”向“深度接管用户操作系统”转移。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-04-14)

## 1. 今日速览

过去 24 小时，NanoBot 项目保持着**高度活跃**的开发与社区互动状态。系统共处理了 45 条 Issue（新开/活跃 19 条，关闭 26 条）和 60 条 PR（待合并 30 条，合并/关闭 30 条），展现出维护团队高效的响应能力与社区旺盛的参与热情。尽管今日未发布任何新版本，但大量错误修复、新提供商接入（如 LongCat）、Web UI 推进及模型路由等核心功能的 PR 正在密集审查中。整体来看，项目当前正处于 v0.1.5/nightly 版本的快速迭代与功能累积阶段。

## 2. 版本发布

今日无新版本发布。项目仍处于 nightly 版本的快速迭代中。

## 3. 项目进展

今日合并/关闭了多项重要 PR，显著提升了系统的稳定性和多渠道体验：

*   **上下文与消息处理稳定性大幅增强**：合并了 [PR #2394](https://github.com/HKUDS/nanobot/pull/2394)，通过合并相同角色的连续消息，从根本上修复了引发 LLM 报错（`Cannot have 2 or more assistant messages...`）的架构级问题。
*   **Telegram 渠道体验优化**：修复了流式输出时的多处痛点。[PR #2650](https://github.com/HKUDS/nanobot/pull/2650) 解决了长文本在流式输出时超出限制导致的崩溃；[PR #2546](https://github.com/HKUDS/nanobot/pull/2546) 修复了流式消息发送至错误主题/回复树的问题。
*   **Agent 核心循环修复**：[PR #3111](https://github.com/HKUDS/nanobot/pull/3111) 修复了 Agent 在异常退出时未清空注入队列的 Bug，避免了消息重复发送或混乱。
*   **搜索与日志基础设施**：[PR #2113](https://github.com/HKUDS/nanobot/pull/2113) 为网络搜索工具引入了多搜索源自动降级机制；[PR #2551](https://github.com/HKUDS/nanobot/pull/2551) 优化了工具提示的日志可读性。
*   **语音识别增强**：[PR #2756](https://github.com/HKUDS/nanobot/pull/2756) 新增了 Groq Whisper 的语言指定参数，提升了非英语语音的识别准确度。
*   **国际化文档**：合并了俄语 ([PR #2707](https://github.com/HKUDS/nanobot/pull/2707)) 和越南语 ([PR #1164](https://github.com/HKUDS/nanobot/pull/1164)) 的 README 文档。

## 4. 社区热点

今日社区讨论主要集中在 Agent 长期运行时的记忆/会话管理、多模型接入以及定时任务机制上：

*   **心跳机制导致 Token 消耗异常 ([Issue #2375](https://github.com/HKUDS/nanobot/issues/2375))**：获得 11 条评论。用户反馈每 30 分钟的定时心跳任务会将历史记录追加至 `heartbeat.jsonl`，导致单次调用消耗高达 56 万 Token。这暴露了长期运行 Agent 在日志轮换和记忆裁剪机制上的短板。
*   **Gemini 模型升级导致回归 ([Issue #2185](https://github.com/HKUDS/nanobot/issues/2185))**：获得 8 条评论。升级特定版本后 Gemini 模型配置失效，反映出底层 LiteLLM 与各模型 API 适配的脆弱性。
*   **Windows 兼容性问题 ([Issue #2868](https://github.com/HKUDS/nanobot/issues/2868))**：获得 5 条评论（含 2 👍）。`exec` 工具强制使用 bash 导致 Windows/WSL 环境报错，引起了大量开发环境用户的共鸣。
*   **Dream 机制覆盖记忆导致数据丢失 ([Issue #2957](https://github.com/HKUDS/nanobot/issues/2957))**：获得 4 条评论。用户遭遇 `MEMORY.md` 被意外清空，该风险直接威胁 Agent 的个性化核心，目前已有 [PR #3021](https://github.com/HKUDS/nanobot/pull/3021) 尝试修复此类文件编辑致胀大的问题。

## 5. Bug 与稳定性

今日报告的 Bug 及回归问题（按严重程度排序）：

*   **P0 - 数据丢失：Dream 模块覆写导致核心记忆清空** ([Issue #2957](https://github.com/HKUDS/nanobot/issues/2957))。**修复进度**：已有 [PR #3021](https://github.com/HKUDS/nanobot/pull/3021) 针对 Dream Phase 2 写入时的内容损坏进行了修复。
*   **P1 - 核心阻断：版本更新导致模型响应极慢** ([Issue #2713](https://github.com/HKUDS/nanobot/issues/2713))。v0.1.4.post6 版本在某些 API 环境下响应时间从 1 秒暴增到 3 分钟。
*   **P1 - 兼容性阻断：Windows 下 exec 工具强制依赖 Bash** ([Issue #2868](https://github.com/HKUDS/nanobot/issues/2868))。**修复进度**：社区已提交针对 WSL RPC 错误的修复代码。
*   **P1 - 成本异常：心跳任务未压缩历史导致 Token 飙升** ([Issue #2375](https://github.com/Hkuds/nanobot/issues/2375))。
*   **P1 - 权限逃逸：restrictToWorkspace 限制失效** ([Issue #2826](https://github.com/HKUDS/nanobot/issues/2826))。Agent 能够越权删除工作区外的文件，存在较大的安全隐患。
*   **P2 - 通道报错：Telegram 空消息导致崩溃** ([Issue #100](https://github.com/HKUDS/nanobot/issues/100))。**修复进度**：该未捕获的异常已被合并的代码修复。
*   **P2 - API 语法：环境变量占位符未被解析** ([Issue #2849](https://github.com/HKUDS/nanobot/issues/2849))。配置文件中的 `${VAR}` 语法无法被解析，仅支持明文。

## 6. 功能请求与路线图信号

结合社区需求与待审 PR，项目接下来的演进方向明确：

*   **轻量级模型路由**：社区呼吁根据任务复杂度自动切换大/小模型以节约成本 ([Issue #3070](https://github.com/HKUDS/nanobot/issues/3070))。**落地信号**：[PR #3109](https://github.com/HKUDS/nanobot/pull/3109) 已实现零依赖的路由分发器，极可能在近期合并。
*   **官方 Web UI 与移动端支持**：目前已有两个大型 PR 正在竞争合入。包括提供完整管理界面的 [PR #2972](https://github.com/HKUDS/nanobot/pull/2972)，以及旨在提供轻量级基础接入的 [PR #3030](https://github.com/HKUDS/nanobot/pull/3030)。
*   **Universal Tool Orchestrator (工具并行与依赖注入)**：[Issue #1378](https://github.com/HKUDS/nanobot/issues/1378) 与 [Issue #3096](https://github.com/HKUDS/nanobot/issues/3096) 都在呼吁打破现有的线性工具调用逻辑。**落地信号**：维护团队正在评估依靠静态属性控制并发的设计缺陷，重构可能提上日程。
*   **Dream 阶段增加 Hooks**：[Issue #3103](https://github.com/HKUDS/nanobot/issues/3103) 提议在记忆整理前后增加钩子，以支持更灵活的记忆清洗。

## 7. 用户反馈摘要

从今日的 Issues 互动中，可以提炼出以下真实用户画像与痛点：

*   **长期陪伴型 Agent 的状态管理是核心挑战**：大量高票 Issues 涉及 `MEMORY.md`、`heartbeat.jsonl` 等。随着用户将 NanoBot 作为私人助手（如定时看护、邮件整理），长期记忆的持续存储与清洗机制（Dream/Heartbeat）在处理长达数周的运行时暴露了健壮性不足。
*   **多平台体验差异显著**：Windows 用户遭遇了各种路径和执行环境（Bash）阻碍；中文用户在使用 Moonshot、DeepSeek 等本地模型时，容易遇到 Token 计算与 API 兼容报错；而不同渠道（如 Telegram 与飞书）在处理消息长度、富文本、流式响应的边界情况时体验不一。
*   **成本控制需求强烈**：用户对 Token 消耗（如 Issue #2375 的 56k Token 消耗）和模型路由（如 Issue #3070）非常敏感，希望能在日常闲聊时自动降级到便宜模型。

## 8. 待处理积压

以下长期未关闭的 Issue/PR 需要维护团队重点关注：

*   **[PR #2972](https://github.com/HKUDS/nanobot/pull/2972) / [PR #3030](https://github.com/HKUDS/nanobot/pull/3030) Web UI**：这两个 PR 都为 NanoBot 引入了 Web 界面，且均已开启多日，急需维护者明确最终的技术路线（全功能 vs 轻量基础）并推进合入。
*   **[PR #3021](https://github.com/HKUDS/nanobot/pull/3021) Dream 阶段文件损坏修复**：该 PR 解决了本地模型（如 Gemma）在 Dream 阶段导致记忆文件膨胀的核心痛点，但依然处于 Open 状态，建议尽快审查以解除用户面临的数据丢失风险。
*   **[Issue #2925](https://github.com/HKUDS/nanobot/issues/2925) Pip 安装错误**：部分用户反馈通过 `pip install nanobot-ai[api]` 安装时找不到对应版本，这影响了新用户的首次体验，需要确认是否为 PyPI 发布配置问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报 (2026-04-14)

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内呈现出**高度活跃且迭代迅速**的健康状态。系统自动发布了 `v0.2.6-nightly.20260413` 每日构建版本，持续为代码合并做前置验证。社区方面共有 5 条 Issue 更新（4 新开/活跃，1 关闭）和高达 38 条 PR 更新（28 待合并，10 已合并/关闭），显示出核心开发团队与社区贡献者正在密集进行代码提交与审查。今天的重心明显集中在**多实例底层架构重构、通道安全性增强以及日常 Bug 修复**上。

## 2. 版本发布

- **[nightly: Nightly Build v0.2.6-nightly.20260413.6d037919](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新内容**：基于 `main` 分支的自动化每日构建版本，包含截至 2026-04-13 的所有最新代码提交（包含近期的多 Channel 实例重构及 Agent 并行处理逻辑）。
  - **破坏性变更/迁移注意事项**：官方提示该版本为自动构建，可能存在不稳定性，**建议谨慎用于生产环境**。
  - **完整更新日志**：[v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展

今日共有 **10 个 PR 被合并或关闭**，推进了数个关键的架构重构与修复，项目在系统健壮性上迈进了一大步：

- **多 Channel 实例支持重构**：由核心贡献者 @cytown 提交并关闭的 [PR #2481](https://github.com/sipeed/picoclaw/pull/2481) 对配置文件进行了重构，使 `config.Channel` 支持多实例。这是实现多飞书/多平台共存的底层前置工作。
- **Agent 循环并行计算支持**：[PR #2503](https://github.com/sipeed/picoclaw/pull/2503) 重构了 `AgentLoop`，使其支持并行处理用户消息并正确路由响应，大幅提升高并发下的处理性能。
- **上下文管理清理逻辑修复**：[PR #2495](https://github.com/sipeed/picoclaw/pull/2495) 修复了 `/clear` 命令无法清理 Seahorse DB (SQLite) 的问题，确保历史消息不会在重新组装时污染上下文窗口。
- **关键安全与稳定性修复**：@cytown 提交的 [PR #2507](https://github.com/sipeed/picoclaw/pull/2507) 和 [PR #2508](https://github.com/sipeed/picoclaw/pull/2508) 分别修复了 `allowFrom` 包含空字符串导致的鉴权问题，以及 Channel 管理和微信配置中的隐藏变量引发的 panic 崩溃。

## 4. 社区热点

今日社区讨论的焦点集中在**系统安全性设计、开源合规性与业务场景拓展**上：

1. **第三方 WebSocket 安全接入策略 ([Issue #2499](https://github.com/sipeed/picoclaw/issues/2499))**：
   - @SiYue-ZO 提出目前 Pico WS 主要服务于内置 WebUI，缺乏面向第三方客户端（如浏览器扩展、外部桌面工具）的鉴权边界与安全态势管理。该诉求直指 PicoClaw 生态化开放的核心痛点，亟待确立版本兼容性策略。
2. **开源贡献者许可协议 (CLA) 张冠李戴 ([Issue #2506](https://github.com/sipeed/picoclaw/issues/2506))**：
   - 社区贡献者 @MichelSantos 指出项目使用的 CLA 协议文本错误地将签署方指向了 "SAP"（可能是误用了 SAP 的 CLA 模板）。这是一个紧急的**项目合规性/法律风险问题**，需维护者立即修正，以免影响开源贡献。

## 5. Bug 与稳定性

今日报告了多个影响系统稳定性的 Bug，部分已处于修复流程中：

- **🔴 P0：exec 工具的安全守卫误杀正常命令** ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042))
  - **表现**：当开启工作路径限制（`restrict_to_workspace: true`）时，执行 `curl` 等非路径命令会被正则错误解析为相对路径（如 `../../../../Beijing?T`），直接拦截导致技能失效。
  - **状态**：尚未有对应的修复 PR，需优先关注。
- **🟠 P1：Provider 404 错误缺乏降级容错** ([Issue #2479](https://github.com/sipeed/picoclaw/issues/2479)) | **已关闭**
  - **表现**：使用 NVIDIA API 调用 deepseek-v3.1 等模型失败时抛出 404，导致 LLM 重试彻底失败。已通过允许 404 进行 fallback 切换的 [PR #2394](https://github.com/sipeed/picoclaw/pull/2394) 修复。
- **🟠 P1：Opus 音频解码内存复用导致数据损坏** ([PR #2504](https://github.com/sipeed/picoclaw/pull/2504))
  - **表现**：Discord 语音通道中 OGG 解码器复用 Buffer 切片导致音频帧损坏。目前已有开源修复 PR 等待合并。
- **🟡 P2：Cron 定时任务静默失败** ([PR #2501](https://github.com/sipeed/picoclaw/pull/2501))
  - **表现**：提醒功能静默丢失。提交者已提交包含声明/重试/审计状态机制的 PR。

## 6. 功能请求与路线图信号

从近期的 Issue 和 PR 动态中，可以明显观察到项目正在向**多实例、高并发、强安全**的路线演进：

- **飞书多应用支持**：用户在 [Issue #2493](https://github.com/sipeed/picoclaw/issues/2493) 提出运行多飞书应用实例的需求。结合今日合并的多 Channel 实例重构 ([PR #2481](https://github.com/sipeed/picoclaw/pull/2481))，**预计该功能将在近期纳入主干并发布**。
- **Agent Shield 安全防护集成**：[PR #2313](https://github.com/sipeed/picoclaw/pull/2313) 提出了大规模的安全与多用户白名单重构。这标志着 PicoClaw 正在积极强化作为企业级多租户助手的安全边界。
- **配置与路由灵活性优化**：社区正在积极修复模型路由匹配 ([PR #2393](https://github.com/sipeed/picoclaw/pull/2393)) 和钉钉通道错误提示 ([PR #2392](https://github.com/sipeed/picoclaw/pull/2392))，预示着 v0.2.6 稳定版将重点关注多渠道接入的鲁棒性。

## 7. 用户反馈摘要

从 Issue 提交及日常修复中，可以提取出以下典型的用户真实场景与反馈：

- **痛点：严苛且粗暴的沙箱安全策略**：高级用户在使用工具（如天气查询）时，深受其正则误判之苦（[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)），安全限制干扰了正常的无路径命令执行。
- **痛点：第三方客户端接入困难**：开发者希望将 PicoClaw 集成到自己的桌面工具或浏览器中，但目前的 WS 鉴权和兼容性设计仅局限在官方 WebUI，存在较高的接入门槛（[Issue #2499](https://github.com/sipeed/picoclaw/issues/2499)）。
- **场景：多账号集中管理需求**：运营类用户明确表达需要在同一套环境中挂载多个飞书/微信应用实例（[Issue #2493](https://github.com/sipeed/picoclaw/issues/2493)），说明 PicoClaw 正在被应用于更复杂的社群矩阵管理场景。

## 8. 待处理积压

以下重要 PR/Issue 已停滞较长时间或需维护者即刻介入处理，建议优先排期：

- **[PR #2394](https://github.com/sipeed/picoclaw/pull/2394) & [PR #2393](https://github.com/sipeed/picoclaw/pull/2393)**：由 @darrenzeng2025 提交的一系列 Provider Fallback 和 Config 修复 PR（AI 辅助生成），已开启超过 6 天仍未合并，建议团队尽快 Review 以改善模型调用的稳定性。
- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)**：exec 工具的安全拦截误报问题已存在 40 多天，直接影响了工具调用场景的可用性，亟需代码层面的重构修复。
- **[Issue #2506](https://github.com/sipeed/picoclaw/issues/2506)**：CLA 协议指向 "SAP" 的错误属于开源项目的严重合规纰漏，建议维护者**今日内**排查 CLA Assistant 配置并更正协议文本。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
NanoClaw 项目在过去 24 小时内保持了**高度活跃**的开发状态。社区共提交了 14 个 Pull Requests（其中 8 个待合并，6 个已合并/关闭），并产生了 5 条 Issue 更新（4 条新开/活跃，1 条关闭）。虽然今日无新版本发布，但从 PR 涵盖的范围来看，项目正处于**功能大扩展与生态集成**的密集建设期。今日的代码提交重点围绕多渠道通信支持（Matrix、Discord、邮件、电话）、Agent 记忆与工具链增强，以及容器稳定性的底层修复。整体来看，项目健康度良好，社区贡献热情高涨。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，显著推进了项目的多平台集成能力、隐私安全和 Agent 智能化水平，项目整体向前迈进了一大步：
*   **[CLOSED] feat: complete ENG-123 sqlite-first self-improving memory agent** ([PR #1743](https://github.com/qwibitai/nanoclaw/pull/1743)): 里程碑式更新。引入了基于 SQLite 的自改进记忆代理，包含分阶段记忆检索、置信度反馈和整合机制，大幅提升了 Agent 的长期记忆与上下文连贯性。
*   **[CLOSED] feat: extend PII protection to PDFs and images** ([PR #1563](https://github.com/qwibitai/nanoclaw/pull/1563)): 安全性重大升级。将个人身份信息（PII）保护扩展至 PDF 和图像文件，确保容器隔离环境无法接触到原始敏感数据。
*   **[CLOSED] feat(discord): multi-bot support with per-bot trigger injection** ([PR #1765](https://github.com/qwibai/nanoclaw/pull/1765)): 完善了 Discord 生态，支持在单个实例中运行多个不同身份的 Bot。
*   **[CLOSED] feat: add youtube-transcript-api to agent container** ([PR #1754](https://github.com/qwibitai/nanoclaw/pull/1754)): 增强了 Agent 的信息获取能力，允许其直接提取 YouTube 视频的字幕文本。
*   **[CLOSED] feat: MS Graph MCP bridge for container access** ([PR #1766](https://github.com/qwibitai/nanoclaw/pull/1766)): 增加了微软 Graph API 的桥接支持。

## 4. 社区热点
今日讨论度最高、最受关注的议题是关于**底层容器运行架构的突破与痛点**：
*   **[OPEN] feat: native runner mode — bypass Docker for host-tool access ([Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732))**：该 Issue 获得了较多关注（2 条评论）。由社区核心贡献者提出，直击当前架构的痛点——严格的容器隔离导致无法直接访问宿主机的 `tmux`、带界面的浏览器以及 macOS 底层 API。这反映了社区对 NanoClaw 从“纯云端隔离 Agent”向“深度参与宿主机 OS 操作的智能体”演进的强烈诉求。

## 5. Bug 与稳定性
今日报告了数个与容器化和部署相关的关键 Bug，均集中在 Linux/宿主机与容器的交互边界：
*   **🔴 严重 [OPEN] Container agent fails silently when TypeScript compilation errors** ([Issue #1762](https://github.com/qwibitai/nanoclaw/issues/1762)): 
    *   **现象**：当 `agent-runner` 出现 TS 编译错误时，容器会静默崩溃且无日志输出，导致网关不断重试生成相同的失败容器，所有 Agent 集体“失声”。
    *   **状态**：暂无关联 Fix PR，需优先解决。
*   **🟡 中等 [OPEN] Container UID mismatch — host creates root-owned dirs** ([Issue #1763](https://github.com/qwibitai/nanoclaw/issues/1763)):
    *   **现象**：Host 以 root 创建的目录导致容器内的 `node` 用户 (UID 1000) 遭遇 `EACCES` 权限拒绝错误而崩溃。建议引入 `chownForContainer()` 辅助函数。
    *   **状态**：暂无关联 Fix PR。
*   **🟡 中等 [OPEN] Clean up stale Claude Code sessions on EFS** ([Issue #1761](https://github.com/qwibitai/nanoclaw/issues/1761)):
    *   **现象**：EFS 上的陈旧会话数据导致 Agent 恢复对话时失败。影响多实例和本地开发同步场景。

## 6. 功能请求与路线图信号
今日涌现了大量涵盖多渠道通信、MCP 工具扩展的新功能 PR，揭示了项目下一阶段的发展方向——**全平台、多模态交互与微支付集成**：
*   **通信渠道扩展**：
    *   **[OPEN] feat: add Matrix channel via matrix-js-sdk with full E2EE support** ([PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)): 引入 Matrix 协议并支持端到端加密。
    *   **[OPEN] feat: IMAP/SMTP email integration** ([PR #1764](https://github.com/qwibitai/nanoclaw/pull/1764)): 赋予 Agent 收发邮件的能力。
    *   **[OPEN] feat: add Twilio fallback call** ([PR #1760](https://github.com/qwibitai/nanoclaw/pull/1760)): 增加 Twilio 电话呼叫的备用降级策略。
*   **Agent 工具链与生态**：
    *   **[OPEN] skill: add-agentcash — pay-per-call API access via x402 micropayments** ([PR #1767](https://github.com/qwibitai/nanoclaw/pull/1767)): 引入基于 x402 协议的 API 按调用微支付功能，这可能是 Agent 商业化运行的一个重要实验。
    *   **[OPEN] feat: add send_file MCP tool for delivering files to chat** ([PR #1757](https://github.com/qwibitai/nanoclaw/pull/1757)): 允许 Agent 将生成的文件直接发送回聊天界面。
*   **预期研判**：Matrix 支持、邮件集成以及底层的 `send_file` 工具机制已具备较高完成度，极有可能会在下一版本中合入主线。

## 7. 用户反馈摘要
通过今日的 Issue 提炼，真实用户在生产环境使用中遇到的核心痛点如下：
1.  **调试体验差（Silent Failures）**：用户反馈 Agent 在容器内遇到错误时“静默失败”（[Issue #1762](https://github.com/qwibitai/nanoclaw/issues/1762)），没有错误抛出，这在多 Agent 编排中极大地增加了排查难度。
2.  **容器与宿主机的权限摩擦**：在 Linux 环境下以 root 运行 Host 时，常常遇到容器内权限不足的问题（[Issue #1763](https://github.com/qwibitai/nanoclaw/issues/1763)）。
3.  **隔离环境带来的限制**：有进阶用户明确表示，强隔离阻断了对 `tmux`、 headed browsers 的调用，阻碍了更高级的自动化测试和系统级 Agent 任务的实现（[Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732)）。

## 8. 待处理积压
虽然当前项目处于活跃迭代期，但以下积压问题需要维护者重点关注：
*   **长期悬而未决的 PR**：[PR #82](https://github.com/qwibitai/nanoclaw/pull/82) 自 2026 年 2 月 5 日开启至今已达 2 个月，且无实质性内容描述，建议维护者进行评估并清理。
*   **关键底层异常**：今日暴露的 TypeScript 编译静默崩溃问题（[Issue #1762](https://github.com/qwibitai/nanoclaw/issues/1762)）直接影响服务的可用性，目前处于无响应状态，需尽快指派排查。
*   **配置与文档陈旧**：随着近期功能的大幅重构，诸如 `geo-miner` 技能和 Obsidian 布局已发生改变，需及时合入文档修复（如 [Issue #1755](https://github.com/qwibitai/nanoclaw/issues/1755) 和 [PR #1759](https://github.com/qwibitai/nanoclaw/pull/1759)），以免对新用户产生误导。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-14)

## 1. 今日速览
IronClaw 在过去 24 小时内保持着**高度活跃**的开发与测试状态。项目今日未发布新版本，但迎来了 44 条 Issue 更新（新开/活跃 37 条，关闭 7 条）和 50 条 PR 更新（待合并 45 条，合并/关闭 5 条）。活动主要集中在 **Web UI 稳定性修复、Agent 并发执行架构优化，以及多租户数据库性能提升**。值得注意的是，核心开发者今天集中推进了多线程并行消息处理和跨通道工具调用的核心架构 PR，表明项目正在为高并发、多租户的企业级部署场景蓄力。

## 2. 版本发布
今日无新版本发布。（当前最新发布版本依旧处于空缺状态，开发重心仍在 `staging` 分支的迭代与 QA 测试上）。

## 3. 项目进展
今日有多个高优 PR 被关闭或取得重大进展，项目在底层架构和稳定性上迈出了坚实的一步：
*   **ACP 沙箱任务持久化修复 ([PR #2416](https://github.com/nearai/ironclaw/pull/2416))**：修复了在 ACP 模式下创建沙箱任务时的竞态条件。此前由于持久化与状态更新的异步时序问题，任务模式会丢失并回退为默认状态，该 PR 的合并显著提升了沙箱执行引擎的可靠性。
*   **Railway 部署体验优化 ([PR #2244](https://github.com/nearai/ironclaw/pull/2244), [PR #2242](https://github.com/nearai/ironclaw/pull/2242))**：调整了 Dockerfile 的构建顺序，并修复了 Railway 平台的缓存失效问题，极大改善了一键部署的用户体验。

**待合并的核心推进（已提交待 Review）：**
*   **数据库设置缓存装饰器 ([PR #2425](https://github.com/nearai/ironclaw/pull/2425))**：引入了 `CachedSettingsStore`，这将为高频调用的 Agent 循环提供极大的数据库读取性能提升。
*   **轻量运行时模式 ([PR #2418](https://github.com/nearai/ironclaw/pull/2418))**：针对高密度的多租户环境引入了单线程 `tokio` 运行时和精简 Docker 镜像，是迈向 SaaS 化部署的关键一环。

## 4. 社区热点
今日社区讨论最热烈的话题集中在**第三方服务集成与产品易用性**：
*   **Google OAuth 阻断问题 ([Issue #2229](https://github.com/nearai/ironclaw/issues/2229), 评论 5)**：用户在 QA 测试中遇到了 Google Sheets 授权的 `Error 400`。由于 Google 生态集成本身是 Agent 自动化的刚需，此阻断问题引发了大量讨论。
*   **易用性体验短板 ([Issue #1852](https://github.com/nearai/ironclaw/issues/1852), 评论 4)**：一位社区用户一针见血地指出，虽然项目底层能力强，但对于非 IT 背景的用户来说配置门槛过高（如繁琐的环境变量与凭证配置），呼吁提供更友好的引导界面。
*   **ARM 架构支持缺失 ([Issue #1339](https://github.com/nearai/ironclaw/issues/1339), 评论 1)**：用户尝试在树莓派上编译失败，提示不支持 `armv7`，暴露出项目在边缘计算/轻量设备端的兼容性盲区。

## 5. Bug 与稳定性
今日 QA 团队及社区集中报告了大量 Bug（其中包含多个阻断性问题），Web UI 与 Agent 循环稳定性成为重灾区：

**严重级别：高（功能阻断/循环崩溃）**
*   **上下文长度溢出 ([Issue #2408](https://github.com/nearai/ironclaw/issues/2408))**：在长对话中，输入超出了模型 200K 的 Token 限制，导致报错。尚未有对应修复 PR。
*   **Agent 陷入死循环 ([Issue #2402](https://github.com/nearai/ironclaw/issues/2402))**：在执行工具操作后，Bot 陷入了无休止的 "Calling LLM" 状态。尚未有对应修复 PR。
*   **LLM 有效载荷过大 HTTP 413 ([Issue #2276](https://github.com/nearai/ironclaw/issues/2276))**：多步工具调用导致请求体超限，编排器直接崩溃。
*   **Google OAuth 拼写错误 ([Issue #2391](https://github.com/nearai/ironclaw/issues/2391))**：极其细微但影响致命的 Bug——代码中将 `access_type` 拼写为 `'offlin'` 导致无法获取刷新令牌。

**严重级别：中（UI 交互与逻辑错误）**
*   **页面黑屏与无响应 ([Issue #2406](https://github.com/nearai/ironclaw/issues/2406))**：长时间压测后出现页面级崩溃。
*   **聊天记录丢失/刷新异常 ([Issue #2409](https://github.com/nearai/ironclaw/issues/2409), [Issue #2404](https://github.com/nearai/ironclaw/issues/2404))**：用户发送消息消失，以及切换标签页导致整页强制重载。
*   **Tool 重复失败重试 ([Issue #2240](https://github.com/nearai/ironclaw/issues/2240), 状态已关闭)**：当工具调用失败时，Agent 会盲目重试同一操作达 50 次。
*   **Vision 多模态兼容性缺陷 ([Issue #2378](https://github.com/nearai/ironclaw/issues/2378), 状态已关闭)**：与 OpenAI 兼容的视觉模型交互时，因缺少 `detail` 字段报错。

## 6. 功能请求与路线图信号
从近期的高质量 PR 和 Issues 来看，项目的下一步路线图指向非常明确：**企业级权限、RAG 浏览器工具和智能路由**。
*   **内置浏览器工具 ([Issue #2360](https://github.com/nearai/ironclaw/issues/2360))**：开发组长提出了基于 `chromiumoxide` CDP 的内置浏览器 RAG 工具计划，以解决现有 HTTP 工具无法处理 JS 渲染页面的问题。这是迈向 "全能自主 Agent" 的核心拼图。
*   **企业级权限管理面板 ([Issue #1609](https://github.com/nearai/ironclaw/issues/1609))**：配套的 Web UI 管理面板正在积极开发中 ([PR #1963](https://github.com/nearai/ironclaw/pull/1963))，涵盖了用户和组织的管理，预示着 B2B 服务的准备。
*   **细粒度权限隔离 RBAC ([Issue #1608](https://github.com/nearai/ironclaw/issues/1608))**：引入工作空间维度的权限控制矩阵，配合前述的 SSO/OIDC 集成 ([Issue #1610](https://github.com/nearai/ironclaw/issues/1610))，表明项目正在攻克企业客户的安全痛点。

## 7. 用户反馈摘要
通过分析社区反馈，当前用户的真实痛点主要集中在以下几个方面：
1. **版本升级有风险**：多位用户反馈 ([Issue #1846](https://github.com/nearai/ironclaw/issues/1846)) 使用 UI 提供的升级按钮进行版本跳跃（如 0.24 到 0.21）会导致严重的数据丢失和配置失效，说明目前的迁移脚本或回滚机制不够健壮。
2. **环境变量配置黑盒**：用户在使用云厂商一键部署时，常常遇到环境变量不生效的问题 ([Issue #1680](https://github.com/nearai/ironclaw/issues/1680) - Railway 模型锁定在 Anthropic Sonnet 无法更改；[Issue #1820](https://github.com/nearai/ironclaw/issues/1820) - 密钥存储不可用导致 OpenRouter 配置失败)。
3. **通道状态展示不直观**：Telegram Open 模式的配置常常让新手困惑，导致 Web 端和客户端身份分裂 ([Issue #2426](https://github.com/nearai/ironclaw/issues/2426))，亟需文档提示和状态显示优化。

## 8. 待处理积压
以下重要问题目前尚未得到妥善处理，提醒维护者关注：
*   **多步任务 API 路由错乱 ([Issue #2287](https://github.com/nearai/ironclaw/issues/2287))**：用户上传发票，Bot 却错误调用了邮件订阅 API (`convertkit.com/subscribe`)，这暴露出 Agent 在工具选择和 API 路由规划上可能存在严重幻觉或路由表缺陷。
*   **执行模式误判 ([Issue #2286](https://github.com/nearai/ironclaw/issues/2286))**：Bot 忽略立即执行的指令，反而自行创建了 Cron 定时任务。
*   **Aliyun 提供商支持停滞 ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))**：这个由社区贡献、旨在支持阿里云百炼计划的 PR 自 3 月 20 日提交以来，一直处于 Open 状态且未得到核心团队的 Review，这对于亚太区用户接入是一个阻碍。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-04-14)

**数据统计周期**：过去 24 小时 | **分析期**：2026-04-13

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持了**极高的开发活跃度**，单日 PR 更新量达到 22 条（其中 15 条已合并/关闭），并成功交付了 `2026.4.13` 正式版本。项目当前的重心集中在系统稳定性增强（特别是 OpenClaw 运行时的会话生命周期和鉴权机制）、核心代码质量提升（全面清除 ESLint 错误）以及 UI 体验的个性化打磨。整体来看，项目处于高度健康、快速迭代的状态，但近期多笔 Revert PR 及潜伏的配置覆盖问题，提示在多模块协同和状态管理方面仍面临一定的复杂性挑战。

---

## 2. 版本发布

📦 **新版本**: `LobsterAI 2026.4.13` 
[View Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.4.13)

- **更新内容**：
  - **构建优化**：通过异步移除旧目录（`async old dir removal`），大幅提升 Windows 平台 NSIS 覆盖安装的速度 ([#1633](https://github.com/netease-youdao/LobsterAI/pull/1633))。
  - **稳定性修复**：修复了计划任务保存后脏状态未正确重置的问题 ([#1645](https://github.com/netease-youdao/LobsterAI/pull/1645))。
  - **OpenClaw 增强**：回填（Backfill）会话保持时长策略，统一了会话连续性的默认值 ([#1638](https://github.com/netease-youdao/LobsterAI/pull/1638))。
  - **架构重构**：统一了 providers 的配置元数据。
- **破坏性变更与迁移注意**：暂无明显破坏性 API 变更，但鉴于对 OpenClaw 和 providers 配置同步机制的重构，建议升级用户密切关注自定义模型提供商的配置状态，以及飞书群聊的默认策略变更。

---

## 3. 项目进展

今日共有 **15 个 PR 被合并或关闭**，项目在质量保障、运行时稳定性和架构优化方面取得了实质性进展：

- **代码质量提升**：[#1498](https://github.com/netease-youdao/LobsterAI/pull/1498) 成功修复了全量 165 个 ESLint error（包含 164 个导入排序和 1 个不可达代码错误），为后续持续集成提供了更健康的代码基座。
- **运行时异常拦截**：[#1654](https://github.com/netease-youdao/LobsterAI/pull/1654) 修复了 OpenClaw 升级后模型不可达（如 402 错误）时会话卡在“执行中”的严重问题，补齐了 `phase=error` 的兜底策略。
- **鉴权机制修复**：[#1647](https://github.com/netease-youdao/LobsterAI/pull/1647) 解决了 MCP Bridge 在启动时因竞态条件导致鉴权不一致（401 auth mismatch）的隐患。
- **配置架构重构**：[#1646](https://github.com/netease-youdao/LobsterAI/pull/1646) 整合了 provider 元数据到共享注册中心，修复了 MiniMax 的 OpenClaw 同步问题及状态陈旧隐患。
- **协同与 IM 改进**：[#1648](https://github.com/netease-youdao/LobsterAI/pull/1648) 修复了创建 Agent 时不支持多机器人的问题；[#1649](https://github.com/netease-youdao/LobsterAI/pull/1649) 修复了技能创建路径提示错误的目录。

---

## 4. 社区热点

今日最受关注的动向主要集中在系统健壮性和 UI 交互体验的探讨：

- **[PR #1661] 日志脱敏机制**：[查看详情](https://github.com/netease-youdao/LobsterAI/pull/1661)
  开发者 `flowell` 提交了针对主进程导出日志的敏感信息（API Key、Bearer token 等）脱敏工具。在企业级私有化部署和排查Debug的场景中，数据安全合规是核心痛点，此 PR 直击运维安全诉求。
- **[PR #1660] 非 main agent 首页欢迎语定制**：[查看详情](https://github.com/netease-youdao/LobsterAI/pull/1660)
  开发者 `gongzhi-netease` 优化了多 Agent 切换体验，将固定文案改为动态显示当前 agent 的名称和描述（如 `Hi，我是内容总结助手`）。这反映了项目在多 Agent 协同（Cowork）方向上正致力于提升用户的个性化感知。
- **[PR #1656] & [PR #1655] 连续 Revert 操作**：[查看详情 1](https://github.com/netease-youdao/LobsterAI/pull/1656) | [查看详情 2](https://github.com/netease-youdao/LobsterAI/pull/1655)
  核心维护者 `liuzhq1986` 连续回退了两个关于 workspace 路径和技能目录修复的 PR。这说明在多 Agent 工作空间路径隔离的架构设计上，现有方案可能存在未覆盖的边界情况，需要寻找更稳健的重构方案。

---

## 5. Bug 与稳定性

今日报告及修复的 Bug 主要围绕状态覆盖、路径匹配和超时控制，按严重程度排列如下：

🟠 **严重 (High)**：
- **群组策略被异常覆盖**：[Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653) 
  - 现象：飞书的 Group Policy 每过一会就被覆盖为 allowlist。
  - 状态：**尚未有明确的修复 PR 提交**，疑似与近期 OpenClaw 的 config hot-reload（热加载）或网关重启机制引发的竞态有关联。
- **生命周期错误未传递导致会话假死**：[PR #1654](https://github.com/netease-youdao/LobsterAI/pull/1654)（已修复并关闭）
  - 现象：模型认证失败（402）时，前端无响应，会话一直显示执行中。

🟡 **中等**：
- **MCP Bridge 401 鉴权失败**：[PR #1647](https://github.com/netease-youdao/LobsterAI/pull/1647)（已修复并关闭）
  - 现象：网关启动时使用了未配置的 Secret，导致启动初期的 MCP 调用鉴权失败。
- **非 main agent 人设文件加载失败**：[PR #1651](https://github.com/netease-youdao/LobsterAI/pull/1651)（已关闭，因被 Revert 重新打开）
  - 现象：非默认 Agent 读取 SOUL.md 等文件时发生工作空间路径错配。目前已通过 [PR #1657](https://github.com/netease-youdao/LobsterAI/pull/1657) 重新尝试修复。

🔵 **低**：
- **偶现任务提前超时**：[PR #1652](https://github.com/netease-youdao/LobsterAI/pull/1652)（已合并诊断日志）
  - 现象：QA 偶现对话未达阈值（3600s）却被提示超时。目前暂未修复根因，已埋点 `[AbortDiag]` 日志以便下次复现时追踪。

---

## 6. 功能请求与路线图信号

通过对当前活跃 PR 的分析，可以洞察出项目近期的演进路线图：

1. **大规模对话性能优化（列入排期）**：
   长期开放的 [PR #924](https://github.com/netease-youdao/LobsterAI/pull/924) 正在引入会话列表与消息历史的分页加载机制（默认 50 条/页），旨在解决重度用户在使用全量数据加载时导致的内存激增和渲染卡顿问题。这标志着 LobsterAI 正在向支撑更重型工作负载的目标迈进。
2. **自动化依赖生态升级（持续推进）**：
   [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 计划将 Electron 升级至 v41.1.1，以及 [PR #1278](https://github.com/netease-youdao/LobsterAI/pull/1278) 将 Anthropic Claude Agent SDK 升级至 0.2.90。这保证了桌面端底层容器的现代化和 AI 能力的与时俱进。

---

## 7. 用户反馈摘要

从今日的 Issue 动态提炼真实用户痛点：

- **配置状态不持久**（来源：[Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653)）：用户明确表达了对于“策略被频繁覆盖”的困扰。这反映出在引入底座 OpenClaw 热更新机制后，前端可见的“静态配置”与底层“动态同步”之间产生了割裂，用户失去了对 Group Policy 的绝对控制感，急需在 UI 层面增加配置锁定或冲突提示机制。

---

## 8. 待处理积压

以下重要事项处于 Open 状态，建议维护团队持续关注或推进：

1. 🔴 **[Issue #1653](https://github.com/netease-youdao/LobsterAI/issues/1653) (Group Policy 覆盖问题)**：刚爆出的 Bug，影响企业级群控管理，需尽快排期定位根因。
2. 🟡 **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) & [PR #1278](https://github.com/netease-youdao/LobsterAI/pull/1278) (核心依赖升级)**：由 Dependabot 提起的 Electron 41 和 Claude SDK 升级已挂起近 2 周，涉及底层大版本变动，需尽快安排 QA 进行适配回归验证。
3. 🟡 **[PR #1657](https://github.com/netease-youdao/LobsterAI/pull/1657) & [PR #1656](https://github.com/netease-youdao/LobsterAI/pull/1656) (Agent 路径状态修复)**：目前处于 Revert 与 Re-apply 的反复状态，证明 `workspace` 隔离设计需要更严谨的架构评审，避免引发更多文件读取错乱的回归。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the daily project status report for Moltis based on the GitHub data provided.

---

# 📊 Moltis 项目动态日报 (2026-04-14)

## 1. 今日速览
Moltis 项目在过去 24 小时内呈现出**极高的开发活跃度和出色的项目维护状态**。团队以惊人的执行力于单日内合并了多达 17 个 Pull Requests，并彻底清零了过去 24 小时内新增及活跃的 7 个 Issues（实现 100% 关闭率）。此外，项目在一天内连续发布了 2 个新版本，这标志着 Moltis 正处于密集的功能迭代与架构重构并行的快速上升期。从 PR 属性来看，项目不仅在积极引入 XMPP 等新通道，还在大力进行底层网关的解耦和重构，整体项目健康度极佳。

## 2. 版本发布
项目今日连续切出了两个正式版，属于高度活跃的持续交付模式：
*   **20260413.03**: 最新稳定版，包含了今日绝大部分的热修复（如 MCP 工具模式兼容性、参数序列化修复）以及 UI 层面的优化（如 Token 缓存展示、会话归档功能）。
*   **20260413.01**: 较早的迭代版本，主要集成了 Web UI 端的本地语音提供商设置和底层的 Rust 模块拆分重构。
*(注：官方 Release Log 未附带详细破坏性变更说明，但结合当日核心 PR，推测针对 OpenAI 兼容层及 MCP 工具调用逻辑存在一定修改，建议升级时关注 Tool Schema 的结构兼容性。)*

## 3. 项目进展
今日共有 17 个 PR 被合并，项目在**功能丰富度、架构解耦、系统稳定性**三方面取得了重大进展：
*   **核心架构去中心化**：贡献者 `Cstewart-HC` 提交了多个重构 PR（[#690](https://github.com/moltis-org/moltis/pull/690), [#691](https://github.com/moltis-org/moltis/pull/691), [#688](https://github.com/moltis-org/moltis/pull/688), [#685](https://github.com/moltis-org/moltis/pull/685), [#683](https://github.com/moltis-org/moltis/pull/683)），成功提取了 Node 执行逻辑和 MCP 服务逻辑，削弱了 Gateway 的“上帝对象”地位，极大提升了后续的扩展性。
*   **外部生态与通道支持**：`penso` 推进了重量级长任务 PR 的合并，包括正式引入 XMPP 通道支持（[#48](https://github.com/moltis-org/moltis/pull/48)）、支持 Browserless v2 的 WebSocket 路径（[#659](https://github.com/moltis-org/moltis/pull/659)）。
*   **多媒体与本地化部署**：新增了 Voicebox 本地声音克隆提供商（[#199](https://github.com/moltis-org/moltis/pull/199)），并支持本地化 Whisper / OpenAI TTS/STT 的 Base URL 配置（[#499](https://github.com/moltis-org/moltis/pull/499), [#700](https://github.com/moltis-org/moltis/pull/700)）。
*   **底层优化**：[#689](https://github.com/moltis-org/moltis/pull/689) 优化了 Telegram 文档的持久化机制，[#695](https://github.com/moltis-org/moltis/pull/695) 消除了 oversized Rust 文件，提升了代码可维护性。

## 4. 社区热点
目前社区的关注焦点高度集中在**AI 提供商的兼容性**与**长上下文资源管理**上：
*   **[#548](https://github.com/moltis-org/moltis/issues/548) [最多评论: 5]**：用户 `BLumia` 呼吁增加应用或通道级别的代理支持。在私有化部署场景下，网络出口限制是普遍痛点，该 Issue 获得了较多探讨，表明 Moltis 在企业级内网/代理环境下的使用需求正在增加。
*   **[#646](https://github.com/moltis-org/moltis/issues/646) [评论: 3]**：用户 `krsyoung` 反馈的远程部署登录失败问题。这类阻断性 Bug 能够快速引发讨论，说明用户对系统初始化与鉴权流程的稳定性非常敏感。
*   **[#701](https://github.com/moltis-org/moltis/issues/701) [最多点赞: 1]**：用户 `vvuk` 提出的会话归档功能建议（Session Archiving）。此需求精准契合了高频使用者在大量对话堆积后的管理焦虑，且在当日即被实现并合并（[#702](https://github.com/moltis-org/moltis/pull/702)），体现了团队对社区诉求的极速响应。

## 5. Bug 与稳定性
今日报告了数个关键的 Bug，**且所有 Bug 均已提供修复 PR 并在当日随新版本发布解决**，展现了强大的工程兜底能力：
*   **P0 - 核心工具调用回归**：
    *   **[#693](https://github.com/moltis-org/moltis/issues/693) & [#697](https://github.com/moltis-org/moltis/pull/697)**：修复了 OpenAI 兼容提供者下，工具参数（`0`, `false`, `null` 等）被错误序列化的问题。
    *   **[#696](https://github.com/moltis-org/moltis/pull/696)**：修复了内部 `*_wasm` 工具泄漏给模型，以及 cron 提醒工具导致的回调崩溃回归。
*   **P1 - MCP 工具生态兼容性**：
    *   **[#694](https://github.com/moltis-org/moltis/issues/694) & [#698](https://github.com/moltis-org/moltis/pull/698)**：Moltis 未能正确清洗包含 `not` 等 JSON Schema draft-2020-12 关键字的 MCP 工具，导致无法使用 Attio 等第三方 MCP 工具。此缺陷已通过引入严格模式的 Schema 消毒机制解决。

## 6. 功能请求与路线图信号
从近期的 Issue 提示与 PR 动作来看，Moltis 的近期路线图正朝着以下方向演进：
*   **企业级网络穿透**：[#548 呼吁的 Proxy 支持] 是打通大型企业内网部署的最后一公里。
*   **透明的 Token 经济学**：[#692](https://github.com/moltis-org/moltis/issues/692) 要求在 UI 中显示缓存的 Input Token。该需求已被 [#699](https://github.com/moltis-org/moltis/pull/699) 实现。这释放了一个信号：Moltis 正致力于帮助用户在使用大模型时更好地监控和降低 Token 成本。
*   **全栈本地化/隐私化 AI**：结合 Voicebox TTS、本地 Whisper STT（[#570](https://github.com/moltis-org/moltis/issues/570)）的接连合入，Moltis 正在构建一个完全脱离 SaaS 云端 API 依赖的“100% 本地化 AI 智能体”解决方案。

## 7. 用户反馈摘要
*   **部署痛点**：用户在远程部署时遇到登录阻碍（[#646](https://github.com/moltis-org/moltis/issues/646)），暗示当前的部署鉴权机制可能在复杂网络环境下存在边界情况。
*   **重度使用体验**：用户开始关心“如何管理历史对话”（归档需求 [#701](https://github.com/moltis-org/moltis/issues/701)）以及“精细化的 Token 消耗对账”（缓存 Token 可视化 [#692](https://github.com/moltis-org/moltis/issues/692)），说明 Moltis 正在吸引一批高粘性、高频使用的深度用户。
*   **生态集成期望**：开发者希望无缝接入各类现有的 MCP Server（如 Attio），对系统的 JSON Schema 容错率和健壮性提出了更高要求（[#694](https://github.com/moltis-org/moltis/issues/694)）。

## 8. 待处理积压
基于当日数据，过去 24 小时的 Issue 积压清理率达到了 100%，项目处于零积压的健康状态。
*   值得注意的是，作者 `Cstewart-HC` 和 `penso` 正在推进一系列庞大的**原子化重构系列**。目前网关解耦已经完成多个阶段（提取了 Node、MCP、Broadcaster 等模块），后续必然还有关于 GraphQL 和 GatewayState 完全剥离的 PR。维护者需持续关注多轮重构是否会给外部贡献者带来合并冲突等门槛。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 **CoPaw (QwenPaw)** 项目 2026-04-14 动态日报：

---

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-04-14)

## 1. 今日速览
过去 24 小时内，CoPaw 项目处于**高度活跃**状态。社区共产生了 40 条 Issue 更新（28 条新开/活跃，12 条关闭）和 50 条 PR 更新（20 条已合并/关闭），整体开发与迭代节奏极快。项目今日正式发布了 `v1.1.1-beta.1` 版本，主要进行了品牌升级（Logo 更新）与版本迭代。社区目前的核心焦点在于 **CoPaw 向 QwenPaw 的品牌过渡及平滑升级问题**，以及针对多渠道（飞书、QQ、微信）的稳定性修复和底层工具调用的安全与可见性增强。

## 2. 版本发布
- **[v1.1.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.1-beta.1)**
  - **更新内容**：更新了项目 News 文档，替换了新的 IP Logo，并将版本号提升至 `1.1.1b1`。
  - **迁移注意**：目前项目处于从 `CoPaw` 向 `QwenPaw` 命名迁移的过渡期。部分用户反馈升级后出现 `qwenpaw` 命令找不到的情况，且本地存在 `.copaw` 和 `.qwenpaw` 文件夹共存的问题。建议开发者和用户密切关注文档更新，遇到路径或环境变量问题时参考最新 Discussions。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，在安全性、渠道接入和工具调用方面取得了显著进展：
- **安全修复**：合入了 `localhost API auth bypass` 的安全修复 ([PR #2840](https://github.com/agentscope-ai/QwenPaw/pull/2840))，修复了在反向代理或同主机隧道下可能被绕过鉴权的严重漏洞。
- **渠道稳定性**：
  - 修复了钉钉（AI Card 模式）无法发送图片及 base64 溢出的问题 ([PR #3337](https://github.com/agentscope-ai/QwenPaw/pull/3337))。
  - 优化了浏览器启动策略与无头模式，减少了自动化检测特征，缓解了被网页人机验证拦截的问题 ([PR #3164](https://github.com/agentscope-ai/QwenPaw/pull/3164))。
- **模型兼容性**：合入了针对 vLLM 的兼容性修复，移除了 `tool_choice=auto` 以避免部分私有部署的 400 报错 ([PR #3295](https://github.com/agentscope-ai/QwenPaw/pull/3295))。
- **前沿功能探索**：正在密集 Review 关于 ACP（Agent Communication Protocol）外部代理委托与实时工具输出管道的 PR ([PR #3340](https://github.com/agentscope-ai/QwenPaw/pull/3340))。

## 4. 社区热点
- **品牌更名引发的困惑**：**[#3336](https://github.com/agentscope-ai/QwenPaw/Issue/3336)**（👍 3，评论 2）和 **[#3309](https://github.com/agentscope-ai/QwenPaw/Issue/3309)**（评论 4）。多位用户对 CoPaw 更名为 QwenPaw 表示不理解和吐槽，认为原有的品牌更有辨识度，且升级后双文件夹共存、环境变量未自动配置等问题导致体验割裂。
- **平滑升级诉求**：**[#3288](https://github.com/agentscope-ai/QwenPaw/Issue/3288)**（评论 23）。用户集中求助如何将原 CoPaw 的 Agent 配置、记忆和工作流无缝迁移至 QwenPaw，这是当前社区最迫切的痛点。
- **任务认领池活跃**：**[#2291](https://github.com/agentscope-ai/QwenPaw/Issue/2291)**（评论 55）。项目的开源贡献任务池持续保持极高活跃度，社区开发者正在积极认领功能（如文件操作回滚等）。

## 5. Bug 与稳定性
按严重程度排列今日报告的 Bug：
- **P0 - 核心运行中断/数据丢失**：
  - **[#3344](https://github.com/agentscope-ai/QwenPaw/Issue/3344)**：Master key 变更或损坏导致解密失败，微信 channel 定时任务直接崩溃，且无法发送消息。（*目前尚无针对性 Fix PR*）
- **P1 - 多智能体与任务阻塞**：
  - **[#3331](https://github.com/agentscope-ai/QwenPaw/Issue/3331)**：多 Agent 飞书环境下，WebSocket 跨 loop 报错导致框架崩溃。
  - **[#2377](https://github.com/agentscope-ai/QwenPaw/Issue/2377)**（评论 8）：长时间批处理任务（如总结 1500 文件）容易意外中断。
- **P2 - 前端 UI 与状态识别**：
  - **[#3342](https://github.com/agentscope-ai/QwenPaw/Issue/3342)**：本地 Ollama 大模型状态识别异常，已删除的模型仍显示可用，且无法在界面上删减配置。
  - **[#3323](https://github.com/agentscope-ai/QwenPaw/Issue/3323)**：局域网部署时网页端图标找不到。
  - **[#2931](https://github.com/agentscope-ai/QwenPaw/Issue/2931) / [#3247](https://github.com/agentscope-ai/QwenPaw/Issue/3247)**（评论 2）：编辑已有智能体后，技能配置会 bug 级地默认“全选”。

## 6. 功能请求与路线图信号
结合用户诉求与活跃的 PR，下一版本可能重点关注以下方向：
- **权限与高危操作预警**：**[#3349](https://github.com/agentscope-ai/QwenPaw/Issue/3349)** 建议在 Agent 申请调用敏感本地工具时，UI 增加红色醒目提醒并说明风险等级。这是提升用户信任感的重要优化。
- **多模态与在线资源支持**：**[#3329](https://github.com/agentscope-ai/QwenPaw/Issue/3329)** 建议支持直接查看在线 URL 图片/视频，而无需先下载到本地。
- **Plan 模式（规划模式）**：**[#2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)** 目前正在密切 Review，旨在允许用户通过 `/plan` 命令让 Agent 拆解多步骤任务结构。
- **自定义 Agent ID**：**[#3325](https://github.com/agentscope-ai/QwenPaw/Issue/3325)** 建议允许在创建时自定义 Agent ID，以便于通过 API 或 CLI 调用（目前为随机 6 位字符）。

## 7. 用户反馈摘要
- **痛点直击**：升级更名带来了阵痛，Windows 用户遇到命令找不到、双文件夹（`.copaw` 与 `.qwenpaw`）残留混淆的问题严重影响了基础体验。
- **使用场景**：用户大量将 CoPaw 接入飞书、微信、钉钉等 IM，并利用本地工具（vLLM + Ollama）结合文件系统进行批处理。但在 IM 群聊中引用文件、定时任务触发等方面存在明显卡点。
- **认可度**：用户对 CoPaw 越狱式操作浏览器和本地文件的能力表示认可，但迫切希望其具备类似“一键更新”、“模型自动容错切换”以及“断点续传”等企业级稳定性特性。

## 8. 待处理积压
- **[#2590](https://github.com/agentscope-ai/QwenPaw/Issue/2590) / [#3346](https://github.com/agentscope-ai/QwenPaw/pull/3346)**：关于文件操作回滚（防止误删）的 Issue 已提出多日，PR 已提交，维护团队需尽快安排 Review 合入以提升本地操作的安全性。
- **[#1403](https://github.com/agentscope-ai/QwenPaw/Issue/1403)**（评论 6）：飞书消息去重机制的缺失导致消息被重复处理，该 Bug 自 3 月中旬被提出后一直未得到根本解决，影响线上稳定性。
- **[#3343](https://github.com/agentscope-ai/QwenPaw/pull/3343)**：版本号提升至 `1.1.1b2` 的 PR 被意外关闭，需维护者确认发布流程是否受阻。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-14)

数据统计周期：2026-04-13 19:00 UTC - 2026-04-14 19:00 UTC

## 1. 今日速览

EasyClaw 项目在过去 24 小时内整体活跃度呈现**低运行、稳推进**的态势。项目今天没有收到新的 Issue，也未发布任何新版本，核心代码库保持相对安静。然而，一笔由社区开发者提交的重要国际化（i18n）功能 PR 在今日产生了更新动态，为项目带来了 5 种全新语言的支持。整体来看，项目目前处于功能累积与维护阶段，底座稳定性良好，无突发 Bug 或线上崩溃反馈。

## 2. 版本发布

**无**。过去 24 小时内项目未发布任何新版本或补丁。

## 3. 项目进展

今日没有已合并或关闭的 Pull Requests。项目整体代码树无新增变更。

唯一的活动来自一个长期运行的功能 PR：
*   **PR #21** [OPEN] `feat(i18n): add 5 new languages`: 由开发者 **chinayin** 提交。该 PR 旨在为 EasyClaw 添加 5 种新的本地化语言（繁体中文、日语、韩语、越南语、印地语）。根据 PR 描述，开发者已完成 `apps/panel/src/i18n/` 目录下 1333 个翻译键值对的完整对齐。
    *   🔗 **链接**: [gaoyangz77/rivonclaw PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   *分析*: 该 PR 自 3 月 18 日创建以来仍在等待核心团队的最终 Review 和合并。这是一个重量级的本地化贡献，一旦合并，将极大提升 EasyClaw 在亚洲市场的可用性。

## 4. 社区热点

**无活跃热点**。今日未产生任何新的 Issue，也没有任何带有新评论或 Emoji 反应的讨论。目前社区的注意力似乎主要集中在等待现有的国际化 PR 合并上。

## 5. Bug 与稳定性

**状态极佳，无新增异常**。过去 24 小时内，项目 Issue 追踪器中未报告任何 Bug、崩溃或性能回归问题。这表明当前发布版本在生产环境中表现稳定。

## 6. 功能请求与路线图信号

今日未收到任何新的功能请求。但从现有的 PR 动态可以解读出以下路线图信号：
*   **亚洲市场与无障碍体验扩展**: PR #21 的推进表明项目正在致力于覆盖全球更广泛的用户群体，非英语母语用户的体验是近期的重点演进方向。
*   *下一步预测*: 待多语言支持合并后，可能会引发 UI 布局的微调（如 CJK 字符的自适应），或者推动下一个 Minor/Major 版本的发布。

## 7. 用户反馈摘要

由于今日无活跃的 Issue 或评论，暂无法从直接对话中提炼用户痛点。不过，PR #21 中“匹配 1333 个基础键值”这一动作反映出，面板端（Panel）的交互复杂度较高，多语言维护成本客观存在；确保翻译的准确性和后续版本的同步将是该功能落地后的隐性挑战。

## 8. 待处理积压

目前最需要核心维护者关注的是以下未合并的 PR：

*   📌 **[PR #21] feat(i18n): add 5 new languages** (创建于 2026-03-18)
    *   **状态**: 开启 (已耗时约 27 天)
    *   **链接**: [gaoyangz77/rivonclaw PR #21](https://github.com/gaoyangz77/rivonclaw/pull/21)
    *   **跟进建议**: 这是一个高质量且工作量庞大的贡献。建议维护者尽快安排 Code Review，确认是否存在技术阻碍（例如：缺漏的键值、下拉菜单组件的适配等）。若合并，建议向贡献者 @chinayin 表达感谢以促进社区良性循环。

---
*Generated by AI Analyst on 2026-04-14*

</details>