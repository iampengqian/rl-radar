# OpenClaw 生态日报 2026-04-11

> Issues: 500 | PRs: 500 | 覆盖项目: 11 个 | 生成时间: 2026-04-10 22:07 UTC

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

# OpenClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
OpenClaw 在过去 24 小时内维持了极高的社区活跃度，Issues 和 PR 更新数双双达到 500 条。新开与活跃 Issue 共 395 条，关闭 105 条；待合并 PR 311 个，合并/关闭 189 个。整体来看，社区正围绕 **GPT-5.4 / Codex 运行时对等（Parity）**、**模型感知的 AGENTS 引导**和**多通道媒体传输稳定性**三大主线推进。Bug 修复节奏稳定，但部分长期回归（WhatsApp 媒体发送、Codex 工具不执行、Matrix 消息接收）仍未完全收敛，值得持续关注。

---

## 2. 版本发布
今日无新版本发布。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，按影响范围排序：

| PR | 标签 | 关键进展 |
|---|---|---|
| [#64241](https://github.com/openclaw/openclaw/pull/64241) `agents: strict-agentic execution contract` | agents, size: L | 为嵌入式 Pi Agent 引入 opt-in `strict-agentic` 执行契约，修订 `update_plan` 语义，是 GPT-5.4 Parity Program 的第一块拼图 |
| [#64477](https://github.com/openclaw/openclaw/pull/64477) `docs: IBM Z / s390x install guide` | docs, size: XS | 补充 IBM Z / s390x (LinuxONE) 安装指南，解决 LanceDB EBADPLATFORM 兼容问题 |
| [#64511](https://github.com/openclaw/openclaw/pull/64511) `fix: lightweight status RPC for doctor Phase A` | commands, size: XS | 将 `openclaw doctor` 启动健康检查从 3000ms 硬编码改为轻量 RPC，修复高负载时误触发重启 |

**仍在进行中的大型 PR（今日活跃更新）：**

| PR | 标签 | 状态 |
|---|---|---|
| [#64504](https://github.com/openclaw/openclaw/pull/64504) `feat(agents): model-aware AGENTS bootstrap` | size: XL | 模型感知 AGENTS/SUBAGENTS 选择的全量集成 PR，今日创建 |
| [#64439](https://github.com/openclaw/openclaw/pull/64439) `openai-codex: classify runtime failures` | size: L | 合并原 Contract 1 (auth/runtime) + Contract 4 (permission)，使 OpenClaw 对 Codex 能力"讲真话" |
| [#64392](https://github.com/openclaw/openclaw/pull/64392) `feat(octo): coordinate multiple AI coding tools` | size: XL | "Octo"统一多 AI 编码工具协作，feature-flag 隔离，0 上游行为变更，今日创建 |
| [#64300](https://github.com/openclaw/openclaw/pull/64300) `agents: OpenAI/Codex tool compat + replay/liveness` | size: L | 合并原 Contract 2+5，解决长时间嵌入式运行静默消失问题 |
| [#64104](https://github.com/openclaw/openclaw/pull/64104) `feat(ui): render assistant directives + embed tag` | size: XL | Control UI 渲染助手指令，将 `MEDIA:` / `[[audio_as_voice]]` 等内部指令转为结构化元数据 |
| [#53248](https://github.com/openclaw/openclaw/pull/53248) `feat: LM Studio Integration` | size: XL | 本地模型集成，持续迭代中 |
| [#64505](https://github.com/openclaw/openclaw/pull/64505) `Dreaming: surface memory wiki imports` | size: XL | 将 Dreaming 日记变为首个可用 memory-wiki 可观测界面 |

**小结：** 项目在 GPT-5.4/Codex 对等、模型感知引导、记忆系统可视化三个方向上有明确推进，核心架构变更以 feature-flag 控制，风险管理良好。

---

## 4. 社区热点

### 🔥 讨论最热烈

1. **[#49971](https://github.com/openclaw/openclaw/issues/49971) RFC: Native Agent Identity & Trust Verification** — 79 条评论
   - 由 MolTrust (CryptoKRI GmbH) 提出的 W3C DID / VC 原生 Agent 身份与信任验证提案，关联 ERC-8004。社区对去中心化 Agent 身份的需求和实现路径讨论极为深入。

2. **[#4686](https://github.com/openclaw/openclaw/issues/4686) WhatsApp linking stuck at "logging in"** — 21 评论, 👍 20
   - WhatsApp 设备关联首次成功后无法重新链接任何号码，长期未完全解决。用户共鸣极高（20 👍）。

3. **[#7200](https://github.com/openclaw/openclaw/issues/7200) Feature: Real-time Voice Conversation** — 17 评论, 👍 18
   - 呼声极高的双向实时语音对话请求，集成 Twilio/WebRTC，18 个赞反映强烈需求。

### 📣 今日新增热点

4. **[#64227](https://github.com/openclaw/openclaw/issues/64227) GPT-5.4 / Codex Agentic Runtime Parity Tracker** — 11 评论
   - 官方 Parity Program 总 Tracker，定义 6 契约执行模型，今天密集讨论。

5. **[#64046](https://github.com/openclaw/openclaw/issues/64046) 希望支持敏感数据脱敏** — 6 评论
   - 用户指出 openclaw.json、日志、UI 中 API Key / Token 均为明文，存在安全隐患，引发广泛共鸣。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug / Regression：

| 严重度 | Issue | 概要 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#53959](https://github.com/openclaw/openclaw/issues/53959) Codex/gpt-5.3-codex 不执行任何工具 | 更新到 2026.3.23-2 后所有工具调用静默失败，回归 | [#64439](https://github.com/openclaw/openclaw/pull/64439) 进行中 |
| 🔴 **高** | [#61726](https://github.com/openclaw/openclaw/issues/61726) WhatsApp 发送媒体假成功，仅文字送达 | 2026.4.5 回归，媒体附件被丢弃 | 已关闭，相关 [#62214](https://github.com/openclaw/openclaw/issues/62214) 仍在调查 |
| 🔴 **高** | [#61773](https://github.com/openclaw/openclaw/issues/61773) Matrix 连接正常但不收消息 | Matrix 通道同步 HTTP 200 但消息全部丢失 | 无 |
| 🟠 **中** | [#54844](https://github.com/openclaw/openclaw/issues/54844) gpt-5-mini 作为主模型返回 400 | github-copilot/gpt-5-mini 2026.3.24 回归 | 无 |
| 🟠 **中** | [#60390](https://github.com/openclaw/openclaw/issues/60390) LosslessClaw 压缩失败 | 共享插件 auth 处理破坏了摘要器请求 | 无 |
| 🟠 **中** | [#63510](https://github.com/openclaw/openclaw/issues/63510) completion 缓存生成崩溃 | 2026.4.9 `openclaw completion --write-state` 因缺文件崩溃 | 无，👍 9 |
| 🟠 **中** | [#60994](https://github.com/openclaw/openclaw/issues/60994) 无法连接远程 Ollama/LM Studio | 通过 LAN IP 连接不稳定 | [#53248](https://github.com/openclaw/openclaw/pull/53248) 相关 |
| 🟡 **低** | [#64049](https://github.com/openclaw/openclaw/issues/64049) 子系统日志午夜后写错文件 | 日志轮换后缓存了旧的文件句柄 | 无 |
| 🟡 **低** | [#17101](https://github.com/openclaw/openclaw/issues/17101) Telegram 语音消息未转写 | .ogg Opus 文件被当作原始附件处理 | [#63278](https://github.com/openclaw/openclaw/pull/63278) 诊断日志已提交 |

**稳定性评估：** 多通道媒体传输（WhatsApp、Matrix、Telegram 语音）和 Codex 模型工具调用仍是当前最集中的不稳定点。Codex 相关回归有明确的 Parity PR 覆盖，预计近期改善。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 落地信号 |
|---|---|---|
| [#7200](https://github.com/openclaw/openclaw/issues/7200) 实时语音对话 | Twilio/WebRTC 双向流式音频 | 有 voice-call 插件，[#10356](https://github.com/openclaw/openclaw/pull/10356) TTS Typecast 扩展进行中 |
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent 身份与信任验证 | W3C DID / VC 原生集成 | 相关 [#33106](https://github.com/openclaw/openclaw/issues/33106) TrustChain、[#63430](https://github.com/openclaw/openclaw/issues/63430) PAP 协议，尚处 RFC 阶段 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) 敏感数据脱敏 | 配置文件、日志、UI 中 API Key 脱敏 | 无对应 PR，属于安全基线需求，建议优先排期 |
| [#64227](https://github.com/openclaw/openclaw/issues/64227) GPT-5.4/Codex Parity | 6 契约全面对等 | 多个 PR 已创建（[#64504](https://github.com/openclaw/openclaw/pull/64504)、[#64439](https://github.com/openclaw/openclaw/pull/64439)、[#64300](https://github.com/openclaw/openclaw/pull/64300)、[#64264](https://github.com/openclaw/openclaw/pull/64264) 等），下一版本核心目标 |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) image 工具支持自定义 Provider | 已配置的自定义模型可用于图像分析 | 无对应 PR |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的核心痛点：

1. **多通道媒体传输不稳定（WhatsApp / Matrix / Telegram 语音）**：用户反复反馈"看起来成功了但收不到"的体验，这是当前最大的用户信任杀手。
2. **Codex / GPT-5.4 模型"可用不可用"**：配置中出现但运行时 404 或工具不执行，造成用户困惑和调试浪费。
3. **安全基线不足**：明文存储密钥、日志不脱敏、UI 暴露敏感信息，企业用户对此有明确担忧。
4. **本地模型连接困难**：Ollama / LM Studio 集成门槛高，[#53248](https://github.com/openclaw/openclaw/pull/53248) 正在改善。
5. **SSRF 防护过于激进**：Clash Verge TUN fake-ip 用户无法使用 Discord CDN 图片（[#33086](https://github.com/openclaw/openclaw/issues/33086)），[#55176](https://github.com/openclaw/openclaw/pull/55176) 正在修复。
6. **超时配置不灵活**：LLM 请求 60 秒硬超时（[#62278](https://github.com/openclaw/openclaw/issues/62278)）、`sessions_spawn` 10 秒硬超时（[#29186](https://github.com/openclaw/openclaw/issues/29186)）对复杂任务不友好。

---

## 8. 待处理积压

以下为长期未完全解决、需维护者优先关注的重要 Issue：

| Issue | 天数 | 关注点 |
|---|---|---|
| [#4686](https://github.com/openclaw/openclaw/issues/4686) WhatsApp 重新关联卡死 | ~71 天 | 👍 20，高优先级用户痛点 |
| [#7200](https://github.com/openclaw/openclaw/issues/7200) 实时语音对话请求 | ~68 天 | 👍 18，核心差异化功能 |
| [#12590](https://github.com/openclaw/openclaw/issues/12590) memoryFlush 不可靠触发 | ~61 天 | 记忆系统核心 Bug |
| [#5116](https://github.com/openclaw/openclaw/issues/5116) iMessage FDA 不传播 | ~70 天 | macOS 用户无法使用 iMessage 通道 |
| [#27984](https://github.com/openclaw/openclaw/issues/27984) Telegram 5-20MB 文件静默死锁 | ~44 天 | 整个聊天被锁死 |
| [#26691](https://github.com/openclaw/openclaw/issues/26691) Nextcloud Talk 无法读取消息 | ~45 天 | 插件形同虚设 |
| [#33086](https://github.com/openclaw/openclaw/issues/33086) SSRF 阻断 Discord CDN | ~39 天 | 代理用户全面受影响 |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) GPT-5.4 配置可加但运行时报错 | ~36 天 | 属于 Parity Program 范畴 |

**建议：** 维护团队优先推进 GPT-5.4 Parity Program 已启动的 PR 链，同时为 WhatsApp 重关联和 Telegram 文件死锁分配专项修复资源。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 4 月 11 日的主流开源项目动态，为您生成如下横向对比与技术趋势分析报告：

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多端协同与多智能体编排”跃迁**的关键阶段。**以 OpenClaw 为首的超级社区正在确立底层运行时契约（如 GPT-5.4/Codex Parity）的行业事实标准**，而挑战者们则通过差异化定位（如主打 Windows 原生体验的 NanoBot、主打安全容器化的 NanoClaw、主打全平台极客部署的 CoPaw）在不同细分赛道疯狂生长。**多通道通讯能力的媒体传输稳定性（如 WhatsApp/微信）**、**本地/开源模型的接入体验**，以及**企业级安全隔离（Hook/多租户/数据脱敏）** 成为各家攻克的核心痛点。

### 2. 各项目活跃度对比（2026-04-11 数据）

| 项目名称 | Issue 活跃数 | PR 活跃数 | 版本发布情况 | 健康度与节奏评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **395** 开/活<br>105 关 | **311** 待合<br>189 合/关 | 无 (主干迭代) | 🟢 **极高**：巨头级体量，核心架构更新靠 Feature Flag 保护，风险管控极佳。 |
| **IronClaw** | 36 开/活<br>3 关 | 21 待合<br>29 合/关 | 无 (V2密集测试) | 🟡 **中高**：V2 引擎重构期，QA 压测导致单日涌入大量严重 Bug，处于浴火重生的阵痛期。 |
| **CoPaw** | 23 开/活<br>12 关 | 14 待合<br>36 合/关 | 无 (v1.0.2后) | 🟢 **高**：社区飞轮高速转动，PR 井喷，跨端适配和多渠道进展神速。 |
| **NanoBot** | 17 开/活<br>12 关 | 34 待合<br>18 合/关 | 无 (积攒 0.1.6) | 🟢 **高**：0.1.5 版本 Bug 修复极快，社区响应敏捷，WebUI 基础设施顺利落地。 |
| **PicoClaw** | 14 开/活<br>2 关 | 12 待合<br>17 合/关 | `v0.2.6-nightly` | 🟡 **中**：处于 v0.2.6 的密集修 Bug 阶段，底层重构与前端展示问题正在收敛。 |
| **Moltis** | 5 开/活<br>6 关 | 5 待合<br>13 合/关 | `20260410.01` | 🟢 **高**：极度敏捷，当日暴露的核心 Hook 执行链路 Bug 当日即修复并发版。 |
| **LobsterAI** | 8 开<br>0 关 | 9 待合<br>11 合/关 | 无 | 🟡 **中**：底层引擎切换导致严重的 P0 网关启动故障，亟待新版本修复发布。 |
| **NanoClaw** | 6 活跃 | 11 待合<br>7 合/关 | 无 | 🟢 **高**：聚焦底层架构重构，代码质量高，向混合宿主环境演进。 |
| **TinyClaw** | **0** | 1 待合<br>0 合/关 | 无 | ⚪ **低**：处于维护期的静水流深阶段，仅进行底层配置健壮性优化。 |
| *ZeptoClaw / EasyClaw*| 0 | 0 | 无 | ⚪ **停滞**：过去 24 小时无任何活动。 |

### 3. OpenClaw 在生态中的定位
* **绝对的生态核心与“契约制定者”**：OpenClaw 的 Issue 和 PR 吞吐量是第二梯队的数倍乃至十倍以上。其在今日主导的 **GPT-5.4 / Codex Parity Program（六大契约执行模型）** 实际上在为整个 AI Agent 运行时环境制定边界规范。LobsterAI 等项目甚至将其作为底层引擎依赖，足见其底层基石地位。
* **技术路线差异**：不同于竞品大多侧重于某一种特定交互界面或单一群体，OpenClaw 采取了“全通路 + 深度模型感知”的技术路线，其引入 `strict-agentic` 执行契约和对 Pi Agent 的支持，显示出其在 IoT 与端侧智能的前瞻布局。
* **社区规模对比**：犹如生态中的“罗马”，汇聚了各种语言和诉求的开发者。其单日产生的架构级 RFC（如 W3C DID 原生 Agent 身份验证）具备极高的行业引领性，这是其他体量项目目前难以企及的。

### 4. 共同关注的技术方向（跨项目共性需求）
1. **多模态与多通道传输的稳定性（全生态痛点）**
   * 涉及项目：**OpenClaw, PicoClaw, CoPaw, Moltis**。
   * 诉求：Telegram/微信/QQ/飞书/Discord 的媒体传输极其脆弱，常见“静默丢弃”、“吞图”、“死锁”。Moltis 和 CoPaw 正在大力修复通道适配，OpenClaw 仍有历史遗留媒体传输积压。
2. **本地/开源模型接入体验与成本优化**
   * 涉及项目：**OpenClaw, NanoBot, PicoClaw, LobsterAI, CoPaw**。
   * 诉求：Ollama / LM Studio 的连接断开、跨平台兼容（Windows 适配是重灾区）以及 Token 上下文压缩机制（Moltis 和 NanoBot 均在研发基于 Embedding 的自动压缩）。
3. **Agent 运行时的安全隔离与生命周期管理**
   * 涉及项目：**IronClaw, NanoClaw, Moltis, OpenClaw**。
   * 诉求：包括 NanoClaw 的 Docker 挂载安全防穿透、Moltis 对 Hook 链路的精细化管理、OpenClaw 对敏感数据的脱敏诉求，以及 IronClaw 对多并发线程的状态隔离。
4. **前端可视化界面 的普及化**
   * 涉及项目：**NanoBot, PicoClaw, IronClaw**。
   * 诉求：纯 CLI 或简单 WebUI 已无法满足用户，Agent 的内部思考过程（如 `<thought>` 标签）需与输出解耦，长耗时任务需要流式工具调用进度反馈。

### 5. 差异化定位分析
* **NanoBot vs PicoClaw**（轻量级之争）：NanoBot 凭借 Windows 原生支持与纯 Python 架构，在极客与 Windows 用户群中好评率极高；PicoClaw 则凭借硬件厂商（Sipeed）的背景，在边缘设备/嵌入式侧有天然优势，更关注 Nightly 构建和底层架构裁剪。
* **IronClaw vs CoPaw**（复杂编排之争）：IronClaw 正在强力推行 V2 引擎的沙箱机制与“7概念缩并为3”的架构重构，志在成为**统筹其他 AI Agent（如 Codex）的超级大脑**；CoPaw 则依靠国内庞大的微信/QQ生态，聚焦于自动化办公和多智能体自进化协作，开源社区拉动力极强。
* **NanoClaw vs Moltis**（企业级演进之争）：NanoClaw 坚持“容器隔离”，正探索打破容器边界支持宿主机原生混编；Moltis 则强调 Hook 系统的灵活性，正在成为允许开发者高度自定义审计与拦截逻辑的“胶水平台”。

### 6. 社区热度与成熟度
* **高速迭代期（前沿探索）**：**IronClaw** 和 **CoPaw**。PR 与 Issue 双高，且伴随大量基础性重构和核心 Bug 暴露。适合愿意容忍不稳定性、追求最新架构理念的开发者。
* **功能繁荣期（规模扩张）**：**OpenClaw** 和 **NanoBot**。社区飞轮高速运转，PR 积压较多但主线清晰，正在快速吞噬各类边缘需求。NanoBot 正在赢得更多竞品流失的用户。
* **质量巩固期（稳定打磨）**：**PicoClaw, Moltis, LobsterAI, NanoClaw**。主线功能基本闭环，当前主要在进行修 Bug、包体积瘦身和体验优化。其中 Moltis 修复速度极快，LobsterAI 正在经历底层网关切换的阵痛。

### 7. 值得关注的趋势信号（开发者参考）
1. **Agent 自我纠错机制成为刚需**：IronClaw 暴露出的“Agent 陷入死循环盲目重试高达 50 次”表明，未来的 Agent 框架必须内建基于工具失败状态的“终止/反思”机制，而非单纯依赖大模型自身的判断。
2. **“可观测性”定义下一代 WebUI**：单纯的聊天气泡 UI 已经过时。OpenClaw 将内部指令转为结构化元数据、PicoClaw 分离 `<thought>` 标签、IronClaw 要求工具调用实时流式推送，均表明未来的 Agent UI 必须具备**对 Agent 思考过程和工具执行进度的强透视能力**。
3. **上下文压缩成为核心护城河**：随着模型上下文窗口的常态化放大，如何自动管理、摘要、检索历史记忆成为硬骨头。NanoBot 和 Moltis 均在此重兵投入，基于 Embedding 的轻量级记忆 Wiki 将成为个人 AI 助手的标配。
4. **去中心化身份与合规把控**：OpenClaw 社区对原生 W3C DID 身份验证的呼声，以及 Moltis 社区要求在 Hook 中注入通道元数据以构建合规审计的诉求，标志着开源 AI Agent 正在为步入严肃的企业级商用和金融级自动化做准备。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报 (2026-04-11)

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

---

## 1. 今日速览

过去 24 小时，NanoBot 项目保持了**高度活跃**的社区生态与高水平的迭代节奏。共产生 **29 条 Issue 更新**（17 新开/活跃，12 关闭）与 **52 条 PR 更新**（34 待合并，18 合并/关闭）。项目目前无新版本发布，但从 PR 动态来看，核心团队和社区贡献者正密集针对 **0.1.5 版本的稳定性**（如 git 冲突、MCP 连接、Think 标签截断）进行修复，同时积极探索**自动上下文压缩**、**WebUI** 等高价值路线图特性。整体来看，社区反馈极其热烈，代码合入及时，项目处于**良性高速发展期**。

---

## 2. 版本发布

**无新版本发布。** 项目最新版本仍停留在 `0.1.5`。大量针对 0.1.5 回归问题的修复 PR 正在攒积，预计近期会发布 0.1.6 稳定性修复版本。

---

## 3. 项目进展

今日共有 18 个 PR 被合并或关闭，同时有大量高价值 PR 正在等待 Review。以下是核心进展：

- **🚀 WebUI 基础设施落地**：[#2911](https://github.com/HKUDS/nanobot/pull/2911) 和 [#2946](https://github.com/HKUDS/nanobot/pull/2946) 已合并，正式引入了 WebSocket 调试通道及服务器端基础支持，为未来的 Web 交互界面打下地基。
- **💬 会话中模型切换**：[#2975](https://github.com/HKUDS/nanobot/issues/2975) 已随相关实现关闭，用户现在可以在对话中通过 `/model` 命令无缝切换 LLM。
- **🔒 安全性增强**：[#2831](https://github.com/HKUDS/nanobot/pull/2831) 合并，修复了 `exec` 工具将宿主机进程环境变量（可能包含 API Key）泄露给 LLM 的严重安全隐患。
- **⚡ 中途消息注入**：[#2985](https://github.com/HKUDS/nanobot/pull/2985) 合并，允许用户在 Agent 执行长耗时任务期间插话，极大改善了交互响应体验。
- **🛠️ 自定义 Provider 扩展**：[#3022](https://github.com/HKUDS/nanobot/pull/3022) 经迭代后以 [#3023](https://github.com/HKUDS/nanobot/pull/3023) 重新开启，旨在解除配置文件对 Provider 名称的硬编码限制。

---

## 4. 社区热点

- **🔥 WebUI 之争**：[#2949](https://github.com/HKUDS/nanobot/issues/2949)（👍 6，评论 9）成为今日焦点。社区对 NanoBot 是否需要官方 WebUI 展开激烈讨论。背景是目前仅有 CLI 和频道接入方式，用户对可视化配置和调试面板的诉求非常强烈。
- **🤖 自动技能发现**：[#2927](https://github.com/HKUDS/nanobot/issues/2927)（评论 6）提出让 Agent 基于行为模式自动生成技能的想法，触及了当前 Agent 被动调用工具的痛点，是长期架构演进的重要信号。
- **🥊 对比竞品 OpenClaw 体验**：[#2774](https://github.com/HKUDS/nanobot/issues/2774)（👍 1）和 [#1265](https://github.com/HKUDS/nanobot/issues/1265) 中，多位用户给出了在 Windows 环境下的真实对比测评，盛赞 NanoBot 在稳定性、部署门槛（无需 WSL）上的绝对优势。

---

## 5. Bug 与稳定性

今日报告了多个影响使用的 Bug，部分已有社区快速响应的修复 PR：

1. **[P0 严重] 嵌套 Git 仓库破坏工作区**：升级 0.1.5 后，`GitStore` 错误地在 `workspace/` 下初始化并覆盖了用户的 `.gitignore`。（Issue [#2980](https://github.com/HKUDS/nanobot/issues/2980) -> **Fix PR**: [#3009](https://github.com/HKUDS/nanobot/pull/3009), [#2988](https://github.com/HKUDS/nanobot/pull/2988) 将 git 目录移至 `.nanobot/git/`，甚至有 PR [#3015](https://github.com/HKUDS/nanobot/pull/3015) 提议用 SQLite 彻底替换 Git 后端）
2. **[P1 高] 升级 0.1.5 后 Python 环境失效**：用户广泛反馈找不到 Python 致技能执行失败。（Issue [#2917](https://github.com/HKUDS/nanobot/issues/2917)，已关闭，推测已定位修复）
3. **[P1 高] MCP 多服务器连接崩溃**：同时配置 `streamableHttp` 和 `Stdio` 的 MCP 服务器会触发 `cancel scope` 报错。（Issue [#3018](https://github.com/HKUDS/nanobot/issues/3018) -> **Fix PR**: [#3019](https://github.com/HKUDS/nanobot/pull/3019) 通过 `asyncio.Task` 隔离连接作用域）
4. **[P2 中] Gemma 4 思考链泄露**：`<thought>` 标签未被正确过滤。（Issue [#2944](https://github.com/HKUDS/nanobot/issues/2944)，已关闭）
5. **[P2 中] 正则误判导致消息截断**：正则匹配 `Հminute` 标签时未加锚点，误杀正常文本。（Issue [#3004](https://github.com/HKUDS/nanobot/issues/3004) -> **Fix PR**: [#3020](https://github.com/HKUDS/nanobot/pull/3020)）
6. **[P2 中] `/stop` 命令导致上下文丢失**：终止 Agent 运行会丢失当轮有用的上下文。（Issue [#2966](https://github.com/HKUDS/nanobot/issues/2966)，提交者已认领修复）
7. **[P3 低] 企微/钉钉图片解析异常**：企业微信发送图片失败（[#2999](https://github.com/HKUDS/nanobot/issues/2999)，已关闭）；钉钉图片后缀丢失（[#3016](https://github.com/HKUDS/nanobot/pull/3016)）。

---

## 6. 功能请求与路线图信号

今日涌现了多个高价值的功能请求，暴露了项目向企业级和智能化发展的趋势：

- **上下文智能压缩**：[#2937](https://github.com/HKUDS/nanobot/issues/2937) 提出基于 Embedding 的上下文压缩与检索流水线，结合今日开启的自动压缩 PR [#3007](https://github.com/HKUDS/nanobot/pull/3007)，**极大概率在下一版本落地**。
- **WhatsApp 隐私隔离**：[#2836](https://github.com/HKUDS/nanobot/issues/2836) 提出按 `chat_id` 隔离工作区的需求，这是多用户企业级部署的核心要求。
- **智能并发控制**：[#3008](https://github.com/HKUDS/nanobot/issues/3008) 建议将硬编码的并发上限改为动态配置，优化高并发下的资源消耗。
- **OpenClaw Ideas 自动爬取**：近日出现多个标签为 `[From OpenClaw]` 的 Issue（如 [#2998](https://github.com/HKUDS/nanobot/issues/2998)），显示社区正在用 AI 自动化方式从竞品挖掘灵感。

---

## 7. 用户反馈摘要

从近期评论及讨论中，可以提取出以下真实的用户声音：
- **✅ 满意点**：在 Windows 环境下的部署体验和运行稳定性被广泛点赞，被认为“完爆竞品 OpenClaw”；Python 代码库清晰易读。
- **❌ 痛点**：
  - **0.1.5 升级坑较多**：大量用户反馈升级后遇到 Python 找不到、Git 机制破坏原有代码库的问题。
  - **多通道适配参差不齐**：飞书、企微、QQ 等通道对复杂消息（如图片）和自然语言 fallback 的处理仍不够健壮（[#2977](https://github.com/HKUDS/nanobot/issues/2977)）。
  - **API 额度提示缺失**：API Key 欠费时无明确报错，导致静默失败，调试困难（[#3006](https://github.com/HKUDS/nanobot/issues/3006)）。

---

## 8. 待处理积压

以下重要 PR 已开启但尚未合入，建议维护者重点关注：

- **核心架构改动**：[#2475](https://github.com/HKUDS/nanobot/pull/2475)（为 exec 工具引入细粒度的权限控制）和 [#2867](https://github.com/HKUDS/nanobot/pull/2867)（Telegram 群组白名单等）等待多日，需要 Review 推进。
- **新通道支持**：NapCat QQ 通道支持 [#2379](https://github.com/HKUDS/nanobot/pull/2379) 已开启超过两周，QQ 生态需求旺盛，建议尽快评估合入。
- **全球化推进**：印尼社区开发者主动提请支持印尼语文档（[#2990](https://github.com/HKUDS/nanobot/issues/2990)），展现了良好的国际化势头，建议项目组建立多语言文档指引。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 PicoClaw 项目 2026-04-11 动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
PicoClaw 在过去 24 小时内保持了**高度活跃**的开发与迭代状态，共产生 16 条 Issue 更新（14 新开/活跃，2 关闭）和 29 条 PR 更新（12 待合并，17 已合并/关闭）。项目于昨日（4月10日）正常推送了 `v0.2.6-nightly.20260410` 每日构建版本，当前核心开发重心明显集中于 **v0.2.6 版本的稳定性修复**（特别是 WebUI 展示逻辑、WebSocket 连接和定时任务模块）以及**底层架构的重构与加固**。社区方面，关于多平台渠道接入的诉求（特别是 Discord 官方运营和 SMTP 邮件渠道）和现有配置机制的困惑成为焦点。

## 2. 版本发布
- **[nightly] Nightly Build v0.2.6-nightly.20260410.d9977715**
  - **性质**：每日自动构建版本。
  - **注意事项**：官方提示可能存在不稳定性，建议谨慎用于生产环境。
  - **比对变更**：[v0.2.6...main Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. 项目进展
今日共有 17 个 PR 被合并或关闭，项目在 WebUI 交互、协议兼容性和依赖管理上取得了实质性进展：
- **WebUI 显示逻辑修复**：PR [#2449](https://github.com/sipeed/picoclaw/pull/2449) 解决了 Web 聊天界面中工具调用摘要和助手文本无法同步显示的问题。
- **MCP 工具调用修复**：PR [#2460](https://github.com/sipeed/picoclaw/pull/2460) 修复了 MCP 协议中传递空参数报错的问题，提升了对官方 TypeScript SDK 的兼容性。
- **前端依赖与认证修复**：合并了修复 React 版本不对齐导致崩溃的 PR [#2467](https://github.com/sipeed/picoclaw/pull/2467)，以及优化了不支持平台下降级到 Token 认证的 PR [#2466](https://github.com/sipeed/picoclaw/pull/2466)。
- **依赖更新**：将 `modelcontextprotocol/go-sdk` 升级至 1.5.0 ([#2455](https://github.com/sipeed/picoclaw/pull/2455))。
- **架构重构进行中**：备受瞩目的 PR [#2313](Multi-User Support & Agent Shield) 和 [#2475](原生 Gemini provider 与思想链分离) 正在积极更新推进中。

## 4. 社区热点
- **Discord 社区运营与文档跟进缺失** ([#2433](https://github.com/sipeed/picoclaw/issues/2433))：用户反映官方 Discord 群组缺乏官方人员维护，且重大更新说明滞后。表明随着项目热度上升，国际社区的运营和多语言文档同步面临挑战。
- **Signal 频道集成呼声高涨** ([#41](https://github.com/sipeed/picoclaw/issues/41))：该请求已获 7 个 👍，讨论活跃。用户强烈希望将 Signal（主打端到端加密）作为除 Telegram/WhatsApp 外的新渠道。
- **WebUI 思考过程与输出混杂问题** ([#2448](https://github.com/sipeed/picoclaw/issues/2448))：用户发现在 WebUI 中，Agent 的内部推理过程直接与面向用户的回复拼接在一起，严重影响阅读体验（已有 PR [#2475](https://github.com/sipeed/picoclaw/pull/2475) 尝试解决）。

## 5. Bug 与稳定性
今日报告的核心 Bug 集中在连接稳定性和多端适配上：
1. **[严重] WebSocket 连接持续失败** ([#2463](https://github.com/sipeed/picoclaw/issues/2463), [#2319](https://github.com/sipeed/picoclaw/issues/2319))：用户普遍反馈从 v0.2.5 升级到 v0.2.6 后 WebSocket 无法建立连接，导致客户端掉线。
2. **[严重] 定时任务执行报错** ([#2468](https://github.com/sipeed/picoclaw/issues/2468))：Cron 任务因触发“内部频道限制”而执行失败。目前已有 PR [#2474](https://github.com/sipeed/picoclaw/pull/2474) 尝试通过独立 Session 来修复此问题。
3. **[中等] 飞书频道消息吞没** ([#2464](https://github.com/sipeed/picoclaw/issues/2464))：连续发送消息时，Bot 仅回复最后一条，前面的消息被忽略。
4. **[中等] Windows 路径兼容问题** ([#2472](https://github.com/sipeed/picoclaw/issues/2472))：`list_dir` 工具在 Windows 下因路径分隔符未转换导致报错。
5. **[低] 终端不安全字符输出** ([#2377](https://github.com/sipeed/picoclaw/issues/2377))：日志输出可能包含恶意 ANSI 控制字符。

## 6. 功能请求与路线图信号
- **多 API Key 轮询（账号堆叠）** ([#2408](https://github.com/sipeed/picoclaw/issues/2408))：用户提出类似“弹夹”机制的 API Key 轮换方案，以应对单一账号的速率限制。这对于高频使用场景极为重要，有望成为后续提升可用性的重点。
- **SMTP 邮件发送渠道** ([#2465](https://github.com/sipeed/picoclaw/issues/2465))：提议增加 SMTP 频道，配合 Cron 任务将周报或检查结果发送至邮箱，拓展了 PicoClaw 作为个人助理的自动化边界。
- **双重 HEAD 认证支持** ([#2169](https://github.com/sipeed/picoclaw/issues/2169))：针对自建模型需要同时传入 `Authorization` 和 `X-API-Key` 的场景。这暴露了当前 Provider 配置灵活性的不足。

## 7. 用户反馈摘要
- **环境变量配置具有误导性**：用户在 [#2438](https://github.com/sipeed/picoclaw/issues/2438) 中指出，`PICOCLAW_GATEWAY_TOKEN` 并不控制 WebSocket 认证，这种“望文生义”的设计导致了部署时的挫败感。
- **对 Docker 部署和复杂认证模型的困惑**：多位新手用户（如 [#2471](https://github.com/sipeed/picoclaw/issues/2471)）在配置本地 Nvidia AI 或获取 Google Gemini 模型列表时遇到阻碍，说明 WebUI 的配置向导和错误提示仍需优化。
- **项目定位获得认可**：在抱怨声中，用户也表达了对 PicoClaw 的看好（Issue #2433 中提及），认为其相比竞品 `zeroclaw` 和 `nanobot` 潜力十足。

## 8. 待处理积压
以下重要 Issue/PR 活跃度较高但尚未有明确解决时间线，需要核心团队关注：
- **多用户与安全加固 PR** [#2313](https://github.com/sipeed/picoclaw/pull/2313)：涉及底层架构重构，体量巨大，需谨慎评审以防引入回归。
- **CLI 美化重构 PR** [#2229](https://github.com/sipeed/picoclaw/pull/2229)：为 CLI 添加结构化 UI，长期挂起可能引发合并冲突。
- **原生 Gemini 提供商重构 PR** [#2475](https://github.com/sipeed/picoclaw/pull/2475)：涉及思考链分离，与当前 WebUI 的显示 Bug ([#2448](https://github.com/sipeed/picoclaw/issues/2448)) 息息相关，建议优先排期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-11)

## 1. 今日速览
NanoClaw 项目今日保持极高的社区活跃度与开发推进速度。在过去 24 小时内，项目共处理了 18 条 Pull Requests（合并/关闭 7 项，11 项待审）以及 6 条 Issues 动态。从提交质量来看，社区贡献高度聚焦于**容器隔离机制的灵活性增强**（如原生运行模式、挂载改进）以及**底层认证/集成能力的扩展**。整体来看，项目正处于从“纯容器化隔离 AI 智能体”向“支持混合宿主环境、兼容多模型生态”演进的关键阶段，生态健康度表现优秀。

## 2. 版本发布
**无新版本发布。** 鉴于目前主干上有大量关于底层架构（如数据库适配器、凭证代理、OAuth 刷新）的重构与功能 PR 正在等待合并，预计项目正在为下一个具有里程碑意义的 Minor/Major 版本进行蓄力。

---

## 3. 项目进展
今日共有 7 个 PR 被合并或关闭，主要集中在对底座能力的查漏补缺和安全稳定性的提升：

*   **修复 OAuth 令牌刷新缺陷**：PR [#1724](https://github.com/qwibitai/nanoclaw/pull/1724) 修复了 OAuth 刷新令牌时因缺少 `client_id` 等参数导致的 `400` 错误。这解决了由于静默过期导致的容器内 AI 凭证失效问题。
*   **增强流式输出容错性**：PR [#719](https://github.com/qwibitai/nanoclaw/pull/719) 修复了 `container-runner.ts` 中 `onOutput` 异步回调链缺少异常捕获的问题，避免了因网络波动导致整个智能体任务组挂起的严重隐患。
*   **补齐安全模块单测**：PR [#721](https://github.com/qwibitai/nanoclaw/pull/721) 为核心安全模块 `mount-security.ts` 新增了 35 个全面的测试用例，大幅提升了路径遍历防护和挂载验证的可靠性。
*   **完善 LLM 生态集成**：PR [#1607](https://github.com/qwibitai/nanoclaw/pull/1607) 被合并，引入了 LiteLLM MCP 技能及三层模型发现机制；PR [#1258](https://github.com/qwibitai/nanoclaw/pull/1258) 则确保了 Tailscale 网络变量的正确透传。
*   *注意*：PR [#1733](https://github.com/qwibitai/nanoclaw/pull/1733) (直接注入 Ollama 凭证) 和 PR [#1729](https://github.com/qwibitai/nanoclaw/pull/1729) (Supermemory 集成) 被关闭，前者可能因为与即将合并的原生凭证代理架构存在冲突，后者可能需要进一步调整。

---

## 4. 社区热点
今日社区讨论的焦点主要围绕**“打破容器边界”**与**“底层架构抽象”**展开：

*   **宿主机原生运行模式的诉求**：Issue [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) 提出引入“原生 runner 模式”，以绕过 Docker 直接调用宿主机的 tmux 或带界面的浏览器。这反映出高级用户希望在保持 NanoClaw 编排能力的同时，获得更深层次的本地系统控制权。
*   **数据库架构抽象化讨论**：Issue [#1722](https://github.com/qwibitai/nanoclaw/issues/1722) 建议引入 `IDatabaseAdapter` 接口替代硬编码的 SQLite。这一诉求直指企业级部署痛点，社区希望 NanoClaw 能对接 PostgreSQL 等外部数据库以实现高可用。
*   **多模型提供商支持**：Issue [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) 获得了 **3 次 👍**，作者探讨了并行使用 OpenCode 和 Claude Code 的可能性，这进一步验证了社区对“供应商锁定”的担忧和对多模型统一的渴望。

---

## 5. Bug 与稳定性
今日报告了数个与运行环境强相关的 Bug，目前均已有对应策略或 PR：

1.  **[高] 宿主机模式 IPC 路径硬编码错误**：Issue [#1730](https://github.com/qwibitai/nanoclaw/issues/1730) 指出在 Host 模式下运行时，MCP 工具因硬编码读取容器内的 `/workspace/ipc` 路径导致 `ENOENT` 崩溃。该问题与上述要求支持原生运行的诉求息息相关。
2.  **[中] Claude Code 本地配置文件污染 Git**：Issue [#1665](https://github.com/qwibitai/nanoclaw/issues/1665) 报告 `.claude/settings.local.json` 常被误提交。**已有修复 PR [#1734](https://github.com/qwibitai/nanoclaw/pull/1734)**，正在等待合并。
3.  **[中] OAuth 长时间空闲认证失效**：此问题（长空闲后报 `401`）已通过今日合并的 PR [#1724](https://github.com/qwibitai/nanoclaw/pull/1724) 以及新增自动刷新的 PR [#1725](https://github.com/qwibitai/nanoclaw/pull/1725) 得到系统性解决。

---

## 6. 功能请求与路线图信号
从近期的 PR 提交可以看出项目演进的明确路线图信号：

*   **宿主机与容器混合编排（进行中）**：为了响应 Issue [#1732](https://github.com/qwibitai/nanoclaw/issues/1732)，bitcryptic-gw 连续提交了多个 PR，包括支持额外挂载的 PR [#1726](https://github.com/qwibitai/nanoclaw/pull/1726) 和环境变量透传的 PR [#1728](https://github.com/qwibitai/nanoclaw/pull/1728)。预计“原生运行模式”将以配置选项的形式在近期支持。
*   **原生凭证代理（进行中）**：PR [#1727](https://github.com/qwibitai/nanoclaw/pull/1727) 提出建立原生的凭证代理以替代 OneCLI 网关，这将大幅降低部署和配置本地 Ollama 或第三方代理的门槛。
*   **重构数据库层（进行中）**：配合 Issue [#1722](https://github.com/qwibitai/nanoclaw/issues/1722)，PR [#1723](https://github.com/qwibitai/nanoclaw/pull/1723) 已经提交了数据库适配器层的重构初版，这表明项目正在为支持分布式数据库做底层架构准备。

---

## 7. 用户反馈摘要
透过近期的 Issues 与 PR 描述，提炼出用户的几个核心反馈切面：

*   **痛点：集成环境变量配置繁琐**：MCP 技能（如 Home Assistant, Unraid 等）以前无法自动在容器内获取凭证，导致“静默失败”。社区开发者对此感到困扰，PR [#1728](https://github.com/qwibitai/nanoclaw/pull/1728) 的提出正是为了彻底终结这一痛点。
*   **场景：边缘设备与本地服务器管理**：从持续活跃的 Unraid、Home Assistant、Tailscale 相关 PR 可以看出，大量用户正在将 NanoClaw 作为家庭实验室或私有服务器的**自动化运维大脑**使用。
*   **诉求：上下文成本优化**：Issue [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) 探讨了 API 级别的上下文压缩代理，说明在重度使用场景下，Token 成本和上下文窗口溢出已成为企业级用户的实质性顾虑。

---

## 8. 待处理积压
目前有多个涉及核心架构调整的重量级 PR 处于 Open 状态，等待维护者 Review。建议优先关注以下项目以防产生合并冲突：

1.  **数据库重构**：PR [#1723](https://github.com/qwibitai/nanoclaw/pull/1723) 作为底层基础重构，越早合并越有利于后续生态扩展。
2.  **OAuth 自动刷新**：PR [#1725](https://github.com/qwibitai/nanoclaw/pull/1725) 解决了长期闲置会话的认证痛点，建议跟进测试后合入主干。
3.  **Matrix 端到端加密频道**：PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) 已经开启一周有余，为项目引入了主流的去中心化通讯协议支持，需维护者评估 Rust Crypto Store 的安全性。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🤖 IronClaw 项目动态日报 (2026-04-11)

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日维持了极高的开发与测试活跃度，项目正处于 **V2 引擎核心架构重构与密集 QA 测试** 并行的关键阶段。
过去 24 小时内，项目共处理了 **39 条 Issue 更新**（新开/活跃 36 条，关闭 3 条）和 **50 条 PR 更新**（待合并 21 条，已合并/关闭 29 条）。值得注意的是，QA 团队在 Staging 环境下进行了高强度的压力测试，单日提交了大量涵盖并发、状态管理和指令遵循的缺陷报告。与此同时，核心开发团队正稳步推进沙箱环境、外部代理集成（ACP）以及底层抽象概念的简化工作。整体来看，项目在快速迭代中暴露了不少边界稳定性问题，但架构演进的方向十分明确。

---

## 2. 版本发布

**无新版本发布**。今日无正式 Release 产出，核心代码目前正通过高频的自动化 CI 不断合入 `staging-promote` 分支进行集成验证。

---

## 3. 项目进展

今日共有 29 个 PR 被合并或关闭，绝大多数为自动化 CI 的 Staging 晋级 PR，标志着主分支代码正在密集且高频地向前推进。以下是具有实质性业务意义的重要进展：

*   **V2 引擎项目级沙箱落地 (PR [#2211](https://github.com/nearai/ironclaw/pull/2211))**：核心贡献者 `ilblackdragon` 提交了一个超大体积（XL）的 PR，为 Engine v2 实现了完整的 `per-project sandbox`（涵盖阶段 1-7）。当开启沙箱环境时，所有文件和 Shell 工具将被限制在 Docker 隔离环境中运行，大幅提升了执行安全性。
*   **LLM 路由元数据增强 (PR [#2294](https://github.com/nearai/ironclaw/pull/2294))**：向 LLM 请求元数据中添加了稳定的 `conversation_id`，使有状态后端能够基于对话而非短暂的引擎线程 ID 进行精准路由。
*   **Demo 及终端工具流修复 (PR [#2241](https://github.com/nearai/ironclaw/pull/2241))**：引入了 `terminal_tools` 概念（允许跳过 LLM 的后置文本处理直接返回 JSON），并优化了汇款发送（`send_wire`）的意图识别与两步执行流程。

---

## 4. 社区热点

今日讨论度最高、最具代表性的 Issues 集中在**系统架构优化**与**Agent 循环死锁**两个方面，反映了社区（及核心开发者）对系统健壮性的深度思考：

*   🔥 **架构大重构提案：7 概念缩并为 3 (Issue [#2192](https://github.com/nearai/ironclaw/issues/2192))**（🔥 3 评论）
    *   **分析**：作者指出当前系统存在 7 种顶层抽象（Tools, Channels, Routines 等），导致开发者学习曲线陡峭。该贴提议将其合并为 3 个核心概念。这不仅是代码重构，更是 IronClaw V2 向下游开发者传递的全新心智模型，引发了团队关于未来 API 接口形态的热烈讨论。
*   ⚠️ **Agent 陷入死循环：失败工具重复调用高达 50 次 (Issue [#2240](https://github.com/nearai/ironclaw/issues/2240))**（1 评论）
    *   **分析**：当工具调用失败时，LLM 会盲目地使用相同参数重试，直至达到 `max_iterations` 上限。这暴露了当前引擎缺乏“失败状态去重”和“自我纠错”机制的隐患，是提升生产可用性必须解决的痛点。
*   🔗 **统一扩展模型与去重 (Issue [#2246](https://github.com/nearai/ironclaw/issues/2246))**
    *   **分析**：MCP 服务器与 WASM 扩展对 LLM 展示的方式存在割裂，且同一服务多提供商缺乏优先去重机制。该提案与 #2192 遥相呼应，预示着 IronClaw 的工具市场即将迎来一次底层重塑。

---

## 5. Bug 与稳定性

今日 QA 团队在 `hosted-staging` 环境发起了一场 **Bug Bash**，导致单日涌入大量缺陷报告。以下是按严重程度划分的核心问题：

### 🔴 严重 / 致命问题
*   **多会话并发阻塞 (Issue [#2231](https://github.com/nearai/ironclaw/issues/2231))**：打开多个聊天线程并发请求时，响应被排队阻塞，无法并行处理。对于定位为个人助手的系统，此问题严重影响多任务体验。
*   **Orchestrator 内存溢出崩溃 (Issue [#2276](https://github.com/nearai/ironclaw/issues/2276))**：在多步骤工具调用中，触发 HTTP 413 Payload Too Large 错误，导致编排器直接崩溃。
*   **V2 引擎跨通道内存/工具丢失 (Issue [#2259](https://github.com/nearai/ironclaw/issues/2259))**：通过 V2 引擎使用 Telegram 时，Agent 无法访问历史记忆或 CLI 配置的工具。

### 🟠 高危 /逻辑错误
*   **违背用户意图立即执行定时任务 (Issue [#2281](https://github.com/nearai/ironclaw/issues/2281))**：Agent 忽略了时间条件，将原定于未来触发的任务（如“会前10分钟发送提醒”）立即执行。
*   **跨渠道隔离失效 (Issue [#2239](https://github.com/nearai/ironclaw/issues/2239) & Issue [#2280](https://github.com/nearai/ironclaw/issues/2280))**：在 CLI 创建的例程无法在 Telegram 中查看；且 Agent 会未经允许主动向 Telegram 推送消息。
*   **工具调用成功假象 (Issue [#2279](https://github.com/nearai/ironclaw/issues/2279))**：底层工具返回错误时，Agent 仍向用户汇报操作成功。

### 🟡 一般 / UI 交互
*   **页面刷新后聊天记录丢失 (Issue [#2285](https://github.com/nearai/ironclaw/issues/2285))**：在长任务处理期间刷新页面，前端状态清空，但后端仍在跑。
*   **Google Sheets OAuth 400 错误 (Issue [#2229](https://github.com/nearai/ironclaw/issues/2229))** & **Telegram WASM 制品缺失 (Issue [#2233](https://github.com/nearai/ironclaw/issues/2233))**。

---

## 6. 功能请求与路线图信号

今日的功能提案不仅数量多，而且极具前瞻性，清晰勾勒出了 IronClaw 走向 **“多智能体协作调度平台”** 的蓝图：

*   🌟 **多智能体协作：ACP 子线程委派 (Issue [#2277](https://github.com/nearai/ironclaw/issues/2277))**
    *   **信号**：计划支持将本地任务委派给外部的 Codex、Droid 等编码智能体，同时保持 V2 的父子线程树结构。IronClaw 正试图成为统领其他 AI Agent 的“超级大脑”。
*   🌟 **引擎 V2：感知工具的生命周期管理 (Issue [#2250](https://github.com/nearai/ironclaw/issues/2250))**
    *   **信号**：提出了技能的适应、退役和重新评估机制。意味着 Agent 将具备“自我审视和进化”的能力，会根据工具的实际使用表现动态调整行为。
*   🌟 **工具流实时推送 (Issue [#2274](https://github.com/nearai/ironclaw/issues/2274))**
    *   **信号**：社区客户强烈希望在 Agent 运行期间，通过 Responses API 实时流式返回正在调用的工具名称。这将极大改善用户在面对长耗时任务时的“等待焦虑”。
*   🌟 **CLI 增强 (Issue [#2271](https://github.com/nearai/ironclaw/issues/2271))**
    *   **信号**：增加 `ironclaw profile list` 子命令，完善开发者生态体验。

---

## 7. 用户反馈摘要

从近期的 Issues 中，我们可以提炼出真实用户的三大核心痛点：

1.  **“过度殷勤”导致的错误触发**：Issue [#2248](https://github.com/nearai/ironclaw/issues/2248) 指出，日常聊天中的“Yes”会被错误地识别为对“待批准操作”的放行。用户希望 Agent 能更精准地识别上下文，而不是草木皆兵。
2.  **Web UI 功能断层严重**：用户批评 Web 端不支持文件上传 (Issue [#2283](https://github.com/nearai/ironclaw/issues/2283))，且 Routines（例程）模块是只读的，无法直接创建或编辑 (Issue [#1325](https://github.com/nearai/ironclaw/issues/1325))。目前的强依赖 CLI 交互推高了普通用户的使用门槛。
3.  **自作主张的执行逻辑**：多个反馈（如 Issue [#2282](https://github.com/nearai/ironclaw/issues/2282), [#2286](https://github.com/nearai/ironclaw/issues/2286)）显示，Agent 存在“阳奉阴违”的现象，比如被要求警报每一个请求却只警报失败的，或者被要求立刻处理却擅自创建 Cron 定时任务。这表明底层系统提示词和任务路由逻辑还有很大优化空间。

---

## 8. 待处理积压

以下重要 Issues 和 PRs 需要维护团队重点关注，以防遗漏：

*   **[PR] 阿里云百炼平台适配 (PR [#1446](https://github.com/nearai/ironclaw/pull/1446))**：由社区开发者提交的 XL 级 PR，旨在支持阿里云 DashScope 兼容接口。已开启 20 余天，目前仍为 Open 状态，因涉及 LLM 底层核心改动，亟待核心架构师进行代码审查。
*   **[Issue] 早期 Bug 未解决：Google Slides 集成失败 (Issue [#1503](https://github.com/nearai/ironclaw/issues/1503))**：自 2026-03-20 提出至今已超过 3 周，一直未得到开发团队的官方确认或修复。
*   **[Issue] 状态与上下文机制缺陷 (Issue [#2255](https://github.com/nearai/ironclaw/issues/2255))**：涉及例程通知不留下对话上下文痕迹的问题，直接影响到后续 Agent 的记忆连续性，需要尽早确立架构设计方案。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-04-11)

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 分析周期：过去 24 小时

## 1. 今日速览

LobsterAI 今日维持了**高强度的开发与社区互动**，项目处于高度活跃状态。过去 24 小时内，项目共处理了 **20 个 Pull Requests**（其中 11 个顺利合并/关闭，9 个待合并），并迎来了 **8 条活跃的 Issues**（均为开启状态，无关闭）。
从 PR 动向来看，核心开发团队正集中精力解决 OpenClaw 网关启动的 P0 级致命故障、优化跨平台打包体积，并持续推进定时任务通知、会话导出等用户体验增强功能。尽管无新版本发布，但从密集的基础设施修复来看，项目正处于下一个稳定版本发布前的关键打磨期。

## 2. 版本发布

**本日无新版本发布。**

## 3. 项目进展

今日共有 11 个 PR 被合并或关闭，核心进展集中在**底层架构清理、构建优化和功能性增强**：

- **🚨 P0 核心故障修复与架构瘦身**：
  - [PR #1611](https://github.com/netease-youdao/LobsterAI/pull/1611)：彻底移除了旧的 `yd-cowork` 引擎链路，全面收拢至 `openclaw`。修复了配置不兼容导致的网关启动重启循环，简化了系统架构。
  - [PR #1610](https://github.com/netease-youdao/LobsterAI/pull/1610) & [PR #1575](https://github.com/netease-youdao/LobsterAI/pull/1575)：引入了 OpenClaw 会话保持时长设置，默认延长至 30 天，修复了时区漂移问题。
- **🛠 构建与打包体积优化（贡献者 btc69m979y-dotcom 密集提交）**：
  - [PR #1625](https://github.com/netease-youdao/LobsterAI/pull/1625) & [PR #1624](https://github.com/netease-youdao/LobsterAI/pull/1624)：解决了 Windows 环境下的构建失败问题，并大幅裁剪了重复的 OpenClaw SDK 依赖（瘦身约 964 MB）。
  - [PR #1623](https://github.com/netease-youdao/LobsterAI/pull/1623)：修复了 npm v11 兼容性导致的 Windows 打包失败。
- **✨ 新功能与体验升级**：
  - [PR #929](https://github.com/netease-youdao/LobsterAI/pull/929)：正式合并了**百度千帆大模型**的支持，丰富了国内的模型供应商生态。
  - [PR #1612](https://github.com/netease-youdao/LobsterAI/pull/1612)：新增网易 POPO 扫码登录支持。
  - [PR #1613](https://github.com/netease-youdao/LobsterAI/pull/1613)：修复了定时任务保存后状态未重置的问题。
  - [PR #1616](https://github.com/netease-youdao/LobsterAI/pull/1616)：升级了 nim 插件至 1.0.3。

## 4. 社区热点

今日社区反馈主要集中在最新版本的稳定性问题上，用户对自定义模型和复杂任务的处理能力关注度较高：

- **复杂任务客户端崩溃**：[Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627) 反馈在执行稍微复杂的任务时客户端直接崩溃，该问题引起了社区共鸣（已收到 1 条评论探讨日志）。
- **自定义模型接入困难**：[Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622) 报告添加自定义模型后测试失败，这是 AI 助手用户的高频痛点。
- **引入新 AI 引擎的探讨**：[Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614) 有社区开发者提议将 `hermes-agent` 作为除 `openclaw` 之外的备选 AI 引擎，这表明社区对底层引擎的解耦和多元化有着强烈的诉求。

## 5. Bug 与稳定性

今日报告了多个影响使用的 Bug，其中包含导致系统不可用的严重问题：

1. **⚠️ 严重 (P0 Blocker) - 网关无法启动及弹窗闪烁**：
   - **现象**：升级后所有用户打开 App 时提示「OpenClaw 网关未能在规定时间内启动成功」，且弹窗频繁闪烁。
   - **状态**：**已修复**。根由是配置文件写入了新版已废弃的字段导致网关直接退出，修复方案见 [PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626)。
2. **中等 - 模型回复重复**：
   - [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566)：最新版本无论输入什么，模型都回复相同内容。
   - **状态**：暂无关联修复 PR，等待官方排查日志。
3. **中等 - 技能列表状态不同步**：
   - [Issue #1617](https://github.com/netease-youdao/LobsterAI/issues/1617)：删除技能后前端未刷新，且重启后依然残留显示。
   - **状态**：典型的前后端状态不一致 Bug，暂无修复 PR。
4. **低 - 上传文件无法被模型读取**：
   - [Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561)：新版本更改了文件存放逻辑，导致模型无法感知用户上传的文件。

## 6. 功能请求与路线图信号

通过近期的 Issue 与 PR，可以看出项目下一步的演进方向：

- **系统级通知集成**：[Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620) 提出定时任务完成后推送系统级通知，**目前对应的 [PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621) 已经提交并处于 Open 状态**。该功能即将在近期版本落地。
- **Onboarding（新手引导）体验优化**：[PR #1577](https://github.com/netease-youdao/LobsterAI/pull/1577) 正在为 LobsterAI 引入基于 `driver.js` 的 6 步新手引导功能，这说明项目正在努力降低新用户的上手门槛。
- **UI 现代化重构**：[PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) 正在重构模型选择器组件，增加供应商图标并统一视觉风格，进一步向专业级 AI 客户端靠拢。

## 7. 用户反馈摘要

从今天的 Issue 描述中，可以提炼出以下真实用户场景与反馈：
- **开发者/极客用户群体**：在 Linux（如 Archlinux）环境下直接运行 `npm run electron:dev` 进行调试时遇到了环境兼容问题（[#284](https://github.com/netease-youdao/LobsterAI/issues/284)）。
- **重度 API 用户**：习惯通过拖拽文件让模型处理长文本或代码，文件上下文传递的准确性对他们至关重要（[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)）。
- **自动化/效率用户**：利用定时任务执行批处理，希望能够不打开应用界面就及时获取任务执行结果（[#1620](https://github.com/netease-youdao/LobsterAI/issues/1620)）。
- **总体情绪**：用户对项目升级换代（如 OpenClaw 引擎切换）期间的稳定性波动感到困扰，但对新功能的迭代速度仍抱有较高期待。

## 8. 待处理积压

以下长期悬而未决的 Issue/PR 需要官方团队关注：

- **[PR #5](https://github.com/netease-youdao/LobsterAI/pull/5) [stale]**：配置 ESLint 规则并修复 269 个代码规范问题。该 PR 自 2 月提交以来一直未合并，长期忽视技术债会影响外部贡献者的代码体验。
- **[PR #367](https://github.com/netease-youdao/LobsterAI/pull/367) [stale]**：修复 MCP JSON streamable http 导入配置。MCP 是目前 AI 助手的重要扩展能力，此 PR 的搁置可能影响部分高级插件的使用。
- **[PR #374](https://github.com/netease-youdao/LobsterAI/pull/374) [stale]**：为 IM 平台添加异步消息处理器防止超时。
- **[Issue #284](https://github.com/netease-youdao/LobsterAI/issues/284)**：Linux 环境下 Electron 启动失败的问题已持续一个多月未给出解决方案，可能导致部分 Linux 用户流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw 项目动态日报 (2026-04-11)

> 数据统计周期：2026-04-10 18:00 UTC - 2026-04-11 18:00 UTC
> 数据来源：[TinyAGI/tinyclaw](https://github.com/TinyAGI/tinyclaw)

---

### 1. 今日速览

过去 24 小时，TinyClaw 项目整体处于**低活跃但聚焦维护**的状态。项目今日未合并任何代码，也未新增或关闭任何 Issue，社区互动较为平静。不过，核心贡献者提交了一项针对心跳机制的缺陷修复 PR，表明项目仍在持续推进底层的稳定性与配置规范性。目前没有发布任何新版本，项目处于稳定迭代期的蓄力阶段。

### 2. 版本发布
**无**。今日未发布任何新版本或标签。

### 3. 项目进展
今日项目整体向前推进幅度较小，暂无已合并或关闭的 PR。但有一项关键的新提交正在等待审核：

*   **[待合并] PR #276**: [`fix(heartbeat): honor top-level heartbeat.enabled=false setting`](https://github.com/TinyAGI/tinyagi/pull/276)
    *   **推进说明**: 该 PR 修复了 `settings.json` 配置解析的一个逻辑遗漏。此前，心跳机制的开启/关闭只能在单代理级别（`AgentConfig.heartbeat.enabled`）生效，全局配置 `heartbeat.enabled=false` 会被系统静默忽略，导致 `startHeartbeat()` 无条件执行。此修复将使全局心跳开关生效，有助于减少不必要的网络开销和资源占用。

### 4. 社区热点
今日项目处于讨论低谷期，未出现讨论热烈或评论集中的 Issues / PRs。唯一的活动集中在上述 **[PR #276](https://github.com/TinyAGI/tinyagi/pull/276)** 的提交上。从该 PR 的描述可以看出，社区/开发者对“多层级配置系统的优先级与覆盖逻辑”有较高的严谨性要求，期望系统能准确响应用户的显式关闭指令。

### 5. Bug 与稳定性
今日无新增用户提交的崩溃或严重回归问题报告。项目内部发现并提交了一项配置解析缺陷：

*   **🟡 中等 - 心跳机制配置失效**: 用户在 `settings.json` 顶部配置 `heartbeat.enabled=false` 时无法关闭心跳网络请求。
    *   **状态**: 已有修复方案。
    *   **关联 PR**: [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) (作者: ZVNC28)。

### 6. 功能请求与路线图信号
今日未收到明确的新功能需求（Feature Requests）。从今日的 PR 活动来看，当前的短期路线图信号指向**系统底层的健壮性优化**，特别是多层级配置系统的解析逻辑重构与校验。预计下一阶段会有更多针对核心参数配置的易用性和准确性修复。

### 7. 用户反馈摘要
由于今日无新增 Issue，暂无法从评论中提取广泛的用户痛点。今日的代码提交主要反映了**底层部署与运维场景**中的痛点：用户在尝试禁用后台常驻服务（如心跳请求）以节约资源或适配特定内网环境时遇到阻碍。这暗示了部分用户倾向于对 AI 智能体行为进行更绝对、更宏观的静态管控。

### 8. 待处理积压
目前项目处于低活跃期，今日未发现长期（>30天）未响应的僵尸 Issue 或 PR。建议维护者及时跟进当前唯一的活跃代码提交：
*   **需重点关注**: [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) 仍处于 OPEN 状态，建议相关 Reviewer 尽快进行 Code Review，以确保配置修复能够尽早合入主线。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📊 Moltis 项目动态日报 (2026-04-11)

> 分析师按：Moltis 项目在过去24小时内呈现出极高的开发活跃度与社区参与度。项目处于“高强度迭代”阶段，集中修复了多个涉及核心执行流、通道集成和 Hook 机制的底层缺陷，同时稳步推进了新功能。开源社区贡献者提交了高质量的 Bug 报告，核心团队响应迅速，多数严重 Bug 已在当日提交修复 PR 并合并。

---

### 1. 今日速览
- **极高活跃度**：过去24小时内共有 11 条 Issue 更新（新开/活跃 5 条，关闭 6 条）和 18 条 PR 更新（待合并 5 条，已合并/关闭 13 条）。
- **敏捷修复**：今日报告的多个核心级别 Bug（如 Hook 事件静默丢弃、语音识别配置失效）均在同日内由核心贡献者 `penso` 提交 Fix 并迅速合并，展现了极强的问题响应能力。
- **版本交付**：项目今日发布了 `20260410.01` 版本。
- **重心聚焦**：当前开发焦点高度集中于 **多通道（Telegram/Discord）媒体处理完善**、**Hook 系统执行链路排错** 以及 **外部 LLM 提供商适配优化**。

### 2. 版本发布
- **[Release 20260410.01](https://github.com/moltis-org/moltis/releases/tag/20260410.01)** 
  - **概览**：最新发布版本。
  - **包含变更**：推测集成了今日及近期合并的 13 个 PR，涵盖了 Agent 执行流修复（`ToolResultPersist`、Auto-continue 逻辑）、MCP OAuth 协议适配、Whisper STT 硬编码破除、MiniMax 系统提示词丢失修复以及阿里云编码计划等新 Provider 的支持。
  - **迁移注意**：由于修复了 MCP OAuth 的重定向 URI 规范（强制使用 HTTP），本地开发或使用严格 OAuth 授权服务器的部署环境可能需要清除旧的客户端注册缓存。

### 3. 项目进展
今日共有 **13 个 PR 被合并或关闭**，项目在稳定性和架构扩展上迈出了坚实的一步：
- **核心执行流修复**：
  - [PR #647](https://github.com/moltis-org/moltis/pull/647)：修复了 `ToolResultPersist` Hook 仅存在于文档但从未被派发调用的严重遗留问题。
  - [PR #651](https://github.com/moltis-org/moltis/pull/651)：修复了 `MessageReceived` 被误判为只读导致 `Block` 或 `ModifyPayload` 操作被静默丢弃的缺陷。
  - [PR #634](https://github.com/moltis-org/moltis/pull/634)：优化了 Agent 自动续写（auto-continue）逻辑，防止模型在输出长答案后生成不必要的简短摘要覆盖原始回复。
- **通道与语音处理优化**：
  - [PR #643](https://github.com/moltis-org/moltis/pull/643)：修复了 Whisper STT 硬编码模型和语言参数的 Bug，使得配置文件生效。
  - [PR #650](https://github.com/moltis-org/moltis/pull/650)：修复了 Z.AI 模型文本模式 XML 工具调用的解析问题，防止原始负载泄露。
- **提供商适配与工具扩展**：
  - [PR #622](https://github.com/moltis-org/moltis/pull/622)：修复了 MiniMax 无法识别顶级 system 字段的致命错误，并新增了 11 个提供商的集成测试。
  - [PR #630](https://github.com/moltis-org/moltis/pull/630)：引入了原生 `read_skill` 工具，模型无需外部 MCP 服务器即可加载技能。
- **前端与部署**：
  - [PR #644](https://github.com/moltis-org/moltis/pull/644) (Open 状态，前序 [PR #642](https://github.com/moltis-org/moltis/pull/642) 已关闭)：在设置侧边栏添加了 "Projects" 导航。
  - [PR #635](https://github.com/moltis-org/moltis/pull/635)：修复了在 systemd 环境下 PATH 被剥离导致 `dcg-guard` 失效的问题。

### 4. 社区热点
今日社区提交了多个高质量的 Bug 报告，虽然评论数暂未形成大量堆积（多数在当日即被闭环），但 Issue 设计严谨，直击痛点：
- **Hook 机制的设计漏洞**：来自 `dmitriikeler` 的系列反馈（[Issue #639](https://github.com/moltis-org/moltis/issues/639), [Issue #638](https://github.com/moltis-org/moltis/issues/638)）揭示了 Hook 系统中“只读判定错误”和“存在但未调度”的两个核心死角，引发了重构。
- **消息源数据透传诉求**：[Issue #640](https://github.com/moltis-org/moltis/issues/640) 提出了在 Hook 载荷中包含通道/发送者元数据的功能请求。这反映了高级用户正在基于 Moltis 编写复杂的合规或审计级 Hook，急需突破单一的 `session_key` 限制。
- **外部部署阻碍**：[Issue #646](https://github.com/moltis-org/moltis/issues/646)（无法登录远程部署）是当前少数尚未关闭的关键问题，反映了新用户在自托管配置时可能存在的身份验证或网络连通性坑点。

### 5. Bug 与稳定性
今日报告的 Bug 均具有较高严重性，大部分已修复：
1. **[P0/严重] 静默丢弃 Block 动作**：[Issue #639](https://github.com/moltis-org/moltis/issues/639) - Hook 无法拦截消息。（已由 [PR #651](https://github.com/moltis-org/moltis/pull/651) 修复）
2. **[P0/严重] 工具执行结果无法被 Hook 捕获**：[Issue #638](https://github.com/moltis-org/moltis/issues/638) - Hook 形同虚设。（已由 [PR #647](https://github.com/moltis-org/moltis/pull/647) 修复）
3. **[P1/重要] 远程部署无法登录**：[Issue #646](https://github.com/moltis-org/moltis/issues/646) - 阻断新用户部署。（暂无 PR，待解决）
4. **[P1/重要] 自动续写覆盖长回复**：[Issue #628](https://github.com/moltis-org/moltis/issues/628) - 导致 AI 严重失忆/回答被截断。（已由 [PR #634](https://github.com/moltis-org/moltis/pull/634) 修复）
5. **[P2/一般] 语音转文字失败回退机制异常**：[Issue #632](https://github.com/moltis-org/moltis/issues/632) - 空白语音发送占位符给 LLM。（已有对应处理逻辑）

### 6. 功能请求与路线图信号
结合今日的 Issues 和 PRs，可以看出项目近期的 Roadmap 走向：
- **多模态输入全面对齐**：[Issue #633](https://github.com/moltis-org/moltis/issues/633) 和 [PR #649](https://github.com/moltis-org/moltis/pull/649)（Discord 语音/图片处理）表明 Moltis 正在致力于拉平不同通讯软件之间的能力差异，让 Discord 具备与 Telegram 相同的收发媒体能力。
- **精细化上下文控制**：[PR #652](https://github.com/moltis-org/moltis/pull/652) 引入了摘要压缩预算机制，[Issue #640](https://github.com/moltis-org/moltis/issues/640) 提出了通道元数据注入，这标志着 Moltis 正在从“玩具级 Agent”向“企业级可控上下文调度平台”演进，极有可能在下一版本作为主打特性。

### 7. 用户反馈摘要
- **自托管运维人员 (krsyoung, fortuna)**：对进程环境变量（如 PATH）、网络重定向（如 OAuth URI）等底层操作系统的配置细节极其敏感，反映出现有文档在“生产级部署指南”方面可能存在欠缺。
- **高级开发者**：他们正深度利用 Moltis 的 Hook 系统构建外挂业务逻辑，当前发现机制存在黑盒现象（如事件不被派发），呼吁增加更多的底层元数据透传。
- **集成商**：新模型提供商（如阿里云、MiniMax、Z.AI）的接入需求旺盛，但各家对 API 规范（如 System Prompt 位置、XML 解析格式）的实现差异极大，极度依赖 Moltis 在 Provider 层做好脏活累活的兼容适配。

### 8. 待处理积压
以下是当前仍处于 Open 状态且需要重点关注的条目，建议维护者优先跟进：
- **[Issue #646](https://github.com/moltis-org/moltis/issues/646) [Bug]**：远程部署环境无法登录。此问题直接影响企业级自建场景的可用性。
- **[PR #652](https://github.com/moltis-org/moltis/pull/652) [Feature]**：对话摘要压缩预算机制。涉及核心上下文管理逻辑，需要谨慎进行代码审查以防止上下文意外截断。
- **[PR #649](https://github.com/moltis-org/moltis/pull/649) [Feature]**：Discord 多模态支持。该 PR 引入了共享的媒体下载器契约重构，属于架构级变更，需评估对现有通道逻辑的潜在影响。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-04-11)

## 1. 今日速览
CoPaw 项目在过去24小时内展现出**极高的社区活跃度与开发迭代速度**。Issue 与 PR 活动呈井喷态势，共产生 35 条 Issue 更新（23 新开，12 关闭）和 50 条 PR 更新（14 待合并，36 已合并/关闭）。项目当前正处于 v1.0.2 发布后的高频维护期，社区反馈主要集中在多渠道适配、长任务执行的稳定性以及本地模型接入体验上。大量“first-time-contributor”提交的 PR 被合并，显示出项目社区正在迅速繁荣，开源飞轮已然转动。

---

## 2. 版本发布
- **新版本发布**：过去24小时内无新版本发布。
- **当前版本状态**：项目运行在近期发布的 `v1.0.2` 基础上。社区正密集为下一个迭代（预计 v1.0.3 或 v1.1.0）积累修复与功能代码。

---

## 3. 项目进展
今日共有 36 个 PR 被合并或关闭，整体向前迈进了坚实的一步，重点推进了跨端体验优化和底层的稳定性：

- **多渠道适配优化**：QQ 频道修复了纯媒体消息无限缓冲无法处理的问题（[PR #3242](https://github.com/agentscope-ai/CoPaw/pull/3242)），钉钉渠道迁移至官方 SDK 并优化了 API 调用（[PR #3236](https://github.com/agentscope-ai/CoPaw/pull/3236)）。
- **桌面端体验修复**：修复了 Windows 环境缺失 WebView2 导致的白屏问题，并加入了自启动安装逻辑（[PR #3119](https://github.com/agentscope-ai/CoPaw/pull/3119), [PR #3120](https://github.com/agentscope-ai/CoPaw/pull/3120)）。
- **系统底座与存储加固**：修复了巨大 Tool 输出（如 3MB+ 的 shell 日志）导致 session 持久化失败的问题，增加了前置截断逻辑（[PR #3252](https://github.com/agentscope-ai/CoPaw/pull/3252)）。
- **UI 与文档更新**：合并了大量控制台前端重构、Logo 及官网图片更新的 PR（如 [PR #3243](https://github.com/agentscope-ai/CoPaw/pull/3243), [PR #3249](https://github.com/agentscope-ai/CoPaw/pull/3249)）。

---

## 4. 社区热点
今日讨论最活跃的议题集中在**多智能体架构演进**与**底层性能/模型处理缺陷**上：

- **架构愿景：** [Issue #3224](https://github.com/agentscope-ai/CoPaw/issues/3224) 提出了“CoPaw Agent Teams —— 自然语言驱动的自进化多智能体协作团队”的愿景，直击当前多智能体需要“手动挡”配置的痛点，引发了关于项目未来演进方向的深度讨论（3条评论，高频深度探讨）。
- **技能生态规划：** 长期讨论贴 [Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280) （评论数高达 25 条）持续活跃，社区正在热议哪些 Skills 和 MCPs 应该被内置到 CoPaw 中以提升开箱即用体验。
- **严重性能泄漏：** [Issue #3226](https://github.com/agentscope-ai/CoPaw/issues/3226) 报告了 `chrome-devtools-mcp` 和 `tavily-mcp` 导致严重内存泄漏的问题，引起了广泛关注（1个👍，3条评论），暴露了 MCP 进程生命周期管理的脆弱性。

---

## 5. Bug 与稳定性
v1.0.2 版本虽然带来了新功能，但也暴露了一系列稳定性挑战，重点关注以下几个高优 Bug：

**🔴 严重**
1. **长任务执行静默中断** ([Issue #3011](https://github.com/agentscope-ai/CoPaw/issues/3011)): 使用部分模型执行代码迭代任务时，系统在执行命令前自动停止，且前后端无报错。暂无对应 fix PR，需优先排查。
2. **MCP 进程内存泄漏** ([Issue #3226](https://github.com/agentscope-ai/CoPaw/issues/3226)): 引发系统级内存暴涨至数 GB，属于严重性能瓶颈。

**🟠 中等**
1. **大版本升级导致数据丢失** ([Issue #3190](https://github.com/agentscope-ai/CoPaw/issues/3190)): 用户从 Docker 1.0.1 升级至 1.0.2 后，自定义 Agent 丢失。
2. **控制台流式输出未过滤思考块** ([Issue #3174](https://github.com/agentscope-ai/CoPaw/issues/3174) / [Issue #3206](https://github.com/agentscope-ai/CoPaw/issues/3206)): `filter_thinking` 失效，且对 `<thought>` 标签解析存在缺陷。
3. **QQ/微信频道阻塞异步事件循环** ([Issue #3136](https://github.com/agentscope-ai/CoPaw/issues/3136)): 导致禁用 Agent 操作耗时高达 8-10 秒。
4. **前端页面无法修改模型 Base URL** ([Issue #3251](https://github.com/agentscope-ai/CoPaw/issues/3251)): 影响第三方 API 供应商接入体验。

---

## 6. 功能请求与路线图信号
结合 Issue 需求与当前活跃的 PR，CoPaw 下一阶段的功能重心已非常清晰：

1. **多智能体协作大重构**：社区提出了自进化协作的需求（[Issue #3224](https://github.com/agentscope-ai/CoPaw/issues/3224)），官方及社区开发者顺势提交了重构 PR（[PR #3215](https://github.com/agentscope-ai/CoPaw/pull/3215)），预计很快会落地。
2. **精细化 Token 监控与会话管理**：针对目前只能全局统计 Token 的痛点，已提交了会话级别的 Token 追踪 PR（[PR #3214](https://github.com/agentscope-ai/CoPaw/pull/3214)），配合定时任务全新执行会话支持（[PR #3255](https://github.com/agentscope-ai/CoPaw/pull/3255)），将极大增强企业级运营能力。
3. **任务规划能力增强**：新增 PlanNotebook 支持，让 ReAct Agent 具备自动分解复杂任务的能力（[PR #3238](https://github.com/agentscope-ai/CoPaw/pull/3238)）。
4. **渠道能力对齐**：用户强烈呼吁飞书支持 CardKit 流式输出体验，与钉钉对齐（[Issue #3001](https://github.com/agentscope-ai/CoPaw/issues/3001)）。
5. **前端交互细节完善**：包括会话归档分组（[Issue #3187](https://github.com/agentscope-ai/CoPaw/issues/3187)）和强制执行工作流规则（[Issue #3233](https://github.com/agentscope-ai/CoPaw/issues/3233)）。

---

## 7. 用户反馈摘要
从当日 Issue 评论和反馈来看，用户对 CoPaw 的情感呈现出明显的“**爱之深责之切**”：

- **痛点集中点**：**v1.0.x 大版本的升级体验较差**，Docker 升级丢失配置、跨平台（Windows/内网）的兼容性问题（如脚本乱码 [Issue #3177](https://github.com/agentscope-ai/CoPaw/issues/3177)）和高并发下的稳定性是最大的槽点。
- **高频使用场景**：大量用户正在深度使用 CoPaw 接入微信/QQ机器人进行代码编写、长任务执行与系统控制。
- **满意点**：用户对项目的整体架构演进方向（多智能体）表示高度认可，且从大量涌入的 PR 看，开发者对于项目“开源可扩展”的设计感到满意，社区二次开发热情高涨。

---

## 8. 待处理积压
提醒项目维护团队关注以下存在积压风险或影响面较广的 Issue：

1. **本地模型兼容性痼疾**：[Issue #3222](https://github.com/agentscope-ai/CoPaw/issues/3222)（LM Studio连接失败）和 [Issue #3211](https://github.com/agentscope-ai/CoPaw/issues/3211)（Docker 中 llama.cpp GLIBC 不匹配）暴露了近期版本在局域网和本地模型支持上出现了退化。
2. **长任务中断问题悬而未决**：[Issue #3011](https://github.com/agentscope-ai/CoPaw/issues/3011) 影响核心自动化场景，该问题已开启数日，亟待官方确认排查方向。
3. **用户体验优化请求**：用户 [LinWanCen](https://github.com/LinWanCen) 在今日集中提出了多个体验改进建议（技能下载 [Issue #3241](https://github.com/agentscope-ai/CoPaw/issues/3241)、Hashline编辑 [Issue #3234](https://github.com/agentscope-ai/CoPaw/issues/3234) 等），建议官方统一评估并回应，以鼓励社区贡献者的积极性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>