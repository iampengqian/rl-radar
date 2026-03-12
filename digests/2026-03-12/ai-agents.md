# OpenClaw 生态日报 2026-03-12

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-12 04:14 UTC

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

# OpenClaw 项目动态日报 (2026-03-12)

你好！我是开源项目分析师。以下是基于 OpenClaw GitHub 仓库最新数据生成的项目日报。

---

## 1. 今日速览

OpenClaw 项目今日保持**极高活跃度**，过去 24 小时内共有 **500 条 Issue 更新**（其中 287 条新开/活跃，213 条已关闭）和 **500 条 PR 更新**（267 条待合并，233 条已合并/关闭）。尽管没有新的版本发布，但社区在功能集成（如钉钉支持）和错误修复方面的贡献非常显著。然而，大量关于 `2026.3.8` 版本的回归问题报告表明，最新版本存在稳定性风险，尤其是核心组件 Cron（定时任务）和 Control UI（控制界面）受影响严重。

## 2. 版本发布

**无新版本发布。**
目前社区反馈主要集中在稳定 `2026.3.8` 版本。鉴于大量回归报告，建议生产环境用户暂时谨慎升级，或关注以下 Bug 动态。

## 3. 项目进展

今日共有 **233 条 PR 被合并或关闭**，项目整体向前迈进了坚实的一步。重点进展包括：

