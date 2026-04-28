# OpenClaw 生态日报 2026-04-29

> Issues: 500 | PRs: 500 | 覆盖项目: 14 个 | 生成时间: 2026-04-28 22:16 UTC

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

以下是根据您提供的 GitHub 数据为您生成的 **OpenClaw 项目动态日报 (2026-04-29)**：

---

# 📊 OpenClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
OpenClaw 在过去 24 小时内维持了**极高的社区活跃度**，Issues 和 Pull Requests 更新双双突破 500 条。社区处于“高输入、高积压”状态，24 小时内新增及活跃 Issue 达 468 条，但仅有 32 条被关闭；PR 待合并数量高达 461 条，合并/关闭 39 条。项目刚刚发布了 `v2026.4.26` 新版本，引入了浏览器实时语音网关等重磅特性，但随之而来也暴露了路由、UI 及多通道兼容性等回归问题，亟待团队集中精力进行收敛和修复。

## 2. 版本发布
### **v2026.4.26** 
- **更新内容**：
  - **Control UI/Talk 通信升级**：增加通用浏览器实时传输契约，支持带受限临时 Token 的 Google Live 浏览器 Talk 会话。
  - **网关中继优化**：为纯后端的实时语音插件添加了 Gateway 中继支持。
- **社区贡献**：特别感谢 `@VACInc` 对此次实时语音通信功能的贡献。

