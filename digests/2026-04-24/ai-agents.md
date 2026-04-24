# OpenClaw 生态日报 2026-04-24

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-24 01:09 UTC

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

# OpenClaw 项目动态日报 (2026-04-24)

## 1. 今日速览

OpenClaw 项目今日保持极高的社区活跃度与开发节奏。过去 24 小时内，共有 **500 条 Issue 发生状态更新**（其中 361 条新开/活跃，139 条被关闭），同时有 **500 条 Pull Request 更新**（315 条待合并，185 条已合并/关闭）。这表明项目在快速迭代的同时，具备较强的 Bug 消化能力（Issue 关闭率达 27.8%）。

项目刚刚发布了 **v2026.4.22** 正式版本，主要引入了 xAI (Grok) 的多模态支持。然而，从社区反馈来看，该版本及前序版本在全局安装（npm）、打包依赖方面暴露出了一些回归问题，围绕 `@larksuiteoapi/node-sdk` 缺失的报错成为今日最集中的 Bug 焦点。

## 2. 版本发布

### 🚀 [v2026.4.22](https://github.com/openclaw/openclaw/releases/tag/v2026.4.22) (发布于 2026-04-22)

本次更新主要集中在多模态能力的扩展，特别是针对 **xAI (Grok)** 模型提供商的全面升级：

- **新增图片生成**：支持 `grok-imagine-image` 和 `grok-imagine-image-pro` 模型，包含参考图编辑功能。
- **文本转语音 (TTS)**：支持 6 种实时 xAI 语音，输出格式涵盖 MP3/WAV/PCM/G.711。
- **语音转文本 (STT)**：新增 `grok-stt` 音频转录及 xAI 实时转录能力。

## 3. 项目进展

今日共有 **185 个 PR 被合并或关闭**，开发重心主要集中在打包依赖修复、模型提供商兼容性以及 UI 细节优化上。以下是今日处理的核心 PR：

