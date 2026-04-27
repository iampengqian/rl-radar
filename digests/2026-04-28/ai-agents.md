# OpenClaw 生态日报 2026-04-28

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-27 22:14 UTC

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
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# 📊 OpenClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
OpenClaw 项目在过去24小时内保持了**极高的社区与开发活跃度**。项目共处理了 500 条 Issue 更新（新开/活跃 343，关闭 157）和 500 条 PR 更新（待合并 355，合并/关闭 145），闭环率达到 31.4%，展现出核心团队极强的响应和处理能力。最新发布的 `v2026.4.25` 带来了史诗级的 TTS（文本转语音）生态升级。然而，近期的高频迭代（特别是 2026.4.14 至 2026.4.25 版本）也引入了一些网关启动阻塞、消息重复注入和前端 UI 渲染的回归 Bug，目前社区和核心成员正在积极通过 Hotfix 进行拦截和修复。

---

## 2. 版本发布
- **[v2026.4.25: OpenClaw 2026.4.25](https://github.com/openclaw/openclaw/releases/tag/v2026.4.25)**
  - **核心亮点**：语音回复迎来了全面的 TTS 升级。支持通过 `/tts latest` 进行控制，提供聊天级别的自动 TTS 控制、角色语音、基于 Agent/账户的覆盖配置。
  - **生态扩展**：新增了对 Azure Speech、Xiaomi、Local CLI、Inworld、Volcengine 和 ElevenLabs v3 的全覆盖支持。
  - **致谢**：贡献者 @leonchui, @zoujiejun, @solar2ain 等。

---

## 3. 项目进展
今日合并和关闭了多个关键 PR，显著提升了系统的稳定性和认证逻辑的合理性：
- **网关鉴权逻辑修复**：
  - [`[PR #73034] fix: allow trusted-proxy local password fallback`](https://github.com/openclaw/openclaw/pull/73034)：修复了 `trusted-proxy` 模式下阻断本地服务的问题，现在代理鉴权失败后会安全回退到密码认证。
  - [`[PR #64122] fix(gateway): allow password fallback for trusted-proxy auth mode`](https://github.com/openclaw/openclaw/pull/64122)：同样针对网关鉴权回退机制的底层改进。
- **Agent 会话管理优化**：
  - [`[PR #72414] fix(agent): preserve default-agent session routing compatibility`](https://github.com/openclaw/openclaw/pull/72414)：修复了非默认 Agent 在写入 `--to` 会话时的状态分叉问题，保障了旧版会话的兼容性。
- **CI/CD 与基础设施**：
  - [`[PR #73047]` & `[PR #73058]` fix(ci): harden macOS CodeQL SARIF filtering`](https://github.com/openclaw/openclaw/pull/73058)：修复了 macOS 构建管线中的安全扫描误报问题。

---

## 4. 社区热点
今日社区讨论最激烈的 Issue 集中在近期版本引发的 Provider 对接失败与多平台消息处理逻辑上：
1. **[`[Issue #68735] LLM request failed: provider rejected the request schema`](https://github.com/openclaw/openclaw/issues/68735)** (👍6, 评论 25)
   - **诉求分析**：升级到 4.15 后，使用 `github-copilot/gpt-5-mini` 时首条消息可用，但后续消息触发请求体被拒。这暴露了 OpenClaw 在处理特定 Provider 长上下文或 Tool Payload 历史截断策略上可能存在不兼容。
2. **[`[Issue #29809] origin not allowed (Control UI via Gateway)`](https://github.com/openclaw/openclaw/issues/29809)** (👍6, 评论 15)
   - **诉求分析**：大量通过 FRP/内网穿透部署的用户遭遇 CORS 拦截。急需官方支持自定义 `gateway.controlUi.allowedOrigins`。
3. **[`[Issue #29387] Bootstrap files in agentDir are silently ignored`](https://github.com/openclaw/openclaw/issues/29387)** (👍4, 评论 13)
   - **诉求分析**：高级玩家配置独立 `agentDir` 时，发现灵魂设定文件（SOUL.md 等）未被注入到 Prompt，直接导致 Agent “失忆”，说明配置加载优先级存在缺陷。

---

## 5. Bug 与稳定性
近期版本迭代较快，部分破坏性 Bug 正在集中爆发，部分已有对应 PR 介入：

- **🔴 P0 级别 (阻塞/崩溃)**：
  - **[`[Issue #71986] v2026.4.24 on VPS: whatsapp and telegram gone, doctor fails`](https://github.com/openclaw/openclaw/issues/71986)**：更新后网关持续崩溃，通讯渠道掉线，更新路径被破坏。
  - **[`[Issue #72848] Update from 4.23 to 4.24/4.25 leads to gateway timeouts`](https://github.com/openclaw/openclaw/issues/72848) (已关闭)**：Intel Mac 升级后网关超时卡死。
  - **[`[Issue #71761] All channel messages injected twice (double token cost)`](https://github.com/openclaw/openclaw/issues/71761) (已关闭)**：极度消耗 Token 的严重回归。
    - *✅ Fix PR: [`[PR #72290] fix(chat): prevent duplicate user message delivery`](https://github.com/openclaw/openclaw/pull/72290)*

- **🟠 P1 级别 (严重回归/卡顿)**：
  - **[`[Issue #67035] Windows UI regression: text swallowed, invisible streams`](https://github.com/openclaw/openclaw/issues/67035)**：Windows 桌面端 UI 吞字、流式输出白屏。
  - **[`[Issue #72846] Sidecar startup blocks for ~3 min after ready`](https://github.com/openclaw/openclaw/issues/72846)**：已修复的启动阻塞问题在 4.25 版本死灰复燃，耗时增加至 3 分钟。

---

## 6. 功能请求与路线图信号
通过 Issue 和活跃 PR，我们可以清晰看到项目正在扩展的边界：
- **网络与部署灵活性**：
  - [`[Issue #39604] Add tools.web.fetch.allowPrivateNetwork`](https://github.com/openclaw/openclaw/issues/39604)：请求 `web_fetch` 工具支持访问局域网/内网地址（默认关闭，按需开启）。
- **企业级高阶控制**：
  - [`[Issue #42475] Per-agent cost budget enforcement`](https://github.com/openclaw/openclaw/issues/42475)：请求在网关层增加 Agent 的按天/按月消耗预算拦截，企业部署刚需。
- **🚀 具备高度实施可能的新生态 (基于 PR 推断)**：
  - [`[PR #73038] feat(providers): add DeepInfra provider plugin`](https://github.com/openclaw/openclaw/pull/73038)：正在全面接入 DeepInfra Provider，包含动态模型发现能力，预计近期合并。
  - **Plugin SDK 架构大重构**：[`[PR #72287]` & `[PR #72383]`](https://github.com/openclaw/openclaw/pull/72287)：正在构建通用的 Host-hook 插件契约，为后续的 Plan Mode 和复杂工作流打基础。

---

## 7. 用户反馈摘要
从真实的 Issue 提问和反馈中，提取出当前用户的三个典型切面：
1. **自建部署者的痛点**：使用 Docker 部署在云服务器并通过 FRP 暴露服务的个人开发者，深受 CORS 跨域策略和鉴权逻辑变更的影响。
2. **Token 消耗焦虑**：用户对 Agent 内部消息重发（如 Issue #71761）和错误循环（如 Issue #41555 Opus 模型的推理死循环）导致的 Token 飞速消耗极其敏感。
3. **插件形态的演进期待**：越来越多用户希望 OpenClaw 不仅是个 Chat Bot，而是能调用本地内网资源（突破 Localhost 限制）、具备 LaTeX 数学公式渲染能力（Issue #42840）的助理底座。

---

## 8. 待处理积压
以下是讨论度高/破坏性强但尚未得到明确代码级别解决的历史问题，建议维护团队重点关注：
1. **网关内存泄漏与 OOM**：
   - [`[Issue #55334] sessions.json unbounded growth causes gateway OOM`](https://github.com/openclaw/openclaw/issues/55334)：随着运行时间推移，网关内存无限制增长，长期运行的节点必现。
2. **多渠道上下文污染顽疾**：
   - [`[Issue #69208] Umbrella: duplicate transcript, replay, and context assembly`](https://github.com/openclaw/openclaw/issues/69208)：横跨 MS Teams、Webchat 和 Telegram 的消息重复和回放上下文错乱的统一追踪 Issue。
   - [`[Issue #41355] Discord: ThreadStarterBody re-injected on every turn`](https://github.com/openclaw/openclaw/issues/41355)：Discord 线程上下文重复污染问题已标记为 Stale。

---

## 横向生态对比

基于 2026 年 4 月 28 日各开源项目的社区动态数据，为您呈现个人 AI 助手与自主智能体开源生态横向对比分析报告：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话交互”向“多模态、多端协同与企业级高可用”跨越的关键阶段**。各项目正密集修复因高频迭代（特别是底层引擎重构和最新 LLM 适配）带来的回归 Bug，核心诉求集中在**长短期记忆管理、上下文压缩健壮性、以及本地/国产大模型的无缝接入**。此外，底层架构的**模块化解耦**（通讯渠道、沙箱环境可选化）和**边缘部署体验优化**已成为项目的核心竞争壁垒。

### 2. 各项目活跃度对比
*健康度评估标准：O-优秀（高吞吐且闭环好）、G-良好（活跃迭代）、M-中等（有积压）、S-停滞*

| 项目名称 | Issues 更新数 | PRs 更新数 | 版本发布情况 | 活跃度与闭环能力 | 综合健康度 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.25` (TTS史诗级升级) | **极高**。Issue/PR 日均处理量极大，闭环率31.4% | O (优秀) |
| **PicoClaw** | 109 | 120 | `v0.2.7-nightly` | **极高**。关闭/合并率超过50%，响应极快 | O (优秀) |
| **CoPaw** | 50 | 43 | 无 (准备 `v1.1.4.post3`) | **高**。新开与关闭达到 1:1 完美平衡 | O (优秀) |
| **ZeroClaw** | 48 | 50 | 无 | **高**。社区贡献活跃，大量底层修复已提交 | G (良好) |
| **Hermes Agent**| 50 | 50 | 无 (当前 `v0.11.0`) | **高**。但存在多个 15 天未处理的 P1/P2 积压 | M (中等) |
| **IronClaw** | 10 | 31 | 无 | **中高**。处于 Reborn 架构重构期，核心PR已合入 | G (良好) |
| **NanoBot** | 17 | 37 | 无 | **高**。修复极度迅速，稳定性提升显著 | O (优秀) |
| **LobsterAI** | 7 | 38 | `2026.4.25` (已发) | **高**。备战发版特征明显，合并率高 | O (优秀) |
| **NanoClaw** | 16 | 25 | 无 | **中高**。v2架构重写后的快速打磨期 | G (良好) |
| **Moltis** | 5 | 14 | 无 | **中高**。处理了大量架构精简与代码清理工作 | G (良好) |
| *NullClaw / TinyClaw / ZeptoClaw / EasyClaw* | 0 | 0 | 无 | 过去24小时无活动 | S (停滞) |

### 3. OpenClaw 在生态中的定位
作为生态内的**核心参照系与头部项目**，OpenClaw 展现出了显著的统治力：
*   **社区规模与吞吐量绝对领先**：日处理 500+ 级别的 Issue/PR，其社区规模与核心团队的处理吞吐量远超同类项目（如 PicoClaw 日处理 120 左右，Hermes 50 左右）。
*   **多模态生态的先发优势**：当 NanoBot 和 PicoClaw 还在基础 TTS/ASR 架构设计和功能请求阶段时，OpenClaw 已经通过 `v2026.4.25` 实现了覆盖 Azure、小米、火山引擎等全链路的 TTS 生态闭环。
*   **企业级特性的深度探索**：相比于 Moltis 等项目刚刚开始尝试代理路由重构，OpenClaw 已经在探讨并实施 Per-agent cost budget enforcement（单智能体预算拦截）和 Plugin SDK 大重构，显示出其已率先跨入“企业级高阶控制”深水区。
*   **技术路线差异**：其领先也带来了副作用，近期高频迭代引发了网关启动阻塞、鉴权回退失败等系统性回归 Bug，这也是作为“航母级”项目不可避免的阵痛。

### 4. 共同关注的技术方向（行业共鸣点）
从多项目的 Issue 和 PR 动态中，涌现出明显的跨项目共性需求：
*   **大模型兼容与容错（几乎没有项目幸免）**：
    *   *涉及项目*：NanoBot, Hermes, LobsterAI, ZeroClaw。
    *   *具体诉求*：各项目均爆发了针对 DeepSeek-v4、具备“思考”能力的推理模型（如 Kimi）在多轮会话中 `reasoning_content` 丢失或格式不规范导致的 API 400 报错。缺乏跨 Provider 的 Failover 容灾机制是企业级刚需。
*   **上下文压缩与记忆机制的系统级重构**：
    *   *涉及项目*：Hermes, CoPaw, NanoClaw, PicoClaw。
    *   *具体诉求*：Hermes 的多个 P1 Bug 指向压缩导致的历史污染；CoPaw 重构了压缩回退机制。长对话下的摘要丢失、僵尸会话累积是多智能体框架的共同顽疾。PicoClaw 甚至在探讨类似人类海马体的 Seahorse 记忆系统。
*   **底层架构与通讯渠道的模块化解耦**：
    *   *涉及项目*：Moltis, IronClaw, NanoClaw。
    *   *具体诉求*：Moltis 将 Telegram/Discord 改为可选依赖以缩减编译体积；IronClaw 推进 Reborn 架构的 crate 拆分；社区强烈要求剥离重度集成，转向以 Skill/WASM 为主的轻量内核。
*   **容器安全与执行中断控制**：
    *   *涉及项目*：NanoClaw, CoPaw, Moltis。
    *   *具体诉求*：NanoClaw 呼吁防范 Agent 导致宿主机 OOM；CoPaw 的前端“暂停”按钮无法停止后端 Token 消耗引发众怒；安全熔断与 Hook 机制正成为标准配置。

### 5. 差异化定位分析
*   **企业级/重度集成底座**：与 IronClaw、Hermes Agent 定位类似，皆致力于多平台（飞书、企微、Teams）打通。IronClaw 侧重于“任务预算与时区感知”等精细化调度，而 OpenClaw 更注重 TTS 等多模态交互。
*   **轻量级/极客玩家工具**：PicoClaw 和 NanoBot 属于这一阵营。它们迭代极快，非常注重本地部署（Docker、树莓派/ARM、LXC 环境）和 OpenRouter/免费模型的适配，是个人开发者的最爱。
*   **Web3/隐私优先**：ZeroClaw 体现了独特的极客属性，正在探索 WASM 插件系统和端到端加密恢复，面向对隐私和高度定制化有苛刻要求的用户。
*   **一体化 AI 桌面应用**：LobsterAI 和 CoPaw 更像是打包好的开箱即用产品，正致力于打磨 Electron 界面、UI 易用性（如 AI 辅助诊断配置）和移动端闭环体验。

### 6. 社区热度与成熟度分层
*   **绝对头部（航母舰队）**：**OpenClaw**。社区热度最高，同时面临组件膨胀带来的 OOM 和网关超时等“大企业病”，需要强大的核心团队把控 Hotfix 节奏。
*   **快速扩张期（中流砥柱）**：**PicoClaw, NanoBot, CoPaw, ZeroClaw**。这些项目目前处于 v1.x 到 v2.x 的架构重写或密集打磨期。PR 合并率极高，对 Bug 极其敏感，正在疯狂抢占 OpenClaw 生态之外的细分市场。
*   **技术攻坚期（精锐部队）**：**IronClaw, LobsterAI, Hermes, Moltis**。它们没有盲目追求 PR 数量，而是在进行底层数据库迁移（如 Hermes 迁往 SQLite WAL）、Reborn 架构拆分或大规模安全加固。

### 7. 值得关注的趋势信号
1.  **“Token 焦虑”催生成本控制组件**：随着大模型在 Agent 中的应用加深，用户对“后台静默消耗 Token”（如 CoPaw 的假暂停）极其敏感。在 UI 中集成实时 Token 仪表盘、支持按天/按月预算硬拦截，将成为 To B 定价和 To C 体验的标配。
2.  **Agent 的“执行域”与“控制域”必须物理隔离**：多个项目暴露出 Agent 执行耗时任务或死循环时，用户无法插手干预的问题。NanoBot 提出的 Steering Loop + AgentMessage 双层架构，代表着下一代 Agent Runtime 的发展方向。
3.  **国产大模型出海适配已成红海**：DeepSeek v4、Kimi、MiniMax、阿里云百炼等模型在今天多个项目的 Issue 中密集出现。开源智能体框架必须具备极强的结构化适配能力，尤其是处理非标字符串和多轮“思考”内容。
4.  **高级 AI 能力的“内化”**：不再单纯依赖大模型，框架本身开始内建 AI 能力。例如 LobsterAI 提出的“AI 诊断配置异常”，以及 PicoClaw 提出的“动态 Skill 自动生成”，表明 AI 助手底座正在从单纯的“传声筒”向具备“自愈和进化”能力的 OS 演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这份报告涵盖了开源 AI 智能体框架 NanoBot (github.com/HKUDS/nanobot) 在 2026-04-28 的最新动态。通过对过去 24 小时的 GitHub 数据分析，为您呈现项目的最新进展、社区动态及健康度评估。

---

### 1. 今日速览
今日 NanoBot 项目呈现出**极高**的开源社区活跃度与项目推进速度。过去 24 小时内，项目共处理了 17 条 Issue（其中 12 条被迅速关闭），并推进了 37 个 Pull Requests（21 个顺利合并/关闭）。在没有发布新版本的情况下，核心开发团队和社区贡献者集中精力修复了影响稳定性的多个关键 Bug（特别是针对 DeepSeek 最新模型和 OpenAI Codex 提供商的兼容性），同时在架构层面引入了会话级历史记录隔离等重要功能。整体而言，项目处于**极度健康且快速迭代**的阶段。

### 2. 版本发布
今日无新版本发布。无破坏性变更或迁移注意事项。

### 3. 项目进展
今日共合并/关闭了 21 个 PR，项目在渠道集成、上下文管理和模型兼容性方面取得了实质性进展：
*   **会话历史隔离落地**：PR [#3481](https://github.com/HKUDS/nanobot/pull/3481) 实现了会话级作用域的历史记录，解决了不同 session 历史混淆的问题。
*   **核心 Provider 稳定性修复**：合并了 PR [#3478](https://github.com/HKUDS/nanobot/pull/3478) 和 [#3458](https://github.com/HKUDS/nanobot/pull/3458)，前者修复了 OpenAI 兼容客户端因无超时设置导致最长阻塞 600 秒的严重问题，后者则针对 DeepSeek 规范化了非字符串消息内容。
*   **流式输出与进度回调修复**：PR [#3480](https://github.com/HKUDS/nanobot/pull/3480) 修复了 OpenAI Codex 提供商不再向频道发送流式进度增量的回归 Bug。
*   **Discord 与 Heartbeat 机制优化**：PR [#3397](https://github.com/HKUDS/nanobot/pull/3397) 完善了 Discord 的线程支持及会话隔离；PR [#3389](https://github.com/HKUDS/nanobot/pull/3389) 修复了心跳机制导致内部推理泄漏的错误。

### 4. 社区热点
今日社区讨论的焦点集中在 **Agent 运行时的控制权与多模型容灾** 上：
*   **任务执行期间的用户干预机制**：Issue [#2133](https://github.com/HKUDS/nanobot/Issue/2133)（19条评论）引发了关于“Agent 长时间执行任务期间如何实时接收用户指令”的深入讨论。目前的单次 Agent loop 阻塞了实时交互，社区正在探讨双层架构或消息队列的干预方案。
*   **Agent 循环中的方向纠正**：Issue [#2915](https://github.com/HKUDS/nanobot/Issue/2915) 反映了当 Agent 走错方向时，用户难以在循环中纠正其行为的痛点。
*   **双层架构愿景**：Issue [#1181](https://github.com/HKUDS/nanobot/Issue/1181)（👍 9 个）呼吁引入 Steering Loop + AgentMessage 架构，以提升 Agent 在异步消息场景下的动态任务管理与自主性，这代表了社区对框架下一代架构的期待。

### 5. Bug 与稳定性
今日报告并处理了大量 Bug，主要集中在最新发布的模型适配和多渠道媒体支持上（均已有对应修复）：
*   **严重 (High)**：DeepSeek API 适配问题集中爆发。Issue [#3474](https://github.com/HKUDS/nanobot/Issue/3474) 报告了 DeepSeek-v4-pro/v4-flash 返回空白回复；Issue [#3469](https://github.com/HKUDS/nanobot/Issue/3469) 报告了多轮思考时由于 `reasoning_content` 未回传导致的 API 报错。目前团队已通过 [#3458](https://github.com/HKUDS/nanobot/pull/3458) 等 PR 进行了修复。
*   **中等**：Issue [#3488](https://github.com/HKUDS/nanobot/Issue/3488) 报告了 Telegram 发送附件时 MIME 类型被错误标记为 `application.octet-stream`。已被 PR [#3489](https://github.com/HKUDS/nanobot/pull/3489) 修复。
*   **低**：Issue [#3473](https://github.com/HKUDS/nanobot/Issue/3473) 报告了在 `0.0.0.0` 绑定远程访问 WebUI 时的 WebSocket 失败问题。
*   **边界情况**：Issue [#3468](https://github.com/HKUDS/nanobot/Issue/3468) 报告了 MCP capability names 在转发给模型 API 时未进行清洗的兼容性 Bug。

### 6. 功能请求与路线图信号
基于新开和活跃的 Issue/PR，项目在下一阶段可能会重点关注以下特性：
*   **跨提供商异常自动切换**：Issue [#3376](https://github.com/HKUDS/nanobot/Issue/3376) 提出了多 Provider 级别的 Failover 机制，以解决单点故障导致任务中断的问题，这是提升企业级可用性的关键信号。
*   **会话级专注工具**：Issue [#3292](https://github.com/HKUDS/nanobot/Issue/3292) 提出了跨压缩和中断的持久化任务感知能力，保持 Agent 对主目标的注意力。
*   **生态集成扩展**：PR [#3490](https://github.com/HKUDS/nanobot/pull/3490) 提交了对 Hugging Face Inference Providers 的原生支持；PR [#3486](https://github.com/HKUDS/nanobot/pull/3486) 引入了 SimpleX 加密通讯渠道。
*   **长任务执行工具**：PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) 引入了 `LongTaskTool`，这是一个 meta-ReAct 循环，能将长任务拆解为顺序子代理步骤，极大增强复杂任务执行韧性。

### 7. 用户反馈摘要
从 Issue 提问和反馈来看，用户的真实痛点集中在以下几点：
1.  **本地模型与复杂部署环境的兼容性**：大量用户在结合 vLLM、Ollama、LM Studio 等本地推理引擎使用 NanoBot，遇到了请求超时和上下文截断等问题（PR [#3491](https://github.com/HKUDS/nanobot/pull/3491) 和 [#3482](https://github.com/HKUDS/nanobot/pull/3482) 正在解决这些配置透传问题）。
2.  **多渠道多媒体交互体验不佳**：如企业微信的媒体文件上传失败（Issue [#3435](https://github.com/HKUDS/nanobot/Issue/3435)）、Slack 跨频道发消息失败（Issue [#2558](https://github.com/HKUDS/nanobot/Issue/2558)）等，说明作为“个人 AI 助手”，其在多端通讯的容错处理仍需打磨。
3.  **上下文记忆与自动化**：用户对当前的 `HEARTBEAT.md` 和压缩机制表示出一定的不满（Issue [#3484](https://github.com/HKUDS/nanobot/Issue/3484)），希望在自动化流程中更好地维持会话上下文。

### 8. 待处理积压
虽然团队响应极快，但仍有一些高价值或影响体验的 PR/Issue 处于待合并或待处理状态，需要核心维护者关注：
*   **PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) (LongTaskTool)**：作为解决复杂任务循环断点的重要架构级 PR，目前仍在 Open 状态，建议优先进行代码审查并纳入下一版本。
*   **Issue [#3376](https://github.com/HKUDS/nanobot/Issue/3376) (Provider Failover)**：社区呼声较高，目前无对应修复 PR，建议作为 Roadmap 事项跟进。
*   **PR [#3373](https://github.com/HKUDS/nanobot/pull/3373) (Gateway Lifecycle Hooks)**：已挂起数天，需要团队确认实现细节。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-28)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 统计周期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 项目今日保持**高度活跃**状态，社区共产生 **50 条 Issue 更新**（44 新开/活跃，6 关闭）与 **50 条 PR 更新**（44 待合并，6 合并/关闭）。项目当前无新版本发布。社区焦点主要集中在**上下文压缩机制的健壮性**、**Gateway 平台适配（Telegram/Discord/飞书/企业微信）** 以及 **MCP 工具调用的兼容性**上。大量来自不同背景的贡献者提交了 Bug 报告和功能 PR，显示出项目在国内外 AI 智能体开发者群体中拥有极高的使用渗透率和参与度。

---

## 2. 版本发布

本统计周期内**无新版本发布**。当前最新版本仍为 `v0.11.0` (2026.4.23)。

---

## 3. 项目进展

今日共有 6 个 PR 被合并或关闭，项目在多方面取得实质性推进：

| PR | 状态 | 核心贡献 |
|----|------|----------|
| [#14842](https://github.com/NousResearch/hermes-agent/pull/14842) | ✅ CLOSED | **修复 CJK 搜索问题**：FTS5 `unicode61` 分词器静默丢弃中文字符，补充 LIKE 回退机制，改善中文部分匹配结果 |
| [#16716](https://github.com/NousResearch/hermes-agent/pull/16716) | ✅ CLOSED | **修复 CLI 认证移除逻辑**：解决 `auth remove` 命令的异常行为 |

此外，以下重要 PR 已提交并进入 Review 阶段，预示项目即将在多个方向取得突破：

- **[#16721](https://github.com/NousResearch/hermes-agent/pull/16721)** — 修复 Gateway 将任意工具输出中的 `MEDIA:` 标签误识别为附件的架构缺陷
- **[#15166](https://github.com/NousResearch/hermes-agent/pull/15166)** — 修复 session 级别 `/model` provider 被环境变量覆盖的优先级 Bug
- **[#9028](https://github.com/NousResearch/hermes-agent/pull/9028)** — P1 安全加固：修复注入扫描器同义词绕过、Unicode 同形字绕过及环境变量过滤漏洞
- **[#9022](https://github.com/NousResearch/hermes-agent/pull/9022)** — 将 cron 存储从脆弱的 JSON 文件迁移至 SQLite WAL 后端

**评估**：项目整体稳步向前，CJK 支持和安全性是当前合并优先级最高的方向。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（评论数 Top 5）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|------|-------|------|-----|----------|
| 1 | [#9075](https://github.com/NousResearch/hermes-agent/issues/9075) MCP outputSchema 验证过严 | 3 | 0 | MCP 工具调用在 Hermes 接收到结果之前就因严格的 schema 验证失败 |
| 2 | [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) vision_analyze 完全无法读取图片 | 3 | 2 | 视觉分析工具对 URL、本地文件、浏览器截图全部返回 "no image" |
| 3 | [#15500](https://github.com/NousResearch/hermes-agent/issues/15500) session_search 中文搜索失效 | 3 | 0 | 会话文件正确保存但搜索功能无法找到匹配内容（涉及中文场景） |
| 4 | [#16703](https://github.com/NousResearch/hermes-agent/issues/16703) Docker-out-of-Docker 执行失败 | 2 | 0 | DooD 模式下 `execute_code` 工具报 Docker 版本检查失败 |
| 5 | [#5719](https://github.com/NousResearch/hermes-agent/issues/5719) Telegram 视觉分析泄露 Honcho Context | 2 | 0 | 辅助视觉 LLM 返回的描述中包含内部 Honcho Context 块，泄露给用户 |

### 🏆 获赞最多
- **[#9127](https://github.com/NousResearch/hermes-agent/issues/9127)** (👍 4) — 请求 `vision_analyze` 工具支持 MiniMax 提供商，反映国内用户对国产模型接入的强烈需求
- **[#9077](https://github.com/NousResearch/hermes-agent/issues/9077)** (👍 2) — 视觉工具完全失效，影响所有用户

**分析**：社区诉求集中在**工具可靠性（视觉、MCP）** 和**多平台适配**两个方向。MiniMax 支持的高赞数表明中国开发者群体正在快速增长。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 P1 — 严重（影响核心功能）

| Issue | 描述 | Fix PR | 状态 |
|-------|------|--------|------|
| [#9096](https://github.com/NousResearch/hermes-agent/issues/9096) | **上下文压缩导致历史对话混入当前对话**：压缩触发后，历史内容被反复插入活跃上下文，造成重复和混乱 | 无 | ⚠️ 未修复 |
| [#16668](https://github.com/NousResearch/hermes-agent/issues/16668) | **Telegram 流式响应遭遇限频后出现重复消息**：用户看到一条不完整的草稿后跟着一条完整回复 | 无 | ⚠️ 未修复 |

### 🟡 P2 — 中等（影响特定场景）

| Issue | 描述 | Fix PR | 状态 |
|-------|------|--------|------|
| [#9075](https://github.com/NousResearch/hermes-agent/issues/9075) | MCP outputSchema 验证过严导致工具调用失败 | 无 | ⚠️ 未修复 |
| [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) | vision_analyze 无法解析任何来源的图片 | 无 | ⚠️ 未修复 |
| [#16703](https://github.com/NousResearch/hermes-agent/issues/16703) | Docker DooD 模式下 execute_code 失败 | 无 | ⚠️ 未修复 |
| [#16719](https://github.com/NousResearch/hermes-agent/issues/16719) | 辅助任务忽略自定义 base_url，使用默认端点 | 无 | ⚠️ 未修复 |
| [#16670](https://github.com/NousResearch/hermes-agent/issues/16670) | 压缩失败后的 fallback 标记丢失有用上下文 | 无 | ⚠️ 未修复 |
| [#16650](https://github.com/NousResearch/hermes-agent/issues/16650) | 压缩摘要生成失败时静默丢弃历史，且不通知用户 | 无 | ⚠️ 未修复 |
| [#16723](https://github.com/NousResearch/hermes-agent/issues/16723) | `/config` 显示的 timeout 值与配置文件不一致 | 无 | ⚠️ 未修复 |
| [#16720](https://github.com/NousResearch/hermes-agent/issues/16720) | Gateway 误将工具输出中的 MEDIA: 示例当真实附件 | [#16721](https://github.com/NousResearch/hermes-agent/pull/16721) | 🔧 已有 PR |
| [#9090](https://github.com/NousResearch/hermes-agent/issues/9090) | 飞书 WebSocket 僵尸会话在 Gateway 重启后累积 | 无 | ⚠️ 未修复 |

### 🟢 P3 — 低优先级

- [#16685](https://github.com/NousResearch/hermes-agent/issues/16685) — MiniMax 提供商主动破坏 agentic 行为（反复请求确认、重新验证）
- [#9021](https://github.com/NousResearch/hermes-agent/issues/9021) — systemd 服务使用系统 Python 而非 venv Python

**稳定性评估**：上下文压缩模块是当前的**系统性弱点**，多个 P1/P2 Bug 均指向该模块的错误处理不足。建议维护者优先关注。

---

## 6. 功能请求与路线图信号

### 📋 高优先级功能请求

| Feature Request | 👍 | 优先级 | 对应 PR | 纳入概率 |
|----------------|-----|--------|---------|----------|
| [#9127](https://github.com/NousResearch/hermes-agent/issues/9127) MiniMax 视觉支持 | 4 | P3 | 无 | 🟡 中等（社区需求强但无 PR） |
| [#12568](https://github.com/NousResearch/hermes-agent/issues/12568) Memory 工具需 read 操作 + 压力警告 | 1 | P3 | 无 | 🟡 中等 |
| [#9116](https://github.com/NousResearch/hermes-agent/issues/9116) 长任务自动心跳状态更新 | 0 | P3 | 无 | 🟢 低 |
| [#9108](https://github.com/NousResearch/hermes-agent/issues/9108) 可配置上下文压缩 summary_ratio | 0 | P3 | 无 | 🟢 低 |

### 🚀 已有 PR 支撑的功能（下一版本可能纳入）

| PR | 功能 | 成熟度 |
|----|------|--------|
| [#16722](https://github.com/NousResearch/hermes-agent/pull/16722) | Discord 线程 mention 绕过可配置化 | 🟢 完整实现，待 Review |
| [#9020](https://github.com/NousResearch/hermes-agent/pull/9020) | CLI/Gateway 支持编号式 `/resume` 选择 | 🟢 含测试，待 Review |
| [#16717](https://github.com/NousResearch/hermes-agent/pull/16717) | WebUI TTS 音频浏览器播放 | 🟢 完整实现 |
| [#16419](https://github.com/NousResearch/hermes-agent/pull/16419) | Dashboard 配置文件管理页面 | 🟢 含前后端及测试 |
| [#16661](https://github.com/NousResearch/hermes-agent/issues/16661) | Gateway 重启后自动注入上下文插件 | 🟡 仅有 Issue，尚无 PR |
| [#16696](https://github.com/NousResearch/hermes-agent/issues/16696) | web_search 暴露 limit 参数和查询操作符 | 🟡 仅有 Issue |
| [#16702](https://github.com/NousResearch/hermes-agent/issues/16702) | Gateway systemd 服务自动启动 Dashboard | 🟡 仅有 Issue |

**路线图信号**：项目正朝着**多平台增强（企业微信/飞书/Discord）**、**开发者体验（Dashboard/CLI 改进）**、**多模型适配（MiniMax/DeepSeek）** 三个方向演进。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

### 😣 核心痛点
1. **上下文压缩不可靠**：多位用户反馈压缩失败后历史被静默丢弃，且回退标记丢失有用信息（[#16670](https://github.com/NousResearch/hermes-agent/issues/16670)、[#16650](https://github.com/NousResearch/hermes-agent/issues/16650)、[#9096](https://github.com/NousResearch/hermes-agent/issues/9096)）— 这是当前**最大痛点**
2. **视觉工具完全瘫痪**：[#9077](https://github.com/NousResearch/hermes-agent/issues/9077) 报告所有图片来源均返回 "no image"，影响核心多模态能力
3. **Docker 部署体验差**：DooD 模式下工具执行失败（[#16703](https://github.com/NousResearch/hermes-agent/issues/16703)），配置显示不一致（[#16723](https://github.com/NousResearch/hermes-agent/issues/16723)）
4. **国内模型适配不足**：MiniMax 用户遇到 API 联系困难（[#16680](https://github.com/NousResearch/hermes-agent/issues/16680)）、模型行为不符合 agentic 预期（[#16685](https://github.com/NousResearch/hermes-agent/issues/16685)）

### 👍 积极信号
- 社区贡献者主动提交带测试的 PR（如 [#9020](https://github.com/NousResearch/hermes-agent/pull/9020)、[#16419](https://github.com/NousResearch/hermes-agent/pull/16419)），代码质量较高
- 用户积极反馈企业微信（[#16675](https://github.com/NousResearch/hermes-agent/issues/16675)）、飞书等国内平台需求，反映实际生产使用场景
- CJK 支持修复（[#14842](https://github.com/NousResearch/hermes-agent/pull/14842)）已被合并，中文搜索体验即将改善

### 🌏 使用场景
- 通过 Telegram 进行多模态对话（视觉分析 + 文字）
- 在 Docker 容器中运行代码执行沙箱
- 企业微信/飞书作为内部 AI 助手网关
- 使用 MiniMax 等国产模型降低推理成本

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获得维护者响应，需要关注：

### ⚠️ 高优先级积压

| Issue/PR | 创建日期 | 等待天数 | 说明 |
|----------|----------|----------|------|
| [#9096](https://github.com/NousResearch/hermes-agent/issues/9096) 上下文压缩混入历史对话 | 04-13 | **15 天** | P1 Bug，影响所有长对话用户，无任何 Fix PR |
| [#9077](https://github.com/NousResearch/hermes-agent/issues/9077) 视觉工具完全失效 | 04-13 | **15 天** | P2 Bug，多模态核心功能瘫痪 |
| [#9075](https://github.com/NousResearch/hermes-agent/issues/9075) MCP schema 验证过严 | 04-13 | **15 天** | P2 Bug，影响 MCP 生态兼容性 |
| [#9090](https://github.com/NousResearch/hermes-agent/issues/9090) 飞书僵尸会话累积 | 04-13 | **15 天** | P2 Bug，长期运行后 DB 膨胀 |

### 📦 待 Review 的有价值 PR

| PR | 提交日期 | 等待天数 | 说明 |
|----|----------|----------|------|
| [#15166](https://github.com/NousResearch/hermes-agent/pull/15166) Session provider 优先级修复 | 04-24 | **4 天** | 修复环境变量覆盖 session 配置 |
| [#13654](https://github.com/NousResearch/hermes-agent/pull/13654) Fallback 切换时保留上下文 | 04-21 | **7 天** | 修复 provider 切换时的上下文丢失 |
| [#9028](https://github.com/NousResearch/hermes-agent/pull/9028) 安全加固（P1） | 04-13 | **15 天** | 修复注入扫描器绕过漏洞，**安全相关应优先处理** |
| [#9020](https://github.com/NousResearch/hermes-agent/pull/9020) 编号式 /resume 选择 | 04-13 | **15 天** | 完整实现 + 测试，可提升 UX |

### 💡 建议给维护者
1. **优先处理 P1 安全 PR [#9028](https://github.com/NousResearch/hermes-agent/pull/9028)** — 安全漏洞不应积压 15 天
2. **系统性审视上下文压缩模块** — 至少 4 个独立 Bug 指向同一模块，建议进行架构级重构而非逐个修补
3. **加速 CJK 相关 PR 合并** — 中国用户群体正在快速增长（企业微信、MiniMax、中文搜索等 Issue 密集出现）

---

*本报告由开源项目分析系统自动生成。数据截至 2026-04-28 00:00 UTC。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-04-28 的开源动态日报。

# 📊 PicoClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
PicoClaw 项目今日保持**极高的活跃度与健康的迭代节奏**。过去 24 小时内，项目共处理了 109 个 Issues（关闭 73 个，新开/活跃 36 个）和 120 个 PRs（合并/关闭 57 个，待处理 63 个），显示出维护团队高效的问题闭环能力。项目于昨日晚间发布了最新的 `nightly` 测试版本，持续为下一阶段的正式版蓄力。社区对 TTS/ASR 语音架构支持和 Web 端流式输出等核心特性的呼声依然高涨。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.7-nightly.20260427.39dec354](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新说明**：自动化构建的每日测试版本。
  - **注意**：此为自动构建版本，可能存在不稳定性，建议仅用于测试环境，生产环境请谨慎升级。
  - **变更范围**：涵盖从 `v0.2.7` 到 `main` 分支的所有最新提交。

## 3. 项目进展
今日项目共合并/关闭了 57 个 PR，大幅提升了系统的稳定性与可用性，重点推进了以下几个领域：
- **核心架构优化**：[#2233](https://github.com/sipeed/picoclaw/issues/2233) 被合并，标准化了入站上下文并解耦了路由与会话分配，为后续多渠道支持打下了坚实基础。
- **可用性提升**：[#2009](https://github.com/sipeed/picoclaw/issues/2009) 合并，PicoClaw 现已支持 `/stop` 命令，用户可随时取消耗时较长的 Agent 任务。
- **容器化改进**：[#1228](https://github.com/sipeed/picoclaw/issues/1228) 合并，Docker 镜像中预装了 `python`, `curl`, `jq`, `git` 等常用开发工具，极大改善了容器内工具调用的体验。
- **缺陷修复**：修复了 Cron 任务静默丢弃消息的问题 ([#1058](https://github.com/sipeed/picoclaw/issues/1058)) 以及 Windows 环境下 QQ 渠道无法使用的问题 ([#2080](https://github.com/sipeed/picoclaw/issues/2080))。

## 4. 社区热点
今日社区讨论最热烈的功能诉求集中在**多模态交互**与**用户体验优化**上：
- 🔥 **[Feature] Adding TTS and ASR Support to PicoClaw** ([#1648](https://github.com/sipeed/picoclaw/issues/1648))
  - **热度**：23 条评论
  - **诉求**：社区强烈希望为 PicoClaw 引入语音交互（TTS/ASR）架构。目前已有相关 PR 提交，但尚未集成到网关层，用户正积极讨论其底层设计。
- 🔥 **[Feature] Seahorse - Biologically-inspired Memory System for AI Agents** ([#1919](https://github.com/sipeed/picoclaw/issues/1919))
  - **热度**：10 条评论（已关闭/进入开发）
  - **诉求**：设计一套类似人类海马体的短期与长期记忆压缩系统，以解决长上下文处理难题。
- 🔥 **[Refactor] Consider moving all OpenAI based endpoints to use OpenAI Responses API** ([#2171](https://github.com/sipeed/picoclaw/issues/2171))
  - **热度**：8 条评论
  - **诉求**：建议将底层与 OpenAI 的交互逻辑从 Chat Completions API 迁移至更新的 Responses API，以获取更好的多模态和工具调用支持。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在身份验证、API 兼容性和移动端配置上：
- **P0 (严重)**: `openai_compat` provider 在 v0.2.6 中不发 Authorization header ([#2578](https://github.com/sipeed/picoclaw/issues/2578))
  - 导致所有基于 HTTP 的模型凭证失效。目前已有 PR [#2372](https://github.com/sipeed/picoclaw/issues/2372) 正在修复此兼容性问题。
- **P1 (较高)**: MCP 工具调用在 Gemini 上导致 HTTP 400 崩溃 ([#2681](https://github.com/sipeed/picoclaw/issues/2681))
  - 修复 PR 已提交，引入了针对 Gemini 的 schema 清理器。
- **P1 (较高)**: Android 应用添加模型后提示未配置 ([#2368](https://github.com/sipeed/picoclaw/issues/2368))
  - 严重影响了移动端用户的初次配置体验。
- **P2 (中等)**: Docker 部署修改 Web 监听端口后页面输入框被禁用 ([#2236](https://github.com/sipeed/picoclaw/issues/2236))

## 6. 功能请求与路线图信号
结合用户 Issue 与活跃的 PR，以下几个重要功能极有可能在近期合入主线：
- **Web Chat 流式输出**：用户强烈要求 Web 端支持流式体验 ([#1950](https://github.com/sipeed/picoclaw/issues/1950))，目前核心重构 PR [#2587](https://github.com/sipeed/picoclaw/issues/2587) 已提交，正在优化前端渲染和滚动交互。
- **动态 Skill 管理**：PR [#2332](https://github.com/sipeed/picoclaw/issues/2332) 提出了 `SkillManager`，允许 Agent 在检测到重复模式时动态创建技能，这将极大增强 Agent 的自我进化能力。
- **OpenRouter 免费模型自动轮换**：PR [#2603](https://github.com/sipeed/picoclaw/issues/2603) 引入了 FreeRide 工具，旨在自动化管理和轮换 OpenRouter 上的免费模型，适合轻量级用户。
- **自我更新机制**：系统自升级支持 ([#618](https://github.com/sipeed/picoclaw/issues/618)) 依然是高优诉求，社区期待 deb/windows/opkg 的官方渠道发布支持。

## 7. 用户反馈摘要
- **真实痛点**：网络受限环境下的部署困难。用户反馈在国内或企业内网难以连接 WhatsApp 等服务，好消息是维护者已提交了针对 WhatsApp 的代理支持 PR ([#2284](https://github.com/sipeed/picoclaw/issues/2284))。
- **使用场景**：许多用户正在尝试将 PicoClaw 与非标准的 OpenAI 兼容 API（如 Groq、LongCat、LM Studio）对接，但目前 PicoClaw 对非标格式的容错较差（如 Groq 拒绝 `<function=name{...}>` 格式，[#748](https://github.com/sipeed/picoclaw/issues/748)）。
- **满意度反馈**：社区对 Docker 容器预置工具链、增加 `/stop` 命令等体验优化表示赞赏，认为项目越来越贴近真实的生产使用环境。

## 8. 待处理积压
以下高价值或高影响的 Issue/PR 长期处于 Open 或 Stale 状态，需要核心维护者重点关注：
- **网关 REST API 不可用 ([#1708](https://github.com/sipeed/picoclaw/issues/1708))**：v0.2.3 版本中 Gateway 仅 health 端点可用，导致外部集成受阻，需尽快确认在最新 nightly 版本中是否已修复。
- **安全认证集成 ([#1067](https://github.com/sipeed/picoclaw/issues/1067))**：目前 PicoClaw 缺乏系统级的鉴权机制，这在暴露于公网时存在极大的安全隐患，需尽早排期。
- **上下文压缩算法重构 ([#2333](https://github.com/sipeed/picoclaw/issues/2333))**：6 阶段结构化压缩算法目前缺乏足够的维护者 Review，可能成为后续性能提升的瓶颈。
- **LM Studio 极简连接 ([#28](https://github.com/sipeed/picoclaw/issues/28))**：作为社区长期呼声较高的本地模型连接方案，希望官方能提供比 `openai_compat` 更友好的 UI 配置向导。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 4 月 28 日 NanoClaw 项目动态日报：

# 📊 NanoClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时，NanoClaw 项目保持**高度活跃**的迭代状态，社区共产生了 16 条 Issue 更新（11 新开 / 5 关闭）和 25 条 PR 更新（12 待合并 / 13 已合并或关闭）。项目在多通道适配（Telegram、Signal、Discord）和核心调度逻辑上迎来了密集的 Bug 修复与功能增强。值得注意的是，安全性与稳定性成为今日社区贡献的焦点，多项关于底层沙箱运行环境和路由死循环的修复已提交。整体来看，项目正处于 v2 架构重写后的快速打磨与生态完善阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，显著提升了系统的跨平台通信能力与底层稳定性：
*   **Telegram 生态完善**：合并了核心功能 PR [#2049](https://github.com/qwibitai/nanoclaw/pull/2049)（新增 Telegram 频道适配器），随后修复了提及唤醒失效的问题 ([#2050](https://github.com/qwibitai/nanoclaw/pull/2050))。
*   **系统容错与内存优化**：合并了 `fix: handle empty container stdout` ([#1912](https://github.com/qwibitai/nanoclaw/pull/1912))，改善了容器无响应时的错误提示；引入了会话大小轮换机制以防内存爆满 ([#987](https://github.com/qwibitai/nanoclaw/pull/987))。
*   **无障碍与配置修复**：合并了 SQLite UTC 时间解析修复 ([#1997](https://github.com/qwibitai/nanoclaw/pull/1997))，以及助手重命名时的引用更新 ([#1913](https://github.com/qwibitai/nanoclaw/pull/1913))。
*   **长期特性推进**：备受期待的通用语音转录技能已关闭并处于待合并状态 ([#1326](https://github.com/qwibitai/nanoclaw/pull/1326))，标志着即将支持 Whisper 等后端。

## 4. 社区热点
*   **A2A 路由自循环 Bug ([#2048](https://github.com/qwibitai/nanoclaw/issues/2048))**：开发者报告 `install_packages` 审批流程中触发了智能体间（a2a）无限自路由循环，导致所有 Telegram 消息投递被阻塞。该问题已获得社区关注（👍 1），目前已有对应的修复 PR 提交 ([#2063](https://github.com/qwibitai/nanoclaw/pull/2063))。
*   ** runaway 容器资源限制请求 ([#2029](https://github.com/qwibitai/nanoclaw/issues/2029))**：由于当前容器运行缺乏资源上限，单个失控的 Agent 可能导致宿主机 OOM。该问题引发了关于引入 Docker 资源配置参数（`--memory`, `--cpus`）的讨论。

## 5. Bug 与稳定性
今日报告了多个关键性 Bug，多集中在通道适配和底层运行环境：
1.  **严重 (Blocker)**：`install_packages` 触发无限循环，阻断所有 Telegram 投递 ([#2048](https://github.com/qwibitai/nanoclaw/issues/2048)) —— **已有修复 PR** [#2063](https://github.com/qwibitai/nanoclaw/pull/2063)。
2.  **严重 (Migration)**：迁移后 Agent 无法查看附件（路径未挂载）([#2047](https://github.com/qwibitai/nanoclaw/issues/2047))；OneCLI 标识符下划线/连字符不兼容导致 400 错误 ([#2046](https://github.com/qwibitai/nanoclaw/issues/2046))。
3.  **高 (Crash)**：`add_mcp_server` 错误地将 `args` 序列化为字符串而非数组，导致 MCP 校验失败，Agent 唤醒崩溃 ([#2051](https://github.com/qwibitai/nanoclaw/issues/2051))。
4.  **中 (Logic/UI)**：已完成的一次性调度任务未能被垃圾回收，永久驻留列表 ([#2061](https://github.com/qwibitai/nanoclaw/issues/2061))；纯文本消息被错误路由到默认目的地而非源群组 ([#2062](https://github.com/qwibitai/nanoclaw/issues/2062))。
5.  **低 (Formatting)**：Telegram HTML 过度转义撇号导致显示为 `&apos;` ([#2043](https://github.com/qwibitai/nanoclaw/issues/2043))；Discord URL 预览行为恶化 ([#2044](https://github.com/qwibitai/nanoclaw/issues/2044))。

## 6. 功能请求与路线图信号
从最新的 Issues 中可以清晰看到社区对扩展部署边界和兼容性的需求：
*   **容器安全加固**：[#2029](https://github.com/qwibitai/nanoclaw/issues/2029) 要求增加 Docker 资源限制参数，以防范恶意或失控 Agent。
*   **模型生态开放**：[#1930](https://github.com/qwibitai/nanoclaw/issues/1930) 强烈请求支持第三方模型与 API 通道，打破当前模型绑定限制。
*   **全平台接入补全**：[#2058](https://github.com/qwibitai/nanoclaw/issues/2058) 指出 Setup 引导中缺失了 Google Chat 选项。
*   *信号判断*：结合目前 Docker Sandbox ([#2060](https://github.com/qwibitai/nanoclaw/pull/2060)) 和 Signal 附件支持 ([#2040](https://github.com/qwibitai/nanoclaw/pull/2040)) 的活跃进展，预测下一阶段将重点推进**多模态交互**与**多模型兼容**。

## 7. 用户反馈摘要
*   **痛点 1：v2 迁移成本较高**：多位用户反馈在进行架构升级到 v2 时遇到了各种兼容性麻烦，尤其是 DNS 配置 ([#2039](https://github.com/qwibitai/nanoclaw/issues/2039)) 和群组 ID 格式差异 ([#2046](https://github.com/qwibitai/nanoclaw/issues/2046))。
*   **痛点 2：LXC/代理环境部署困难**：在 LXC 容器或存在 MITM 代理的沙箱环境中进行初始配置（如 sudo 挂起、证书信任）阻力较大（见 PR 矩阵 [#2052-2057](https://github.com/qwibitai/nanoclaw/pull/2052)）。
*   **正面反馈**：AI 辅助诊断代码库的参与度显著提升（如 [#2048](https://github.com/qwibitai/nanoclaw/issues/2048) 作者利用 Claude 定位了死循环代码），证明项目架构的 AI 可读性较强，利于社区共创。

## 8. 待处理积压
*   **基础设施稳定性链**：开发者 `dooha333` 提交了一整套针对 Setup 流程的修复 PR（从 [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) 到 [#2057](https://github.com/qwibitai/nanoclaw/pull/2057)），目前均处于 Open 状态。由于存在依赖关系，建议维护者优先进行代码走查及合并，以改善新用户的首次部署体验。
*   **时间戳规范化**：PR [#1845](https://github.com/qwibitai/nanoclaw/pull/1845) 提出了将数据库时间戳标准化为 ISO 8601，已开启数日，该全局性改动对数据分析等多模块至关重要，亟待团队 Review。
*   **核心调度逻辑优化**：PR [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) 关于推迟任务消息处理以避免预执行脚本缺失的修复，仍需维护者介入验证。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
IronClaw 今日维持了高度活跃的开发态势，过去 24 小时内共有 31 个 Pull Request 发生状态更新，以及 10 个 Issue 取得进展。项目当前的重心集中在 **“Reborn”架构重构的落地执行**与 **V2 引擎的稳定性修复**上。社区生态也展现出强劲的活力，不仅有关于 CI 自动化金丝雀部署的系统性建设，还有多位外部贡献者提交了涉及底层部署架构和 Web 端 UI 兼容性的大型 PR。整体来看，项目处于“高密度迭代+快速修错”的健康阶段。

## 2. 版本发布
过去 24 小时内，项目**无新版本**发布。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，这些核心代码的合入显著推进了项目在架构重构、时序控制和 API 兼容性方面的进展：

*   **Reborn 架构基础设施落地**：
    *   合并了 `feat(reborn): add host foundation crates` ([PR #2988](https://github.com/nearai/ironclaw/pull/2988))，新增了 `ironclaw_host_api`、`ironclaw_resources` 等基础 crate，标志着 Reborn 架构的物理隔离和底层依赖拆分正式开始。
    *   关闭了 `docs(reborn): contract freeze review packet` ([PR #2983](https://github.com/nearai/ironclaw/pull/2983))，为大型重构提供了契约冻结的审查基准文档。
*   **V2 引擎关键逻辑修复**：
    *   合并了 `fix(engine): make mission threads_today reset timezone-aware` ([PR #2989](https://github.com/nearai/ironclaw/pull/2989))，修复了非 UTC 时区下每日任务预算无法重置的致命逻辑漏洞。
    *   关闭了 `fix(reborn): close foundation fail-closed gaps` ([PR #2997](https://github.com/nearai/ironclaw/pull/2997))，阻止了极深嵌套 JSON 可能导致的堆栈溢出和负数资源消耗问题。
    *   合并了 `[codex] Fix v2 tool_info action inventory lookup` ([PR #2994](https://github.com/nearai/ironclaw/pull/2994))，优化了引擎内部工具的发现与注册机制。

## 4. 社区热点
今日社区讨论最热烈的问题聚焦于架构演进路线与实际使用障碍：
*   **Reborn 架构集成计划** ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987))：由核心开发者发起，获得了高达 **7 条评论** 的深入探讨。该 Issue 旨在将庞大的 Reborn 架构堆栈拆分为可独立审查的 PR 组（PR0-PR3）。这反映出维护团队正在积极寻求代码审查的平衡点，避免巨型 PR 阻塞开发进度。
*   **阿里云百炼支持** ([PR #1446](https://github.com/nearai/ironclaw/pull/1446))：这是一个由社区贡献的超大特性 PR，旨在增加对阿里云 DashScope API 的原生支持。由于涉及广泛的 LLM 通道集成，该 PR 引入了大量代码变更，目前仍在等待核心团队的深度审查。

## 5. Bug 与稳定性
今日暴露了多个与 V2 引擎和自动化测试相关的 Bug，部分已在第一时间提交了修复 PR：

*   **P0 - 严重逻辑阻塞 (已有 Fix)**：
    *   **Mission 每日预算永久耗尽** ([Issue #1945](https://github.com/nearai/ironclaw/issues/1945))：计数器 `threads_today` 只增不减。**当前已通过 [PR #2989](https://github.com/nearai/ironclaw/pull/2989) 修复并合入。**
*   **P1 - 数据状态异常 (已有 Fix)**：
    *   **跨对话响应污染** ([Issue #2833](https://github.com/nearai/ironclaw/issues/2833))：多步推理任务执行时，切换对话会导致历史回答串台。
    *   **升级后 Routine 错误归类** ([Issue #2982](https://github.com/nearai/ironclaw/issues/2982))：0.24.0 升级至 0.26.0 后，现有的 Routine 被错误识别为 Mission。**当前已由开发者提交 [PR #2992](https://github.com/nearai/ironclaw/pull/2992) 进行修复。**
*   **P2 - CI 流水线不稳**：
    *   **Google OAuth CI 验证失败** ([Issue #2887](https://github.com/nearai/ironclaw/issues/2887))：由于 GitHub Actions IP 被 Google 反爬虫机制拦截，导致相关的金丝雀测试无法通过。
    *   多个自动化监控 Issue 报告了流水线失败，包括 `public-smoke` ([Issue #2976](https://github.com/nearai/ironclaw/issues/2976))、`openai-compatible` ([Issue #2977](https://github.com/nearai/ironclaw/issues/2977)) 和 `private-oauth` ([Issue #2975](https://github.com/nearai/ironclaw/issues/2975))。

## 6. 功能请求与路线图信号
*   **架构底座下沉与模块化**：基于今日合并的 [#2988](https://github.com/nearai/ironclaw/pull/2988) 及正在审查的文件系统基座 ([PR #2996](https://github.com/nearai/ironclaw/pull/2996))，下一个版本将具备更强的底层沙箱隔离与文件管理能力。
*   **下游部署与二次开发支持**：外部贡献者提交了下游部署基础设施 ([PR #2925](https://github.com/nearai/ironclaw/pull/2925)) 和外部工具注册器 ([PR #2871](https://github.com/nearai/ironclaw/pull/2871))。这些信号表明，项目正被应用于企业级生产环境，社区对“不修改主分支源码即可进行 Fork 定制”的需求非常强烈，这极有可能会被纳入后续版本的 Roadmap。

## 7. 用户反馈摘要
从 Issue 评论区及反馈来看，当前用户的真实痛点集中在**版本升级兼容性**与**模型接入配置**上：
1.  **升级体验割裂**：用户在升级引擎版本（尤其是 V1 到 V2 转换期）时，经常面临 UI 配置丢失或后台状态机错误归类（如 Issue #2982）。用户期望升级过程对历史会话和任务配置是无缝兼容的。
2.  **模型配置困惑**：用户在使用自定义模型（如 Codex 或其他本地大模型）时，难以确定有效的模型名称标识符，导致虽然授权成功但无法正常调用（如 Issue #1697）。文档在此处的引导相对薄弱。

## 8. 待处理积压
*   **前端 UI 系统级 Bug 无人认领**：关于跨会话数据污染的 Bug ([Issue #2833](https://github.com/nearai/ironclaw/issues/2833)) 自 4 月 22 日提出后至今未有修复进展。该问题严重影响多会话并发的用户体验，建议维护者优先排查前端的状态管理机制。
*   **核心 CI 检测机制受挫**：针对 OAuth 的自动化金丝雀测试失败 ([Issue #2887](https://github.com/nearai/ironclaw/issues/2887)) 悬而未决，代码库中存在静默吞掉报错的 `try/except: pass`，这会掩盖线上真实存在的鉴权链路故障，需尽快重构错误捕获逻辑。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-04-28)

> 分析师按：本期日报基于 LobsterAI (github.com/netease-youdao/LobsterAI) 过去 24 小时的 GitHub 公开活动数据生成，聚焦项目研发动态、安全建设与社区生态。

---

### 1. 今日速览
LobsterAI 今日维持了**极高的开发活跃度**与明显的“备战发版”特征。过去 24 小时内项目共处理了 38 个 PR（其中 24 个顺利合并/关闭），并有 7 个 Issue 更新，代码提交频率和审查效率表现亮眼。随着 `2026.4.25` 新版本的正式发布，核心开发者今天主要集中力量**大规模修复模型兼容性与系统稳定性 Bug**，并同步推进了多项关键的**系统安全与架构加固**工作。整体来看，项目正处于快速迭代、打磨用户体验和提升安全水位的高峰期，研发健康度极佳。

### 2. 版本发布
项目今日主推的最新版本为 **LobsterAI 2026.4.25**（发布于 2026-04-25）。
- **核心更新**：修复了协作模式下编辑工具的输入格式问题，并新增了用于记忆搜索的嵌入配置。
- **破坏性变更/迁移注意**：暂无明显的破坏性 API 变更，但考虑到今日大量并入的安全与配置修复 PR，建议密切关注下一版本的发布说明。

### 3. 项目进展
今日合并/关闭的 PR 超过 20 个，主要在以下几个维度取得了实质性推进：
- **模型兼容与会话隔离**：核心贡献者修复了新建会话时模型覆盖被重写的问题（[PR #1843](https://github.com/netease-youdao/LobsterAI/pull/1843)），以及 Agent 级无效模型静默回退机制（[PR #1842](https://github.com/netease-youdao/LobsterAI/pull/1842)），极大增强了多会话并行的稳定性。
- **第三方模型接入适配**：针对近期热门模型，合并了修复自定义供应商使用 DeepSeek V4 模型报错的关键 PR（[PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847)）。
- **安全与隐私加固**：多款重磅安全修复落地，包括提取日志脱敏工具并防止 API Key 明文暴露（[PR #1844](https://github.com/netease-youdao/LobsterAI/pull/1844)），以及修复配置更新时默认值覆盖密钥的问题（[PR #1840](https://github.com/netease-youdao/LobsterAI/pull/1840)）。
- **诊断与排障优化**：提升了 Windows 平台的启动超时限制并增加诊断日志（[PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846)），修复了 NSIS 安装程序的退出码检查逻辑（[PR #1841](https://github.com/netease-youdao/LobsterAI/pull/1841)）。

### 4. 社区热点
从 Issues 和待合并 PR 的互动来看，当前社区的关注点集中在**第三方大模型支持**与**UI 体验优化**：
- **DeepSeek V4 接入问题**（[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)）：多位用户反馈 DeepSeek V4 无法使用，提示 provider 拒绝请求。官方响应迅速，其修复逻辑已在今天的 [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847) 中合并，预计下版即可解决。
- **UI 界面美化需求**（[Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836)）：用户直言“相比起其他竞品过于丑了”，呼吁引入专业设计重新优化界面。这反映了用户对 AI 助手“颜值”的高要求。
- **私有部署模型 Skill 调用**（[Issue #955](https://github.com/netease-youdao/LobsterAI/issues/955)）：企业用户反馈私有化部署的 Qwen3 模型在调用 Skill 时失败，今日已正式关闭，相关底层适配可能已取得突破。

### 5. Bug 与稳定性
今日报告及处理的 Bug 呈现出**平台差异化**与**高度定制化**的特征，按影响程度排列如下：
- 🔴 **P0: 模型调用失败** - DeepSeek V4 Provider 载荷拒绝（[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813)）。**状态**：已由 [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847) 修复合并。
- 🔴 **P0: 应用启动死循环** - 尤其在 macOS/Linux 上存在 `SkillServices` 导致死循环的报告（[Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17)）。**状态**：尚未见明确的针对性修复 PR，需持续关注。
- 🟡 **P1: 配置覆盖与日志风暴** - OpenClaw 配置文件缺少 Meta 信息导致生成大量快照文件（[PR #1838](https://github.com/netease-youdao/LobsterAI/pull/1838)）。**状态**：已合并修复。
- 🟡 **P1: macOS 构建报错** - 打包 DMG 时提示 `dist-electron/main.js` 不存在（[Issue #100](https://github.com/netease-youdao/LobsterAI/issues/100)）。**状态**：等待官方排查构建管线。

### 6. 功能请求与路线图信号
从当前活跃的长期 PR 和 Issue 中，可以捕捉到项目未来的演进方向：
- **内置安全防御体系构建**：待合并的 [PR #1833](https://github.com/netease-youdao/LobsterAI/pull/1833)（增加 scheme 白名单防止恶意文件访问）和 [PR #1832](https://github.com/netease-youdao/LobsterAI/pull/1832)（限制 Store IPC 越权访问）显示，**提升本地隔离和防注入能力**是近期的重要路线图。
- **自动化与定时任务升级**：[PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) 提出新增自定义 Cron 调度类型，意味着 LobsterAI 正在向更高级的“个人自动化智能体”演进。
- **AI 诊断与自愈能力**：[PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527) 拟在邮件等配置连接失败时引入“AI 一键诊断”。这种将 AI 能力用于解决自身配置问题的闭环设计，极有可能成为下一个版本的亮点功能。

### 7. 用户反馈摘要
提炼自近期 Issue 评论，真实用户反馈呈现两极分化：
- **痛点 1：私有模型兼容性门槛高**。接入自定义模型或私有化模型时，容易出现“普通对话可用但 Skill 调用失败”的情况（[Issue #106](https://github.com/netease-youdao/LobsterAI/issues/106)，[Issue #955](https://github.com/netease-youdao/LobsterAI/issues/955)），用户对底层 OpenClaw 的适配容错率有更高期待。
- **痛点 2：UI 视觉体验有待提升**。多位用户表示功能虽然强大，但界面相比竞品显得简陋（[Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836)）。
- **满意点：全场景协同潜力**。用户认可其在钉钉、飞书、Discord 等多端的打通能力，期待更稳定的 Cowork 体验。

### 8. 待处理积压
以下重要议题出现停滞或长期挂起，建议维护团队优先关注：
- 🚨 **[Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17) & [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73) - 应用无法启动 / 404 Not Found 错误**：这两个 Issue 均被标记为 `[stale]` 且涉及应用最核心的启动链路，严重影响部分新用户的首用体验，建议提级跟进。
- 🚧 **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) - Electrion 大版本升级 (40.x -> 41.x)**：由 Dependabot 提出近一个月，目前仍为 Open 状态。由于涉及底层 Electron 架构变更，可能存在兼容性风险，需评估是否在下一迭代集中突破。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是 Moltis 项目 2026-04-28 的每日动态报告：

# Moltis 项目日报 - 2026-04-28

## 1. 今日速览
过去 24 小时，Moltis 项目展现了**极高的开发活跃度与问题解决效率**。团队在一天内一口气处理了 14 个 Pull Requests（其中 12 个已合并/关闭，2 个待合并），并关闭了 4 个 Issues（新开 1 个）。核心进展集中在**系统架构精简（Agent 架构重构）**、**前端资产构建优化**以及**接入通道的可选化改造**。整体来看，项目处于高速迭代、清理技术债务并强化系统稳定性的健康阶段。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今天的 PR 合并/关闭数量达到 12 个，项目在架构、性能、体验等多个维度取得了实质性突破，具体包括：

- **架构精简（重构）**：合并了 [PR #898](https://github.com/moltis-org/moltis/pull/898)，移除了 "primary identity" 概念，使 "main" agent 成为真正的数据库行，统一了代理路由系统。此 PR 对应并关闭了 Issue #774，是今日最具分量的架构改进。
- **代码库与编译优化**：
  - [PR #895](https://github.com/moltis-org/moltis/pull/895) 从 Git 中移除了约 92,000 行生成的前端 JS/CSS 代码，改由编译时构建检查，大幅清理了仓库体积。
  - 通讯通道开始迈向可选化：[PR #890](https://github.com/moltis-org/moltis/pull/890) / [#889](https://github.com/moltis-org/moltis/pull/889) / [#891](https://github.com/moltis-org/moltis/pull/891) 均已合并，将 Telegram 集成改为了可选依赖，有效减小了二进制文件体积和编译时间。
- **Bug 修复与稳定性强化**：
  - [PR #894](https://github.com/moltis-org/moltis/pull/894) 增加了安全钩子与熔断机制的回归测试，确保 Block 动作不会误触发熔断。
  - [PR #893](https://github.com/moltis-org/moltis/pull/893) 修复了在反向代理环境下 Matrix OIDC 登录失败的问题。
  - [PR #892](https://github.com/moltis-org/moltis/pull/892) 恢复了在 #886 PR 中被误删的 Session 名称显示和重命名功能。
- **体验优化**：合并了 [PR #897](https://github.com/moltis-org/moltis/pull/897)，修复了 Skills UI 中的错误显示（`[object Object]`），并增加了技能安装时的“自动信任”机制，简化了用户操作步骤。

## 4. 社区热点
今日新开并引起关注的主要问题是关于**容器构建环境的网络故障**：
- [Issue #896](https://github.com/moltis-org/moltis/issues/896)（👍: 0，评论: 1）：用户报告在执行 `apt-get update` 时遇到 Docker build 失败（`Temporary failure resolving 'ports.ubuntu.com'`）。这是一个典型的开发环境/部署网络问题，尽管不一定涉及核心代码逻辑错误，但对新用户的上手体验影响较大，建议维护者提供标准的 Docker 构建网络配置文档或排查指南。

## 5. Bug 与稳定性
今日报告和修复的 Bug 主要涉及 UI 交互、安全机制和部署构建：

- **🟡 中等：Docker 构建失败**
  - [Issue #896](https://github.com/moltis-org/moltis/issues/896)：基于 Ubuntu 的 Docker 构建过程中 DNS 解析失败。**状态：Open，暂无对应 Fix PR。**
- **🟢 已修复：UI Session 名称丢失**
  - [Issue #888](https://github.com/moltis-org/moltis/issues/888)：由于之前的 PR 引入了 UI 回归，导致 session 名称不可见且无法编辑。**状态：已通过 [PR #892](https://github.com/moltis-org/moltis/pull/892) 修复并关闭。**
- **🟢 已修复：安全钩子熔断逻辑漏洞**
  - [Issue #547](https://github.com/moltis-org/moltis/issues/547)：Hook circuit breaker 可能因故意触发的 `exit 1` 而禁用安全钩子。这是一个安全设计缺陷。**状态：已通过 [PR #894](https://github.com/moltis-org/moltis/pull/894) 添加回归测试并验证修复逻辑，Issue 已关闭。**

## 6. 功能请求与路线图信号
今日的 PR 动态透露了项目近期的明确路线图信号：

- **自动化代码索引**：[PR #903](https://github.com/moltis-org/moltis/pull/903)（Open）提出了实现自动代码索引的机制，包括去重和文件监控。这表明 Moltis 正致力于提升 AI Agent 的自主记忆与知识获取能力。
- **模块化架构继续推进**：[PR #899](https://github.com/moltis-org/moltis/pull/899)（Open）正试图将 Discord 和 MS Teams 通道也设为可选。结合已合并的 Telegram 可选化 PR，**全面解耦通讯通道**将是下一个版本的显著特性，此举将极大地优化云原生环境下的部署效率。

## 7. 用户反馈摘要
从近期和今日的 Issues 分析，用户的真实反馈主要集中在：
- **代理配置繁琐**：Issue #774 反馈当前的 primary agent 设定过于笨重。这促使团队完成了核心代码重构（PR #898），说明用户希望有更轻量、更直观的 Agent 管理方式。
- **前端技能管理体验差**：Issue 中反馈的错误提示不清晰（显示原始对象），并且信任技能需要额外操作。团队已在 PR #897 中解决了这些痛点，说明项目在 UI/UX 的易用性上正在积极响应社区反馈。
- **安全性与高可用**：用户（如 Issue #547 提交者）对安全拦截机制有极高要求，不希望被恶意手段绕过，体现了 Moltis 在企业级应用场景中的安全需求定位。

## 8. 待处理积压
目前有 2 个具有重要价值的 PR 处于 Open 状态，等待 Review 和合并：
1. [PR #903](https://github.com/moltis-org/moltis/pull/903)：`feat(code-index): Auto-trigger indexing...`。这是一个大型功能 PR，建议维护者重点关注其并发处理与资源消耗的合理性。
2. [PR #899](https://github.com/moltis-org/moltis/pull/899)：`feat: make discord and msteams channels optional`。作为架构解耦的一环，建议尽快审核合入，以完善近期的“模块化构建”优化目标。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-28)

## 1. 今日速览
过去 24 小时内，CoPaw 项目保持了**极高的社区活跃度与良好的维护节奏**。项目共处理了 50 条 Issue（完美实现了新开与关闭 1:1 的平衡），以及 43 条 PR 更新。尽管今日没有发布新的正式版本，但核心开发团队与社区贡献者正密集修复 v1.1.4 版本带来的 WebUI 配置丢失、Channel 消息截断等回归问题。值得注意的是，项目正在积极重构上下文压缩与多智能体任务进度追踪等底层核心模块，整体架构正在向更稳定、高可用的方向演进。

## 2. 版本发布
今日无新版本发布。
*(注：结合昨日高频的 bug 修复 PR 来看，项目正处于 v1.1.4 之后的密集修复期，预计近期将推出 v1.1.4.post3 或 v1.1.5 稳定版。)*

## 3. 项目进展
今日合入了大量关键修复与功能增强 PR，显著提升了系统的稳定性与易用性：
*   **版本与构建更新：** 版本号已准备 bump 到 `1.1.4.post3`（[PR #3879](https://github.com/agentscope-ai/QwenPaw/pull/3879)），清理了 Docker 镜像中的冗余构建文件（[PR #3638](https://github.com/agentscope-ai/QwenPaw/pull/3638)）。
*   **核心架构优化：** 
    *   重构了上下文压缩的回退机制，防止 LLM 总结失败时丢失活跃历史记录（[PR #3848](https://github.com/agentscope-ai/QwenPaw/pull/3848)）。
    *   细化了 Chat 模型的重试逻辑（[PR #3874](https://github.com/agentscope-ai/QwenPaw/pull/3874)）。
    *   修复了系统提示词重建逻辑中导致死循环的缩进错误（[PR #3793](https://github.com/agentscope-ai/QwenPaw/pull/3793)）。
*   **渠道修复：**
    *   修复了 ACP (Agent Communication Protocol) 回退配置缺失导致的执行中断问题（[PR #3834](https://github.com/agentscope-ai/QwenPaw/pull/3834)）。
    *   修复 QQ 渠道语音消息识别问题并支持 SILK 格式转写（[PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) 与 [PR #3887](https://github.com/agentscope-ai/QwenPaw/pull/3887)）。
    *   解决了 QQ 频道 WebSocket 连接意外中断导致线程崩溃的问题（[PR #3872](https://github.com/agentscope-ai/QwenPaw/pull/3872)）。

## 4. 社区热点
*   **WebUI 配置丢失成众矢之的：** Issue [Bug #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824)（5 评论）反映了刷新或重启后 Plan 模式、长期记忆等配置丢失的严重问题。与此同时，[Bug #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)（5 评论）也指出 Docker 重启后向量模型配置被强制覆盖，引发了自部署用户的强烈抱怨。
*   **安全与 Channel 能力博弈：** Issue [Feature #3869](https://github.com/agentscope-ai/QwenPaw/issues/3869)（6 评论）指出当前高危命令只能通过 Web 端批准，严重削弱了飞书/钉钉等 Channel 的移动端闭环体验。用户呼吁支持通过 Channel 侧的“魔法命令”进行授权。
*   **产品定位与生态疑问：** Issue [Question #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)（7 评论）有用户询问 QwenPaw 与 CoPaw 的关系及未来维护路线，反映出社区对项目品牌统一和长远发展的关注。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 v1.1.4 版本的 WebUI 稳定性及底层引擎的边界异常处理上，按严重程度划分如下：

*   **🔴 严重级别 (P0 - 导致系统不可用)**
    *   **WebUI 暂停形同虚设：** [Bug #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850)（3 评论，1 点赞）点击暂停仅停止前端渲染，后端 Agent 依然继续疯狂调用工具消耗 Token，暂无对应修复 PR。
    *   **Debian 环境页面卡死：** [Bug #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853)（5 评论）在非 root 用户下保存模型设置会导致 WebUI 彻底冻结，需强制重启服务。
    *   **Chromadb 底层崩溃：** [Bug #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)（2 评论）由于 Rust 绑定缺陷导致 SIGSEGV (段错误) 直接杀死整个 QwenPaw 进程。

*   **🟠 中级别 (P1 - 核心功能受损)**
    *   **SSE 流未正确关闭：** [Bug #3871](https://github.com/agentscope-ai/QwenPaw/issues/3871)（4 评论）Agent 回复完毕后 UI 一直处于无限 "Thinking" 状态。
    *   **会话历史神秘消失：** [Bug #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)（5 评论）聊天记录突然清空，新消息被路由到新的空白 session。

## 6. 功能请求与路线图信号
结合今日的 Issue 讨论与 PR 进展，未来版本的重点演进方向信号明显：
*   **多智能体任务实时可观测性：** 开发者正在审查 [PR #3889](https://github.com/agentscope-ai/QwenPaw/pull/3889)，该 PR 引入了 `ProgressObservingHook`。这响应了社区对 Agent 内部思考与执行过程黑盒的痛点，预计很快合入主线。
*   **更聪明的会话命名：** [PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829) 正在推动利用 LLM 异步生成真实的会话标题，以替代当前“截取前10个字符”的简陋体验。
*   **Token 消耗仪表盘：** [Feature #3366](https://github.com/agentscope-ai/QwenPaw/issues/3366) 呼吁在 UI 中增加类似 HerMES Agent 的实时 Token 消耗进度条和预算警告，以解决重度使用时的成本失控焦虑。
*   **ARM64 原生支持：** [Feature #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) 要求 `browser_use` 工具在 macOS 上默认支持 Apple Silicon (ARM64)，而非运行低效的 x86_64 转译。

## 7. 用户反馈摘要
从今日的 Issue 与评论中可以清晰描绘出当前典型用户的痛点：
1.  **“纸老虎”般的控制力：** 用户对 Agent 在后台暗中执行（如暂停按钮无效、MCP 调用无限卡死 [Bug #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822)）感到非常不安，急需完善的执行中断机制。
2.  **配置持久化体验割裂：** 重启或切换页面后配置丢失，极大地伤害了自部署用户的信任感，用户期望 WebUI 的所有设置都能“所见即所得”地持久化。
3.  **对 Channel 移动端体验要求提升：** 越来越多用户将 AI 接入微信、飞书，但他们发现复杂的审批流程和高危命令拦截依然强依赖 PC 端的 WebUI，破坏了移动端的沉浸感。

## 8. 待处理积压
以下高价值 Issue 活跃度极高且目前处于 `OPEN` 状态，但尚未有明确的修复 PR 合并，需要核心维护者重点关注：
*   **UI 渲染性能严重衰退：** [Issue #3830](https://github.com/agentscope-ai/QwenPaw/issues/3830) 反映 Windows 桌面端在长会话切换时变得极度卡顿。
*   **前端暂停按钮无效：** [Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) 缺少后端协作的假暂停问题，存在严重的资源浪费和资金流失风险。
*   **WebUI 保存设置页面卡死：** [Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) 权限相关的疑难杂症，阻断了部分 Linux 用户的正常配置。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 项目 2026-04-28 动态日报：

---

# ZeroClaw 项目动态日报 (2026-04-28)

## 1. 今日速览
ZeroClaw 项目今日保持极高的社区热度，过去 24 小时内共产生 **48 条 Issue 更新**（新增/活跃 38 条，关闭 10 条）和 **50 条 PR 更新**（待合并 37 条，合并/关闭 13 条）。尽管今天没有新的版本发布，但社区提交了大批关键的错误修复和功能增强 PR，特别是针对 Web Dashboard 崩溃、Gateway 成本追踪缺失以及历史代码恢复等核心问题。项目当前处于高频率迭代和代码重构期，社区贡献异常活跃，整体项目健康度良好。

## 2. 版本发布
**今日无新版本发布。**

## 3. 项目进展
今日有多达 13 个 PR 被合并或关闭，推动了多项关键基础设施和前端体验的改进：
*   **历史提交恢复**：PR [#6169](https://github.com/zeroclaw-labs/zeroclaw/pull/6169) 成功恢复了因之前批量回滚而丢失的 4 项小型代码修复，确保历史贡献不流失。
*   **前端缺陷修复与增强**：PR [#6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161) 提交了 Dashboard 错误修复捆绑包，解决了困扰用户的概览页崩溃、模型保存和编辑器光标错位等问题。PR [#6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162) 增加了前端对非数组 API 响应的防御性校验。
*   **安全与依赖更新**：PR [#6152](https://github.com/zeroclaw-labs/zeroclaw/pull/6152) 完成了日常安全维护，更新了 78 个依赖包（包括 `aws-lc-rs` 和 `axum` 等）。
*   **前端体验完善**：PR [#6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) 为 Web 聊天界面引入了消息删除、清空所有消息和紧凑模式功能。

## 4. 社区热点
今日社区讨论最为热烈的是关于**全新安装的初始化阻塞问题**和**架构级重构提议**：
*   **全新安装默认模型报错 (S1 级别)**：Issue [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) 引发了 14 条评论。用户在全新安装 ZeroClaw 并连接 Ollama 时遇到工作流完全阻塞的问题，反映出当前引导流程对本地模型的支持存在摩擦。
*   **批量破坏性配置迁移提议**：Issue [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947)（6 条评论）提议将 Schema 升级至 v3 并一次性推送所有破坏性配置字段迁移。这引起了开发者的深度讨论，预示着项目正在酝酿一次重大的底层重构。
*   **Kimi Provider 流式工具调用报错 (S1 级别)**：Issue [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) 报告了在使用具备“思考”能力的模型时，由于缺少 `reasoning_content` 导致的 API 400 错误，该问题长期困扰部分深度用户。

## 5. Bug 与稳定性
今日报告了多个影响工作流的高严重度 Bug，部分已有对应修复 PR：
*   **P0 级 - 安装脚本未提取 Web Dashboard**：Issue [#6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) 指出 `install.sh` 未解压 Web 资产。👉 **已有修复 PR**：[#6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154)。
*   **P1 级 - Gateway 成本与 Token 统计失效**：Issue [#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) 揭示网关聊天成功但 `/api/cost` 始终为零且无日志写入。👉 **已有修复 PR**：[#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159)。
*   **P1 级 - 前端 Channels 标签页崩溃**：Issue [#5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) 报告了由于 API 返回格式不严谨导致的界面渲染错误。👉 **已有修复 PR**：[#6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161)。
*   **S0 级 - 浏览器输入导致 CPU 飙升**：Issue [#5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) 报告在 Ubuntu + Firefox 环境下，在代理聊天框中打字会导致多核 CPU 飙升，目前原因仍在排查中。

## 6. 功能请求与路线图信号
今日涌现出多个极具价值的架构级功能请求，揭示了项目近期的演进方向：
*   **技能系统架构精简**：Issue [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) 建议移除当前冗余的硬编码工具，转而统一使用 `skills` 结合 WASM 进行集成，以实现更轻量级的 Agent 内核。
*   **混合技能 + WASM 插件**：Issue [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) 提议引入结合 Markdown 技能和 `.wasm` 二进制文件的新型混合插件系统，这是拓展 ZeroClaw 生态的关键信号。
*   **Web UI 记忆恢复与手动触发定时任务**：Issue [#6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) 期望能在前端通过点击记忆直接恢复历史对话；PR [#6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) 则已经实现了在 Web 界面手动触发 Cron 任务的功能。

## 7. 用户反馈摘要
从近期的 Issues 中，可以清晰描绘出当前用户的典型痛点与使用场景：
*   **本地/自托管体验存在断层**：大量用户（如 #6123, #6149, #6118）在尝试通过 Ollama 或 LocalAI 运行本地模型时遭遇阻塞性问题。Windows 安装脚本溢出、配置文件键值对不匹配，以及 Nextcloud Talk 等渠道 5 秒超时（[#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156)），表明项目在边缘部署场景的健壮性有待提高。
*   **高级推理模型兼容性待完善**：随着 Kimi、DeepSeek 等具备深度推理能力的模型普及，用户越来越多地遇到工具调用与“思考内容”并发处理导致的上下文重复或报错（[#5584](https://github.com/zeroclaw-labs/zeroclaw/issues/5584), #6147）。
*   **强烈渴求更轻量、解耦的架构**：社区对 WASM 和插件化的呼声极高，希望剥离重度集成，转向以 Skill 为主体的灵活生态。

## 8. 待处理积压
以下关键问题目前缺乏明确的推进或仍在等待核心团队的人力介入：
*   **重大历史代码恢复追踪**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 正在跟踪因批量回滚丢失的 153 个提交，恢复工作漫长且关键。
*   **长期存在的推理上下文丢失问题**：PR [#1347](https://github.com/zeroclaw-labs/zeroclaw/pull/1347) 旨在修复思考模型在工具调用历史中丢失 `reasoning_content` 的问题。该 PR 影响面广（涉及 Provider、Tool），已开启近两个月，目前标记为 `needs-author-action`，急需社区核心成员进行推进审查。
*   **E2EE 加密恢复失败**：Issue [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) 报告 Matrix 端到端加密在重置后无法从备份下载房间密钥（S1 级别），该问题已开启近一个月，严重影响了隐私优先用户的使用。

</details>