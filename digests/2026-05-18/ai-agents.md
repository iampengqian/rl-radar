# OpenClaw 生态日报 2026-05-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-17 22:40 UTC

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

# OpenClaw 项目动态日报 (2026-05-18)

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) | 分析周期：过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日保持着**极高的社区活跃度与开发迭代速度**。过去 24 小时内，项目共处理了 500 条 Issue 动态（新开与活跃 474 条，关闭 26 条）以及 500 条 PR 动态（待合并 429 条，合并/关闭 71 条），社区参与度呈现出井喷态势。

开发团队在短时间内连续推出了 **2 个 Beta 版本**（`v2026.5.16-beta.4` 和 `v2026.5.16-beta.5`），重点对 Mac 客户端的 UI 体验和底层安全审计机制进行了重构与增强。

从社区反馈来看，**安全性（API 密钥保护、权限隔离）**和**多渠道消息稳定性（消息丢失、上下文串台）**是当前用户关注的核心焦点。虽然积压的待合并 PR 较多（429条），但核心贡献者正在优先处理影响网关稳定性和数据安全的关键缺陷。

---

## 2. 版本发布

今日 Catch-up 发布了 2 个紧贴前沿的最新版本：

### 🚀 v2026.5.16-beta.5
- **链接**: [openclaw 2026.5.16-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.5)
- **更新重点 (Mac App UI 重构)**:
  - 设置页面全面重构，采用一致的卡片布局和缓存导航。
  - 清理了权限、语音、技能、定时任务和执行面板的代码，使侧边栏间距更加平稳。
  - **技能重命名**：将 repo-local Codex 结束审查技能及辅助工具重命名为 `autoreview`。