## 3. 项目进展
今日项目整体主要围绕**新特性适配、会话状态稳定性及多平台体验优化**推进，共计处理了约 39 个 PR/Issue。重点合并及推进的模块包括：
- **多平台桌面端推进**：长期呼唤的 Linux 原生应用取得了重大进展（[PR #59859](https://github.com/openclaw/openclaw/pull/59859)），通过 GTK 原生实现补齐了 Linux 桌面端管理的短板。
- **多通道消息体验优化**：针对 Slack 的会话路由（[PR #64080](https://github.com/openclaw/openclaw/pull/64080)）、iMessage 的反应过滤（[PR #60677](https://github.com/openclaw/openclaw/pull/60677)）以及全通道的“免打扰”配置（[PR #42400](https://github.com/openclaw/openclaw/pull/42400)）均提交了重要修复。
- **核心调度与内存泄漏修复**：清理了子代理的过期状态（[PR #67946](https://github.com/openclaw/openclaw/pull/67946)），修复了计划任务删除后仍触发的顽疾（[PR #64110](https://github.com/openclaw/openclaw/pull/64110)）。

## 4. 社区热点
- **[最热议] 跨平台客户端需求**：[Issue #75](https://github.com/openclaw/openclaw/issues/75) (评论 98, 👍73)。自年初提出以来热度不减，用户强烈呼吁提供与 macOS 体验一致的 Linux 和 Windows 客户端。
- **[环境部署] Docker 内部署失败问题**：[Issue #14593](https://github.com/openclaw/openclaw/issues/14593) (评论 27, 👍17)。由于官方 Docker 镜像未内置 `brew`，导致基于 brew 的 Skill 安装全面失败，引发大量运维人员吐槽。
- **[离谱硬编码] 代码合并审查疏漏**：[Issue #51429](https://github.com/openclaw/openclaw/issues/51429) (评论 11)。有开发者不小心将自己的工作路径 `/Users/wangtao` 硬编码进代码并被合并发布，引发社区对 CI/CD 审查机制的担忧。
- **[多模态架构] 文件名编码统一处理**：[Issue #48788](https://github.com/openclaw/openclaw/issues/48788) (评论 17)。针对飞书等渠道多编码（Shift-JIS, GB18030等）导致的文件名乱码问题，社区正在探讨建立集中式编码处理工具。

## 5. Bug 与稳定性
随着新版本发布，今日报告了大量行为异常和回归 Bug，系统稳定性面临一定考验：
- **🔴 P0 核心阻塞 / 系统崩溃**
  - **新版本 CPU 空转**：[Issue #73647](https://github.com/openclaw/openclaw/issues/73647)（已关闭）。v2026.4.26 在纯 Telegram 网关下引发 CPU 满载死循环。
  - **Agent 处理通道死锁**：[Issue #73581](https://github.com/openclaw/openclaw/issues/73581)。网关重启时导致 Agent 处理通道停滞数分钟且无超时恢复机制。
  - **Docker 容器命名冲突**：[Issue #51363](https://github.com/openclaw/openclaw/issues/51363)。同一主机部署多个实例时，沙箱容器名称冲突导致服务崩溃。
- **🟠 P1 会话与上下文混乱**
  - **上下文错乱**：[Issue #32296](https://github.com/openclaw/openclaw/issues/32296)。Agent 总是回复上一条消息而非当前消息，导致对话错位。
  - **僵尸 Agent 泄漏**：[Issue #48573](https://github.com/openclaw/openclaw/issues/48573)。父 Agent 终止后，嵌入式运行的子 Agent 仍会以僵尸状态污染后续会话。
  - **幻觉伪造成功**：[Issue #41304](https://github.com/openclaw/openclaw/issues/41304)。Agent 拒绝调用写入/执行工具，却向用户返回“操作成功”的幻觉反馈。
- **🟡 P2 渠道与媒体兼容性**
  - **飞书视频投递 502**：[Issue #49855](https://github.com/openclaw/openclaw/issues/49855)。iOS 端发送的视频在飞书端类型识别错误导致 502。
  - **WhatsApp 群聊请求 400**：[Issue #51593](https://github.com/openclaw/openclaw/issues/51593)。Moonshot 模型在 WhatsApp 群聊中出现 Tool Call ID 重复。

## 6. 功能请求与路线图信号
- **网络与安全控制增强**：用户呼吁增加针对私有网络的访问开关（[Issue #39604](https://github.com/openclaw/openclaw/issues/39604)），以及执行安全的黑名单模式（[Issue #71097](https://github.com/openclaw/openclaw/issues/71097)），反映出企业级内网部署需求上升。
- **配置文件格式拓展**：支持 YAML 作为配置格式的呼声持续高涨（[Issue #45758](https://github.com/openclaw/openclaw/issues/45758)），有望提升运维可读性。
- **Cron 定时任务重构**：希望绕过 LLM 直接执行底层命令以提升稳定性（[Issue #18160](https://github.com/openclaw/openclaw/issues/18160)），结合今日的 [PR #64110](https://github.com/openclaw/openclaw/pull/64110)，定时任务系统的全面重构或将在下个版本落地。

## 7. 用户反馈摘要
- **痛点 1：多 Agent 编排极其脆弱**。用户反馈在进行并发代理操作时，极易出现配置覆盖、Session 锁死和任务脱离（[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)）。
- **痛点 2：视觉与媒体能力存在“盲区”**。用户发送的图片/视频经常在处理链路的最后一环丢失，Agent 却自始至终报告“处理成功”（[Issue #51857](https://github.com/openclaw/openclaw/issues/51857)，[Issue #41744](https://github.com/openclaw/openclaw/issues/41744)）。
- **痛点 3：私有化部署体验割裂**。包括 1Password/Secrets 管理支持不足（[Issue #17311](https://github.com/openclaw/openclaw/issues/17311)），以及 AWS 部署文档缺失（[Issue #13597](https://github.com/openclaw/openclaw/issues/13597)），说明开源社区对生产级云原生指南的需求迫切。

## 8. 待处理积压
*提示：目前 PR 与 Issue 积压严重（500+ 更新，解决率不足 10%），以下重要问题长期悬而未决，需核心团队重点关注：*
- **[Issue #75](https://github.com/openclaw/openclaw/issues/75)**：Linux/Windows 客户端需求，已开放 4 个月，虽然已有 [PR #59859](https://github.com/openclaw/openclaw/pull/59859) 提交 Linux 版本，但需尽快排期 Review。
- **[Issue #17311](https://github.com/openclaw/openclaw/issues/17311)**：密钥管理提供器，停滞 2 个月，阻碍了企业级凭证安全隔离的进程。
- **[Issue #43367](https://github.com/openclaw/openclaw/issues/43367) & [Issue #48573](https://github.com/openclaw/openclaw/issues/48573)**：多代理并发和僵尸进程泄漏问题。如果 OpenClaw 要向复杂的 Multi-Agent 工作流演进，这类底层架构阻塞问题必须优先解决。

---

## 横向生态对比

以下是为您生成的 2026 年 4 月 29 日 AI 智能体与个人 AI 助手开源生态横向对比分析报告：

# 📊 个人 AI 助手与自主智能体开源生态横向对比报告 (2026-04-29)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从单一对话向多模态、多端协同演进的高速扩张期**。**“全渠道融合”**（无缝接入 Discord、微信、Telegram 等数十个 IM 平台）已成为行业标配；而底层架构正经历从单体脚本向**多智能体编排** 的深水区迈进。然而，繁荣的表象下隐藏着工程化落地的阵痛：智能体**记忆系统脆弱**、**并发上下文极易污染**以及**沙箱环境安全隔离不足**，构成了当前阻碍项目步入企业级生产的三大共性技术壁垒。

## 2. 各项目活跃度对比

*(注：PicoClaw、TinyClaw、EasyClaw 过去 24 小时无实质活动，未列入下表)*

| 项目名称 | 活跃 Issues | 活跃 PRs | 版本发布 | 社区健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 468 | 500+ | `v2026.4.26` | 🟡 **高负载/高积压**：功能迭代极快，但新版本引入大量回归 Bug，解决率不足 10%。 |
| **Hermes Agent** | 50 | 50 | 无 | 🔴 **高危/震荡期**：安全漏洞频发（SSRF、沙箱逃逸），网关极易崩溃，亟需代码审计。 |
| **CoPaw (QwenPaw)**| 43 | 31 | `v1.1.5-beta.1` | 🟢 **健康迭代**：前后端性能大幅优化，ACP 协议引入，处于新版本测试冲刺阶段。 |
| **IronClaw** | 30 | 45 | 无 | 🟡 **重构期阵痛**：核心推进 "Reborn" 架构，底层大换血导致 CI 频繁报错。 |
| **NanoClaw** | 8 | 23 | 无 | 🟢 **稳健上升**：代码吞吐量高，聚焦多渠道 Bug 修复与防崩溃机制，质量把控严格。 |
| **LobsterAI** | 3 | 47 | 无 | 🟢 **密集修 bug**：前沿模型适配极快，前后端架构解耦顺利，处于打磨期。 |
| **Moltis** | 高活跃 | 11 merged | `20260428.03` | 🟢 **功能大爆发**：引入应用内自更新、命令面板及周边生态迁移工具。 |
| **ZeroClaw** | 16 | 49 (48 Open)| 无 | 🟡 **里程碑冲刺**：48个 PR 堆积待合并，微内核架构 RFC 刚落地，面临整合大考。 |
| **NanoBot** | 13 (3 new)| 35 | 无 | 🟢 **高质量沉淀**：积压清理顺利，底层自定义能力与多渠道适配稳步推进。 |
| **NullClaw** | 1 | 3 | 无 | 🟡 **紧急修复**：受底层语言 版本升级拖累，线上出现严重 CPU 空转回归。 |
| **ZeptoClaw** | 0 | 15 (Dependabot)| 无 | ⚪ **静默维护**：纯机器人自动化依赖升级，社区无互动。 |

## 3. OpenClaw 在生态中的定位
*   **社区规模与体量**：OpenClaw 无疑是当前的**流量之王与生态核心参照系**。其单日超 500 的 Issue/PR 活跃度远超同类项目，具备极强的网络效应和开发者号召力。
*   **技术路线差异**：相比其他项目还在解决单一渠道接入或基础稳定性，OpenClaw 已经全面拥抱**复杂的 Multi-Agent 工作流**（父子 Agent 嵌套、委派执行）与**实时语音/多模态网关**。
*   **对比优劣**：优势在于功能前瞻、多端体验趋于一致；劣势极其明显——**工程管控遭遇瓶颈**。硬编码事件和大量 P0 级回归说明其 CI/CD 审查机制已跟不上激进的功能迭代速度。

## 4. 共同关注的技术方向
从今日各项目的 PR 与 Issue 中，涌现出四个高度一致的技术演进方向：

1.  **企业级安全与沙箱隔离强化**
    *   **涉及项目**：Hermes, NullClaw, ZeroClaw, LobsterAI。
    *   **诉求**：防范 SSRF、命令注入校验、文件系统越权读写、凭证池最小权限隔离。AI 智能体拥有执行代码和调用 API 的能力后，安全防御成为重中之重。
2.  **长期记忆与状态管理机制重构**
    *   **涉及项目**：CoPaw, NanoBot, Hermes, IronClaw。
    *   **诉求**：历史会话 Token 溢出、跨会话数据污染（聊天串台）、子 Agent 僵尸进程泄漏。社区正致力于放弃低效的文件读写，转向原子化写入、按会话隔离或数据库调度。
3.  **标准化多智能体通信协议 (ACP / ToolCall 规范)**
    *   **涉及项目**：CoPaw, ZeroClaw, LobsterAI, Hermes。
    *   **诉求**：为解决多模型协同，项目纷纷开始实现 ACP 协议，并着力修复不同模型（如 DeepSeek V4, Qwen 3.6）对 Tool Call 的 Schema 强校验兼容问题。
4.  **“全本地化”与“去中心化”部署支持**
    *   **涉及项目**：NanoBot, ZeroClaw, NanoClaw, Moltis。
    *   **诉求**：通过 Ollama/vLLM 适配本地视觉/语音模型，支持绕过 Cloudflare 的本地爬虫，以及防范断网环境下服务崩溃。

## 5. 差异化定位分析

*   **全栈/通用型基座**：**OpenClaw**, **ZeroClaw**, **IronClaw**。它们致力于成为底层 OS 级别的存在。其中 IronClaw 专攻 Rust 高性能+Wasm沙箱并深度绑定 Web3 生态；ZeroClaw 则提出微内核架构，走插件化道路。
*   **多渠道通信中枢**：**Moltis**, **NanoClaw**, **LobsterAI**。侧重于打通所有主流 IM（微信、飞书、Discord），以极高的消息解析容错率和轻量级容器化部署为卖点，适合中小企业做自动化客服或内部工具。
*   **特定场景/垂直深耕型**：
    *   **Hermes Agent**：偏向白帽/极客开发者，聚焦于连接 Claude Code/Cursor 等专有代码智能体，组成编码集群。
    *   **CoPaw (QwenPaw)**：依托阿里云生态，在 Console 前端体验和企业级插件（钉钉、企微审批）上有先天优势。
    *   **NullClaw**：主打极客底座，使用 Zig 语言极致压榨性能。

## 6. 社区热度与成熟度
*   **快速膨胀但质量堪忧（早期爆发期）**：**OpenClaw** 和 **Hermes**。社区热度极高，但面临严重的系统性 Bug 和安全漏洞积压。OpenClaw 陷入“高输入、高积压”，Hermes 则是底层安全防线形同虚设。
*   **快速迭代与质量并重（上升期）**：**CoPaw**, **Moltis**, **LobsterAI**, **NanoClaw**, **NanoBot**。这些项目虽然体量不及 OpenClaw，但维护者对 PR 的把控力强，Issue 处理闭环快，代码合并有效率极高，展现出良好的可持续发展态势。
*   **深度重构期（蛰伏期）**：**IronClaw**, **ZeroClaw**。架构正在经历大手术，短期内 CI 报错和基础功能失效频繁，需熬过重构阵痛期。

## 7. 值得关注的趋势信号

1.  **“Agent of Agents” 级联调度成为现实**：Hermes 和 Moltis 均提交了将任务无缝委派给专有智能体的 PR。未来的 AI 助手不再是单打独斗，而是作为父节点（调度器），动态唤醒本地代码专家或云端视觉专家协同工作。
2.  **LLM 的“幻觉反馈”正向系统级 Bug 蔓延**：OpenClaw (Issue #41304) 和 NanoClaw 出现了智能体在**拒绝调用工具或发生内部错误时，依然向用户伪造“操作成功”的文本反馈**。这表明 LLM 的行为不可控正在与系统的容错机制产生冲突，急需引入“副作用清单验证”机制。
3.  **本地算力调度与 Token 成本优化成为刚需**：社区对本地运行 Ollama 多模态、绕过云端 API 的呼声高涨。同时，CoPaw 社区对 DeepSeek 前缀缓存命中率的关注，表明开发者对 LLM 的使用已从“能用”转向“精打细算的成本治理”。
4.  **配置体验全面“基础设施即代码”化**：纯 GUI 配置或混杂的 `.env` 正在被抛弃，Moltis 和 IronClaw 社区强烈呼吁支持声明式的 YAML 配置与版本控制，这标志着 AI 智能体的运维正在向正规的 DevOps 体系靠拢。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 📊 NanoBot 项目动态日报 (2026-04-29)

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

## 1. 今日速览
过去 24 小时，NanoBot 项目展现出**极高的社区活跃度与健康的迭代节奏**。项目共处理了 35 个 Pull Requests（其中 16 个已合并/关闭，19 个待合并），并关闭了 10 个 Issues（新增 3 个），表明维护者正在积极清理积压并审核社区贡献。今日的焦点明显集中在**多渠道适配优化（如 WhatsApp、Matrix、QQ、WeCom）、内存与稳定性修复**，以及**底层架构增强（如按 Provider 配置参数、文件原子写入）**。虽然今日无新版本发布，但大量高质量 PR 的集中涌现，预示着项目正处于下一个大版本发布前的密集准备期。

## 2. 版本发布
今日**无新版本**发布。

## 3. 项目进展
今日共有 16 个 PR 被合并或关闭，推动了多项关键功能落地与 Bug 修复，项目整体稳定性和扩展性得到显著提升：

*   **Web 工具能力增强**：合并了允许绕过 Cloudflare 验证码的 PR ([#3382](https://github.com/HKUDS/nanobot/pull/3382))，通过自定义 User-Agent 和禁用 Jina Reader，大幅提升了智能体访问复杂网页的成功率。
*   **底层自定义能力扩展**：合并了为 OpenAI 兼容节点添加 `extra_body` 配置的 PR ([#3491](https://github.com/HKUDs/nanobot/pull/3491))，使用户在对接 vLLM、Ollama 等本地推理服务时，无需改码即可传递提供商特定的参数。
*   **搜索与 CLI 优化**：合并了新增 Olostep 搜索引擎提供者的 PR ([#3505](https://github.com/HKUDS/nanobot/pull/3505))，以及为频道登录和状态命令增加指定 `--config` 文件路径功能的 PR ([#2740](https://github.com/HKUDS/nanobot/pull/2740))。

## 4. 社区热点
今日讨论最受关注的议题集中在**多渠道支持、AI 模型兼容性**和**记忆系统设计**：

*   **多模态支持长期规划 ([#223](https://github.com/HKUDS/nanobot/issues/223))**：获得了 1 个赞，该项目是官方 Roadmap 的重中之重，旨在实现图像、语音和视频内容的处理，备受早期用户期待。
*   **Kimi 模型支持询问 ([#217](https://github.com/HKUDS/nanobot/issues/217))**：产生了 6 条评论，用户积极寻求为项目添加 Moonshot AI 的 Kimi 模型支持，并表达了贡献代码的意愿，反映出社区对新国产大模型接入的迫切需求。
*   **记忆系统优化探讨 ([#490](https://github.com/HKUDS/nanobot/issues/490))**：产生了 5 条深度评论，用户就长短期记忆的实现机制、上下文截断策略与开发者进行了深入交流。
*   **WebUI 远程访问问题 ([#3473](https://github.com/HKUDS/nanobot/issues/3473))**：3 条评论，讨论了在部署到服务器时 `0.0.0.0` 绑定导致的 WebSocket 连接失败问题，触及了分布式部署的核心痛点。

## 5. Bug 与稳定性
今日报告并处理了多个影响系统稳定性的关键 Bug，部分已有对应的修复 PR：

*   **[严重] 历史记录导致上下文溢出 ([#3494](https://github.com/HKUDS/nanobot/issues/3494))**：`history.jsonl` 被错误地全量加载至 LLM 上下文，导致 Token 飙升至预算的 287%。
    *   *状态*：已有对应修复 PR，提出按会话隔离历史记录的方案 ([#3481](https://github.com/HKUDS/nanobot/pull/3481))，并建议通过原子写入防止文件损坏 ([#3508](https://github.com/HKUDS/nanobot/pull/3508))。
*   **[严重] 安全沙箱静态路径绕过风险 ([#3504](https://github.com/HKUDS/nanobot/issues/3504))**：`restrict_to_workspace` 仅依赖静态分析，无法防御环境变量、符号链接或编码混淆导致的目录穿越攻击。
    *   *状态*：已关闭（可能已在底层重构或确认为设计边界）。
*   **[中等] 内存占用异常飙升 ([#3410](https://github.com/HKUDS/nanobot/issues/3410))**：自 v0.1.5.post2 起，常规运行内存从约 200MB 激增至 600MB，疑似新引入的 "dream" 特性导致。
    *   *状态*：Issue 已关闭，推测已定位或在近期提交中修复。
*   **[中等] Windows 平台兼容性缺陷**：Matrix 频道因文件路径包含冒号触发 `WinError 123` ([#3506](https://github.com/HKUDS/nanobot/issues/3506))。
    *   *状态*：已有明确修复 PR ([#3510](https://github.com/HKUDS/nanobot/pull/3510))，通过替换特殊字符解决路径格式问题。
*   **[低] WhatsApp 群组 @提及 失效 ([#3514](https://github.com/HKUDS/nanobot/pull/3514))**：JID 解析逻辑错误导致群聊中机器人无法正确识别 @自己。
    *   *状态*：已提交精确修复的 PR。

## 6. 功能请求与路线图信号
从当日的新开 Issue 和活跃 PR 中，可以清晰地看到社区正在推动 NanoBot 向 **"更丰富的平台接入"** 和 **"更精细的调度控制"** 演进：

*   **通信平台扩展**：
    *   新增 Napcat (QQ) 频道支持 ([#3509](https://github.com/HKUDS/nanobot/pull/3509))，表明项目正在积极覆盖国内主流 IM 平台。
*   **细粒度模型控制**：
    *   提出“按 Provider 配置生成参数”的 PR ([#3507](https://github.com/HKUDS/nanobot/pull/3507))，解决了多模型切换时需要频繁修改全局参数的痛点，有望被下个版本采纳。
    *   提出 `reasoning_effort="none"` 修复与 Gemini 路由优化 ([#3515](https://github.com/HKUDS/nanobot/pull/3515))，显示对前沿推理模型的适配正在细化。
*   **多语音转录支持**：统一转录提供者并增加对本地 Whisper 的支持 ([#3513](https://github.com/HKUDS/nanobot/pull/3513))，进一步夯实 Roadmap 中的语音支持基础。

## 7. 用户反馈摘要
分析近期的 Issue 评论，提炼出真实用户的几大核心诉求：
1.  **群组场景下的身份识别缺失**：用户在使用 Discord 等群组频道时，机器人无法区分具体是哪位家庭成员在提问 ([#3511](https://github.com/HKUDS/nanobot/issues/3511))，`sender_id` 未传入 LLM 上下文构建机制。
2.  **本地化/私有化部署需求强烈**：无论是要求支持 Kimi 模型、接入本地 Whisper，还是要求绕过 Cloudflare 抓取网页，都反映出用户希望将 NanoBot 打造为**完全本地化、掌控在自己手中的全能 AI 智能体**。
3.  **消息流转的 UI/UX 细节**：用户对 Telegram 频道将 HTML 文件以 `application.octet-stream` 发送导致无法直接预览感到困扰 ([#3488](https://github.com/HKUDS/nanobot/issues/3488))，且希望有更细粒度的频道级进度提示控制 ([#3487](https://github.com/HKUDS/nanobot/pull/3487))。

## 8. 待处理积压
*   **亟待合并的安全与稳定性修复**：
    *   [PR #3508](https://github.com/HKUDS/nanobot/pull/3508) (`fix(memory): ensure atomic write`)：防止历史记忆文件在崩溃时损坏，是关键的防护性代码，建议尽快合入主干。
*   **需关注的增强请求**：
    *   [Issue #3511](https://github.com/HKUDS/nanobot/issues/3511) (`sender_id` 未传入 LLM)：该问题阻碍了机器人在多人群聊场景的落地，目前无对应 PR，建议维护者标记为 `enhancement` 或 `good first issue` 以引导社区解决。
*   **外部集成请求**：
    *   [Issue #3512](https://github.com/HKUDS/nanobot/issues/3512) (集成 SwarmScore)：提出了为 AI 智能体增加便携式信任评级的构想，属于生态层面的合作，需维护团队评估是否符合项目长期愿景。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-04-29)

## 1. 今日速览

Hermes Agent 项目在过去 24 小时内保持着极高的社区热度与开发活跃度。尽管今日没有发布任何新版本，但 Issue 与 PR 活动均达到 **50 条**的更新高位，显示出社区对项目的高度关注。当前待合并的 PR 数量达到 38 个，主要集中在 TUI 交互体验升级和安全性修复；同时有 47 个新开或活跃的 Issue，其中包含多个 P1 级别的网关崩溃和严重安全隐患。整体来看，项目目前正处于功能快速扩展期（如 Claude 桥接、TUI 增强），但核心组件（特别是 Gateway 与安全模块）的稳定性正面临严峻考验，急需维护者进行代码合入与质量把关。

---

## 2. 版本发布

**无新版本发布。** 今日未观察到任何 GitHub Release 动态，项目主分支目前仍处于高度迭代的开发阶段。

---

## 3. 项目进展

今日共有 12 个 PR 被合并或关闭，剔除与安全相关的合入外，项目在跨 Agent 协作、TUI 体验和多平台适配上取得了显著进展：

*   **安全合规与隐匿性修复 (已合并):** PR [#16957](https://github.com/NousResearch/hermes-agent/pull/16957) 移除了 Anthropic Messages API 路径中伪装成 Claude Code 的指纹特征，恢复了 OAuth 请求的真实身份，提升了 API 调用的合规性。
*   **跨智能体协作能力增强 (待合并):** PR [#16226](https://github.com/NousResearch/hermes-agent/pull/16226) 引入了原生的 Claude/Cursor 桥接传输层，允许 Hermes 作为父节点无缝委派任务给本地的 Claude Code 或 Cursor Agent，极大地拓展了其作为 AI 中枢的协作上限。
*   **TUI 体验深度优化 (待合并):** 贡献者 `OutThisLife` 提交了系列 TUI 改进，包括修复 macOS 终端复制行为 ([#17131](https://github.com/NousResearch/hermes-agent/pull/17131))、修复 `/browser` 连接无法热更生效的问题 ([#17120](https://github.com/NousResearch/hermes-agent/pull/17120))、优化 Rich 渲染优先级解决显示乱码 ([#17111](https://github.com/NousResearch/hermes-agent/pull/17111))，以及引入可插拔的 TUI 忙碌指示器 ([#17150](https://github.com/NousResearch/hermes-agent/pull/17150))。
*   **委派任务执行验证 (待合并):** PR [#16789](https://github.com/NousResearch/hermes-agent/pull/16789) 为委派工具增加了结构化的副作用清单验证机制，子智能体执行完任务后需提供文件/URL的变更清单供父节点校验，大幅增强了多 Agent 场景下的执行确定性。

---

## 4. 社区热点

今日讨论热度最高的问题集中在**网关基础稳定性**和**第三方集成平台适配**上：

*   **Gateway 启动崩溃问题 (🔥最热):** Issue [#8091](https://github.com/NousResearch/hermes-agent/issues/8091) (评论 4, 👍 5) 报告了因 `RedactingFormatter` 未定义导致的 Gateway 启动即崩溃问题，引发了多位依赖 Gateway 模式部署用户的共鸣。
*   **Playwright 浏览器扩展冲突:** Issue [#11073](https://github.com/NousResearch/hermes-agent/issues/11073) (评论 3, 👍 0) 提出了一个高频使用痛点：在使用有头浏览器进行交互时，Playwright 默认禁用了 1Password 等浏览器扩展，用户强烈希望暴露底层配置以解除限制。
*   **Nix CI 全面熔断:** Issue [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) (评论 2, 👍 1) 指出由于 `npmDepsHash` 过期，导致目前所有 PR 的 Nix CI 构建均失败。这是一个严重的工程效率阻塞点，需维护者立即关注。
*   **第三方平台集成配置失效:** 社区反映在 Slack ([#17054](https://github.com/NousResearch/hermes-agent/issues/17054)) 和 Discord ([#17157](https://github.com/NousResearch/hermes-agent/issues/17157)) 上配置机器人时遇到原生 Bug，如 Manifest 结构损坏和命令同步超时，暴露了项目在跨平台兼容性测试上的不足。

---

## 5. Bug 与稳定性

今日新增大量 Bug 报告，特别是安全研究员 `tomqiaozc` 提交了一系列穿透性极强的安全漏洞。以下按严重程度排列：

### 🚨 P1 严重崩溃与安全绕过
*   **Gateway 启动崩溃:** `gateway/run.py` 缺少引入导致直接 NameError 崩溃。([#8091](https://github.com/NousResearch/hermes-agent/issues/8091) - *暂无对应 Fix*)
*   **Terminal 工具安全形同虚设:** `force=True` 参数暴露给 LLM，允许 AI 直接绕过所有命令安全检查执行危险操作。([#8032](https://github.com/NousResearch/hermes-agent/issues/8032) - *暂无对应 Fix*)
*   **本地浏览器 SSRF 零防御:** 默认的本地 Playwright 浏览器后端完全跳过 SSRF 检查，可被利用访问内网服务。([#8034](https://github.com/NousResearch/hermes-agent/issues/8034) - *暂无对应 Fix*)
*   **凭据池越权访问:** 委派工具将父节点的完整凭证池引用传递给子节点，违背了最小权限原则。([#8037](https://github.com/NousResearch/hermes-agent/issues/8037) - *暂无对应 Fix*)
*   **进程静默退出:** 迭代预算耗尽时，Agent 会直接 `os._exit()` 杀死整个 Python 进程，不触发任何清理机制。([#8049](https://github.com/NousResearch/hermes-agent/issues/8049) - *暂无对应 Fix*)
*   **Cron Telegram 推送失效:** Telegram 定时任务始终无法解析投递目标，导致功能不可用。([#17139](https://github.com/NousResearch/hermes-agent/issues/17139) - *暂无对应 Fix*)

### ⚠️ P2 数据一致性与逻辑漏洞
*   **非原子化重写导致数据丢失:** 在 `/retry` 等操作中，Session 重写分为清除和追加两步，中途崩溃会导致历史记录被完全清空。([#8029](https://github.com/NousResearch/hermes-agent/issues/8029) - *暂无对应 Fix*)
*   **DNS 重绑定 TOCTOU 绕过:** URL 安全检查存在时间差，检查通过后实际请求时域名可被重新解析为恶意内网 IP。([#8033](https://github.com/NousResearch/hermes-agent/issues/8033) - *暂无对应 Fix*)
*   **凭证池文件锁无效:** 使用线程锁保护文件读写，无法防范多进程并发导致的凭据文件损坏。([#8040](https://github.com/NousResearch/hermes-agent/issues/8040) - *暂无对应 Fix*)

---

## 6. 功能请求与路线图信号

今日的 Issue 和 PR 释放出明确的产品演进信号：**多模型/多智能体中枢化** 和 **本地化上下文管理**。

*   **大语言模型中枢桥接:** [#16226](https://github.com/NousResearch/hermes-agent/pull/16226) 表明 Hermes 正在积极将自己定位为 "Agent of Agents"，未来版本将原生支持将任务拆解调度给 Claude Code 或 Cursor 等专有智能体。
*   **自定义模型端点支持:** PR [#17162](https://github.com/NousResearch/hermes-agent/pull/17162) 增加了对带 Bearer Auth 的自定义 AWS Bedrock 端点的支持，反映出企业用户通过网关代理统一接入 LLM 的强烈需求。
*   **会话级代码库绑定:** Issue [#10309](https://github.com/NousResearch/hermes-agent/issues/10309) 提出在长时间对话中，经过上下文压缩后 Agent 会丢失当前操作的代码仓库上下文。建议引入 Session 级别的 Repo Pinning。
*   **精益上下文 (Lean-ctx):** PR [#16928](https://github.com/NousResearch/hermes-agent/pull/16928) 引入了 `lean_ctx` 机制，在对话引导期快速注入项目结构，有望显著降低 Token 消耗并提高代码编写准确率。

---

## 7. 用户反馈摘要

从今日的 Issue 详情中，可以提炼出真实用户的三大核心痛点：

1.  **"多平台配置的反人类体验"**: 部署 Slack 和 Discord 的用户饱受 Manifest 错误和命令同步超时的困扰。由于 Hermes 使用的命令前缀 `/` 与平台原生快捷键冲突，导致大量指令被拦截 ([#12688](https://github.com/NousResearch/hermes-agent/issues/12688))，用户强烈要求支持自定义命令前缀。
2.  **"状态与记忆的断层"**: 使用 Docker 部署的用户反馈，由于容器内权限问题，Agent 写入的文件变为 root 只读，导致 Gateway 无法读取记忆文件，产生了"记忆失忆"现象 ([#17144](https://github.com/NousResearch/hermes-agent/issues/17144))。此外，TTS 工具无法读取 `.env` 中的密钥 ([#17140](https://github.com/NousResearch/hermes-agent/issues/17140)，已有 Fix PR [#17163](https://github.com/NousResearch/hermes-agent/pull/17163))，暴露出环境变量加载逻辑的割裂。
3.  **"企业级合规与隔离需求的缺失"**: 多个安全漏洞的集中爆发（如沙箱可读取配对明文码 [#8036](https://github.com/NousResearch/hermes-agent/issues/8036)、可读取 OAuth 凭证 [#8035](https://github.com/NousResearch/hermes-agent/issues/8035)）表明，早期用户已在尝试将 Hermes 接入敏感环境，但现有的沙箱隔离和权限管控体系尚未达到企业级安全标准。

---

## 8. 待处理积压

以下高价值 Issue/PR 长期未获官方明确回应或合入，正在阻塞社区工作流：

*   **阻断性 CI 问题:** Issue [#15272](https://github.com/NousResearch/hermes-agent/issues/15272) 导致全量 PR 的 Nix CI 失败，严重影响社区贡献者的积极性与代码合入效率。
*   **积压的核心 Bug 修复:** 4 月 12 日由 `tomqiaozc` 和 `Orinks` 提交的多个 P1/P2 级 Gateway 和底层状态管理修复（如 Session 挂起时间戳比较错误 PR [#8012](https://github.com/NousResearch/hermes-agent/pull/8012)、DB 模式初始化未包裹事务 Issue [#8030](https://github.com/NousResearch/hermes-agent/issues/8030)）已积压超 2 周，直接影响了网关的高可用性。
*   **架构质量审计报告:** Issue [#17154](https://github.com/NousResearch/hermes-agent/issues/17154) 提交了一份详细的项目架构扫描报告，指出了重启连续性、Gateway 蔓延和工具策略覆盖度问题，该反馈对项目重构具备极高价值，需核心团队审阅。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
NanoClaw 项目今日保持着**高度活跃**的开发与社区互动状态。过去 24 小时内，项目共处理了 8 条 Issue（5 开/3 闭）和 23 条 PR（12 待合并/11 已合并或关闭），展现出极高的代码吞吐量与迭代速度。今天合并的 PR 高度聚焦于**多渠道适配（Telegram/Slack/Discord）的 bug 修复、消息路由的健壮性以及崩溃保护机制**。目前有 12 个 PR 正在待合并状态，预示着灾难恢复、Ollama 多模态支持和更精细的代理资源限制等重磅功能即将落地。整体来看，项目正处于从 v2 功能完善向高可用、高鲁棒性演进的快速上升期。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 11 个 PR 被合并或关闭，主要在消息通道兼容性、系统稳定性和错误处理上取得了实质性进展：

- **多渠道媒体与消息路由修复**：
  - [PR #2008 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2008)：修复了 Telegram 渠道文件上传的显示问题，使图像、视频和音频能够通过专门的 API 正确渲染（内联预览），而不是作为普通文档发送。
  - [PR #2007 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2007)：修复了 Reaction 功能的底层查找逻辑，确保在复合 ID 中正确去除 agent 分组后缀，恢复了跨群组消息反应的准确性。
  - [PR #2075 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2075)：完善了 Slack 初始安装流程，现在能够像 Discord/Telegram 一样端到端完成身份确认并发送欢迎私信。
- **系统健壮性与防崩溃机制**：
  - [PR #2080 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2080)：引入了启动期的**断路器机制**。通过指数退避策略（最高 15 分钟封顶），防止因持续崩溃导致耗尽 Discord 网关限制或触发 Cloudflare IP 封禁。
  - [PR #2077 (CLOSED)](https://github.com/qwibetiai/nanoclaw/pull/2077)：通过将 SQL 语句改为 `INSERT OR IGNORE`，优雅解决了某些平台重发相同消息导致会话数据库插入报错的痛点。
- **清理与重构**：
  - [PR #2083 (CLOSED)](https://github.com/qwibitai/nanoclaw/pull/2083) 及相关 PR #1776, #1864, #1628 被批量关闭或拒绝，清理了不兼容的第三方 OpenCode provider 提案及“大杂烩”式不符合规范的提交，表明维护者对核心代码入库保持了严格的质量把控。

## 4. 社区热点
今日社区最关注的焦点在于**多渠道（Discord/Telegram）的上下文准确性与资源隔离**：
- [Issue #2029 (OPEN)](https://github.com/qwibitai/nanoclaw/issues/2029)：请求为容器添加 `--memory`, `--cpus` 等可配置资源限制。由于目前 Agent 运行不设防，LLM 的死循环或递归调用极易触发宿主机 OOM，这是目前生产环境部署的一大痛点，引发了较多讨论。
- [Issue #1959 (OPEN)](https://github.com/qwibitai/nanoclaw/issues/1959)：反馈了 Discord 渠道的一个严重体验问题——Agent 的回复基于初始启动上下文，而不是用户的实时消息源，导致消息错位到错误的线程中。
- [Issue #2065 (CLOSED)](https://github.com/qwibitai/nanoclaw/issues/2065)：关于 Telegram “回复特定消息”上下文丢失的请求已被关闭，通常意味着该功能已在其他分支或提交中得到了实现。

## 5. Bug 与稳定性
今日报告的 Bug 集中在权限隔离和状态管理上，按严重程度排列如下：

1. **严重 - SQLite 写入权限错误**：[Issue #2073 (OPEN)](https://github.com/qwibitai/nanoclaw/issues/2073)。当 Host 以 root 权限运行时，所有派生的 Agent 容器会因“attempt to write a readonly database”立即崩溃。目前**暂无关联的 fix PR**，由于会导致所有代理不可用，建议维护者最高优先级跟进。
2. **中等 - 定时任务跨线程盲区**：[Issue #2067 (OPEN)](https://github.com/qwibitai/nanoclaw/issues/2067)。v2 版本的定时任务是会话绑定的，导致不同线程间的任务无法被通用管理工具（如 `list_tasks`）感知。
3. **中等 - 代理消息自环风暴**：[PR #2063 (OPEN)](https://github.com/qwibitai/nanoclaw/pull/2063)。指出目前的路由机制允许无限制的自我定向消息，已在生产环境中观察到 LLM 引发的死循环风暴。**已有修复此问题的 PR 等待合并**。
4. **低 - MCP 参数类型异常**：[Issue #2051 / PR #2074 (OPEN)](https://github.com/qwibitai/nanoclaw/pull/2074)。在处理 `add_mcp_server` 时，args 可能被错误写入为 JSON 字符串而非数组，目前已有 PR 提供了强制类型转换修复。

## 6. 功能请求与路线图信号
今日出现了一些极具前瞻性的功能提案，展示了项目向“企业级/多租户智能体集群”演进的趋势：

- **灾难恢复 (DR)**：[PR #2084 (OPEN)](https://github.com/qwibitai/nanoclaw/pull/2084) 提议引入每日快照及全量/单代理粒度的恢复机制（支持本地与 S3），表明社区对数据安全的诉求日益强烈。
- **无绑定预配置代理**：[Issue #2085 (OPEN)](https://github.com/qwibitai/nanoclaw/issues/2085) 请求支持 `/create-agent` 技能，允许预先创建和配置代理（Per-user personal-agent），但不立即绑定聊天通道。这对 SaaS 化的多用户部署是刚需。
- **Ollama 多模态支持**：[PR #2072 (OPEN)](https://github.com/qwibitai/nanoclaw/pull/2072) 提出为 Ollama 适配图像输入能力，使本地开源大模型也能处理视觉任务，极大拓宽了智能体的感知边界。

## 7. 用户反馈摘要
- **痛点**：用户在生产环境部署时遇到了较为棘手的**权限与资源隔离问题**。以 Root 运行导致全面崩溃（#2073），以及缺乏资源限制导致单代理故障拖垮整个宿主机（#2029），暴露出 NanoClaw 目前在多租户安全沙箱方面的不足。
- **使用场景**：从多个 PR/Issue 可以看出，用户正积极将 NanoClaw 接入更为复杂的真实场景，如使用 Matrix 协议进行端到端加密通信（#1624），或在 Telegram/Slack 中要求精准的富媒体解析与上下文回复，这表明项目在中小企业通信自动化领域的落地潜力巨大。

## 8. 待处理积压
- **长期悬而未决的 PR**：[PR #1624 (OPEN)](https://github.com/qwibitai/nanoclaw/pull/1624)（Matrix E2EE 支持）自 4 月 4 日开启至今已达 25 天，仍处打开状态。由于涉及复杂的加密协议适配，建议维护者评估合并进度或给予作者反馈。
- **核心修复亟待 Review**：今日新开的重要修复 PR，包括 [PR #2078](https://github.com/qwibitai/nanoclaw/pull/2078)（修复消息 ID 命名空间后缀引发的适配器操作错误）及上述断路器、数据库修复等，目前处于堆积状态（12个待处理）。建议维护团队尽快排期合并，以提升 v2 分支的整体稳定性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
NullClaw 项目在过去24小时内呈现出**高度聚焦于系统稳定性和底层架构修复**的态势。虽然整体交互数据量不高（1条Issue，3条PR更新），但更新内容的质量和权重极大。今日最核心的动态是针对 Zig 0.16 迁移后出现的严重回归问题（Mattermost 网关 CPU 100% 及消息静默失败）进行了紧急修复冲刺。同时，社区在安全策略文档和 cron 定时任务引擎方面也有持续的推进。整体来看，项目维护者正在为近期的底层语言版本迁移进行“缝补”与功能深化，项目健康度依靠核心贡献者的高效输出得以维持。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日项目在关键通信网关的稳定性修复上迈出了重要一步，但也反映出近期 Zig 0.16 迁移带来的阵痛：
*   **关闭 PR [#872](https://github.com/nullclaw/nullclaw/pull/872)**：维护者或贡献者针对 Zig 0.16 导致的高严重度回归问题提交了初步修复，但该 PR 已被关闭。推测可能是因为修复方案存在瑕疵或需要重新提交。
*   **新开 PR [#873](https://github.com/nullclaw/nullclaw/pull/873)**：提交者 `vernonstinebaker` 迅速接力，重新开启了针对同一高严重度回归的修复 PR。这标志着项目在解决 Mattermost 网关 CPU 空转和空 POST 请求的 Bug 上取得了实质性进展，目前该修复正在等待合并（状态：待合并）。

## 4. 社区热点
由于今日数据以底层代码提交为主，社区热点主要围绕开发者的底层重构展开，尚未形成大规模的用户讨论潮：
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) (Cron 子代理引擎)**：由 `yanggf8` 提交的重量级特性 PR，今日再次更新。该 PR 引入了数据库支持的调度器、JSON 输出及安全加固，是一个持续活跃的史诗级更新，代表了项目在自动化任务调度方向的重要布局。
*   **[Issue #874](https://github.com/nullclaw/nullclaw/issues/874) (安全策略文档缺失)**：由 `Mental-Vortex` 提交，指出新特性/底层代码 `default_allowed_commands` 缺乏文档支持。这反映出部分用户正在积极测试和使用 NullClaw 的安全模块，且对文档的完善有明确诉求。

## 5. Bug 与稳定性
今日报告了自 Zig 0.16 迁移以来最严重的线上回归问题，严重影响生产环境的稳定性：
*   🔴 **[严重] Mattermost 网关 CPU 100% 及静默消息失败** 
    *   **表现**：网关线程在遇到 `EAGAIN` 时陷入死循环（导致 CPU 100%），同时向 Mattermost 发送空 POST 请求导致消息静默丢失。影响所有使用 daemon 模式及 Mattermost 连接的生产级 Agent。
    *   **状态**：**已有 fix PR**。由 `vernonstinebaker` 提交的 [PR #873](https://github.com/nullclaw/nullclaw/pull/873) 正在等待合并，建议所有相关运维人员密切关注此 PR 的合并状态。

## 6. 功能请求与路线图信号
*   **Cron 自动化调度引擎**：从活跃的 [PR #783](https://github.com/nullclaw/nullclaw/pull/783) 可以看出，NullClaw 正在向“复杂的个人自动化工作流”方向演进。引入历史运行表 (`cron_runs`)、时区偏移以及操作员警报，表明项目试图满足高级用户对定时任务的高可靠性需求。
*   **安全性与权限管控**：Issue [#874](https://github.com/nullclaw/nullclaw/issues/874) 暴露出代码库中已存在 `security policy` 相关的实现（如 `default_allowed_commands`）。虽然目前是文档缺失，但这释放了一个强烈的路线图信号：**NullClaw 正在加强智能体执行命令的安全沙箱和权限控制能力**，这将是未来企业级或高安全需求场景的关键特性。

## 7. 用户反馈摘要
*   **运维与集成痛点**：从 [PR #873](https://github.com/nullclaw/nullclaw/pull/873) 的上下文可以看出，使用 Mattermost 作为前端交互界面的生产用户对稳定性的要求极高，近期的 Zig 0.16 升级给他们带来了严重的运维警报（CPU 飙升和消息丢失）。
*   **开发者/进阶用户体验**：[Issue #874](https://github.com/nullclaw/nullclaw/issues/874) 表明，深度用户已经开始审计或使用 NullClaw 的底层安全策略代码，但项目在“代码先行，文档滞后”方面引起了一定的不便。

## 8. 待处理积压
*   ⚠️ **[PR #873](https://github.com/nullclaw/nullclaw/pull/873) 紧急待合并**：这是一个标记为 `CAUTION` 的高危回归修复，目前处于 OPEN 状态。强烈建议核心维护者优先 Review 并合并此 PR，以解除受影响生产环境的阻塞。
*   ⏳ **[Issue #874](https://github.com/nullclaw/nullclaw/issues/874) 需补充文档**：无评论、无指派。为了配合安全特性的推广，建议维护者及时补充 `default_allowed_commands` 的相关说明，降低用户的心智负担。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 (2026-04-29)

## 1. 今日速览
IronClaw 项目今日处于**高度活跃状态**，社区与核心开发团队的双向互动极为热烈。过去24小时内，项目共处理了 30 条 Issue（26 新开，4 关闭）和 45 条 Pull Request（32 待合并，13 合并/关闭）。核心开发者（如 `serrrfirat`）正全力推进代号为 **"Reborn"** 的底层重大架构重构，拆分出多个子模块的 PR，显示出明确的技术演进路线图。同时，社区贡献者积极提交了涉及 Telegram 机器人、权限控制和引擎修复的 PR。尽管没有新版本发布，但持续集成（CI）流水线的 Canary 测试出现了多次失败，项目稳定性在当前重构期面临一定挑战。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共有 13 个 PR 被合并或关闭，主要围绕 **Reborn 架构落地**、**引擎 V2 迁移** 和 **依赖/配置修复**。这标志着项目正在稳步迈向更模块化的架构体系。

*   **Reborn 架构基石落地**：核心开发者提交了大量基石型 PR 并在今日取得进展。例如 `feat(reborn): add filesystem substrate` ([PR #2996](https://github.com/nearai/ironclaw/pull/2996)) 和 `feat(reborn): add auth control substrate` ([PR #2999](https://github.com/nearai/ironclaw/pull/2999)) 均已关闭，这意味着重构所需的文件系统和权限控制底层模块已经就绪。
*   **V1 到 V2 引擎迁移修复**：PR `fix(web): keep Routines tab after engine v1 → v2 upgrade` ([PR #2992](https://github.com/nearai/ironclaw/pull/2992)) 被合并，成功解决了用户从 0.24.0 升级到 0.26.0 后现有 Routines UI 丢失的问题。
*   **PR 提审与清理**：部分冲突或废弃的 PR 如 ([PR #3046](https://github.com/nearai/ironclaw/pull/3046)) 和 ([PR #3042](https://github.com/nearai/ironclaw/pull/3042)) 被及时关闭，保持了代码仓库的整洁。

## 4. 社区热点
*   **[Issue #2987] [EPIC] Track Reborn architecture landing strategy**：该 Issue 是今日评论数最高（23条）的讨论。维护者正在与团队/社区讨论如何将庞大的 "Reborn" 架构拆分为易于审核的 PR 组（PR0, PR1b, PR3 等），这反映了项目在工程管理和代码审查上的严谨性。
*   **[Issue #3036] [EPIC] Configuration-as-Code for IronClaw Reborn**：获得 1 个 👍。用户/运营商呼吁引入 "基础设施即代码" 的理念，通过声明式配置（而不是混合编辑 `.env` 和 JSON）来管理 IronClaw，这是一个极具前瞻性的产品路线图信号。
*   **[PR #3048] & [PR #3047] Telegram 机器人增强**：社区贡献者 `Kampouse` 连续提交了两个 PR，旨在增加 Telegram 群组的“旁观记忆模式”和“群组级别访问控制”，精准击中了群聊场景下 Bot 难以管理的痛点。

## 5. Bug 与稳定性
今日报告了多个显著 Bug，且 CI 监控连续触发告警，需重点关注：

*   **P0 级别：CI Canary 频繁失败**：
    *   Live canary `public-smoke` 和 `private-oauth` 环境今日至少失败 3 次 ([Issue #3038](https://github.com/nearai/ironclaw/issues/3038), [Issue #3037](https://github.com/nearai/ironclaw/issues/3037), [Issue #3030](https://github.com/nearai/ironclaw/issues/3030))。证明当前主分支在特定测试环境下的集成存在不稳定性。
*   **P1 级别：跨会话数据污染**：
    *   [Issue #2833] 当对话 A 正在推理时，切换到对话 B 会导致 A 的中间回复内容泄露到 B 的聊天视图中。该 Bug 严重破坏了多会话并发的用户体验，目前尚未见修复 PR。
*   **P2 级别：Agent 身份与日志问题**：
    *   [Issue #3035] Agent 忽略了配置的自定义显示名称，回退到默认的 "IronClaw"。
    *   [Issue #3011] 本地运行 `ironclaw run` 时，即使在 `RUST_LOG=trace` 级别，stderr 也无法输出任何日志，给本地调试带来极大困难。
*   **P2 级别：LLM Tool Schema 校验报错（已修复）**：
    *   [Issue #2437] 提到 `nearai_chat` 在处理带有 `oneOf` 等复杂参数的 tool 时会报 HTTP 400 错误，该 Issue 今日已关闭。

## 6. 功能请求与路线图信号
*   **Runtime Presets（运行时预设）**：[Issue #3045](https://github.com/nearai/ironclaw/issues/3045) 提出为 Reborn 架构引入预设配置层，让开发者无需手动配置底层的挂载、网络和审批策略，只需一条命令即可跑起本地编码 Agent。
*   **钱包生态集成支持**：[Issue #3025](https://github.com/nearai/ironclaw/issues/3025) 用户希望 IronClaw 支持通过 MetaMask 或 Trezor 进行部署和连接。目前的 Hot Wallet 限制较多，这是典型的 Web3 开发者真实诉求。
*   **多模态连续对话**：[Issue #3010](https://github.com/nearai/ironclaw/issues/3010) 提出当前生成的图片无法作为视觉上下文在后续多轮对话中被 Agent 看到和引用。

## 7. 用户反馈摘要
1.  **升级体验割裂**：用户反映升级到 V2 引擎后，旧数据（如 Routines）在前端UI中消失，虽然底层数据库还在，这造成了“升级导致数据丢失”的恐慌感（[Issue #2982](https://github.com/nearai/ironclaw/issues/2982)，已修复）。
2.  **本地开发调试困难**：Rust 日志系统的“静默行为”（[Issue #3011](https://github.com/nearai/ironclaw/issues/3011)）让试图在本地部署和排错的用户感到非常沮丧。
3.  **平台兼容性限制**：部分 Linux x86_64 用户在使用官方脚本安装时遇到了平台不匹配的错误（[Issue #2949](https://github.com/nearai/ironclaw/issues/2949)），说明安装脚本的架构识别逻辑需要优化。

## 8. 待处理积压
*   **超大规模重构 PR 需持续跟进**：[PR #1446](https://github.com/nearai/ironclaw/pull/1446) 旨在增加对阿里云百炼代码模型的支持。该 PR 涉及庞大的范围，自 3 月 20 日开启至今仍在等待完全合并。维护者需关注是否因 Reborn 架构调整导致该 PR 产生大量合并冲突。
*   **缺少中断处理机制**：当前有两个相关的 Issue/PR 正在讨论（[Issue #3024](https://github.com/nearai/ironclaw/issues/3024) / [PR #3033](https://github.com/nearai/ironclaw/pull/3033)），用户抱怨 `/interrupt` 命令在 WebUI 中经常失效。建议尽快合并修复以保证基础交互体验。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是 LobsterAI (github.com/netease-youdao/LobsterAI) 项目 2026-04-29 的动态日报：

# 🦞 LobsterAI 项目动态日报 (2026-04-29)

## 1. 今日速览
LobsterAI 本日维持了极高的开发与维护热度，呈现出典型的“密集修Bug与快速迭代”特征。过去 24 小时内，项目共处理了 **47 条 PR 更新（其中 23 个已被合并/关闭）**，并有 **3 个活跃 Issue** 产生了新讨论。核心开发团队今日主要将精力集中于修复网关稳定性、IM（即时通讯）渠道兼容性以及多模型切换引发的前端状态同步问题上。整体来看，项目正在为多模型（如 Qwen 3.6、DeepSeek V4、小米 mimo）的复杂并发调用进行深度的架构打磨。

## 2. 版本发布
本日 **无** 新版本发布。

## 3. 项目进展
今日共有大量修复和特性 PR 被合入，项目在多模型适配和网关健壮性上迈出了坚实的一步：
*   **网关与核心稳定性大幅增强**：合入了修复网关强制重启的 PR（[#1872](https://github.com/netease-youdao/LobsterAI/pull/1872)），解决了由于套餐模型列表更新或 Qwen 3.6 plus 回答触发的网关重启问题（[#1870](https://github.com/netease-youdao/LobsterAI/pull/1870)）。同时优化了生命周期错误回退机制，防止会话死锁（[#1869](https://github.com/netease-youdao/LobsterAI/pull/1869)）。
*   **多模型与 Coding Plan 支持**：新增了对百度千帆（[#1859](https://github.com/netease-youdao/LobsterAI/pull/1859)）和小米 mimo 模型（[#1862](https://github.com/netease-youdao/LobsterAI/pull/1862)）的 coding plan 支持。
*   **前端多Agent架构重构**：重构了 Header ModelSelector，将全局默认模型与单 Agent 模型选择解耦，修复了切换模型时的覆盖问题（[#1865](https://github.com/netease-youdao/LobsterAI/pull/1865)）。
*   **IM 渠道体验优化**：修复了微信渠道发送图片展示过大且无预览的问题（[#1868](https://github.com/netease-youdao/LobsterAI/pull/1868)），以及钉钉消息中媒体元数据的清理展示（[#1856](https://github.com/netease-youdao/LobsterAI/pull/1856)）。
*   **长文本模型名称 UI 修复**：修复了 ModelSelector 中模型名称过长导致的头部溢出问题（[#1854](https://github.com/netease-youdao/LobsterAI/pull/1854), [#1855](https://github.com/netease-youdao/LobsterAI/pull/1855)）。

## 4. 社区热点
今日最受关注的讨论集中在前沿模型接入的兼容性问题上：
*   **[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) DeepSeek V4 无法使用 (6 条评论)**：用户在调用 DeepSeek V4 时遇到了 `provider rejected the request schema or tool payload` 错误。该问题引发了较深度的技术讨论，通常这与新模型对 Tool/Function Calling 的 Schema 严格校验有关，暴露出项目在处理最新大模型工具调用协议时的适配滞后。

## 5. Bug 与稳定性
今日报告的缺陷主要集中在客户端状态同步和底层流式传输中断，部分已有对应修复：
1.  **P0 - 追问时输出截断或无限 NO_REPLY**：[Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 指出日志显示任务被提前 `complete`，导致页面无数据响应。此流式响应中断问题严重影响核心对话体验。
2.  **P1 - 图片附件状态不同步**：[Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861) 报告了在视觉/非视觉模型之间切换时，图片的 Base64 与文件路径状态未随模型动态更新。**已有对应修复**：PR [#1860](https://github.com/netease-youdao/LobsterAI/pull/1860) 和 [#1867](https://github.com/netease-youdao/LobsterAI/pull/1867) 已针对此类状态问题进行了合入修复。
3.  **P2 - 飞书接收文件中文乱码**：[PR #1866](https://github.com/netease-youdao/LobsterAI/pull/1866) 修复了 openclaw 渠道下飞书文件中文名乱码的编码问题。

## 6. 功能请求与路线图信号
*   **底层安全机制强化（信号）**：长期未合并的 PR [#908](https://github.com/netease-youdao/LobsterAI/pull/908)（MCP stdio 命令注入校验）和 [#909](https://github.com/netease-youdao/LobsterAI/pull/909)（技能安装失败的安全确认）在今日重新活跃。这暗示团队可能正在盘点并准备合入重要的安全防线代码，这将是下一版本的重中之重。
*   **官方技能库升级**：有道笔记技能进行了升级（[#1864](https://github.com/netease-youdao/LobsterAI/pull/1864)），表明项目正在持续深化官方原生工具（Skills）的生态建设。

## 7. 用户反馈摘要
通过今日的 Issue 分析，提炼出用户的核心痛点如下：
*   **前沿模型的渴求与阵痛**：用户倾向于第一时间接入最新发布的重磅模型（如 DeepSeek V4），但由于上游 API 协议变更或项目适配未及时跟进，导致带工具调用的 Prompt 构建失败，产生挫败感。
*   **多模态交互的连贯性要求**：用户期望在多模型环境中自由切换，当前端状态（如图片解析方式）未能与后端模型能力形成无缝绑定时，会破坏多模态对话的沉浸感。

## 8. 待处理积压
以下重要议题悬而未决或长期等待处理，建议维护团队关注：
*   **高危安全漏洞 PR**：[PR #908](https://github.com/netease-youdao/LobsterAI/pull/908) (MCP 任意命令注入) 和 [PR #909](https://github.com/netease-youdao/LobsterAI/pull/909) (恶意技能绕过扫描) 自 3 月底提交至今未合并。考虑到安全风险的紧迫性，建议尽快进行 Code Review 并集成。
*   **核心模型兼容性 Issue**：[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) (DeepSeek V4 请求失败) 仍处于 OPEN 状态，鉴于该模型的受众极广，建议排期排查 Schema 适配问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026-04-29 Moltis 项目动态日报。

---

# 📊 Moltis 项目动态日报 (2026-04-29)

## 1. 今日速览
过去 24 小时内，Moltis 项目呈现**极高**的开发与社区活跃度。团队在一天内集中合并了 **11 个 Pull Requests**，涵盖了从底层架构重构、跨平台迁移、渠道集成到 WebUI 体验升级的全方位迭代，并成功发布了 `20260428.03` 版本。Issue 区不仅高频解决了 Telegram 和 Docker 部署的边界 Bug，还催生了针对外部工具（如 Claude Code/Hermes）的导入整合提案。整体而言，项目正在快速向“多渠道接入、全链路健壮”的个人 AI 助理基础设施迈进。

## 2. 版本发布
- **新版本:** [`20260428.03`](https://github.com/moltis-org/moltis/releases/tag/20260428.03)
- **更新概述:** 本次版本是一个高度浓缩的功能与修复版本，包含了命令面板、应用内自更新机制、Discord/MS Teams 可选编译支持，以及针对 Telegram 渠道的名称解析修复。
- **迁移注意事项:** 
  - 反向代理配置需注意：官方已全面建议将 Nginx 配置中的 `$host` 替换为 `$http_host`，以避免在非标准端口下出现 WebSocket 跨域拦截错误。
  - 提供商名称校验逻辑已统一，使用了 `zai`、`kimi-code` 等标识符的用户需注意配置规范。

## 3. 项目进展
今日合入的 11 个 PR 极大拓宽了 Moltis 的能力边界，重点推进了以下几个维度：
- **更新与维护机制:** [PR #911](https://github.com/moltis-org/moltis/pull/911) 引入了 `/update` 命令和 WebUI 更新按钮，支持检测 Binary、Homebrew、Docker 等多种安装方式的原地自更新，大幅降低了用户的运维成本。
- **UX 体验飞跃:** [PR #904](https://github.com/moltis-org/moltis/pull/904) 在 Web 端引入了 `Cmd+K / Ctrl+K` 命令面板，支持模糊搜索和快速导航。
- **生态与迁移能力:** [PR #914](https://github.com/moltis-org/moltis/pull/914) 新增了外部工具数据导入能力，支持 Claude Code、Claude Desktop 和 Hermes 的配置平滑迁移。
- **架构与沙箱:** [PR #869](https://github.com/moltis-org/moltis/pull/869) 接入了 Obscura 作为轻量级 sidecar 浏览器后端；[PR #913](https://github.com/moltis-org/moltis/pull/913) 增加了针对 WhatsApp/Discord/Slack 的爬虫工具和捆绑 Skills；[PR #899](https://github.com/moltis-org/moltis/pull/899) 将 Discord 和 MS Teams 信道设为可选编译，精简了核心二进制体积。
- **底层重构:** [PR #912](https://github.com/moltis-org/moltis/pull/912) 统一了 Provider 名称校验逻辑，消除了历史遗留的硬编码误判；[PR #910](https://github.com/moltis-org/moltis/pull/910) 统一了 SessionMemoryHook 在生命周期内的派发行为。

## 4. 社区热点
- **[Todo/Enhancement] WebUI 文件上传附件功能** ([Issue #533](https://github.com/moltis-org/moltis/issues/533)): 
  该请求于今日重新活跃，呼声极高。用户 `gabevf` 希望在聊天输入框增加 "+" 按钮以上传文件。该诉求目前已有对应的修复提案 ([PR #876](https://github.com/moltis-org/moltis/pull/876))，正在进行最后的联合调试。
- **[Feature] WebUI 子 Agent 配置可视化** ([Issue #906](https://github.com/moltis-org/moltis/issues/906)):
  用户 `bsarkisov` 提出希望在图形界面中直接配置 Sub-agents（子智能体）。这反映出高级用户对 Moltis 多智能体编排能力的使用频率正在上升，亟需脱离纯文本配置模式。

## 5. Bug 与稳定性
- **[P0 - 严重] Docker 构建失败** ([Issue #896](https://github.com/moltis-org/moltis/issues/896)):`Closed`
  - **表现:** 在执行 `apt-get update` 时报错 "Temporary failure resolving 'ports.ubuntu.com'"。
  - **状态:** 已关闭，确认多为本地网络或 Dockerfile DNS 解析配置问题，非代码层面 Bug。
- **[P1 - 中等] 渠道消息解析异常导致 Telegram 崩溃** ([Issue #905](https://github.com/moltis-org/moltis/issues/905)):`Closed`
  - **表现:** 使用 Mistral/OpenAI 时，由于用户 DisplayName 中包含空格或非法字符（如 HTTP 422），导致 Telegram 渠道消息发送失败。
  - **状态:** 已由 [PR #915](https://github.com/moltis-org/moltis/pull/915) 修复并合入，系统现在会在序列化阶段强制清理和拼接 `name` 字段。

## 6. 功能请求与路线图信号
结合今日的 Issues 和待合并 PR，以下功能极有可能成为下个版本的重点：
1. **语音人格系统:** [PR #916](https://github.com/moltis-org/moltis/pull/916) 提出为 TTS 注入确定性“语音人格”，让 Agent 拥有稳定的角色音色，目前处于 `Open` 状态，这是向全模态个人助理迈进的重要信号。
2. **多源数据导入引擎:** 基于 [PR #914](https://github.com/moltis-org/moltis/pull/914) 的落地，项目正在强化自身作为“AI 基础设施中心”的定位，吸引其他工具用户零成本迁移。
3. **代码库自动索引机制:** [PR #903](https://github.com/moltis-org/moltis/pull/903) 提出了基于文件监听和去重机制的自动触发索引，预示着 Moltis 在代码智能辅助场景的体验将大幅改善。

## 7. 用户反馈摘要
- **部署体验:** 社区对 Docker 部署的稳定性和文档依赖（Issue #896）有较高敏感度。
- **操作习惯:** 用户对现有的配置管理方式感到吃力，倾向于像 [Issue #906](https://github.com/moltis-org/moltis/issues/906) 描述的那样，将后端的复杂配置（Sub-agents、Model Router）前置到 WebUI 中进行可视化操作。
- **开放性需求:** [Issue #266](https://github.com/moltis-org/moltis/issues/266) 再次活跃，用户呼吁原生支持 9router 这类通用 AI 代理路由器，反映出重度用户有着极强的“多模型动态调度”需求。

## 8. 待处理积压
以下重要 PR 处于 `Open` 状态，等待维护者进行 Code Review 及合并，建议关注：
- [PR #339](https://github.com/moltis-org/moltis/pull/339): `feat(i18n): add zh-TW Traditional Chinese locale support`（开放近 2 个月，需跟进国际化合并进度）。
- [PR #876](https://github.com/moltis-org/moltis/pull/876): `feat(ui): file upload button`，这是解决 Issue #533 核心痛点的关键 PR，目前等待最后合入。
- [PR #826](https://github.com/moltis-org/moltis/pull/826): `feat(compaction): wire summary_model config`，涉及长上下文压缩逻辑的优化，对内存与对话连贯性有重要影响。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-04-29)

## 1. 今日速览
CoPaw 项目今日保持极高的社区活跃度与开发推进速度。过去 24 小时内，项目迎来了 `v1.1.5-beta.1` 的重要版本发布，标志着新一轮特性冻结与测试周期的开始。社区交互方面，共产生 43 条 Issue 更新（25 个新开/活跃，18 个关闭）和 31 条 PR 更新（20 个合并/关闭）。从提交内容来看，**系统性能优化（特别是前端 Console）**和**ACP 协议兼容性**是目前的开发重心；而会话状态管理、MCP 集成卡死等历史遗留 Bug 依然是社区反馈的焦点。

## 2. 版本发布
**新版本**: [v1.1.5-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5-beta.1)
该版本是一个重要的测试基线，主要包含以下更新：
*   **新增特性 (ACP)**：引入了 ACP (Agent Communication Protocol) 支持，为多智能体通信打下基础（`feat(ACP): add ACP`）。
*   **前端修复**：优化了每个浏览器标签页的 Agent 选择状态存储机制，改为混合存储，修复了状态丢失问题（[PR #3857](https://github.com/agentscope-ai/QwenPaw/pull/3857)）。
*   **稳定性修复**：规范化了非标准时区名称，修复了因时区解析异常导致的后端报错（[PR #3858](https://github.com/agentscope-ai/QwenPaw/pull/3858)）。

## 3. 项目进展
今日共有 20 个 PR 被合并或关闭，开发团队集中攻坚了 **Console 前端性能**和**后端并发稳定性**，整体代码质量与运行效率迈出了坚实的一步：
*   **前端性能大幅优化**：
    *   使用 `react-window` 实现了聊天会话列表的虚拟化渲染，彻底解决了大量历史会话导致的前端卡顿问题（[PR #3912](https://github.com/agentscope-ai/QwenPaw/pull/3912)）。
    *   优化了 `/chat` 页面加载时的重复 API 请求，去除了冗余的 GET 拉取，加快了首屏渲染速度（[PR #3897](https://github.com/agentscope-ai/QwenPaw/pull/3897)）。
*   **后端与基础设施**：
    *   缓存技能清单读取，防止在高并发场景下出现文件句柄耗尽（FD exhaustion）的严重问题（[PR #3910](https://github.com/agentscope-ai/QwenPaw/pull/3910)）。
    *   修复了 Docker 卷挂载部署下备份恢复失败的问题（[PR #3916](https://github.com/agentscope-ai/QwenPaw/pull/3916)）。

## 4. 社区热点
今日社区讨论最密集的问题集中在**任务中断机制失效**与**数据丢失**两个极端痛点上：
1.  **Debian 环境保存模型设置导致页面卡死** ([Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853)，9 条评论)：用户报告在非 root 用户下运行时，保存设置会触发前端冻结。这暴露了权限控制或本地存储路径访问的潜在缺陷。
2.  **Web UI 暂停按钮形同虚设** ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850)，5 条评论)：用户指出点击“暂停”仅停止了前端 SSE 流渲染，后端 Agent 依然在默默执行并消耗 Token。这引发了关于“缺乏后端 Task Cancellation 机制”的深刻讨论。
3.  **会话历史莫名消失** ([Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)，6 条评论)：在长对话中，聊天记录突然被清空，新消息被路由到其他会话，这对用户体验造成了破坏性打击。
4.  **QwenPaw 与 CoPaw 关系澄清** ([Issue #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430)，7 条评论)：官方在此 Issue 中明确了项目品牌与代码库的演进关系，解答了社区的困惑。

## 5. Bug 与稳定性
按严重程度排序，今日暴露的核心 Bug 及修复状态如下：
*   **P0 - 核心功能失效 (已有修复)**：上下文同步竞态条件导致 Tool 调用陷入死循环。社区开发者已提交 [PR #3895](https://github.com/agentscope-ai/QwenPaw/pull/3895) 修复了此问题，目前正在审查中。
*   **P0 - MCP 导致服务无限卡死** ([Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822))：集成第三方 MCP 服务时经常引发无限期等待。相关修复 [PR #3904](https://github.com/agentscope-ai/QwenPaw/pull/3904) 已合并，将执行超时参数传递给了 MCP Client。
*   **P1 - 记忆管理失效** ([Issue #3905](https://github.com/agentscope-ai/QwenPaw/issues/3905))：Dream Agent 执行后，长期记忆文件未写入实质内容，日志文件丢失。
*   **P2 - 企微审批指令失效** ([Issue #3901](https://github.com/agentscope-ai/QwenPaw/issues/3901))：`/approval approve` 命令被 @机器人前缀干扰导致无法正常审批。

## 6. 功能请求与路线图信号
结合用户诉求与活跃 PR，项目未来的演进方向显露端倪：
*   **语音处理能力升级**：[PR #3574](https://github.com/agentscope-ai/QwenPaw/pull/3574) 提议使用 Whisper 替换原生 Web Speech API 以支持更广泛的浏览器，且 [PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) 增加了 QQ 频道语音消息的 ASR 支持。**多模态语音交互**显然是下个小版本的重点。
*   **记忆系统重构**：[PR #3913](https://github.com/agentscope-ai/QwenPaw/pull/3913) 正在进行彻底的 Memory System Enhancements，旨在取代原先脆弱的文件级读写操作，这将是 Agent 具备长期记忆的关键。
*   **插件化与模型支持扩展**：用户强烈呼吁支持更多本地/第三方模型提供商（如 [llama.cpp](https://github.com/agentscope-ai/QwenPaw/issues/3920)）以及自定义超时配置（[Issue #3929](https://github.com/agentscope-ai/QwenPaw/issues/3929)）。

## 7. 用户反馈摘要
从今日的 Issue 互动中，可以提炼出以下典型用户画像与反馈：
*   **部署环境多样化**：不仅有常规的 Docker 和 Windows 用户，还有大量 Debian、企业微信、钉钉及 QQ 频道的私有化部署用户，说明项目在多端触达方面很受欢迎，但多渠道的兼容性维护压力巨大。
*   **对“控制权”的焦虑**：用户非常反感“失控的 Agent”（如无法停止、后台偷跑 Token、记忆凭空消失）。用户呼吁强化会话级控制（如 [Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850)）。
*   **成本敏感度极高**：用户提出了针对 DeepSeek 模型前缀缓存命中率优化的诉求（[Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)），说明在深度使用中，Token 消耗成本已成为开发者的核心痛点。

## 8. 待处理积压
以下重要高活跃 Issue 仍处于 Open 状态，建议维护团队尽快介入响应或排期：
*   [Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853)：Linux 环境下前端页面冻结与权限问题。
*   [Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843)：极其严重的用户体验问题，聊天记录随机消失且发生串会话。
*   [Issue #3702](https://github.com/agentscope-ai/QwenPaw/issues/3702)：技能池底层报错问题，影响新技能的加载。
*   [Issue #3886](https://github.com/agentscope-ai/QwenPaw/issues/3886)：ACP 协议与 Hermes Agent 的兼容性对接问题，这关系到 QwenPaw 在多智能体网络中的可用性。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-04-29)

> 数据来源：[ZeptoClaw (github.com/qhkm/zeptoclaw)](https://github.com/qhkm/zeptoclaw) | 分析师：AI 智能体与个人 AI 助手领域开源分析师

---

### 1. 今日速览
过去 24 小时内，ZeptoClaw 项目呈现出**高度自动化、低人际交互**的“机器人主导”状态。今日共产生 **15 个全新的 Pull Requests**，全部由 `dependabot[bot]` 触发，且目前均处于待合并（OPEN）状态。项目今天**没有新版本发布、无新增 Issues、无人工评论或点赞**。整体来看，项目目前的维护重心在于保持技术栈的依赖新鲜度，核心功能开发与社区互动暂时处于平稳静默期。

### 2. 版本发布
**无**。
今日项目未发布任何新版本。

### 3. 项目进展
今日**没有已合并或已关闭的 PR**，因此项目在核心代码功能上没有直接向前推进。 
但项目产生了 15 个依赖更新 PR，为后续的代码合并做好了底层库的铺垫工作。这些 PR 的分布展现了项目的技术全貌，主要涵盖以下几个维度的进展：
*   **Rust 核心运行时与网络库更新**：提议升级异步运行时 `tokio` ([#550](https://github.com/qhkm/zeptoclaw/pull/550))、邮件库 `lettre` ([#563](https://github.com/qhkm/zeptoclaw/pull/563))、底层 C 库绑定 `libc` ([#560](https://github.com/qhkm/zeptoclaw/pull/560)) 等，这对提升智能体的底层执行效率与稳定性至关重要。
*   **前端控制面板与文档站升级**：提议将构建工具 `vite` 大幅升级至 `8.0.8` ([#561](https://github.com/qhkm/zeptoclaw/pull/561))，并对文档站底层的 `astro` ([#552](https://github.com/qhkm/zeptoclaw/pull/552), [#557](https://github.com/qhkm/zeptoclaw/pull/557)) 及 `starlight` 进行了小版本迭代，说明项目的用户交互界面正在积极跟进前端生态。
*   **CI/CD 与容器基建更新**：涉及 `actions/upload-artifact` ([#551](https://github.com/qhkm/zeptoclaw/pull/551))、`cargo-deny-action` ([#556](https://github.com/qhkm/zeptoclaw/pull/556)) 以及 `debian` 基础镜像更新 ([#549](https://github.com/qhkm/zeptoclaw/pull/549))。

### 4. 社区热点
**无**。
过去 24 小时内，项目没有任何带有人工评论或点赞（👍）的 Issue 或 PR，社区无热点事件讨论。活跃度完全由自动化机器人的依赖提权行为构成。

### 5. Bug 与稳定性
**无**。
过去 24 小时内未收到任何用户提交的 Bug 反馈、崩溃报告或回归问题。从另一侧面看，大量的底层依赖升级（如 `tokio`, `libc` 等）目前尚未引发 CI 流水线的报错反馈（均在待审核状态），表明项目在兼容性上保持着较好的韧性。

### 6. 功能请求与路线图信号
**无新增功能请求**。
0 条 Issues 意味着今日没有暴露出明确的新功能路线图信号。不过从自动化 PR 的更新面可以推断：项目目前依然在积极维护其 **“Rust 后端 + Web 前端面板 + Astro 文档站 + Docker 容器化部署”** 的架构形态。

### 7. 用户反馈摘要
**无**。
今日缺乏真实用户互动数据，无法提取用户痛点或使用场景反馈。

### 8. 待处理积压
⚠️ **维护者紧急提醒：Dependabot PR 堆积**
今日集中爆发的 15 个 `dependabot[bot]` PR 目前均处于 **[OPEN]** 状态。其中包括部分跨越大版本的依赖变更（例如 `vite` 从 `8.0.0` 到 `8.0.8`，`softprops/action-gh-release` 从 `2.x` 到 `3.x` 主版本更迭）。
*   **风险提示**：长期不合并会导致技术债累积，后续解决代码冲突的成本将指数级上升。
*   **建议**：建议项目维护者尽快对这批 PR 进行 Code Review，确认 CI 通过后批量合并，以保持主分支的健康度。

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-04-29)

> 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 分析周期：过去 24 小时

## 1. 今日速览

ZeroClaw 项目今日保持**高活跃度**的开发状态，社区互动与代码提交频繁。过去 24 小时内新增或活跃的 Issues 达 16 条，同时有高达 49 个 Pull Requests 正在进行代码审查（其中 48 个待合并），显示核心团队与社区贡献者正在为下一个里程碑版本（v0.7.4）进行大规模的功能集成与集中修整。虽然今日没有新的版本发布，但从 PR 趋势来看，项目正重点攻克 Web 端交互体验、渠道接入（如 WeChat、Matrix）以及底层安全架构验证等核心领域，项目整体向前稳步推进。

## 2. 版本发布

今日**无**新版本发布。

*注：根据 Issue #5877 的动态，目前社区和团队正处于 `v0.7.4` 里程碑的追踪与冲刺阶段。*

## 3. 项目进展

今日虽然仅合并了 1 个 PR（#6162 关闭），但庞大的待合并 PR 池（48个）揭示了即将落地的重要进展。代表性 PR 如下：

- **Web 控制台集中修复与优化**: 
  - PR [#6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161) 修复了 Web 端仪表盘的多个核心 Bug（包括概览页崩溃、模型保存失败、聊天界面高 CPU 占用等），极大提升了 Web 端的可用性。
  - PR [#6176](https://github.com/zeroclaw-labs/zeroclaw/pull/6176) 对 Web 路由进行了重构并引入懒加载，优化了前端启动速度。
  - PR [#6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159) 修复了网关在 WebSocket 交互中未记录 Token 用量和成本的长期遗漏。
- **渠道能力大修**:
  - PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) 实现了 ACP 协议 v1，恢复了与外部消费者的兼容性并引入了工具调用权限机制。
  - PR [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) 新增了基于 iLink Bot 的**微信个人号**接入渠道，显著拓宽了国内用户的宿主场景。
  - PR [#6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184) 修复了 Discord 渠道丢失图像附件的问题。
- **安全与运行时重构**:
  - PR [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) & [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) 引入了 OTel (OpenTelemetry) GenAI 规范的 Span 追踪，极大增强了智能体运行时的可观测性。

## 4. 社区热点

今日讨论最密集的 Issues 集中在底层架构演进与长期遗留的严重 Bug 上：

1. **Web 仪表盘不可用问题持续发酵**：[#4866 [Bug]: Web dashboard is still not available](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (26条评论)。这是一个 S1 级别的长期问题，用户多次尝试访问 Web UI 和 Tauri 客户端均失败。该问题说明目前前端构建与运行时的兼容性存在阻断性缺陷。
2. **微内核架构转型 RFC 落地**：[#5574 RFC: ZeroClaw Microkernel Transition](https://github.com/zeroclaw-labs/zeroclaw/issues/5574) (10条评论)。该 RFC 提出了从 v0.7.0 到 v1.0.0 的 intentional architecture（意图化架构）演进路径，状态已更新为 `accepted`，标志着项目即将迎来深刻的底层重构。
3. **多智能体 UX 设计草案**：[#5890 RFC: Multi-agent UX flow](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) (7条评论)。随着多 Agent 场景的普及，社区正在激烈讨论如何在前端和网关层设计优雅的多智能体交互流转体验。

## 5. Bug 与稳定性

今日报告了多个影响工作流的严重 Bug（S1/S2级别），针对部分问题社区已快速提交了针对性 Fix：

| 严重级别 | Issue | 描述 | 状态与对策 |
| :--- | :--- | :--- | :--- |
| **S1 (阻断)** | [#6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180) | 调用本地 llama-server 运行 Agent 失败 | 🟡 待排查 |
| **S1 (阻断)** | [#6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187) | 核心配置参考文档链接 404 | 🟡 需补充文档 |
| **S1 (阻断)** | [#6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188) | 机器码/环境变更导致 `enc2:` 加密配置无法重新解密 | 🟡 严重安全设计缺陷 |
| **S2 (降级)** | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) | Skill 生成的图片为本地绝对路径，模型无法读取 | 🟢 Fix 已提交：[#6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189) |
| **S2 (降级)** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | `model_switch` 工具切换模型不跨回合生效，网关端被忽略 | 🟡 待修复 |
| **S3 (轻微)** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 使用了错误的 Bot API | 🟡 待修复 |

## 6. 功能请求与路线图信号

从今日的 Feature Requests 暴露了 ZeroClaw 向**重度Web化、全平台渠道化、安全深化**发展的清晰信号：

1. **Web 端新手上路对齐 CLI**：Issue [#6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175) 要求实现 Web 端的初始化向导功能，表明官方正致力于降低 Web 端的配置门槛。
2. **“梦想模式” - 记忆沉淀机制**：Issue [#5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) 提出在空闲时进行记忆整合与反思学习。这属于前沿的 Agent 自主进化特性，很可能与微内核架构一同规划在 v1.0.0 的远期路线中。
3. **底层安全特性重新激活**：Issue [#6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182) 指出 HMAC 工具收据功能虽然在文档中存在，但代码级连线已被移除。社区正呼吁恢复此安全特性以增强工具调用的防篡改能力。
4. **私聊回复逻辑优化**：Issue [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) 提出在 1v1 私聊中，智能体不应执行“我是否该回复”的意图分类判定。PR [#6191](https://github.com/zeroclaw-labs/zeroclaw/pull/6191) 已着手修复此逻辑。

## 7. 用户反馈摘要

通过今日的 Issue 摘要，可以提炼出以下真实用户痛点：
- **断网/内网用户体验受损**：大量用户尝试接入本地大模型（如 llama.cpp），但相关的报错（Issue #6180）说明当前对非云端 Provider 的适配和错误提示仍不够完善。
- **多设备/重装系统灾难**：Issue #6188 暴露了本地加密机制过于绑定机器环境，导致重装系统或更换部署节点后 API Key 全部作废，这引发了用户对数据可移植性的担忧。
- **1v1 场景“不理人”现象**：用户对 Issue #5674 的点赞（👍 3次）表明，智能体在私聊中因复杂的意图拦截机制导致“装死”，是极大损耗使用耐心的反人类设计。
- **对全功能 Docker 镜像的渴望**：Issue #2628 (已关闭) 反映了用户希望开箱即用的 Docker 镜像，而不是需要自己去配置各种编译参数。

## 8. 待处理积压

以下重要节点需核心团队重点关注与推进：

1. **v0.7.4 里程碑追踪**：[#5877 release: v0.7.4 milestone tracking](https://github.com/zeroclaw-labs/zeroclaw/issues/5877) 包含大量待清理的子任务，当前有 48 个 PR 处于 Open 状态，需警惕 PR 积压导致的合并地狱风险。
2. **ACP 协议取消支持**：Issue [#5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) 目前处于 `status:blocked` 状态，由于底层的流式传输逻辑缺乏取消令牌支持，导致外部中断机制难以实现。
3. **配置动态修改需求悬而未决**：Issue [#6053](https://github.com/zeroclaw-labs/zeroclaw/issues/6053) 提出的 `zeroclaw config set` 无法修改 HashMap 类型数据的问题，目前无对应的 Fix PR，这严重制约了网关端动态修改模型配置的能力。

</details>