# OpenClaw 生态日报 2026-06-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-15 22:37 UTC

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
**日期**: 2026-06-16 | **分析数据来源**: 过去 24 小时 GitHub 活动

---

### 1. 📈 今日速览
OpenClaw 今日维持着极高的社区热度与开发活跃度，过去 24 小时内共处理了 **500 条 Issue 更新**（434 条新开/活跃，66 条已关闭）以及 **500 条 PR 更新**（35 条已合并/关闭）。项目刚刚发布了备受瞩目的 `v2026.6.8-beta.1` 版本，重点重构了 Telegram 和 WhatsApp 的富文本及消息投递机制。然而，新版本的引入也带来了不可避免的阵痛，多个关键消息渠道（如 Telegram）出现了严重的回归 Bug。目前，社区的核心诉求依然聚焦于跨平台支持（Linux/Windows）、会话上下文连续性以及企业级安全沙箱隔离。

---

### 2. 🚀 版本发布
- **[v2026.6.8-beta.1](https://github.com/openclaw/openclaw/releases)** 
  - **更新亮点**: 全面增强了 Telegram 和 WhatsApp 渠道的消息投递能力。Telegram 现支持包含表格、列表、可展开引用块在内的结构化富文本，并引入了保留提示词的 CLI 后端投递机制和更安全的富媒体边界；WhatsApp 同样获得了更好的富媒体支持。
  - **潜在风险与兼容性**: 本次更新改变了 Telegram 的消息投递底层逻辑，导致部分客户端无法解析新的富文本格式（详见 Bug 板块）。

---

### 3. 🛠 项目进展
今日共有 35 个 PR 被合并/关闭，项目在**网关稳定性、跨端兼容性、多渠道消息分发**方面取得了实质性进展：
- **会话状态与记忆修复**: PR [#92575](https://github.com/openclaw/openclaw/pull/92575) 修复了每日或闲置会话重置后，`/think`、`/verbose` 等用户自定义行为覆盖被意外清除的问题。
- **跨平台支持优化**: PR [#92682](https://github.com/openclaw/openclaw/pull/92682) 修复了 Windows 系统（GBK 编码）下读取文本文件出现乱码的问题，提升了非 UTF-8 环境的兼容性。
- **安全与网关运行**: PR [#89858](https://github.com/openclaw/openclaw/pull/89858) 解决了 systemd 网关单元作用域冲突的问题；PR [#79181](https://github.com/openclaw/openclaw/pull/79181) 增加了网关在 sidecar 启动期间快速重启的节流限制，避免了 OOM 导致的无限重启死循环。

---

### 4. 🔥 社区热点
- **跨平台客户端期待**: Issue [#75](https://github.com/openclaw/openclaw/issues/75)（👍 79，💬 109）持续登顶热度榜。社区强烈呼吁官方提供原生的 **Linux 和 Windows** 客户端应用，以补齐目前仅有 macOS/iOS/Android 的短板。
- **安全沙箱与 API 防泄漏**: Issue [#10659](https://github.com/openclaw/openclaw/issues/10659)（💬 13）提出了“掩码密钥”的需求，希望 Agent 能够使用但无法读取原始 API Key，以防 Prompt 注入攻击导致凭证泄露。这是企业级用户极度关注的安全红线。
- **富交互展示需求**: Issue [#12602](https://github.com/openclaw/openclaw/issues/12602)（💬 13）请求支持 Slack Block Kit，以便 Agent 输出更丰富的交互式卡片（如 CRM 摘要、数据库查询结果）。

---

### 5. 🐛 Bug 与稳定性 (按严重程度排序)
- **[P0 紧急] 网关内存泄漏**: Issue [#91588](https://github.com/openclaw/openclaw/issues/91588) 报告网关进程 RSS 内存会在 2-3 天内从 350MB 暴涨至 15.5GB，最终被系统 OOM Killer 反复杀掉。
- **[P1 紧急/回归] v2026.6.8-beta.1 Telegram 全面崩溃**: Issue [#93263](https://github.com/openclaw/openclaw/issues/93263) 指出，升级到最新 beta 版后，所有 Telegram 客户端均报 "this message is not supported" 错误。**已有修复 PR**: [#93372](https://github.com/openclaw/openclaw/pull/93372) 和 [#93416](https://github.com/openclaw/openclaw/pull/93416) 正在尝试回退默认投递方式为 `sendMessage`。
- **[P1 紧急] 工具调用内部信息泄漏**: Issue [#25592](https://github.com/openclaw/openclaw/issues/25592) 揭示了一个严重的 UX 问题：Agent 在执行工具调用期间产生的内部思考/报错文本，被直接当作可见消息发送到了 Slack/iMessage 等业务渠道。
- **[P1 紧急] 会话上下文错乱**: Issue [#32296](https://github.com/openclaw/openclaw/issues/32296) 报告 Agent 出现“答非所问”，总是回复上一条消息的内容。

---

### 6. 🗺 功能请求与路线图信号
- **会话快照与上下文分支**: Issue [#13700](https://github.com/openclaw/openclaw/issues/13700) 提出保存/加载上下文检查点（`/session save|load`）的需求，用于 A/B 测试提示词或进行长对话分支。
- **基于能力的权限系统**: Issue [#12678](https://github.com/openclaw/openclaw/issues/12678) 和 Issue [#12219](https://github.com/openclaw/openclaw/issues/12219) 强调了 `skill.yaml` 权限清单的必要性，要求对高风险操作实施默认拒绝策略。
- **动态模型发现**: Issue [#10687](https://github.com/openclaw/openclaw/issues/10687) 呼吁对 OpenRouter 等更新频繁的提供商实现完全动态的模型列表发现，摆脱硬编码静态配置的依赖。

---

### 7. 🗣 用户反馈摘要
- **痛点 - “后台噪音”与消息丢失**: 用户反馈在多 Agent 通信中（如 Issue [#41199](https://github.com/openclaw/openclaw/issues/41199) 和 [#92433](https://github.com/openclaw/openclaw/issues/92433)），子 Agent 完成任务后的通知经常被静默丢弃，或者 Agent 的内部“自言自语”泄露到主聊天流中，造成极大干扰。
- **痛点 - 部署与配置门槛高**: Issue [#13597](https://github.com/openclaw/openclaw/issues/13597) 和 [#91455](https://github.com/openclaw/openclaw/issues/91455) 反映在 AWS (EC2/ECS) 和 Kubernetes 上部署 OpenClaw 的文档严重不足，用户需要摸着石头过河。
- **满意度 - 修复及时性**: 针对近期引入的回归 Bug（如 Heartbeat 时间戳失效 Issue [#44993](https://github.com/openclaw/openclaw/issues/44993)），社区对维护者快速响应并提交修复 PR 表示认可。

---

### 8. 📋 待处理积压
- **长期未决的 P0 级隐患**: Issue [#75380](https://github.com/openclaw/openclaw/issues/75380) 指出 `provider-payload.jsonl` 等诊断日志文件无限增长，且没有日志轮转策略，长期运行将耗尽磁盘空间，亟待官方介入提供配置策略。
- **Webhook 多轮对话文档与实现不符**: Issue [#11665](https://github.com/openclaw/openclaw/issues/11665) 自 2 月份提出至今未彻底解决，`sessionKey` 未能如文档承诺的那样复用会话上下文，严重影响了外部系统集成的多轮对话体验。

---

## 横向生态对比

以下是基于 2026 年 6 月 16 日各大开源项目动态生成的 **个人 AI 助手与自主智能体生态横向对比分析报告**：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“可用工具”向“企业级生产力底座”跨越**的关键拐点。生态内的项目不再仅仅满足于基础的多模型接入与对话编排，而是将战略重心大幅向**安全隔离（沙箱、凭证防泄漏）、极致的上下文管理（压缩、防丢失）以及异构系统无缝集成（IM 渠道、容器化、外部 MCP）**倾斜。此外，开发者对可观测性（成本追踪、系统通知）和部署鲁棒性（防崩溃、防静默失败）的诉求日益强烈，标志着 AI Agent 正在真正步入生产环境的高压测试期。

---

### 2. 各项目活跃度对比（基于过去 24 小时数据）

| 项目名称 | Issues 活跃/关闭 | PR 活跃/合并 | Release 情况 | 健康度与工程阶段评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 434 / 66 | 35 (待审) / 35 | `v2026.6.8-beta.1` | 🟢 **极高**。生态核心，处于功能快速扩张与紧急修复回归 Bug 的阵痛期。 |
| **Hermes Agent** | 39 / 11 | 28 (待审) / 22 | 无 | 🟢 **极高**。处于密集的安全防护加固与多平台网关稳定性修复阶段。 |
| **CoPaw** | 31 / 19 | 15 (待审) / 35 | 无 (v1.1.11.post2)| 🟢 **高**。UI 交互优化与上下文管理迭代极快，代码消化能力强。 |
| **IronClaw** | 33 / 13 | 26 (待审) / 24 | 无 | 🟢 **高**。聚焦于 Reborn 架构重构、凭证作用域修复与扩展体验优化。 |
| **ZeroClaw** | 47 / 3 | 46 (待审) / 4 | 无 | 🟡 **中高 (积压风险)**。v0.9.0 大版本前夜，PR 积压严重，处于架构攻坚期。 |
| **NanoBot** | - / - | 19 (待审) / 16 | 无 | 🟡 **中等**。多渠道通信集成与多模态适配稳步推进，出现 Review 瓶颈。 |
| **NanoClaw** | 0 / 0 | 7 (待审) / 4 | 无 | 🟡 **中等**。处于填坑与加固期，专注容器化运行与跨渠道兼容性修复。 |
| **PicoClaw** | - / - | 10 (待审) / 2 | `nightly` | 🟡 **中等**。注重底层健壮性，集中处理 Goroutine 崩溃与边缘设备适配。 |
| **LobsterAI** | 2 / 0 | 6 (待审) / 5 | 无 | 🟡 **中等**。专注多媒体交互（纯实时 ASR）与复杂文档处理体系构建。 |
| **NullClaw** | 3 / 0 | 1 (待审) / 0 | 无 | 🔵 **低**。常规维护期，聚焦企业级鉴权与基础依赖升级。 |
| **Moltis** | 0 / 0 | 2 (待审) / 0 | 无 | 🔵 **低**。静默构建期，核心代码高度集中于底层调度架构演进。 |

*(注：TinyClaw 与 ZeptoClaw 过去 24 小时无活动，未列入表格)*

---

### 3. OpenClaw 在生态中的定位
作为核心参照项目，OpenClaw 已成为该赛道内的**基础设施级标杆**。
*   **规模与号召力**：日处理 500+ Issue 和 500+ PR，其社区规模和活跃度远超同赛道其他项目（达 10 倍量级以上）。
*   **技术路线差异**：OpenClaw 在前端渠道适配上走得最深，甚至不惜在 Beta 版中推翻 Telegram 等主流渠道的底层投递逻辑以追求富文本极致体验；同时它是极少数开始关注企业级安全合规（如掩码 API 密钥、Sidecar 节流）的开源 Agent。
*   **当前痛点**：伴随庞大的功能涌入，OpenClaw 正经历严重的“大版本回归综合征”（如 Telegram 全线崩溃、网关 OOM），其工程团队目前正面临平衡“前沿功能迭代”与“生产级稳定性”的巨大压力。

---

### 4. 共同关注的技术方向
从多个项目的动态中，可以清晰提取出行业共同瞩目的四大技术焦点：

1.  **长上下文治理与记忆优化**
    *   **涉及项目**：OpenClaw, CoPaw, Hermes Agent, NanoBot, ZeroClaw
    *   **核心诉求**：解决长对话导致卡死或显存溢出（OOM）、上下文压缩导致人设丢失、历史记录损坏导致 Agent 崩溃。社区正在探索按 Token 精确截断、空闲自动压缩、以及更智能的上下文检查点机制。
2.  **企业级安全与凭证隔离**
    *   **涉及项目**：OpenClaw, IronClaw, ZeroClaw, Hermes Agent
    *   **核心诉求**：防止 Prompt 注入导致 API Key 泄露、实现 MCP 工具的作用域强隔离（防止越权）、完善命令执行前的审批拦截机制。
3.  **IM 渠道集成深度与体验优化**
    *   **涉及项目**：OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw
    *   **核心诉求**：从“能收发消息”向“富交互体验”演进。例如解决 Telegram Markdown 转义惨剧、处理跨平台 Emoji 反应差异（Slack vs WhatsApp）、以及防范内部工具报错文本直接投递给用户的“后台噪音泄漏”。
4.  **可观测性与成本控制**
    *   **涉及项目**：CoPaw, NanoBot, IronClaw, LobsterAI
    *   **核心诉求**：在 UI 层实时展示 Token 消耗以缓解“隐形扣费”焦虑，以及在预算超限或任务完成时提供系统级报错与通知，消除 Agent 运行的“黑盒状态”。

---

### 5. 差异化定位分析

*   **全能型基座 vs 轻量级网关**：OpenClaw 和 ZeroClaw 致力于成为囊括所有功能的重型全能平台；而 PicoClaw 则定位于轻量级与高可用（专注 Go 的 Panic 恢复与 IoT/RISC-V 边缘侧部署），NanoClaw 聚焦于修复容器化运行的底层痛点（如 Docker 共享内存导致 Chromium 崩溃）。
*   **多模态交互先锋**：LobsterAI 和 NanoBot 将大量精力投入到了语音转录（纯实时 ASR 流程）和复杂文档（PDF、Office 文件）的原生预览与处理上，试图在个人办公助手的交互体验上拉开差距。
*   **外部 Agent 编排中心**：Moltis 和 IronClaw 展现出了强烈的“编排属性”。它们不满足于自身作为单一 Agent，而是致力于成为管理器，调度不同技术栈的外部智能体，并为每个外部 Agent 挂载独立的模型和努力程度配置。

---

### 6. 社区热度与成熟度

*   **快速扩张与破圈期（高活跃度、多回归 Bug）**：**OpenClaw** 与 **CoPaw**。大量新用户涌入带来丰富的场景反馈，但也暴露了系统在并发、长上下文和渠道兼容性上的边缘 Bug，项目处于边修边飞的“狂飙”状态。
*   **企业级质量攻坚期（高价值 PR 积压、重构密集）**：**ZeroClaw**、**IronClaw** 和 **Hermes Agent**。这些项目当前最鲜明的特征是拥有大量待合并的重型 PR（如 ZeroClaw 达 46 个），核心团队正严密审查安全沙箱、凭证作用域、多租户隔离等关乎生产部署的深水区代码，处于发版前的“蓄水”阶段。
*   **精细化运营与体验打磨期（收敛 BUG、优化细节）**：**NanoBot**、**PicoClaw**、**LobsterAI**。这些项目的主干架构已趋于稳定，目前的动作多为补齐多模态降级策略、优化 UI 联动反馈、增强底层依赖防错（如防内存泄漏、类型断言检查）。

---

### 7. 值得关注的趋势信号

1.  **“静默失败”是当前 Agent 落地的最大体验杀手**：多个项目（如 NanoClaw, IronClaw）的社区反馈指出，Agent 在遇到工具调用失败、预算耗尽或网络断开时，往往倾向于静默丢弃消息或陷入无限死循环。**具备显式错误抛出、自我恢复机制以及系统级提醒能力的 Agent 架构，将在接下来的竞争中赢家通吃。**
2.  **WebAssembly 与原生安全沙箱的崛起**：ZeroClaw 提出“WebAssembly 优先，移除 Node.js 运行时”的 RFC，以及 Hermes 对 CDP 浏览器敏感方法调用的限制，预示着为了彻底防范 AI 执行恶意代码或遭受供应链攻击，下一代 Agent 底层可能会大规模拥抱 Wasm 隔离或严格的容器级 `seccomp` 隔离。
3.  **A2A 协议与去中心化智能体发现**：ZeroClaw 推进的 `.well-known/agent-card.json` 和 Moltis 的外部 Agent 调度特性，释放了一个强烈信号：单体 Agent 时代正在终结。未来的个人助手将演变为一个“路由网关”，通过标准化协议（如 A2A）自动发现并调用同一局域网或云端的其他专业智能体。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目动态日报
**报告日期**: 2026-06-16  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1️⃣ 今日速览
NanoBot 今日展现了极高的社区开发热度与活跃度，项目正处于功能快速迭代与生态扩充的爆发期。过去 24 小时内，项目处理了高达 **35 条 PR 更新**（其中 16 条顺利合并/关闭，19 条待处理），提交代码的活跃贡献者超过 10 人。更新内容高度聚焦于**多渠道通信集成**（如 WhatsApp 桥接）、**大模型兼容性优化**（如 Mistral 与 Anthropic 适配）以及**核心上下文记忆机制的深度修复**。虽然 Issue 积压略有增加，但大量高质量的代码提交表明项目正在为下一个大版本蓄力。

---

### 2️⃣ 版本发布
**本日无新版本发布。** 
考虑到近期大量围绕 WebUI 配置同步、自动化工具和桥接优化的 PR 正在合并，预计项目正在向下一个 Minor/Major 版本（可能是 v0.3.0）进行代码冻结和整合。

---

### 3️⃣ 项目进展
今日有 16 个 PR 被合并或关闭，项目在 API 规范化、系统稳定性和 WebUI 体验上迈出了坚实的一步：

*   💼 **API 规范化与计费修复**: 合并了 [PR #4310](https://github.com/HKUDS/nanobot/pull/4310)，修复了 `/v1/chat/completions` 端点一直返回 Token 使用量为 0 的问题。这直接解决了下游计费和监控集成的痛点。
*   🧠 **记忆与上下文优化**: 
    *   合并 [PR #4315](https://github.com/HKUDS/nanobot/pull/4315)，增强了系统对损坏的 `history.jsonl`（外部记忆库）的容错能力，避免恶意/异常数据导致 Agent 启动崩溃。
    *   合并 [PR #4337](https://github.com/HKUDS/nanobot/pull/4337)，修复了会话中途注入空负载或多模态字典时导致的异常用户消息追加问题。
    *   关闭 [PR #4348](https://github.com/HKUDS/nanobot/pull/4348)，优化了空闲时的历史记录自动压缩逻辑，确保不会截断不完整的工具调用记录。
*   🛠️ **架构重构**: 合并 [PR #4344](https://github.com/HKUDS/nanobot/pull/4344)，重构了配置与 Agent 循环的边界，实现工具配置的延迟加载，显著提升了核心模块的内聚度。

---

### 4️⃣ 社区热点
今日社区焦点主要集中在**跨平台通信（WhatsApp 集成）**以及**多模态处理的安全性**上：

*   📱 **WhatsApp 生态大更新**: 贡献者 `francismaestre` 连续提交了多个高质量 PR，包括为 WhatsApp 接入消息已读回执（蓝勾）([PR #4354](https://github.com/HKUDS/nanobot/pull/4354))、修复语音转录问题（将 ogg 转为标准 WAV）([PR #4353](https://github.com/HKUDS/nanobot/pull/4353))。这说明大量用户正在将 NanoBot 作为个人助手指令通过 IM 平台落地的核心底座。
*   🖼️ **多模态安全性与隐私**: Issue [Issue #4345](https://github.com/HKUDS/nanobot/issues/4345) 引发了关注：当模型不支持图片触发降级剔除图片时，NanoBot 原先会把本地文件路径泄漏给模型，甚至让模型“产生幻觉”。开发者 BearMett 迅速响应并提交了修复方案 [PR #4346](https://github.com/HKUDS/nanobot/pull/4346)。

---

### 5️⃣ Bug 与稳定性
今日报告了若干核心运行时的 Bug，部分已得到迅速响应：

*   🔴 **[严重] 图片降级处理导致路径泄漏与幻觉** ([Issue #4345](https://github.com/HKUDS/nanobot/issues/4345)): 无图像能力的模型回退时收到本地路径并引发幻觉。
    *   *状态*: ✅ 已提交 Fix PR ([#4346](https://github.com/HKUDS/nanobot/pull/4346))。
*   🟠 **[中等] API Token 统计归零** ([Issue #4309](https://github.com/HKUDS/nanobot/issues/4309)): OpenAI 兼容端点无法返回真实的 Token 消耗。
    *   *状态*: ✅ 已修复 (PR #4310 已合并)。
*   🟠 **[中等] DeepSeek V4 空响应未触发兜底重试** ([Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)): 高峰期 DeepSeek 返回空数组，NanoBot 将其识别为不可重试错误而非进行模型降级。
    *   *状态*: ⏳ 待处理。
*   🟡 **[轻微] 代码合并引发上下文变量丢失** ([Issue #4322](https://github.com/HKUDS/nanobot/issues/4322)): 开发者拉取特定分支时出现 `NameError: name 'session_key' is not defined`，属于合并冲突遗留问题。
    *   *状态*: ⏳ 开放中。

---

### 6️⃣ 功能请求与路线图信号
从当前 19 个 Open PR 中，可以明显看出 NanoBot 下一步的演进路线图：

1.  🤖 **可观测性与自动化**: 
    *   [PR #4320](https://github.com/HKUDS/nanobot/pull/4320) 提出增加轻量级的 **Agent 动作审计模块**，这将大幅提升企业级部署的安全性。
    *   [PR #4357](https://github.com/HKUDS/nanobot/pull/4357) 为定时任务增加了 `silent`（静默执行）模式，适合执行后台监控任务而不打扰用户。
2.  🌐 **大模型适配精细化**: 
    *   [PR #4351](https://github.com/HKUDS/nanobot/pull/4351) 为 **Mistral** 模型写了专属适配逻辑（解决 reasoning_effort 参数严格限制等问题）。
    *   [PR #4356](https://github.com/HKUDS/nanobot/pull/4356) 修复了 **Anthropic** API 对工具 ID 正则校验极其严格的 400 报错。
3.  🔍 **搜索引擎扩充**: [PR #4350](https://github.com/HKUDS/nanobot/pull/4350) 集成了新的 Web 搜索引擎 Keenable，持续强化知识检索能力。
4.  🖥️ **WebUI 全面对齐**: [PR #4313](https://github.com/HKUDS/nanobot/pull/4313) 旨在彻底消除 WebUI 图形界面与底层 `config.json` 的配置差异，提供完整的模型预设、温度和记忆可视化管理。

---

### 7️⃣ 用户反馈摘要
通过对近期 Issue 的分析，提炼出用户的真实使用场景与反馈如下：

*   **核心痛点 - 计费与成本监控**: 多位用户依赖 `/v1/chat/completions` 的 Token 统计来做二次开发和计费，之前的硬编码 0 导致业务受损，此问题现已圆满解决。
*   **使用场景 - 深度 IM 集成**: 用户不仅把 NanoBot 当作网页玩具，而是大量对接到 Telegram、WhatsApp，作为全天候的私人助理。因此，对于语音转写（STT）的稳定性、多模态消息的优雅降级（如剥离图片保底处理）有着极其强烈的需求。
*   **使用场景 - 多模型混用**: 用户普遍配置了主备模型（如主用 DeepSeek，备用 GPT 系列），这对 Provider 层的容错处理（如处理空响应、非法字符转义）提出了极高的要求。

---

### 8️⃣ 待处理积压
当前项目有 **19 个 PR 处于待合并状态**，出现了较为明显的 Review 瓶颈，提醒核心维护团队（@HKUDS）关注以下重点：

*   ⚠️ **高价值架构 PR 等待 Review**: [PR #4349](https://github.com/HKUDS/nanobot/pull/4349)（修复回放窗口上下文裁剪问题，防止丢失用户最新单轮对话）和 [PR #4352](https://github.com/HKUDS/nanobot/pull/4352)（按 Token 而非字符数限制上下文长度，解决中文/CJK 场景溢出问题）对长对话记忆至关重要，建议尽快合并。
*   ⚠️ **严重安全修复待合并**: [PR #4346](https://github.com/HKUDS/nanobot/pull/4346) 解决了图片处理时的路径泄漏，需高优 Review。
*   ⚠️ **长期未响应的 Issue**: [Issue #4287](https://github.com/HKUDS/nanobot/issues/4287) 涉及 DeepSeek 的容错逻辑，已积累几日，建议社区给予方案回应。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**报告日期**: 2026-06-16  
**数据来源**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

### 1. 今日速览
Hermes Agent 在过去 24 小时内保持了极高的社区热度与工程迭代速度，共处理了 50 条 Issue 更新（39 条活跃，11 条关闭）以及 50 条 PR 更新（28 条待合并，22 条已合并/关闭）。今日的开发重心高度聚焦于**安全防护**与**多平台网关稳定性**，社区贡献者提交了大量针对浏览器执行、代码沙箱逃逸以及 Windows/macOS 环境兼容性的关键修复。此外，本地模型（如 Ollama）的上下文处理和 Telegram/Discord 等聊天网关的连接健壮性是当前用户反馈的最核心痛点。

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。项目当前主干分支正处于密集修复与安全加固阶段，推测团队正在为下一个大版本（可能是 v0.17.x）累积重要的安全与稳定性修复。

### 3. 项目进展
今日共有 22 个 PR 被合并或关闭，项目在以下几个关键领域取得了实质性推进：
*   **上下文与内存管理优化**：合并了修复小窗口下无限上下文压缩循环的 PR ([PR #40976](https://github.com/NousResearch/hermes-agent/pull/40976) 与 [PR #40813](https://github.com/NousResearch/hermes-agent/pull/40813))，大幅提升了长对话场景下的稳定性。
*   **安全与审批机制**：推进了危险命令的审批隔离机制，修复了 Windows 环境下路径解析导致的“幽灵目录”写入问题 ([PR #46887](https://github.com/NousResearch/hermes-agent/pull/46887))。
*   **网关与平台修复**：修复了 Signal 平台在 Agent 忙碌时错误路由审批指令的问题 ([PR #46904](https://github.com/NousResearch/hermes-agent/pull/46904))。
*   **内部系统升级**：整合了 Photon iMessage 插件的仪表板 ID 统一配置 ([PR #46907](https://github.com/NousResearch/hermes-agent/pull/46907))。

### 4. 社区热点
今日讨论度最高的问题集中在底层模型调度与网关脆弱性上：
*   **模型输出被强行截断**：[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) (评论 48)。长期困扰用户的问题，生成长文本时频繁报错 `Response truncated due to output length limit`，严重破坏 Telegram/Discord 机器人体验。
*   **本地 Ollama 上下文限制引发爆显存**：[Issue #46833](https://github.com/NousResearch/hermes-agent/issues/46833) 与 [Issue #43900](https://github.com/NousResearch/hermes-agent/issues/43900) (评论 6)。用户反馈 Hermes 强制请求 GGUF 全量上下文（如 13万 Tokens），导致本地显卡 VRAM 直接 OOM。反映出社区对 Hermes 更好地支持本地化、私有化部署的强烈诉求。
*   **网关缺乏僵尸连接检测**：[Issue #32574](https://github.com/NousResearch/hermes-agent/issues/32574)。用户指出 Discord/QQ 等网关在断线后进程依然存活，导致健康检查失效（假活），强烈要求引入 Watchdog 机制。

### 5. Bug 与稳定性
按严重程度排列的今日重点 Bug：
*   **[P1] AWS Bedrock 致命错误**：[Issue #46888](https://github.com/NousResearch/hermes-agent/issues/46888)。系统全局 boto3 版本低于 1.34.59 时，所有非 Anthropic 的 Bedrock 模型推理全部失败，抛出 AttributeError。（已通过暂未合并的修复推进）
*   **[P2] 桌面端核心崩溃**：[Issue #46789](https://github.com/NousResearch/hermes-agent/issues/46789)。macOS 桌面版执行任何终端命令、代码运行或文件读取时，直接触发段错误 (Segfault，退出码 -11)。
*   **[P2] 凭证池限流解析缺陷**：[Issue #46891](https://github.com/NousResearch/hermes-agent/issues/46891)。部分供应商（如 z.ai）返回绝对时间格式的限流提示时，系统无法解析，导致陷入疯狂的死循环重试。（**已有对应 Fix: [PR #46902](https://github.com/NousResearch/hermes-agent/pull/46902)**）
*   **[P2] 桌面端自毁 Bug**：[Issue #46883](https://github.com/NousResearch/hermes-agent/issues/46883)。桌面端热更新时，如果构建失败，会先删除正在运行的程序二进制文件，导致应用程序直接罢工。

### 6. 功能请求与路线图信号
从社区反馈和开发动向中，可以捕捉到下一阶段的演进方向：
*   **网关监控与恢复体系**：用户强烈请求加入平台健康看板与心跳检测（[Issue #40199](https://github.com/NousResearch/hermes-agent/issues/40199)），未来版本可能原生化多平台僵尸连接恢复机制。
*   **增强的企业级安全沙箱**：今日涌现多个安全相关 PR（如 [PR #46899](https://github.com/NousResearch/hermes-agent/pull/46899) 限制浏览器敏感 CDP 方法，[PR #46900](https://github.com/NousResearch/hermes-agent/pull/46900) 阻断代码执行外泄，[PR #37771](https://github.com/NousResearch/hermes-agent/pull/37771) 企业级审批委托）。这信号明确地表明 Hermes 正在向满足企业级安全合规标准迈进。
*   **多 Agent 异构模型配置**：用户希望不同任务（编码 vs 检索）的子 Agent 可以配置不同的模型，以节省 Token 开销（[Issue #46880](https://github.com/NousResearch/hermes-agent/issues/46880)）。
*   **看板深度集成**：用户希望将多智能体调度的看板直接集成到桌面端，降低工作流切换摩擦（[Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222)）。

### 7. 用户反馈摘要
*   **痛点 - 本地部署体验差**：“Hermes 太重型了，对本地 Ollama 极不友好”。用户抱怨其强行加载预设的大上下文窗口，导致资源枯竭，缺乏对本地硬件的动态自适应。
*   **痛点 - 网关平台格式化折磨**：Telegram 的 MarkdownV2 转义问题让排版惨不忍睹（如列表符变成 `\-`）（[Issue #6388](https://github.com/NousResearch/hermes-agent/issues/6388)）。*(注：团队刚刚合并了 [PR #46890](https://github.com/NousResearch/hermes-agent/pull/46890) 尝试利用 Bot API 10.1 修复此问题，用户体验有望提升)*。
*   **满意点 - 灵活的拦截与审批机制**：虽然偶尔繁琐，但用户对 Hermes 的 `ToolCallGuardrail` 和命令执行前置审批机制表示认可，认为这给全自动化 Agent 运行带来了必要的安全感。

### 8. 待处理积压
*   **高风险依赖滞后 PR**：[PR #42334](https://github.com/NousResearch/hermes-agent/pull/42334)。涉及修复 `aiohttp`, `anthropic` 和 `cryptography` 的严重 CVE 漏洞，已提出一周仍未合并，且存在依赖项版本漂移风险，需维护者紧急介入。
*   **凭证池/网关路由边缘 Bug**：[PR #46894](https://github.com/NousResearch/hermes-agent/pull/46894) 和 [PR #46902](https://github.com/NousResearch/hermes-agent/pull/46902) 提供了针对 Rate-limit 误判和网关指令路由的修复，积压在待审队列中，直接影响了生产环境的稳定性，建议优先评审。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这份日报基于 PicoClaw 2026-06-15 至 2026-06-16 的 GitHub 活动数据生成。

# 📊 PicoClaw 项目动态日报 (2026-06-16)

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持着**高度活跃**的开发态势，共产生 12 个 PR 更新与 4 个 Issue 更新，并发布了最新的 `nightly` 自动构建版本。核心开发团队及社区贡献者（尤其是 `@chengzhichao-xydt`）集中发力，提交了大量针对 Goroutine 崩溃恢复、文件 I/O 错误处理和类型断言的健壮性优化代码。安全方面，团队迅速响应并修复了启动器的 CIDR 绕过漏洞。整体而言，项目目前处于**稳定性强化与代码质量提升阶段**，健康度良好。

---

## 2. 版本发布
- **[Release] nightly: Nightly Build** ([链接](https://github.com/sipeed/picoclaw/releases/tag/nightly))
  - **版本号**: `v0.2.9-nightly.20260615.13a38bd1`
  - **说明**: 这是基于 `main` 分支的自动化构建版本。官方提醒该版本可能不稳定，仅供测试和尝鲜，生产环境请谨慎使用。

---

## 3. 项目进展
今日项目合计关闭/合并了 2 个 PR，极大推进了 Web 端交互体验与诊断能力；同时有 10 个新 PR 正在等待审核，主要聚焦于底层防错机制。

**已合并/关闭的进展：**
- **[PR #3126] fix(web): improve launcher allowlist bypass diagnostics** ([链接](https://github.com/sipeed/picoclaw/pull/3126))
  - **进展**: 针对近期的启动器白名单绕过问题进行了诊断增强。现在系统能更清晰地区分 `allow_localhost_bypass` 的状态，并在启动日志中明确警告公网绑定可能带来的 CIDR 绕过风险。
- **[PR #3097] feat: add shift-enter hint below chat composer** ([链接](https://github.com/sipeed/picoclaw/pull/3097))
  - **进展**: 优化了 Web 端的用户体验。在聊天输入框下方动态添加 "Shift + Enter" 换行提示，既不占用输入框内部空间，又优化了本地化提示文案。

**待合并的重要推进 (OPEN):**
- **[PR #3132] fix: add panic recovery to core-path goroutines** ([链接](https://github.com/sipeed/picoclaw/pull/3132)): 为核心执行路径（如工具调用）的 Goroutine 添加了 `defer-recover` 保护，防止单个工具崩溃导致整个 Assistant 进程宕机。这是一个**重大的架构稳定性提升**。

---

## 4. 社区热点
今日社区关注度最高的议题围绕**跨平台/跨终端兼容性**与**安全漏洞**展开：

1. **[Issue #3069] [Security] PicoClaw launcher `allowed_cidrs` can be bypassed...** ([链接](https://github.com/sipeed/picoclaw/issues/3069))
   - **热点分析**: 这是一个高危安全漏洞。当 PicoClaw 部署在同主机反向代理之后时，由于访问控制过度信任 `RemoteAddr`，导致攻击者可能绕过 IP 白名单限制。该问题已于今日紧急修复并关闭。
2. **[Issue #2887] [stale] [BUG] .deb version on RISC-V is not functional with OpenAI model** ([链接](https://github.com/sipeed/picoclaw/issues/2887))
   - **热点分析**: 此 Issue 拥有今日最高的评论数（10条）。RISC-V 架构用户反映 `.deb` 安装包无法正常调用 OpenAI 模型。这反映出社区对 PicoClaw 在边缘计算设备（如 RISC-V 开发板）上运行的强烈需求，但在特定架构的编译/依赖适配上仍存在痛点。

---

## 5. Bug 与稳定性
今日报告并处理了多个 Bug，按严重程度排列如下：

- **P0 级 (安全/崩溃)**:
  - **安全绕过**: Launcher CIDr 绕过 ([Issue #3069](https://github.com/sipeed/picoclaw/issues/3069))。**状态**: 已有修复诊断并入主干 ([PR #3126](https://github.com/sipeed/picoclaw/pull/3126))。
  - **进程崩溃隐患**: 未受保护的 Goroutine 导致整体进程 Panic。**状态**: 已提交修复 PR ([PR #3132](https://github.com/sipeed/picoclaw/pull/3132))。
- **P1 级 (核心功能失效)**:
  - **搜索工具静默失效**: ([Issue #3125](https://github.com/sipeed/picoclaw/issues/3125))。架构更新后，`web_search` 工具无法正确从 `.security.yml` 读取 Brave API 密钥，导致大模型调用搜索时直接返回空结果。**状态**: 待修复。
  - **Windows 网关超时**: ([Issue #3015](https://github.com/sipeed/picoclaw/issues/3015))。Windows 环境下运行 `picoclaw gateway` 时，QQ 频道获取 token 超时无法连接。
- **P2/P3 级 (代码健壮性与边缘报错)**:
  - 今日 `@chengzhichao-xydt` 集中提交了 6 个 PR（[#3127](https://github.com/sipeed/picoclaw/pull/3127), [#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3129](https://github.com/sipeed/picoclaw/pull/3129), [#3130](https://github.com/sipeed/picoclaw/pull/3130), [#3131](https://github.com/sipeed/picoclaw/pull/3131), [#3059](https://github.com/sipeed/picoclaw/pull/3059)），专门修复了被 linter 警告的未检查错误（如 `Close()`、`json.Marshal` 错误丢弃）以及未做 `ok` 检查的类型断言。

---

## 6. 功能请求与路线图信号
从近期的 PR 活动中，可以清晰捕捉到项目近期的演进路线图信号：

1. **极致的健壮性追求**: 连续多个修复未检查错误和 Panic 恢复的 PR，表明项目正在为进入企业级/生产环境做最后的代码加固，力求“即使在工具异常的情况下，AI 助手主体也绝不崩溃”。
2. **多聊天平台集成深化**:
   - **[PR #2975] feat(telegram): treat reply to bot message as mention...** ([链接](https://github.com/sipeed/picoclaw/pull/2975))
   - **[PR #3054] fix(line): add ok checks...** ([链接](https://github.com/sipeed/picoclaw/pull/3054))
   - **信号**: 项目不仅在支持多平台，而且在积极优化各平台特有的交互逻辑（如在 Telegram 群聊中通过“回复”代替“@”来唤醒机器人），这对于个人 AI 助理在社交/通讯软件中的实际使用至关重要。

---

## 7. 用户反馈摘要
从 Issue 报告中提炼出真实用户的几个核心痛点：
- **环境迁移带来的破坏性体验**: 用户反馈将 API 密钥迁移到 `.security.yml` 后（见 [Issue #3125](https://github.com/sipeed/picoclaw/issues/3125)），工具链出现静默失效。用户强烈期望架构升级时能有更完善的向后兼容或显眼的报错机制，而不是让 LLM 吞下异常。
- **IoT/嵌入式场景的普及**: 多个 Issue 提到了 RISC-V 和 Debian 环境，说明 PicoClaw 被大量部署在低功耗硬件上，用户对 ARM/RISC-V 架构的稳定构建有着硬性需求。
- **网络与代理环境复杂性**: Windows 上的 QQ 频道连接问题（[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)）和安全绕过问题，暴露出用户在实际部署时，往往处于复杂的内网或反向代理环境中，对网络连通性和代理识别的要求较高。

---

## 8. 待处理积压
以下重要议题已被标记为 `[stale]` 或长期悬而未决，需维护者抽空跟进：

1. **[Issue #3015] [stale] QQ Channel Connection Failed (Windows)** ([链接](https://github.com/sipeed/picoclaw/issues/3015)): 6月6日开启，至今未解决，影响 Windows 用户的 QQ 渠道接入。
2. **[Issue #2887] [stale] RISC-V .deb version bug** ([链接](https://github.com/sipeed/picoclaw/issues/2887)): 5月17日开启，讨论热烈但未能给出最终解决方案，可能导致 RISC-V 社区用户流失。
3. **[PR #3059] [stale] / [PR #3047] [stale]**: 涉及底层文件忽略错误和 Web 端 JSONL 历史记录恢复的 PR 已停滞多日，建议 reviewer 介入推进合并或要求 Author 更新。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份 NanoClaw 项目日报基于您提供的 2026-06-16 的 GitHub 动态数据生成。数据分析侧重于代码合并、系统稳定性、架构演进以及社区反馈，旨在客观呈现项目的当前健康度。

---

# 📊 NanoClaw 项目动态日报 (2026-06-16)

### 1. 今日速览
- **整体活跃度：中高水平。** 过去 24 小时内项目虽然无新发版且 Issues 区无新增动态，但代码库迎来了 **11 个 PR 的高强度更新**（7 个待合并，4 个已合并/关闭），表明核心开发团队正处于密集的代码审查与功能迭代阶段。
- **核心方向聚焦：** 今天的重心集中在 **多渠道兼容性修复（Slack/Signal/Codex 等）** 以及 **AI Agent 容器化底层运行环境优化**。
- **生态协同：** 通过对 OneCLI 网关版本控制的文档与代码修复，可以看出 NanoClaw 正在强化其作为底层框架与外部 SDK 之间的版本契约管理，提升系统整体的健壮性。

### 2. 版本发布
**无。** 
*(注：虽然今日无正式 Release，但 PR #2775 提及了针对 `@onecli-sh/sdk` 2.2.1 版本引入的 `[BREAKING]` 更新说明的修正，暗示近期底层依赖有过破坏性升级，团队正在补充相关文档。)*

### 3. 项目进展
今日共有 4 个核心 PR 被合并或关闭，项目在多渠道适配与开发者体验上迈出了实质性的一步：

*   **[CLOSED] docs(add-codex): flag interactive auth step + add host-restart step** ([PR #2769](https://github.com/nanocoai/nanoclaw/pull/2769))
    *   **进展：** 修复了 `/add-codex` 技能的交互式授权流程。因为代理经常会尝试在无 TTY 的非交互式环境下运行授权命令导致卡死，此次更新增加了显式提示与主机重启步骤，大幅提升了集成 Codex 时的可用性。
*   **[CLOSED] docs(add-codex): drop redundant TTY warning in auth note** ([PR #2773](https://github.com/nanocoai/nanoclaw/pull/2773))
    *   **进展：** 对上述文档的进一步精简，移除了冗余的 TTY 警告，保持开发者文档的清晰度。
*   **[CLOSED] fix(codex): per-thread conversation archive (CDX-004)** ([PR #2772](https://github.com/nanocoai/nanoclaw/pull/2772))
    *   **进展：** 解决了 Codex 历史记录碎片化的问题。此前每个对话片段会被散落保存在数十个文件中，现在通过以线程 ID 归档，完善了对话存档的连续性与可读性。
*   **[CLOSED] feat(update-nanoclaw): upgrade OneCLI gateway when its pinned version moves** ([PR #2774](https://github.com/nanocoai/nanoclaw/pull/2774))
    *   **进展：** 强化系统升级链路。当 NanoClaw 更新导致 OneCLI 网关版本不匹配时，过去会被静默跳过导致代码报错；现在更新脚本会自动触发网关升级，消除了升级带来的版本断层风险。

### 4. 社区热点
今日的 Issues 讨论区虽无新增，但多名社区核心贡献者通过 PR 深度参与了对系统痛点的修复：

*   **[OPEN] perf(container): --shm-size=1g + --init for agent containers** ([PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) by @ankushchadha)
    *   **分析：** 这是一个极其关键的基础设施级优化。因为 NanoClaw 的每个 Agent 容器都自带无头 Chromium (`agent-browser`)，默认 Docker 分配的 64MB 共享内存极易导致浏览器渲染崩溃。引入 `--shm-size=1g` 和 `--init` (防僵尸进程) 直击真实运行痛点，有望大幅降低 Agent 浏览器自动化时的崩溃率。

### 5. Bug 与稳定性
今日开发者提交了多个关键 Bug 修复 PR，按严重程度排列如下：

*   **严重 (P0): Agent 容器化运行崩溃风险**
    *   **状态：** 已提交 [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771)
    *   **描述：** 默认 `/dev/shm` 空间不足导致内嵌 Chromium 崩溃，且缺乏 init 进程可能导致容器内出现僵尸进程消耗资源。
*   **高 (P1): 预算/计费错误导致 Agent 任务静默丢失**
    *   **状态：** 已提交 [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)
    *   **描述：** 当遇到 Anthropic 等大模型的 Token 耗尽或预算超限情况时，Agent 运行器直接丢弃了这一轮交互，导致用户无法获知任务失败的真实原因。该 PR 将其改为正常抛出并交付错误提示。
*   **高 (P1): Signal 渠道重启静默失败**
    *   **状态：** 已提交 [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626)
    *   **描述：** macOS 下 `launchctl` 的静默失败导致安装向导误报成功，但 Signal 服务实际未启动。修复增加了显式的错误抛出。
*   **中 (P2): Codex 图片生成事件丢失**
    *   **状态：** 已提交 [PR #2770](https://github.com/nanocoai/nanoclaw/pull/2770)
    *   **描述：** Codex 内置的图片生成功能产出 `{ type: 'file', path }` 事件，但运行循环未消费该事件，导致图片生成后被直接丢弃，未发送到聊天频道。

### 6. 功能请求与路线图信号
结合开发者提交的 PR，可以看出近期版本的演进重点信号：

*   **无缝的 CLI 及多渠道集成体验：** 针对日常运维痛点，开发者正在修复 CLI 自定义 ID 被忽略的问题（[PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628)），以及跨平台 Emoji 反应不兼容问题（如 WhatsApp 不支持 Slack 的 Shortcode 格式，见 [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627)）。这些改进极大概率被整合进下一个 Minor 版本。
*   **智能体状态管理的鲁棒性：** 结合修复的计费超限报错（#2759）和文件事件交付（#2770），项目路线图明显在向**“减少 Agent 运行时的黑盒状态，增强错误可观测性”**方向倾斜。

### 7. 用户反馈摘要
从最近一周的 PR 动向（尤其是由 @eldar702 和 @assapin 等贡献者提交的内容）中，可提炼出当前用户的几个核心痛点：
1.  **“静默失败”是最大的体验杀手：** 无论是 Token 预算用尽（#2759）、Signal 重启失败（#2626），还是自定义 ID 被无视（#2628），系统过去倾向于“不报错就继续”，导致用户在排查 Agent 卡死时浪费大量时间。用户迫切需要明确的错误回显。
2.  **多平台规范差异导致摩擦：** 在 Slack 上跑通的 Emoji 反应逻辑，直接套用到 Discord/WhatsApp 时会因为底层 API 规范不同（Shortcode vs Unicode）而失效，用户期待底层框架能自动做好这层“翻译”工作（#2627）。

### 8. 待处理积压
以下高价值 PR 已经打开超过 20 天（自 5 月下旬提交，今日有更新活动），建议维护者优先排期 Review，以免产生代码冲突：

1.  **[OPEN] fix(cli): honor user-supplied --id in `ncl groups create` and friends** ([PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628))
    *   **积压时间：** 约 20 天。影响 CLI 核心参数交互逻辑，需尽早合并。
2.  **[OPEN] fix(reactions): align MCP add_reaction schema with channel reality + Slack bridge translation** ([PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627))
    *   **积压时间：** 约 20 天。涉及跨平台消息投递的基础逻辑，对终端用户体验影响较大。
3.  **[OPEN] fix(signal): replace silent restartService failure with explicit error** ([PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626))
    *   **积压时间：** 约 20 天。阻塞性的部署问题修复，建议尽快合并并发版。

---
*分析师结论：NanoClaw 项目目前处于“填坑与加固”阶段。项目并未盲目增加新技能，而是集中精力解决 Agent 在容器化运行、大模型计费异常处理以及多平台（Signal、Codex、WhatsApp）适配上的边缘场景。建议维护者尽快消化当前的 PR 积压，并考虑发布一次 Patch 版本以稳定现有用户群。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 开源项目 2026-06-16 动态日报：

# NullClaw 项目动态日报 (2026-06-16)

**项目仓库**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

### 1. 今日速览
- **整体活跃度**：项目在过去 24 小时内社区互动平稳，共产生 3 条活跃 Issue 和 1 条待合并 PR，主要聚焦于日常维护与企业级功能增强。
- **核心方向**：讨论热点集中在多 LLM 提供商（Azure OpenAI、Ollama）的集成兼容性以及运行时的限流配置。
- **工程进度**：项目当前处于常规迭代维护期，今日无新版本发布或核心代码合并，重点在于依赖更新与待处理反馈的收集。

### 2. 版本发布
*今日无新版本发布（无 Release 数据）。*

### 3. 项目进展
*今日暂无合并或关闭的 PR，无实质性代码库变更。*

当前有 1 条待处理的自动化依赖更新 PR，项目工程维护保持跟进：
- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** `[OPEN]` **ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**
  - **详情**：由 `dependabot[bot]` 自动触发，提议将 Docker 基础镜像 `alpine` 由 3.23 升级至 3.24。
  - **影响**：属于基础设施依赖升级，有助于修复底层安全漏洞并保持容器镜像的现代代，等待维护者审核通过即可合入。

### 4. 社区热点
今日社区讨论的焦点主要围绕**模型提供商的深度适配与本地化部署**展开：

1. **企业级云服务鉴权需求**：**[Issue #955](https://github.com/nullclaw/nullclaw/issues/955)** `[OPEN]`
   - **诉求**：用户 `kunalk16` 提出希望 Azure OpenAI LLM Provider 能够支持基于身份的认证，并建议使用 `DefaultTokenCredential` 读取 az CLI 的开发者凭证。
   - **分析**：这反映了 NullClaw 在企业级用户中的渗透率正在提升。由于部分企业 Azure 订阅的安全策略禁用了 API Key 直接访问，支持托管身份认证将是打通企业内部部署的关键一环。
2. **无状态 Agent 限流配置**：**[Issue #957](https://github.com/nullclaw/nullclaw/issues/957)** `[OPEN]`
   - **诉求**：用户 `jacktang` 在使用无记忆的 Agent 运行时并要求 JSON 格式输出时，频繁遇到配置阅读器的限流报错，寻求修改阈值的文档说明。
   - **分析**：揭示了在特定架构（无记忆+强格式）下，内部组件可能存在默认限流过于严格或文档缺失的痛点，属于开发者高度关注的运行时控制问题。

### 5. Bug 与稳定性
今日收到 1 项关于本地模型集成的稳定性报告：

- **高危/体验阻断 Bug**：**[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)** `[OPEN]` **[bug] Local model using ollama returns incomplete answers**
  - **详情**：用户 `bloodgroup-cplusplus` 报告，在通过 Ollama 拉取 gemma 模型并启动 Agent 后，系统无法返回完整的句子（回答被意外截断）。
  - **当前状态**：该 Issue 创建于 6 月 11 日，已于 6 月 15 日更新（目前包含 1 条评论），但暂无对应的修复 PR 提交。本地大模型的输出截断通常与 Token 限制、底层解析逻辑或 Ollama 流式传输的适配有关，建议维护者优先排查。

### 6. 功能请求与路线图信号
- **身份认证增强 (Azure)**：基于 [Issue #955](https://github.com/nullclaw/nullclaw/issues/955)，集成 `DefaultTokenCredential` 以替代静态 API Key 具有极高的实用价值。考虑到目前项目有自动化依赖更新的动作，若维护者后续提交相关功能 PR，此特性有望成为下一个次要版本的重要卖点。

### 7. 用户反馈摘要
- **痛点**：文档对于高级配置（如 Rate limit 阈值）的说明不够详尽（来自 #957）；与开源本地模型（Ollama + gemma）的协同存在稳定性瑕疵，导致输出不完整（来自 #952）。
- **场景**：用户正在广泛探索 NullClaw 的边界，既将其用于构建轻量级、格式化的无状态 Agent 运行时，也尝试将其作为本地大模型（Ollama）的 Agent 壳，同时还在尝试将其引入受严格安全策略管控的 Azure 云环境中。
- **评价**：用户对项目整体的拓展能力表示肯定，但在细节调试体验（报错信息不够直观）和多后端适配的成熟度上期待进一步优化。

### 8. 待处理积压
以下问题目前处于开启状态且未见代码级修复，需要维护团队予以关注：
- **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)** (Ollama 返回不完整答案)：影响本地模型核心可用性，建议尽快定位是 NullClaw 解析问题还是 Ollama 参数配置问题。
- **[Issue #957](https://github.com/nullclaw/nullclaw/issues/957)** (Rate limit 阈值疑问)：建议在文档中补充相关参数说明，或直接在代码中暴露更易配置的环境变量。
- **[PR #956](https://github.com/nullclaw/nullclaw/pull/956)** (Alpine 基础镜像升级)：常规依赖更新，建议尽快跑通 CI 予以合并，以规避旧版基础镜像的潜在安全风险。

---
*数据统计截止至: 2026-06-16 24:00 (基于过去24小时数据生成)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-06-16）

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持了**极高的活跃度**，共处理了 46 条 Issue 更新（33 条新开/活跃，13 条关闭）以及 50 条 PR 更新（26 条待合并，24 条已合并/关闭）。从活动趋势来看，核心团队和社区贡献者正全面聚焦于 **Reborn 架构的稳定性与扩展能力**，特别是针对凭证授权、UI/UX 引导和第三方扩展集成的修复。尽管今日暂未发布正式新版本，但底层的测试分片、CI 优化和关键权限漏洞修复标志着项目正在为下一个大版本进行密集的质量收敛。

## 2. 版本发布
* **今日无新版本发布**。

## 3. 项目进展
今日项目成功合并/关闭了 24 个 PR，在系统鲁棒性、可观测性和 CI 效率上迈出了坚实的一步：
* **Trace Commons 集成**：[PR #4559](https://github.com/nearai/ironclaw/pull/4559) 合并，引入了基于邀请链接的 Agent 驱动入门体验，将原本需要约 15 个 CLI 环境变量的复杂配置流程简化为聊天框内的一键操作。
* **Agent 鲁棒性提升**：[PR #4837](https://github.com/nearai/ironclaw/pull/4837) 合并，引入了 Gated final-answer nudge 机制，修复了 Reborn Agent 在调用预算耗尽或陷入死循环时输出空白/罐头消息的问题。
* **HTTP 工具修复**：[PR #4827](https://github.com/nearai/ironclaw/pull/4827) 合并，修复了 `builtin.http` 工具错误拒绝包含空 `body` 和 `body_base64` 字段 GET 请求的解析 Bug。
* **CI 与基准测试优化**：[PR #4588](https://github.com/nearai/ironclaw/pull/4588) 添加了轨迹观察者钩子和 LLM 提供商注入；[PR #4936](https://github.com/nearai/ironclaw/pull/4936) 允许基准测试手动指定 `ironclaw-reborn` 框架，大幅提升了开发者的测试体验。

## 4. 社区热点
当前社区的讨论焦点高度集中在 **“跨线程/会话的授权状态持久化”** 以及 **“扩展配置的用户体验”** 上：
* [Issue #4825](https://github.com/nearai/ironclaw/issues/4825)（已关闭，评论最多）：用户反馈在某个对话线程中选择“始终允许”某个能力后，新建线程仍被反复弹窗拦截。这暴露了底层凭证作用域（Scope）绑定到 `thread_id` 的设计缺陷。
* [Issue #4908](https://github.com/nearai/ironclaw/issues/4908) 与 [Issue #4886](https://github.com/nearai/ironclaw/issues/4886)：用户指出 Google Calendar 扩展在激活后仍显示“Activate”按钮，且扩展安装后的引导极为碎片化，用户不知道接下来该去 Configure 还是去聊天框进行 Auth 验证。这表明 Reborn WebUI 在状态管理的一致性上还有提升空间。

## 5. Bug 与稳定性
今日报告了多个影响 Agent 正常执行流程的阻塞性 Bug，整体表现为**“Agent 对工具失败或拒绝的容错恢复能力极差”**：
* **【P0 严重】Agent 因授权/拒绝卡死或崩溃**：
  * [Issue #4907](https://github.com/nearai/ironclaw/issues/4907) / [Issue #4921](https://github.com/nearai/ironclaw/issues/4921)：Google Calendar 或 Gmail 完成 OAuth 后，原运行直接失败且无法恢复执行。
  * [Issue #4764](https://github.com/nearai/ironclaw/issues/4764)：用户拒绝 Shell 执行授权后，工具调用一直处于 Pending 状态，系统无任何反馈。
  * [Issue #4761](https://github.com/nearai/ironclaw/issues/4761)：工具反复调用失败时，Agent 直接停止运行，而非尝试自我恢复。
* **【P1 高危】凭证与环境状态错误**：
  * [Issue #4887](https://github.com/nearai/ironclaw/issues/4887)：MCP 工具审批恢复时由于 `input_ref` 陈旧而失败。
  * [Issue #4917](https://github.com/nearai/ironclaw/issues/4917)：定时 Automations 完全无法运行，且面板状态指示器具有误导性。
  * [Issue #4928](https://github.com/nearai/ironclaw/issues/4928)：Railway 部署环境下，Notion OAuth 回调地址被错误生成为 localhost，导致云端鉴权彻底不可用。

## 6. 功能请求与路线图信号
从最新的 Issue 和活跃 PR 中，可以明显看出 IronClaw 接下来的路线图信号：
* **Reborn 自我学习系统**：[PR #4937](https://github.com/nearai/ironclaw/pull/4937) 与 [PR #4938](https://github.com/nearai/ironclaw/pull/4938) 开启了 "Memory learning semantics" 与 "Learning persona"，致力于让 Agent 从错误中学习，实现“绝不重蹈覆辙”。
* **彻底重构凭证作用域**：[Issue #4935](https://github.com/nearai/ironclaw/issues/4935) 与对应的 [PR #4939](https://github.com/nearai/ironclaw/pull/4939) 提出将凭证所有权从“线程级”提升为“所有者级（租户/用户/Agent）”，目前该 XL 体量 PR 已提交，是下个版本的核心重构。
* **Web 端文件系统交互**：[PR #4933](https://github.com/nearai/ironclaw/pull/4933) 提议在 WebChat v2 中允许 Agent 生成项目文件（如 CSV、报告）并提供给用户下载。
* **自动化 AI 代码审查**：[Issue #4880](https://github.com/nearai/ironclaw/issues/4880) 请求在 IronClaw 自身的 GitHub PR 流程中引入 AI 审查与评论回复自动化，减少人类维护者的负担。

## 7. 用户反馈摘要
综合今日大量的 Issue 反馈，真实用户的痛点和使用场景主要集中在以下三点：
1. **“碎片化的扩展安装体验”**：用户非常渴望开箱即用的第三方集成。当前体验中，用户在 Registry、Chat、Installed 页面和 Configure 页面之间反复横跳，很容易迷失。
2. **“脆弱的单次会话容错”**：用户使用场景通常涉及多步骤工作流（如：爬取 GitHub commits -> 存储到 Workspace -> 读回）。但只要中间任何一个工具（如文件系统或 OAuth）报错，整个 Run 就会彻底“罢工”（Run-borking），用户对此感到极度挫败。
3. **“视觉状态与底层实际不符”**：UI 频繁出现“显示 Active 但无法使用”或“显示 Setup Needed 但其实已配置”的割裂感，消耗了用户大量排查问题的时间。

## 8. 待处理积压
* **依赖升级积压**：Dependabot 发起了多项大范围依赖升级，目前处于排队等待审查状态，包括对 [RustLS 的升级 (PR #4876)](https://github.com/nearai/ironclaw/pull/4876)（43 个包更新）以及积压一个月之久的 [jsonwebtoken v10.3.0 升级 (PR #3707)](https://github.com/nearai/ironclaw/pull/3707)，提醒维护者关注安全性评估。
* **架构设计讨论**：[Issue #4922](https://github.com/nearai/ironclaw/issues/4922) 提出的提取 `local-dev` 能力组合重构任务目前处于 Open 状态，作为 M4 核心模块的一部分，需要核心架构师尽快介入确认重构方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报
**报告日期**: 2026-06-16 | **分析周期**: 过去 24 小时
**项目仓库**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

### 1. 今日速览
在过去 24 小时内，LobsterAI 展现出**极高的开发活跃度**。项目虽然没有发布新版本，但代码库经历了密集的重构与功能迭代，共有 11 个 PR 更新（其中 5 个被合并或关闭，6 个待处理）。核心进展集中在**语音输入（ASR）逻辑的深度清理**以及**文档 Artifact 分享预览体验的全面优化**。此外，自动化机器人（Dependabot）集中发起了多项 CI 构建依赖的升级。社区方面有 2 个历史议题被重新激活，暴露出用户在技能管理环节的交互痛点。

---

### 2. 版本发布
**本日无新版本发布 (0 个 Release)**。
*注：从 PR 动向来看，团队正在为 `2026.6.11` 发布分支做最后的功能整合与Bug修复，预计近期将有新版本产出。*

---

### 3. 项目进展
今日共有 5 个 PR 被成功合并或关闭，项目在多媒体交互和文档处理能力上迈出坚实一步：

*   🔥 **语音输入（ASR）架构大清洗**: 
    *   PR [#2160](https://github.com/netease-youdao/LobsterAI/pull/2160) 和 PR [#2162](https://github.com/netease-youdao/LobsterAI/pull/2162) 被关闭/合并。团队移除了旧的短语音 ASR 上传流程（`asr:recognize` IPC），使协同语音输入全面转向**纯实时 ASR** 流程。同时清理了设置中的旧版模式切换，精简了配置。
    *   PR [#2163](https://github.com/netease-youdao/LobsterAI/pull/2163) 优化了听写录音的 UI 体验，并增加了内存级的 ASR 配额切片，以处理每日可用量的懒重置。
*   📄 **文档 Artifact 分享与预览重塑**:
    *   PR [#2159](https://github.com/netease-youdao/LobsterAI/pull/2159) 带来了重量级更新：新增 `document_file` 分享来源，支持在 Artifact 面板分享和预览 DOCX、PPTX、XLSX、PDF 等多种格式。同时优化了 PDF 的原生预览兜底、DOCX 分页渲染以及表格的自动列宽，并调整了 CSP 安全策略以支持 blob 资源加载。

---

### 4. 社区热点
社区目前的讨论焦点集中在多窗口/后台运行体验以及技能管理上：

*   **[PR #1428] 会话完成/报错时推送系统通知** (作者: [choyuenga](https://github.com/choyuenga)) | [链接](https://github.com/netease-youdao/LobsterAI/pull/1428)
    *   **热度分析**: 这是一个强需求的功能实现。用户反馈 LobsterAI 在后台运行时，无法像 Claude Code 或 Cursor 那样在任务完成或报错时给出系统级提示，导致必须频繁手动切回窗口查看状态。该 PR 提议在窗口未聚焦时利用 Electron 原生 API 推送通知，直击效率痛点。

---

### 5. Bug 与稳定性
今日无新增严重系统崩溃报告，但暴露了明确的交互逻辑 Bug，均集中在本地技能上传环节：

1.  **[高] 本地技能可无限重复添加** | [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427)
    *   **详情**: 用户点击添加技能时，可以重复上传同一个技能，导致列表中出现多个同名技能，可能引发底层调度混乱或 UI 混淆。
    *   **修复状态**: 暂无关联 fix PR。
2.  **[中] 上传技能后无成功提示且列表不刷新** | [Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426)
    *   **详情**: 上传本地技能后，前端缺少成功提示 Toast，且技能列表面板未触发响应式更新，导致用户以为上传失败。
    *   **修复状态**: 暂无关联 fix PR。

---

### 6. 功能请求与路线图信号
从近期的 Issue 和 PR 走向，可以清晰看出项目近期的演进路线图：

*   **信号 1: 后台与多任务体验对齐竞品**。基于 [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)，项目正致力于补齐作为“后台生产力工具”的通知反馈短板，这极有可能会被纳入下一个大版本。
*   **信号 2: 打造全方位的文档生产力中心**。从 [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) 可以看出，LobsterAI 正在强化 Artifact 模块的处理能力，从单纯的代码/文本预览，向支持 Office 和复杂 PDF 的“一站式文档工作台”演进。
*   **信号 3: 工程化基础设施全面升级**。Dependabot 今日集中发起了 6 个依赖升级 PR（如 [PR #2167](https://github.com/netease-youdao/LobsterAI/pull/2167), [PR #2165](https://github.com/netease-youdao/LobsterAI/pull/2165)），涵盖了 Actions 版本跃升和 Electron 核心库的更新（[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 提议从 v40 升级至 v42），显示出项目在为后续开发扫清技术债务。

---

### 7. 用户反馈摘要
提炼近期评论区与 Issue 描述，真实用户痛点如下：
*   **操作反馈缺失感**：在进行“添加技能”等异步或写操作时，用户极度依赖即时的 UI 反馈（如 Loading、Success 弹窗、列表动态更新）。当前版本的静默处理让用户对系统状态产生怀疑（[#1426](https://github.com/netease-youdao/LobsterAI/issues/1426)）。
*   **注意力切换成本高**：用户倾向于让 AI Agent 在后台执行长耗时任务，但当前缺乏系统级的唤醒机制。用户表示“必须手动切回窗口查看”是一种体验降级，强烈呼唤非侵入式的系统通知。
*   **文档处理能力诉求**：用户对直接在客户端内预览复杂格式文档的需求强烈，不希望依赖外部工具。

---

### 8. 待处理积压
⚠️ **提醒维护者关注**：以下项目处于停滞或待响应状态，需要分配精力进行 Code Review 或 Bug 修复：

*   **陈旧依赖升级 PR**: [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 提议将 `electron` 从 40.2.1 升级到 42.4.0，该 PR 自 4 月创建后长期搁置，涉及主框架升级，需评估潜在 Breaking Change。
*   **技能上传 Bug 修复**: 前文提到的 [#1426](https://github.com/netease-youdao/LobsterAI/issues/1426) 与 [#1427](https://github.com/netease-youdao/LobsterAI/issues/1427) 均在昨日被系统标记为 `[stale]`（陈旧），虽然由于近期的评论恢复了活跃度，但仍需开发者介入提交修复代码。
*   **批量 CI 升级 PR 等待合并**: 昨日由机器人提交的 4 个 CI 依赖升级 PR（[2164](https://github.com/netease-youdao/LobsterAI/pull/2164), [2165](https://github.com/netease-youdao/LobsterAI/pull/2165), [2166](https://github.com/netease-youdao/LobsterAI/pull/2166), [2167](https://github.com/netease-youdao/LobsterAI/pull/2167)）目前均为 Open 状态，需过 CI 后尽快合并以保持流水线健康。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📊 Moltis 项目动态日报
**报告日期**: 2026-06-16 | **追踪仓库**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

### 1. 今日速览
- **整体活跃度评估：中等偏上（专注底层研发）**。过去 24 小时内，Moltis 仓库在 Issue 互动和版本发布上保持静默（均为 0），但核心代码贡献保持活跃，共有 2 条重要的功能性 PR 提交。
- **研发重心明确**：今日的代码提交完全聚焦于提升 AI 智能体的**底层兼容性**与**运行时上下文感知能力**，显示出项目正在向更高阶的自动化和企业级部署场景迈进。
- **社区健康度**：代码贡献单一（均来自核心成员 `gptme-thomas`），社区处于功能快速迭代的“静默构建期”，当前无紧急 Bug 或线上稳定性警报。

### 2. 版本发布
**本日无新版本发布。**（注：依据当前代码推进节奏，推测项目正在为下一个大版本或功能迭代积累代码。）

### 3. 项目进展
尽管今日未有 PR 被合并入主分支，但提交的 2 个待合并 PR 极大地丰富了 Moltis 作为个人 AI 助手的底层架构：

- **扩展外部智能体调度能力**：[PR #1125](https://github.com/moltis-org/moltis/pull/1125) `Support model and effort selection for external agents`
  - **进展解析**：该 PR 为外部接入的 Agent 提供了一等公民般的模型与努力程度选择支持。配置文件现支持自定义 `models` 和 `efforts`，并在 `/model` 命令中将其归类于 `external-agent/<kind>` 下。这标志着 Moltis 在多模型路由（如同时调度 Claude, GPT 等）和资源开销控制（effort 控制）上迈出关键一步。
- **增强运行时动态上下文注入**：[PR #1124](https://github.com/moltis-org/moltis/pull/1124) `Add context command support for chat turns`
  - **进展解析**：引入了 `chat.context_command` 配置项。允许在每次对话交互前执行特定的命令，并将该命令的 stdout 输出无缝附加到 Prompt 上下文中。这一功能极大地提升了 Moltis 在复杂 DevOps 场景或需要动态运行时数据（如实时日志、当前Git状态）注入场景下的可用性，免去用户手动复制粘贴的痛点。

### 4. 社区热点
**今日无高热度讨论。** 
- 过去 24 小时内，Issues 区新增与互动量均为 0。上述提及的 [PR #1125](https://github.com/moltis-org/moltis/pull/1125) 与 [PR #1124](https://github.com/moltis-org/moltis/pull/1124) 也暂未引发外部开发者的跟帖讨论（评论数为 undefined/0，点赞数为 0）。说明这些深度架构修改目前主要由内部驱动，尚未在开源社区大范围内扩散。

### 5. Bug 与稳定性
**本日无新报告的 Bug、崩溃或回归问题。**
- 线上稳定性评估：健康（0 P0/P1 缺陷）。今日的 2 个 PR 属于功能新增而非现有代码重构，在不合并的情况下不会对当前主干稳定性造成破坏。

### 6. 功能请求与路线图信号
虽然今日无用户主动提交功能请求，但从核心开发者提交的 PR 中，我们可以**逆向解读出 Moltis 的下一步路线图信号**：

- **信号 A：深度兼容“外部 Agent”生态**。通过 [PR #1125](https://github.com/moltis-org/moltis/pull/1125) 可以预见，Moltis 并不满足于只作为一个简单的 LLM 前端，而是致力于成为一个**Agent 管理器（Agent Orchestrator）**，允许通过统一接口（`/model`）调度不同技术栈的外部智能体，并持久化其特定的模型元数据。
- **信号 B：“无头化”与自动化部署支持**。[PR #1124](https://github.com/moltis-org/moltis/pull/1124) 中的“命令行上下文注入”是典型的 ToB /重度开发者功能。这暗示 Moltis 正在拓宽其应用边界，试图融入 CI/CD 流水线、服务器自动化诊断等“非对话式”的自动化工作流中。

### 7. 用户反馈摘要
**本日无直接用户反馈可提取。**
*(注：基于近期 PR 代码意图的间接推测：重度依赖 Moltis 的进阶用户，可能会对每次对话手动拼接上下文感到繁琐，[PR #1124](https://github.com/moltis-org/moltis/pull/1124) 正是对这一隐性开发痛点的精准回应。)*

### 8. 待处理积压
**当前无长期未响应的积压 Issue/PR。**
- 今日提交的 2 个 PR 均处于 `[OPEN]` 待合并状态。由于摘要信息丰富且结构完整，建议维护团队尽快进行 Code Review 并进行集成测试，以便将其打包进下一次的 Release 中。

---
*分析声明：本报告基于 GitHub 过去 24 小时的量化数据与 PR 摘要客观生成，旨在为开源投资者、代码贡献者及用户提供项目健康度参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报**
**日期**: 2026-06-16 | **分析数据区间**: 过去 24 小时

---

### 1. 今日速览
- **整体活跃度极高**：项目在过去 24 小时内保持了惊人的社区热度，共处理了 50 条 Issues 更新（31 条新开/活跃，19 条关闭）以及 50 条 PR 更新（15 条待合并，35 条合并/关闭）。
- **核心聚焦于上下文优化与 UI 提升**：今日的讨论和代码合并大量集中在 Token 实时用量显示、长上下文压缩机制以及控制台界面优化上，反映出用户对 Agent 运行时透明度和成本控制的强诉求。
- **工程效率稳健**：虽然今日无新版本发布，但维护者高效合并了大量社区贡献与修复，项目正处于 v1.1.11.post2 版本后的快速 bug 修复与功能迭代期。

### 2. 版本发布
* **今日无新版本发布**。项目当前稳定版本仍为 `v1.1.11.post2`。

### 3. 项目进展
今日项目整体向前迈进了坚实的一步，共有 **35 个 PR 被合并/关闭**，重点推进了以下领域：
* **上下文与 Token 可视化落地**：合并了多个重磅 PR，彻底解决了长期困扰用户的上下文盲盒问题。包括在对话窗口 UI 中实时展示 Token 用量统计与历史记录 ([PR #5130](https://github.com/agentscope-ai/QwenPaw/pull/5130), [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433), [PR #4310](https://github.com/agentscope-ai/QwenPaw/pull/4310))。
* **技能市场与插件体系完善**：更新了 Skill Market 并改善了技能注入的 UI 展示，屏蔽了冗余的底层 Markdown 细节 ([PR #5123](https://github.com/agentscope-ai/QwenPaw/pull/5123), [PR #5146](https://github.com/agentscope-ai/QwenPaw/pull/5146))。
* **定时任务优化**：实现了统一会话内创建独立 cron 任务，且不携带历史上下文，大幅降低了定时任务的 Token 消耗与干扰 ([PR #4602](https://github.com/agentscope-ai/QwenPaw/pull/4602))。
* **Windows 客户端稳定性提升**：修复了旧版 Windows 终端导致的 Rich console 崩溃问题以及自我终止命令引发的异常 ([PR #5192](https://github.com/agentscope-ai/QwenPaw/pull/5192))。

### 4. 社区热点
以下 Issues/PRs 在今日引发了最热烈的讨论，反映了社区的强诉求：
* **[Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)** (22条评论): **华为小艺频道集成调试**。用户在接入小艺开放平台时遇到设备端报“网络拥堵”及会话列表不同步的问题。这表明 CoPaw 在扩展 IoT/手机端渠道时，底层长连接与鉴权机制面临复杂的环境兼容性挑战。
* **[Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167)** (4条评论): **飞书 CardKit 流式卡片长回复卡顿**。用户反馈在长文本输出时“一个字一个字往外吐”，体验极差。流式渲染的性能瓶颈是当前 IM 接入层亟待解决的痛点。
* **[PR #5158](https://github.com/agentscope-ai/QwenPaw/pull/5158)**: **控制台用户输入队列**。允许用户在 Agent 未响应完毕时继续输入，形成处理队列。此特性被提交，说明在复杂工作流场景下，用户需要更异步的交互方式。

### 5. Bug 与稳定性
今日报告的 Bug 主要集中在 v1.1.11.post2 的边缘场景与资源管理上，按严重程度排列如下：
* **[严重] 插件依赖安装引发系统死循环 ([Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181))**: v1.1.11.post2 插件自动 `pip install` 时未隐藏 cmd 窗口，若网络不佳连不上 PyPI，会导致无限重试并疯狂弹出 cmd 进程，甚至导致系统资源耗尽。（目前有相关解耦插件加载器的 PR [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) 正在推进中）。
* **[严重] 长对话导致 Agent 彻底卡死无响应 ([Issue #5161](https://github.com/agentscope-ai/QwenPaw/issues/5161))**: 上下文长度增加后，Agent 直接罢工。
* **[严重] 上下文压缩机制导致人设丢失 ([Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171))**: 当 Agent 人设文件的 Token 超过压缩保留阈值时，压缩逻辑直接清空了所有上下文，导致任务中断且人设崩塌。
* **[中等] 特定格式附件下载 404 ([Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140))**: 纯文本附件可下载，但 docx/pdf 等二进制文件下载报错 404。

### 6. 功能请求与路线图信号
从开放的功能请求和正在审核的 PR 中，可以清晰地看出项目下一步的演进方向：
* **Agent 治理与沙盒隔离机制**: [PR #5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) 正在讨论引入初始的沙盒接口，为代码执行提供安全环境。
* **统一驱动层抽象**: [PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) 提议为 MCP、A2A、ACP 等外部能力引入统一的 OS Driver 层。一旦合并，CoPaw 的多 Agent 互操作性将大幅提升。
* **高阶上下文压缩**: 有用户提议集成 Headroom 作为可选的上下文压缩代理层，宣称可减少 60-95% 的 Token 消耗 ([Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063))。

### 7. 用户反馈摘要
通过对 Issue 评论的自然语言分析，提炼出当前用户的三大核心情绪与痛点：
* **满意点 - 成本可控性正在提升**：大量关于“显示对话轮数”、“Token 实时统计”的 Issue 被关闭并合并进主分支，用户对能够直观感知 API 开销表示高度认可。
* **痛点 1 - 上下文管理焦虑**：用户反映 Agent 的“上下文统计数值”与实际发送给 API 的体量不符（[Issue #5122](https://github.com/agentscope-ai/QwenPaw/issues/5122)）。原因是 Skill 和 MCP 的握手信息额外占用了大量 Token，导致用户感觉被“隐形扣费”。
* **痛点 2 - 重构带来的历史包袱**：项目从 `copaw` 改名为 `qwenpaw` 后，引发了本地数据目录混乱 (`~/.copaw/` 与 `~/.qwenpaw/` 并存) 的吐槽，导致部分插件安装失败（[Issue #5104](https://github.com/agentscope-ai/QwenPaw/issues/5104)）。

### 8. 待处理积压
建议维护者关注以下高价值且需要推进的外部贡献或长期未决问题：
* **[PR #4622] DataPaw 插件停滞**: 包含 12 个 BI 技能的数据分析插件提交已超过大半个月，目前处于 `Under Review` 状态，建议推进 Review 以丰富官方插件生态。
* **[Issue #5025] 多 Agent 通信底层 Bug**: `submit_to_agent` (后台 Agent 间任务提交) 因会话路径生成逻辑错误抛出 `FileNotFoundError`。多 Agent 编排是高级核心场景，需优先排期修复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-06-16 | **追踪仓库**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
过去 24 小时内，ZeroClaw 展现出极高的研发与社区活跃度，共更新了 50 个 Issues（47 个活跃/新建，3 个关闭）和 50 个 PR（46 个待合并，4 个已合并/关闭）。
开发重心目前明显聚焦于 **v0.9.0 版本的底层架构重构**，涵盖了安全鉴权、多 Agent 路由调度、内存管理以及供应链安全（CI/CD 强化）。
此外，社区针对运行时的上下文压缩（Context Compression）、MCP 工具的作用域隔离发起了深度讨论，标志着项目正在向更安全、企业级的多租户/多智能体架构迈进。

---

### 2. 版本发布
**本日无新版本发布。** 
当前项目的核心推进点在于积压的 PR 队列，从 Issue 标签来看，主分支正处于 **v0.8.1**（集成/渠道提供商修复）和 **v0.9.0**（破坏性变更：网关/鉴权/多智能体架构）的并行开发与攻坚阶段。

---

### 3. 项目进展
今日有 4 个 PR 被合并或关闭，项目在轻量级代码优化与文档维护上迈出小步：
*   **文档与仓库瘦身**：PR [#7676](https://github.com/zeroclaw-labs/zeroclaw/PR/7676) 被关闭（转为临时分支策略）。该任务旨在清理 `gh-pages` 积累的约 2.9 GiB 的 mdBook 产物，这暴露了文档站点的历史包袱，后续将通过临时环境生成来缓解克隆体积。

整体来看，今日有高达 46 个功能/修复 PR 处于活跃待合并状态，核心开发团队正在进行严密的 Code Review（例如 PR [#7748](https://github.com/zeroclaw-labs/zeroclaw/PR/7748) 引入了庞大的 Provider 归因调度器），处于发版前的“蓄水”阶段。

---

### 4. 社区热点
今日讨论热度最高的问题集中在**多智能体架构与企业级安全集成**：
*   **多 Agent 路由架构落地** ([#2767](https://github.com/zeroclaw-labs/zeroclaw/Issue/2767)，👍9，💬6)：社区高度期待类似 OpenClaw 的多 Agent 路由功能（实现工作空间、会话和渠道账户的完全隔离）。这不仅是呼声最高的特性，也是 ZeroClaw 走向复杂业务场景的基石。
*   **自定义推理端点的本地 CA 证书支持** ([#1458](https://github.com/zeroclaw-labs/zeroclaw/Issue/1458)，💬8)：大量企业用户在使用内部 LLM 端点时遇到了 ZeroClaw 的 HTTPS 证书拦截问题。这反映了 ZeroClaw 在严格合规的企业网络环境中部署存在痛点。
*   **WebAssembly 优先，移除 Node.js 运行时** ([#7674](https://github.com/zeroclaw-labs/zeroclaw/Issue/7674)，RFC)：开发者提出将 Web UI 的构建和运行全面转向 Wasm，彻底消除对 npm 生态的依赖。这是一个重大的架构转向信号，旨在削减供应链风险。

---

### 5. Bug 与稳定性
今日报告了多个影响工作流的高危 Bug，部分已火速提交修复 PR：

*   **[S1 / 工作流阻塞] WebSocket 网关 `ask_user` 工具失效** 
    *   问题：Agent 调用 `ask_user` 时在 Web 仪表盘中瞬间崩溃 ([#7542](https://github.com/zeroclaw-labs/zeroclaw/Issue/7542))。
    *   修复：已提交 PR [#7678](https://github.com/zeroclaw-labs/zeroclaw/PR/7678) 修复了 `CanvasStore` 线程未共享的问题。
*   **[S2 / 安全降级] Per-agent MCP 隔离静默失效** 
    *   问题：配置的 `mcp_bundles` 限制在运行时未生效，Agent 可以越权调用不应访问的 MCP 工具 ([#7733](https://github.com/zeroclaw-labs/zeroclaw/Issue/7733))。这是严重的安全隔离漏洞，目前已获维护者确认接受。
*   **[S2 / 逻辑死锁] Agent 交替调用工具导致无限死循环**
    *   问题：原有的无进展检测逻辑存在盲区，交替使用工具会绕过限制，导致 Agent 无限消耗 Token ([#7681](https://github.com/zeroclaw-labs/zeroclaw/PR/7681) 已提交修复)。
*   **[S2 / 缓存污染] 多模态提示词命中错误缓存**
    *   问题：包含 `[IMAGE:...]` 的多模态输入错误命中了纯文本的响应缓存 ([#7741](https://github.com/zeroclaw-labs/zeroclaw/Issue/7741))。

---

### 6. 功能请求与路线图信号
结合开发者的活跃提交，以下几项功能极有可能在近期合入主分支并纳入下一版本：

*   **提供商管道装饰器（原生上下文压缩）**：RFC [#7673](https://github.com/zeroclaw-labs/zeroclaw/Issue/7673) 提议引入 `CompressionDecorator`，在 ChatRequest 发送给 LLM 之前进行上下文压缩。这将大幅降低长会话的 Token 成本。
*   **A2A（Agent-to-Agent）发现协议**：RFC [#7218](https://github.com/zeroclaw-labs/zeroclaw/Issue/7218) 推进实现 `.well-known/agent-card.json`，为 ZeroClaw 不同实例之间、以及与外部 Agent 系统的互联互通打下基础。
*   **精细化成本追踪**：PR [#7492](https://github.com/zeroclaw-labs/zeroclaw/PR/7492) 正在适配 OpenAI 和 DeepSeek 的缓存输入 Token 定价机制，这将使得项目的账单统计更加精准。

---

### 7. 用户反馈摘要
通过分析 Issue 评论区，真实用户的痛点主要集中在以下几个方面：
1.  **TUI 交互不够灵活**：用户 ([#7467](https://github.com/zeroclaw-labs/zeroclaw/Issue/7467), [#7468](https://github.com/zeroclaw-labs/zeroclaw/Issue/7468)) 反馈在终端 UI（zerocode）中编辑字符串和重命名 Alias 的体验很差，无法使用方向键修改错别字，暴露了 CLI 交互层需要对 Readline 或类似库进行深度优化。
2.  **渠道接入的边缘痛点**：Slack 用户希望首次被提及时能自动补全线程历史 ([#6055](https://github.com/zeroclaw-labs/zeroclaw/Issue/6055))；Email 渠道在缺乏 Message-ID 时会生成随机 UUID，导致重复抓取 ([#7738](https://github.com/zeroclaw-labs/zeroclaw/Issue/7738))。这表明 ZeroClaw 在非主流即时通讯渠道（如邮件、Slack 线程）的鲁棒性仍需打磨。
3.  **开发者权限管理的诉求**：越来越多的用户开始在本地部署带有自签证书的 OpenAI 兼容端点，强制 HTTPS 校验导致无法连通，急需“忽略 SSL”或“导入自签名 CA”的选项。

---

### 8. 待处理积压
维护者需关注以下存在长期阻塞或停滞风险的关键任务：

*   **[高优先级/被阻塞] 允许对兼容端点发起不安全 HTTPS 请求** ([#551](https://github.com/zeroclaw-labs/zeroclaw/Issue/551))：自 2 月开启至今未解决，被标记为 `status:blocked`。结合今日另一个高讨论的 CA 证书 Issue，建议维护者统筹规划一套完整的本地证书/自签名端点支持方案。
*   **[高优先级/需作者操作] 批量回滚导致的代码丢失追踪** ([#6074](https://github.com/zeroclaw-labs/zeroclaw/Issue/6074))：3月底一次涉及 153 个提交的批量 Revert 导致大量已合并的 bug 修复丢失。这个“技术债”追踪 Issue 需要社区持续介入清理，目前状态停滞。
*   **[测试覆盖率] 13个模块的测试覆盖率审查跟进** ([#7685](https://github.com/zeroclaw-labs/zeroclaw/Issue/7685))：审查发现了大量冗余和过期的测试用例，维护者已建立 Tracker，需要开发者在后续提交 PR 时强制关联并修复这些无效测试，以保障 CI 流水线的健康度。

</details>