### 🚀 v2026.5.16-beta.4
- **链接**: [openclaw 2026.5.16-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.4)
- **更新重点 (安全与审计)**:
  - **审计抑制机制**：新增 `security.audit.suppressions`，允许接受特定的审计发现。被抑制的匹配项将保留在 JSON 输出中（带有活跃的抑制通知），但从活动摘要中移除。([#76949](https://github.com/openclaw/openclaw/issues/76949), 感谢 @100menotu001)
  - **子代理标签**：开始对委派的子代理引入标签管理机制。

---

## 3. 项目进展

今日共有 71 个 PR 被合并或关闭，涵盖了底层性能优化、网关健壮性修复以及工具链扩展，标志着项目整体稳定性的显著提升。

**值得注意的核心合并进展：**
- **性能优化大胜**：
  - [PR #73039](https://github.com/openclaw/openclaw/pull/73039) (已合并): 缓存了 `createOpenClawTools` 中的 media + web 工厂实例，避免了每次代理轮次重复解析插件清单和权限，大幅降低内存和 CPU 开销。
  - [PR #78101](https://github.com/openclaw/openclaw/pull/78101) (已合并): 优化插件注册表快照加载，合并 2 秒内的重复调用，解决了 WSL2/NFS 等慢速文件系统下耗时 5-10 秒的阻塞问题。
- **安全与修复**：
  - [PR #81897](https://github.com/openclaw/openclaw/pull/81897) (已合并): 修复了高优先级的安全运营发现，阻断了活动技能的 SecretRef 环境变量向宿主/CLI子进程泄露，并优化了 WhatsApp 的流处理。
  - [PR #42009](https://github.com/openclaw/openclaw/pull/42009) (已合并): 修复了使用 `--agent` 和 `--to` 参数时，会话密钥错误合并导致状态混乱的 Bug。

---

## 4. 社区热点

今日讨论最热烈的问题依然集中在跨平台支持和安全管控上：

1. **[Issue #75](https://github.com/openclaw/openclaw/issues/75) (👍 75, 💬 104)**: **Linux/Windows 原生客户端需求**
   - **诉求**：社区强烈呼吁提供 Linux 和 Windows 的 Clawdbot 桌面客户端（目前仅有 macOS, iOS, Android）。
   - **分析**：作为点赞和评论数双高的史诗级需求，这标志着开发者群体对跨平台一致体验的极度渴望。
2. **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (💬 26)**: **工具调用期间的内部文本泄露到消息渠道**
   - **诉求**：Agent 在调用工具时生成的内部推理文本（如错误处理、重试等），错误地被推送到 Slack/iMessage 等最终用户渠道，严重影响用户体验。
3. **[Issue #12602](https://github.com/openclaw/openclaw/issues/12602) (💬 13)**: **支持 Slack Block Kit**
   - **诉求**：用户希望 Agent 能够返回富文本交互格式（如 CRM 摘要、行动按钮），而不是当前单一的纯文本/Markdown。

---

## 5. Bug 与稳定性

今日暴露了多个 P0/P1 级别的稳定性和状态管理缺陷，部分已有修复 PR：

- 🔴 **P0 核心安全与鉴权泄露**
  - **[PR #83294](https://github.com/openclaw/openclaw/pull/83294) & [PR #83296](https://github.com/openclaw/openclaw/pull/83296)** (修复进行中): 修复了将明文 API 密钥写入 `models.json` 的严重隐患，保留环境变量和 SecretRef 标记。
  - **[Issue #11829](https://github.com/openclaw/openclaw/issues/11829) (🔒 Security)**: API 密钥在内存中暴露给 LLM 的路线图讨论。
- 🟠 **P1 消息丢失与上下文错乱**
  - **[Issue #22676](https://github.com/openclaw/openclaw/issues/22676)**: Signal 守护进程在重启时存在竞态条件，导致孤立进程和发送失败。
  - **[Issue #32296](https://github.com/openclaw/openclaw/issues/32296)**: Agent 回复历史消息而非当前消息（会话上下文混淆）。
  - **[Issue #31331](https://github.com/openclaw/openclaw/issues/31331)**: Docker Sandbox 环境下，`workspaceAccess` 无法正确绑定挂载路径。
- 🟡 **P2 环境与回归问题**
  - **[Issue #40540](https://github.com/openclaw/openclaw/issues/40540)**: `openclaw update` 命令在 Windows 上因 `EBUSY` 错误失败。

---

## 6. 功能请求与路线图信号

从近期的 PR 和 Issue 动态来看，**“安全管控细化”**与**“企业级集成”**是明确的下一步演进方向：

- **密钥与权限隔离 (极有可能纳入下一版本)**：
  - [Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (Masked Secrets) 和 [PR #82326](https://github.com/openclaw/openclaw/pull/82326) (Plugin Manifest Contract for SecretRef) 揭示了团队正在构建一套完善的密钥安全提供者架构，使 Agent 只能使用但不能查看敏感信息。
- **细粒度权限控制**：
  - [Issue #39979](https://github.com/openclaw/openclaw/issues/39979): 建议采用类似 Unix DAC 的路径级读写执行（RWX）权限控制，替代当前粗粒度的二进制执行白名单。
- **企业多渠道支持**：
  - [Issue #20786](https://github.com/openclaw/openclaw/issues/20786): 请求支持 Telegram Business Bot。
  - [PR #42617](https://github.com/openclaw/openclaw/pull/42617) (待合并): 允许自定义按渠道配置的配对（Pairing）验证消息，为企业部署提供品牌化支持。

---

## 7. 用户反馈摘要

提炼自近 500 条活跃讨论，用户的真实反馈呈现出明显的两极分化：

- **👍 满意与高价值点**：
  - **多代理架构**：高级用户极度赞赏 Sub-agent 和 Cron 的组合，认为其在自动化工作流中释放了巨大潜力。
  - **Mac 客户端更新**：Settings UI 的重构（Beta 5）收到了广泛好评，认为操作逻辑更加清晰。
- **👎 痛点与吐槽**：
  - **Token 浪费严重**：[Issue #14785](https://github.com/openclaw/openclaw/issues/14785) 指出，工具的 JSON Schema 每次会话强占约 3500 tokens，导致上下文窗口极大浪费。
  - **Cron 机制不够可靠**：用户抱怨 Cron 依赖 LLM 解释导致简单任务延迟甚至超时（[Issue #18160](https://github.com/openclaw/openclaw/issues/18160) 呼吁引入 Direct Exec 模式）。
  - **Bootstrap 文件加载混乱**：[Issue #29387](https://github.com/openclaw/openclaw/issues/29387) 反映特定代理配置目录下的引导文件被系统静默忽略，导致人设不稳定。

---

## 8. 待处理积压

以下关键问题虽然已有讨论或对应 PR，但处理周期较长，需要维护者紧急关注以避免社区信任流失：

1. **网关重启动导致数据丢失**：
   - [Issue #40001](https://github.com/openclaw/openclaw/issues/40001): Write 工具缺乏 append 模式，Cron 隔离会话总是覆盖共享文件（如日志/记忆），导致静默数据丢失。相关的跟进 PR 仍待合并。
2. **网关级成本管控缺失**：
   - [Issue #42475](https://github.com/openclaw/openclaw/issues/42475): 缺乏代理级别的每日/每月预算强限制。用户担心 Agent 陷入死循环会导致 API 账单失控。
3. **大型长期 PR 待定**：
   - [PR #62682](https://github.com/openclaw/openclaw/pull/62682): 旨在修复代理终端中止与可重试失败的区分逻辑，代码量较大（Size: L），目前仍处于需要真实行为验证阶段，阻碍了多模型容错机制的完善。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 18 日的社区动态数据，为您呈上横向对比与生态深度分析报告。

---

### 1. 生态全景态势
当前个人 AI 助手与自主智能体开源生态正处于**从“单体对话”向“多智能体协作与外部工具集成”跃升的关键重构期**。整体呈现两大特征：一是**基础设施层面的阵痛**，随着各框架引入 Cron 定时任务、子代理和复杂沙盒，上下文混淆、并发竞态和网关权限阻断等底层 Bug 频发；二是**全球本土化与多模型适配的博弈**，项目均在努力兼容 OpenAI 最新规格（如 Codex/CLI），同时国内生态对 DeepSeek-V4、Qwen、Kimi 及微信/钉钉等私有协议的强适配需求正在重塑开源项目的优先级。

### 2. 各项目活跃度对比
*健康度评估标准：合并效率、Issue 响应速度、积压情况及安全稳定性*

| 项目名称 | Issue 动态 | PR 动态 | Release 情况 | 生态健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (活跃 474) | 500 (合并 71) | 2个 Beta版 (UI/安全) | **极高活跃 / 核心重构**：面临大版本前的测试压力，积压 PR 多，安全与网关稳定性是焦点。 |
| **Hermes Agent** | 50 (活跃 43) | 50 (合并 16) | 无 | **高活跃 / 缺陷修复期**：OAuth 和 i18n 严重缺陷导致社区受挫，核心 Token 压缩逻辑亟待修复。 |
| **IronClaw** | 11 活跃 | 50 (合并 19) | 无 | **高活跃 / 架构重构**：底层正经历 "Reborn" 级别的重组，UI 与后端状态同步存在严重脱节。 |
| **ZeroClaw** | 20 (活跃 16) | 50 (合并 12) | 无 | **高活跃 / 密集Review**：深陷国内大模型 API 兼容性泥潭，代码库存在历史包袱（如丢失 commits）。 |
| **CoPaw** | 17 活跃 | 17 (合并 4) | 无 | **中等活跃 / 质量治理**：曝光出 P0 级 RCE 安全漏洞，正在大力推进前端 E2E 测试基建。 |
| **NanoBot** | 7 活跃 | 18 (合并 9) | 无 | **中等活跃 / 稳定阵痛**：v0.2.0 升级导致 Docker 部署和长会话体验受挫，但修复响应迅速。 |
| **NanoClaw** | 8 活跃 | 12 (合并 9) | 无 | **中等活跃 / 功能横向扩展**：专注金融技能栈与多通道统一，存在 Signal 密钥泄露的高危隐患。 |
| **Moltis** | 2 新增 | 3 (合并 3) | 1个 (重大基建更新) | **稳健 / 功能迭代**：成功落地外部智能体持久会话与远程组网，但前沿模型解析响应较慢。 |
| **PicoClaw** | 12 活跃 | 7 (合并 1) | 1个 (Nightly版) | **边缘计算特色**：极客与边缘设备受众稳定，RISC-V 及底层 exec 工具安全逻辑面临挑战。 |
| **LobsterAI** | 0 活跃 | 9 (自动化) | 无 | **停滞预警**：人工维护基本停滞，高质量 PR 积压超 50 天未得到官方 Review。 |
| **NullClaw** | 3 新增 | 0 合并 | 无 | **低活跃 / 核心阻塞**：多智能体架构的消息总线缺陷导致子代理结果静默丢失，亟待干预。 |
| *TinyAGI / ZeptoClaw*| 0 | 0 | 无 | 静默无动态。 |

---

### 3. OpenClaw 在生态中的定位
* **生态压舱石与风向标**：相比于 PicoClaw 聚焦边缘极客或 NullClaw 的实验性质，OpenClaw 拥有最庞大的社区基盘（单日近千条动态），是当之无愧的“基础设施级”项目。
* **技术路线差异：企业级安全与多渠道中枢**：NanoBot 和 PicoClaw 还在解决基础的流式输出和本地部署问题时，OpenClaw 已经将重心转向了**API 密钥隔离、细粒度 DAC 权限管控和跨渠道（Slack/iMessage/WhatsApp）的有状态网关建设**。
* **同级别对比优势/劣势**：相比 Hermes Agent 和 IronClaw，OpenClaw 在多渠道消息稳定性和本地原生客户端支持上呼声最高；但由于其庞大复杂的插件注册表和上下文机制，导致其**系统级开销大**（如 JSON Schema 狂占 Token），这给了 NanoClaw 等轻量级高度模块化框架以细分市场的机会。

---

### 4. 共同关注的技术方向 (多项目涌现)
1. **多智能体/子代理编排与沙盒安全** *(涉及 OpenClaw, NullClaw, Moltis, PicoClaw)*：
   单体 Agent 已触及能力天花板，生态全面转向 Multi-Agent。但目前行业面临共同痛点：子代理执行结果丢失（NullClaw 的 Bus 机制失效）、Agent 间上下文串台、以及隔离不严格导致的宿主机密钥泄露。
2. **国产大模型（DeepSeek/Qwen/Kimi）的私有协议适配** *(涉及 ZeroClaw, NanoBot, PicoClaw)*：
   国产模型在 Tool Call、Reasoning Tag（思考链标签）上的流式输出规范与 OpenAI 存在微妙差异，导致开源项目原有的 Provider 层大面积报错或陷入死循环，完善 OpenAI-Compatible 的容错边界是当下的硬需求。
3. **Headless 与本地 CLI 容器化部署体验** *(涉及 Hermes Agent, NanoBot, Moltis)*：
   开发者对 Docker、CLI 模式（甚至基于 Tauri 的桌面端）的需求暴增，OAuth 授权流程在无头环境（无浏览器）下的断流成为部署的极大阻碍。
4. **Token 上下文的精细化瘦身** *(涉及 OpenClaw, Hermes Agent, NanoBot)*：
   随着 Prompt 膨胀，针对 Skill 路由的优化（如 NanoBot 引入 BM25 算法）、减少重复工具注入、解决长对话压缩机制引发的配置丢失，是提升运行效能的核心发力点。

---

### 5. 差异化定位分析
* **系统层 vs 应用层**：**OpenClaw**、**Hermes Agent** 和 **IronClaw** 定位为“AI 操作系统”（重底层网关、沙箱、鉴权）；而 **NanoClaw** 和 **Moltis** 更像是有特定偏好的调度器（NanoClaw 偏向金融与多通道，Moltis 专注个人助手与语音/外部会话）。
* **技术栈与受众分化**：**PicoClaw** 依托体积优势死磕 RISC-V 和 Android TV 盒子（边缘计算场景）；**CoPaw** 深耕国内企业 IM（钉钉/微信集成）；**LobsterAI** 借助前端优化的底子尝试提供更现代的 WebUI，但受限于维护力度。
* **安全性差异**：在安全架构上，**OpenClaw** 与 **ZeroClaw** 正在积极引入类似 Unix DAC 的路径执行权限（RWX），而 **CoPaw** 甚至还未完全堵住插件接口的 RCE 漏洞，体现出项目所处发展阶段的不同。

---

### 6. 社区热度与成熟度分层
* **快速扩张与架构阵痛期（头部）**：**OpenClaw, Hermes Agent, IronClaw**。社区热度极高， PR 和 Issue 呈井喷态势。由于急于引入新架构（如 IronClaw 的 "Reborn"），代码合并频繁，但 UI 状态同步和 OAuth 认证等基础体验面临严重回归。
* **稳步迭代与垂直突破期（腰部）**：**ZeroClaw, NanoBot, NanoClaw, Moltis, CoPaw**。这些项目基础功能已跑通，目前正在针对特定痛点（如 ZeroClaw 对抗时区与 API 兼容性、Moltis 拥抱组网技术、CoPaw 建立自动化 E2E 体系）进行攻坚战，响应速度快。
* **维护停滞或危机期（尾部）**：**NullClaw, LobsterAI, PicoClaw**。其中 NullClaw 暴露出 Zig 底层架构的消息路由硬伤且无人修复；LobsterAI 的核心维护者处于失联状态，外部贡献者的 PR 大量堆积发霉。

---

### 7. 值得关注的趋势信号 (开发者参考)
1. **从“调 API”向“本地沙箱控制”下沉**：多个项目（CoPaw, ZeroClaw, PicoClaw）都在强化对本地 exec 命令的拦截或大模型执行工具的重构（如引入 Direct Exec 模式替代 LLM 解释）。**建议**：开发者在构建 Agent 时，必须为 Tool 和 Sandbox 加入独立的异常捕获和降级策略，不要盲目信任 LLM 的路由能力。
2. **异步长时任务与状态持久化成为新战场**：随着用户让 Agent 执行耗时变长的任务，Cron 机制（ZeroClaw, OpenClaw）和外部会话持久化（Moltis）的痛点集中爆发。**建议**：在设计智能体工作流时，需实现彻底的状态机与计算逻辑分离，确保网络抖动或容器重启不会导致静默数据覆盖。
3. **企业级审计与密钥托管规范的觉醒**：OpenClaw 引入了审计抑制机制和 SecretRef 架构。**建议**：针对 AI 助手容易产生“上下文越权访问”的风险，未来的企业级 AI 应用必须实现“可用不可见”的密钥注入机制，并记录详尽的 MCP 工具调用审计日志。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 NanoBot 项目 2026-05-18 动态日报：

# 📊 NanoBot 项目动态日报 (2026-05-18)

## 1. 今日速览
过去 24 小时内，NanoBot 项目保持了**极高的开发与社区活跃度**。项目共处理了 **18 个 PR**（其中 9 个顺利合并/关闭，9 个待合并），并产生了 **7 个 Issue 更新**（6 新开，1 关闭）。从提交内容来看，开发团队和社区贡献者正在集中精力**修复 Docker 部署的一致性问题**以及**优化 WebUI 的流式输出与长会话渲染性能**。整体而言，项目处于健康且快速迭代的上升期，但近期 v0.2.0 架构升级带来的部署与稳定性阵痛仍需关注。

---

## 2. 版本发布
* **无新版本发布**。
*(注：当前主干版本推测为 v0.2.0 之后的迭代版本，社区正通过热修复 PR 完善其稳定性。)*

---

## 3. 项目进展
今日共有 9 个 PR 被合并或关闭，显著提升了项目的稳定性和易用性：

* **🚀 WebUI 与长任务架构优化：** 
  由核心贡献者 `Re-bin` 提交的 PR [#3788](https://github.com/HKUDS/nanobot/pull/3788) 合并，正式引入了 `/goal` 命令与 `long_task` 长效任务机制，并对 WebUI 进行了重构；随后 PR [#3877](https://github.com/HKUDS/nanobot/pull/3877) 进一步优化了流式输出渲染和运行时同步性能，解决了长对话卡顿问题。
* **🛠️ Agent 核心逻辑与 CLI 修复：**
  PR [#3881](https://github.com/HKUDS/nanobot/pull/3881) 修复了 AutoCompact 和 Consolidator 之间的严重竞争条件；PR [#3878](https://github.com/HKUDS/nanobot/pull/3878) 解决了 CLI 模式下推理模型（如 DeepSeek-V4）逐字打印的问题。
* **🐳 Docker 部署修复闭环：**
  PR [#3870](https://github.com/HKUDS/nanobot/pull/3870) 和 [#3872](https://github.com/HKUDS/nanobot/pull/3872) 修复了构建时 `hatch_build.py` 找不到的致命错误；PR [#3874](https://github.com/HKUDS/nanobot/pull/3874) 统一了部署文档中的 Docker 启动参数。
* **🌐 国内大模型网络适配：**
  PR [#3864](https://github.com/HKUDS/nanobot/pull/3864) 合并，将中文错误提示 `访问量过大` 加入瞬态错误标记，使系统能够对国内特定模型的限流自动重试。

---

## 4. 社区热点
今日社区讨论最密集的领域集中在 **Docker 部署体验** 与 **UI 交互反馈**：

* **Issue #3790** - [WebUI会话-打印内容显示错乱](https://github.com/HKUDS/nanobot/issues/3790)：**热度最高（14条评论）**。多名用户确认在升级至最新源码后出现打印格式错乱。该问题已通过 PR [#3877](https://github.com/HKUDS/nanobot/pull/3877) 和 [#3878](https://github.com/HKUDS/nanobot/pull/3878) 得到针对性修复。
* **Issue #3873** 与 **Issue #3876**（作者 `URD0TH`）：Docker 部署与 WebUI 访问受限问题引起热议。用户指出当前的 WebUI 引导程序强制要求 `localhost`，导致容器外部根本无法访问。维护者已迅速响应，相关修复文档 PR [#3875](https://github.com/HKUDS/nanobot/pull/3875) 已提交。

---

## 5. Bug 与稳定性
今日新增若干 Bug，部分已确认修复，按严重程度评估如下：

* **🔴 严重：**
  * **[#3876] WebUI Docker 受阻**：由于硬编码仅允许本地访问，导致 Docker 部署形同虚设。*(状态：已有对应修复 PR [#3875] 提交中)*
  * **[#3881] 后台会话竞争条件**：后台压缩与整理任务并发导致会话状态损坏。*(状态：已通过 PR [#3881] 合并修复)*
* **🟠 中度：**
  * **[#3884] WebUI 首次响应后关闭**：在配置 WebSocket 渠道时，WebUI 会话在收到首次回复后自动断开。*(状态：Open，待确认是否与 WebUI 重构相关)*
  * **[#3857] Bootstrap HTTP 500**：网关正常运行但前端报 500 错误。*(状态：Open，排查中)*
* **🟡 低度：**
  * **[#3863] 微信版本无法登录**：扫码提示微信版本过低，涉及底层协议适配。*(状态：Open，关联到底层协议升级 Issue #3882)*

---

## 6. 功能请求与路线图信号
从今日的 PR 提交可以看出项目近期的演进方向，**上下文长度管理**与**多模态接入**是重点：

* **技能路由与 Prompt 瘦身：** PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) 引入了基于 BM25 算法的 skill router，旨在将系统 Prompt 缩减 60%。如果合并，将大幅降低 API Token 消耗。
* **多模态生成：** PR [#3879](https://github.com/HKUDS/nanobot/pull/3879) 提出接入 MiniMax 图像生成模型，预示着 NanoBot 正在从纯文本 Agent 向多模态智能体演进。
* **CLI 模型管理：** PR [#3883](https://github.com/HKUDS/nanobot/pull/3883) 请求支持通过命令行直接修改和测试模型配置，期望改善本地开发体验。

---

## 7. 用户反馈摘要
* **部署门槛依然是痛点：** 升级到 v0.2.0 后，Docker 构建失败、前端端口未暴露、bwrap 安全沙箱配置冲突频发，说明现有升级文档未能覆盖实际生产环境的复杂性。
* **中国本土化体验需加强：** 除了国内 LLM API 的错误提示未国际化（未翻译）导致程序无法自动重试外，微信渠道底层协议的老化（v1.x 到 v2.x）也让国内用户面临无法登录的尴尬。
* **长对话与思考链输出体验下降：** 用户对 DeepSeek 等推理类模型的体验反馈较差，打印错乱和单行显示影响了终端用户的使用。

---

## 8. 待处理积压
以下关键 PR/Issue 长期未合并或响应，需维护团队重点关注：

* **⏳ 需合并的文档/Docker 修复：** PR [#3875](https://github.com/HKUDS/nanobot/pull/3875)（解决 Docker 外部访问）和 PR [#3874](https://github.com/HKUDS/nanobot/pull/3874) 当前状态均为 Open，阻碍了用户顺利部署。
* **⏳ 微信底层协议升级提案：** Issue [#3882](https://github.com/HKUDS/nanobot/issues/3882)（已被关闭但无后续）提出升级 `openclaw-weixin` 至 v2.x，由于涉及逆向工程 API 的稳定性，此架构级变更需要官方给出明确的迁移计划。
* **⏳ 历史遗留功能 PR：** PR [#2060](https://github.com/HKUDS/nanobot/pull/2060)（工作区路径限制配置）自 3月15日提交至今仍未合并，可能存在设计上的分歧，建议更新状态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 📊 Hermes Agent 项目动态日报 (2026-05-18)

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 分析周期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持了**极高的开发与社区活跃度**，过去 24 小时内共有 50 个 Issue 更新（新开/活跃 43 个，关闭 7 个）以及 50 个 PR 更新（待合并 34 个，合并/关闭 16 个）。项目当前正处于 v0.13.0/v0.14.0 发布后的**高频迭代与缺陷修复阶段**，社区反馈了大量涉及新版本 OAuth 认证、多平台网关、上下文压缩的核心问题。尽管今日无新版本发布，但多个已提交的修复 PR（如 i18n 缺失、插件加载绕过等）表明团队正在积极为下一个稳定版本积累代码。

---

## 2. 版本发布

**今日无新版本发布。** 
当前开发分支仍在消化近期 v0.13.0 及 v0.14.0 边缘版本的反馈，重点集中在修复发布后暴露的集成与稳定性问题。

---

## 3. 项目进展

今日共有 **16 个 PR 被合并或关闭**，重点推进了以下几个维度的建设：

### 🎯 TUI / Dashboard 体验优化
- **PR [#27647](https://github.com/NousResearch/hermes-agent/pull/27647) (CLOSED)**：将斜杠命令自动补全上限从 30 提升至 200，解决了拥有大量技能用户无法在菜单中查看完整命令的痛点。
- **PR [#27621](https://github.com/NousResearch/hermes-agent/pull/27621) & [#27619](https://github.com/NousResearch/hermes-agent/pull/27619) (CLOSED)**：连续修复了 Dashboard 插件导航栏与页面链接中因直接使用 glob 匹配符导致的虚假 404 错误。

### 🛠 网关与工具链增强
- **PR [#27615](https://github.com/NousResearch/hermes-agent/pull/27615) (CLOSED)**：为看板通知器添加了 `commented` 事件支持和跨工作区通配符订阅，增强了多任务协同追踪能力。
- **PR [#27593](https://github.com/NousResearch/hermes-agent/pull/27593) (CLOSED)**：为 `session_search` 工具增加了 `in_session` 模式，允许 Agent 准确检索当前对话的上下文，避免产生幻觉。
- **PR [#27588](https://github.com/NousResearch/hermes-agent/pull/27588) (CLOSED)**：强制要求 `clarify` 调用必须携带验证事实上下文，提升了 Agent 与用户交互时的逻辑严谨性。

---

## 4. 社区热点

今日社区讨论最热烈的问题集中在**平台兼容性、API 接入与多语言支持**上：

1. **Windows 环境安装崩溃**：[#27622](https://github.com/NousResearch/hermes-agent/issues/27622) 与 [#27397](https://github.com/NousResearch/hermes-agent/issues/27397) 
   - **现象**：大量 Windows 用户（PowerShell 7.6.1 及更低版本）报告使用一键安装脚本时出现 `assignment expression is not valid` 错误。
   - **诉求**：官方安装文档和脚本对旧版/特定环境 PS 的兼容性急需修复，这构成了新用户的“首日门槛”。

2. **Telegram 网关中的 OpenAI Codex 认证阻断**：[#12058](https://github.com/NousResearch/hermes-agent/issues/12058)
   - **现象**：CLI 中正常工作的 OAuth 凭据，在 Telegram 网关中持续报错无凭据。
   - **诉求**：网关环境变量与沙箱隔离机制下的凭据共享逻辑需要梳理。

3. **多语言与本地化(i18n)功能形同虚设**：[#27632](https://github.com/NousResearch/hermes-agent/issues/27632)
   - **现象**：升级 v0.13.0 后，所有斜杠命令输出原生翻译键（如 `gateway.status.header`）而非可读文本。
   - **诉求**：PyPI 打包流程缺失 `locales/` 目录，严重影响非英文用户体验。

---

## 5. Bug 与稳定性

今日报告了大量核心运行时的 Bug，部分严重影响了 Agent 的基础能力。以下按严重程度（P0/P1 最高）排列：

### 🔴 P1 - 核心功能失效或无限循环
- **上下文压缩死循环**：[#27566](https://github.com/NousResearch/hermes-agent/issues/27566) - Token 估算逻辑覆盖了精确的 API 值，导致压缩几乎每 1-2 轮触发一次。相关同类问题：[#23902](https://github.com/NousResearch/hermes-agent/issues/23902)。
- **Telegram 图片读取超时 30 分钟+**：[#22385](https://github.com/NousResearch/hermes-agent/issues/22385) - Agent 无法读取用户发送的图片，且未设置快速失败机制，导致大量无效等待和 API 消耗。
- **本地化(i18n)系统失效**：[#27632](https://github.com/NousResearch/hermes-agent/issues/27632) - 因 PyPI 打包遗漏导致多语言功能完全不可用。
- **视觉工具 Fallback 链静默断裂**：[#27555](https://github.com/NousResearch/hermes-agent/issues/27555) - 关键字传参错误导致 TypeError 被吞，所有视觉降级策略失效。
- **xAI Grok OAuth 授权阻断**：[#26990](https://github.com/NousResearch/hermes-agent/issues/26990) - PKCE `code_verifier` 缺失导致 Token 交换失败。

### 🟠 P2 - 体验受损或边缘场景异常
- **Docker 权限错误 (EACCES)**：[#20500](https://github.com/NousResearch/hermes-agent/issues/20500) - Docker 镜像中由于文件属主设置错误，导致 Dashboard Chat 标签页崩溃。
- **目标完成消息刷屏**：[#27585](https://github.com/NousResearch/hermes-agent/issues/27585) - 目标判定 API 出错时，Agent 会在网关通道内无限循环发送“目标已完成”的消息。

---

## 6. 功能请求与路线图信号

结合今日的 Issues 和活跃 PR，项目正在向**更高兼容性、更细粒度控制**的方向演进：

1. **企业级安全与审计**：Issue [#5041](https://github.com/NousResearch/hermes-agent/issues/5041) 提出通过 MCP 为工具调用和技能执行添加加密审计追踪。这对企业级部署是强需求，目前已有讨论但暂无对应 PR。
2. **基础设施提供商扩展**：Issue [#27546](https://github.com/NousResearch/hermes-agent/issues/27546) 提议原生支持 Zenmux 作为 Provider，PR [#27646](https://github.com/NousResearch/hermes-agent/pull/27646) 也在重构 Provider 别名解析逻辑，预示着项目即将支持更多第三方 LLM 路由网关。
3. **多路会话与编排（已在开发中）**：PR [#27642](https://github.com/NousResearch/hermes-agent/pull/27642) 正在引入 TUI 会话编排器，允许用户在单个界面内切换和管理多个实时会话。这是 Agent 走向“多任务操作系统”的重要信号。
4. **独立任务降级容灾**：Issue [#22201](https://github.com/NousResearch/hermes-agent/issues/22201) 请求为视觉、网页提取等每个独立辅助任务单独配置 `fallback_providers`，PR [#27639](https://github.com/NousResearch/hermes-agent/pull/27639) 已经在 Dashboard 层面实现 Fallback Provider 的可视化管理。

---

## 7. 用户反馈摘要

通过深挖今日的 Issue 描述，提炼出用户的以下真实痛点：
- **Docker / 无头环境用户极度受挫**：大量尝试在 Docker 或局域网无头服务器中部署的用户（如 [Issue #27573](https://github.com/NousResearch/hermes-agent/issues/27573)）被 OAuth 的 `code_challenge` 要求卡住。用户强烈希望改进 Headless 环境下的授权流程。
- **本地模型用户被“误伤”**：硬编码的平台超时时间导致本地运行 Ollama/vLLM 的用户频繁遭遇中断 ([#21525](https://github.com/NousResearch/hermes-agent/issues/21525))。
- **缺乏办公软件处理能力**：用户指出目前 Agent 缺乏对 xlsx/csv 等电子表格的结构化处理抽象 ([#4438](https://github.com/NousResearch/hermes-agent/issues/4438))，只能依靠 Agent 自行瞎猜编写 Pandas 脚本，成功率极低。
- **对 Windows 生态支持评价下降**：由于一键安装脚本的问题，多个 Windows 用户在 Issue 中表达了不满。

---

## 8. 待处理积压

以下高优先级或高影响力问题目前仍处于 Open 状态，建议维护团队优先排期：

1. **Token 估算覆盖引发的压缩风暴**：[#27566](https://github.com/NousResearch/hermes-agent/issues/27566) / [#23902](https://github.com/NousResearch/hermes-agent/issues/23902) - 严重浪费 Token 额度，影响所有重度使用者。
2. **v0.13.0 PyPI i18n 打包缺陷**：[#27632](https://github.com/NousResearch/hermes-agent/issues/27632) - 阻碍了国际用户升级。
3. **Docker / Headless 环境下 xAI/Codex OAuth 授权阻塞**：[#27573](https://github.com/NousResearch/hermes-agent/issues/27573) / [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) / [#26990](https://github.com/NousResearch/hermes-agent/issues/26990) - 影响主流极客/开发者群体的 Docker 部署体验。
4. **Windows 一键安装脚本失败**：[#27622](https://github.com/NousResearch/hermes-agent/issues/27622) / [#27397](https://github.com/NousResearch/hermes-agent/issues/27397) - 拦截了新用户的首次尝试。
5. **长期依赖过时引发安全风险**：[#27594](https://github.com/NousResearch/hermes-agent/issues/27594) / [#27595](https://github.com/NousResearch/hermes-agent/issues/27595) - `ui-tui` 中引用的 `inflight` 和 `glob` 老版本被标记存在内存泄漏和安全漏洞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-05-18)

## 1. 今日速览
PicoClaw 项目在过去24小时内保持着**高度活跃且健康**的开发状态。项目成功发布了 `v0.2.8-nightly` 的自动化构建版本，持续向下一个稳定版迭代。社区参与度显著提升，共产生了 12 条 Issue 更新（7 新开/活跃，5 关闭）和 7 条 PR 更新（6 待合并，1 已合并/关闭）。从提交内容来看，当前开发重心集中在**扩充大模型提供商**、**完善多智能体工具权限控制**以及**修复底层工具调用的安全逻辑**上，展现了项目向企业级和复杂场景迈进的势头。

---

## 2. 版本发布
- **Version:** [`nightly: Nightly Build`](https://github.com/sipeed/picoclaw/releases/tag/nightly) 
- **Tag:** `v0.2.8-nightly.20260517.0df050ff`
- **说明:** 这是一个自动化构建的每日迭代版本。包含了截至 `0df050ff` 的最新代码提交。
- **注意事项:** 官方提示该版本可能不稳定，建议开发者和测试用户谨慎在生产环境中使用。
- **更新范围:** 根据目前活跃的 PR 判断，主要包含 SiliconFlow 兼容、Web前端显示优化及部分会话和 Agent 底层重构。

---

## 3. 项目进展
今日项目主要以接收社区新特性和合并长期修复为主，整体代码库向前推进了坚实的一步：
- **合并修复 Codex 流式输出与 Telegram 重试问题 ([PR #2462](https://github.com/sipeed/picoclaw/pull/2462)):** 这是一个极具价值的社区贡献。修复了在低端设备（如 Android 7 Termux 环境下）使用 OpenAI OAuth 并接入 Telegram 时，导致的流式输出故障和重复重试触发问题，极大提升了边缘设备部署的稳定性。
- **新增 SiliconFlow 原生 Provider 支持 ([PR #2885](https://github.com/sipeed/picoclaw/pull/2885)):** 迅速响应了社区对于国内大模型推理平台 SiliconFlow 的接入需求，将其作为一等公民纳入 Provider 工厂和 Web 注册表。
- **优化前端 Chat 推理过程展示 ([PR #2886](https://github.com/sipeed/picoclaw/pull/2886)):** 重构了 Web 聊天头部的控制逻辑，支持细粒度控制（仅推理、仅工具调用、两者兼有或全不显示），提升了 WebUI 的用户体验。

---

## 4. 社区热点
今日社区讨论的焦点集中在跨平台兼容性、工具调用的安全性以及多智能体配置上：
1. **最受欢迎的老牌需求：LM Studio Easy Connect ([Issue #28](https://github.com/sipeed/picoclaw/issues/28))**
   - **数据:** 👍 2 | 评论: 19
   - **分析:** 用户迫切希望简化在 Android 等设备上连接本地 LM Studio 的步骤。作为早期的 Enhancement 需求，至今仍有持续的讨论，说明 PicoClaw 在本地边缘计算/极客玩家群体中有相当的受众。
2. **exec 工具的误杀问题 ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042))**
   - **数据:** 👍 2 | 评论: 12
   - **分析:** 涉及底层 `guardCommand` 的正则表达式安全边界判定过于“简单粗暴”。用户在使用天气插件等发起网络请求时，正常的 URL 被拦截为非法的相对路径。这是一个影响日常使用体验的高频痛点。
3. **MCP Server 的安全接入机制 ([Issue #2546](https://github.com/sipeed/picoclaw/issues/2546))**
   - **数据:** 评论: 5 | 状态: CLOSED
   - **分析:** 建议支持 OAuth 2.1 + PKCE 添加 MCP 服务器，实现类似 Claude.ai 的无代码安全添加体验。该 Issue 在今日被关闭，可能已被官方采纳并在其他分支实现，值得注意。

---

## 5. Bug 与稳定性
今日报告了多个维度的 Bug，部分涉及核心安全与架构逻辑，按严重程度排序如下：

- **🔴 P0: RISC-V 架构运行崩溃 ([Issue #2887](https://github.com/sipeed/picoclaw/issues/2887))**
  - **描述:** 在 RISC-V Debian 环境下运行 `.deb` 版本连接 OpenAI 模型时无法正常工作。RISC-V 是当前智能硬件和边缘 AI 的热点架构，此 Bug 会阻断相关开发者生态。目前暂无对应修复 PR。
- **🟡 P1: exec 工具安全守卫逻辑误报 ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042))**
  - **描述:** 前文提到的 `restrict_to_workspace` 导致的非路径命令拦截问题。影响所有依赖外部网络请求的工具插件。
- **🟡 P1: load_image 工具配置失效 ([Issue #2878](https://github.com/sipeed/picoclaw/issues/2878))**
  - **描述:** 无法在 config.json 中禁用/配置 `load_image` 工具。
  - **状态:** 🔧 **已有对应修复 PR ([PR #2888](https://github.com/sipeed/picoclaw/pull/2888))**
- **🟢 P2: OpenRouter 推理模型思考过程泄露 ([Issue #2745](https://github.com/sipeed/picoclaw/issues/2745))**
  - **描述:** 使用特定免费推理模型时，模型的隐性思考前导文本未经过滤直接发送给了用户。
  - **状态:** 已关闭，推测已修复。

---

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以明显看出 PicoClaw 接下来几个版本的发展方向：

1. **更加完善的多智能体(Multi-Agent)沙盒隔离:**
   - **信号源:** [Issue #2837](https://github.com/sipeed/picoclaw/issues/2837) & [PR #2838](https://github.com/sipeed/picoclaw/pull/2838)
   - **预测:** 极有可能合并。项目正在扩展 `AGENT.md` 的 Frontmatter 能力，支持类似 `.gitignore` 的 `allow/deny` 和 glob 模式来精细控制每个 Agent 的可用工具，这对于防止单一 Agent 上下文爆炸至关重要。
2. **国产大模型云服务生态的深度接入:**
   - **信号源:** [Issue #2884](https://github.com/sipeed/picoclaw/issues/2884) & [PR #2885](https://github.com/sipeed/picoclaw/pull/2885)
   - **预测:** 确认纳入。增加 SiliconFlow 作为独立 Provider，意味着项目正在积极拓展需要兼容国内算力平台的用户群。
3. **异步与消息队列机制的重构:**
   - **信号源:** [Issue #2839](https://github.com/sipeed/picoclaw/issues/2839) 
   - **分析:** 讨论将中间工具反馈与最终回复的渲染机制区分开。这是为了让 Agent 在执行长耗时任务时，能够更好地处理中途的人工干预。

---

## 7. 用户反馈摘要
通过对评论和 Issue 描述的提炼，真实用户生态呈现以下特征：
- **痛点 (Setup & Config):** 用户（尤其是非专业用户）在配置各种 Provider 和 MCP Server 的凭证时感到繁琐。例如，有人希望 Ollama Cloud ([Issue #2225](https://github.com/sipeed/picoclaw/issues/2225)) 和 LM Studio 能实现零配置或极简配置接入。
- **使用场景:**
  - **极客边缘设备部署:** 在 Android TV Box、Termux 甚至 RISC-V 板子上运行轻量级 AI Agent 是一个非常明确的高频场景（[PR #2462](https://github.com/sipeed/picoclaw/pull/2462), [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887)）。
  - **多渠道异步交互:** 将 PicoClaw 作为后端，接入 Discord、OneBot(QQ) 和 Telegram 进行长时间的自动化任务处理。
- **满意度:** 虽然遇到了配置和路径匹配的问题，但用户对项目提供的“模型路由”和“工具调用框架”表现出了极大的兴趣，社区贡献代码的意愿非常强烈（今日多个核心 PR 均来自外部贡献者）。

---

## 8. 待处理积压
以下重要 Issue 和 PR 处于 Stale 或长期未完全解决的状态，需要 Core Team 关注：

1. **[PR #2838](https://github.com/sipeed/picoclaw/pull/2838) `feat(agent): support frontmatter tool policy filters`**
   - **状态:** Stale (自 05-09 更新)
   - **原因:** 该 PR 引入了多智能体工具控制的重要机制，但由于涉及底层权限和配置语法的重大变更，需要维护者进行详细的架构评审和安全测试。建议尽快排期 Review。
2. **[PR #2788](https://github.com/sipeed/picoclaw/pull/2788) `feat(session): add per-message created_at timestamps`**
   - **状态:** Stale (自 05-06 更新)
   - **原因:** 为 Session API 添加单条消息的时间戳，这是一个对前端渲染和数据审计非常有用的功能，处于等待合并状态。
3. **[PR #2759](https://github.com/sipeed/picoclaw/pull/2759) `fix(seahorse): retrieval tools to current session`**
   - **状态:** Stale (自 05-04 更新)
   - **原因:** 修复了检索工具跨会话泄露数据的潜在安全问题，将搜索范围限制在当前激活的 session。这是一个安全性修复，建议尽快验证并合并以防上下文串扰。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026年5月18日 NanoClaw 项目动态日报：

---

# NanoClaw 项目日报 - 2026-05-18

## 1. 今日速览
今日 NanoClaw 项目呈现**高活跃、稳推进**的健康状态。在过去 24 小时内，项目处理了 12 条 PR（其中 9 条已合并/关闭，合并率达 75%），并接收了 8 条 Issue 更新（新开 6，关闭 2）。核心团队及社区贡献者主要集中在**多渠道通信修复（Telegram/WhatsApp/Discord）、底层容器网络通信及 CLI 配置**等核心模块的完善上。此外，新增的 Codex provider PR 表明项目正在积极拓展其支持的底层 AI 智能体生态。

## 2. 版本发布
过去 24 小时内**无**新版本发布。

## 3. 项目进展
今日共关闭/合并了 9 个 PR，显著提升了系统的稳定性和功能多样性，项目整体取得了实质性向前迈进：

- **核心调度与通信机制修复**：
  - [PR #2481](https://github.com/nanocoai/nanoclaw/pull/2481) `fix(cron)`: 修复了导致跨代理的 cron 输出被自我抑制的关键 Bug，恢复了定时任务的正常交付。
  - [PR #2510](https://github.com/nanocoai/nanoclaw/pull/2510) `fix(cli)`: 修复了在审批路径下添加目的地时，接收方 `inbound.db` 未同步填充的问题。
- **AI 提供商与模式扩展**：
  - [PR #2470](https://github.com/nanocoai/nanoclaw/pull/2470) `feat(cli-mode)`: 引入了替代 Agent SDK 的 CLI 模式 (`useCliMode: true`)，使用 `claude --print --resume` 走交互式配额，包含 40 个单元测试。
  - [PR #2476](https://github.com/nanocoai/nanoclaw/pull/2476) `Feat/restart no nanoclaw`: 优化了重启机制逻辑。
- **金融技能栈演进**：
  - [PR #2486](https://github.com/nanocoai/nanoclaw/pull/2486) 与 [PR #2487](https://github.com/nanocoai/nanoclaw/pull/2487) `feat(finance)`: Finance Plan 3 改革的前两个阶段（schema构建 与 Levis behavior）已合并落地。
- **通道适配器优化**：
  - [PR #2469](https://github.com/nanocoai/nanoclaw/pull/2469) `fix(whatsapp)`: 改进了 WhatsApp 适配器在解密失败和 401 登出时的恢复指导文本。

## 4. 社区热点
今日社区关注点集中在**消息重复发送**及**通道数据解析**上：
- **消息路由机制讨论**：[Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404) 报告了当 Agent 同时使用 `send_message` MCP 工具和 `<message>` 块时导致消息重复投递的问题。由于该问题涉及 StdioServerTransport 子进程架构，引发了 2 条深入根因分析的讨论。
- **可观测性需求增强**：[PR #2521](https://github.com/nanocoai/nanoclaw/pull/2521) 提出在 XML 消息属性中增加 `from-channel` 和 `from-type`，以便多通道（Telegram + Discord）用户更好地构建监控看板，反映了社区对多通道统一监控的强烈诉求。

## 5. Bug 与稳定性
今日新报告的 Bug 集中在身份标识、网络通信及敏感信息泄露等环节，按严重程度划分如下：

- **🔴 高危**：
  - [Issue #2520](https://github.com/nanocoai/nanoclaw/issues/2520) **隐私泄露风险**：`logs/nanoclaw.log` 被发现会记录包含 `privKey`、`rootKey` 和 `chainKey` 的 Signal 协议会话密钥材料（WhatsApp 关闭时触发）。*目前暂无关联 Fix PR，需紧急处理。*
  - [Issue #2386](https://github.com/nanocoai/nanoclaw/issues/2386) **CLI 严重阻塞**：`bin/ncl groups create` 生成的 UUID 违反了 OneCLI 代理标识符规则（必须以字母开头），导致后续流程受阻。*目前暂无关联 Fix PR。*

- **🟡 中危**：
  - [Issue #2512](https://github.com/nanocoai/nanoclaw/issues/2512) **Ubuntu 网络隔离**：在默认安装下，OneCLI 容器无法通过 hostname 访问同处于 Docker bridge 网络的 Postgres 数据库。*（已关闭，可能已在近期代码库中修复或提供了 workaround）*
  - [Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415) **容器配置丢失**：`ncl groups create` 跳过了 `container_configs` 行的写入，导致首次生成容器报错 "Container config not found"。
  - [Issue #2522](https://github.com/nanocoai/nanoclaw/issues/2522) **Telegram 审批卡片失效**：因未对 `ask_question` 和 card 路径执行 `transformOutboundText`，导致 Telegram 审批卡片投递失败。*已有修复 PR：[PR #2523](https://github.com/nanocoai/nanoclaw/pull/2523)*

## 6. 功能请求与路线图信号
从近期的 PR 动态来看，项目正在酝酿以下几个重要的演进方向：
- **引入全新 AI 底座**：[PR #2518](https://github.com/nanocoai/nanoclaw/pull/2518) 正在添加对 OpenAI **Codex provider** 的支持，包含隔离的状态/身份验证挂载。这标志着 NanoClaw 正在从单模型向多底层 AI 智能体平台转型，预计将在下个版本作为核心特性发布。
- **废弃僵尸组自动唤醒机制**：[Issue #2517](https://github.com/nanocoai/nanoclaw/issues/2517) 指出系统存在引用已归档 `agent_groups` 的现象，提出了在引用时自动解档 + GC（垃圾回收）的机制需求，这将大幅提升多群组长周期运行的资源管理健壮性。

## 7. 用户反馈摘要
- **痛点：多通道格式兼容性差**：使用 Telegram/Discord 等多渠道的用户（如 PR #2521, Issue #2522）反馈，现有系统在处理多通道格式的适配（尤其是非标准 message 路径的 markdown 转换）时存在断层，容易导致监控困难或卡片消息功能失效。
- **痛点：本地开发环境与 CLI 启动体验**：多个 Issue（如 #2386, #2415）反映使用 `ncl` CLI 工具初始化组时存在各种掉链子的问题（UUID 不合规、少插数据行），表明 CLI 工具的脚手架体验还不够平滑，对新手或集成测试不友好。

## 8. 待处理积压
- **[!] 关注敏感信息泄露修复**：[Issue #2520](https://github.com/nanocoai/nanoclaw/issues/2520) 涉及 Signal 协议核心密钥的日志泄露，虽然源于传递依赖，但建议维护者尽快在 Host 启动层面加入过滤机制。
- **[!] 关注 CLI UUID 生成逻辑**：[Issue #2386](https://github.com/nanocoai/nanoclaw/issues/2386) 导致 CLI 创建组流程无法闭环，建议提高优先级并指派给相关模块负责人。
- **[⏳ 等待 Review 的关键 PR**：等待 [PR #2523](https://github.com/nanocoai/nanoclaw/pull/2523) (Telegram 审批卡片修复) 和 [PR #2518](https://github.com/nanocoai/nanoclaw/pull/2518) (Codex Provider 集成) 的维护者 Review 及合并，以解决当前的通道阻断问题并拓展生态。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

以下是为您生成的 2026 年 5 月 18 日 NullClaw 项目动态日报：

---

# NullClaw 项目动态日报 (2026-05-18)

## 1. 今日速览
过去 24 小时，NullClaw 项目整体处于**低代码合并活跃、高社区问题反馈**的阶段。今日没有新的代码提交（PR 更新为 0）和版本发布，项目代码库保持静态。然而，社区活跃度呈现上升趋势，共产生了 3 个新开/活跃的 Issue，且均集中在系统稳定性和核心工具链（如记忆、多智能体调度）的缺陷上。这表明项目在向复杂场景（如外部集成、多智能体协作）拓展时，暴露出了一些底层的架构摩擦。整体来看，项目当前的健康度依赖维护者对近期 Bug 的排期与修复响应。

## 2. 版本发布
**本日无新版本发布。**

## 3. 项目进展
**本日无已合并或已关闭的 PR 及 Issue。**
项目在代码层面今日没有向前推进。维护者可能需要优先处理近两日集中爆发的核心模块 Bug，预计后续会有针对性的修复分支提交。

## 4. 社区热点
今日最活跃的议题围绕 **Telegram 渠道集成** 以及 **多智能体/会话管理** 展开，反映了用户正在积极探索 NullClaw 的高级特性：
*   **[#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)**：该 Issue 虽于前两日创建，但在昨日产生了新的评论互动。用户在结合本地 Ollama (qwen3.6:27b) 与 Telegram Bot 使用定时任务时遭遇权限拦截，说明非官方托管的本地化大模型接入存在认证痛点。
*   **[#918 spawn tool results never delivered to Telegram](https://github.com/nullclaw/nullclaw/issues/918)**：由活跃用户 `weissfl` 提交，直接指出了多智能体架构下的严重通信断层问题。
*   **[#917 memory_list tool always passes session_id](https://github.com/nullclaw/nullclaw/issues/917)**：同样由 `weissfl` 提交，直击 AI 记忆管理模块的逻辑盲区。

## 5. Bug 与稳定性
今日报告的 Bug 均涉及核心工作流，按严重程度排列如下：

*   🔴 **严重 - 子智能体结果丢失：** [#918 spawn tool results never delivered to Telegram](https://github.com/nullclaw/nullclaw/issues/918)
    *   **现象**：`spawn` 工具成功创建子智能体并执行完毕，但结果在返回 Telegram 聊天时被静默丢弃。
    *   **根因**：用户已定位到 `channel_loop.zig:1296`，由于 `SubagentManager` 初始化时 `bus=null` 导致消息路由失败。
    *   **状态**：**暂无 Fix PR**。由于会导致任务执行结果无声无息地丢失，对多 Agent 工作流属于阻断级缺陷。
*   🟠 **较高 - 全局记忆读取失效：** [#917 memory_list tool always passes session_id](https://github.com/nullclaw/nullclaw/issues/917)
    *   **现象**：`memory_list` 工具强绑定了当前会话 ID（`session_id`），导致全局级别的记忆（`session_id=NULL`）无法被检索。
    *   **影响**：破坏了跨会话的 AI 记忆连续性和全局指令的读取。
    *   **状态**：**暂无 Fix PR**。
*   🟡 **中等 - 调度器权限异常：** [#915 Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)
    *   **现象**：调度器在 Telegram 聊天等场景下无法正常触发任务，提示未授权。
    *   **状态**：有用户评论互动，但**暂无 Fix PR**。

## 6. 功能请求与路线图信号
今日虽然纯功能请求较少，但通过 Bug 报告可以提取出明显的路线图信号：
*   **多智能体架构的健壮性亟待补齐**：随着用户开始使用 `spawn` 生成子智能体，原有的基于单体的消息总线（Bus）机制显得较为脆弱。未来路线图可能需要重构 `SubagentManager` 的消息传递机制。
*   **长时记忆管理需要解耦**：从 #917 可以看出，用户需要明确的“短期会话记忆”与“长期全局记忆”的分层调用能力。

## 7. 用户反馈摘要
从今日的 Issue 标题及内容中，可以提炼出以下真实用户画像和痛点：
*   **主流极客用户群**：热衷于本地化部署（Ubuntu + RTX 3090 运行 Ollama），对数据隐私要求高，但 NullClaw 在处理外部托管 LLM 授权和回调时体验欠佳。
*   **重度依赖 Telegram 集成**：许多用户将 NullClaw 作为 Telegram 的底层大脑，Channel_loop 的稳定性直接决定了他们的核心体验。
*   **高级用户具备极强排查能力**：用户（如 `weissfl`）能够深入到 Zig 底层代码（如精准定位到 `channel_loop.zig:1296`）进行根因分析，这为项目维护者节省了大量排查时间，但也要求项目方在架构设计上更加严谨。

## 8. 待处理积压
*   ⚠️ **核心功能模块中断**：[#918 (spawn tool 静默丢失结果)](https://github.com/nullclaw/nullclaw/issues/918) 和 [#917 (全局记忆不可见)](https://github.com/nullclaw/nullclaw/issues/917) 刚刚提交，虽然暂时处于 0 评论状态，但由于严重影响 Agent 的基本逻辑，**强烈建议维护者 @nullclaw-team 今日立即介入确认**。
*   ⚠️ **悬而未决的调度问题**：[#915 (scheduler unauthorized)](https://github.com/nullclaw/nullclaw/issues/915) 已活跃 3 天且有 1 条评论，但至今未 Close，表明本地模型接入的鉴权方案可能缺乏明确的官方解决方案或文档指引。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 IronClaw 项目 2026-05-18 动态日报。

---

# IronClaw 项目动态日报 (2026-05-18)

## 1. 今日速览
IronClaw 在过去 24 小时内保持**极高的开发活跃度**，项目正处于功能大范围重构与密集迭代期。虽然今日没有发布新的稳定版本，但共产生了 **11 个活跃 Issues 和高达 50 个 PR 更新**，且核心开发者的提交集中在底层架构演进上。值得注意的是，随着 v0.28.2 版本的普及，社区反馈了多个与 UI 交互和工具安装（如 Gmail）相关的回归 Bug。总体而言，项目在 "Reborn" 架构升级和 Hooks 扩展上进展迅速，但近期的代码变更也引入了一些影响用户体验的稳定性问题亟待修复。

## 2. 版本发布
今日无新版本发布。（目前社区主要在使用 v0.28.2 版本，并积极反馈该版本的回归问题）。

## 3. 项目进展
过去 24 小时内，项目共有 **19 个 PR 被合并或关闭**，整体架构向 "Reborn" 时代迈进了一大步：
*   **Reborn 架构重组落地**：核心开发者 `serrrfirat` 提交的 `arch(reborn): consolidate composition root...` ([PR #3695](https://github.com/nearai/ironclaw/pull/3695)) 已被合并，正式确立了 `ironclaw_reborn_composition` 作为根组合基础，并发布了可引导真实 Agent 的 `ironclaw-reborn` 二进制文件。
*   **规划文档重构**：`henrypark133` 提交的 `[codex] replace agent-loop planning docs` ([PR #3723](https://github.com/nearai/ironclaw/pull/3723)) 被合并，移除了冗长的规划文档，替换为精简的 `CLAUDE.md` 指引，标志着 Agent Loop 框架从设计阶段正式进入稳定实现阶段。
*   **可观测性基础设施**：引入 Trace Commons 客户端的重量级 PR ([PR #3131](https://github.com/nearai/ironclaw/pull/3131)) 已被关闭/合并，为 Agent 的 opt-in 追踪、确定性修订和周期性贡献积分奠定了基础。

## 4. 社区热点
*   **IronHub 工具市场集成**：开发者 `neo-sky` 提交了今日关注度极高的特性 PR `[feat] install tools and skills from IronHub` ([PR #3737](https://github.com/nearai/ironclaw/pull/3737))。该 PR 允许通过 CLI 或 Agent 运行时直接从 IronHub 搜索和安装工具，这标志着 IronClaw 正在构建自己的插件/工具生态闭环。
*   **Hooks 框架密集设计**：核心贡献者 `zmanian` 连续推进了 4 个关于 Hooks 框架的 Draft PR（如生产网关工厂设计 [PR #3633](https://github.com/nearai/ironclaw/pull/3633)、WASM 执行路径 [PR #3634](https://github.com/nearai/ironclaw/pull/3634) 等），表明项目正在极其谨慎地设计扩展点安全边界。
*   **个人身份与上下文策略**：[Issue #3692](https://github.com/nearai/ironclaw/issues/3692)（策略门控的个人身份）今日有较多讨论，旨在解决如何安全地将稳定身份文件（如 `USER.md`）注入到 Prompt 上下文中。

## 5. Bug 与稳定性
用户 `sunglow666` 集中暴露了 v0.28.2 版本在工具安装和配置 UI 方面的多个回归 Bug，严重影响非技术用户的正常使用：
*   **[High] 配置界面缺失核心控件**：[Issue #3734](https://github.com/nearai/ironclaw/issues/3734) 指出 Non-TEE v0.28.2 版本中，Inference 提供商配置界面丢失了 API Key 输入框和 "Fetch available models" 按钮。
*   **[Medium] Gmail 工具认证流程混乱**：
    *   无效令牌显示认证成功 ([Issue #3733](https://github.com/nearai/ironclaw/issues/3733))。
    *   OAuth 链接与手动输入界面的不一致 ([Issue #3732](https://github.com/nearai/ironclaw/issues/3732))。
    *   工具已安装但反复提示安装 ([Issue #3731](https://github.com/nearai/ironclaw/issues/3731))。
    *   用户拒绝安装后仍触发重试并引导批准 ([Issue #3728](https://github.com/nearai/ironclaw/issues/3728))。
*   **[Low] 状态持久化错误**：失败被拒绝的 `tool_install` 在刷新页面后被错误地渲染为绿色成功状态 ([Issue #3729](https://github.com/nearai/ironclaw/issues/3729))。
*   **CI/CD 异常**：Nightly E2E 测试连续失败 ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447))，可能需要 infra 团队介入排查。

## 6. 功能请求与路线图信号
基于当前活跃的 Issues 和 PRs，项目下一阶段的明确路线图包括：
*   **Configuration-as-Code (配置即代码)**：从 [PR #3703](https://github.com/nearai/ironclaw/pull/3703) 可以看出，团队正在为 "租户蓝图" 和 "用例线束" 铺路，未来用户可能通过声明式配置管理 Agent。
*   **Configuration TOML 引导**：[PR #3704](https://github.com/nearai/ironclaw/pull/3704) 正在落地独立的 `config.toml` 和 `providers.json`，_operator 级别的本地部署配置体验将大幅改善。
*   **运行时状态暴露**：[PR #3735](https://github.com/nearai/ironclaw/pull/3735) 暴露了 `get_run_state` 接口，暗示 WebUI 正在准备展示更深层次的 Agent 运行时协调状态。

## 7. 用户反馈摘要
*   **痛点：UI 状态与后端不同步**：用户反馈极其集中的点在于，前端 UI 状态（如 Gmail 授权、拒绝安装等操作后的图标/提示）与 Agent 后端的实际状态脱节。比如刷新后失败变成功、未配置的 Provider 依然显示 "Use" 按钮 ([Issue #3736](https://github.com/nearai/ironclaw/issues/3736))。
*   **痛点：工具鉴权体验割裂**：在不同对话线程中，触发同一个工具（如 Gmail）的鉴权流程竟然不一致，这暴露了多轮会话状态管理的缺陷。
*   **积极信号：底层能力的完善**：社区对 IronHub ([PR #3737](https://github.com/nearai/ironclaw/pull/3737)) 的整合表示期待，希望能够实现 Agent 运行时的动态能力扩展，而不是仅限于编译期绑定。

## 8. 待处理积压
*   **依赖更新拥堵**：Dependabot 提交的大批量依赖更新 PR（如 [PR #3361](https://github.com/nearai/ironclaw/pull/3361) 43个更新，[PR #3360](https://github.com/nearai/ironclaw/pull/3360) Tokio生态更新）已经开启数天但尚未合并，长时间不合并可能导致后续冲突累积。
*   **测试框架设计悬而未决**：[Issue #3702](https://github.com/nearai/ironclaw/issues/3702) (Reborn binary-E2E 测试框架计划) 尚未有对应的实现 PR，为确保 Rust 重写的核心逻辑可靠性，该基础测试设施需尽快提上日程。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是为您生成的 LobsterAI 项目 2026-05-18 动态日报：

# 📊 LobsterAI 项目动态日报 (2026-05-18)

## 1. 今日速览
过去 24 小时，LobsterAI 仓库处于**低活跃度维护状态**，未监测到新增 Issue 或新版本发布。虽然 PR 板块有 9 条记录产生状态变更，但这主要归因于 GitHub Actions 的自动化 `[stale]` 标签巡检，**无人工干预的实质代码合并或关闭操作**。项目目前有 7 个待合并 PR 处于 Open 状态，涵盖可观测性、前端性能优化、UI 改进及底层架构修复等多个方向。整体来看，项目处于功能沉淀与社区待响应阶段。

## 2. 版本发布
**无**。今日未发布新版本。

## 3. 项目进展
今日没有合并新的代码，但有 **2 个 PR 被关闭**（注意：根据 Commit 记录分析，非正常合并，可能是作者主动关闭或被机器人自动化清理）：
- **[#812 perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞](https://github.com/netease-youdao/LobsterAI/pull/812)**: 针对数据库高频同步写入导致的 UI 卡顿问题，提出了防抖及异步写入优化方案。该 PR 的关闭意味着该优化路径可能被放弃或正在重新设计。
- **[#871 feat(skills): 新增skill执行统计展示](https://github.com/netease-youdao/LobsterAI/pull/871)**: 计划通过解析 JSONL 数据在 UI 端展示 Skill 调用统计。该 PR 的关闭使得 Skills 数据可视化这一能力的交付暂时搁置。

## 4. 社区热点
今日社区未产生新的讨论或评论，所有现存 PR 活跃度均由自动化 Stale 机器人触发。但以下功能型 PR 值得关注，它们代表了社区近期最核心的演进诉求：
- **[#768 feat(observability): add Opik observability integration](https://github.com/netease-youdao/LobsterAI/pull/768)**: 引入了 Opik 可观测性集成，表明项目正致力于满足开发者对 AI 会话链路追踪的强需求。
- **[#762 feat(settings): 自定义模型 API 格式新增"自动检测"选项](https://github.com/netease-youdao/LobsterAI/pull/762)**: 大幅降低了接入各类自定义大模型的技术门槛。

## 5. Bug 与稳定性
今日未报告新的 Bug。但在待合并的 PR 中，存在几个针对底层稳定性和 UI 表现的重要修复等待官方 Review：
- **高优先级** - **[#788 fix(scheduled-task): 防止重启时任务重复](https://github.com/netease-youdao/LobsterAI/pull/788)**: 修复了 SQLite 向 OpenClaw 迁移时因网关错误导致定时任务重复创建的幂等性问题。*（状态：待合并）*
- **中优先级** - **[#783 fix(cowork): 解决底部输入框截断问题](https://github.com/netease-youdao/LobsterAI/pull/783)**: 修复了 UI 交互层面的显示瑕疵。*（状态：待合并）*
- **资源泄漏** - **[#787 Implement destroy method for theme service](https://github.com/netease-youdao/LobsterAI/pull/787)**: 补充了主题服务的销毁方法，清理媒体查询监听器，防止潜在的内存泄漏。*（状态：待合并）*

## 6. 功能请求与路线图信号
虽然今日无新开 Issue，但通过当前的 PR 池可以观察到明确的路线图信号：
- **多模态交互优化**：**[#771 展示粘贴图片的缩略图预览](https://github.com/netease-youdao/LobsterAI/pull/771)** 正在推动客户端向更现代化的富文本/多模态交互演进。
- **性能极致打磨**：**[#770 React.memo 减少 Markdown 渲染重绘](https://github.com/netease-youdao/LobsterAI/pull/770)** 旨在解决流式输出时前端频繁渲染带来的性能消耗，一旦合并，将显著提升对话打字机效果的流畅度。

## 7. 用户反馈摘要
由于今日无活跃的 Issue 和评论更新，暂无法提炼用户实时的情绪与痛点。从近期核心 PR（如输入框截断、Markdown 卡顿、API 自动检测）可以看出，**“前端渲染性能”** 与 **“多模型接入体验”** 是真实用户的两大核心高频体验场景。

## 8. 待处理积压 (🔔 维护者请注意)
目前仓库存在明显的 **PR 审核瓶颈与积压问题**。以下高质量 PR 自 3 月底提交以来已停滞近 2 个月，今日已被自动化标记为 `[stale]`，强烈建议核心维护者进行 Review 或给出修改意见，以免流失社区贡献者的热情：
1. [PR #762 - 自定义模型 API 自动检测](https://github.com/netease-youdao/LobsterAI/pull/762) (停滞 55 天)
2. [PR #768 - Opik 可观测性集成](https://github.com/netease-youdao/LobsterAI/pull/768) (停滞 55 天)
3. [PR #770 - Markdown 渲染性能优化](https://github.com/netease-youdao/LobsterAI/pull/770) (停滞 55 天)
4. [PR #771 - 聊天图片缩略图预览](https://github.com/netease-youdao/LobsterAI/pull/771) (停滞 55 天)
5. [PR #788 - 定时任务重复 Bug 修复](https://github.com/netease-youdao/LobsterAI/pull/788) (停滞 54 天)

---
*本报告数据截至 2026-05-18，由 AI 自动生成，祝开源项目蓬勃发展！*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

这里是 **Moltis (github.com/moltis-org/moltis)** 项目 2026-05-18 的开源项目动态日报。

---

### 1. 今日速览
- **整体活跃度：中高**。过去 24 小时内项目共有 5 次 Issue/PR 更新，开发主线上呈现出功能密集合并与 Bug 陆续暴露的双重特征。
- **新版本落地**：项目发布了 `20260517.03` 版本，延续了高频率的迭代节奏（日更/多日更）。
- **核心功能突破**：基础设施层面迎来重大更新，重点合并了外部智能体持久会话及新型远程访问（NetBird、Cloudflare Tunnel）的支持，大幅增强了项目作为“个人 AI 助手”的异地部署与多 Agent 调度能力。
- **稳定性隐忧**：随着新版本的推送，社区连续报告了 2 个与核心交互（模型输出解析、语音配置）相关的 Bug，目前均处于 Open 状态，需核心团队关注。

### 2. 版本发布
- **[Release 20260517.03](https://github.com/moltis-org/moltis/releases/tag/20260517.03)** 
  - **更新内容**：根据今日合并的 PR 推断，此版本主要整合了外部智能体持久会话功能，并在 Onboarding（新手引导）与远程访问模块中正式引入了 NetBird 和 Cloudflare Tunnel 客户端支持。
  - **破坏性变更/迁移注意事项**：当前 Release Notes 较为精简，暂未显式声明破坏性变更。但鉴于远程访问和外部 Agent 架构的调整，建议自部署用户在升级后检查相关的环境变量及网络配置。

### 3. 项目进展
今日共有 3 个 PR 被关闭/合并，项目在**多端接入**与**Agent 架构演进**上迈出了坚实的一步：
- **[PR #566: feat(external-agents): add persistent agent sessions](https://github.com/moltis-org/moltis/pull/566)**
  - **意义**：这是一个历时一个多月（自 4 月 6 日起）的重大特性合并。为 ACP 和 Codex CLI 添加了持久化外部 Agent 会话，并支持 Claude Code 的 resume 功能。这标志着 Moltis 能够跨对话轮次保持与外部智能体的绑定，是向“复杂工作流 AI 中枢”迈进的关键里程碑。
- **[PR #1002: feat(remote-access): add NetBird and Cloudflare Tunnel support](https://github.com/moltis-org/moltis/pull/1002)**
  - **意义**：大幅降低了用户在复杂网络环境下部署个人 AI 助手的门槛，内置了主流的隧道和组网工具支持，完善了底层通信基建。
- **[PR #1008: Add NetBird and Cloudflare Tunnel to onboarding](https://github.com/moltis-org/moltis/pull/1008)**
  - **意义**：作为 #1002 的配套 UI/UX 优化，将复杂的网络配置整合到了新用户引导流程中，显著提升了开箱即用体验。

### 4. 社区热点
由于核心功能的大幅改动，今日社区反馈集中在最新版本的实际体验上。虽然目前这两个 Issue 评论数均为 0，但它们代表了最新版本中最迫切的用户痛点：
- **[Issue #1007](https://github.com/moltis-org/moltis/issues/1007)**：热门模型 Gemma 的推理标签解析问题。
- **[Issue #1006](https://github.com/moltis-org/moltis/issues/1006)**：语音 TTS 配置丢失问题。

### 5. Bug 与稳定性
今日新增 2 个 Bug 报告，均由用户 `maop` 提出，目前**均无关联的 fix PR**：
- 🟠 **中高严重度：[Bug]: gemma-4-31b-it reasoning tags are treated as plain text](https://github.com/moltis-org/moltis/issues/1007)**
  - **现象**：系统未能正确解析谷歌最新 Gemma 模型的 `<thought>` 推理标签，将其作为普通文本输出给用户，严重影响深度思考模型的输出体验和上下文控制。
- 🟠 **中高严重度：[Bug]: VoiceCoquiTtsConfig defaults are stripped during auto-compact](https://github.com/moltis-org/moltis/issues/1006)**
  - **现象**：在系统执行上下文自动压缩时，语音 TTS 的默认配置被错误剥离，导致配置“凭空消失”。这可能会直接阻断用户的语音交互链路。

### 6. 功能请求与路线图信号
- **深度拥抱前沿开源模型**：从 Issue #1007 可以看出，社区正在高强度测试并使用 Gemma 4 (31b) 等具备强推理能力的前沿开源模型。这向维护者释放了明确信号：**后续需要进一步强化 Markdown/Chat UI 的渲染层解析能力，尤其是针对不同模型特有的思维链标签（如 `<thought>`, `<reflection>` 等）进行兼容适配。**
- **多模态与 Voice-first 趋势**：TTS 配置 Bug 的反馈表明用户对语音交互的依赖度很高，未来在上下文管理机制中需对非文本模态的配置参数做特殊保护。

### 7. 用户反馈摘要
从今日的 Issues 提交细节可以看出：
- **高质量的反馈者**：用户详细阅读了 Preflight Checklist，且均在使用最新版本进行测试，说明 Moltis 的开发者社区专业度较高。
- **痛点集中在“状态维持”与“解析细节”**：用户不仅期望 AI 能“说话”（TTS），还期望在长上下文对话中保持配置不丢失；同时期望系统能完美适配各大主流大模型的底层输出格式（如隐藏推理过程），说明项目正从“能用”向“精细化打磨”阶段过渡。

### 8. 待处理积压
基于今日数据，提醒维护者关注以下动作：
1. **Triage 需求**：今日报告的 [Issue #1006](https://github.com/moltis-org/moltis/issues/1006) 和 [Issue #1007](https://github.com/moltis-org/moltis/issues/1007) 尚未获得官方回应。由于涉及 Voice 和核心 LLM 输出体验，建议尽快分配人员进行复现（特别是验证是否与最近的 Auto-compact 或 UI 更新有关）。
2. **Release Notes 完善**：建议在后续版本（如 20260518.xx）中补充详细的 CHANGELOG，说明 #566 这一大型 PR 对现有 External Agents 用户带来的具体影响，降低升级心智负担。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/CoPaw) 项目动态日报
**日期**: 2026-05-18 | **分析模型**: AI 智能体与个人 AI 助手开源项目分析师

## 1. 今日速览
过去 24 小时内，CoPaw 项目保持着**高度活跃**的开发与社区互动状态。昨日共产生 **17 次 Issue 更新**（含 3 次关闭）和 **17 次 PR 更新**（含 4 次关闭/合并），但**未发布任何新版本**。目前项目正处于**内部质量提升与功能横向扩展**的并行期：一方面，社区和核心开发者正在大力推进前端 E2E 测试覆盖率和安全模块测试；另一方面，xAI Grok 接入、Tauri 桌面端支持、Token 上下文缓存优化等重量级 PR 正在密集 Review 中。

## 2. 版本发布
**无新版本发布。** 
项目当前最新稳定版停留在近期推出的版本（根据 Issue 反馈推测为 v1.1.7），主分支正在积蓄大量底层架构改进和新特性，预计将在前端 E2E 测试框架和桌面端适配完成后发布下一个大版本。

## 3. 项目进展
今日共有 3 个 Issue 和 3 个 PR 被合并/关闭，主要集中在**Workspace 底层重构与优化**：
*   **[PR #3605] [CLOSED] refactor(wechat): centralize legacy weixin → wechat data migrations on workspace startup**: 优化了 Workspace 启动时的数据迁移逻辑，集中处理了微信通道从 `weixin` 到 `wechat` 的历史遗留数据，去除了运行时的冗余回退代码，提升了系统启动整洁度。
*   **[PR #1669] [CLOSED] fix(Workspace): handle path separators correctly in workspace path...**: 修复了 Windows 系统下路径分隔符识别错误导致前端一直显示 "loading..." 的严重体验问题。
*   **[PR #1661] [CLOSED] fix(workspace): fix memory files not being fetched by agent ID**: 修复了 agent 调用时无法正确获取特定 daily memory 文件的问题，将全局 API 调用降级为精确的 Agent 级别作用域。
*   **[PR #4466] [CLOSED] test(security): Phase 0-1 unit tests**: 作为测试覆盖率的阶段性产物被关闭，演进到了更为完善的 [PR #4467]。

**进展评估**：项目在 Workspace（工作区）的底层健壮性上迈出了扎实的一步，彻底清理了历史包袱。

## 4. 社区热点
今日讨论度最高、最具代表性的议题：
*   **[Issue #2684] Ubuntu安装后启动出错** (👍 0, 评论 7): 用户在 Ubuntu 上使用脚本安装时遭遇 `websockets.legacy` 弃用警告及其他兼容性问题，引发了社区关于 Python 3.12/3.13 环境依赖兼容性的热烈讨论。
    🔗 *链接: agentscope-ai/QwenPaw Issue #2684*
*   **[Issue #4469] 聊天窗口无回应，重启无效** (评论 5): 多名用户在 v1.1.7 Docker 版本下反馈前端“三点跳动”死锁问题，涉及 Event loop 崩溃，是今日影响面最广的用户痛点。
    🔗 *链接: agentscope-ai/QwenPaw Issue #4469*
*   **[Issue #4455] feat(skills): support multiple external skill paths via config** (评论 5): 社区提出通过配置文件挂载外部 Skill 目录的 RFC，旨在解决当前技能生态管理不灵活的问题，获得了极高的讨论热度。
    🔗 *链接: agentscope-ai/QwenPaw Issue #4455*

## 5. Bug 与稳定性
今日报告了多个严重的稳定性问题，需重点关注（按严重程度排序）：

*   🔴 **P0 严重 - 远程代码执行漏洞**: **[Issue #4470] [Bug]: The plugin interface has an unauthorized remote code execution (RCE) vulnerability**. 插件接口存在未授权的 RCE 安全漏洞，具有极高安全风险。*(暂无关联 Fix PR，建议官方立即响应)*。
    🔗 *链接: agentscope-ai/QwenPaw Issue #4470*
*   🟠 **P1 严重 - 底层崩溃**: **[Issue #3854] [Bug]: chromadb Rust binding segfault (SIGSEGV) kills the entire process**. 在 Ubuntu + Python 3.13 环境下，`chromadb` 的 Rust 底层绑定会导致段错误并直接击穿进程，且无 Python 级异常捕获。*(暂无关联 Fix PR)*。
    🔗 *链接: agentscope-ai/QwenPaw Issue #3854*
*   🟠 **P1 严重 - Agent 假死**: **[Issue #3640] [Bug]: MCP client 内部 TaskGroup 异常导致 Agent 假死**. MCP Client 内部事件循环阻塞导致微信/钉钉通道掉线无响应。*(暂无关联 Fix PR)*。
    🔗 *链接: agentscope-ai/QwenPaw Issue #3640*
*   🟡 **P2 中等 - 前端阻塞**: **[Issue #4454] [Bug]: /mission command causes Console to freeze completely**. 执行内置指令 `/mission` 会导致前端 UI 彻底卡死。*(暂无关联 Fix PR)*。
    🔗 *链接: agentscope-ai/QwenPaw Issue #4454*

## 6. 功能请求与路线图信号
结合近期 Issue 与活跃 PR，项目未来的迭代信号非常明确：

*   **信号一：彻底拥抱 E2E 测试**
    开发者 `hanson-hex` 提出并实施了完整的 E2E 测试基建方案：
    *   **[PR #4464]** 迁移 `python_e2e` 到主仓库并建立 Mock 基础设施。
    *   **[Issue #4457, #4458, #4459, #4460]** 拆分了详细的 UI 测试任务（登录、Agent配置、设置、控制面板）。
    这表明项目正为**企业级交付质量**铺路。
*   **信号二：Token 上下文精细化管理**
    *   **[Issue #4463]** 与 **[PR #4465] Cache context token estimates from model usage**: 提出通过缓存 `prompt usage` 来估算增量 token，这将极大提升并发场景下的计费与性能预测准确度。
*   **信号三：桌面端与系统集成**
    *   **[PR #3813]** Tauri 2.x 桌面应用支持（正在进行中）。
    *   **[PR #4041]** Windows 系统托盘驻留功能。

## 7. 用户反馈摘要
通过对 Issues 的分析，提炼出当前用户的真实痛点：
1.  **Docker 部署的 Event Loop 稳定性**：大量用户反馈 Docker 环境下进行多模型切换或长时间挂机时，Web 前端极易陷入假死（三个点跳动），需强制重启容器。
2.  **外部模型 API 的限频控制不佳**：用户在使用第三方模型时，经常遇到 `[Issue #4468] Operation LLM execution is too frequent, please retry after 300 seconds` 的阻断，项目需要在后端加入更智能的退避重试机制。
3.  **技能管理割裂**：用户希望将外部脚本作为 Skills 直接注入，而不是必须放入固定的 `skill_pool` 目录，这反映了用户将 CoPaw 当作“调度中心”来整合个人本地脚本的强烈诉求。

## 8. 待处理积压
以下是长期悬而未决、需要维护者高优介入的关键 PR 和 Issue：

*   **[PR #3813] feat: add tauri 2.x desktop app support** (创建于 04-24，首次贡献者): 这是一个极具价值的 PR，引入了 Tauri 桌面端支持。由于涉及面较广，目前仍处于 Under Review。建议项目组尽快分配核心 Reviewer 推动合并，以补齐桌面端短板。
    🔗 *链接: agentscope-ai/QwenPaw PR #3813*
*   **[Issue #3640] MCP client 内部 TaskGroup 异常导致 Agent 假死** (创建于 04-21): 该问题存在近一个月，由于涉及底层异步框架的协程异常捕获，目前无根治方案，严重影响了重度用户的 Agent 挂机体验，亟待官方介入排查。
    🔗 *链接: agentscope-ai/QwenPaw Issue #3640*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# 🐾 ZeroClaw 开源项目日报 (2026-05-18)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目保持了**高度活跃**的开发与社区反馈节奏。虽然今日无新版本发布，但共产生了 **20 条 Issue 更新**（16 新开/活跃，4 已关闭）和 **50 条 PR 更新**（38 待合并，12 已合并/关闭）。项目当前的焦点高度集中在 **Provider 兼容性（尤其是国产大模型 DeepSeek、Kimi、Qwen）**、**Cron 时区一致性**、以及 **Skills 插件生态的架构优化**上。庞大的待合并 PR 数量（38个）表明项目正处于下一版本（疑似 v0.7.6）发布前的密集开发和代码审查阶段。

---

## 2. 版本发布
**无新版本发布**。从 Issue 标签和社区讨论来看，项目正在为 `v0.7.6`（主打 Skills 体验升级）和底层架构修复做代码储备。

---

## 3. 项目进展
今日合并或关闭的重要 PR/Issue 主要集中在跨平台兼容性、系统稳定性和文档建设上：
*   **Windows 核心 Bug 修复落地**：Issue [#6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705)（Cron 在 Windows 上因硬编码 `sh` 导致执行失败）已于今日关闭，相关修复大幅提升了 Windows 主机的可用性。
*   **本地化 (i18n) 缺陷修复**：Issue [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)（Channel 运行时命令绕过 Fluent 强制输出英文）已关闭，系统的多语言支持得到进一步规范。
*   **并发启动稳定性**：Issue [#6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431)（多进程并发初始化导致 SQLite 内存 Schema 失败）已关闭，内存模块的并发健壮性得到提升。
*   **文档与官方网站**：Issue [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994)（建立官方网站及端到端配置/CLI文档）已关闭，这意味着项目在开发者入门体验上迈出了重要一步。

---

## 4. 社区热点
当前社区讨论最激烈的问题聚焦于**主流大模型 API 格式变更导致的代理循环中断**：
*   **🔥 DeepSeek-V4 API 不兼容问题**：[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)（👍 4，评论 9）。多位开发者反馈在使用最新 DeepSeek 模型时，因 Thinking Mode 的 API 响应格式变动导致系统报错。
*   **🔥 Kimi-Code 流式工具调用报错**：[Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)（评论 9）。开发者在使用 Kimi 作为 Provider 进行流式工具调用时遇到阻塞（S1 级别）。
*   **小米 mimo-v2.5 推理状态丢失**：[Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)（评论 3）。在 Agent 工具调用循环中，小米模型的 `reasoning_content` 未被传递到下一轮，引发 S0 级安全/逻辑风险警告。

---

## 5. Bug 与稳定性
今日新增的 Bug 报告涵盖了多个核心组件，部分高风险 Bug 已有对应的修复 PR 提交：

**高严重性 (S0 - S1)**：
1.  **Cron 时区合约不一致**：[Issue #6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) - Cron 调度在 CLI、工具和 API 中时区处理逻辑分裂，带来 S2 级降级风险。➡️ **已有修复 PR**：[#6740](https://github.com/zeroclaw-labs/zeroclaw/pull/6740), [#6741](https://github.com/zeroclaw-labs/zeroclaw/pull/6741)。
2.  **Qwen 3.6 协议泄露**：[Issue #6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) - Qwen 3.6 的 tool-call 载荷被直接暴露在 Matrix 群聊回复中。正在处理中。
3.  **MCP 工具搜索挂起**：[Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) - `tool_search` 未加入自动批准列表，导致 webhook 模式下默认超时 120 秒后被自动拒绝。

**中严重性 (S2 - S3)**：
1.  **无效多模态图片阻断**：[Issue #6743](https://github.com/zeroclaw-labs/zeroclaw/issues/6743) - 无法解析的图片引用会导致整个 Provider 准备步骤失败。➡️ **已有修复 PR**：[#6743](https://github.com/zeroclaw-labs/zeroclaw/pull/6743)（跳过无法解析的图片而非阻塞）。
2.  **OpenAI 超时配置无效 (死代码)**：[Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) - `timeout_secs` 配置项未被原生 OpenAI Provider 读取，导致硬编码 120s 超时。

---

## 6. 功能请求与路线图信号
从近期的 Enhancement 可以看出项目在**安全性**和**插件架构**上的演进方向：
*   **Skills 生态完善（预计 v0.7.6）**：[Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) 作为 v0.7.6 的追踪 Issue，明确了优化 Skills CLI、加载器、沙箱和测试套件的计划。同时 [PR #6209](https://github.com/zeroclaw-labs/zeroclaw/pull/6209) 正在重构 SkillMeta 严格校验及 SkillForge 来源。
*   **Agent 沙箱与权限隔离**：[Issue #6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) 提出增加 Agent 能力标志（限制读取共享目录及防止工作目录逃逸），这标志着 ZeroClaw 在多 Agent 宿主环境下的安全性正在对齐企业级需求。
*   **技能审计误报优化**：[Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) 提出移除对远程 Markdown 链接的误报拦截，以改善插件开发者的体验。

---

## 7. 用户反馈摘要
综合今日的 Issues 提炼出以下用户痛点与真实使用场景：
1.  **国内大模型适配痛点集中**：大量用户正在将 ZeroClaw 接入国产模型。除了 DeepSeek，Kimi 和 Qwen 模型在流式输出、工具调用结构解析上的微小差异，极易触发 ZeroClaw 的 Provider 级异常。用户强烈呼吁增强 `OpenAI-Compatible` 层的容错与适配能力。
2.  **Webhook/后台运行模式的阵痛**：在无客户端交互的 Webhook 场景下（如 [Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)），由于缺乏人工介入批准，许多工具的默认安全策略反而导致了工作流的挂起或瘫痪。
3.  **配置项“幽灵”引发信任危机**：多位开发者（如 nick-pape 提交的系列 Issue）指出，许多写进文档的配置项（如 `context_aware_tools`, `timeout_secs`）实际上在底层是死代码，完全不起作用。这增加了用户的排错成本，要求项目进行严格的 Config 审计。

---

## 8. 待处理积压
以下是维护者需要优先关注的长期/高危积压项：
*   **⚠️ 153 个 Commits 丢失的恢复追踪**：[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)（P2，高危）。此 Issue追踪 3 月份一次大规模回滚操作导致的代码丢失，涉及众多已被批准的 Bug 修复和功能，当前仍在等待全量恢复。
*   **⚠️ CI Actions 权限阻断**：[Issue #6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747)（S0 级）。`amannn/action-semantic-pull-request` 未被加入 GitHub 组织的 Actions 白名单，直接导致相关 CI 流水线失败，需管理员立即介入调整权限。
*   **聊天平台草态覆盖问题**：[Issue #6733](https://github.com/zeroclaw-labs/zeroclaw/issues/6733)。Matrix 频道的流式草稿仅以 Room ID 为键值，当两个 Agent 在同一房间并发工作时会发生状态污染。

</details>