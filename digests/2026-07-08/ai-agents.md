# OpenClaw 生态日报 2026-07-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-07 22:21 UTC

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
**日期**: 2026-07-08 | **追踪仓库**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

### 1. 今日速览
过去 24 小时内，OpenClaw 社区保持极高活跃度，新增与活跃 Issue 突破 **388 条**，PR 活跃量达到 **350 条**，整体开发与排障推进迅速。今日虽然没有发布新版本，但合并/关闭了 150 个 PR，重点关注了网关底层架构（如 SQLite 存储迁移）和消息丢失等核心稳定性问题。从标签分布来看，大量高价值（🦞 diamond lobster）缺陷正在被批量修复或排队等待自动化合并。整体而言，项目处于“高负载、快迭代”的稳健成长期。

---

### 2. 项目进展
今日项目未发布新版本（Release），但底层代码库迎来了多项深度重构与重要修复，总计有 **150 个 PR 被合并或关闭**。主要进展如下：

*   **底层存储架构重构**：极具里程碑意义的 [PR #98236](https://github.com/openclaw/openclaw/pull/98236) 正在推进将 session 和 transcripts 的默认存储切换至 SQLite，这将极大改善多并发下的数据持久化与读取性能。
*   **消息交付稳定性增强**：[PR #96969](https://github.com/openclaw/openclaw/pull/96969) 修复了 Discord 等平台模型“内心独白”文本误泄漏到聊天频道的严重体验问题；[PR #89040](https://github.com/openclaw/openclaw/pull/89040) 修复了引导程序加载期间导致长达 14-22 秒事件循环阻塞从而引发消息丢失的瓶颈。
*   **CLI 与工作流优化**：[PR #100845](https://github.com/openclaw/openclaw/pull/100845) 修复了一次性 Agent 本地运行无法导出 OTel 遥测数据的问题，提升了开发者的调试体验。

---

### 3. 社区热点
今日讨论度最高的 Issue 集中在**多渠道消息路由**与**内部处理文本泄漏**，反映出用户对对话顺滑度的极高要求：

*   🔥 **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (评论: 33)**：**工具调用间的文本泄漏**。用户强烈抱怨 Agent 在处理报错或确认步骤时的中间文本，被直接当作正式回复发送到了 Slack/iMessage 等渠道，严重破坏了终端用户体验。目前已有关联 PR 待合并。
*   🔥 **[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) (评论: 21)**：**子Agent结果静默丢失**。在超时等边界情况下，子任务的完成状态无法回报给父会话，导致长流程任务无疾而终。
*   🔥 **[Issue #11829](https://github.com/openclaw/openclaw/issues/11829) (评论: 20)**：**API Key 安全路线图**。社区持续关注密钥被泄漏到 Prompt 或聊天上下文中的风险，呼吁引入更分层的密钥保护机制。

---

### 4. Bug 与稳定性
今日报告的高危 Bug 主要涉及安全鉴权、数据覆盖及特定平台的消息处理表现：

*   **[P1/安全] [Issue #31583](https://github.com/openclaw/openclaw/issues/31583)**：`exec` 工具无法继承环境变量。这导致开发者无法安全地向子进程注入密钥（如密码管理器密钥），是一个回归性阻断 Bug。
*   **[P1/崩溃] [Issue #22676](https://github.com/openclaw/openclaw/issues/22676)**：Signal 网关在处理重启信号（SIGUSR1）时存在竞态条件，导致旧进程未释放端口、新进程变孤儿，最终引发发送失败与崩溃死循环。
*   **[P1/数据丢失] [Issue #40001](https://github.com/openclaw/openclaw/issues/40001)**：`write` 工具缺乏追加模式。多个独立的 Cron 会话在写入共享工作区文件（如日志）时，会直接覆盖彼此的数据，造成静默数据丢失。
*   **[P1/视觉盲区] [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)**：工具的标准输出有时被渲染成了“（见附图）”，导致模型自身无法读取关键的文本报错信息，使其丧失了自我纠错能力。

---

### 5. 功能请求与路线图信号
基于今日高赞的 Feature Request，社区正强烈推动 OpenClaw 向**更细粒度的资源控制**和**高级 UI 渲染**发展：

*   **企业级成本控制**：[Issue #42475](https://github.com/openclaw/openclaw/issues/42475) 请求在网关层强制执行“按 Agent 划分的每日/每月消耗预算上限”。结合近期对模型调用的优化 PR，这极有可能会成为下个大版本的重点功能。
*   **开发者友好度提升**：[Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (👍: 9) 呼吁在 Web 控制台 UI 中加入 MathJax/LaTeX 渲染支持，以满足科研和学术用户展示复杂数学公式的需求。
*   **多渠道工作流隔离**：[Issue #39604](https://github.com/openclaw/openclaw/issues/39604) (👍: 11) 提议增加配置项，允许显式开启 `web_fetch` 对内网/局域网的访问权限，这对于将 OpenClaw 部署在内网的企业用户是刚需。

---

### 6. 用户反馈摘要
从评论区的痛点提取来看，用户的核心抱怨与满意点如下：
*   **痛点 1：沙箱环境的配置复杂性**。如 [Issue #31331](https://github.com/openclaw/openclaw/issues/31331) 所示，在 Docker 中部署并使用 Docker-in-Docker 进行沙箱隔离时，工作区路径绑定经常失效，导致 Agent 无法读取/修改文件。
*   **痛点 2：内存与上下文管理混乱**。多 Agent 架构中，不同用户的记忆存储行为不一致（[Issue #43747](https://github.com/openclaw/openclaw/issues/43747)），说明在状态自动持久化和向量化方面，OpenClaw 还缺乏统一的默认行为约束。
*   **满意点**：用户对 OpenClaw 极广的渠道兼容性（Slack, Telegram, Feishu, iMessage, 甚至 MS Teams）表示高度认可，尤其是近期加强了对 Telegram Business 和复杂群组消息的处理能力。

---

### 7. 待处理积压
维护者团队需注意以下长期挂起的高价值积压项（部分已处于 stale 状态）：

*   ⚠️ **[Issue #85333](https://github.com/openclaw/openclaw/issues/85333)**：`openclaw doctor --fix` 命令在 5.20 版本出现了严重的性能衰退（耗时从 55 秒暴增到 229 秒以上），严重影响运维体验。
*   ⚠️ **[Issue #41744](https://github.com/openclaw/openclaw/issues/41744)**：在飞书渠道中，使用工具读取本地图片后在最终回复时媒体附件会丢失。
*   ⚠️ **[Issue #87318](https://github.com/openclaw/openclaw/issues/87318)**：Amazon Bedrock 供应商无法正确路由 Haiku 4.5 的推理配置文件 ARN，导致 AWS 用户任务回退失败。

---
*分析模型注：本期数据基于过去 24 小时（截至 2026-07-08）的 GitHub 事件流生成。*

---

## 横向生态对比

这份报告基于 2026 年 7 月 8 日各大开源 AI 智能体与个人助手项目的社区动态，进行了深度聚合与横向对比分析，旨在为技术决策者和开发者提供行业参考。

---

# 📊 2026 个人 AI 助手与自主智能体开源生态横向分析报告

### 1. 生态全景
当前（2026年中）个人 AI 助手与自主智能体开源生态正处于**从“单体可用”向“多端协同、企业级安全与重度自动化”跨越的爆发期**。项目核心发力点已从单纯的模型对接，转移至**复杂架构解耦（如多 Agent 协作）、本地与运行时安全隔离、以及跨多渠道消息的稳定路由**。同时，开发者对生态的诉求正急剧向“生产环境可用性”倾斜，表现为对沙箱逃逸、内存泄漏、供应链安全和精细化资源控制（如预算限流）的严格审视。

### 2. 各项目活跃度对比（基于 2026-07-08 数据）

| 项目名称 | 活跃 Issues 数 | 活跃 PR 数 | 版本发布 | 健康度 / 核心状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 388 | 350 | 无 | 🟢 **极高** (高负载快迭代，底层架构如 SQLite 迁移稳步推进) |
| **IronClaw** | 29 | 50 | 无 (准备中) | 🟢 **高** (处于 "Reborn" 重构期，前端 TS 迁移，QA 测试密集) |
| **NanoBot** | 12 | 28 | 无 | 🟡 **中** (极速迭代引发兼容性抱怨，P1 Bug 修复响应极快) |
| **ZeroClaw** | 26 | 50 | 无 | 🟢 **高** (Rust 底层发力，ZeroCode 可视化编排推进，修复 OOM 阻点) |
| **Hermes Agent**| 50 | 50 | 无 | 🟢 **高** (聚焦桌面端瘦客户端转型与 MCP 底层泄漏深度修复) |
| **CoPaw** | 17 | 38 | **v2.0.0-beta.3** | 🟢 **高** (v2.0 冲刺期，强化 Windows UIA 桌面控制与多模态) |
| **LobsterAI** | - | 16 | **2026.7.7** | 🟢 **高** (高频功能合入，探索多智能体委派协作) |
| **NanoClaw** | 1 | 24 | 无 | 🟡 **中** (聚焦文档校准、供应链安全收紧与细节打磨) |
| **PicoClaw** | 7 | 4 | 无 | 🟢 **稳定** (侧重边端硬件适配、NanoKVM 及 IM 协议隐私化) |
| **TinyClaw** | 9 | 0 | 无 | 🔴 **危险** (遭遇 9 连击严重安全漏洞提报，控制平面“裸奔”，零修复) |
| **NullClaw / Moltis 等**| 0 | 0 | 无 | ⚪ **静默** (过去 24 小时无活动) |

### 3. OpenClaw 在生态中的定位
*   **生态标杆与流量枢纽**：以单日近 400 个 Issue 和 350 个 PR 的数据，OpenClaw 毫无争议地处于生态第一梯队，拥有最庞大的社区基本盘和最快的自迭代速度。
*   **技术路线：深耕网关底层与企业级特性**：与其他项目相比，OpenClaw 高度注重多渠道（IM/P2P）的消息交付体验。今日重点推进的 SQLite 存储迁移和解决长达 20 秒的事件循环阻塞，表明其对“高并发下消息必达”的极致追求。
*   **差异化优势**：具备最广的 IM 渠道兼容性（Slack, Telegram, 飞书, iMessage 等），且社区发出的功能请求（如按 Agent 划分预算上限、内网路由控制）极具“企业级生产部署”特征，领先于其他仍处于基础 Bug 修复阶段的项目。

### 4. 共同关注的技术方向
通过对各项目 Issue 和 PR 的提取，以下四大技术趋势正在生态内形成共识：
*   **1. MCP (Model Context Protocol) 运行时生命周期管理：**
    *   *涉及项目*：Hermes Agent, ZeroClaw, NanoBot。
    *   *诉求*：解决 MCP stdio 子进程僵尸挂起、握手失败导致的网关 OOM（如 Hermes 修复了 58.8GB 内存泄漏）及 FD 泄漏。MCP 工具链已重度介入生产，稳定性成刚需。
*   **2. 本地安全控制与沙箱隔离防逃逸：**
    *   *涉及项目*：TinyClaw, NanoBot, LobsterAI, CoPaw, OpenClaw。
    *   *诉求*：防止 Agent 越权读写（路径遍历攻击）、阻断未授权本地 API 劫持 Token，以及隔离系统级 shell 执行权限（防止 `rm -rf` 灾难）。
*   **3. 桌面端 RPA 与“瘦客户端”架构：**
    *   *涉及项目*：Hermes Agent, CoPaw。
    *   *诉求*：将计算密集型 Agent 放在远端，本地仅作 UI 交互（PTY 存活机制）；甚至通过 Windows UIA 协议直接控制桌面 GUI 进行点击拖拽。
*   **4. 长上下文/高频并发下的性能保障：**
    *   *涉及项目*：LobsterAI, OpenClaw, CoPaw。
    *   *诉求*：解决 SQLite 频繁同步落盘导致的阻塞（通过防抖批量写入），以及超大 JSON 工具历史记录引发的前端白屏崩溃。

### 5. 差异化定位分析
*   **OpenClaw（企业级通信中枢）**：强项在于全方位的 IM 路由、群组消息精细控制以及企业成本管控，定位于团队工作流助手。
*   **ZeroClaw（可视化与高维编排）**：基于 Rust 保障底层内存安全，强推 ZeroCode 可视化节点图编排（SOP），适合复杂流和需要极高安全兜底的多用户场景。
*   **CoPaw（桌面端极客伴侣）**：深度融合本地操作系统（Windows/Mac 兼容、托盘常驻、GUI 操控），更像是一个具有上帝视角的本地电脑管家。
*   **Hermes Agent（状态追踪管家）**：提出“目标状态规划引擎”概念（持续追踪财务/健康目标），注重技能持久化和 PTY 会话重连。
*   **PicoClaw（边缘与隐私硬件）**：主攻 NanoKVM、Android ADB 等边缘硬件控制，并受追捧去中心化通讯协议，是物联网派与硬核隐私派的 preference。

### 6. 社区热度与成熟度
*   **快速扩张与破圈期（高活跃，有阵痛）**：**OpenClaw, NanoBot, CoPaw**。这些项目功能井喷，但同时也饱受多模态断层、长上下文崩溃以及破坏性更新（Breaking Changes）引发的老用户抱怨。
*   **质量巩固与架构重构期（高价值，重打磨）**：**IronClaw, Hermes Agent, ZeroClaw**。社区焦点集中于偿还技术债、前端现代化（如全面 TS 化）、前端虚拟列表加载、以及底层 OOM 深度修复。
*   **高危预警与维护滞后**：**TinyClaw**。单日被安全研究员曝出 9 个 0-day 漏洞，涉及控制面提权与任意文件读取，目前维护者零响应，项目健康度亮红灯。

### 7. 值得关注的趋势信号
1.  **安全研究员 `YLChen-007` 现象**：该研究员今日在生态内多个项目（NanoBot 3个，LobsterAI 3个，TinyClaw 9个）集中提交了针对本地预览服务器、Bootstrap 端点和 Token 校验的高危漏洞。这释放了强烈信号：**AI Agent 的本地运行时不再绝对安全**，通过恶意构造的 Prompt 或同机病毒，极易窃取大模型 API 额度或主机文件。开发者必须在 Agent 初始化时强制引入 Origin 校验和绝对路径净化。
2.  **前端渲染成为算力解耦后的新瓶颈**：随着 Agent 单次任务执行的工具调用步骤变多（动辄生成 >500KB 的 JSON），多个项目（如 CoPaw, IronClaw）面临前端白屏问题。**虚拟列表 和渐进式渲染**将成为下一波 UI 更新的标配。
3.  **规则遵循与记忆的原子化**：OpenClaw 和 Hermes 均暴露出 Agent 在长流程中违背既定规则、静默丢失子任务数据的问题。这表明当前的大模型在状态机管理上依然脆弱，催生了对 **子代理审批 CAS（Compare-And-Swap）原子操作**和沙箱化独立记忆写入工具的迫切需求。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-07-08  
**项目仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
过去 24 小时内，NanoBot 项目保持了**极高的社区活跃度与开发进展**。单日共有 12 个 Issue 更新（9 个新开）和高达 28 个 PR 更新（19 个待合并），开发节奏紧凑。
安全与稳定性成为今日焦点，社区集中报告了 3 个与 WebUI 底层鉴权相关的安全漏洞，以及多模态处理和渠道网关的崩溃 Bug。
维护者与贡献者响应迅速，绝大多数今日报告的 P0/P1 级别核心 Bug 均已有对应的修复 PR 提交，展现了项目极强的自我修复能力。

---

### 2. 项目进展
今日无新版本发布，但共有 9 个 PR 被合并或关闭。以下为今日推进的重要进展：

*   **网络请求优化 ([PR #3743](https://github.com/HKUDS/nanobot/pull/3743))**: 合并了支持提供商托管网络搜索（Provider-hosted web search）的功能，优化了 Azure OpenAI 等接口的原生工具调用支持。
*   **渠道体验优化 ([PR #4763](https://github.com/HKUDS/nanobot/pull/4763))**: 关闭并合并了针对飞书渠道的会话分隔符优化，提升了 P2P 场景下的 UI 展示体验。
*   **底层任务逻辑解耦 ([PR #3232](https://github.com/HKUDS/nanobot/pull/3232))**: 关闭了重构智能体任务回调逻辑的 PR，简化了待处理队列的迭代逻辑，提升了代码可读性与未来扩展性。

---

### 3. 社区热点
今日讨论最热烈的议题集中在系统稳定性和近期升级导致的兼容性破坏上：

*   **安全鉴权机制热议 ([Issue #4825](https://github.com/HKUDS/nanobot/issues/4825), [#4826](https://github.com/HKUDS/nanobot/issues/4826), [#4827](https://github.com/HKUDS/nanobot/issues/4827))**: 贡献者 `YLChen-007` 连续提交了 3 个安全公告，指出嵌入式 WebUI 在回环地址下可被本机非特权进程恶意获取 Bearer Token。这反映出用户对企业级本地部署安全性的强烈诉求。
*   **长文本流阻断问题 ([Issue #4013](https://github.com/HKUDS/nanobot/issues/4013))**: 此前报告的“LLM 流请求停滞超 90 秒”的 Bug 已被关闭，说明维护者已找到短期缓解或根本解决方案。
*   **WhatsApp 群组回复风暴 ([Issue #4823](https://github.com/HKUDS/nanobot/issues/4823))**: 用户 `mxnbf` 报告在 0.2.2 版本后，机器人的回复会错发至所有加入的群组，引发了关于白名单机制失效的热议。

---

### 4. Bug 与稳定性
今日新增的 Bug 报告按严重程度排列如下：

**🔴 严重 / 安全级**
1.  **WebUI 未授权 Token 获取** ([Issue #4825](https://github.com/HKUDS/nanobot/issues/4825) - Security): 未授权本地进程可利用 bootstrap 端点伪造 API Token。*(暂无明确修复 PR，需重点关注)*
2.  **DNS 重绑定 TOCTOU 漏洞** ([Issue #4611](https://github.com/HKUDS/nanobot/issues/4611) - Security): SSRF 校验未锁定已解析的 IP，可能导致内网穿透。*(Issue 已关闭，推测已修复)*

**🟠 高危 / 崩溃级**
3.  **多模态消息导致崩溃** ([Issue #4800](https://github.com/HKUDS/nanobot/issues/4800)): 代码中直接对 `msg.content` 调用 `.strip()`，导致接收到 List 格式的多模态消息时崩溃。**-> 已有修复 PR [#4837](https://github.com/HKUDS/nanobot/pull/4837) (P1)**
4.  **工具校验错误被静默吞没** ([Issue #4805](https://github.com/HKUDS/nanobot/issues/4805)): `suppress(Exception)` 导致关键的工具验证错误被忽略，引发链式幻觉。**-> 已有修复 PR [#4837](https://github.com/HKUDS/nanobot/pull/4837) (P1)**
5.  **Slack 依赖缺失** ([Issue #4829](https://github.com/HKUDS/nanobot/issues/4829)): `pyproject.toml` 中遗漏了 `aiohttp`，导致 Slack 插件无法启用。**-> 已有修复 PR [#4830](https://github.com/HKUDS/nanobot/pull/4830) (P1)**

**🟡 中危 / 逻辑级**
6.  **WhatsApp 群组白名单失效** ([Issue #4823](https://github.com/HKUDS/nanobot/issues/4823)): 回归 Bug，导致机器人在未经允许的群组中乱发消息。**-> 已有修复 PR [#4834](https://github.com/HKUDS/nanobot/pull/4834) (P1)**
7.  **WebUI 首条消息串台** ([Issue #4835](https://github.com/HKUDS/nanobot/issues/4835)): 异步队列延迟导致落地的首条消息可能被误发送到已存在的旧对话中。**-> 已有修复 PR [#4836](https://github.com/HKUDS/nanobot/pull/4836) (P2)**
8.  **Matrix 机器设备信任问题** ([Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)): 在 Element 客户端中始终显示为 "Untrusted"，缺少跨签名验证路径。

---

### 5. 功能请求与路线图信号
从今日的 Issue 和 PR 流向中，可以清晰地捕捉到 NanoBot 的下一步演进路线：

*   **运行时动态门控**: [PR #4833](https://github.com/HKUDS/nanobot/pull/4833) 正在重构目标导向工具的触发机制，将其从“始终可见”改为按需注入（运行时门控）。这将显著减少 Token 消耗和模型幻觉，有望进入下一个小版本。
*   **进程防泄漏与僵尸回收**: [PR #4840](https://github.com/HKUDS/nanobot/pull/4840) 和 [PR #4506](https://github.com/HKUDS/nanobot/pull/4506) 均致力于处理子进程退出和 MCP 服务器闲置超时的管理，说明项目正在向**长时间无人值守的守护进程模式**进行强化。
*   **富文本与多渠道兼容**: 持续优化 Telegram 流溢出的 HTML 解析 ([PR #4839](https://github.com/HKUDS/nanobot/pull/4839)) 以及 QQ 指数退避重连 ([PR #4838](https://github.com/HKUDS/nanobot/pull/4838))，表明多渠道接入层正在打磨最后的边缘用例。

---

### 6. 用户反馈摘要
从 Issue 描述和讨论中，可以提炼出以下真实用户痛点：
*   **多模态支持存在断层**: 用户已经開始大量尝试发送图片等非纯文本内容，但部分核心代码尚未完全适配数据类型变更，导致频发崩溃。
*   **对 0.2.x 版本快速迭代的抱怨**: 用户 `mxnbf` 在 Issue 中明确表示对近期频繁的 Breakling Change（如 WhatsApp 机制变更、长任务目标机制硬编码）感到沮丧，认为“这导致任何实际工作都无法有效进行”。项目方需在破坏性更新的平滑过渡上做更多工作。
*   **MCP 协议的稳定性焦虑**: MCP HTTP 服务器的超时断开极易引发网关崩溃 ([PR #4764](https://github.com/HKUDS/nanobot/pull/4764))，说明用户已在生产环境中重度依赖 MCP 工具链。

---

### 7. 待处理积压与维护者提醒
以下重要 PR 已停留较长时间或存在冲突，需要维护者重点关注与 Rebase：

1.  **[PR #4506](https://github.com/HKUDS/nanobot/pull/4506) (冲突)**: MCP Server 闲置超时自动清理机制。提交于 6 月 25 日，存在代码冲突，对于解决内存泄漏至关重要。
2.  **[PR #4669](https://github.com/HKUDS/nanobot/pull/4669) (P1, 有效)**: 强制在启动 OpenAI 兼容 API 服务前配置 Key。提交于 7 月 2 日，今日在安全审计热度上升，建议尽快合并以防范裸奔风险。
3.  **[PR #4764](https://github.com/HKUDS/nanobot/pull/4764) (P1, 冲突)**: 修复 MCP streamable-http 空闲超时导致的网关崩溃。
4.  **[PR #4771](https://github.com/HKUDS/nanobot/pull/4771) (冲突)**: 支持 WebUI 文档（如 PDF）附件拖拽上传，该功能需求呼声较高。

**维护者建议**: 今日集中暴露了 3 个 `localhost` 本地越权的安全 Issue，建议优先审阅并合并 [PR #4669](https://github.com/HKUDS/nanobot/pull/4669) 作为基础防御，随后统筹处理 WebUI bootstrap 鉴权逻辑的修复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

这份日报基于 Hermes Agent 过去 24 小时的 GitHub 活动数据生成。从数据来看，项目目前正处于高度活跃的维护与快速迭代期，尤其集中在网关网关组件稳定性和桌面端体验上。

以下是 2026-07-08 的 Hermes Agent 项目动态日报：

### 1. 今日速览
* 项目整体保持高度活跃，过去 24 小时内共有 50 条 Issue 更新（新开/活跃 34，关闭 16）和 50 条 PR 更新（待合并 31，合并/关闭 19）。
* **底层资源泄漏问题成为今日的核心焦点**，社区集中反馈了 MCP stdio 子进程在重连、握手失败及父进程异常退出时的僵尸进程与文件描述符泄漏问题，维护者已迅速响应并合并了多个汇总修复 PR。
* **桌面客户端与多端协同**成为下一阶段的重中之重，大量 Issue 和 PR 聚焦于桌面端远程连接、UI 配置以及 Web Dashboard 断线重连后的会话保留。
* 项目无新版本发布，当前处于大量 Bug 修复与底层架构重构的积累阶段。

### 2. 版本发布
* **无新版本发布**。

### 3. 项目进展
今日项目在底层稳定性和多端会话保持上取得了突破性进展，多个长线 PR 被合并：
* **彻底修复 MCP 子进程泄漏** ([PR #60509](https://github.com/NousResearch/hermes-agent/pull/60509))：合并了终极修复方案，一次性关闭了重连僵尸进程、握手挂起、父进程死亡和空闲常驻 4 条泄漏路径。此前这会导致长达数天的网关内存泄漏（曾观测到 6 天占用 58.8 GB）及 OOM 级联崩溃。
* **Dashboard 会话存活机制** ([PR #60515](https://github.com/NousResearch/hermes-agent/pull/60515), [PR #47297](https://github.com/NousResearch/hermes-agent/pull/47297))：合并了 Web 端断线重连和会话附着机制。现在浏览器刷新、睡眠唤醒或网络中断不会杀死正在运行的 Agent，PTY 进程得以存活并支持重连。
* **桌面端国际化框架整合** ([PR #38846](https://github.com/NousResearch/hermes-agent/pull/38846))：推进了 15 种语言的混合 JSON+TypeScript 国际化系统，提升了本地化贡献的友好度。

### 4. 社区热点
今日讨论最热烈的需求集中在客户端解耦与状态持久化：
* **[最高热度] 桌面端纯客户端安装模式** ([Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602)，👍 42，评论 10)：用户强烈希望 Hermes Desktop 能作为瘦客户端，直接连接远程服务端，而不是在本地强制引导安装一套完整的 Agent 运行时。
* **持久化的 Agent 任务执行** ([Issue #22027](https://github.com/NousResearch/hermes-agent/issues/22027)，已关闭)：用户反馈关闭浏览器标签页会导致 WebSocket 断开从而终止 Agent 任务，此诉求已在今日的 PR 更新中得到部分解决。
* **目标状态规划引擎** ([Issue #12327](https://github.com/NousResearch/hermes-agent/issues/12327))：提出了极具创新性的个人助理概念，要求 Hermes 能持续追踪用户当前状态与目标状态（如健康、财务、职业），并主动规划填补差距的路径。

### 5. Bug 与稳定性
今日暴露了大量影响系统稳定性的 P2 级别 Bug，目前大部分已有对应的修复 PR：
* **【严重】MCP 僵尸进程与 FD 泄漏** ([Issue #59349](https://github.com/NousResearch/hermes-agent/issues/59349), [Issue #57228](https://github.com/NousResearch/hermes-agent/issues/57228))：导致系统 `EMFILE` 错误和内存暴涨。**已修复 (PR #60509 等)**。
* **【严重】Dashboard 基础认证崩溃** ([Issue #58810](https://github.com/NousResearch/hermes-agent/issues/58810), [Issue #57868](https://github.com/NousResearch/hermes-agent/issues/57868))：v0.18.0 版本中，当仅配置密码认证提供者时，首页加载会触发 500 错误并陷入 OAuth 重定向死循环。
* **【中等】MoA 参考模型静默降级** ([Issue #60345](https://github.com/NousResearch/hermes-agent/issues/60345))：当上下文溢出时，参考模型调用静默失败，导致混合模型架构在无提示的情况下发生性能降级。**暂无 Fix PR**。
* **【中等】Windows 环境字符编码与控制台闪烁** ([Issue #60447](https://github.com/NousResearch/hermes-agent/issues/60447), [Issue #56747](https://github.com/NousResearch/hermes-agent/issues/56747))：Windows 下包含非 ASCII 字符的路径会导致构建失败，且 GUI 运行时伴有黑框弹窗闪烁。

### 6. 功能请求与路线图信号
基于 Issue 反馈与活跃的 PR，可以推断以下方向将被纳入近期的发布路线图：
* **Desktop UI 状态与配置隔离**：提供桌面端与远程后端的无缝对接，包含凭证池的清理机制修复 ([Issue #55790](https://github.com/NousResearch/hermes-agent/issues/55790)) 以及记忆提供者声明式配置面板 ([PR #51020](https://github.com/NousResearch/hermes-agent/pull/51020))。
* **技能与状态记忆的持久化**：目标状态规划引擎的概念正在被实现为基于文件的持久化追踪技能 ([PR #60531](https://github.com/NousResearch/hermes-agent/pull/60531))，用户可自定义生活/工作目标并由 Agent 追踪进度。
* **IM 网关的单进程多路复用**：允许单个 Telegram 机器人通过配置映射 (`channel_profiles`) 为不同的群组/聊天分配不同的 Agent 人格 ([Issue #40173](https://github.com/NousResearch/hermes-agent/issues/40173))。

### 7. 用户反馈摘要
* **痛点 1：多模型/多组件管理极其复杂**。用户反馈配置文件中模型参数分散 ([Issue #12658](https://github.com/NousResearch/hermes-agent/issues/12658))，切换模型时会忽略压缩辅助模型配置 ([Issue #27538](https://github.com/NousResearch/hermes-agent/issues/27538))，且本地自定义模型易发生死锁 ([Issue #42248](https://github.com/NousResearch/hermes-agent/issues/42248))。
* **痛点 2：规则遵循能力不足**。用户报告 Agent 在调用保存的技能或记忆规则时存在违反预设规则的逻辑幻觉 ([Issue #60429](https://github.com/NousResearch/hermes-agent/issues/60429))。
* **痛点 3：工具调用的安全边界界定**。对于多用户共享的 IM 网关，工具审批存在越权风险，用户要求细化外部动作的运行时审批机制 ([Issue #51221](https://github.com/NousResearch/hermes-agent/issues/51221))。

### 8. 待处理积压
维护者需要关注以下存在数据异常或积压的模块：
* **网关审批 UI 越权漏洞** ([Issue #59413](https://github.com/NousResearch/hermes-agent/issues/59413), [PR #60495](https://github.com/NousResearch/hermes-agent/pull/60495))：待合并的安全修复 PR。当前共享频道内任何用户输入 "yes" 即可批准本应属于其他用户的敏感工具调用请求。
* **企业微信 Token 跨配置泄漏** ([PR #59674](https://github.com/NousResearch/hermes-agent/pull/59674))：待合并状态。多路复用网关中使用 `os.getenv` 导致不同 Profile 间的企业微信凭证可能相互覆盖。
* **旧版本的 Dashboard 状态丢失** ([Issue #15915](https://github.com/NousResearch/hermes-agent/issues/15915))：4月份提出的 Dashboard 侧边栏导航导致页面刷新丢失会话状态的 Bug，直到今日的 PTY 重连机制引入才有望间接缓解，需验证关闭路径。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是为您生成的 2026-07-08 PicoClaw 项目动态日报。

---

# 📊 PicoClaw 项目动态日报 (2026-07-08)

**数据源:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **报告周期:** 过去 24 小时

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持高度活跃，共产生 7 条 Issue 更新（5 新开/活跃，2 关闭）和 4 条 PR 更新（3 待合并，1 关闭）。项目当前没有发布新版本，开发重心主要集中在 v0.3.x 线上版本的错误修复、底层的代码重构（如通讯协议与文件系统工具），以及边端硬件（NanoKVM、Android ADB）的兼容性适配。整体来看，项目处于稳步迭代与社区反馈修复阶段，开发者和用户互动频繁，健康度良好。

## 2. 版本发布
* **今日无新版本发布。**
*(注：从社区反馈来看，当前测试及使用重心已向 v0.3.1 及更新的版本过渡，同时仍有部分用户在使用 v0.2.8/v0.2.9)*

## 3. 项目进展
今日无合并的 PR，但维护者在代码重构和清理旧代码方面推进了重要工作，且关闭了一些过期的提案：
* **代码清理与重构：** PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) 对 `deltachat` 模块进行了深度清理，删除了约 320 行无用代码（遗留功能、过时测试）。该 PR 还引入了破坏性变更：移除了基于密码的电子邮件配置，并重命名了相关 API（`invite_link` 变更为 `join_invite_link`）。这标志着 PicoClaw 在即时通讯网关的安全性及代码整洁度上迈出了一大步。
* **向下兼容修复：** 为配合上述重构，PR [#3233](https://github.com/sipeed/picoclaw/pull/3233) 专门提交了针对 PR 3222 的向后兼容修复，以确保平滑过渡。
* **安全防护增强：** PR [#3226](https://github.com/sipeed/picoclaw/pull/3226) 修复了文件写入工具（`write_file`）的逻辑，阻止了 AI 智能体在更新 `MEMORY.md` 时被误导执行破坏性覆盖，增强了工具使用时的数据安全性。

## 4. 社区热点
今日社区讨论的焦点集中在**多模型适配的稳定性**以及**边缘设备的部署体验**上：
* **通讯网关需求强烈：** Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)（已关闭）中，用户强烈呼吁原生支持 SimpleX、Wire 或 Tox 等注重隐私的通讯协议作为交互网关。这反映出 PicoClaw 的用户群体对数据隐私和去中心化通信有极高的诉求。
* **大模型 API 适配痛点：** Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) 反映了在使用火山引擎豆包大模型时，Tool Calls（工具调用）偶尔会作为纯文本 `<seed:tool_call>` 泄漏给用户，引发了关于特定厂商 API 兼容性的讨论。

## 5. Bug 与稳定性
今日新报告及活跃的 Bug 主要集中在系统配置与第三方服务认证，按严重程度排列如下：

* **【高】速率限制失效:** [Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)
  * **环境:** v0.3.1 / Docker (go 1.26-alpine)
  * **表现:** 若未配置兜底模型，主模型的 RPM（每分钟请求数）限制将完全失效。可能导致意外的 API 费用消耗或触发 API 封禁。
* **【高】OAuth 登录故障:** [Issue #3196](https://github.com/sipeed/picoclaw/issues/3196) & [Issue #3197](https://github.com/sipeed/picoclaw/issues/3197) (疑似重复提交)
  * **环境:** v0.2.9
  * **表现:** 用户报告 Codex 和 antygravity 的 OAuth 登录功能失效，直接阻断了授权流程。
* **【中】特定模型运行报错:** [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)
  * **环境:** NanoKVM 2.4.0
  * **表现:** 在 NanoKVM 默认配置下尝试使用 gpt-5.4 时，所有交互均报错，阻碍了边缘设备用户的接入。
* **【低】上下文记忆重复执行:** [Issue #3159](https://github.com/sipeed/picoclaw/issues/3159) (已关闭)
  * **表现:** 使用 deepseek-v4-flash 模型时，处理新任务会重复执行上一个任务（如查完美国新闻再查法国新闻时，会重复查一次美国新闻）。属于典型的上下文窗口管理/模型指令遵循问题。

## 6. 功能请求与路线图信号
* **边缘设备控制：** 虽然今日关闭了实验性的 Android ADB 远程操作工具 PR [#3157](https://github.com/sipeed/picoclaw/pull/3157)，但结合 NanoKVM 相关的 Issue [#3195](https://github.com/sipeed/picoclaw/issues/3195) 来看，**“将 PicoClaw 作为 IoT/边缘设备的 AI 控制中枢”** 明显是项目拓展的重要方向。未来官方极有可能以更完善的形式重新引入设备控制 Tools。
* **安全性与记忆系统：** PR [#3226](https://github.com/sipeed/picoclaw/pull/3226) 暴露出目前 PicoClaw 缺乏专属的 `memory-write` 工具。强化 AI 记忆系统（持久化存储）的安全性与独立性，将是下一步优化的关键信号。

## 7. 用户反馈摘要
通过对今日 Issues 的提炼，可以看出真实用户的核心痛点：
* **痛点 1：API 成本与限制焦虑。** 用户在使用免费/低价模型（如 deepseek-v4-flash-free）或未配置 Fallback 时，非常关注速率限制（#3232）和任务重复（#3159），因为无效的重复 Token 消耗会直接影响他们的钱包或额度。
* **痛点 2：配置复杂度。** 智能体的 YAML/JSON 配置具有一定门槛，火山引擎工具调用的泄漏（#3153）和默认配置导致的启动失败（#3195）说明，社区急需更多“开箱即用”的预设方案或更强的容错机制。
* **痛点 3：隐私需求两极分化。** 一部分用户希望无缝接入大厂生态（OpenAI, 火山引擎），另一部分硬核用户则在寻找 SimpleX/Tox 等反审查、去中心化的部署方案。

## 8. 待处理积压
系统检测到多个带有 `[stale]`（陈旧/停滞）标签的 Issue，请维护团队关注：
1. **[Issue #3196](https://github.com/sipeed/picoclaw/issues/3196) / [Issue #3197](https://github.com/sipeed/picoclaw/issues/3197):** v0.2.9 版本的 OAuth 登录阻断问题，目前处于 Open 且 stale 状态，影响用户鉴权流程。
2. **[Issue #3195](https://github.com/sipeed/picoclaw/issues/3195):** NanoKVM 平台的兼容性报错问题，涉及硬件端用户留存，需尽快确认是否为普遍现象。
3. **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153):** 豆包大模型 Seed 工具调用的原生 Bug，尚无对应修复 PR。

---
*本期日报由 AI 自动生成，如需查看详细数据请点击对应的 GitHub 链接。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期**: 2026-07-08  
**数据来源**: [NanoClaw GitHub](https://github.com/qwibitai/nanoclaw)

---

### 1. 今日速览
NanoClaw 项目今日保持着高度活跃的开发与维护节奏，过去 24 小时内共有 24 个 PR 发生状态更新（其中 9 个被合并或关闭，15 个待合并），同时有 1 个新开的安全类 Issue。项目维护者今日重点推进了文档同步、底层 SDK 升级适配以及多个安全与供应链修复。整体来看，项目正处于快速迭代期，社区贡献者对 CLI 工具链、技能体系及容器运行时的细节打磨表现出极高热情，代码质量与安全性防线正在稳步收紧。

### 2. 版本发布
**无新版本发布**。

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，标志着项目在文档一致性、SDK 适配和容器稳定性方面取得了实质性进展：
*   **文档大规模校准**：维护者 glifocat 关闭了 4 个文档同步 PR，包括重写架构与 Agent runner 细节文档 ([#2963](https://github.com/nanocoai/nanoclaw/pull/2963))、同步数据库 Schema ([#2962](https://github.com/nanocoai/nanoclaw/pull/2962))、修复多份核心文档的过时信息 ([#2961](https://github.com/nanocoai/nanoclaw/pull/2961))，以及将 SDK 深度指南更新至 0.3.197 版本 ([#2964](https://github.com/nanocoai/nanoclaw/pull/2964))。这表明项目在快速迭代后成功偿还了技术文档债。
*   **Agent Runner 稳定性修复**：glifocat 关闭了针对 `agent-runner` 限流事件匹配的修复 ([#2965](https://github.com/nanocoai/nanoclaw/pull/2965))，确保 SDK 0.3.x 的限流事件能被正确处理。
*   **CLI 与集成修复**：sturdy4days 关闭了修复 CLI 创建消息组报错的 PR ([#2804](https://github.com/nanocoai/nanoclaw/pull/2804))；OowhitecatoO 关闭了解包 Discord 转发消息的修复 ([#2922](https://github.com/nanocoai/nanoclaw/pull/2922))，提升了多平台集成的体验。

### 4. 社区热点
今日社区活跃度集中在安全漏洞披露与核心工具链的健壮性增强上，多个新开的 PR 引入了深度修复：
*   **安全漏洞披露**：[Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970) 报告了通过未认证的网关回环 Webhook 伪造本地操作的漏洞。这反映了随着 NanoClaw 网关架构复杂化，本地回调的边界认证成为安全焦点。
*   **供应链安全收紧**：sturdy4days 提交的 [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973) 修复了 `pnpm` 中 `minimumReleaseAge` 配置失效的问题，将其提升至顶层配置，体现了维护团队对开源供应链攻击防御的重视。
*   **审批机制并发修复**：[PR #2974](https://github.com/nanocoai/nanoclaw/pull/2974) 引入原子 compare-and-set 操作来锁定待处理的审批请求，修复了在调用 handler 前可能产生的并发竞态问题。

### 5. Bug 与稳定性
*   **[严重] 本地操作伪造漏洞**：NanoClaw 本地 Webhook 在信任转发网关事件前未进行发送方认证 ([Issue #2970](https://github.com/nanocoai/nanoclaw/issues/2970))。目前尚无对应的 fix PR 合并，需密切关注。
*   **[高] 供应链安全配置失效**：`pnpm-workspace.yaml` 中的 `minimumReleaseAge` 因层级位置错误未生效 ([PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973))，已有 OPEN 状态的修复 PR。
*   **[高] 目录遍历与镜像标签注入**：CLI 创建组时未校验 `folder` 参数且未限制 `--image-tag`，可能导致路径穿越 (CWE-22) ([PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800))，修复 PR 处于 OPEN 状态。
*   **[中] Provider 错误状态误报**：`agent-runner` 在发生 Provider 错误时将其记录为 `completed`，导致失败无法被感知 ([PR #2966](https://github.com/nanocoai/nanoclaw/pull/2966))，目前已有修复草案待讨论。

### 6. 功能请求与路线图信号
*   **模板化部署流程**：amit-shafnir 提交的 [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) 正在推进 Setup Wizard 中的 Agent 模板选择与首个 Agent 自动注入功能。这预示着 NanoClaw 正在降低新用户的上手门槛，向开箱即用方向演进。
*   **企业级集成增强**：Koshkoshinsk 提交了基于 SSF 的 Teams-CLI 优先凭证流 ([PR #2958](https://github.com/nanocoai/nanoclaw/pull/2958))，用纯 CLI 替代了繁琐的 Azure Portal 操作；同时提交了 Slack Socket Mode 的修复与 Wizard UX 优化 ([PR #2972](https://github.com/nanocoai/nanoclaw/pull/2972))。
*   **远程存储与运维工具**：glifocat 提交了支持 WebDAV/S3 的远程存储技能 PR ([PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598))；zivisaiah 贡献了主机健康检查 CLI 工具技能 ([PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971))。这些信号表明项目正拓展其生态边界，向更重型的生产部署场景迈进。

### 7. 用户反馈摘要
*   **配置流程繁琐**：从 Teams 和 Slack 集成的 PR 进展可以看出，用户对需要频繁切换至外部门户（如 Azure Portal）进行配置感到不满，强烈诉求全 CLI 化的配置体验。
*   **文档与代码脱节**：glifocat 一次性提交了 4 个文档修复 PR，侧面反映出社区开发者在跟进最新代码时，受困于过时的架构和 DB Schema 文档，影响了二次开发效率。
*   **状态反馈不透明**：`agent-runner` 错误上报为 `completed` 的 Bug ([PR #2966](https://github.com/nanocoai/nanoclaw/pull/2966)) 暴露出用户在生产环境中无法准确追踪 Agent 执行失败的情况，这是当前痛点之一。

### 8. 待处理积压
*   **[PR #1598] feat: add-remote-storage skill**：由 glifocat 于 4 月 2 日提交，距今已超 3 个月，昨日有活跃更新。该功能价值较高但可能涉及较复杂的审查，建议维护者优先评估是否合并。
*   **[PR #2873] fix(skills): split pre-flight from credentials**：由 glifocat 于 6 月 27 日提交，涉及技能更新机制的重构，目前仍处于待合并状态，需避免与其他 Wizard 相关 PR 产生冲突。
*   **[PR #2800] fix(security): validate folder + restrict --image-tag**：6 月 17 日提交的安全修复 PR，至今未合并。考虑到涉及路径穿越漏洞，建议维护者尽快进行 Code Review 并推进合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-07-08  
**数据来源**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### 1. 今日速览
IronClaw 在过去 24 小时内保持了极高的开发活跃度，共处理了 **29 条 Issue 更新**（20 活跃/新开，9 关闭）和 **50 条 PR 更新**（40 待合并，10 已合并/关闭）。项目目前正处于 **"Reborn"（重构/重生）** 架构的深度推进期，开发重心集中在 WebUI v2 的 TypeScript 迁移、底层文件系统并发控制（CAS）以及安全边界（OAuth/权限）的加固上。值得注意的是，今日有大量来自自动化测试（如 pinchbench）和 Bug Bash 活动的反馈，表明项目正处于紧张的测试与质量保证（QA）阶段。

---

### 2. 版本发布
**本日无新版本发布。**
但在 PR #5598 (`chore: release`) 中，自动化机器人正在准备下一次的发布流程，预计核心库 `ironclaw_common` 和 `ironclaw_skills` 将迎来 API 破坏性更新，主仓库版本将从 `0.24.0` 跨越至 `0.29.1`。

---

### 3. 项目进展
今日项目整体向前迈出了坚实的一步，特别是**前端现代化改造**和**架构解耦**取得了突破性进展：

*   **前端技术栈全面升级**: 今日合并了多个关于前端基础建设的 PR。包括完全切换到 `pnpm` ([#5729](https://github.com/nearai/ironclaw/pull/5729))、引入 `Vite + TypeScript` 脚手架 ([#5730](https://github.com/nearai/ironclaw/pull/5730)) 以及初步将 WebUI 源码迁移至 TypeScript ([#5731](https://github.com/nearai/ironclaw/pull/5731))。这为后续构建更复杂的管理界面打下了基础。
*   **Reborn 架构与安全性推进**: 关闭了多个底层深层级 Bug，例如修复了内存审批状态不一致的问题 ([#5467](https://github.com/nearai/ironclaw/issues/5467)) 和并行运行时的 CAS 竞态问题 ([#5466](https://github.com/nearai/ironclaw/issues/5466))。
*   **移动端可用性修复**: 修复了移动端聊天界面长文本导致横向滚动条的严重排版问题 ([#5554](https://github.com/nearai/ironclaw/issues/5554))。

---

### 4. 社区热点
今日最热门的讨论主要集中在 Agent 与外部系统集成的痛点上：

*   **[Issue #5702](https://github.com/nearai/ironclaw/issues/5702) [bug_bash_P2]**: GitHub 集成搜索与创建返回 `HTTP 403`。尽管用户已经配置了集成，但 Agent 依然无法正常与 GitHub 交互。这反映了用户对 AI 助手无缝操作外部代码库的强烈需求。
*   **[Issue #5747](https://github.com/nearai/ironclaw/issues/5747)**: Slack 内置挂载点无法解绑（`/pair` 短路）。用户反馈一旦绑定，UI 界面没有提供任何"断开连接"的选项，暴露了产品在生命周期管理（解绑/重置）设计上的缺失。
*   **[PR #5732](https://github.com/nearai/ironclaw/pull/5732) [codex]**: 社区核心贡献者 BenKurrek 发起了庞大的 WebUI 前端整合大 PR，将前端工具链彻底整合，引发了团队内部关于依赖和沙盒机制的重点审查。

---

### 5. Bug 与稳定性
今日报告了大量 Bug，按严重程度排列如下：

**P1 级别 (严重)**
*   **[Issue #3535](https://github.com/nearai/ironclaw/issues/3535)**: UI 聊天时间戳显示错误，严重影响用户阅读体验，目前仍未修复。

**P2 级别 (高)**
*   **[Issue #5776](https://github.com/nearai/ironclaw/issues/5776)**: 超长输出提示词导致模型反复超时，最终错误地降级为通用的 "invalid result"，掩盖了真实错误。
*   **[Issue #5553](https://github.com/nearai/ironclaw/issues/5553)**: 审批通知（如网络访问权限）在点击后消失，且不会保留在历史记录中，导致自动化流程容易卡死。
*   **[Issue #3083](https://github.com/nearai/ironclaw/issues/3083)**: 缺乏防抖和 Loading 状态，导致用户管理系统允许重复创建用户。**(今日已关闭/修复)**

**P3 级别 (中/低)**
*   **[Issue #5704](https://github.com/nearai/ironclaw/issues/5704)**: 聊天活跃（Agent 思考中）时，图片预览会变透明。
*   **[Issue #5706](https://github.com/nearai/ironclaw/issues/5706)**: 实例延迟时，侧边栏直接显示原始的 `thread_abc123` UUID，而不是对话名称。

---

### 6. 功能请求与路线图信号
从近期的 Issues 和活跃 PR 中，可以清晰看出 IronClaw 的下一步路线图：

1.  **企业级多租户与权限管理**: PR [#5779](https://github.com/nearai/ironclaw/pull/5779) 正在添加端到端的管理员用户管理 API 和 UI，支持基于 SSO 的非管理员用户私有安装工具 ([#5525](https://github.com/nearai/ironclaw/pull/5525))。
2.  **子代理与可观察性**: 大量关于 `subagent-spawn` ([#5748](https://github.com/nearai/ironclaw/pull/5748)) 和 `Trace Commons`（实例级追踪检查）的 PR 正在推进。未来版本将支持父线程追踪子代理的执行状态与审批门控。
3.  **工具执行反馈精细化**: 用户要求能够重命名自动化任务 ([Issue #5419](https://github.com/nearai/ironclaw/issues/5419))，以及要求在活动面板实时显示工具调用详情，而不是折叠为 "Activity - N tools" ([Issue #5701](https://github.com/nearai/ironclaw/issues/5701))。

---

### 7. 用户反馈摘要
通过提炼 Issue 评论，真实用户痛点集中在以下几个方面：
*   **UI 交互摩擦**: 用户对错误提示飘浮在屏幕顶部/底部而不是内嵌在聊天流中感到沮丧 ([#5708](https://github.com/nearai/ironclaw/issues/5708))；终端图标无法隐藏也干扰了纯非技术用户的使用体验 ([#5705](https://github.com/nearai/ironclaw/issues/5705))。
*   **国际化覆盖不完整**: 国际化（i18n）支持存在遗漏，用户在使用中文界面时，项目页面的部分卡片仍显示英文硬编码 ([Issue #5768](https://github.com/nearai/ironclaw/issues/5768))。
*   **本地开发与自托管门槛**: 自托管（非 HTTPS）环境暴露出严重问题，所有涉及状态修改的请求都会因为 `crypto` 不可用而崩溃 ([#5694](https://github.com/nearai/ironclaw/issues/5694))。

---

### 8. 待处理积压
以下重要问题存在较长周期的积压，需要维护者重点关注：

*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)**: **Nightly E2E 测试持续失败**。自 5 月份被报告以来，涉及网页回归测试的 E2E 仍然失败，可能阻塞主分支的正式发布。
*   **[Issue #4338](https://github.com/nearai/ironclaw/issues/4338)**: **断开连接状态报错误导**。在断网状态下，UI 显示为 "execution driver error"，导致用户误以为是系统崩溃而非网络问题。已积压超过一个月。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

这里是为您生成的 LobsterAI 项目 2026-07-08 动态日报。本报告基于 GitHub 过去 24 小时的数据进行了深度聚合与分析。

---

# 📈 LobsterAI 项目动态日报 (2026-07-08)

## 1. 今日速览
- **整体活跃度极高**：项目在经历一段时间的沉淀后迎来了集中爆发，过去 24 小时内处理了多达 **16 个 PR**（合并/关闭 14 个），并成功发布了 `2026.7.7` 新版本。
- **新功能持续演进**：核心功能向多智能体协作和跨平台体验迈进，进一步巩固了其作为全能个人 AI 助手的定位。
- **安全与性能大整顿**：社区贡献者集中提交了大量针对本地安全、SQLite 底层性能优化及并发控制的修复，项目底层稳定性得到显著提升。
- **安全预警**：今日新开了 3 个涉及本地文件泄露和未授权 Token 代理的安全类 Issue，亟需官方重点关注。

## 2. 版本发布
### 🚀 LobsterAI 2026.7.7 已正式发布
本次更新核心围绕 UI 交互升级与大模型接入扩展，**无已知破坏性变更**。
- **UI/UX 重构**：重新设计了定时任务列表卡片，新增状态标签、开关组件及搜索功能，并引入了乐观 UI 反馈机制（Renderer 层）。
- **生态拓展**：新增了 xAI (Grok) 的 OAuth 登录支持，用户现在可以更加便捷地接入 Grok 模型。
- **详情链接**：[Release 2026.7.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.7)

## 3. 项目进展
今日共有 14 个 PR 被合并或关闭，项目在多账号集成、底层性能和多智能体协作方面迈出了一大步：
- **功能迭代与体验优化**：
  - [PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275)：内置 `imap-smtp-email` 技能支持多账号管理，并在设置中增加了连通性测试等功能。
  - [PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290)：定时任务的通知目标现在支持用户自定义选择。
- **底层性能与稳定性飞跃**（主要来自社区力量）：
  - [PR #1410](https://github.com/netease-youdao/LobsterAI/pull/1410)：修复 SQLite 高频写入同步落盘导致的主进程阻塞问题，引入防抖批量写入，大幅降低流式响应时的卡顿。
  - [PR #1420](https://github.com/netease-youdao/LobsterAI/pull/1420)：修复 Cron 任务轮询的重入并发问题及 `stopPolling` 幽灵事件。
  - [PR #1407](https://github.com/netease-youdao/LobsterAI/pull/1407) & [PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408)：分别为本地 OpenClaw 代理增加了 10MB 请求体大小限制防 OOM，并修复了 MCP Bridge 未捕获 Promise 的问题。
- **架构合并**：[PR #2291](https://github.com/netease-youdao/LobsterAI/pull/2291) 将 `release/2026.7.6` 分支合并回主分支，包含大量跨模块更新。

## 4. 社区热点
今日社区讨论最热烈的话题集中在 **Agent 数据隔离** 与 **本地安全漏洞**：
1. **“关于你”（USER.md）多 Agent 联动问题** - [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)
   - **背景**：用户 `yepcn` 反馈修改单个 Agent 的 `USER.md` 会导致所有 Agent 同步修改。
   - **诉求分析**：随着用户对多 Agent 编排需求的增加，用户希望不同的 Agent 能拥有完全独立的“人格记忆”和背景设定。目前的同步机制限制了高级玩法。
2. **连续 3 个本地安全提报** - 由安全研究员 `YLChen-007` 提交
   - [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288): HTML 预览服务器软链接导致任意本地文件泄露。
   - [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287): NIM 媒体流出允许通过绝对路径窃取主机本地文件。
   - [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286): 未鉴权的本地 Token 代理可被恶意进程重放。

## 5. Bug 与稳定性
今日清理了大量标记为 `[stale]` 的历史 Bug，同时接收了高危安全提报（按严重程度排序）：

- 🔴 **严重（安全漏洞，等待修复）**：
  - **任意文件读取/泄露**：本地预览服务器和 NIM 集成存在路径校验缺陷，可能被恶意构造的提示词或请求利用，泄露用户本地隐私文件。（上述 #2288, #2287）
  - **本地鉴权绕过**：Token 代理无鉴权，同机病毒/木马可直接劫持用户已认证的模型 API 额度。（[#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)）
- 🟡 **中等（UI 交互，已在历史版本修复并关闭）**：
  - **统计数据异常**：概览页“总会话数”始终显示为 0，无法切换时间维度。（[#1414](https://github.com/netease-youdao/LobsterAI/issues/1414), [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411)）
  - **多语言适配**：概览页切换英文后，卡片布局出现文本重叠挤压。（[#1416](https://github.com/netease-youdao/LobsterAI/issues/1416)）

## 6. 功能请求与路线图信号
- 🗺️ **信号一：多智能体委派与协作**
  今日有一个关键的未合并 PR：[PR #2285 feat(agents): support delegated subagent collaboration](https://github.com/netease-youdao/LobsterAI/pull/2285)。该 PR 旨在允许配置 Agent 白名单并将其作为子代理（Subagent）运行，同时保留 Cowork 上下文。结合今日用户反馈的 Issue #2293，**“多 Agent 独立配置 + 协同工作”**显然是 LobsterAI 下一阶段的核心路线图。
- 🗺️ **信号二：更丰富的模型 OAuth 接入**
  继 OpenAI、Anthropic 等之后，本次更新纳入了 xAI (Grok) 的 OAuth。说明项目正致力于降低主流新锐模型的接入门槛。

## 7. 用户反馈摘要
- **痛点 1：高频写入带来的性能焦虑** - 用户此前的反馈（及 PR #1410 证实）在流式输出或 Cowork 多人协作时，由于 SQLite 频繁同步落盘，会导致界面严重卡顿。今日合并的防抖修复将极大提升用户体验。
- **痛点 2：IM 群组识别错误** - 用户在使用网易云信（NIM）发消息时，普通群与高级群的类型枚举映射反了，导致无法正确获取群名称并发送（已在 [PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419) 修复）。
- **痛点 3：记忆迁移失败容错差** - 此前的数据库迁移如果在事务外被标记完成，会导致历史记忆（MEMORY.md）永久丢失（已在 [PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415) 修复事务逻辑）。

## 8. 待处理积压
以下重要内容仍在 Open 状态，建议维护团队分配优先级跟进：
1. **[关键等待] PR #2285**：多智能体委派协作功能（[链接](https://github.com/netease-youdao/LobsterAI/pull/2285)），此为大幅提升产品上限的核心 feature，需推进 Code Review。
2. **[安全漏洞] Issue #2286, #2287, #2288**：三连击安全提报（[链接入口](https://github.com/netease-youdao/LobsterAI/issues/2286)），暴露了本地运行环境下的文件读取与代理鉴权风险，建议立即核实并限制绝对路径解析及加强本地端口校验。
3. **[依赖更新] PR #1277**：Dependabot 提示 Electron 存在跨 3 个大版本（40.2.1 -> 43.0.0）的更新（[链接](https://github.com/netease-youdao/LobsterAI/pull/1277)），积压已超 3 个月，建议尽快排期测试升级，以规避旧版框架的安全风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# 📊 TinyClaw (TinyAGI) 项目动态日报
**报告日期**: 2026-07-08  
**分析师**: AI 智能体与个人 AI 助手开源项目分析组

---

### 1. 今日速览
过去 24 小时内，TinyClaw 项目遭遇了一次集中的安全审查风暴，项目活跃度呈现“异常峰值”。社区（或安全研究人员）单日提交了高达 **9 条活跃的 Issue**，且全部标记为严重安全漏洞。令人担忧的是，这些涉及核心控制平面的高危漏洞目前 **均未被关闭（0 条 Closed）**，且 **没有任何修复补丁提交（0 条 PR）**。这表明项目在面对突发安全危机时，可能存在维护者响应滞后或缺乏应急响应机制的风险，项目当前的健康度与稳定性亮起红灯。

### 2. 版本发布
**今日无新版本发布 (0 Releases)。**
*鉴于当前存在多个高危未修复漏洞，建议生产环境暂停升级至最新主分支，直至官方发布安全修复版本。*

### 3. 项目进展
**今日项目无功能性或修复性代码合并进展（0 条 PR 合并）。**
项目代码库今日未向前推进任何实质性的修复或新功能开发。所有的活动均集中在前置的安全漏洞报告阶段，开发进度处于停滞/等待响应状态。

### 4. 社区热点
今日的社区热点完全被安全议题主导，所有 9 条 Issue 均由用户/研究员 `YLChen-007` 集中提交。背后的核心诉求是**紧急呼吁修复系统鉴权机制的完全缺失**。
在 AI 智能体项目中，控制平面的安全性至关重要。该系列报告指出 TinyAGI 在设计上过度暴露了本地与网络 API，导致系统面临被恶意操纵的风险。

**关注度与严重性最高的几个核心议题：**
*   **[#294 无鉴权控制平面导致系统重写与重启](https://github.com/TinyAGI/tinyagi/issues/294)**：暴露了核心 HTTP 路由无认证机制的致命缺陷。
*   **[#291 Anthropic 适配器危险地禁用了工具确认机制](https://github.com/TinyAGI/tinyagi/issues/291)**：在调用 Claude CLI 时无条件跳过权限检查，结合未授权 API 可导致灾难性后果。
*   **[#293 路径遍历逃逸工作区限制](https://github.com/TinyAGI/tinyagi/issues/293)**：允许远程客户端通过构造 `..` 的 agent ID 突破沙箱限制。

### 5. Bug 与稳定性
今日报告的 Bug **全部为严重级别的稳定性与安全性问题**。按对系统安全的威胁程度排列如下：

1.  🔴 **[严重] 未授权的提权与文件窃取**
    *   **[#289 任意本地文件窃取](https://github.com/TinyAGI/tinyagi/issues/289)**：攻击者可通过未授权 API 提交恶意文件路径，轻易窃取系统本地文件。
    *   **[#293 路径遍历攻击](https://github.com/TinyAGI/tinyagi/issues/293)**：攻击者可逃逸配置好的工作区根目录。
2.  🔴 **[严重] AI 工具链与执行权限滥用**
    *   **[#291 无条件跳过危险工具确认](https://github.com/TinyAGI/tinyagi/issues/291)**：导致非授权用户可利用 Claude 执行高危系统操作。
3.  🟠 **[高危] 核心数据与持久化设置篡改**
    *   **[#292 持久化设置与提示词篡改](https://github.com/TinyAGI/tinyagi/issues/292)**、**[#286 设置变异与事件流访问](https://github.com/TinyAGI/tinyagi/issues/286)**：允许攻击者覆写 Agent Prompt，引发 AI 行为偏移（劫持）。
4.  🟡 **[中危] 配对机制绕过与终端欺骗**
    *   **[#287 任意批准待处理通道发送方](https://github.com/TinyAGI/tinyagi/issues/287)**：破坏了多通道配对信任机制。
    *   **[#290 终端转义注入欺骗](https://github.com/TinyAGI/tinyagi/issues/290)**：允许攻击者伪造操作员日志，掩盖攻击痕迹。
    *   **[#288 本地事件流泄漏](https://github.com/TinyAGI/tinyagi/issues/288)**：同主机下的恶意进程可监听 AI 实时交互事件。

*目前以上所有 Bug 均无关联的 fix PR。*

### 6. 功能请求与路线图信号
今日并无新功能请求，但这些安全 Issues 强烈暗示了项目下一阶段必须纳入的**“安全架构路线图”**信号：
1.  **强制引入 AuthN/AuthZ 中间件**：所有的 `/api/settings`、`/api/message` 及控制面路由必须加入 Token 验证或 Origin 白名单校验。
2.  **沙箱与路径净化机制**：Agent ID 和文件输入需要实施严格的正则校验与 Chroot/Jail 级别的隔离。
3.  **LLM 适配器安全执行策略**：禁止默认使用 `--dangerously-skip-permissions` 等降级安全开关。

### 7. 用户反馈摘要
从研究员 `YLChen-007` 详尽的漏洞报告中，可以提炼出真实使用场景中的核心痛点：
*   **痛点：无法安全暴露 AI 智能体**。用户希望将 TinyAGI 作为后台服务运行或与其他系统联动，但当前代码的设计假定它只运行在完全可信的本地环境，缺乏基本边界防护，导致一旦接入复杂网络环境，AI 助手瞬间沦为黑客的本地跳板。
*   **痛点：提示词安全脆弱**。Agent 的 System Prompt 可以被轻易改写，这意味着用户辛苦调优的 AI 人格和指令随时可能被破坏或劫持。

### 8. 待处理积压
**🔴 极度紧急积压提醒（致维护者）：**
项目当前面临着极高的安全风险积压。昨日集中爆出的 9 个安全漏洞链（从 #286 到 #294）表明系统目前处于**“裸奔”**状态。
*   **呼吁行动**：强烈建议 `TinyAGI` 维护团队立即对这些 Issues 进行分类响应，发布临时缓解措施（如建议用户通过防火墙阻断相关端口外部访问），并尽快提交针对 `控制面 API 鉴权` 和 `输入路径校验` 的核心 PR。长期的无响应将严重打击社区对该项目安全性的信任。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报**
**报告日期**: 2026-07-08
**分析周期**: 过去 24 小时

---

### 1. 今日速览
*   **整体活跃度极高，处于重度迭代期**：随着 v2.0.0 正式版的临近，项目迎来了密集的社区反馈与代码合并，24 小时内共有 38 个 PR 更新（15 个被合并/关闭）和 17 个 Issue 更新（4 个被关闭）。
*   **重磅版本落地**：官方今日正式发布了 `v2.0.0-beta.3`，核心聚焦于 macOS 兼容性修复与系统安全鉴权增强。
*   **生态与渠道扩展迅速**：多条关于平台集成（飞书、Matrix）和底层能力提升（Computer-use、Rerank 检索）的 PR 被合并，智能体的多端协同能力显著增强。
*   **前端渲染与稳定性面临挑战**：大量用户反馈在处理长会话历史和大型 JSON 文件（>500KB）时遭遇前端崩溃，前端性能优化将是下一阶段的核心痛点。

---

### 2. 版本发布
**[Release] v2.0.0-beta.3** ([链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3))
本次 Beta 版本的推进重点在于底层执行环境的安全性与跨平台兼容性，包含以下核心变更：
*   **安全增强**：引入了多维度防护的速率限制，强化了 API 的鉴权机制 (`feat(auth)`)。
*   **环境兼容性**：修复了在 macOS bash 3.2 环境下 `extra_flags` 空扩展导致的 CI 执行失败，提升了 Mac 用户的源码构建体验 (`fix(ci)`)。

---

### 3. 项目进展
今日共有 **15 个 PR 被合并/关闭**，项目在多渠道接入、底层性能和 Agent 记忆能力上取得了实质性突破：
*   **通讯渠道全面进化**：
    *   合并了基于插件的自定义渠道注册系统 ([PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693))，取代了旧的目录扩展机制。
    *   飞书渠道现在原生支持发送 Markdown 图片 ([PR #5823](https://github.com/agentscope-ai/QwenPaw/pull/5823))；Matrix 渠道合并了类似 Discord 的流式输出模式 ([PR #5585](https://github.com/agentscope-ai/QwenPaw/pull/5585))。
*   **大模型兼容性与记忆系统**：
    *   修复了 Gemini 模型处理 `const` 类型 Schema 字段时的报错问题 ([PR #5827](https://github.com/agentscope-ai/QwenPaw/pull/5827))。
    *   修复了跨请求重建 Agent 时 `MemoryMiddleware` 状态丢失导致自动记忆失效的严重 Bug ([PR #5786](https://github.com/agentscope-ai/QwenPaw/pull/5786))。

---

### 4. 社区热点
今日社区讨论的焦点集中在 **v2.0.0 预发布版的集中排障** 以及 **系统级安全/隔离问题**：
*   **[Issue #5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) [Tracking] v2.0.0 预发布问题集中跟踪**: 作为官方指定的 Bug 收集贴，继续保持着极高的热度（10 评论）。这表明社区对 v2.0.0 的关注度极高，且开发团队在通过此贴高效分流问题。
*   **[Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) [Bug] Windows 沙箱 ACE 污染导致 Hermes Desktop 崩溃**: 引起了 Windows 桌面端用户的激烈讨论（3 评论）。用户反馈启用 `APPCONTAINER` 沙箱后，错误的继承标志导致其他 Chromium 架构应用（如 Hermes）GPU 进程崩溃。这暴露出当前沙箱的文件系统权限控制存在越界风险。
*   **[Issue #5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) [Feature] 定时任务结果弹窗开关诉求**: 用户对“一刀切”关闭弹窗表示不满（4 评论），强烈呼吁将控制权交还给用户，反映出现有通知策略难以兼顾不同使用场景。

---

### 5. Bug 与稳定性
按严重程度排列，今日报告及处理的核心 Bug 如下：

*   **🔴 严重 [前端崩溃]** 大规模会话渲染失败 ([Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) / [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479))：当会话包含大量工具调用历史或 JSON 文件超过 500KB 时，前端直接白屏报错。**状态**：尚未有直接的修复 PR 合并，是当前最大的前端稳定性隐患。
*   **🔴 严重 [安全沙箱]** `file_guard` 被绕过 ([Issue #5842](https://github.com/agentscope-ai/QwenPaw/issues/5842))：智能体可以通过执行 `find ~ -name "test.txt" -delete` 绕过工作区限制，删除外部文件。**状态**：已有热修复 PR ([PR #5843](https://github.com/agentscope-ai/QwenPaw/pull/5843)) 提交审核。
*   **🟡 中危 [系统隔离]** `/stop` 指令缺乏用户隔离 ([Issue #5835](https://github.com/agentscope-ai/QwenPaw/issues/5835))：在钉钉等 DM 场景中，因为 session_id 冲突，导致一个用户的停止指令可能会误杀另一个用户的任务。**状态**：待修复。
*   **🟡 中危 [上下文压缩]** JSON Schema 长度限制导致崩溃 ([Issue #5789](https://github.com/agentscope-ai/QwenPaw/issues/5789))：上下文压缩时模型输出超长导致验证崩溃。**状态**：待修复。

---

### 6. 功能请求与路线图信号
从近期的 Issues 和 PR 流向可以看出，CoPaw 正在向**“重度桌面端自动化”**与**“精细化配置”**演进：
*   **桌面端 GUI 自动化 (已纳入轨道)**：正在审核的 [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) 引入了基于 Windows UIA 的控制模式，允许 Agent 驱动桌面应用（截图、点击、拖拽），这意味着 CoPaw 将突破纯文本/代码环境，向通用计算机操作 Agent 迈进。另外 [PR #5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) 增加了点击聊天中的本地路径直接打开文件浏览器的功能。
*   **精细化的记忆管理 (已纳入轨道)**：[Issue #5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) 请求按媒体类型剥离不受支持的文件，而不是全局丢弃。[PR #5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) 正在集成 `qwen3-rerank` 以提升混合记忆搜索的精度，预计将在 v2.0.0 稳定版中发布。
*   **桌面端后台常驻 (强烈诉求)**：[Issue #5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) 呼吁点击关闭按钮时最小化到系统托盘，这对本地个人助手来说几乎是必选项，有望在后续桌面端迭代中实现。

---

### 7. 用户反馈摘要
通过对社区讨论的提炼，当前 CoPaw (QwenPaw) 用户的真实体验呈现以下特征：
*   **高频重度使用场景增加**：用户越来越倾向于让 Agent 执行长时间、高密度的任务（如代码阅读、循环读取脚本），这直接导致了长上下文崩盘（[Issue #5759](https://github.com/agentscope-ai/QwenPaw/issues/5759)）和内存/状态管理失效（[Issue #5775](https://github.com/agentscope-ai/QwenPaw/issues/5775)）。
*   **多平台接入痛点依旧**：从代码搜索、飞书图片渲染到 Windows 沙箱兼容，使用 CoPaw 搭建跨平台工作流的用户在环境配置上耗费了大量精力。
*   **期望更高的自主权**：用户对框架的“黑盒化”表现出了不耐烦（如自动记忆触发时间、弹窗提示），强烈倾向于提供细粒度的开关供用户自行调节。

---

### 8. 待处理积压
建议维护者优先关注以下高影响力但尚未彻底解决的积压问题：
*   **前端架构重构**：针对长会话渲染 OOM 的硬伤（[Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401), [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)），需要尽快引入虚拟列表 或渐进式加载机制，否则将严重限制 v2.0.0 的可用性。
*   **沙箱安全审计**：Windows AppContainer 的权限污染（[Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829)）虽然影响面主要波及同机其他应用，但涉及底层文件系统 ACL 变更，建议尽快复核 `_apply_all_acls` 的继承标志逻辑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期**: 2026-07-08  
**分析师**: AI 智能体与个人 AI 助手开源项目观察员

---

### 1. 今日速览
ZeroClaw 在过去 24 小时内保持了**极高的开发与社区活跃度**，共处理了 26 条 Issue 更新（22 活跃，4 关闭）和 50 条 PR 更新（41 待合并，9 已合并/关闭）。尽管今日没有发布新版本（Current: `v0.8.2`），但底层的代码合流与安全加固正在密集进行，尤其针对 MCP 内存泄漏、网关协议优化以及 ZeroCode 可视化编排等核心模块取得了实质性进展。从标签来看，团队正全力扫清 P1 级别的系统 Bug 与高风险安全漏洞，为下一个版本迭代铺路。

---

### 2. 版本发布
**今日无新版本发布。**
当前主线代码合流主要围绕 `v0.8.3` 的可观测性、CI/CD、依赖更新展开（参考 [Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)）。

---

### 3. 项目进展
今日共有 9 个 PR 被合并或关闭，这些进展显著提升了 Agent 运行时的稳定性和安全性：

*   **Agent 记忆与上下文持久化落地**：合并了 [PR #8761](https://github.com/zeroclaw-labs/zeroclaw/pull/8761) 和 [PR #8711](https://github.com/zeroclaw-labs/zeroclaw/pull/8711)（通过今日的 [PR #8789](https://github.com/zeroclaw-labs/zeroclaw/pull/8789) 推进），为独立委派的 Agent 提供了 MCP 资源绑定与 Prompt 拆分能力。
*   **ZeroCode 编辑器易用性突破**：[PR #8814](https://github.com/zeroclaw-labs/zeroclaw/pull/8814) 和 [PR #8809](https://github.com/zeroclaw-labs/zeroclaw/pull/8809)（已关闭）最终促成了 [PR #8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813)（已开启并接近合并），解决了根级 Channel 配置被隐藏的问题。
*   **SOP 与技能生态完善**：关闭了 [Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)，Agent 现在可以更好地将新技能保存为 Bundle 而非散乱的 `.md` 文件。

---

### 4. 社区热点
今日讨论热度最高、影响面最广的议题集中在**Agent 安全控制**与**多模态交互扩展**：

*   **高风险命令执行策略重构**：[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (6 评论)。提出为高危 Shell 命令引入类似 Claude Code 的三层确认机制。这反映了重度用户在生产环境中使用 ZeroClaw 时，对防止 Agent "发疯"误删文件的强烈安全诉求。
*   **全渠道预编译包分发**：[Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) (5 评论)。社区希望提供 `channels-full` 全量包，当前精简版导致用户配置未内置 Channel 时产生困惑。
*   **实时语音多模态架构**：[Issue #7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) 与 [Issue #7944](https://github.com/zeroclaw-labs/zeroclaw/issues/7944) 持续引发关注。用户正积极推动 ZeroClaw 接入 CrispASR、ESP32 硬件卫星节点以及 [Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) 等实时语音到语音的后端架构。

---

### 5. Bug 与稳定性
今日报告了多个 S1/S2 级别的阻断性 Bug，开发团队反应迅速，大部分已提交修复 PR：

**S1 级（工作流阻断）**
*   **MCP 工具引发 OOM**：[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)。MCP 工具模式克隆导致 Agent 循环中 RSS（内存）无限增长。
    *   *修复状态*：已提交 [PR #8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)，通过 Arc 共享 Tool Schemas 成功阻止了每次迭代的深拷贝。
*   **大模型参数校验缺失**：[Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)。OpenRouter 等 API 提供商接收到未经验证的畸形原生工具调用参数，导致返回 400 空回复。

**S2 级（系统行为降级 / 高风险）**
*   **安全审批绕过**：[Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)（已关闭）。SOP 引擎无运行状态守卫，驱动程序可绕过审批关卡。
*   **Windows 端口僵尸占用**：[Issue #8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800)。Windows 11 中强杀进程后端口未释放，导致新 Daemon 启动失败。
*   **工具栏权限不一致**：[Issue #8804](https://github.com/zeroclaw-labs/zeroclaw/issues/8804)。技能系统 Prompt 宣传的可调用工具集与实际注册表不匹配。

---

### 6. 功能请求与路线图信号
从最新提交的 PR 和 Issue 中，可以清晰看出 ZeroClaw 接下来的演进路线：

*   **ZeroCode 可视化编排**：[PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) (Size: XL) 引入了基于节点图的 SOP (标准作业程序) 可视化编辑器，支持实时运行覆盖和 Channel 扇入。标志着 ZeroClaw 正从纯命令行向可视化的复杂工作流编排迈进。
*   **Web Dashboard 体验打磨**：[Issue #8803](https://github.com/zeroclaw-labs/zeroclaw/issues/8803) 请求折叠已完成的中间步骤；[Issue #8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) 发起 RFC，提议将 `/ws/chat` 和 `/acp` 整合到单一 WebSocket 协议上。
*   **深度安全与隔离**：[PR #8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) (Size: XL) 正在引入多用户认证、权限配置文件和主体隔离。未来 ZeroClaw 将安全地支持多用户场景。

---

### 7. 用户反馈摘要
透过 Issue 描述与评论，真实用户的核心痛点与使用反馈如下：
*   **痛点：文档与实际行为脱节**。多名用户（如 [Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810), [Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)）抱怨 Telegram 绑定指令和示例文档有误，导致新手开局受挫。
*   **痛点：上下文丢失与 UI 抖动**。用户 [Issue #8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) 反馈中断 Agent 工作会导致其思考和工具调用记录完全从下一次对话的上下文中消失，严重影响容错体验。
*   **满意点：Rust 底层的安全兜底**。社区对 ZeroClaw 基于 Rust 的类型与内存安全表示高度认可（"if not implemented correctly, slop remains slop"），并对官方快速响应 [RUSTSEC-2026-0204](https://github.com/zeroclaw-labs/zeroclaw/issues/8782) 漏洞表示赞赏。

---

### 8. 待处理积压
*提醒维护者重点关注以下存在阻塞或需要长期跟进的积压项：*

*   **🔴 高危依赖与 WASM CVE 漏洞积压**：[Issue #8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) (Priority: P1, Risk: High)。`cargo audit` 和 `cargo deny` 配置漂移，22 个 RustSec 建议未处理，`wasmtime-wasi` 存在未修复的 CVE。目前状态为 `in-progress`，需尽快合入修复。
*   **🟠 Telegram 集成追踪器受阻**：[Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) 状态为 `blocked` 且 `needs-maintainer-review`，需要维护者对发布渠道的二进制分发策略做出最终决定。
*   **🟡 ZeroCode 配置落地**：尽管已提交修复，但 [Issue #8757](https://github.com/zeroclaw-labs/zeroclaw/issues/8757) 及相关的 UI 问题（如 [Issue #8791](https://github.com/zeroclaw-labs/zeroclaw/issues/8791) 水平滚动条）仍需持续的 QA 测试以确保 UI 稳定。

</details>