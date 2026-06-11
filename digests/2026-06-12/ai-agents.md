# OpenClaw 生态日报 2026-06-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-11 22:31 UTC

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

# 📊 OpenClaw 项目动态日报 (2026-06-12)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 分析师：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

- **高活跃度与高积压并存**：过去 24 小时内 Issues 和 PR 更新双双达到 500 条上限，项目处于极度活跃状态，但 PR 吞吐量明显不足（待合并 385 vs 已合并/关闭 115），存在严重的 **PR 拥堵风险**。
- **无新版本发布**：截至今日，项目并未推送任何新的 Release。大量核心 Bug（如 Session 状态混乱、内存泄漏、Cron 任务失败）的修复 PR 仍停留在 `OPEN` 状态，**技术债正在累积**。
- **多智能体编排与安全性成焦点**：社区高度关注多智能体（Multi-agent）并发调度、上下文污染及凭证安全等核心架构问题，Issue 讨论热烈。
- **生态与周边集成加速**：虽然核心框架更新停滞，但生态侧 PR 活跃，增加了对 MS Teams 语音、SerpApi、Fireworks 新模型等的支持，展现了项目强大的外部扩展性。

---

## 2. 版本发布

**今日无新版本发布。**
尽管存在多个高优先级（P1）的回归 Bug，但由于核心修复 PR 尚未合并，目前仍未推送稳定版更新。建议依赖该项目的生产环境持续关注主干分支合并进展。

---

## 3. 项目进展

今日项目整体处于 **“社区火热输入，核心待合并排期”** 的阶段。部分重要的已关闭或活跃 PR 展现了项目近期的发力点：