*   **依赖与打包修复 (高优先级)**
    *   PR [#70852](https://github.com/openclaw/openclaw/pull/70852)：**修复 bundled 插件运行时依赖安装失败问题**。解决了 Docker 或 npm 全局安装 2026.4.22 版本时，包含 `workspace:*` 依赖的插件报 `EUNSUPPORTEDPROTOCOL` 错误的问题。
    *   PR [#70855](https://github.com/openclaw/openclaw/pull/70855)：修复 `readCronRunLogEntries` 静默截断日志条目上限为 200 的问题。
*   **提供商兼容性 (多模态/LLM)**
    *   PR [#67668](https://github.com/openclaw/openclaw/pull/67668) (已关闭/合并)：为 **OpenRouter** 添加了原生图片生成支持，支持通过 OpenAI 兼容接口生成图像。
    *   PR [#51150](https://github.com/openclaw/openclaw/pull/51150)：修复了在使用自定义提供商（vllm, nvidia-api 等）时 `imageModel` 报 "Unknown model" 的问题。
    *   PR [#70826](https://github.com/openclaw/openclaw/pull/70826)：统一并补全了 Anthropic, Moonshot, NVIDIA 等提供商的鉴权元数据。
*   **UI 与系统运行逻辑**
    *   PR [#70847](https://github.com/openclaw/openclaw/pull/70847)：将 `openclaw models list` 设为只读命令，防止读取操作意外改写用户的 `models.json`。
    *   PR [#70851](https://github.com/openclaw/openclaw/pull/70851)：在 Web UI 会话选择器中隐藏内部子代理会话，提升前端界面整洁度。
    *   PR [#70848](https://github.com/openclaw/openclaw/pull/70848)：修复了 Webchat 无法正确向用户展示提供商（计费/鉴权/限流）错误信息的问题。

## 4. 社区热点

1.  **关于 Agent 身份与信任验证的架构探讨 (102 评论)**
    [Issue #49971](https://github.com/openclaw/openclaw/issues/49971) 引发了强烈讨论。作者 MolTrust 建议将 ERC-8004 与 W3C DID 标准引入 OpenClaw，以实现原生 Agent 身份验证。这表明随着智能体自主性的增强，社区对**安全、可验证的机器身份架构**有迫切需求。
2.  **跨平台客户端呼唤：Linux 与 Windows 桌面端 (93 评论, 👍71)**
    [Issue #75](https://github.com/openclaw/openclaw/issues/75) 长期占据热度榜首。OpenClaw 目前拥有 macOS 和移动端应用，但大量用户强烈要求提供对等的 Linux 和 Windows 原生桌面应用。
3.  **实时语音通话功能需求 (22 评论, 👍23)**
    [Issue #7200](https://github.com/openclaw/openclaw/issues/7200) 呼吁引入基于 WebRTC/Twilio 的双向流式实时语音通话支持。结合刚发布的 xAI 语音支持，实时交互体验显然是用户下一步的期待。
4.  **提供商缺失模块引发的“报错潮” (26 评论)**
    [Issue #70457](https://github.com/openclaw/openclaw/issues/70457) 及相关 Issues 反映了当前版本升级过程中的痛点（详见 Bug 分析）。

## 5. Bug 与稳定性

今日报告了多起**回归问题**，主要集中在全局安装依赖缺失、长上下文处理和多模型兼容性上。

🔴 **P0 级：阻塞正常安装与启动**
*   **npm 全局安装依赖缺失**：[Issue #70457](https://github.com/openclaw/openclaw/issues/70457), [#70292](https://github.com/openclaw/openclaw/issues/70292), [#70346](https://github.com/openclaw/openclaw/issues/70346) (共计 40+ 评论)。
    *   *现象*：全新安装时，由于缺少飞书扩展的底层依赖 `@larksuiteoapi/node-sdk` 或 `nostr-tools`，导致向导直接崩溃。
    *   *状态*：**已提交修复 PR**（见 PR [#70852](https://github.com/openclaw/openclaw/pull/70852)），预计下个版本合并。

🟠 **P1 级：核心功能异常**
*   **上下文压缩导致记忆被清空**：[Issue #60213](https://github.com/openclaw/openclaw/issues/60213)。
    *   *现象*：会话超过 `context_window` 触发自动压缩时，Agent 悄无声息地丢失所有上下文，且无明确报错。
*   **网关 OAuth Token 覆盖异常**：[Issue #53317](https://github.com/openclaw/openclaw/issues/53317)。
    *   *现象*：v2026.3.22 引入的回归 Bug，网关启动时会用缓存的脏数据覆盖刚生成的 OAuth Token，导致 Codex 等服务需要频繁重新鉴权。

🟡 **P2 级：特定 Provider 兼容性**
*   **Claude Opus 4.7 前向兼容问题**：[Issue #67888](https://github.com/openclaw/openclaw/issues/67888)。由于 `supportsAdaptiveThinking()` 未识别 opus-4-7，导致首轮请求 400 报错。
*   **Telegram 语音转录失效**：[Issue #17101](https://github.com/openclaw/openclaw/issues/17101)。Opus 编码的 `.ogg` 音频被当做原始附件处理。

## 6. 功能请求与路线图信号

基于近期的 Issues 与 PR 动态，可以预见以下方向将被纳入近期迭代：

1.  **更多平台接入图像生成**：随着 OpenRouter 图像生成 PR 的合并，社区正积极推动将图像生成标准化到更多提供商（如 [#50898](https://github.com/openclaw/openclaw/issues/50898) 要求支持 NVIDIA NIM）。
2.  **内存与上下文调度优化**：针对长上下文压缩失败的问题，PR [#70737](https://github.com/openclaw/openclaw/pull/70737) 正在尝试解耦 Dreaming Cron 与心跳机制，表明项目正在重构底层内存管理。
3.  **Google Meet 集成**：[PR #70765](https://github.com/openclaw/openclaw/pull/70765) 正在增加原生的 Google Meet 参与者插件，结合之前的 Twilio/WebRTC 讨论，项目正向着**全能型实时通信 Agent** 演进。

## 7. 用户反馈摘要

从今日的 Issue 提取真实反馈，当前用户的满意与不满点如下：

*   😣 **痛点 1：包管理体验不佳**。多位用户（包括 Linux/Windows/macOS 环境）反馈通过 `npm install -g` 升级或安装时，经常遭遇无法找到模块的崩溃问题，导致运维压力较大。
*   😣 **痛点 2：大模型切换/长上下文过于脆弱**。用户在使用高级模型（如 GPT-5-mini, Claude Opus）进行长时间挂机或复杂任务时，容易遇到 400 错误或被静默丢弃上下文（"all conversation memory lost"）。
*   😃 **满意点 1：多渠道整合能力**。社区对 OpenClaw 整合各种通讯渠道（Discord, WhatsApp, Telegram, Bluesky 等）的能力表示高度认可，并积极参与到各个渠道插件的测试中。
*   😃 **满意点 2：功能迭代迅速**。xAI 多模态的迅速跟进获得了正面反馈，用户对于项目快速适配最新 LLM 能力表示赞赏。

## 8. 待处理积压

以下高关注度/关键 Issue 已停滞或长期未彻底解决，建议维护团队重点跟进：

*   ⚠️ **Telegram 语音转录失效**：[Issue #17101](https://github.com/openclaw/openclaw/issues/17101)（标记为 Stale）。影响基础体验，已出现长期未修复迹象。
*   ⚠️ **Webchat 出现重复消息**：[Issue #39289](https://github.com/openclaw/openclaw/issues/39289)（标记为 Stale）。在单一网关进程下依然出现回显重复。
*   ⚠️ **Groq 推理模型参数错误**：[Issue #32638](https://github.com/openclaw/openclaw/issues/32638)（标记为 Stale）。OpenClaw 向 Groq 发送了不支持的 `reasoning_effort` 参数，导致请求被拒。
*   ⚠️ **网络安全策略误杀情况**：[Issue #38986](https://github.com/openclaw/openclaw/issues/38986)。当使用 VPN TUN 模式时，`web_fetch` 工具因域名被解析到虚假内网 IP 而直接被阻断，当前缺乏白名单机制。

---

## 横向生态对比

这份横向对比分析报告基于 2026 年 4 月 24 日各大开源 AI 智能体项目的社区动态，提炼了当前个人 AI 助手与自主智能体生态的演进脉络。

---

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“狂飙突进”与“基建重构”并存的阶段**。一方面，多模态能力（特别是实时语音流、图像生成）和多渠道接入（IM、邮件、IoT）已成为标配，项目迭代极快；另一方面，随着自主性的增强，**上下文管理（记忆）、执行沙箱安全、以及复杂 LLM Provider 适配**成为全行业共同的工程瓶颈。整体生态正从“单一对话玩具”迅速向“全能型多宿主数字员工”和“边缘计算智能节点”演进。

### 2. 各项目活跃度对比 (2026-04-24)
*活跃度评级标准：🟢极优（吞吐高/积压少） | 🟡健康（稳步迭代） | 🟠承压（Bug/PR积压多） | 🔴静默或基建停滞*

| 项目名称 | Issue 更新数 | PR 更新数 (待合并/总更新) | 今日 Release | 项目健康度评估 | 核心特征标签 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 (315/500) | v2026.4.22 (2天前) | 🟢 **极优** | 多模态全能、生态庞大、包管理痛点 |
| **Hermes Agent** | 44 | 50 (34/50) | v0.11.0 | 🟠 **承压** | 重构大版本、底层沙箱、存在高危安全漏洞 |
| **PicoClaw** | 36 | 45 (39/45) | Nightly build | 🟠 **承压** | MCP深度集成、积压严重、工具链重构 |
| **IronClaw** | 36 | 50 (43/50) | 无 | 🟠 **承压** | Engine V2大重构、多租户架构、QA密集暴露Bug |
| **ZeroClaw** | 50 | 50 (43/50) | 无 | 🟠 **承压** | 微内核重构、v0.7.4筹备、Ollama兼容差 |
| **CoPaw** | 50 | 50 (16/50) | v1.1.3.post1 / v1.1.4-beta | 🟢 **极优** | 渠道生态丰富、安全策略严苛、本地化支持 |
| **NanoBot** | 14 | 21 (12/21) | 无 | 🟡 **健康** | 内存/历史修复、渠道交互优化 |
| **NanoClaw** | 16 | 30 (12/30) | 无 | 🟡 **健康** | 宿主机安全加固、Signal渠道落地 |
| **LobsterAI** | 6 | 13 (0/13) | 无 | 🟢 **健康** | IM多实例、UI响应式优化 |
| **Moltis** | 8 | 13 (6/13) | 无 | 🟢 **健康** | 跨平台沙箱修复、KV cache优化 |
| **ZeptoClaw** | 15 | 16 (3/16) | 无 | 🟢 **极优** | 极致体积控制、供应链安全、边缘计算 |
| **EasyClaw** | 1 | 0 (0/0) | v1.8.7 & v1.8.8 | 🟡 **平稳** | 修复官网下载链接、macOS签名兼容 |
| **NullClaw** | 11 | 0 (0/0) | 无 | 🔴 **停滞** | 文档缺失、配置解析混乱、代码无合并 |

### 3. OpenClaw 在生态中的定位
*   **绝对体量领跑者**：日吞吐 500+ PR/Issue，具备恐怖的社区消化能力（Issue关闭率达 27.8%），处于绝对的第一梯队头部位置。
*   **多模态与渠道的“集大成者”**：第一时间跟进 xAI (Grok) 语音/图像等多模态能力，并聚合 WhatsApp/Telegram 等数十种渠道。
*   **优势与隐忧**：相比同类，OpenClaw 的功能广度无出其右，但**工程基建（尤其是包管理依赖）和上下文压缩机制**的稳定性正在拖累其口碑。其竞争对手（如 CoPaw、LobsterAI）正凭借在某些特定渠道或本地化体验上的稳健表现蚕食部分细分市场。

### 4. 共同关注的技术方向
*   **上下文与记忆机制的失效灾难**（*OpenClaw, Hermes, ZeptoClaw*）：随着对话变长，基于压缩算法的上下文管理极易引发“静默丢失全部记忆”的 P0 级 Bug。业界急需从粗暴的截断转向更智能的长期记忆检索（如向外部 Mem0 迁移）。
*   **LLM 新模型 (如 Claude Opus 4.7) 适配的脆弱性**（*OpenClaw, NanoBot, ZeroClaw*）：API 提供商的单方面参数弃用（如 `temperature` 或 `reasoning_effort`）会导致开源智能体全线崩溃，暴露出目前 Provider 路由层缺乏容错与降级机制。
*   **沙箱安全与宿主机的博弈**（*NanoClaw, ZeptoClaw, CoPaw, PicoClaw*）：Agent 越权读写、沙箱逃逸（甚至通过 SSH 反向控制宿主机）、以及过度苛刻导致指令被误杀，是目前 Agent 具备代码执行能力后最大的安全隐患。
*   **本地/边缘计算适配**（*ZeptoClaw, PicoClaw, Moltis*）：针对树莓派、Android 及本地模型如无网环境的热切换需求激增。

### 5. 差异化定位分析
*   **全能聚合中枢**：**OpenClaw, CoPaw, NanoBot**。追求大而全，接入尽可能多的 LLM 和 IM 渠道，重在扩展 AI 的触角，适合作为全平台数字分身。
*   **企业级工程与高可用重构**：**IronClaw, ZeroClaw, Hermes Agent**。目标不仅是助手，而是 Multi-Agent 调度平台。当前均在经历剧烈的底层 V2 架构重写，引入 WASM、微内核或多租户控制面。
*   **极客/边缘/IoT 优先**：**ZeptoClaw, PicoClaw**。采用 Rust/Zig 等非 Node.js 栈，极致压缩二进制体积，针对树莓派和智能家居做了深度优化，主打物联网场景。
*   **开箱即用的垂直应用**：**LobsterAI, EasyClaw**。注重 UI/UX 体验和特定系统（如 Mac/Windows 桌面端、企业微信）的稳定运行，对普通非极客用户最友好。

### 6. 社区热度与成熟度
*   **快速迭代但质量承压期**（*OpenClaw, IronClaw, ZeroClaw, Hermes*）：这些项目社区热度极高，但都面临严重的 PR 积压（均在 300~400+ 量级）或历史技术债清算，测试链路跟不上发版速度，属于“蒙眼狂奔”后的修罗场。
*   **稳健质量巩固期**（*CoPaw, Moltis, ZeptoClaw*）：在这些项目中，可以看到 Issue 打开与关闭比例非常健康。它们不仅推功能，还在积极做供应链安全审计、CI 门禁和内存泄漏修复，展现出优秀的开源治理能力。
*   **概念验证或停滞期**（*NullClaw*）：存在严重的文档缺失和底层逻辑 Bug，处于早期的混乱状态。

### 7. 值得关注的趋势信号
1.  **“记忆”正在被重构**：多项目报告指出，在执行长时 Cron 任务时，Agent 会被历史无关记忆污染或直接丢上下文。**外挂式专业记忆提供商（如 mem0）和显式滑动缓存正在取代隐性截断**。
2.  **MCP (模型上下文协议) 工程化治理**：PicoClaw 和 Moltis 的动态显示，MCP 正从“可用”向“企业级安全”演进，包括 OAuth 凭证注入、CLI 批量管理工具、以及针对 MCP Server 的防篡改哈希校验。
3.  **CLI/TUI 成为交互新重心**：Hermes Agent v0.11.0 使用 React/Ink 花费巨大精力重写了终端界面，加上 ZeroClaw、PicoClaw 在终端日志和安全控制上的投入，表明**重度用户在本地通过终端与 Agent 协同仍是刚需场景**。
4.  **安全审计常态化**：类似 NanoClaw 今日经历的社区用户 CSO 审计“轰炸”将成为常态。沙箱逃逸、SSRF 误杀（尤其是 198.18.x.x 代理网段）和提权漏洞将成为开源 AI 项目的生死线。

**给开发者的建议**：如果你正在构建个人 AI Agent，当前阶段**务必将 LLM 请求层设计为高度解耦和容错的**，并警惕盲目依赖长上下文；如果涉及代码执行工具，**优先选用基于 nsjail 或深度容器隔离的方案**，切勿仅依赖正则或工作目录限制来防范安全风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026 年 4 月 24 日 NanoBot 项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-04-24)

## 1. 今日速览
NanoBot 项目今日维持了极高的社区活跃度与开发推进速度。过去 24 小时内，项目共处理了 **14 条 Issue**（关闭 9 条，新开 5 条）和 **21 条 PR**（合并/关闭 9 条，待合并 12 条）。整体来看，开发重心目前高度聚焦于 **系统稳定性修复（特别是内存与历史记录管理）**，同时社区针对多模型兼容、第三方集成（飞书、WhatsApp、Telegram）以及可观测性方面贡献了大量高质量的 PR 和讨论。目前尚无最新版本发布，但主干分支已累积大量待合并特性。

## 2. 版本发布
今日 **无新版本发布**。

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，项目在底座稳定性、上下文管理和渠道集成上取得了实质性进展：
*   **核心历史记录膨胀修复**：合并了 3 个关于 `history.jsonl` 导致系统提示词污染和内存占用过高问题的修复 PR（[#3412](https://github.com/HKUDS/nanobot/pull/3412), [#3413](https://github.com/HKUDS/nanobot/pull/3413), [#3414](https://github.com/HKUDS/nanobot/pull/3414)）。彻底移除了导致长时间工具调用卡死的合并上限，并将系统提示词中的近期历史截断在 32K 字符，大幅提升了长对话场景的稳定性。
*   **渠道交互体验优化**：合并了 Telegram 渠道的内联键盘按钮支持（[#3398](https://github.com/HKUDS/nanobot/pull/3398)），增强了交互体验；同时飞书频道的 LaTeX 渲染支持也已合入（[#3307](https://github.com/HKUDS/nanobot/pull/3307)）。
*   **严重 Bug 闭环**：修复了配置 SMTP 邮件后，Bot 会陷入无限自回复死循环的致命逻辑漏洞（[#3234](https://github.com/HKUDS/nanobot/pull/3234)）。

## 4. 社区热点
*   **定时任务机制体验不佳** ([#2892](https://github.com/HKUDS/nanobot/issues/2892))：该 Issue 目前已有 15 条评论。用户反馈在 `agent` 中创建的定时任务需要重启 `gateway` 才能生效，这暴露了目前 Nanobot 在多模块（Agent 与 Gateway）状态同步机制上的设计不足。
*   **配置文件格式迁移探讨** ([#3402](https://github.com/HKUDS/nanobot/issues/3402))：社区发起了用 TOML 替代 JSON 作为本地配置文件的 Enhancement 讨论（7 条评论），反映出用户对提升本地配置可读性和编写体验的强烈诉求。
*   **多子智能体重复回复** ([#3377](https://github.com/HKUDS/nanobot/issues/3377))：用户在使用多 Agent 并发执行任务时，主 Agent 出现多次重复汇总回复的现象，此 Issue 引发了关于多智能体协同与状态汇总逻辑的讨论（4 条评论）。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已有 PR 进行了快速修复：
*   🔴 **P0 - 大量内存消耗 (RAM 占用激增)**：用户报告升级至 `v0.1.5.post2` 后，内存占用从 200MB 飙升至 600MB，怀疑与最新的 "dream" 特性有关。目前暂无对应 PR。([#3410](https://github.com/HKUDS/nanobot/issues/3410))
*   🟠 **P1 - Claude Opus 4.7 API 400 错误**：由于 Anthropic 新模型弃用了 `temperature` 参数，导致 Nanobot 硬编码的传参报错。目前已有对应修复 PR 提交。([Issue #3417](https://github.com/HKUDS/nanobot/issues/3417), [Fix PR #3418](https://github.com/HKUDS/nanobot/pull/3418))
*   🟠 **P1 - WhatsApp 登录失效**：升级新版本后，WhatsApp bridge 出现 `4003 Invalid token` 错误，即使清除鉴权文件也无法恢复。([#3406](https://github.com/HKUDS/nanobot/issues/3406))
*   🟡 **P2 - API Key 缓存不更新**：用户更新 `.config` 后，Bot 依然复用旧的 API Key。([#173](https://github.com/HKUDS/nanobot/issues/173))

## 6. 功能请求与路线图信号
*   **WebUI 文件上传** ([#3407](https://github.com/HKUDS/nanobot/issues/3407))：用户希望能在 WebUI 原生支持文件上传，丰富多模态输入。
*   **技能的开启/禁用状态** ([#1932](https://github.com/HKUDS/nanobot/issues/1932))：用户提出目前技能只能删除不能禁用，缺乏灵活性，此标记为 `good first issue`，有望吸引贡献者。
*   **更细粒度的 "Dream" 控制**：在待合并的 PR 中，已有人提交了允许用户配置 "dream" 特性是否可以修改 `USER.md` 和 `SOUL.md` 的功能 ([#3400](https://github.com/HKUDS/nanobot/pull/3400))，预计将被纳入下个小版本。

## 7. 用户反馈摘要
*   **痛点**：升级带来的破坏性变更较多（如 WhatsApp 掉线、内存泄漏、旧版 API 失效），用户在多智能体协同（重复回复）、状态热更新（定时任务需重启）方面遇到阻碍。
*   **场景**：大量用户正在尝试将 Nanobot 接入私有模型或新型号（如 Claude Opus 4.7），并将 Nanobot 作为核心调度层连接 WhatsApp、Telegram、飞书和邮件系统，说明 Nanobot 在“多渠道统一 AI 中枢”这一场景下极具吸引力。
*   **满意度**：用户对 WebUI 的整洁度、项目整体的渠道覆盖能力表示高度认可；同时社区开发者参与度极高，一天内提交了大量如 OpenTelemetry、MGP、LaTeX 渲染等高质量的深度定制 PR。

## 8. 待处理积压
*   **原生 WhatsApp 语音支持需求** ([#2152](https://github.com/HKUDS/nanobot/issues/2152))：有 2 个点赞，用户通过外挂 Skill 实现了语音支持，但由于需要每次更新后 Patch 桥接层，希望官方能原生支持。
*   **OpenTelemetry 链路追踪 PR** ([#3173](https://github.com/HKUDS/nanobot/pull/3173))：由核心贡献者提交的针对 LLM 调用和工具的 OTel 监控体系，已等待数日，需维护者尽快 Review 并入，以完善项目的可观测性基建。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 开源项目动态日报 (2026-04-24)

**数据统计周期**：过去 24 小时 | **项目仓库**：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 🌟 今日速览

Hermes Agent 项目今日持续保持高度活跃状态，在过去 24 小时内迎来了重大版本里程碑——**v0.11.0 (The Interface release)** 的正式发布。该项目在社区侧保持着极高的热度，过去一天内新增或活跃的 Issues 达到 44 条，PR 活跃度也高达 50 条（其中 34 条待合并），展现了极强的开发者生态吸引力。目前社区焦点主要集中在 v0.10.0 升级后带来的网关跨平台稳定性、以及新引入的重构 CLI/TUI 功能补齐上。同时，项目也存在较长的 Issue/PR 处理队列，部分关键 Bug 亟待核心团队介入 Review。

---

## 2. 🚀 版本发布

- **[Hermes Agent v0.11.0 (v2026.4.23)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.23)**
  - **发布日期**：2026-04-23
  - **版本代号称**：*The Interface release*
  - **核心更新**：对交互式 CLI 进行了**全面的 React/Ink 彻底重写**，引入了可插拔的架构。
  - **自 v0.9.0 以来的庞大体量**：包含 **1,556 commits**、**761 个合并的 PR**、修改了 1,314 个文件，代码净增 **224,174** 行。
  - **社区贡献**：共有 29 位直接社区贡献者（包含共同作者达 290 人）参与。
  - **迁移注意**：这是一个极具破坏性的大版本更新，涉及底层 UI 框架更替，建议从老版本（v0.9/v0.10）升级的用户密切关注路由配置和依赖项重写带来的影响。

---

## 3. 🛠 项目进展

今日共有 **16 个 PR 被合并或关闭**，主要集中在终端执行安全性、网关会话管理及日志系统优化：

- **终端安全沙盒扩展**：[#14191](https://github.com/NousResearch/hermes-agent/pull/14191) 提交了基于 `nsjail` 的轻量级本地沙盒后端。无需 root 权限和容器镜像，即可实现约 20ms 级别的启动延迟，极大地优化了高频短生命周期终端任务的性能。
- **网关状态与内存泄漏修复**：[#12080](https://github.com/NousResearch/hermes-agent/pull/12080) 修复了长时间运行子代理委派任务时导致的 SQLite 会话行泄漏，以及网关状态假死的问题，显著提升了网关长期运行的稳定性。
- **终端路径初始化修复**：[#14830](https://github.com/NousResearch/hermes-agent/pull/14830) 合并，确保配置的 `cwd` 在 SSH 会话初始化时被正确捕获，而非被远端默认登录目录覆盖。
- **规范化日志输出**：[#12672](https://github.com/NousResearch/hermes-agent/pull/12672) 移除了主入口 `print` 语句，替换为标准的 `logger`，提升了生产环境日志的可观测性。

---

## 4. 🔥 社区热点

以下为今日讨论最活跃的 Issues，反映了社区当前的最大痛点：

1. **Anthropic Claude 订阅认证失效（P0 级业务阻断）**：[#6475](https://github.com/NousResearch/hermes-agent/issues/6475)（👍15，评论 22）
   - **痛点分析**：用户在使用 Claude 订阅作为后端时，频繁遭遇 `HTTP 400: You're out of extra usage` 错误。即使重登或重启也无法解决。这表明 Hermes 在处理第三方 API 限流或 Token 刷新机制上存在阻断性缺陷。
2. **TUN 代理网络环境下的 SSRF 误杀（P2）**：[#3777](https://github.com/NousResearch/hermes-agent/issues/3777)（评论 5）
   - **痛点分析**：SSRF 防护机制错误地将现代代理软件（Clash/Surge等）使用的 `198.18.0.0/15` 基准测试 IP 段视为内网/私有地址予以拦截。这是一个典型的开发者/极客用户场景冲突。
3. **自定义提供商的 API 兼容问题（P1）**：[#12153](https://github.com/NousResearch/hermes-agent/issues/12153)（评论 3）
   - **痛点分析**：当第三方兼容 `/v1/models` 接口返回 500 或格式异常时，Hermes 无法正确回退。这反映了本地化模型玩家（如 vLLM/Ollama 用户）在接入时的脆弱体验。

---

## 5. 🐛 Bug 与稳定性

新版本及现有版本暴露了多个关键稳定性及安全问题，按严重程度排列：

- **【P0 严重安全漏洞】Discord 跨公会 DM 权限绕过**：[#12136](https://github.com/NousResearch/hermes-agent/issues/12136)
  - **影响**：`DISCORD_ALLOWED_ROLES` 未对 Guild（服务器）进行作用域隔离，导致低权限用户可跨域访问高权限会话（CVSS 8.1）。*目前尚未见修复 PR。*
- **【P1 核心逻辑】上下文压缩失败导致永久丢失**：[#12131](https://github.com/NousResearch/hermes-agent/issues/12131)
  - **影响**：当 HTTP 触发压缩失败时，系统注入了静态占位符，导致 Agent 遗忘当前任务上下文。
  - **修复状态**：暂无明确合并的 PR。
- **【P1 执行异常】JSON 解析错误未触发重试机制**：[#14782](https://github.com/NousResearch/hermes-agent/issues/14782)
  - **影响**：`ValueError` 的继承关系导致 `json.JSONDecodeError` 被错误分类为本地验证错误，直接造成链路中断而未能触发 LLM 重试。
- **【P1 工具调度】大模型输出格式抖动导致 Unknown tool**：[#14784](https://github.com/NousResearch/hermes-agent/issues/14784)
  - **影响**：未对 Claude 等模型随机输出的 `TodoTool_tool` 等后缀格式进行归一化清洗。
  - **修复状态**：目前有相关 Job 阻塞的修复 PR [#12069](https://github.com/NousResearch/hermes-agent/pull/12069) 正在等待合并。

---

## 6. 🛣 功能请求与路线图信号

结合社区提交与 PR 动态，以下功能有望在后续版本落地：

- **执行收据系统**：PR [#14836](https://github.com/NousResearch/hermes-agent/pull/14836) 与 CLI 管理命令 PR [#14838](https://github.com/NousResearch/hermes-agent/pull/14838) 正在密集提交。该功能将使子代理的委派任务变得可追溯、可审计。
- **静态 Web 托管集成**：Issue [#378](https://github.com/NousResearch/hermes-agent/issues/378) 提议为 Agent 引入 `here.now` 快速发布网页的能力，满足 Agent 快速构建前端展示的诉求。
- **会话显式缓存性能优化**：Issue [#12089](https://github.com/NousResearch/hermes-agent/issues/12089) 提出了基于对话感知的滑动缓存断点机制，以降低重复 Prompt 消耗，极具性能优化价值。
- **Windows WSL 自动启动支持**：Issue [#10014](https://github.com/NousResearch/hermes-agent/issues/10014) 提出优化 WSL 环境下的开机自启体验，降低 Windows 用户的部署门槛。

---

## 7. 💬 用户反馈摘要

通过社区议题提炼，用户在不同使用场景下的真实反馈如下：

- **使用场景多样化**：除了常见的 Docker 部署，越来越多用户在 WSL 环境（[#12482](https://github.com/NousResearch/hermes-agent/issues/12482)）、树莓派级设备，甚至微信/飞书/钉钉集成网关中重度使用 Hermes。
- **复杂调度体验不佳**：用户反馈 `delegate_task` 在多工具及长上下文场景极易假死挂起（[#14724](https://github.com/NousResearch/hermes-agent/issues/14724)）。
- **对代理/翻墙网络兼容性抱怨**：中国及部分地区用户使用代理网络时，常遭遇 IP 校验与网络超时阻断（[#3777](https://github.com/NousResearch/hermes-agent/issues/3777)）。
- **本地模型接入依然脆弱**：接入 vLLM、Ollama 甚至 Gemini 的自定义节点时，经常遭遇 Provider fallback 失效（[#12146](https://github.com/NousResearch/hermes-agent/issues/12146)）和 Cron 触发错误（[#13653](https://github.com/NousResearch/hermes-agent/issues/13653)）。

---

## 8. ⚠️ 待处理积压

以下高优先级模块存在积压或缺乏核心团队响应，需紧急关注：

1. **API Provider Auth 机制**：[#6475](https://github.com/NousResearch/hermes-agent/issues/6475) 作为点赞和讨论数最高的问题（22 评论/15 👍），严重影响了原生 Claude 用户的正常使用，至今未彻底解决。
2. **高优 PR 审核阻塞**：针对网关超时和内存泄漏的关键 PR [#12080](https://github.com/NousResearch/hermes-agent/pull/12080) 已开启数日，需维护者优先合入主线以防生产环境会话泄漏。
3. **微信/企业微信网关稳定性**：[#12154](https://github.com/NousResearch/hermes-agent/issues/12154) 反映的 asyncio 超时异常和会话过期处理不当，极大影响了国内 ToB 用户的连通率，目前仍处于 Open 状态。
4. **多 Profile 会话隔离失效**：[#12099](https://github.com/NousResearch/hermes-agent/issues/12099) 指出 `build_session_key()` 硬编码导致多平台复用网关时消息串台，属于底层架构级缺陷，尚无实质性修复进度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 PicoClaw 开源项目 2026-04-24 动态日报：

---

# PicoClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
PicoClaw 项目今日保持着**极高的社区热度与开发者活跃度**。在过去的 24 小时内，项目新增并活跃了 36 个 Issues，同时有 45 个 Pull Requests 得到了更新。项目正式推送了 `v0.2.7` 的 Nightly 构建版本，核心代码库正处于频繁的迭代与测试阶段。社区侧重点目前明显向**多模态支持（音频处理）、基础设施安全性加固**以及**大语言模型（LLM）提供商兼容性**倾斜。不过，今日处理并合并的 PR 较少（合并/关闭 6 个，待合并 39 个），大量积压的 PR 表明项目亟需维护者进行集中代码审查。

## 2. 版本发布
- **[nightly: Nightly Build v0.2.7-nightly.20260424.f4400472](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **更新性质**: 自动化构建版本（包含最新主分支代码）。
  - **警告**: 官方提示该版本可能不稳定，建议谨慎用于生产环境。
  - **变更范围**: 包含自 `v0.2.7` 以来至 `main` 分支的所有提交，涵盖了最新合并的依赖项升级、修复及新功能测试。

## 3. 项目进展
今日主要推进了以下合并/关闭的 PR 及核心贡献，为后续的正式版 v0.2.7 打下基础：

- **核心网络协议更新**：合并了依赖 `github.com/aws/aws-sdk-go-v2/service/bedrockruntime` 的更新 ([PR #2640](https://github.com/sipeed/picoclaw/pull/2640))，为 AWS Bedrock 的流式输出做好了底层准备。
- **流式处理架构演进**：开启了一个关键的增强提案 [PR #2645](https://github.com/sipeed/picoclaw/pull/2645)，使用 AWS ConverseStream API 为 Bedrock provider 实现了真正的 `StreamingProvider` 接口，将极大改善实时 Token 的响应体验。
- **MCP (模型上下文协议) 易用性革命**：[PR #2641](https://github.com/sipeed/picoclaw/pull/2641) 提交了一套完整的 MCP CLI 管理套件，用户可以直接通过命令行对 MCP 服务器进行增删改查及测试，免去了手动修改 JSON 的繁琐。
- **底层依赖大升级**：前端核心语言 TypeScript 计划从 5.x 大版本升级至 6.0.3 ([PR #2639](https://github.com/sipeed/picoclaw/pull/2639))，OpenAI Go SDK 也迎来了大幅版本跨越 ([PR #2636](https://github.com/sipeed/picoclaw/pull/2636))。

## 4. 社区热点
以下是今日讨论最为激烈、关注度最高的 Issues，反映了社区的核心诉求：

- 🔥 **[Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)** (👍 0, 评论 9): **LLM 账号堆叠（弹夹模式）**。社区强烈呼吁支持多个 API Key 的轮换机制，以应对单一账号的速率限制和配额耗尽问题。
- 💬 **[Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)** (评论 8): **Ollama 云端凭证支持**。许多使用 Ollama 云端部署的用户发现缺乏凭证配置项，这是一个阻塞性的体验问题。
- ⏰ **[Issue #2468](https://github.com/sipeed/picoclaw/issues/2468)** (评论 6): **定时任务执行失败**。用户在配置计划任务时频繁遭遇 `restricted to internal channels` 错误，导致 Cron 工具无法正常使用。
- 📧 **[Issue #2465](https://github.com/sipeed/picoclaw/issues/2465)** (评论 5): **SMTP 邮件推送通道**。社区希望增加邮件发送能力，以便将 AI 的定时任务结果（如周期性检查报告、周报）直接推送到邮箱。
- 🛡️ **[Issue #2377](https://github.com/sipeed/picoclaw/issues/2377)** (评论 5): **终端控制字符安全隐患**。用户指出 `exec` 工具和日志输出中可能包含恶意的 ANSI 控制字节和 Unicode 双向格式字符，存在欺骗运维人员的风险。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，多集中在通道和工具域，部分已有 PR 跟进：

1. **P0 / 严重阻塞性**:
   - **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)** & **[Issue #2468](https://github.com/sipeed/picoclaw/issues/2468)**: 定时任务和周期性请求触发内部通道错误，目前已有用户在树莓派等边缘设备上频繁复现。暂无直接修复 PR。
2. **P1 / 逻辑与兼容性错误**:
   - **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)**: Windows 平台路径分隔符导致 `list_dir` 报错 "invalid argument"。
   - **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)**: `exec` 工具的安全守卫机制过于简单粗暴，误杀了合法的 CURL 外部请求。相关的 Schema 验证问题在 [PR #2128](https://github.com/sipeed/picoclaw/pull/2128) 中正在尝试修复。
   - **[Issue #2482](https://github.com/sipeed/picoclaw/issues/2482)**: 本地开源权重模型（如 mlx-lm）在执行 tool calls 时解析失败。
3. **P2 / 界面与多通道同步**:
   - **[Issue #2447](https://github.com/sipeed/picoclaw/issues/2447)** & **[Issue #2446](https://github.com/sipeed/picoclaw/issues/2446)**: 多通道架构下，如果某个通道有挂起任务，其他通道发送消息可能会被错误地回显或忽略。此问题在飞书通道 ([Issue #2464](https://github.com/sipeed/picoclaw/issues/2464)) 表现尤为明显。
   - **[PR #2504](https://github.com/sipeed/picoclaw/pull/2504)**: 修复了 Discord 语音通道中 OGG Opus 解码器缓冲区重用导致的音频损坏 Bug。

## 6. 功能请求与路线图信号
从近期的 Feature Request 和 PR 走势，可以看出项目接下来的演进方向：

- **多模态本地化**：[PR #2626](https://github.com/sipeed/picoclaw/pull/2626) 正在为多模态 LLM 增加原生音频输入支持；同时 [PR #2496](https://github.com/sipeed/picoclaw/pull/2496) 引入了 Intel OpenVINO 支持，让本地 CPU/GPU/NPU 推理能力进一步增强。这表明 PicoClaw 正在摆脱单纯的“文本调用”，转向“全模态本地/云端混合智能体”。
- **认证与上下文灵活性**：[Issue #2169](https://github.com/sipeed/picoclaw/issues/2169) 呼吁支持双重 HEAD 认证，以及 [Issue #2527](https://github.com/sipeed/picoclaw/issues/2527) 要求 `fresh_tail_size` 可配置，反映出进阶开发者对 Agent 上下文管理和复杂企业级 API 接入的强烈需求。
- **记忆系统拓展**：[Issue #2515](https://github.com/sipeed/picoclaw/issues/2515) 提出集成外部专业记忆提供商（如 mem0, Supermemory），项目可能会在未来的版本中原生支持外挂长期记忆网络。

## 7. 用户反馈摘要
从海量 Issue 描述与评论中，可以提炼出以下真实用户体验反馈：
- **痛点 1：安全沙箱与实用性冲突**。用户在使用 `exec` 等工具时，发现 PicoClaw 对“工作空间”的限制极其严格，频繁出现 `Command blocked by safety guard` 错误（[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042), [Issue #2519](https://github.com/sipeed/picoclaw/issues/2519)），甚至系统在后台悄悄高频读写 `/tmp` 目录，导致体验非常割裂。
- **痛点 2：边缘设备兼容性**。有不少用户在 Raspbian (树莓派) 等 ARM 设备上部署，但遇到了 OAuth 错误和平台不兼容问题（[Issue #2602](https://github.com/sipeed/picoclaw/issues/2602)），表明项目在轻量级设备上的适配还有待完善。
- **痛点 3：Docker 与配置混乱**。Web UI 频繁要求重新登录（[Issue #2302](https://github.com/sipeed/picoclaw/issues/2302)），同时 Docker 以 ReadonlyRootfs 模式运行时缺乏明确的环境变量说明（[Issue #2440](https://github.com/sipeed/picoclaw/issues/2440)），增加了运维成本。

## 8. 待处理积压
以下重要 Issue 和 PR 长期悬而未决或缺乏核心维护者的明确响应，建议优先关注：

- **[Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)** (Ollama 云凭证缺失): 已开放多日，评论众多，直接影响到主流 Ollama 云端用户的使用，目前未见官方排期。
- **[PR #2128](https://github.com/sipeed/picoclaw/pull/2128)** (修复工具 JSON Schema 校验): 该 PR 旨在解决严格模式下（如 LM Studio）的工具调用报错，已被标记为修复 [#2139](https://github.com/sipeed/picoclaw/issues/2139)，但长期停滞未合并。
- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)** (exec 工具正则拦截误杀): 自 3 月初报告至今，严重影响了 Agent 联网获取数据的自动化链路，急需重构 `guardCommand` 逻辑。
- **[PR #2641](https://github.com/sipeed/picoclaw/pull/2641)** (MCP CLI 管理): 这是一个庞大的功能 PR，需要进行密集的代码审查，建议维护团队尽快排期，以免产生合并冲突。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
NanoClaw 今日维持了极高的开发与社区活跃度，过去 24 小时内共产生 **16 条 Issue 更新**（15 新开/活跃，1 关闭）和 **30 条 PR 更新**（12 待合并，18 已合并/关闭），展现了强大的社区贡献潜力和维护者的高效合并节奏。今日的重心明显倾向于**安全防护加固**与**多平台适配优化**，集中处理了由于沙箱逃逸引发的宿主机安全审查（CSO audit）。同时，项目在通信渠道扩展方面取得长足进展，Signal 渠道的端到端支持已全面落地。整体而言，项目在快速迭代新功能的同时，正经历必要的稳定性与安全性阵痛期，健康度呈现螺旋上升趋势。

## 2. 版本发布
过去 24 小时内项目**无新版本**发布。当前主分支仍处于高频功能迭代与安全修复的合并期，预计在当前积压的注册流程重构和安全性 PR 全部合并后，将推出下一个重要版本。

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，项目整体在渠道接入、容器运行时安全、系统鲁棒性上迈出了坚实的一步。主要进展包括：

*   **Signal 渠道全面落地**：合并了原生 Signal 适配器 ([PR #1953](https://github.com/qwibitai/nanoclaw/pull/1953)) 及其自动化设置流程集成 ([PR #1954](https://github.com/qwibitai/nanoclaw/pull/1954))，后续能力增强（语音转写、图片、提及等）也已在 [PR #1962](https://github.com/qwibitai/nanoclaw/pull/1962) 提交。
*   **安全防线加固**：核心安全修复 [PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945) 被合并，针对 agent-to-host 提权漏洞进行了全面阻击，落实了只读挂载、SSHD Docker 网络隔离以及敏感文件过滤。
*   **运行时稳定性提升**：修复了容器重启导致静默丢消息的严重 Bug ([PR #1941](https://github.com/qwibitai/nanoclaw/pull/1941))，修复了消息投递重试导致的非幂等插入问题 ([PR #1943](https://github.com/qwibitai/nanoclaw/pull/1943))，并修复了 Discord 批准卡片交互失效的问题 ([PR #1932](https://github.com/qwibitai/nanoclaw/pull/1932))。
*   **提供商路由修复**：[PR #1958](https://github.com/qwibitai/nanoclaw/pull/1958) 修复了 `container-runner` 无法正确读取数据库中 `agent_provider` 配置的回退逻辑问题。

## 4. 社区热点
讨论最活跃、影响最深远的议题主要集中在**安全漏洞审计**与**底层能力构建**：

*   **CSO 安全审查系列报告**：由社区用户 `alecburrett` 提交的系列 Issue 引发了高度关注，详细披露了从严重提权漏洞到凭证管理不当等多个维度的安全问题（详见第 5 节）。
*   **底层文件操作 MCP 工具提案 ([Issue #1956](https://github.com/qwibitai/nanoclaw/issues/1956))**：用户 `chiptoe-svg` 提议为 Codex 和 OpenCode 引入与 Claude 对齐的原生文件操作 MCP 工具（Read/Write/Edit 等），以取代现有高延迟的 Bash shell 调用（如 `cat`/`sed`）。这反映了社区对 Agent 底层执行效率和跨平台一致性的强烈诉求。
*   **延迟优化建议 ([Issue #1955](https://github.com/qwibitai/nanoclaw/issues/1955))**：紧随其后，该用户还提交了经过生产验证的三个低风险延迟优化项，显示出深度使用用户的工程化思考。

## 5. Bug 与稳定性
今日报告了多个关键 Bug 及安全漏洞，部分已有修复方案：

*   **[CRITICAL] 沙箱绕过与宿主机提权 ([Issue #1946](https://github.com/qwibitai/nanoclaw/issues/1946), [Issue #1947](https://github.com/qwibitai/nanoclaw/issues/1947))**：Agent 容器默认将宿主机网关加入 hosts，且在 `bypassPermissions` 模式下允许执行 Bash。据称这已导致生产事故（Agent 通过 SSH 从容器逃逸并在宿主机执行 `docker stop`）。**状态：已通过 [PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945) 修复。**
*   **[HIGH] Apple Container 网络与代理失效 ([Issue #1103](https://github.com/qwibitai/nanoclaw/issues/1103), [Issue #1934](https://github.com/qwibitai/nanoclaw/issues/1934))**：macOS 上的 Apple Container 使用 Linux VM，导致凭证代理无法启动，且容器无法解析 `host.docker.internal`。**状态：已有针对性修复 [PR #1936](https://github.com/qwibitai/nanoclaw/pull/1936) 和 [PR #1937](https://github.com/qwibitai/nanoclaw/pull/1937) 提交待合并。**
*   **[HIGH] 敏感信息泄露隐患 ([Issue #1948](https://github.com/qwibitai/nanoclaw/issues/1948), [Issue #1949](https://github.com/qwibitai/nanoclaw/issues/1949), [Issue #1950](https://github.com/qwibitai/nanoclaw/issues/1950))**：Tailscale 侧车模板和 Integration Token 存在明文暴露或可写权限风险。**状态：已通过 [PR #1945](https://github.com/qwibitai/nanoclaw/pull/1945) 修复。**
*   **[MEDIUM] Setup 注册步骤数据库迁移不兼容 ([PR #1960](https://github.com/qwibitai/nanoclaw/pull/1960))**：导致新安装的 v2 实例在执行注册时报错 `Missing columns`。**状态：已有修复 PR 待合并。**

## 6. 功能请求与路线图信号
从今日的 Issue 与 PR 动态来看，项目正在向**多模型支持**、**多渠道无缝切换**以及**轻量级部署**的方向演进：

*   **第三方 API 通道支持 ([Issue #1930](https://github.com/qwibitai/nanoclaw/issues/1930))**：中文社区用户呼吁支持除 Claude 之外的其他模型及 API 通道，结合今日合并的 Provider 路由修复 ([PR #1958](https://github.com/qwibitai/nanoclaw/pull/1958))，预示着项目在多模型接入架构上的完善，下一步可能推出官方的第三方模型配置指南。
*   **Gmail MCP 原生工具集成 ([PR #1961](https://github.com/qwibitai/nanoclaw/pull/1961))**：利用 v2 的 OneCLI 凭证注入机制，新增 Gmail 工具。这表明项目正在丰富 Agent 的原生工具生态，减少对外部复杂配置的依赖。
*   **边缘设备与 ARM64 支持 ([Issue #1957](https://github.com/qwibitai/nanoclaw/issues/1957))**：社区成功在 NXP i.MX93 EVK (ARM64) 上运行 PicoClaw，说明项目在轻量级/边缘计算场景下具有潜在应用价值。

## 7. 用户反馈摘要
通过分析今日的 Issue 描述，提炼出以下真实用户反馈：

*   **痛点 1：Apple Silicon 用户体验受阻**。多位用户反馈 Homebrew 路径配置缺失导致服务启动失败，证明项目前期测试对 M 系列芯片的本地环境覆盖不足。
*   **痛点 2：Max 订阅用户的授权断层 ([Issue #1944](https://github.com/qwibitai/nanoclaw/issues/1944))**。使用 Claude Max 20x 订阅的用户在完成 OAuth 后无法调用 Sonnet，反映了 Token 验证流程对高等级订阅用户的兼容性缺失。
*   **痛点 3：Discord 渠道回复错乱 ([Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959))**。Agent 回复基于容器初始化状态而非消息源，导致所有回复串楼，严重干扰多线程使用场景。
*   **满意点**：社区对 v2 架构的 `OneCLI` 凭证管理机制表示认可，新功能的接入（如 Gmail 工具）开始积极遵循这一安全范式。

## 8. 待处理积压
以下重要的 Open PR 和 Issue 需要维护团队重点关注以防阻塞版本发布：

*   **[PR] v1 到 v2 的自动化迁移方案 ([PR #1931](https://github.com/qwibitai/nanoclaw/pull/1931))**：作为大型重构 PR，尚未合并。这对于老用户平滑升级至关重要，需评估测试覆盖率。
*   **[PR] 全局语音转写 V2 ([PR #1879](https://github.com/qwibitai/nanoclaw/pull/1879))**：支持本地 Whisper 和 OpenAI 回退的渠道无关性特性，已开启数日，亟待 Review。
*   **[Issue] Max 订阅 OAuth 故障 ([Issue #1944](https://github.com/qwibitai/nanoclaw/issues/1944))**：影响付费高净值用户群体，目前无关联 PR，建议优先排期跟进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 NullClaw 项目 2026-04-24 动态日报：

# NullClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
过去 24 小时，NullClaw 项目在代码合并层面处于**静默状态**（0 个 PR 更新，0 个新版本发布），但社区活跃度呈现**爆发式增长**。Issues 板块共产生 11 条更新，包含 8 个新开启的议题和 3 个已关闭的议题，主要集中在新用户配置、多渠道接入（Telegram/Matrix）以及移动端编译等方面。大量新用户涌入尝试部署该项目，但由于官方文档与默认配置的缺失，导致社区痛点集中爆发，项目目前处于“**叫好但不叫座**”的基建磨合期。

## 2. 版本发布
* **无新版本发布**。今日无 Tag 或 Release 动态。

## 3. 项目进展
尽管今日没有 PR 合并，但通过关闭的部分 Issue 可以看出维护者在进行底层的梳理工作：
* **Issue #167** ([CLOSED] why cannot use the shell command "curl and wget"): 明确了项目对于 `curl` 和 `wget` 等底层 Shell 命令的硬编码限制策略。
* **Issue #39** ([CLOSED] [bug] Matrix configuration not recognized?): 移除了早期关于 Matrix 配置识别错误的遗留问题。
* **Issue #811** ([CLOSED] [bug] Fails to connect to sub agent with a custom OpenAI-compatible provider): 修复了在使用自定义 OpenAI 兼容提供商时子代理连接失败 (`error.CompatibleApiError`) 的问题。该问题获得了 2 个 👍，表明社区对多模型接入的需求较高。

## 4. 社区热点
今日最活跃的讨论围绕着**多平台配置**与**基础 CLI 体验**展开，用户 `eabase` 集中反映了多个核心问题：
* **Issue #864** ([bug] Matrix channel configuration fail to work - getting Telegram related responses!): 用户在配置 Matrix 时，系统竟返回了 Telegram 相关的响应，这一严重的“串台”Bug 引发了 3 条讨论，暴露出多信道路由代码可能存在逻辑耦合。
* **Issue #867** ([enhancement] Provide a fully working example config.json file): 强烈要求提供完整、可用的默认配置文件。这反映了当前项目开箱即用体验极差，新用户门槛极高。
* **Issue #865** ([bug] CLI shows ctrl characters for up/down/left/right keys): CLI 终端基础交互失效（方向键显示为控制字符），直接打断了用户在终端下的使用习惯。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，按对系统可用性的影响程度排序如下：

* **严重: 配置与信道路由混乱**
  * **#864** Matrix 配置触发 Telegram 响应：信道隔离失败。（无 Fix PR）
  * **#869** Telegram 渠道加载失败：即便 `config.json` 配置完全且校验通过，依然提示 "not configured"。（无 Fix PR）
* **中等: 核心功能不可用**
  * **#866** curl post 失败：即使将 curl 加入 allowlist 依然被拦截，表明沙箱或权限管控逻辑存在硬编码漏洞。（无 Fix PR）
  * **#427** 自定义 Skill 无法调用：Agent 无法识别 `web-to-markdown` 等自定义技能（tool not found）。（无 Fix PR）
* **低: 环境兼容性与终端 UI**
  * **#868** zig build 在 Android/Termux (aarch64) 上失败：报错 `AccessDenied on options.zig linkat`。（无 Fix PR）
  * **#865** 终端方向键显示控制字符：影响本地 CLI 体验。（无 Fix PR）

## 6. 功能请求与路线图信号
* **完善文档与开箱即用体验 (#867)**：用户明确提出需要一个带有详细注释的完整 `config.json` 示例。这不仅是单纯的功能请求，更是目前阻碍项目增长的最大瓶颈。鉴于近期大量配置相关的 Bug 涌现，优化配置解析架构和文档应被纳入下一版本的高优路线图。

## 7. 用户反馈摘要
从近期密集的 Issue 提交中，可以提炼出当前真实用户的几个核心画像与痛点：
* **痛点 1：配置如“开盲盒”**。由于缺乏标准文档和完整示例，用户只能靠看源码或猜来编写 `config.json`。即便写对了格式，底层解析也可能报错（如 #869, #864）。
* **痛点 2：移动端/嵌入式开发者受阻**。有不少用户尝试在 Termux 环境下部署 NullClaw，但 Zig 编译链在 Android 环境下水土不服，权限管理存在冲突（如 #868, #339）。
* **痛点 3：沙箱权限过度收紧**。用户尝试执行基础网络请求或使用自定义工具时，频繁遭遇白名单无效、命令被拦截的问题（如 #427, #866）。
* **满意点**：社区对项目的设计理念（AI 智能体、子代理、多信道接入）展现出了浓厚兴趣，尤其是尝试接入 OpenAI 兼容接口的用户逐渐增多。

## 8. 待处理积压
以下高危/高频问题目前处于 OPEN 状态且无 PR 跟进，建议维护者紧急关注：
* **[#864] Matrix 渠道串台问题**：多信道基础逻辑缺陷，影响多平台重度用户。
* **[#869] Telegram 渠道无法识别**：影响主流即时通讯平台接入。
* **[#866] curl allowlist 失效**：限制了智能体与外部 API 的基础交互能力。
* **[#339] Android/Termux 编译报错**：已积压近 2 个月，随着移动端部署需求上升，亟需解决。

---
*数据来源: github.com/nullclaw/nullclaw | 分析时间: 2026-04-24*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 📊 IronClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
IronClaw 项目今日保持了**极高的开发与测试活跃度**。过去24小时内，共有 36 条 Issue 更新（29 条新开/活跃）和 50 条 PR 更新，显示出项目正处于紧张的 V2 引擎重构与密集的 QA 测试阶段（Bug Bash）。

虽然今日无新版本发布，且合并的 PR（7个）远少于待合并的 PR（43个），表明项目正处于**功能大范围重构的“蓄水期”**。项目当前的重点核心明确聚焦于 Engine V2 架构演进、CI/CD 合并队列改造（Phase 1），以及通过大量 QA 测试暴露第三方集成（如 Telegram、Google、Linear）中的边缘缺陷。

## 2. 版本发布
**今日无新版本发布。**
项目当前正在为下一阶段的大版本发布积累核心功能，尤其是 Engine-v2 和多租户控制平面等底层架构尚未完全合入主干。

---

## 3. 项目进展
今日共有 7 个 PR 被合并/关闭，主要集中在 Engine V2 架构的增量完善和测试覆盖上，项目整体架构正稳步向 V2 演进：

*   **Engine-v2 架构基石合并**：
    *   PR [#2876](https://github.com/nearai/ironclaw/pull/2876)：添加了 Engine v2 action discovery metadata，规范了工具发现机制。
    *   PR [#2889](https://github.com/nearai/ironclaw/pull/2889)：完成了 deferred action inventory 清理，优化了大工具的基线处理。
    *   PR [#2869](https://github.com/nearai/ironclaw/pull/2869)：修复了 resume/checkpoint 路径中的 prompt 元数据刷新问题。
*   **架构重构先行准备**：
    *   PR [#2904](https://github.com/nearai/ironclaw/pull/2904) (待合并)：提出了一项重大重构，将 11 个 WASM API 代理工具替换为基于 Skill 的 HTTP 声明式配置。这极大简化了工具接入的复杂度。
*   **V2 工具集整合**：
    *   PR [#2873](https://github.com/nearai/ironclaw/pull/2873) (已关闭)：原定的大型 Mission 工具族 PR 被拆分关闭，其功能被重新规划至更底层的 PR [#2925](https://github.com/nearai/ironclaw/pull/2925) 中，说明核心团队对代码职责划分有更严格的把控。

---

## 4. 社区热点
今日讨论最热烈的问题集中在**状态同步**、**并发能力**及**第三方工具接入体验**：

*   **前端状态漂移问题 Epic**：[Issue #2792](https://github.com/nearai/ironclaw/issues/2792) (5 条评论)
    *   **分析**：核心维护者提出了“前端必须是后端的纯函数”的架构愿景，旨在彻底消除 UI/后端数据状态不一致的结构性问题。这反映了项目在 Web 端向高可靠性迈进的决心。
*   **多聊并发阻塞**：[Issue #2231](https://github.com/nearai/ironclaw/issues/2231) (5 条评论)
    *   **分析**：QA 发现多个聊天并发时响应会在队列中阻塞，这对于一个旨在成为强大个人助手的平台来说是关键体验瓶颈。
*   **Stdio MCP 接入认证错误**：[Issue #2474](https://github.com/nearai/ironclaw/issues/2474) (3 条评论) & 继任者 [Issue #2923](https://github.com/nearai/ironclaw/issues/2923)
    *   **分析**：开发者抱怨在激活本地 stdio 传输的 MCP 服务器时，系统错误地触发了 OAuth 流程。虽然之前被误关，但社区重新提审，说明本地工具接入的顺畅度是目前开发者极度关心的痛点。

---

## 5. Bug 与稳定性
今日报告了大量 Bug（主要来自 P1/P2 级别的 Bug Bash 活动），稳定性风险主要集中在**外部集成渠道**和**新用户引导链路**。

**🔴 严重 (P1 - 阻断核心流程 / 回归)**
*   [Issue #2884](https://github.com/nearai/ironclaw/issues/2884)：侧边栏重构导致新用户完全无法使用聊天功能（无可用线程）。
*   [Issue #2905](https://github.com/nearai/ironclaw/issues/2905)：Agent 将文件保存到非授权目录 `/home/agent`，导致 Hosted 用户无法访问生成的文件。
*   [Issue #2883](https://github.com/nearai/ironclaw/issues/2883)：WASM 工具调度因最近的权限策略中心化重构而中断（已确认问题并着手处理）。
*   [Issue #2886](https://github.com/nearai/ironclaw/issues/2886)：LLM_BASE_URL 包含空格等非法字符导致 URI 构建失败，造成 OpenAI 兼容节点全面崩溃。

**🟠 中等 (P2 - 集成与体验缺陷)**
*   **Telegram 渠道问题频发**：长文本静默失败 [Issue #2903](https://github.com/nearai/ironclaw/issues/2903)，通知延迟且带原始格式 [Issue #2908](https://github.com/nearai/ironclaw/issues/2908)，CSV作为文本发送 [Issue #2909](https://github.com/nearai/ironclaw/issues/2909)。
*   **第三方集成 OAuth 状态混乱**：如 Google Sheets 反复要求重新认证 [Issue #2912](https://github.com/nearai/ironclaw/issues/2912)，Linear 集成显示既成功又失败 [Issue #2910](https://github.com/nearai/ironclaw/issues/2910)。
*   **Missions (任务) 系统缺陷**：重复创建任务 [Issue #2907](https://github.com/nearai/ironclaw/issues/2907)，预算耗尽阻断人工触发 [Issue #2915](https://github.com/nearai/ironclaw/issues/2915)。

---

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以清晰看出 IronClaw 的演进路线图：

1.  **下一代部署基础设施与 Webhook 机制**
    *   用户与贡献者正在推进部署抽象层的建立（[PR #2925](https://github.com/nearai/ironclaw/pull/2925) 引入了 `AGENTS_SEED_PATH` 等规范）。
    *   全新的 Webhook 通用接入层已提审（[PR #2921](https://github.com/nearai/ironclaw/pull/2921)），首个支持 Linear 集成，预示着未来系统将具备强大的实时事件驱动能力。
2.  **数据持久化与升级安全**
    *   [Issue #2920](https://github.com/nearai/ironclaw/issues/2920) 提出了对 Docker 环境下 SQLite 数据库一键备份和升级安全的强烈需求，这可能是后续完善自托管体验的重点。
3.  **原生的合并队列 (Merge Queue)**
    *   [Issue #2719](https://github.com/nearai/ironclaw/issues/2719) 与 [PR #2877](https://github.com/nearai/ironclaw/pull/2877) 正试图消灭目前笨重的 staging bot 批量提交模式，转向 GitHub 原生合并队列，这将极大提升主干代码的集成速度。

---

## 7. 用户反馈摘要
从 Issue 描述中提炼出真实用户的痛点如下：
*   **本地开发体验受挫**：用户抱怨 `rustc` 版本要求（1.91）与 README 不符（[Issue #2898](https://github.com/nearai/ironclaw/issues/2898)）；MCP 本地 Stdio 接入被错误的 OAuth 拦截（[Issue #2923](https://github.com/nearai/ironclaw/issues/2923)），说明本地 Hackers 的体验还有待打磨。
*   **UI 调试体验不佳**：日志面板的列宽过窄且原生搜索（Cmd+F）会导致折叠（[Issue #2917](https://github.com/nearai/ironclaw/issues/2917), [Issue #2918](https://github.com/nearai/ironclaw/issues/2918)），开发者希望有更顺滑的日志排查体验。
*   **Webhook 与环境变量耦合过紧**：高级用户指出 `HTTP_HOST` 变量同时控制了 Webhook 监听和通道开启，导致自定义部署时难以解耦配置（[Issue #2900](https://github.com/nearai/ironclaw/issues/2900)）。

---

## 8. 待处理积压
以下关键大型 PR 已经打开数日且尚未合并，可能造成较大的合并冲突风险，需要社区重点关注：

1.  **[PR #2868](https://github.com/nearai/ironclaw/pull/2868)**：Engine-v2 中针对 `available_actions` 的策略清理。这是一个核心架构改动，目前依赖多个已合并的子 PR，需尽快推进。
2.  **[PR #2700](https://github.com/nearai/ironclaw/pull/2700)**：修复网关侧边栏显示 UUID 哈希而不是对话标题的问题。这是一个严重的前端体验 Bug，但因其涉及持久层和网关重构，已停滞数日。
3.  **[PR #2699](https://github.com/nearai/ironclaw/pull/2699)**：修复 MCP 服务器名称规范化和 UTF-8 截断问题。此 PR 同样因为等待网关重构而处于待合并状态。
4.  **[PR #2841](https://github.com/nearai/ironclaw/pull/2841)**：多租户通道实例控制平面（Phase 1）。这是一个涉及数据库迁移的巨型 PR，需要密集的代码审查。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是 **LobsterAI (netease-youdao/LobsterAI)** 项目 2026-04-24 的动态日报。

---

### 1. 今日速览
LobsterAI 今日维持了极高的开发热度与迭代节奏，过去 24 小时内共处理了 **13 个 PR（全部顺利关闭/合并）**，同时有 **6 个 Issue 保持活跃更新**。虽然没有发布全新的独立 Release 版本，但核心贡献者集中整合了 `Release/2026.04.22` 分支代码，涵盖了对 Discord/Telegram 多实例、LM Studio 模型支持的重磅功能更新，以及对 Popo 插件和企业微信能力的升级。整体来看，项目在跨平台 IM 通道接入、UI 响应式布局和底座稳定性方面取得了实质性进展。

### 2. 版本发布
**无独立新版本发布**。
但需注意，维护者已于今日关闭并整合了 `Release/2026.04.22` 集成 PR ([#1805](https://github.com/netease-youdao/LobsterAI/pull/1805))。该预发布版本包含了多项重要功能（见下文），预计近期将正式推送更新。

### 3. 项目进展
今日项目取得了突破性进展，主要集中在功能扩展、UI 优化与底层稳定性修复三个方面：

*   **重要特性合并**：
    *   **集成发布分支**：[#1805](https://github.com/netease-youdao/LobsterAI/pull/1805) 合并了 2026.04.22 的全量特性，包括 Discord/Telegram 多机器人支持、新增 LM Studio 本地推理提供商、Windows 日志诊断增强等。
    *   **IM 插件升级**：[#1806](https://github.com/netease-youdao/LobsterAI/pull/1806) 升级了 Popo 插件，修复了 Token 过期问题。
    *   **OpenAI API 增强**：早期提交的 [#61](https://github.com/netease-youdao/LobsterAI/pull/61) 今日关闭，支持了 OpenAI API 类型（Responses/Chat Completions）的选择。
*   **UI 与用户体验优化**：
    *   [#1799](https://github.com/netease-youdao/LobsterAI/pull/1799) 大幅优化了 UI 响应式布局，将内容区最大宽度扩展至 1024px，并取消了工具调用的显示宽度限制。
    *   [#1807](https://github.com/netease-youdao/LobsterAI/pull/1807) 修复了从会话返回主页时草稿内容和附件被意外清空的问题。
    *   [#1809](https://github.com/netease-youdao/LobsterAI/pull/1809) 和 [#1808](https://github.com/netease-youdao/LobsterAI/pull/1808) 调整了国际化文案及输入框宽度限制。
*   **底层修复与性能调优**：
    *   [#1798](https://github.com/netease-youdao/LobsterAI/pull/1798) 优化了网关重启策略，避免了窗口聚焦/失焦时引发的无谓重启。
    *   [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) 将 `chat.send` 的 RPC 超时时间从 30s 增加至 90s，修复了网关初始化时易发的超时错误。
    *   [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) 修复了由于中断 MCP 工具执行导致的陈旧回复循环和 abort 信号误触发的严重 Bug。

### 4. 社区热点
今日社区活跃度平稳，聚焦于日常使用中的通道配置与功能诉求：
*   **对话管理诉求**：[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) 是今日唯二的新建 Issue 之一，用户建议增加**批量删除无效对话的功能**，获得了 1 个赞，反映出随着使用深度增加，用户对上下文管理工具的需求正在上升。
*   **飞书通道适配痛点**：[#14](https://github.com/netease-youdao/LobsterAI/issues/14) 持续引发关注（今日更新），用户指出飞书通道不仅 `renderMode` 被硬编码无法自动渲染 Markdown，而且模型输出的 `<thinking>` 标签未能被正确过滤。这表明企业级 IM 消息的清洗与渲染机制还需打磨。

### 5. Bug 与稳定性
今日暴露的底层 Bug 主要由内部测试和贡献者捕获，且均已提供修复方案（PR）：

1.  **[P0/严重] MCP 工具中断导致回复死循环**：用户停止会话时引发历史脏数据被错误发送。**已通过 [#1801](https://github.com/netease-youdao/LobsterAI/pull/1801) 修复。**
2.  **[P1/较高] RPC 超时导致消息发送失败**：网关内部就绪状态与实际响应时间存在延迟，导致 30s 超时。**已通过 [#1803](https://github.com/netease-youdao/LobsterAI/pull/1803) 修复。**
3.  **[P1/较高] Sharp 原生绑定丢失**：之前版本误将 `@img/sharp-win32-x64` 剔除导致依赖缺失。**已通过 [#1804](https://github.com/netease-youdao/LobsterAI/pull/1804) 修复。**
4.  **[P2/中等] Electron 40 启动失败**：[#15](https://github.com/netease-youdao/LobsterAI/issues/15) 报告的 `TypeError: Cannot set properties of undefined`，与 Node.js v24.11.1 兼容性有关，目前状态为 Stale，尚无明确修复 PR。

### 6. 功能请求与路线图信号
通过今日的 Issue 与 PR 动态，可以梳理出项目接下来的演进方向：
*   **本地推理支持**：LM Studio 提供商的接入 ([#1805](https://github.com/netease-youdao/LobsterAI/pull/1805)) 表明项目正在积极拥抱本地化、私有化部署的 AI 模型需求。
*   **多模态/多实例 IM 接入**：Discord/Telegram 多实例支持表明产品正在向“全平台多账号聚合网关”方向演进。
*   **用户高潜需求（待纳入）**：[批量会话删除]([#1797](https://github.com/netease-youdao/LobsterAI/issues/1797))、[Codex 登录支持]([#29](https://github.com/netease-youdao/LobsterAI/issues/29)) 已有用户提出，有望成为后续版本的备选功能。

### 7. 用户反馈摘要
从 Issue 列表的细节中可以提取出典型用户的声音：
*   **版本发布感知差**：[#26](https://github.com/netease-youdao/LobsterAI/issues/26) 反映，即使重新拉取代码，编译后仍停留在旧版。用户抱怨有道主页上缺乏清晰的版本说明（Changelog）。**建议：维护者需规范 GitHub Release 页面的发布习惯及文档站同步。**
*   **企业微信/飞书使用者增多**：多位用户反馈飞书渲染、安装耗时等问题，说明 LobsterAI 在国内企业协同办公场景（飞书、企微、Popo）中拥有较高粘性，但也对消息排错、日志诊断提出了更高要求（如 [#1800](https://github.com/netease-youdao/LobsterAI/pull/1800) 增加了 Windows 安装耗时日志）。

### 8. 待处理积压
系统自动打上 `[stale]` 标签的长期未响应 Issue 正在积累，建议维护团队分批清理或回复：
1.  **[#15](https://github.com/netease-youdao/LobsterAI/issues/15)** (Electron 40 启动报错)：属于阻断性 Bug，虽然有 Stale 标记但仍有用户在关注，建议跟进 Electron/Node 版本兼容情况。
2.  **[#29](https://github.com/netease-youdao/LobsterAI/issues/29) (希望增加 Codex 登录)**：功能请求，建议明确告知用户是否已排入 Roadmap。
3.  **[#35](https://github.com/netease-youdao/LobsterAI/issues/35) (Discord 连接诊断)**：随着今日 Discord 多机器人版本的合并，该问题可能已经自行解决或需要重新复测，建议维护者确认。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这份 2026-04-24 的 Moltis 项目动态日报基于最新的 GitHub 数据生成，旨在为维护者、贡献者及关注者提供客观、数据驱动的项目健康度分析。

---

# 📊 Moltis 项目动态日报 (2026-04-24)

## 1. 今日速览
Moltis 在过去 24 小时内保持了**非常高的活跃度与健康的项目推进节奏**。今日共有 13 个 PR 更新（其中 7 个顺利合并/关闭）和 8 个 Issue 更新（5 个被成功解决）。核心开发者 `penso` 表现极其抢眼，一口气合并了多项关键修复与底层架构优化，大幅提升了项目在不同硬件（如树莓派）和不同 LLM 提供商下的兼容性。UI 层面也在稳步完善，社区对新功能（如 Signal 频道、MCP OAuth）的反馈得到了快速响应。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 **7 个 PR 被合并或关闭**，项目在跨平台兼容性、LLM 底层调度和多渠道接入方面取得了实质性突破：
*   **跨平台沙箱修复**：[#853](https://github.com/moltis-org/moltis/pull/853) 彻底重构了 sysfs 挂载逻辑，解决了在 ARM/Raspberry Pi 和 WSL2 环境下 Docker 沙箱的启动崩溃问题。
*   **LLM 提供商兼容性提升**：[#856](https://github.com/moltis-org/moltis/pull/856) 修复了 Schema 联合类型折叠时的浅合并问题，解决了 Gemini 和 Fireworks AI 的 API 400 报错；[#855](https://github.com/moltis-org/moltis/pull/855) 将 datetime 注入从 System 消息移至 User 消息，显著改善了本地 LLM (Ollama/llama.cpp) 的 KV cache 稳定性。
*   **渠道与集成拓展**：[#841](https://github.com/moltis-org/moltis/pull/841) 正式合并了基于 `signal-cli` 的 Signal 渠道接入支持。
*   **TTS 与 MCP 修复**：[#854](https://github.com/moltis-org/moltis/pull/854) 增加了 ElevenLabs 自定义语音的测试覆盖；[#852](https://github.com/moltis-org/moltis/pull/852) 在 UI 端补全了 MCP OAuth 重新认证的按钮。
*   **大型重构关闭**：[#797](https://github.com/moltis-org/moltis/pull/797)（内置 101 个默认技能）被关闭，可能等待后续重构或拆分。

## 4. 社区热点
*   **[长期规划讨论] [#176](https://github.com/moltis-org/moltis/issues/176) `[Feature]: Add datetime to system prompt context`**
    *   **动态**：该 Feature 于今日正式关闭，累计获得 16 条评论。
    *   **诉求分析**：此需求源于社区对本地 LLM 推理时 KV Cache 复用率低下的痛点。经过长达两个月的讨论，最终通过 PR [#855](https://github.com/moltis-org/moltis/pull/855) 采用将时间戳注入 User Content 的更优解落地，体现了团队对底层性能优化的严谨态度。

## 5. Bug 与稳定性
今日新增若干 Bug 报告，部分已在当天提供 Fix 并合并，响应速度极佳：
*   **P0 - 沙箱启动失败 (WSL2/ARM)**：[#828](https://github.com/moltis-org/moltis/issues/828) WSL2 环境下因缺少 `/sys/class/dmi` 导致沙箱报错。**状态：已由 PR [#853](https://github.com/moltis-org/moltis/pull/853) 修复。**
*   **P1 - 模型解析报错回归**：[#849](https://github.com/moltis-org/moltis/issues/849) 参数定义缺失问题复发；[#848](https://github.com/moltis-org/moltis/issues/848) Fireworks Fire Pass 枚举解析失败。**状态：均已被 PR [#856](https://github.com/moltis-org/moltis/pull/856) 修复。**
*   **P2 - OAuth 认证阻断**：[#851](https://github.com/moltis-org/moltis/issues/851) MCP OAuth 过期后 UI 无重新授权入口。**状态：已被 PR [#852](https://github.com/moltis-org/moltis/pull/852) 修复。**
*   **P2 - 文件命名缺陷**：[#857](https://github.com/moltis-org/moltis/issues/857) Silent memory 保存时生成错误的日期文件名。**状态：待修复。**
*   **P2 - TTS 接口阻断**：[#735](https://github.com/moltis-org/moltis/issues/735) ElevenLabs 自定义语音失效。**状态：已通过 PR [#854](https://github.com/moltis-org/moltis/pull/854) 完善测试及修复。**

## 6. 功能请求与路线图信号
从现有的 Issue 和待合并 PR 来看，项目的下一阶段重心将集中在**多智能体协同**与**开发体验增强**：
*   **多智能体协同（极高优先级）**：[#844](https://github.com/moltis-org/moltis/pull/844) 引入了内置的子智能体预设（如 researcher, coder, qa 等）及 Session-scoped Modes，这标志着 Moltis 正式向 Multi-Agent 编排平台迈出重要一步。
*   **MCP 工程化治理**：[#850](https://github.com/moltis-org/moltis/issues/850) 请求支持 MCP 的 `client_secret` 配置，结合待合并的 [#840](https://github.com/moltis-org/moltis/pull/840)（MCP 服务器管理技能），说明社区正在将 MCP 从“可用”推向“企业级易用”。
*   **UI 易用性补全**：[#846](https://github.com/moltis-org/moltis/pull/846) 增加了聊天框的智能滚动（防打扰阅读），[#837](https://github.com/moltis-org/moltis/pull/837) 增加了项目代码索引的开关。这些小功能将大幅提升日常使用的流畅度。

## 7. 用户反馈摘要
根据近期的 Issue 提交，可以提炼出以下真实用户画像与痛点：
1.  **本地模型玩家 / 极客用户**：大量使用 Ollama / LM Studio 等本地环境，对网络请求延迟不敏感，但对 KV Cache 命中率和系统提示词污染极其敏感。
2.  **异构硬件部署者**：在 WSL2 或 Raspberry Pi 上部署 Docker 的用户不在少数。沙箱对于底层只读文件系统 / 虚拟化缺失硬件信息的容错能力直接决定了他们的留存。
3.  **重度集成开发者**：将 Moltis 作为核心中枢连接外部 API（Fireworks、ElevenLabs、Signal），对 Tool Schema 的标准兼容性要求极高，任何字段解析遗漏都会直接导致业务流中断。

## 8. 待处理积压
*   **核心组件“僵尸代码”清理 ([#847](https://github.com/moltis-org/moltis/pull/847))**：`Cstewart-HC` 提交的 PR 揭露了 `project-combo.ts` 虽被构建但从未挂载到 DOM 的问题，该 PR 仍未合并，建议维护者尽快 Review 以清理无用的死代码。
*   **依赖库版本滞后 ([#845](https://github.com/moltis-org/moltis/pull/845))**：Dependabot 提示需要更新 `openssl` 和 `rand` 核心依赖，考虑到涉及底层加密和随机数生成，建议在 CI 跑通后尽快合入以避免潜在安全风险。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报 (2026-04-24)**

**1. 今日速览**
今日 CoPaw 项目保持着极高的社区活跃度与健康的迭代节奏。过去 24 小时内，项目处理了 50 个 Issues（完美实现新增与关闭 1:1 平衡）和 50 个 PRs（合并/关闭 34 个，通过率极高），并同步推出了 2 个新版本。从社区动态来看，当前项目正处于向 **v1.1.4 正式版** 过渡的阶段：一方面在紧急修复 v1.1.3 遗留的打包与安全防护兼容性问题，另一方面在控制台交互、多渠道集成以及本地模型适配等维度积极吸纳社区贡献。

**2. 版本发布**
*   **v1.1.3.post1** (补丁发布)
    *   **更新内容**：修复了文件下载机制（采用原生保存对话框），并回退了某些引发 Defender 报毒的策略以规避安全软件误报。
    *   **迁移注意**：如果您在 v1.1.3 中遇到了杀毒软件拦截或 pywebview 下载卡顿，建议立即平滑升级至此版本。
    *   **详情链接**：[v1.1.3.post1](https://github.com/agentscope-ai/QwenPaw/pull/3717)
*   **v1.1.4-beta.1** (测试版)
    *   **更新内容**：主要为版本号升级、控制台代码格式化更新（引入 `.prettierignore`）及文档国际化图表修复。标志着 v1.1.4 开发周期的冻结与内测开始。
    *   **详情链接**：[v1.1.4-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/3674)

**3. 项目进展**
今日共有 34 个 PR 被合并或关闭，项目在系统健壮性和多渠道接入方面取得了实质性进展：
*   **打包与部署修复**：[PR #3730](https://github.com/agentscope-ai/QwenPaw/pull/3730) 修复了 conda-unpack 导致 Discord 模块正则表达式损坏的严重打包 bug（Windows 环境）；[PR #1427](https://github.com/agentscope-ai/QwenPaw/pull/1427) 修复了 Ollama/LMStudio 因默认响应长度过小导致 Agent 任务中断的问题。
*   **控制台与 API 重构**：[PR #3738](https://github.com/agentscope-ai/QwenPaw/pull/3738) 重构了 agent 的 API 路由，将其统一迁移至 workspace 体系下，为后续多工作台功能奠定基础。
*   **安全性增强**：[PR #3739](https://github.com/agentscope-ai/QwenPaw/pull/3739) 引入了 `allow_no_auth_hosts` 白名单配置，替代了原先硬编码的 Localhost 免密逻辑，大幅提升了 API 鉴权的灵活性。

**4. 社区热点**
*   **“Contributor 招募令”热度不减**：核心维护者发布的 Help Wanted Issue ([#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)) 今日新增大量讨论，总评论数高达 60 条。表明大量外部开发者正涌入项目认领 P0-P2 任务。
*   **安全防护规则的“误伤”争议**：Issue [#3709](https://github.com/agentscope-ai/QwenPaw/issues/3709) 引发了 7 条热议。用户在 Cron 任务中使用包含 `$(date)` 的 shell 命令被安全规则 `TOOL_CMD_IFS_INJECTION` 拦截，即使手动禁用该规则依然被拦截。这暴露出当前安全防御体系在规则热更新及白名单机制上存在缺陷。
*   **多模态模型兼容性困惑**：Issue [#3756](https://github.com/agentscope-ai/QwenPaw/issues/3756) 反映在使用 mimo-v2.5 等第三方多模态模型时无法调用视觉能力，引发用户对模型 Provider 适配深度的探讨。

**5. Bug 与稳定性**
*   🔴 **[P0] MCP Client 导致系统假死**：[Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) 报告了启用 MCP 时，内部 TaskGroup 异常导致 Agent 停止响应（钉钉/微信断连），且不抛出错误。目前正在排查中。
*   🔴 **[P0] Windows 桌面端 Taskbar 图标错误**：[Issue #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729) 反映桌面版在 Windows 任务栏显示为默认 Python 图标。已提交 Fix PR (使用 Win32 API 强制重载)。
*   🟡 **[P1] Cron 任务升级进程冲突**：[Issue #3748](https://github.com/agentscope-ai/QwenPaw/issues/3748) 反映执行 `qwenpaw update` 时无法正常 shutdown 旧进程，导致升级阻塞。
*   🟡 **[P1] WeixinChannel 路由 KeyError**：[Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) 导致微信渠道定时任务完全失效。已由社区提交修复 PR ([PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605))，核心原因为 channel 标识符不一致 (`wechat` vs `weixin`)。
*   🟢 **[P2] 深色模式 UI 错位**：[Issue #3546](https://github.com/agentscope-ai/QwenPaw/issues/3546) 反映前端控制台侧边栏文字重叠。

**6. 功能请求与路线图信号**
根据今日 Issue 及 PR 动向，推测以下功能极有可能纳入 v1.1.4 正式版：
*   **多模态消息支持落地**：社区贡献者提交了 [PR #3509](https://github.com/agentscope-ai/QwenPaw/pull/3509)，实现了基于 API 的图片/文件多模态消息自动识别与发送机制。
*   **本地模型生态扩充**：[PR #3759](https://github.com/agentscope-ai/QwenPaw/pull/3759) 引入了 **Unsloth Studio** Provider 的内置支持，紧跟本地化微调部署趋势。
*   **渠道长文本分段推送**：[Issue #3742](https://github.com/agentscope-ai/QwenPaw/issues/3742) 提出钉钉通道超过 3500 字符后 Markdown 渲染失败，要求支持智能分段推送。
*   **桌面端体验优化**：[Issue #3752](https://github.com/agentscope-ai/QwenPaw/issues/3752) 提议在 Web 和桌面端增加右键上下文菜单（复制、删除会话等），属于高优的用户体验提升需求。

**7. 用户反馈摘要**
*   **痛点：安全机制过于严苛**：高级用户在使用 Cron 结合 Bash 脚本进行自动化操作时，频繁被内置的安全拦截器阻断，且难以绕过。
*   **痛点：第三方模型接入标准不透明**：用户接入兼容 OpenAI 接口的第三方模型（如 MiniMax, TokenPlan）时，经常遇到 `ValidationError` 或参数解析错误，说明 Provider 层的容错与校验仍需加强。
*   **满意度：渠道生态丰富**：从 Docker 打包、DingTalk 冲突修复、微信通道修复等密集的 PR 可以看出，用户对 CoPaw 的多平台消息触达能力高度依赖并认可。

**8. 待处理积压**
*   **[Bug] 记忆模块强耦合 SQLite**：[Issue #3047](https://github.com/agentscope-ai/QwenPaw/issues/3047) 指出 `memory_search` 在没有 SQLite 的环境下直接报错，未能良好适配 Postgres 等其他存储后端。此 Bug 停滞时间较长，需后端团队关注。
*   **[Feature] Apple Silicon 原生支持**：[Issue #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) 提出在 M 系列芯片 Mac 上 `browser_use` 工具依然默认下载 x86 架构的 Chromium，严重影响执行效率，目前尚无官方排期回应。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是为您生成的 **ZeptoClaw** 项目 2026-04-24 动态日报。

---

# 📊 ZeptoClaw 项目动态日报 (2026-04-24)

## 1. 今日速览
ZeptoClaw 在过去 24 小时内展现了极高的开发活跃度与出色的项目自愈能力。项目今日处理了 16 个 Pull Requests（其中 13 个顺利合入/关闭）和 15 个 Issues（8 个完成关闭），**项目吞吐量处于非常健康的水平**。
核心贡献者 `qhkm` 与 `manelsen` 集中精力攻克了安全审计、供应链完整性、CI 质量门禁及端侧 AI 提供商适配等关键领域。这一系列动作表明项目正在系统性地强化其“边缘计算与 IoT 优先”的核心护城河，并为下一步的多通道（飞书/Line/MQTT）与离线运行做好了架构准备。

## 2. 版本发布
过去 24 小时内**无新版本发布**。大量基础设施改进和安全功能的合入，似乎是在为下一个重要里程碑版本做代码储备。

## 3. 项目进展
今日共有 13 个 PR 顺利合并/关闭，显著推进了项目的安全防护底座与 CI 严密性：
*   **安全与审计底座夯实**：
    *   [PR #528](https://github.com/qhkm/zeptoclaw/pull/528)：合入内存级 SHA-256 哈希链审计追踪，使工具执行具备防篡改能力，支撑 Issue #221。
    *   [PR #527](https://github.com/qhkm/zeptoclaw/pull/527)：在配置和引导阶段加入了 SSRF 端点校验，封堵了用户自定义 `api_base` 带来的安全隐患，支撑 Issue #450。
    *   [PR #526](https://github.com/qhkm/zeptoclaw/pull/526)：为 Skill（技能）下载引入 SHA256 摘要校验，防止供应链投毒，支撑 Issue #449。
*   **CI/CD 与质量保障**：
    *   [PR #544](https://github.com/qhkm/zeptoclaw/pull/544)：大幅扩展了 CI 中的可选集成特性编译矩阵，避免了合并后的隐性漂移崩溃。
*   **架构评估与测试**：
    *   [PR #525](https://github.com/qhkm/zeptoclaw/pull/525)：完成并合入了 `utility/lib` 架构评估文档，最终决定保持当前架构不引入外部 lib 库，保持轻量。
    *   [PR #524](https://github.com/qhkm/zeptoclaw/pull/524)：增加了标准化的编码基准测试夹具，为后续对比不同 AI agent 的编码能力提供了公平环境。

## 4. 社区热点
今日最活跃、影响力最大的讨论集中在**战略级功能规划**上：
*   **[Issue #541](https://github.com/qhkm/zeptoclaw/issues/541) (👍 0, 评论 2)**：关于集成 Liquid AI (LFM) 边缘原生模型的讨论。LFM 模型针对边缘设备具有非 Transformer 架构的低内存优势，这高度契合 ZeptoClaw 的物联网战略。目前已有对应的开放 PR [PR #543](https://github.com/qhkm/zeptoclaw/pull/543) 提供支持，是当前最受技术侧关注的特性。
*   **[Issue #536](https://github.com/qhkm/zeptoclaw/issues/536) (已关闭)**：为东南亚 (SEA) 市场引入飞书/Lark 和 Line 渠道的提案。这标志着 ZeptoClaw 正式将商业化触角延伸至亚洲本土的 SMB 及跨国企业群体。

## 5. Bug 与稳定性
今日暴露并修复了数个关键的稳定性与配置解析问题：
*   **严重 (P1) / CI 阻塞**：[Issue #534](https://github.com/qhkm/zeptoclaw/issues/534) 报告了由于新的 Clippy lints 和 `rustls-webpki` 安全漏洞导致的 CI 崩溃。（目前 Issue 已关闭，CI 修复已在近期代码中完成）。
*   **关键配置丢失**：[Issue #522](https://github.com/qhkm/zeptoclaw/issues/522) 报告了 Telegram 网关无法从 `config.json` 中正确加载配置的严重问题。该问题已通过 [PR #523](https://github.com/qhkm/zeptoclaw/pull/523) 修复（增加向后兼容及隐式启用逻辑），并顺利合入主分支。

## 6. 功能请求与路线图信号
结合今日的 Issue 提案，可以清晰看出项目下一阶段的 Roadmap 重点聚焦于 **“极限环境运行”** 与 **“二进制体积极致控制”**：
*   **核心战略级提案**：
    *   [Issue #537](https://github.com/qhkm/zeptoclaw/issues/537) `[P1-critical]`：要求在 CI 中增加二进制体积预算门禁，若 `zeptoclaw > 7MB` 则直接打回 PR。这捍卫了项目“6MB 即可跑在机器人上”的核心哲学。
    *   [Issue #539](https://github.com/qhkm/zeptoclaw/issues/539)：请求引入离线模式，支持在断网环境下自动回退到本地模型（Ollama/llama.cpp）。
    *   [Issue #540](https://github.com/qhkm/zeptoclaw/issues/540)：要求撰写树莓派 4 的实战部署演示文档（ZeptoClaw + R8r 驱动真实硬件）。
    *   [Issue #538](https://github.com/qhkm/zeptoclaw/issues/538)：将 MQTT 提升为一等公民通道，全面打通 Home Assistant, AWS IoT 等工业/智能家居标准链路。
    *   [Issue #535](https://github.com/qhkm/zeptoclaw/issues/535)：社区 Hub 技能安装时的安全扫描器。

## 7. 用户反馈摘要
从 Bug 报告（如 Telegram 配置失效 Issue #522）中反映出：**用户正尝试在复杂的网关模式下部署 ZeptoClaw，且高度依赖配置文件的向后兼容性**。配置字段的轻微变动会导致用户的部署脚本直接瘫痪。PR #523 的隐式启用修复表明，维护团队对开发者体验（DX）十分重视，采取了“宽容解析”的策略来降低使用门槛。

## 8. 待处理积压
目前仓库的高优先级问题响应非常迅速，积压较少，但仍有以下大型依赖需关注：
*   **[PR #517](https://github.com/qhkm/zeptoclaw/pull/517)**：`sha2` 从 0.10.9 升级至 0.11.0。这是一个 Rust 加密核心库的破坏性更新（主版本号变更），已开放 10 天。由于刚刚合入了一大波依赖安全校验相关代码，建议维护者尽快评估并合并此依赖升级。
*   **[Issue #545](https://github.com/qhkm/zeptoclaw/issues/545)**：常规 PR 中可选集成特性的编译覆盖问题。当前已有 PR #544 处于 Open 状态等待合并，建议维护者跟进 Review 并将其落地，以彻底解决 CI 的“假绿”问题。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-04-24)

**分析时段**: 2026-04-23 19:00 UTC 至 2026-04-24 19:00 UTC
**项目地址**: [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

## 1. 今日速览
今日 EasyClaw 项目整体处于**高频迭代与快速响应**的状态。在过去 24 小时内，项目连续发布了 2 个新版本（v1.8.7 和 v1.8.8），展现出极高的发版频率。社区维护态度积极，针对用户报告的官网下载链接 404 错误，项目组在一天内迅速响应并关闭了相关 Issue。整体来看，项目核心代码库今日无新增 Pull Request，开发重心目前高度聚焦于版本交付、分发渠道维护以及 macOS 平台的适配体验优化。

## 2. 版本发布
今日项目连续推出了两个正式版本，更新重心偏向于安装部署体验的优化与缺陷修复：

*   **[RivonClaw v1.8.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8)**
*   **[RivonClaw v1.8.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.7)**

**更新内容及注意事项**：
*   **核心更新**：根据 Release Notes，这两个版本着重解决了 macOS 平台的安装阻碍问题。由于应用缺少 Apple 官方签名，会被 macOS Gatekeeper 安全机制拦截。
*   **破坏性变更/迁移注意**：无代码层面的破坏性 API 变更。但对于 **macOS 用户**，从这两个版本开始，如果遇到提示 **“'RivonClaw' is damaged and can't be opened”（应用已损坏）**，属于正常的系统拦截，用户需通过打开终端执行相关命令（Release 中已附带完整指引）来手动放行。
*   **Windows 用户**：配合今日的 Issue 修复，Windows 版本的分发渠道可能已在此版本迭代中完成修复。

## 3. 项目进展
今日项目**无新增 Pull Request（待合并/已合并均为 0 条）**。这表明当前的更新可能是由主分支直接推送发版，或者核心代码库在今日处于数据同步与主干维护的静默期。项目整体在功能开发层面今日无明显向前推进，主要精力转化为发布产物的交付保障。

## 4. 社区热点
今日社区唯一的热点反馈集中在官方分发渠道的可用性上：

*   **[Issue #34 官网下载链接失效](https://github.com/gaoyangz77/rivonclaw/issues/34)**
    *   **状态**: 已于今日创建并迅速关闭 (CLOSED)
    *   **详情**: 用户 @slowayear 反映 `easy-claw.com` 官网的 Windows 版本下载按钮出现 404 错误。
    *   **分析**: 这是一个典型的“外部基建故障”传导至 GitHub Issue 区的案例。该问题在一天内被报告并关闭，推测维护者已在后台修复了官网的 CDN 链接或重定向逻辑。这反映出项目在官网服务端的监控可能存在盲区，依赖于用户被动反馈，但修复时效性极高。

## 5. Bug 与稳定性
今日共有 1 项 Bug 报告，已得到解决：

| 严重程度 | Bug 描述 | 关联 Issue | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | 官方网站 Windows 客户端下载链接失效，返回 HTTP 404。 | [#34](https://github.com/gaoyangz77/rivonclaw/issues/34) | **已修复/关闭** (官网链接已恢复，且发布新版) |
| **中等** | macOS 环境下未签名应用被 Gatekeeper 拦截，导致用户无法启动。 | 见 [v1.8.8](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.8) 说明 | **已缓解** (文档中已提供 Terminal 绕过方案) |

## 6. 功能请求与路线图信号
今日**未监测到明确的新功能请求**。但从 v1.8.7 和 v1.8.8 的发布说明可以捕捉到以下路线图信号：
*   **跨平台体验优化**：项目正在努力降低非技术用户（尤其是 macOS 用户）的上手门槛，未来可能会考虑加入 Apple 开发者签名，以彻底解决“应用已损坏”的体验痛点。

## 7. 用户反馈摘要
透过今日的 Issue #34，我们可以提炼出以下真实用户反馈：
*   **核心痛点**：**“无法触达”**。用户愿意前往官网下载，但遭遇 404 错误。对于工具类软件，下载链路的断裂是致命的转化杀手。
*   **使用场景**：用户主要在 Windows 和 macOS 环境下寻求独立客户端的安装（RivonClaw）。
*   **满意度**：虽然遇到了下载阻碍，但能够在 GitHub 上精准提 Issue，说明用户具备一定的技术素养，且对开源项目抱有期待。Issue 的迅速闭环有效挽回了对项目可靠性的信心。

## 8. 待处理积压
*   **代码贡献积压**：当前无积压的 Pull Request，项目代码库非常干净。
*   **建议关注点**：尽管 Issue #34 已关闭，但建议维护者排查自动化构建与分发流程（CI/CD），确保未来新版本发布时，官网的下载链接能够自动且正确地更新，避免类似 404 问题再次发生影响增量用户。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-24)

> **数据来源**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | **分析周期**: 过去 24 小时

## 1. 今日速览

ZeroClaw 项目在过去 24 小时内维持了极高的社区活跃度与提交频率，共产生 50 个 Issue 更新和 50 个 PR 更新，显示项目正处于 v0.7.4 版本发布前的密集开发与代码合并期。尽管今天没有发布新的版本，但多项围绕可观测性、语音处理（VAD）和底层架构（Schema v3 迁移）的重大 Pull Request 正在积极推进中。社区反馈方面，用户对 Anthropic Claude 4.7 模型兼容性、Docker 容器化部署以及内存/记忆权重的关注度居高不下。整体来看，项目核心架构正在经历重构与增强，但在多渠道接入和 provider 兼容性上暴露出一些亟待修复的阻断级 Bug。

## 2. 版本发布

今日**无**新版本发布。项目当前的重点在于为 **v0.7.4** 里程碑进行功能筹备和缺陷修复（参见 [#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)）。

## 3. 项目进展

尽管今日仅有 7 个 PR 被合并/关闭（待合并 43 个），但多项关键架构和功能增强 PR 已进入核心审查阶段，项目正在向微内核、高可观测性和多模态方向迈进：

*   **可观测性与 Agent 生命周期追踪**: PR [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) 引入了全面的 OTel 追踪和 SSE 广播机制，覆盖 Agent 运行时的工具调用和 LLM 请求。
*   **ACP 协议规范化修复**: PR [#6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035) 和 [#5957](https://github.com/zeroclaw-labs/zeroclaw/pull/5957) 修复了 ACP 服务中工具输出格式错误及结构化 Prompt 解析问题，提升了第三方客户端（如 agentic.nvim）的兼容性。
*   **语音处理能力增强**: PR [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) 和 [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) 实现了基于能量的真实语音活动检测（VAD）及带预滚缓冲的语音捕获机制，为全双工语音交互奠定基础。
*   **基础设施与性能优化**: PR [#5900](https://github.com/zeroclaw-labs/zeroclaw/pull/5900) 将 Session 重置操作的时间复杂度从 O(n²) 降至 O(1)；PR [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) 重构了 Nix 打包流程，解耦了前后端构建，大幅提升开发体验。

## 4. 社区热点

今日社区讨论的焦点主要集中在 **API 接入失败**、**部署体验** 及 **底层架构演进** 上：

*   **[#5719](https://github.com/zeroclaw-labs/zeroclaw/issues/5719) (12 评论)**: 由知名开发者 @perlowja 提出。讨论了在配置为 `runtime.kind = "native"` 时，shell 工具的执行并未按预期绕过 Docker 容器，导致基于 Docker 的工作流阻断。该问题影响了高级技能的本地化运行。
*   **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503) (8 评论)**: 社区强烈呼吁增加对 Napcat/Onebot 协议的渠道支持，以便 ZeroClaw 能够接入国内主流的即时通讯平台。
*   **[#5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) (6 评论)**: v0.7.4 里程碑追踪 Issue，核心开发者在此协调 Skill 迁移和 Schema 升级工作。
*   **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) (6 评论)**: 针对网关 Web Dashboard 缺失及环境变量配置的文档诉求，暴露出新手在 Docker 部署时面临“无从下手”的痛点。

## 5. Bug 与稳定性

今日报告了多个关键级别的 Bug，部分已产生阻断性影响：

*   **[S0 - 安全/数据]** **[#5991](https://github.com/zeroclaw-labs/zeroclaw/issues/5991)**: Cron 任务执行失败导致潜在的数据丢失风险。
*   **[S0 - 安全/数据]** **[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847)**: 网关 Dashboard 配置不明引发的安全风险考量。*(关联修复 PR: [#5365](https://github.com/zeroclaw-labs/zeroclaw/pull/5365) 提议将预编译的 Web Dashboard 纳入 Git 跟踪)*。
*   **[S1 - 阻断级]** **[#6007](https://github.com/zeroclaw-labs/zeroclaw/issues/6007)**: Anthropic provider 强行发送 `temperature` 参数，导致最新的 Claude 4.7 模型请求全面崩溃。（暂无关联 Fix PR，亟待修复）。
*   **[S1 - 阻断级]** **[#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)**: 当需要调用工具时，Ollama Provider 调用直接失败，导致会话锁死。
*   **[S1 - 阻断级]** **[#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)**: 本地容器化部署 querying llama.cpp 时，消息未能正确路由至 Assistant。
*   **[S1 - 阻断级]** **[#5984](https://github.com/zeroclaw-labs/zeroclaw/issues/5984)**: ZeroClaw Desktop 应用在启动时因 "No provider set" 直接闪退。

## 6. 功能请求与路线图信号

结合今日的 Issues 和 PRs，项目下一阶段（v0.7.4 及以后）的路线图信号已非常明确：

*   **多渠道支持爆发期**: 用户对扩充渠道接入的意愿极强。除了上文提到的 Napcat ([#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503))，此前要求支持 Matrix 的呼声 ([#3361](https://github.com/zeroclaw-labs/zeroclaw/issues/3361)) 依然很高。
*   **彻底的重构与清理**: Issue [#5951](https://github.com/zeroclaw-labs/zeroclaw/issues/5951) 和 [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) 表明，团队正着手清理数万行的 onboard 历史债务，并推进 Schema v3 的大规模字段迁移。
*   **多模型 Provider 支持**: Issue [#2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) 提出支持在配置中添加多个模型提供端点。结合今日的 OpenRouter prompt 缓存优化 PR ([#6008](https://github.com/zeroclaw-labs/zeroclaw/pull/6008))，项目在多模型路由和管理上的能力正在强化。
*   **细粒度安全与权限管控**: PR [#6033](https://github.com/zeroclaw-labs/zeroclaw/pull/6033) (Session 身份暴露) 和 Issue [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) (WASM 插件读取环境变量的白名单限制) 表明项目正在构建更严密的沙箱与权限边界。

## 7. 用户反馈摘要

通过对 Issue 描述的分析，提炼出以下真实用户痛点：

1.  **“记忆”喧宾夺主**: 用户反馈 ([#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)) 在执行定时任务（Cron）时，Agent 过度依赖历史 Memory，反而忽略了当前最新的 Prompt 指令，导致输出偏题。
2.  **Docker 部署体验割裂**: 许多用户在拉取官方 Docker 镜像后，发现 Web Dashboard 无法使用 ([#5959](https://github.com/zeroclaw-labs/zeroclaw/issues/5959)，[#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847))，且环境变量配置缺乏明确文档，严重影响了初步体验。
3.  **全链路调试黑盒**: 用户难以追踪 LLM 的完整输入输出，目前只能看到 Token 统计数据，排查复杂问题极为困难 ([#5504](https://github.com/zeroclaw-labs/zeroclaw/issues/5504)，[#6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001))。*(好消息是相关基建正在 PR [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) 中解决)*。

## 8. 待处理积压

以下为近期需要维护者重点关注的高优积压项目：

*   **高危架构缺陷亟待评审**: 
    *   **[#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836)**: 长时间运行的 Tool 无法被取消，需要将 `CancellationToken` 传递到 Tool 执行层。
    *   **[#5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835)**: 会话被删除后，`cancel_tokens` 可能发生内存泄漏。
*   **长尾集成请求停滞**:
    *   **[#4352](https://github.com/zeroclaw-labs/zeroclaw/issues/4352)**: 原生 GitHub Actions 与仓库集成工具的需求（标记为 `help wanted`，已停滞一个月）。
*   **本地模型兼容性修复阻塞中**:
    *   **[#5646](https://github.com/zeroclaw-labs/zeroclaw/issues/5646)**: 使用 Ollama 作为 embedding provider 时，向量未持久化到 `brain.db` 的 Bug 依然处于待处理状态，影响了本地部署用户的记忆功能。

</details>