# OpenClaw 生态日报 2026-05-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-15 22:16 UTC

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

# OpenClaw 项目动态日报 (2026-05-16)

## 1. 今日速览

OpenClaw 项目在过去24小时内保持了**极高的社区活跃度与开发迭代速度**。项目今日共处理了 500 条 Issue 更新（新开/活跃 452 条，关闭 48 条）以及 500 条 PR 更新（待合并 455 条，合并/关闭 45 条）。从数据上看，新开与活跃的 Issue 数量远超关闭数量，PR 的待合并积压也达到 455 条，这表明社区反馈极为热烈，但也侧面反映出项目在近期版本（特别是 2026.4.29 至 2026.5.12 版本）引入了大量底层重构，导致**多通道稳定性与性能问题集中爆发**。整体而言，项目处于功能快速扩张与稳定性阵痛并存的阶段。

## 2. 版本发布

**最新版本发布：** [`v2026.5.14-beta.2`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.2)

- **核心更新内容**：
  1. **Channels/SDK 增强**：在通道轮次构建（channel turn construction）中添加了规范化命令轮次事实，并为插件入站上下文暴露了命令轮次辅助函数。这一改动将极大优化多通道下的指令解析与路由准确率。
  2. **Agents/配置增强**：支持基于单个 Agent 的引导配置覆盖（`contextInjection`, `bootstrapMaxChars`, `bootstrapTotalMaxChars`），提供了更细粒度的上下文注入与字数控制，允许不同 Agent 拥有独立的启动行为。
- **迁移注意事项**：本次更新主要涉及 SDK 层面的重构，暂时未标注破坏性变更，但建议依赖自定义通道或深度定制 Agent 引导流程的用户在升级前在测试环境验证行为一致性。

## 3. 项目进展

尽管今日合并/关闭的 PR 仅占 45 条，但目前在审的 455 条待合并 PR 中包含了大量关键的修复与架构优化，项目整体正在积极推进以下方向的演进：