*   **核心修复**：处理了会话损坏恢复、凭证安全暴露（API Key 写入 models.json）等关键问题。
*   **功能增强**：
    *   **Matrix 频道**：增加了多账号支持和语音消息波形生成 ([PR #14852](https://github.com/openclaw/openclaw/pull/14852), [PR #14996](https://github.com/openclaw/openclaw/pull/14996))。
    *   **DuckDuckGo 搜索**：集成了支持 Tor 的第四大搜索提供商，降低了对付费 API 的依赖 ([PR #14788](https://github.com/openclaw/openclaw/pull/14788))。
    *   **Secrets 管理**：引入了环境变量密钥提供者 ([PR #43640](https://github.com/openclaw/openclaw/pull/43640))。

## 4. 社区热点

今日讨论最活跃的话题集中在集成支持和误报修复上：

*   **[Issue #32828](https://github.com/openclaw/openclaw/issues/32828) [CLOSED] "API rate limit reached" 误报**
    *   **热度**：51 评论
    *   **分析**：这是今日最热 issue。用户报告 OpenClaw 在 API 实际工作正常时报错限流。这反映出中间件层的错误处理逻辑可能对底层 API 响应过于敏感或解析有误，引发了广泛的用户困扰。
*   **[Issue #26534](https://github.com/openclaw/openclaw/issues/26534) [OPEN] 请求将钉钉添加为安装向导选项**
    *   **热度**：50 评论 | 👍 13
    *   **分析**：企业级 IM 集成需求强烈。虽然钉钉已支持，但未出现在初始化向导中增加了配置门槛。这是典型的“最后一公里”用户体验问题。
*   **[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) [OPEN] 请求预构建 Android APK**
    *   **热度**：16 评论
    *   **分析**：移动端 companion app 的部署便利性是用户关注的痛点，目前需要用户自行编译源码，阻挡了大量非开发者用户。

## 5. Bug 与稳定性

今日 Bug 报告数量激增，**严重程度较高**，主要集中在 `2026.3.8` 版本的回归问题：

### 🔴 严重 - 核心功能不可用
1.  **Cron 任务全面瘫痪 ([Issue #41405](https://github.com/openclaw/openclaw/issues/41405), [Issue #42152](https://github.com/openclaw/openclaw/issues/42152), [Issue #41266](https://github.com/openclaw/openclaw/issues/41266))**
    *   **现象**：升级到 `2026.3.8` 后，Cron 任务进入队列但从未执行，状态卡死直至超时。
    *   **状态**：已有大量相关 Issue 关闭（可能是重复归档），需官方尽快确认根因。
2.  **Control UI 连接失败 ([Issue #40977](https://github.com/openclaw/openclaw/issues/40977), [Issue #41285](https://github.com/openclaw/openclaw/issues/41285))**
    *   **现象**：出现 `4008 Disconnected` 错误，导致无法通过 Web 控制台管理 Agent。
3.  **会话元数据损坏导致仪表盘崩溃 ([Issue #40818](https://github.com/openclaw/openclaw/issues/40818))**
    *   **现象**：`RangeError: Invalid string length` 导致 Agents 页面无法加载。

### 🟠 中等 - 功能性回归
1.  **模型工具调用失败 ([Issue #39907](https://github.com/openclaw/openclaw/issues/39907))**
    *   **现象**：`kimi-coding/k2p5` 等模型输出纯文本而非执行工具调用。
2.  **本地模型 响应为空 ([Issue #42270](https://github.com/openclaw/openclaw/issues/42270))**
    *   **现象**：升级后，本地 LM Studio 后端连接出现 Websocket 1006 关闭且 payload 为空。

## 6. 功能请求与路线图信号

结合 Issue 与 PR 活跃度，以下方向极有可能被纳入近期版本：

*   **视觉能力支持**：[Issue #28744](https://github.com/openclaw/openclaw/issues/28744) 请求 Agent 识别图片内容（基于 MiniMax 等多模态模型）。目前平台层未传递图片数据，这是迈向多模态 Agent 的关键一步。
*   **记忆系统 V2**：[Issue #28930](https://github.com/openclaw/openclaw/issues/28930) 提出了非常专业的架构建议（联想遍历、访问衰减），且作者自称是运行在树莓派上的 AI Agent，这表明高级用户对长期记忆机制的需求迫切。
*   **预构建移动端应用**：[Issue #9443](https://github.com/openclaw/openclaw/issues/9443) 表明社区对移动端体验的期待，可能促使团队优化 CI/CD 流程以自动发布 APK。

## 7. 用户反馈摘要

从评论中提炼出以下真实痛点与场景：

*   **痛点**：
    *   **"虚假报错"**：用户非常反感系统显示“API 限流”或“账单错误”，但实际上是网络波动或内部逻辑错误 ([Issue #13935](https://github.com/openclaw/openclaw/issues/13935))。
    *   **"上下文膨胀"**：用户担心 Token 无限累积导致成本失控或报错 ([Issue #13938](https://github.com/openclaw/openclaw/issues/13938))。
    *   **"配置地狱"**：每次更新重写配置文件导致鉴权信息丢失 ([Issue #13835](https://github.com/openclaw/openclaw/issues/13835))。
*   **场景**：
    *   大量用户使用 OpenClaw 连接 **Telegram/飞书/钉钉** 作为企业级机器人。
    *   本地开发者和使用 **GitHub Copilot/OpenRouter** 的云端开发者是核心用户群。

## 8. 待处理积压

以下重要 Issue 长期未得到有效解决或响应，建议维护者优先关注：

1.  **[Issue #26534](https://github.com/openclaw/openclaw/issues/26534) 钉钉初始化集成**：高互动量（50评论，13赞），但尚未有官方 Assignee。
2.  **[Issue #13938](https://github.com/openclaw/openclaw/issues/13938) 上下文无限累积**：这是一个架构级风险，可能导致长期运行会话崩溃。
3.  **[Issue #8367](https://github.com/openclaw/openclaw/issues/8367) GitHub Copilot Claude 模型不可用**：阻碍了通过 Copilot 使用最新 Claude 模型的用户。

---
*分析师总结*：OpenClaw 正处于快速迭代期，新功能（如多账号、新搜索、Secrets 管理）令人兴奋，但 `2026.3.8` 版本引入的 Cron 和 UI 回归问题严重影响了稳定性。建议开发团队在推进 Memory V2 和多模态特性之前，优先发布一个补丁版本修复当前的执行死锁问题。

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析报告 (2026-03-12)

**分析师**：AI 开源生态观察员
**日期**：2026-03-12

---

## 1. 生态全景

2026年3月的个人 AI 助手/自主智能体开源生态正呈现出**从“功能堆砌”向“架构重构”与“场景落地”**转型的趋势。头部项目（如 OpenClaw）在解决 `2026.3.8` 版本回归问题的同时，开始深入攻坚**多模态**与**长期记忆（Memory V2）**架构；腰部及新兴项目（如 PicoClaw, NanoClaw）则致力于通过**Monorepo 重构**和**Token 优化算法**来提升系统的可维护性与经济性。多渠道集成已不仅是支持 Telegram/Discord，而是全面覆盖钉钉、飞书、微信等企业级 IM，标志着开源 Agent 正加速渗透进生产力工具链。

## 2. 各项目活跃度对比

| 项目名称 | Issues 更新 | PRs 更新 | Release 情况 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | **500** (High) | **500** (High) | 无新版本 (聚焦修复) | ⚠️ **高优修复中**：核心 Cron/UI Bug 激增，社区焦虑感上升。 |
| **NanoBot** | 148 (Med) | 95 (Med) | 无新版本 | 🚀 **快速迭代**：PR 合并量大，架构改进频繁，关注本地模型支持。 |
| **Zeroclaw** | High (未量化) | High (34 Merged) | v0.1.7-beta.30 | 🔧 **重构阵痛期**：分支策略迁移与 CI/CD 重构导致大量僵尸配置清理。 |
| **PicoClaw** | 22 (Low) | **103** (High) | **v0.2.2** | 🧬 **架构进化中**：SOUL.md/Event-driven 重构讨论热烈，版本发布密集。 |
| **NanoClaw** | Med (未量化) | **32** (Pending) | 无新版本 | 💰 **成本攻坚**：Smart Token Optimization 提案引发热议，积蓄大版本。 |
| **IronClaw** | High (Bug Bash) | 35 (Med) | **v0.18.0** | 🛡️ **质量巩固**：集中进行 Bug Bash，暴露并修复了大量集成接口问题。 |
| **LobsterAI** | Med | 5 (Low) | **v0.2.3** | 🏢 **企业集成**：IM 渠道支持进展快，但核心稳定性（Bash/格式）受挑战。 |
| **TinyClaw** | Med | 6 (Low) | **v0.0.10** | ♻️ **架构换血**：成功迁移至 Monorepo + SQLite，降低部署门槛。 |
| **Moltis** | 32 (Med) | 5 (Low) | 无新版本 | 🐛 **修复冲刺**：单一贡献者极其活跃，集中清还 Docker/部署技术债。 |
| **CoPaw** | High | 25 (Med) | 准备 v0.0.7 | 🚧 **修复与迭代**：飞书集成问题突出，工具调用稳定性需提升。 |
| **ZeptoClaw** | 14 (Low) | 13 (All Merged) | **v0.7.5/v0.7.6** | 🔒 **安全加固**：高频发布，专注于安全边界与 CLI 体验。 |
| **EasyClaw** | Low | 1 (Open) | **v1.6.6/v1.6.7** | 🆘 **平台适配**：受困于 macOS 签名与 OAuth 认证失败。 |

## 3. OpenClaw 在生态中的定位

*   **核心参照物**：作为 Issue/PR 更新量级最大的项目（日均 500+），OpenClaw 无疑是生态中的**事实标准**和**流量中心**。
*   **优势与护城河**：
    *   **生态集成广度**：率先支持 DuckDuckGo (Tor)、Matrix 多账号、钉钉向导，其 Channel 丰富度远超 NanoClaw/Zeroclaw 等项目。
    *   **企业级关注度**：大量关于“API 限流误报”和“计费”的反馈表明其生产环境使用率远高于其他项目。
*   **当前风险**：`2026.3.8` 版本的严重回归（Cron 瘫痪、UI 断连）暴露了快速迭代下的稳定性隐患。相比之下，IronClaw 和 ZeptoClaw 目前更注重通过 Bug Bash 和安全重构来保证质量。
*   **技术路线差异**：相比 PicoClaw 探索“SOUL.md (性格定义)”的拟人化路线，OpenClaw 仍侧重于**工具调用能力的增强**（如视觉能力支持请求）。

## 4. 共同关注的技术方向

1.  **上下文管理与成本控制**
    *   **涉及项目**：**NanoClaw, OpenClaw, NanoBot**
    *   **具体诉求**：用户对“无限 Token 累积”导致成本失控或报错极其反感。NanoClaw 提出的 "Inline Compaction"（内联压缩）和 OpenClaw 的 "Memory V2" 架构讨论表明，**如何在有限窗口内实现长期记忆且不破产**是全行业痛点。

2.  **本地模型 与推理下沉**
    *   **涉及项目**：**NanoBot, PicoClaw, LobsterAI, Moltis**
    *   **具体诉求**：社区强烈要求摆脱对付费 API 的依赖。NanoBot 用户呼吁支持 Ollama，Moltis 引入 Vulkan GGUF 支持，PicoClaw 支持 LongCat。这反映了**隐私保护**和**降低边际成本**的刚需。

3.  **多模态能力**
    *   **涉及项目**：**OpenClaw, NanoClaw, LobsterAI**
    *   **具体诉求**：从纯文本交互转向“看图说话”。OpenClaw 请求 Agent 识别图片，NanoClaw (Discord) 和 LobsterAI 正在补全视觉识别功能。

4.  **企业级 IM 深度集成**
    *   **涉及项目**：**LobsterAI, CoPaw, OpenClaw**
    *   **具体诉求**：不再是简单的消息收发，而是要求支持飞书云文档、钉钉原生流程。LobsterAI 今日甚至一口气合并了钉钉、企微、QQ 的支持，显示出国内市场的**办公场景化**竞争激烈。

## 5. 差异化定位分析

| 维度 | **OpenClaw** (行业标准) | **PicoClaw** (架构创新) | **NanoClaw** (轻量/成本) | **ZeptoClaw** (安全/边缘) |
| :--- | :--- | :--- | :--- | :--- |
| **核心侧重** | 功能大而全，生态连接器 | **Agent 拟人化** (SOUL.md)，事件驱动 | **Token 经济性**，容器化部署 | **系统安全**，CLI 体验，边缘/IoT |
| **目标用户** | 企业开发者，极客 | 架构师，AI 研究者 | 个人开发者，成本敏感用户 | 运维人员，隐私敏感用户 |
| **架构特点** | 插件化，Web 控制台 | 重构为 Monorepo/事件循环 | 依赖注入，多后端解耦 | 静态链接，加固文件系统 |
| **短板** | 稳定性波动大，Bug 噪音多 | 文档/构建复杂度高 | 社区规模较小，中文文档缺位 | 功能更新相对保守 |

## 6. 社区热度与成熟度

*   **第一梯队 (活跃/成熟)**：
    *   **OpenClaw**：虽然面临质量挑战，但社区响应速度极快，是生态的风向标。
    *   **IronClaw**：通过有组织的 "Bug Bash" 展现了成熟的社区治理能力，正在从功能构建转向稳定性打磨。

*   **第二梯队 (快速迭代/上升期)**：
    *   **NanoBot & PicoClaw**：PR 活跃度极高，且不仅限于修补，涉及核心架构（Context 管理、Event Loop）的深度重构。
    *   **CoPaw & LobsterAI**：紧贴国内市场需求（飞书/钉钉），版本发布节奏快，但在特定渠道的稳定性上仍有欠账。

*   **第三梯队 (潜力/调整期)**：
    *   **TinyClaw & Zeroclaw**：正在进行痛苦但必要的基础设施重构（分支迁移、存储引擎替换），短期可能会有波动，但长期看好。
    *   **Moltis & ZeptoClaw**：由核心作者强力驱动，正在清理技术债，适合对特定功能（如 Vulkan 支持、安全加固）有刚需的用户。

## 7. 值得关注的趋势信号

1.  **Agent "性格" 的工程化定义**
    *   PicoClaw 提出的 `SOUL.md` (价值观) 和 `AGENT.md` (行为逻辑) 分离，是一个极具前瞻性的信号。这标志着开源社区不再满足于 Prompt Engineering，而是开始探索**可版本化、可配置的 Agent 人格架构**。

2.  **Token 优化成为核心竞争力**
    *   随着 LLM 调用成本的显现，单纯能跑通 Demo 已经不够。像 NanoClaw 提出的 "Inline Compaction" 和 OpenClaw 讨论的 "Memory V2" 一样，**谁能更省钱地维持长对话**，谁就能在个人助手市场胜出。

3.  **安全边界的后移与加固**
    *   ZeptoClaw 对文件系统（TOCTOU 攻击）和 Webhook 签名的加固，以及 Moltis 的远程 MCP 安全配置，表明随着 Agent 权限的扩大（执行 Shell、读写文件），**安全漏洞正成为阻碍生产部署的最后一道墙**。

4.  **“一键部署”仍是最大痛点**
    *   从 EasyClaw 的 macOS 签名问题到 Zeroclaw 的 GLIBC 报错，即便在 2026 年，跨平台二进制分发依然困难。Docker 虽然解决了部分问题，但非技术用户对**Web 端配置**和**原生客户端**的易用性要求并未得到完全满足。

**总结建议**：
对于开发者，建议密切关注 **PicoClaw 的架构演进**（事件驱动）和 **NanoClaw 的 Token 策略**；对于企业用户，**OpenClaw** 仍是功能最全的选择，但需等待其修复当前的 Cron 致命 Bug，或考虑 **LobsterAI** 作为国内 IM 场景的备选。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

根据您提供的 NanoBot (HKUDS/nanobot) 2026-03-12 GitHub 数据，为您生成今日项目动态日报。

---

# 🐈 NanoBot 项目动态日报 (2026-03-12)

## 1. 今日速览
NanoBot 项目今日保持**极高活跃度**，社区互动频繁。过去24小时内共有 **148 次更新**（53 条 Issues + 95 条 PRs），显示出项目处于快速迭代与功能扩充期。今日无新版本发布，但主分支合并了 62 个 PR，主要聚焦于**上下文管理、多渠道适配（Telegram/QQ）及底层稳定性修复**。与此同时，社区对**本地模型支持（Ollama）**及**安全性问题**的关注度持续上升。

## 2. 版本发布
**无新版本发布**。尽管代码库合并了大量更新，官方尚未 tag 新的 Release 版本，建议用户暂时追踪 `main` 分支最新代码以获取修复，或等待下一个 patch 版本。

## 3. 项目进展
今日共有 **62 个 PR 被合并/关闭**，显著推进了以下领域：

*   **核心架构与上下文管理**：
    *   [PR #1894](https://github.com/HKUDS/nanobot/pull/1894) **[已合并]**：修复了 `get_history` 切片逻辑中 `max_messages=0` 导致返回全部历史的 Bug，防止上下文溢出。
    *   [PR #1909](https://github.com/HKUDS/nanobot/pull/1909) **[已合并]**：强制 Memory Consolidation（记忆巩固）过程调用 `save_memory` 工具，防止 LLM 跳过记忆存储导致上下文丢失。
    *   [PR #65](https://github.com/HKUDS/nanobot/pull/65) **[已合并]**：引入 **Tool Response Offloading**（工具响应卸载），解决大文件/长网页抓取导致上下文窗口崩溃的问题。

*   **渠道与集成**：
    *   [PR #1667](https://github.com/HKUDS/nanobot/pull/1667) **[待合并/Open]**：增强了 QQ 频道功能，支持发送本地图片和文件。
    *   [PR #1900](https://github.com/HKUDS/nanobot/pull/1900) **[Open]**：实现了 Telegram 的 `reply_to_message` 上下文读取，增强了多轮对话理解。
    *   [PR #48](https://github.com/HKUDS/nanobot/pull/48) **[已合并]**：增加了 Google Chat 的 Webhook 支持。

*   **Provider 支持**：
    *   [PR #51](https://github.com/HKUDS/nanobot/pull/51) **[已合并]**：修复了智谱 AI（Zhipu）Provider 的问题并加入 GLM-4.7 引导。
    *   [PR #40](https://github.com/HKUDS/nanobot/pull/40) **[已合并]**：集成 LazyLLM，扩展了对 DeepSeek、SiliconFlow 等更多模型源的支持。

## 4. 社区热点
今日社区讨论主要集中在**本地部署**与**生态集成**：

1.  **Ollama 支持缺失** [Issue #193](https://github.com/HKUDS/nanobot/issues/193)
    *   **热度**：13 条评论
    *   **分析**：用户强烈呼吁原生支持 Ollama API。目前项目主推 vLLM，但大量个人用户更倾向于使用 Ollama 进行本地推理。这是一个高优先级的功能缺口。
2.  **安全性隐患：配置文件泄露风险** [Issue #1873](https://github.com/HKUDS/nanobot/issues/1873)
    *   **热度**：8 条评论
    *   **分析**：用户指出 NanoBot 的 Agent Loop 可以通过 `exec()` 读取自身的 `config.json`，存在 API Key 泄露风险。建议重构权限模型，这是生产环境部署的关键阻碍。
3.  **本地部署经验分享** [Issue #855](https://github.com/HKUDS/nanobot/issues/855)
    *   **热度**：9 条评论
    *   **分析**：用户分享了在 RTX 3050 等消费级显卡上的配置经验，指出小参数模型（如 8B）在复杂任务中表现不佳，建议本地用户至少使用 32B 级别模型或更好的硬件。

## 5. Bug 与稳定性
今日报告的 Bug 集中在**稳定性**与**显示**问题：

*   **严重 (Critical)**：
    *   **CLI 命令乱码** [Issue #1904](https://github.com/HKUDS/nanobot/issues/1904)：命令行调用子代理返回信息显示乱码，影响 CLI 用户体验。
    *   **意外退出** [Issue #1833](https://github.com/HKUDS/nanobot/issues/1833)：程序在运行约半小时后收到 SIGTERM 信号退出且无报错日志。
*   **一般**：
    *   **Skill 内容截断** [Issue #1905](https://github.com/HKUDS/nanobot/issues/1905) **[已有相关修复思路]**：通过 `read_file` 加载的 Skill 内容在会话历史中被截断为 500 字符，导致多轮对话失效。
    *   **Matrix 频道启动失败** [Issue #1300](https://github.com/HKUDS/nanobot/issues/1300)：用户配置 Matrix 后无法启动，仍在排查中。
    *   **OpenRouter 配置错误** [Issue #842](https://github.com/HKUDS/nanobot/issues/842)：升级到 0.1.4 后 OpenRouter 端点报 401 User not found 错误，怀疑是 API 调用方式变更导致。

## 6. 功能请求与路线图信号
用户需求正在从“能用”转向“好用”和“连接更多平台”：

*   **语音交互** [Issue #1106](https://github.com/HKUDS/nanobot/issues/1106)：请求支持语音输入输出，这将是迈向个人助理的关键一步。
*   **微信支持** [Issue #1819](https://github.com/HKUDS/nanobot/issues/1819)：强烈要求支持微信 APP 交互，这是中国用户的核心痛点。
*   **文档本地化** [Issue #1617](https://github.com/HKUDS/nanobot/issues/1617)：虽然有争议，但反映了中文社区对中文文档的强烈需求。
*   **Endpoint Channel** [PR #1861](https://github.com/HKUDS/nanobot/pull/1861)：提议增加 OpenAI 兼容的 Endpoint Channel，允许外部应用直接调用 NanoBot，若合并将极大扩展其作为 Agent 后端的适用性。

## 7. 用户反馈摘要
*   **痛点**：本地部署门槛较高（硬件要求），Ollama 缺位让本地玩家不便；配置 API Key 存在安全顾虑；微信/飞书等国内主流平台支持不够完善。
*   **满意点**：项目迭代速度快，对最新模型（如 GLM-4.7）跟进迅速；社区活跃，像 [Issue #855](https://github.com/HKUDS/nanobot/issues/855) 这种经验分享贴对新手帮助很大。
*   **吐槽**：文档目前缺乏中文版；部分用户升级版本后遇到配置不兼容问题。

## 8. 待处理积压
*   [Issue #193 (Ollama Support)](https://github.com/HKUDS/nanobot/issues/193)：作为高频请求，建议开发团队将其纳入近期 Roadmap。
*   [Issue #1873 (Security)](https://github.com/HKUDS/nanobot/issues/1873)：安全性重构虽繁琐，但对项目长远发展至关重要。
*   [PR #1861 (Endpoint Channel)](https://github.com/HKUDS/nanobot/pull/1861)：这是一个高价值的架构改进，建议优先 Review。

---
*分析师注：NanoBot 正处于功能爆发期，但在追求新模型和新渠道的同时，需要警惕核心稳定性和安全性债务的累积。*

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-12)

你好！我是 Zeroclaw 开源项目分析师。以下是基于 GitHub 数据生成的 2026年3月12日 项目动态日报。

---

### 1. 今日速览
项目今日处于**高活跃度爆发期**，主要集中在基础设施重构与错误修复。团队完成了向单一 `master` 分支模型的迁移，并清理了大量由此引发的 CI/CD 僵尸配置。虽然发布了两个 Beta 版本（v0.1.7-beta.28/30），但 Issues 列表中 S0/S1 级别的严重 Bug（如 GLIBC 兼容性、Docker 构建失败）仍有待彻底解决。社区方面，对 Azure OpenAI、MCP 动态加载及嵌入式设备支持的讨论热度最高。

### 2. 版本发布
今日连续发布两个修订版，主要为了配合分支策略调整：

*   **v0.1.7-beta.30** [Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.30)
*   **v0.1.7-beta.28** [Release Notes](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.1.7-beta.28)

**更新要点：**
*   **CI/CD 重构**：彻底替换了旧的工作流，引入了简化的 CI 管道。
*   **分支模型迁移**：正式从多分支（main/master 混用）迁移至**单一 `master` 分支**模型。
*   **注意**：部分 Release Note 显示内容被截断，建议关注 Commit Log 获取完整详情。

### 3. 项目进展
今日共合并/关闭 **34 个 PR**，主要集中在修复分支迁移后的遗留问题：

*   **基础设施修复 (Post-Migration)**：
    *   多个 PR 修正了脚本中指向 `main` 的硬编码引用，统一指向 `master`，涉及 [release 脚本](https://github.com/zeroclaw-labs/zeroclaw/pull/3249)、[CI 链接收集](https://github.com/zeroclaw-labs/zeroclaw/pull/3250) 和 [Rust 严格门控](https://github.com/zeroclaw-labs/zeroclaw/pull/3252)。
    *   修复了 macOS (Bash 3.2) 环境下安装脚本的 `Unbound variable` 错误 ([PR #3248](https://github.com/zeroclaw-labs/zeroclaw/pull/3248))。
*   **安全与配置**：
    *   修复了配置文件加载/保存时的加解密逻辑遗漏，防止明文存储 Channel 密钥 ([PR #3255](https://github.com/zeroclaw-labs/zeroclaw/pull/3255), [PR #3256](https://github.com/zeroclaw-labs/zeroclaw/pull/3256))。
    *   修复了配对令牌重启后失效的问题 ([PR #3254](https://github.com/zeroclaw-labs/zeroclaw/pull/3254))。
*   **新功能支持**：
    *   **Azure OpenAI**：官方已合并 Azure OpenAI Provider 的支持 ([PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246))。
    *   **32位系统**：添加了对 32 位架构（如 MIPS/IoT）的初步支持 ([PR #3245](https://github.com/zeroclaw-labs/zeroclaw/pull/3245))。

### 4. 社区热点
今日讨论最活跃的议题集中在兼容性与新功能支持：

1.  **[Bug] GLIBC_2.39 not found ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))**
    *   **热度**：9 评论 | 👍 2
    *   **分析**：这是目前最严重的阻碍性问题。用户在运行二进制文件时遇到 GLIBC 版本不匹配。项目今日已合并 [PR #3257](https://github.com/zeroclaw-labs/zeroclaw/pull/3257) 试图降低构建基线，需观察该修复是否在下一版本生效。
2.  **[Feature] Azure OpenAI Support ([Issue #3176](https://github.com/zeroclaw-labs/zeroclaw/issues/3176))**
    *   **热度**：4 评论
    *   **分析**：企业用户对 Azure 需求强烈。随着 [PR #3246](https://github.com/zeroclaw-labs/zeroclaw/pull/3246) 的合并，该需求已正式解决。
3.  **[Feature] MCP Support for Agent ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))**
    *   **热度**：3 评论 | 👍 1
    *   **分析**：用户指出当前 Agent 模式未加载 MCP 配置，限制了工具调用能力。目前已有相关修复 [PR #3264](https://github.com/zeroclaw-labs/zeroclaw/pull/3264) 正在审核中。

### 5. Bug 与稳定性
按严重程度排序的关键 Bug 列表：

*   **S0 - 致命/安全风险**
    *   **[Bug] GLIBC 版本过高 ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))**：导致二进制文件在常见 Linux 发行版上无法启动。
        *   *状态*：已有修复 PR (#3257) 合并，等待验证。
    *   **[Bug] 密钥明文存储风险 ([Issue #3083](https://github.com/zeroclaw-labs/zeroclaw/issues/3083) 相关)**：此前配置保存未加密通道密钥。
        *   *状态*：已通过 PR #3255 修复。

*   **S1 - 工作流阻塞**
    *   **[Bug] Docker 构建失败 ([Issue #3207](https://github.com/zeroclaw-labs/zeroclaw/issues/3207))**：升级 Rust 1.94 后导致 Docker 构建报错。
        *   *状态*：Issue 显示已关闭，推测已回滚或修复。
    *   **[Bug] Docker 初始化脚本报错 ([Issue #2930](https://github.com/zeroclaw-labs/zeroclaw/issues/2930))**：MacOS Docker 环境下 `Unbound variable` 错误。
        *   *状态*：已通过 PR #3248 修复。

*   **S2 - 功能降级**
    *   **[Bug] 浏览器配对不持久化 ([Issue #2960](https://github.com/zeroclaw-labs/zeroclaw/issues/2960))**：每次重启 Dashboard 需重新配对。
    *   **[Bug] Matrix 频道缺失 ([Issue #2953](https://github.com/zeroclaw-labs/zeroclaw/issues/2953))**：官方构建未包含 `channel-matrix` flag。

### 6. 功能请求与路线图信号
结合 Issue 与 PR，未来的版本路线图可能包含：

*   **Agent 增强**：
    *   **MCP 动态加载**：用户希望能按需加载 MCP 工具以节省 Token。目前 [PR #3264](https://github.com/zeroclaw-labs/zeroclaw/pull/3264) 提出了 JIT Tools RAG 注入方案，这是一个非常有价值的优化方向。
    *   **推理控制**：用户请求控制 Ollama 的推理/思考过程 ([Issue #850](https://github.com/zeroclaw-labs/zeroclaw/issues/850))。
*   **平台扩展**：
    *   **IoT/嵌入式支持**：随着 32 位系统支持 PR ([#3245](https://github.com/zeroclaw-labs/zeroclaw/pull/3245)) 的合并，项目正式向边缘计算设备（如路由器、IoT 网关）拓展。
*   **用户体验 (UX)**：
    *   **WebUI 国际化**：中文支持请求 ([Issue #3152](https://github.com/zeroclaw-labs/zeroclaw/issues/3152))。
    *   **Telegram 流式输出优化**：[PR #3265](https://github.com/zeroclaw-labs/zeroclaw/pull/3265) 提出使用 `sendMessageDraft` 消除消息闪烁。

### 7. 用户反馈摘要
*   **痛点**：**分支策略混乱**曾是近期最大的槽点（"main vs master" 令人困惑），今日的清理工作应该能大幅缓解此问题。
*   **痛点**：**兼容性**是第二大痛点，GLIBC 和 32 位支持问题表明用户部署环境差异巨大，官方需要加强多平台构建测试。
*   **满意点**：社区对项目透明度表示认可（[Issue #2922](https://github.com/zeroclaw-labs/zeroclaw/issues/2922)），尤其是官方坦诚面对内部调整并积极恢复节奏的态度获得了 12 个点赞。

### 8. 待处理积压
*   **[Bug] Slack 适配器无法接收线程回复 ([Issue #3084](https://github.com/zeroclaw-labs/zeroclaw/issues/3084))**：影响 Slack 深度使用，目前仍为 Open 状态，未见修复 PR。
*   **[Feature] 飞书 支持配置困难 ([Issue #3012](https://github.com/zeroclaw-labs/zeroclaw/issues/3012))**：虽然已关闭，但用户指出 Feature Flag 命名混乱且非默认开启，建议作为后续优化任务处理。
*   **[Feature] 细粒度工具控制 ([Issue #2355](https://github.com/zeroclaw-labs/zeroclaw/issues/2355))**：高级用户希望能基于上下文控制工具调用权限（如 "仅允许访问特定目录"），该需求活跃度高但尚未有明确排期。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览
PicoClaw 项目今日呈现出**极高的开发活跃度**与**强劲的社区增长势头**。过去 24 小时内，项目产生了 **103 个 PR 更新**（其中 42 个已合并）和 **22 个 Issue 更新**，显示出核心团队正在加速推进 v0.2.2 版本的迭代。值得注意的是，今日发布了 **3 个新版本**（v0.2.2 及两个 Nightly 构建），重点引入了 LongCat 模型支持和 Matrix 渠道的富文本支持。社区方面，关于 Agent 架构重构（SOUL.md 与事件驱动循环）的讨论正在热烈进行，表明项目正从单纯的工具链向具备高度可定制性的智能体平台演进。

## 2. 版本发布
今日连续发布了 3 个版本，标志着项目进入了快速迭代期：

*   **v0.2.2 (Stable)**
    *   **核心更新**：增加了 Web 设置中的 `exec allow_remote` 配置支持，合并了 Echo 语音转录功能。
    *   ** commits**：包含了多个功能性合并，增强了 Web 端的控制能力。
    *   [查看 Release 详情](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2)

*   **v0.2.2-nightly.20260312.6612ca09 (Nightly)**
    *   **新功能**：
        *   **feat(providers)**: 新增 **LongCat** 模型提供商支持 ([#1317](https://github.com/sipeed/picoclaw/pull/1317))。
        *   **feat(channel)**: Matrix 渠道现已支持**富文本消息** ([#1370](https://github.com/sipeed/picoclaw/pull/1370))。
    *   **修复**：修复了 Direct Agent 模式下 MCP (Model Context Protocol) 初始化失败的问题。
    *   [查看 Release 详情](https://github.com/sipeed/picoclaw/releases/tag/v0.2.2-nightly.20260312.6612ca09)

## 3. 项目进展
今日共有 **42 个 PR 被合并**，主要围绕安全性增强、功能扩展与架构重构：

*   **安全性加固**：PR [#1360](https://github.com/sipeed/picoclaw/pull/1360) 合并，默认阻止未经身份验证的远程 `exec` 调用，并限制了计划任务的执行渠道，修复了潜在的安全漏洞 (GHSA-pv8c-p6jf-3fpp)。
*   **功能增强**：
    *   **Web 配置**：PR [#1367](https://github.com/sipeed/picoclaw/pull/1367) 完善了 Web 端对 `tools.exec.allow_remote` 配置的兼容性支持。
    *   **多模态与 Web UI**：PR [#1396](https://github.com/sipeed/picoclaw/pull/1396) 修复了飞书与企业微信的多模态处理逻辑，并增加了单页面 Web 端入口。
*   **架构重构**：
    *   PR [#1313](https://github.com/sipeed/picoclaw/pull/1313) 将调度器重构为事件驱动模型，降低了 CPU 占用。
    *   PR [#1388](https://github.com/sipeed/picoclaw/pull/1388) 清理了遗留的 `TOOLS.md` 引用，完成了向 JSON Schema 工具定义的彻底迁移。

## 4. 社区热点
今日社区讨论的焦点集中在 **Agent 架构的重构**与**底层能力的扩展**：

1.  **[Agent Refactor] What an Agent is** ([#1218](https://github.com/sipeed/picoclaw/issues/1218))
    *   **热度**：13 条评论
    *   **核心诉求**：核心维护者 @alexhoshina 提议引入 `SOUL.md`（定义性格与价值观）和 `AGENT.md`（定义行为逻辑）两个文件。这标志着 PicoClaw 试图将 Agent 从“执行脚本的机器”提升为“具备个性的数字生命”，社区对此反响热烈，正在探讨具体的实现规范。

2.  **[Agent Refactor] Event-driven agent loop** ([#1316](https://github.com/sipeed/picoclaw/issues/1316))
    *   **热度**：7 条评论
    *   **核心诉求**：针对现有 Agent Loop “黑盒”不可观测、不可中断的痛点，提议重构为事件驱动架构。这表明开发者急需对 Agent 的执行过程进行精细控制（如 UI 实时渲染、人工介入中断）。

3.  **[Feature] Telegram realtime stream response** ([#1098](https://github.com/sipeed/picoclaw/issues/1098))
    *   **热度**：2 条评论
    *   **核心诉求**：用户希望支持 Telegram 最新的流式响应功能，以提升聊天机器人的交互体验。

## 5. Bug 与稳定性
今日报告了多个影响使用的关键 Bug，部分已有修复方案：

*   **P0 - Web 服务无法启动**
    *   **描述**：用户反馈在最新版本中，Web 服务点击启动无反应 ([#1395](https://github.com/sipeed/picoclaw/issues/1395))。
    *   **状态**：**未解决**，需立即关注。

*   **P1 - Groq API 工具调用格式错误**
    *   **描述**：使用 Groq 作为提供商时，工具调用失败 (tool_use_failed)，因为模型生成的格式与 OpenAI 标准不一致 ([#748](https://github.com/sipeed/picoclaw/issues/748))。
    *   **状态**：**Open**，影响 Groq 用户的核心功能。

*   **P2 - MCP 在 Agent 模式下失效**
    *   **描述**：`picoclaw agent` 命令完全忽略 MCP 工具 ([#1299](https://github.com/sipeed/picoclaw/issues/1299))。
    *   **状态**：**已修复** (见 v0.2.2-nightly 更新日志)。

*   **P2 - Windows 源码启动失败**
    *   **描述**：Windows 环境下 `go mod tidy` 报包引用错误 ([#1348](https://github.com/sipeed/picoclaw/issues/1348))。
    *   **状态**：**Open**，阻碍了 Windows 开发者的源码构建。

## 6. 功能请求与路线图信号
*   **GitHub Copilot 集成**：Issue [#1347](https://github.com/sipeed/picoclaw/issues/1347) 请求实现 GitHub Device Code 认证，以便无缝集成 GitHub Copilot。这表明用户希望利用现有的 IDE 授权来降低使用门槛。
*   **Docker 镜像增强**：Issue [#1371](https://github.com/sipeed/picoclaw/issues/1371) 建议在 Docker 镜像中增加 Node.js 22 支持。这释放了一个信号：用户倾向于在 PicoClaw 容器内直接运行依赖于 Node 环境的工具或 Skills。
*   **OpenIM 渠道**：Issue [#1372](https://github.com/sipeed/picoclaw/issues/1372) 提出接入 OpenIM 插件，显示项目在 IM 集成方面的需求仍在扩展。

## 7. 用户反馈摘要
*   **Web 端体验痛点**：多位用户反馈 Web UI 存在细节问题，如 Firefox 下 JSON 编辑框高度塌陷 ([#1364](https://github.com/sipeed/picoclaw/issues/1364))、移动端无法左右滑动查看代码 ([#1369](https://github.com/sipeed/picoclaw/issues/1369))，以及默认总是显示新对话而非历史记录 ([#1373](https://github.com/sipeed/picoclaw/issues/1373))。
*   **配置复杂度**：Issue [#440](https://github.com/sipeed/picoclaw/issues/440) 指出 `max_tool_iterations` 硬限制导致复杂任务无法完成，用户呼吁改用更智能的上下文窗口边界控制。
*   **构建困难**：除了 Windows 的 Go mod 问题，Docker 用户也遇到了 Manifest 找不到的情况 ([#1350](https://github.com/sipeed/picoclaw/issues/1350))，说明分发构建物的稳定性有待提高。

## 8. 待处理积压
*   **Agent 迭代限制机制**：Issue [#440](https://github.com/sipeed/picoclaw/issues/440) 提出的关于用上下文边界检测替代硬编码迭代限制的建议，对 Agent 处理复杂任务至关重要，目前尚未有官方定论，建议维护者优先评估。
*   **TUI 配置竞态**：Issue [#1151](https://github.com/sipeed/picoclaw/issues/1151) 指出 TUI 界面存在配置文件读写竞态条件，这是一个高优先级的潜在数据损坏风险，目前仍处于 Open 状态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-12)

## 1. 今日速览

NanoClaw 项目今日呈现出**极高的社区开发活跃度**，正处于功能快速迭代与架构优化的关键时期。过去24小时内，项目收到了 **32 个待合并 PR**，主要集中在 Token 成本优化、多渠道适配（Telegram/Discord/QQ）以及底层架构增强（多实例支持、会话管理）。社区贡献者 @gm4leejun-stack 提出了一套完整的 "Smart Token Optimization" 方案，旨在大幅降低 LLM 调用成本，成为今日最受关注的功能提案。与此同时，关于凭证管理与容器安全性的讨论也在持续深入。虽然无新版本发布，但大量高质量的 Feature PR 预示着下一次更新将包含重大改进。

## 2. 版本发布

**无新版本发布。**

## 3. 项目进展

尽管今日无 PR 合并记录（显示的 7 个已处理 PR 为较早前的记录或自动关闭），但 **待合并队列（32个）** 中包含多个重量级功能，显示出项目正在积蓄一次大的版本更新：

-   **Token 成本大幅优化**: PR #988 提出了包含 "Inline Compaction"（内联压缩）、响应长度控制及 CLAUDE.md 自动压缩的综合解决方案。该方案通过在正常对话中注入压缩指令，试图在不增加额外 API 调用的前提下解决上下文膨胀问题，可能显著降低长期运行成本。
-   **长会话稳定性增强**: PR #987 解决了长时段运行后日志文件过大导致会话丢失的问题，引入了会话轮转和预退出内存刷写机制，这对 24/7 运行的智能体至关重要。
-   **多渠道生态扩展**:
    -   **Telegram**: PR #818 增加了表情反应支持。
    -   **Discord**: PR #974 补全了视觉识别（看图）和语音转文字功能。
    -   **QQ**: PR #966 和 #836 两个 PR 正在竞争/补充 QQ 机器人的支持能力。
-   **底层架构改进**: PR #970 增加了多实例共存支持（通过 `NANOCLAW_INSTANCE` 环境变量），解决了单机部署多个 Agent 的冲突问题；PR #972 尝试修复 macOS 上的容器网络问题。

## 4. 社区热点

今日社区讨论主要集中在**成本控制**与**安全架构**两个核心议题：

-   **Token 优化方案讨论 (Issue #983, #984)**: 用户 @gm4leejun-stack 发起的一系列关于 Token 优化的 Issue 引起了热烈反响。大家一致认为当前 Agent 长期运行时的 Context 膨胀是最大的痛点。其提出的 "Inline Compaction"（在回复中顺带总结）被认为比传统的 "单独调用压缩接口" 更具成本优势。
    -   链接: [Issue #983](https://github.com/qwibitai/nanoclaw/issues/983)
-   **容器安全性争议 (Issue #865)**: 用户 @calebfaruki 指出 "仅使用容器并不代表安全"，认为当前架构过度信任容器内部环境，建议将更多脚本移出容器或进行更严格的隔离。这触及了项目架构的核心设计哲学，引发了关于便利性与安全性平衡的深层讨论。
    -   链接: [Issue #865](https://github.com/qwibitai/nanoclaw/issues/865)
-   **第三方清理工具发布 (Issue #955)**: 社区开发者发布了非官方的卸载工具 "ByeByeClaw"，虽然侧面反映了项目组件较多、卸载复杂的问题，但也体现了社区生态的自愈能力。
    -   链接: [Issue #955](https://github.com/qwibitai/nanoclaw/issues/955)

## 5. Bug 与稳定性

今日报告了多个影响使用的 Bug，主要集中在**连接/认证**和**性能**方面：

-   **[High] 无响应/配置复杂 (Issue #958, #973)**: 多名用户反馈运行 `/setup` 后无法收到回复，或者设置过程"极其缓慢"。这表明当前的初始化流程对新用户不够友好，存在潜在的超时或死锁问题。
    -   链接: [Issue #958](https://github.com/qwibitai/nanoclaw/issues/958)
-   **[High] 凭证环境变量不兼容 (Issue #853, #960)**: 近期的凭证代理迁移导致部分环境变量（如 `ANTHROPIC_AUTH_TOKEN`, MCP 相关变量）未被正确传递给容器，导致认证失败。
    -   Fix PR: [PR #930](https://github.com/qwibitai/nanoclaw/pull/930), [PR #969](https://github.com/qwibitai/nanoclaw/pull/969) (针对 OAuth Token 刷新)
-   **[High] WhatsApp 消息洪泛 (Issue #732)**: 流式输出在 WhatsApp 渠道上变成了发送多条分段消息，严重影响体验。
    -   Fix PR: [PR #965](https://github.com/qwibitai/nanoclaw/pull/965) (已提交，待合并)
-   **[Medium] Gemini Pro 延迟过高 (Issue #989)**: 在使用 Gemini Pro 后端时，简单任务耗时 3.5 分钟，原因是上下文过大（123k tokens）。这与今日的 Token 优化提案直接相关。

## 6. 功能请求与路线图信号

根据 Issues 和 PRs 综合，项目下一步的路线图信号非常清晰：

1.  **成本控制成为核心特性**: Token 优化不再是锦上添花，而是必需品。自动压缩和响应长度控制极可能在近期合并。
2.  **多模态交互标准化**: 随着 Discord (PR #974) 和 Telegram (PR #818) 的视觉/交互增强，NanoClaw 正从纯文本 Agent 向多模态个人助手演进。
3.  **引擎解耦**: PR #963 (OpenAI Codex SDK 支持) 表明项目正在尝试脱离单一 LLM 供应商依赖，向更通用的 "Agent Orchestrator" 转型。
4.  **内存系统升级**: PR #979 (LanceDB) 提示项目正在寻求更强大的向量数据库支持，以替代或增强现有的文件型记忆。

## 7. 用户反馈摘要

从评论中提炼出的核心反馈如下：

-   **痛点**:
    -   "Setup 太慢了，能不能直接用 JSON 配置？" —— 对初始化流程复杂度的抱怨。
    -   "Token 消耗太快，跑一晚上太贵了。" —— 成本是阻碍长期运行的最大障碍。
    -   "MCP 配置迁移后变量丢了，文档也没更新。" —— 升级带来的破坏性变更缺乏指引。
-   **满意点**:
    -   社区对 "Containerized Agent" 架构的潜力表示认可，特别是 PR #970 (多实例) 和各种新渠道的支持，让用户看到了打造 "全能私人助理" 的希望。

## 8. 待处理积压

-   **PR #988 (Smart Token Optimization)**: 这是最关键的 PR，建议维护者优先 Review。它解决了目前最紧迫的成本问题，且设计文档详尽。
-   **PR #963 (Codex SDK)**: 该 PR 允许使用 OpenAI 作为后端，是重要的架构解耦工作，长期价值高。
-   **Issue #865 (Security Model)**: 关于安全模型的讨论尚未定论，建议核心团队在该 Issue 下给出官方立场，以消除社区疑虑。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-03-12)

**分析师**：AI 开源项目观察员
**数据源**：github.com/nearai/ironclaw

---

## 1. 今日速览

IronClaw 今日处于**高强度的迭代与修复周期**，项目活跃度极高。过去 24 小时内，项目发布了 **v0.18.0** 新版本，并伴随密集的 CI/CD 自动化提升。社区方面，Issue 讨论热度集中在强制认证机制和兼容性问题上；值得注意的是，进行了一场针对 Telegram 集成和 Routines 功能的 "Bug Bash"（漏洞突击测试），一次性暴露了 10+ 个中等严重程度的 Bug，显示出项目正在从功能构建转向稳定性打磨阶段。

## 2. 版本发布

### [v0.18.0](https://github.com/nearai/ironclaw/releases/tag/v0.18.0) - 2026-03-11

- **更新性质**：常规功能更新与 Staging 分支合并。
- **主要内容**：
    - **WASM 组件更新**：合并了最新的 WASM arti 组件，可能涉及底层网络或协议栈的优化。
    - **Staging 提升**：将预发布环境的大量更新（包含过去数小时的功能 PR）合并至主分支。
- **迁移注意**：虽然 Release Notes 较简略，但结合今日 PR 可知，v0.18.0 包含了 Linux Systemd 配置的变更（PR #985）和 HTML 解析库的升级（PR #1016），建议升级后检查 `ironclaw cron` 相关配置及 Markdown 渲染表现。

## 3. 项目进展

今日共有 **35 个 PR 被合并**（大部分为 Staging 自动提升），主要进展集中在 CLI 工具链完善和基础设施加固：

- **CLI 功能增强**：
    - **[#918](https://github.com/nearai/ironclaw/pull/918) Skills 管理子命令**：新增 `ironclaw skills list/search/info`，允许用户在不运行 Agent 的情况下发现和检查技能。
    - **[#933](https://github.com/nearai/ironclaw/pull/933) Channels 管理子命令**：新增 `ironclaw channels list`，用于列出所有配置的通道及其启用状态。
    - **[#1017](https://github.com/nearai/ironclaw/pull/1017) Cron 管理子命令**（待合并/活跃）：正在重构 Cron 管理功能，支持非交互式删除和 JSON 输出。

- **基础设施与兼容性**：
    - **[#1016](https://github.com/nearai/ironclaw/pull/1016) 测试用例更新**：修复了因 `html-to-markdown-rs` 库升级导致的测试失败。
    - **[#1013](https://github.com/nearai/ironclaw/pull/1013) Linux 安装器修复**（新 PR）：针对 glibc 版本过旧的 Linux 系统（如 Amazon Linux 2023），增加了 `musl` 静态链接二进制文件的回退支持。

## 4. 社区热点

1.  **[#142](https://github.com/nearai/ironclaw/issues/142) [CLOSED] 强制 NEAR AI 认证引发的争议**
    - **热度**：👍 1, 评论 9
    - **分析**：用户强烈质疑为何使用 IronClaw 必须进行 NEAR AI 认证，认为这违反了开源精神且限制了自由度。该 Issue 虽已关闭，但反映了用户对于“去中心化/授权门槛”的痛点，认为认证过程繁琐且不应作为硬性依赖。

2.  **[#733](https://github.com/nearai/ironclaw/issues/733) [CLOSED] Ngrok 僵尸进程 Bug**
    - **热度**：评论 5
    - **分析**：用户报告在使用 Ngrok 隧道时，子进程会变成僵尸进程 (`<defunct>`) 导致隧道掉线。这是一个影响远程部署的关键 Bug，目前已被关闭，推测已在 v0.18.0 中修复。

3.  **[#840](https://github.com/nearai/ironclaw/issues/840) [OPEN] WASM 工具版本不兼容**
    - **热度**：评论 4
    - **分析**：新用户在 `onboard` 阶段遇到 WIT 版本不匹配错误（工具编译版本 vs 主机支持版本）。这属于“开箱即用”体验的阻塞问题，目前尚未完全解决。

## 5. Bug 与稳定性

今日 Bug 报告主要集中在**集成接口 (Telegram/Google)** 和 **底层依赖 (WASM/Install)**。以下是按严重程度排序的列表：

### 🔴 严重
- **[#875](https://github.com/nearai/ironclaw/issues/875) [CLOSED] Onboard 依赖安装失败**：校验和不一致导致 GitHub 等默认工具无法安装。
- **[#1008](https://github.com/nearai/ironclaw/issues/1008) Installer 在旧版 Linux 失败**：glibc < 2.35 的系统无法安装。*(已有 Fix PR: #1013)*

### 🟠 中等 - Bug Bash 专题
今日进行了集中的功能测试，发现了大量逻辑 Bug：
- **[#994](https://github.com/nearai/ironclaw/issues/994) Routine 无法推送到 Telegram**：使用了错误的 `chat_id` 导致静默失败。
- **[#992](https://github.com/nearai/ironclaw/issues/992) Telegram 中发起 Google OAuth 失败**：生成的 URL 参数畸形 (`clientid` vs `client_id`)。
- **[#999](https://github.com/nearai/ironclaw/issues/999) Google Sheets 403 权限错误**：OAuth 完成后工具仍报错无身份。
- **[#1005](https://github.com/nearai/ironclaw/issues/1005) CI 自动审查发现的高危逻辑**：双重确认机制执行路径不一致。

### 🟡 低
- **[#1000](https://github.com/nearai/ironclaw/issues/1000) Rate Limiter 提示信息错误**：显示 "retry after None" 而非具体时间。
- **[#997](https://github.com/nearai/ironclaw/issues/997) UI 措辞误导**：正常的工具审批等待被标记为红色的 "Error"。

## 6. 功能请求与路线图信号

- **搜索能力增强**：[#548](https://github.com/nearai/ironclaw/issues/548) 请求在 Chat API 中原生支持 Web Search。鉴于目前已有 `web-search` WASM 工具，此请求旨在将其提升为核心 API 能力，极有可能在后续版本纳入。
- **模型支持扩展**：
    - **[#921](https://github.com/nearai/ironclaw/pull/921) / [#938](https://github.com/nearai/ironclaw/pull/938)**：社区正在积极贡献 **Z.AI (GLM-5)** 的 Provider 支持。这表明项目正致力于兼容更多非 OpenAI 系的国产/开源大模型。
- **更好的卸载体验**：[#919](https://github.com/nearai/ironclaw/issues/919) 社区开发者提供了非官方的卸载工具 **ByeByeClaw**，侧面反映官方可能缺少一键卸载/清理残留文件的功能。

## 7. 用户反馈摘要

从今日的 Issue 评论和 Bug Bash 结果中，我们可以提炼出以下用户画像：

1.  **"我只是想让它跑起来"**：用户对 `onboard` 阶段的依赖下载、版本兼容性（WIT mismatch）、glibc 版本限制极其敏感。任何阻碍首次启动的配置错误都会导致极高的挫败感。
2.  **"不要强制我登录"**：Issue #142 的激烈言辞表明，部分开源用户对于强制性的云认证持有强烈的抵触情绪，倾向于完全本地化、无跟踪的运行模式。
3.  **"Telegram 是关键入口"**：大量 Bug 来自 Telegram 通道（Pairing、OAuth、Routine 推送）。这显示 IronClaw 的重度用户非常依赖 Telegram 作为主要的交互界面，而不是 Web 端。
4.  **"Agent 的自我修正能力不足"**：在 Bug Bash 中，Agent 在遇到 Google Sheets 参数错误时，只是简单告知用户“有技术限制”，而未能尝试修正 JSON 格式重试。用户期望 Agent 能更聪明地处理工具调用异常。

## 8. 待处理积压

- **MCP 认证问题 ([#299](https://github.com/nearai/ironclaw/issues/299))**：用户反馈无法配置 Browserbase 等 MCP 服务器的认证。该 Issue 创建于 2 月下旬，目前仍为 Open 状态，评论数较多，建议优先处理。
- **Chat API 搜索集成 ([#548](https://github.com/nearai/ironclaw/issues/548))**：作为功能增强请求，已有 3 条评论支持，建议维护者将其纳入 Roadmap 以提升默认能力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-12)

这里是 **LobsterAI** (网易有道) 的开源项目日报。今日项目保持高频迭代，发布了包含多项界面优化的 v0.2.3 版本，社区对功能丰富度的需求日益增长，同时也暴露出稳定性方面的痛点。

---

### 1. 今日速览
- **活跃度评估：高**。项目今日发布了 **v0.2.3** 新版本，主要涉及 IM 集成修复和界面交互优化。
- **贡献者动态**：核心维护者 **@liugang519** 非常活跃，一日内合并了 4 个 PR，集中解决了钉钉、企微、QQ 的 OpenClaw 集成及优化问题。
- **社区互动**：用户反馈集中在特定 Bug（如字符串空格、Bash 执行延迟）和部署灵活性（Docker、Env 配置）上，显示用户正尝试将 LobsterAI 应用于更复杂的业务场景。

### 2. 版本发布
**Release: v0.2.3** [查看详情](https://github.com/netease-youdao/LobsterAI/releases/tag/v0.2.3)
本次更新主要聚焦于 IM 生态集成与用户体验优化，无重大破坏性变更，建议升级。

- **功能增强**：
  - **IM 集成**：修复了 IM 集成中的相关问题 ([PR #348](https://github.com/netease-youdao/LobsterAI/pull/348))。
  - **主界面交互**：聊天分页支持 ([PR #355](https://github.com/netease-youdao/LobsterAI/pull/355))；主界面附件现在支持多文件选择 ([PR #371](https://github.com/netease-youdao/LobsterAI/pull/371))。

### 3. 项目进展
今日共有 **5 个 PR 被合并**，显著增强了多平台支持能力和系统稳定性。

- **多平台机器人支持落地**：
  - 合并了钉钉 ([PR #378](https://github.com/netease-youdao/LobsterAI/pull/378))、QQ ([PR #381](https://github.com/netease-youdao/LobsterAI/pull/381)) 和企业微信 ([PR #383](https://github.com/netease-youdao/LobsterAI/pull/383)) 支持 OpenClaw 的实现。这意味着 LobsterAI 正式打通了国内主流 IM 渠道，向 "随处可用的 AI 助理" 迈出关键一步。
- **构建系统修复**：
  - 修复了 macOS 代码签名失败的问题 ([PR #387](https://github.com/netease-youdao/LobsterAI/pull/387))，解决了 `@electron/osx-sign` 的依赖报错，确保了 Mac 端发行的稳定性。

### 4. 社区热点
今日讨论最热烈的问题集中在**核心功能的可用性**上。

1.  **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344) - 字符串自动加空格 Bug**
    - **热度**：5 条评论，用户情绪激动（"急！！"）。
    - **分析**：用户反馈 AI 在处理 "中文+数字" 组合时会强制插入空格，且无法通过 Prompt 纠正。这直接阻碍了从竞品迁移过来的用户，被认为是 "严重 BUG"。
2.  **[Issue #350](https://github.com/netease-youdao/LobsterAI/issues/350) - Bash 执行延迟**
    - **热度**：3 条评论。
    - **分析**：本地瞬间完成的命令，LobsterAI 需等待数分钟。这表明 Agent 在处理 Shell 命令的流式输出或超时判断逻辑上存在性能瓶颈。
3.  **[Issue #382](https://github.com/netease-youdao/LobsterAI/issues/382) - 更新导致设置丢失**
    - **热度**：1 条评论。
    - **分析**：频繁更新下配置文件无法保留，严重影响升级体验，用户对此表示不满。

### 5. Bug 与稳定性
今日报告的问题主要涉及运行时错误和体验降级，按严重程度排序：

- **🔴 严重**:
  - **[Issue #385](https://github.com/netease-youdao/LobsterAI/issues/385)**: 对话报错，连接讯飞模型时消耗 Token 但无返回，进程退出码为 1。
  - **[Issue #366](https://github.com/netease-youdao/LobsterAI/issues/366)**: Gateway 启动失败，服务配置路径 (PATH) 未正确设置。
- **🟠 中等**:
  - **[Issue #357](https://github.com/netease-youdao/LobsterAI/issues/357)**: 读取图片时频繁卡死。
  - **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)**: 强制插入空格的格式化 Bug（目前无 Fix PR）。
- **🟡 轻微**:
  - **[Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186)**: 记忆能力差，即便配置了记忆功能效果也不明显（长期未解决）。

### 6. 功能请求与路线图信号
社区对 **企业级部署** 和 **高级 Agent 能力** 的呼声很高。

- **部署方式**：用户强烈请求 **Docker 容器化部署** ([Issue #386](https://github.com/netease-youdao/LobsterAI/issues/386)) 和 **Ubuntu 版本** ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273))。
- **高级特性**：
  - **Agent Teams**：请求更新 SDK 以支持多智能体协作 ([Issue #384](https://github.com/netease-youdao/LobsterAI/issues/384))。
  - **环境变量配置**：希望在 App 内直接配置环境变量，以支持 Skill 中的 API Key 读取 ([Issue #377](https://github.com/netease-youdao/LobsterAI/issues/377))。
- **待合并 PR 信号**：
  - [PR #388](https://github.com/netease-youdao/LobsterAI/pull/388) 建议更新 MiniMax 默认 URL，表明项目正在适配更多海外/国内模型供应商的变动。
  - [PR #376](https://github.com/netease-youdao/LobsterAI/pull/376) 提出的小时级定时任务，可能会在下一版本中纳入。

### 7. 用户反馈摘要
- **痛点**：**版本升级体验差**（设置重置）和 **Bash 执行效率低**是当前最大的槽点。
- **场景**：大量用户正在尝试将 LobsterAI 作为 **OpenClaw 的替代品** 进行深度办公集成（如读取图片、调用本地脚本），但对记忆能力和文本处理细节（如空格问题）感到失望。
- **满意点**：用户对 IM 集成的快速推进表示认可，认为这填补了工作流中的空白。

### 8. 待处理积压
以下重要 Issue 长期未获有效解决或响应，建议维护者优先关注：

- **[Issue #186](https://github.com/netease-youdao/LobsterAI/issues/186)**: 记忆能力差（创建于 2 月底，至今无解，严重影响长对话体验）。
- **[Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273)**: Linux 版本请求（状态虽为 Closed，但根据摘要可能仅是讨论关闭，实际需求未满足，需确认是否在路线图中）。
- **[Issue #344](https://github.com/netease-youdao/LobsterAI/issues/344)**: 字符串空格 Bug（影响核心输出质量，需尽快排期）。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

这里是 **TinyClaw (TinyAGI)** 项目 2026-03-12 的动态日报。

### 1. 今日速览
TinyClaw 今日处于**高活跃度、架构重构与品牌重塑**的关键阶段。项目发布 **v0.0.10** 版本，重点优化了后台守护进程与通讯稳定性。开发方面迎来重大突破，随着 **PR #186** 的合并，项目正式从单体架构迁移至 **npm workspaces monorepo**，为后续模块化开发奠定基础。值得注意的是，目前有一个关于 **品牌重命名为 "TinyAGI"** 的待处理 PR，这可能预示着项目定位的重大调整。社区方面对 UI 可视化与模型提供商支持表现出强烈需求。

### 2. 版本发布
**Release: v0.0.10** ([View Release](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.10))
本次更新主要针对运维体验与底层稳定性进行修复，无破坏性 API 变更，建议所有用户升级以获得更稳定的 Telegram 连接体验。
- **运维简化**：移除了 tmux 会话（daemon.sh）中独立的日志窗格，简化了界面。
- **路径检测**：简化了 `heartbeat-cron.sh` 中的 `TINYCLAW_HOME` 检测逻辑，减少环境配置错误。
- **稳定性提升**：将 Telegram 轮询看门狗的超时时间从 2 分钟延长至 5 分钟，有效防止网络波动导致的误判掉线。
- **类型系统**：将 Task/TaskStatus 类型定义进行了本地化迁移。

### 3. 项目进展
今日共有 6 个 PR 合并，推进了多项核心功能与架构优化：
- **架构重构**：**PR #186** 成功将单体代码库重构为 npm workspaces monorepo，并引入 SQLite 替代了 Redis/BullMQ 作为队列存储。这大幅降低了部署依赖门槛。
- **用户体验 (UX)**：**PR #182** 实现了 Kanban 看板的自动化——任务拖入 "In Progress" 即自动触发 Agent 执行，无需手动点击发送，工作流更顺畅。
- **前端优化**：**PR #183** 移除了冗余的 `message_received` 事件，简化了 TinyOffice 聊天界面；**PR #185** 将 CLI 交互提示全面迁移至 `@clack/prompts`，提升了终端交互的美观度与可维护性。
- **生态扩展**：**PR #143** 新增了对 **Avian AI** 提供商的支持，丰富了模型选择。
- **实时通讯**：**PR #190** 修复了团队协作通讯机制，实现了响应流的实时推送。

### 4. 社区热点
- **UI 可视化与控制**：Issue **#66** ([Link](https://github.com/TinyAGI/tinyclaw/issues/66)) 引起了关于 "Mission Control" 风格 UI 的讨论，用户希望能像 Claude-trace 或 Azure Phoenix 那样可视化 Agent 的推理轨迹、工具调用和记忆池。这表明用户对**可观测性** 有极高诉求。
- **本地模型支持**：Issue **#111** ([Link](https://github.com/TinyAGI/tinyclaw/issues/111)) 再次被提及，用户强烈希望通过 Ollama 支持本地模型，以降低成本并保护隐私。
- **Web 端控制台**：新开启的 Issue **#194** ([Link](https://github.com/TinyAGI/tinyclaw/issues/194)) 和 **#193** ([Link](https://github.com/TinyAGI/tinyclaw/issues/193)) 提出了 TinyOffice 的改进方向，特别是希望增加 Web 端的运行时控制面板和首次启动引导，减少对 CLI 的依赖。

### 5. Bug 与稳定性
今日关闭了大量积压 Bug，整体稳定性呈上升趋势：
- **通讯延迟/无响应**：Issue **#91** ([Link](https://github.com/TinyAGI/tinyclaw/issues/91)) 报告 Agent 收到消息后只显示输入状态但无响应。结合 v0.0.10 的 Telegram watchdog 超时调整和 PR #190 的流式修复，推测该问题已得到针对性解决。
- **进程清理**：Issue **#63** ([Link](https://github.com/TinyAGI/tinyclaw/issues/63)) 指出的关机时定时器未清理问题已关闭，可能已随重构修复。
- **工具生态**：Issue **#189** ([Link](https://github.com/TinyAGI/tinyclaw/issues/189)) 引入了一个社区开发的 "ByeByeClaw" 卸载工具，侧面反映了用户对干净卸载/环境重置的需求。

### 6. 功能请求与路线图信号
- **品牌重塑信号**：待合并的 **PR #191** ([Link](https://github.com/TinyAGI/tinyclaw/pull/191)) 提议将项目重命名为 `TinyAGI`。虽然状态为 Open，但结合今日架构拆分的动作，这可能是在为更通用的 AGI 智能体平台转型做准备。
- **多云服务商支持**：Issues **#41** ([Link](https://github.com/TinyAGI/tinyclaw/issues/41)) 和 **#103** ([Link](https://github.com/TinyAGI/tinyclaw/issues/103)) 分别请求支持 OpenAI Compatible Endpoint 和 GLM 4.7。鉴于 PR #143 (Avian) 已合并，预计后续版本将快速吸纳更多标准 API 兼容的提供商。

### 7. 用户反馈摘要
- **痛点**：用户普遍反映目前的**初始配置过于依赖 CLI 和手动编辑配置文件**，希望能有 Web 端的一键配置体验 (Issue #193)。
- **满意度**：对引入 SQLite 替代 Redis 的变更持积极态度（PR 摘要反馈），这解决了此前部署复杂的问题。
- **场景**：用户不仅在单一终端使用，更倾向于构建**多 Agent 团队协作** (Issue #66, #87)，并希望有 Zellij/Tmux 的友好集成以监控 Agent 状态。

### 8. 待处理积压
- **PR #191 (Rebrand to TinyAGI)** ([Link](https://github.com/TinyAGI/tinyclaw/pull/191))：此 PR 涉及包名、环境变量、CLI 命令的全量替换，建议维护者尽快 Review 并明确迁移时间表，以免后续功能开发产生合并冲突。
- **Issue #66 (UI Traceability)** ([Link](https://github.com/TinyAGI/tinyclaw/issues/66))：作为高赞 Issue，目前尚未有明确的 UI 实现计划回应，建议纳入中长期的 Roadmap。
- **Issue #111 (Ollama Support)** ([Link](https://github.com/TinyAGI/tinyclaw/issues/111))：本地模型支持是开源项目的核心竞争力之一，建议优先排期。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是基于您提供的 GitHub 数据生成的 **Moltis** 项目 2026-03-12 动态日报。

---

# Moltis 项目动态日报 (2026-03-12)

## 1. 今日速览
Moltis 项目今日呈现**极高的维护活跃度与功能迭代速度**。尽管没有发布新的官方 Release 版本，但项目核心贡献者（主要是 @penso）在 24 小时内发起了至少 15 个以上的功能性修复与改进 PR，显示出团队正在为下一个重要版本进行密集的代码冲刺。社区方面，Issues 交互量大（32 条更新），其中 **Bug 修复** 是今日的主旋律，共有 23 个 Issue 被关闭，主要集中在 Docker 部署、本地模型输出处理和 Web 端用户体验上。整体来看，项目处于**快速修正与稳定期**，建议关注即将到来的版本更新。

## 2. 版本发布
*   **无新版本发布**。
    *   *分析*：虽然代码库极其活跃，但尚无正式 Tag 发布。鉴于今日大量 PR 针对 v0.x 版本中的已知问题（如 Docker 嵌套挂载、Embedding 路径错误），预计这些修复将在近期汇总为一个稳定的 Patch 版本。

## 3. 项目进展
今日共有 **5 个 PR 被合并/关闭**，显著提升了系统的稳定性与兼容性：

*   **修复本地模型输出污染** ([PR #397](https://github.com/moltis-org/moltis/pull/397)): 解决了使用 MLX 后端时，原始特殊 token（如 `<|im_end|>`）泄露到用户可见输出的问题，显著提升了本地模型的聊天体验。
*   **修复频道会话压缩错误** ([PR #399](https://github.com/moltis-org/moltis/pull/399)): 修正了 Discord 等频道的自动压缩机制错误地压缩 "main" 会话而非当前频道会话的逻辑漏洞。
*   **配置兼容性修复** ([PR #400](https://github.com/moltis-org/moltis/pull/400)): 增加了对旧版 Memory Embedding 配置键的兼容，减少了用户升级配置文件时的阻力。
*   **Docker 部署支持** ([PR #401](https://github.com/moltis-org/moltis/pull/401)): 引入了通用 Provider 环境变量引导，简化了 Docker 下的首次部署流程。
*   **Web 端体验修复** ([PR #406](https://github.com/moltis-org/moltis/pull/406)): 优化了引导页面的密码自动填充提示，解决了浏览器无法正确保存密码的问题。

## 4. 社区热点
今日社区讨论主要集中在协议扩展与部署疑难上：

*   **协议扩展提案** ([Issue #391](https://github.com/moltis-org/moltis/issues/391)): 社区成员 @lijunle-bot 提出了 "Node-Advertised Tools" 的 RFC。该提案旨在解决远程节点只能通过 `exec` 运行命令的限制，允许 Agent 直接调用远程节点声明的工具。这是一个**高价值的功能请求**，可能显著增强 Moltis 的分布式能力。
*   **Docker 嵌套挂载问题** ([Issue #102](https://github.com/moltis-org/moltis/issues/102)): 该问题获得 4 个点赞，引发了关于 Docker-in-Docker 环境下工作区路径映射的热烈讨论，反映了用户在复杂部署环境下的强需求。
*   **Webhook 功能需求** ([Issue #272](https://github.com/moltis-org/moltis/issues/272)): 用户 @linax777 再次激活了关于 Webhook 支持的讨论，表明集成外部自动化系统是用户的普遍痛点。

## 5. Bug 与稳定性
今日是“大扫除”日，大量长期存在的 Bug 被修复并关闭：

*   **[严重] Docker 环境下的路径映射** ([Issue #102](https://github.com/moltis-org/moltis/issues/102)) [已关闭]: 导致 Docker 容器内工作区为空的严重 Bug 已通过相关修复解决。
*   **[中等] 登录验证失败** ([Issue #129](https://github.com/moltis-org/moltis/issues/129)) [已关闭]: Docker 设置后无法使用密码登录的问题已修复。
*   **[中等] Cron 与 Heartbeat 激活失败** ([Issue #181](https://github.com/moltis-org/moltis/issues/181)) [已关闭]: 这是一个评论数较高（8条）的遗留 Bug，今日已得到最终处理。
*   **[待解决] 网络/代理启动失败** ([Issue #407](https://github.com/moltis-org/moltis/issues/407)) [Open]: 有用户报告在启动时 Network-filter Proxy 立即失败，导致 web_search 不可用，目前尚无明确修复方案，需关注。

## 6. 功能请求与路线图信号
*   **远程 MCP 安全配置** ([PR #416](https://github.com/moltis-org/moltis/pull/416)): 正在处理中。支持 MCP URL 的密钥管理，这将极大方便企业级部署的安全性。
*   **Vulkan 支持** ([PR #408](https://github.com/moltis-org/moltis/pull/408)): 正在处理中。引入 Vulkan GGUF 支持，这将为非 NVIDIA/AMD 显卡用户（如 Intel Arc 或特定集成显卡）提供本地推理能力。
*   **Agent 侧挂载文件** ([PR #413](https://github.com/moltis-org/moltis/pull/413)): 正在处理中。允许 Agent 安全地写入技能文件，这可能是未来 Agent 自我进化/自我修改技能的基础功能。

## 7. 用户反馈摘要
*   **部署痛点**: 用户在 NixOS (`#160`) 和 Docker (`#129`, `#102`) 环境下的编译与运行依然存在挑战，尽管核心团队正在快速回应，但部署文档和兼容性仍是主要门槛。
*   **UI/UX 反馈**: 新手引导流程中的密码管理 (`#414`, `#183`) 和 Vault 解锁提示 (`#344`) 被指出体验不佳，容易让新用户困惑。
*   **性能与集成**: 用户对第三方 LLM 提供商（如 LMStudio, OpenAI 兼容端点）的支持呼声很高 (`#114`)，表明用户希望更灵活地选择模型后端。

## 8. 待处理积压
*   **新提交的 Bug**: 今日新开的 Issue #414 (z.ai 网络错误) 和 #407 (Proxy 启动失败) 尚未得到维护者的回复，建议优先排查是否为回归问题。
*   **长期功能请求**: Matrix 支持 ([Issue #233](https://github.com/moltis-org/moltis/issues/233)) 和 Webhook 功能 ([Issue #272](https://github.com/moltis-org/moltis/issues/272)) 仍在 Open 状态，且具有一定热度，建议维护者在路线图中予以考虑。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这里是 **CoPaw** 项目 2026-03-12 的动态日报。

### 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，社区互动频繁（Issues 评论数高），且核心团队与贡献者正在密集处理 v0.0.6 版本后的反馈。虽然今日无正式 Release 发布，但 **v0.0.7 的发布准备工作已在进行中**（见 PR #1322）。目前项目处于**快速迭代修复期**，主要精力集中在解决 0.0.6 版本引出的飞书集成问题、工具调用参数错误以及安装脚本的兼容性。整体来看，项目正向着更完善的后端架构和更丰富的 Channel（渠道）支持迈进，但用户升级过程中的版本显示和配置兼容性问题仍需关注。

### 2. 版本发布
*   **正式发布**: 今日无新版本发布（Latest Release 仍为旧版）。
*   **开发进度**: PR #1322 已提交，正在将版本 bump 至 **v0.0.7** 并更新 Release Note。预计近期将发布新版本以修复近期集中的 Bug。

### 3. 项目进展
今日共有 **25 个 PR 被合并**，推进了多项关键功能与修复：
*   **新版本准备**: PR #1322 启动了 v0.0.7 的发布流程。
*   **核心功能增强**:
    *   **CLI 升级**: PR #1278 引入 `copaw update` 命令，解决用户手动 pip 升级繁琐的问题。
    *   **邮件技能**: PR #1272 合并，新增 Email Skill。
    *   **时区支持**: PR #1321 为定时任务（Crons）增加了时区配置功能。
    *   **Docker 部署**: PR #1320 添加了 `docker-compose.yml`，简化容器化部署。
*   **前端与交互优化**:
    *   Chat 界面新增模型选择功能 (PR #1140)。
    *   修复模型选择器的 UI 样式问题 (PR #1309)。
    *   Workspace 支持拖拽排序 (PR #1121)。
    *   修复 Chat 国际化路由参数 (PR #1221)。
*   **Bug 修复**:
    *   修复了 API 调用导致子组件异常更新的问题 (PR #1242)。
    *   修复了聊天请求详情的重复处理逻辑 (PR #1307)。
    *   禁用了工具调用中间结果的解析以避免错误 (PR #1201)。

### 4. 社区热点
今日讨论最活跃的 Issue 集中在**集成报错**与**特定渠道（飞书）的功能异常**：
*   **[Question] Chat meet browser_use error (#1163)**: 评论数 6。用户在使用 Chat 模式结合 `browser_use` 时遇到报错，显示函数缺失。这反映了用户对 CoPaw 作为通用 Agent 框架进行复杂工具链组合使用的尝试。
*   **[Question] 硅基流动添加模型连接失败 (#1292)**: 评论数 5。用户在 v0.0.6 中配置第三方模型（硅基流动）时遇到连接测试失败。体现了社区对兼容国内主流模型平台的强需求。
*   **[Bug] 飞书频道重复消息 (#1100)**: 评论数 5。v0.0.6 版本在飞书渠道出现“重复回复”旧问题的严重 Bug，严重影响飞书用户体验。
*   **[Bug] 飞书压缩指令失效 (#1243)**: 评论数 4。用户反馈 `/compact` 等指令在飞书 Channel 中失效，导致上下文无法清理，Token 消耗增加。

### 5. Bug 与稳定性
今日报告的 Bug 较为集中，部分涉及核心工具链的不可用：
*   **严重 - 工具调用完全失效 (#1313)**:
    *   现象：所有需要参数的工具（如 `execute_shell_command`, `read_file`）均报错 `missing required positional argument`。
    *   状态：**OPEN**。此问题可能导致 Agent 基本不可用，需优先排查是否为近期 PR 引起的回归。
*   **严重 - 飞书频道重复回复 (#1100) & 压缩失效 (#1243)**:
    *   现象：飞书渠道出现消息重复发送，且上下文压缩功能失效。
    *   状态：**OPEN**。这是 v0.0.6 版本在飞书渠道的显著回归问题。
*   **中等 - 版本显示不一致 (#1315)**:
    *   现象：后端升级至 0.0.6.post1，Web UI 仍显示 v0.0.5b1。
    *   状态：**OPEN**。可能由前端缓存或静态资源未更新导致。
*   **中等 - MacOS 安装脚本报错 (#1291, #1302)**:
    *   现象：官方脚本在 MacOS 上报 `info: command not found`。
    *   状态：**OPEN**。影响新用户首次安装体验。

### 6. 功能请求与路线图信号
*   **飞书官方插件支持 (#1297)**: 用户希望 CoPaw 能集成飞书官方开源的 `openclaw-lark` 插件，以支持云文档读写。目前已有相关 PR (#1030) 正在改进飞书消息格式，但官方插件集成尚未明确排期。
*   **Cline API 兼容性 (#1287)**: 开发者尝试接入 Cline API 失败。考虑到 Cline 在 VS Code 生态的流行，支持其 API 格式或协议可能是一个有价值的方向。
*   **多设备记忆同步 (#1268)**: 用户提出记忆配置同步的需求（已关闭，可能在看板上被标记为未来规划）。
*   **判断依据**: 结合 PR #1272 (Email Skill) 和 PR #1267 (企业微信长链接)，可以看出项目正在积极扩展 **Skills（技能库）** 和 **Channels（通讯渠道）** 的生态边界。

### 7. 用户反馈摘要
*   **痛点**: 飞书用户对 **v0.0.6 版本的不稳定性**（重复消息、压缩失效）反馈强烈；部分用户在集成**非 OpenAI 模型**（如硅基流动、Ollama）时仍面临配置难题。
*   **场景**: 用户不仅将 CoPaw 用作聊天机器人，还在尝试将其作为**自动化工具**（Browser use, Shell execute, File I/O），一旦工具调用出错（如 #1313），体验断层严重。
*   **满意度**: 尽管存在 Bug，用户对“一键安装”和“多模型支持”的期望值很高，社区也在积极贡献代码（如 Docker-compose, CLI update），显示出对项目前景的信心。

### 8. 待处理积压
*   **高优先级**: Issue #1313 (工具参数缺失) 和 #1100 (飞书重复消息) 需核心团队立即介入，这直接关系到系统的可用性。
*   **安装体验**: Issue #1291/#1302 (MacOS 安装报错) 虽然有简单的 workaround，但作为“门面”问题，建议尽快修复脚本。
*   **长期关注**: Issue #411 (Channel 用户白名单) 和 #1288 (飞书手动创建新对话) 涉及权限管理和会话管理的深层逻辑，建议纳入 Roadmap 讨论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

这里是 **ZeptoClaw** 项目 2026-03-12 的动态日报。

### 1. 今日速览
ZeptoClaw 项目今日迎来了 **v0.7.5 和 v0.7.6 两个重要版本**的发布，显示出项目正处于高频迭代与快速交付阶段。过去 24 小时内项目活跃度极高，共处理了 **13 个 PR（全部合并）** 和 **14 个 Issue（关闭 13 个）**，表明维护者 @qhkm 正在高效清理积压任务并推进新功能。本次更新的核心重点在于**安全性加固**（文件系统与入站验证）和**CLI 交互体验优化**，同时完成了一系列依赖库的重大版本升级（如 jsonwebtoken v10）。

### 2. 版本发布
今日连续发布了 v0.7.5 和 v0.7.6，主要更新如下：

*   **v0.7.6** (Latest)
    *   **主要更新**：
        *   **CLI 增强**：引入了交互模式下的斜杠命令自动补全功能。
        *   **安全修复**：加固了入站认证和文件系统边界检查。
        *   **体验优化**：修复了 Claude 订阅 Token 警告重复打印 3 次的问题。
    *   **详细链接**：[Release v0.7.6](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.6)

*   **v0.7.5**
    *   **主要更新**：
        *   **CLI 工具**：新增了 `config reset`（重置配置）和 `zeptoclaw uninstall`（卸载）命令。
        *   **兼容性**：增加了模型提供商兼容性验证功能。
    *   **详细链接**：[Release v0.7.5](https://github.com/qhkm/zeptoclaw/releases/tag/v0.7.5)

### 3. 项目进展
今日合并了多个关键 PR，显著提升了项目的安全性与易用性：

*   **安全性与基础设施重构**：
    *   **[PR #324](https://github.com/qhkm/zeptoclaw/pull/324) fix: harden inbound auth and filesystem boundaries**：今日最重要的合并，重构了入站 Webhook 认证逻辑，并加强了文件写入和挂载验证以防止符号链接和 TOCTOU 攻击。同时开始弃用基于 Telegram 用户名的 Allowlist，转向更安全的 ID 验证。
    *   **[PR #296](https://github.com/qhkm/zeptoclaw/pull/296) chore(deps): bump jsonwebtoken 9.3.1 → 10.3.0**：完成了 JWT 库的重大版本迁移，解决了 [Issue #185](https://github.com/qhkm/zeptoclaw/issues/185) 中提到的破坏性 API 变更问题。

*   **功能增强**：
    *   **[PR #323](https://github.com/qhkm/zeptoclaw/pull/323) feat: slash command suggestions**：极大提升了 CLI 交互体验，支持通过 Tab 键补全 `/model`、`/persona` 等 12 个命令。
    *   **[PR #316](https://github.com/qhkm/zeptoclaw/pull/316) feat: Ollama cloud model support**：响应了社区对云端模型支持的需求，允许 Ollama 和 vLLM 在无 API Key（本地实例）或带 Key（云端）的情况下灵活运行。

### 4. 社区热点
*   **Ollama 云端支持 ([Issue #284](https://github.com/qhkm/zeptoclaw/issues/284))**：
    *   由用户 @rexzhang360 提出后迅速得到响应。用户希望支持云端模型而非仅本地，维护者通过 [PR #316](https://github.com/qhkm/zeptoclaw/pull/316) 实现了无密钥认证逻辑，解决了用户的配置痛点。
*   **安全性讨论**：
    *   围绕 [Issue #185](https://github.com/qhkm/zeptoclaw/issues/185) (JWT 升级) 和 [Issue #317](https://github.com/qhkm/zeptoclaw/issues/317) (WhatsApp Webhook 签名验证) 的讨论推动了核心安全模块的升级。特别是 [PR #324](https://github.com/qhkm/zeptoclaw/pull/324) 的合并，标志着项目在文件系统和 Webhook 验证方面达到了生产级的安全强度。

### 5. Bug 与稳定性
今日报告并修复了大量 Bug，主要集中在**安全漏洞修补**和**配置逻辑**：

*   **P1-Critical (严重)**：
    *   **文件系统路径加固 ([Issue #319](https://github.com/qhkm/zeptoclaw/issues/319))**：修复了工作区写入路径中的验证缺口，防止符号链接和硬链接别名风险。**已通过 PR #324 修复。**
    *   **Telegram 用户名白名单弃用 ([Issue #321](https://github.com/qhkm/zeptoclaw/issues/321))**：解决了因 Telegram 用户名重新分配可能导致的身份漂移风险。**已通过 PR #324 修复。**

*   **P2-High (高优)**：
    *   **Unix 文件系统读取/写入加固 ([Issue #329](https://github.com/qhkm/zeptoclaw/issues/329), [Issue #330](https://github.com/qhkm/zeptoclaw/issues/330))**：将基于路径的操作替换为基于 `dirfd` 的原子操作，防止 TOCTOU 竞争条件。**已修复。**
    *   **WhatsApp Cloud Webhook 签名验证 ([Issue #317](https://github.com/qhkm/zeptoclaw/issues/317))**：增加了 HMAC-SHA256 签名验证以防止伪造请求。**已修复。**

### 6. 功能请求与路线图信号
*   **审计追踪**：
    *   [Issue #221](https://github.com/qhkm/zeptoclaw/issues/221) 提议为工具执行引入 Merkle 哈希链审计日志，以确保不可篡改性。该 Issue 目前状态为 Open，这表明项目可能在未来版本中加强 Agent 执行过程的可观测性与合规性功能。
*   **交互体验**：
    *   随着 [PR #323](https://github.com/qhkm/zeptoclaw/pull/323) 的合并，CLI 交互模式变得更强，未来可能会在此基础上增加更多交互式引导功能。

### 7. 用户反馈摘要
*   **配置灵活性**：用户 @rexzhang360 反映在配置 Ollama 云模型时遇到困难，主要痛点是强制要求 API Key 的逻辑。这表明用户希望工具能更好地适配“本地无认证”和“云端认证”混合的复杂环境，这一需求已在今日得到满足。
*   **安装与维护**：v0.7.5 增加的 `uninstall` 和 `config reset` 命令暗示了此前用户在环境清理和重置方面存在不便，维护者正致力于降低试错成本。

### 8. 待处理积压
*   **长期规划功能**：[Issue #221](https://github.com/qhkm/zeptoclaw/issues/221) (Merkle 哈希链审计) 仍处于 Open 状态。鉴于今日对文件系统和认证安全性的大规模重构，建议维护者在下一阶段考虑合并此类审计功能，以构建“安全 + 合规”的完整闭环。
*   **依赖更新**：Dependabot 产生了大量依赖更新 PR，今日已清理完毕，无积压。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-12)

**分析师：** AI Open Source Analyst
**项目：** [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. 今日速览
EasyClaw 项目今日保持高度活跃，**24小时内连续发布了 2 个版本 (v1.6.6, v1.6.7)**，显示出团队正在加速迭代，重点解决 macOS 平台的部署问题。社区方面，虽然有一个关于核心功能（OpenAI OAuth）的 Bug 报告，但同时也有外部贡献者提交了 macOS 客户端的 UI 优化 PR。整体来看，项目处于**快速修复与功能微调并行的活跃期**，但在认证稳定性和 macOS 签名兼容性上存在明显挑战。

### 2. 版本发布
今日项目连续发布了两个新版本，主要内容聚焦于 macOS 平台的兼容性：

*   **v1.6.7** ([Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7))
*   **v1.6.6** ([Release Notes](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.6))

**更新重点：**
两个版本的 Release Notes 均重点解决了 **macOS Gatekeeper 拦截问题**。由于应用未经公证，用户在首次启动时会遇到 "'EasyClaw' is damaged and can't be opened" 的错误提示。
**用户行动指南：**
这不是文件损坏，而是 macOS 安全机制所致。用户需通过 **Terminal (终端)** 执行移除隔离属性命令（通常为 `xattr -cr /Applications/EasyClaw.app`，具体请参考 Release 详情）来允许运行。

### 3. 项目进展
今日代码层面主要体现为待合并的功能修复，暂无已合并的重大 PR。

*   **[UI/UX] macOS 客户端图标优化**：PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15)
    *   **内容：** 贡献者 @mylinkedai 提交了针对 macOS Dock 栏和系统托盘应用图标的修复。
    *   **进展：** 该 PR 目前状态为 **Open**，正在等待 Review。一旦合并，将显著提升 macOS 用户的原生体验，解决图标可能显示异常或未适配系统规范的问题。

### 4. 社区热点
今日最受关注的讨论为 OpenAI 认证失败的问题：

*   **Issue [#16](https://github.com/gaoyangz77/easyclaw/issues/16): OpenAI Oauth好像有问题**
    *   **热度数据：** 创建于昨日，今日持续活跃（评论 1 条）。
    *   **讨论焦点：** 用户报告在使用 OpenAI 功能时遇到 OAuth 认证错误。值得注意的是，用户反馈该问题具有**普遍性**，在“便携版”和“安装版”中均能复现，且附带了详细的错误截图。
    *   **诉求：** 用户无法正常连接 OpenAI 服务，这直接影响了核心 AI 功能的使用，急需官方确认是 API 变更、Token 过期还是客户端缺陷。

### 5. Bug 与稳定性
今日报告的 Bug 集中在连接性与系统兼容性上：

*   **🔴 严重: OpenAI OAuth 认证全线失败**
    *   **链接：** [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16)
    *   **详情：** 用户反馈无论使用何种安装包形式，均无法通过 OAuth 验证。
    *   **状态：** **尚未修复**。目前没有关联的 Fix PR，需官方介入排查。

*   **🟡 一般: macOS 提示“文件已损坏”**
    *   **链接：** [Release v1.6.7](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.6.7)
    *   **详情：** 缺乏开发者签名导致的应用启动受阻。
    *   **状态：** **已有临时方案**。官方在 Release Notes 中提供了 Terminal 命令作为 Workaround（绕过方法），但这对于非技术用户仍有一定门槛。

### 6. 功能请求与路线图信号
*   **macOS 体验优化信号：** PR [#15](https://github.com/gaoyangz77/easyclaw/pull/15) 表明项目正在打磨桌面端的细节体验。尽管不是新功能，但这暗示了项目近期的一个重点方向是**提升多平台（特别是 macOS）的原生适配质量**。

### 7. 用户反馈摘要
*   **痛点：** OpenAI 登录受阻是目前最大的痛点，直接导致工具不可用。
*   **场景：** 用户尝试通过便携版和安装版在不同环境下使用 AI 功能，但被统一的认证错误拦截。
*   **反馈：** 对于 macOS 用户，频繁的“已损坏”提示虽然通过文档得到了解释，但仍属于负面的初体验反馈。

### 8. 待处理积压
建议维护者优先处理以下事项以保持项目健康度：

1.  **🔴 紧急响应：** [Issue #16](https://github.com/gaoyangz77/easyclaw/issues/16) (OpenAI OAuth 错误)。鉴于该问题阻断了核心功能且覆盖所有版本，建议立即排查是否为第三方 API 变更或客户端鉴权逻辑错误。
2.  **🟡 代码审查：** [PR #15](https://github.com/gaoyangz77/easyclaw/pull/15) (macOS Icon Fix)。该 PR 已 Open 一天，建议尽快 Review 并合并，以便在后续版本中改善 Mac 用户观感。

</details>