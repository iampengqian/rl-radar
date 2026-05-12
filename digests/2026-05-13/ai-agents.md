# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-12 22:22 UTC

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

# 📊 OpenClaw 项目动态日报 (2026-05-13)

## 1. 今日速览

OpenClaw 在过去 24 小时内保持着**极高的开发与社区活跃度**。项目连续发布了两个 Beta 版本（`v2026.5.12-beta.1` 和 `v2026.5.12-beta.2`），主要针对即将成为默认运行时的 Codex 引擎进行了多项兼容性与权限修复。项目今日共处理了 500 条 Issue 更新（新开/活跃 428 条，关闭 72 条）以及 500 条 PR 更新。虽然 PR 合并数目前相对较低（已合并/关闭 49 条，待合并 451 条），但大量聚焦于底层架构（如 ACP 协议、沙箱机制、消息防泄漏）的待处理 PR 预示着项目正在酝酿一次重大底层重构。整体来看，项目处于快速迭代的高压期，稳定性挑战与功能演进并行。

---

## 2. 版本发布

今日连续发布了 2 个新版本，主要聚焦于新运行时权限、依赖安装与系统安全性的修补：

- **v2026.5.12-beta.2**
  - **Fixes:** 修复了 Codex harness 中，当 OpenAI 认证信息存储在智能体的 auth-profile 而非环境变量时，`image_generate` 等媒体工具不可用的问题。
  - **Fixes:** 修复了在 pnpm 11 环境下，WhatsApp/Baileys 的底层依赖 `libsignal` 无法正常进行源码安装的问题。
- **v2026.5.12-beta.1**
  - **Fixes:** 修复了 memory-wiki 的权限漏洞，现在执行数据摄取（ingest）需要管理员权限，搜索 Obsidian 需要写入权限（感谢 @pgondhi987）。
  - **Fixes:** 优化了构建系统，跳过了被排除在构建条目之外的捆绑插件元数据复制，防止引发错误的更新/状态提示。

---

## 3. 项目进展

今日有 49 个 PR 被合并/关闭。尽管未展示具体的合并 PR 列表，但从关闭的 Issue 和活跃的 PR 来看，项目在以下方向取得了实质性进展：
- **Codex 运行时迁移：** 基础设施正在向 Codex 默认运行时过渡，相关 QA 测试Harness 已搭建。
- **ACP (Agent Communication Protocol) 支持完善：** 修复了 ACP 会话状态持久化及工具调用的支持。
- **多渠道稳定性提升：** 针对 Telegram、Slack、WhatsApp 的消息分发、线程绑定和重连机制进行了底层修复。

---

## 4. 社区热点

今日社区讨论的焦点高度集中在**运行时切换带来的兼容性**、**多渠道消息网关的稳定性**以及**资源隔离机制**上：