- **Stuck Session 处理机制完善**：PR [#78032](https://github.com/openclaw/openclaw/pull/78032)（已合并）修复了空闲状态下的 "stuck sessions" 无法自动恢复的问题，引入了基于诊断状态的变异清理机制。
- **流式响应与解析稳定性**：PR [#82263](https://github.com/openclaw/openclaw/pull/82263) 修复了 `openai-completions` 流式传输中，单一数据块包含多个 `delta.tool_calls` 时产生的幻影工具调用和参数丢失问题。
- **多通道体验优化**：PR [#81864](https://github.com/openclaw/openclaw/pull/81864) 引入了自然语言的插件审批提示，替代了原先晦涩的内部调试输出，大幅提升了 Discord、Matrix、Telegram 等多通道下的交互体验。
- **核心内存系统优化**：PR [#82341](https://github.com/openclaw/openclaw/pull/82341) 修复了重启后内存索引启动时的同步追赶机制；PR [#78130](https://github.com/openclaw/openclaw/pull/78130) 排除了 Dreaming 产生的会话语料库文件被错误晋升到短期记忆的问题。

## 4. 社区热点

今日社区讨论主要集中在近期版本导致的性能退化、通道连接失败和工具调用异常上：

1. **[Stuck processing sessions 从未被中止导致网关死锁](https://github.com/openclaw/openclaw/issues/71127)** (👍 0, 💬 12)
   - **诉求**：诊断子系统检测到卡死的会话后仅发出 WARN，但没有自动恢复机制。用户强烈要求网关具备自愈能力，而非依赖外部强制重启。
2. **[MacOS 升级 5.12 后出现 WebSocket "wrong protocol" 错误](https://github.com/openclaw/openclaw/issues/82037)** (👍 1, 💬 10) *[已关闭]*
   - **诉求**：从 5.7 升级到 5.12 后，Mac 用户的 Web/App 客户端大面积断连。此问题复现路径清晰，社区关注度极高。
3. **[升级到 4.29/5.2 后 CPU 占用极高及控制面延迟](https://github.com/openclaw/openclaw/issues/76562)** (👍 4, 💬 10)
   - **诉求**：这是目前获赞最多的问题之一。在 Linux 环境下升级后出现严重的性能倒退，严重影响生产环境可用性。
4. **[Discord 机器人 READY 事件不触发 (5.7 回归)](https://github.com/openclaw/openclaw/issues/79794)** (👍 1, 💬 8)
   - **诉求**：Discord 机器人显示在线，但无法接收频道消息，严重影响基于 Discord 的 Bot 使用。

## 5. Bug 与稳定性

近期的 Bug 集中在**网关性能**、**通道可靠性**和**特定模型兼容性**三个方面，按严重程度排列如下：

### 🔴 严重 / 核心网关与性能
- **[High CPU, extreme control-plane RPC latency](https://github.com/openclaw/openclaw/issues/76562)**：高负载下 CPU 拉满与控制面高延迟。*(暂无对应明确修复 PR，仍在排查中)*
- **[Stale worker 积累导致响应极慢](https://github.com/openclaw/openclaw/issues/76171)** (👍 3)：废弃的 worker 进程未被清理，导致主机负载飙升。
- **[Stuck Session Recovery 双重失效](https://github.com/openclaw/openclaw/issues/76038)**：事件循环阻塞，最终导致 Gateway 被 systemd 强杀。*(PR [#78032](https://github.com/openclaw/openclaw/pull/78032) 已尝试修复部分场景)*

### 🟠 中度 / 通道回归与稳定性
- **[Telegram 群组响应路由到 WebChat](https://github.com/openclaw/openclaw/issues/77576)** (👍 4)：5.3 版本回归，Telegram 消息有去无回。*(已有初步诊断)*
- **[Slack 响应发送到错误线程](https://github.com/openclaw/openclaw/issues/75969)**：消息错乱，影响多用户环境使用。
- **[飞书 5.2 升级后崩溃循环](https://github.com/openclaw/openclaw/issues/77116)**：配置字段不兼容导致网关无法启动。
- **[WSL2 上 WhatsApp 与 Telegram 断连/停滞](https://github.com/openclaw/openclaw/issues/73602)**：WSL2 环境下网络底层缺陷。

### 🟡 轻微 / 特定模型与功能异常
- **[DeepSeek V4 工具调用后返回 500](https://github.com/openclaw/openclaw/issues/82150)** (👍 3, 已关闭)：由于注入了空 `reasoning_content` 字段导致。
- **[Xiaomi MiMo 推理内容缺失导致多轮工具调用 400](https://github.com/openclaw/openclaw/issues/81419)** (已关闭)。
- **[WebChat 无法渲染部分助手消息 (TUI 正常)](https://github.com/openclaw/openclaw/issues/77136)**：前端渲染问题，数据未丢失。

## 6. 功能请求与路线图信号

结合社区诉求与当前活跃 PR，以下功能有望在后续版本落地：

1. **Signal 通道实时工具进度推送**：[Issue #77202](https://github.com/openclaw/openclaw/issues/77202) 提议在 Signal 中采用无需编辑（edit-free）的发送-删除模式展示工具调用进度。作为多通道一致性的拼图，极有可能被采纳。
2. **单 Gateway 多 Teams 机器人支持**：[Issue #71058](https://github.com/openclaw/openclaw/issues/71058) 要求打破当前单一 Azure App Registration 的限制，这对于企业级部署是刚需。
3. **`/v1/responses` 接口暴露内置工具调用详情**：[Issue #75074](https://github.com/openclaw/openclaw/issues/75074) 请求提供 opt-in 标志以返回内置工具细节。相关 PR [Add CLI tool plan execution #82232](https://github.com/openclaw/openclaw/pull/82232) 正在重构底层工具路由边界，二者相互呼应。
4. **隐私优先的个人 Agent QA 测试集**：[PR #78219](https://github.com/openclaw/openclaw/pull/78219) 正在补充面向个人助理真实场景的测试用例，标志着项目在强化 Agent 测试基准方面迈出重要一步。

## 7. 用户反馈摘要

通过对今日高活跃度 Issue 的提炼，发现用户的真实痛点集中在以下几个方面：

- **升级体验极具破坏性**："Previous versions 2026.3.xx I can install in ~20 min. Right now I am not able to start 2026.4.29 in normal waiting time..." —— [Issue #76042](https://github.com/openclaw/openclaw/issues/76042)。大量用户反馈近期版本安装慢、配置迁移易出错（如降级失败 [Issue #75502](https://github.com/openclaw/openclaw/issues/75502)）。
- **错误信息对用户极不友好**：在执行 `openclaw doctor` 或触发 Bug 时，Agent 直接回复 `NO!` 或 `NO`，引发了极大的困惑与挫败感（[Issue #82254](https://github.com/openclaw/openclaw/issues/82254)）。
- **对新功能（如语音）期待较高，但文档缺失**："Now that Realtime Talk is working, I love the feature... A few user-facing docs and feature improvements would make it easier..." —— [Issue #76952](https://github.com/openclaw/openclaw/issues/76952)。用户对 Realtime Talk 等新功能感到满意，但迫切需要移动端桥接和角色配置的完善文档。

## 8. 待处理积压

以下重要且高影响力的 Issue 长期未得到根本解决或缺乏官方明确的跟进 PR，建议维护团队重点关注：

1. **网关死锁问题**：[Issue #71127](https://github.com/openclaw/openclaw/issues/71127)（创建于 4 月 24 日，评论最多）至今未彻底修复，网关仍需外部强杀重启。
2. **核心性能与负载回归**：[Issue #76562](https://github.com/openclaw/openclaw/issues/76562)（高 CPU/高延迟）与 [Issue #76552](https://github.com/openclaw/openclaw/issues/76552)（Codex 运行时高负载）影响生产可用性，需尽快合并解决内存泄漏与事件循环阻塞的 PR。
3. **MCP 子进程重复拉起（内存泄漏）**：[Issue #75621](https://github.com/openclaw/openclaw/issues/75621) 导致在 Linux 环境下双倍内存消耗，缺乏实质性修复。
4. **插件审批机制死锁**：[Issue #74484](https://github.com/openclaw/openclaw/issues/74484) 暴露了设备配对后权限与范围（Scope）校验的死循环缺陷，CLI 被完全卡死。

---
*本报告由开源项目智能分析系统基于 OpenClaw GitHub 数据自动生成 (2026-05-16)*

---

## 横向生态对比

以下是为您生成的开源 AI 智能体与个人助手生态横向对比分析报告（基于 2026-05-16 数据）：

---

# 📊 个人 AI 助手与自主智能体开源生态横向对比报告 (2026-05-16)

## 1. 生态全景
当前个人 AI 助手与智能体开源生态正处于**从“单一对话”向“多通道、多模型、多代理协同”跨越的架构重塑期**。各大项目均在底层重构与功能扩张的平衡中经历阵痛，多通道（Telegram、Discord、企微等）接入的鲁棒性、长/短期记忆管理、以及沙箱安全隔离成为检验项目成熟度的核心试金石。同时，伴随 DeepSeek v4、小米 MiMo 等新一代具备深度推理能力的开源模型发布，各大 Agent 框架正面临前所未有的**复杂推理上下文兼容性与高并发稳定性挑战**。

## 2. 各项目活跃度对比
*注：数据基于过去 24 小时 GitHub Issues 与 Pull Requests 的变更数量统计（活跃数/关闭数）。*

| 项目名称 | Issues 更新 | PRs 更新 | 新版本发布 | 核心焦点 / 状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 活跃 452 / 关闭 48 | 待合并 455 / 处理 45 | **是** (v2026.5.14-beta.2) | **极高负荷**。底层重构导致性能与通道稳定性问题集中爆发，积压严重。 |
| **Hermes Agent** | 活跃 46 / 关闭 4 | 待合并 27 / 合并 23 | 无 | **高频迭代**。主攻跨平台兼容与网关架构完善，代码审查频率高。 |
| **IronClaw** | 活跃 17 / 关闭 0 | 待合并 24 / 合并 26 | **是** (v0.28.2) | **重度重构**。推进 "Reborn" 架构，集中处理基座存储和安全隔离。 |
| **NanoBot** | 活跃 6 / 关闭 53 | 待合并 5 / 合并 17 | 无 | **清淤冲刺**。补充底层文档与中文注释，性能大幅优化。 |
| **PicoClaw** | 活跃 9 / 关闭 2 | 待合并 13 / 合并 22 | **是** (Nightly) | **稳步推进**。快速修复多渠道上下文丢失与新推理模型适配。 |
| **LobsterAI** | 活跃 0 / 关闭 0 | 待合并 3 / 合并 33 | 无 | **质量收敛**。集中清理历史 PR，UI/IM 渠道体验打磨。 |
| **NanoClaw** | 活跃 6 / 关闭 44 | 待合并 6 / 合并 44 | **是** (v2.0.63) | **规范化**。发布首个正式规范版本，确立发布流程与存储基座。 |
| **CoPaw (QwenPaw)** | 活跃 13 / 关闭 11 | 待合并 16 / 合并 34 | 无 | **安全加固**。重点修补备份漏洞、沙箱逃逸与定时任务隔离。 |
| **ZeroClaw** | 活跃 11 / 关闭 9 | 待合并 42 / 合并 8 | 无 | **蓄力爆发前夜**。密集提交 v0.8.0 大版本核心架构重构代码。 |
| **Moltis** | 活跃 0 / 关闭 4 | 待合并 1 / 合并 6 | 无 | **基础补齐**。专注底层网络隧道、证书与部署兼容性修复。 |
| **NullClaw** | 活跃 2 / 关闭 0 | 待合并 0 / 合并 0 | 无 | **平稳静默**。聚焦边缘用例反馈。 |
| **TinyAGI / ZeptoClaw**| 无活动 | 无活动 | 无 | 处于停滞或休眠状态。 |

## 3. OpenClaw 在生态中的定位
* **绝对的流量与规模中心**：OpenClaw 每日近 500 级别的 Issue/PR 活跃量使其成为生态内最具代表性的“气象标”。它的社区规模远超 Hermes、IronClaw 等项目，功能大而全。
* **技术路线的激进与阵痛**：对比 PicoClaw 或 NanoClaw 的稳步推进，OpenClaw 在近期激进地进行了多通道底层和内存系统的重构，导致 Gateway 死锁、高 CPU 负载等生产级事故频发。它承担了生态内最复杂的用户需求，但也暴露出庞大开源项目在“快速扩张与稳定性保障”之间的失衡。
* **多通道与多 Agent 调度的先驱者**：相比于 NanoBot 尚在引入 `/goal` 进行单任务规划，OpenClaw 已经在处理复杂的 Session 死锁、多通道会话路由和细粒度 Agent Bootstrap 配置，其架构复杂度和能力上限极高。

## 4. 共同关注的技术方向
1. **多通道融合与上下文生命周期管理**
   * **涉及项目**：OpenClaw, PicoClaw, NullClaw, CoPaw, ZeroClaw.
   * **具体诉求**：各大框架都在着力解决 IM 渠道（Discord, Telegram, 钉钉等）消息路由错乱、身份丢失、以及多轮对话后上下文被错误截断的问题。提升单/跨渠道的记忆连贯性是刚需。
2. **新一代推理模型适配与 Provider 兼容性**
   * **涉及项目**：PicoClaw, ZeroClaw, IronClaw, CoPaw, Hermes.
   * **具体诉求**：DeepSeek v4、小米 MiMo 等具备长思维链的模型在多轮工具调用中极易丢失 `reasoning_content` 导致 400 报错。兼容不同大厂的工具命名规范和流式解析成为近期框架开发的重点“填坑”工作。
3. **本地执行沙箱与安全防御机制升级**
   * **涉及项目**：CoPaw, IronClaw, PicoClaw, ZeroClaw.
   * **具体诉求**：随着 Agent 获得自主执行代码的能力，针对 `exec` 工具的越狱、防范 `sudo` 滥用（ZeroClaw 提出引入 TOTP 门控）、以及防止递归 DoS 攻破系统成为共识。
4. **高负载下的网关/会话防卡死机制**
   * **涉及项目**：OpenClaw, Hermes, NanoClaw, NanoBot.
   * **具体诉求**：僵尸进程堆积、WebSocket 断连重试失败、以及内存泄漏导致的 OOM 是普遍痛点。建立事件循环阻塞的自动恢复与心跳切断机制迫在眉睫。

## 5. 差异化定位分析
* **巨石生态 vs 核心极简**：
  * **OpenClaw** 代表巨石架构，集成度极高但显得臃肿，适合需要全通道、开箱即用的非敏感场景；
  * **NanoClaw** 和 **LobsterAI** 倡导核心极简+技能扩展，通过轻量化部署来收敛攻击面，更受注重隐私的企业开发者青睐。
* **技术栈与部署受众差异**：
  * **IronClaw** (Rust系) 与 **Moltis** 正在深耕更底层的网络穿透、WASM 沙箱隔离和多租户架构，吸引追求极致性能和基础设施级安全的极客与企业；
  * **CoPaw (QwenPaw)** 和 **LobsterAI** 则深度本土化，聚焦钉钉、企微、飞书等国内办公软件的开箱即用体验。
* **单机助理 vs 多代理网络**：
  * **NullClaw**、**PicoClaw** 专注于做好极客个人的私有化单机助手（结合 Ollama/LM Studio）；
  * 而 **ZeroClaw** (v0.8.0) 和 **NanoClaw** 正在积极演进 Multi-Agent Runtime，向群体智能协作网络迈进。

## 6. 社区热度与成熟度
* **快速扩张/阵痛期（高活跃度，Bug 频发）**：**OpenClaw**, **ZeroClaw**。社区声音极度沸腾，但底层架构的大范围改动导致基础体验受损，需要紧急降级 Bug 积压。
* **功能迭代/演进期（健康活跃，打磨细节）**：**Hermes Agent**, **IronClaw**, **CoPaw**。架构演进目标明确，开发团队能较快响应社区高级需求（如精细化鉴权、安全网关）。
* **质量收敛/维护期（高频合并，清偿债务）**：**LobsterAI**, **NanoBot**, **NanoClaw**, **Moltis**。度过了最初的混乱期，目前正努力清理技术债、规范化发版流程、完善多语种文档，成熟度较高。
* **静默/停滞期**：**NullClaw**, **TinyAGI**, **ZeptoClaw**。仅靠社区零星反馈驱动，核心迭代趋缓。

## 7. 值得关注的趋势信号
1. **API 调用成本倒逼底层架构优化**：NanoBot 和 CoPaw 社区对 Token 消耗与缓存命中率极其敏感。通过前缀注入优化（如 NanoBot PR #3844）和 Token 链路可视化，将成为开源框架留住企业级用户的关键拼图。
2. **“静默失败”成为用户最大不可忍受项**：多个项目社区反馈，相比功能缺失，Agent 在后台陷入死锁或掉线而不报错最令人挫败。建立全局健康监测面板与基于 WebSocket 的低延迟告警机制将是下一代框架的标配。
3. **极客对全本地化隐私部署的需求觉醒**：结合本地小模型与开源框架构建“数字第二大脑”的呼声越来越高，NullClaw 和 PicoClaw 社区对无缝对接 Ollama/LM Studio 的诉求，暗示了本地算力与云端智能体融合的广阔前景。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-05-16)

> 数据来源：[NanoBot (github.com/HKUDS/nanobot)](https://github.com/HKUDS/nanobot) | 分析周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日维持了**极高的项目活跃度与社区参与度**。过去 24 小时内，项目处理了多达 59 条 Issue（其中 53 条被关闭）和 22 条 PR（其中 17 条被合并/关闭），展现了维护团队极强的 Issue 清单清理与代码合入效率。

开发重心主要集中在**大规模的中文注释与文档基础设施建设**（贡献者 xianqiangfu 完成了 20 余个文档/注释任务的闭环）、**核心 Agent 执行链路的性能优化与功能增强**（如引入 plan 工具和优化 KV 缓存命中），以及针对 WebUI 和 Provider 的多项关键 Bug 修复。

今日没有发布新的正式版本，但从合并的 PR 来看，项目正在为下一个包含重大功能更新（如长效任务状态管理、生命周期网关通知）的版本进行密集的代码冲刺。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

今日共有 17 个 PR 被合并或关闭，涵盖了性能优化、新功能引入、架构重构和安全加固等多个维度，显著提升了项目的整体成熟度：

*   **Agent 核心能力升级与性能优化**：
    *   **[PR #3844](https://github.com/HKUDS/nanobot/pull/3844) (合并)**: **性能大幅优化**。将运行时上下文（时间、通道等）移至用户内容之后注入，保持了前缀稳定性，从而大幅提升了 LLM 的 KV cache 命中率，降低了推理成本。
    *   **[PR #3788](https://github.com/HKUDS/nanobot/pull/3788) (合并)**: 引入了 `/goal` 命令与长效任务支持（`long_task`），实现了端到端的持久化目标状态追踪。
    *   **[PR #3841](https://github.com/HKUDS/nanobot/pull/3841) (合并)**: 架构重构，移除了冗余的 `GlobTool`，将其功能统一收归到 `GrepTool` 中，精简了工具链。
*   **安全与跨平台修复**：
    *   **[PR #3842](https://github.com/HKUDS/nanobot/pull/3842) (合并)**: 安全修复，限制了 `message` 工具中本地媒体附件的路径访问，防止工作区越权读取。
    *   **[PR #3764](https://github.com/HKUDS/nanobot/pull/3764) (合并)**: 增强 Windows 兼容性，支持在 Shell 工具中提取 UNC 网络路径。
*   **通道与消息治理**：
    *   **[PR #3752](https://github.com/HKUDS/nanobot/pull/3752) (合并)**: 修复了 WhatsApp 语音消息转录后依然提示无法处理音频的 Bug。
    *   **[PR #3774](https://github.com/HKUDS/nanobot/pull/3774) (合并)**: 增加了私聊场景下的发送者审批（Pairing）机制，增强了作为私有助理部署的安全管控。
*   **大规模文档与注释补充**：
    *   合并了由 `xianqiangfu` 提交的大量 PR（对应 Issue #3817 到 #3839），完成了项目架构图、流程图、核心代码中文注释及全套中文开发/部署文档的补充，大幅降低了国内开发者的入门门槛。

---

## 4. 社区热点

*   **WebUI 渲染与状态显示问题**：**[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)**（评论 9 条）。多位用户反馈最新源码版本（5.13）在 WebUI 打印会话内容时出现显示错乱，需要刷新页面才能恢复。该问题目前处于 Open 状态，表明近期前端代码的合入可能引入了渲染回归。
*   **配置文件格式的演进**：**[Issue #3402](https://github.com/HKUDS/nanobot/issues/3402)**（评论 9 条）。社区关于“使用 TOML 替代 JSON 作为配置文件”的讨论依然热烈。TOML 对人工编辑更加友好，这一需求反映了高级用户对 NanoBot 配置体验优化的强烈诉求。

---

## 5. Bug 与稳定性

今日报告并处理了多个关键 Bug，整体稳定性进一步提升：

1.  **[高] WebUI 渲染显示错乱**：**[Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)**（Open）。影响最新版本的 WebUI 核心交互体验，目前**暂无关联的 fix PR**，需维护者优先关注。
2.  **[中] MiMo 模型思考状态控制失效**：**[Issue #3845](https://github.com/HKUDS/nanobot/issues/3845)**。通过网关（如 OpenRouter）路由调用 MiMo 时，无法成功禁用推理状态。**已有 Fix PR**：**[PR #3851](https://github.com/HKUDS/nanobot/pull/3851)** 待合并。
3.  **[中] Codex 提示缓存失灵**：**[Issue #2440](https://github.com/HKUDS/nanobot/issues/2440)**。单轮哈希导致多轮对话无法命中缓存。**已由 [PR #3793](https://github.com/HKUDS/nanobot/pull/3793) 修复**并合并。
4.  **[中] 飞书通道网关异常**：**[Issue #3787](https://github.com/HKUDS/nanobot/issues/3787)**。未注册的事件处理程序导致机器人在被移出群组时报错。目前处于 Open 状态，**已通过 [PR #3792](https://github.com/HKUDS/nanobot/pull/3792) 补充了生命周期钩子予以解决**。
5.  **[低] Ruff Format 导致大量无关 Diff**：**[Issue #3849](https://github.com/HKUDS/nanobot/issues/3849)**。开发者运行格式化命令产生大量历史代码变更。**已有 Fix PR**：**[PR #3850](https://github.com/HKUDS/nanobot/pull/3850)** 调整了贡献指南。

---

## 6. 功能请求与路线图信号

从近期的 PR 和 Issue 来看，NanoBot 正在向**更强大的任务规划能力**和**更广泛的模型/网关兼容性**演进：

*   **复杂任务规划能力**：**[PR #3791](https://github.com/HKUDS/nanobot/pull/3791)**（Open）提出新增 `plan` 工具，允许 Agent 在执行前进行任务拆解并追踪进度，且能在上下文压缩时存活。这标志着 NanoBot 正在向 AutoGPT 等具备复杂规划能力的 Agent 框架靠拢。
*   **更多网关与模型支持**：**[PR #3785](https://github.com/HKUDS/nanobot/pull/3785)**（Open）引入了 OpenCode Go 网关支持，打通了对 GLM、Kimi、DeepSeek 等国产模型的统一兼容调用。
*   **技能持久化防丢失**：**[PR #3847](https://github.com/HKUDS/nanobot/pull/3847)**（Open）提出了 `skill_load` 工具，以解决多轮对话中 `skill.md` 内容被覆盖的痛点。

**预测**：`plan` 工具（#3791）和 MiMo 网关修复（#3851）极大概率会在下一个 minor 版本中合入主线。

---

## 7. 用户反馈摘要

*   **痛点（飞书/企微集成）**：使用飞书等国内办公软件作为通道的用户经常遇到生命周期管理、事件监听遗漏导致的控制台报错问题（如 #3787）。
*   **痛点（大模型调用成本）**：用户对上下文缓存命中率极其敏感（如 #2440 讨论的 Codex 缓存 Key 问题），说明在生产环境中，使用 NanoBot 的 API 成本是一个核心考量点。
*   **满意度（文档建设）**：社区对一系列文档/架构图的补充（#3817-#3839）反响积极，极大改善了以往“源码虽然开源但难以二开”的现象。

---

## 8. 待处理积压

*   **安全核心功能等待合入**：**[Issue #2172](https://github.com/HKUDS/nanobot/issues/2172)**（Open，评论 4 条）。用户强烈呼吁不要在 `config.json` 中明文存储密钥，建议支持环境变量或 1Password 等外部密钥管理工具。此功能对于企业级部署至关重要，建议团队尽快排期。
*   **长期存在的 WebUI 性能与格式问题**：**[Issue #3746](https://github.com/HKUDS/nanobot/issues/3746)**（关联 PR #3782）。WebUI 启动时预载入大量 Markdown 导致性能问题，虽然已有修复 PR，但仍需进一步验证其对复杂渲染场景的影响。
*   **活跃 PR 需 Code Review**：目前有 5 个待合并的 PR（如 `plan` 工具、网关支持等），由于涉及核心架构变动，需要核心维护者投入时间进行详细 Review。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🤖 Hermes Agent 项目动态日报 (2026-05-16)

## 1. 今日速览
Hermes Agent 今日保持着**高度活跃**的开发与社区互动状态。过去 24 小时内，项目共处理了 **50 条 Issue 更新**（新开/活跃 46 条，关闭 4 条）和 **50 条 PR 更新**（待合并 27 条，合并/关闭 23 条），展示了维护者高频的代码审查和社区响应速度。

尽管今日**没有发布任何新版本**，但开发重心明显集中在**系统稳定性提升、跨平台（特别是 Windows）兼容性修复、以及 Gateway 架构的完善**上。社区对 TUI 主题优化、Gateway 消息平台（Telegram/Matrix）的连通性、以及企业级鉴权（xAI OAuth、Azure Entra ID）表现出了强烈需求。

---

## 2. 版本发布
**无新版本发布**。
*(注：当前代码库正在密集积累针对 Windows 环境、Gateway 路由机制及特定 Provider 兼容性的修复，预计在合并当前积压的 27 个 Pending PRs 后，可能会迎来一个重要的补丁版本更新。)*

---

## 3. 项目进展
今日共有 **23 个 PR 被合并或关闭**，重点推进了以下几个领域的代码完善：

*   **代理调度与生命周期修复**：维护者 `teknium1` 合并了关于子代理心跳线程孤儿的修复方案 (PR [#26621](https://github.com/NousResearch/hermes-agent/pull/26621))，该 PR 整理自社区贡献，有效防止了网关超时监控的异常。
*   **工具与文档对齐**：关闭了关于 `hermes_tools_mcp_server` 范围对齐的修复 PR [#26603](https://github.com/NousResearch/hermes-agent/pull/26603)。该 PR 修正了文档与底层 `EXPOSED_TOOLS` 行为不一致的问题，避免了开发者误用仅限内部循环使用的代理工具（如 `memory`, `delegate_task`）。
*   **CI 流水线防护**：合入了一个重要的重构 PR [#26611](https://github.com/NousResearch/hermes-agent/pull/26611)，新增了 CI 检查以拒绝与 `main` 分支无共同祖先的 PR，防止类似历史提交树被污染的严重事故再次发生。
*   **鉴权体验改善**：合并了 PR [#26610](https://github.com/NousResearch/hermes-agent/pull/26610)，在文档层面为 xAI Grok 的 OAuth-over-SSH 添加了明确指引，缓解了无头服务器部署的鉴权痛点。

---

## 4. 社区热点
今日讨论热度最高、最受关注的议题集中在**用户界面体验**与**生产环境部署**：

*   🥇 **TUI 仪表盘主题可读性差**：Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080)（👍 17，评论 11）。社区普遍反映当前内置主题（Midnight, Ember 等）的字体和对比度极不标准，导致长时间阅读极易疲劳。该痛点已持续半个多月，今日引发大量共鸣。
*   🥈 **Matrix/Synapse 官方 Docker 镜像崩溃**：Issue [#25495](https://github.com/NousResearch/hermes-agent/issues/25495)（P1 优先级，评论 7）。用户反馈最新版 Docker 镜像在处理网关所有权时陷入死锁，导致 Matrix 平台完全瘫痪。该问题已导致部分生产用户被迫回退至旧版本镜像。
*   🥉 **长期会话的时间漂移问题**：Issue [#9628](https://github.com/NousResearch/hermes-agent/issues/9628)（评论 1，历史关注度高）。在 Telegram/Discord 等多日长连接会话中，Agent 的系统提示词时间停留在会话创建时，导致 Agent 产生“时间认知错乱”，该底层体验缺陷再次引发讨论。

---

## 5. Bug 与稳定性
今日新报告了多个关键 Bug，主要集中在 Provider 兼容性与 Gateway 架构边界情况：

**🔴 严重 (P1)**
*   **Codex 后端拒绝参数 (HTTP 400)**：Issue [#26599](https://github.com/NousResearch/hermes-agent/issues/26599)。在使用 `gpt-5.5` 等 Codex 路由模型时，由于 Hermes 强行注入了不支持的 `extra_headers` 字段导致所有主调用失败。*（暂无 Fix PR）*
*   **系统伪装用户角色绕过安全限制**：Issue [#25839](https://github.com/NousResearch/hermes-agent/issues/25839)。Agent 后台更新 Skill 库的机制伪装成了 `role: "user"`，导致并行的其他 Agent 实例被误导，在未经用户同意的情况下修改了核心 Skills。*（暂无 Fix PR）*

**🟠 高优先级 (P2)**
*   **Telegram 群聊发送者身份丢失**：Issue [#26581](https://github.com/NousResearch/hermes-agent/issues/26581)。Gateway 模式下处理 Telegram 群组消息时剥离了发送者信息，导致多用户场景下 Agent 变成了“盲人”，无法区分对话对象。
*   **Delegate 忽略模型重写配置**：Issue [#26482](https://github.com/NousResearch/hermes-agent/issues/26482)。子代理（subagents）完全无视了 `config.yaml` 中指定的 `delegation.model`，强制继承父级模型，导致精细化任务分配失效。*（暂无 Fix PR）*
*   **自定义 Provider 视觉模块路由错误**：Issue [#12638](https://github.com/NousResearch/hermes-agent/issues/12638)。视觉任务将带有自定义名称的 provider（如 `custom:morecode-openai`）错误回退到了默认端点。*（已有对应修复 PR [#26594](https://github.com/NousResearch/hermes-agent/pull/26594) 提交待审查）*

---

## 6. 功能请求与路线图信号
今日涌现了一批高质量的功能请求（RFC），为项目进化指明了方向：

*   **🌟 RFC: 阶段级工具白名单（降低决策疲劳）**：Issue [#26524](https://github.com/NousResearch/hermes-agent/issues/26524)。提议在 pre-LLM hook 中引入动态工具过滤机制。这将大幅减少 LLM 的决策疲劳和幻觉，是提升 Agent 稳定性的架构级建议。
*   **🌐 原生 xAI OAuth / 订阅支持**：Issue [#26588](https://github.com/NousResearch/hermes-agent/issues/26588) & Issue [#26563](https://github.com/NousResearch/hermes-agent/issues/26563)。社区急需在无头模式下原生支持 SuperGrok 的 OAuth 流程。目前相关文档指引已合入，预计底层原生支持将在下个版本排期。
*   **🔒 不可变/受保护的核心 Skills**：Issue [#25083](https://github.com/NousResearch/hermes-agent/issues/25083)。用户请求对涉及安全策略的核心 Skill 设置修改门禁，防止 Agent 自主篡改底层规则。
*   **⏰ Cron 任务的多时区支持**：Issue [#16610](https://github.com/NousResearch/hermes-agent/issues/16610) 与 Issue [#26549](https://github.com/NousResearch/hermes-agent/issues/26549)。要求从系统级到单个 Cron 任务级支持配置如 `Asia/Shanghai` 等 IANA 时区。*（已有配套 UI 提案 PR [#26614](https://github.com/NousResearch/hermes-agent/pull/26614) 提交）*

---

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以清晰提炼出用户在实际生产环境下的真实反馈：

*   **痛点 1：Docker 部署体验割裂**：用户（[#12188](https://github.com/NousResearch/hermes-agent/issues/12188)）抱怨目前的 Docker 镜像不包含交互式控制台配置，必须手动进入容器执行 `hermes model`，要求尽快完善基于环境变量的配置注入机制。
*   **痛点 2：长期记忆存在状态损坏风险**：深度用户（[#5563](https://github.com/NousResearch/hermes-agent/issues/5563)）反馈在生产环境中高频使用会导致 Token 浪费、`state.db` 数据损坏和产生“环境幻觉”。尽管赞美了 Skill 机制，但也指出了持久化层的脆弱性。
*   **痛点 3：Windows 环境依然弱势**：用户指出在 Windows 环境下运行存在大量路径错误和警告日志刷屏。*（好消息是，开发者今日已提交 PR [#26618](https://github.com/NousResearch/hermes-agent/pull/26618) 和 PR [#26620](https://github.com/NousResearch/hermes-agent/pull/26620) 集中修复了 Windows 的引导和日志问题。）*

---

## 8. 待处理积压
以下高价值 Issue 存在较长时间挂起或目前缺乏维护者响应，建议关注：

*   ⚠️ **Gateway 连接重试永久停止问题**：Issue [#17063](https://github.com/NousResearch/hermes-agent/issues/17063)。对于长期运行的 Telegram 适配器，20 次失败重试后直接被踢出，而非无限期或长间隔重试。（已关闭但无明确 Fix 记录，需确认是否解决）。
*   ⚠️ **压缩机制导致的 Telegram 预检死循环**：Issue [#20470](https://github.com/NousResearch/hermes-agent/issues/20470)（👍 3）。会话压缩触发分割后，由于绑定信息未更新，导致随后的消息陷入死循环，严重影响网关稳定性。
*   ⏳ **Session 去中心化网关集成**：PR [#6948](https://github.com/NousResearch/hermes-agent/pull/6948)。该 PR 旨在接入 Session 协议作为去中心化网关，已开放超过一个月且测试完备，目前仍在等待核心团队的 Architecture Review。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

这里是 **PicoClaw** 项目 2026-05-16 的开源动态日报。作为您的个人 AI 助手与智能体领域项目分析师，我基于过去 24 小时的 GitHub 活动数据为您整理了以下报告。

---

# 📊 PicoClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
PicoClaw 项目今日保持着**高度活跃且健康的迭代节奏**。过去 24 小时内，项目共处理了 **35 个 Pull Requests（其中 22 个顺利合并或关闭）**，并完成了 **11 个 Issues 的更新（2 个关闭，9 个新开或活跃）**。同时，系统发布了最新的 `v0.2.8-nightly.20260515` 自动构建版本。从合并的 PR 来看，开发团队正在集中精力解决多渠道（Telegram、Matrix、飞书）上下文丢失问题、加强多模态推理模型（如 DeepSeek v4, 小米 MiMo）的兼容性，并持续打磨系统安全防护与配置体验。整体而言，项目处于**快速修BUG与功能细化的稳步推进期**。

---

## 2. 版本发布
- **[nightly] Nightly Build (v0.2.8-nightly.20260515.794eb04f)**
  - **详情**: 这是基于 main 分支的最新自动化构建版本。包含了今日合并的多项重要修复（如 MiMo 推理对齐、OpenAI 兼容层流处理修复、媒体载荷解析等）。
  - **迁移/使用注意**: Nightly 版本为自动化构建，可能存在不稳定情况。建议测试环境优先部署以验证小米 MiMo 模型或 Telegram Topic 相关的修复。
  - **完整变更日志**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

## 3. 项目进展
今日共有 **22 个 PR 被合并/关闭**，标志着项目在多个关键领域取得了实质性进展：

- **大模型推理与兼容性增强**:
  - [PR #2862](https://github.com/sipeed/picoclaw/pull/2862) `[CLOSED]`: 统一了小米 MiMo 与 DeepSeek 的多轮思考模式历史回放逻辑，修复了多轮对话 400 错误。
  - [PR #2741](https://github.com/sipeed/picoclaw/pull/2741) `[CLOSED]`: 修复了 OpenAI 兼容层在流式响应中丢失 `reasoning_content` 的解析问题。
- **客户端与多模态能力修复**:
  - [PR #2874](https://github.com/sipeed/picoclaw/pull/2874) `[CLOSED]`: 修复了通过 pico attachments 和 client 传递图像媒体时载荷丢失的问题。
- **配置与架构规范化**:
  - [PR #2766](https://github.com/sipeed/picoclaw/pull/2766) `[CLOSED]`: 将全项目文档同步至 V3 版本的配置格式（如 `api_key` 到 `api_keys`，`channels` 到 `channel_list`），极大降低了新用户的配置门槛。
  - [PR #2811](https://github.com/sipeed/picoclaw/pull/2811) `[CLOSED]`: 增加了对 MCP streamable HTTP 别名的支持，并引入了基于 Docker 的通用集成测试框架。

---

## 4. 社区热点
今日社区活跃度较高，部分历史 Issue 持续引发关注，主要集中在**渠道集成体验**与**内置工具安全**上：

- **[Issue #28](https://github.com/sipeed/picoclaw/issues/28) [OPEN]** - **LM Studio Easy Connect (👍 2, 评论 19)**
  - **分析**: 这是一个存在数月的老问题。用户强烈希望能提供一种更简单的方式将 PicoClaw 连接到本地运行的 LM Studio。极高的评论数表明本地化、私有小模型部署是个人 AI 助手用户的核心需求。
- **[PR #2836](https://github.com/sipeed/picoclaw/pull/2836) [OPEN]** - **Windows PowerShell 安全绕过修复**
  - **分析**: 社区开发者提交了针对 Windows 下 PowerShell 编码绕过执行注入的安全修复。安全相关的 PR 历来是社区审视的焦点。
- **[Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) [OPEN]** - **exec 工具的 guardCommand 误报 (👍 2, 评论 11)**
  - **分析**: 大量用户在执行外部命令（如查询天气的 `curl`）时被安全守卫错误拦截。过度的安全限制与工具易用性之间的冲突是当前热议点。

---

## 5. Bug 与稳定性
今日报告了多个影响稳定性的 Bug，部分已有对应的修复 PR：

1. **[严重] 语音转录成功但未传递给 LLM ([Issue #2817](https://github.com/sipeed/picoclaw/issues/2817))**
   - 表现: Groq Whisper 转录成功，但文本未替换提示词，LLM 收到的是无法解析的 `[voice]`，导致模型“自作主张”尝试二次转录。
   - 状态: 待修复。
2. **[严重] Matrix 渠道双重故障 ([Issue #2816](https://github.com/sipeed/picoclaw/issues/2816), [Issue #2815](https://github.com/sipeed/picoclaw/issues/2815))**
   - 表现: Matrix 无法识别发送者身份（缺乏 Telegram 中 `chat_id` 的等效机制）；`allow_from` 安全过滤形同虚设（任何非空值都会阻止所有消息）。
   - 修复进展: **已有对应 PR** [PR #2827](https://github.com/sipeed/picoclaw/pull/2827)，修复了包含 `@` 和 `:` 的 MXIDs 解析问题。
3. **[中等] 飞书渠道通知显示不全 ([Issue #2785](https://github.com/sipeed/picoclaw/issues/2785))**
   - 表现: 设置 `separate_messages: false` 时，飞书通知中心仅显示第一个工具调用消息，后续被吞。
   - 修复进展: **已有对应 PR** [PR #2822](https://github.com/sipeed/picoclaw/pull/2822)，用于在同步完成后清理子工具反馈。
4. **[低] 配置文件无法禁用内置图像加载工具 ([Issue #2878](https://github.com/sipeed/picoclaw/issues/2878))**
   - 状态: **已确认并修复**，见刚合并的 [PR #2879](https://github.com/sipeed/picoclaw/pull/2879)。

---

## 6. 功能请求与路线图信号
通过近期 Issue 和活跃 PR，可以提取出项目下一阶段的演进信号：

- **精细化上下文与会话管理**: [Issue #2820](https://github.com/sipeed/picoclaw/issues/2820) 提出了“非破坏性重置”（不清除 Seahorse 历史记录的情况下重置会话）的需求。结合 bogdanovich 提交的多个关于 Telegram Topic 保留、异步上下文保留的 PR（[PR #2791](https://github.com/sipeed/picoclaw/pull/2791), [PR #2794](https://github.com/sipeed/picoclaw/pull/2794)），**“上下文生命周期管理”**显然是近期的核心开发路线。
- **本地/边缘模型友好度提升**: [Issue #28](https://github.com/sipeed/picoclaw/issues/28) 持续呼吁简化本地模型（如 LM Studio）的接入流程。虽然目前只是用户讨论，但极有可能成为 V0.2.9 或 V0.3.0 的重点功能。
- **高级执行安全策略**: [PR #2877](https://github.com/sipeed/picoclaw/pull/2877) 提议引入 `Tirith` 作为命令执行前的内容级威胁扫描器。这表明项目在赋予 Agent 自主执行权（如 `exec` 工具）时，正在探索更强大的安全沙箱机制。

---

## 7. 用户反馈摘要
- **痛点 1: Android 端数据访问崩溃**：用户反馈在 Android v0.2.8 中无法访问任何标签页数据 ([Issue #2744](https://github.com/sipeed/picoclaw/issues/2744))，移动端的稳定性仍需加强。
- **痛点 2: Agent 的“自我认知”受限**：用户在使用 Matrix 等非 Telegram 渠道时发现，Agent 根本不知道是谁在跟它对话。这是多渠道适配上普遍存在的一致性体验问题。
- **痛点 3: 过于严格的沙箱限制**：`exec` 工具的安全守卫被用户抱怨“极其简单粗暴”（误杀正常的网络请求或脚本路径），导致高级自动化工作流受挫。

---

## 8. 待处理积压
以下重要 Issue/PR 搁置时间较长（部分被打上 `stale` 标签），需要维护者重点关注以免流失社区贡献：

- **[PR #2626](https://github.com/sipeed/picoclaw/pull/2626) [OPEN]** - 支持多模态 LLM 的原生音频输入。这是一个重要的功能增强 PR，已停滞近一个月。
- **[PR #2270](https://github.com/sipeed/picoclaw/pull/2270) [OPEN]** - 修复配置解析中 `SecureString` 导致的 Panic 崩溃问题。涉及底层的严重 Bug，虽然已有修复方案但尚未合入。
- **[Issue #2744](https://github.com/sipeed/picoclaw/issues/2744) [OPEN]** - Android 端 v0.2.8 的严重访问故障，影响移动端基本可用性，急需排查和确认。

---
*分析完毕。PicoClaw 在 AI Agent 工具链与大模型适配上的迭代速度值得肯定，建议持续关注多渠道消息路由重构与本地模型接入两个维度的后续进展。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-05-16)

## 1. 今日速览

NanoClaw 今日迎来了项目发展史上的一个重要里程碑：**正式确立了版本发布规范，并推出了首个符合规范的发行版 v2.0.63**。项目在过去24小时内展现出**极高的维护者活跃度与社群收尾效率**——共有 44 个 Issues 被关闭，44 个 PR 被合并或关闭，积压的大量历史问题得到了系统性清理。在处理历史债务的同时，社区也保持着一贯的创新活力，新增了 6 个 Issues 和 6 个待合并 PR，涵盖了健康监控、多模型支持、数据库权限修复等前沿与核心功能。整体而言，项目当前处于**健康且高速迭代**的阶段，稳定性和扩展性正在同步提升。

## 2. 版本发布

**v2.0.63** (发布于 2026-05-15)
- **更新性质**：首个规范化发布的版本。项目自此确立了“每次 `package.json` 版本提升合并到 `main` 分支即生成对应 GitHub Release”的策略。此前项目仅有版本号记录而无正式 Release，导致追踪困难。
- **破坏性变更与迁移注意**：本次版本未提及破坏性 API 变更，但服务命名机制从 v1 的 `com.nanoclaw` 变更为基于 SHA1 哈希的按实例唯一标识（如 `com.nanoclaw.<sha1>`）。**多实例部署的用户在升级时需注意 systemd/launchd 服务名称的变更**（详见 PR [#2493](https://github.com/qwibitai/nanoclaw/pull/2493)）。

## 3. 项目进展

今日大量 PR 被合并，标志着项目在可维护性、运行时稳定性和架构演进上取得了重要突破。以下为关键合并 PR：

- **基础设施与可维护性**：
  - [PR #2502](https://github.com/qwibitai/nanoclaw/pull/2502)：**新增 CHANGELOG.md 与 RELEASING.md**，填补了项目长期缺乏标准变更日志和发布流程文档的空白，极大提升了版本可追踪性。
  - [PR #2489](https://github.com/qwibitai/nanoclaw/pull/2489)：对齐 Gmail/GCal 技能文档以适配 v2 架构，降低新贡献者理解成本。
- **核心 Bug 修复与稳定性**：
  - [PR #954](https://github.com/qwibitai/nanoclaw/pull/954)：**修复了通过 OpenRouter 路由非 Anthropic 模型时的崩溃和响应丢失问题**，极大改善了多模型使用体验。
  - [PR #956](https://github.com/qwibitai/nanoclaw/pull/956)：在安装和验证阶段增加了 LLM 凭证快速校验，避免运行时因无效密钥导致静默崩溃。
  - [PR #967](https://github.com/qwibitai/nanoclaw/pull/967)：增强了卡死会话和代理轮次的恢复机制。
  - [PR #2493](https://github.com/qwibitai/nanoclaw/pull/2493)：修复了服务名称冲突，支持多实例安装隔离。
- **架构重构（清理技术债务）**：
  - [PR #523](https://github.com/qwibitai/nanoclaw/pull/523) 与 [PR #524](https://github.com/qwibitai/nanoclaw/pull/524)：将庞大的 `container-runner.ts` 中的解析和快照逻辑抽离为独立模块，降低代码复杂度。
  - [PR #525](https://github.com/qwibitai/nanoclaw/pull/525)：将 670 行的 `db.ts` 按领域（聊天、消息、任务等）拆分为独立模块，大幅提升可测试性。

## 4. 社区热点

1. **[Issue #80](https://github.com/qwibitai/nanoclaw/issues/80) - [点赞: 60 | 评论: 32]**：呼吁支持除 Claude/Anthropic 外的其他运行时（如 Gemini, Codex, Opencode）。这反映出社区对**多模型灵活切换**的强烈需求，尤其是在部分供应商开始打击第三方客户端的背景下。
2. **[Issue #384](https://github.com/qwibitai/nanoclaw/issues/384) - [点赞: 16 | 评论: 9]**：提出构建**技能市场/注册中心**。该请求抓住了 NanoClaw 相比 OpenClaw 的核心安全优势（最小化攻击面），社区希望通过集中化的技能分发提升生态发展。
3. **[Issue #439](https://github.com/qwibitai/nanoclaw/issues/439) - [点赞: 9 | 评论: 2]**：用户抱怨当前基于 Claude 的安装方式成本高且繁琐，建议提供更简单的传统 Shell 脚本安装方式。

## 5. Bug 与稳定性

今日集中关闭了大量涉及系统稳定性的高危/致命 Bug，整体鲁棒性大幅提升：

- **P0 Critical - 内存泄漏导致崩溃**：[Issue #595](https://github.com/qwibitai/nanoclaw/issues/595) 报告了运行 40 小时后因幽灵 Socket 堆积导致的 OOM 崩溃。（状态：已关闭，已被底层修复吸收）。
- **P1 High - 认证令牌过期致服务中断**：[Issue #730](https://github.com/qwibitai/nanoclaw/issues/730) 报告了 OAuth Token 隔夜过期导致服务 401 错误。（已有相关修复方案被纳入）。
- **P1 High - 权限与通信隐患**：
  - [Issue #635](https://github.com/qwibitai/nanoclaw/issues/635)：WhatsApp 认证文件使用不安全的 644 权限，而非 600。
  - [Issue #233](https://github.com/qwibitai/nanoclaw/issues/233)：在特定时序下，发往活动容器的 IPC 消息会被静默丢弃。
  - [Issue #341](https://github.com/qwibitai/nanoclaw/issues/341)：Discord 技能包含过时的 Apple Container 代码，破坏了 Docker 用户体验。

## 6. 功能请求与路线图信号

从当前的活跃 PR 和刚关闭的 Issues 可以观察到项目下一阶段的演进方向：

- **健康监测与自动警报**：[PR #2498](https://github.com/qwibitai/nanoclaw/pull/2498) 引入了主机侧静默失败检测与 Discord 告警机制，正在寻求合并。
- **增强上下文管理**：[PR #2500](https://github.com/qwibitai/nanoclaw/pull/2500) 提交了 `/add-early-compact-nudge` 技能，通过在上下文达到阈值上限前主动触发压缩，减少对话截断风险。
- **多代理网络构建**：[PR #2497](https://github.com/qwibitai/nanoclaw/pull/2497) 引入了 Agent Network 技能，标志着 NanoClaw 正在从“单代理执行器”向“多代理协作网络”进化。
- **低成本 TTS/STT 闭环**：[Issue #2396](https://github.com/qwibitai/nanoclaw/issues/2396) 提出加入 Groq Whisper 作为云端后端，结合本地 `whisper.cpp` 构建混合处理模式。
- **快捷模型切换**：[PR #2490](https://github.com/qwibitai/nanoclaw/pull/2490) 引入了 LiteLLM 提供商支持，响应了社区 #80 号呼声，允许更灵活地接入第三方大模型。

## 7. 用户反馈摘要

从今日的 Issue 动态中，可以提炼出以下核心用户画像和反馈：
- **真正的痛点在于“静默失败”**：多个用户（如 #595, #730, #611）反馈应用在后台无响应，但缺乏明显报错。社区迫切需要**更可观测的日志与告警机制**（这正是 PR #2498 试图解决的）。
- **非标准环境部署困难**：Linux 无 root 权限的 SSH 环境、Docker/Colima 环境用户遇到较多阻力（如 #413, #414, #341）。用户希望安装流程能更鲁棒。
- **认可“核心极简”的安全理念**：社区高度赞同 NanoClaw “从最小核心开始，通过技能扩展”的设计哲学，这与 OpenClaw 庞大且难以审计的攻击面形成鲜明对比（#384）。
- **通道支持存在碎片化**：用户希望支持更多通道（Signal #29）、更丰富的富媒体解析（#184），以及更原生的线程回复支持（#618）。

## 8. 待处理积压

以下高价值 PR 仍处于 Open 状态，建议维护者优先评估：

1. **[PR #2496](https://github.com/qwibitai/nanoclaw/pull/2496)**：修复 `writeOutboundDirect()` 中数据库只读模式导致拒绝响应无法下发的致命逻辑错误。**影响核心通信链路，建议高优合并。**
2. **[PR #2494](https://github.com/qwibitai/nanoclaw/pull/2494)**：修复 `su -` 和无头容器等非标准 PAM 环境下 systemd 服务检测失败的问题，大幅提升服务器部署兼容性。
3. **[PR #2497](https://github.com/qwibitai/nanoclaw/pull/2497)**：Agent Network 多代理架构，属于重大架构扩展，需要维护者投入时间进行设计评审。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

作为一名专注于 AI 智能体与个人 AI 助手领域的开源项目分析师，我根据 NullClaw 项目的 GitHub 追踪数据，为您整理了 **2026-05-16** 的项目动态日报。

---

# NullClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
过去 24 小时内，NullClaw 项目的整体活跃度表现为**低频但高质量的用户反馈输入**。项目今日未产生新的代码合并（PR）或版本发布，核心开发者的重心可能仍在长期分支的开发或规划中。社区方面，今日新增了 2 个 Issue（目前均处于 Open 状态，且尚无关闭记录），主要聚焦于 **Telegram 适配器的上下文感知能力增强** 以及 **定时任务模块的授权鉴权问题**。总体而言，项目当前处于平稳迭代期，社区正积极为多平台集成场景提供边缘用例的反馈。

## 2. 版本发布
**无。** 
今日项目未发布任何新版本。

## 3. 项目进展
**无重大进展。**
过去 24 小时内，项目没有更新或合并任何 Pull Requests（待合并: 0，已合并/关闭: 0）。代码库在今日处于冻结/静默状态，建议关注后续几天的代码提交动态。

## 4. 社区热点
今日社区活跃度完全集中在 2 个新开 Issues 上，反映了用户在实际部署和深度使用过程中的核心诉求：

*   **强化多轮对话记忆能力**：[Issue #916 Telegram: include reply_to_message text in inbound context](https://github.com/nullclaw/nullclaw/issues/916)
    该 Issue 由用户 weissfl 提出，直指当前 AI 助理在 Telegram 群聊场景中的“短视”痛点。目前 NullClaw 仅利用 `reply_to_message` 来判断是否被@，而**忽略了提取被回复消息的原文**。这导致在多轮交互或群聊复杂上下文中，AI 缺乏连贯性。该诉求体现了用户对个人 AI 助手具备“长期记忆与上下文感知”的强烈需求。
*   **第三方工具集成问题**：[Issue #915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)
    用户 scabros 报告了在本地 Ubuntu 环境下结合 Ollama (qwen3.6:27b / RTX 3090) 使用时，LLM 基础对话正常，但内置的定时任务调度器出现鉴权失败的问题。这反映了高级玩家在“本地化部署 AI 助手”时遇到的权限控制阻碍。

## 5. Bug 与稳定性
今日记录了 1 个明确的 Bug 报告，按严重程度评估如下：

*   **🟡 中等**：**Scheduler 授权失败** - [Issue #915](https://github.com/nullclaw/nullclaw/issues/915)
    *   **表现**：用户在使用外部 Ollama 接入时，常规 Tool calling 工作正常，但调用内置的“定时任务”功能时，在 Telegram 和其他客户端中均提示 `unauthorized`。
    *   **影响面**：阻碍了依赖定时触发自动化工作流的核心用户群体。
    *   **修复状态**：**尚无 Fix PR**，等待开发团队确认是权限校验逻辑的漏洞，还是与特定 LLM (如 Qwen 3.6) 的工具调用解析兼容性有关。

## 6. 功能请求与路线图信号
今日收到了 1 项明确的功能增强请求，为项目下一步的迭代提供了信号：

*   **多平台上下文提取补全**：[Issue #916](https://github.com/nullclaw/nullclaw/issues/916) 请求将 Telegram API 中的 `reply_to_message` 文本纳入 AI 的入站上下文。
    *   **路线图信号**：随着 NullClaw 作为“个人助理”被接入越来越多的第三方通讯软件（如 Telegram, Discord 等），**统一且深度的平台 API 利用率**将是关键。如果能妥善解决此 Issue，将显著提升 AI 在群聊场景中的智能程度。目前尚无相关 PR，但此功能实现难度不高，极有可能在近期的迭代中被纳入。

## 7. 用户反馈摘要
从今日的 Issue 描述中，可以提炼出当前 NullClaw 用户的典型画像与真实痛点：

1.  **重度本地化部署需求**：用户 scabros 的配置（Ubuntu + 局域网 Ollama + RTX 3090 + Qwen 3.6 27B）表明 NullClaw 的受众中存在大量注重隐私、追求性价比的极客玩家。这类配置下出现的特定 Bug（如 Scheduler unauthorized）说明项目在**适配开源本地大模型时的边缘用例测试仍需加强**。
2.  **对“无缝对话体验”的极高要求**：用户对 AI 仅仅能“回答问题”已不满足，如 Issue 916 所示，用户期望 AI 能“看到”聊天记录中被回复的内容。**上下文断裂**是目前用户最容易感知到的体验降级点。

## 8. 待处理积压
*   **今日新增的待响应 Issue**：今日新增的 [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) 和 [Issue #916](https://github.com/nullclaw/nullclaw/issues/916) 截至发稿时评论数均为 0。建议维护团队尽快介入，特别是 #915 的 Bug 报告，用户提供了详尽的运行环境信息，非常利于排查。
*   *注：由于今日无 PR 活动，暂未发现长期搁置（超过30天）的僵尸 PR，整体代码仓积压风险较低。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 IronClaw (github.com/nearai/ironclaw) 项目 2026-05-16 动态日报：

# 📊 IronClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
过去 24 小时，IronClaw 项目呈现出**极高的研发活跃度与架构演进速度**。项目新增了 **1 个版本发布**，同时有 **17 个 Issue** 被激活，且无一关闭，表明项目正处于密集的需求梳理和问题攻坚阶段。代码提交方面，共有 **50 个 PR** 产生变动（其中 26 个已合并/关闭，24 个待合并），显示核心团队正在高速推进内部代号为 "Reborn" 的重大架构升级。整体来看，项目目前处于功能迭代与底层重构并行的健康且高负荷运转状态。

---

## 2. 版本发布
- **[ironclaw-v0.28.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.2)** (发布于 2026-05-14)
  - **更新要点**：
    1. **修复**：恢复了基于聊天的 `tool_install` 功能，修复了双重调用问题以及自动批准的安全隐患。
    2. **重构**：隐藏了特定于提供商的认证、模型获取和嵌入配置，将其统一抽象到外观模式背后。
  - **迁移与风险提示**：本次更新包含安全相关的 footgun 修复，强烈建议依赖 LLM 工具动态安装机制的用户立即升级，并重新审查自动批准的权限配置。

---

## 3. 项目进展
今日共有 **26 个 PR 被合并或关闭**，项目在底层架构的重构上迈出了决定性的一步，核心主题为 **"Reborn" 循环的生产就绪与存储基座重构**：

- **Reborn 核心循环与主机接入**：
  - [PR #3651](https://github.com/nearai/ironclaw/pull/3651)：注册了 Planned Driver 的默认路径。
  - [PR #3648](https://github.com/nearai/ironclaw/pull/3648)：增加了主机取消访问器，为 Loop 提供了宿主级的取消信号。
  - [PR #3650](https://github.com/nearai/ironclaw/pull/3650)：完成了 WS9-WS15 六个工作流的集成父分支合并，标志着 Reborn 架构整合取得重大突破。
- **稳定性修复**：
  - [PR #3686](https://github.com/nearai/ironclaw/pull/3686) & [PR #3684](https://github.com/nearai/ironclaw/pull/3684)：修复了输入耗尽和取消退出时的确认逻辑，提升了系统防崩溃能力。
- **基础存储设施重构**：
  - [PR #3659](https://github.com/nearai/ironclaw/pull/3659)：**重大合并**，引入统一存储调度架构，用统一的 `RootFilesystem` trait 替换了各个 crate 中零散的 Store/Repository。这为后续的规模化存储打下了坚实基础。
- **实验性功能**：
  - [PR #3665](https://github.com/nearai/ironclaw/pull/3665)：合并了 `IRONCLAW_DISABLE_CODEACT` 环境变量支持，允许通过配置回退到纯结构化工具模式。

---

## 4. 社区热点
今日社区和核心开发者的焦点完全集中在 **Reborn WebUI Beta** 的落地准备以及潜在的系统风险把控上：

- **WebUI Beta 的基础建设**：核心贡献者 serrrfirat 连续提出多个高优先级（P0）Issue，旨在为 Reborn 建立原生的 Web 路由和网关边界：
  - [Issue #3611](https://github.com/nearai/ironclaw/issues/3611)：实现最小化的原生 WebChat v2 路由。
  - [Issue #3625](https://github.com/nearai/ironclaw/issues/3625) & [Issue #3627](https://github.com/nearai/ironclaw/issues/3627)：提出了幂等性设计和 Reborn 服务的提交/取消外观接口。
- **生产级安全与隔离机制**：
  - [Issue #3689](https://github.com/nearai/ironclaw/issues/3689)：核心开发者 zmanian 指出 Installed 级别的 Hook 可能会因递归错误引发 DoS 风险，亟待加入调度预算。
  - [Issue #3690](https://github.com/nearai/ironclaw/issues/3690)：建议收窄第三方扩展对 `RuntimeEvent` 的访问权限，凸显了项目对沙箱安全性的严格要求。
- **大容量代码审查**：
  - [PR #1378](https://github.com/nearai/ironclaw/pull/1378)：关于引入可配置的 per-channel MCP 与内置工具路由过滤机制，该 PR 体量庞大且影响面广，社区正进行持续的深度评审。

---

## 5. Bug 与稳定性
今日报告了若干关键的 Bug 和回归问题，部分已产生混淆或影响下游：

1. 🔴 **严重：对下游产生阻断的包发布遗漏**
   - [Issue #3259](https://github.com/nearai/ironclaw/issues/3259)：虽然代码已发布至 `v0.27.0`，但 `crates.io` 仍停留在 `0.24.0`。由于依赖项 `wasmtime` 28.x 存在 CVE 漏洞，导致下游消费者无法正常更新包。
2. 🟠 **高危：Nightly E2E 测试失败**
   - [Issue #3447](https://github.com/nearai/ironclaw/issues/3447)：CI 流水线中的 E2E 调度运行失败，目前暂无修复 PR 关联，需引起 CI 维护者关注。
3. 🟡 **中危：LLM Provider 兼容性问题**
   - [Issue #3673](https://github.com/nearai/ironclaw/issues/3673)：用户反馈 `openai_compatible` provider 丢弃了 `reasoning_content`，导致 DeepSeek v4-pro 的多轮工具调用直接崩溃。
4. 🟢 **低危：终端 UI 渲染问题**
   - [Issue #3675](https://github.com/nearai/ironclaw/issues/3675)：TUI 无法正确渲染 Markdown 表格（已作为纯文本展示）。此体验问题已通过 [PR #3658](https://github.com/nearai/ironclaw/pull/3658) 引入日志保存功能部分缓解调试压力。

---

## 6. 功能请求与路线图信号
- **精细化代理路由请求**：[Issue #3620](https://github.com/nearai/ironclaw/issues/3620) 要求将 Provider 的 Tool Calls 转换为 Reborn 的标准能力调用，这表明用户对 Agent 的多路复用和标准化执行有强烈需求。考虑到 [PR #1378](https://github.com/nearai/ironclaw/pull/1378) 的存在，高度精细化的路由控制极有可能在 v0.29 或 v0.30 版本上线。
- **环境变量回退机制**：[PR #3665](https://github.com/nearai/ironclaw/pull/3665) 的合并暗示项目正在为不同的部署环境提供更灵活的执行引擎切换方案。
- **安全与身份上下文**：[Issue #3692](https://github.com/nearai/ironclaw/issues/3692) 提出了基于策略门控的个人身份与心跳上下文，标志着 IronClaw 正在向企业级多租户安全架构演进。

---

## 7. 用户反馈摘要
从近期的 Issues 提炼出以下真实用户场景与痛点：
- **部署与安全审查**：[PR #3676](https://github.com/nearai/ironclaw/pull/3676) 的提交表明，外部评估者/用户对了解 Master Key、加密存储和 WASM 沙箱的交互机制存在强烈需求。项目需要提供对“威胁模型”更加 ELI5（通俗易懂）的说明文档。
- **WebUI 幂等性与可靠性**：WebUI 真实用户常遇到由于网络延迟导致的重复提交（重复生成会话和消息），[Issue #3625](https://github.com/nearai/ironclaw/issues/3625) 直接反映了这一痛点，目前已通过 [PR #3694](https://github.com/nearai/ironclaw/pull/3694) 开始着手解决。
- **深度模型适配**：用户开始将 IronClaw 接入前沿的开源推理模型（如 DeepSeek v4），但在多轮工具调用时遇到了底层字段被吞掉的问题，说明项目在长尾 LLM Provider 的兼容性上仍需加强。

---

## 8. 待处理积压
- 📌 **[Issue #3259] crates.io 发布滞后**：此问题已持续数天，导致存在已知 CVE 漏洞的旧版本依然被下游拉取，建议 Release Manager 立即执行一次自动化发布流水线以同步状态。
- 📌 **[Issue #3447] Nightly E2E 失败**：系统级测试失败尚未得到有效处理，在 Reborn 架构大批量合并的当下，持续失效的 E2E 测试可能会掩盖严重的回归问题。
- 📌 **[PR #3652] 与 [PR #3653] 大范围重构待审**：这两个针对 Live Runtime 的组合与生产就绪 PR 尚处于 Open 状态，由于其风险标记为 `medium`/`low`，建议核心团队尽快安排 Review 以防后续分支出现严重代码冲突。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 **LobsterAI (github.com/netease-youdao/LobsterAI)** 项目 2026-05-16 动态日报：

---

# 📊 LobsterAI 项目动态日报 (2026-05-16)

## 1. 今日速览
LobsterAI 在过去 24 小时内展现出**极高的维护活跃度与社区参与度**。项目虽然没有发布新版本，但成功处理并关闭了多达 33 个 Pull Requests，这表明开发团队正在进行大规模的代码清理、功能整合与版本冲刺。项目重点在**多标签预览渲染、IM 接入体验优化以及底层性能与安全防护**等方面取得了实质性进展。目前有 3 个 PR 待合并，且社区持续有新的问题反馈与功能提案。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日共合并/关闭 33 个 PR，项目在以下几个重要维度取得了显著推进：
*   **UI 渲染与交互升级**：右侧面板迎来了重要更新，正式支持**多文件预览多标签页模式** ([PR #1989](https://github.com/netease-youdao/LobsterAI/pull/1989))，并且针对宽屏 PPT 预览增加了左侧缩略图栏，修复了面板调整时的异常关闭问题 ([PR #1990](https://github.com/netease-youdao/LobsterAI/pull/1990))。
*   **IM 全渠道补齐**：修复了 Telegram、Discord、QQ 和 POPO 渠道在开启 `pairing` 策略时缺少配对码输入框的问题，复用了钉钉/飞书的组件，完善了 IM 审批流 ([PR #1987](https://github.com/netease-youdao/LobsterAI/pull/1987))。
*   **数据同步与底层优化**：修复了 managed session 会话同步时因前缀重叠检测导致字符被错误吞掉的严重 Bug（如 `.pptx` 变成 `.ptx`）([PR #1986](https://github.com/netease-youdao/LobsterAI/pull/1986))。
*   **历史遗留 PR 集中收敛**：合并了大量 3 月和 4 月提交的社区贡献，涵盖 SQLite 数据库性能优化 ([PR #830](https://github.com/netease-youdao/LobsterAI/pull/830))、流式响应渲染性能优化 ([PR #1186](https://github.com/netease-youdao/LobsterAI/pull/1186))、阻止技能重复导入 ([PR #827](https://github.com/netease-youdao/LobsterAI/pull/827), [PR #836](https://github.com/netease-youdao/LobsterAI/pull/836)) 等核心稳定性改进。

## 4. 社区热点
*   **Thinking Level 控制集成** ([PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985))：这是一个待合并的活跃 PR，引入了针对会话的思考深度选择器，支持从关闭到自适应的多档位调节。这反映了项目正在紧跟大模型深度推理的趋势。
*   **MCP 批量配置引入** ([PR #835](https://github.com/netease-youdao/LobsterAI/pull/835))：社区对于简化 MCP Server 配置有强烈需求，今日合并的 PR 支持直接粘贴 Claude Desktop 的 JSON 进行批量创建，极大降低了多节点配置门槛。
*   **安全防护动态开关** ([PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962))：合入了安全监控插件的 Hot-toggle 功能，显示项目在保障用户本地运行安全方面正在增加管控粒度。

## 5. Bug 与稳定性
今日报告了一个对第三方模型用户影响较大的模型调用路由 Bug：
*   **[严重] 第三方模型路由强制覆盖** ([Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988))：用户反馈更新至最新版后，在使用阿里百炼计划调用 `qwen3.6-plus` 时，系统强制将其路由至网易自带模型，并提示额度不足。修改配置文件无效，系统会强制重写配置。**目前暂无关联的 Fix PR，需要官方紧急介入排查。**
*   **[已修复] 本地文件协议路径穿越风险** ([PR #828](https://github.com/netease-youdao/LobsterAI/pull/828))：此前版本存在 `localfile://` 协议未校验路径导致宿主机敏感文件可能被读取的风险，今日随历史 PR 合入修复。
*   **[已修复] Token 刷新竞态条件** ([PR #822](https://github.com/netease-youdao/LobsterAI/pull/822))：修复了多个 401 请求同时触发 Token 刷新导致的并发问题，提升了多窗口或弱网环境下的账号稳定性。

## 6. 功能请求与路线图信号
*   **IM 按渠道独立配置模型** ([PR #838](https://github.com/netease-youdao/LobsterAI/pull/838))：已合并，允许钉钉、飞书、Telegram 等不同 IM 渠道配置独立的底层模型，这为 B 端复杂部署场景提供了极大的灵活性。
*   **会话性能与沙盒控制优化**：随着旧 PR 的合并，包括数据库索引优化 ([PR #806](https://github.com/netease-youdao/LobsterAI/pull/806)) 和 `executionMode` 配置生效修复 ([PR #807](https://github.com/netease-youdao/LobsterAI/pull/807))，预示着下一个版本的底层数据加载和代码执行沙盒将更加稳健。

## 7. 用户反馈摘要
*   **模型自由度诉求强烈**：从 Issue #1988 可以看出，重度使用第三方 API（尤其是国产非网易系模型）的用户群体规模可观。系统若在版本更新中对模型调用采取强制拦截或重定向，会严重阻断高级用户的工作流。
*   **本地技能开发者体验（DX）改善**：社区对 Skills 技能的本地开发体验给予了肯定，近日新增了“打开技能文件夹”功能 ([PR #1185](https://github.com/netease-youdao/LobsterAI/pull/1185)) 并解决了重复导入痛点，说明项目正在积极拥抱想要通过自定义技能扩展 AI 能力的开发者。

## 8. 待处理积压
*   **[紧急] 阿里百炼 `qwen3.6-plus` 模型调用被强制劫持** ([Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988))：目前处于 Open 状态且尚无处理动向。由于该问题导致特定模型完全不可用，建议维护者立刻进行复现并发布 Hotfix。
*   **[长期追踪] 大量会话性能瓶颈** ([PR #806](https://github.com/netease-youdao/LobsterAI/pull/806)) & **`executionMode` 配置不生效** ([PR #807](https://github.com/netease-youdao/LobsterAI/pull/807))：这两个标记为 `[stale]` 的 PR 目前状态仍为 Open。考虑到今日合并了大量历史积压，这两个 PR 预计将在下一个工作日内被审阅合入，建议保持关注。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

以下是为您生成的 2026 年 5 月 16 日 Moltis 项目动态日报：

# 📊 Moltis 项目动态日报 (2026-05-16)

## 1. 今日速览
过去 24 小时内，Moltis 项目呈现出**极高的维护效率与健康的迭代节奏**。项目共处理了 4 个 Issues 和 7 个 Pull Requests，且所有更新的 Issues 均已顺利关闭，缺陷清理率达到 100%。核心维护者（主要是 penso）进行了高密度的代码合并，不仅修复了多个阻碍用户体验的关键 Bug（如 UI 溢出、Proxmox 部署失败等），还合并了全新的 Astro 文档站。目前仍有 1 个重量级功能 PR 正在等待合并，整体项目活跃度处于**非常健康**的状态。

## 2. 版本发布
过去 24 小时内**无**新版本发布。

## 3. 项目进展
今日共有 6 个 PR 被成功合并/关闭，项目在功能集成、部署兼容性和文档建设上取得了重大进展：
*   **文档系统重大升级**：合并了 PR [#987](https://github.com/moltis-org/moltis/pull/987)，将原有的 mdBook 文档系统全面替换为基于 Astro 的静态站点，带来了更好的 UI 交互、搜索和响应式体验。
*   **网络安全与认证增强**：
    *   合并了 PR [#1000](https://github.com/moltis-org/moltis/pull/1000)，支持在自动生成的 TLS 证书中配置公网 IP SAN，解决了公网部署的证书信任问题。
    *   合并了 PR [#1001](https://github.com/moltis-org/moltis/pull/1001)，为 MCP OAuth 认证增加了客户端密钥（client_secret）支持。
*   **部署与 UI 稳定性修复**：
    *   合并了 PR [#997](https://github.com/moltis-org/moltis/pull/997)，修复了 Proxmox 环境下因缺失 CA 证书导致 LXC 容器创建失败并被误删的致命问题。
    *   合并了 PR [#998](https://github.com/moltis-org/moltis/pull/998)，修复了聊天框长文本导致页面横向滚动的 UI 体验问题。
*   **依赖项更新**：合并了 dependabot 提交的 PR [#999](https://github.com/moltis-org/moltis/pull/999)，将文档目录中的 Astro 核心依赖从 5.18.1 大版本升级到了 6.3.3。

## 4. 社区热点
今日最受关注的提案是关于信任式中继隧道的集成：
*   **[Feature] 集成 portal-tunnel 作为信任式中继通道**：[Issue #995](https://github.com/moltis-org/moltis/issues/995) 由核心贡献者 gg582 发起，探讨将 `portal-tunnel` 纳入 Moltis 以提供更安全的网络穿透能力。该 Issue 已被关闭，并促成了相关代码的提交与合并，表明社区在网络穿透底层架构上达成了共识。

## 5. Bug 与稳定性
今日共记录并处理了 3 个 Bug 报告，均已在同日产生对应的 Fix PR 并关闭，响应极其迅速：
1.  **[高] Proxmox 脚本 LXC 创建失败** ([Issue #993](https://github.com/moltis-org/moltis/issues/993))：用户在 PVE 91 环境下部署失败。**状态：已由 [PR #997](https://github.com/moltis-org/moltis/pull/997) 修复**，提高了安装程序对缺失证书的容错率。
2.  **[中] 生成的 TLS 证书仅支持 localhost** ([Issue #996](https://github.com/moltis-org/moltis/issues/996))：与文档描述不符，导致公网 IP 无法建立安全连接。**状态：已由 [PR #1000](https://github.com/moltis-org/moltis/pull/1000) 修复**，引入了 `tls.public_ip` 配置项。
3.  **[低] 聊天界面出现横向滚动条** ([Issue #994](https://github.com/moltis-org/moltis/issues/994))：长文本导致 UI 破版。**状态：已由 [PR #998](https://github.com/moltis-org/moltis/pull/998) 修复**。

## 6. 功能请求与路线图信号
目前待合并的 [PR #1002](https://github.com/moltis-org/moltis/pull/1002) (`feat(remote-access): add NetBird and Cloudflare Tunnel support`) 释放了强烈的路线图信号：
*   **信号分析**：项目正在致力于**彻底简化 Moltis 的公网暴露与远程访问链路**。结合已合并的 TLS 公网 IP 支持，Moltis 正在构建一个涵盖底层隧道、域名穿透到证书自动生成的完整远程访问解决方案。这极有可能作为下一个里程碑版本的核心卖点发布。

## 7. 用户反馈摘要
从今日的 Issue 数据中可以提炼出以下用户痛点与真实使用场景：
*   **自托管企业环境/家庭实验室的强需求**：用户在 Proxmox 环境中大量使用 LXC 进行低开销部署，脚本执行遇到阻碍时表现出明显的挫败感（Issue #993）。
*   **暴露于公网的需求普遍存在**：用户不仅限于在内网使用 Moltis，许多用户尝试通过 IP 直接访问，对自动配发的 TLS 证书支持公网 SAN 有着刚性需求（Issue #996）。

## 8. 待处理积压
*   **待合并 PR 积压关注**：[PR #1002](https://github.com/moltis-org/moltis/pull/1002)（NetBird 与 Cloudflare Tunnel 支持）是一个大粒度的功能合并请求，涉及网络底层的重构与大量的 REST API 变更。建议维护团队尽快安排 Code Review，防止该分支与主分支产生冲突，推动功能的早日落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# 📊 CoPaw (QwenPaw) 项目动态日报 - 2026年05月16日

## 1. 今日速览
过去24小时内，CoPaw 项目展现出极高的社区活跃度与健康的迭代节奏。项目共处理了 **50 个 PR**（其中 34 个已合并/关闭，待合并 16 个）和 **24 个 Issue**（新开/活跃 13 个，关闭 11 个），呈现出“高吞吐、快响应”的开源项目特征。当前社区焦点主要集中在 **安全漏洞修复（备份导入信任、Shell 沙箱绕过）**、**定时任务上下文隔离** 以及 **多渠道体验优化** 上。整体来看，项目正处于针对 v1.1.7 版本的密集打磨与漏洞收尾阶段。

---

## 2. 版本发布
*今日无新版本发布。* 
项目当前仍处于 v1.1.7 及其 beta 版本的迭代期，从目前的 PR 动向来看，近期的代码提交主要集中在安全加固、控制台体验优化和底层模型参数配置的重构上，预计正在为下一个正式稳定版蓄力。

---

## 3. 项目进展
今日共有大量高质量的 PR 被合并，项目在安全性、稳定性和功能丰富度上均有显著推进：

*   **安全与隐私加固**：
    *   修复了备份导入/恢复信任控制的漏洞，增加了本地 HMAC 签名验证：[PR #4409](https://github.com/agentscope-ai/QwenPaw/pull/4409)。
    *   完善了 Skill Scanner 的安全性，引入了 `yara` 和一致性分析器：[PR #1580](https://github.com/agentscope-ai/QwenPaw/pull/1580), [PR #1581](https://github.com/agentscope-ai/QwenPaw/pull/1581)。
*   **多渠道与前端体验优化**：
    *   修复了企业微信中快速发送消息导致重复出现“Thinking…”占位符的问题：[PR #4427](https://github.com/agentscope-ai/QwenPaw/pull/4427)。
    *   增强了 Matrix 频道的端到端加密（E2EE）验证流程：[PR #4120](https://github.com/agentscope-ai/QwenPaw/pull/4120)。
    *   优化了前端聊天会话抽屉的固定状态：[PR #4416](https://github.com/agentscope-ai/QwenPaw/pull/4416)。
*   **底层架构改进**：
    *   支持了自定义 Provider HTTP Headers 及 Anthropic 认证令牌：[PR #4413](https://github.com/agentscope-ai/QwenPaw/pull/4413)。
    *   计划模式强化，防止在用户确认前滥用非计划内工具：[PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198)。

---

## 4. 社区热点
今日社区讨论最密集的领域集中在**身份与上下文管理**以及**特殊模型格式的兼容性**上：

*   **频道消息导致 Agent 身份错乱**：[Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) 报告了主控 Agent 在接收其他 Agent 推送的频道消息时，Workspace 会被错误切换，导致严重的身份认知混淆（把别的 Agent 当成自己）。这反映了多 Agent 协作场景下的隔离缺陷。
*   **DeepSeek v4 Think 标签解析异常**：[Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) 指出模型思考内容未能被正确剥离，导致用户有时收不到正常回复。这暴露了框架对不同模型厂商输出规范的兼容性存在痛点。
*   **MCP Client 连接语雀失败**：[Issue #4410](https://github.com/agentscope-ai/QwenPaw/issues/4410) 指出由于 `yuque-mcp` 对 TTY 检测的机制导致 MCP 客户端连接即刻关闭。这类生态工具的对接细节是目前用户接入丰富数据源的核心阻碍。

---

## 5. Bug 与稳定性
今日报告了多个关键 Bug，涉及工具调用、定时任务和渠道对接，部分已有对应修复：

1.  **[严重] 文件写入死循环**：[Issue #4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) 显示在输出长内容时 `write_file()` 会陷入死循环报错。*(目前尚未见明确的 fix PR)*。
2.  **[严重] 定时任务上下文残留**：[Issue #4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) 中用户指出，即使删除会话，绑定了旧 Session 的定时任务依然沿用旧上下文。*(已有进展：[PR #4303](https://github.com/agentscope-ai/QwenPaw/pull/4303) 和 [PR #4425](https://github.com/agentscope-ai/QwenPaw/pull/4425) 正在隔离非共享运行环境并添加超时机制)*。
3.  **[中等] MiMo 思考模式多轮对话 400 错误**：[Issue #4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) 显示在包含工具调用的场景下，多轮对话会丢失 `reasoning_content` 导致中断。
4.  **[中等] Telegram 语音消息不支持**：[Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) 指出 `AudioContent` 在消息格式化管道中未被正确转换给 LLM。
5.  **[中等] CDP 连接超时致 Agent 卡死**：[Issue #4309](https://github.com/agentscope-ai/QwenPaw/issues/4309) 指出当浏览器 CDP 端口不可用时，Agent 会阻塞 5 分钟无法处理任何新消息。

---

## 6. 功能请求与路线图信号
用户对 CoPaw 的扩展能力和多任务调度提出了明确诉求，社区也迅速给出了实现方案：

*   **Token 消耗可视化**：用户迫切需要了解 token 消耗情况。社区迅速响应，[PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) 提出了在前后端增加会话级 token 使用统计的功能。
*   **多 MCP 工具名冲突解决**：为了支持连接多个同类型数据库 MCP，[PR #4428](https://github.com/agentscope-ai/QwenPaw/pull/4428) 提出使用 client key 作为前缀来避免静默丢弃工具的问题。
*   **内置插件发现机制**：[Issue #4406](https://github.com/agentscope-ai/QwenPaw/issues/4406) 指出当前内置插件无法被用户直观发现和安装，期望与 Skills 具备同等体验。
*   **自定义工作目录规范**：[Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 建议将默认配置统一归集至 `.qwenpaw` 隐藏目录，提升用户工作区整洁度。
*   **钉钉群聊并行处理**：[Issue #4431](https://github.com/agentscope-ai/QwenPaw/issues/4431) 反映目前钉钉群聊中所有人的消息是串行的，期望不同上下文能真正并行处理以防相互阻塞。

---

## 7. 用户反馈摘要
从今日的 Issue 互动中，可以勾勒出当前典型用户的特征及痛点：

*   **多渠道企业级部署需求旺盛**：大量反馈来自钉钉（[Issue #4431](https://github.com/agentscope-ai/QwenPaw/issues/4431), [Issue #3109](https://github.com/agentscope-ai/QwenPaw/issues/3109)）和企业微信（[Issue #4116](https://github.com/agentscope-ai/QwenPaw/issues/4116)）的集成用户。他们最关心的是**会话串行阻塞**、**文件/引用读取失败**及**单会话隔离**问题。
*   **第三方中转 API 依赖强**：国内用户大量使用各种 API 中转服务，这也导致他们迫切需要框架支持自定义 Base URL（[PR #4387](https://github.com/agentscope-ai/QwenPaw/pull/4387)）和自定义请求头 Headers（[Issue #3796](https://github.com/agentscope-ai/QwenPaw/issues/3796)）。
*   **版本升级焦虑**：部分桌面端用户对“卸载重装升级”感到担忧，害怕丢失 API Keys 和会话配置（[Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430)），说明本地数据的平滑迁移和备份宣导需要加强。

---

## 8. 待处理积压
以下重要 Issue 或讨论长期悬而未决或目前缺乏官方明确回复，需要维护团队重点关注：

*   **漏洞修复跟进**：[Issue #4421](https://github.com/agentscope-ai/QwenPaw/issues/4421) 指出 Channel 配置明文写入 Agent 可读的工作目录，这是一个严重的越权泄露隐患，需尽快确认修复方案。
*   **计划模式挂起问题**：[Issue #4367](https://github.com/agentscope-ai/QwenPaw/issues/4367) 反映使用工具后，助手经常卡在仅显示 "Thinking" 状态，直到后续轮次才恢复，极大影响交互体验。
*   **可观测性缺失**：[Issue #4114](https://github.com/agentscope-ai/QwenPaw/issues/4114) 用户询问是否有链路追踪机制，这是将 QwenPaw 投入企业级生产环境的关键短板。
*   **文件工具缺失参数死循环**：[Issue #4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) 仍处于 Open 状态且暂无指派，该问题会导致长文本生成任务直接崩溃，需高优解决。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是 ZeroClaw 项目 2026-05-16 的动态日报。

---

# 📊 ZeroClaw 项目动态日报 (2026-05-16)

## 1. 今日速览
过去 24 小时，ZeroClaw 项目保持着**高度活跃**的开发与社区反馈节奏。虽然今日没有发布新版本，但产生了 20 条 Issue 更新（9 项关闭，11 项新开/活跃）和高达 50 条 PR 更新（待合并 42 项，合并/关闭 8 项）。社区焦点目前高度集中在 **Skills（技能系统）的健壮性、Web/Channel 通道集成以及 Provider 兼容性**上。整体来看，项目处于 v0.8.0 大版本发布前的密集代码提交、Bug 修复和基础架构重塑阶段，存在较多高优先级的待审 PR。

## 2. 版本发布
**无新版本发布。**
当前项目正围绕 `v0.8.0: Multi-Agent Runtime and Schema V3` 进行密集开发和增量审查（见 PR #6398）。同时，社区也在积极推进 `v0.7.6` 的 Skills UX 优化计划（见 Issue #6253）。

## 3. 项目进展
今日虽然待合并 PR 占比较大，但仍有关键的 Issue 被关闭，标志着部分核心问题的解决：
*   **Docker 数据卷挂载问题修复**：关于 Docker bind mount 覆盖预构建 Web Dashboard 的 S2 级 Bug 已被关闭（[#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)），排除了容器化部署的一个重要障碍。
*   **安全策略逻辑修复**：`allowed_path` 无法正确解析 `contains` 逻辑导致 S0 级安全/数据访问风险的 Bug 被修复关闭（[#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)），Agent 现在能按预期访问父目录下的子路径。
*   **CI 防呆机制落地**：针对陈旧 PR 跳过检查混入主分支的 CI 漏洞已被关闭（[#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679)），这为后续合入大量 PR 提供了质量保障。
*   **会话权限模型确立**：针对破坏性操作的会话所有权模型（Session ownership model）已完成 Review 并关闭（[#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)），多 Agent 场景下的安全性得到提升。

## 4. 社区热点
*   **Web 搜索隐私与健壮性** ([#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316))：用户提议集成 SearXNG 作为隐私优先的搜索引擎，并改进 DuckDuckGo 的反爬机制。该话题获大量关注，反映了用户对 Agent 长期自主运行时“网络搜索工具稳定性”的强烈诉求。
*   **Telegram 定时任务输出路由丢失** ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647))：定时任务的结果无法推送到配置的 Telegram 渠道，只能在 Web 端显示。该问题直接阻断了用户的自动化工作流，引起了社区的热烈讨论。
*   **Web 端工具审批 UI** ([#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522))：针对受监督模式下的工具执行，后端已支持 WebSocket 审批协议，但前端缺乏对应 UI。该功能的缺失导致用户体验断层，目前已关闭并进入实质开发阶段。

## 5. Bug 与稳定性
按严重程度排序，今日暴露了多个影响工作流的严重 Bug：

*   **S1 级别 (工作流阻断)**：
    *   `zeroclaw skills install clawhub:*` 发生 Panic 崩溃 ([#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681))。**状态：已提 Fix PR** - 已将阻塞的 `reqwest::blocking` 替换为异步运行时执行（[PR #6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682)）。
    *   Cron 定时任务结果无法路由至 Telegram ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647))。**状态：已接受**，等待修复。
*   **S0 级别 (逻辑失效/安全隐患)**：
    *   小米思考模型（mimo-v2.5）在 Agentic 工具调用循环中丢失 `reasoning_content` ([#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672))。
    *   Anthropic API 拒绝 Skill 工具请求，因为动态生成的工具名违反其 `^[a-zA-Z0-9_-]{1,128}$` 命名规范 ([#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678))。**状态：未修复**。
*   **模块逻辑缺陷**：
    *   Skill 系统存在两个关键缺陷：`SkillImprover` 仅识别 `SKILL.toml` 忽略了 `manifest.toml` ([#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645))；以及 `skill_manage patch` 绕过了冷却时间，导致无限制 Patch ([#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683))。**状态：已提 Fix PR**（[PR #6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684)）。

## 6. 功能请求与路线图信号
*   **Shell 命令细粒度 TOTP 门控**：[PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) 提出在执行特定高风险命令（如 `sudo`, `rm -rf`）时要求 TOTP 验证，这极大增强了 Agent 自主执行的安全性，有望合入下一版本。
*   **Nix 包支持**：[PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) 完善了 Nix 的 Flake 构建，解耦了 Rust 和 Web UI 的构建流程，是吸引基础设施开发者的重要举措。
*   **ACP 会话持久化**：[PR #6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649) 增加了基于 SQLite 的 ACP 会话存储，解决了编辑器重连丢失上下文的问题。
*   **供应商原生扩展思考**：[PR #5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) 为 Anthropic 和 Bedrock 引入了原生 Extended Thinking 支持，有望大幅提升复杂任务推理能力。

## 7. 用户反馈摘要
1.  **文件系统访问痛点**：用户对 `allowed_path` 逻辑表达出困惑，认为配置了根目录 `~/` 却不能访问 `~/dev` 极其反直觉（见 [#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)），这要求项目在配置逻辑上需更加契合直觉。
2.  **Mixer/模型兼容性焦虑**：随着各种开源/闭源模型（如 GLM, 小米 Mimo）的接入，兼容性细节问题（如工具命名规范 [#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678)、Reasoning 字段丢失 [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)）频发，用户对 Provider 兼容层的鲁棒性期望较高。
3.  **安装与国际化体验**：用户反馈 CLI 安装输出不符合项目的 Fluent（国际化）规范（[#6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670)），说明社区对细节打磨和全球化使用的关注度正在提升。

## 8. 待处理积压
以下高优先级/高风险的巨型 PR 长期处于待处理状态，亟需 Maintainer 关注推进：
*   **核心架构升级**：[v0.8.0: Multi-Agent Runtime and Schema V3](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) 正在进行增量审查，涉及几乎全仓库的重构，是项目后续发布的绝对 blocker。
*   **UI 与监控大更新**：[Nodes dashboard + device identification](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) 和 [Per-recipient reply pacing across 9 channels](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) 均等待作者行动，可能存在冲突风险。
*   **历史代码恢复**：[Audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 仍处于 `in-progress`，大量历史有效代码的恢复进度仍需跟进。

</details>