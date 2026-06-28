# OpenClaw 生态日报 2026-06-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-28 22:18 UTC

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

# 🐾 OpenClaw 项目动态日报
**报告日期**: 2026-06-29  
**数据周期**: 过去 24 小时  
**项目仓库**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览
OpenClaw 今日维持了极高的社区热度与开发活跃度，单日共有超过 500 条 Issue 更新（其中 448 条处于活跃状态）以及 500 条 PR 更新。项目正处于**基础设施重构与稳定性加固的深水区**，开发者的精力主要聚焦于解决多模态/多通道接入时的 Session 状态管理、网关内存泄漏以及跨后端上下文丢失等深层次核心问题。此外，社区对 UI 交互、本地化国际化以及外围平台（如 Pioneer.ai、Telegram 新特性）的生态扩展展现出了强烈的需求。

---

## 2. 版本发布
**本日无新版本发布** (0 releases)。

---

## 3. 项目进展
今日共有 93 个 PR 被合并或关闭，407 个 PR 处于待合并状态，整体代码推进稳步向前。核心进展如下：

*   **底层状态管理重构**: 核心维护者推进了通过访问器接缝进行核心会话/记录 SQLite 迁移的重构工作（关联 PR [#96625](https://github.com/openclaw/openclaw/pull/96625)），这是解决长会话内存泄漏的基石。
*   **安全与鉴权隔离**: 合并了关于网关配对范围死锁和 MCP 工具调用通道审批机制的修复，大幅提升了 CLI 操作和外部状态变更的安全性。
*   **Cron 任务与定时调度**: 修复了 `sourceDelivery` 为空导致的定时任务崩溃（[PR #85249](https://github.com/openclaw/openclaw/pull/85249)），以及对精确到秒的 Cron 槽位识别修复（[PR #81731](https://github.com/openclaw/openclaw/pull/81731)）。
*   **UI 交互与诊断**: Control UI 的静态资源压缩（[PR #81794](https://github.com/openclaw/openclaw/pull/81794)）和诊断时间轴优化已提交，显著提升了前端加载速度与可观测性。

---

## 4. 社区热点
以下是过去 24 小时内讨论最热烈、反映了当前架构核心痛点的话题：

*   🔥 **[Issue #88838](https://github.com/openclaw/openclaw/issues/88838)** (36 评论): **Track core session/transcript SQLite migration**。这是当前项目最大的结构性重构，社区高度关注从传统 JSONL 向 SQLite 数据库切换的进度，这将彻底解决会话无限增长的性能瓶颈。
*   👀 **[Issue #77598](https://github.com/openclaw/openclaw/issues/77598)** (22 评论): **Track live dev agent behavior**。社区成员正在长时间观察自主开发智能体的行为轨迹，反映出用户对长时间运行 Agent 稳定性的强烈需求。
*   ⚠️ **[Issue #88312](https://github.com/openclaw/openclaw/issues/88312)** (18 评论): **[Bug] Codex app-server turn-completion stall**。引发大量讨论的回归 Bug，智能体在多工具调用回合中卡死，严重影响了重度用户的自动化流。
*   🔐 **[Issue #78308](https://github.com/openclaw/openclaw/issues/78308)** (13 评论): **Channel-mediated approval for MCP tool calls**。关于 MCP 插件执行的合规与批准信封设计，表明项目在自动化与安全控制之间寻求更优雅的平衡。

---

## 5. Bug 与稳定性
当前报告的 Bug 集中在**内存溢出（OOM）、会话状态丢失和鉴权循环**，最高优先级（P1）问题如下：

*   🚨 **极高内存消耗与 OOM Crash**:
    *   [Issue #55334](https://github.com/openclaw/openclaw/issues/55334): `sessions.json` 无限膨胀导致网关 OOM（`skillsSnapshot` 每次重复追加，无修剪）。
    *   [Issue #75380](https://github.com/openclaw/openclaw/issues/75380): `provider-payload.jsonl` 和 `cache-trace.jsonl` 无大小限制与轮转策略。
*   💥 **严重会话与数据丢失**:
    *   [Issue #77012](https://github.com/openclaw/openclaw/issues/77012): WebChat 会话记录在每次轮次被覆盖（5.2 版本回归），刷新后历史消息全丢。
    *   [Issue #74586](https://github.com/openclaw/openclaw/issues/74586): Active-memory 插件错误地将正常的模型完成分类为超时并强制中断。
*   🔄 **死锁与无限阻塞**:
    *   [Issue #74484](https://github.com/openclaw/openclaw/issues/74484): 网关配对范围死锁，CLI 因权限不足无法批准/拒绝自动重新颁发的越权修复请求。
    *   [Issue #76038](https://github.com/openclaw/openclaw/issues/76038): 卡死会话恢复机制双重失效，事件循环完全阻塞，导致被 systemd 强杀。
*   💸 **成本与配置异常**:
    *   [Issue #73182](https://github.com/openclaw/openclaw/issues/73182): Claude 模型默认静默开启了 `reasoning` 思考模式，导致 API 开销翻倍且泄露思考块。

---

## 6. 功能请求与路线图信号
结合 Issues 和待合并 PR，下一阶段版本的重点方向清晰可见：

*   **多平台支持与富媒体交互**: 
    *   [PR #97556](https://github.com/openclaw/openclaw/pull/97556): 增加 Telegram 位置、场地、视频备注等富媒体外发支持。
    *   [Issue #79077](https://github.com/openclaw/openclaw/issues/79077): 要求支持 Telegram 5 月新发布的 Bot-to-Bot 通信模式。
*   **新 Inference Provider 接入**: [PR #97566](https://github.com/openclaw/openclaw/pull/97566) 正在增加对 `Pioneer.ai` 作为推理提供者的支持，并带有实时模型发现功能。
*   **跨后端上下文记忆**: [Issue #79047](https://github.com/openclaw/openclaw/issues/79047) 呼吁在跨后端切换模型（如 Claude 切换至 OpenRouter）时保留对话上下文，这要求重构 Session 剥离机制。
*   **国际化与本地化 (i18n)**: [PR #81743](https://github.com/openclaw/openclaw/pull/81743) 和 [Issue #79458](https://github.com/openclaw/openclaw/issues/79458) 暴露了非英语用户（特别是中文用户）在 Web UI 和 Slash 命令上缺乏本地化支持的痛点，相关汉化 PR 正在等待审核。

---

## 7. 用户反馈摘要
从大量 Issue 讨论中，可以提炼出真实用户在当前版本中的核心体验反馈：

*   **痛点 1：长时间运行极其脆弱**。大量高级用户（如使用 Cron 任务、多 Agent 架构）抱怨长时间运行后网关负载极高、僵尸进程累积（[Issue #76171](https://github.com/openclaw/openclaw/issues/76171)），且内部诊断日志吃满磁盘。
*   **痛点 2：CLI 诊断"自欺欺人"**。用户反馈 `openclaw doctor` 经常掩盖错误返回 exit 0（[PR #81829](https://github.com/openclaw/openclaw/pull/81829)），或者在修复失败时陷入原子性死锁（[Issue #77802](https://github.com/openclaw/openclaw/issues/77802)），导致 CI/CD 流水线误判。
*   **痛点 3：更新带来的隐性破坏**。用户对于静默改变默认行为（如默认开启 Claude reasoning 导致计费暴涨）感到不满，呼吁核心团队在更新中保持配置的前向兼容与透明度。

---

## 8. 待处理积压
以下重要 Issue/PR 讨论热烈但已停滞或长期等待维护者决策，需重点关注：

*   [Issue #77930](https://github.com/openclaw/openclaw/issues/77930) - **Discord 频道无法加载的回归问题**：该 Bug 导致 2026.5.4 版本中 Discord 频道彻底无法加载，已有修复 PR 但至今未合并。
*   [PR #81792](https://github.com/openclaw/openclaw/pull/81792) - **Gateway Token Scopes 引入**：为 WebSocket 客户端引入更细粒度的共享令牌权限范围，涉及核心安全边界，已等待多时需要维护者拍板。
*   [Issue #76492](https://github.com/openclaw/openclaw/issues/76492) - **CLI 静默回退至 Embedded 模式**：掩盖了真实的网关错误，使得常规排错变得极其困难，被标记为 P2 但缺乏跟进。

---
*数据来源: GitHub API (截止至 2026-06-29)。分析基于过去 24 小时内生成的 500+ 条活跃事件。*

---

## 横向生态对比

**2026-06-29 个人 AI 助手与智能体开源生态横向对比分析报告**

### 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**“从单点可用向生产级、重度自动化跨越”**的深水区。项目底座普遍在经历深刻的核心架构重构（如会话状态 SQLite 化、多模型上下文剥离），以解决长会话带来的内存溢出（OOM）和高昂的 Token 成本痛点。与此同时，**“多智能体协同（A2A）编排”**与**“细粒度安全隔离（沙箱/MCP审批）”**成为区分进阶项目与初级项目的分水岭。生态在接入丰富性（富媒体/多通道）上持续高歌猛进，但也暴露出 Windows 端体验割裂、静默失败等工程化阵痛。

### 2. 各项目活跃度对比

| 项目名称 | Issues 活跃/更新 | PRs 活跃/更新 | Release 发布 | 健康度评估与阶段特征 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ (93 合并) | 0 | 🟢 极高。处于基础架构重构（SQLite迁移），开发热度顶尖。 |
| **ZeroClaw** | 50+ | 50+ (7 合并) | 0 | 🟢 高。推进 v0.8.3 SOP 控制平面与 v0.9.0 安全边界重构。 |
| **IronClaw** | 9 | 49 (22 合并) | 0 | 🟢 高。发布前冲刺，落地四维权限与上下文体积瘦身。 |
| **NanoBot** | 7+ | 23 (10 合并) | 0 | 🟡 良好。聚焦 A2A 协同、上下文压缩与渠道稳定性修复。 |
| **Hermes Agent** | 50 | 50 (26 合并) | 0 | 🟡 良好。Windows 端缺陷集中爆发并获修复，P1安全补丁密集。 |
| **CoPaw** | 4 | 5 (0 合并) | 0 | 🟡 良好。深度重构期，为 Agentscope 2.0 适配做单测覆盖。 |
| **NanoClaw** | 1 | 4 (0 合并) | 0 | 🟠 一般。高质量待审 PR 积压，修复了 OpenAI 容器崩溃问题。 |
| **NullClaw** | 0 (关1历史) | 1 (0 合并) | 0 | 🟠 一般。平稳期，核心演进“人在环路”安全审批机制。 |
| **Moltis** | 1 | 2 (0 合并) | 0 | 🟠 一般。聚焦多模态大图引发的上下文雪崩预防与依赖解耦。 |
| **LobsterAI** | 5 | 3 (关闭陈旧3) | 0 | 🟡 维护期。清理历史积压，暴露出本地模型解耦与状态同步痛点。 |
| **PicoClaw** | 1 | 2 (合并1) | 0 | 🟡 维护期。边缘端视觉管线优化，拓展 IoT 单向通道支持。 |
| **TinyClaw / ZeptoClaw**| 0 | 0 | 0 | ⚪ 沉寂。过去 24 小时无活动。 |

### 3. OpenClaw 在生态中的定位
作为本次监测的**核心参照系与热度榜首**，OpenClaw 展现出了强大的社区吞吐能力（单日 500+ 动态）。
*   **优势对比**：其生态广度（如 Pioneer.ai 接入、Bot-to-Bot 协议跟进）远超其他项目。庞大的开发量迫使其必须率先啃下“底层硬骨头”，其正在进行的 `sessions/transcript SQLite 迁移` 是整个生态中对抗 OOM 和长程记忆丢失最激进、最彻底的重构。
*   **技术路线差异**：与 NanoBot 的“Keep it tiny（保持轻量）”哲学不同，OpenClaw 追求大而全的基础设施覆盖；相比于 IronClaw 在前端权限卡片的重构，OpenClaw 更侧重于 CLI 与网关侧的状态机治理。
*   **痛点暴露**：船大难掉头。其静默开启 Claude reasoning 导致成本翻倍、`openclaw doctor` 掩盖错误等反馈，说明其在快速迭代中对前向兼容性和开发者透明度有所忽视。

### 4. 共同关注的技术方向
基于各项目 Issue 和 PR 汇总，以下四个技术维度的需求呈现高度共鸣：
1.  **上下文治理与 Token 降本**：无限增长的会话状态正压垮系统。
    *   *涉及项目*：OpenClaw（SQLite迁移/前缀漂移修复）、NanoBot（上下文压缩防缓存失效）、IronClaw（工具暴露机制削减小 25.8k Token）、Moltis（图片降采样防 OOM）。
2.  **执行安全与审批闭环**：Agent 执行高危命令（如 Shell、文件遍历）引发社区对“可控性”的强烈诉求。
    *   *涉及项目*：NullClaw（SSE 审批流）、OpenClaw（MCP 工具通道审批）、ZeroClaw（工作区 `.ignore` 保护）、IronClaw（四维细粒度权限策略）。
3.  **多 Agent 协同与任务编排**：单体智能体正在向“工作团队”演进。
    *   *涉及项目*：NanoBot（Supervisor-Writer A2A 模式）、CoPaw（Matrix 通信防唤醒死循环）、ZeroClaw（SOP 标准操作程序引擎重构）。
4.  **跨平台/多渠道无缝体验**：打通 IM 与桌面端的无缝对话流。
    *   *涉及项目*：Hermes Agent（跨平台会话接力）、NanoClaw / ZeroClaw（Telegram API 10.1 富文本支持）、NanoBot（IM 消息防抖）。

### 5. 差异化定位分析
*   **重基建与编排中枢**：**OpenClaw**、**ZeroClaw**。它们致力于打造通用、全场景的智能体底座，处理复杂的 Cron 调度、网关通信和多后端路由。
*   **轻量化与高度自治**：**NanoBot**、**NanoClaw**。专注将单个/少数几个智能体做到极致轻量，强调多级沙箱、灵活模型路由和友好部署（如 NanoClaw 支持 Coolify）。
*   **企业级安全与权限治理**：**IronClaw**、**NullClaw**。将重点放在企业的多租户、细粒度权限分配以及高危命令的 Human-in-the-loop 干预上。
*   **端侧与特定场景下沉**：**PicoClaw**。探索边缘侧算力受限环境下的多模态处理（图像压缩）与单向通道适配；**CoPaw** 则押注长效 RAG 记忆与底层 Agentscope 框架。

### 6. 社区热度与成熟度
*   **第一梯队（深度重构与攻坚期）**：OpenClaw、CoPaw。虽然热度极高，但正在替换核心引擎（会话存储/底层框架），短期可能伴随回归性 Bug，需要自托管的开发者密切关注主分支动向。
*   **第二梯队（质量巩固与平滑迭代期）**：NanoBot、IronClaw、ZeroClaw。新功能与系统优化齐头并进。他们非常关注端到端测试、CI 稳定性和前端 UX（如卡片化管理、富媒体渲染），生产可用性稳步提升。
*   **第三梯队（除虫与长尾清理期）**：Hermes Agent、LobsterAI。当前重点在于解决跨平台（特别是 Windows 中文编码）和静默报错等长尾问题。

### 7. 值得关注的趋势信号
1.  **“静默降级/失败”是当前摧毁用户信任的最大杀手**。ZeroClaw 报告了配置不报错但功能未生效（如 MCP 作用域、SQLite 向关键字检索降级）的 P1 痛点。AI Agent 应用必须建立完备的诊断时间轴和抛错机制，避免“幻觉式成功”。
2.  **Windows 环境兼容性成为凸显工程严谨度的试金石**。Hermes Agent 和 ZeroClaw 均报告了大量非英文环境的 GBK 编码崩溃和子系统黑框闪烁（如 74 个测试用例在 Win11 失败）。由于大量高阶开发者在 Windows 日常环境工作，补齐这一短板将极大提升社区好感。
3.  **Prompt Caching（提示词缓存）的经济价值被提上日程**。NanoBot 爆出的“上下文截断导致前缀漂移，使大模型缓存完全失效”问题极具启发性。未来的上下文压缩不仅要看 Token 长度，更要看**结构化裁剪对缓存命中率的影响**，这将成为核心基础设施的硬指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-06-29  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 项目在过去 24 小时内保持了**极高的开发与社区活跃度**。今日共处理了 23 个 PR 更新（其中 10 个被成功合并或关闭，13 个待处理），并有 7 个 Issue 发生状态变更。
项目当前正处于深度优化阶段，核心维护者和社区贡献者集中发力解决**上下文缓存失效（成本/性能优化）**、**多智能体协同编排**以及**本地安全沙箱执行**等关键痛点。多项针对 WebUI 和渠道（如微信）稳定性的关键修复已落地，整体项目正朝着更加成熟、高可用和低成本的方向快速迈进。

---

### 2. 项目进展 (已合并/关闭的核心 PR)
今日共有 10 个 PR 被合并或关闭，项目在多个维度取得了实质性推进：

*   **WebUI 体验修复**：[PR #4565](https://github.com/HKUDS/nanobot/pull/4565) 修复了重连后流式响应卡死、停止按钮失效的严重体验问题。
*   **系统稳定性与健壮性**：
    *   [PR #4569](https://github.com/HKUDS/nanobot/pull/4569) 增强了对上游中继服务畸形响应的防御，防止崩溃或死循环。
    *   [PR #4566](https://github.com/HKUDS/nanobot/pull/4566) 修复了旧版命名规则导致损坏的会话文件被意外丢弃的问题。
    *   [PR #4564](https://github.com/HKUDS/nanobot/pull/4564) 保护了 Cron 公共 API，防止在 store 不可用时发生崩溃。
*   **多模态与 MCP 协议**：[PR #4542](https://github.com/HKUDS/nanobot/pull/4542) 优化了 MCP 工具的图像输出，避免将庞大的 base64 数据塞入历史记录，转而作为 Artifacts 处理。
*   **代码质量与社区建设**：
    *   [PR #4574](https://github.com/HKUDS/nanobot/pull/4574) 对 Session 的返回类型进行了类型安全重构。
    *   [PR #4504](https://github.com/HKUDS/nanobot/pull/4504) 支持了技能的多级目录组织，增强了扩展性。
    *   [PR #2120](https://github.com/HKUDS/nanobot/pull/2120) 与 [PR #4575](https://github.com/HKUDS/nanobot/pull/4575) 完善了贡献者文档与仓库指引。

---

### 3. 社区热点 (活跃 Issues/PRs)
社区今日的讨论焦点集中在**降低成本**与**多智能体协作**两个核心诉求上：

*   **降低 Token 成本与上下文压缩**：[PR #4581](https://github.com/HKUDS/nanobot/pull/4581) (优化上下文持久化与压缩机制) 和 [Issue #4222](https://github.com/HKUDS/nanobot/issues/4222) (缓存失效问题) 备受关注。用户强烈希望能减少每次对话输入给大模型的冗余历史数据，从而降低 API 费用并延长上下文寿命。
*   **多智能体协同**：[PR #4571](https://github.com/HKUDS/nanobot/pull/4571) 引入了原生 A2A (Agent-to-Agent) 机制，允许 Supervisor -> Researcher -> Writer 这样的团队协作模式。这标志着 NanoBot 正从单点助手向复杂任务编排系统演进。
*   **本地环境与隔离执行**：[Issue #4580](https://github.com/HKUDS/nanobot/issues/4580) 提出，现代 Agent 执行代码时极其依赖虚拟环境（如 Conda），呼吁官方原生支持，这反映了高阶开发者的真实痛点。

---

### 4. Bug 与稳定性
根据今日数据，核心 Bug 主要集中在系统边界条件和外部中继服务兼容性上：

*   **[P0/严重] WebUI 任务假死**: Issue [#4500](https://github.com/HKUDS/nanobot/issues/4500) 反映自重启后 WebUI 卡在 "processing" 状态。**状态**: 已通过 [PR #4565](https://github.com/HKUDS/nanobot/pull/4565) 修复。
*   **[P1/高危] Prompt Caching 持续失效**: Issue [#4222](https://github.com/HKUDS/nanobot/issues/4222) 指出上下文截断导致前缀漂移，使大模型的缓存完全失效，大幅增加延迟和费用。**状态**: 已提交针对性修复 [PR #4568](https://github.com/HKUDS/nanobot/pull/4568)。
*   **[P1/安全] Shell 注入风险**: Issue (#4521 提及) 指出 `exec.allowPatterns` 的正则匹配存在命令拼接绕过风险（如 `echo allowlisted && touch /tmp/evil`）。**状态**: 已提交修复 [PR #4562](https://github.com/HKUDS/nanobot/pull/4562)，改为分段校验。
*   **[P2/一般] 微信渠道流式输出中断**: Issue/PR [#4567](https://github.com/HKUDS/nanobot/pull/4567) 指出，由于未开启流式支持，部分中继服务会导致微信机器人丢回复或异常。**状态**: 已提交修复。

---

### 5. 功能请求与路线图信号
结合用户提案与现有活跃 PR，以下是极有可能被纳入下一阶段版本（或主分支）的特性：

1.  **Sub-agent 灵活模型路由**: Issue [#4231](https://github.com/HKUDS/nanobot/issues/4231) 提议允许 Spawn 的子智能体使用不同的模型。社区开发者已提交 [PR #4570](https://github.com/HKUDS/nanobot/pull/4570) 进行了完美实现，合并概率极高。
2.  **群聊消息防抖**: Issue [#3938](https://github.com/HKUDS/nanobot/issues/3938) 提出在飞书/Telegram 群聊中，用户连续发送多条消息会导致 Bot 被频繁触发。提议增加消息缓冲/防抖机制，这对于 IM 渠道体验至关重要。
3.  **原生语音输出 (TTS)**: Issue [#4010](https://github.com/HKUDS/nanobot/issues/4010) 提出闭环语音交互。NanoBot 已具备语音输入能力，加上 TTS 输出将极大拓宽其作为陪伴型助手的场景。
4.  **WebUI 历史管理**: Issue [#4579](https://github.com/HKUDS/nanobot/issues/4579) 请求在侧边栏显示会话时间戳，并支持导出为 Markdown。这属于高投资回报率的体验优化。

---

### 6. 用户反馈摘要
从近期的 Issues 评论中，我们可以提炼出以下用户侧真实画像：
*   **满意点**：用户高度赞赏 NanoBot "Keep it tiny" 的哲学，认可其核心框架的轻量与可塑性。对于近期引入的 Codex、Dream 技能自学习等前沿功能感到兴奋。
*   **痛点与抱怨**：
    *   **多渠道兼容碎片化**：通过第三方中继（Anthropic-compatible relay）接入时，极易遇到参数丢失或响应畸形的问题（如 Issue #4500, #4567），消耗了大量排错精力。
    *   **上下文治理黑盒**：随着会话变长，用户发现上下文压缩逻辑难以预测，导致大模型“遗忘”早期任务，[PR #4534](https://github.com/HKUDS/nanobot/pull/4534) 的提交者也以真实评测失败案例说明了这一点。

---

### 7. 待处理积压
*提醒维护团队关注以下尚未合并或需要跟进的关键链路：*

*   **长期架构增强 PR**: [PR #4534](https://github.com/HKUDS/nanobot/pull/4534)（提升可靠性、验证机制及执行服务）是一个体积较大的综合性 PR，涉及到核心 Agent 循环的改造，需要仔细 review 其对整体稳定性的影响。
*   **Dream 幻觉保护**: [PR #4554](https://github.com/HKUDS/nanobot/pull/4554) 针对 Dream 模块增加了“防重复创建技能”的写入守卫，这是防止 Agent 陷入死循环并撑爆存储的重要保障，建议优先排期。
*   **沙箱测试补全**: [PR #4577](https://github.com/HKUDS/nanobot/pull/4577) 增加了 bwrap 沙箱挂载的回归测试，确保本地代码执行环境的安全边界，目前处于 Open 状态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期**: 2026-06-29 | **仓库**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

## 1. 今日速览
过去 24 小时内，Hermes Agent 项目保持高度活跃，共处理了 50 条 Issue 更新（31 条新开/活跃，19 条已关闭）和 50 条 PR 更新（24 条待合并，26 条已合并/关闭）。从分类数据可以看出，**Windows 桌面端子进程引发的“黑框闪烁”问题集群**迎来了集中爆发与修复，占据了绝大多数的 Bug 反馈。同时，核心团队与社区贡献者今天合并了多项关键的 **安全加固补丁（P1 级别）**，涵盖 Webhook、沙箱环境变量及鉴权等关键领域。项目整体处于快速迭代的“抓虫与深度安全加固”阶段。

## 2. 版本发布
* **无新版本发布**。考虑到近期有大量针对 Windows 桌面端及 P1 安全漏洞的修复 PR 被集中合并，推测项目正在为下一个 Minor 版本（或 v0.18.x）进行储备。

## 3. 项目进展
今日共有 26 个 PR 被合并或关闭，项目在安全性、调度稳定性和底层性能上取得了重要进展：
* **安全闭环**：合并了多个 P1 级别的安全修复，包括限制未授权 Webhook 绑定到本地回环（[PR #6335](https://github.com/NousResearch/hermes-agent/pull/6335)）、阻断网关媒体标签路径遍历（[PR #6084](https://github.com/NousResearch/hermes-agent/pull/6084)）、为 WhatsApp 桥接控制面增加鉴权（[PR #5964](https://github.com/NousResearch/hermes-agent/pull/5964)），以及防范外部图片 URL 提取引发的 SSRF 风险（[PR #4713](https://github.com/NousResearch/hermes-agent/pull/4713)）。
* **调度健壮性**：修复了 Cron 调度器在网关崩溃/重启时丢失任务的严重缺陷，引入了正确的作业状态机与崩溃检测（[PR #4703](https://github.com/NousResearch/hermes-agent/pull/4703)）。
* **性能优化**：实施了网关平台适配器（如 Telegram, Discord 等）的懒加载机制，将 CLI 冷启动时间缩短了近一半，从 4.4s 降至 2.45s（[PR #54448](https://github.com/NousResearch/hermes-agent/pull/54448)）。

## 4. 社区热点
今日讨论度最高的内容集中在跨平台体验的缺失与桌面端稳定性：
* **跨平台会话无缝对接诉求**：[Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366) 提出了跨平台会话接力功能（CLI ↔ Telegram ↔ iMessage），获得了大量讨论。用户高度期望 Hermes 能打破平台壁垒，实现工作场景从 PC 到移动端的平滑过渡。
* **Windows 黑框闪烁系统级追踪**：维护者 teknium1 建立了追踪 Issue [Issue #54220](https://github.com/NousResearch/hermes-agent/issues/54220)，汇集了所有关于 Windows 桌面端运行子进程（git/gh/powershell）时弹出 cmd/conhost 黑框的反馈，这是目前社区最具痛点的 Bug。
* **多网关连接需求**：[Issue #45779](https://github.com/NousResearch/hermes-agent/issues/45779) 提出在桌面端支持多网关连接（带标签页隔离），反映出进阶玩家有一机管理多套 Agent 集群的强烈需求。

## 5. Bug 与稳定性
按严重程度排列今日的重点 Bug 及其修复状态：

* **[P2] 桌面端会话状态不同步与污染**：侧边栏高亮的会话与实际发送消息的聊天窗体不一致，引发“历史记录丢失”错觉（[Issue #54320](https://github.com/NousResearch/hermes-agent/issues/54320)，**暂无针对性 Fix PR**）。
* **[P2] Matrix 多配置文件房间权限绕过**：当多个 Profile 共用一个 Matrix 账户时，双人房间会被误判为 DM，从而绕过房间白名单隔离，存在信息泄露风险（[Issue #54461](https://github.com/NousResearch/hermes-agent/issues/54461)，**暂无 Fix PR**）。
* **[P2] Windows 黑框闪烁（集群修复中）**：Electron 桌面端在执行定时任务或鉴权时调用 Python/cmd 闪现控制台窗口。今日已合并多个修复方案，包括使用 `pythonw.exe`（[Issue #54282](https://github.com/NousResearch/hermes-agent/issues/54282)）和增加 `CREATE_NO_WINDOW` / `CREATE_BREAKAWAY_FROM_JOB` 标志位（[Issue #54323](https://github.com/NousResearch/hermes-agent/issues/54323)，[PR #54457](https://github.com/NousResearch/hermes-agent/pull/54457)）。
* **[P3] 高并发下 Kanban DB 损坏**：多 Worker 进程并发写入 SQLite 导致数据库损坏（[Issue #53819](https://github.com/NousResearch/hermes-agent/issues/53819)，**暂无合并的 Fix PR**）。

## 6. 功能请求与路线图信号
* **运行时干预能力**：[PR #54466](https://github.com/NousResearch/hermes-agent/pull/54466) 提交了用于修改活跃 Run 状态的 API（`steer`），表明项目正在增强 Agent 运行时的动态控制能力。
* **垂直领域技能包**：[PR #54468](https://github.com/NousResearch/hermes-agent/pull/54468) 添加了 `/product-manager` 和 `/analyst` 等垂直技能包，信号表明 Hermes 正在尝试从通用 Agent 转向“开箱即用的专业角色助手”。
* **安全默认行为优化**：[PR #54469](https://github.com/NousResearch/hermes-agent/pull/54469) 修正了未知的 `approvals.mode` 值处理逻辑，默认回退到最安全的 `manual` 模式，显示出在自动化推进过程中对安全兜底的重视。

## 7. 用户反馈摘要
从评论和 Issue 描述中，可以提炼出以下真实用户体验反馈：
* **本地终端体验割裂**：用户 Tekcraft 报告了配置 `terminal.backend: local` 时 `crontab -l` 输出与原生 Shell 不一致的 Bug（[Issue #12938](https://github.com/NousResearch/hermes-agent/issues/12938)），表明 Hermes 在接管本地系统环境时，环境变量/上下文的继承仍有瑕疵。
* **非英文 Windows 环境堪忧**：GBK 编码导致的崩溃循环（[Issue #53065](https://github.com/NousResearch/hermes-agent/issues/53065)）说明国际化/本地化字符集处理需要全面排查。
* **大模型兼容性痛点**：DeepSeek API 用户报告流式响应被 OpenResty 反向代理强行断开的问题（[Issue #54049](https://github.com/NousResearch/hermes-agent/issues/54049)），这反映第三方/国产模型接入时的网络层兼容性依然脆弱。

## 8. 待处理积压
以下重要 Issue 依然处于 OPEN 状态，需要核心维护者优先关注：
* **[Issue #36046](https://github.com/NousResearch/hermes-agent/issues/36046) [P3]**：任务指示已完成并生成了 Kanban 产出物，但实际文件未创建/被删除。这种“幻觉式成功”严重影响 Agent 自动化流程的可信度。
* **[Issue #51976](https://github.com/NousResearch/hermes-agent/issues/51976) [P2]**：Cron 工具通过 API 路径可调度网关生命周期脚本，进而引发无限重启循环的安全边界问题。
* **[PR #44059](https://github.com/NousResearch/hermes-agent/pull/44059) [P1]**：关于消除伪造的 `<untrusted_tool_result>` 分隔符以防范工具结果包装器的边界欺骗（提权/越狱风险）。该 PR 已标记为重复，但底层的安全隐患仍需确认是否已在最新代码分支中彻底解决。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**报告日期**: 2026-06-29  
**数据来源**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 今日速览
PicoClaw 项目在过去 24 小时内整体开发节奏平稳，核心活动以历史工单的清理与审核为主。今日无新代码版本发布，但项目维护者关闭了 1 个陈旧 Issue 并关闭/合并了 1 个功能 PR，同时在通道扩展方面迎来了 1 个新的待审核 PR。整体来看，项目当前处于功能迭代与代码维护的平衡期，核心维护团队正在积极控制积压工单数量，保障项目健康度。

### 2. 版本发布
*今日无新版本发布。*

### 3. 项目进展
今日项目在视觉处理与通道架构方面取得了实质性进展，同时在工单梳理上迈出了一步：
*   **视觉管线优化推进**：PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) `[Feat/image input compression]` 状态更新为已关闭/合并。该 PR 为 PicoClaw 的视觉管线引入了可配置的入站图像压缩功能。此前管道仅依靠 `max_media_size` 限制，该更新打破了这一局限，提供了多级压缩策略，有效防止了构建模型 Payload 时的内存溢出（OOM）或过载问题，大幅提升了多模态处理的稳定性。
*   **新增单向通信支持**：PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) `[Added simplex channel type]` 于昨日提交并保持开启状态，表明项目正在拓展其接入的通道类型生态。

### 4. 社区热点
今日社区关注度最高的话题集中在 **WebSocket 客户端的交互确定性** 上：
*   **核心议题**：Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) `[Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients`（👍 2, 评论 4）。
*   **诉求分析**：外部 Pico Protocol 的 WebSocket 客户端开发者指出，当前客户端虽然能接收 `message.create`、`typing.start` 等事件，但缺乏一个明确的“对话轮次完成”信号。开发者强烈需要一个确定性的标志来判断 AI Agent 是否已经完整处理完毕用户的单次消息。这反映出接入 PicoClaw 的第三方客户端在状态机和 UI 交互（如加载动画结束控制）上存在硬性技术需求。

### 5. Bug 与稳定性
*今日未报告新增严重 Bug 或系统崩溃问题。* 
不过，今日合并的 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 实际上属于**预防性稳定性修复**。它从底层避免了因未限制图像体积而导致的前端/通道数据过载问题，增强了系统在面对高频图像输入时的鲁棒性。

### 6. 功能请求与路线图信号
*   **通信协议增强（已暂缓/关闭）**：如上述 Issue #2984 所示，社区对“明确的轮次结束信号”呼声较高。虽然该 Issue 今日被标记为 `[stale]` 并关闭，但这释放了一个信号：项目方可能已经在其他分支实现了该功能，或者正在重构更为统一的流式传输协议，而不打算单独修补此机制。
*   **通道架构扩展（进行中）**：PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) 添加了 `simplex channel type`（单向通道）。这暗示 PicoClaw 的路线图正倾向于支持更广泛的 IoT 设备、单向通知推送或异步广播场景，脱离传统的双向聊天限制。

### 7. 用户反馈摘要
通过对近期工单的分析，当前用户的真实痛点与反馈如下：
*   **痛点 1：边缘设备性能瓶颈**：用户在处理多模态（特别是图像输入）时，遇到了 Payload 过大导致的性能瓶颈。今日合并的图像压缩 PR 完美契合了这部分用户的需求，他们需要更细粒度的流量控制来适配受限的网络或硬件环境。
*   **痛点 2：状态同步的不确定性**：对接 WebSocket 的开发者表示，消息流事件的碎片化让他们难以精准控制前端 UI。他们不满意“靠猜测或超时来判断” AI 是否回答完毕，渴望更加严谨的协议规范。

### 8. 待处理积压
提醒维护者及社区关注以下处于滞留状态或需要进一步 Review 的工单：
*   **🟡 待审核 PR**：[#3193 Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193)。该 PR 已开启 1 天且暂无评论跟进，建议核心维护者尽快进行代码审查，确认其与现有通道架构的兼容性。
*   **🔴 警示**：今日关闭的 Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) 与 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) 均被标记为 `[stale]`。虽然这些工单得到了处理，但项目存在一定的“陈旧积压”倾向（如这些建议停滞了近一个月才被批量处理）。建议社区建立更加常态化的 Triage 机制，避免高质量 Feature Request 因长时间未响应而流失社区热情。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期**: 2026-06-29  
**数据分析师**: AI 智能体开源观察站

---

### 1. 今日速览
NanoClaw 在过去 24 小时内社区贡献度呈现高度活跃状态，共收到 4 个待合并的 Pull Requests 和 1 个新增 Issue，且均有实质性技术细节。贡献者涵盖了底层安全修复（A2A 路径校验）、鉴权优化（Codex Token 更新）以及平台生态扩展（Telegram 富文本与 Coolify 部署）。尽管今日无新版本发布或代码合并，但这批高质量的 PR 预示着项目正在为下一次功能迭代积累代码资产，整体项目健康度良好。

---

### 2. 版本发布
**无** （过去 24 小时内未发布新版本。目前最新公开提及版本为 Issue 中提到的 `v2.1.1`）。

---

### 3. 项目进展
今日虽无合并/关闭的工单，但有 4 个高质量的 PR 进入待合并状态，直接推动了多智能体安全与多渠道接入的进展：
*   **A2A 通信安全加固**: [PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879) 修复了 Agent-to-Agent 附件转发时可能因软链接导致越权写入的安全漏洞，提升了多智能体沙箱隔离的安全性。
*   **Codex 鉴权链路修复**: [PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878) 解决了 Codex 代理因本地存在失效的 OneCLI 密钥而无法自动重连的问题，大幅降低了使用 OpenAI 系列模型时的掉线率。
*   **消息渠道能力升级**: [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) 引入了对 Telegram Bot API 10.1 的原生支持，实现富文本渲染，提升了个人助手在即时通讯平台上的表现力。
*   **部署体验优化**: [PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875) 引入了 Coolify 部署支持，进一步降低了开发者自托管 NanoClaw 的运维门槛。

---

### 4. 社区热点
今日社区的关注点主要集中在**多模型适配的稳定性**和**跨平台功能扩展**上。
*   **OpenAI 容器崩溃问题** 引发了最多关注（[Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)）。多位开发者正在尝试将默认 Agent 运行时切换至 OpenAI，这反映出社区对引入闭源顶级大模型（如 GPT-4o）作为 NanoClaw 核心驱动的高度诉求。
*   **前端展现与部署** 也是热门方向，Telegram 富文本（[PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)）与 Coolify 一键部署（[PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)）的提交，说明个人 AI 助手的受众越来越看重“开箱即用”和“高颜值交互”。

---

### 5. Bug 与稳定性
今日报告了 1 个严重阻断性 Bug，按严重程度排列如下：

*   🔴 **[严重/P0] OpenAI Provider 容器生成即崩溃** 
    *   **状态**: 已报告，暂无对应 fix PR。
    *   **详情**: 在 NanoClaw 2.1.1 版本中，CLI 成功将 agent group 的 provider 设置为 `openai` 并写入数据库，但当 Agent 接收消息并尝试 Spawn (生成) 新的 Docker 容器时会导致崩溃。这直接阻断了用户使用 OpenAI 模型的核心流程。
    *   **链接**: [Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)
*   🟠 **[较高/P1] Codex 凭证过期导致 Agent 对话中断**
    *   **状态**: 已有修复 PR ([PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878))。
    *   **详情**: 过期 Token 无法静默刷新，导致 Agent 在对话中途报错 `access token could not be refreshed`。
*   🟡 **[中等/P2] A2A 路径逃逸风险**
    *   **状态**: 已有修复 PR ([PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879) 。
    *   **详情**: 软链接导致文件越过 session root 写入，存在潜在的安全隔离风险。

---

### 6. 功能请求与路线图信号
从今日的 Issue 与 PR 动向中，可以提取出 NanoClaw 近期明确的演进路线图信号：
1.  **深度集成主流 IM 渠道**: Telegram `sendRichMessage` 的原生支持（[PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)）表明项目正在从纯粹的“后端引擎”向“具备前端富交互展示的个人助手”演进。
2.  **完善云原生与 PaaS 部署**: 新增的 Coolify 支持（[PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)）传递出明确的信号——项目方希望降低自托管门槛，拥抱更广泛的平民开发者群体。这两个 PR 极有可能会被纳入下一个 minor 版本更新中。

---

### 7. 用户反馈摘要
*   **真实痛点**: 用户 @MJDemarcus 反馈，配置命令 (`ncl groups config update`) 能够无报错执行，但实际运行时容器直接 Crash。这表明目前 CLI 的配置校验仅停留在数据库 CRUD 层面，**缺乏对目标 Provider 运行时环境的预检机制**，造成了“配置成功但无法运行”的糟糕体验。
*   **使用场景**: 用户正大量使用 NanoClaw 作为底层路由器，来统一调度和托管基于 OpenAI `gpt-4o` 的多 Agent 协同工作，对其容器化隔离能力抱有很高期待。

---

### 8. 待处理积压
*   ⚠️ **维护者重点关注建议**: 
    1.  **[Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)**: OpenAI Provider 生成容器崩溃是阻塞性极强的问题，目前该 Issue 仅有 0 条评论，需要维护团队尽快介入排查容器日志，或增加 Provider Spawn 阶段的预检逻辑。
    2.  **PR 审核积压**: 今日新增的 4 个 PR 目前状态均为 Open，涵盖了关键的安全更新与基础架构优化，建议维护者在合并窗口期优先 Review 安全相关的 [PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879) 和 [PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878) 以稳定主干代码。

---
*数据采集时间: 2026-06-29 00:00 UTC | 策划与生成: AI 智能体开源分析师*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

这是一份基于 NullClaw 项目 2026-06-28 至 2026-06-29 过去 24 小时 GitHub 数据生成的开源项目动态日报。

---

# 📊 NullClaw 项目动态日报 (2026-06-29)

### 1. 今日速览
过去 24 小时，NullClaw 项目整体活跃度呈现出**“稳健开发、清理长尾”**的态势。项目今日无新版本发布，但核心代码库有 1 条重要的功能性 PR（[#969](https://github.com/nullclaw/nullclaw/pull/969)）提交并进入待合并状态，标志着其在智能体人机交互体验上的持续深化。同时，社区端关闭了 1 条长达 4 个月的历史讨论（[#50](https://github.com/nullclaw/nullclaw/issues/50)），有效进行了议题瘦身。综合来看，项目处于健康、平稳的迭代周期。

### 2. 版本发布
**本监测周期内（过去 24 小时）无新版本发布。**

### 3. 项目进展
今日项目无已合并的 PR，但有一条高价值的功能性 PR 处于待合并（Open）状态，推进了项目的核心安全与交互能力：
*   **🛠️ 新增结构化工具审批流 (PR [#969](https://github.com/nullclaw/nullclaw/pull/969))**
    *   **作者:** valonmulolli
    *   **进展:** 提交了关于 Agent 审批机制的核心代码。
    *   **内容:** 为 Shell 工具及其他可能返回 `error.ApprovalRequired` 的工具实现了双轮审批机制。当工具触发该错误时，Agent 会捕获并存入 `PendingApproval` 状态，随后通过 SSE（Server-Sent Events）通道发送 `---approval---` 事件。前端接收后可渲染专门的审批 UI。**这一进展大幅提升了 NullClaw 在执行高风险系统命令时的安全性与“人在环路”的掌控力。**

### 4. 社区热点
今日社区最值得关注的是对历史极端使用场景讨论的终结：
*   **[CLOSED] Issue #50: [Can this run on an Esp32?](https://github.com/nullclaw/nullclaw/issues/50)**
    *   **热度数据:** 创建于 2026-02-21，存在 4 个多月，包含 4 条评论，于昨日正式关闭。
    *   **背后诉求:** 开发者 `ngantrandev` 探索了将 NullClaw 跨越常规服务器/PC环境，直接部署到资源高度受限的物联网微控制器（ESP32）上的可能性。虽然该议题最终被关闭（大概率由于架构不匹配或超出项目范围），但这反映了社区对 **“轻量级边缘 AI 部署”** 的浓厚兴趣。

### 5. Bug 与稳定性
*   **过去 24 小时内未收到新提交的 Bug 报告、崩溃或回归问题。**
    *   *注：今日提交的 PR [#969](https://github.com/nullclaw/nullclaw/pull/969) 中引入了针对 `error.ApprovalRequired` 的错误捕获机制，这属于项目主动提升系统容错性和稳定性的内部改进。*

### 6. 功能请求与路线图信号
*   **信号捕获：智能体操作的安全审查与前端协同**
    从今日的 PR [#969](https://github.com/nullclaw/nullclaw/pull/969) 可以明确看出项目的下一步演进路线图。NullClaw 正在构建一套完善的 **“Human-in-the-loop”（人在环路）** 审批机制。
    *   **纳入下一版本的预判：** 基于该 PR 处于 Open 状态且功能闭环完整，一旦代码审查（Code Review）通过，这套“结构化审批流”及其配套的前端 SSE 渲染逻辑极有可能被纳入下一个 Minor 版本更新中。这将使 NullClaw 成为在执行敏感操作时更可靠的企业级 AI 助手框架。

### 7. 用户反馈摘要
从已关闭的 Issue [#50](https://github.com/nullclaw/nullclaw/issues/50) 中，我们可以提炼出早期采纳者的核心痛点与期望：
*   **用户痛点：** 部分开发者希望突破现有云端或本地高配硬件的束缚，尝试在嵌入式设备上运行个人 AI 助手。
*   **反馈提炼：** 面对这类需求，项目目前的架构尚不支持极度裁剪的物联网环境。这提示维护团队，如果未来有意进军 Edge AI 市场，可能需要考虑提供轻量级的 Runtime 适配方案，或在官方文档中明确界定最低系统要求。

### 8. 待处理积压
*   **PR 审查积压预警：** 目前 PR [#969](https://github.com/nullclaw/nullclaw/pull/969) 处于待合并状态，且暂无评论记录（评论数为 undefined/0）。
    *   **维护者提醒：** 建议核心维护团队（@Maintainers）及时跟进该 PR 的 Code Review。鉴于该 PR 涉及 SSE 事件流的变更以及底层 Agent 状态机（`PendingApproval`）的调整，属于核心架构改动，需重点评估其对现有事件监听机制的破坏性，以保持项目的开发流速。

---
*数据统计周期: 2026-06-28 至 2026-06-29 | 分析生成: AI 开源项目分析师*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project daily report for IronClaw based on the GitHub data provided:

# 📊 IronClaw 项目动态日报 (2026-06-29)

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持着**高度活跃**的研发节奏，共计产生了 9 条 Issue 更新（关闭 7 条，新开 2 条）和 49 条 PR 更新（合并/关闭 22 条，待合并 27 条）。
项目当前的焦点高度集中在 **"Reborn" (重构版) 核心技术栈**上，尤其是围绕“细粒度权限控制”的史诗级任务取得了突破性进展。
此外，核心团队在自动化集成测试框架、前端性能优化以及 OAuth/Slack 渠道集成方面落地了大量代码。今日暂无新版本发布，但核心代码库的健康度和迭代速度极为强劲。

---

## 2. 项目进展
今日项目通过合并和关闭大量 PR，在多个核心模块迈出了坚实的一步：

*   **细粒度权限控制体系初步成型：** 
    Epic 任务 [#5261](https://github.com/nearai/ironclaw/issues/5261) 及其衍生出的 5 个子任务（[#5266](https://github.com/nearai/ironclaw/issues/5266), [#5267](https://github.com/nearai/ironclaw/issues/5267), [#5268](https://github.com/nearai/ironclaw/issues/5268), [#5272](https://github.com/nearai/ironclaw/issues/5272), [#5273](https://github.com/nearai/ironclaw/issues/5273)）均已**关闭**。这标志着 Reborn 技术栈已成功引入 DB 支持的用户角色、四维权限策略以及 Admin 管理接口。为验证此功能，核心开发者提交了端到端测试 PR [#5394](https://github.com/nearai/ironclaw/pull/5394)。
*   **测试框架与 CI 基础设施完善：** 
    开发者合并了多个测试框架切片 PR，包括 URL 键控 HTTP 匹配器 ([#5387](https://github.com/nearai/ironclaw/pull/5387))，并由于架构原因果断 descoped 了不可达的 Embeddings 伪接口 ([#5386](https://github.com/nearai/ironclaw/pull/5386))。同时，Reborn WebUI v2 的实时 QA 金丝雀流程已上线 ([#5354](https://github.com/nearai/ironclaw/pull/5354))。
*   **认证与集成渠道修复：**
    修复了 Reborn WebUI 的 Google OAuth 解析问题及预览主机登录异常 ([#5388](https://github.com/nearai/ironclaw/pull/5388))。
*   **上下文体积大幅瘦身（性能优化）：**
    合并了渐进式工具暴露机制 ([#5149](https://github.com/nearai/ironclaw/pull/5149))，将每次模型调用的 Prompt 从庞大的 ~25.8k tokens 大幅削减，有效解决了 NEAR AI 的延迟和超时问题。

---

## 3. 社区热点
*   **WebUI v2 构建产物引发了架构反思**：Issue [#5236](https://github.com/nearai/ironclaw/issues/5236) (已关闭) 讨论了停止将 WebUI v2 dist bundle 提交到代码库的诉求。之前为了摆脱 CDN 依赖（PR #5024）引入了本地打包，但这导致仓库体积膨胀。这反映出社区和贡献者对**部署轻量化与代码库洁净度**的双重高要求。
*   **黑客松分支的稳定性需求**：PR [#4787](https://github.com/nearai/ironclaw/pull/4787) 是为 Barcelona Hackathon 准备的长期不合并分支。贡献者 `elliotBraem` 持续拉取上游代码以保证黑客松参赛者的入门路径稳定，这表明项目在外部推广时，API 和入门流程的稳定性至关重要。

---

## 4. Bug 与稳定性
*   🔴 **[高严重度 - 未修复] Nightly E2E 测试失败：**
    自动化机器人报告 Nightly E2E 运行失败 ([#4108](https://github.com/nearai/ironclaw/issues/4108))。失败发生在完整的 E2E (features) 阶段，目前仍处于开启状态，需维护者介入排查是否为近期代码引入的回归。
*   🟡 **[中严重度 - 已修复] 模型调用超时与工具报错隐蔽：**
    之前每次请求携带 91 个工具定义导致超过 120s 超时（已在 PR [#5149](https://github.com/nearai/ironclaw/pull/5149) 解决）；同时，底层工具的错误细节被隐藏，只给用户返回 "invalid_input"，目前通过 PR [#5338](https://github.com/nearai/ironclaw/pull/5338) 端到端暴露了真实报错。
*   🟡 **[中严重度 - 已修复] Google SSO 登录异常：**
    因 `jsonwebtoken` 依赖升级导致 Google RS256 令牌解析失败，已在 [#5388](https://github.com/nearai/ironclaw/pull/5388) 中修复。

---

## 5. 功能请求与路线图信号
*   **Next Step: 完善细粒度权限的实际配置**
    Issue [#5385](https://github.com/nearai/ironclaw/issues/5385) (已开启) 明确了下一步的需求：允许配置 Owner、Admin、Member 三种用户类型，并期望通过环境变量设置唯一的 Owner。结合今天已经合并的底层 Capability Policy 代码，预计下一个版本的重点将是**暴露这四维权限的 UI 管理界面或 REST 配置规范**。
*   **依赖项的批量升级潮**
    `dependabot` 今日异常活跃，提交了包括 Tokio 生态、WASM、Github Actions 在内的十余个依赖升级 PR（如 [#5391](https://github.com/nearai/ironclaw/pull/5391), [#4002](https://github.com/nearai/ironclaw/pull/4002)）。这释放出团队正在为 Reborn 的全面稳定做安全性和兼容性的扫尾工作，可能会合并入下一个大版本。

---

## 6. 用户反馈摘要
*   **痛点：Token 爆炸导致响应缓慢。** 用户在生产日志中观察到携带全部工具和历史记录的请求重试耗尽后无响应，体验极差。（已通过减少上下文工具暴露解决）
*   **痛点：报错信息不可读。** 用户在遇到工具调用失败时，只看到模糊的 "driver protocol error"，无法排查问题。
*   **诉求：更清晰的本地开发和配置方式。** 本地测试不同角色权限的流程极其繁琐，强烈依赖环境变量，开发者期望有更直观的 REST 接口来管理。

---

## 7. 待处理积压
*   ⚠️ **未分类的 Nightly E2E 失败 ([#4108](https://github.com/nearai/ironclaw/issues/4108))**：此 Issue 已开启一个月有余，且根据最新机器人反馈仍在失败中，建议核心团队优先 Review 最近的 CI 改动或 Reborn 代码合并。
*   ⚠️ **版本发布追踪 PR ([#5311](https://github.com/nearai/ironclaw/pull/5311))**：该 Chore PR 指出 `ironclaw_common` 和 `ironclaw_skills` 将包含 API 破坏性更新，整体大版本将跃升至 `0.29.1`。该 PR 已处于开启状态数天，需关注其合并进度以解阻塞依赖等待更新的下游项目。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目动态日报（2026 年 6 月 29 日）：

### 📈 1. 今日速览
过去 24 小时内，LobsterAI 仓库整体呈现出**“清存量、解死结”**的维护特征，活跃度集中在历史遗留状态的清理。今日共有 5 个 Issue 和 3 个长期挂起的 PR 被批量关闭（均标记为 `[stale]`），而新开启的活跃 Issue 与 PR 数量相对较少。项目暂未发布新版本，当前处于功能迭代后的阶段性沉淀与代码重构期。

### 🚀 2. 版本发布
**本日无新版本发布（0 个 Release）。** 建议社区开发者持续关注 `main` 分支的近期合并动态以获取最新功能。

### 🛠️ 3. 项目进展
今日项目没有新合并的代码，但集中清理了多个长期未更新的陈旧请求，这有助于降低代码冲突风险和维护成本。
*   **UI 与布局优化清退**：关闭了 [PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)，该 PR 旨在将已选技能标签移至输入框顶部展示，虽然方向良好，但因长期停滞被关闭。
*   **渲染能力升级清退**：关闭了 [PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)，此 PR 本计划为 Artifacts 引入针对 HTML、React 和 Mermaid 的可扩展预览管线，同样因版本迭代导致冲突而作罢。
*   **技能导入校验清退**：关闭了 [PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)，原计划修复 zip 导入目录名异常及重复导入问题。

### 🔥 4. 社区热点
今日社区最活跃的讨论集中在**底层依赖适配**与**核心功能可用性**上：
*   **[Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)**：用户 `Juzisuan965` 询问是否有计划支持带有破坏性更新的新版 `openclaw`，这反映了企业/进阶用户对底层框架同步升级的迫切需求。
*   **[Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)**：由 `AL-Mint` 昨日新提交，直指**Memory Search（记忆搜索）模块的供应商锁定问题**。用户无法将 provider 切换为 local，当 OpenAI API 遇到 429（配额耗尽）时，记忆检索功能直接瘫痪。这是一个影响本地化体验的阻断级痛点。

### 🐛 5. Bug 与稳定性
根据今日更新状态，社区暴露出以下几个影响稳定性的 Bug：
*   **[P0 阻断级] Memory Search 锁死与冲突**：([Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)) Windows 11 环境下，索引重建被 DB 锁阻塞 (`EBUSY`)，且 UI 中 provider 被硬编码锁定，目前**暂无对应的 fix PR**，需官方介入。
*   **[P1 逻辑级] 定时任务创建失效**：([Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)) 创建不重复的定时任务时，清空日历后点击创建无响应且无报错提示。
*   **[P1 逻辑级] 技能状态与路由混乱**：
    *   ([Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)) 已停用的技能在对话中依然会被大模型触发调用。
    *   ([Issue #1442](https://github.com/netease-youdao/LobsterAI/issues/1442)) 对话后引用的技能不展示，切换 Agent 会话后才恢复。

### 🗺️ 6. 功能请求与路线图信号
结合目前处于 Open 状态的 PR，可以明显看出 LobsterAI 下一阶段的演进方向在**多会话隔离**与**UX 深度重构**：
*   **信号一：状态独立解耦。** [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494) 正在修复全局技能选择的逻辑缺陷，将其按 `draftKey` 独立到每个会话中。这一改动极有可能在下个小版本中合入。
*   **信号二：后台管理全面“卡片化”。** [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) 对定时任务进行了大刀阔斧的 UI 升级。包括 2 列卡片网格重构、按日期分组展示历史任务，标志着项目正在统一后台各模块（技能/MCP/任务）的视觉规范。

### 🗣️ 7. 用户反馈摘要
*   **痛点 1：API 解耦诉求强烈**：用户对无法使用本地 Embedding 模型感到沮丧，重度依赖 OpenAI 导致一旦触发限流，核心的“记忆”能力便丧失，影响了个人 AI 助手的离线/本地化可用性。
*   **痛点 2：前端状态同步滞后**：用户在使用多 Agent 和多会话切换时，技能的激活状态表现混乱（如停用了还在用、切换会话串状态），引发了用户对“Agent 技能挂载机制究竟是如何生效”的质疑。
*   **痛点 3：静默失败引发困惑**：前端 UI 在异常情况下（如定时任务点不动）没有给出 Toast 提示，增加了用户的试错成本。

### ⏳ 8. 待处理积压
以下重要任务仍处于 Open（待处理）状态，需要维护团队重点关注并推进 Code Review：
1.  **[Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)**：最新报告的严重环境/锁定 Bug，需排期排查。
2.  **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)** 与 **[PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)**：这两个 PR 涉及到核心状态架构调整和大型 UI 变更，长期停滞会导致后续合并冲突加剧，建议尽快安排 Reviewer 介入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis 项目日报 | 2026-06-29**

**1. 今日速览**
过去 24 小时内，Moltis 项目整体保持高度活跃的研发状态，但没有发布任何新版本。项目活动主要围绕开发者 `resumeparseval` 提交的两个底层架构与多模态处理优化 PR 展开，涵盖了图片上下文体积控制与网关依赖解耦。社区方面仅有 1 个新 Bug 反馈，且无任何已合并或已关闭的 PR/Issue，表明项目目前正处于新代码的提交、审查与积压阶段，整体运行平稳，正蓄力迎接下一个版本。

**2. 版本发布**
*无*。截至今日，项目在过去 24 小时内未发布任何新版本。

**3. 项目进展**
今日无已合并或关闭的 PR。但有两项处于待合并状态的核心代码贡献，预示着项目在运行效率和资源调度上即将迎来重要进展：
*   **多模态上下文优化**：[PR #1138](https://github.com/moltis-org/moltis/pull/1138) 提出在超大分辨率图像进入模型上下文之前进行缩放处理。此举将彻底解决单张高清手机照片（如 4032×3024）占用高达约 35 万 Token，导致文本压缩机制失效及预防性溢出保护拦截的问题，极大提升了智能体处理多模态数据的稳定性。
*   **网关依赖解耦**：[PR #1139](https://github.com/moltis-org/moltis/pull/1139) 修复了网关 `metrics` 特性强依赖 `matrix-sdk` 的问题。通过添加 `?` 弱限定符，避免了在未启用 Matrix 频道时被强制拉入庞大的 SDK 依赖，有助于精简构建产物并加快编译速度。

**4. 社区热点**
当前社区热度主要集中在基础组件与异常报错的排查上：
*   **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)**：该 Issue 虽然是前日创建，但在过去 24 小时内获得了新的评论更新（共 1 条评论）。用户报告在处理苹果容器时，其 ID 长度超出了系统的命名限制。这暴露出 Moltis 在集成或对接特定第三方平台（如 Apple生态）时，底层的字段长度校验缺乏足够的兼容性兜底。

**5. Bug 与稳定性**
*   **[中等] Apple Container ID 长度溢出** - [Issue #1137](https://github.com/moltis-org/moltis/issues/1137)
    *   **表现**：在处理 Apple Container 时，因 ID 超出系统预设的名称长度限制导致报错或异常。
    *   **修复状态**：已引起社区讨论，但目前**尚无对应的 fix PR 提交**，需关注核心维护者是否将其纳入优先修复队列。
*   **[严重] 多模态上下文溢出引发雪崩** - 隶属已提交的 [PR #1138](https://github.com/moltis-org/moltis/pull/1138) 背景
    *   **表现**：base64 内联的原始高分辨率图片直接撑爆上下文预算，导致模型每轮对话都被预防性溢出保护拒绝。
    *   **修复状态**：开发者已提交预处理降采样修复代码（PR #1138），等待 Maintainer 审批合并。

**6. 功能请求与路线图信号**
今日的动态更多反映的是“底层基建打磨”而非新增用户功能。从 [PR #1138](https://github.com/moltis-org/moltis/pull/1138) 和 [PR #1139](https://github.com/moltis-org/moltis/pull/1138) 可以明显读取出项目的短期路线图信号：
*   **多模态/Agent视觉能力增强**：项目正在积极适配用户上传真实场景照片（如手机直拍图）的需求。图像缩放功能的引入，意味着后续版本的 AI 智能体能更稳健地处理视觉任务，而不会因为 Token 预算崩溃。
*   **模块化与轻量化部署**：修复 metrics 强依赖表明团队正在关注构建系统的洁癖优化。对于个人 AI 助手项目而言，允许用户按需开启特定通信渠道（如 Matrix）而不增加负担，是走向成熟化、模块化部署的重要一步。

**7. 用户反馈摘要**
从 Issue 与 PR 描述中可以洞察出以下用户痛点及真实使用场景：
*   **真实世界的非理想数据输入**：用户在实际使用 Agent 时，会频繁直接投喂手机原图（如 4032×3024 像素）。用户期望系统能像人类一样“看懂图片”，但目前系统对这种大体积多模态 Payload 的鲁棒性不足，直接影响到了基础对话的连贯性（[PR #1138](https://github.com/moltis-org/moltis/pull/1138) 背景）。
*   **跨平台生态兼容性阵痛**：随着个人 AI 助手接入更多的外部服务，用户在特定容器环境（如 Apple Container）下遭遇的字段限制问题（[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)），反映出用户有着深度的定制化集成需求，而项目当前对不同平台底层规范的适配还存在盲区。

**8. 待处理积压**
*   **待合并代码审查**：当前有 2 个高质量且包含详细背景分析的 PR（[PR #1138](https://github.com/moltis-org/moltis/pull/1138), [PR #1139](https://github.com/moltis-org/moltis/pull/1139)）处于 OPEN 状态，建议维护团队优先进行 Code Review，以便尽早将其纳入下一个版本构建中。
*   **社区 Bug 悬而未决**：[Issue #1137](https://github.com/moltis-org/moltis/issues/1137) 已经产生新的讨论但未关闭，需要项目组确认这是否是一个容易复现的阻断性 Bug，并适时打上标签或指派人员跟进。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (QwenPaw) 项目动态日报**
📅 日期：2026-06-29

---

### 1. 今日速览
过去 24 小时内，CoPaw 项目保持高度活跃的开发与社区互动状态。今日共有 4 条 Issue 更新（3 新开，1 关闭）和 5 条 PR 更新（均处于待合并审查状态）。项目核心开发团队目前正深度聚焦于 **Agentscope 2.0** 的适配与底座重构工作，推进了多个核心模块（上下文管理、聊天、定时任务）的单元测试覆盖。同时，社区对多 Agent 协同（如 Matrix 通信）、RAG 记忆检索能力以及 UI 交互细节提出了高质量的反馈与需求，项目生态正稳步向前演进。

### 2. 版本发布
**本日无新版本发布。** (当前代码库正处于向 Agentscope 2.0 适配的重构与测试攻坚阶段，预计待核心测试覆盖完成后将发布新版本)。

### 3. 项目进展
今日虽然没有 PR 被合并，但有多项重要的基础架构 PR 更新，标志着项目正在为下一代底层架构打地基：
*   **Agentscope 2.0 适配测试齐头并进**：开发者 @hanson-hex 连续推进了三个核心模块的单元测试 PR（[PR #5581: app-infra](https://github.com/agentscope-ai/CoPaw/pull/5581) 31个用例、[PR #5422: chats 模块](https://github.com/agentscope-ai/CoPaw/pull/5422) 38个用例、[PR #5423: crons 模块](https://github.com/agentscope-ai/CoPaw/pull/5423) 51个用例）。这些 PR 表明后端代码包已从旧的 `runner` 结构向 `chats` 等模块化架构迁移完毕，正进行全面回归测试。
*   **上下文管理能力增强**：社区贡献者 @niceIrene 提交了 Scroll 上下文管理策略（[PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321)），引入持久化 SQLite 存储与按需 REPL 召回，旨在替代原有的原生压缩摘要方案；另一位贡献者 @zorrofox1121 修复了上下文压缩阈值忽略动态模型覆盖的 Bug（[PR #5586](https://github.com/agentscope-ai/CoPaw/pull/5586)）。

### 4. 社区热点
今日讨论最热的议题集中在 **记忆检索（RAG）** 和 **UI 交互体验** 上：
*   **[Issue #5588] 记忆搜索支持专用 Reranker 实现两阶段检索** (作者: cjc0045, [链接](https://github.com/agentscope-ai/CoPaw/issues/5588))：用户敏锐指出当前 `memory_search` 仅靠单阶段 embedding 召回，在记忆库膨胀后精度下降，呼吁接入专用的 Reranker 模型启用两阶段检索。这反映出高级用户对 CoPaw 作为“长期记忆 AI”的召回精度有着极高要求。
*   **[Issue #5589] 输入框支持连续添加多个技能** (作者: NicholaLau, [链接](https://github.com/agentscope-ai/CoPaw/issues/5589))：用户反馈在 UI 中每次只能通过 `/` 添加一个技能，极大影响了复杂指令的组装效率。这是典型的“高阶玩家”痛点，表明用户已不满足于单点交互，而是需要进行复杂的工作流编排。

### 5. Bug 与稳定性
今日报告了以下稳定性问题及架构级 Bug：
1.  **【严重】Qwen-Image Tool 安装错误** (作者: Shj451148969, [Issue #5587](https://github.com/agentscope-ai/CoPaw/issues/5587))：影响多模态图像处理工具的正常部署，属于阻塞性问题，尚在排查中。
2.  **【高危/已修复】跨 Agent 双向唤醒死循环** (作者: laeni, [Issue #5204](https://github.com/agentscope-ai/CoPaw/issues/5204)，已关闭)：两个独立 Agent 通过 Matrix 协议通信时，互相把对方的回复当成入站消息，陷入无限唤醒死循环。该 Issue 已于今日关闭，说明底层 runtime 已增加相应的防抖或回路打断机制。
3.  **【中等/已提交 PR】动态模型切换导致上下文压缩失效** (作者: zorrofox1121, [PR #5586](https://github.com/agentscope-ai/CoPaw/pull/5586))：在对话中途切换大模型时，系统未能读取动态的 `max_input_length`，可能导致上下文超限崩溃。目前已有针对性 fix PR 提交审查。

### 6. 功能请求与路线图信号
基于近期的 Issue 趋势，CoPaw 下一阶段的路线图信号逐渐清晰：
*   **RAG 能力深化**：结合 [Issue #5588](https://github.com/agentscope-ai/CoPaw/issues/5588) 的诉求和 [PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321) 的持久化上下文策略，CoPaw 正在从“无状态/弱状态助手”向“具备持久化精准记忆的高级智能体”演进，引入精排模型大概率被纳入下一版本规划。
*   **多 Agent 协同与调度安全**：随着 [Issue #5204](https://github.com/agentscope-ai/CoPaw/issues/5204) 的解决，项目验证了其在去中心化多 Agent 通信（如 Matrix 协议）上的探索，未来可能会进一步完善跨 Agent 的消息防抖与任务分配机制。

### 7. 用户反馈摘要
从今日数据中可提炼出以下用户真实反馈：
*   **痛点 1：记忆搜索不够智能**。随着使用时间增长，用户发现 AI 的记忆检索开始“抓不住重点”，迫切需要更精细的搜索与排序（如两阶段 Rerank）。
*   **痛点 2：UI 交互割裂感**。重度用户在进行复杂的 Agent 任务时，频繁输入 `/` 触发技能严重打断心流，期望更平滑的指令编排体验。
*   **满意点**：从社区贡献者提交的高质量 PR（如上下文管理、动态配置覆盖修复）可以看出，开发者对 CoPaw 的代码架构接受度较高，愿意深入底层逻辑为其贡献核心功能。

### 8. 待处理积压
*请维护团队关注以下处于 Under Review 状态的重要 PRs，避免社区贡献者等待过久：*
*   [PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321) - **Scroll context-management 策略**（创建于 6.19，已待审查 10 天，属重大架构改动）。
*   [PR #5422](https://github.com/agentscope-ai/CoPaw/pull/5422) 与 [PR #5423](https://github.com/agentscope-ai/CoPaw/pull/5423) - **Agentscope 2.0 适配单测**（创建于 6.23，涉及大量代码重构与对齐，需核心团队尽快 Review 并合并，以免产生新的代码冲突）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 **ZeroClaw** 开源项目 2026-06-29 动态日报：

# ZeroClaw 项目动态日报 (2026-06-29)
**项目速写**：ZeroClaw 是一个面向多通道（Telegram, WhatsApp, Matrix 等）与多模态的个人 AI 助手与智能体开源框架，支持 WASM 插件、SOP（标准操作程序）控制以及丰富的网关与运行时配置。

---

### 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持了**极高的活跃度**，共产生 50 条 Issue 更新（40 条新开/活跃）与 50 条 PR 更新（43 条待合并）。项目目前没有发布新的 Release 版本，但从提交的 PR 来看，核心开发组与社区正集中于 **v0.8.3 运行时与 SOP（标准操作程序）控制平面**的重构，以及 **v0.9.0 的安全边界强化**。大量标记为 `size:XL` 和 `high risk` 的 PR 正在接受review，表明项目正处于一个深度架构演进的攻坚阶段。

### 2. 版本发布
**无新版本发布 (0 releases)。**
当前主干分支正持续推进 v0.8.2（Skills 平台完善）与 v0.8.3（运行时执行与可观测性）的迭代，并为 v0.9.0（网关与安全破坏性更新）做前期准备。

### 3. 项目进展
今日项目虽仅关闭/合并了 7 个 PR，但待合并队列中包含多个极具分量的架构级更新，正在推动项目大幅向前迈进：
*   **SOP（标准操作程序）引擎重构 (推进至 5/5)**：今日涌现多个关于 SOP 的堆叠 PR，包括 [PR #8430 强制步骤路由]、[PR #8416 增加步骤契约基质] 和 [PR #8420 强制步骤模式]。这些更新将原有的线性推进替换为强类型的路由解析，极大增强了复杂智能体工作流的可靠性。
*   **WASM 插件系统大重构**：[PR #8368 弃用 Extism 并直接接入 wasmtime 组件模型]。这是解决 Issue #6943 中关于插件系统目标冲突的核心方案，一旦合并，ZeroClaw 的插件构建目标将全面转向 `wasm-wasip2`。
*   **可观测性与成本控制**：[PR #8380 引入离线定价目录和成本/组织维度的 RPC 视图]，补齐了气隙环境或私有部署下的 LLM 调用成本统计短板。

### 4. 社区热点
今日讨论度最高的话题集中在**配置治理、插件演进和多租户安全**：
*   **[Issue #6808] RFC: Work Lanes, Board Automation, and Label Cleanup** (评论: 12)
    作为项目治理的基石，该提案旨在通过自动化标签和看板系统理顺开发流，减少维护者的手动管理负担，目前处于 Accepted 并正在推进中。
*   **[Issue #8226] [Feature]: support per-agent custom environment variables configuration** (评论: 4)
    开发者社区强烈呼吁引入 `runtime_context` 和受掩码保护的 `runtime_secrets` 机制，以解决多 MCP 实例和内置工具并行运行时的身份与参数冲突问题（多租户痛点）。
*   **[Issue #6943] [RFC]: Deconflict Plugin System Goals in FND-001** (评论: 4)
    社区深度探讨了当前 WASM 插件架构中互相矛盾的设计承诺，直接促成了上述 #8368 的底层重构。

### 5. Bug 与稳定性
今日报告的 Bug 多数导致了“降级行为”（S2 级别），核心痛点分布在通道兼容性、配置静默失效与跨平台支持上：
*   **[P1][S2] Windows 平台测试大面积失败** ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462))
    在 Windows 11 (代码页 936) 环境下产生 74 个测试失败，主要原因是 Unix-only 的测试命令和路径语义。由于 CI 仅在 Linux 运行，此问题长期被掩盖。
*   **[P1][S2] SQLite 混合搜索静默降级为纯关键字** ([Issue #8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386))
    当用户选择默认的 `sqlite` 内存后端但未配置嵌入模型时，系统不会报错，而是静默降级为仅支持关键字搜索，严重影响了 AI 的记忆召回率。
*   **[P2][S2] MCP 安全作用域静默失效 (no-op)** ([Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733))
    配置文件中的 `mcp_bundles` 能够正常解析，但在运行时并未被执行，导致针对特定 Agent 的 MCP 隔离机制形同虚设。**目前尚无直接修复的 PR**。
*   **[P2][S2] Cron/Heartbeat 发送字面量 `NO_REPLY`** ([Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128))
    定时任务触发时，系统将代表“无需回复”的内部标识符 `NO_REPLY` 当作普通文本直接发送到了 Telegram 等通道，造成了严重的消息噪音。

### 6. 功能请求与路线图信号
根据活跃的 Issues 和对应的 PR，可以明确下一版本的重点演进方向：
*   **全渠道富媒体与流式体验**：[Issue #8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) 请求支持 Telegram 10.1 富文本消息；[Issue #8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442) 与 [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) 提出了 Matrix 的单条消息流式草稿模式；[PR #8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427) 增加了 WhatsApp 的位置共享支持。
*   **工作区安全与文件保护**：[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) 提出建立 `.ignore` 文件机制，以细粒度地保护工作区中的敏感文件（如凭证、项目设置）免受 AI Agent 读取，这是一个极强的安全信号。
*   **新通道接入**：[PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) 正在引入原生 **Inkbox** 通道（支持 Email + SMS + Voice + iMessage），ZeroClaw 的通信版图进一步扩张。

### 7. 用户反馈摘要
通过提炼 Issue 评论，真实用户痛点主要集中在以下三个方面：
1.  **“静默失败”极其折磨人**：如混合搜索降级 (#8386) 和 MCP 作用域失效 (#7733)。用户不怕配置复杂，最怕的是配置项存在、系统不报错，但实际功能并没有生效。
2.  **多通道兼容性细节不到位**：如 Telegram 不兼容 Prompt 缓存 (#6360)，导致每次对话都在全量重处理，极大地浪费了 Token 和算力；以及 Windows 下开箱即用的体验较差 (#7462)。
3.  **运行环境的解耦需求**：用户对于存储受限设备上的临时文件清理呼声较高 (#7996，目前被标记为 wontfix)，同时对于跨 Agent 共享配置但隔离环境变量的需求非常强烈 (#8226)。

### 8. 待处理积压
*   ⚠️ **[审计与追溯] [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)**：此前发生了一次涉及 153 个 commit 的批量回滚操作。虽然当时是必要的，但导致大量已审查的 Bug 修复和功能丢失。该 Issue 自 4 月提出以来仍在缓慢追踪恢复中，需要核心团队投入更多精力梳理潜在的代码回归隐患。
*   ⚠️ **[打包发布] [Issue #8432](https://github.com/zeroclaw-labs/zeroclaw/issues/8432)**：CI 流水线中，Homebrew 和 Scoop 的发布 Token 在缺乏 Push 权限时会在流程晚期才报错失败，这种“失败过晚”浪费了大量 CI 资源，亟待加入早期的权限前置检查。

</details>