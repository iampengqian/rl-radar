# OpenClaw 生态日报 2026-04-27

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-26 22:07 UTC

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

# OpenClaw 项目动态日报 (2026-04-27)

## 1. 今日速览
OpenClaw 在过去 24 小时内保持了极高的社区活跃度与开发迭代速度。项目共产生 **500 条 Issue 动态**（新开/活跃 446 条，关闭 54 条）和 **500 条 PR 动态**（待合并 391 条，合并/关闭 109 条），显示出社区强劲的输入与核心团队的持续跟进。今日最大的亮点是 **v2026.4.25-beta 版本的密集发布**（连续 4 个测试版），核心聚焦于 TTS（文本转语音）系统的全面重构与多供应商支持。结合大量聚焦于 TTS、声音个性化和情绪表达系统的 PR，可以看出项目正全力向“多模态、有情绪感知的个人 AI 助手”这一方向演进。

## 2. 版本发布
今日连续发布了 4 个测试版本，均围绕同一核心更新：
- **v2026.4.25-beta.4** ([Releases](https://github.com/openclaw/openclaw/releases))
- **v2026.4.25-beta.3**
- **v2026.4.25-beta.2**
- **v2026.4.25-beta.1**

**更新内容：**
本次更新是对语音回复系统的全面升级。新增 `/tts latest` 控制指令，支持会话级别的自动 TTS 控制、声音角色设定以及基于单个 Agent/账户的覆写规则。

**新增 TTS 供应商覆盖：**
Azure Speech, Xiaomi (小米), Local CLI, Inworld, Volcengine (火山引擎), 以及 ElevenLabs v3。特别感谢社区开发者 @leonchui, @zoujiejun, @solar2ain 的贡献。
*注：由于是 Beta 版本，不建议直接用于生产环境，升级前请留意 TTS 相关配置的兼容性。*

## 3. 项目进展
今日共有 109 个 PR 被合并或关闭，部分重要的推进包括：
- **Web UI 体验优化：** 关闭并整合了命令面板本地化标签的 PR ([#61130](https://github.com/openclaw/openclaw/pull/61130) 与 [#72378](https://github.com/openclaw/openclaw/pull/72378))，修复了非英语环境下的硬编码问题。
- **执行与安全路径修复：** 修复了由于符号链接（symlink）导致的 exec 审批路径验证回归问题 ([#64663](https://github.com/openclaw/openclaw/pull/64663) 与 [#72377](https://github.com/openclaw/openclaw/pull/72377))，提升了系统灵活性。
- **循环检测机制修复：** 修复了定时任务长期运行导致的循环检测误报问题 ([#71612](https://github.com/openclaw/openclaw/pull/71612))，提高了后台任务的稳定性。

## 4. 社区热点
今日讨论最热烈的问题集中在**消息流控、上下文管理以及隐私安全**：
- **工具调用文本泄漏 ([#25592](https://github.com/openclaw/openclaw/issues/25592)，22条评论):** 用户反馈 Agent 在执行工具调用时，其中间处理文本（如报错、内心独白）会被当作正式消息发送到 Slack/iMessage 等渠道。这反映了用户对 Agent "黑盒"状态可视化的严格控制诉求。
- **Bootstrap 上下文加载优化 ([#22438](https://github.com/openclaw/openclaw/issues/22438)，13条评论):** 用户提议引入分层加载机制，避免在每次会话（包括子 Agent 和定时任务）中加载冗长的全局上下文，以节省昂贵的 LLM Token 开销。
- **密钥遮蔽防泄漏 ([#10659](https://github.com/openclaw/openclaw/issues/10659)，11条评论):** 社区强烈呼吁引入“掩码密钥”系统，允许 Agent 使用但无法直接“看到” API 密钥，以防范日益复杂的 Prompt 注入攻击。

## 5. Bug 与稳定性
今日报告了多个关键稳定性 Bug 及回归问题：
1. **P0 - 核心功能失效：** `memoryFlush` 无法可靠触发，仅在每隔一次的自动压缩周期中运行，导致记忆整合失败 ([#12590](https://github.com/openclaw/openclaw/issues/12590))。
2. **P0 - Docker 沙箱严重隔离错误：** 在 Docker 环境下运行沙箱时，工作区绑定全面失效 ([#31331](https://github.com/openclaw/openclaw/issues/31331))。
3. **P1 - 重大回归：** Control UI 在非 Localhost 环境下强制要求 HTTPS 安全上下文，导致大量 VPS 部署用户无法打开控制面板 ([#32473](https://github.com/openclaw/openclaw/issues/32473))。
4. **P1 - 本地模型性能下降：** 系统提示词动态部分与静态部分排序混乱，导致本地 LLM 的 Prefix Caching（前缀缓存）完全失效，响应速度暴跌 8-16 倍 ([#40256](https://github.com/openclaw/openclaw/issues/40256))。
5. **P1 - 进程残留：** LSP 语言服务器子进程在网关关闭后依然驻留内存，导致资源泄漏 ([#72367](https://github.com/openclaw/openclaw/pull/72367)，已提交 Fix PR)。

## 6. 功能请求与路线图信号
结合今日的 Issue 与活跃 PR，项目的下一步演进路线图已相当清晰：
- **高级 TTS 与情绪系统：** 通过 PR-A/B/C/D 的四件套提交 ([#69051](https://github.com/openclaw/openclaw/pull/69051) 等)，OpenClaw 正在引入基于 ElevenLabs v3 的情感标签（如 `[whisper]`, `[laugh]`），使得 Agent 具备情感表达能力。
- **企业级工作流与插件扩展：** 新增了 Workflow action、Scheduler（调度器）及 Retry 机制的主机接口 ([#72383](https://github.com/openclaw/openclaw/pull/72383))，为高级自动化工作流铺平道路。
- **按路径作用域的权限控制 (RWX)：** 社区提出模仿 Unix DAC 机制，替代现有的二进制级别执行白名单 ([#39979](https://github.com/openclaw/openclaw/issues/39979))，这在社区呼声极高，有望在后续版本纳入。

## 7. 用户反馈摘要
从今日 Issues 提炼出的真实用户痛点如下：
- **Token 浪费焦虑：** 拥有大量工作区文件的用户对每次会话加载所有 Bootstrap 文件感到极度不满，认为这是对 Token 预算的严重浪费。
- **多平台分发体验碎片化：** 在 CJK（中日韩）语言环境下，Discord 的 2000 字符硬截断经常导致中文内容在一个完整的词语中间被切断 ([#38597](https://github.com/openclaw/openclaw/issues/38597))。
- **托管部署门槛过高：** 缺乏完善的备份/恢复工具，导致用户在 Dev -> Staging -> Prod 环境迁移时非常痛苦 ([#13616](https://github.com/openclaw/openclaw/issues/13616))。用户强烈希望能有更标准化的状态导出导入方案。

## 8. 待处理积压
以下高价值或高影响力的 Issue 长期处于 Open 状态甚至被打上 Stale 标签，需核心团队优先介入：
- **定时任务静默覆盖文件且无 Append 模式 ([#40001](https://github.com/openclaw/openclaw/issues/40001)):** 隔离的 Cron 会话会直接覆盖共享的工作区文件，造成严重的数据丢失隐患，目前尚无明确的修复时间表。
- **Telegram 群聊媒体文件丢失 ([#40440](https://github.com/openclaw/openclaw/issues/40440)):** 未 @ 机器人的情况下，历史记录中的媒体文件会被占位符替换，影响多模态记忆。
- **Fallback 模型永久覆盖配置 ([#47994](https://github.com/openclaw/openclaw/pull/47994)):** 尽管已有修复 PR，但尚未合并。主模型降级到备用模型后，即使主模型恢复，系统仍永久使用高价的备用模型，用户面临极高的“账单失控”风险。

---

## 横向生态对比

以下是基于 2026 年 4 月 27 日各大开源项目社区动态生成的横向对比与生态分析报告：

# 2026 个人 AI 助手与智能体开源生态横向对比分析报告

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单一对话交互”向“多模态、多端协同与企业级安全自治”跨越的爆发期**。项目间的核心竞争壁垒已不再是单纯的 LLM 接入能力，而是转向**多渠道集成、长程记忆上下文管理以及本地/边缘设备的资源隔离调度**。同时，各大项目正在经历从快速功能堆叠向底层架构重构（如沙箱安全、插件化沙箱、网络重试机制）的过渡，以满足生产环境下的高可用诉求。

## 2. 各项目活跃度对比

*(注：PR/Issue 数据为过去 24 小时内的动态总数，包含新建、评论及关闭状态)*

| 项目名称 | Issue 动态数 | PR 动态数 | 今日 Release | 活跃度评级 | 健康度与稳定性评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 4 个 (Beta) | 🔥 极高 | 活跃度断层领先，迭代极快，但暴露出本地模型缓存失效等 P1 级回归问题。 |
| **ZeroClaw** | 50 | 46 | 0 | 🔥 高 | 架构重构期，积压大量 Ollama 等本地模型的兼容性 Bug，亟待修复发布。 |
| **NanoBot** | 6 | 122 | 0 | 🌟 较高 | 代码合并积极，重心在多智能体通信架构，处于稳步演进阶段。 |
| **Hermes Agent**| 50 | 50 | 0 | 🌟 较高 | 专注于底层网关重构与安全防护，但存在高频的云端订阅报错积压。 |
| **NanoClaw** | 5 | 25 | 0 | 🌟 较高 | 聚焦 v2 安装体验与多会话路由修复，处于新版本的稳定巩固期。 |
| **CoPaw** | 11 | 6 | 0 | 🌟 中等 围绕多通道对接与桌面端重构，前端状态机与后端协同的 Bug 有所凸显。|
| **Moltis** | 4 | 9 | 1 | 🟢 中等 | 处于快速迭代期，今日集中修复了密钥明文等高危安全漏洞，质量向好。 |
| **IronClaw** | 5+ | 13 | 0 | 🟡 中低 | CI/CD 测试遭遇阻断，核心大厂 API 连接失败，需优先修复基线环境。 |
| **PicoClaw** | 6 | 10 | 1 (Nightly)| 🟡 中低 | 聚焦底层消息协议重构，暴露出沙箱误拦截等边界安全问题。 |
| **LobsterAI** | 4 | 0 | 0 | ⚪ 低 | 代码库停滞，遗留严重 Bug 未解，处于维护停滞期。 |
| **NullClaw** | 1 | 0 | 0 | ⚪ 低 | 代码冻结，爆出 WSL2 环境下 100% CPU 的严重底层 Bug 且无修复迹象。 |
| **TinyClaw 等**| 0 | 0 | 0 | ⚪ 沉寂 | 过去 24 小时内无任何代码与社区活动。 |

## 3. OpenClaw 在生态中的定位

作为生态的**绝对风向标与核心参照项目**，OpenClaw 展现出了不同于其他项目的显著特征：

*   **规模壁垒：** 单日近千条的 PR/Issue 动态量级远超第二名（十余倍的差距），代表着其拥有极其庞大的贡献者基盘和社区痛点挖掘能力。
*   **技术重心（多模态交互）：** 当日连续发布 4 个 Beta 版本，全面重构 TTS 并引入 ElevenLabs v3 情绪标签。相较于其他项目还在解决基础连接和文本对话问题，OpenClaw 已经在引领“有情绪感知、声音个性化的拟真 Agent”方向。
*   **前沿痛点：** 其社区关注点已越过“如何接入 API”，进阶至 Token 预算规划、Bootstrap 上下文按需分层加载、Unix 级别的细粒度执行权限（RWX）等深度企业级自治话题。

## 4. 共同关注的技术方向

从横向数据来看，多个开源项目不约而同地在解决以下三个共性技术命题：

1.  **多渠道的上下文防丢失与精准路由**
    *   *涉及项目：* NanoBot, Hermes Agent, ZeroClaw, CoPaw
    *   *具体诉求：* 在 Slack、Discord、微信、Telegram 等平台中，Agent 经常遭遇子代理回复错乱、线程上下文丢失、中断后再启动丢失历史工具调用记录等问题。构建跨平台一致的长程记忆路由是当务之急。
2.  **本地/开源大模型的深度兼容（Provider 容灾）**
    *   *涉及项目：* ZeroClaw, OpenClaw, CoPaw, Hermes Agent
    *   *具体诉求：* 随着开源模型爆发，项目不仅要支持 OpenAI/Anthropic，还要无缝对接 Ollama, vLLM, DeepSeek, Qwen 等。社区强烈呼唤跨 Provider 的自动 Fallback 容灾机制、前缀缓存兼容及标准数据格式的适配。
3.  **安全隔离与凭证管理**
    *   *涉及项目：* OpenClaw, Moltis, Hermes Agent, PicoClaw
    *   *具体诉求：* 防范 Prompt 注入导致的 API Key 泄漏（掩密钥机制）、本地执行命令的越权拦截（防范路径穿越）、以及重度执行任务时的宿主机资源隔离（防 OOM）。

## 5. 差异化定位分析

*   **全能拟人化助手派：** 
    *   **核心项目：OpenClaw, ZeroClaw**
    *   **特征：** 追求极客体验，全面拥抱多模态（TTS, 视频解析），支持海量渠道接入，致力于打造全能的个人数字分身。
*   **企业级多智能体协同派：**
    *   **核心项目：NanoBot, Hermes Agent**
    *   **特征：** 架构上侧重“网关”与“调度器”。倾向于使用邮箱、长期任务队列等方式进行子代理拆解，更关注高可用性、长任务生命周期管理和复杂的权限拦截流。
*   **本地优先与边缘计算派：**
    *   **核心项目：PicoClaw, NanoClaw**
    *   **特征：** 注重轻量化，积极探索在树莓派等 ARM/低功耗设备上的部署。提供串口支持、本地按需加载模型机制，适合 IoT 控制和重度隐私保护场景。
*   **开箱即用与小微型部署：**
    *   **核心项目：CoPaw, Moltis**
    *   **特征：** 更侧重开箱即用的 UI 面板体验、Tauri 桌面端重构以及零代码的一键部署脚本，面向非硬核开发者的泛用户群。

## 6. 社区热度与成熟度

整个生态呈现明显的“金字塔”分层，目前**第一梯队正在经历从敏捷开发向质量巩固的阵痛**：

*   **快速迭代与功能膨胀期：** 
    * OpenClaw 正以惊人速度扩张功能，但也引发了本地模型缓存失效、配置优先级混乱等 P1 回归问题。
*   **架构重构与质量筑底期：** 
    * ZeroClaw, NanoClaw, Moltis 正致力于重构底层协议（如 Matrix 净室重写、更换桌面端框架）和修复安装流脚本。这是项目迈向成熟（v1.0/v2.0 稳定版）的必经之路。
*   **维护停滞期：** 
    * LobsterAI, NullClaw 等项目代码停滞，且存在阻断性 Bug（如底层死循环、上下文溢出）未获官方响应，面临被社区边缘化的风险。

## 7. 值得关注的趋势信号

对于 AI 智能体开发者和架构师，今日的社区动态释放了以下强烈的技术趋势信号：

1.  **Token 预算与上下文分层加载将成为标配：** LLM API 成本依然是核心痛点。类似 OpenClaw 提出的“按需加载 Bootstrap 上下文”和 CoPaw 引入的“非破坏性降级摘要”，将取代粗暴的截断历史记录，成为主流工程实践。
2.  **容器级隔离是 Agent 走向生产的生死线：** Agent 拥有代码执行能力后，NanoClaw 和 Moltis 暴露的“恶意技能自动启用”和“容器无限额导致宿主机 OOM”证明：零信任架构和基于 WASM/Docker 的微沙箱隔离将成为下一步的刚需。
3.  **多智能体从“概念”走向“工程化基建”：** 异步长任务拆解、基于文件系统的 Multi-agent mailbox、多智能体间的通信协议标准化（如 ACP 协议优化）正变得像微服务架构一样严谨，这要求开发者具备更强的分布式系统设计能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-04-27 NanoBot 项目动态日报。

---

# NanoBot 项目动态日报 (2026-04-27)

## 1. 今日速览
NanoBot 今日维持了极高的社区活跃度与开发推进速度。在过去 24 小时内，项目处理了 122 笔 Pull Requests（其中 20 笔已合并/关闭），并有 6 条 Issues 得到更新。核心开发团队与社区贡献者正集中精力优化多渠道（如 Slack、WeCom、WebUI）的会话支持，并显著增强了多智能体架构的底层通信机制。大量高质量 PR 的合并标志着项目在多模态支持、长任务处理和会话上下文管理等核心能力上迈出了坚实的一步。

## 2. 版本发布
* 今日 **无** 新版本发布。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，显著提升了项目的功能完整度与系统健壮性。重点推进的模块包括：
* **WebUI 交互升级**：合并了 `feat(webui): render video media attachments` ([PR #3430](https://github.com/HKUDS/nanobot/pull/3430)) 和 `feat(webui): add ask-user choices and model settings` ([PR #3454](https://github.com/HKUDS/nanobot/pull/3454))。现在支持通过签名 URL 安全渲染视频媒体，并在前端增加了交互式选择卡片和可视化模型/提供商切换设置。
* **Slack 线程上下文修复**：合并了 `fix(slack): preserve thread context for proactive replies` ([PR #3462](https://github.com/HKUDS/nanobot/pull/3462))，大幅改善了 Slack 渠道中机器人的线程对话体验，确保主动推送和工具消息能正确路由到原线程。
* **会话生命周期与 LLM 兼容性**：合并了 `fix(session): expose session timestamps` ([PR #3463](https://github.com/HKUDS/nanobot/pull/3463)) 及历史记录 token 预算与 DeepSeek 载荷规范化系列修复 ([PR #3427](https://github.com/HKUDS/nanobot/pull/3427))，有效防止了多轮对话的上下文漂移和无尽的磁盘占用。
* **新增 Web Chat 渠道**：合并了 `feat(web): add web chat channel with SSE streaming` ([PR #2871](https://github.com/HKUDS/nanobot/pull/2871))，在零核心代码修改的前提下，通过插件机制引入了基于 SSE 的网页端流式聊天渠道。

## 4. 社区热点
* **Failover 容灾机制需求热度最高**：[Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) （支持模型异常自动切换）在过去几天引发了 **8 条评论** 和社区共鸣。用户普遍反馈在多 Provider 配置下，单一端点的 429 限流或超时会严重阻断任务，呼唤跨 Provider 的高可用重试机制。
* **进度提示精细化管理**：[Issue #3452](https://github.com/HKUDS/nanobot/issues/3452) 建议将 `sendProgress` 等全局配置下放至渠道级别控制（如飞书、微信），反映出企业级用户在不同业务场景下对消息静默/通知策略存在差异化诉求。

## 5. Bug 与稳定性
今日报告了多个影响系统稳定性的关键 Bug，部分已提交修复 PR：
* **P0 级：LLM 请求阻塞**：[Issue #3455](https://github.com/HKUDS/nanobot/issues/3455) 指出 `AsyncOpenAI` 客户端默认读取超时高达 600 秒，大上下文请求可能卡死 Agent 循环长达 10 分钟。*(暂无关联 Fix PR)*
* **P1 级：Subagent 路由错乱**：[Issue #3464](https://github.com/HKUDS/nanobot/issues/3464) 报告在 Slack 等渠道中，子代理生成的回复未能正确返回至 originating thread，而是发送到了频道级别。*(已提交 Fix PR: [PR #3465](https://github.com/HKUDS/nanobot/pull/3465))*
* **P1 级：WeCom 媒体文件发送失败**：[Issue #3435](https://github.com/HKUDS/nanobot/issues/3435) 导致企业微信渠道无法正常下发图片等资源附件。*(已提交基础修复 PR: [PR #3331](https://github.com/HKUDS/nanobot/pull/3331))*
* **P2 级：模型思考过程泄漏**：[Issue #3443](https://github.com/HKUDS/nanobot/issues/3443) 导致非流式 `_parse()` 路径下，`reasoning` 字段内容被误当作最终回复展示给用户。*(状态：已自动关闭/已解决)*

## 6. 功能请求与路线图信号
近期 Issues 与活跃 PR 揭示了 NanoBot 接下来可能演进的重心方向：
* **多智能体协同与长任务分发**：[PR #3461](https://github.com/HKUDS/nanobot/pull/3461) 引入了基于文件系统的 Multi-agent mailbox 插件；[PR #3460](https://github.com/HKUDS/nanobot/pull/3460) 引入了 `LongTaskTool` 将长任务拆解为多步子代理执行；[PR #3457](https://github.com/HKUDS/nanobot/pull/3457) 允许通过对话动态创建新的 Bot 实例。这表明 NanoBot 正在积极构建去中心化的 Multi-Agent 基础设施。
* **Failover 与高可用架构**：基于社区对 [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) 的强烈反响，Provider 级别的 Failover 机制极有可能成为下一阶段的核心特性。

## 7. 用户反馈摘要
* **真实痛点：单点故障焦虑**。企业及重度用户通常配置了冗余的 LLM API，但当前系统在遇到限流或宕机时无法平滑切换，导致自动化工作流中断。
* **真实痛点：渠道特性定制不足**。部分用户在使用各类通讯软件（尤其是微信、企业微信）时，希望对不同渠道施加不同的静默规则，当前的“全局配置一刀切”无法满足复杂业务流。
* **满意度分析**：从 PR 活跃度来看，开发者对 NanoBot 的“纯插件化”扩展架构（如零侵入的 Web 渠道、邮箱插件）认可度很高，系统易于二次开发。

## 8. 待处理积压
以下长期或关键 PR/Issues 仍在待处理状态，建议维护团队关注：
* **积压的 Provider 修复与清理**：[PR #2710](https://github.com/HKUDS/nanobot/pull/2710)（Qwen OAuth 清理）和 [PR #2727](https://github.com/HKUDS/nanobot/pull/2727)（增加 provider logout 命令）自四月初开启至今已近一个月，仍需 Maintainer 进行 Review。
* **核心架构合并待定**：[PR #3459](https://github.com/HKUDS/nanobot/pull/3459)（强制历史记录重放/文件上限不变量）和 [PR #3460](https://github.com/HKUDS/nanobot/pull/3460)（长任务工具）涉及核心上下文生命周期管理，积压的 102 个 Open PR 中包含大量此类高价值贡献，需加快合并节奏以防产生严重代码冲突。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-27)

## 1. 今日速览
过去 24 小时，Hermes Agent 项目保持了**高活跃度的迭代节奏**。社区共产生了 50 条 Issue 动态（37 条新开/活跃，13 条关闭）和 50 条 PR 动态（48 条待合并，2 条合并/关闭），且**无新版本发布**。目前项目的重心明显向 **Gateway（网关）架构重构与安全加固**倾斜，核心贡献者今天集中提交了大量关于 Gateway 稳定性和上下文管理的 PR。与此同时，Slack 等多平台集成的历史遗留 Bug 在今天得到了集中回应与修复。

---

## 2. 版本发布
**无新版本发布。**
当前项目处于密集的开发与 PR 积累阶段，尤其是在 Gateway 组件和底层架构上有大量待合并的 PR，预计项目维护者正在为下一个较大版本（可能是 v0.9.1 或 v1.0.0）的发布做准备。

---

## 3. 项目进展
今日共有 2 个 PR 被合并/关闭，共有 48 个 PR 处于待合并状态。整体进展集中在**架构增强、安全修复和跨平台兼容性**上：

- **安全漏洞修复进展迅速：** 针对路径穿越和布尔值解析的安全修复 PR 已提交，包括修复 WhatsApp 身份解析的路径穿越漏洞 ([PR #16243](https://github.com/NousResearch/hermes-agent/pull/16243)) 和修复 `hooks_auto_accept` 配置项因 Python `bool("false")` 导致的逻辑失效 ([PR #16244](https://github.com/NousResearch/hermes-agent/pull/16244))。
- **Gateway 架构重大演进：** 贡献者 `yepyhun` 集中提出了 Gateway 的现代化改造方案，今日一次性提交了 7 个相关 PR，涵盖上下文预算编译器 ([PR #16238](https://github.com/NousResearch/hermes-agent/pull/16238))、工具注册表 ([PR #16237](https://github.com/NousResearch/hermes-agent/pull/16237))、确定性渲染 ([PR #16240](https://github.com/NousResearch/hermes-agent/pull/16240)) 等，大幅推进了网关的健壮性。
- **多平台集成与兼容性修复：** 社区修复了 MiniMax (中国区) API 在 `hermes doctor` 中的 404 检测误报 ([PR #16246](https://github.com/NousResearch/hermes-agent/pull/16246))，以及 Discord 工具中因 `limit` 参数类型不匹配导致的 TypeError ([PR #16245](https://github.com/NousResearch/hermes-agent/pull/16245))。

---

## 4. 社区热点
今日社区讨论最激烈的问题集中在**云厂商订阅限制**和**多平台集成上下文丢失**上：

- **Anthropic Claude 订阅限制痛点（27 评论，15 👍）：** [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475) 反映了用户在使用 Claude 订阅认证时频繁遇到 `You're out of extra usage` 报错，且重启无法解决。这反映了重度依赖云端大模型的用户在配额管理上的强烈痛点。
- **Slack 线程上下文丢失（多 Issue 叠加）：** 社区对 Slack Bot 的抓取逻辑提出了多项反馈，包括不抓取父线程 ([Issue #2950](https://github.com/NousResearch/hermes-agent/issues/2950))、线程内无视 `require_mention` 配置导致多智能体冲突 ([Issue #8019](https://github.com/NousResearch/hermes-agent/issues/8019))，以及强行回复线程 ([Issue #9268](https://github.com/NousResearch/hermes-agent/issues/9268))。这些问题在今天均被重新激活并展开讨论。
- **Curator（后台技能维护）RFC（2 评论，3 👍）：** 核心贡献者 `teknium1` 发起了 [Issue #16077](https://github.com/NousResearch/hermes-agent/issues/16077)，提议引入 Curator 模块自动清理和标记不常用的 Agent 技能，引发了关于 Agent 长期自治能力边界的探讨。

---

## 5. Bug 与稳定性
今日报告及更新的 Bug 较多，按优先级及严重程度总结如下：

**P1 - 严重级别（需立即关注）：**
- **后台进程通知路由错乱：** Telegram 平台出现后台任务完成后，通知发送到了错误的会话（如从群组发到了私聊）。([Issue #9736](https://github.com/NousResearch/hermes-agent/issues/9736))
- **v0.9.0 版本三大核心 Bug：** 用户反馈 v0.9.0 存在上下文长度覆盖失效、Thinking block 会话中断以及配置文件优先级低于环境变量等问题。([Issue #11096](https://github.com/NousResearch/hermes-agent/issues/11096))

**P2 - 核心功能受阻级别：**
- **Docker 容器启动崩溃：** 在不支持 `--init` 参数的主机上，沙箱容器直接报 `operation not permitted` 退出。([Issue #9730](https://github.com/NousResearch/hermes-agent/issues/9730))
- **自定义 Provider 请求头不可用：** 导致经过 Cloudflare WAF 的请求全部被 403 拦截，目前配置层面无法添加自定义 Headers。([Issue #9721](https://github.com/NousResearch/hermes-agent/issues/9721))
- **WSL/Windows 环境兼容性差：** Windows 原生环境存在诸多运行问题，目前仅 WSL 勉强可用。([Issue #16201](https://github.com/NousResearch/hermes-agent/issues/16201))

**P3 - 体验受损级别：**
- **CLI 终端特性异常：** `Ctrl+D` 行为不符合 Unix 标准规范，有文本时误触会直接退出。([Issue #8478](https://github.com/NousResearch/hermes-agent/issues/8478))，目前已有 PR 提出修复。

---

## 6. 功能请求与路线图信号
今日涌现了大量具有明确路线图信号的 Feature Request 及对应 PR，揭示了项目接下来的迭代重心：

- **Gateway 架构彻底模块化：** 连续 7 个 Issue 和 PR 指出，当前 Gateway 太过笨重。未来将引入 `TurnContract` 机制（[Issue #16103](https://github.com/NousResearch/hermes-agent/issues/16103)），按需加载工具（[Issue #16104](https://github.com/NousResearch/hermes-agent/issues/16104)），并增加重工具（如终端执行）的风险审批流（[Issue #16109](https://github.com/NousResearch/hermes-agent/issues/16109)）。
- **零信任凭证代理：** [PR #9704](https://github.com/NousResearch/hermes-agent/pull/9704) 提出了一种不含任何外部依赖的 Phase 1 凭证代理侧车架构，确保 Agent 进程在结构上无法直接读取凭证，极大提升了企业级部署的安全性。
- **Claude/Cursor 原生桥接：** [PR #16226](https://github.com/NousResearch/hermes-agent/pull/16226) 实现了 Hermes 作为父级 Agent，能够直接将任务委派给本地的 Claude Code 或 Cursor Agent 执行，标志着其正在向“多智能体调度中枢”演进。

---

## 7. 用户反馈摘要
基于今日的 Issue 互动，真实用户的核心反馈如下：
- **企业/重度用户痛点：** 使用 Claude 订阅额度极易触达上限，并且错误处理不清晰（[Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475)）；需要更细粒度的 Gateway 拦截控制和上下文预算管理。
- **多平台开发者体验差：** Slack 集成的上下文获取逻辑被频繁吐槽，`require_mention` 的表现不符合直觉，导致在多 Agent 群组中容易发生抢答或静默。
- **对底层系统的掌控需求：** 高阶开发者希望能够覆盖底层的 HTTP 请求头（[Issue #9721](https://github.com/NousResearch/hermes-agent/issues/9721)）和 API 请求模式，说明项目在兼顾“开箱即用”和“高可定制性”上仍需寻找更好的平衡。

---

## 8. 待处理积压
以下高优先级/高热度问题长期处于 Open 状态，且目前缺少明确的对应修复 PR，需核心团队关注：

1. **Anthropic Subscription 认证超限死锁 ([Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475))：** 拥有 15 个点赞和 27 条评论，属于高频痛点，严重阻碍了白嫖/轻度订阅用户的持续使用。
2. **v0.9.0 版本的 Config 与上下文 Bug ([Issue #11096](https://github.com/NousResearch/hermes-agent/issues/11096))：** 包含三个 P1 级别的回归 Bug，影响生产环境的稳定性。
3. **Docker 沙箱 `--init` 兼容性崩溃 ([Issue #9730](https://github.com/NousResearch/hermes-agent/issues/9730))：** 限制了在部分受限宿主机或特定容器环境中的部署。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the daily dynamic report for the PicoClaw project based on the provided data.

---

# PicoClaw 项目动态日报 (2026-04-27)

## 1. 今日速览
PicoClaw 项目今日保持**高度活跃**，社区互动与核心代码演进齐头并进。过去 24 小时内，项目产生了 6 条 Issue 更新（5 新开/活跃，1 关闭）和 10 条 PR 更新（9 待合并，1 关闭）。核心开发团队正聚焦于底层的消息协议重构、运行时事件系统基建以及 ChatGPT 后端兼容性修复。尽管合并的 PR 数量较少，但待合并队列中包含了多项重大架构改进，整体呈现积极且高速迭代的健康态势。

## 2. 版本发布
- **[Nightly Build] v0.2.7-nightly.20260426.77be169d**
  - **性质**：自动化 Nightly 构建版本。
  - **比对范围**：`v0.2.7...main`
  - **注意事项**：官方提示该版本为自动构建，可能存在不稳定性，建议开发者或测试用户谨慎用于生产环境。

## 3. 项目进展
今日仅有 1 个 PR 被关闭/拒绝，合并进度放缓，但多个核心 Feature PR 进入最后审查阶段，为后续版本积蓄力量：
- **结构化工具调用的探索与关闭**：PR [#2672](https://github.com/sipeed/picoclaw/pull/2672) 被关闭。该 PR 试图在 Web 聊天中添加结构化 `tool_calls` 支持，虽然被拒，但这部分逻辑极有可能已被拆分或重构。
- **基建与重构推进**：底层架构正在经历深度打磨，包括引入统一运行时事件基础设施的 PR [#2677](https://github.com/sipeed/picoclaw/pull/2677)，以及重构消息类型处理逻辑的 PR [#2680](https://github.com/sipeed/picoclaw/pull/2680)，为后续更复杂的 Agent 交互打下基础。

## 4. 社区热点
今日最受关注的议题聚焦在**模型路由规划**与**新搜索供应商接入**：
- **智能模型路由规划** (👍 0, 评论 10)：Issue [#295](https://github.com/sipeed/picoclaw/issues/295)。该路线图级别的 Issue 引发了热烈讨论。社区对“自动将简单任务路由到便宜模型（如避免所有请求均使用 GPT-4o），以优化响应速度和 Token 成本”的功能诉求极高。
- **Exa 搜索引擎接入疑问** (评论 1)：Issue [#2676](https://github.com/sipeed/picoclaw/issues/2676)。开发者 @devjia 提出接入 Exa 搜索 provider，并特别指出了之前 PR #997 被关闭的疑惑，表明社区对扩展 PicoClaw 检索能力持续抱有热情。

## 5. Bug 与稳定性
今日暴露的 Bug 主要集中在特定模型/后端的兼容性、工具安全拦截逻辑及配置项表现上：
- **P0 - ChatGPT 后端 OAuth 兼容性崩溃/空响应**：Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674)。用户在使用 ChatGPT 后端（Codex OAuth）时，收到来自模型的空响应，导致无法正常使用。
  - *状态*：🟢 **已有对应 Fix PR**。PR [#2679](https://github.com/sipeed/picoclaw/pull/2679) 提出修复 Codex 后端 `response.output_text.delta` 的流式处理，并强制 OAuth 走 `chatgpt.com/backend-api/codex` 路由。
- **P1 - MCP + Gemini 函数调用 HTTP 400 崩溃**：Issue #2668 (推断)。使用 Gemini 模型搭配具有复杂 JSON Schema 的 MCP 工具时会导致崩溃。
  - *状态*：🟢 **已有对应 Fix PR**。PR [#2681](https://github.com/sipeed/picoclaw/pull/2681) 引入了共享的 Gemini schema 清理器，成功拦截并解决了此兼容性报错。
- **P2 - exec 工具的误拦截**：Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042)。当开启 `restrict_to_workspace` 时，`guardCommand` 的正则过于粗暴，会将 `curl "wttr.in/Beijing?T"` 误判为路径越界 (`../../../../Beijing?T`)。
- **P3 - v0.2.7 "思考"过程展示问题**：Issue [#2628](https://github.com/sipeed/picoclaw/issues/2628) (已关闭)。用户升级后不知如何关闭前端的 Thinking 和 Tools 提示，反映出 UI/配置引导的不足。

## 6. 功能请求与路线图信号
结合今日的 Issue 与 PR，以下功能信号明确，有望落地：
- **统一的运行时事件系统**：PR [#2677](https://github.com/sipeed/picoclaw/pull/2677) 提案引入 `pkg/events` 包，处理背压、订阅等。这是提升系统可观测性的关键一步。
- **跨平台硬件串口支持**：PR [#2673](https://github.com/sipeed/picoclaw/pull/2673)。为 Linux/macOS/Windows 引入内置 `serial` 工具支持，配合 Issue [#2675](https://github.com/sipeed/picoclaw/issues/2675) 中对 Raspberry Pi 硬件部署的讨论，暗示 PicoClaw 正积极向 **IoT/边缘设备控制** 场景拓展。
- **网络重试与健壮性机制**：PR [#2669](https://github.com/sipeed/picoclaw/pull/2669)。提出对 LLM API 调用引入可配置的指数退避重试机制，以应对瞬时的网络断开。

## 7. 用户反馈摘要
从近期 Issue 提炼出的真实用户痛点包括：
1. **配置 UI 盲区**：对于升级带来的新特性（如 "Think" 显示），用户找不到关闭的入口，说明需要优化前端设置的可见性。（来源：[#2628](https://github.com/sipeed/picoclaw/issues/2628)）
2. **安全沙箱过犹不及**：用户在执行常规外部命令（如查询天气）时被安全模块意外拦截，表明沙箱的路径分析算法需要更加智能，以区分“真实文件路径”与“URL 参数”。（来源：[#1042](https://github.com/sipeed/picoclaw/issues/1042)）
3. **消费级硬件部署需求**：部分用户尝试在树莓派甚至 Pi Zero 2W 上部署 PicoClaw，寻求轻量级客户端支持。（来源：[#2675](https://github.com/sipeed/picoclaw/issues/2675)）
4. **HTML 转义干扰体验**：开发者反馈在使用工具时 `'&&'` 会被转义为 `'\u0026'`，PR [#2670](https://github.com/sipeed/picoclaw/pull/2670) 试图通过提供格式化和禁用 HTML 转义的配置来解决此痛点。

## 8. 待处理积压
以下长期/重要事务需要核心维护团队关注并推进：
- **[长期悬而未决] exec 安全模块误报问题**：Issue [#1042](https://github.com/sipeed/picoclaw/issues/2676) 自 3 月初提交至今未彻底解决，对依赖系统命令的 Agent 技能体验影响较大。
- **[待澄清] Exa 搜索引擎 PR 进度**：Issue [#2676](https://github.com/sipeed/picoclaw/issues/2676) 提出了很好的疑问，为何之前的 PR #997 被关闭？维护者需给予回应，以免挫伤社区贡献者的积极性。
- **[待审查] 大量架构级重构 PR**：包括消息处理重构 [#2680](https://github.com/sipeed/picoclaw/pull/2680) 和 UI 反馈优化 [#2663](https://github.com/sipeed/picoclaw/pull/2663)，这些 PR 涉及协议变更或跨模块修改，需要维护者尽快进行 Code Review 以防产生合并冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# 🐾 NanoClaw 项目动态日报 (2026-04-27)

> 数据来源：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日保持着**极高的开发与社区活跃度**。过去 24 小时内，项目共处理了 25 个 Pull Requests（其中 9 个已顺利合并/关闭），并新增了 5 个活跃 Issue。项目重心目前高度聚焦于 **v2 版本安装体验的稳定性修复**（尤其是 OneCLI 依赖问题）以及**多会话路由与底层容器资源隔离**等核心架构增强。值得注意的是，社区正密集提交针对不同运行环境和边界条件的修复补丁，显示出项目正处于从快速迭代向稳定版过滤的关键阶段。

---

## 2. 版本发布

**无新版本发布。** 考虑到当前大量针对 `v2 setup` 和底层架构的修复 PR 正在密集合并，预计项目正在为下一个稳定版本做代码储备。

---

## 3. 项目进展

今日共有 9 个 PR 被合并或关闭，项目在**安装体验、并发路由稳定性和工具调用边界**上取得了实质性突破：

- **安装与配置优化**：
  - [PR #2035](https://github.com/qwibitai/nanoclaw/pull/2035)：引入高级设置流程及远程 OneCLI 支持，极大丰富了 v2 的安装向导灵活性。
  - [PR #2030](https://github.com/qwibitai/nanoclaw/pull/2030)：增加了在安装流中连接远程 OneCLI 网关的选项，解决本地安装的环境依赖痛点。
- **核心稳定性修复**：
  - [PR #2034](https://github.com/qwibitai/nanoclaw/pull/2034)：修复了 `findSessionByAgentGroup` 路由逻辑，将排序规则改为“最新活跃”，避免了多会话场景下消息串台的严重 Bug（配合 [PR #2002](https://github.com/qwibitai/nanoclaw/pull/2002) 的进一步重构）。
  - [PR #2031](https://github.com/qwibitai/nanoclaw/pull/2031)：修复了由于 MCP 工具调用挂起导致心跳超时、进而触发容器被强杀的“僵死”问题，提高了 agent 长时间运行的鲁棒性。
  - [PR #2028](https://github.com/qwibitai/nanoclaw/pull/2028)：动态构建 `allowedTools` 白名单，修复了因硬编码导致第三方 MCP 服务器在 Claude Code 新版中无法启动的兼容性问题。
- **生态与渠道扩展**：
  - [PR #2024](https://github.com/qwibitai/nanoclaw/pull/2024)：允许特定 Discord Bot ID 绕过拦截，打通了 NanoClaw 与 RSS/自动化聚合机器人的联动能力。
- **历史清理**：
  - [PR #1738](https://github.com/qwibitai/nanoclaw/pull/1738)（NanoClaw 更名 Argus）已关闭，表明项目短期内将保持现有品牌名称，不做破坏性重命名。

---

## 4. 社区热点

今日的社区焦点主要集中在 **v2 版本部署的顺畅度**及**系统容灾能力**上：

- **Setup 流的连续暴雷**：多位用户反馈在全新 Linux 环境下部署遇到阻碍。从 [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)（Bash 子进程 PATH 未生效）到 [Issue #2025](https://github.com/qwibitai/nanoclaw/issues/2025)（sudo 密码等待导致挂起），反映出安装脚本在非交互/异构环境下的兼容性亟待加强。
- **内核级安全担忧**：[Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029) 提出 agent 容器无限额限制，可能因死循环或恶意代码导致宿主机 OOM。这引发了关于 NanoClaw 作为多 Agent 调度平台在资源隔离方面的深入讨论。

---

## 5. Bug 与稳定性

今日报告了多个关键 Bug，按严重程度排列如下：

1. 🔴 **严重 (无资源隔离导致宿主机崩溃风险)**
   - [Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029)：容器无 `--memory/--cpus` 限制，可能导致宿主机 OOM。*(暂无对应 Fix PR)*
2. 🟠 **较高 (任务调度逻辑越权)**
   - [Issue #2032](https://github.com/qwibitai/nanoclaw/issues/2032)：预检脚本 `wakeAgent: false` 在 follow-up 推送时被绕过，导致不必要的 LLM 调用和费用消耗。*(已有 Fix PR: [PR #2033](https://github.com/qwibitai/nanoclaw/pull/2033))*
3. 🟡 **中等 (全新环境安装阻断)**
   - [Issue #1973](https://github.com/qwibitai/nanoclaw/issues/1973)：`onecli` 已安装但 bash 子进程找不到。*(已有相关 Fix PR: [PR #2021](https://github.com/qwibitai/nanoclaw/pull/2021), [PR #2022](https://github.com/qwibitai/nanoclaw/pull/2022))*
   - [Issue #2025](https://github.com/qwibitai/nanoclaw/issues/2025)：sudo 交互导致安装挂起。*(已有 Fix PR: [PR #2021](https://github.com/qwibitai/nanoclaw/pull/2021))*
4. 🟢 **一般 (外部依赖故障)**
   - [Issue #2026](https://github.com/qwibitai/nanoclaw/issues/2026)：`onecli.dev` 返回 521 错误，属上游服务宕机。

---

## 6. 功能请求与路线图信号

通过近期的 Issue 和未合并 PR，可以看出项目下一阶段的演进方向：

- **更强的容器安全与多租户隔离**：[Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029) 呼吁添加资源配额。
- **Host 与 Container 的边界互动**：[PR #2027](https://github.com/qwibitai/nanoclaw/pull/2027) 提出了 `host-actions` 技能，让容器内的 AI 能够精准识别并将宿主机的操作需求路由给外部，这预示着更强大的 Agent 执行力。
- **更广泛的通信协议支持与定制化**：[PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) 引入了 Matrix E2EE 加密通信渠道及模型粒度配置，有望在下一版本成为杀手级特性。
- **平滑迁移机制**：[PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931) 正在攻关 v1 到 v2 的自动化迁移，这是老用户升级的强心剂。

---

## 7. 用户反馈摘要

- **痛点：v2 安装体验依然脆弱**：从用户的反馈来看，全新的 Debian 13 环境或需要密码的 sudo 环境是重灾区，用户期望 `nanoclaw.sh` 能做到真正的“零配置开箱即用”。
- **痛点：外部依赖的可靠性**：OneCLI 作为核心鉴权组件，其官方服务 `onecli.dev` 的宕机（Issue #2026）直接导致用户无法完成部署。
- **肯定与期待**：从已关闭的 [Issue #2017](https://github.com/qwibitai/nanoclaw/issues/2017) 可以看出，社区对 NanoClaw 的愿景和设计理念表现出高度的热情和认可。

---

## 8. 待处理积压

以下重要 PR/Issue 已停留较长时间或需要核心维护者尽快介入 Review：

- **巨型特性 PR 待合并**：
  - [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624) (Matrix E2EE 支持)：已打开 22 天，涉及面广，需重点评估合并策略。
  - [PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931) (v1 -> v2 迁移工具)：已打开 4 天，属于 v2 正式发布的阻断性功能，需尽快验证稳定性。
- **核心路由重构 PR 待推进**：
  - [PR #2002](https://github.com/qwibitai/nanoclaw/pull/2002) (Agent-to-Agent 路由重构)：需要与已合并的 #2034 方案对齐，确定最终代码走向。
- **高危 Issue 待认领**：
  - [Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029) (容器资源限制)：涉及宿主机安全，建议维护者尽早提上排期，或给出官方文档级的缓解方案。

> *本报告由 AI 智能体基于 GitHub 公开数据自动生成，祝 NanoClaw 项目稳健发展！*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

**NullClaw 项目动态日报 (2026-04-27)**

这里是为您生成的 NullClaw 开源项目日报。基于数据分析，以下是项目在过去 24 小时内的详细动态与健康度评估。

---

### 1. 今日速览
过去 24 小时，NullClaw 项目处于**低活跃度的维护状态**。项目没有发布新版本，也没有合并或关闭任何 Pull Requests。然而，社区层面出现了一个值得关注的底层性能问题，表明部分用户在特定环境下的日常使用中遇到了阻碍。整体来看，代码库层面今日处于停滞状态，但 Issue 追踪器保持了信息的自然流动。项目整体健康度目前保持稳定，但需要维护者介入处理近期积压的缺陷。

### 2. 版本发布
**无**。今日项目未推送任何新的 Release 版本。

### 3. 项目进展
**无显著进展**。今日未发生任何 PR 的合并、关闭或新增操作。项目的代码库在 2026-04-27 未发生变更，正在等待下一波功能迭代或 Bug 修复的代码合并。

### 4. 社区热点
今日社区唯一的活跃点集中在一个具体的运行环境兼容性问题上：
*   **热点 Issue:** [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870)
*   **数据分析:** 该 Issue 虽然在 4月25日创建，但在过去 24 小时内迎来了新的评论（目前共 1 条评论）。这种活跃度表明该问题并非个例，可能在特定系统环境（尤其是开发者常用的 WSL2）中具有一定的普遍性，引发了用户的共鸣或补充讨论。

### 5. Bug 与稳定性
今日未报告**全新**的 Bug，但有一项近期报告的严重 Bug 仍处于未解决状态：
*   **🔴 [严重 HIGH] 空闲状态下 CPU 占用率达 100%**
    *   **链接:** [Issue #870](https://github.com/nullclaw/nullclaw/issues/870)
    *   **表现:** 用户在 WSL2 (Windows 11) 环境下运行 `nullclaw gateway` 时，即使处于空闲状态，也会有一个线程持续消耗 100% 的 CPU 资源。
    *   **影响:** 虽然网关表面上看仍能正常工作（如 Telegram 机器人能正常响应），但极高的资源占用会严重影响宿主机的性能与电池续航。
    *   **状态:** 目前 **无修复 PR (Fix PR)** 关联，尚未有代码层面的修复进展。底层疑似与 WSL2 网络栈中 `accept4` 系统调用的 Busy loop（死循环/轮询）有关。

### 6. 功能请求与路线图信号
今日未出现任何新功能请求或架构改进提案。由于缺乏活跃的 PR 和功能建议，目前无法推断项目下一版本的路线图信号。

### 7. 用户反馈摘要
从 Issue #870 的描述与互动中，可以提炼出以下真实用户画像与痛点：
*   **核心使用场景:** 用户将 NullClaw 部署在 **WSL2** 环境中，并将其作为 **Telegram Bot** 的网关使用。这证明 NullClaw 在个人 AI 助手的即时通讯集成方面是一个高频使用场景。
*   **痛点:** 用户对“功能可用但资源消耗异常”的容忍度较低。尽管 Bot 能够正常响应，但后台进程的失控（100% CPU）构成了严重的部署阻碍。这也反映出 NullClaw 在跨平台/子系统（特别是 Windows 生态下的 Linux 兼容层）的网络 I/O 事件处理机制上可能存在边缘场景的缺陷。

### 8. 待处理积压
*   ⚠️ **需要维护者关注:** [Issue #870](https://github.com/nullclaw/nullclaw/issues/870) 自 4月25日创建至今，尚未有官方维护者（或核心开发者）认领或给出初步排查方向。考虑到该问题会导致 100% CPU 占用，严重影响受影响环境用户的使用体验，建议维护团队尽快在 WSL2 环境下复现，或向作者请求提供 `strace` / `perf` 等性能分析火焰图，以推动问题的解决。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw (nearai/ironclaw)** 开源项目 2026-04-27 日报：

### 1. 今日速览
过去 24 小时，IronClaw 项目呈现出**高自动化运转与活跃的开发者提交**并行的状态。项目今日未发布新版本，但有 11 个待合并 PR 正在积极审查中，涵盖了底层依赖升级、沙箱构建优化以及多项关键 Bug 修复。值得注意的是，CI 监控机器人报告了多条 `canary` 环境的测试失败，涉及主流 LLM 提供商的连接性问题，这表明近期代码提交或外部 API 变更可能引入了不稳定因素。整体来看，项目在工程化维护和渠道扩展方面进展顺利，但需警惕部署层面的潜在回归。

### 2. 版本发布
**无新版本发布。**（截至 2026-04-27，最新 PR 活动显示项目正处在下一个版本的集成与测试阶段。）

### 3. 项目进展
今日共有 **2 个 PR 被关闭**，反映了项目在安全审计和跨版本集成方面的推进：
*   **[CLOSED] feat(reborn): clean up runtime authority boundaries ([PR #2969](https://github.com/nearai/ironclaw/pull/2969))**：这是一个由核心贡献者提交的重量级 PR。它通过封装进程资源预留，移除了不安全的依赖，并重构了调度端口契约，显著提升了沙箱运行时的安全边界。
*   **[CLOSED] merge upstream changes from 0.26.0 ([PR #2964](https://github.com/nearai/ironclaw/pull/2964))**：完成了 0.26.0 版本上游变更的合并，涉及 Agent、数据库、多渠道和扩展等全栈模块，并包含了数据库迁移（DB MIGRATION），为后续发布奠定了基础。

此外，还有 11 个 PR 正在待合并状态，包括依赖批量升级、修复 MCP (Model Context Protocol) 鉴权逻辑等，项目迭代速度依然紧凑。

### 4. 社区热点
从今日的活跃度来看，社区热点主要集中在**自托管部署支持**和**多渠道接入扩展**上：
*   **构建与部署灵活性**：[PR #2970](https://github.com/nearai/ironclaw/pull/2970) 提出从源码直接构建 Railway 镜像，以减少对 GHCR 容器镜像可见性的依赖，反映出社区对简化自托管部署的强烈诉求。
*   **多平台 IM 接入**：[PR #1120](https://github.com/nearai/ironclaw/pull/1120) 和 [PR #2019](https://github.com/nearai/ironclaw/pull/2019) 持续活跃，分别尝试接入 Prismer Cloud IM 和原生 Matrix 协议，表明项目正致力于成为跨平台、多模态的 AI 智能体基础设施。

### 5. Bug 与稳定性
今日的 Bug 报告主要由 CI 自动化和实际部署引发，按严重程度排列如下：
*   **高危：核心提供商连接失败（CI Canary 失败）**
    *   [Issue #2968](https://github.com/nearai/ironclaw/issues/2968)：`openai-compatible` 提供商测试失败。
    *   [Issue #2967](https://github.com/nearai/ironclaw/issues/2967)：`anthropic` 提供商测试失败。
    *   *分析*：在相同的 Commit (`7404e7d6`) 下同时触发两大主流 LLM 提供商失败，可能是由于代理调度、网络策略或最近引入的依赖破坏了请求格式。
*   **中危：私有 OAuth 与 Docker 部署受阻**
    *   [Issue #2966](https://github.com/nearai/ironclaw/issues/2966)：`private-oauth` lane 失败，影响第三方授权接入。
    *   [Issue #2963](https://github.com/nearai/ironclaw/issues/2963)：文档中指定的 Docker Hub 镜像 `nearai/ironclaw:latest` 不存在，直接阻塞了新用户的 Docker 部署体验。*暂无官方修复 PR。*

### 6. 功能请求与路线图信号
用户提出了针对“降本增效”和“更广泛数据库支持”的重要功能需求：
*   **[Issue #2965](https://github.com/nearai/ironclaw/issues/2965) 支持 Aurora DSQL 与核心/向量库拆分**：用户 `jousby` 提出将 IronClaw 拆分为核心数据库和向量数据库。因为 Aurora DSQL 目前不支持 `pgvector`，用户希望以此实现对无向量需求 Agent 的按需零缩放，极大降低运行成本。
    *   *路线图信号*：这是一个极具战略意义的架构优化建议。虽然目前无直接对应的 PR，但这与当前云原生 Serverless 数据库的演进方向高度一致，有望成为下一阶段架构重构的重点。

### 7. 用户反馈摘要
从今日的 Issues 与 PR 描述中，可以提炼出以下真实用户痛点：
*   **自托管体验存在摩擦**：vLLM/LiteLLM 等本地模型用户在重启服务时，常遇到配置被静默覆盖的问题（见 [PR #2961](https://github.com/nearai/ironclaw/pull/2961) 修复的 API key 校验逻辑）。
*   **MCP 标准化进程中的阵痛**：在接入基于 stdio/unix 传输的本地 MCP 服务器时，现有的 OAuth 强制校验会导致进程崩溃（见 [PR #2960](https://github.com/nearai/ironclaw/pull/2960)），说明 IronClaw 在兼顾云端复杂鉴权与本地轻量化运行方面还需要打磨。
*   **安全审计需求上升**：社区贡献者正在引入基于 Ed25519 的加密审计日志（见 [PR #2684](https://github.com/nearai/ironclaw/pull/2684)），反映出企业级用户对 AI 智能体工具调用溯源的强烈需求。

### 8. 待处理积压
以下长期或高影响的议题需要核心维护团队关注：
*   **依赖升级积压**：自动化机器人提交了大量依赖升级 PR（如涉及 39 个更新的 [PR #2973](https://github.com/nearai/ironclaw/pull/2973) 和涉及 14 个 Actions 升级的 [PR #2593](https://github.com/nearai/ironclaw/pull/2593)），目前均处于开启状态，需尽快安排 Review 以避免后续合并冲突。
*   **Docker Hub 镜像缺失**：[Issue #2963](https://github.com/nearai/ironclaw/issues/2963) 涉及最基础的部署体验，建议团队尽快补充镜像或更新相关文档指引。
*   **CI 基线修复**：由于三大 Canary 测试失败，建议在合并任何新 Feature 之前优先修复基线环境，防止引入隐蔽的回归缺陷。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-04-27)

## 1. 今日速览
过去 24 小时，LobsterAI 项目的代码提交与合并处于**静默状态**，无新增 Pull Request、代码合并或版本发布。然而，社区的 Issue 追踪器出现了异动，有 4 个历史遗留问题在今日产生了新的讨论或被机器人标记。整体来看，项目当前的开发活跃度较低，处于维护或迭代蓄力期。建议维护团队重点关注近期标记为 `[stale]` 的 Issue，防止用户反馈流失。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
*过去 24 小时内无已合并或已关闭的 PR/Issue，项目代码库与功能特性暂无向前推进。*

## 4. 社区热点
今日社区无明显的新增热点爆发，主要表现为历史 Issue 的集中更新。最受用户认可的功能请求引起了较多关注：
*   **[Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88) 建议加入使用token统计和日志输出**：该 Issue 在今日更新中获得了 3 个 👍（点赞），是当前列表中用户诉求最强烈的痛点。用户在使用自定义 API 时面临调试困难，急需可视化面板与日志支持。

## 5. Bug 与稳定性
今日无新增 Bug 报告，但以下两个历史遗留 Bug 依然处于开放且标记为 `[stale]` 的状态，需评估其严重程度：

*   **🔴 严重 - 上下文溢出导致服务不可用：**
    *   **[Issue #60](https://github.com/netease-youdao/LobsterAI/issues/60)**：使用 DeepSeek 模型时，因 Token 超出最大上下文限制（131,072）导致 API 400 报错，系统无法正常处理消息。目前暂无修复 PR。
*   **🟡 中等 - Windows 环境路径读取异常：**
    *   **[Issue #40](https://github.com/netease-youdao/LobsterAI/issues/40)**：在 Windows 系统下自定义安装路径（如 D 盘）后，程序仍在 C 盘创建文件且 Agent 错误地指向 C 盘路径寻找 SKILLs，导致运行报错。此问题严重影响 Windows 用户的自定义部署体验。目前暂无修复 PR。

## 6. 功能请求与路线图信号
从近期的 Issues 中可以提取出明确的产品优化方向，建议纳入后续版本的路线图规划：
*   **可观测性与运维面板**：用户强烈建议增加 **Token 统计仪表盘** 和 **系统日志输出** 功能（[Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88)）。这对于使用自定义/第三方 API 的用户来说，是排查错误和控制成本的核心刚需。
*   **外部内容解析能力**：用户反馈无法解析和访问微信公众号文章（[Issue #52](https://github.com/netease-youdao/LobsterAI/issues/52)）。若 LobsterAI 定位为全能个人助手，强化外置 RAG 或网页抓取解析能力将是关键一环。

## 7. 用户反馈摘要
通过对现有 Issue 的分析，提炼出真实用户的以下核心痛点与使用场景：
*   **部署环境细节**：存在部分将系统部署在 **Windows 环境** 且指定非系统盘（如 D 盘）的企业/个人用户，当前存在路径硬编码或工作目录无法配置的缺陷。
*   **模型接入需求**：用户不仅使用官方模型，还会广泛接入 **DeepSeek** 等高性价比第三方模型。系统在处理超长上下文时的容错机制不够健壮，缺乏自动截断或摘要提示。
*   **开发者体验 (DX)**：当前版本对于第三方 API 的错误提示不够友好，缺乏底层日志，导致接入调试过程痛苦。

## 8. 待处理积压
以下关键 Issue 已长期未得到实质解决，并在今日被重新标记为 `[stale]`。为维护项目健康度，建议维护者尽快介入：
1.  **Windows 路径及工作目录设定问题**：[Issue #40](https://github.com/netease-youdao/LobsterAI/issues/40)（已产生 2 条讨论，影响跨平台基础体验）
2.  **模型上下文长度溢出报错**：[Issue #60](https://github.com/netease-youdao/LobsterAI/issues/60)（已产生 3 条讨论，属于核心对话链路的阻断性 Bug）
3.  **微信公众号文章抓取失败**：[Issue #52](https://github.com/netease-youdao/LobsterAI/issues/52)（已产生 2 条讨论，涉及工具/插件调用能力）
4.  **日志与 Token 统计需求**：[Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88)（用户呼声最高，3 个点赞，建议作为下一版本迭代的重点考虑对象）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-04-27)

## 1. 今日速览
过去 24 小时内，Moltis 项目展现了**极高的开发活跃度与健康的项目推进节奏**。团队今日合入了 9 个 Pull Requests，并同步关闭了 5 个 Issues，整体交付效率极高。核心进展覆盖了**安全架构优化（凭据存储隔离）、本地大模型生命周期管理、以及多项 Web UI 的体验修复**。此外，社区贡献者也开始深度参与，提交了包括繁体中文国际化（i18n）和文件上传等实用功能的 PR。总体而言，项目当前处于功能快速迭代与安全性稳步提升的黄金阶段。

## 2. 版本发布
- **[Release 20260426.05](https://github.com/moltis-org/moltis/releases/tag/20260426.05)**
  - **更新内容**：官方未附带详细的 Release Notes，但根据今日合入的 PR 记录推断，此版本主要包含：修复代码块在深色模式下流式输出结束后的白底闪烁问题、重构 MCP 工具调用优先级、以及针对 Bundled Skills 状态管理的几项关键修复。
  - **迁移/升级注意**：无破坏性变更，建议所有用户升级以获得更稳定的 Web UI 体验。

## 3. 项目进展
今日共合并/关闭 9 个 PR，项目在安全性、系统能力和前端体验上取得了实质性突破：
- **安全架构升级**：PR [#885](https://github.com/moltis-org/moltis/pull/885) 彻底解决了语音 API 密钥明文存储的问题，将其迁移至带 Vault 加密的 `provider_keys.json` 中。
- **本地 LLM 资源优化**：PR [#884](https://github.com/moltis-org/moltis/pull/884) 引入了本地大模型的按需加载/卸载机制及空闲超时释放功能，大幅降低本地部署时的常驻内存消耗。
- **Skills 生态安全收紧**：PR [#882](https://github.com/moltis-org/moltis/pull/882) 修复了从仓库导入技能时未经审查自动启用所有技能的安全隐患；PR [#883](https://github.com/moltis-org/moltis/pull/883) 修复了非标准格式仓库导入时的路径解析错误。
- **前端 UI 完善**：PR [#886](https://github.com/moltis-org/moltis/pull/886) 重构了聊天工具栏，将 MCP、Debug 等状态徽章移至可见区域；PR [#879](https://github.com/moltis-org/moltis/pull/879) 修复了深色模式下的代码块样式冲突。

## 4. 社区热点
今日社区反馈聚焦于**工作流灵活性与 UI 交互体验**：
- **系统提示词定制化诉求**：Issue [#887](https://github.com/moltis-org/moltis/issues/887) 提出引入 `PREAMBLE.md` 文件作为模板变量，以便为不同 Agent 设定个性化的开场白或背景知识。这反映出重度用户对 Prompt 工程细粒度控制的强烈需求。
- **UI 回归引发关注**：Issue [#888](https://github.com/moltis-org/moltis/issues/888) 指出 PR #886 的 UI 重构意外移除了会话重命名功能，说明近期高频的 UI 改版带来了体验断层，需加强 E2E 测试。

## 5. Bug 与稳定性
今日共处理 6 个 Bug，其中包含 2 个安全相关缺陷和 1 个 UI 回归。按严重程度排列如下：

- **🚨 高危：仓库导入导致恶意技能自动启用** 
  - 状态：已修复
  - Issue: [#881](https://github.com/moltis-org/moltis/issues/881) | Fix PR: [#882](https://github.com/moltis-org/moltis/pull/882)
  - 描述：通过 URL 导入技能库时，系统会绕过沙箱自动信任并激活潜在的所有恶意技能。
- **🚨 高危：敏感配置明文暴露**
  - 状态：已修复
  - Issue: [#867](https://github.com/moltis-org/moltis/issues/867) | Fix PR: [#885](https://github.com/moltis-org/moltis/pull/885)
  - 描述：语音 API Keys 明文写入 `moltis.toml`。
- **🔶 中危：Web UI 无法禁用内置技能**
  - 状态：已修复
  - Issue: [#875](https://github.com/moltis-org/moltis/issues/875) | Fix PR: [#877](https://github.com/moltis-org/moltis/pull/877), [#878](https://github.com/moltis-org/moltis/pull/878)
- **🔶 中危：非标准技能仓库导入损坏**
  - 状态：已修复
  - Issue: [#880](https://github.com/moltis-org/moltis/issues/880) | Fix PR: [#883](https://github.com/moltis-org/moltis/pull/883)
- **🔷 低危：UI 回归导致会话无法重命名**
  - 状态：待修复 (Open)
  - Issue: [#888](https://github.com/moltis-org/moltis/issues/888)
  - 描述：由于 UI 组件重构，丢失了会话名称修改入口。
- **🔷 低危：MCP 路由错误**
  - 状态：已修复
  - PR: [#874](https://github.com/moltis-org/moltis/pull/874)（修复 Qwen3 等模型使用 MCP 时的工具路由问题，关联 Issue [#873](https://github.com/moltis-org/moltis/issues/873)）

## 6. 功能请求与路线图信号
从近期的 Issue 与 PR 中，可以观察到项目正在向“更专业的人机协同交互”演进：
- **富媒体对话支持**：PR [#876](https://github.com/moltis-org/moltis/pull/876)（Web 聊天文件上传按钮）已提交待合并，这将补齐 Moltis 在多模态交互上的短板。
- **Prompt 模板生态**：Issue [#887](https://github.com/moltis-org/moltis/issues/887) 请求的 `PREAMBLE.md` 支持，是对现有模板变量系统的合理延伸。结合正在 open 状态的 PR 来看，下一个小版本极有可能重点转向“多 Agent 上下文与预设管理”的完善。

## 7. 用户反馈摘要
分析 Issue 评论区及提交记录，提炼出用户的真实体验反馈如下：
- **痛点（配置与兼容性）**：用户 对于配置文件明文存储密钥表示担忧，这阻碍了他们将 Moltis 部署到生产环境或共享工作区。此外，特定开源模型（如 Qwen3.6）在调用外部工具时的行为边界仍需系统层兼容。
- **痛点（UI 稳定性）**：用户 发现最近对 Toolbar 的重构引发了功能缺失（#888），表明部分高级用户高度依赖原有的会话管理模式。
- **满意点**：社区对 Moltis 的 MCP 支持和技能系统扩展性抱有极高热情，正在积极提交 i18n（[#339](https://github.com/moltis-org/moltis/pull/339) 繁体中文）和底层逻辑修复的 PR，显示了良好的黑客友好度。

## 8. 待处理积压
以下重要 Issue 和 PR 仍处于 Open 状态，建议维护者重点关注：
- **功能阻断回归**：[#888 bug(ui): session name and rename button removed](https://github.com/moltis-org/moltis/issues/888)（由于已合入的 PR 引起，需尽快排期修复）。
- **核心功能待合入**：[#876 feat(ui): file upload button](https://github.com/moltis-org/moltis/pull/876)（已等待数日，需进行 Code Review 以推进合并）。
- **长期贡献 PR**：[#339 feat(i18n): add zh-TW locale support](https://github.com/moltis-org/moltis/pull/339)（自 3 月初提交，活跃度较高，亟待核心团队 Review 避免社区贡献者流失）。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是为您生成的 2026-04-27 CoPaw (QwenPaw) 项目动态日报：

# 📊 CoPaw (QwenPaw) 项目动态日报 (2026-04-27)

## 1. 今日速览
过去 24 小时，CoPaw 项目保持了**高度活跃**的状态，社区共产生了 11 条 Issue 更新（10 新增/活跃，1 关闭）与 6 条新增 Pull Request。尽管今日没有合并任何代码或发布新版本，但社区贡献者提交了多个高质量的 PR，涵盖桌面端重构（Tauri 2.x）、新增模型提供商以及核心通道的修复。
总体来看，项目当前处于**功能快速扩充与稳定性打磨并存**的阶段。用户侧对多通道（特别是微信、华为小艺）的集成诉求强烈，但核心架构（如上下文管理、多标签页会话隔离）暴露出的状态同步 Bug 需要官方团队尽快介入修复。

---

## 2. 版本发布
**无新版本发布。**
当前最新版本停留在 `1.1.4.post2`。考虑到社区正在积攒如 Tauri 桌面端支持、上下文压缩状态机等重要 PR，预计项目正在为下一个 minor 或 patch 版本进行蓄力。

---

## 3. 项目进展
今日虽然没有 PR 被合并（0 merged/closed），但待合并的 6 个 PR 展现了极高的社区参与度，其中有 4 个来自 `first-time-contributor`，显示出项目良好的开源吸引力：

*   **桌面端底层重构**：[#3813 feat: add tauri 2.x desktop app support](https://github.com/agentscope-ai/QwenPaw/pull/3813) 
    *提案使用 Tauri 2.x 替换原有的 Electrobun 桌面端架构，这将大幅改善桌面端的性能和资源占用。*
*   **新增模型提供商**：[#3846 feat(models): Support GitHub Copilot model provider](https://github.com/agentscope-ai/QwenPaw/pull/3846) 
    *首次实现了对 GitHub Copilot 模型提供商的支持，进一步扩大了可用模型生态。*
*   **核心架构加固**：[#3848 Harden context compaction fallback handling](https://github.com/agentscope-ai/QwenPaw/pull/3848) 
    *针对长期记忆/上下文压缩场景，引入了非破坏性降级和紧急最小上下文摘要机制，防止因 LLM 总结失败导致的活动历史记录被误删。*
*   **通道体验优化**：[#3845 feat(qq): fix audio message type and add automatic speech-to-text](https://github.com/agentscope-ai/QwenPaw/pull/3845) 修复了 QQ 频道语音消息类型错误，并新增自动语音转文字功能；[#3839 fix: XiaoYi A2A protocol implementation](https://github.com/agentscope-ai/QwenPaw/pull/3839) 重构了华为小艺通道的双 WebSocket 连接。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**配置持久化**与**多端会话管理**上：

*   🔥 **配置重置问题排查**：[#3817 [Question]: 新版本长期记忆向量模型设置配置失效](https://github.com/agentscope-ai/QwenPaw/issues/3817) (👍0, 评论 4)
    *诉求分析*：用户在 Docker 部署下发现每次重启后向量模型配置被清空。该 Issue 互动频繁，用户已自行定位到是启动时初始化逻辑的覆盖 Bug。这反映了社区对 RAG/长期记忆功能的高度依赖。
*   🔥 **多标签页会话隔离缺失**：[#3852 [Bug]: 多标签页切换智能体后无法保持原对话连续性](https://github.com/agentscope-ai/QwenPaw/issues/3852) (评论 2)
    *诉求分析*：高级用户习惯在多标签页同时使用不同 Agent 处理独立任务，但当前前端状态机无法隔离不同标签页的上下文，导致消息串台。

---

## 5. Bug 与稳定性
今日报告了大量影响用户体验的 Bug，按严重程度排列如下：

*   **🔴 P0 严重（数据丢失/核心功能失效）**
    *   **会话历史消失**：[#3843 Session history disappears and new messages are routed to a different session](https://github.com/agentscope-ai/QwenPaw/issues/3843) - 正在对话的记录突然消失，被路由到新会话。
    *   **深度思考模型调用失败**：[#3851 MODEL_EXECUTION_FAILED with DeepSeek thinking mode](https://github.com/agentscope-ai/QwenPaw/issues/3851) - 使用 DeepSeek R1/V4 等带推理模式的模型时，因未正确回传 `reasoning_content` 导致 API 报错崩溃。
*   **🟠 P1 较高（功能形同虚设/平台受阻）**
    *   **前端暂停按钮无效**：[#3850 Web UI 暂停按钮仅前端止渲染，后端 Agent 继续执行](https://github.com/agentscope-ai/QwenPaw/issues/3850) - 缺少后端控制机制，导致用户以为已停止，但实际 Token 和 API 费用仍在消耗。
    *   **华为小艺通道断连**：[#3840 XiaoYi channel fails to send replies](https://github.com/agentscope-ai/QwenPaw/issues/3840) - （*注：已有对应的 fix PR #3839 提交*）。
    *   **回复内容中途消失**：[#3849 Agent reply suddenly disappears mid-sentence](https://github.com/agentscope-ai/QwenPaw/issues/3849)。
*   **🟡 P2 中等（CLI/特定渠道限制）**
    *   **Mission 命令行 405 错误**：[#3847 qwenpaw mission list/start/status fails with 405](https://github.com/agentscope-ai/QwenPaw/issues/3847) - API 路由拼接错误导致 CLI 任务管理完全不可用。
    *   **微信消息截断**：[#3837 微信渠道连续发送多条消息导致后续消息被截断](https://github.com/agentscope-ai/QwenPaw/issues/3837)。

---

## 6. 功能请求与路线图信号
今日的 Issue 和 PR 暴露出项目下一阶段需要重点演进的方向：

*   **模型接入自动化**：[#3844 Support auto model listing and selection](https://github.com/agentscope-ai/QwenPaw/issues/3844) 提出接入 OpenAI 兼容 API 时应自动拉取模型列表，避免手动繁复注册。配合今日的 Copilot Provider PR，说明**模型接入的体验优化**将成为近期重点。
*   **输出控制与消息合并**：针对微信通道的限制（#3837），社区强烈呼唤“消息合并发送”与“发送间隔配置”功能。这要求后端 Agent 的流式输出层具备更高级的聚合缓冲机制。

---

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提炼出以下真实用户痛点：
1.  **Docker 部署用户**对生命周期管理敏感，配置无法持久化（`agent.json` 被覆写）极大打击了自托管用户的信心。
2.  **重度/专业用户**对**状态同步**有严苛要求：前端的动作（如点击“暂停”）必须同步反映到后端执行层；多标签页的并发操作必须做到状态隔离。
3.  **对接国内大模型（如 DeepSeek）**时，由于各家 API 在扩展字段（如 `reasoning_content`）上的差异，导致多轮对话极易报错，兼容性需要进一步加固。

---

## 8. 待处理积压
*   ⚠️ **长期未响应的核心 PR**：[#3813 feat: add tauri 2.x desktop app support](https://github.com/agentscope-ai/QwenPaw/pull/3813) 已提交 3 天且涉及桌面端架构大改，需要维护者尽快进行架构评估。
*   ⚠️ **高价值 CLI 修复**：[#3847 qwenpaw mission list/start/status fails with 405](https://github.com/agentscope-ai/QwenPaw/issues/3847) 导致 CLI 下的任务流完全阻断，且根因明确（URL 拼接问题），建议官方提级处理。
*   ✅ **已闭环**：[#1426 [bug, channel]: matrix 通道不工作](https://github.com/agentscope-ai/QwenPaw/issues/1426) 于今日被顺利关闭，标志着 Matrix 协议通道的接入趋于稳定。

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

# ZeroClaw 项目动态日报 (2026-04-27)

## 1. 今日速览

ZeroClaw 项目在过去 24 小时内保持**高活跃度**，社区互动与代码提交频繁。共产生 50 条 Issue 动态（41 条新开/活跃，9 条关闭）以及 46 条 PR 动态（32 条待合并，14 条合并/关闭）。项目当前正处于 v0.6.x 向 v0.7.x 迈进的密集迭代期，核心焦点集中在**提供商兼容性修复（特别是 Ollama、DeepSeek 和自定义端点）**、**多渠道集成优化** 以及 **ACP 协议健壮性提升**。尽管今日无新版本发布，但大量针对 Provider 兼容性和配置解析的修复 PR 正在排队等待合并，预计近期将推出修复版本。

## 2. 版本发布

**今日无新版本发布。**
当前主干分支仍在积攒针对 Provider 兼容性和系统稳定性的修复，尚未发布新的 Release。

---

## 3. 项目进展

今日共有 14 个 PR 被合并或关闭，项目在渠道集成、插件生态和文档完善方面取得了实质性推进：

*   **Matrix 渠道核心重构**: 核心贡献者 `singlerider` 提交了 Matrix 渠道的净室重写 PR [#6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112)，基于 `matrix-rust-sdk 0.16` 替换了混合 HTTP 旧实现，旨在彻底解决长期存在的连接与 E2EE 稳定性问题。
*   **ACP 协议工具输出修复**: PR [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) 已合并，修复了 ACP 服务端传输工具调用事件格式错误的问题，提升了第三方客户端的集成体验。
*   **WASM 插件生态启动**: 引入基于 Extism 的 WASM 插件运行时参考实现 PR [#5921](https://github.com/zeroclaw-labs/zeroclaw/pull/5921)（已合并），新增 `image-gen-fal` 插件，为 AI 绘图等异构能力接入奠定了基础。
*   **开发文档与 CI 优化**: 修复了 mdBook 文档库指向错误仓库的问题 [PR #6124](https://github.com/zeroclaw-labs/zeroclaw/pull/6124)，并清理了失效的 `strict-delta` lint 脚本 [PR #6133](https://github.com/zeroclaw-labs/zeroclaw/pull/6133)。

---

## 4. 社区热点

今日社区关注度高、讨论热烈的话题主要集中在配置体验与主流大模型兼容性上：

*   **Matrix 摩擦点追踪 (12 条评论)**: Issue [#4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) 持续引发关注。作为 Matrix 渠道的伞号，它记录了自 v0.6.2 以来的 E2EE OTL 重试死循环等问题，目前已被标记为 CLOSED，说明相关重写 PR [#6112] 已接管这些历史遗留痛点。
*   **i18n 系统重构 RFC (5 条评论)**: Issue [#5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) 提议移除仓库内手写的 TOML 多语言系统，改用 Mozilla Fluent。反映出维护者正在着手降低多语言文档的维护成本。
*   **Fallback Provider 配置失效 (1 条评论，高优先级)**: Issue [#5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803) 指出降级提供商链无法读取 `[providers.X]` 配置，导致凭证获取失败。目前 `armenb` 已提交修复 PR [#6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138)，正处于合并队列中。
*   **Webhook 支持 Agent 模式 (2 条评论)**: Issue [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) 反映了用户希望 Webhook 能够触发带工具执行能力的完整 Agent 工作流，而非仅限单向聊天。

---

## 5. Bug 与稳定性

今日报告了大量阻断工作流（S1）的关键 Bug，暴露出近期架构调整对部分 Provider 造成了破坏：

### 严重级别 S1 (工作流受阻)
*   **Provider 解析与连接类**:
    *   **llama.cpp 对象被忽略** (Issue [#5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815)): Schema v2 引入后导致 `[providers.models.llamacpp]` 配置失效。
    *   **全新安装默认模型错误** (Issue [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123)): 新环境 Ollama 对接时报 default_model 错误。已有对应修复 PR [#6013](https://github.com/zeroclaw-labs/zeroclaw/pull/6013) 等待合并。
*   **Ollama 工具调用全面瘫痪**:
    *   Ollama 提供商强制发送 `tool_count=0`，导致工具调用 API 从未生效 (Issue [#5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)，获 4 个 👍)。
    *   由于工具格式不兼容导致 Ollama 直接调用报错 (Issue [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962))。
*   **渠道上下文丢失**:
    *   QQ/Telegram 等渠道模式下，对话历史丢失了中间的工具调用和结果上下文 (Issue [#4827](https://github.com/zeroclaw-labs/zeroclaw/issues/4827))，导致多轮工具使用中断。

### 严重级别 S2/S3 (体验降级)
*   **DeepSeek-V4 格式不兼容** (Issue [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)): 对接最新 DeepSeek API 时，推理模式存在解析冲突。
*   **Web UI 设置严重错位** (Issue [#6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073)): 修改配置文件时，光标与实际输入位置不一致，影响 Web 端配置体验。

---

## 6. 功能请求与路线图信号

根据用户提交的 Feature Request 和活跃 PR，项目接下来的演进方向明确：

*   **插件与沙箱机制强化**: PR [#6057](https://github.com/zeroclaw-labs/zeroclaw/pull/6057) 正在完善 Python 技能的沙箱执行模式文档；PR [#6071](https://github.com/zeroclaw-labs/zeroclaw/pull/6071) 修复了 Markdown 扫描误报，这意味着 ZeroClaw 正在加强其作为“具备技能扩展能力的 Agent 容器”的边界安全性。
*   **渠道精细化控制**:
    *   Issue [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) / [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) 要求允许自定义“回复意图检查”策略（如超时时间、使用轻量级模型预判），特别是在私聊场景下跳过不必要的拦截。这表明当前的回复门控机制过于保守，影响了正常对话。
*   **执行控制流完善**:
    *   取消令牌未能传递给工具执行层 (Issue [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836))。这属于高风险架构遗漏，若在接下来的迭代中合入，将极大提升 Agent 长时间执行任务时的可控性。
*   **WeChat 个人号渠道恢复**: PR [#6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130) 旨在恢复之前被回滚的 WeChat iLink Bot 渠道支持，这是亚洲用户高度关注的功能。

---

## 7. 用户反馈摘要

从今日的 Issue 互动来看，用户的痛点与反馈十分集中：

*   **喜悦点**: 社区对引入 WASM 插件系统表现出积极态度，认为这将极大拓展 ZeroClaw 的能力边界；提供了 `good first issue` 标签（如 [PR #6135](https://github.com/zeroclaw-labs/zeroclaw/pull/6135)）吸引了新贡献者参与代码重构。
*   **核心痛点 (本地模型玩家)**: 大量使用 Ollama、llama.cpp 的本地用户遭遇了“降维打击”，由于配置解析和 API 格式问题，基本无法正常使用带工具调用的 Agent 工作流。
*   **核心痛点 (树莓派/边缘设备玩家)**: ARM64 架构上的二进制更新依然拉取错误架构包 (Issue [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842))，导致更新即宕机。
*   **核心诉求 (Channel 模式用户)**: 用户在使用 Telegram/QQ 接入时，极度渴望获得“对话上下文不丢失”、“私聊勿拦截”和“E2EE 正常工作”的稳定体验。

---

## 8. 待处理积压

以下高风险/高阻断问题长期悬而未决或缺少 Maintainer 明确排期，需重点关注：

1.  **E2EE 备份恢复机制失效 (Issue [#4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878))**: 已开启近一个月，导致重置后的加密 DM 房间彻底不可用，严重影响隐私聊天场景，目前未见对应修复 PR。
2.  **Channel 模式下未触发上下文压缩 (Issue [#4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880))**: 导致长期运行的渠道机器人容易撑爆 Token 限制。
3.  **Codex CLI 版本不兼容 (Issue [#5360](https://github.com/zeroclaw-labs/zeroclaw/issues/5360))**: 工具层硬编码了旧版参数，导致无法适配新版 Codex CLI。
4.  **会话取消令牌内存泄漏 (Issue [#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835))**: Gateway 中的 `cancel_tokens` 在异常退出时未被清理，长时间运行可能累积内存泄漏风险。

</details>