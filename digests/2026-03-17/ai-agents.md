# OpenClaw 生态日报 2026-03-17

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-16 22:06 UTC

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

以下是根据 OpenClaw 项目 2026-03-17 的 GitHub 数据生成的动态日报。

# 📊 OpenClaw 项目日报 (2026-03-17)

## 1. 今日速览
OpenClaw 项目今日保持了**极高的活跃度**，社区反馈井喷。过去 24 小时内共有 **500 条 Issues 更新**（其中 436 条为新开/活跃）和 **500 条 PR 更新**，但无新版本发布。目前代码库存在大量待合并的 PR（积压 398 条），表明项目正处于功能快速迭代与重构的关键期。讨论热点主要集中在多渠道接入（特别是 WhatsApp 和飞书）、本地部署稳定性以及多模态能力（视觉）的支持上。

---

## 2. 版本发布
**无新版本发布**。
项目当前主要精力似乎集中在处理大量社区反馈、Bug 修复以及积压的 PR 审核上，建议关注后续版本针对稳定性的专项更新。

---

## 3. 项目进展
尽管没有发布新版本，但今日关闭了 **102 条 PR**，主要集中在提升平台稳定性和修复渠道集成问题：

*   **🛠️ 插件与网关核心重构**：
    *   PR [#48462](https://github.com/openclaw/openclaw/pull/48462) 移除了公共 `extension-api` 导出，优化了插件运行时的边界，提升了系统的安全性。
    *   PR [#46648](https://github.com/openclaw/openclaw/pull/46648) 修复了插件加载路径无法访问子代理（subagent）运行时的问题，增强了插件系统的灵活性。
*   **📱 WhatsApp 渠道修复 (关键进展)**：
    *   合并了 PR [#48494](https://github.com/openclaw/openclaw/pull/48494)、[#23059](https://github.com/openclaw/openclaw/pull/23059) 和 [#25338](https://github.com/openclaw/openclaw/pull/25338)，集中解决了 WhatsApp 群组中 `@lid` 身份格式导致的提及（Mention）检测失效问题。这是今日最重要的功能性修复。
*   **📝 上下文与内存优化**：
    *   PR [#44133](https://github.com/openclaw/openclaw/pull/44133) 修复了上下文压缩过程中工具结果被错误修剪的问题，有助于提升长对话的稳定性。

---

## 4. 社区热点
今日社区讨论主要集中在集成障碍和视觉能力缺失上：

1.  **集成与渠道配置**：
    *   **Issue [#26534](https://github.com/openclaw/openclaw/issues/26534) (👍 26, 💬 72)**：用户强烈要求将**钉钉** 加入首屏安装向导的选项中。目前的临时配置方案对新手不友好。
    *   **Issue [#75](https://github.com/openclaw/openclaw/issues/75) (👍 62, 💬 39)**：**Linux/Windows 客户端**缺失。目前仅有 macOS 和移动端 App，桌面端体验的不一致性是长期痛点。

2.  **视觉与多模态能力**：
    *   **Issue [#28744](https://github.com/openclaw/openclaw/issues/28744) (💬 18)**：Agent 目前无法识别飞书等渠道发送的**图片内容**。用户希望 OpenClaw 能调用 MiniMax-Vision 等模型实现"看图说话"，这是目前高频的 Feature Request。

3.  **企业级功能扩展**：
    *   **Issue [#20416](https://github.com/openclaw/openclaw/issues/20416) (💬 14)**：开发者请求支持修改 `llm_input/output` 的中间件钩子，以便实现 PII 脱敏和内容过滤，这反映了企业级部署的合规需求。

---

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，尤其是**本地网关和认证**方面：

| 严重程度 | 类型 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| 🔴 **严重** | 稳定性 | [#48205](https://github.com/openclaw/openclaw/issues/48205) | **网关每约50分钟自动重启** (reason=none)，导致服务中断。 | Open |
| 🔴 **严重** | 回归 | [#45560](https://github.com/openclaw/openclaw/issues/45560) | **CLI 与本地网关握手失败**，导致 CLI 无法使用，尽管网关服务实际在运行。 | Open |
| 🟠 **中等** | 认证 | [#23538](https://github.com/openclaw/openclaw/issues/23538) | Anthropic `setup-token` 认证通过，但运行时报 401 Invalid token。 | Open |
| 🟠 **中等** | 安全 | [#25215](https://github.com/openclaw/openclaw/issues/25215) | SSRF 检查误杀 Clash 等代理软件的 Fake-IP 范围 (198.18.0.0/15)，导致网络请求被阻。 | Open |
| 🟡 **低** | 功能 | [#48203](https://github.com/openclaw/openclaw/issues/48203) | macOS Talk 模式忽略配置的 ElevenLabs 声音，回退到系统默认音色。 | Open |

**修复进展**：今日已合并多个 WhatsApp 相关 PR（见第3节），部分缓解了 Issue [#48409](https://github.com/openclaw/openclaw/issues/48409) 等反馈的消息监听器问题。

---

## 6. 功能请求与路线图信号
结合 Issue 和 PR 动向，未来的版本可能会重点关注以下领域：

*   **视觉能力**：针对 Issue [#28744](https://github.com/openclaw/openclaw/issues/28744) 的呼声，结合 PR [#45277](https://github.com/openclaw/openclaw/pull/45277) (MiniMax Vision 支持)，多模态输入支持将是大概率事件。
*   **MCP 协议支持**：Issue [#29053](https://github.com/openclaw/openclaw/issues/29053) (Native MCP Client) 获得了较多关注，表明项目计划接入更广泛的 AI 工具生态。
*   **执行沙箱安全**：PR [#48433](https://github.com/openclaw/openclaw/pull/48433) 正在推进 `per-host allowlists`，暗示项目正在寻求网关安全性与沙箱灵活性之间的平衡。

---

## 7. 用户反馈摘要
*   **痛点**：
    *   **部署难**：CentOS 等环境部署报错多 (Issue [#38902](https://github.com/openclaw/openclaw/issues/38902))。
    *   **渠道断连**：WhatsApp 和 Slack 的 Socket 连接经常静默失败，显示已连接但收不到消息 (Issue [#45311](https://github.com/openclaw/openclaw/issues/45311))。
    *   **时间感知**：Agent 经常"不知道现在几点"，导致提醒功能设置错误 (Issue [#10841](https://github.com/openclaw/openclaw/issues/10841))。
*   **好评**：
    *   社区对 `embedded agent` 架构表示认可，但同时也指出了其在重试风暴下的脆弱性 (Issue [#3181](https://github.com/openclaw/openclaw/issues/3181))。

---

## 8. 待处理积压
*   **398 个待合并 PR**：目前积压了 398 个 PR，其中包含像 **Puter AI 无密钥集成** (PR [#7295](https://github.com/openclaw/openclaw/pull/7295)) 这样长期未合并的重要功能。
*   **长期未解决 Issue**：
    *   **Matrix E2EE 验证** (Issue [#7649](https://github.com/openclaw/openclaw/issues/7649))：影响隐私场景用户。
    *   **本地模型配置** (Issue [#38902](https://github.com/openclaw/openclaw/issues/38902))：Qwen 等本地模型接入报错 422。
*   **建议**：维护团队需优先解决网关重启 (#48205) 和 CLI 握手失败 (#45560) 问题，否则将严重影响开发者体验。

---

## 横向生态对比

# 2026-03-17 AI 智能体开源生态横向对比分析报告

作为 AI 智能体领域的技术分析师，基于今日对 OpenClaw、NanoBot、Zeroclaw 等 11 个主流开源项目的动态监测，为您呈上生态级横向分析报告。

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态正处于**功能完善与稳定性博弈的关键转型期**。一方面，多模态能力、MCP 协议集成、多智能体协作已成为标配竞争赛道；另一方面，随着用户量激增，**内存溢出、认证失效、上下文丢失**等稳定性问题在各项目中集中爆发，"能用"与"好用"之间的鸿沟依然巨大。

## 2. 各项目活跃度对比

| 项目名称 | Issues 活跃度 | PR 活跃度 | Release 状态 | 健康度评估 | 核心特征 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 🔥 极高 (500+) | 🔥 极高 (500/积压398) | 无 | 🟡 **过载/积压** | 行业标杆，社区井喷，PR 积压严重 |
| **NanoBot** | ✅ 高 (166 关闭) | 🚀 极高 (192 合并) | v0.1.4.post5 | 🟢 **健康/高效** | 响应极快，打磨细节，架构成熟 |
| **Zeroclaw** | 🔥 高 (44) | 🚀 高 (35) | v0.4.2 (10连发) | 🔴 **动荡/高危** | 激进迭代，Bug 频发，安全争议 |
| **PicoClaw** | 🟠 中 (22) | 🟠 中 (32 合并) | Nightly | 🟡 **重构中** | 边缘计算，架构大改，积压适中 |
| **CoPaw** | 🔥 高 (50) | 🟠 中 (24 合并) | 无 (v0.0.7) | 🟠 **不稳定** | 上下文问题突出，IM 集成多 |
| **NanoClaw** | 🟠 中 | 🟠 中 (21 合并) | 无 | 🟡 **稳健/有隐患** | 安全性增强，OAuth 痛点未解 |
| **IronClaw** | 🟠 中 (21) | 🟠 中 (25 合并) | 无 (筹备 v0.19) | 🟡 **技术债预警** | CI 自动化高，架构风险显露 |
| **LobsterAI** | 🟠 中 (7) | 🟢 良好 (12 合并) | v2026.3.16 | 🟡 **起步/争议** | Windows 兼容性差，UI 争议 |
| **TinyClaw** | 🟢 良好 | 🟢 良好 (3 关键) | **v0.0.14** | 🟢 **上升/阵痛** | 调度重构，UI 增强，CLI 有坑 |
| **Moltis** | 🟢 良好 (7) | ⏳ 低 (0 合并) | 无 | 🟢 **平稳/待合并** | 工具链增强，Docker 需求强 |
| **EasyClaw** | 🟡 低 (3) | ⏳ 低 (0) | **v1.7.0** | 🔴 **阻断** | 升级致 Windows 不可用 |

---

## 3. OpenClaw 在生态中的定位

作为**核心参照项目**，OpenClaw 展现出了"巨头"的特征与隐忧：
*   **优势**：**生态吸附力最强**。用户对 WhatsApp、飞书、钉钉等全渠道的集成需求最旺盛，且多模态（视觉）需求量远超其他项目。`Embedded Agent` 架构被广泛认可。
*   **技术路线**：侧重于**网关与插件化**。通过 `extension-api` 重构和 MCP Client 支持，试图构建一个连接一切消息渠道的 AI 中枢。其稳定性修复（如上下文压缩）往往成为其他项目的参考。
*   **差异**：相比 NanoBot 的"小而美、快而精"，OpenClaw 正面临**规模臃肿**的挑战。398 个积压的 PR 和网关自动重启等严重 Bug，表明其维护负荷已接近临界点，急需优化治理流程或拆分模块。

---

## 4. 共同关注的技术方向

全生态在今天呈现出惊人的**技术共识与痛点共振**：

1.  **上下文与记忆危机**
    *   **涉及项目**：OpenClaw, CoPaw, NanoClaw, Zeroclaw。
    *   **现象**：几乎所有项目都在为"Agent 忘记之前说的话"或"消息压缩导致报错"焦头烂额。长对话的 Token 管理和摘要压缩是当前最大的稳定性杀手。
2.  **MCP (Model Context Protocol) 协议**
    *   **涉及项目**：OpenClaw, Zeroclaw, Moltis, CoPaw。
    *   **现象**：从 Feature Request 变为必须支持的标准。用户强烈要求通过 MCP 动态挂载工具，解决 Agent 能力扩展的瓶颈。
3.  **多模态识别**
    *   **涉及项目**：OpenClaw, CoPaw, ZeptoClaw, LobsterAI。
    *   **现象**："图片发过去 Agent 看不到"是高频投诉。各项目正紧急集成 MiniMax-Vision 等模型修复此能力。
4.  **Web 搜索工具降级**
    *   **涉及项目**：NanoBot, NanoClaw。
    *   **现象**：单一搜索 API 不够用，各项目纷纷引入多 Provider 降级机制（Tavily -> SearXNG），提升工具可靠性。

---

## 5. 差异化定位分析

*   **OpenClaw (全能中枢)**：主打**企业级全渠道接入**，试图连接 WhatsApp/钉钉/飞书等所有 IM，但在稳定性与部署复杂度上付出代价。
*   **NanoBot (轻量敏捷)**：HKUDS 出品，强调**学术界的高效与工程化**。PR 处理速度极快，引入 Multi-Agent 交接，适合研究者和追求轻量的开发者。
*   **Zeroclaw (激进极客)**：每天发 10 个版本，引入底层架构（SQLite/双层缓存）。适合喜欢尝鲜、能忍受崩溃的高级玩家，但安全策略过于严格引发反感。
*   **PicoClaw (端侧智能)**：Sipeed 出品，专注于**嵌入式/边缘设备**。在资源受限环境下的 Agent 调度与多模态是核心壁垒。
*   **TinyClaw (个人组织)**：侧重**个人生活辅助**（日程管理）。其 TinyOffice UI 和内置 Schedule 系统与其他侧重对话的项目形成差异。

---

## 6. 社区热度与成熟度分层

*   **第一梯队 (成熟/爆发期)**：**OpenClaw, NanoBot**。虽然 OpenClaw 有积压，但两者都拥有极高的社区参与度和清晰的迭代方向。
*   **第二梯队 (快速迭代/动荡期)**：**Zeroclaw, CoPaw, PicoClaw, TinyClaw**。这些项目功能更新极快，但伴随着高 Bug 率，处于"边修边跑"阶段。Zeroclaw 今天的 Docker 事故和 CoPaw 的上下文问题尤为典型。
*   **第三梯队 (起步/细分期)**：**LobsterAI, ZeptoClaw, Moltis**。LobsterAI 刚刚发布 Windows 版本，面临抄袭争议和兼容性挑战；Moltis 和 ZeptoClaw 在特定技术点（如 Vertex AI 集成）上深耕。

---

## 7. 值得关注的趋势信号

1.  **"安全感"与"控制欲"的冲突**：
    *   Zeroclaw 和 TinyClaw 的用户都在抱怨 Agent "这也不能干那也不能干"。**安全沙箱** 正在成为阻碍 Agent 实用性的双刃剑。**趋势**：未来的 Agent 需要提供更灵活的"God Mode"或分级权限控制，而非一刀切。
2.  **CLI 正在让位于 Web UI**：
    *   TinyClaw 的 Web Setup、NanoBot 的 `onboard` 向导、EasyClaw 的 UI 请求。**趋势**：为了降低门槛，项目正逐步抛弃"编辑 config.json"的 CLI 传统，转向可视化的配置与监控。
3.  **Agent 自身不知道"我是谁、在哪、几点"**：
    *   IronClaw 和 CoPaw 都提到 Agent 缺乏对运行环境（Hosted by whom?）和时间（What day is it?）的感知。**趋势**：System Prompt 的动态注入和环境感知将成为提升 Agent 智商的基础设施。
4.  **国产模型适配战**：
    *   DeepSeek, GLM5, Kimi 等国产模型在各项目中频繁出现兼容性报错（429, 422, 格式错误）。**趋势**：开源框架正在成为国产大模型落地的"试金石"，谁先修好兼容性，谁就能赢得国内开发者市场。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-03-17)

## 1. 今日速览

NanoBot 项目今日维持了**极高**的活跃度，在发布新版本 `v0.1.4.post5` 的同时，社区交互量达到峰值。过去 24 小时内共有 **188 条 Issue 更新**（其中 166 条已关闭）和 **253 条 PR 更新**（其中 192 条已合并），显示出维护团队极强的问题处理能力和社区响应速度。新版本合并了 57 个 PR 并迎来了 29 位新贡献者，重点在于“打磨细节”而非功能堆砌，标志着项目正从快速迭代期迈向成熟稳定期。

## 2. 版本发布

### 🚀 v0.1.4.post5
- **发布说明**：这是一个侧重于**可靠性 refine** 的版本。官方描述为“比起宏大的场面，更多的是安静的精心打磨”。
- **核心变更**：合并了 57 个 PR，涉及边缘案例修复和用户体验平滑化。
- **破坏性变更/迁移注意**：目前尚未在 Release Notes 中明确指出破坏性变更，但从 Issue 关闭情况看，建议从旧版（如 0.1.3）升级的用户重点关注 **OpenRouter 认证配置**（#842）和 **模型前缀映射**（#384）逻辑的微调，建议升级前备份 `config.json`。
- **链接**：[Release v0.1.4.post5](https://github.com/HKUDS/nanobot/releases/tag/v0.1.4.post5)

## 3. 项目进展

今日共有近 200 个 PR 被合并，项目在**基础架构、生态兼容性和安全性**方面取得了实质性进展：

- **架构与性能**：
    - **多模型故障转移**：PR #2121 引入了 `MultiModelProvider`，允许用户配置备选模型，当主模型不可用时自动切换，显著提升了服务的可用性。
    - **安全沙箱**：PR #1940 开始引入 `bubblewrap` 沙箱机制包装 exec 调用，修复了工作区隔离不完全的安全隐患。

- **Channel 扩展**：
    - **Microsoft Teams 支持**：PR #2081 增加了内置的 MS Teams 频道支持，包含租户感知的 OAuth 认证，拓展了企业级应用场景。

- **工具与体验**：
    - **网络搜索增强**：PR #2113 为 WebSearchTool 增加了多提供商自动降级机制（如 Tavily 失败自动切换至 SearXNG 等），解决单一 API 挂掉导致搜索功能失效的问题。
    - **Telegram 重复消息修复**：PR #2110 修复了 Telegram 频道常见的“一条消息发两遍（一遍 Markdown 一遍纯文本）”的问题。

## 4. 社区热点

今日讨论最热烈的议题集中在**第三方模型集成**和**本地化部署**体验上：

1.  **[Issue #336] DeepSeek Provider 报错** (评论: 20)
    - **链接**：[HKUDS/nanobot Issue #336](https://github.com/HKUDS/nanobot/issues/336)
    - **诉求**：用户配置 DeepSeek API 时频繁遇到 "LLM Provider NOT provided" 错误。这反映了社区对国产大模型（DeepSeek, Kimi 等）集成的强烈需求，以及对 `litellm` 底层映射逻辑的困惑。

2.  **[Issue #1692] Telegram Bot 重复回复** (评论: 8, 👍: 4)
    - **链接**：[HKUDS/nanobot Issue #1692](https://github.com/HKUDS/nanobot/issues/1692)
    - **诉求**：这是长期困扰 Telegram 用户的痛点，今日已有对应的 Fix PR (#2110) 提出，社区反响积极。

3.  **[Issue #855] 本地部署生存指南** (评论: 10)
    - **链接**：[HKUDS/nanobot Issue #855](https://github.com/HKUDS/nanobot/issues/855)
    - **诉求**：用户分享了在低显存环境（RTX 3050）下的踩坑经验。表明 NanoBot 的用户群中有大量硬件资源受限的开发者，他们急需对轻量级模型（如 4B/8B）更好的支持。

## 5. Bug 与稳定性

今日关闭了大量功能性 Bug，但也暴露了一些深层次问题：

- **严重 (Critical)**：
    - **#1692 Telegram 双重回复**：严重影响对话体验，已提交修复 PR #2110。
    - **#842 OpenRouter 认证失败**：升级后导致 401 错误，与认证头传递有关。

- **中等**：
    - **#648 文件操作不可靠**：LLM 在执行文件编辑时混用相对/绝对路径导致失败，属于 Agent 稳定性问题。
    - **#672 陷入死循环**：Bot 在任务完成后无法识别状态，持续发送相同回复。

- **配置/兼容性**：
    - **#336 DeepSeek 无法使用**：Provider 识别逻辑缺陷。
    - **#1988 企业微信 启动失败**：配置项未自动生成且启动报错 "No Channels Enabled"。

## 6. 功能请求与路线图信号

从今日的 Open Issues 和 PR 趋势来看，未来的路线图明显指向**多智能体协作**和**高度自定义**：

1.  **原生多智能体**：
    - **Issue #2072** 请求支持类似 OpenClaw 的 Multi-Agent Routing。
    - **PR #2108** 已经实现了 Multi-agent handoff（多智能体交接）功能。这极有可能成为下一个大版本的核心特性。

2.  **更强的模型兼容性**：
    - **PR #2116** 提出支持动态自定义 Provider（Dynamic Custom Providers），允许用户在配置文件中直接定义 API 接口规范，无需写代码即可适配新的模型平台。这直接回应了 Issue #397 关于多模型聚合平台的请求。

3.  **交互式配置**：
    - **Issue #2018** 推出了 `nanobot onboard` 交互式向导，旨在替代手动编辑 JSON，这将显著降低新用户的上手门槛。

## 7. 用户反馈摘要

分析今日评论，提炼出用户的核心痛点与爽点：

- **痛点**：
    - **配置门槛高**：手动编辑 `config.json` 极易出错，特别是涉及到不同模型的 `litellm_prefix` 和 `apiBase` 配置时。
    - **本地模型“智障”**：在低参数模型（8B以下）下，Agent 容易出现“假装执行工具”的情况（Issue #594）。
    - **网络依赖**：Web Search 等工具单一依赖某些 API，一旦不可用整个技能失效。

- **满意点**：
    - **轻量级架构**：相比其他框架，用户对 NanoBot 的轻量级设计表示认可。
    - **社区响应快**：大量 Issue 在一天内被关闭，用户对维护者的响应速度表示赞赏。

## 8. 待处理积压

以下重要 Issue 虽有讨论但尚未完全解决，建议维护者优先关注：

1.  **[Issue #1932] 技能无法临时禁用**
    - **链接**：[HKUDS/nanobot Issue #1932](https://github.com/HKUDS/nanobot/issues/1932)
    - **原因**：目前只能删除技能，无法在调试时灵活开关。这是一个影响开发体验的易用性问题，已标记为 `good first issue`，适合新贡献者认领。

2.  **[Issue #2072] 原生多智能体路由**
    - **链接**：[HKUDS/nanobot Issue #2072](https://github.com/HKUDS/nanobot/issues/2072)
    - **原因**：虽然 PR #2108 提供了初步实现，但关于复杂的路由策略和标准化接口仍在讨论中，这是通向 Agentic Workflow 的关键一步。

3.  **[Issue #1988] 企业微信 集成缺失**
    - **链接**：[HKUDS/nanobot Issue #1988](https://github.com/HKUDS/nanobot/issues/1988)
    - **原因**：配置项在最新版中丢失，导致国内企业用户无法正常启动网关，属于回归问题，需紧急修复。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# Zeroclaw 项目动态日报 (2026-03-17)

你好！我是 AI 智能体与个人 AI 助手领域的开源项目分析师。以下是基于 GitHub 数据生成的 **Zeroclaw** 项目日报。

## 1. 今日速览
Zeroclaw 项目今日呈现**爆发式更新**态势，单日发布了从 `v0.4.0` 到 `v0.4.2` 共 **10 个版本**，显示出极高的开发迭代速度。
- **活跃度**：极高。过去 24 小时内 PR 合并/关闭达 35 条，Issue 交互 44 条。
- **核心进展**：项目重心明显转向**底层架构重构**（引入 SQLite 会话存储、两层缓存架构）与**生态集成**（新增 X/Twitter、火山引擎等渠道）。
- **健康度**：虽然功能迭代快，但**稳定性堪忧**。单日涌现大量关于 Docker 镜像损坏、配置文件不兼容、Daemon 崩溃的 Bug 报告，表明近期的大规模重构引入了回归问题，建议用户暂时谨慎升级生产环境。

---

## 2. 版本发布

今日连续发布了 **v0.4.0** 至 **v0.4.2** 系列版本，标志着项目进入 0.4.x 新阶段。

### 核心更新 (v0.4.2 Stable)
- **架构升级**：
  - **Cache**：引入双层响应缓存机制，支持多 Provider Token 追踪及缓存分析。
  - **Heartbeat**：增加了健康指标、自适应心跳间隔和任务历史记录。
  - **Sessions**：引入 **SQLite 后端 (FTS5)** 支持，并实现了 trait 抽象层，为后续数据持久化打下基础。
- **生态集成**：
  - 新增 **X/Twitter** 和 **Mochat** 渠道集成。
  - 新增 **VolcEngine/ByteDance** (火山引擎/字节跳动) 网关支持 (`VOLCENGINE_API_KEY`)。
  - 支持 `transcription` 配置中的 `initial_prompt` 以优化专有名词识别。
- **渠道调整**：关闭/移除了 AiHubMix, SiliconFlow 等部分聚合网关的内置支持。

### ⚠️ 破坏性变更与迁移注意
根据 Issue 反馈，v0.4.x 系列存在较多不兼容变更：
1.  **配置文件不兼容**：v0.3.4 升级至 v0.4.x 可能因 `config.toml` 缺少 `data_retention`、`cloud_ops` 等新字段导致 Daemon 崩溃 ([Issue #3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684))。建议升级前备份配置，或准备重新生成配置。
2.  **Docker 镜像问题**：最新 Docker 镜像被报告为 "dummy binary" (仅 292KB)，导致容器启动即退出 ([Issue #3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687))。
3.  **GLIBC 依赖**：预编译二进制文件依赖 `GLIBC_2.39`，导致旧版本 Linux 系统无法运行 ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))。

---

## 3. 项目进展

今日共有 **35 条 PR 被合并/关闭**，主要集中在修复重构带来的回归问题及扩展新渠道。

### 🚀 核心功能推进
- **新渠道集成**：合并了 [PR #3735](https://github.com/zeroclaw-labs/zeroclaw/pull/3735)，正式支持 **X/Twitter** 和 **Mochat**。
- **SQLite 会话存储**：完成了 SQLite 后端的引入 ([PR #3695](https://github.com/zeroclaw-labs/zeroclaw/pull/3695) 等相关重构)，提升了会话持久化能力。
- **新工具支持**：增加了 `read_skill` 工具 ([PR #3739](https://github.com/zeroclaw-labs/zeroclaw/pull/3739))，旨在改善 Compact 模式下的技能加载可靠性。

### 🛠️ 关键修复 (Fixes)
- **Agent 逻辑**：修复了 GLM 风格工具调用解析器将普通 URL 误判为 curl 命令的问题 ([PR #3694](https://github.com/zeroclaw-labs/zeroclaw/pull/3694))。
- **兼容性**：修复了 QQ 频道 Markdown 渲染问题 ([PR #3732](https://github.com/zeroclaw-labs/zeroclaw/pull/3732))，以及 WebSocket 认证参数缺失导致的仪表盘连接失败 ([PR #3641](https://github.com/zeroclaw-labs/zeroclaw/pull/3641))。
- **CI/CD**：解耦了 Docker 构建与 Tweet 发布任务，并修复了 Docker 构建缓存导致的失败 ([PR #3741](https://github.com/zeroclaw-labs/zeroclaw/pull/3741))。

---

## 4. 社区热点

今日社区讨论极其热烈，主要集中在**安全策略**与**稳定性**两方面。

1.  **关于安全策略的争议** ([Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478) 👍 5, 💬 39)
    - **诉求**：用户抱怨 Zeroclaw 安全策略过于严格（"除了安全什么功能也没有"），即使在配置中放开了权限，Agent 依然拒绝执行安装软件等操作，沦 为"聊天机器人"。
    - **分析**：这反映了 Agent 类项目普遍面临的**易用性与安全性**的平衡难题。用户希望有明确的"完全放开"模式供个人玩具场景使用，而项目方倾向于默认安全。

2.  **GLIBC 版本不兼容** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) 👍 2, 💬 10)
    - **诉求**：大量用户在旧版 Linux (如 Ubuntu 20.04) 上无法运行新版二进制文件，报错 `GLIBC_2.39 not found`。
    - **分析**：编译环境的 GLIBC 版本过高，导致向下兼容性丧失。这是一个严重的分发阻碍，可能需要调整 CI 编译环境或提供静态链接版本。

3.  **Docker 镜像损坏事件** ([Issue #3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) 👍 1, 💬 1)
    - **现象**：官方 Docker 镜像体积异常缩小至 292KB，无法启动。
    - **分析**：CI/CD 流程中的构建产物步骤可能出错，导致发布空包。虽已有修复 PR ([PR #3741](https://github.com/zeroclaw-labs/zeroclaw/pull/3741))，但影响恶劣。

---

## 5. Bug 与稳定性

今日报告的 Bug 数量较多，且严重程度较高 (S0/S1)，主要集中在**部署与运行时**。

| 严重度 | Issue | 描述 | 状态/修复 |
| :--- | :--- | :--- | :--- |
| **S0** | [#3687](https://github.com/zeroclaw-labs/zeroclaw/issues/3687) | **Docker 镜像为空文件**，容器启动即退出。 | **已修复** (PR #3741) |
| **S0** | [#3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070) | 预编译二进制依赖 **GLIBC_2.39**，旧系统无法运行。 | Open |
| **S0** | [#2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400) | **安全漏洞**：Agent 可通过 `file_write` 修改 `config.toml` 提权，绕过 `always_ask` 限制。 | Open (高危) |
| **S1** | [#3540](https://github.com/zeroclaw-labs/zeroclaw/issues/3540) | Lark/飞书渠道编译后无法启动。 | Open |
| **S1** | [#3684](https://github.com/zeroclaw-labs/zeroclaw/issues/3684) | 升级后 `config.toml` 字段缺失导致 **Daemon 启动崩溃**。 | Closed (需手动处理) |
| **S1** | [#3714](https://github.com/zeroclaw-labs/zeroclaw/issues/3714) | Docker 容器在 **ARM64 (DGX Spark)** 上立即退出。 | Open |
| **S2** | [#3658](https://github.com/zeroclaw-labs/zeroclaw/issues/3658) | v0.3.2 后 **交互式向导失效**，无法配置。 | **Fix PR** #3740 |

---

## 6. 功能请求与路线图信号

1.  **安全模式切换** ([Issue #1478](https://github.com/zeroclaw-labs/zeroclaw/issues/1478))：用户强烈呼吁提供 "God Mode" 或 "No-Security" 配置选项。考虑到已有 PR 修复安全问题，未来版本可能会引入更细粒度的 `sudo` 模式或 `--unsafe` 启动参数。
2.  **MCP 支持** ([Issue #3153](https://github.com/zeroclaw-labs/zeroclaw/issues/3153))：用户希望 `zeroclaw agent` 子命令支持 MCP (Model Context Protocol) 配置。目前 MCP 仅在 `start_channels` 中支持，扩展到 Agent 核心是必然趋势。
3.  **全功能 Docker 镜像** ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642))：用户请求提供预编译开启所有功能（如 WhatsApp）的完整镜像，虽然体积大但降低入门门槛。项目目前倾向于模块化裁剪。

---

## 7. 用户反馈摘要

- **痛点**：
  - **太难用了**：大量用户反馈安全限制导致 Agent "这就不能干那也不能干"，配置极其复杂。
  - **升级就崩**：频繁的破坏性更新（配置文件格式变更）导致用户不敢轻易 `upgrade`。
  - **文档缺失**：Docker 模式下的重启、停止命令文档不清晰 ([Issue #3474](https://github.com/zeroclaw-labs/zeroclaw/issues/3474))。
- **好评点**：
  - 对引入 **SQLite** 和 **缓存机制** 表示欢迎，认为能显著提升性能和记忆能力。
  - 对新渠道的快速跟进（如 Twitter, 飞书适配尝试）表示认可。

---

## 8. 待处理积压

- **[S0] 安全提权漏洞** ([Issue #2400](https://github.com/zeroclaw-labs/zeroclaw/issues/2400))：Agent 可修改自身配置文件提升权限。该 Issue 已活跃一周，但尚未有明确的修复 PR 合并，建议维护者立即处理。
- **[S0] GLIBC 兼容性** ([Issue #3070](https://github.com/zeroclaw-labs/zeroclaw/issues/3070))：影响大量 Linux 用户，需要调整编译策略。
- **[Enhancement] 工作区拆分** ([Issue #2263](https://github.com/zeroclaw-labs/zeroclaw/issues/2263))：关于 Multi-Crate Workspace 的 RFI 讨论，虽然未关闭但已沉寂数日，需技术决策。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-17)

你好！我是 PicoClaw 开源项目分析师。以下是基于 GitHub 数据生成的 2026 年 3 月 17 日项目动态日报。

---

## 1. 今日速览
PicoClaw 项目今日保持了**极高的活跃度**，社区贡献热情高涨。过去 24 小时内共有 **22 条 Issue 更新**（含 20 条新活跃议题）和 **76 条 PR 更新**，显示出项目正处于快速迭代与功能扩展期。核心团队与社区正集中精力重构 **Agent 核心循环**（Event-driven 架构），并积极修补多处 Provider 兼容性与稳定性问题。虽然待合并 PR 数量较多（44 条），但合并速度也很快（32 条），整体向前推进势头强劲。

## 2. 版本发布
- **版本号**: `nightly` (Nightly Build)
- **Tag**: `v0.2.3-nightly.20260316.f2addff0`
- **说明**: 这是一个自动化的每夜构建版本，包含了最新的代码提交。根据 Issue #1316 的讨论，该版本可能包含尚未完成的 Agent 架构重构代码。
- ⚠️ **注意**: 官方提示此版本可能不稳定，仅供测试尝鲜，生产环境请谨慎使用。
- **变更日志**: [v0.2.3...main](https://github.com/sipeed/picoclaw/compare/v0.2.3...main)

## 3. 项目进展
今日共有 **32 个 PR 被合并或关闭**，重点进展如下：

- **Agent 核心架构演进**:
    - **[#1636](https://github.com/sipeed/picoclaw/pull/1636) [OPEN]** 提出了 `SubTurn` 层级执行架构，这是配合 Issue #1316 Agent 重构的关键实现，旨在支持多 Agent 并发与中断控制。
    - **[#1490](https://github.com/sipeed/picoclaw/pull/1490)** 正在重构上下文管理，修复 `ContextWindow` 混淆问题，增强 Token 预算控制。

- **功能增强与修复**:
    - **[#1536](https://github.com/sipeed/picoclaw/pull/1536) [CLOSED]**: 修复了非图片附件（文档/音视频）在沙箱环境下的读取权限问题，显著提升了多模态处理能力。
    - **[#1570](https://github.com/sipeed/picoclaw/pull/1570) [CLOSED]**: 修正了 Cron 定时任务的默认行为，现在会正确通过 Agent 处理消息而非直接回显。
    - **[#1349](https://github.com/sipeed/picoclaw/pull/1349) [CLOSED]**: 大幅增强了 QQ 频道的支持，新增语音、视频、文件等多种附件的收发能力。
    - **[#1645](https://github.com/sipeed/picoclaw/pull/1645) [CLOSED]**: 安全性修复，现已在日志中自动掩码 Telegram Bot Token，防止密钥泄露。

## 4. 社区热点
今日讨论最活跃的议题集中在 **Agent 架构重构** 与 **模型兼容性**：

1.  **[Issue #1316](https://github.com/sipeed/picoclaw/Issue/1316) [11 评论]**: **Agent 循环重构提案**。
    *   **核心诉求**: 将现有的“黑盒” Agent Loop 重构为事件驱动架构。
    *   **分析**: 这是目前最受关注的技术债清理。用户迫切需要 `Hooks`（钩子）、`Interrupts`（中断）和 `Steering`（动态干预）能力，以便将 PicoClaw 集成到更复杂的控制平面或 UI 中。
2.  **[Issue #293](https://github.com/sipeed/picoclaw/Issue/293) [6 评论]**: **自主浏览器操作**。
    *   **核心诉求**: 实现原生的浏览器自动化能力（导航、提取数据、操作 DOM）。
    *   **分析**: 作为 Roadmap 上的高优功能，社区对 "AI 操作网页" 的需求非常强烈，目前正讨论具体的实现路径。
3.  **[Issue #39](https://github.com/sipeed/picoclaw/Issue/39) [5 评论]**: **增加 `picoclaw doctor` 命令**。
    *   **核心诉求**: 提供类似 OpenClaw 的自检工具，自动诊断配置错误和网络问题。

## 5. Bug 与稳定性
今日报告了多个影响使用的 Bug，主要集中在配置逻辑和特定模型适配：

| 严重度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| 🔴 高 | [**#1650**](https://github.com/sipeed/picoclaw/Issue/1650) | **服务无限重启**。在特定配置下导致 PicoClaw 崩溃循环。 | Open (Investigating) |
| 🔴 高 | [**#1635**](https://github.com/sipeed/picoclaw/Issue/1635) | **配置继承失效**。`model_list` 无法继承 `providers` 中的 `api_key/base`，导致配置冗余且易出错。 | Open |
| 🟠 中 | [**#1652**](https://github.com/sipeed/picoclaw/Issue/1652) | **GLM Coding Plan 不兼容**。调用智谱特定模型时报 429 错误（余额判断逻辑有误）。 | Open |
| 🟠 中 | [**#1624**](https://github.com/sipeed/picoclaw/Issue/1624) | **Anthropic 模型 ID 格式错误**。配置 `claude-sonnet-4.6` (点号) 发送至 API 时未转换为连字符，导致 404。 | **Fixed by [PR #1626](https://github.com/sipeed/picoclaw/pull/1626)** |
| 🟠 中 | [**#1530**](https://github.com/sipeed/picoclaw/Issue/1530) | **安全默认配置过弱**。Setup 接口默认开启了不安全的 Wildcard Origins 和 Query Token。 | Closed (已确认风险) |

## 6. 功能请求与路线图信号
结合 Issue 和 PR，以下功能极有可能在近期落地：

- **TTS/ASR 语音支持**: [Issue #1648](https://github.com/sipeed/picoclaw/Issue/1648) 提出增加语音交互（TTS/ASR），计划构建 Channel 与语音服务的桥接。
- **MCP 细粒度控制**: [PR #1654](https://github.com/sipeed/picoclaw/pull/1654) 正在实现按 Server 配置 MCP 工具的延迟加载，这将显著优化启动速度和资源占用。
- **Exec 工具禁用选项**: 鉴于安全考量，[PR #1627](https://github.com/sipeed/picoclaw/pull/1627) 增加了完全禁用 `exec` 工具的配置项，响应了社区对安全性的担忧。
- **Cron 防滥用**: [PR #1656](https://github.com/sipeed/picoclaw/pull/1656) 引入 `min_interval_seconds`，防止 Agent 自动创建高频任务导致 Token 耗尽。

## 7. 用户反馈摘要
从 Issue 详情中可以提炼出以下用户痛点：

- **多模态文件读取困难**: 用户在使用非图片文件（如 PDF、Excel）时，经常遇到权限错误，[PR #1536](https://github.com/sipeed/picoclaw/pull/1536) 的合并将极大缓解此问题。
- **Docker 易用性差**: [Issue #1228](https://github.com/sipeed/picoclaw/Issue/1228) 指出官方镜像过于精简，缺少 `python`、`curl` 等常用工具，导致 Agent 在容器内执行复杂任务时受阻。
- **配置复杂且易错**: 多个 Bug（如 #1635, #1634）反映出用户在配置多模型、多 Provider 时感到困惑，目前的配置继承逻辑不够直观。
- **群聊上下文缺失**: [Issue #1615](https://github.com/sipeed/picoclaw/Issue/1615) 提到在群组中，Agent 不知道是谁发了消息，导致回复缺乏针对性。

## 8. 待处理积压
以下重要议题/PR 长期未获最终解决或合并，建议维护者关注：

- **[PR #751](https://github.com/sipeed/picoclaw/pull/751) Gateway WebSocket 接口**: 该 PR 存在时间较长，旨在提供标准化的 WebSocket 网关接口，对边缘部署非常重要，需评审是否合并。
- **[Issue #293](https://github.com/sipeed/picoclaw/Issue/293) 浏览器自动化**: 作为高优 Roadmap，目前仍处于讨论阶段，尚无明确实现 PR，用户期待较高。
- **[Issue #39](https://github.com/sipeed/picoclaw/Issue/39) Doctor 命令**: 这是一个极佳的用户体验改进提案，但目前未见具体实现代码。

---
*以上数据均来源于 PicoClaw GitHub 公开数据，截止至 2026-03-17 09:00 (UTC+8)。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-17)

## 1. 今日速览

NanoClaw 今日维持高活跃度，社区贡献主要集中在**安全性修复**与**生态集成**两方面。PR 端共有 50 次更新，其中 21 次已合并/关闭，主要解决了 Chromium 崩溃、IPC 任务同步和 OAuth 刷新等关键问题。然而，高优先级 Bug 依然突出，特别是 **OAuth Token 隔夜失效 (#730)** 和 **容器启动竞态条件 (#1067)** 尚未彻底解决，影响部分生产环境用户。安全方面，社区提交了针对 Web 内容的清洗补丁 (#1035) 并发现了日志隐私泄露风险 (#1150)，值得维护者重点关注。

## 2. 版本发布

**无新版本发布**。

## 3. 项目进展

今日共有 **21 个 PR 被合并或关闭**，项目在稳定性和集成能力上取得实质进展：

- **[Merged] Chromium 崩溃修复**：PR #1154 / #1155 修复了由于 `XDG_CONFIG_HOME` 指向只读目录导致的 `SIGTRAP` 崩溃，显著提升了浏览器相关 Skill 的稳定性。
- **[Merged] 远程控制自动确认**：PR #1133 通过自动接受 `remote-control` 提示，解决了容器环境下进程立即退出的问题。
- **[Merged] Google Tasks 集成**：PR #1153 将 `add-google-tasks` skill 引入本地仓库，降低了对第三方市场的依赖。
- **[Merged] Crypto Wallet 技能**：PR #1146 新增了 `add-wallet` skill，支持 EVM 和 Solana 链，拓展了 AI Agent 在 Web3 场景的应用。
- **[Open] 关键架构修复待审**：PR #1159 (IPC 任务快照刷新) 和 #1158 (Tool Call 后文本转发) 正在审查中，这两项修复对多轮对话和任务调度至关重要。

## 4. 社区热点

今日讨论焦点集中在**安全性**与**功能增强**：

1.  **[Issue #957] 支持 Podman 替代 Docker** ([链接](https://github.com/qwibitai/nanoclaw/issues/957))
    *   **热度**：👍 4, 评论 4
    *   **分析**：用户强烈呼吁支持 Podman，主要出于 Docker Desktop 收费和权限模型的考量。维护者需评估容器运行时抽象层的改造难度。

2.  **[Issue #730] OAuth Token 隔夜失效** ([链接](https://github.com/qwibitai/nanoclaw/issues/730))
    *   **热度**：评论 4
    *   **分析**：这是一个阻塞性问题。用户反馈使用 `.env` 配置的 Token 每天早上都会失效，导致后台服务中断。虽然有相关 Fix PR (#1102)，但似乎尚未完全解决问题，需优先验证。

3.  **[PR #1035] WebFetch/WebSearch 输出清洗** ([链接](https://github.com/qwibitai/nanoclaw/pull/1035))
    *   **热度**：关注度较高
    *   **分析**：引入 `PostToolUse` 钩子清洗外部网页内容，防止 Prompt Injection。这标志着项目正在加强 Agent 安全边界，符合企业级部署需求。

## 5. Bug 与稳定性

今日 Bug 报告涉及安全、核心逻辑和兼容性，部分已有修复方案：

| 严重度 | Issue | 描述 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **高** | [#1150](https://github.com/qwibitai/nanoclaw/issues/1150) | **安全：日志泄露用户 Prompt**。容器错误日志记录了完整的用户输入，存在隐私风险。 | **Open** (待修复) |
| **高** | [#1142](https://github.com/qwibitai/nanoclaw/issues/1142) | **SDK 版本过旧**。容器内 SDK 版本锁定导致默认模型非最新。 | **Open** |
| **高** | [#730](https://github.com/qwibitai/nanoclaw/issues/730) | **OAuth Token 过期**。后台服务无法自动刷新 Token，导致每天早晨服务宕机。 | 相关 PR [#1102](https://github.com/qwibitai/nanoclaw/pull/1102) (Open) |
| **中** | [#1159](https://github.com/qwibitai/nanoclaw/issues/1159) | **IPC 任务不可见**。运行时创建的任务在容器重启前不可见。 | **Fix PR** [#1159](https://github.com/qwibitai/nanoclaw/pull/1159) (Open) |
| **中** | [#1141](https://github.com/qwibitai/nanoclaw/issues/1141) | **触发词配置失效**。数据库中的群组触发词配置被全局变量覆盖。 | **Open** |

## 6. 功能请求与路线图信号

今日社区提出了明确的集成方向，预示项目正向**多模型**和**记忆增强**演进：

- **记忆系统增强**：Issue #1130 提议集成 [MemOS](https://github.com/qwibitai/nanoclaw/issues/1130) 作为持久化记忆后端，解决 Agent 无状态问题。
- **多模型支持**：
    - **OpenAI API**：Issue #1092 呼吁支持本地运行的 OpenAI 兼容模型。
    - **AWS Bedrock**：PR #1151 已提交 Bedrock 适配器代码，允许用户使用 AWS 凭证调用模型。
    - **Cursor CLI**：PR #1144 提出支持 Cursor CLI 作为替代后端。
- **集成 Google Workspace**：Issue #1122 提议通过 CLI 集成 Gmail、Calendar 等服务。

## 7. 用户反馈摘要

- **痛点：迁移困难**：Issue #1080 显示用户在尝试迁移到 Sandbox 环境时遇到极大阻力，特别是目录权限配置。"想把 Mac 浸在雪碧里" 的评论反映了配置流程对非专业用户不够友好。
- **痛点：日志膨胀**：Issue #1088 报告日志文件 5 天内膨胀至 27GB，需手动干预清理。
- **场景：Intel Mac 兼容**：Issue #1079 指出目前 Docker Sandbox 不支持 Intel Mac，限制了部分老用户的使用。
- **场景：时间认知**：Issue #698 指出 Agent 无法仅凭 ISO 时间戳判断"今天是周几"，建议在 Prompt 中注入时间上下文。

## 8. 待处理积压

以下重要 Issue 长期未被响应或解决，建议维护者关注：

1.  **[Issue #730] OAuth Token Expiry** ([链接](https://github.com/qwibitai/nanoclaw/issues/730))：自 03-05 开放至今，严重影响 CLI 用户。
2.  **[Issue #29] Add Signal Channel** ([链接](https://github.com/qwibitai/nanoclaw/issues/29))：自 02-02 提出添加 Signal 支持的请求，尚未有明确开发计划。
3.  **[PR #974] Discord Vision/Voice** ([链接](https://github.com/qwibitai/nanoclaw/pull/974))：状态标记为 Blocked，等待依赖或架构调整。
4.  **[PR #846] GitHub Integration Skill** ([链接](https://github.com/qwibitai/nanoclaw/pull/846))：自 03-08 提交至今未合并，是一个高价值的集成功能。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 (2026-03-17)

## 1. 今日速览

IronClaw 项目今日保持**极高活跃度**，过去24小时内共有 50 个 PR 更新与 21 个 Issue 更新，其中 25 个 PR 已合并，6 个 Issue 顺利关闭。项目重心目前明显向**提升系统稳定性与代码质量**倾斜，合并了大量 Staging CI 的自动升级 PR，并针对 Anthropic OAuth 认证失败、Telegram 推送失败等关键路径 Bug 进行了修复。然而，CI 自动审查在最新合并的代码中发现了多个高风险架构问题（如同步阻塞、硬编码逻辑），显示出项目在快速迭代中积累了一定的技术债务，亟需在下一阶段关注。

## 2. 版本发布

*   **当前状态**：今日无新版本发布。
*   **近期动态**：PR [#973](https://github.com/nearai/ironclaw/pull/973) 正在准备发布 `v0.19.0`，该版本包含 API 破坏性变更（`constructible_struct_adds_field`），建议关注该 PR 的合并进度以便及时适配。

## 3. 项目进展

今日共有 **25 个 PR 合并**，主要进展如下：

*   **[Core] 架构重构与修复**：
    *   **PR [#1151](https://github.com/nearai/ironclaw/pull/1151) (已合并)**：重构了跨通道的 Owner Scope 逻辑。此修复解决了 Issue [#994](https://github.com/nearai/ironclaw/issue/994) 中 Telegram 通知发送到错误 ID 的根本原因，明确了状态归属，是提升多通道一致性的关键一步。
    *   **PR [#1256](https://github.com/nearai/ironclaw/pull/1256) (已合并)**：修复了 Staging CI 中的覆盖率回归问题，并更新了过时的 E2E 测试场景，确保持续集成的有效性。
*   **[CI/CD] 自动化流水线**：
    *   合并了约 10 个 `chore: promote staging` 类型的 PR（如 [#1246](https://github.com/nearai/ironclaw/pull/1246), [#1239](https://github.com/nearai/ironclaw/pull/1239)），表明项目正在频繁地将修复和特性从 Staging 环境推送到升级分支，发布节奏紧凑。
*   **[Testing] 基础设施增强**：
    *   **PR [#1233](https://github.com/nearai/ironclaw/pull/1233) (已合并)**：引入了 `FaultInjector` 框架用于测试重试、故障转移和熔断行为，显著增强了对 LLM 调用等不稳定网络的鲁棒性测试能力。

## 4. 社区热点

今日社区关注点集中在用户体验痛点与新模型兼容性上：

1.  **Issue [#1244](https://github.com/nearai/ironclaw/issues/1244) [UX]**: 用户 `@gagdiez` 指出 `onboard` 命令过于冗长（包含 9 个配置步骤），对于只想配置单一功能（如 NEAR AI + Telegram）的新手非常不友好。**背后诉求**：需要更模块化、轻量级的入门引导。
2.  **Issue [#1241](https://github.com/nearai/ironclaw/issues/1241) [Bug]**: 用户 `@noverby` 报告 Mistral API 拒绝 IronClaw 生成的 Tool Call ID（长度格式不符）。**背后诉求**：随着用户尝试切换 LLM 后端，对多模型兼容性的需求在增加。
3.  **Issue [#1245](https://github.com/nearai/ironclaw/issues/1245) [Feature]**: 用户 `@andeya` 提出对 WebSocket 通道支持的强烈需求。**背后诉求**：现有通道可能无法满足实时性或特定架构的集成需求。

## 5. Bug 与稳定性

今日报告了多个 **P1 级**及**高风险**问题，主要集中在 LLM 调用与架构设计上：

*   **[P1] LLM 调用失败**
    *   **Issue [#763](https://github.com/nearai/ironclaw/issues/763)**: Routine 引擎构造的消息历史中缺少 `user` 角色，导致 NEAR AI 与 Claude 4.6 拒绝服务（400 Error）。
    *   **状态**：已有修复 PR [#1259](https://github.com/nearai/ironclaw/pull/1259)（确保消息以用户消息结尾），目前 Open 状态，等待合并。
*   **[P1] 认证与授权故障 (已修复)**
    *   **Issue [#994](https://github.com/nearai/ironclaw/issues/994)**: Telegram 广播使用错误的 `chat_id`。✅ **已通过 PR #1151 关闭**。
    *   **Issue [#1136](https://github.com/nearai/ironclaw/issues/1136)**: Anthropic OAuth Token 过期导致间歇性认证失败。✅ **已关闭**。
*   **[HIGH] 架构风险 (由 Staging CI 检出)**
    *   在最近合并的 PR #1246 衍生出的审查中，CI Bot 发现了多个高风险代码异味，表明存在潜在的技术债：
        *   **Issue [#1247](https://github.com/nearai/ironclaw/issues/1247)**: HTTP 请求处理中存在 **120秒同步阻塞轮询**，可能导致工作线程冻结。
        *   **Issue [#1248](https://github.com/nearai/ironclaw/issues/1248)**: 存在违反架构设计的 **硬编码通道逻辑**。
        *   **Issue [#1249](https://github.com/nearai/ironclaw/issues/1249)**: `ExtensionManager` 被特定业务逻辑（Telegram）臃肿化。

## 6. 功能请求与路线图信号

*   **WebSocket 支持 ([#1245](https://github.com/nearai/ironclaw/issues/1245))**：
    *   *分析*：这是一个常见的高优需求。虽然目前无对应 PR，但鉴于现有 Channel 架构正在重构（如 #1151），现在是引入 WebSocket Channel 的好时机。
*   **快照加密存储 ([#1235](https://github.com/nearai/ironclaw/issues/1235))**：
    *   *分析*：`@reidliu41` 提出对磁盘上的 Snapshot 文件进行静态加密与完整性校验。这符合企业级安全合规趋势，预计会被纳入中短期路线图。
*   **LLM 兼容性层**：
    *   结合 Mistral ID 格式问题 ([#1241](https://github.com/nearai/ironclaw/issues/1241)) 和 Google OAuth URL Bug ([#1165](https://github.com/nearai/ironclaw/pull/1165))，可以看出项目正致力于抹平不同 LLM Provider 之间的 API 差异。

## 7. 用户反馈摘要

从今日的 Issue 评论中提炼出以下核心体验反馈：

*   **正面**：对 Anthropic OAuth 修复的反应迅速表示认可。
*   **负面/痛点**：
    1.  **误导性报错**：Issue [#997](https://github.com/nearai/ironclaw/issues/997) 指出，当 Agent 等待工具确认时显示 "Error: Waiting for approval"，这让用户误以为系统崩溃，实际上只是正常的挂起状态。建议改为 "Status: Awaiting approval"。
    2.  **配置繁琐**：Onboarding 流程过于冗长，且容易出错，不仅没有帮助反而劝退新用户 ([#1244](https://github.com/nearai/ironclaw/issues/1244))。
    3.  **缺乏上下文感知**：部署在 NEAR AI 上的 IronClaw 不知道自己运行在 NEAR AI 上，导致回答过于通用 ([#857](https://github.com/nearai/ironclaw/issues/857))。

## 8. 待处理积压

*   **PR [#973](https://github.com/nearai/ironclaw/pull/973) (v0.19.0 Release)**：虽然创建于 5 天前，但作为包含 Breaking Changes 的发布版本，仍处于 Open 状态，需关注其合并阻塞点。
*   **PR [#1165](https://github.com/nearai/ironclaw/pull/1165) (Fix Google OAuth)**：针对 Telegram 发起的 Google OAuth URL 错误，目前仍待合并，影响了部分集成场景。
*   **Issue [#857](https://github.com/nearai/ironclaw/issues/857) (NEAR AI Hosted Prompt)**：关于托管环境下的 Prompt 定制需求，自 3月10日 提出以来尚未有明确指派或修复 PR。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-17)

这里是 **LobsterAI** (网易有道开源 AI 智能体框架) 的项目动态日报。

## 1. 今日速览
LobsterAI 今日发布了 **v2026.3.16** 版本，重点修复了 Windows 平台的兼容性问题，并对核心 OpenClaw 引擎进行了多处稳定性增强。项目活跃度极高，过去 24 小时内共有 **14 条 PR 更新**（其中 12 条已合并），显示开发团队正在高频迭代以修复上线初期的问题。社区反馈热烈，**7 条新 Issues** 主要集中在对第三方模型（如 GLM5）的支持、系统稳定性以及潜在的 UI 抄袭争议上。整体而言，项目正处于快速排错与功能补齐阶段。

## 2. 版本发布
### [Release v2026.3.16](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.3.16)
今日发布的正式版本包含以下重要更新：
*   **Windows 兼容性修复**：解决了 OpenClaw runtime 在 Windows 环境下的构建与启动失败问题 ([PR #261](https://github.com/netease-youdao/LobsterAI/pull/261), [PR #279](https://github.com/netease-youdao/LobsterAI/pull/279))。
*   **破坏性变更/迁移注意**：部分用户升级后出现配置丢失报错 (`No API key found for provider "lobster"`)，建议用户检查 `Auth store` 目录权限，必要时需重新初始化 API Key (参考 [Issue #452](https://github.com/netease-youdao/LobsterAI/issues/452))。

## 3. 项目进展
今日合并了 **12 个 Pull Requests**，显著提升了系统的稳定性与 IM 连接可靠性：
*   **IM 连接稳定性**：修复了钉钉定时任务不发送消息 ([PR #449](https://github.com/netease-youdao/LobsterAI/pull/449))、IM 通道消息不实时创建会话 ([PR #436](https://github.com/netease-youdao/LobsterAI/pull/436))、以及快速切换开关导致 UI 状态不一致 ([PR #439](https://github.com/netease-youdao/LobsterAI/pull/439)) 等问题。
*   **功能增强**：
    *   OpenClaw 引擎优化，修复图片传递逻辑并增强非视觉模型兼容性 ([PR #437](https://github.com/netease-youdao/LobsterAI/pull/437))。
    *   钉钉连接器升级至 v0.7.9，修复 JSON SessionContext 解析错误 ([PR #442](https://github.com/netease-youdao/LobsterAI/pull/442))。
    *   新增 Agent 身份设定默认模板，优化权限确认弹窗 UI ([PR #430](https://github.com/netease-youdao/LobsterAI/pull/430), [PR #445](https://github.com/netease-youdao/LobsterAI/pull/445))。
*   **代码质量**：修复了 Gateway WebSocket 断连自动重连机制 ([PR #443](https://github.com/netease-youdao/LobsterAI/pull/443))。

## 4. 社区热点
*   **[Issue #435 [OPEN] 这是套壳的嘛？界面高度相似](https://github.com/netease-youdao/LobsterAI/issues/435)**
    *   **热度**：评论数 2 条。
    *   **分析**：用户质疑 LobsterAI 与其他国产 Claw 类产品（如 Zeelin Claw）界面高度相似，怀疑存在代码抄袭或被“套壳”。这反映了社区对开源项目版权和原创性的高度关注，维护者可能需要澄清技术架构或 UI 设计的来源。
*   **[Issue #417 [OPEN] 在win11试用了以后，说说遇到的问题和BUG](https://github.com/netease-youdao/LobsterAI/issues/417)**
    *   **热度**：评论数 2 条。
    *   **分析**：这是一份详尽的“劝退”体验报告，涉及沙箱无法识别、无法控制本地浏览器、响应速度慢、技能市场配置缺失等问题。用户对比了竞品（阿里开源龙虾），指出版本在基础体验上存在较大差距。

## 5. Bug 与稳定性
今日报告的关键 Bug 如下，建议优先关注**升级失败**与**特定模型崩溃**问题：

| 严重程度 | Issue | 描述 | 状态 |
| :--- | :--- | :--- | :--- |
| **Critical** | [#452](https://github.com/netease-youdao/LobsterAI/issues/452) | **升级后 Agent 初始化失败**：从 v0.2.4 升级后报错 `No API key found`，可能导致用户数据不可用。 | OPEN |
| **High** | [#446](https://github.com/netease-youdao/LobsterAI/issues/446) | **GLM5 模型兼容性崩溃**：使用智谱 GLM5 执行复杂任务（如安装技能）时必现崩溃/停止响应。 | OPEN |
| **Medium** | [#441](https://github.com/netease-youdao/LobsterAI/issues/441) | **密码解析错误**：`.env` 文件未正确处理 `#` 等特殊字符，导致密码被截断。 | OPEN |
| **Low** | [#434](https://github.com/netease-youdao/LobsterAI/issues/434) | **性能问题**：生成长文本导致 App 卡顿，QQBot 频繁断链。 | OPEN |

## 6. 功能请求与路线图信号
*   **Mermaid 图表支持**：用户请求添加对 Mermaid 语法的渲染预览支持 ([Issue #450](https://github.com/netease-youdao/LobsterAI/issues/450))。目前项目已有大量 UI 优化 PR 合并，此类增强可视化的需求被采纳的可能性较高。
*   **新增 Provider 支持**：有一个待合并的 PR 旨在增加 AIHubMix Provider ([PR #438](https://github.com/netease-youdao/LobsterAI/pull/438))，表明社区正在推动扩展模型的兼容性。

## 7. 用户反馈摘要
从今日的 Issues 中可以提炼出以下核心痛点：
1.  **本地化控制能力不足**：用户期望通过 MCP 协议控制本地浏览器或软件，但目前即便安装了技能也无法生效，体验不及预期 ([#417](https://github.com/netease-youdao/LobsterAI/issues/417))。
2.  **模型兼容性与稳定性**：除了 OpenAI/Claude，国内模型（如 GLM5）的适配存在严重缺陷，容易导致任务中断 ([#446](https://github.com/netease-youdao/LobsterAI/issues/446))。
3.  **技能市场可用性差**：部分技能（如 Google 图片生成）下载后无法使用，缺乏 API Key 配置入口，被用户质疑“官方未测试” ([#417](https://github.com/netease-youdao/LobsterAI/issues/417))。
4.  **配置体验细节**：对特殊字符处理的疏忽 ([#441](https://github.com/netease-youdao/LobsterAI/issues/441)) 和升级迁移的报错 ([#452](https://github.com/netease-youdao/LobsterAI/issues/452)) 暴露了在边缘场景下的测试覆盖不足。

## 8. 待处理积压
*   **IM 消息顺序错乱**：目前有一个待合并的 PR ([#451](https://github.com/netease-youdao/LobsterAI/pull/451)) 试图修复 IM 频道消息顺序反转的问题。鉴于今日已修复多项 IM 相关 Bug，建议尽快合并此 PR 以彻底解决通讯模块稳定性。
*   **版本升级阻塞**：Issue [#452](https://github.com/netease-youdao/LobsterAI/issues/452) 涉及版本迁移的数据兼容性，如果不及时修复，将直接阻碍老用户向新版本迁移。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是为您生成的 **TinyClaw** 项目 2026年3月17日 动态日报。

---

# 📊 TinyClaw 项目动态日报 (2026-03-17)

### 1. 今日速览
TinyClaw 项目今日**活跃度极高**，标志着项目基础架构的一次重大升级。随着 **v0.0.14** 版本的发布，核心的定时任务系统完成了从系统级 Crontab 到应用内调度 的迁移，这为后续的 UI 控制打下了基础。社区贡献者 @jlia0 推动了 3 个关键 PR 的合并，显著增强了 TinyOffice 的 UI 模块化和 API 配置能力。然而，核心功能变更也引发了连锁反应，社区报告了 3 个与设置持久化及 Agent 心跳相关的 Bug，且有 7 个待合并 PR 正在排队，显示出项目正处于快速迭代与阵痛期并存的阶段。

---

### 2. 版本发布
#### 🚀 [v0.0.14](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.14)
**更新重点：调度系统重构**
- **核心变更**：将任务调度从系统 Crontab 迁移至基于 `croner` 的进程内调度。
- **新增功能**：
  - **Schedule Management System**：新增 REST API 和 CLI 命令，支持一次性 和周期性 任务。
  - **TinyOffice UI**：引入全屏日历视图，可视化管理和编辑 Agent 的日程安排。
  - **持久化**：所有日程安排现在支持持久化存储。
- **迁移注意**：依赖旧版系统级 Crontab 的部署可能需要手动迁移至新系统。

---

### 3. 项目进展
今日共有 **3 个 PR 被合并**，显著改善了前端架构和 API 健壮性：

- **[UI 架构重构] [PR #229](https://github.com/TinyAGI/tinyclaw/pull/229)**: 对 Agent 和 Task 组件进行了全面的模块化重构。将保存按钮移至具体 Tab 页（如 System-Prompt），优化了 Chat 视图的 UI 组件，提升了代码的可维护性。
- **[Bug 修复] [PR #230](https://github.com/TinyAGI/tinyclaw/pull/230)**: 修复了心跳 API 端点不持久化配置的问题。此前 API 的更改会被忽略，现已修复，确保 Web UI 对心跳的设置能被正确保存。
- **[新功能] [PR #225](https://github.com/TinyAGI/tinyclaw/pull/225)**: 配合 v0.0.14 发布，合入了内置调度管理系统，移除了对外部 Cron 的依赖。

---

### 4. 社区热点
今日的讨论主要集中在 **Agent 团队协作的稳定性** 与 **配置安全性** 方面：

- **[安全性] [PR #222](https://github.com/TinyAGI/tinyclaw/pull/222)**: 由 @jcenters 提出，指出 `POST /api/setup` 存在严重安全隐患。如果 Agent 拥有高权限，可能无意中通过 API 覆盖 `settings.json` 导致配置丢失。该 PR 提议增加保护机制，引发了关于 Agent 权限边界的讨论。
- **[稳定性] [PR #224](https://github.com/TinyAGI/tinyclaw/pull/224)** & **[PR #220](https://github.com/TinyAGI/tinyclaw/pull/220)**: 针对多 Agent 场景下的“无限循环”问题（如聊天室消息风暴导致 API 预算耗尽）提出了多重修复方案（速率限制、循环深度封顶、移除 Fan-out），反映了用户在构建复杂 Agent 团队时的强烈痛点。

---

### 5. Bug 与稳定性
今日报告了 3 个 Bug，主要集中在最新的 Web UI 和 CLI 设置流程中，严重程度较高：

- **🔴 High - CLI 设置导致 Agent 丢失**
  - **Issue**: [#228 [Bug]: Changing heartbeat resets complete agents](https://github.com/TinyAGI/tinyclaw/issues/228)
  - **详情**: 用户尝试通过 `tinyclaw setup` 修改心跳设置时，导致了整个 Agent 配置被重置/销毁。
  - **状态**: **暂无关联 Fix PR**，需紧急关注。

- **🟠 Medium - TinyOffice 设置不持久化**
  - **Issue**: [#227 [Bug]: TinyOffice - changed settings not persistent](https://github.com/TinyAGI/tinyclaw/issues/227)
  - **详情**: 在 Web UI 中禁用心跳并保存后，设置未生效。
  - **状态**: 可能与今日合并的 [PR #230](https://github.com/TinyAGI/tinyclaw/pull/230) 相关，需验证修复是否生效。

- **🟡 Low - 用户体验微瑕**
  - **Issue**: [#221](https://github.com/TinyAGI/tinyclaw/pull/221) (PR中提及)
  - **详情**: Agent 返回空消息时，Telegram 频道会显示 "(Silent)" 通知，干扰用户体验。

---

### 6. 功能请求与路线图信号
- **📌 Agent 收藏功能**
  - **Issue**: [#226 [Feature]: TinyOffice - Add STAR feature to agents](https://github.com/TinyAGI/tinyclaw/issues/226)
  - **诉求**: 用户 @Chavell3 建议在拥有大量 Agent 时，增加“收藏/星标”功能以快速定位主力 Agent。这反映了 TinyClaw 在管理大规模 Agent 池时的真实需求。
- **🌐 Web 端初始化**
  - **PR**: [#214 feat: add web-based setup](https://github.com/TinyAGI/tinyclaw/pull/214)
  - **进展**: 虽未合并，但引入了 `--skip-setup` 和 `/connect` 页面，预示着项目正试图移除对 CLI 初始化的强依赖，转向完全的 Web 端管理。

---

### 7. 用户反馈摘要
- **痛点 (CLI 稳定性)**: 用户 @Chavell3 反馈 CLI 的 `setup` 命令过于“激进”，直接破坏了现有配置（Issue #228），表明 CLI 的交互逻辑缺乏对现有数据的保护机制。
- **痛点 (配置同步)**: Web UI 的修改（如心跳开关）未能即时或持久地反映到底层（Issue #227），这削弱了用户对 TinyOffice 控制台的信任度。
- **场景 (团队协作)**: 开发者 @jcenters 提交的一系列 PR 表明，在真实的多 Agent 协作场景中，**API 预算耗尽** 和 **死循环** 是目前最致命的稳定性威胁。

---

### 8. 待处理积压
- **⚠️ 紧急**: [Issue #228](https://github.com/TinyAGI/tinyclaw/issues/228) (CLI setup 销毁配置) 目前未见直接修复方案，建议维护者优先确认复现路径。
- **🔄 待合并**: [PR #214](https://github.com/TinyAGI/tinyclaw/pull/214) (Web Setup) 和 [PR #218](https://github.com/TinyAGI/tinyclaw/pull/218) (进程超时查杀) 均处于 Open 状态且对提升易用性和稳定性至关重要，建议尽快 Review 合并。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-17)

**分析师：** AI 开源项目观察员
**数据源：** github.com/moltis-org/moltis

---

### 1. 今日速览
Moltis 项目在过去 24 小时内保持了**高度活跃**的开发状态，共产生了 7 次显著的代码与议题变动。虽然没有新版本发布，但社区与核心开发者在增强 Agent 工具链（文件分享、工具名称兼容性）和修复环境配置问题（IPv6、路径空格）方面进行了大量工作。今日共有 3 个新的功能增强/修复 PR 提交，且社区对 Docker 环境下运行 MCP 的需求表现出了强烈的兴趣。整体来看，项目正处于功能迭代与稳定性修补的并行阶段。

### 2. 版本发布
*   **无新版本发布**。

### 3. 项目进展
尽管今日没有 PR 被合并，但提交的 PR 主要集中在提升系统的鲁棒性和兼容性，展现了维护者对细节的关注：

*   **增强 Agent 工具调用兼容性 ([PR #444](https://github.com/moltis-org/moltis/pull/444))**
    *   **内容：** 修复了部分 LLM 提供商（如 Kimi K2.5）在并行调用工具时会篡改工具名称（添加后缀或前缀）导致 Moltis 无法识别的问题。
    *   **意义：** 显著提升了 Moltis 接入不同 LLM 后端时的鲁棒性，解决了因模型“幻觉”修改工具名导致的调用失败，是多模型支持的重要修补。
*   **修复本地路径空格问题 ([PR #445](https://github.com/moltis-org/moltis/pull/445))**
    *   **内容：** 修复了 Claude hook 在包含空格的目录路径下运行报错的问题。
    *   **意义：** 改善了开发者体验（DX），消除了 Windows 或 macOS 用户常见的一个环境陷阱。
*   **功能扩展：文件分享 ([PR #353](https://github.com/moltis-org/moltis/pull/353))**
    *   **内容：** 增加了 `send_document` 工具，允许向频道发送 PDF、CSV、DOCX 等多种格式文件，并包含安全扩展名黑名单机制。
    *   **意义：** 扩展了 Moltis 作为助手的数据交互能力，使其不仅仅局限于文本和图片。

### 4. 社区热点
今日最受关注的讨论集中在 **Docker 环境下的扩展性**：

*   **热门 Issue：Docker 镜像集成 Node.js/npx ([Issue #118](https://github.com/moltis-org/moltis/issues/118))**
    *   **数据：** 👍 2 | 评论 2
    *   **分析：** 用户强烈希望在官方 Docker 镜像中预装 Node.js 环境，以便直接运行 MCP (Model Context Protocol) 服务器。这表明用户倾向于将 Moltis 作为一个全能的容器化 AI 中枢，现有的纯净镜像限制了他们通过 npm 快速集成外部工具的能力。这是一个高价值的增强请求。

### 5. Bug 与稳定性
今日报告了一个涉及网络配置的 Bug，且已有相关修复 PR：

*   **🔴 严重: IPv6 绑定限制 ([Issue #447](https://github.com/moltis-org/moltis/issues/447))**
    *   **描述：** 报告指出 Moltis 目前不允许或未正确处理 IPv6 的绑定。
    *   **状态：** [OPEN] - 刚刚报告。
    *   **影响：** 对于需要在仅支持 IPv6 的环境或现代云基础设施中部署的用户来说，这是一个阻断性问题。
*   **🟡 中等: 构建/开发环境路径问题 ([Issue #441](https://github.com/moltis-org/moltis/issues/441))**
    *   **描述：** 在标准 Cargo 构建中，CSS 路径解析失败。
    *   **状态：** [OPEN] - 影响开发者从源码构建的体验。
*   **✅ 已修复 (待合并): 空格路径错误 ([PR #445](https://github.com/moltis-org/moltis/pull/445))**
    *   针对路径包含空格导致的崩溃已提交修复代码。

### 6. 功能请求与路线图信号
结合 Issues 和 PRs，可以看出项目近期的发展脉络：

1.  **多模态与工具链深化：** [PR #353](https://github.com/moltis-org/moltis/pull/353) (send_document) 显示项目正在加强文件处理能力。
2.  **MCP 生态集成：** [Issue #118](https://github.com/moltis-org/moltis/issues/118) 请求在 Docker 中支持 npx，这释放了强烈信号——用户希望 Moltis 成为 MCP 协议的天然宿主。若此功能被采纳，将极大提升 Moltis 在 AI Agent 生态中的地位。
3.  **构建体验优化：** [Issue #441](https://github.com/moltis-org/moltis/issues/441) 提及的 CSS 路径自动化问题，反映了社区希望构建过程更加标准化（standard Cargo builds），减少特殊配置。

### 7. 用户反馈摘要
*   **痛点：** Docker 用户感到受限，无法在容器内通过 npx 运行额外的工具服务。
*   **场景：** 用户正在尝试将 Moltis 集成到更复杂的自动化流程中，涉及 PDF 处理（PR #353）和外部模型上下文协议（Issue #118）。
*   **兼容性：** 有用户遇到了特定模型修改 API 调用格式的兼容性问题，表明 Moltis 正在被用于对接多种非标准或行为怪异的 LLM 后端。

### 8. 待处理积压
*   **关注 [PR #353](https://github.com/moltis-org/moltis/pull/353)：** 该 PR 已创建 10 天左右，引入了重要的文件发送功能，目前仍未合并。建议维护者尽快 Review 或反馈 Blocking issues，以免影响功能上线。
*   **关注 [Issue #118](https://github.com/moltis-org/moltis/issues/118)：** 此 Issue 已开放一个月且有点赞支持，尚未有官方明确回复是否纳入路线图，建议社区经理进行回应。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

以下是基于 CoPaw 项目 2026-03-17 的 GitHub 数据生成的项目动态日报。

---

# CoPaw 项目动态日报 (2026-03-17)

## 1. 今日速览
CoPaw 项目今日保持了**极高的社区活跃度**，过去24小时内共有 50 条 Issue 更新和 50 条 PR 更新，显示项目正处于快速迭代与功能扩展的高峰期。然而，**稳定性是当前面临的主要挑战**，大量反馈集中在 v0.0.7 版本的上下文记忆压缩、多模态识别以及特定平台（飞书/钉钉）的频道连接问题上。社区贡献方面，围绕**MCP 协议支持、安全性增强及 Web 认证**的 Pull Requests 成为焦点，多个 First-time contributors 提交了高质量的修复代码。总体而言，项目在加速跑向功能完善的同时，亟需通过一轮 Bug 修复来稳定用户体验。

## 2. 版本发布
**无新版本发布。**
当前最新版本仍为 v0.0.7。考虑到今日大量关于 v0.0.7 的 Bug 反馈（特别是记忆压缩相关的回归问题），预计维护者可能正在收集问题以发布 v0.0.7.post1 或 v0.0.8。

## 3. 项目进展
今日共有 **24 条 PR 被合并或关闭**，显著推进了以下方面的进展：

*   **控制台与交互体验优化**：
    *   [PR #1579](https://github.com/agentscope-ai/CoPaw/pull/1579) [Merged]: 增强了 UI 体验，现在鼠标悬停在助手消息气泡上会显示生成该回复的模型名称和 Provider。
    *   [PR #1571](https://github.com/agentscope-ai/CoPaw/pull/1571) [Merged]: 实现了 `/console/chat` 端点的流式响应，提升了前端对话的流畅度。
*   **跨频道稳定性修复**：
    *   [PR #1583](https://github.com/agentscope-ai/CoPaw/pull/1583) [Merged]: 修复了 Discord 频道的 debounce（防抖）逻辑，并将其推广至所有频道基类，解决了同一用户不同会话消息混淆的问题。
*   **钉钉集成修复**：
    *   [PR #1554](https://github.com/agentscope-ai/CoPaw/pull/1554) [Merged]: 修复了钉钉富文本消息解析时空白文本块导致 LLM API 报错的问题（对应 Issue #1303）。

## 4. 社区热点
今日讨论最集中、活跃度最高的议题集中在**功能性讨论与核心体验问题**：

1.  **内置技能与 MCP 扩展讨论** ([Issue #280](https://github.com/agentscope-ai/CoPaw/issues/280))
    *   **热度**: 19 评论
    *   **分析**: 社区正在激烈讨论 CoPaw 应该预装哪些 "开箱即用" 的技能和 MCPs。这反映了用户希望从繁琐的配置中解脱出来，追求更极简的部署体验。建议项目方关注此讨论以确定默认集成列表。
2.  **飞书频道“延迟回复”顽疾** ([Issue #1345](https://github.com/agentscope-ai/CoPaw/issues/1345))
    *   **热度**: 7 评论
    *   **分析**: 用户报告飞书 Bot 经常回答“上一个”问题，呈现出典型的异步处理或上下文串扰问题。这严重影响了多轮对话的体验，是 IM 频道集成中急需解决的并发/状态管理问题。
3.  **上下文记忆与压缩缺陷** ([Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222), [Issue #1596](https://github.com/agentscope-ai/CoPaw/issues/1596))
    *   **热度**: 6 评论 / 1 评论 (新)
    *   **分析**: v0.0.7 引入的记忆压缩机制似乎引入了回归 Bug，导致消息数量不匹配或上下文“失忆”。这是今日技术反馈中最核心的痛点。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在 **上下文管理、工具执行和环境兼容性**，部分已有社区修复：

| 严重程度 | 问题描述 | 涉及组件 | 状态/Fix PR |
| :--- | :--- | :--- | :--- |
| **Critical** | **Agent 执行中途静默停止** ([Issue #1270](https://github.com/agentscope-ai/CoPaw/issues/1270))，无报错日志，影响任务完成率。 | Core / Memory | Open |
| **Critical** | **消息压缩导致 API 调用失败** ([Issue #1222](https://github.com/agentscope-ai/CoPaw/issues/1222))，格式化后数量不匹配。 | Core / Backend | **Fix PR** [PR #1557](https://github.com/agentscope-ai/CoPaw/pull/1557) |
| **High** | **Windows GBK 编码崩溃** ([Issue #1593](https://github.com/agentscope-ai/CoPaw/issues/1593))，日志输出 Emoji 时触发。 | Logging / CLI | **Fix PR** [PR #1601](https://github.com/agentscope-ai/CoPaw/pull/1601) |
| **High** | **Write_file 工具截断内容** ([Issue #1563](https://github.com/agentscope-ai/CoPaw/issues/1563))，大文件写入仅保留 19%。 | Skills / Tools | Open |
| **High** | **Shell 命令导致会话卡死** ([Issue #1136](https://github.com/agentscope-ai/CoPaw/issues/1136))，Windows 环境下复现率高。 | Skills / OS | Open |
| **Medium** | **MCP 子进程不继承环境变量** ([Issue #1605](https://github.com/agentscope-ai/CoPaw/issues/1605))，导致无法读取 API Key。 | MCP / Config | Open |
| **Medium** | **多 Agent 心跳启动崩溃** ([Issue #1597](https://github.com/agentscope-ai/CoPaw/issues/1597))，配置为空时属性错误。 | Multi-Agent | **Fix PR** [PR #1600](https://github.com/agentscope-ai/CoPaw/pull/1600) |

## 6. 功能请求与路线图信号
*   **多 Agent 支持** ([Issue #1587](https://github.com/agentscope-ai/CoPaw/issues/1587)): 用户强烈呼吁支持多 Agent 协作，这符合当前 AI 智能体的发展趋势。
*   **Web 后台认证** ([Issue #1588](https://github.com/agentscope-ai/CoPaw/issues/1588)): 用户希望 Web UI 支持登录验证，目前只能依赖 Nginx。**值得注意**，已有相关实现 [PR #1329](https://github.com/agentscope-ai/CoPaw/pull/1329) 正在 Open 状态，极有可能在未来版本中合入。
*   **中文适配优化** ([Issue #1586](https://github.com/agentscope-ai/CoPaw/issues/1586)): 用户指出文档和更新日志缺乏中文支持，考虑到 CoPaw 的主要用户群体，这是提升满意度的关键。
*   **ACP 协议支持** ([PR #1544](https://github.com/agentscope-ai/CoPaw/pull/1544)): 正在开发中，旨在支持调用 OpenCode、Gemini CLI 等外部 Agent，这将极大拓展 CoPaw 的生态边界。

## 7. 用户反馈摘要
*   **痛点 - 上下文“失忆”与延迟**: 多位用户反馈在长对话或使用压缩功能后，Agent 表现出“痴呆”或答非所问（回复上一轮的内容），严重依赖上下文记忆的场景（如代码生成、长文分析）体验受损。
*   **痛点 - 部署复杂度**: 尽管支持 Docker，但时区设置、Windows 编码、依赖环境变量等问题让非技术用户在部署时感到挫败。
*   **满意点 - 灵活性**: 用户对 CoPaw 支持自定义 Skill 和 MCP 表示认可，认为这是其区别于其他封闭产品的核心优势，希望能预置更多常用工具。

## 8. 待处理积压
*   **多模态识别失效** ([Issue #918](https://github.com/agentscope-ai/CoPaw/issues/918)): 飞书图片识别问题自 03-08 报告以来尚未解决，影响了多模态能力的落地。
*   **定时任务表达式兼容性** ([Issue #1510](https://github.com/agentscope-ai/CoPaw/issues/1510)): 复杂的 Cron 表达式（如范围步进）不被支持，限制了高级调度功能。
*   **Cline API 连接失败** ([Issue #1287](https://github.com/agentscope-ai/CoPaw/issues/1287)): 3-11 报告的连接问题仍未有定论，可能影响部分 Provider 的接入。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是为您生成的 **ZeptoClaw** 项目 2026年3月17日 动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-03-17)

### 1. 今日速览
ZeptoClaw 今日保持较高的开发活跃度，核心关注点集中在**多模态处理的稳定性**与**企业级部署支持**。虽然今日无新版本发布，但社区贡献了关键的企业级适配（Google Vertex AI, Podman 支持）和协议扩展（ACP）。值得关注的是，图像处理在 Agent 工具循环中的 Bug（#368）成为今日反馈的焦点，此前提交的修复 PR（#355）目前处于关闭状态且未合并，该问题尚未解决。整体来看，项目正在向更复杂的工具链和云端集成方向演进。

### 2. 版本发布
*   **无新版本发布** (最近一次发布需查看历史记录)。

### 3. 项目进展
今日无合并代码（Merged PR），项目进展主要体现在新功能提案的讨论与现有 Bug 的排查：

*   **🔥 企业级云原生支持 (PR #364)**:
    *   项目作者 @qhkm 提交了集成 **Google Vertex AI** 的 PR。该功能允许通过 Bearer Token 认证调用 Gemini 模型，且未引入新的依赖项，显示了项目在保持轻量化的同时扩展主流 LLM 后端的决心。
    *   [链接: qhkm/zeptoclaw PR #364](https://github.com/qhkm/zeptoclaw/pull/364)
*   **🔌 通信协议扩展 (PR #356)**:
    *   贡献者 @starsy 提出了 **ACP (Agent Client Protocol)** 的实现方案，包含 stdio 和 HTTP 两种模式。这将极大地提升 ZeptoClaw 作为子进程被其他系统调用的能力，是迈向"可组合 AI 架构"的重要一步。
    *   [链接: qhkm/zeptoclaw PR #356](https://github.com/qhkm/zeptoclaw/pull/356)
*   **⚠️ 多模态修复受阻 (PR #355)**:
    *   旨在修复图片处理问题的 PR #355 已被关闭，但未能合并代码。这表明当前的修复方案可能未达预期或需要重写，相关问题（#368）依然悬而未决。
    *   [链接: qhkm/zeptoclaw PR #355](https://github.com/qhkm/zeptoclaw/pull/355)

### 4. 社区热点
今日社区讨论主要集中在以下两个技术痛点，均涉及底层兼容性：

1.  **Issue #368: Agent 循环中的图片路径解析失败**
    *   **热度**: 🔥 高 (核心功能受损)
    *   **分析**: 用户 @rafaellin 指出在多轮对话的工具调用循环中，图片未能转为 base64，导致 LLM API 报错。这反映了 ZeptoClaw 在处理复杂多模态上下文传递时存在上下文丢失的缺陷。
    *   [链接: qhkm/zeptoclaw Issue #368](https://github.com/qhkm/zeptoclaw/issues/368)
2.  **Issue #369: Rootless Podman 环境下的权限拒绝**
    *   **热度**: 🛠️ 中 (DevOps/CI 场景)
    *   **分析**: 用户 @taqtiqa-mark 提供了非常详尽的根因分析和修复建议（重映射 CARGO_HOME）。这显示了高级用户正在尝试将 ZeptoClaw 引入更严格的安全容器环境（Rootless）。
    *   [链接: qhkm/zeptoclaw Issue #369](https://github.com/qhkm/zeptoclaw/issues/369)

### 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

*   **🔴 P0 - 核心功能缺陷 (OPEN)**
    *   **Issue #368**: [Bug] 工具循环中图片路径未解析为 base64。
    *   **状态**: 之前的修复尝试 (PR #355) 已关闭，目前**无有效修复 PR**。这会直接导致包含图片的复杂 Agent 任务失败。
*   **🟠 P2 - 开发环境/CI 阻塞 (OPEN)**
    *   **Issue #369**: [Bug] Lint 脚本在 Rootless Podman 中因权限失败。
    *   **状态**: 用户已提出可行的 Workaround (环境变量 + 挂载点重映射)，等待官方采纳。

### 6. 功能请求与路线图信号
*   **Google Vertex AI 集成**: 鉴于 PR #364 由核心维护者提交，该功能极大概率将在下一版本中发布，标志着项目正式支持 GCP 生态。
*   **ACP 协议支持**: PR #356 处于 Open 状态，若合并，ZeptoClaw 将具备更标准的 Agent 通信能力，可能成为后续版本的重点特性。
*   **信号总结**: 路线图明显倾向于**"云端大模型适配"** (Vertex AI) 与 **"标准化协议接口"** (ACP)。

### 7. 用户反馈摘要
*   **痛点**: 多模态（图片）在连续对话（循环）中的持久化处理极其脆弱，文件路径与 Base64 数据的转换逻辑存在断层。
*   **场景**: 用户正尝试在本地容器化环境（Podman）中进行开发和 CI 检测，且对非 Root 权限运行有强需求（安全合规）。
*   **评价**: Bug 报告质量极高（如 #369），说明 ZeptoClaw 吸引了一批具备深层技术背景的 Developer 用户群。

### 8. 待处理积压
*   **需紧急关注 - Issue #368**: 图片解析问题导致 Agent 无法正常处理多模态多轮对话。鉴于修复 PR #355 已关闭，建议维护者重新审视该问题的核心逻辑，或开启新的 PR。
*   **待合并 - PR #364 & #356**: 这两个大型 Feature PR 均处于 Open 状态，建议优先 Review Vertex AI 提供商的集成代码，以尽快支持企业级用户需求。

---

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-17)

**分析周期**：2026-03-16 至 2026-03-17
**项目分析师**：AI 开源观察员

---

### 1. 今日速览
EasyClaw 今日发布了具有里程碑意义的 **v1.7.0** 版本，标志着项目进入了新的迭代阶段。然而，新版本的发布伴随着 Windows 平台的适配问题，导致社区活跃度显著上升。过去 24 小时内共产生 3 条 Issue 更新（2 新开/1 关闭），用户反馈主要集中在升级后的连接故障及跨平台构建需求。虽然 PR 合并数为 0，但单一 Bug 报告 (#18) 在短时间内积累了 4 条评论，显示出用户对新版本的高度敏感性和维护者响应的紧迫性。

### 2. 版本发布
*   **版本号**：v1.7.0
*   **发布时间**：2026-03-17 (数据统计周期内)
*   **更新重点**：根据 Release Notes 及社区反馈，本版本主要涉及底层连接机制或认证模块的调整（推测与修复 #16 OAuth 问题有关）。
*   **破坏性变更/迁移注意**：
    *   **macOS 用户**：需特别注意 **Gatekeeper 安全拦截**问题。若出现“已损坏”提示，并非文件损坏，而是由于应用未签名，需通过终端执行命令移除隔离属性（详见 Release 说明）。
    *   **Windows 用户**：从 v1.6.8 升级至 v1.7.0 后可能出现连接中断问题 (Issue #18)，建议暂时谨慎升级或关注官方修复补丁。

🔗 **链接**：[EasyClaw v1.7.0 Release](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.0)

### 3. 项目进展
今日无已合并的 Pull Requests。项目进展主要体现在**问题修复的验证阶段**：
*   **OAuth 修复落地**：Issue #16 (OpenAI OAuth 问题) 于今日正式关闭，这表明 v1.7.0 版本的核心目标之一是修复 API 认证层面的缺陷，目前该问题已通过新版本解决。

### 4. 社区热点
今日讨论最热烈的 Issue 是 **#18 [OPEN] windows系统，从1.6.8升级到1.7.0后链接不上了**。
*   **热度数据**：4 条评论，0 点赞。
*   **诉求分析**：这是 v1.7.0 发布后首个阻塞性问题。用户在升级后立即遭遇服务不可用，表明新版本在 Windows 平台的兼容性测试可能存在遗漏。高互动量反映了该问题的普遍性或紧迫性。

🔗 **链接**：[Issue #18 讨论区](https://github.com/gaoyangz77/easyclaw/issues/18)

### 5. Bug 与稳定性
今日报告的关键 Bug 如下，按严重程度排序：

*   **🔴 严重**：**Windows 平台升级后连接失败 (Issue #18)**
    *   **现象**：用户从 1.6.8 升级至 1.7.0 后无法建立连接。
    *   **状态**：[OPEN] 暂无关联 Fix PR。
    *   **影响**：阻塞 Windows 用户使用核心功能。

*   **🟡 已解决**：**OpenAI OAuth 认证错误 (Issue #16)**
    *   **现象**：便携版和安装版均报 OAuth 错误。
    *   **状态**：[CLOSED] 已在 v1.7.0 中修复。

### 6. 功能请求与路线图信号
*   **需求：Windows 本地构建教程 (Issue #17)**
    *   **内容**：用户 `@584731180` 请求提供 Windows 版本的启动和打包教程。
    *   **分析**：这反映了部分高级用户希望参与调试（特别是针对 #18 这类连接问题）或进行二次开发的意愿。这不仅是文档需求，也暗示了项目在开发者友好的构建文档方面有所欠缺。
    *   **纳入预测**：短期内可能作为文档补充被接纳，有助于社区贡献者自行排查类似 #18 的 Bug。

🔗 **链接**：[Issue #17 功能请求](https://github.com/gaoyangz77/easyclaw/issues/17)

### 7. 用户反馈摘要
从今日的 Issue 互动中提炼出以下用户画像与痛点：
*   **升级意愿强但风险大**：用户紧跟最新版本（v1.7.0），但缺乏灰度测试导致升级后出现硬伤（连接断开）。
*   **macOS 用户体验门槛**：未签名应用导致的“文件已损坏”提示依然是 macOS 新手用户的主要障碍，需要在文档或签名流程上优化。
*   **开发者社区雏形**：用户开始询问源码构建教程，说明 EasyClaw 正在吸引试图通过“自行编译”来解决问题的高级用户群体。

### 8. 待处理积压
*   **🚨 紧急**：[Issue #18](https://github.com/gaoyangz77/easyclaw/issues/18) - Windows 连接问题目前处于 Open 状态，且无 PR 提交。建议维护者立即介入复现，因为这直接影响核心功能的可用性。
*   **📝 文档**：[Issue #17](https://github.com/gaoyangz77/easyclaw/issues/17) - 构建教程请求，虽然优先级低于 Bug 修复，但完善文档能促进社区自解决 Bug（如 #18）。

---
**分析师结语**：EasyClaw v1.7.0 虽修复了 OAuth 痼疾，但引出了 Windows 平台的连接回归问题。当前项目健康度处于**警戒状态**，急需修复 Windows 连接问题以稳定用户信心。建议优先处理 Issue #18，并补充构建文档以赋能社区。

</details>