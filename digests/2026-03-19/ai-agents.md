# OpenClaw 生态日报 2026-03-19

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-18 22:05 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
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

# OpenClaw 项目动态日报 (2026-03-19)

**分析师**: AI OpenClaw Observer

---

### 1. 今日速览

OpenClaw 项目今日维持了极高的社区活跃度，过去24小时内 Issues 与 PR 更新量均达到 **500 条**，显示出项目正处于快速迭代与功能扩展的高峰期。尽管没有新的版本发布，但社区贡献集中在 **Hooks 插件系统**、**多平台支持** 以及 **稳定性修复** 上。值得注意的是，安全团队与社区迅速响应了一起针对开发者的 **钓鱼诈骗事件**，并持续修复 Gateway 进程崩溃、内存泄漏等关键稳定性问题。整体来看，项目在功能丰富度（特别是可观测性与集成能力）上进步显著，但新引入的 Bug（尤其是回归问题）需要维护者重点关注。

---

### 2. 版本发布

*   **无新版本发布**

---

### 3. 项目进展

今日共有 **83 个 PR 被合并或关闭**（其中大部分为合并），主要集中在增强 Agent 可观测性、修复关键 Bug 以及扩展集成能力：

*   **核心架构 - 可观测性增强**: 三个重要的 Hooks 相关 PR 推进了 Agent 的控制与监察能力：
    *   PR [#33915](https://github.com/openclaw/openclaw/pull/33915) 增加了 `context_assembled` 和 `loop_iteration` 钩子。
    *   PR [#39206](https://github.com/openclaw/openclaw/pull/39206) 引入了 `before_llm_call` 和 `after_llm_call`，允许策略插件拦截和过滤 LLM 调用。
    *   PR [#39207](https://github.com/openclaw/openclaw/pull/39207) 增加了 `before_response_emit`，用于在回复发送前进行内容审查或阻断。
*   **功能集成 - Morph 搜索与压缩**: PR [#44408](https://github.com/openclaw/openclaw/pull/44408) 和 [#45510](https://github.com/openclaw/openclaw/pull/45510) 将 Morph 集成为官方打包的压缩提供者和代码库搜索工具，大幅提升了代码语义搜索能力。
*   **关键修复**:
    *   PR [#46707](https://github.com/openclaw/openclaw/pull/46707) 替换了 `marked.js` 为 `markdown-it`，彻底修复了导致 Web UI 在解析大型 JSONL 时卡死的 ReDoS 漏洞。
    *   PR [#46592](https://github.com/openclaw/openclaw/pull/46592) 优化了工具调用失败时的错误提示，使其包含具体原因，提升了排错效率。
    *   PR [#50005](https://github.com/openclaw/openclaw/pull/50005) 修复了 Anthropic replay 中格式错误的工具调用导致崩溃的问题。

---

### 4. 社区热点

*   **安全预警 - 钓鱼诈骗**: Issue [#49836](https://github.com/openclaw/openclaw/issues/49836) 报告了利用 OpenClaw 名义进行的钱包连接钓鱼攻击。社区迅速响应（27条评论），目前该问题处于高度关注状态，提醒所有用户警惕虚假 Airdrop 仓库。
*   **国际化支持**: Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) (评论 103 条) 持续火热。尽管官方表示目前没有带宽支持多语言，但社区对此功能的呼声极高，仍有大量用户在近期持续投票和讨论。
*   **全平台客户端请求**: Issue [#75](https://github.com/openclaw/openclaw/issues/75) (评论 41 条, 👍 63) 再次活跃。用户强烈请求官方支持 Linux 和 Windows 的桌面客户端，以补全 macOS/iOS/Android 之外的拼图。
*   **MCP 协议支持**: Issue [#29053](https://github.com/openclaw/openclaw/issues/29053) (👍 7) 呼吁原生支持 MCP (Model Context Protocol) 客户端，以便连接外部标准化工具服务器，反映了用户对开放生态的强烈需求。

---

### 5. Bug 与稳定性

今日报告了大量稳定性问题，尤其是与 Gateway 和会话管理相关的回归 Bug：

*   **高危 - Gateway 频繁重启**: Issue [#48205](https://github.com/openclaw/openclaw/issues/48205) 报告 Gateway 每约 50 分钟无故重启，导致服务中断。目前尚无定论，严重影响生产环境稳定性。
*   **高危 - 心跳机制失效**: Issue [#3181](https://github.com/openclaw/openclaw/issues/3181) 和 [#45772](https://github.com/openclaw/openclaw/issues/45772) 分别指出了 "Runaway heartbeat loop" 导致高额账单和 "Heartbeat timer stops after 1-2 triggers" 的问题。这表明近期的心跳重构引入了严重的逻辑缺陷。
*   **中危 - 内存泄漏**: Issue [#48183](https://github.com/openclaw/openclaw/issues/48183) 指出飞书插件在停止监视器时未正确清理 `httpServers Map`，存在潜在内存泄漏。
*   **中危 - 认证回归**: Issue [#23538](https://github.com/openclaw/openclaw/issues/23538) 报告 Anthropic `setup-token` 认证后在运行时返回 401，可在全新配置文件中复现。
*   **已有修复**: 针对导致 UI 卡死的 ReDoS 问题，已有 PR [#46707](https://github.com/openclaw/openclaw/pull/46707) 提供修复。

---

### 6. 功能请求与路线图信号

*   **外部化与插件化**: 社区正推动 OpenClaw 从单体应用向更灵活的架构演进。
    *   **外部内存 API**: Issue [#49233](https://github.com/openclaw/openclaw/issues/49233) 提议外部内存提供者 API，以实现零停机上下文压缩，响应了企业级用户对高可用的需求。
    *   **并行搜索**: PR [#50033](https://github.com/openclaw/openclaw/pull/50033) 正在尝试集成 Parallel AI 作为新的搜索/提取提供者，有望在下个版本上线。
*   **配置体验优化**: Issue [#22278](https://github.com/openclaw/openclaw/issues/22278) 请求发布 `openclaw.json` 的 JSON Schema，这虽然是文档/工具层面的请求，但对于降低用户配置错误率、提升 IDE 支持至关重要，预计将很快被纳入。

---

### 7. 用户反馈摘要

*   **痛点 - 错误信息晦涩**: 多个 Issue（如 #38902, #6156）反映报错信息过于笼统（如 "Gateway did not become ready", "check open ai req parameter error"），用户难以自行排查是网络、配置还是模型问题。
*   **痛点 - 版本升级带来的不稳定**: 大量 Issues 标记为 `[regression]`（如 #34741, #25215），用户普遍反映升级到 2026.3.x 版本后遇到了前所未有的连接中断、认证失败或死循环问题，建议官方放缓发版速度，加强回归测试。
*   **场景 - 多 Agent 协作**: Issue #41577 和 #16055 揭示了用户正在积极尝试使用 OpenClaw 构建复杂的多 Bot 系统（如 Telegram 机器人组），但目前会话隔离和工具继承机制似乎存在瓶颈。

---

### 8. 待处理积压

*   **长期未解决 - 网关绑定问题**: Issue [#4947](https://github.com/openclaw/openclaw/issues/4947) 指出 `gateway.bind: "lan"` 在 macOS 上依然只绑定 localhost，导致无法在局域网内访问。此问题长期悬而未决，影响了局域网部署体验。
*   **长期未解决 - 视觉能力缺失**: Issue [#23452](https://github.com/openclaw/openclaw/issues/23452) (👍 7) 指出跨频道（Discord/Telegram）的图片/视觉识别功能系统性失效，模型无法读取图片。这是一个核心功能缺陷，急需维护者介入修复。
*   **功能冻结 - 国际化**: Issue [#3460](https://github.com/openclaw/openclaw/issues/3460) 尽管热度极高，但官方标记为暂时无力支持。建议社区通过 PR 形式贡献翻译，而非等待官方主导。

---

## 横向生态对比

# AI 智能体与个人助手开源生态横向对比分析报告 (2026-03-19)

**分析师**: AI Open Source Ecosystem Observer

---

### 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于 **"架构重构与能力分化"** 的关键时期。头部项目正从单一对话工具向具备长期记忆、多模态感知和工具调用能力的 **Agent 平台** 演进。今日生态呈现出明显的 **"双轨并行"** 趋势：一方面，OpenClaw、PicoClaw 等核心项目极力通过 Hooks 和插件化架构争夺企业级生产力场景的控制权；另一方面，NanoClaw、TinyClaw 等轻量化项目正积极探索边缘计算、无 Docker 化部署等差异化路径。同时，**稳定性**（如 Gateway 崩溃、会话管理）与 **安全性**（如权限控制、隐私泄露）已成为全行业亟待解决的技术债。

---

### 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release | 健康度评估 | 核心关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500+** | **500+** | 无 | ⭐⭐⭐⭐ (高迭代，高Bug) | Hooks, Gateway崩溃, 钓鱼预警 |
| **PicoClaw** | High | **89** | Nightly | ⭐⭐⭐⭐ | 语音交互, SOUL架构, 多渠道 |
| **CoPaw** | **50** | **50** | **v0.1.0-beta.3** | ⭐⭐⭐⭐⭐ (高质量迭代) | 多模态, 本地模型, Memory |
| **Zeroclaw** | **36** | **50** | **v0.5.0** | ⭐⭐⭐⭐ (里程碑) | 运行时切换, 安全策略, Skill创建 |
| **NanoClaw** | 25 | 50 | 无 | ⭐⭐⭐ (架构调整) | Docker化, Dashboard, 合规性 |
| **IronClaw** | **48** | 50 | 无 | ⭐⭐⭐ (技术债清理) | CI门禁, SSRF修复, 性能优化 |
| **LobsterAI** | 13 | 12 | 无 | ⭐⭐⭐ (重构期) | OpenClaw插件化, 网易七鱼 |
| **TinyClaw** | 0 | 16 | **v0.0.15** | ⭐⭐⭐⭐ (品牌重塑) | TinyAGI, 一键安装, 分层记忆 |
| **Moltis** | 2 | 1 | 无 | ⭐⭐ (维护期) | 编码修复, Copilot连接 |
| **ZeptoClaw** | - | 2 | 无 | ⭐⭐⭐ (架构探索) | Vertex AI, Firecracker沙箱 |
| **EasyClaw** | - | 2 | **v1.7.0/1** | ⭐⭐⭐ (快速修复) | 国际化, Windows兼容性 |

> **注**: OpenClaw 数据包含极高的 Issue/PR 更新量（500+），显示其作为核心参照项目的巨大体量与维护压力。

---

### 3. OpenClaw 在生态中的定位

*   **核心参照与连接器**: OpenClaw 是生态中的 "Hub"，其架构（如 Gateway、Hooks）正被其他项目（如 LobsterAI）直接作为底层运行时集成，确立了事实上的标准地位。
*   **优势**: **生态规模最大**，社区响应极快（针对钓鱼攻击的迅速反应），且在 **可观测性**（Hooks 系统）和 **集成能力**（Morph, MCP）上保持领先。
*   **劣势/风险**: 过快的迭代导致了 **严重的稳定性回归**（Gateway 重启、心跳失效），且社区对国际化（i18n）的长期忽视正成为用户体验的瓶颈。
*   **技术路线**: 走 "大而全" 的平台化路线，试图通过插件系统覆盖所有场景，目前正面临架构复杂度带来的质量挑战。

---

### 4. 共同关注的技术方向

1.  **安全性增强与权限模型**
    *   **涉及项目**: OpenClaw (钓鱼), Zeroclaw (严格策略), IronClaw (SSRF), NanoClaw (日志脱敏), ZeptoClaw (Firecracker).
    *   **趋势**: 社区正从 "完全开放" 转向 "默认安全"。Zeroclaw 的用户抱怨反映了安全与易用性的冲突，而 ZeptoClaw 探索 VM 级隔离，预示着对 Agent 执行环境的安全要求将达到新高度。

2.  **多模态能力集成**
    *   **涉及项目**: CoPaw (图片上传), PicoClaw (TTS/ASR), Zeroclaw (Vision修复).
    *   **趋势**: 纯文本交互已成过去式。CoPaw 和 PicoClaw 正积极构建语音与视觉的 **原生支持**，Agent 需要具备 "听、看、说" 的全能感知能力。

3.  **模型中立与多后端支持**
    *   **涉及项目**: OpenClaw (Anthropic/OpenAI), CoPaw (本地模型修复), Zeroclaw (运行时切换), ZeptoClaw (Vertex AI).
    *   **趋势**: 摆脱单一模型依赖是共识。Zeroclaw 的 `model_switch` 和 CoPaw 对本地模型的热修复表明，**灵活路由**（云端性价比模型 + 本地隐私模型）是企业级部署的刚需。

4.  **架构的可观测性**
    *   **涉及项目**: OpenClaw (Hooks), NanoClaw (Dashboard), IronClaw (Trace), LobsterAI (上下文可视化).
    *   **趋势**: Agent 内部的 "黑盒" 正在被打开。用户迫切需要看到 Token 消耗、上下文压缩情况和思考过程。

---

### 5. 差异化定位分析

*   **重量级平台**:
    *   **OpenClaw**: 功能最全，社区最大，但目前受困于稳定性。适合敢于尝鲜的极客与有能力自行修 Bug 的团队。
    *   **CoPaw**: 架构扎实，近期在多模态和本地化体验上进步显著，代码质量较高，适合追求稳定功能迭代的开发者。

*   **轻量级/特定场景**:
    *   **Zeroclaw**: 强调安全与轻量，定位于 OpenClaw 的替代品。其严格的权限控制适合对安全有极高要求的场景，但可能劝退寻求便利的个人用户。
    *   **TinyClaw (TinyAGI)**: 通过极致简化安装（Curl 一键安装）和品牌重塑，定位于 **普通用户的桌面 AGI 助手**，试图降低技术门槛。
    *   **NanoClaw**: 专注于 **Docker 化与 Dashboard**，试图成为容器化环境下的标准 Agent 载体。

*   **垂直/底层创新**:
    *   **PicoClaw**: 在 **边缘计算**（Rpi）和 **语音交互** 上发力，且在探索基于 Markdown 的 Agent 定义（SOUL.md），具有很强的极客精神。
    *   **ZeptoClaw**: 探索 **Rust + Firecracker** 的底层架构，关注极致性能与隔离，可能成为未来高并发/高安全场景的基座。

---

### 6. 社区热度与成熟度

*   **快速迭代期**: **OpenClaw, PicoClaw**。极高的 Issue/PR 量，功能爆发式增长，但伴随着高频的 Bug 回归，社区处于兴奋与焦虑并存的状态。
*   **质量巩固期**: **Zeroclaw, IronClaw**。发布了重要版本（v0.5.0）或正在进行深度的技术债清理（CI门禁），项目重心从 "加功能" 转向 "稳架构"。
*   **成长期**: **TinyClaw, CoPaw, EasyClaw**。解决了关键的安装或兼容性痛点，正在快速积累用户，社区反馈正向。

---

### 7. 值得关注的趋势信号

1.  **Agent 定义标准化 (SOUL/AGENT.md)**
    *   **信号**: PicoClaw 和 TinyClaw 都在尝试用 Markdown 文件来定义 Agent 的人格与行为。这暗示未来的 Agent 可能是 **"文件即应用"**，通过简单的文本配置即可生成复杂的智能体，极大降低开发门槛。

2.  **记忆系统的分层化**
    *   **信号**: TinyClaw 引入分层记忆，CoPaw 修复 Memory Manager。社区已不满足于简单的上下文窗口，正在探索 **短期/长期/知识库** 的融合记忆架构，这是 Agent 迈向长期自主运行的前提。

3.  **合规性与法律风险显性化**
    *   **信号**: NanoClaw 用户提出 TOS 合规问题，OpenClaw 出现钓鱼攻击。随着 Agent 能力增强，其行为的法律边界和安全风险正成为用户（尤其是企业用户）选择框架的首要考量。

4.  **Web UI 成为标配**
    *   **信号**: 从 NanoClaw 到 EasyClaw，几乎所有主流项目都在强化 Web Dashboard。CLI 时代的 Agent 正在向 GUI 时代的 "AI OS" 演进，可视化的控制面板是用户留存的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-03-19 NanoBot 项目动态日报。

---

# NanoBot 项目动态日报 (2026-03-19)

## 1. 今日速览
NanoBot 项目今日保持**极高的社区活跃度**，过去24小时内共产生 32 条 Issue 更新和 63 条 PR 更新。虽然未发布新版本，但开发重心明显向**系统稳定性、安全性和架构优化**倾斜。社区当前最关注的痛点集中在**模型兼容性回归**（特别是 Gemini 和 Claude）以及**配置管理的安全性**（密钥明文存储问题）。值得注意的是，核心贡献者今日提交了多个关于异步上下文安全和消息投递确认的架构级 PR，预示着项目正在为更高并发的生产环境做准备。

## 2. 版本发布
*   **无新版本发布**。项目仍处于对近期 `v0.1.4.post5` 版本的快速迭代与修补阶段。

## 3. 项目进展
今日共有 **22 条 PR 被合并或关闭**，主要聚焦于代码质量与配置体验优化：

*   **配置与引导体验优化**：合并了针对 `.gitignore` 规则的修复 (PR #396) 和 OpenAI 兼容端点的文档补充 (PR #418)，降低了开发者的上手门槛。
*   **架构重构提案**：核心开发者 @jr551 提交了两个重要的架构级 PR（PR #2224, PR #2223），引入 `ContextVar` 进行工具路由上下文管理，并改进了出站消息的投递确认机制。这些变更虽未正式合并，但表明项目正在解决异步环境下的数据隔离和消息可靠性问题。
*   **安全性增强**：社区开发者提交了针对配置文件权限的修复 (PR #2225)，将含敏感信息的配置文件权限修正为 `0o600`，防止多用户环境下的数据泄露。

## 4. 社区热点
*   **[#1240] Infinite loop response when using llama3.3-70b-instruct (13 评论)**: 最热讨论。用户反馈在使用 Llama 3.3 模型时出现死循环，导致进程无法正常退出。这反映了在非 OpenAI 模型上的 Agent 循环控制逻辑仍需加强。
*   **[#660] Project claims to be 'ultra-lightweight' but includes bloated Node.js dependency (9 评论, 👍4)**: 用户质疑项目虽然标榜轻量级，但在 Docker 镜像中同时依赖 Python 和 Node.js 环境，导致镜像体积臃肿。这触及了项目定位与实际工程化表现之间的矛盾。
*   **[#1991] 希望nanobot可以支持多个自定义custom (8 评论)**: 用户强烈希望能同时配置多套 Custom 模型预设并在运行时自由切换，目前仅支持单一 `custom` 配置限制了灵活性。
*   **[#2018] Try the new interactive configuration wizard (8 评论)**: 关于新引入的交互式配置向导 `nanobot onboard` 的反馈收集，显示项目正在努力改善命令行配置体验。

## 5. Bug 与稳定性
今日报告了多个**阻断性回归问题**，主要集中在最新版本 `v0.1.4.post5` 对特定模型的支持上：

*   **严重**:
    *   **Gemini 模型不可用 (Issue #2185)**: 升级到 `post5` 后，Gemini-3-flash-preview 模型无法使用，严重影响依赖 Google 生态的用户。
    *   **Telegram 消息重复 (Issue #2208)**: 升级导致 Android 客户端出现消息重复发送的 Bug，严重影响使用体验。
*   **中等**:
    *   **语音转写失效 (Issue #2141)**: 升级后 Telegram 语音消息转写功能失效，系统误报未安装 summarize skill。
    *   **Anthropic Provider 报错 (Issue #2200)**: 调用 Claude 模型时持续返回 `litellm.BadRequestError`。
*   **已有修复方案**:
    *   针对配置文件权限泄露风险，已有 PR #2225 提供修复。
    *   针对配置项未自动更新的问题，已有 PR #2227 尝试解决。

## 6. 功能请求与路线图信号
结合 Issue 与活跃 PR，观察到以下明显的路线图信号：

*   **安全性与密钥管理**: Issue #2172 和 Issue #2172 引发了关于密钥明文存储的讨论，PR #2212 (Resolve runtime secret refs) 和 PR #2218 (Support `{env:VAR}` syntax) 迅速跟进。**预计下一版本将重点支持环境变量注入和动态密钥获取（如 1Password 集成）。**
*   **可观测性**: Issue #2189 和 #2154 强烈呼吁集成 Langfuse 或通用的 LLM Trace 支持。虽然目前尚无官方 PR，但这是企业级部署的强需求，可能成为后续重点。
*   **用户交互体验**:
    *   Issue #2131 提议增加 `/status` 指令，PR #2217 正在改进 `cron` 工具的交互。
    *   Issue #2213 提及了第三方开发的 **NanoBot UI Dashboard**，虽然是非官方项目，但显示出社区对 GUI 管理界面的需求。

## 7. 用户反馈摘要
*   **痛点**:
    *   **依赖地狱**: 部分用户在安装 `wecom` 等特定依赖时遇到困难 (Issue #2201)。
    *   **网络隔离环境**: 在内网环境下，LiteLLM 和 Tiktoken 的外网请求导致启动超时 (Issue #2145)，这给企业级私有化部署带来了阻碍。
    *   **模型兼容性**: 用户对于 "Ultra-lightweight" 的定义与实际包含 Node.js 依赖感到困惑 (Issue #660)。
*   **好评**:
    *   社区对新推出的交互式配置向导 (`nanobot onboard`) 持积极尝试态度。
    *   对于 QQ 通道文件收发功能的适配 (Issue #2226) 展现了社区开发者极强的主动性。

## 8. 待处理积压
*   **多租户数据隔离 (Issue #2102)**: 虽已关闭，但用户询问何时支持完整的 Workspace 隔离，这在 SaaS 化部署场景中非常重要，建议维护者给出明确的 Roadmap。
*   **Hooks 系统集成 (PR #1934)**: 关于事件驱动 Hook 系统的 PR 已停留数日，该功能对于扩展性至关重要，建议优先 Review。
*   **长期回归问题**: Issue #1240 (Llama3 死循环) 虽然活跃但尚未有明确的修复 PR 提交，需核心开发者介入排查 Agent Loop 逻辑。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-19)

## 1. 今日速览

Zeroclaw 项目今日迎来重大里程碑更新，正式发布 **v0.5.0** 稳定版，标志着项目进入新的成熟阶段。社区活跃度极高，过去24小时内共有 **36 条 Issues 更新**（新开/活跃 18 条，关闭 18 条）和 **50 条 PR 更新**。开发团队主要聚焦于扩展 Channel 适配器、增强 CLI 工具链以及引入运行时模型切换等核心能力。虽然社区对安全策略的严格程度存在争议，但大量 Bug 修复 PR 的合并显示出团队正在积极响应用户反馈，项目整体健康度良好，正处于快速迭代与功能完善期。

---

## 2. 版本发布

### **v0.5.0 (Stable Release)**

本次更新是 Zeroclaw 的一个重要版本，包含多项新功能和改进：

- **新增 Channel 适配器**：支持 Reddit、Bluesky 和通用 Webhook，极大扩展了 Agent 的接入场景。
- **CLI 增强**：
  - 新增 `self-test` 命令，支持快速和完整两种自检模式。
  - `status` 命令新增 `--format=exit-code` 参数，适配 Docker 健康检查。
  - 新增 `update` 命令，采用 6 阶段流水线并支持回滚，提升升级安全性。
- **CI 优化**：Docker 镜像构建改用预编译二进制，加快构建速度。

### **v0.5.0-beta.364 (Latest Beta)**

- **Agent 核心**：新增 `model_switch` 工具，支持**运行时动态切换 AI 模型**。
- **Delegate 工具**：子 Agent 超时时间现可通过 `config.toml` 进行配置。
- **国际化 (i18n)**：工具描述支持外置化翻译，提升非英语用户体验。
- **技能系统**：支持从多步骤任务中**自主创建 Skill**。

> **迁移提示**：v0.5.0 引入了新的配置项（如 Delegate 超时、Skill 创建等），建议用户查看更新后的 `config.toml` 示例文件。暂无明确的破坏性变更报告。

---

## 3. 项目进展

今日共有 **20+ 个 PR 被合并**，大幅提升了项目的稳定性与功能完整度：

- **核心功能增强**：
  - [PR #3916](https://github.com/zeroclaw-labs/zeroclaw/pull/3916) 合并：实现了基于多步骤任务的**自主 Skill 创建**功能。
  - [PR #3909](https://github.com/zeroclaw-labs/zeroclaw/pull/3909) 合并：**Delegate (子Agent) 超时配置化**，解决了硬编码超时导致的灵活性不足问题。
  - [PR #3912](https://github.com/zeroclaw-labs/zeroclaw/pull/3912) 合并：**工具描述国际化支持**，为多语言用户扫清障碍。

- **重要 Bug 修复**：
  - [PR #3907](https://github.com/zeroclaw-labs/zeroclaw/pull/3907)：修复 **llamacpp provider 不支持视觉输入** 的问题。
  - [PR #3910](https://github.com/zeroclaw-labs/zeroclaw/pull/3910)：修复 Agent **陷入自我修正死循环** 的严重逻辑 Bug。
  - [PR #3903](https://github.com/zeroclaw-labs/zeroclaw/pull/3903)：消除 `claude_code` provider 测试中的**竞态条件**，稳定 CI 流程。
  - [PR #3905](https://github.com/zeroclaw-labs/zeroclaw/pull/3905)：修复 `cron_add` 工具解析字符串化 JSON 失败的问题。
  - [PR #3906](https://github.com/zeroclaw-labs/zeroclaw/pull/3906)：修复安装脚本在 `--skip-build` 模式下**不生成 config.toml** 的问题。

**总结**：今日进展显著，重点解决了 Agent 运行稳定性、安装流程及特定 Provider 兼容性问题，项目整体质量向前迈进了一大步。

---

## 4. 社区热点

今日社区讨论最热烈的话题主要集中在**安全策略与易用性的平衡**上：

1.  **[Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) [热度最高, 41条评论]**
    - **主题**：用户抱怨 Zeroclaw 安全限制过严，导致功能无法使用。
    - **核心诉求**：用户希望有一个简单的“完全放开权限”的配置选项（类似“上帝模式”），以便在个人玩具环境中无需繁琐配置即可使用 Shell 等高危功能。
    - **分析**：这反映了**安全与易用性的经典矛盾**。对于从 OpenClaw 迁移过来的用户，他们更看重功能的自由度。社区可能需要考虑引入更细粒度的预设安全策略（如 `--insecure` 或 `unrestricted` 模式）以满足不同场景需求。

2.  **[Issue #3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) [7条评论]**
    - **主题**：Daemon 在 ARM64 (Raspberry Pi 4) 上静默崩溃。
    - **分析**：嵌入式/边缘计算场景用户群体的痛点，影响项目在轻量化硬件上的部署。

3.  **[Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) [5条评论]**
    - **主题**：请求支持 Napcat / Onebot 频道。
    - **分析**：反映了国内用户对 QQ 机器人生态集成的强烈需求。

---

## 5. Bug 与稳定性

今日报告并处理了多个不同严重等级的 Bug：

| 严重等级 | Issue/PR | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **S0 (数据丢失/安全)** | [#3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537) | Daemon 在 ARM64 上静默崩溃 (v0.2.1-beta.186 起)。 | **待修复** |
| **S1 (阻塞工作流)** | [#3838](https://github.com/zeroclaw-labs/zeroclaw/issues/3838) | Channel/Agent 模式下路由特定的 API Key 被丢弃，导致鉴权失败。 | **已关闭 (需验证)** |
| **S1 (阻塞工作流)** | [#3798](https://github.com/zeroclaw-labs/zeroclaw/issues/3798) | Agent 陷入“存储-遗忘”记忆的自我修正死循环。 | **已通过 PR #3910 修复** |
| **S2 (功能降级)** | [#3802](https://github.com/zeroclaw-labs/zeroclaw/issues/3802) | Telegram 图片传输失败，llamacpp 不支持 vision。 | **已通过 PR #3907 修复** |
| **S2 (功能降级)** | [#3819](https://github.com/zeroclaw-labs/zeroclaw/issues/3819) | 非 TTY 会话（如 Cron）中 SOUL.md 未加载。 | **已通过 PR #3915 修复** |
| **S3 (轻微问题)** | [#3919](https://github.com/zeroclaw-labs/zeroclaw/issues/3919) | `zeroclaw config schema` 命令因 `challenge_max_attempts` 解析失败。 | **已有 PR #3921 待合并** |

---

## 6. 功能请求与路线图信号

结合今日的 Issue 与 PR 动态，以下功能需求信号强烈：

1.  **安全模式可配置性**：社区强烈呼吁更灵活的权限控制，可能需要在下个版本引入“预设安全等级”配置。
2.  **更多 Channel 集成**：Napcat/Onebot (#2503) 和 Slack Thread Replies (#3888) 是明确的需求点。虽然 Webhook 已支持，但原生适配器更受欢迎。
3.  **Provider 扩展**：阿里云百炼 Coding Plan (#3882) 的支持已在 [PR #3889](https://github.com/zeroclaw-labs/zeroclaw/pull/3889) 中进行，预计很快合入。
4.  **Token 效率优化**：Issue #3892 提出了针对本地小参数模型的上下文压缩需求，这在资源受限环境下尤为重要，建议纳入路线图。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼出以下关键反馈：

- **痛点**：
  - **"太安全了反而不可用"**：用户 @lenson-git 表示开启所有安全配置后，Agent 拒绝执行几乎所有操作，变成了纯聊天机器人。
  - **配置复杂性**：从 OpenClaw 迁移的用户觉得 Zeroclaw 的配置依然不够直观。
  - **本地模型兼容性**：使用本地 Llamafile 或 Llama.cpp 的用户在对接 Provider 时遇到阻碍。

- **满意点**：
  - **响应迅速**：多位用户在报告 Bug 后当天就收到了修复 PR（如 #3852, #3860），对开发团队的高效表示认可。
  - **轻量级定位**：用户认可 Zeroclaw 作为 OpenClaw 轻量级替代品的初衷。

---

## 8. 待处理积压

以下重要 Issue 长期未获解决或长期处于 Open 状态，建议维护者关注：

1.  **[Issue #3537](https://github.com/zeroclaw-labs/zeroclaw/issues/3537)** - **ARM64 崩溃问题**。该问题自 v0.2.1 版本就已存在，阻碍了在树莓派等设备上的部署，且被标记为 S0 级严重程度。
2.  **[Issue #2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** - **Napcat/Onebot 频道支持**。这是国内用户的高频需求，目前仍未有官方回应或 PR。
3.  **[Issue #3845](https://github.com/zeroclaw-labs/zeroclaw/issues/3845)** - **长驻 Channel 进程无法热加载新 Skills**。这限制了 Agent 的动态进化能力，需要架构层面的调整。

---

*报告生成时间: 2026-03-19 | 数据来源: Zeroclaw GitHub Repository*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Based on the provided GitHub data for **PicoClaw** (sipeed/picoclaw), here is the project daily report for 2026-03-19.

---

# PicoClaw 项目动态日报 (2026-03-19)

## 1. 今日速览
PicoClaw 今日维持了极高的开发活跃度，**PR 更新量达到 89 条**，其中包含大量功能性增强与架构重构提交。项目核心正经历一次重大的 **Agent 架构重构**，重点围绕 `SOUL.md`（智能体人格）与 `AGENT.md`（智能体配置）的标准化定义展开。社区方面，关于 **TTS/ASR 语音支持** 的讨论以及 **WebUI** 的改进是用户关注的焦点。此外，今日发布了 `v0.2.3` 的 Nightly 构建版本，引入了最新的重构代码。

## 2. 版本发布
### Nightly Build: `v0.2.3-nightly.20260318.513537d2`
- **类型**: Automated Build (可能不稳定)
- **主要内容**: 包含截至目前的最新 Agent 重构代码及社区 PR。
- **Full Changelog**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)
- **风险提示**: 该版本为自动构建，包含大量尚未发布的实验性功能，生产环境部署需谨慎。

## 3. 项目进展
今日共有 **39 条 PR 被合并或关闭**，项目在多渠道支持、安全性和工具链增强方面取得显著进展：

- **渠道适配增强**:
  - **Google Chat 支持**: [PR #830](https://github.com/sipeed/picoclaw/pull/830) 被合并，PicoClaw 现已正式支持 Google Chat 渠道。
  - **飞书 流式与卡片支持**: [PR #800](https://github.com/sipeed/picoclaw/pull/800) 合并，优化了飞书机器人的交互体验。
  - **LINE 安全修复**: [PR #1428](https://github.com/sipeed/picoclaw/pull/1428) 合并，修复了 webhook handler 的 DoS 风险。

- **配置与稳定性**:
  - **API Key 故障转移**: [PR #1707](https://github.com/sipeed/picoclaw/pull/1707) 合并，支持配置多个 API Key 以实现自动故障转移，提升了服务高可用性。
  - **子代理工具修复**: [PR #1711](https://github.com/sipeed/picoclaw/pull/1711) 修复了子代理无法调用工具的严重回归问题。

- **待合并重点 PR**:
  - **沙箱安全模式**: [PR #1760](https://github.com/sipeed/picoclaw/pull/1760) 提交了增强隔离的 Docker Compose 配置，防止 Agent 操作影响宿主机。

## 4. 社区热点
今日社区讨论主要集中在 Agent 架构定义与语音功能扩展：

1.  **Agent 核心定义重构** ([Issue #1218](https://github.com/sipeed/picoclaw/issues/1218))
    - **热度**: 27 条评论
    - **焦点**: 关于 `SOUL.md` 和 `AGENT.md` 的设计理念。社区正在探讨如何通过 Markdown 文件定义 Agent 的“灵魂”（性格/价值观）与行为逻辑。相关衍生讨论包括 [Issue #1755](https://github.com/sipeed/picoclaw/issues/1755) (SOUL 结构) 和 [Issue #1754](https://github.com/sipeed/picoclaw/issues/1754) (Agent 元数据扩展)。

2.  **语音交互支持** ([Issue #1648](https://github.com/sipeed/picoclaw/issues/1648))
    - **热度**: 10 条评论
    - **焦点**: 关于增加 TTS (语音合成) 和 ASR (语音识别) 的架构设计。作者提议在 PicoClaw Gateway 层面增加灵活的语音交互能力，这标志着 PicoClaw 向语音助手领域迈进。

3.  **WebUI 开发** ([Issue #806](https://github.com/sipeed/picoclaw/issues/806))
    - **热度**: 4 条评论, 👍 7
    - **焦点**: 用户对图形化管理界面的需求依然强烈，尤其是非技术用户希望通过 Web UI 管理 Agent 实例。

## 5. Bug 与稳定性
今日报告了多个影响使用体验的 Bug，部分已有修复方案：

- **严重**:
  - **GLM Coding Plan 不可用**: [Issue #1652](https://github.com/sipeed/picoclaw/issues/1652) 报告配置 GLM Coding Plan 时报错或扣费异常，已关闭（可能有修复）。
  - **工具调用失效**: [Issue #1658](https://github.com/sipeed/picoclaw/issues/1658) 报告 Claude 模型调用工具时出现 "tool use.name string should contain at least 1 character" 错误。
  - **指令切换模型失效**: [Issue #1749](https://github.com/sipeed/picoclaw/issues/1749) 报告 `/switch model` 指令损坏。

- **一般**:
  - **安装问题**: [Issue #1763](https://github.com/sipeed/picoclaw/issues/1763) 报告 aarch64 的 .deb 包安装失败。
  - **日志崩溃**: [Issue #1734](https://github.com/sipeed/picoclaw/issues/1734) Launcher 模式下日志文件打开失败导致无输出崩溃。
  - **工具误判**: [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) `exec` 工具的安全检查正则表达式过于严格，导致包含城市名（如 Beijing）的合法命令被拦截。

## 6. 功能请求与路线图信号
- **OpenAI API Channel**: [Issue #1738](https://github.com/sipeed/picoclaw/issues/1738) 请求提供一个兼容 OpenAI API 格式的 Channel，以便将 PicoClaw 嵌入现有系统作为后端使用。
- **PTY 与后台执行**: [Issue #1733](https://github.com/sipeed/picoclaw/issues/1733) 提议增强 `exec` 工具，支持 PTY（伪终端）和后台任务执行，以支持长时间运行的任务（如 `docker build`）。
- **可观测性**: [Issue #1731](https://github.com/sipeed/picoclaw/issues/1731) 请求支持 OTel GenAI 标准，以便企业级监控平台集成。
- **文件写入保护**: [PR #1761](https://github.com/sipeed/picoclaw/pull/1761) 建议为 `write_file` 工具增加 `overwrite` 标志，防止意外覆盖。

## 7. 用户反馈摘要
- **痛点**: 用户在使用特定模型（如 Claude, GLM）时，接口兼容性和计费/限额问题较为突出。
- **体验**: 新版 Agent 配置文件（SOUL/AGENT.md）的引入让高级用户感到兴奋，认为这提供了更好的定制化能力，但也增加了学习曲线。
- **场景**: 许多用户尝试在低功耗设备（如 Rpi Zero W）上运行 PicoClaw，但对内存和稳定性提出了更高要求。

## 8. 待处理积压
- **高优先级文档缺失**: [Issue #1737](https://github.com/sipeed/picoclaw/issues/1737) Launcher 模式下 Web UI 连接 WebSocket 的端口 (18800) 缺乏文档说明，导致用户配置困难。
- **推理内容转发**: [Issue #1746](https://github.com/sipeed/picoclaw/issues/1746) 关于 `reasoning_channel_id` 在 OpenAI 兼容 Provider 下不工作的问题尚未得到解决。
- **长期 Issue**: [Issue #547](https://github.com/sipeed/picoclaw/issues/547) 关于改进 `AGENT.md` 中任务解决模式的建议仍处于 Open 状态，建议与当前重构合并处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这里是 **NanoClaw** 项目 2026-03-19 的动态日报。

---

# 📊 NanoClaw 项目动态日报 (2026-03-19)

> **数据来源**: GitHub Repository `qwibitai/nanoclaw`
> **分析师**: AI Open Source Analyst

### 1. 🚀 今日速览

NanoClaw 今日展现出极高的社区活跃度与开发迭代速度，过去24小时内共有 **25 条 Issue 更新** 和 **50 条 PR 更新**。社区贡献呈现“百花齐放”态势，新增了包括本地语音、邮件通道、Dashboard 在内的多个重要 Skill 模块。然而，高活跃度背后隐藏着严峻的质量挑战，大量 High Priority 级别的 Bug 报告（如会话恢复失败、代码同步机制缺陷）被提交。此外，关于 TOS 合规性与多模型支持的讨论表明项目正处于架构演进的关键十字路口。目前 PR 积压较严重（待合并 38 个），建议维护者尽快进行分流审查。

---

### 2. 📦 版本发布

*   **无新版本发布**。
    *   *注*：尽管无正式 Release，但 `skill/*` 分支和主分支均有大量提交，开发版迭代迅速。

---

### 3. 🛠️ 项目进展

尽管 PR 合并数（12个）相对于总数（50个）较少，但已合并的代码显著增强了系统的健壮性和扩展性：

*   **架构优化 ([PR #1252](https://github.com/qwibitai/nanoclaw/pull/1252))**: 引入了 "Three-root path model"，重构了路径管理逻辑。这标志着 NanoClaw 正在消除自身运行的容器化障碍，向完全 Docker-out-of-Docker 架构迈进。
*   **生态扩展**:
    *   **本地语音支持 ([PR #1250](https://github.com/qwibitai/nanoclaw/pull/1250))**: 集成 `whisper.cpp`，实现无需 API Key 的本地语音转录。
    *   **邮件通道 ([PR #1251](https://github.com/qwibitai/nanoclaw/pull/1251))**: 新增 OpenMail 技能，赋予 Agent 收发邮件的能力。
    *   **Web 监控面板 ([PR #1187](https://github.com/qwibitai/nanoclaw/pull/1187))**: 提供可视化的状态、成本和日志监控界面。
*   **安全性修复 ([PR #1191](https://github.com/qwibitai/nanoclaw/pull/1191))**: 修复了容器错误日志记录用户完整 Prompt 的隐私泄露问题 (Fixes #1150)。

---

### 4. 🔥 社区热点

今日讨论主要集中在**合规性**、**多模型支持**以及**部署体验**上：

*   **TOS 合规性危机 ([Issue #1224](https://github.com/qwibitai/nanoclaw/issues/1224))**
    *   **热度**: High Priority
    *   **核心诉求**: 用户 @kyuwoo-choi 指出 Anthropic TOS 发生变更，建议用 Claude Code CLI 替换当前的 Agent SDK，否则可能违反服务条款。这反映了一线生产环境用户对法律风险的高度敏感。
*   **多模型/后端支持 ([Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163))**
    *   **热度**: 👍 2
    *   **核心诉求**: 用户强烈希望能打破对 Claude 的单点依赖，支持 OpenCode 或其他 AI 提供商，以适应企业多元化的 AI 基础设施。
*   **K8s 受限环境部署 ([Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184))**
    *   **热度**: Medium
    *   **核心诉求**: 用户在 Sealos 等受限 K8s 环境中部署遇到困难。这表明 NanoClaw 目前的容器权限要求较高，急需针对 Serverless/沙箱环境的适配方案。

---

### 5. 🐛 Bug 与稳定性

今日报告了多个**高危 (High Priority)** Bug，集中在**会话管理**和**代码同步**机制上，需立即关注：

1.  **[High] 会话永久失效 ([Issue #1216](https://github.com/qwibitai/nanoclaw/issues/1216))**
    *   **问题**: Claude Code 服务端 Session 过期后，NanoClaw 无法自动恢复，导致长期运行的工具不可用。
    *   **状态**: Open
2.  **[High] 代码更新不同步 ([Issue #1236](https://github.com/qwibitai/nanoclaw/issues/1236))**
    *   **问题**: 更新 `agent-runner` 源码后，现有的 Group 不会同步更新，只有新建的 Group 才有新代码。这导致版本碎片化严重。
    *   **状态**: Open
3.  **[High] 安全日志泄露 ([Issue #1150](https://github.com/qwibitai/nanoclaw/issues/1150))**
    *   **问题**: 容器错误日志明文记录了完整的用户 Prompt。
    *   **状态**: **已修复** (见 [PR #1191](https://github.com/qwibitai/nanoclaw/pull/1191))
4.  **[High] 自动合并导致代码丢失 ([Issue #1135](https://github.com/qwibitai/nanoclaw/issues/1135))**
    *   **问题**: `update-nanoclaw` 脚本在 git merge 时可能静默丢弃用户的自定义修改，无冲突提示。

---

### 6. 💡 功能请求与路线图信号

根据用户反馈，以下功能极有可能被纳入下一阶段的路线图：

*   **会话重置功能**: 用户请求添加 `/new` 命令以清理 Token 消耗过高的上下文 ([Issue #1211](https://github.com/qwibitai/nanoclaw/issues/1211))。
*   **认证透传**: 建议读取 `~/.claude.json` 中的 `primaryApiKey` 作为环境变量的回退方案，简化部署 ([Issue #1217](https://github.com/qwibitai/nanoclaw/issues/1217))。
*   **多模型路由**: 结合 [Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163) 和 [PR #1238](https://github.com/qwibitai/nanoclaw/pull/1238) (set-group-model)，社区正在推动 NanoClaw 成为一个跨平台的 AI Agent 载体，而非仅服务于 Claude。
*   **测试覆盖率提升**: 社区审计发现多个核心模块 (morning-brief, health-monitor 等) 缺少测试 ([Issue #1244](https://github.com/qwibitai/nanoclaw/issues/1244))。

---

### 7. 📝 用户反馈摘要

*   **痛点**:
    *   **Docker 依赖重**: 用户希望在无 Docker 环境 (Windows/Linux) 下运行 ([Issue #1225](https://github.com/qwibitai/nanoclaw/issues/1225))。
    *   **模型代理兼容性差**: 使用阿里百炼等第三方代理时遇到模型映射错误 ([Issue #1210](https://github.com/qwibitai/nanoclaw/issues/1210))。
    *   **更新机制不可靠**: 担心自动更新覆盖自定义代码。
*   **好评**:
    *   极简主义架构和轻量级设计深受开发者喜爱 ([Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184))。
    *   Skill 系统的灵活性得到了充分验证（今日新增多个高质量 Skill）。

---

### 8. ⚠️ 待处理积压

*   **高危安全披露请求 ([Issue #1149](https://github.com/qwibitai/nanoclaw/issues/1149))**: 安全研究员 @mcleo-d 请求私下披露安全漏洞，目前维护者尚未回复联系方式，请务必紧急处理。
*   **Skill 分支合并冲突**: 自动化工作流报告 `skill/apple-container` 和 `skill/compact` 分支与主分支合并失败 ([Issue #1226](https://github.com/qwibitai/nanoclaw/issues/1226), [#1227](https://github.com/qwibitai/nanoclaw/issues/1227), [#1228](https://github.com/qwibitai/nanoclaw/issues/1228))，需人工介入解决冲突。
*   **PR 审查瓶颈**: 目前有 **38 个待合并 PR**，其中包含多个关键功能（如 Dashboard, Security Audit），建议维护团队分批处理或引入更多 Reviewer。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

根据 2026-03-19 的 GitHub 数据，为您生成 IronClaw (nearai/ironclaw) 项目动态日报。

---

# IronClaw 项目日报 (2026-03-19)

## 1. 今日速览
IronClaw 项目今日呈现**极高的开发活跃度**，处于快速迭代与代码质量攻坚阶段。过去 24 小时内，项目产生了 **48 条 Issue 更新**（新开/活跃 32 条，关闭 16 条）和 **50 条 PR 更新**。核心关注点集中在两个方面：一是引入更严格的 **CI 质量门禁**（如 Codecov 覆盖率检查、静态分析），二是对 **Routines（例程）** 生命周期的深度重构。大量由自动化 CI 机器人提交的高严重性代码问题报告表明，项目正在经历一次深度的技术债务清理和性能优化，虽然短期内增加了维护负担，但长远看对系统稳定性（"Mars-rover reliability"）至关重要。

## 2. 版本发布
**无新版本发布**。

## 3. 项目进展
虽然今日无大量 PR 合并（多数为 Open 状态），但关闭的 Issues 和活跃的 PRs 显示了明确的技术路线：

*   **代码质量与安全性增强**：Issue #1228 的关闭标志着项目正式引入了 Codecov 覆盖率门禁，防止 PR 降低测试覆盖率。Issue #1103 (SSRF 漏洞) 和 #1103 相关的修复工作表明安全性是当前的重中之重。
*   **Agent 核心稳定性修复**：Issue #1318 的关闭修复了 `full_job` 例程并发限制失效的问题，防止调度任务重叠导致的资源过载。
*   **关键架构重构 (PRs 进行中)**：
    *   **PR #1374**: 核心贡献者正在重构 `full_job` 生命周期，使其保持运行直到关联任务完成。这是对 Agent 调度机制的重大改进。
    *   **PR #1221**: 修复 Embedding Base URL 的 SSRF 安全漏洞，增强了系统安全性。

## 4. 社区热点
社区讨论焦点集中在**工具扩展的易用性**与**底层架构的健壮性**：

*   **Slack 工具安装失败 (Issue #1205)**：评论数最高（2条）。用户报告 Slack 工具因 WASM 文件路径 404 无法安装，反映出用户对无缝集成第三方工具的强烈需求。
*   **自动化代码审查争议 (Issues #1361, #1369, #1371 等)**：`ironclaw-ci[bot]` 提交了多个关于性能（N+1 查询、重复 Schema 生成）和代码规范的高/严重性 Issue。这些 Issue 引发了关于"过度优化"与"代码规范"之间平衡的讨论，显示出项目对代码质量颗粒度的极致追求。

## 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度排列如下：

### 严重
*   **[CRITICAL] Schema 生成性能瓶颈 (Issue #1361)**：`Tool::schema()` 在每次 LLM 调用时触发 N+1 Schema 生成，严重影响 Agent 响应速度。
    *   *状态*：Open，等待修复。
*   **[HIGH] 用户元数据绕过 Token 预算 (Issue #815)**：用户可通过元数据注入绕过 `max_tokens` 限制，存在潜在的资源滥用风险。
    *   *状态*：Open，风险评估中。

### 高危
*   **[HIGH] 内存分配与性能问题 (Issue #1369, #1370)**：每次触发检查时分配大型 `Vec`，以及数据转换中过多的 `.clone()` 调用，导致不必要的内存压力。
*   **[HIGH] SSRF 风险 (Issue #1103)**：可配置的 Embedding Base URL 缺乏验证。已有修复 PR #1221。

### 中危
*   **[MEDIUM] WASM 工具 Schema 暴露 (Issue #1303)**：WASM 工具导出了类型化 Schema，但 LLM 仍收到 `{}`，导致模型调用失败。
    *   *状态*：已有修复 PR #1348, #1352。
*   **Telegram 集成问题 (Issue #1329, #1308)**：密钥泄露检测锁定频道、Webhook 设置指令错误，影响终端用户体验。

## 6. 功能请求与路线图信号
通过 Issues 和 PRs 分析，下一版本将重点推进以下功能：

*   **全平台 OAuth 支持**：PR #1356 正在完整集成 Gemini CLI OAuth，预示着对 Google 生态的深度支持。
*   **Web UI 增强**：PR #1298 (Omnisearch) 和 PR #1340 (自定义 LLM Provider) 显示 IronClaw 正在通过 Web 界面提升用户体验，试图摆脱纯命令行/配置文件的限制，向 SaaS 化产品形态演进。
*   **MCP (Model Context Protocol) 深度集成**：PR #1240 提议自动发现 NEAR AI MCP 端点，PR #1243 允许 Job 级别的 MCP 过滤，表明项目正在构建更灵活的 Agent 工具链生态。

## 7. 用户反馈摘要
*   **真实痛点**：
    *   **安装与配置门槛高**：用户在 Slack 工具安装 (Issue #1205)、HTTP Webhook 设置 (Issue #1308) 等环节频繁受阻，文档或默认配置与实际代码行为不一致。
    *   **Embedding 功能可用性**：Issue #1381 指出 Embedding 在 `near.ai` 后端下无法工作，影响了依赖于 RAG 或记忆功能的用户体验。
*   **满意点**：尽管存在 Bug，但用户对 IronClaw 的 **Telegram 集成深度** (如语音支持 PR #1314) 和 **多模型支持** 的扩展性表示认可（体现在频繁提出的新 Provider PRs）。

## 8. 待处理积压
*   **Issue #1280 (Flaky OAuth Tests)**：CI 中的 OAuth 测试由于竞争条件导致间歇性失败，阻碍了 Staging 环境的代码合并，需要尽快修复以保证 CI 流水线的可靠性。
*   **Issue #1317 (Routine 生命周期)**：虽然已有 PR #1374，但该问题导致任务提前结束，是核心功能缺陷，需优先 Review 并合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-19)

## 1. 今日速览
LobsterAI 项目今日保持**高度活跃**状态，社区互动频繁。过去24小时内共有 13 条 Issue 更新与 12 条 PR 更新，其中包含 10 个已完成合并的 PR，显示核心团队正在高速迭代修复问题与重构架构。然而，**零版本发布**与**OpenClaw 运行时反复崩溃**的反馈表明项目正处于架构转型的阵痛期，稳定性与设置持久化是目前用户最大的痛点。

## 2. 版本发布
*   **无新版本发布**。尽管有大量代码合并，今日未监测到正式的 Release 发布。

## 3. 项目进展
今日共有 10 个 PR 被合并，主要集中在**底层架构重构（OpenClaw 插件化）**与**关键 Bug 修复**，项目正从单一客户端向支持多渠道 IM 的 Agent 平台演进。

*   **架构重构 - NIM 渠道插件化**：PR [#473](https://github.com/netease-youdao/LobsterAI/pull/473) 将网易七鱼/NIM 渠道从本地 SDK 迁移至 `OpenClaw` 运行时插件架构。这意味着 LobsterAI 正在统一其底层网关，将钉钉、飞书、Telegram 等渠道与底层运行时解耦，为支持更多 IM 平台打下基础。
*   **体验修复 - 配置变更导致卡死**：PR [#487](https://github.com/netease-youdao/LobsterAI/pull/487) 和 [#486](https://github.com/netease-youdao/LobsterAI/pull/486) 修复了在会话运行期间修改配置导致 UI 永久卡死的严重问题，优化了配置同步逻辑，确保仅在用户点击保存时才重启 Gateway。
*   **稳定性提升 - 定时任务修复**：PR [#477](https://github.com/netease-youdao/LobsterAI/pull/477) 修复了定时任务时区解析错误（8小时漂移）及历史任务未过期的问题；PR [#376](https://github.com/netease-youdao/LobsterAI/pull/376) 新增了按小时执行的任务模式。
*   **文档与依赖更新**：PR [#483](https://github.com/netease-youdao/LobsterAI/pull/483) 更新了 `AGENTS.md` 以反映最新的 OpenClaw 架构；PR [#482](https://github.com/netease-youdao/LobsterAI/pull/482) 升级了企业微信依赖。

## 4. 社区热点
今日讨论最热烈的话题是**竞品抄袭争议**，其次是**软件稳定性与上下文管理**。

*   **争议：疑似套壳与版权问题** ([#435](https://github.com/netease-youdao/LobsterAI/issues/435))
    *   **热度**：5 条评论，引发大量关注。
    *   **分析**：用户指出市面上出现名为 "Wind Claw" 和 "Zeelin Claw" 的竞品界面与 LobsterAI 高度相似，怀疑未遵守开源协议。这反映出 LobsterAI 的 UI/UX 设计在业内具有辨识度，同时也提醒法务合规可能成为未来的挑战。
*   **痛点：设置持久化与更新体验** ([#382](https://github.com/netease-youdao/LobsterAI/issues/382))
    *   **热度**：2 条评论。
    *   **分析**：用户抱怨频繁更新导致设置丢失。这是 Electron 类应用的常见痛点，严重影响非技术用户的使用体验。

## 5. Bug 与稳定性
今日报告了多个严重程度较高的 Bug，主要集中在 OpenClaw 运行时与系统兼容性上。

*   **[严重] OpenClaw 运行时反复崩溃** ([#490](https://github.com/netease-youdao/LobsterAI/issues/490))
    *   现象：任务执行中断，OpenClaw 反复重启。
    *   状态：无官方回复。疑似与今日合并的 Gateway 重启逻辑 PR [#484](https://github.com/netease-youdao/LobsterAI/pull/484) 有关，需重点排查。
*   **[严重] 执行危险命令** ([#489](https://github.com/netease-youdao/LobsterAI/issues/489))
    *   现象：AI 执行了非预期的危险 Shell 命令。涉及 Agent 自主性与安全沙箱的核心问题。
*   **[中等] 定时任务丢失与沙箱选项消失** ([#474](https://github.com/netease-youdao/LobsterAI/issues/474))
    *   现象：升级 2026.3.16 版本后，配置数据丢失。
    *   关联：可能与架构重构有关。
*   **[中等] Token 消耗异常** ([#480](https://github.com/netease-youdao/LobsterAI/issues/480))
    *   现象：每次对话携带完整 System Prompt，导致 Token 消耗过高。
*   **[部署] Ubuntu 编译与运行报错** ([#481](https://github.com/netease-youdao/LobsterAI/issues/481), [#476](https://github.com/netease-youdao/LobsterAI/issues/476))
    *   现象：AppImage 无法运行，npm install 报错。涉及 Node 版本依赖与 Chromium 沙箱机制。

## 6. 功能请求与路线图信号
用户对 Agent 的**可观测性**与**外部集成**提出了明确需求。

*   **上下文可视化与压缩** ([#485](https://github.com/netease-youdao/LobsterAI/issues/485))：用户希望看到上下文占用比例、手动压缩上下文，并查看模型的详细思考过程。这表明 LobsterAI 正从简单的 Chatbot 向复杂的 Agent 开发工具转型，用户需要更深度的控制权。
*   **Telegram Bot 支持** ([#478](https://github.com/netease-youdao/LobsterAI/issues/478))：用户请求集成 Telegram。
    *   **信号**：今日合并的 PR [#473](https://github.com/netease-youdao/LobsterAI/pull/473) 提到 "Telegram channels" 已作为 OpenClaw 插件架构的一部分被支持，暗示该功能可能已在路线图上或即将由社区实现。
*   **模型升级**：PR [#388](https://github.com/netease-youdao/LobsterAI/pull/388) (Open) 提议升级 MiniMax 模型至 M2.7，显示项目正在跟进最新的 LLM 能力。

## 7. 用户反馈摘要
*   **真实痛点**：
    1.  **更新恐惧症**：用户不敢轻易更新，因为"所有设置都要重新填" (#382)。
    2.  **稳定性焦虑**：Agent 跑一半崩溃重启 (#490)，或者执行莫名其妙的安全命令 (#489)，让用户难以放心交付关键任务。
    3.  **调试黑盒**：用户无法感知上下文是否溢出、模型是否卡死，缺乏中间状态的视觉反馈 (#485)。
*   **满意点**：用户肯定了开发者的付出，认为"软件好用多了" (#485)，说明核心交互逻辑在改进。

## 8. 待处理积压
*   **长期未解决的认证问题**：Issue [#124](https://github.com/netease-youdao/LobsterAI/issues/124)（本地模式 401 错误）自 2 月底开放至今，虽然有互动但仍未彻底解决，影响本地模式用户体验。
*   **待合并功能 PR**：PR [#388](https://github.com/netease-youdao/LobsterAI/pull/388) (MiniMax M2.7 升级) 和 [#479](https://github.com/netease-youdao/LobsterAI/pull/479) 仍处于 Open 状态，建议维护者尽快 Review 以保持社区贡献的热情。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是 **TinyClaw (TinyAGI)** 项目 2026-03-19 的动态日报。

# 📊 TinyClaw (TinyAGI) 项目日报 - 2026-03-19

### 1. 今日速览
今日是 TinyClaw 项目的**里程碑式节点**，随着 **v0.0.15** 版本的发布，项目完成了从 "TinyClaw" 到 "**TinyAGI**" 的全面品牌重塑与架构重构。过去 24 小时内项目活跃度极高，共处理了 **16 个 PR**（其中 13 个已合并），主要聚焦于**简化安装流程**（支持一行命令安装）、**重构 CLI 入口**以及**修复跨平台兼容性**问题。此外，引入了分层记忆系统和实时流式响应功能，标志着项目从单纯的 Agent 工具向更完善的 AGI 助手框架演进。

---

### 2. 版本发布
#### **[v0.0.15](https://github.com/TinyAGI/tinyagi/releases/tag/v0.0.15)**
本次更新带来了重大的架构调整与体验优化：
- **🚀 安装体验升级**：支持 `curl -fsSL .../install.sh | bash` 一键安装，不再强依赖 npm/node 全局环境，降低了入门门槛。
- **♻️ 品牌重塑**：完成了从 `TinyClaw` 到 `TinyAGI` 的彻底重命名，涵盖包名、CLI 命令及配置目录（`~/.tinyagi`）。
- **📦 架构合并**：将 `packages/tinyagi` 合并入 `packages/cli`，统一了入口点。
- **⚠️ 迁移与破坏性变更**：
    - 配置目录由 `~/.tinyclaw` 迁移至 `~/.tinyagi`。
    - **自动迁移**：CLI 和安装脚本已内置自动迁移逻辑（见 [PR #236](https://github.com/TinyAGI/tinyagi/pull/236) & [PR #239](https://github.com/TinyAGI/tinyagi/pull/239)），旧版用户无需手动操作即可无缝升级。

---

### 3. 项目进展
今日共有 **13 个 PR 被合并**，项目核心功能得到显著增强：

- **CLI 与安装重构**：
    - [PR #238](https://github.com/TinyAGI/tinyagi/pull/238) & [PR #234](https://github.com/TinyAGI/tinyagi/pull/234)：重构了 CLI 架构，将 `tinyagi` 设为主入口，替代了旧的 shell 脚本分发模式。
    - [PR #237](https://github.com/TinyAGI/tinyagi/pull/237) & [PR #235](https://github.com/TinyAGI/tinyagi/pull/235)：确立了 Curl 为默认安装方式，优化了 README 文档。
    - [PR #240](https://github.com/TinyAGI/tinyagi/pull/240)：修复了 Linux 打包在 macOS 上的原生模块（`better-sqlite3`）兼容性问题。

- **核心能力增强**：
    - [PR #209](https://github.com/TinyAGI/tinyagi/pull/209)：**引入分层记忆系统**，Agent 现在可以将知识持久化为 Markdown 文件，支持跨会话记忆。
    - [PR #196](https://github.com/TinyAGI/tinyagi/pull/196)：实现了 Agent 执行进度的**实时 SSE 流式传输**，用户不再需要等待任务全部结束。
    - [PR #213](https://github.com/TinyAGI/tinyagi/pull/213)：**扁平化 Agent 通信架构**，移除了复杂的会话追踪器，改用直接 DM 模式，降低了系统复杂度。

- **修复与优化**：
    - [PR #241](https://github.com/TinyAGI/tinyagi/pull/241)：修复了聊天室消息倒序显示的问题。
    - [PR #214](https://github.com/TinyAGI/tinyagi/pull/214)：增加了 Web 端初始设置引导与自定义 API URL 支持。

---

### 4. 社区热点
今日社区焦点主要集中在架构调整带来的影响及稳定性修复上：

- **[PR #220: 移除聊天室 Fan-out 机制](https://github.com/TinyAGI/tinyagi/pull/220)**
    - **状态**：Open
    - **分析**：作者 @jcenters 指出，之前的消息分发机制导致 4 个 Agent 的团队中出现指数级反馈循环。该 PR 试图通过移除 Fan-out 来解决这一严重的架构缺陷。这反映了项目在多 Agent 协作（Crew）模式下的并发控制正在经历严峻的稳定性测试。
- **[PR #233: 记忆维护心跳](https://github.com/TinyAGI/tinyagi/pull/233)**
    - **状态**：Open
    - **分析**：@mczabca-boop 提出在心跳流中触发周期性的记忆维护。这表明社区正在积极探索如何让 Agent 在长期运行中保持“大脑”的整洁与高效，是对新 Memory System 的重要补充。

---

### 5. Bug 与稳定性
今日修复了多个关键 Bug，且部分问题涉及核心架构调整后的兼容性：

1.  **【严重】原生模块兼容性问题** (已修复)
    - **描述**：在非 Linux 平台（如 macOS）上安装预打包版本时，`better-sqlite3` 加载失败。
    - **修复**：[PR #240](https://github.com/TinyAGI/tinyagi/pull/240) 增加了安装后自动重建原生模块的逻辑。
2.  **【严重】多 Agent 反馈循环** (修复中)
    - **描述**：在 Team 模式下，消息扇出导致 Agent 互相无限触发，形成指数级调用循环。
    - **进度**：[PR #220](https://github.com/TinyAGI/tinyagi/pull/220) 正在处理中，目前仍是 Open 状态，建议多 Agent 场景用户关注此 PR 合并情况。
3.  **【一般】聊天室消息顺序错乱** (已修复)
    - **描述**：后端按时间倒序查询导致前端显示 oldest 在底部的反直觉现象。
    - **修复**：[PR #241](https://github.com/TinyAGI/tinyagi/pull/241) 通过前端 `.reverse()` 修正了时间线。

---

### 6. 功能请求与路线图信号
- **Web 端配置与连接**：[PR #214](https://github.com/TinyAGI/tinyagi/pull/214) 的合并暗示项目正在向“桌面/Web 应用”形态靠拢，提供可视化的设置界面（`/connect`），降低 CLI 配置门槛。
- **持久化记忆**：随着 [PR #209](https://github.com/TinyAGI/tinyagi/pull/209) 的合并，下一阶段的重点可能是记忆的**检索效率优化**与**遗忘机制**（与 PR #233 结合）。
- **Office 工作区**：[PR #212](https://github.com/TinyAGI/tinyagi/pull/212)（Open）提出了重新设计 `/office` 体验，表明项目试图打造一个集成的可视化工作环境，而不仅仅是后台脚本。

---

### 7. 用户反馈摘要
尽管今日 Issues 为 0，但从 PR 描述和 Commit 信息中可以提炼出以下开发者痛点：
- **安装复杂度**：之前的 `npx` 或源码安装方式对非 Node 用户不够友好，这也是 v0.0.15 极力推 Curl 一键安装的原因。
- **升级迁移焦虑**：用户担心重命名（TinyClaw -> TinyAGI）会导致数据丢失。维护者通过自动迁移脚本（[PR #236](https://github.com/TinyAGI/tinyagi/pull/236)）回应了这一痛点。
- **实时性反馈缺失**：之前的 Agent 任务执行缺乏中间状态，用户只能等待结束。现在的流式进度（[PR #196](https://github.com/TinyAGI/tinyagi/pull/196)）直接回应了这一交互短板。

---

### 8. 待处理积压
以下重要 PR 仍处于 Open 状态，建议维护者优先处理：

1.  **[PR #220](https://github.com/TinyAGI/tinyagi/pull/220) - 修复多 Agent 反馈循环**
    - **优先级**：🔴 高。该问题直接影响 Team 模式的可用性，会导致资源耗尽或死循环。
2.  **[PR #212](https://github.com/TinyAGI/tinyagi/pull/212) - Office 界面重构**
    - **优先级**：🟡 中。涉及前端体验的大幅改动，需要较多 Review 时间。
3.  **[PR #233](https://github.com/TinyAGI/tinyagi/pull/233) - 周期性记忆维护**
    - **优先级**：🟢 功能增强。依赖于 Memory System 的稳定性，建议在核心功能稳定后合并。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-19)

**分析师摘要**：今日 Moltis 项目整体处于 **持续维护与漏洞修复阶段**。社区活跃度主要集中在 Bug 诊断与代码健壮性提升上，虽然无新版本发布，但针对核心工具链（Web 工具）的修复 PR 已提交，显示维护者对稳定性保持关注。项目今日无合并代码，整体推进速度平稳，建议关注遗留编码格式的兼容性问题。

---

### 1. 今日速览
*   **整体状态**：项目今日无发版，处于代码审查与问题排查期。
*   **活跃度**：社区反馈积极，过去 24 小时内有 2 个 Issue 更新讨论，1 个修复 PR 提交待合并。
*   **焦点**：重点集中在网络工具（`web_fetch`, `web_search`）的稳定性与编码兼容性上。
*   **健康度**：虽然存在未解决的 Bug，但均有社区成员提供详细复现信息，且已有贡献者提交针对性修复，生态协作良性。

### 2. 版本发布
*   **无新版本发布**。建议关注下一版本是否会包含 PR #450 以解决潜在崩溃问题。

### 3. 项目进展
今日无已合并的 PR，但有 1 个重要的修复 PR 正在等待审查，一旦合并将显著提升工具链的健壮性。

*   **[PR #450](https://github.com/moltis-org/moltis/pull/450) `fix(tools): prevent web_fetch panic on non-UTF8 pages`**
    *   **状态**：待合并
    *   **作者**：@koatora20
    *   **详情**：该 PR 修复了 `web_fetch` 工具在处理非 UTF-8 编码（如 GBK, GB18030, Big5）网页时的 Panic 崩溃问题。
    *   **价值**：解决了核心 RAG 工具在抓取中文/亚洲语言网页时的“byte index is not a char boundary”底层错误，**显著提升了 Moltis 在非英语环境下的稳定性**。

### 4. 社区热点
今日讨论最活跃的 Issue 涉及主流 Provider 集成和网络代理功能，反映了用户在生产环境部署时的痛点。

*   **🔥 [Issue #261](https://github.com/moltis-org/moltis/issues/261) `[Bug]: Gitbub Copilot provider errors`**
    *   **热度**：👍 2 | 💬 5
    *   **分析**：这是今日互动最多的 Issue。作为核心功能之一，Github Copilot 的连接稳定性直接关系到开发者体验。多位用户参与讨论，表明该问题可能具有普遍性，或者是用户高度期待的修复点。

*   **[Issue #407](https://github.com/moltis-org/moltis/issues/407) `[Bug]: Network-filter Proxy failing right after start`**
    *   **热度**：💬 1
    *   **分析**：涉及 `web_search` 功能失效。网络搜索是 AI 智能体的关键能力，该问题若不解决将严重限制 Agent 的实时信息获取能力。

### 5. Bug 与稳定性
今日关注的风险点主要集中在**网络数据获取**和**Provider 连接**两个环节。

| 严重程度 | Issue/PR | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **高危** | [Issue #261](https://github.com/moltis-org/moltis/issues/261) | **Github Copilot Provider 报错**。Provider 无法连接将导致核心对话功能不可用。 | **待修复** (Open) |
| **高危** | [Issue #407](https://github.com/moltis-org/moltis/issues/407) | **网络代理/搜索启动即失败**。导致 Agent 无法联网搜索，变为“离线”模式。 | **待修复** (Open) |
| **中危** | [PR #450](https://github.com/moltis-org/moltis/pull/450) | **`web_fetch` 处理旧编码页面崩溃**。在处理中文/繁体网页时会引发 Panic，导致进程中断。 | **修复中** (Fix PR 已提交) |

### 6. 功能请求与路线图信号
*   **编码兼容性优化**：PR #450 的提交暗示了项目正在完善对全球多语言网页内容的抓取能力，这对于 RAG（检索增强生成）场景至关重要，预计将在下个版本中重点优化数据处理层的健壮性。
*   **搜索与代理稳定性**：Issue #407 和 #261 的活跃表明，社区对“开箱即用”的网络搜索功能和主流 LLM Provider 的连接稳定性有强需求，这可能是下一阶段维护的重点方向。

### 7. 用户反馈摘要
*   **痛点**：用户在配置 Github Copilot 作为后端模型时遇到阻碍，表现出对文档或默认配置容错率的失望。
*   **场景**：有用户尝试使用 `web_search` 进行实时信息检索，但在启动阶段即遭遇代理过滤器报错，导致功能完全不可用。
*   **贡献**：开发者 @koatora20 精准定位了 `web_fetch` 在处理旧版网页编码时的底层 Rust 字符切片越界问题，提供了高质量的代码修复。

### 8. 待处理积压
*   **[Issue #261](https://github.com/moltis-org/moltis/issues/261)**：该 Issue 创建于 2 月 28 日，至今仍未关闭，且今日仍有活跃评论。建议维护者优先响应，确认是认证问题还是接口变更导致的兼容性问题。
*   **[PR #450](https://github.com/moltis-org/moltis/pull/450)**：今日新开的修复 PR，目前处于 Open 状态。鉴于其解决了严重的数据抓取崩溃问题，建议维护者尽快 Review 并 Merge。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-19)

## 1. 今日速览
CoPaw 项目今日保持**高活跃度**，社区贡献激增，单日 Issues 更新达 50 条，PR 更新 50 条，共有 30 个 PR 被合并，显示了维护者极高的响应效率。项目发布了 **v0.1.0-beta.3** 版本，主要优化了控制台的多语言支持与文档导航。社区侧重点明显向**多模态（图片上传）**、**本地模型兼容性**及**Memory（记忆）模块**倾斜，多个相关 PR 已合并或待审核。

## 2. 版本发布
**新版本：v0.1.0-beta.3**
*   **更新重点**：
    *   **版本号升级**：由前序版本升级至 0.1.0b3。
    *   **国际化**：更新并优化了 Console 控制台的多语言支持。
    *   **文档体验**：优化了文档导航锚点功能。
*   **相关 Commit**：PR #1688, #1686
*   **链接**：[Release v0.1.0-beta.3](https://github.com/agentscope-ai/CoPaw/releases/tag/v0.1.0-beta.3)

## 3. 项目进展
今日共有 **30 个 PR 被合并**，主要集中修复阻碍用户使用的核心 Bug 并引入了期待已久的图像处理功能。

*   **🎉 重大功能合并 (Console & Multimodal)**：
    *   **PR #1772 [MERGED]**: 新增多模态消息支持（图片与文件上传），直接解决了社区长期呼吁的图片识别与文件处理痛点。
    *   **PR #711 [MERGED]**: 实现了基础的图片/文件上传功能，作为多模态支持的底层支撑。
*   **🐛 关键 Bug 修复**：
    *   **PR #1788 & #1784 [MERGED]**: 修复了 Chat 模型选择失效及 `create_local_chat_model` 导入错误，缓解了用户升级后无法调用本地模型（如 Ollama/llama.cpp）的严重问题 (关联 Issue #1782)。
    *   **PR #1557 [MERGED]**: 修复了 `reasoning_content` 注入时的计数不匹配问题，提升了推理模型的稳定性。
    *   **PR #1729 [MERGED]**: 升级 MiniMax 默认模型至 M2.7，保持模型供应商的最新兼容性。
*   **🔧 待合并**：
    *   **PR #1722**: 修复聊天会话导航时状态丢失问题，等待合并。

## 4. 社区热点
*   **🔥 本地模型调用崩溃 (Issue #1782)**
    *   **现象**：Mac Studio 用户升级最新版后，配置本地 llama.cpp 或 Ollama 模型时报错 `code 400`，导致本地模型完全不可用。
    *   **诉求**：用户极度依赖本地部署以保障隐私和成本，该问题严重影响使用体验。目前已有修复 PR (#1788) 合并，预计下个版本修复。
    *   **链接**：[Issue #1782](https://github.com/agentscope-ai/CoPaw/issues/1782)
*   **🔥 严重性能问题 (Issue #1385)**
    *   **现象**：Ubuntu 25.10 环境下，即使空闲状态 CPU 也会飙升至 100%，疑似 MCP (Model Context Protocol) 或 `read_file` 操作导致。
    *   **进展**：作者已定位部分原因并提交代码，但问题仍在跟踪中。
    *   **链接**：[Issue #1385](https://github.com/agentscope-ai/CoPaw/issues/1385)
*   **💡 贡献任务榜 (Issue #430)**
    *   作为 "Help Wanted" 的置顶帖，今日再次活跃，吸引了大量新贡献者认领任务。
    *   **链接**：[Issue #430](https://github.com/agentscope-ai/CoPaw/issues/430)

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **本地模型兼容性** 和 **Memory 功能**。

| 严重程度 | Issue | 描述 | 状态/修复 PR |
| :--- | :--- | :--- | :--- |
| **Critical** | [#1782](https://github.com/agentscope-ai/CoPaw/issues/1782) | 升级后无法调用本地 Ollama/llama.cpp 模型 | **Fixed** (PR #1788) |
| **High** | [#1385](https://github.com/agentscope-ai/CoPaw/issues/1385) | CPU 持续 100% 占用，风扇狂转 (Ubuntu) | Open (Investigating) |
| **High** | [#1736](https://github.com/agentscope-ai/CoPaw/issues/1736) | `MemoryManager` 未初始化导致记忆搜索失败 | Open (No Fix Yet) |
| **Medium** | [#1563](https://github.com/agentscope-ai/CoPaw/issues/1563) | `write_file` 写入大文件（>30KB）时内容被截断 | Open |
| **Medium** | [#1704](https://github.com/agentscope-ai/CoPaw/issues/1704) | Chat 页面模型选择下拉菜单 UI 被遮挡 | Open |

## 6. 功能请求与路线图信号
结合今日的 Issues 和 PRs，项目正在向以下方向演进：

1.  **多模态与视觉能力**：
    *   **需求**：Issue #1045, #675 强烈要求支持图片上传、剪贴板粘贴及多模态模型调用。
    *   **进展**：**PR #1772 已合并**，Console 端已支持图片和文件上传，表明 CoPaw 正式进入多模态交互时代。
2.  **本地 Embedding 与长期记忆**：
    *   **需求**：用户希望支持离线 Embedding 以保护隐私。
    *   **进展**：**PR #1789 (Open)** 提出了完整的本地 Embedding 支持（Qwen3-VL, BGE），目前处于待审核状态，这将是增强 Agent 记忆能力的关键一步。
3.  **安全性与鉴权**：
    *   **需求**：Issue #333, #492 强烈建议增加 Web UI 登录鉴权，防止公网部署风险。
    *   **现状**：目前仍停留在 Feature Request 阶段，尚无官方 PR 并入核心代码，建议维护者优先关注。

## 7. 用户反馈摘要
*   **痛点**：
    *   **本地模型配置繁琐**：新版更新后配置逻辑变动，导致大量用户（尤其是 Mac/Linux 用户）配置失效，报错信息不够直观。
    *   **资源占用高**：部分用户反馈 MCP 功能导致 CPU 占用异常，影响了在本地设备上的后台运行体验。
*   **满意点**：
    *   新增的 Console 多语言支持获得好评。
    *   图片上传功能的实现（PR #1772）解决了大量用户的刚需，提升了 Agent 的实用性。
*   **场景**：用户主要使用 CoPaw 进行本地文档处理、代码辅助及私有化模型部署，对隐私和本地计算能力要求极高。

## 8. 待处理积压
以下重要问题长期未彻底解决或需持续关注：

*   **Issue #1385 (CPU 100%)**：尽管已有定位，但作为影响性能的关键 Bug，仍需彻底的 Fix PR 合并。
*   **Issue #1563 (文件截断)**：`write_file` 截断问题涉及 Agent 操作文件的可靠性，对代码生成类任务影响较大，目前尚无修复进展。
*   **PR #1789 (本地 Embedding)**：这是一个高质量的功能 PR，建议维护者优先 Review，以完善 CoPaw 的 RAG 和记忆能力。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026-03-19 动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-03-19)

### 1. 今日速览
过去 24 小时，ZeptoClaw 项目保持了**较高的开发活跃度与架构演进速度**，主要集中在基础设施增强与生态集成上。虽然今日无新版本发布，但核心维护者与社区贡献者均在进行关键性的代码提交与讨论。技术层面出现了明显的**架构调整信号**，核心开发者 @taqtiqa-mark 提议引入 Rust 库 `rig` 并推进基于 Firecracker 的沙箱环境，显示出项目正寻求更高的性能与更强的隔离安全性。此外，项目新增了对 **Google Vertex AI** 的支持（PR #364），并修复了 ACP HTTP 协议层面的语义 Bug，整体处于功能扩张与质量修复并行的健康阶段。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
虽然今日无 PR 合并（2 个 PR 处于活跃待合并状态），但代码库的活跃度显示以下功能正在积极迭代：
*   **Google Vertex AI 集成即将就绪**：PR #364 目前处于 Open 状态但近期有更新，该 PR 在不引入新依赖的情况下，通过复用现有 Gemini 逻辑实现了对企业级 Vertex AI 的支持，显著提升了企业级用户部署的灵活性。
*   **开发环境标准化推进**：PR #287 旨在通过引入统一的 Dev Tools 解决不同开发者环境下的 Lint/Test 结果不一致问题，这将有助于提高代码贡献的质量门槛。

### 4. 社区热点
今日社区讨论焦点集中在架构定义与底层依赖库的选择上：
*   **🔥 热点讨论：关于 Coding Agent 框架的定位与隔离**
    *   **链接**：[Issue #387](https://github.com/qhkm/zeptoclaw/issues/387)
    *   **分析**：该 Issue 由核心贡献者发起，引发了 4 条深度评论。讨论核心在于如何处理 "Coding Agent"（如 copilot-cli 等）。提议倾向于不将其作为核心一部分，而是作为运行在 Firecracker VM 中的独立节点应用。这反映了项目组对**安全边界**和**功能膨胀**的严格控制倾向，意图构建一个轻量、安全的运行时环境。
*   **技术选型：评估 `rig` 库**
    *   **链接**：[Issue #389](https://github.com/qhkm/zeptoclaw/issues/389)
    *   **分析**：该议题提议使用 `0xPlaygrounds/rig` 作为底层工具库来维护通用代码。这表明项目正在审视当前的抽象层，可能正在酝酿一次中规模的代码重构以提升代码复用率。

### 5. Bug 与稳定性
今日报告了一个影响通信协议的关键 Bug，目前尚未有修复 PR 关联：
*   **🟠 中等风险：ACP HTTP 初始化与通知语义缺陷**
    *   **链接**：[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388)
    *   **详情**：Bug 源于 PR #356，主要存在两个问题：一是初始化状态被错误地作为全局标志存储，导致后续客户端可能跳过握手；二是 HTTP 通知错误地接收了响应体。
    *   **影响**：这可能导致多客户端环境下的握手逻辑混乱及会话管理异常。目前状态为 Open，需关注后续修复进度。

### 6. 功能请求与路线图信号
从今日的 Issues 和活跃 PRs 中，我们可以提取出明确的路线图信号：
1.  **企业级云服务支持**：PR #364 (Vertex AI) 表明项目正在积极拓展对主流云厂商 AI 服务的原生支持，这对企业用户是重大利好。
2.  **安全沙箱化运行**：Issue #387 关于 Firecracker VM 的讨论，暗示未来版本可能会将“安全隔离”作为核心卖点，特别是针对执行不可信代码或 Agent 的场景。
3.  **模块化与库重构**：Issue #389 预示着项目可能会在近期进行底层库的替换或重构，以降低维护成本。

### 7. 用户反馈摘要
从 Issue #387 的讨论中提炼出以下核心观点：
*   **安全优于功能**：维护者倾向于牺牲功能的集成便利性，以换取更小的攻击面和更清晰的架构边界。
*   **痛点**：当前的 Coding Agent 框架繁多且同质化严重，用户/开发者希望 ZeptoClaw 能作为一个中立的、安全的“节点”运行时，而不是再次造轮子。

### 8. 待处理积压
*   **需关注的长期 PR**：[PR #287 (Dev Tools)](https://github.com/qhkm/zeptoclaw/pull/287) 创建于 10 天前，虽今日有更新但仍未合并。作为提升开发体验的基础设施，建议维护者优先 Review 并合并，以统一后续的贡献标准。
*   **未修复的协议 Bug**：[Issue #388](https://github.com/qhkm/zeptoclaw/issues/388) 涉及核心通信逻辑，建议尽快排期修复，以免影响 HTTP Channel 的稳定性。

---

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-19)

**分析师注**：本日报基于 EasyClaw (GitHub: `gaoyangz77/easyclaw`) 2026-03-19 的数据生成。

---

### 1. 今日速览
EasyClaw 今日处于**高活跃度发布期**，项目一天内连续推出了 `v1.7.0` 和 `v1.7.1` 两个版本，显示出维护者正在快速迭代修复关键问题。尽管没有合并代码，但社区提交了 2 个高质量的待审 PR，主要集中在**国际化扩展**与**UI 架构重构**，预示着项目正准备面向更广泛的用户群。Issues 板块清零了 4 个存量问题，主要是关于新版本兼容性与文档的反馈，表明维护者正在积极响应用户在版本过渡期的痛点。总体而言，项目处于**快速上升期**，但需关注 Windows 平台的稳定性反馈。

### 2. 版本发布
今日项目连续发布了两个重要更新，重点在于解决平台兼容性：

*   **[v1.7.1] RivonClaw v1.7.1** ([Release Link](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.1))
*   **[v1.7.0] RivonClaw v1.7.0** ([Release Link](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0))

**更新重点与破坏性变更：**
*   **macOS 兼容性修复**：两个版本的发布日志均置顶了针对 macOS Gatekeeper 安全机制的说明。由于应用未签名，用户升级后极大概率会遇到 **"'RivonClaw' is damaged and can't be opened"** 错误。
*   **解决方案**：维护者提供了终端(Terminal)命令行修复方案，要求用户手动移除隔离属性。这属于非技术性的破坏性变更，急需在文档或安装引导中强化说明。

### 3. 项目进展
今日无已合并的 PR，但有 2 个重量级 PR 处于 **Open** 状态，正在等待 Review：

*   **[PR #21] feat(i18n): add 5 new languages** ([Link](https://github.com/gaoyangz77/rivonclaw/pull/21))
    *   **贡献者**: @chinayin
    *   **进展**: 新增 5 种语言支持（繁体中文、日语、韩语、越南语、印地语），包含 1333 个翻译键值对。此举将大幅降低东亚及东南亚用户的准入门槛。
*   **[PR #20] UI Migration: Component Refactor + Theme Separation** ([Link](https://github.com/gaoyangz77/rivonclaw/pull/20))
    *   **贡献者**: @chinayin
    *   **进展**: 一次深度重构。提取了 `BottomActions` 组件，统一了 Icon 管理，并引入了 Skills 页面。这标志着项目正在从前期的功能堆叠转向代码质量优化与模块化设计。

### 4. 社区热点
今日讨论最密集的问题均已关闭，反映了用户对 v1.7.x 版本升级的强烈关注：

1.  **[Issue #18] Windows系统升级后连接失败** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/18))
    *   **热度**: 5 条评论
    *   **分析**: 用户从 1.6.8 升级至 1.7.0 后无法建立连接。这是今日最受关注的问题，可能涉及底层连接逻辑的变更或配置文件迁移的兼容性。
2.  **[Issue #12] 社群交流需求** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/12))
    *   **热度**: 3 条评论
    *   **分析**: 用户高度认可项目架构，自发呼吁建立技术交流群。这表明项目已经积累了一批高粘性的核心开发者或高级用户。

### 5. Bug 与稳定性
今日报告的 Bug 集中在 **Windows 平台的连接性**，且均为**严重**级别，目前状态均为已关闭（推测已在 v1.7.1 中修复或提供了临时方案）：

*   **🔴 严重 - 连接失效**:
    *   **[Issue #19] Win11 卡在"连接中"** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/19)): 即使重配 API 也无法恢复，属于阻断性 Bug。
    *   **[Issue #18] 跨版本升级连接失败** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/18)): 涉及从 1.6.8 到 1.7.0 的迁移问题。
*   **分析**: 虽然这两个 Issue 已关闭，但建议维护者确认是代码修复还是操作指引解决。考虑到 v1.7.0 和 v1.7.1 同日发布，大概率是 v1.7.0 引入了回归问题，随后由 v1.7.1 修复。

### 6. 功能请求与路线图信号
*   **[Issue #17] Windows 版本打包教程** ([Link](https://github.com/gaoyangz77/rivonclaw/issues/17))
    *   **诉求**: 用户希望获得本地构建和打包 Windows 版本的详细指南。
    *   **信号**: 结合 PR #20 的 UI 重构，项目正吸引希望参与二次开发的开发者。若合并 PR #21 的多语言支持，下一版本 (v1.7.2 或 v1.8.0) 的路线图将明确包含**国际化**与**开发者文档完善**。

### 7. 用户反馈摘要
*   **痛点**: Windows 用户在 v1.7.0 升级后遭遇严重的连接稳定性问题（"卡在连接中"），即使是全新安装或重置 API 也无效。
*   **认可度**: 项目架构被资深用户评价为"符合预期"，显示出技术选型上的成功。
*   **门槛**: macOS 的签名问题仍是主要阻碍，非技术用户可能难以自行通过终端命令解决。

### 8. 待处理积压
目前有 2 个高价值 PR 处于待定状态，建议维护者优先处理：

1.  **[PR #21 - Open]** 新增多语言支持：代码量大，影响范围广，是拓展国际用户的关键。
2.  **[PR #20 - Open]** UI 重构：涉及底层组件变更，需仔细测试其对现有功能（特别是 Skills 页面）的影响。

---
*数据来源: GitHub EasyClaw Repo | 分析时间: 2026-03-19*

</details>