- **[Codex 运行时对齐与 QA 机制讨论](https://github.com/openclaw/openclaw/issue/80319) (14 评论):** 社区成员深入讨论了 Codex 与原 Pi 运行时的工具调用对齐问题，澄清了部分 QA 环境下的误报，表明项目在核心引擎替换时的严谨态度。
- **[Slack 连接静默丢失](https://github.com/openclaw/openclaw/issue/72808) (16 评论):** 这是一个影响较大的 Bug，用户的 Slack 连接会在无任何报错的情况下断开且无法恢复，严重影响了生产环境的演示和日常使用。
- **[Dreaming 插件多智能体身份污染](https://github.com/openclaw/openclaw/issue/65374) (6 评论):** 社区指出内置的 Dreaming（反思/记忆）系统缺乏 Agent 边界隔离，导致多智能体设置下记忆串台，这是 AI 架构层面的重要反馈。
- **[可配置的流式看门狗超时](https://github.com/openclaw/openclaw/issue/68596) (12 评论):** 针对使用长思考模型（如 DeepSeek-R1）时频繁触发超时中断的痛点，用户呼吁开放相关阈值配置。

---

## 5. Bug 与稳定性

今日报告了大量行为异常和回归 Bug，系统稳定性面临一定考验，尤其是消息网关和上下文压缩模块：

1. **P0 - 网关与通道致命堵塞:**
   - **[Slack 启动阻塞事件循环](https://github.com/openclaw/openclaw/issue/78435) (4 评论):** Windows 环境下，Slack 频道的 `start-account` 阶段若与模型调用并发，会导致网关事件循环阻塞长达 5 分钟以上，致使整个系统瘫痪。
   - **[卡死的 Session 无法自动终止](https://github.com/openclaw/openclaw/issue/71127) (9 评论):** 系统检测到卡死的会话并发出 WARN，但缺乏自动恢复/终止机制，必须人工重启网关。
2. **P1 - 消息丢失与分发失败:**
   - **[Telegram 伪造回复与空回复](https://github.com/openclaw/openclaw/issue/70628) (6 评论):** 当智能体不生成回复时，Telegram DM 会向用户发送虚假的 "No added response from me." 气泡。
   - **[更新导致消息丢失](https://github.com/openclaw/openclaw/issue/71178) (5 评论):** 在智能体运行中途执行系统更新，会导致当轮生成的所有消息彻底丢失。
3. **P1 - 回归问题:**
   - **[UI 回复重复渲染](https://github.com/openclaw/openclaw/issue/71992) (6 评论):** Control UI 会出现完全重复的助手回复卡片。
   - **[Websocket 状态跳跃](https://github.com/openclaw/openclaw/issue/70164) (4 评论):** 输出事件跳过中间态，直接输出 `state:final`，导致前端难以处理。

---

## 6. 功能请求与路线图信号

结合开源社区提交的 FR 和正在进行中的 PR，OpenClaw 的下一步演进路线显露出以下特征：

- **沙箱与安全隔离增强：**
  - **请求：** [按需隔离的浏览器实例与代理支持](https://github.com/openclaw/openclaw/issue/37487) (4 评论)。
  - **请求：** [exec() 沙箱隔离改进](https://github.com/openclaw/openclaw/issue/58730) (4 评论)，受近期 Claude Code 泄露事件的启发。
  - **对应 PR：** [修复 Sandbox 中的环境变量传递](https://github.com/openclaw/openclaw/pull/44569)，表明官方正在加强沙箱能力。
- **UI 与交互体验扩展：**
  - **请求：** [UI 可视化浏览器面板管理](https://github.com/openclaw/openclaw/issue/63926) (4 评论)。
  - **请求：** [macOS 语音对语音实时通话支持](https://github.com/openclaw/openclaw/issue/71195) (5 评论)。
- **底层引擎与上下文控制：**
  - **请求：** [Skill 安装钩子脚本支持](https://github.com/openclaw/openclaw/issue/80213) (4 评论)。
  - **对应 PR：** [引入 Context Engine 拦截压缩机制](https://github.com/openclaw/openclaw/pull/81164)，这将为自定义长文本处理提供官方接口。

---

## 7. 用户反馈摘要

从今日的 Issue 动态中，可以提炼出用户的几个核心反馈维度：

- **痛点：多平台通讯的一致性较差。** 用户在 Slack、Telegram、Discord 的使用中频繁遇到掉线、消息不投递、假回复等问题。多通道架构虽然支持广泛，但可靠性亟待提升。
- **痛点：复杂模型（特别是长推理模型）的兼容性不佳。** 用户反馈 `kimi` 和 `DeepSeek` 模型在长对话和上下文压缩后容易出现 400 错误及 reasoning 字段丢失。
- **满意点：开源贡献响应迅速。** 如 memory-wiki 的权限提权漏洞被社区（@pgondhi987）发现后，在最新 beta 版中立即得到了修复。
- **使用场景拓展：** 出现了在 Android/Termux 环境下部署 OpenClaw 的需求（[PR #42895](https://github.com/openclaw/openclaw/pull/42895)），证明项目在便携设备上的运行受到关注。

---

## 8. 待处理积压

以下重要 Issue 和 PR 长期处于未决状态，建议核心维护团队关注：

- **长期挂起的架构重构 PR：**
  - [PR #69542](https://github.com/openclaw/openclaw/pull/69542): ACP 后端故障转移支持，标签为 `triage: dirty-candidate`，需进一步验证。
  - [PR #60551](https://github.com/openclaw/openclaw/pull/60551): 剥离内部推理前缀的防泄漏机制，对生产环境安全性至关重要，目前等待 `telegram-visible-proof`。
- **影响日常使用的未解 Issue：**
  - [Issue #72015](https://github.com/openclaw/openclaw/issue/72015): `active-memory` 插件在多智能体网关下导致过载和阻塞，目前无明确的修复时间表。
  - [Issue #54488](https://github.com/openclaw/openclaw/issue/54488): Followup drain 导致消息通道阻塞 20-30 分钟，属于严重的性能瓶颈。
- **底层机制改进：**
  - [Issue #37634](https://github.com/openclaw/openclaw/issue/37634): 沙箱工作空间在严格隔离模式下被错误挂载为只读，限制了沙箱内工具的正常执行。

---

## 横向生态对比

作为专注于 AI 智能体开源生态的技术分析师，基于 2026 年 5 月 13 日的各大项目社区动态，为您呈现横向对比分析报告如下：

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体聊天工具”向“多模态、多端协同与复杂任务调度”跨越的关键阶段**。项目重心普遍从基础对话能力，转移至多渠道网关稳定性、沙箱安全隔离及多智能体协作（ACP/A2A）等底层架构的重构上。随着大模型推理能力的增强，生态开始深度整合长思考模型、本地硬件加速及复杂记忆系统，一个以“AI 代理为中心，多协议互通”的个人/企业级自动化生态底座正在加速成型。

### 2. 各项目活跃度对比 (2026-05-13)

| 项目名称 | Issues 动态数 | PRs 动态数 | 今日合并 PR | 版本发布情况 | 健康度与评估状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 428 (新/活跃) | 500+ | 49 | 2 个 Beta 版 | ⚠️ 高压迭代，底层重构与稳定性挑战并存 |
| **CoPaw** | 31 | 39 | 26 | v1.1.7-beta.1 | 🟢 极度活跃，多智能体协议与桌面端并进 |
| **IronClaw** | 极高(推算) | 50+ | 25 | 无 (刚发 0.28.1) | 🟢 活跃，底座重构快速推进，多端适配中 |
| **ZeroClaw** | 13 | 50 | 18 | 无 | 🟢 优秀，高质量代码重构与Bug集中清理 |
| **LobsterAI** | 0 | 26 (剩1个) | 25 | 无 (即将发布) | 🟢 优秀，UI/UX与核心功能集中收敛合并 |
| **NanoBot** | 8 | 11+ | 11 | 无 | 🟢 良好，向多租户与企业级特性演进 |
| **PicoClaw** | 17 | 17 | 4 | Nightly 构建版 | 🟡 平稳，主打边缘与多模态能力拓展 |
| **Hermes Agent**| 42 | 50+ | 18 | 无 | 🟡 良好，核心流网关修复，但异构模型兼容受阻 |
| **NanoClaw** | 5 | 19 | 3 | 无 | 🟡 修复中，容器依赖安全风险排查 |
| **NullClaw** | 1 | 2 | 0 | 无 | 🟠 观望，底层通信重构审查中，关注A2A性能 |
| **Moltis** | 1 | 0 | 0 | 无 | 🔴 停滞，仅日常维护 |
| **ZeptoClaw** | 0 | 4 | 0 | 无 | 🔴 停滞，纯依赖自动更新 |
| **TinyClaw** | 0 | 0 | 0 | 无 | 🔴 静默 |

### 3. OpenClaw 在生态中的定位
*   **绝对的规模标杆与探路者**：相比于其他项目几十个 PR 的吞吐量，OpenClaw 单日超 500 个 PR 更新、400+ Issue 的数据量级展现出其庞大的社区基数与核心地位。
*   **技术路线的重度底层化**：当部分项目还在完善前端 UI 或基础接入时，OpenClaw 已经在死磕 Codex 运行时迁移、ACP 协议会话持久化、以及复杂的系统级防泄漏机制。
*   **优势与痛点并存**：其多渠道（Slack/TG/WhatsApp）和多模型支持最广泛，但“船大难掉头”，今日频发的网关致命堵塞、多智能体记忆串台等高优先级 Bug 表明，其在庞大架构下的系统稳定性正面临严峻考验。

### 4. 共同关注的技术方向
*   **多渠道网关的健壮性与富媒体支持**：
    *   *涉及项目*：OpenClaw, ZeroClaw, IronClaw, PicoClaw, NanoClaw。
    *   *诉求*：纯文本时代结束，Telegram/Discord/WeChat 等频道的图像/视频附件解析失败（如图标伪装成文字）、连接静默断开、长文本流式输出截断是全生态共同面临的 P0/P1 痛点。
*   **沙箱隔离与安全执行环境**：
    *   *涉及项目*：OpenClaw, PicoClaw, IronClaw。
    *   *诉求*：Agent 拥有代码执行能力后，通过 `find /` 越权枚举（PicoClaw）、多智能体工作区隔离、以及 Shell 脚本的恶意注入防范成为核心议题。
*   **异构/长推理模型（如 DeepSeek V4）兼容性**：
    *   *涉及项目*：OpenClaw, NanoBot, Hermes Agent。
    *   *诉求*：新一代模型（如 R1/V4）在 API 层面的 `reasoning_content` 参数和超长上下文导致大量 400 报错和看门狗超时，亟需底层运行时的适配与容错。
*   **记忆系统的隔离与高可用**：
    *   *涉及项目*：OpenClaw, NanoBot, CoPaw, LobsterAI。
    *   *诉求*：`MEMORY.md` 在多用户/多会话并发下的状态污染，以及向量数据库索引未实时刷新导致的 Agent “幻觉”和“失忆”。

### 5. 差异化定位分析
*   **全栈重型引擎**：**OpenClaw** 旨在成为涵盖一切协议和运行时的超级底座；**ZeroClaw** 则凭借极强的工程化能力（如统一限流重构）在重型架构中保持代码整洁。
*   **企业/团队级协同**：**IronClaw** (发力 Reborn 架构) 和 **NanoBot** (多租户隔离) 明确将矛头指向企业级应用，强调 OAuth、多级会话隔离和团队知识库共享。
*   **极客与多架构边缘计算**：**PicoClaw**（支持树莓派/NXP）、**NullClaw**（死磕 A2A 协议与 riscv64/musl 架构底座）具有极强的硬件亲和力，适合极客玩家的私有化极轻量部署。
*   **桌面端与个人体验**：**CoPaw** 和 **LobsterAI** 走的是 Tauri/Electron 桌面应用路线，在 UI 可视化、Mac 语音听写、本地文件系统打通上具备绝对优势，更贴近 C 端用户。

### 6. 社区热度与成熟度
*   **高压极速迭代期**：**OpenClaw**, **CoPaw**, **IronClaw**。处于功能大爆发后的阵痛期，Issue 和 PR 激增，版本发布频繁，但也伴随着阻断级 Bug 的涌现。
*   **质量收敛与重构期**：**ZeroClaw**, **LobsterAI**, **NanoBot**。高度关注代码重构和运行时的稳定性，吞吐量大但合并谨慎，为下一个大版本蓄力。
*   **长尾维护与概念验证期**：**NullClaw**, **Moltis**, **ZeptoClaw**。互动较低，主要依赖自动化工具或核心维护者推进单点底层技术。

### 7. 值得关注的趋势信号
1.  **“插件化”与“通讯协议”的标准化**：MCP (Model Context Protocol) 工具注入正成为标配，同时 A2A (Agent-to-Agent) 协议的性能瓶颈引起关注，预示着未来 Agent 间的通信将从目前的网关转发走向原生的流式标准。
2.  **Agent 的“拟人化”任务执行**：长任务中断后的上下文恢复（NanoBot, CoPaw）以及后台自动整理记忆（LobsterAI 的“记忆巩固”），标志着 Agent 正在从“无状态问答”向“有状态持续工作实体”演进。
3.  **本地算力与云端无缝切换**：针对 OpenVINO (Intel)、Runpod 等本地/边缘推理引擎的支持（PicoClaw, ZeroClaw）表明，兼顾隐私与算力的端云混合架构是个人 AI 助手的必然趋势。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-13)

## 1. 今日速览
NanoBot 项目在过去 24 小时内保持了**极高的开发活跃度与社区参与度**。虽然今日无新版本发布，但合并了高达 11 个 Pull Requests，代码合入量显著，显示出维护团队正在进行密集的功能迭代与代码重构。社区方面共有 8 条 Issues 更新（其中 5 条为新发或活跃议题），主要围绕近期更新的 `v0.1.5.post3` 版本在引入 DeepSeek V4 模型时产生的兼容性展开。整体而言，项目正处于从单用户工具向支持多租户、复杂企业级应用场景（如多级会话隔离、模型故障转移）演进的关键阶段。

## 2. 版本发布
今日无新版本发布。项目当前最新版本仍为 `v0.1.5.post3`，大量新特性与修复正处于高频 PR 合并期，预计正在为下一个 minor 或 patch 版本的发布积累代码。

## 3. 项目进展
今日共有 11 个 PR 被合并/关闭，项目在系统架构、渠道适配和底层稳定性上迈出了一大步：

- **架构与多租户演进**：
  - PR [#3749](https://github.com/HKUDS/nanobot/pull/3749): 引入多租户 WebUI 账号和用户状态隔离，标志着 NanoBot 正式支持多用户共享网关，这是一个重大的架构升级。
  - PR [#3729](https://github.com/HKUDS/nanobot/pull/3729): 重构了工具系统，从硬编码升级为**自描述插件架构**，大幅降低了后续新增工具的开发门槛。
  - PR [#3757](https://github.com/HKUDS/nanobot/pull/3757): 移除了基于异常控制的 `ask_user` 工具，改为更自然的对话回复，优化了控制流。
- **渠道适配与体验优化**：
  - PR [#3747](https://github.com/HKUDS/nanobot/pull/3747): 增加了飞书群组 `topic_isolation` 隔离开关，精准解决了用户多文件处理的痛点。
  - PR [#3751](https://github.com/HKUDS/nanobot/pull/3751): 修复了企业微信不能正确识别发送文件名的问题。
- **底层稳定性修复**：
  - PR [#3738](https://github.com/HKUDS/nanobot/pull/3738): 修复了火山引擎引擎 API 不兼容导致的参数冲突问题。
  - PR [#3635](https://github.com/HKUDS/nanobot/pull/3635): 软化了 SSRF 防护恢复机制，避免了安全拦截导致的运行时中断。

## 4. 社区热点
今日讨论热度最高的话题集中在**多会话协同**与**团队共享**上：
- **Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744) (👍 0, 评论 3)**: 团队合作场景下 `MEMORY.md` 的共享机制。多位用户在评论中探讨了在 IM 环境中多人复用同一个 Bot 时，记忆和上下文隔离的最佳实践，反映出 NanoBot 正在被越来越多地应用于小团队内部。
- **Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) (评论 2)**: 长任务中断后的上下文丢失问题。用户反馈在打断 Agent 循环测试时，Bot 会“忘记”刚才的上下文。这揭示了 Agent 在处理“打断”机制时的状态管理缺陷。
- **Issue [#3692](https://github.com/HKUDS/nanobot/issues/3692) (👍 1)**: 飞书群话题隔离功能的开关请求。此需求已被社区快速响应并合入（见 PR #3747）。

## 5. Bug 与稳定性
今日报告了多个针对 DeepSeek V4 模型的兼容性 Bug，且部分已有解决趋势：

1. **高严重程度**：DeepSeek V4 思考模式 API 报错
   - **Issue [#3753](https://github.com/HKUDS/nanobot/issues/3753) [CLOSED]** & **Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) [OPEN]**: 用户在使用 `deepseek-v4-flash` 时频繁触发 `reasoning_content` 400 错误。这是因为 `post3` 版本自动注入了不兼容的参数。目前官方建议临时禁用 `thinking_style`，等待底层适配。
2. **中等严重程度**：外部知识读取失效（幻觉问题）
   - **Issue [#3754](https://github.com/HKUDS/nanobot/issues/3754) [OPEN]**: 模型在处理常见知识的小文件时，跳过 `read_file` 工具直接使用自身知识“编造”内容。这是 Agent Tool 使用准确性的核心挑战，目前尚无修复 PR。
3. **低严重程度**：WebUI 导航体验与媒体文件残留
   - PR [#3759](https://github.com/HKUDS/nanobot/pull/3759) [CLOSED] 修复了 WebUI 默认加载最近会话而非新会话页面的问题。
   - PR [#3752](https://github.com/HKUDS/nanobot/pull/3752) [OPEN] 提出修复 WhatsApp 语音转写后媒体文件标签未清理导致 LLM 报错的问题。

## 6. 功能请求与路线图信号
从近期的 Issues 与 PRs 可以清晰看出项目近期的 Roadmap 信号：

- **动态模型切换与高可用**：用户呼吁支持 `/model` 斜杠命令以应对网络不稳定 ([#3742](https://github.com/HKUDS/nanobot/issues/3742))。这与今日开放的 PR [#3714](https://github.com/HKUDS/nanobot/pull/3714)（运行时预设切换）和 PR [#3756](https://github.com/HKUDS/nanobot/pull/3756)（模型故障转移 `fallback_models`）高度契合，**预计动态模型切换将成为下个版本的重头戏**。
- **长期任务与思考链路可视化**：PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) 正在引入 `LongTaskTool` 以解决多步 agent 任务中断问题；PR [#3655](https://github.com/HKUDS/nanobot/pull/3655) 加入了模型思考过程流式显示功能。
- **Web 端开放生态**：PR [#3750](https://github.com/HKUDS/nanobot/pull/3750) 提出接入 Atomic Chat 作为本地 LLM 提供商，进一步扩充了本地部署的模型矩阵。

## 7. 用户反馈摘要
从今日的 Issue 详情中可以提炼出以下真实痛点：
- **企业级诉求凸显**：用户不仅满足于把 AI 当作聊天机器人，更希望将其作为团队入口（#3744 中的多用户 MEMORY.md 机制探讨），这要求系统具备更强的租户隔离能力。
- **弱网环境体验差**：国内用户调用海外模型（如 Codex GPT-5.5）时面临频繁超时，急需智能重试和无缝降级机制。
- **Agent 幻觉与工具调度死板**：在指定读取特定 JSON 文件时，模型因“自以为知道”而跳过工具调用（#3754），用户期望在提示词工程或系统级约束上加强模型对工具的依赖度。

## 8. 待处理积压
- **[需关注] 长任务中断上下文丢失**：Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) 暂无官方明确的修复 PR。虽然 PR #3460 提出了长任务工具的草案，但尚未合并，建议维护者评估将其纳入主线以解决稳定性痛点。
- **[需评估] DeepSeek V4 系列兼容性批量报错**：Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) 目前处于 OPEN 状态且尚无针对 v4 `reasoning_content` 兼容性的专门修复 PR，由于 DeepSeek 模型在国内用户群中使用广泛，建议优先排期处理。
- **[需审查] 核心架构变更 PRs**：目前待合并的 8 个 PRs 中包含了模型切换、重试机制、API SSE 事件流等重要特性（如 [PR #3756](https://github.com/HKUDS/nanobot/pull/3756), [PR #3745](https://github.com/HKUDS/nanobot/pull/3745)），等待核心维护者进行 Code Review 以确保合并质量。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是 **Hermes Agent** 项目 2026 年 5 月 13 日的动态日报。本报告基于过去 24 小时的 GitHub 活动数据分析生成，旨在客观呈现项目健康度、社区动态及技术演进情况。

---

### 1. 今日速览

Hermes Agent 在过去 24 小时内保持了**极高的社区活跃度与开发推进速度**，共产生 50 条 Issue 更新（其中 42 条新开/活跃）和 50 条 PR 更新。项目当前的重心明显集中在**提高多平台网关稳定性（Telegram、Discord、Google Chat）以及解决模型提供商兼容性**上。多个长期存在的 P1 级核心 Bug（如 SSE 流式中断、Provider 配置失效）已被核心团队合并修复。此外，针对不同模型上下文窗口限制（Kimi、MiniMax 等）的错误处理成为了今日用户反馈的最高频痛点。

### 2. 版本发布

过去 24 小时内，项目**无**新版本 发布。尽管没有版本迭代，但主分支已合并大量核心修复代码（包括 SSE 流、CLI 配置等），预计项目正在为下一个 Patch 或 Minor 版本进行代码储备。

### 3. 项目进展

今日共有 18 个 PR 被合并或关闭，项目在网关稳定性、文档和安装体验上取得了实质性进展：

*   **核心流式网关修复**：[PR #24578](https://github.com/NousResearch/hermes-agent/pull/24578) 修复了 SSE 流式输出中 `response.completed` 事件因竞态条件丢失的严重 Bug，大幅提升了 API 网关的稳定性。
*   **安装体验与兼容性优化**：[PR #24515](https://github.com/NousResearch/hermes-agent/pull/24515) 解决了 Windows 平台因 `python-olm` 依赖导致的安装卡死问题；[PR #24208](https://github.com/NousResearch/hermes-agent/pull/24208) 修复了 MCP 工具中缺失数组 Schema 导致 OpenAI 接口 400 错误的兼容性问题。
*   **浏览器隔离与文档**：合并了 [PR #24499](https://github.com/NousResearch/hermes-agent/pull/24499)（支持外部管理的 Camofox 浏览器会话）及多个文档修复 PR（如 [PR #24577](https://github.com/NousResearch/hermes-agent/pull/24577)），降低了集成门槛。

### 4. 社区热点

今日社区讨论最激烈的问题集中在**模型提供商支持边界**与**代理协作架构**上：

*   **🔥 [Issue #24140](https://github.com/NousResearch/hermes-agent/issues/24140)**：`All models rejected with "context window below minimum 64,000 tokens" — Telegram completely down`（10 条评论）。
    *   **分析**：Kimi 和 MiniMax 等模型部分规格低于 Hermes 64K 上下文的硬性要求，导致部分平台（如 Telegram）直接瘫痪。这引发了社区关于“是否应该放宽硬编码限制”或“允许强制降级”的激烈讨论。
*   **🚀 [Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941)**：`[Feature]: Add Searxng as a default web search provider`（👍 28 个赞，3 条评论）。
    *   **分析**：高赞需求，反映出重度用户对隐私型搜索和去中心化工具的强烈诉求。
*   **🤖 [Issue #14853](https://github.com/NousResearch/hermes-agent/issues/14853)**：`[Feature]: Multi-Agent Discord channel collaboration`（6 条评论）。
    *   **分析**：企业及进阶用户对多代理协同的痛点，当前多 Agent 在同一频道内存在“信息孤岛”，急需上下文共享机制。

### 5. Bug 与稳定性

今日报告了多个导致服务中断或体验受损的 Bug，按严重程度排列如下：

*   **[P1] CLI Provider 读取失败**：[Issue #24574](https://github.com/NousResearch/hermes-agent/pull/24574)
    *   **现象**：通过 `hermes config set provider` 设置后，交互模式仍报 "No inference provider configured"。
    *   **状态**：✅ **已有 Fix PR**（已合并）。
*   **[P1] Windows 安装阻断与卡死**：[Issue #24515](https://github.com/NousResearch/hermes-agent/pull/24515)
    *   **现象**：在 Windows 上由于依赖包缺少 `make` 工具导致安装彻底卡住。
    *   **状态**：✅ **已有 Fix PR**（已合并）。
*   **[P2] macOS Intel 资源缺失**：[Issue #24530](https://github.com/NousResearch/hermes-agent/issues/24530)
    *   **现象**：`computer-use install` 在 Intel Mac 上因缺少 x86_64 发布包而失败。
    *   **状态**：⚠️ **等待官方处理**（属上游打包问题）。
*   **[P2] QQ Bot/WebSocket 静默断连**：[Issue #21633](https://github.com/NousResearch/hermes-agent/issues/21633)
    *   **现象**：心跳超时后无重连机制，导致 Bot 离线。
    *   **状态**：⚠️ **等待官方处理**。

### 6. 功能请求与路线图信号

今日出现了一些具有明确路线图意义的 Feature 动作：

*   **插件生态系统基建**：[PR #24580](https://github.com/NousResearch/hermes-agent/pull/24580) 提交了 `PluginRegistryAPI`，引入了分布式插件脚手架和注册表功能。这标志着 Hermes 正式向类似 Homebrew 的社区插件生态演进。
*   **LLM 速度补充**：[Issue #24512](https://github.com/NousResearch/hermes-agent/issues/24512) 强烈请求集成 Groq。随着高并发低延迟场景增多，Groq 等专用推理后端的集成已提上日程。
*   **持久化子代理**：[Issue #21303](https://github.com/NousResearch/hermes-agent/issues/21303) 探讨了私有生命周期子代理的架构。这可能是 Agent 下一版本向“多智能体调度中心”转型的雏形。

### 7. 用户反馈摘要

从近期Issue及PR的反馈中，可以提炼出以下核心用户画像与痛点：

1.  **本地化与配置心智负担重**：[Issue #13548](https://github.com/NousResearch/hermes-agent/issues/13548) 显示，基于 PIP 的本地部署依然存在较多环境冲突，Mac/Windows 用户在安装配置（如 ACP 组件）时极易遇到权限或依赖阻断。
2.  **更新机制引发“灾难”**：[Issue #24541](https://github.com/NousResearch/hermes-agent/issues/24541) 中，用户反馈 `hermes update` 触发了底层的 `git reset --hard`，导致未备份的自定义助手被全部清空。这是一个极度危险的破坏性体验，亟需官方在更新流中增加数据备份拦截。
3.  **对异构模型容忍度低**：[Issue #10449](https://github.com/NousResearch/hermes-agent/issues/10449) 与相关 Kimi 报错表明，Hermes 对“非 64K 以上高端模型”的拒绝策略过于生硬，阻碍了希望在轻量模型上运行基础任务的用户。

### 8. 待处理积压

*   **[长期未决] 流式输出截断**：[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) - `Error: Response truncated due to output length limit`。该 Bug 导致长文本生成中断，存在已验证的报错日志，已持续半个月（评论 24 条），尚未见官方提交针对性的修复 PR，建议核心 Maintainer 优先排期。
*   **[长期未决] WebUI 进度不可见**：[Issue #5352](https://github.com/NousResearch/hermes-agent/issues/5352)（👍 3 个赞）- 用户在使用 Open WebUI 时，无法看到工具调用的中间执行过程，严重影响 Agent 执行“透明度”，目前仍处于 Open 状态无跟进。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 2026 年 5 月 13 日 PicoClaw (github.com/sipeed/picoclaw) 项目动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
PicoClaw 项目在过去 24 小时内保持**高活跃度**，社区互动与代码提交频繁。今日共处理了 17 条 Issue 动态（其中 6 条关闭）和 17 条 PR 动态（其中 4 条合并/关闭）。项目按计划推送了 `v0.2.8` 的 Nightly 构建版本。整体来看，项目目前正处于**积极打磨稳定性和扩展多模态/多渠道能力**的阶段，不仅有针对核心安全沙箱的修复，还迎来了多个针对外部模型提供商和富媒体消息支持的重量级 PR。

## 2. 版本发布
- **[nightly] Nightly Build for v0.2.8-nightly.20260512.777269b4**
  - **详情**：基于 `main` 分支的自动化构建。
  - **注意**：属于测试版本，可能存在不稳定情况，主要供开发者和尝鲜用户测试。
  - **完整变更日志**：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. 项目进展
今日有 4 个 PR 被成功合并或关闭，项目在文档完善和底层体验优化上取得了实质进展：
- **Web UI 配置扩展**：合并了 [PR #2852 docs: add evolution config controls](https://github.com/sipeed/picoclaw/pull/2852)，正式在 Web 端增加了 Agent 自我演进相关配置的说明与界面支持。
- **硬件生态拓展**：合并了 [PR #2854 docs: add LicheeRV-Claw AliExpress news](https://github.com/sipeed/picoclaw/pull/2854)，更新了关于 LicheeRV-Claw 硬件发售的新闻。
- **CLI 引导与构建优化**：关闭了 [PR #2490](https://github.com/sipeed/picoclaw/pull/2490) (修复配置文件引导错误) 和 [PR #2505](https://github.com/sipeed/picoclaw/pull/2505) (优化工作区文件的嵌入过程)，提升了从源码构建和初次上手的体验。

## 4. 社区热点
今日社区关注度最高的问题集中在**跨平台支持、安全机制和流式输出**：
- **安全沙箱逃逸漏洞 ([Issue #2688](https://github.com/sipeed/picoclaw/issues/2688))**：用户发现可以使用 `find /` 命令绕过工作区限制枚举系统文件，引发了关于 Agent 安全边界的讨论。
- **WhatsApp 编译支持请求 ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625))**：树莓派用户反馈默认 ARM64 构建不包含 WhatsApp 支持，该功能请求获得了 1 个赞和持续讨论。
- **流式 HTTP 请求配置 ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404))**：用户希望能通过配置文件直接支持向 LLM 后端发送流式请求，该需求获得了 1 个赞，社区对后端性能优化的呼声较高。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的 Bug，部分已产生崩溃和阻塞：
- **[P0 严重] 僵尸 PID 导致启动崩溃循环 ([Issue #2720](https://github.com/sipeed/picoclaw/issues/2720))**：Gateway 单例检查仅验证 PID 是否存在，未验证是否为本网关进程，导致系统 PID 复用时陷入崩溃循环。
  - *修复状态*：已有修复 PR [PR #2813](https://github.com/sipeed/picoclaw/pull/2813)，等待合并。
- **[P0 严重] 安全：文件系统沙箱绕过 ([Issue #2688](https://github.com/sipeed/picoclaw/issues/2688))**：`find /` 可列举工作区外路径。
  - *修复状态*：已有修复 PR [PR #2693](https://github.com/sipeed/picoclaw/pull/2693)，等待合并。
- **[P1 高] v0.2.8 网关无 Channel 启动 ([Issue #2742](https://github.com/sipeed/picoclaw/issues/2742))**：Telegram 等渠道在配置启用后，网关启动显示无可用 Channel。
- **[P1 高] Android ADB 证书验证失败 ([Issue #2694](https://github.com/sipeed/picoclaw/issues/2694))**：在 Android 环境运行时报 `x509` 证书验证失败。

## 6. 功能请求与路线图信号
通过近期 Issue 和 PR，可以看出项目即将在**多模态和外围生态**迎来大更新：
- **多模态与富媒体消息**：新开 Issue [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) 要求支持富媒体附件。随后立即产生了对应的实现 PR [PR #2856](https://github.com/sipeed/picoclaw/pull/2856)，这标志着 PicoClaw 很快将突破纯文本交互的瓶颈。
- **流式思考与视频支持**：[PR #2755](https://github.com/sipeed/picoclaw/pull/2755) 引入了对 `streaming reasoning_content` 和视频媒体的支持，由小米 Mimo 模型驱动，这极大概率会在下个大版本中落地。
- **新搜索引擎提供商**：[PR #2763](https://github.com/sipeed/picoclaw/pull/2763) 为 `web_search` 工具接入了 Gemini 搜索。
- **本地推理扩展**：[PR #2703](https://github.com/sipeed/picoclaw/pull/2703) 增加了对 Intel OpenVINO 模型服务器的支持，扩展了在 Intel CPU/GPU/NPU 上的本地部署能力。

## 7. 用户反馈摘要
从真实的 Issue 反馈中，提炼出以下典型的用户画像和痛点：
- **边缘计算与嵌入式用户群稳固**：用户在 NXP i.MX93 ([Issue #2646](https://github.com/sipeed/picoclaw/issues/2646)) 和树莓派 Zero ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625)) 上积极测试。痛点：特定硬件（如 WhatsApp 依赖）需要自行编译源码，门槛较高。
- **配置迁移体验有待完善**：高级用户指出，虽然存在配置自动迁移机制，但 `config.example.json` 依然过时 ([Issue #2771](https://github.com/sipeed/picoclaw/issues/2771))。
- **开发者体验 (DX) 反馈**：开发者反馈直接从 `main` 分支构建时，存在 `picoclaw-launcher` 找不到的问题 ([Issue #2753](https://github.com/sipeed/picoclaw/issues/2753))，说明构建系统的文档或脚本需要更新。

## 8. 待处理积压
以下重要 PR 和 Issue 处于 Open 或 Stale 状态超过一周，建议维护团队重点关注以推进项目迭代：
- **性能优化 PR**：[PR #2781 perf: reduce skill catalog token usage](https://github.com/sipeed/picoclaw/pull/2781) —— 旨在减少系统提示中的冗余 Token 开销，对降低 API 成本至关重要。
- **Web 聊天流式输出**：[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) —— 自 3 月 24 日提出至今，作为高频需求仍处于 Stale 状态。
- **Cron 定时任务报错**：[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757) —— 机器人执行每小时定时任务时触发 Channel 错误，影响长期运行的任务型 Agent 稳定性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份 2026-05-13 的 NanoClaw 项目动态日报基于您提供的 GitHub 数据为您生成。

---

# 📊 NanoClaw 开源项目日报 (2026-05-13)

## 1. 今日速览
NanoClaw 项目今日保持着**高度活跃且快速迭代**的状态。过去 24 小时内，社区共产生了 **5 个新增/活跃的 Issue** 和高达 **19 个更新的 Pull Request**（其中包含大量修复与功能增强）。项目当前的焦点明显集中在**安全加固（特别是 OneCLI 依赖项）**、**多渠道多媒体附件处理**以及**容器编排稳定性**上。尽管今日没有发布新版本，但高达 16 个待合并的 PR 表明项目正处于一个重大功能整合期的前夕。

## 2. 版本发布
**无新版本发布。**（当前有大量高优先级的 Fix PR 等待合并，预计项目将在解决当前安全与稳定性问题后进行集中发布）。

## 3. 项目进展
今日共有 3 个 PR 被关闭/合并，在容器稳定性和依赖管理上取得了实质性进展：
*   **容器依赖版本锁定**：PR [#2425](https://github.com/qwibitai/nanoclaw/pull/2425) (davekim917) 完成了容器内 CLI 和核心依赖包的版本刷新与锁定（例如 Claude Code 升级至 2.1.139），这大幅提升了构建的可复现性。
*   **容器输出解析容错**：PR [#1912](https://github.com/qwibitai/nanoclaw/pull/1912) (boskodev790) 修复了当代理容器没有产生标准输出时的静默失败问题，现在会抛出清晰的错误提示。
*   **技能集成探索关闭**：PR [#2422](https://github.com/qwibitai/nanoclaw/pull/2422) (TriKro) 暂时关闭了关于 Google Auth 基础技能的集成，可能需要重新调整设计方向。

## 4. 社区热点
今日最核心的讨论围绕着**底层架构依赖与安全隐患**展开：
*   **关于抛弃/改进 OneCLI 的讨论**：Issue [#2437](https://github.com/qwibitai/nanoclaw/issues/2437) (carderne) 提出了一个直击项目定位的灵魂拷问——NanoClaw 作为主打轻量级的 OpenClaw 替代品，当前对 OneCLI 的重度依赖是否违背了初衷？这一讨论引发了社区对项目架构未来走向的思考。
*   **OneCLI 严重安全隐患暴露**：Issue [#2433](https://github.com/qwibitai/nanoclaw/issues/2433) (glifocat) 指出，在裸机 Linux 部署时，OneCLI 会将 Postgres (5432) 和 Admin API 暴露在 `docker0` 网桥上，存在极高安全风险。目前维护者已提交高优修复 PR。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有对应的修复 PR：
*   🔴 **严重：OneCLI 端口违规绑定** (Issue [#2433](https://github.com/qwibitai/nanoclaw/issues/2433)) -> **[已有 Fix PR #2434](https://github.com/qwibitai/nanoclaw/pull/2434)**。修复方案为将其限制在 loopback 回环地址。
*   🔴 **严重：消息投递静默丢失** (Issue [#2423](https://github.com/qwibitai/nanoclaw/issues/2423))。当 Telegram 等渠道发生限流或 API 错误时，状态被标记为 failed 但不通知 Agent，导致 AI 出现“幻觉般的未回复”。（目前尚处 Open 状态，需紧急处理）。
*   🟡 **中等：容器重启导致挂载丢失** (Issue [#2424](https://github.com/qwibitai/nanoclaw/issues/2424))。Daemon 重启后，部分代理容器的 `/workspace/agent` 绑定会意外丢失。
*   🟡 **中等：Discord/WhatsApp 多媒体解析失败** (Issue [#2426](https://github.com/qwibitai/nanoclaw/issues/2426))。LLM 只能看到 `[image: file.png]` 而无法实际读取图像。-> **[已有 Fix PR #2438](https://github.com/qwibitai/nanoclaw/pull/2438) 和 [#2427](https://github.com/qwibitai/nanoclaw/pull/2427)**。

## 6. 功能请求与路线图信号
通过今日的 PR 动态，可以看出项目正在积极拓展以下路线图：
*   **多渠道精细化路由**：PR [#2431](https://github.com/qwibitai/nanoclaw/pull/2431) 引入了条件线程策略，允许 Slack 适配器在 DM 中作为顶级消息发送，而在频道中自动转换为线程回复，极大提升了多渠道用户体验。
*   **MCP (Model Context Protocol) 生态扩展**：PR [#2430](https://github.com/qwibitai/nanoclaw/pull/2430) 添加了 Google Drive MCP 工具的支持，结合之前的 Gmail 和日历技能，NanoClaw 正迅速演变为一个强大的个人数字助手中心。
*   **用户自定义配置增强**：PR [#2432](https://github.com/qwibitai/nanoclaw/pull/2432) 增加了通过 CLI 管理容器挂载目录的命令，降低了手动修改 JSON 配置文件的门槛。

## 7. 用户反馈摘要
从今日的 Issues 和 PRs 提炼出用户的真实痛点如下：
*   **部署与依赖体验割裂**：用户非常看重 NanoClaw 的“一键启动 (`pnpm run dev`)”体验，但对 OneCLI 带来的额外复杂度和安全风险感到不满。
*   **Agent “失忆”与“黑盒”**：用户在将 NanoClaw 接入 Slack、Discord 和 Telegram 时，最头疼的是**附件无法识别**以及**消息发送失败但 Agent 本身不知道**的问题，这破坏了 AI 的可靠性。
*   **对容器底层控制权的需求**：进阶用户在使用 Podman (PR [#2421](https://github.com/qwibitai/nanoclaw/pull/2421)) 和自定义挂载目录时遇到阻碍，表明社区中存在一批将其作为重型自动化工具使用的高级玩家。

## 8. 待处理积压
以下长期活跃但悬而未决的重要 Issue/PR 值得维护团队关注：
*   **环境变量健壮性问题**：PR [#1916](https://github.com/qwibitai/nanoclaw/pull/1916) 提出于 4 月底，旨在防止数值型环境变量输入非数字导致系统崩溃，该 PR 长期未合并，属于低成本高收益的稳定性修复。
*   **Slack 非标准斜杠命令静默丢弃**：PR [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) 修复了 Agent SDK 未知命令的解析问题。
*   **Podman 兼容性支持**：PR [#2421](https://github.com/qwibitai/nanoclaw/pull/2421) 提出了对 Fedora podman 的支持，对于扩大开源社区部署场景具有重要意义，需维护者进行评审。

---
*数据来源：NanoClaw GitHub Repository Metrics* | *分析师：AI Insights*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-13)

**分析周期**：2026-05-12 12:00 UTC - 2026-05-13 12:00 UTC
**项目定位**：AI 智能体与个人 AI 助手领域开源项目
**数据来源**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

### 1. 今日速览
过去 24 小时，NullClaw 项目整体保持着稳健的社区活跃度，主要聚焦于底层通信网关的健壮性建设与跨协议性能优化。今日无新版本发布，也没有合并任何代码，表明项目目前正处于一个密集的开发提交期与代码审查期。开发者在底层架构方面发力，提交了针对 Discord/Websocket 的稳定性重构以及同步 Webhook 机制的重要 PR。同时，社区用户开始关注 A2A（Agent-to-Agent）协议在项目中的实际运行性能。整体来看，项目基础设施正在夯实，为后续多智能体复杂调度做准备。

### 2. 版本发布
**本日无新版本发布。** 项目主干分支目前处于功能迭代积累阶段。

### 3. 项目进展
今日虽然没有 PR 被合并，但有 2 个处于 **OPEN** 状态的核心 PR 正在推进中，它们均与底层的通信与网关机制息息相关，对提升 AI 智能体的任务调度可靠性至关重要：

*   **PR #912 [OPEN] `feat(gateway): synchronous /webhook for paired-token workers`**
    *   **作者**: Kures
    *   **链接**: [nullclaw/nullclaw PR #912](https://github.com/nullclaw/nullclaw/pull/912)
    *   **进展说明**: 该 PR 旨在为成对令牌 workers 引入同步 `/webhook` 端点。据 PR 描述，此举填补了集成分析文档中标记为 "HIGH PRIORITY" 的核心缺陷。该功能的落地将显著提升 NullClaw 与外部系统（如 nullboiler 调度器）交互时的任务分发与确认能力，是完善智能体网关调度的重要拼图。
*   **PR #910 [OPEN] `fix(discord,websocket): gateway stability — watchdog, backoff, interrupt-safe stop, TLS leak fix`**
    *   **作者**: vernonstinebaker
    *   **链接**: [nullclaw/nullclaw PR #910](https://github.com/nullclaw/nullclaw/pull/910)
    *   **进展说明**: 这是一个提升网关稳定性的重量级修复 PR。引入了 5 项核心修复（包括看门狗机制、退避策略、中断安全停止以及 TLS 内存泄漏修复）。值得注意的是，提交者已在 macOS arm64、Linux aarch64 (musl)、Linux riscv64 (musl) 及 Android aarch64 四种不同架构的节点上进行了长达 12 小时的过夜冒烟测试，且全部通过。多架构的稳定性测试表明该项目在跨平台部署兼容性上要求极高。

### 4. 社区热点
今日社区最值得关注的是一条关于底层协议性能的探讨：

*   **Issue #913 [OPEN] `a2a performance?`**
    *   **作者**: jacktang
    *   **链接**: [nullclaw/nullclaw Issue #913](https://github.com/nullclaw/nullclaw/issues/913)
    *   **分析**: 该用户提出希望获取 NullClaw 中 A2A (Agent-to-Agent) 协议实现的基准测试数据，并指出**“原生 nullclaw 消息/响应比 a2a 更快”**。在多智能体编排成为趋势的当下，A2A 通信的延迟直接决定复杂任务的执行效率。此议题反映了部分开发者在接入标准 A2A 协议时遇到了性能损耗，可能促使维护者在后续版本中优化协议序列化/反序列化机制或提供性能跑分面板。

### 5. Bug 与稳定性
今日未收到常规意义上的功能性 Bug 报告，但项目目前的 PR 活动主要集中在解决底层的**隐患与稳定性痛点**：

1.  **内存泄漏与长连接稳定性（已有 Fix PR）**：如 PR #910 中提及的 Discord/WebSocket 网关 TLS 内存泄漏及长时间运行掉线问题。由于智能体通常需要长时间保持在线状态，此类底层修复至关重要。
2.  **A2A 协议性能衰退/瓶颈（未确认）**：Issue #913 指出的 A2A 协议通信延迟高于原生通信，可能暗示在协议适配层存在解析瓶颈。目前尚处于提问阶段，待维护者确认并复现。

### 6. 功能请求与路线图信号
*   **Webhook 同步机制与任务分发**：从 PR #912 的动作可以看出，NullClaw 正在积极构建其作为“AI 智能体网关”的能力。通过实现 `synchronous /webhook`，项目正在为外部触发式智能体提供更可靠的消息确认机制。
*   **性能 Benchmark 需求**：Issue #913 传递出社区对“基准测试数据”的强烈需求。预计在下一阶段，包含官方的 A2A 及原生消息吞吐量 Benchmark 脚本或报告可能会被纳入版本路线图。

### 7. 用户反馈摘要
从今日的唯一一条 Issue 中可以提取出以下真实的用户画像：
*   **核心诉求**：用户（特别是有一定深度的开发者）非常看重 AI 智能体通信的**低延迟**表现。
*   **使用场景**：部分重度用户正在并行测试原生 NullClaw API 与标准化 A2A 协议之间的表现差异，寻找最优的智能体互联方案。
*   **痛点**：官方目前缺乏公开的性能基准测试，导致用户在进行架构选型（选择原生接入还是 A2A接入）时缺乏数据支撑。

### 8. 待处理积压
结合今日数据，以下领域需要维护团队重点关注：
*   **[性能答疑]** [Issue #913](https://github.com/nullclaw/nullclaw/issues/913) 需要核心开发者介入进行性能剖析，解答原生消息与 A2A 的架构差异及性能折衷。
*   **[代码审查]** [PR #910](https://github.com/nullclaw/nullclaw/pull/910) 包含了大量底层网关重构及跨平台测试数据，建议优先进行代码审查。由于其修复了 TLS 内存泄漏等严重隐患，尽早合入主干将极大提升广大用户的部署稳定性。
*   **[架构核对]** [PR #912](https://github.com/nullclaw/nullclaw/pull/912) 涉及到高优先级的集成缺口填补，需维护者确认其同步机制是否会带来潜在的 Webhook 超时阻塞风险。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-05-13)

## 1. 今日速览
IronClaw 在过去 24 小时内保持了**极高的开发活跃度与社区热度**。项目刚刚发布了重要的 `v0.28.1` 版本，主要打通了 WeChat 和 Slack 等渠道的底层绑定，随之而来的是 QA 与真实用户对新版本渠道集成稳定性的集中测试。核心开发团队（以 @serrrfirat 为代表）正全力推进底层的 **"Reborn" 架构重构**，今日合并了大量涉及内核调度、权限隔离和运行时的基础 PR。虽然存在一些针对新功能的 UI 和 OAuth 认证阻塞性 Bug，但整体来看，项目正处于“功能大版本发布后的快速修补与底层架构并行演进”的健康状态。

---

## 2. 版本发布
- **最新版本**: [ironclaw-v0.28.1](https://github.com/nearai/ironclaw/releases/tag/v0.28.1) (发布于 2026-05-11)
- **核心更新**:
  - **新增渠道能力**：增加了 `pairing_approve` 工具，用于通过聊天界面直接完成 Slack 绑定审批 ([PR #3396](https://github.com/nearai/ironclaw/pull/3396))。
  - **完善微信集成**：添加了 WeChat registry artifact 的元数据支持 ([PR #3386](https://github.com/nearai/ironclaw/pull/3386))。
  - *(注：Release notes 有截断，具体破坏性变更需参考完整文档，但从社区反馈来看主要向下兼容)*

---

## 3. 项目进展
今日共有 25 个 PR 被合并或关闭，25 个 PR 待合并。项目的核心进展集中在 **Reborn 架构的底层铺设与安全性加固**上，主要产出包括：
- **运行时与调度改进**：
  - 合并了 Reborn 的具体 `TurnRunner` worker 组合实现，确立了任务队列与心跳机制的基础 ([Issue #3404](https://github.com/nearai/ironclaw/issues/3404))。
  - 关闭了内存和技能上下文的适配器 Issue，完善了生产级别的隔离规则 ([Issue #3431](https://github.com/nearai/ironclaw/issues/3431), [Issue #3432](https://github.com/nearai/ironclaw/issues/3432))。
- **安全与权限控制**：
  - 强制执行了 Installed-skill 的只读工具调度上限，防止越权执行 ([PR #3506](https://github.com/nearai/ironclaw/pull/3506))。
  - 实现了非信任技能上下文的信封封装，确保模型可见的输入严格过滤指令注入风险 ([PR #3505](https://github.com/nearai/ironclaw/pull/3505))。
- **发现与引导体验修复**：
  - 修复了本地 Web UI 在引导过程中不可见的问题，极大改善了新用户的初次部署体验 ([PR #3510](https://github.com/nearai/ironclaw/pull/3510))。

---

## 4. 社区热点
今日社区讨论和反馈主要集中在刚发布的新版本渠道连通性上：
- **Google Sheets/Gmail OAuth 阻断**：多个开发者反馈在使用 Telegram 触发 Google 套件 OAuth 时遇到 400/502 错误。其中 [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) 获得了高达 11 条评论的讨论，大家正在排查回调链接的异常行为。
- **Telegram 渠道反馈**：[Issue #3533](https://github.com/nearai/ironclaw/issues/3533) 指出 v0.28.1 版本在 Telegram 的自动设置指令过时，导致用户需要进行多余的手动步骤，QA 和社区成员正在此活跃交流。
- **Reborn 架构规范探讨**：核心开发者提出了 Reborn 级别的 Loop hooks 路线图规划 ([Issue #3524](https://github.com/nearai/ironclaw/issues/3524))，旨在不削弱现有边界的情况下引入一流的 Hook 支持，属于指导项目未来走向的重要头脑风暴。

---

## 5. Bug 与稳定性
今日报告了数个高优先级（P1/P2）的 Bug，尤其集中在多渠道通信的认证与 UI 展示上：
- 🔴 **[P1] Gmail 认证失败引发会话阻塞**：从 Telegram 发起的 Gmail 连接在认证失败（400错误）后，即使执行 `/clear` 也无法继续对话 ([Issue #3320](https://github.com/nearai/ironclaw/issues/3320))。
- 🔴 **[P1] UI 时间戳显示错误**：在 v0.28.1 环境下，UI 聊天界面的时间戳未能正确反映消息接收时间 ([Issue #3535](https://github.com/nearai/ironclaw/issues/3535))。
- 🔴 **[P1] Telegram 设置指引失效**：v0.28.1 的 UI 没有自动配置 Telegram，且向用户展示了过时的设置步骤 ([Issue #3533](https://github.com/nearai/ironclaw/issues/3533))。
- 🟡 **[P2] V2 审批流缺陷**：V2 引擎的审批流存在提示不清、路由错误等问题，强制顺序执行降低了体验 ([Issue #2991](https://github.com/nearai/ironclaw/issues/2991))。
- ⚠️ **自动化预警**：Nightly E2E 测试失败 ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447))，需要排查是否由近期合并的 Reborn 调度代码引起。

---

## 6. 功能请求与路线图信号
从最新的 Issues 可以清晰看出项目下一阶段的演进重点：
- **内存作为用户态能力包**：提议将 `ironclaw_memory` 重构为可插拔的“能力包”，以便兼容 Honcho、mem0 等第三方记忆模块 ([Issue #3537](https://github.com/nearai/ironclaw/issues/3537))。*预计这将是 Reborn 稳定后的首要任务。*
- **调试工具链完善**：社区请求开发一种能够一键下载调试日志的工具 ([Issue #3534](https://github.com/nearai/ironclaw/issues/3534))，这对于复杂 Agent 链路的排错至关重要。
- **Web UI 发现机制**：针对本地部署 Web UI 难以被发现的问题，社区已提交修复 PR ([PR #3510](https://github.com/nearai/ironclaw/pull/3510)) 并被纳入主线。
- **微信文档补齐**：随着 v0.28.1 微信渠道基本可用，开发者已提单要求完善相关文档 ([Issue #3515](https://github.com/nearai/ironclaw/issues/3515))。

---

## 7. 用户反馈摘要
综合今日的 Issue 描述，提炼出以下真实用户痛点：
- **多端体验割裂**：用户强烈依赖 Telegram 与 IronClaw 交互，但在 Telegram 中触发 Gmail、Sheets 等 OAuth 认证时，极易遭遇 502/400 错误且会导致 Agent 假死，情绪较为受挫。
- **本地部署心智负担重**：新用户在进行本地 Onboard 时，很难发现默认隐藏的本地 Web UI，且 DB 和 Secrets 的初始化配置常报出难以理解的异常（如 [Issue #2752](https://github.com/nearai/ironclaw/issues/2752)），说明开箱即用的体验仍有优化空间。
- **对 Reborn 的期待**：高级用户和贡献者对底层的 Reborn 拆分（如独立二进制文件 `ironclaw-reborn` 期望，见 [Issue #3069](https://github.com/nearai/ironclaw/issues/3069)）表现出极大兴趣，期待更强的隔离与扩展能力。

---

## 8. 待处理积压
以下重要/高风险任务需要项目维护者（Maintainer）投入精力跟进：
- 📌 **NEAR 基金会实例 Telegram 连接失效**：[Issue #2902](https://github.com/nearai/ironclaw/issues/2902) 自 4 月下旬一直处于 Open 状态，严重影响了特定官方组织的使用。
- 📌 **V2 引擎的 HTTP 工具引导缺失**：[Issue #3034](https://github.com/nearai/ironclaw/issues/3034) 指出 HTTP 工具默认被禁用且无引导，属于流程阻塞点。
- 📌 **大量 Open 状态的 Reborn XL 级 PR**：目前有超过 5 个标记为 `size: XL` 的 Reborn 架构 PR 处于 Open 状态（如 [PR #3355](https://github.com/nearai/ironclaw/pull/3355), [PR #3469](https://github.com/nearai/ironclaw/pull/3469)），鉴于其 `risk: low/medium` 属性，建议尽快排期 Review，避免合并地狱。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI (github.com/netease-youdao/LobsterAI)** 项目 2026-05-13 的动态日报。

### 1. 今日速览
过去 24 小时，LobsterAI 项目的核心开发活动异常活跃。项目在 0 个新 Issue 报告的情况下，**集中处理并关闭了 25 个 Pull Requests**，目前仅剩 1 个依赖更新 PR 处于待合并状态。这表明项目当前正处于**密集的代码整合与功能迭代阶段**（疑似为最新版本发布前的集中清理）。开发重心主要集中在**桌面端（Electron）多核心功能（如语音输入、Artifacts 可视化、IM多Agent协作）的深度打磨与 UI 优化**上，项目的整体健康度和研发推进速度极佳。

### 2. 版本发布
今日无新版本发布记录。（*注：鉴于合并了包含大量新特性的 Release PR #1961，预计近期将会有新的正式版本 Tag 释出。*）

### 3. 项目进展
今日项目取得了突破性进展，共合并/关闭了 25 个 PRs，核心进展如下：

*   **阶段性代码合并 (Release/2026.5.11)**：PR [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) 成功合并，这是一个大型的发布前置 PR。它引入了重磅功能 **“梦幻记忆巩固”**（基于后台任务和定时的记忆整理机制），并将有道笔记技能升级至 v1.0.9。
*   **核心功能修复与强化**：
    *   **Artifacts 组件**：修复了 Mermaid 缩放滚动问题，并增加了图片拷贝至剪贴板功能 ([#1958](https://github.com/netease-youdao/LobsterAI/pull/1958))。
    *   **多智能体 IM 协作**：修复了多 Agent 切换时 IM 功能失效的严重 Bug ([#1960](https://github.com/netease-youdao/LobsterAI/pull/1960))。
    *   **跨平台路径问题**：修复了 Windows 环境下，中文路径中 Artifacts 无法在浏览器中打开的痛点 ([#1955](https://github.com/netease-youdao/LobsterAI/pull/1955))。
*   **全局 UI/UX 深度重构**：开发者 `fisherdaddy` 集中合并了超过 10 个 UI 优化相关的 PR（如 [#1959](https://github.com/netease-youdao/LobsterAI/pull/1959), [#1954](https://github.com/netease-youdao/LobsterAI/pull/1954), [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904)），重构了默认历史记录样式、Agent 布局、模型选择及技能输入 UI，并赋予了每个 Agent 独立的工作目录。

### 4. 社区热点
由于今日无活跃的 Issue 且 PR 评论数据暂未完全沉淀，热点主要体现在高频的核心代码提交上：
*   **macOS 语音输入的深度重构**：今日有 3 个相关的 PR 被密集合并 ([#1952](https://github.com/netease-youdao/LobsterAI/pull/1952), [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956), [#1957](https://github.com/netease-youdao/LobsterAI/pull/1957))。开发者重构了系统听写的调用逻辑（优先使用 Edit 菜单），并完善了 macOS 辅助功能权限拒绝后的 Toast 提示。这种针对特定系统体验的深度 Hack 体现了项目对用户体验细节的极致追求。
*   **依赖更新**：由 `dependabot[bot]` 发起的 Electron 版本跨大版本升级（从 40.2.1 升级至 42.0.1）的 PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 重新被激活，目前在待合并队列中。

### 5. Bug 与稳定性
今日无用户/社区报告的新 Bug，但开发团队主动修复了几个影响体验的底层 Bug：
*   **[已修复] 跨平台文件解析崩溃风险 (中/高)**：Windows 环境下含有中文/非 ASCII 字符的文件路径（如 `file:///C:/.../向日葵.svg`）会导致 `shell.openExternal` 报错 `ERROR_FILE_NOT_FOUND`。已通过 PR [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) 替换为原生文件系统 API (`shell.openPath`) 修复。
*   **[已修复] IM 状态管理缺陷 (高)**：多 Agent 协同工作时，频繁切换会导致 IM 通道失效。已通过 PR [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) 修复。
*   **[已关闭] 误提交 (低)**：开发者 `z189yis` 错误地向主仓库推送了清理代码的 PR ([#1950](https://github.com/netease-youdao/LobsterAI/pull/1950))，已被及时关闭。

### 6. 功能请求与路线图信号
通过今日合并的 PR，可以明确窥见项目近期的演进路线图：
1.  **Memory (记忆系统) 的进阶演化**：PR [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) 暴露出项目正在构建类似于人类潜意识的“后台记忆整理”功能，预示着 AI 助手将具备更长久的上下文保持能力。
2.  **企业级多智能体协作 (Cowork) 隔离**：PR [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) “每个 Agent 支持独立的工作目录”表明，LobsterAI 正在增强本地文件系统的沙盒化能力，为多 Agent 并发处理复杂任务提供安全隔离基础。

### 7. 用户反馈摘要
*注：由于本周期内缺乏活跃的 Issue，用户反馈主要从 Commit 记录中侧面反映。*
*   **痛点**：过去可能收到了大量关于 Windows 中文路径报错、UI 布局错位、重启后模型未保存的吐槽。今日开发团队通过大量具体的 Fix PR（如 [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955), [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905)）集中回应了这些真实使用场景中的痛点。
*   **满意度**：核心贡献者对代码提交有严格的规范（广泛使用了 `area: *` 标签），说明项目架构切分非常清晰，对开发者友好。

### 8. 待处理积压
*   **[重要跟踪] Electron v42 大版本升级**：PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 处于 Open 状态。由于涉及底层框架跨越 2 个大版本的升级（40.x -> 42.x），建议维护团队重点关注其构建产物在 macOS 和 Windows 上的兼容性表现，尤其是涉及本地 UI 渲染和底层 IPC 调用的模块。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是为您生成的 2026 年 5 月 13 日 Moltis 项目动态日报。

---

# 📊 Moltis 项目动态日报 (2026-05-13)

### 1. 今日速览
过去 24 小时，Moltis 项目整体处于**低活跃度的平稳维护状态**。项目今日无新的代码合并请求（PR）或版本发布，核心代码库保持稳定。社区方面仅有 1 个新增的 Bug 反馈，整体未出现紧急的安全告警或系统崩溃类问题。目前的工作重心似乎集中在日常缺陷排查与社区问题解答上。

### 2. 版本发布
**无**。
今日项目未发布任何新版本（包括稳定版、测试版或补丁版）。

### 3. 项目进展
**无实质性代码进展**。
过去 24 小时内，项目未产生任何新建、更新、合并或关闭的 Pull Request。整体代码库未发生变更，开发活跃度处于停滞/静默期。

### 4. 社区热点
由于今日仅有 1 条 Issue 更新，社区讨论较为平寂。
唯一的活跃议题为关于 Proxmox 部署脚本的错误反馈：
*   **Issue [#993](https://github.com/moltis-org/moltis/issues/993)**：由用户 @Thndr 提交，主要探讨了在特定环境（Version 91）下使用官方提供的 Proxmox 脚本创建 LXC 容器时失败的问题。目前该 Issue 暂无其他开发者参与讨论（评论: 0，点赞: 0）。

### 5. Bug 与稳定性
今日共报告 **1 个 Bug**，当前评估为**中等严重程度**（主要影响特定部署场景，非核心业务逻辑崩溃），目前**尚无对应的 Fix PR**：
*   🔴 **[bug] Proxmox script - LXC Creation fails on 91** | [链接](https://github.com/moltis-org/moltis/issues/993)
    *   **表现**: 用户在使用自动化脚本将 Moltis 部署至 Proxmox VE 环境时，LXC 容器在构建阶段发生阻断性报错。
    *   **状态**: `[OPEN]`，等待官方维护者或社区确认是代码兼容性问题还是用户环境依赖问题。

### 6. 功能请求与路线图信号
**无**。
今日未收到任何明确的新功能请求（Feature Requests），且由于缺乏活跃的 PR，暂时无法推断近期版本迭代的路线图信号。

### 7. 用户反馈摘要
从今日的单条 Issue 中可以提炼出以下用户使用场景与反馈：
*   **主流私有化部署场景**: 依然有大量用户选择将 Moltis 作为个人或家庭实验室（Homelab）的 AI 助手，并通过 Proxmox 这种轻量级虚拟化方案（LXC）进行本地私有化部署。
*   **一键脚本存在的潜在痛点**: 官方提供的自动化部署脚本在某些特定版本（如提及的 Version 91）的宿主机环境中存在兼容性或依赖缺失问题，这增加了初级用户的部署门槛。

### 8. 待处理积压
*   ⚠️ **Issue [#993](https://github.com/moltis-org/moltis/issues/993)**：作为今日唯一的新增 Bug，且阻断了部分 Proxmox 用户的正常部署流程，建议维护者尽快跟进排查，确认报错日志并补充缺失的环境依赖或修复脚本。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于 GitHub 数据生成的 CoPaw (QwenPaw) 项目 2026-05-13 动态日报：

### 1. 今日速览
CoPaw (QwenPaw) 在过去 24 小时内保持着**极高的社区活跃度与开发推进速度**。项目今日共处理了 70 个动态更新（包含 31 个 Issues 和 39 个 PRs），其中合并/关闭的 PR 达 26 个，关闭的 Issue 达 15 个，显示出维护团队高效的吞吐量。项目正式发布了 `v1.1.7-beta.1` 版本，主要进行了供应商兼容性修复和前端 UI 的优化。当前社区讨论的焦点高度集中在多智能体协作的生命周期管理、记忆系统的索引同步，以及 MCP 协议的 OAuth 认证机制上。

### 2. 版本发布
项目今日发布了新版本 **[`v1.1.7-beta.1`](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.1)**。
* **更新内容**：
  * `Fix(provider)`: 修复了火山引擎 Provider 中模型调用的兼容性问题 (PR [#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169))。
  * `fix(console)`: 改善了 Plan Panel 界面中文本的对比度，提升可读性。
  * `chore(version)`: 版本号迭代至 1.1.7b1 (PR [#4196](https://github.com/agentscope-ai/QwenPaw/pull/4196))。

### 3. 项目进展
今日共有 26 个 PR 被合并或关闭，项目在**多智能体协议 (ACP)、桌面端支持及浏览器工具稳定性**上取得了重大进展：
* **ACP (Agent Communication Protocol) 生态补全**：合并了多个 ACP 相关 PR，包括引入官方 SDK 升级委托工作流 ([PR #3589](https://github.com/agentscope-ai/QwenPaw/pull/3589))、支持外部 agent 的异步执行 ([PR #4197](https://github.com/agentscope-ai/QwenPaw/pull/4197))，以及 WebUI 上的重命名/删除功能 ([PR #3859](https://github.com/agentscope-ai/QwenPaw/pull/3859))。
* **浏览器工具稳定性重构**：合并了修复浏览器空闲看门狗自取消问题的 PR ([PR #2843](https://github.com/agentscope-ai/QwenPaw/pull/2843))，并优化了启动策略与隐私模式 ([PR #3164](https://github.com/agentscope-ai/QwenPaw/pull/3164))，大幅提升了自动化浏览器的健壮性。
* **代码规范化**：完成了底层 utils 库从 `copaw` 到 `qwenpaw` 的重命名重构 ([PR #3204](https://github.com/agentscope-ai/QwenPaw/pull/3204))。

### 4. 社区热点
今日社区最活跃的讨论主要集中在基础运行时配置与计划任务的执行上：
* **Cron Job 的中断问题**：[Issue #2429](https://github.com/agentscope-ai/QwenPaw/issues/2429) (11条评论)。用户在设置定时 Cron 任务时频繁遭遇 "I noticed that you have interrupted me" 报错。此问题反映了在无人值守场景下，Agent 的上下文保持和中断处理机制仍需优化。
* **模型提供商配置失效**：[Issue #4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) (6条评论)。用户指出 DashScope Provider 配置完全正确，但运行时 API Key 为空导致 401。这是影响核心 LLM 调用链路的关键痛点。
* **API 请求响应延迟**：[Issue #3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) (6条评论)。开发者反馈本地调用 `/api/models` 接口耗时波动较大，涉及底层网络或加载逻辑的瓶颈。

### 5. Bug 与稳定性
今日报告了多个中等至严重程度的 Bug，部分已有社区提交修复 PR：
* **[严重] MCP 协议 401 堵塞**：[Issue #4227](https://github.com/agentscope-ai/QwenPaw/issues/4227)。当 MCP Server 返回 401 时，整个调用会堵塞至超时。**(已提交 Fix PR)**：[PR #4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) 增加了 OAuth 2.1 PKCE 支持来解决身份验证环路。
* **[严重] 自动记忆索引不同步**：[Issue #4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)。`auto_memory_interval` 写入摘要后，向量索引未刷新，导致新会话搜不到记忆。**(已提交 Fix PR)**：[PR #4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) 通过主动通知 ReMe 文件监视器来刷新索引。
* **[中等] Matrix 多智能体响应风暴 (ACK Mirror Loop)**：[Issue #4251](https://github.com/agentscope-ai/QwenPaw/issues/4251)。Team Leader 与 Worker 之间缺少 task-closed 生命周期守卫，导致在 Matrix Room 中形成 ACK 死循环。
* **[中等] Shell 安全检查误杀**：[Issue #4244](https://github.com/agentscope-ai/QwenPaw/issues/4244)。`shell_evasion_checks.newlines=True` 默认配置会静默拦截合法的多行命令，导致 Agent 思考链混乱。
* **[低] 桌面端超链接失效**：[Issue #3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) / [Issue #4239](https://github.com/agentscope-ai/QwenPaw/issues/4239)。macOS 桌面版无法打开 `file://` 协议链接，且打包版无法拉起系统默认浏览器。

### 6. 功能请求与路线图信号
结合今日的 Issues 与活跃的 PR，项目下一步的演进方向可能包括：
* **桌面端全面铺开**：Tauri 2.x 桌面端支持 ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) 与系统托盘常驻功能 ([PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)) 正在紧锣密鼓地推进，预计将在下个正式版中作为主打特性。
* **增强型任务调度**：用户呼吁更加完善的时间表与收件箱机制，[PR #4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) 已经实现了 Inbox 及单次/定时任务的优化。
* **插件系统 HTTP 路由开放**：[PR #4255](https://github.com/agentscope-ai/QwenPaw/pull/4255) 允许插件注册 FastAPI APIRouter，这意味着 CoPaw 正在向更加开放的插件化架构演进。
* **Shell 控制权细化**：用户希望在聊天界面中实时监控 Shell 执行进度并随时 Kill ([Issue #4237](https://github.com/agentscope-ai/QwenPaw/issues/4237))，以及尊重系统的 Login Shell 环境而非硬编码 `/bin/sh` ([Issue #3767](https://github.com/agentscope-ai/QwenPaw/issues/3767))。

### 7. 用户反馈摘要
* **高频 Token 导致的 UI 卡顿**：用户指出，由于目前网页对话内容不分页，面对几百万 Token 的长任务，重新加载网页时会发生严重卡顿 ([Issue #4213](https://github.com/agentscope-ai/QwenPaw/issues/4213))。
* **消息格式的细节体验**：Console 通道换行符丢失 ([Issue #4216](https://github.com/agentscope-ai/QwenPaw/issues/4216)) 和手机端侧边栏无法收缩 ([Issue #4221](https://github.com/agentscope-ai/QwenPaw/issues/4221)) 是前端体验被吐槽最多的点。
* **多渠道流式传输需求强烈**：多位用户呼吁为 Telegram 等第三方通道增加流式输出，以免在长时间执行任务时被用户误认为“死机” ([Issue #4247](https://github.com/agentscope-ai/QwenPaw/issues/4247))。

### 8. 待处理积压
* **计划执行前校验缺失**：[Issue #4199](https://github.com/agentscope-ai/QwenPaw/issues/4199) 反映 v1.1.6 无法通过参数关闭火山引擎的“深度思考”模式，目前正在 [PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198) 中加强 Plan 的 reaffirm 逻辑，建议优先合并。
* **循环等待审批死锁**：[Issue #4238](https://github.com/agentscope-ai/QwenPaw/issues/4238) 报告“等待审批过程无限循环”，涉及 Tool Guard 的核心机制，需维护者尽快确认是逻辑缺陷还是配置不当。
* **桌面端打包启动失败**：[Issue #4230](https://github.com/agentscope-ai/QwenPaw/issues/4230) 反映部分用户自行打包安装后，初始化黑屏直接闪退。此类问题容易劝退新开发者，建议在文档中补充标准打包环境的依赖说明。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-05-13)

> 数据统计周期：过去 24 小时 | 项目地址：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

## 1. 今日速览
ZeptoClaw 项目在过去 24 小时内整体活跃度呈现**低位平稳运行**态势，社区无新增 Issue 或用户大规模讨论。项目今日无新版本发布，代码库变动主要由自动化依赖管理工具驱动。合并与待合并的 PR 均聚焦于底层基础设施（CI/CD 与 Docker 镜像）的安全与稳定性更新。整体来看，项目处于功能迭代的间歇维护期，核心代码库健康度保持良好。

## 2. 版本发布
**本统计周期内无新版本发布。**

## 3. 项目进展
今日项目的推进完全集中在**自动化依赖项升级**上，通过 Dependabot 持续保障项目的构建环境安全。

- **已关闭/拒绝的 PR**：
  - [PR #574](https://github.com/qhkm/zeptoclaw/pull/574) `[CLOSED]`：将 GitHub Actions 中的 `taiki-e/install-action` 从 2.75.17 升级至 2.75.22。此 PR 已被关闭，推测是因为被更新的版本所取代，未合入主干。
- **待合并的新进展**：
  - [PR #586](https://github.com/qhkm/zeptoclaw/pull/586) `[OPEN]`：将 `taiki-e/install-action` 进一步跨大版本升级至 **2.75.29**。这是对 #574 的有效替代，旨在跟进上游 CI 工具链的最新修复。
  - [PR #585](https://github.com/qhkm/zeptoclaw/pull/585) `[OPEN]`：将 Docker 构建环境中的 `debian` 基础镜像哈希从 `cedb1ef` 更新至 `109e2c6`（保持 `trixie-slim` 版本标签）。这将确保容器构建环境包含最新的系统级安全补丁。

## 4. 社区热点
**本统计周期内无活跃的社区讨论。**
今日无新开 Issue，且所有活跃 PR 均由 `dependabot[bot]` 自动生成，评论数为 0。这表明项目目前缺乏外部贡献者或用户的实时互动。

## 5. Bug 与稳定性
**今日无新增 Bug 报告或崩溃/回归问题。**
目前的自动化 PR（[PR #585](https://github.com/qhkm/zeptoclaw/pull/585), [PR #586](https://github.com/qhkm/zeptoclaw/pull/586)）属于预防性维护，旨在基础设施层面防范潜在的供应链安全风险，项目核心运行时稳定性未出现已知风险。

## 6. 功能请求与路线图信号
**今日无新增功能请求。**
由于当前缺乏用户发起的 Issue 或人工提交的 Feature PR，无法提取关于下一版本功能路线图的外部信号。项目核心团队目前的工作重心似乎在于工程化维护。

## 7. 用户反馈摘要
**今日无直接用户反馈。**
随着依赖更新的稳步推进，项目整体环境保持可靠，但暂无法从今日的评论区提炼出真实用户的使用痛点或具体业务场景诉求。

## 8. 待处理积压
- **等待人工审查的自动化 PR**：目前有 2 个由 Dependabot 提交的 PR（[PR #585](https://github.com/qhkm/zeptoclaw/pull/585) 和 [PR #586](https://github.com/qhkm/zeptoclaw/pull/586)）处于 OPEN 状态。
  - **维护者建议**：虽然此类依赖更新通常风险较低，但仍建议核心维护者在百忙之中抽空进行 CI 流水线的通过验证，并尽快合并，以防止依赖更新积压导致未来合并冲突增大。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 ZeroClaw 项目 2026-05-13 动态日报：

# 📊 ZeroClaw 项目状态日报 (2026-05-13)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目展现出**极高的开发活跃度与健康的社区协同状态**。系统共处理了 50 个 Pull Requests（其中 18 个已合并/关闭）和 13 个 Issues（9 个已关闭，修复率极高）。项目当前正处于深度重构与多渠道能力增强的关键阶段，核心开发团队及社区贡献者集中修复了包括 Discord、Telegram 在内的多个渠道的媒体处理 Bug，并在工具链的限流和底层架构上进行了大量的统一重构。目前仍有 32 个 PR 处于待合并状态，反映出项目正在酝酿较大规模的功能迭代。

## 2. 版本发布
**无新版本发布。**
*注：考虑到当前积压的 32 个待合并 PR（涉及多个高风险的 Provider 修复和架构重构），项目极有可能正在为下一个 Minor 版本（如 v0.8.x）进行密集准备。*

## 3. 项目进展
今日合并/关闭的 PR 主要集中在**系统健壮性提升与代码架构去重**上，项目整体代码质量显著提升：
*   **工具链限流架构重构全面落地**：由贡献者 @yijunyu 发起的限流重构系列 PR（[#5772](https://github.com/zeroclaw-labs/zeroclaw/pull/5772), [#4947](https://github.com/zeroclaw-labs/zeroclaw/pull/4947), [#4954](https://github.com/zeroclaw-labs/zeroclaw/pull/4954), [#4953](https://github.com/zeroclaw-labs/zeroclaw/pull/4953), [#4952](https://github.com/zeroclaw-labs/zeroclaw/pull/4952), [#4949](https://github.com/zeroclaw-labs/zeroclaw/pull/4949)）已全面合并。通过提取统一的 `RateLimitedTool` 和 `PathGuardedTool` 包装器，清除了各工具（如浏览器、Shell、Cron、文件搜索等）中冗余的内联检查逻辑，大幅降低了后续维护成本。
*   **可观测性能力增强**：[#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) 已关闭，为 Agent 生命周期添加了运行时追踪和 SSE 广播机制。

## 4. 社区热点
今日社区关注度最高的诉求集中在**企业级通讯工具支持**和**底层恢复**上：
*   **企业微信支持诉求**：Issue [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) 请求增加企业微信的 WebSocket/Webhook 渠道支持。随着个人 AI 助理向办公场景渗透，打通企微渠道是许多国内企业用户的强烈诉求。
*   **历史代码恢复审计**：Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 讨论了关于恢复此前因紧急回滚而丢失的 153 个 commits 的审计追踪，反映了社区对项目核心资产安全的高度关注。
*   **SearXNG 隐私搜索支持**：Issue [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) 提议引入注重隐私的 SearXNG 搜索引擎，并改善 DuckDuckGo 的验证码检测问题，直击 Agent 在自动化浏览时的痛点。

## 5. Bug 与稳定性
今日修复了多个高风险级别的 Bug（S1/S2），显著提升了多端运行时的稳定性：

*   **🔴 [P1/S1] OpenAI Codex 引导阻塞**：Issue [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) - 新用户在 Onboarding 时，选择 OpenAI Codex 会被错误地提示输入 OpenAI API Key。（状态：已接受，等待修复）
*   **🔴 [P1/S2] Discord 频道媒体管道崩溃**：Issue [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) - Discord 通道无法处理入站图片，且非图片类型附件被直接丢弃，出站标记符甚至会泄露给用户。（状态：**已修复并关闭**）
*   **🟠 [P2/S2] WebSocket 多模态失效**：Issue [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) - 通过 `/ws/chat` 发送的图像标记被当做纯文本处理，导致视觉模型失效。（状态：**已修复并关闭**）
*   **🟠 [P2/S2] Telegram TTS 静默失效**：Issue [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) - 开启部分流式传输 (`partial`) 时，TTS 语音回复会静默禁用。（状态：**已修复并关闭**）
*   **🟠 [P2] Cron 工具错误提示不友好**：Issue [#6422](https://github.com/zeroclaw-labs/zeroclaw/issues/6422) - 当 LLM 传入纯字符串格式的日程时，底层报错难以理解。（状态：**已修复并关闭**）
*   **🟢 CI/文档与测试修复**：修复了 VSCode rust-analyzer 报错 ([#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687))、CI 自动标签失效 ([#6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359)) 以及 Docker 安装文档错误 ([#6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393))。

## 6. 功能请求与路线图信号
结合当前待合并的 32 个 PR，可以看出项目接下来的发展重心：
*   **智能家居联动**：PR [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) 引入了 `home_assistant` 工具，填补了此前注册表中 `ComingSoon` 的空白，标志着 ZeroClaw 正式向个人 IoT 场景延伸。
*   **更多视觉与模型支持**：PR [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) 为 Claude Code 添加了视觉输入支持；PR [#6598](https://github.com/zeroclaw-labs/zeroclaw/pull/6598) 针对最新版 Anthropic Opus 4.7 模型调整了 `temperature` 参数的传递逻辑，确保对新模型的兼容性。
*   **本地化响应系统**：PR [#6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550) 将通道内的运行时指令（如 `/new`、`/stop`）迁移至 Fluent-backed 本地化字符串系统。

## 7. 用户反馈摘要
从近期的 Issue 详情中，提炼出以下典型用户画像和痛点：
*   **私有化部署用户的网络与证书痛点**：用户在公司内网或受限网络环境下部署时，经常遇到 SNI 或自签名证书问题。今日的 PR [#6600](https://github.com/zeroclaw-labs/zeroclaw/pull/6600) （允许信任系统 CA 根证书）直接解决了这一社区痛点。
*   **跨平台兼容性抱怨**：部分 Windows 用户在使用 Google Workspace 工具时遭遇失败（PR [#6601](https://github.com/zeroclaw-labs/zeroclaw/pull/6601) 修复了 Windows `.cmd` 后缀识别问题）。
*   **技能图片读取失败**：用户在使用内置 Agent 技能生成图片时，本地路径无法被 API 模型读取，导致工作流断裂（Issue [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)）。

## 8. 待处理积压
以下高优先级或高风险 Issue/PR 仍处于 Open 状态，需要 Maintainer 重点推进：
*   **高危代码合并审查**：PR [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) 涉及修复 SSE /logs 流的重大变更（Size: L, Risk: high），需要核心维护者进行审慎的代码审查。
*   **Onboarding 流程阻断问题**：Issue [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) 涉及新用户首次配置流程失败，优先级为 P1，目前已被接受，亟待对应的修复 PR。
*   **Runpod 图像生成集成**：PR [#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555) 提出集成 Runpod Comfy UI 作为图像生成替代提供者，但目前被标记为 `needs-author-action`，需原作者补充代码。

</details>