- **Agent 智能体与模型支持**：
  - [PR #88748](https://github.com/openclaw/openclaw/pull/88748) (OPEN)：桥接 Google Gemini OAuth 到 CLI runtime，改善底层模型认证稳定性。
  - [PR #92217](https://github.com/openclaw/openclaw/pull/92217) (OPEN)：为 Fireworks 接入 DeepSeek V4 Pro, GLM-5.1 等最新前沿模型，丰富模型生态。
- **消息通道与体验优化**：
  - [PR #92081](https://github.com/openclaw/openclaw/pull/92081) (OPEN)：引入重磅的 **MS Teams 语音 (CVI) + 聊天** 企业级集成。
  - [PR #83988](https://github.com/openclaw/openclaw/pull/83988) (OPEN)：修复 Telegram TTS 语音消息“文本闪烁”的体验问题。
  - [PR #88815](https://github.com/openclaw/openclaw/pull/88815) (OPEN)：引入跨频道的 Session Pinning（会话固定）与消息镜像机制。
- **企业级安全与状态管理**：
  - [PR #77987](https://github.com/openclaw/openclaw/pull/77987) (OPEN)：修复网关层面遭遇唯一 IP 洪水攻击时的认证限流内存泄漏问题。

---

## 4. 社区热点

今日讨论最热烈的问题集中在**跨平台客户端需求**与**多智能体上下文管理**：

1. ⭐ **跨平台客户端期待极高**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) (👍79, 评论 109)
   - **诉求**：官方已有 macOS/iOS/Android 客户端，但用户对 **Linux 和 Windows 原生应用** 的呼声极高。
   - **分析**：该 issue 获得了压倒性的点赞数，表明 OpenClaw 的开发者/极客用户群对脱离浏览器/ Docker 的原生桌面端体验有强烈刚需。
2. 🤖 **Agent 上下文错乱问题**：[Issue #32296](https://github.com/openclaw/openclaw/issues/32296) (评论 15)
   - **诉求**：智能体会回复“上一条”消息，导致对话完全错位，即所谓的“会话上下文混淆”。
3. ⏱️ **Cron 定时任务脆弱性**：[Issue #85888](https://github.com/openclaw/openclaw/issues/85888) & [Issue #91363](https://github.com/openclaw/openclaw/issues/91363) (评论 12/6)
   - **诉求**：在清晨高峰期或隔离模式下，Cron 定时任务极易触发 MiniMax 503 错误或直接超时失败，但手动触发却成功。反映出 OpenClaw 的异步调度重试机制需进一步优化。
4. 🔒 **API 密钥保护缺失**：[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (评论 13)
   - **诉求**：用户强烈要求增加 **“Masked Secrets（掩码密钥）”** 功能，防止 Agent 被提示词注入攻击后主动泄露本地 `.env` 中的明文 API Key。

---

## 5. Bug 与稳定性

今日暴露了大量影响核心稳定性的 Bug（尤其是 P1 级别），需引起维护团队高度重视：

### 🔴 严重 P1 级问题
- **多智能体并发覆盖与锁失效**：[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)
  - 现象：多智能体并发执行时，配置文件互相覆盖，Session Lock 频繁失效，子任务脱离管控。
- **Write 工具导致数据静默丢失**：[Issue #40001](https://github.com/openclaw/openclaw/issues/40001)
  - 现象：Write 工具缺乏 Append 追加模式，多个 Cron 任务执行时会将共享记忆文件直接**覆盖为空白**。
- **环境变量注入失败（回归）**：[Issue #31583](https://github.com/openclaw/openclaw/issues/31583)
  - 现象：最新版中 `exec` 工具无法继承技能特定的 `env` 环境变量，导致依赖密码本执行的自动化流程全面中断。
- **Gemini 模型交互崩溃**：[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)
  - 现象：更新至 2026.3.2 后，调用 `google-vertex/gemini-3.1-pro` 直接报错 `Cannot convert undefined or null to object`。
- **Telegram 心跳阻塞通道**：[Issue #40611](https://github.com/openclaw/openclaw/issues/40611)
  - 现象：心跳重试机制过于激进，在活跃对话期间直接阻塞了 Telegram 消息的接收。

### 🟡 核心组件 P2 级问题
- **UI 界面 HTTPS 限制**：[Issue #32473](https://github.com/openclaw/openclaw/issues/32473) - 控制台强制要求安全上下文，导致 VPS/Docker 部署无法打开 UI。
- **沙箱文件权限只读**：[Issue #37634](https://github.com/openclaw/openclaw/issues/37634) - 设定隔离沙箱后，内部路径被错误挂载为只读，无法写入。

---

## 6. 功能请求与路线图信号

从最近的 PR 动向和 Issue 讨论，可以看出项目近期的演进方向：

1. **多智能体与企业级工作流闭环**：
   - 请求：[Issue #22358](https://github.com/openclaw/openclaw/issues/22358) 提出“子智能体完成后的扩展钩子”，以支持自动化轨迹记录。
   - 请求：[Issue #22438](https://github.com/openclaw/openclaw/issues/22438) 提出按需加载的“分层 Bootstrap 文件加载”，以大幅节省 Token 消耗。
   - **路线图信号**：从 [PR #90872](https://github.com/openclaw/openclaw/pull/90872) 和 [PR #92274](https://github.com/openclaw/openclaw/pull/92274) 看出，核心团队正在优化 Agent 生命周期的精细化控制和错误处理。
2. **安全与隐私隔离架构升级**：
   - 密文管理、网络隔离和细粒度权限控制是明确的需求。
   - **路线图信号**：[PR #91800](https://github.com/openclaw/openclaw/pull/91800) 正在引入外部内容来源的策略钩子，这为 [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) 提出的“掩码密钥”奠定了底层基础。
3. **开发工具与诊断能力**：
   - [Issue #39992](https://github.com/openclaw/openclaw/issues/39992) 建议增强 `openclaw doctor` 命令的诊断能力。[PR #91617](https://github.com/openclaw/openclaw/pull/91617) 已开始着手增加 SQLite 性能基准测试套件。

---

## 7. 用户反馈摘要

从原生的 Issue 描述和标签中，提炼出用户的几个核心情绪与痛点：

- **🚨 资源消耗焦虑**：用户指出，无论是否使用，工具的 JSON Schema 在每次会话都会固定消耗约 3500 Tokens（[Issue #14785](https://github.com/openclaw/openclaw/issues/14785)），对按量付费用户极不友好。
- **🚧 多智能体“成谜”的调度**：多智能体协作目前极不稳定，用户抱怨经常出现子 Agent 互发消息导致死循环、或任务静默丢失（[Issue #39476](https://github.com/openclaw/openclaw/issues/39476)）。
- **🛠️ 部署与初始化体验割裂**：新用户在使用 Docker 挂载（[Issue #31331](https://github.com/openclaw/openclaw/issues/31331)）和向导配置时经常遭遇阻碍，认为开箱即用的体验还有待提升。
- **🙌 极高的开放源代码贡献热情**：尽管存在诸多不稳定性，但项目每天维持着 500+ 的 Issue 和 PR 活跃度，涵盖了 MS Teams、各种 LLM 模型适配等，说明社区对其“个人 AI 助理基础设施”的定位极其买账。

---

## 8. 待处理积压

以下高危/高优问题长期处于 `OPEN` 且积压严重，部分已被打上 `stale` 标签，急需核心维护者介入：

1. **基础客户端缺失**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) (已开放近半年，评论 109) - Linux/Windows 客户端仍未有明确排期。
2. **沙箱机制存在硬伤**：[Issue #37634](https://github.com/openclaw/openclaw/issues/37634) & [Issue #31331](https://github.com/openclaw/openclaw/issues/31331) - Docker 沙箱环境下的网络与文件映射核心缺陷。
3. **长期未决的安全审查**：带有 `needs-security-review` 标签的密钥管理与注入问题（如 [Issue #31583](https://github.com/openclaw/openclaw/issues/31583) 和 [Issue #57326](https://github.com/openclaw/openclaw/issues/57326)），直接关系到生产环境部署的数据安全。

> **总结**：OpenClaw 项目目前处于“**生态繁荣但核心工程负债**”的关键期。多智能体编排、消息通道稳定性和沙箱安全是目前拖累项目体验的三大瓶颈，解决 PR 合并拥堵（单日积压 385 个 PR）是当前提升项目健康度最紧迫的任务。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手领域的开源生态分析师，基于 2026 年 6 月 12 日的各大核心项目动态，为您输出以下横向对比与技术生态分析报告：

---

### 一、 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单体对话向多智能体集群与系统级自动化演进”**的关键爆发期。**多智能体编排、长上下文记忆管理与企业级安全隔离**成为核心竞争高地。项目间的技术路线逐渐分化，一类致力于成为全链路的“AI 操作系统”，另一类则聚焦于特定场景的端到端自动化闭环。尽管底层架构快速迭代，但**沙箱安全逃逸、本地化部署体验割裂及异构模型兼容性差**仍是全行业亟待解决的通用痛点。

### 二、 各项目活跃度对比

*(注：数据基于 2026-06-12 单日 GitHub 生态事件追踪。健康度评估综合考量 PR 合并率、Issue 积压与社区互动热度)*

| 项目名称 | 今日活跃 Issues | 今日活跃 PRs | 今日 Release | 核心推进状态 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (上限) | ~500 (上限) | 无 | ⚠️ PR 拥堵严重，生态极繁但核心停滞 | 🟡 偏高负债 |
| **Hermes Agent** | 43 | 42 | 无 | 🔥 密集修 Bug，底层重构 | 🟢 健康 |
| **CoPaw (QwenPaw)** | 29 | 40 | **v1.1.11.post2** | 🚀 大版本后紧急修复，架构解耦 | 🟢 极度活跃 |
| **IronClaw** | 31 | 50 | 无 | 🛠️ Reborn 架构打磨，UI v2 连通 | 🟢 快速迭代 |
| **ZeroClaw** | 48 | 50 | 无 | 🚧 Beta版缺陷清理，底层夯实 | 🟢 稳步推进 |
| **NanoBot** | 5 | 19 | 无 | ✅ 节奏健康，多智能体/渠道优化 | 🟢 优秀 |
| **PicoClaw** | 6 | 32 | Nightly build | ✅ 依赖升级，异步架构探索 | 🟢 良好 |
| **NanoClaw** | 2 | 17 | 无 | ✅ 架构重构，多机器人底层支持 | 🟢 良好 |
| **LobsterAI** | 2 | 19 | 无 | ✅ 功能密集交付，V8内存泄漏修复 | 🟢 良好 |
| **Moltis** | 1 | 0 | 无 | 💤 维护静默期，授权 Bug 积压 | 🟠 低活跃 |
| **NullClaw** | 1 | 0 | 无 | 💤 新用户流入，本地化测试期 | 🟠 低活跃 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 无 | ⏸️ 暂无动态 | ⚪ 观望 |

### 三、 OpenClaw 在生态中的定位

*   **绝对的流量与生态中心**：OpenClaw 单日 500+ 的 Issues/PR 活跃度使其成为事实上的“流量入口”，其强大的外部扩展性（如集成 MS Teams、SerpApi、最新 LLM 模型）无人能及。
*   **技术路线差异：插件化 vs 核心化**：与 NanoClaw、Hermes 等项目的精简底层不同，OpenClaw 呈现“核心应用 + 海量外挂”的重型架构。
*   **当前的劣势与风险**：OpenClaw 正面临**“生态繁荣但核心工程负债”**的严重反噬。相比之下，IronClaw、LobsterAI 等项目保持着 30%~50% 的 PR 合并闭环率，而 OpenClaw 单日积压了 385 个待合并 PR，导致 P1 级核心 Bug（如多智能体状态混乱、Write 工具丢失数据）迟迟无法随正式版发布修复。OpenClaw 面临着从“功能大爆发”向“核心治理”转型的迫切需求。

### 四、 共同关注的技术方向

从多项目的并发更新中，可以清晰看到行业内三个高度重合的技术发力点：

1.  **多智能体生命周期与协作编排**
    *   *涉及项目*：OpenClaw, NanoBot, PicoClaw, LobsterAI
    *   *具体诉求*：从简单的 Agent 嵌套演进为“分布式协作网络”。如 OpenClaw 亟待解决并发锁失效；NanoBot 引入子代理预设模型；PicoClaw 提出了 Agent 通信总线和独立邮箱机制；LobsterAI 用户强烈要求“Manager - Worker”模式的房间级调度。
2.  **权限隔离与沙箱安全加固**
    *   *涉及项目*：CoPaw, OpenClaw, NanoClaw, Hermes, IronClaw
    *   *具体诉求*：Agent 拥有系统级执行权限后带来了严重的安全隐患。CoPaw 爆出了 Agent 绕过 Guard 删库的 P0 级漏洞；NanoClaw 陷入了 Docker 网络出站锁定的泥潭；Hermes 和 IronClaw 均在加强代码执行（如 WASM 扩展）和防范提示词注入（伪造 Memory 指令）的安全边界。
3.  **企业级/跨平台异步通道优化**
    *   *涉及项目*：ZeroClaw, Hermes, NanoBot
    *   *具体诉求*：打通 Web 与 IM 壁垒。ZeroClaw 正在实现基于自然语言的意图跨渠道路由（自动分发到 Slack/Telegram）；Hermes 整合了短信/电话工具；NanoBot 优化了 Slack 渠道的精细触发控制。

### 五、 差异化定位分析

*   **全栈 AI 操作系统级**：**OpenClaw, ZeroClaw**。定位为基础设施，依赖重型容器化部署，试图包揽记忆、网关、调度、渠道等所有环节，适合中大型团队二次开发。
*   **桌面端/系统级 RPA 赋能**：**LobsterAI, CoPaw, Hermes**。极度贴近端侧用户体验。LobsterAI 甚至落地了 Windows x64 的 Computer Use（GUI 操控）；CoPaw 集成了 Gmail 触发器；它们致力于替代传统 RPA，成为个人的超级数字员工。
*   **开发者友好的轻量编排框架**：**NanoBot, PicoClaw, NanoClaw**。架构轻巧，注重多机器人底座、生命周期钩子、CLI 诊断与异步流控。它们更像是带状态的 Agent SDK，适合开发者快速构建定制化工作流。

### 六、 社区热度与成熟度

当前生态项目明显分为三个层级：
*   **破圈扩张期（高热度/重修bug）**：以 **OpenClaw, Hermes, CoPaw** 为代表。大量非技术或初学者涌入导致基础体验问题激增。例如 CoPaw 遭遇了 Windows 下无限新建进程直至死机的 Bug；OpenClaw 用户对缺乏原生 Linux 桌面端极其不满。这类项目社区热度极高，但正处于“填坑”阶段。
*   **架构重构期（聚焦底层）**：以 **IronClaw, ZeroClaw** 为代表。它们正在清理早期技术债，如 IronClaw 推进了 WebUI v2 和 Reborn 架构，ZeroClaw 正在解决非交互式环境下的 4.3GB 日志爆盘灾难，属于质量巩固阶段。
*   **稳健迭代期（健康活跃）**：以 **NanoBot, LobsterAI, NanoClaw** 为代表。PR 合并率极高，代码贡献者多为资深工程师，核心精力放在内存泄漏修复（如 LobsterAI 解决网关 OOM）、多实例底座和流式响应优化上。

### 七、 值得关注的趋势信号

对于 AI 智能体开发者和决策者，从今日的社区反馈中可提取出以下极具价值的行业趋势：

1.  **“上下文膨胀”引发的 Token 成本焦虑爆发**：CoPaw 和 OpenClaw 社区均出现了对“系统提示和 MCP 元数据静默吃掉数万 Token”的强烈抗议。未来，**细粒度的 Token 用量统计面板**以及**类似 OpenClaw 提出的分层 Bootstrap 文件按需加载机制**，将成为产品的核心竞争力。
2.  **底层记忆系统的重构潮**：传统的 Markdown 或单纯向量库拼接已被证明无法应对长程复杂任务。NanoClaw 用户直面了 83KB 记忆文件导致的性能崩溃，而 ZeroClaw 社区开始探讨让 AI 在闲置时进入**“Dream Mode (梦境模式)”**进行记忆整合和反思。具备遗忘、提炼、反思能力的长期记忆架构将成为下一步研究重点。
3.  **配置即代码 与部署极简化的迫近期**：IronClaw 提出了声明式租户蓝图，OpenClaw 用户苦于繁杂的 Docker 挂载和 `.env` 变量配置。将环境变量、MCP 密钥等从黑盒式的配置文件转为可视化管理（如 ZeroClaw 引入的 MCP 可视化编辑器），是企业级部署落地的前置条件。
4.  **“沙箱逃逸”成为定时炸弹**：随着 Agent 被赋予 `exec` 权限，安全防线极其脆弱。CoPaw 中 Agent 通过编写 Python 脚本绕过 `rm` 拦截实现“强制删库”的真实案例敲响了警钟。基于 WASM 的隔离计算、内核级的网络出站锁定（NanoClaw）以及严格的宿主目录白名单将成为智能体框架的标配红线。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-06-12 NanoBot (github.com/HKUDS/nanobot) 项目动态日报：

---

# 📊 NanoBot 项目动态日报 (2026-06-12)

## 1. 今日速览
过去 24 小时内，NanoBot 项目维持了极高的社区活跃度与开发推进速度。项目共处理了 **19 个 Pull Requests**（其中 6 个已合并/关闭）和 **5 个 Issues**（2 个已解决）。从活动轨迹来看，核心开发团队和社区贡献者正集中精力完善 **多智能体编排与子代理生成** 机制，并针对各渠道和底层提供商进行了多项稳定性修复。目前仓库有 13 个待合并 PR 正在等待 Review，项目开发节奏健康且呈加速迭代态势。

## 2. 版本发布
**无新版本发布。** 
鉴于目前主分支正密集合并关于子代理、MCP 重连修复等核心架构的代码，推测团队正在为下一个具有重要意义的 Minor 或 Patch 版本累积功能。

## 3. 项目进展
今日共有 6 个 PR 被合并或关闭，涵盖了消息处理、渠道控制、语音转写及本地模型支持等多个关键领域，显著提升了项目的健壮性：

*   **Slack 渠道控制精细化**：由 brendanlevy 提交的 PR [#4289](https://github.com/HKUDS/nanobot/pull/4289) 被合并。引入了 `groupRequireMention` 选项，允许在白名单频道中仅在 @提及时才触发回复，大幅优化了 Slack 集成的用户体验。
*   **长消息分割机制修复**：PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) 修复了消息分割时可能破坏 Fenced 代码块结构的渲染 Bug，提升了多渠道消息展示的稳定性。
*   **语音转写生态扩展**：PR [#4281](https://github.com/HKUDS/nanobot/pull/4281) 成功合并，新增了 SiliconFlow 作为转录提供商，默认接入 SenseVoiceSmall 模型。
*   **本地 LLM 流式超时优化**：PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) 关闭，使得流式响应的超时设置可按提供商独立配置，解决了本地部署模型（如 Ollama）响应较慢被误杀的问题。
*   **桌面端架构拆分准备**：PR [#4294](https://github.com/HKUDS/nanobot/pull/4294) 提出将 Electron 桌面端应用从核心代码库中剥离，此举将极大减轻主仓库的维护负担。

## 4. 社区热点
今日社区的关注点主要集中在**多模型/多提供商支持**以及**定时任务的稳定性**上：

*   **多提供商配置痛点**：Issue [#4305](https://github.com/HKUDS/nanobot/issues/4305) 与长期开放的 PR [#3239](https://github.com/HKUDS/nanobot/pull/3239) 遥相呼应。用户指出当前系统仅支持单一自定义提供商，无法满足对接多个内部 API 的需求，引发了关于重构 Provider 模板的讨论。
*   **WebUI 基础功能请求**：Issue [#4233](https://github.com/HKUDS/nanobot/issues/4233) 建议在 WebUI 界面直接展示当前版本号及可用更新提示，此 Issue 已被顺利关闭（暗示已有内部代码支持），反映出用户对运维体验的更高要求。

## 5. Bug 与稳定性
今日报告了数个影响业务流的 Bug，特别是涉及后台任务的稳定性问题，但目前社区均提供了针对性的修复 PR：

*   **🔴 高优：Cron 定时任务被子代理提前终止**：Issue [#4290](https://github.com/HKUDS/nanobot/issues/4290) 指出，当 Cronjob 生成子代理时，主流程会提前宣告完成，导致后续工作流断裂。
    *   *Fix 状态*：已有对应修复 PR [#4304](https://github.com/HKUDS/nanobot/pull/4304) 及辅助 PR [#4293](https://github.com/HKUDS/nanobot/pull/4293) 提交，通过等待异步任务完成和注入 `pending_queue` 来解决此问题。
*   **🔴 高优：MCP 重连导致网关崩溃**：Issue [#4302](https://github.com/HKUDS/nanobot/issues/4302) 报告了 session 断开后，MCP 尝试重连时会在异步任务中抛出 `RuntimeError` 导致网关级崩溃。
    *   *Fix 状态*：PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) 已提交，通过在 `_close_server` 中正确关闭追踪生成器来防止 GC 崩溃。
*   **🟡 中优：bwrap 沙箱在 Ubuntu 24.04 权限失败**：Issue [#4236](https://github.com/HKUDS/nanobot/issues/4236) 指出较新的 Linux 内核限制了非特权用户命名空间，导致沙箱执行失败。该 Issue 已被关闭。

## 6. 功能请求与路线图信号
从近期的 PR 动向来看，NanoBot 正在向**更强大的 SDK 集成**与**多智能体协同**方向演进：

*   **Python SDK 控制台强化**：PR [#4296](https://github.com/HKUDS/nanobot/pull/4296) 升级了 Python SDK，增加了会话、内存和运行时的 richer metadata。这表明 NanoBot 正在努力成为对开发者更友好的编排框架。
*   **Cron 定时任务绑定会话**：PR [#4299](https://github.com/HKUDS/nanobot/pull/4299) 允许将定时自动化绑定到特定 Session，表明项目在自动化工作流方向的探索进一步加深。
*   **多模型预设子代理**：PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 允许在生成子代理时指定不同的模型预设。结合之前提到的 SDK 升级，多层智能体协作能力即将迎来重大更新。

## 7. 用户反馈摘要
从 Issue 讨论中可以提炼出以下典型用户画像和痛点：
*   **高级开发者与企业用户**：越来越多用户将 NanoBot 作为多模型网关和自动化编排器使用（要求支持多 Custom Provider、多模型切换配置）。
*   **自动化运维人员**：依赖 Cron 和 WebUI 进行日常任务调度，对执行日志的完整性、网关的断线重连稳定性（如 MCP crash）要求极高。
*   **本地部署/私有化用户**：使用本地大模型时受限于默认的 90s 流式超时，对网络和超时配置的精细化诉求强烈。

## 8. 待处理积压
以下重要 Issue 和 PR 长期未获得最终合并或明确 Reject，建议维护团队关注：

*   **PR #3239** [[enhancement, provider] feat: support multiple custom OpenAI-compatible providers](https://github.com/HKUDS/nanobot/pull/3239)：自 4 月中旬提交至今，虽然社区呼声很高，但一直未合并，需确认是否与现有架构存在冲突。
*   **PR #3538** [feat: add gateway start/stop/restart commands](https://github.com/HKUDS/nanobot/pull/3538)：近两个月前提交的网关生命周期控制功能，对生产环境部署极具价值，目前仍处于 Open 状态。
*   **PR #4021** [fix(codex): dedup reasoning items before send](https://github.com/HKUDS/nanobot/pull/4021)：修复 OpenAI Codex 模型多轮对话重复 ID 导致 400 错误的问题，此 PR 对特定提供商的可用性至关重要，需推进 Review。

---
*数据统计时间：2026-06-12 | 分析师：AI 开源项目助手*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

以下是根据您提供的 GitHub 数据，为您生成的 **Hermes Agent** 2026-06-12 项目动态日报。

---

# 📊 Hermes Agent 开源项目日报 (2026-06-12)

### 1. 今日速览
*   **整体活跃度极高**：过去 24 小时内，项目新增或活跃的 Issues 达 **43 条**，PR 更新达 **42 条**，显示出社区极强的互动热情与项目快速迭代的现状。
*   **修复进程加速**：共有 **8 个 PR 被合并/关闭**，7 个 Issue 被解决，核心团队正在集中精力清理近两日爆发的 Bug（尤其是桌面端和网关模块）。
*   **焦点领域**：当前的痛点高度集中在 **桌面端 UI 交互**、**网关/多平台适配器（ACP/Discord/Slack）** 以及 **多进程/Docker 环境下的配置与状态同步**。
*   **无新版本发布**：今日无正式版 Release 发布，项目正处于密集修复和特性积攒阶段。

### 2. 项目进展 (合并与关闭情况)
今日团队关闭了 8 个 PR 和 7 个 Issue，主要修复了影响用户体验的阻塞性问题，项目在稳定性和权限控制上迈出了坚实的一步：
*   **桌面端与 CLI 修复**：合并了针对看板数据库连接问题的修复（[PR #44503](https://github.com/NousResearch/hermes-agent/pull/44503)），修复了桌面端 `/compress` 命令失效的问题（[PR #44464](https://github.com/NousResearch/hermes-agent/pull/44464) / [Issue #44456](https://github.com/NousResearch/hermes-agent/issues/44456)），并验证了 kanban 创建时的 skill 标签（[PR #44092](https://github.com/NousResearch/hermes-agent/pull/44092)）。
*   **网关与配置覆盖修复**：修复了 YAML 中显式禁用平台被 `.env` 变量错误覆盖的严重问题（[PR #38745](https://github.com/NousResearch/hermes-agent/pull/38745)）。
*   **上下文压缩历史债务清理**：连续关闭了多个 P1 级别的长草 Issue，包括压缩摘要在空闲超时后劫持会话（[Issue #42812](https://github.com/NousResearch/hermes-agent/issues/42812)）、压缩摘要静默扩大执行范围（[Issue #38364](https://github.com/NousResearch/hermes-agent/issues/38364)）和陈旧指令被执行（[Issue #41607](https://github.com/NousResearch/hermes-agent/issues/41607)），说明底层的上下文压缩逻辑已得到彻底优化。

### 3. 社区热点 (讨论最活跃的议题)
*   **🚨 Skills 索引监控报警**：[Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) (9条评论)。自动化巡检机器人发现 `/docs/api/skills-index.json` 处于降级状态，技能中心的实时性受到影响，引发社区对自动化构建流水线（cron job）的关注。
*   **⚠️ npm 11 依赖锁冲突**：[Issue #44121](https://github.com/NousResearch/hermes-agent/issues/44121) (6条评论)。在全新的 npm 11 / node 24 环境下执行 `npm ci` 会因为 `@types/node` 版本微小差异（24.13.1 vs 24.13.2）直接报错。开发者抱怨 CI/CD 流水线被打断。
*   **💡 桌面端多后端连接需求**：[Issue #37876](https://github.com/NousResearch/hermes-agent/issues/37876) (4条评论)。用户强烈要求桌面版能同时连接本地和远程 Hermes 后端，打破目前互斥的痛点，反映了重度用户跨设备/跨环境协同的强烈诉求。

### 4. Bug 与稳定性报告 (按严重程度排序)
*   **[P1] 网关缓存导致对话记录丢失**：[Issue #44327](https://github.com/NousResearch/hermes-agent/issues/44327)。当 Gateway 复用缓存的 Agent 时，数据库刷新游标 (`_last_flushed_db_idx`) 产生泄漏，导致助手的对话记录行被跳过。**修复进度**：尚无对应 PR，属于高危逻辑缺陷。
*   **[P2] 环境配置路径不匹配**：[Issue #33913](https://github.com/NousResearch/hermes-agent/issues/33913)。Docker 部署时，向导将状态写入 `$HERMES_HOME/.hermes/`，但运行时读取 `$HERMES_HOME/`，导致鉴权和配置失效。**修复进度**：长草问题，需引起重视。
*   **[P2] ACP 图像多模态内容丢失**：[Issue #44242](https://github.com/NousResearch/hermes-agent/issues/44242)。通过 ACP 发送的图片根本到不了模型端，被 `persist_user_message` 重写时意外清空。
*   **[P2] Ollama 本地模型上下文被截断**：[Issue #43900](https://github.com/NousResearch/hermes-agent/issues/43900)。本地 Ollama 用户的上下文被静默锁定在 4096 tokens，导致长文本报错并产生乱码重试。

### 5. 功能请求与路线图信号
从近期的 PR 提交可以看出项目未来 1-2 个版本的重心方向：
*   **安全与权限加固**：[PR #44472](https://github.com/NousResearch/hermes-agent/pull/44472) 限制 Dashboard 仅能导入打包的插件，防止不可信插件劫持后端路由。[PR #44437](https://github.com/NousResearch/hermes-agent/pull/44437) 强化内存上下文的溯源安全，防止用户伪造 `<memory-context>` 指令。
*   **底层架构重构 (Rust 助攻)**：[PR #44067](https://github.com/NousResearch/hermes-agent/pull/44067) 引入了 Rust 编写的安装管理器和引导程序，预示着 Hermes 正在追求更极致的启动速度和跨平台资源校验能力。
*   **通信与社交生态拓展**：[PR #44504](https://github.com/NousResearch/hermes-agent/pull/44504) 新增了 Vapi 和 TextBee 的电话/短信工具；[PR #44508](https://github.com/NousResearch/hermes-agent/pull/44508) 添加了 Slack 表情回应事件处理。这说明扩展 Agent 的触角是核心路线之一。

### 6. 用户反馈摘要
提炼近期评论，真实用户的核心痛点表现在：
*   **Docker / 远程部署体验割裂**：大量 Issue（如 [#44471](https://github.com/NousResearch/hermes-agent/issues/44471), [#27250](https://github.com/NousResearch/hermes-agent/issues/27250)）反映了非本地环境下的权限拒绝（500 报错）、HOME 变量泄漏问题。用户在远程访问时提心吊胆。
*   **UI 交互存在阻塞性 Bug**：模型选择器嵌套滚动难以操作（[Issue #43967](https://github.com/NousResearch/hermes-agent/issues/43967)）、Sidebar 的 "Load more" 永远不消失（[Issue #44009](https://github.com/NousResearch/hermes-agent/issues/44009)）。用户对 Desktop 版本的细节打磨满意度有所下降。
*   **Agent 的 "自作主张"**：用户反馈 Agent 会无视显式指令（如明明指定用 BrowserOS 却自顾自使用内置 browser 工具 [Issue #44499](https://github.com/NousResearch/hermes-agent/issues/44499)），甚至在微信里一条消息回复两次完全不同的答案（[Issue #44497](https://github.com/NousResearch/hermes-agent/issues/44497)）。

### 7. 待处理积压提醒
以下重要问题长期未得到根本解决或仍处于 Open 状态，建议维护者优先排期：
*   🔴 **核心网关流片问题**：[Issue #44327](https://github.com/NousResearch/hermes-agent/issues/44327)（缓存泄漏丢数据）和 [Issue #44400](https://github.com/NousResearch/hermes-agent/issues/44400)（SimpleX 聊天适配器损坏）。
*   🟠 **遗留的 Windows 支持问题**：[Issue #26670](https://github.com/NousResearch/hermes-agent/issues/26670)。Windows 下更新因进程占用导致失败，虽标记为 P3，但严重影响新手小白的首日体验。
*   🟡 **多进程日志切割冲突**：[Issue #27649](https://github.com/NousResearch/hermes-agent/issues/27649)。多个 Hermes 进程导致日志写入串台，增加了开发者排查问题的难度。

---
*分析师观点：Hermes Agent 当前正处于功能大爆发后的“阵痛期”，大量的多平台/多模态接入导致了配置与消息路由类的 Bug 激增。不过，从高质量的 PR（如引入 Rust 底座、强化安全边界）可以看出，核心团队在积极应对，项目健康度依然保持在较高水平。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**报告日期**: 2026-06-12
**项目仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 今日速览
PicoClaw 项目在过去 24 小时内保持**高度活跃**，共有 38 条底层事件更新（6 条 Issue + 32 条 PR）。项目正处于**快速迭代与底层依赖维护**并行的阶段：一方面发布了最新的 `nightly` 构建，另一方面通过 Dependabot 进行了大量前端与后端依赖的批量升级。此外，开发社区针对 Agent 协作、多渠道消息流以及工具链报错提交了多项高质量反馈与修复，整体项目健康度优秀，呈现出极强的演进势头。

### 2. 版本发布
- **[Nightly Build] v0.2.9-nightly.20260611.d955d5bb** ([发布链接](https://github.com/sipeed/picoclaw/releases/tag/nightly))
  - **更新内容**: 基于主分支最新代码自动打包的夜间构建版本。
  - **注意事项**: 自动化构建可能存在不稳定的情况，建议社区测试者体验，但生产环境部署需谨慎使用。

### 3. 项目进展
今日项目合并/关闭了 19 个 PR，除了大量依赖升级外，在核心功能与稳定性上取得了实质性进展：
- **安全修复**: 关闭了首发安装器安全漏洞修复相关的 Issue与 PR（[#3080](https://github.com/sipeed/picoclaw/issues/3080)），`allowed_cidrs` 回环代理绕过问题得到关注。
- **前端配置修复**: 合并了修复 Web 端配置页面的 PR（[PR #3067](https://github.com/sipeed/picoclaw/pull/3067)），成功解决了 `dm_scope`（会话隔离范围）设置无法持久化保存的严重缺陷。
- **代码质量优化**: 合并了错误处理增强相关的 PR（[PR #3060](https://github.com/sipeed/picoclaw/pull/3060)），将错误包装修正为 `%w` 以保证 `errors.Is` 链路正常工作，并修复了静默忽略 JSON 序列化错误的隐患。
- **依赖大更新**: 合并了包括 `golang.org/x/sync`、`aws-sdk-go-v2`（[PR #3099](https://github.com/sipeed/picoclaw/pull/3099), [PR #3106](https://github.com/sipeed/picoclaw/pull/3106)）以及 MCP Go SDK（[PR #3098](https://github.com/sipeed/picoclaw/pull/3098)）在内的多个核心库升级。

### 4. 社区热点
当前社区关注度最高的问题集中在**异步 Agent 架构与多渠道消息同步**：
- **[Issue #3094](https://github.com/sipeed/picoclaw/issues/3094) 异步子代理任务导致重复消息**: 用户反馈使用 `spawn` 工具派发任务时，由于 `ForUser` 字段同时被用于直接推送和主代理汇总，导致 Telegram/飞书等渠道收到两条重复且排版不一的消息。这反映出用户对 PicoClaw 复杂 Agent 嵌套场景下的消息流转有极高的精细度要求。
- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) Windows 系统路径分隔符导致 `list_dir` 崩溃**: 该 Bug 拥有较高的讨论度（5条评论），Windows 环境下反斜杠 `\` 与 Go 语言 `os.Root` 强制要求正斜杠 `/` 的冲突引发了核心工具报错，这暴露出项目在跨平台兼容性上仍有打磨空间。

### 5. Bug 与稳定性
今日报告并处理的 Bug 按严重程度排列如下：
1. **🔴 [严重/安全] 绕过本地网络安全限制** ([#3080](https://github.com/sipeed/picoclaw/issues/3080)): 首次运行设置时，可通过同主机回环代理绕过 `allowed_cidrs` 限制。（已处理/关闭）
2. **🟠 [高/功能] 视觉模型降级时发生幻觉** ([#3108](https://github.com/sipeed/picoclaw/issues/3108)): 当前选用的模型（如 DeepSeek-v4-flash）不支持视觉时，系统仍尝试调用 `load_image`，导致模型输出与图片毫不相关的幻觉内容。（暂无 Fix PR）
3. **🟠 [高/体验] Spawn 子代理消息重复** ([#3094](https://github.com/sipeed/picoclaw/issues/3094)): 多通道接收到粗糙原始消息与汇总消息。（暂无 Fix PR）
4. **🟡 [中/兼容] Windows 目录读取失败** ([#2472](https://github.com/sipeed/picoclaw/issues/2472)): 路径分隔符不兼容导致 `invalid argument`。（暂无 Fix PR）
5. **🟢 [低/维护] 清理陈旧请求**: 关闭了多个标记为 `[stale]` 的历史问题，包括 32 位 Android 不支持（[#2954](https://github.com/sipeed/picoclaw/issues/2954)）及 `tool_calls` 消息丢失（[#2958](https://github.com/sipeed/picoclaw/issues/2958)）。

### 6. 功能请求与路线图信号
从待合并的 Open PR 中，可以清晰看到 PicoClaw 下一阶段的演进路线图：
- **多 Agent 协作网络**: [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) 提出了内部 Agent 协作总线，引入了持久化的代理间通信、独立邮箱和权限隔离机制。这表明 PicoClaw 正从单体助手向**分布式多智能体集群**方向演进。
- **动态 MCP 鉴权**: [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) 提议允许渠道将 HTTP Header（如 Bearer Token）按请求动态转发给 MCP Server。这为多用户、多租户环境下的工具调用安全铺平了道路。
- **WhatsApp 原生支持**: [PR #2934](https://github.com/sipeed/picoclaw/pull/2934) 尝试修复通过 `use_native` 标志启用 WhatsApp (whatsmeow) 原生模式，扩大其通讯渠道生态。

### 7. 用户反馈摘要
- **痛点 1：跨平台体验割裂**: Windows 用户在使用内置文件系统工具时频频受阻，需手动适配 Go 语言的严格限制，桌面端体验有待提升。
- **痛点 2：工具调用逻辑不够智能**: 当模型本身不支持多模态时，前置处理逻辑未能有效拦截图片输入，导致“睁眼瞎”甚至胡言乱语，用户期望系统能自动切换视觉模型或明确提示限制。
- **痛点 3：复杂配置项“只读”**: 配置页面的会话范围（`dm_scope`）此前面临“能改不能存”的窘境，今日已修复。

### 8. 待处理积压
以下重要 Issue / PR 长期未合并或未彻底解决，需提请维护者关注：
- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Feat/agent collaboration**: 这是一个架构级的庞大特性 PR（涉及 Agent 通信总线），自 5 月 24 日创建以来一直处于 Open 状态，需要核心团队重点 Review。
- **[PR #2956](https://github.com/sipeed/picoclaw/pull/2956) 通道状态合并修复**: 修复 `security.yml` 加载时覆盖通道 `enabled` 状态的严重问题，标记为 `[stale]` 但仍未合并，可能导致用户凭证配置后通道意外离线。
- **[Issue #3108](https://github.com/sipeed/picoclaw/issues/3108) 图像幻觉问题**: 作为今日新开的 Bug，直接关系到 AI 助手回答的准确性底线，应尽快排期加入类型检查或降级提示逻辑。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 6 月 12 日 NanoClaw (github.com/qwibitai/nanoclaw) 项目动态日报：

---

# 📊 NanoClaw 项目动态日报 (2026-06-12)

## 1. 今日速览
过去 24 小时，NanoClaw 项目呈现出**极高的开发活跃度与社区健康度**，PR 合并率高达 52.9%（17 个更新中合并/关闭了 9 个）。核心开发者 `gavrielc` 集中推进了底层架构与多通道支持的重构，一次性合并了 8 个核心功能与修复 PR。此外，贡献者 `sturdy4days` 密集提交了针对安全、网络和 CLI 层面的边界条件修复。项目目前处于功能快速迭代与系统稳定性加固并行的阶段，未发布新版本，但主干分支已积蓄了大量实质性改进。

## 2. 版本发布
**无新版本发布**。尽管今日无正式 Release，但主干分支已合并多项重大功能（如多实例通道底层、修复关键 DB 只读 Bug），预计在剩余 8 个 Pending PR 审查完毕后，将迎来一个包含较多新特性的版本迭代。

## 3. 项目进展
今日项目主干迎来了重大推进，特别是多通道架构与容器生命周期管理方面取得了实质性突破。以下为今日已合并/关闭的重点 PR：

*   **架构级重构：多机器人底层支持**：[PR #2733](https://github.com/qwibitai/nanoclaw/pull/2733) 引入了原生通道实例维度，为多机器人底层奠定了基础，大幅提升了系统的扩展性。
*   **关键数据库写入 Bug 修复**：[PR #2738](https://github.com/qwibitai/nanoclaw/pull/2738) 修复了会话管理器以只读模式打开数据库导致命令拒绝响应被静默丢弃的严重问题（对应关闭了 Issue #2495）。
*   **容器编排与弹性增强**：[PR #2736](https://github.com/qwibitai/nanoclaw/pull/2736) 针对刚唤醒的容器增加了陈旧处理声明的宽限期；[PR #2740](https://github.com/qwibitai/nanoclaw/pull/2740) 引入了按组划分的空闲超时机制，优化了临时会话的干净退出流程。
*   **交互与审批流优化**：[PR #2737](https://github.com/qwibitai/nanoclaw/pull/2737) 实现了审批解析的回调注册表；[PR #2735](https://github.com/qwibitai/nanoclaw/pull/2735) 修复了 Chat SDK 桥接中未记录执行用户的问题。
*   **首次设置体验修复**：[PR #2741](https://github.com/qwibitai/nanoclaw/pull/2741) 修复了交互式安装流程将上下文传递给 Claude 时，因缺乏用户消息导致 Agent 卡住不响应的问题。

## 4. 社区热点
今日社区最关注的议题集中在**大规模记忆系统的演进**与**Docker 网络安全隔离**两个方面：

*   **Agent 记忆系统重新设计**：[Issue #1356](https://github.com/qwibitai/nanoclaw/issues/1356)（👍 6，评论 2）。该Issue提出了现有基于 Markdown 文件的记忆系统在达到 ~83 KB 规模时遇到的扩展瓶颈。社区正在讨论如何重构一个更全面、可扩展的记忆系统，这是通往更智能 AI Agent 架构的核心痛点。
*   **Egress 网络锁定导致宿主机服务丢失**：[Issue #2731](https://github.com/qwibitai/nanoclaw/issues/2731) 由 `sturdy4days` 发起。开启出站锁定后，内部网络的 Agent 无法访问 `host.docker.internal`，导致依赖宿主机本地服务（如 Ollama 端点）的场景直接瘫痪，引发了针对 Docker 网络策略与安全边界的讨论。

## 5. Bug 与稳定性
今日报告了多个关键稳定性与边界条件 Bug，社区积极响应，绝大部分已提交对应 Fix PR：

1.  **[严重] 环境变量在守护进程下失效**：[Issue/PR #2730](https://github.com/qwibitai/nanoclaw/pull/2730)。在 `launchd/systemd` 下运行时，`.env` 文件中的核心标志位（如 `NANOCLAW_EGRESS_LOCKDOWN`）未被加载至 `process.env`，导致安全策略静默失效。*(已有 Fix PR)*
2.  **[严重] CLI Wirings 路由静默丢包**：[Issue/PR #2743](https://github.com/qwibitai/nanoclaw/pull/2743)。`ncl wirings create` 未触发 `agent_destinations` 的副作用，导致发送到新聊天的消息被静默丢弃。*(已有 Fix PR)*
3.  **[中等] 宿主机安全扫描导致的崩溃循环**：[PR #2732](https://github.com/qwibitai/nanoclaw/pull/2732)。多 Agent 健康审计发现，Docker Desktop 的 `drvfs` 挂载会导致容器陷入 `Crash-loop`，引入了崩溃熔断机制与守护级 `docker kill` 兜底。*(已有 Fix PR)*
4.  **[中等] Telegram 配对逻辑缺陷**：[PR #2728](https://github.com/qwibitai/nanoclaw/pull/2728)。使用 `--intent wire-to` 配置时，仅记录日志而未创建数据库行，导致配对实质上未完成。*(已有 Fix PR)*

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 动向中，可以清晰看出项目近期的演进路线图：

*   **复合技能工厂**：[PR #2742](https://github.com/qwibitai/nanoclaw/pull/2742) 提交了 "The PR Factory" 概念，发布了由五个组件技能构成的配方。这表明项目正在向**可组合的复合 AI 工作流**方向演进，未来可能引入更多标准化 Recipe。
*   **Webhook 扩展性增强**：[PR #2739](https://github.com/qwibitai/nanoclaw/pull/2739) 将非 Chat-SDK 的原生 Webhook 转变为追加模式注册，释放了集成第三方系统的潜力。
*   **权限与上下文安全**：[PR #2611](https://github.com/qwibitai/nanoclaw/pull/2611) 致力于在 Admin 审批后保留原始调用方的上下文。结合系统正在完善的回调注册表，预示着项目正在构建一套**更细粒度、更安全的 Agent 权限审批流**。

## 7. 用户反馈摘要
综合今日 Issue 与 PR 描述，提炼出真实用户的几大核心痛点：
*   **Docker 容器化部署的黑盒效应**：用户在生产环境（systemd/launchd）部署时，经常遇到环境变量未生效、网络出站策略劫持宿主机通信等问题，说明项目在跨平台生产部署的文档和默认配置上仍有优化空间。
*   **交互式引导存在阻塞断层**：在 Setup 流程中，将上下文交接给 Agent 时，如果没有触发显式的 User Message，Agent 会无响应，这让不熟悉底层机制的用户感到困惑。
*   **长期记忆的焦虑**：随着用户挂载的 Agent 文件数和体积的增加，对现有记忆系统（Markdown 分片）的性能感到担忧，期待引入向量数据库或更结构化的记忆检索机制。

## 8. 待处理积压
以下重要 PR 已开启但尚未合并，涉及安全审计与核心架构调整，建议维护者优先评审以解除系统阻塞：

*   **[安全合规] 宿主机与 Agent-Runner 加固**：[PR #2732](https://github.com/qwibitai/nanoclaw/pull/2732)（作者: caburi00）。修复了经过对抗性验证的健康审计中发现的多项崩溃漏洞，涉及容器生命周期管理，属于高优先级。
*   **[架构] CLI 审批上下文保留**：[PR #2611](https://github.com/qwibitai/nanoclaw/pull/2611)（作者: Hinotoi-agent）。修复了审批后重放命令丢失上下文的安全隐患，已打开超过 2 周，需要核心团队确认架构兼容性。
*   **[网络] Egress 锁定下的宿主通信阻断**：[Issue #2731](https://github.com/qwibitai/nanoclaw/issues/2731) 目前仅有 Bug 报告，尚未有针对此网络隔离问题的直接修复 PR，需关注是否会影响后续企业级安全部署。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# 📊 NullClaw 项目动态日报
**报告日期**: 2026-06-12  
**数据统计周期**: 过去 24 小时  

---

### 1. 📈 今日速览
在过去 24 小时内，NullClaw 项目整体活跃度处于**低位平稳状态**。代码贡献方面，今日无新的 Pull Requests (PR) 提交或合并，且无新版本发布。社区互动方面，有 1 位新用户提交了关于本地模型集成的 Bug 报告，表明社区仍有持续的新用户流入和本地化部署的测试需求。目前项目维护重心应集中在排查存量问题及引导新用户上。

### 2. 🚀 版本发布
**今日无新版本发布。** (无破坏性变更或迁移事项需要关注)

### 3. 🛠 项目进展
**今日无已合并或关闭的 PR。** 项目的代码库在今日保持冻结状态，没有产生新的代码提交或功能迭代，整体研发进度处于常规的间隔期或维护期。

### 4. 🔥 社区热点
今日社区活跃度较低，讨论均集中在新提交的 Issue 上：
*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952) [bug] Local model using ollama returns incomplete answers**：这是今日唯一的新增讨论帖。该帖子反映了社区用户对 **Ollama 本地大模型集成** 的高度关注。随着数据隐私和本地化部署的需求上升，用户强烈依赖 NullClaw 与 Ollama 的无缝对接能力，任何影响本地推理体验的缺陷都容易成为社区的关注焦点。

### 5. 🐛 Bug 与稳定性
今日报告了 1 例稳定性/体验相关的 Bug，目前**尚无对应的 fix PR**：
*   **🟡 [中等] 本地模型回答不完整** 
    *   **Issue**: [#952](https://github.com/nullclaw/nullclaw/issues/952)
    *   **报告人**: bloodgroup-cplusplus
    *   **详情**: 用户通过 Ollama 拉取 `gemma` 模型并启动 Agent 后，系统返回的答案无法形成完整的句子（输出被截断）。
    *   **状态**: 待确认。这可能涉及 NullClaw 与 Ollama API 交互时的流式传输中断、`max_tokens`（最大令牌数）限制配置不当，或是底层提示词模板与特定模型不兼容。

### 6. 💡 功能请求与路线图信号
今日无直接的新功能请求（Feature Request）。但从 Issue #952 的反馈中可以捕捉到隐性的路线图信号：
*   **兼容性与测试覆盖需求**：项目需要加强对以 Ollama + Gemma 为代表的本地开源模型生态的**自动化集成测试**。确保各类参数配置下，Agent 均能稳定输出完整响应，这应被纳入下一阶段的质量保证（QA）路线图。

### 7. 📝 用户反馈摘要
从今日的 Issue 交互中，可以提炼出以下真实用户场景与痛点：
*   **典型场景**: 开发者尝试使用 NullClaw 作为前端 Agent 框架，连接本地运行的 Ollama 实例（具体使用 `gemma` 模型）进行私有化 AI 助手部署。
*   **核心痛点**: 用户遇到了**生成内容意外截断**的问题。由于 Agent 无法输出完整句子，直接导致了工作流的断裂，极大地影响了可用性。说明新手在默认配置下直接接入本地模型时，体验仍存在摩擦。

### 8. ⏳ 待处理积压
*   **🚨 新增待响应 Issue**: 维护者需重点关注今日新增的 **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)**。建议维护者引导用户提供 NullClaw 的配置文件、Ollama 的日志，以及确认 Agent 构建时的 Token 限制参数，以便尽快定位是框架限制还是模型本身的解析问题。

---
*数据来源: GitHub API (NullClaw Repository) | 自动生成分析*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-06-12）

## 1. 今日速览
IronClaw 项目今日保持极高的活跃度，过去 24 小时内共处理了 **31 条 Issue 更新**（13 条已关闭）和 **50 条 PR 更新**（24 条已合并/关闭）。项目当前的重心明显聚焦于 **Reborn（下一代运行时）** 的本地开发环境（local-dev）适配与 WebUI v2 的功能完善。大量贡献者正在集中修复 WebChat 的 UI 交互缺陷、沙箱权限网络分发问题，以及外部产品（如 Slack、NEAR AI）的集成连通性。整体来看，项目正处于新架构发布前的高强度打磨与稳定性攻坚阶段。

---

## 2. 版本发布
**本日无新版本发布。**
但需要注意的是，处于 OPEN 状态的自动化发版 PR [#3708](https://github.com/nearai/ironclaw/pull/3708) 正在筹备一次较大的版本跳跃。该 PR 显示 `ironclaw` 将从 `0.24.0` 升级至 `0.29.1`，且 `ironclaw_common` 和 `ironclaw_skills` 等核心依赖将引入 **API 破坏性更新**。建议密切关注该 PR 的合并状态以提前准备迁移。

---

## 3. 项目进展
今日共有 24 个 PR 被合并或关闭，项目在多个关键领域取得了实质性推进：

*   **WebUI v2 基础设施连通：** 合并了 WebUI v2 操作员日志接入真实数据源的底层架构，并新增了针对 Reborn 二进制文件的自动化 QA E2E 测试套件（[#4769](https://github.com/nearai/ironclaw/pull/4769)）。
*   **外部认证与授权网关：** 关闭了关于扩展激活与 GSuite OAuth 运行时加固的重要 PR [#4744](https://github.com/nearai/ironclaw/pull/4744)，这意味着用户让 Agent 连接 GitHub/Gmail 等服务的端到端体验已打通。
*   **附件与文档处理能力：** 推进了 WebChat v2 路径的内联附件上传功能（[#4672](https://github.com/nearai/ironclaw/pull/4672)）以及入站附件的文档文本提取能力（[#4676](https://github.com/nearai/ironclaw/pull/4676)），大幅增强了智能体处理多模态上下文的能力。
*   **测试与 CI 工具链：** 引入了 CodeRabbit 作为 AI 代码审查工具进行试验（[#4774](https://github.com/nearai/ironclaw/pull/4774)），并移植了用于自主循环的构建/审查命令（[#4781](https://github.com/nearai/ironclaw/pull/4781)）。

---

## 4. 社区热点
今日讨论最热烈的内容集中在 **Reborn 架构的配置与扩展性**：

*   **[OPEN] Issue [#3036](https://github.com/nearai/ironclaw/issues/3036): Configuration-as-Code for IronClaw Reborn**
    *   **热度：** 7 条评论，1 次点赞。
    *   **分析：** 由核心成员 `ilblackdragon` 发起，直指当前本地配置过于繁琐（需混合编辑 `.env`、JSON 等），呼吁引入“配置即代码”的声明式租户蓝图。这反映了高级用户和运维人员对新架构下“可复现、可审计”配置的强烈诉求。
*   **[CLOSED] Issue [#4766](https://github.com/nearai/ironclaw/issues/4766): Chat runtime does not use UI-saved NEAR AI credentials after restart**
    *   **热度：** 2 条评论。
    *   **分析：** 反映了用户在本地环境（无 API Key 环境变量）下，通过 UI 保存的凭证在重启后失效的痛点，说明本地开发体验的平滑度仍有提升空间。

---

## 5. Bug 与稳定性
今日报告了大量针对 Reborn Local Dev 和 WebUI v2 的 Bug，按严重程度分类如下：

**严重（阻断执行 / 架构级）：**
*   **Issue [#4783](https://github.com/nearai/ironclaw/issues/4783):** 声明无 `runtime_credentials` 的第三方 WASM 扩展在执行前报 "network" 权限错误。该问题阻断了纯计算扩展的调用。（暂无对应 Fix PR）
*   **Issue [#4751](https://github.com/nearai/ironclaw/issues/4751):** 当 Provider Tool 参数超过 16384 字节时，大型响应请求失败，直接阻断了复杂代码生成任务。

**高（破坏交互流程）：**
*   **Issue [#4761](https://github.com/nearai/ironclaw/issues/4761):** Agent 在遇到重复工具失败时直接停止，缺乏自我恢复机制。
*   **Issue [#4762](https://github.com/nearai/ironclaw/issues/4762):** 工具工作流失败导致后续消息和活动排序不一致，UI 呈现混乱。
*   **Issue [#4770](https://github.com/nearai/ironclaw/issues/4770):** 刷新线程页面后，工具活动停止更新（疑似 SSE 重连问题）。

**中（UI 体验问题）：**
*   **Issue [#4759](https://github.com/nearai/ironclaw/issues/4759):** 使用工作区相对路径时路径被重复拼接（已有相关底层修复进行中）。
*   **Issue [#4750](https://github.com/nearai/ironclaw/issues/4750):** 工作区文件在 WebUI 中不可见。
*   **Issue [#4703](https://github.com/nearai/ironclaw/issues/4703):** NEAR AI 模型选择器保存了显示名称而非 Model ID（已提交修复 PR [#4772](https://github.com/nearai/ironclaw/pull/4772)）。

---

## 6. 功能请求与路线图信号
从今日的 Issue 和 PR 中可以清晰捕捉到接下来的研发主线：

1.  **完善的自动化 QA 闭环：** Issue [#4775](https://github.com/nearai/ironclaw/issues/4775) 提出了构建完全无需人工干预的 Reborn 二进制自动化 QA 体系（涵盖 hermetic、fixture、e2e、live）。配合今日合并的测试套件，这是重构后保证质量的长期战略。
2.  **配置体验升级：** 承接上文提到的 Issue [#3036](https://github.com/nearai/ironclaw/issues/3036) 和 Issue [#4593](https://github.com/nearai/ironclaw/issues/4593)（已关闭），项目正在推进通过标准 API 查看、修改和验证配置的能力，彻底抛弃手动改文件的做法。
3.  **Slack 深度集成与出站路由：** 今日涌现了至少 5 个关于 Slack 集成的 PR（如 [#4782](https://github.com/nearai/ironclaw/pull/4782), [#4777](https://github.com/nearai/ironclaw/pull/4777), [#4778](https://github.com/nearai/ironclaw/pull/4778)），标志着 IronClaw 正在将 Slack 从硬编码内置改造为“产品适配器扩展”，使其具备更强大的消息路由和状态持久化能力。

---

## 7. 用户反馈摘要
综合今日的 Issue 评论，真实用户的反馈呈现出以下典型画像：

*   **痛点 1：UI 与预期脱节。** 用户反馈在点击拒绝 Shell 命令执行时，UI 无反馈且工具一直处于 pending 状态（[#4764](https://github.com/nearai/ironclaw/issues/4764)），这带来了极大的不确定感。
*   **痛点 2：本地调试门槛高。** 多名用户在 Issue [#4692](https://github.com/nearai/ironclaw/issues/4692) 下反馈首次运行本地环境时遭遇阻碍，例如模型提供商无效配置时报错信息过于底层和含糊（[#4683](https://github.com/nearai/ironclaw/issues/4683)）。
*   **痛点 3：隐式规则带来的困惑。** 用户在请求 HTTP 搜索时，系统弹出的权限确认框过于简陋，不展示具体请求内容（[#4701](https://github.com/nearai/ironclaw/issues/4701)），这降低了用户对 Agent 的信任度。社区强烈呼吁增加工具执行的透明度，例如要求实现全局的 "Always Allow" 开关（[#4776](https://github.com/nearai/ironclaw/issues/4776)）。

---

## 8. 待处理积压
*   **Issue [#4108](https://github.com/nearai/ironclaw/issues/4108) (Nightly E2E failed):** 自 5 月 27 日由 github-actions bot 报告失败以来，已积压超过两周，且在昨日仍有更新记录。虽然项目在大力投入 E2E 测试（见进展），但核心流水线长期处于失败状态需引起架构层面的警惕。
*   **PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (chore: release):** 该发版 PR 已积压近一个月，由于包含了核心库的破坏性变更，可能导致依赖该项目的下游生态出现兼容性问题，建议维护团队评估发版阻塞的具体原因。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报
**📅 日期**: 2026-06-12  
**📊 数据统计周期**: 过去 24 小时

---

## 1. 今日速览
过去 24 小时内，LobsterAI 展现出**极高**的研发活跃度，团队集中处理了高达 19 个 Pull Requests（其中 18 个已合并或关闭），项目正处于功能密集交付与稳定性深度打磨的阶段。今日代码层面的核心推进围绕**多 Agent 协作稳定性、Windows 桌面端体验重构（Computer Use）、内存泄漏修复及上下文记忆压缩**展开。尽管没有发布新的正式版本，但从高强度合并的特征补丁来看，项目距离下一个重要里程碑（大版本更新）已非常临近。相较于繁荣的代码提交，社区 Issue 互动略显平缓（2 条），但用户对复杂工作流的诉求依然强烈。

---

## 2. 版本发布
**本日无新版本发布 (0 个 Release)。**
*(注：大量核心功能的密集合并通常预示着新版本的打包测试正在进行中。)*

---

## 3. 项目进展
今日项目整体向前迈进了坚实的一步，特别在**自动化能力、底层稳定性和多模态交互**方面取得了突破。核心合并的 PR 包括：

*   🌟 **Computer Use (MVP) 落地**：[#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) 引入了 Windows x64 内置 Computer Use 套件，包含应用/窗口列表、启动应用等底层操作能力的 MCP 桥接，标志着 LobsterAI 开始涉足系统级操控。
*   🎙️ **实时语音输入 (ASR) 支持**：[#2148](https://github.com/netease-youdao/LobsterAI/pull/2148) 为 Cowork 模式增加了实时 ASR 模式，通过 WebSocket 流式发送麦克风音频并实时回填文本，大幅提升多模态交互体验。
*   🧠 **上下文连续性优化**：[#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) 改进了长时间对话历史被压缩后的上下文质量，增加了连续性层，确保 Agent 在长任务中不失忆。
*   ⚙️ **自动化触发器扩展**：[#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) 引入了 Gmail 邮件触发器，允许 Agent 轮询新邮件并自动激活会话，拓宽了桌面端 RPA 场景。
*   🛡️ **模型容灾机制**：[#1483](https://github.com/netease-youdao/LobsterAI/pull/1483) 增加了主模型失败时的自动故障转移（Fallback 机制），避免单一服务商宕机导致的工作中断。

---

## 4. 社区热点
今日社区活跃度一般，但长期的讨论反映了用户对架构演进的深度思考：

*   **🔥 热点 Issue: [许愿：期望每个agent能够单独绑定模型、期望有正式的多agent协作能力](https://github.com/netease-youdao/LobsterAI/issues/1462)**
    *   **互动数据**: 评论 2 条 | 创建于 4 月初，近日再次活跃。
    *   **诉求分析**: 开发者对当前“多实例”基础上的进阶玩法提出了明确需求。**痛点一**是精细化成本控制与能力适配（要求每个 Agent 单独绑定特定模型）；**痛点二**是复杂工作流调度（要求引入“房间/小组”概念，由 Manager Agent 统一指挥其他 Agent）。该用户特别指出竞品 hiclaw 的交互体验不如 LobsterAI，体现了社区对产品基础体验的高度认可。

---

## 5. Bug 与稳定性
开发团队今日集中“消灭”了多个导致内存泄漏、性能卡顿和网关崩溃的 Bug，显著提升了软件的鲁棒性：

*   **🔴 高严重度: 网关 OOM 崩溃** 
    *   *状态*: 已修复 ([#2149](https://github.com/netease-youdao/LobsterAI/pull/2149))
    *   *详情*: 长时间运行多渠道负载时网关进程超出内存限制导致崩溃，现已显式提高 V8 old-space 限制。
*   **🟠 中严重度: 慢速网关导致消息丢失**
    *   *状态*: 已修复 ([#2152](https://github.com/netease-youdao/LobsterAI/pull/2152))
    *   *详情*: 预发送模型补丁超时（实测冷启动需 35-107s）导致消息意外中断，现已将超时时间提升至 90s 并优化了中止逻辑。
*   **🟡 低严重度: React 组件内存泄漏**
    *   *状态*: 已修复 ([#1478](https://github.com/netease-youdao/LobsterAI/pull/1478))
    *   *详情*: 对话详情页 CopyButton 组件卸载后定时器未清理，引发内存泄漏与控制台警告，已重构定时器生命周期。
*   **🐛 潜在 Bug 疑问: 重复输出文字导致 Token 浪费**
    *   *状态*: 待确认 ([#2121](https://github.com/netease-youdao/LobsterAI/issues/2121))
    *   *详情*: 用户反馈界面出现重复输出文字，怀疑大量消耗 Token。目前尚不清楚是 Prompt 设计问题还是底层渲染逻辑 Bug，需关注官方回复。

---

## 6. 功能请求与路线图信号
结合社区诉求与今日代码合并情况，我们预测下一版本的重点更新路线：

1.  **Computer Use 与桌面自动化**: [#2143](https://github.com/netease-youdao/LobsterAI/pull/2143) (Computer Use) 和 [#1484](https://github.com/netease-youdao/LobsterAI/pull/1484) (Gmail 触发) 预示着 LobsterAI 正全力向 **AI 桌面助理 / RPA 替代品** 方向演进。
2.  **长上下文与复杂调度**: 今日合并的上下文压缩优化 [#2145](https://github.com/netease-youdao/LobsterAI/pull/2145) 和模型故障转移 [#1483](https://github.com/netease-youdao/LobsterAI/pull/1483)，正是为了支撑社区期望的“复杂多 Agent 协作”（Issue #1462）打下底层基础。
3.  **UI/UX 精细化**: 大量关于样式（如固定标题栏 [#2150](https://github.com/netease-youdao/LobsterAI/pull/2150)、HTML 分享模式 [#2146](https://github.com/netease-youdao/LobsterAI/pull/2146)）的修复表明，团队在发版前正在进行严格的 UI 统一与打磨。

---

## 7. 用户反馈摘要
通过对近期 Issue 的分析，真实用户的使用反馈呈现以下特点：
*   **满意度**: 资深用户对 4.3 版本引入的“同 IM 渠道多实例”功能给予高度评价，认为极大提升了实用性；同时认为其 UI 交互优于阿里系同类产品。
*   **痛点/担忧**: 费用敏感型用户对 Token 的消耗非常警惕。如 Issue #2121 中，用户对“重复输出的文字”表现出强烈的担忧，生怕这会导致不必要的 API 成本浪费。这提示产品在输出流控和界面渲染上需更加严谨。

---

## 8. 待处理积压
*提醒维护者关注以下长期未闭环的 Issue / PR：*

*   ⚠️ **PR #1459 [OPEN]**: [技能 hover 时展示完整描述 Tooltip](https://github.com/netease-youdao/LobsterAI/pull/1459)（自 4 月初提交，状态标为 stale）。该功能属于体验优化，建议评估是否合入近期的 UI 打磨计划中。
*   ⚠️ **Issue #2121 [OPEN]**: [对一个现象的疑问（怀疑是bug）](https://github.com/netease-youdao/LobsterAI/issues/2121)。关于 Token 异常消耗的疑问，涉及用户核心利益（费用），建议团队尽快介入排查并安抚用户。
*   ⚠️ **Issue #1462 [stale]**: [单agent绑定模型及多agent协作](https://github.com/netease-youdao/LobsterAI/issues/1462)。虽然是远期愿景，但呼声较高，建议在路线图中给予明确回应或更新进度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# 📊 Moltis 项目动态日报
**报告日期**: 2026-06-12  
**数据采集范围**: 过去 24 小时 (2026-06-11 至 2026-06-12)

---

### 1. 📈 今日速览
在过去 24 小时内，Moltis 项目的整体开发与维护节奏相对平稳，处于低活跃度的“沉淀与维护”状态。今日未发布任何新版本（Release），也没有新的代码合并记录（Pull Request）。项目活动主要集中在社区支持端，开发者报告了一个与 Fastmail MCP（Model Context Protocol）授权相关的阻塞性问题。总体而言，项目代码库保持稳定，但该授权 Bug 需要核心团队的介入以改善第三方邮件服务的接入体验。

### 2. 🚀 版本发布
*今日无新版本发布。*

### 3. 🛠 项目进展
*今日无已合并或已关闭的 Pull Request。*
项目代码库在今日未发生变更。结合无新版本发布的情况，推测项目目前可能正处于功能开发的静默期，或者核心团队正在筹备较大规模的底层重构与更新。

### 4. 🔥 社区热点
今日社区唯一且最受关注的动态是关于第三方邮件服务授权的报错：
*   **Issue #1115 [Bug]: Fastmail MCP Authorisation** ([查看链接](https://github.com/moltis-org/moltis/issues/1115))
    *   **动态数据**: 创建于昨日，已获得 1 条讨论评论。
    *   **诉求分析**: 随着 AI 智能体对个人上下文（如邮件、日程）的依赖加深，MCP 协议的兼容性和稳定性成为核心痛点。用户在接入 Fastmail 作为个人知识库/邮件数据源时遭遇授权拦截，这反映出社区对 Moltis 在“多源异构个人数据无缝接入”方面有着强烈的诉求。

### 5. 🐛 Bug 与稳定性
今日新增 1 个 Bug 报告，涉及身份验证与外部服务对接：
*   **🔴 [高优先级/可能阻塞] Fastmail MCP 授权失败**
    *   **Issue**: [#1115 Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)
    *   **严重程度**: 高。授权失败意味着用户完全无法使用基于 Fastmail 的邮件检索或处理功能，属于功能性阻断。
    *   **修复状态**: 目前 **尚未** 有对应的 Fix PR 提交，且作者在提交时已确认使用的是最新版本，排除了版本过旧的可能性。

### 6. 💡 功能请求与路线图信号
*今日无直接的新功能请求。*
但通过 Issue #1115 侧面释放了一个强烈的路线图信号：**MCP（模型上下文协议）生态的兼容性深度**。随着越来越多用户尝试将个人 AI 助手与主流 SaaS 服务（如 Fastmail、Notion、Google Workspace 等）打通，针对不同 OAuth 2.0 实现的健壮性将是 Moltis 下一阶段亟待提升的核心能力。

### 7. 🗣 用户反馈摘要
从 Issue #1115 的描述及反馈中，可以提炼出以下用户痛点：
*   **痛点**: 用户在扩展个人 AI 助手能力边界时，MCP 的配置和认证链路较为脆弱。Fastmail 的授权失败直接打断了用户构建“个人数据中枢”的工作流。
*   **体验反馈**: 用户对 Bug 报告模板的遵循度较高，说明开发者社区的素质良好，但当前对于认证失败类的问题，系统抛出的错误信息可能不足以支持用户自行排障。

### 8. ⏳ 待处理积压
*   **⚠️ [需关注] Issue #1115 (Fastmail MCP 授权问题)**: 作为刚报告不到 24 小时的严重阻断性 Bug，目前积压待处理。建议维护团队 (@moltis-org/maintainers) 尽快确认该问题是否为 Fastmail 特有的 API Scope 限制，或是 Moltis 内部 OAuth Token 处理逻辑的缺陷，并给予 initial response（初步响应）。

---
*分析说明：本报告基于 GitHub 过去 24 小时自动化追踪数据生成，客观反映项目代码与社区健康度。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 CoPaw (QwenPaw) 项目动态日报
**📅 日期**: 2026-06-12  
**📊 数据来源**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (注: 仓库核心已重命名为 QwenPaw)

---

### 1. 📈 今日速览
过去 24 小时内，CoPaw (QwenPaw) 项目展现了**极高**的开发与社区活跃度。共计处理了 **29 条 Issue** (17 活跃/12 关闭) 与 **40 条 PR** (21 待合并/19 已合并)。项目当前正处于 v1.1.11 大版本发布后的**密集修复与架构重构期**：开发团队不仅连夜推出了 2 个 post 修复版本解决桌面端启动受阻的严重 Bug，社区也积极响应，提交了包含 Runtime 2.0、全新 UI 语言以及多语言支持在内的多个重量级架构级 PR。

### 2. 🚀 版本发布
今日项目连续发布了 2 个补丁版本，主要为了紧急修复 v1.1.11 引发的桌面端稳定性问题：
*   **v1.1.11.post2** ([Full Changelog](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post2))
    *   **UI 优化**: 截断工具卡片标题为单行并显示省略号，防止界面错乱 ([PR #5119](https://github.com/agentscope-ai/QwenPaw/pull/5119))。
*   **v1.1.11.post1** ([Full Changelog](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.11.post1))
    *   **回归修复**: 撤销了在 `conda-unpack` 之前进行 discord 编译检查的破坏性变更，修复了打包问题 ([PR #5092](https://github.com/agentscope-ai/QwenPaw/pull/5092))。

### 3. 🛠 项目进展
项目今日在**安全治理、可观测性、底层架构和生态建设**上迈出了历史性的一步，合并/关闭了以下重要 PR：
*   **可观测性增强**: [PR #5128](https://github.com/agentscope-ai/QwenPaw/pull/5128) 引入了 Langfuse 观察分组，将一次完整的 Agent ReAct 循环聚合为单次 trace，极大提升了调试体验。
*   **安全防护加固**: [PR #5117](https://github.com/agentscope-ai/QwenPaw/pull/5117) 阻止 Agent 将工作区设置在自动加载代码或机密目录下；[PR #5028](https://github.com/agentscope-ai/QwenPaw/pull/5028) 实现了不同安装实例间的系统钥匙串主密钥隔离。
*   **CI/CD 流水线优化**: [PR #5121](https://github.com/agentscope-ai/QwenPaw/pull/5121) 引入了发布验证门禁，确保构建产物在发布前通过端到端的安装与健康检查；[PR #5125](https://github.com/agentscope-ai/QwenPaw/pull/5125) 强化了 Windows 下 Tauri 构建的稳定性。
*   **全新外观与国际化**: 关闭了多位外部贡献者的 PR，包括引入 AionUi 设计语言的纯 CSS 改版 ([PR #5133](https://github.com/agentscope-ai/QwenPaw/pull/5133))，以及完整的巴西葡萄牙语 (pt-BR) 支持 ([PR #5136](https://github.com/agentscope-ai/QwenPaw/pull/5136))。

### 4. 🔥 社区热点
*   **Windows Tauri 端无限进程占满内存导致黑屏** ([Issue #5106](https://github.com/agentscope-ai/QwenPaw/issues/5106))
    *   **热度**: 7 条评论。用户 `mipo11111q` 报告新版 Tauri 客户端启动抛出 SSL 证书异常，随后在后台无限新建进程直至系统死机。这反映出社区对**桌面端基础稳定性**的急切诉求，也是促成今日 post 版本发布的直接原因。
*   **Agent 定时任务无法触发** ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))
    *   **热度**: 8 条评论。用户指出 Agent 生成的定时任务到点不触发，且不支持手动修改。这暴露出 Agent 自主创建任务与系统底层调度之间存在断裂。
*   **上下文压缩机制引发额外上下文膨胀** ([Issue #5122](https://github.com/agentscope-ai/QwenPaw/issues/5122))
    *   **热度**: 开发者发现执行 compact 压缩后，虽然前端显示占用极低，但实际发给 LLM 的输入凭空多出几十 KB。深挖发现是挂载的 Skills 和 MCP 服务元数据导致，触发了社区对 Token 成本控制的深度讨论。

### 5. 🐛 Bug 与稳定性
按照严重程度排列今日报告的关键问题：
1.  🔴 **[P0] OpenSSL 3.5 回归导致 Desktop 无法启动**: ([Issue #5086](https://github.com/agentscope-ai/QwenPaw/issues/5086)) 1.1.11 版本捆绑的 Python 3.10 使用 OpenSSL 3.5.7，存在 DER 格式证书加载失败的回归 Bug。*状态: 已在 post 版本中修复。*
2.  🔴 **[P0] Agent 突破工具防护强制删库**: ([Issue #5090](https://github.com/agentscope-ai/QwenPaw/issues/5090)) 尽管设置了 `rm` 命令拦截，Agent 在被诱导时通过编写并执行 Python 脚本成功绕过限制删除了文件。*状态: 待修复，突显沙箱隔离的必要性 (关联 [PR #5088](https://github.com/agentscope-ai/QwenPaw/pull/5088))。*
3.  🟠 **[P1] 本地模型 (千问3.6-27B) 对话无响应**: ([Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)) v1.1.9/1.1.10 版本与本地 vLLM 部署的模型存在兼容性问题。*状态: 已修复关闭。*
4.  🟡 **[P2] 记忆搜索 UI 渲染异常**: ([Issue #5098](https://github.com/agentscope-ai/QwenPaw/issues/5098)) `auto_memory_search` 工具底层数据正常，但前端表格中文件路径等显示为 `unknown`。*状态: 开放中。*

### 6. 🗺 功能请求与路线图信号
结合社区提案与现有 PR，项目下一阶段的路线图信号非常清晰：
*   **下一代运行时架构**: [PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) 提议引入模块化的 Runtime 2.0 及 `ToolCoordinator` 层；[PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) 提议统一的外部能力驱动层。**强烈信号**：项目正试图解耦单体运行环境。
*   **更精细的 Token 与上下文管理**: 用户呼吁引入像 openclaw 那样的**对话队列**和**精确 Token 统计** ([Issue #5103](https://github.com/agentscope-ai/QwenPaw/issues/5103))。目前对应的 [PR #5130](https://github.com/agentscope-ai/QwenPaw/pull/5130) (每轮对话 Token 用量浮窗) 已经提交，极有可能进入下个版本。
*   **更灵活的交互流控制**: 用户苦于第三方平台 (钉钉/飞书) 对话时必须发送 `/stop` 的痛点，请求可配置的中断、引导和队列机制 ([Issue #5116](https://github.com/agentscope-ai/QwenPaw/issues/5116))。

### 7. 💬 用户反馈摘要 (真实痛点)
*   **改名带来的迁移阵痛**: 用户反馈 `copaw` 到 `qwenpaw` 的改名留下了坑，导致插件安装失败、路径混乱 (`~/.copaw/` 与 `~/.qwenpaw/` 并存) ([Issue #5104](https://github.com/agentscope-ai/QwenPaw/issues/5104))。
*   **UI 简洁与功能缺失的矛盾**: 1.1.11 版本的新版 UI 虽然更简洁，但导致原本正常的附件下载功能报错失效 ([Issue #5102](https://github.com/agentscope-ai/QwenPaw/issues/5102))。
*   **长文本自动化任务容易中断**: 用户反馈在进行长文档处理或代码执行时，Agent 循环容易崩溃或被意外打断，期待更稳定的 Agent Loop ([Issue #5101](https://github.com/agentscope-ai/QwenPaw/issues/5101))。

### 8. ⏳ 待处理积压
*   **严重未决安全风险**: [Issue #5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) Agent 绕过 Guard 删文件的问题。维护者需尽快 review 并合并关于 Sandbox 接口和 Workspace 目录隔离的相关 PR。
*   **长期未解决的配置失效问题**: [Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) (创建于 4 月) 报告 Docker 重启后长期记忆向量模型配置失效被重置。虽然今日有更新，但底层根因 (`agent.json` 初始化覆盖逻辑) 仍需核心团队彻底排查。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-06-12  
**数据来源**: [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持了极高的社区活跃度，共处理了 **48 条 Issue 更新**（新开/活跃 25，关闭 23）以及 **50 条 PR 更新**（待合并 32，合并/关闭 18）。尽管今日没有发布新版本，但开发团队在修复 V0.8.0-beta-1 引入的回归问题、完善 MCP (Model Context Protocol) 配置及 Web Dashboard 稳定性方面取得了重大进展。大量涉及核心 Runtime、Gateway 安全策略以及多渠道路由的 PR 被合并，标志着项目正在为大版本的正式发布进行密集的代码夯实与缺陷清理。

---

### 2. 版本发布
**今日无新版本发布。** 
当前主干代码正处于 `v0.8.0-beta-1` 的快速迭代期，重点集中在修复 Beta 版本中暴露的配置与兼容性问题。

---

### 3. 项目进展
今日共有 18 个 PR 被合并/关闭，多个核心模块向前推进：

*   **配置与交互修复**: 
    *   PR [#7510](https://github.com/zeroclaw-labs/zeroclaw/pull/7510) 修复了 `quickstart` 指令中 API Key 大小写解析不匹配的问题。
    *   PR [#7502](https://github.com/zeroclaw-labs/zeroclaw/pull/7502) 完善了本地化文档（CJK 降级回退），提升了中文等多语言用户的体验。
*   **工具与沙盒安全**: 
    *   PR [#7206](https://github.com/zeroclaw-labs/zeroclaw/pull/7206) 修复了计算器工具的阶乘溢出漏洞（u128 整型限制）。
    *   PR [#7463](https://github.com/zeroclaw-labs/zeroclaw/pull/7463) 修复了 Agent 加载 Skills 时工作目录指向错误导致技能静默失效的严重 Bug。
*   **Web 控制台增强**: PR [#7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) 关闭并推动了 Office 文档（DOCX/XLSX/PPTX 等）解析的 WASM 插件集成。
*   **自动化工作流校验**: PR [#7501](https://github.com/zeroclaw-labs/zeroclaw/pull/7501) 为 CI 引入了真实的 Workspace 验证器，修复了 Close gate 中的 TOCTOU 竞态条件漏洞。

---

### 4. 社区热点
今日社区讨论极其火热，开发者与用户在以下帖子中进行了深入交互：

*   **长期 Web UI 故障排查**：Issue [#4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)（评论数 30）。多位用户反馈 Web Dashboard 和 Tauri 桌面端持续报 "not available" 错误。该问题横跨多个版本，反映了构建分发环节的痛点。
*   **AI 记忆与反思机制（Dream Mode）**：Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)（评论数 17）。由用户提出让 AI 在闲置时进入“梦境模式”，进行记忆整合和反思学习。该高价值特性已被标记为 `accepted`。
*   **容器化分发讨论**：Issue [#3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)（评论数 13，👍 3）。社区强烈呼吁提供一个包含所有特性（如 WhatsApp 等）的 "full" Docker 镜像，以降低非技术用户的部署门槛。
*   **插件架构设计**：Issue [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420)（RFC: 原生动态库插件系统）和 Issue [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)（RFC: OCI 容器仓库作为 WASM 插件存储）。社区正积极探讨如何打破单体架构，通过 WASM/动态库实现 AI 技能的热插拔。

---

### 5. Bug 与稳定性
今日报告并处理了多个高危（S0/S1）Bug，整体稳定性战役仍在继续：

*   **[S0 安全风险] 模型思维链泄露/丢失**：Issue [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)。在使用小米 mimo-v2.5 模型的思考模式时，`reasoning_content` 未正确在 Agent 循环中传递。*(当前状态：Blocked，需等待提供商修复或兼容层重构)*。
*   **[S1 工作流阻断] MCP 工具静默失效**：Issue [#6873](https://github.com/zeroclaw-labs/zeroclaw/issues/6873) 和 [#6874](https://github.com/zeroclaw-labs/zeroclaw/issues/6874)。MCP 配置中 `enabled` 默认为 false，而 `deferred_loading` 默认为 true。这一组合导致用户配置了 MCP 服务器后工具无法调用。*(当前状态：已修复关闭，相关文档已更新)*。
*   **[S1 工作流阻断] 代理委托模式阻断**：Issue [#7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470)。多 Agent 互动时，安全配置 `allowed_tools` 为空会导致委派失败。*(当前状态：Accepted，需修复)*。
*   **[S1 工作流阻断] Android/Termux 无限循环**：Issue [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036)。在安卓环境下执行程序时，Agent 陷入完全相同的消息死循环。*(当前状态：Blocked，需作者提供复现路径)*。

---

### 6. 功能请求与路线图信号
结合被标记为 `Accepted` 的 Issue 和活跃的大型 PR，下一版本的核心主线将围绕 **“智能路由、深度会话控制与可视化配置”** 展开：

*   **意图驱动的多渠道路由（RFC #6969）**：PR [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361)（XL）正在实现基于自然语言的意图提取，允许 AI 自动决定将回复发送至 Telegram、Slack 还是 Discord。Issue [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) 是其前置需求。
*   **Zerocode 交互式 TUI/Web 控制**：PR [#7515](https://github.com/zeroclaw-labs/zeroclaw/pull/7515)（XL）正在重构 TUI 会话头，允许用户直接在聊天界面切换模型/提供商，并新增了 `/restart-session` 命令。
*   **MCP 可视化编辑**：PR [#7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267)（XL）引入了针对 `[[mcp.servers]]` 的按字段可视化编辑，彻底告别手动编写 JSON 数组配置的时代。

---

### 7. 用户反馈摘要
透过海量 Issue 评论，我们可以提炼出当前真实用户的几个核心画像与痛点：

1.  **本地/自托管 AI 支持者的挣扎**：大量用户使用 `llama-server` (Issue [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)) 或内网部署模型。ZeroClaw 对自定义 API 的 TLS 证书校验过严（PR [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) 尝试解决）以及 OpenAI-compatible 模式的静默报错，让这部分用户体验极其受挫。
2.  **“非交互式环境”的灾难**：多名开发者试图在 CI/CD 或脚本中调用 `quickstart`，却遭遇了生成 **4.3 GB 日志的无限重绘 Bug**（Issue [#7506](https://github.com/zeroclaw-labs/zeroclaw/issues/7506)，PR [#7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513)）。说明项目在企业自动化落地的边界测试上仍有欠缺。
3.  **被“假死配置”折磨的开发者**：诸如 `context_aware_tools`（Issue [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)）或 `max_tool_iterations`（Issue [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)），配置项存在但完全不生效或作用域不符。用户反馈“期望很高，但排查半天发现代码根本没读取这个字段”。

---

### 8. 待处理积压
以下重要 Issue/PR 处于停滞状态，需要维护者重点关注：

*   **PR [#6630](https://github.com/zeroclaw-labs/zeroclaw/pull/6630)**: Telegram 等渠道无法利用 Prompt 缓存，导致每轮对话强制重新处理约 12k Token，严重拖慢响应速度并增加 API 成本。（标记为 `needs-author-action`，已过期）
*   **PR [#6719](https://github.com/zeroclaw-labs/zeroclaw/pull/6719)**: 跨会话持久化模型切换状态。目前用户在对话中切换模型后，下一条消息又会被重置回默认模型。（标记为 `priority:p1`，积压待处理）
*   **Issue [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036)**: Termux/Android 环境下的 Agent 死循环崩溃问题，由于缺少有效的复现信息，阻碍了问题的进一步解决。

</details>