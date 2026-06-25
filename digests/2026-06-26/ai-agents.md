# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-25 22:26 UTC

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

# 🦞 OpenClaw 项目动态日报 (2026-06-26)

**数据来源:** github.com/openclaw/openclaw | **统计周期:** 过去 24 小时

---

## 1. 📊 今日速览
* **开发与社区热度双双爆棚：** 过去 24 小时内，项目经历了极高的活跃度，Issues 更新达 **500 条**（其中 477 条为新开或活跃讨论），PR 更新也达到 **500 条**。
* **版本迭代快速推进：** 官方发布了全新的 `v2026.6.11-beta.1` 测试版本，重点在消息渠道控制（Slack/Mattermost）和模型调度上进行了增强。
* **基础设施建设进入深水区：** 尽管贡献者提交了大量底层修复（合并/关闭 PR 达 106 个），但社区反馈暴露出系统在**内存管理（OOM）、会话状态失控（崩溃循环）以及 Prompt 安全性**方面仍存在需要长期攻克的痛点。

---

## 2. 🚀 版本发布
**最新 Beta 版本:** `v2026.6.11-beta.1`
* **核心亮点:** 
  * **更强大的渠道控制:** 引入了 Slack 中继模式、Mattermost 原生 `/oc_queue` 指令，以及针对私信的模型覆盖功能，大幅降低了多渠道自动化运营的调优难度。([相关 PR: #94707, #95546, #95120](https://github.com/openclaw/openclaw/releases))
* **注意:** 本版本为 Beta 预览版，建议生产环境谨慎升级，等待稳定版发布。

---

## 3. 🏗️ 项目进展
今日共有 **106 个 PR 被合并或关闭**，核心进展集中在**异步状态恢复、底层沙箱隔离与多渠道容灾**：
* **会话与状态容灾:** PR [#89045](https://github.com/openclaw/openclaw/pull/89045) 修复了群聊会话卡在 `failed` 状态后静默丢弃所有消息的严重问题；PR [#88968](https://github.com/openclaw/openclaw/pull/88968) 防止了 Memory flush 失败导致的用户回复中断。
* **多渠道消息保障:** PR [#89038](https://github.com/openclaw/openclaw/pull/89038) 修复了 QQ 频道 WebSocket 断开重连时的消息堆积丢失问题；PR [#83933](https://github.com/openclaw/openclaw/pull/83933) 修复了手动触发 Cron 任务导致任务被误删的 Bug。
* **安全边界防护:** 关闭了多个安全相关 PR，包括限制非受控服务端响应体大小以防 OOM（如 Mattermost 与各大图像生成引擎）。

---

## 4. 🔥 社区热点
今日讨论度最高的 Issues 反映了开发者对**底层架构缺陷**和**生产环境稳定性**的强烈诉求：
* **中心化文件编码处理 (18 评论):** [Issue #48788](https://github.com/openclaw/openclaw/issues/48788) 呼吁建立统一的编码工具集，彻底解决多语言环境下（如飞书中文、日文 Shift-JIS）文件名乱码的“补丁式”修复现状。
* **生态建设与安全沙箱 (15 评论):** [Issue #50090](https://github.com/openclaw/openclaw/issues/50090) 深入讨论了 ClawHub 技能生态的发展瓶颈；同时 [Issue #45740](https://github.com/openclaw/openclaw/issues/45740) 报告了极其危险的 Prompt 注入漏洞（GitHub issue 正文直接插入子代理）。
* **硬编码事故吐槽 (12 评论):** [Issue #51429](https://github.com/openclaw/openclaw/issues/51429) 有用户惊愕地发现代码中居然被硬编码了开发者的个人本地路径（`/Users/wangtao`）并发布了release，引发社区对 CI/CD 审查流程的担忧。

---

## 5. 🐞 Bug 与稳定性 (按严重程度排列)
今日报告了大量影响生产稳定性的高危 Bug，甚至出现多个 OOM 和死循环报告：
* **🔴 [P1] 网关内存泄漏与 OOM 崩溃:** [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) 与 [Issue #54155](https://github.com/openclaw/openclaw/issues/54155) 报告 `sessions.json` 无限膨胀，网关内存在 4 天内从 389MB 飙升至 14.7GB 最终被系统 OOM-Kill。
* **🔴 [P1] 安全与隐私泄漏:** [Issue #44905](https://github.com/openclaw/openclaw/issues/44905) 指出 Discord 频道会意外向用户暴露底层的 LLM 原始工具调用 JSON（如内部函数名、搜索参数），严重破坏用户体验和安全性。
* **🟠 [P1] Cron 任务幻觉篡改:** [Issue #49876](https://github.com/openclaw/openclaw/issues/49876) 报告当 Cron 后台任务工具调用失败时，LLM 会自行“脑补”看似合理的虚假结果直接发给用户，导致信任危机。
* **🟠 [P1] 频繁的上下文截断重置:** [Issue #63216](https://github.com/openclaw/openclaw/issues/63216) 报告即使预留了高额度 Token，同一会话依然不断发生硬重置，并在重试中反复注入巨量 Bootstrap 上下文。
* *状态说明: 目前大部分高危 Bug 仍处于 `needs-maintainer-review` 或 `needs-live-repro` 状态，尚未有确定的 fix PR 绑定。*

---

## 6. 🗺️ 功能请求与路线图信号
通过分析近期的 Feature Request 和已有 PR，下一阶段的演进方向可能聚焦于以下领域：
* **内存与上下文的持久化保证:** [Issue #58818](https://github.com/openclaw/openclaw/issues/58818) 强烈建议在上下文压缩或每日重置时，强制保留最后 N 条原始消息，确保 Agent“不失忆”。
* **安全出站策略网关:** [Issue #56349](https://github.com/openclaw/openclaw/issues/56349) 提出建立“不可绕过的出站策略执行点”，统一管控所有路径的消息发送，防范插件越权或 Prompt 注入引发的数据外泄。*（信号强劲：已有设计层面的讨论与 PR 意向）*
* **配置可观测性与隔离架构:** [Issue #50291](https://github.com/openclaw/openclaw/issues/50291) 要求 Plugin Hooks 加入全链路追踪；[Issue #48874](https://github.com/openclaw/openclaw/issues/48874) 提出“共享 LLM + 会话隔离”的 RFC 架构草案。

---

## 7. 🗣️ 用户反馈摘要
从海量 Issues 讨论中，提炼出当前用户的真实体验痛点：
* **痛点 1：Sub-agent（子代理）调度极其不可靠。** 多位用户（如 [Issue #47975](https://github.com/openclaw/openclaw/issues/47975), [#50165](https://github.com/openclaw/openclaw/issues/50165)）抱怨，子代理经常在后台未完成实际工作的情况下，UI 却显示“已完成”；或者主代理被挂起卡死，直到用户手动刷新页面。
* **痛点 2：网络与 API 抖动容错差。** [Issue #58450](https://github.com/openclaw/openclaw/issues/58450) 反映 Agent 经常在承诺“我去查一下并跟进”后，并没有触发任何后台动作；此外，LLM API 响应超时极易导致整个会话状态损坏。
* **痛点 3：多语言与跨平台适配脆弱。** 用户在 Docker 环境下使用飞书、WhatsApp 等渠道时，经常遇到环境变量失效（[Issue #53628](https://github.com/openclaw/openclaw/issues/53628)）、群聊激活模式失效（[Issue #50490](https://github.com/openclaw/openclaw/issues/50490)）等水土不服问题。

---

## 8. ⚠️ 待处理积压
维护团队目前面临较严重的 Issue 偿债压力，以下重点领域积压了大量未关闭/未彻底修复的反馈，需引起关注：
* **长期未解决的 Stale 标签积压：** 包括严重的网关 OOM ([#55334](https://github.com/openclaw/openclaw/issues/55334))、WhatsApp 断线丢消息 ([#50093](https://github.com/openclaw/openclaw/issues/50093)) 等问题被标记为 `stale`。
* **UI 交互与日志管理技术债：** 控制台工具卡片无法展开 ([Issue #49944](https://github.com/openclaw/openclaw/issues/49944))、Session 面板排序逻辑反人类 ([Issue #51028](https://github.com/openclaw/openclaw/issues/51028)) 积压已久。
* **大型 PR 待 Review 拥堵：** 多个涉及 XL 核心代码库改动、旨在解决消息丢失和 Hook 守卫的大型 PR（如 [PR #46303](https://github.com/openclaw/openclaw/pull/46303), [PR #56904](https://github.com/openclaw/openclaw/pull/56904)）已提交数月，目前仍处于 `waiting on author` 或 `needs proof` 状态，急需 Maintainer 介入推进。

---

## 横向生态对比

基于 2026 年 6 月 26 日各开源项目的社区动态数据，以下是为您生成的横向对比分析报告：

# 个人 AI 助手与智能体开源生态横向分析日报 (2026-06-26)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**从“单体功能构建”向“企业级生产部署与多端协同”演进的关键深水区**。项目间的竞争焦点已转移至**上下文记忆持久化、细粒度权限管控、跨平台多渠道容灾以及底层资源隔离**等硬核技术壁垒上。整个生态呈现出高度的工程活跃度，安全沙箱、多租户架构与编排调度成为核心发力点。

## 2. 各项目活跃度对比

| 项目名称 | Issue 变更 | PR 变更 (合并/关闭) | 版本发布 | 健康度与状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500+ | 500+ (106个核心合并) | v2026.6.11-beta.1 | 🟢 极高 (核心参照，债务与热度双高) |
| **Hermes Agent** | 50 | 50 (18) | 无 | 🟢 良好 (高频迭代，聚焦记忆与网关优化) |
| **IronClaw** | 47 | 50 (26) | 无 | 🟢 优秀 (Reborn架构重构稳步推进) |
| **ZeroClaw** | 48 | 50 (6) | 无 | 🟢 良好 (聚焦 v0.8.x 稳定与 WASM 架构) |
| **CoPaw** | 27 | 50 (22) | 无 | 🟢 良好 (Runtime 2.0 迁移善后，稳态推进) |
| **NanoBot** | 22 | 38 (14) | 无 | 🟢 良好 (安全加固，快速响应漏洞) |
| **NanoClaw** | - | 11 (11) | 无 (即将发布) | 🟡 成长中 (侧重资源隔离与企业认证) |
| **PicoClaw** | 3 | 19 (多) | 无 | 🟡 巩固期 (防御性编程与底座升级) |
| **LobsterAI** | 1 | 9 (9) | 无 | 🟡 内部整合 (代码冻结，筹备大版本) |
| **NullClaw / ZeptoClaw / 等**| - | - | - | ⚪ 停滞 (过去 24h 无活动) |

## 3. OpenClaw 在生态中的定位
作为核心参照物，OpenClaw 目前在生态中扮演着**“功能大而全的拓荒者”**角色：
* **优势：** 具有最丰富的多渠道接入能力（QQ、Slack、Mattermost、飞书等）和庞大活跃的社区，其迭代速度和功能广度（如 Cron 任务、ClawHub 技能生态）远超同类项目。
* **技术路线差异：** 相比 IronClaw 的多租户底层重构或 ZeroClaw 的 WASM 插件化，OpenClaw 目前的技术重心仍放在**异构系统的API胶水层粘合与状态容灾**上（如解决多渠道断线重连、OOM）。
* **对比隐患：** 其社区规模带来了严重的维护负担。硬编码事故、底层 OOM、以及 Prompt 注入漏洞反映出其在极速扩张中，CI/CD 审查与基础工程质量落后于 Hermes、IronClaw 等后起之秀。

## 4. 共同关注的技术方向
通过多项目横向比对，以下四大技术痛点引发了跨社区的强烈共鸣：
1. **上下文压缩与记忆可靠性：** 全局压缩导致严重信息丢失。
   * *涉及项目：* **Hermes Agent** (压缩致消息丢失/脑裂)、**CoPaw** (SQLite持久化召回)、**NanoBot** (记忆幻觉防范)、**OpenClaw** (记忆断层)。
2. **沙箱逃逸与权限边界隔离：** 子代理越权与系统级漏洞频发。
   * *涉及项目：* **NanoBot** (MCP与Exec命令注入绕过)、**ZeroClaw** (子代理调用父级屏蔽工具)、**OpenClaw** (Issue正文触发子代理注入)。
3. **多渠道路由与富文本适配：** 企业级 IM 集成中的网络与排版痛点。
   * *涉及项目：* **Hermes Agent** (Slack 表格渲染失效)、**OpenClaw** (WebSocket 堆积丢包)、**LobsterAI** (预装 IM 矩阵)。
4. **资源调度与防内存泄漏：** 失控的自动化任务耗尽系统资源。
   * *涉及项目：* **OpenClaw** (sessions.json 膨胀致 OOM)、**PicoClaw** (Evolution 模式空耗 Token)、**NanoClaw** (引入容器级 CPU/内存隔离)。

## 5. 差异化定位分析
* **OpenClaw / Hermes Agent** —— **“全能型 C 端/极客助手”**。主打多平台渠道接入与高度可玩性，目标受众为极客开发者与重度个人用户，优先追求功能闭环而非底层极致安全。
* **IronClaw / NanoClaw** —— **“企业级生产平台”**。定位于多租户环境与高负载生产场景。通过引入 CAS 并发控制、OAuth 高可用切换、资源配额限制，解决企业 IT 部署的合规与稳定性诉求。
* **ZeroClaw** —— **“WASM-first 前瞻架构”**。致力于消除 Node.js 依赖，推进硬件级隔离与供应链签名（SLSA），目标是对安全极致要求的政企与 IoT 场景。
* **NanoBot / CoPaw** —— **“敏捷的模型生态聚合器”**。高度关注各类大模型（如国产 Z.AI、豆包、MiniMax 等）的协议兼容与本地端（PWA/TUI）体验，适合作为本地化推理前端的轻度入口。

## 6. 社区热度与成熟度
* **高活跃 + 痛点爆发期：** **OpenClaw** 社区呈现出“野蛮生长”的特征，Issue 积压严重，Stale 标签泛滥，正处于架构瓶颈期。
* **高活跃 + 深度重构期：** **IronClaw** 与 **ZeroClaw** 团队展现出极强的工程执行力，测试覆盖与底层并发优化频繁，正稳步迈向成熟的企业级架构。
* **稳态迭代 + 质量收敛期：** **NanoBot**、**PicoClaw** 与 **LobsterAI** 活跃度集中在防御性编程、特定供应商适配及 BUG 清理，代码审查严谨，为下一个 Major 版本蓄力。

## 7. 值得关注的趋势信号
* **信号一：“带外审批”与“人类监督”成为 Agent 自动化的前置标准。** 无论是 NanoClaw 的多管理员审批流，还是 IronClaw 对 AI 自动蒸馏技能强制加入 `pending_review`，都表明行业放弃了“完全自动化”幻想，转向**Human-in-the-loop (HITL)** 的安全演进。
* **信号二：细粒度（工具级）上下文裁剪崛起。** 针对大模型长上下文导致的延迟与超时（如 IronClaw 120s 超时），粗粒度的全局压缩正被淘汰。基于工具输出局部压缩（如 Hermes 集成 headroom-ai）与按需 Prompt 披露将成为标配。
* **信号三：远程与分布式 Agent 架构萌芽。** PicoClaw 引入 WebSocket 远程连接（`--remote`）和 ZeroClaw 探索 WASI 硬件接口，预示着 Agent 正突破单机本地限制，向云端协同与边缘设备（IoT/嵌入式）分发演进。开发者应在架构设计初期预留 RPC 或 WS 节点扩展能力。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期**: 2026-06-26  
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. 今日速览
NanoBot 在过去 24 小时内保持了**极高的社区活跃度与迭代速度**，共处理了 22 条 Issue 更新与 38 条 PR 更新。今日的项目动态呈现出明显的“安全加固”特征，集中爆发了多个针对内置工具（如 `exec`、`mcp_servers`）的越权与沙箱绕过漏洞报告，维护团队展现了极快的响应速度，多数安全漏洞已在同一天内提供修复 PR。此外，围绕 WebUI 移动端体验、子代理行为控制以及内存管理的生态增强提案正在积极涌入，标志着项目正从核心功能构建向精细化、安全化和多端体验方向演进。

---

### 2. 版本发布
**本日无新版本发布 (0 Release)。**
但考虑到今日集中修复了多个高危安全漏洞（见第 5 节），建议维护团队在相关 PR 合并后尽快推出 Patch 版本。

---

### 3. 项目进展
今日共有 14 个 PR 被合并或关闭，项目在安全、稳定性和底座能力上迈出了坚实的一步：
*   **安全策略同步修复**：针对 MCP 工具暴露漏洞，[PR #4524](https://github.com/HKUDS/nanobot/pull/4524) 修复了 `enabledTools` 过滤器未能正确作用于资源和提示词的问题，成功闭环了相关安全隐患。
*   **历史记忆污染修复**：合并了修复 `dream` 模块在禁用时依然将全量聊天记录注入系统提示词的 Bug，大幅降低了 token 消耗与提示词污染风险（关联 [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)）。
*   **跨端与格式兼容性**：推进了小米 MiMo ASR 语音转录格式（WebM 转 WAV）的兼容性修复（[PR #4493](https://github.com/HKUDS/nanobot/pull/4493)），以及钉钉机器人的富文本支持与超时修复。
*   **提供商定制化**：允许自定义提供商配置思考模式，增强了对火山引擎/豆包等非标准思考参数模型的支持（[Issue #4429](https://github.com/HKUDS/nanobot/issues/4429)）。

---

### 4. 社区热点
今日讨论最密集的区域集中在**安全审查与防御机制**，知名贡献者 `YLChen-007` 集中提交了多个高质量的安全隐患报告：
1.  **MCP 能力暴露审查**：[Issue #4519](https://github.com/HKUDS/nanobot/issues/4519) 和 [Issue #4434](https://github.com/HKUDS/nanobot/issues/4434) 指出，即使配置了拒绝所有策略 `enabledTools: []`，资源包装器依然会被注册并暴露给模型。这反映出社区对企业级部署中**权限隔离与最小化授权**的强烈诉求。
2.  **WebUI 移动端体验呼声高**：[PR #4494](https://github.com/HKUDS/nanobot/pull/4494) 提出 PWA 支持与移动端侧边栏滑动手势，直击用户在手机端使用 NanoBot 的痛点，获得了广泛点赞和讨论。

---

### 5. Bug 与稳定性
今日报告了多个严重级别的 Bug，尤其是命令执行绕过类漏洞，需引起高度关注（均已提供 Fix PR）：

**🔴 严重 - 安全与沙箱绕过类**
*   **Exec 命令注入/绕过 (集中爆发)**：
    *   [Issue #4514](https://github.com/HKUDS/nanobot/issues/4514) / [Issue #4520](https://github.com/HKUDS/nanobot/issues/4520)：通过链式命令绕过 `allowPatterns` 白名单。
    *   [Issue #4515](https://github.com/HKUDS/nanobot/issues/4515)：通过注释尾部绕过限制。
    *   [Issue #4518](https://github.com/HKUDS/nanobot/issues/4518)：默认登录 shell 执行重新引入了敏感信息泄露风险。
    *   *修复进度*：已通过 [PR #4526](https://github.com/HKUDS/nanobot/pull/4526) 将正则匹配从 `re.search()` 更改为 `re.fullmatch()` 并移除了 Shell 注释剥离逻辑进行修复。

**🟠 高 - 进程与状态管理类**
*   **Windows 后台服务重启异常**：[Issue #4513](https://github.com/HKUDS/nanobot/issues/4513) 指出，使用 `nssm` 挂载为系统服务并通过 `/restart` 重启时，会导致端口占用无限循环，或进程信息不同步。

**🟡 中 - 逻辑缺陷类**
*   **网络错误与死循环**：[PR #4522](https://github.com/HKUDS/nanobot/pull/4522) 修复了当普通工具（如 `read_file`）报错时，Agent 容易陷入死循环的问题（此前仅对网络请求有防重保护）。
*   **MCP 僵尸进程泄漏**：[PR #4506](https://github.com/HKUDS/nanobot/pull/4506) 引入了闲置超时自动查杀机制，防止 MCP 服务器空耗内存。

---

### 6. 功能请求与路线图信号
从开源的 PR 动态中，可以清晰洞察到 NanoBot 下一步的演进路线图：
1.  **Agent 交互主动化**：[Issue #4508](https://github.com/HKUDS/nanobot/issues/4508) 请求增加 `ask_clarification` 工具，让 Agent 在遇到模棱两可的需求或执行危险操作前主动询问，这将大幅提升 Agent 的自主决策安全性。
2.  **内存与记忆精细化管理**：
    *   [PR #4402](https://github.com/HKUDS/nanobot/pull/4402)：引入 opt-in（主动参与）的即时记忆整合机制，避免上下文超出限制。
    *   [PR #4424](https://github.com/HKUDS/nanobot/pull/4424)：在归档记忆时引入来源依据，区分用户确认的事实与 Agent 推断的信息，减少记忆幻觉。
3.  **子代理调度强化**：[PR #4414](https://github.com/HKUDS/nanobot/pull/4414) 和 [PR #4415](https://github.com/HKUDS/nanobot/pull/4415) 允许子代理返回聚合结果并支持动态 Spawn 模型覆盖，表明项目正在构建更强大、灵活的多 Agent 编排能力。

---

### 7. 用户反馈摘要
从今日的 Issue 互动中，总结用户的真实痛点如下：
*   **服务部署痛点**：Windows 用户在将其后台化、服务化（如 nssm、gateway --background）时频频遇到进程管理与端口冲突问题（[Issue #4511](https://github.com/HKUDS/nanobot/issues/4511)），说明在非 Linux 服务器环境下的开箱即用体验仍有打磨空间。
*   **供应商兼容性痛点**：国内的 AI 开发者大量使用定制化参数的模型（如火山的 Doubao），对自定义 provider 暴露底层参数（如 thinking style）的诉求非常强烈（[Issue #4429](https://github.com/HKUDS/nanobot/issues/4429)）。
*   **工具容错痛点**：开发者发现部分模型生成的 tool call 存在瑕疵（如 `name=None`），目前 NanoBot 的处理过于粗暴，容易导致会话历史被污染（[PR #4510](https://github.com/HKUDS/nanobot/pull/4510)），社区期望 Agent 具备更强的自我修复和容错能力。

---

### 8. 待处理积压
*提醒维护团队关注以下高价值但可能尚未完全 Close 的议题：*
*   **OpenAI 兼容 API 下工具去重**：[PR #4530](https://github.com/HKUDS/nanobot/pull/4530) 修复了部分 OpenAI 兼容提供商重用 `tool_call_id` 导致的执行重复问题，待审阅合并。
*   **历史心跳触发器**：[PR #4437](https://github.com/HKUDS/nanobot/pull/4437) 提出增加心跳触发命令，这是一个存在已久的需求（关联 #3437），对实现定时自动化任务至关重要，积压数日，需推进。
*   **流断连崩溃**：[PR #4441](https://github.com/HKUDS/nanobot/pull/4441) 修复了重连失败时导致网关崩溃 `RuntimeError` 的严重问题，虽然提出数日但今日仍在活跃，建议优先合并。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期**: 2026-06-26 | **分析数据源**: GitHub Past 24h Activity

## 1. 今日速览
- **整体活跃度极高**：过去 24 小时内共有 50 条 Issue 更新（33 活跃，17 关闭）和 50 条 PR 更新（32 活跃，18 合并/关闭），项目处于高频迭代状态。
- **核心焦点**：社区今日高度聚焦于**上下文压缩引发的“记忆黑洞”与状态丢失**问题，以及针对 Z.AI (GLM-5.2) 供应商的适配性与限流问题。
- **工程效能**：开发者今日合入了多项 Docker/CI 加速与异步非阻塞优化，显示团队在提升项目自举能力与工程效能上发力显著。
- **生态扩展**：多平台网关（Slack、Telegram、Discord、飞书）的消息渲染与富文本兼容性正在经历一轮集中修复。

---

## 2. 版本发布
*过去 24 小时内项目无新版本 发布。*

---

## 3. 项目进展
今日共有 18 个 PR 被合并或关闭，项目在以下方面取得了实质性向前迈进：

- **TUI/核心代理稳定性修复**：[PR #51741](https://github.com/NousResearch/hermes-agent/pull/51741) 修复了在 TUI 中使用 LM Studio 时 `/compress` 命令崩溃（`UnboundLocalError`）的问题，恢复了本地模型用户的基础压缩功能。
- **UI 体验清理**：[PR #52717](https://github.com/NousResearch/hermes-agent/pull/52717) 全面移除了前端各界面（包含 Dashboard 和计费 UI）中不准确的缓存命中率和开销估算展示，避免了由于不同供应商计费逻辑差异导致的误导。
- **网关与后台调度**：[PR #48048](https://github.com/NousResearch/hermes-agent/pull/48048) 修复了重启已停止的 gateway 时抛出的刺眼警告；[PR #52720](https://github.com/NousResearch/hermes-agent/pull/52720) 将定时任务的执行改为非阻塞模式，防止 cron 任务执行期间挂起主 Agent 会话。
- **工程效能提升**：[PR #51024](https://github.com/NousResearch/hermes-agent/pull/51024) 大幅优化了 Docker 构建流程并精简了 CI 校验，改善了贡献者的测试体验。

---

## 4. 社区热点
今日讨论最热烈的问题反映了用户对**上下文记忆断层**和**供应商高负载限流**的强烈痛点：

- **[Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) (11 评论)**: 用户深度讨论了凭证代理守护进程（零知识 HTTP/HTTPS 代理）的需求。随着隔离机制的完善，社区强烈呼吁更底层的凭据防泄露机制，表明企业级用户对安全边界的极度关注。
- **[Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) (8 评论)**: 建议集成 `headroom-ai` 用于工具输出压缩。当前的全局上下文压缩成本高且有信息损毁风险，用户迫切需要**细粒度的工具级输出压缩**。
- **[Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) (8 评论)**: Hermes 更新后 Dashboard 聊天功能失效（抛出 React 错误 #301），引发了多位受影响用户的共鸣。
- **[Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) (8 评论)**: Slack 平台适配器因仍使用旧版 `mrkdwn` 导致无法渲染 Markdown 表格，影响了重度依赖 Slack 协作的团队体验。
- **[Issue #50663](https://github.com/NousResearch/hermes-agent/issues/50663) (8 评论)**: 报告 Z.AI 在“高峰期”对 Hermes Agent 进行特殊限流（尽管 Claude/OpenAI 正常），揭示了特定供应商在网络高峰期的路由惩罚问题。

---

## 5. Bug 与稳定性
今日报告的 Bug 多数集中在**长对话压缩的副作用**以及**特定环境兼容性**上，其中包含数个 P1（高优先级）问题：

**🔴 P1 严重**
- **[Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912)**: `Curator` 在归档操作时具有“故障开放”行为，可能在未验证合并的情况下，将**当前正在使用的活跃 Skills 误归档**，导致关键业务流程中断。
- **[Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434)**: `session_search` 存在跨会话检索失效问题，表现为 JSON 快照与 SQLite 的“脑裂”，以及 Cron 任务生成的会话淹没了正常的用户历史记录。
- **[Issue #29522](https://github.com/NousResearch/hermes-agent/issues/29522)**: 自动上下文压缩在刚生成助手回复时触发，会导致该回复在 UI 中**凭空消失**。
- **[Issue #28093](https://github.com/NousResearch/hermes-agent/issues/28093)**: 在 Agent 处理过程中若触发压缩，期间到达的用户消息会被**永久丢弃**（无回应、无记录）。

**🟠 P2 高优先级**
- **[Issue #50663](https://github.com/NousResearch/hermes-agent/issues/50663) & [Issue #47685](https://github.com/NousResearch/hermes-agent/issues/47685)**: 针对 Z.AI (GLM-5.2) 的连接问题。后者发现一个硬核 Bug：当系统提示词包含确切的 `Hermes Agent` 字符串时，Z.AI 会抛出 HTTP 429 错误（已被关闭）。
- **[Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260)**: Windows 10 环境下安装程序在 "desktop" 阶段（`npm install`）必现失败。
- **[Issue #52649](https://github.com/NousResearch/hermes-agent/issues/52649)**: Windows (zh-TW / cp950 编码) 下网关因 `UnicodeDecodeError` 崩溃，导致约每 580 秒一次的僵尸进程死循环。
- **[Issue #48248](https://github.com/NousResearch/hermes-agent/issues/48248) (已关闭)**: 会话中途切换模型（`/model`）导致数据库与 Dashboard 卡在旧模型信息上。

---

## 6. 功能请求与路线图信号
结合用户提议与正在进行的 PR，以下方向大概率将纳入下一阶段路线图：

- **头等公民项目管理体验**: [PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037) 正在引入桌面端“项目”侧边栏、编码上下文轨道和 Codex 风格的审查面板。这将把 Hermes 从单纯的助手推向完整的 AI Coding IDE 竞争序列。
- **细粒度内容压缩**: 针对当前全局压缩的弊端（[Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)），社区呼吁的工具级/局部内容压缩将成为内存优化的重点。
- **多平台富文本对齐**: 
    - Telegram 10.1 富消息支持请求（[Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428)）。
    - Slack 原生 Block Kit 表格支持（[Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552)）。
- **沙箱出站流量防火墙**: [PR #30179](https://github.com/NousResearch/hermes-agent/pull/30179) 正在构建 Iron-proxy，通过在 TLS 边界替换 Token 来保障沙箱环境下的 API Key 安全。

---

## 7. 用户反馈摘要
- **痛点 1：“上下文压缩就是个记忆黑洞”**：多个 Issue（#13840, #29522, #28093）指出，由于压缩和会话切割逻辑的缺陷，导致丢失了未发送的 AI 回复或用户刚输入的文字。用户反馈表现出对“遗忘”的极度挫败感。
- **痛点 2：国际化与特定系统兼容性薄弱**：Windows 环境的编码问题（#52649）和安装失败（#46260）依然困扰着大量普通用户。同时，UI 本地化（如俄语 #52137）需求凸显了非英语市场的增长。
- **痛点 3：开源大模型接入体验割裂**：接入国产/新锐模型（如 Z.ai, 智谱）时频遭限流或提示词黑名单拦截（#50663, #47685），用户希望 Hermes 能在网关层提供更好的请求伪装或重试容错机制。
- **满意点**：对 TUI 的重度使用需求依然强劲，开发者对代码高亮细节（如星号被吃 #20084）的严谨反馈，表明有一批高频使用的资深开发者对工具黏性较高。

---

## 8. 待处理积压
以下具有较高优先级或重要影响的 Issue/PR 已停滞较长时间，需维护者重点排期介入：

1. **[Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) (4月创建)**: 凭据零知识代理请求。随着安全需求升级，长时间未有实质性代码推进。
2. **[Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434) (5月创建)**: `session_search` 的 SQLite/JSON 脑裂与检索失效。这是 Agent 记忆系统的基础设施级缺陷，目前仍处于 P1 Open 状态。
3. **[Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) (4月创建)**: Slack 旧版 Markdown 导致表格无法渲染，影响了平台核心交互体验，积压近两个月。
4. **[PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) (4月创建)**: 引入 Google Vertex AI 作为 Gemini 一等公民供应商的巨型 PR，积压已久，阻碍了企业级 GCP 用户的接入。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# 📊 PicoClaw 项目动态日报
**日期**: 2026-06-26 | **追踪仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

### 1. 📈 今日速览
PicoClaw 在过去 24 小时内保持了**高度活跃**的开发与维护状态，共计处理了 3 条 Issue 更新和多达 19 条 PR 更新。从提交频率来看，核心开发团队（如 `chengzhichao-xydt`、`Alix-007`）及社区贡献者正在集中进行**代码清理、健壮性提升（防御性编程）以及底座依赖的全面升级**。今日无新版本发布，但大量合并的修复 PR 预示着项目正在为下一个里程碑版本（可能是 v0.3.0）进行稳定性收敛。

### 2. 🚀 版本发布
**本日无新版本发布 (0 个)**。
*(注：当前社区已普遍使用至 v0.2.9 版本，预计近期大量底座 PR 合并后将迎来新版本迭代。)*

---

### 3. 🔧 项目进展
今日项目整体向前迈进了坚实的一步，重点修复了引发高频 Token 消耗和构建失败的严重问题，并清理了大量代码隐患。
*   **核心痛点修复**：[PR #3169](https://github.com/sipeed/picoclaw/pull/3169) 合并，跳过心跳轮询时的 Evolution 冷路径调度，成功阻止了草稿模式下因周期性检查导致的额外 Token 消耗。
*   **构建与网络容错**：[PR #3166](https://github.com/sipeed/picoclaw/pull/3166) 修复了 `openai_compat` 包内 `undefined: log` 导致的构建失败；[PR #3168](https://github.com/sipeed/picoclaw/pull/3168) 完善了模型拉取时非 200 响应的流读取错误处理。
*   **安全与健壮性清理**：[PR #3045](https://github.com/sipeed/picoclaw/pull/3045) 修复了 Matrix 用户 ID（带冒号格式）被身份验证系统误拦截的 Bug；[PR #3092](https://github.com/sipeed/picoclaw/pull/3092) 增强了技能安装时的类型断言检查，静默失败问题得以解决。
*   **自动化依赖升级**：Dependabot 今日异常活跃，发起了 [PR #3177](https://github.com/sipeed/picoclaw/pull/3177)（Copilot SDK 升级至 1.0.4）、[PR #3173](https://github.com/sipeed/picoclaw/pull/3173)（SQLite 升级）等 6 项依赖更新，保障了底层库的时效性。

---

### 4. 🔥 社区热点
*   **被“烧钱”困扰的自动化 Agent 用户**：[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) 引起了较多关注。用户报告开启 Evolution（草稿模式）后，系统每分钟都在持续消耗 Token。这反映出 PicoClaw 在执行自主定时任务/自我进化时，**缺乏对闲时心跳计算的计费控制**，已成为高优先级修复目标。
*   **加密库的安全焦虑**：[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) 获得了 2 个点赞。用户 `pbsds` 强烈建议弃用已停止维护且不安全的 `libolm`，转用官方替代库 `vodozemac`。这体现了 PicoClaw 高级用户群对**端到端加密通信安全性的极高诉求**。

---

### 5. 🐛 Bug 与稳定性 (按严重程度排序)
*   🔴 **高严重度：Evolution 持续消耗 Token** ([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)) 
    *   **状态**: 已关闭 / 已修复 (由今日合并的 [PR #3169](https://github.com/sipeed/picoclaw/pull/3169) 解决)。避免了用户在不知情情况下被消耗大量 API 额度。
*   🟠 **中严重度：Telegram 频道定时任务报错** ([Issue #1757](https://github.com/sipeed/picoclaw/issues/1757))
    *   **状态**: 已关闭。用户在树莓派 Zero 上使用 v0.2.3 尝试每小时执行任务时遇到 Channel Error。
*   🟡 **低严重度：Web 工具媒体提取误判** ([PR #3115](https://github.com/sipeed/picoclaw/pull/3115))
    *   **状态**: 已提交修复 PR。当使用 `read_file` 或 `exec` 等工具时，输出内容若包含 Base64 `data:image` 字符串，会被误判为媒体附件导致会话历史损坏。
*   🟡 **低严重度：异步子代理消息重复推送** ([PR #3142](https://github.com/sipeed/picoclaw/pull/3142))
    *   **状态**: 已提交修复 PR。Spawn 子代理完成异步任务时，会同时向 LLM 和 User 推送相同内容，此 PR 清除了多余的字段。

---

### 6. ✨ 功能请求与路线图信号
结合 Issue 与 PR 动态，PicoClaw 正在向**多平台接入、远程控制与高度安全**的方向演进：
*   **Matrix 通信加密重构**：虽然 [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) 尚未完全关闭，但这符合项目替换不安全底层的长期路线图。
*   **DeltaChat 网关接入**：开发者 `trufae` 提交了 [PR #3063](https://github.com/sipeed/picoclaw/pull/3063)，表明 PicoClaw 正在不断扩充其支持的 Channel 生态。
*   **远程 Agent 模式**：开发者 `jp39` 提交了 [PR #3118](https://github.com/sipeed/picoclaw/pull/3118)，通过 `--remote ws://...` 参数支持 WebSocket 远程连接。这释放了一个强烈的路线图信号：**PicoClaw 正在从纯本地/单机的 AI 助手，向可分布式部署的架构转型**，极有可能被纳入下一个主版本。

---

### 7. 💬 用户反馈摘要
*   **边缘设备运行压力大**：用户在 Raspbian 11 (Rpi Zero W) 等低算力设备上长时间运行 Agent 定时任务时容易遇到阻碍（参考 [Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)）。未来在资源调度上可能需要针对 ARM/低内存设备做专门优化。
*   **对自主任务执行的控诉**：用户非常喜欢 Evolution（自我进化）功能，但抱怨缺乏精细控制（参考 [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012)）。用户的痛点在于“我希望它自动做事，但我不希望它做无意义的轮询而花光我的钱”。
*   **满意度提升**：从今日大量被合并的防御性编程 PR（如 [PR #3171](https://github.com/sipeed/picoclaw/pull/3171), [PR #3172](https://github.com/sipeed/picoclaw/pull/3172)）可以看出，团队在认真对待代码审查中的边界条件，整体代码质量管控较为严格。

---

### 8. ⏳ 待处理积压
以下高价值 Issue/PR 更新停滞，已标记为 `stale`，需要维护者团队重点关注以防流失：
1.  **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) [高优先级, 帮助 wanted]**：关于替换 `libolm` 为 `vodozemac` 的安全升级需求。此项标记了 `help wanted`，建议团队招募社区力量或安排核心开发者跟进评估。
2.  **[PR #3142](https://github.com/sipeed/picoclaw/pull/3142)**：关于 Spawn 子进程产生重复消息的修复，已提交 8 天，需要 Maintainer 进行 Code Review 并推进合并。
3.  **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063)**：新增 DeltaChat 网关的功能 PR，已提交超过半个月，需评估是否与当前主干冲突或补充测试用例。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw 项目动态日报 (2026-06-26)**
> 数据来源：NanoClaw (github.com/qwibitai/nanoclaw)
> 分析周期：过去 24 小时

### 1. 今日速览
NanoClaw 在过去 24 小时内展现出**极高的代码贡献活跃度与社区开发推进力**。今日项目未发布新版本，但成功合并/关闭了高达 11 个 Pull Requests，同时仍有 5 个重要 PR 处于待合并状态。项目重心目前高度聚焦于**提升多租户容器环境下的资源与安全隔离性**，以及**优化多平台路由与企业级认证体系的健壮性**。整体而言，项目处于快速迭代的稳健成长期，核心维护者对外部社区贡献的审查与合并效率极高。

### 2. 版本发布
**本日无新版本发布。** (0 Release)
*注：鉴于今日有大量核心功能和关键修复（如认证、资源限制、路由）被合并，预计项目距离下一个 Minor/Major 版本更新已非常接近。*

### 3. 项目进展
今日共有 11 个 PR 被合并或关闭，项目在功能演进和系统稳定性上迈出了一大步：
*   **安全与隔离管控突破：** 合并了容器级别的资源限制功能 [PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856)，引入 `CONTAINER_CPU_LIMIT` 和 `CONTAINER_MEMORY_LIMIT`，防止单一 Agent 耗尽宿主机资源。同时，加强了 `send_file` 的安全边界，阻断指向工作区外的符号链接攻击 [PR #2817](https://github.com/nanocoai/nanoclaw/pull/2817)。
*   **企业级身份认证优化：** 合并了凭证自动切换功能 [PR #2855](https://github.com/nanocoai/nanoclaw/pull/2855)，实现 Claude OAuth 订阅为主、API Key 为备的自动容灾机制，解决了订阅凭证被静默踢出导致的失败问题。
*   **平台兼容与路由优化：** 修复了 macOS (Rancher Desktop) 下自签证书导致的 API 连接失败问题 [PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854)；合并了 Slack 消息按线程隔离会话的支持 [PR #2472](https://github.com/nanocoai/nanoclaw/pull/2472) 与底层路由重写 [PR #2471](https://github.com/nanocoai/nanoclaw/pull/2471)。
*   **生命周期管理：** 实现了失效系统服务的自动清理机制 [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)，解决了测试机中残留的无效 launchd/systemd 进程堆积痛点。

### 4. 社区热点
今日的社区热点集中在 **Agent 权限审批机制的升级**上：
*   **[Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)** 提出了对“多管理员审批”和“终端 CLI 审批”的强烈需求。这反映出重度用户在将 NanoClaw 推向生产环境时，单一管理员审批已成为严重的流程瓶颈。
*   这与昨日合并的 **[PR #2832](https://github.com/nanocoai/nanoclaw/pull/2832)**（允许在拒绝审批时附带具体理由反馈给 Agent）形成呼应，表明社区正极力推动构建更加完善、具备上下文感知能力的 Agent 治理与人机交互工作流。

### 5. Bug 与稳定性
今日处理并修复了多个关键 Bug，同时也有新的严重 Bug 被报告（暂无修复 PR）：
*   **[严重 - 已修复] 历史版本迁移崩溃 [PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859)：** 修复了从早期 v1 版本迁移到 v2 时，因缺少 `is_main` 列导致数据库种子程序崩溃的阻塞性问题。（*注：目前该 PR 状态为 OPEN 待合并，需重点关注*）
*   **[高危 - 已修复] 宿主机资源耗尽 [PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856)：** 修复了多 Agent 运行于同一主机时，可能因单点资源占用过高导致的系统性不稳定。
*   **[中危 - 已修复] 僵尸进程累积 [PR #2830](https://github.com/nanocoai/nanoclaw/pull/2830)：** 修复了未正常卸载导致的系统级服务无限重试报错问题。
*   **[中危 - 已修复] CLI 多字节解析截断 [PR #2813](https://github.com/nanocoai/nanoclaw/pull/2813)：** 修复了 Socket 响应限制导致多字节 UTF-8 字符（如中文）被截断引发乱码的底层 Bug。

### 6. 功能请求与路线图信号
从 Issue 和新提交的 PR 中，可以清晰捕捉到项目接下来的演进方向：
*   **审批工作流去中心化：** 基于 [Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)，未来版本极可能引入多角色审批路由和基于本地的无网审批能力。
*   **Matrix 协议原生端到端加密 (E2EE)：** [PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844) 正在重构 Matrix 适配器，抛弃旧的 Bridge 方案，直接使用 Rust 绑定实现原生 E2EE。这释放出 NanoClaw 重视极高隐私安全通讯渠道的信号。
*   **元技能 提取：** [PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) 提出的 `/learn` 技能，表明项目正探索让 Agent 具备“自我提炼与技能泛化”的能力（从任意 URL/目录生成可复用 Skill）。

### 7. 用户反馈摘要
通过对近期 Issue 和 PR 描述的提炼，真实用户的核心痛点与反馈如下：
*   **痛点 1：多平台运维摩擦大。** macOS 用户在使用 Rancher Desktop 时遭遇严重的证书信任问题（[PR #2854](https://github.com/nanocoai/nanoclaw/pull/2854)）；CLI 输出中文等宽字符容易乱码（[PR #2813](https://github.com/nanocoai/nanoclaw/pull/2813)）。
*   **痛点 2：凭证维护心智负担重。** 用户疲于手动处理 OAuth 过期和切换 API Key，极度渴望无感的高可用认证切换机制（[PR #2855](https://github.com/nanocoai/nanoclaw/pull/2855)）。
*   **诉求：更细粒度的部署控制。** 随着用户将多个 Agent 部署在同一台机器上，他们对 CPU/内存隔离（[PR #2856](https://github.com/nanocoai/nanoclaw/pull/2856)）的呼声越来越高，说明 NanoClaw 正在被应用于较高负载的真实多任务并发场景。

### 8. 待处理积压
当前有 **5 个 Open PRs** 需要维护者关注，其中包含重要的 Bug 修复和核心功能：
1.  🚨 **[PR #2859](https://github.com/nanocoai/nanoclaw/pull/2859) 修复迁移崩溃：** 属于高危 Bug 修复，直接影响老用户升级，建议立刻介入 Review。
2.  ⚠️ **[PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844) Matrix 原生 E2EE 适配器：** 架构改动较大（引入 Rust 绑定），需评估跨平台编译与构建复杂度。
3.  ⚠️ **[PR #2858](https://github.com/nanocoai/nanoclaw/pull/2858) / [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795) Clidash 仪表盘技能：** 已根据维护者意见修改并重新提交，等待最终合入。
4.  ⚠️ **[PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824) 清理种子提示词：** 涉及核心 Prompt 逻辑的优化，需评估对现有 Agent 行为的潜在影响。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期**: 2026-06-26 | **分析来源**: github.com/nearai/ironclaw

## 1. 今日速览
IronClaw 项目今日处于**高度活跃**状态，开发与迭代节奏显著加快。在过去 24 小时内，项目处理了 47 条 Issue 更新（17 条已关闭）和 50 条 PR 更新（26 条已合并或关闭），展现了极强的代码审查和问题消化能力。当前，开发重心明显聚焦于 **"Reborn" 架构（WebUI/运行时）的重构与稳定性提升**，特别是针对工具审批流程、底层异步执行并发以及多租户权限控制的深度优化。尽管没有发布新的正式版本，但底层代码库正在进行一次大规模的架构演进的“缝合期”密集修复。

## 2. 版本发布
* **过去 24 小时内无新版本发布 (Releases: 0)**。项目目前处于高强度的 `main` 分支主干集成与 Reborn 架构迭代阶段。

## 3. 项目进展
今日共有 26 个 PR 被合并或关闭，项目在以下核心领域取得了实质性突破：

* **Reborn 权限与策略体系构建**：
  * PR [#5263](https://github.com/nearai/ironclaw/pull/5263) 和 [#5262](https://github.com/nearai/ironclaw/pull/5262) 引入了 `ironclaw_capability_policy` 核心基础库，为多租户环境下的细粒度能力控制（Default-policy source）奠定基础。
  * PR [#5256](https://github.com/nearai/ironclaw/pull/5256) 合并了用户级别的工具设置暴露，修复了非操作员用户在 WebUI 中的配置权限问题。
* **系统并发与底层性能优化**：
  * PR [#5234](https://github.com/nearai/ironclaw/pull/5234) 移除了 Reborn 持久化存储中导致车队阻塞的按记录互斥锁，改用共享 CAS 更新，大幅提升了写入并发能力。
  * PR [#5255](https://github.com/nearai/ironclaw/pull/5255) 将 Postgres CAS put 操作的往返次数从 3 次降至 1 次，极大优化了数据库交互延迟。
  * PR [#5250](https://github.com/nearai/ironclaw/pull/5250) 系统性修复了运行时的“永久挂起”和“门控驻留杀死”问题，精准界定了异步等待状态。
* **前端体验与交互修复**：
  * PR [#5258](https://github.com/nearai/ironclaw/pull/5258) 修复了经过认证的技能内容被错误拦截的问题（误触 Prompt 黑名单）。
  * PR [#5252](https://github.com/nearai/ironclaw/pull/5252) 实现了 Slack 主机对话绑定的持久化。

## 4. 社区热点
当前讨论最热烈的问题集中在 **WebUI 的工具审批流程** 及 **“内部测试”发现的 UX 缺陷**：

* **工具授权逻辑断层**：Issue [#5192](https://github.com/nearai/ironclaw/issues/5192) 和 [#5243](https://github.com/nearai/ironclaw/issues/5243) 反映了核心痛点：“拒绝工具审批仍会触发后续请求”以及“‘批准并始终允许’选项无法持久化到设置中”。这表明 Reborn 前端审批门与后端持久化策略之间存在同步裂缝。
* **内部执行细节泄漏**：Issue [#5191](https://github.com/nearai/ironclaw/issues/5191) 报告内部技能激活和上下文预算的 Debug 消息直接暴露在了聊天 UI 中，引发了对最终产品展示层净化的关注。
* **基准测试与基准分析**：Issue [#5173](https://github.com/nearai/ironclaw/issues/5173) 和 [#5220](https://github.com/nearai/ironclaw/issues/5220) 是维护者发布的每日失败分类报告。数据显示近期大量测试未通过是由基础设施导致的，而非模型质量或核心逻辑缺陷。

## 5. Bug 与稳定性
根据系统日志和 Issue 反馈，今日修复和报告的关键 Bug 按严重程度排列如下：

1. **【严重 - 已修复】 WASM 执行导致运行时冻结**：PR [#5206](https://github.com/nearai/ironclaw/pull/5206) 修复了 6 月 24 日的系统崩溃（~40个并发导致 Tokio worker pool 被饿死，系统静默 4 分钟后重启）。**已修复。**
2. **【高 - 已修复】 UI 交互静默失败**：Issue [#5190](https://github.com/nearai/ironclaw/issues/5190) 发现当 WebUI 持有过期/无效的 Bearer Token 时，用户仍能进入界面，但后续所有操作静默失效，引发极大困惑。**已修复。**
3. **【中 - 待处理】 调度器心跳误判**：Issue [#5239](https://github.com/nearai/ironclaw/issues/5239) 指出，当运行完成后，如果心跳未及时更新，调度器会错误地将其分类为运行失败并尝试清理。尚无对应修复 PR。
4. **【中 - 待处理】 审批流状态污染**：Issue [#5210](https://github.com/nearai/ironclaw/issues/5210) 报告，当存在未处理的工具审批时，用户发送新消息会导致重复警告和消息状态丢失。

## 6. 功能请求与路线图信号
从 Issue 和 PR 动态中，可以清晰看出 IronClaw 下一步的演进路线图：

* **记忆系统的彻底重构**：Issue [#5264](https://github.com/nearai/ironclaw/issues/5264) 和 PR [#5205](https://github.com/nearai/ironclaw/pull/5205) 揭示了团队正在打造“Reborn 个人记忆与自学习系统”，包含原生 SQL 存储支持、语义搜索以及第三方记忆隔离。
* **技能蒸馏与人工介入**：PR [#5156](https://github.com/nearai/ironclaw/pull/5156) 提交了极具前瞻性的功能：大模型自动蒸馏生成新技能，但这些新技能将处于 `pending_review` 状态，必须在设置中由人类手动审批后才能激活，确立了“安全高于自动化”的 AI 操控原则。
* **渐进式上下文管理**：PR [#5149](https://github.com/nearai/ironclaw/pull/5149) 通过按需披露工具定义，将单次 Prompt 的 Token 数从 2.58 万暴降，彻底解决 NEAR AI 的 120 秒超时问题。

## 7. 用户反馈摘要
通过对 Issue 描述和评论的挖掘，提炼出真实用户在使用 IronClaw 时的痛点：

* **可发现性极差（新用户痛点）**：Issue [#4980](https://github.com/nearai/ironclaw/issues/4980) 指出，Automations（自动化）页面为空时，没有任何引导按钮或提示告知用户“需要通过对话来创建自动化”。用户感到“不知所措”。
* **流式体验割裂（日常使用痛点）**：Issues [#5211](https://github.com/nearai/ironclaw/issues/5211) 和 [#5208](https://github.com/nearai/ironclaw/issues/5208) 指出，Agent 输出长文本时视图不会自动滚动到底部；并且在等待响应期间，输入框会完全冻结，阻止用户连续提问。
* **可见性混乱**：Issue [#5212](https://github.com/nearai/ironclaw/issues/5212) 反映消息时间戳有时只在生成过程中出现，完成后反而消失，不符合常规 IM 软件的使用直觉。

## 8. 待处理积压
以下重要的长期项目/PR 需要维护团队重点关注，避免成为阻塞点：

* **Issue [#5261](https://github.com/nearai/ironclaw/issues/5261) - Reborn 多租户能力策略 EPIC**：作为延续自 #4628 的超级史诗任务，它包含了大量子任务（如 #5266, #5267, #5268），是实现企业级单实例多租户部署的核心前置依赖。
* **PR [#4544](https://github.com/nearai/ironclaw/pull/4544) - Reborn 按作用域划分的生命周期管理基础**：自 6 月 8 日开 open 至今，是多个权限控制 PR 的底层基石。由于涉及核心重构，需评估其合并优先级。
* **PR [#4997](https://github.com/nearai/ironclaw/pull/4997) - 支持解析二进制文档**：在 Google Drive 工具中，PDF/PPTX 等非 UTF-8 文件目前直接报错。该 PR 旨在加入抽取层提取文本，对 Agent 办公场景极为关键，等待合并。

---
*分析结论*：IronClaw 正处于“除旧布新”的深水区。Reborn 架构的引入带来了短期的阵痛（授权流 Bug、前端状态管理混乱），但团队通过高频的 PR 合并（如 CAS 优化、WASM 并发修复）展现出极强的工程执行力。项目健康度极高，正稳步向企业级、多租户的个人 AI 助手平台演进。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

以下是为您生成的 LobsterAI 项目 2026-06-26 动态日报：

# 🦞 LobsterAI 项目动态日报 (2026-06-26)

### 1. 今日速览
在过去 24 小时内，LobsterAI 项目展现出了**极高的内部研发活跃度**。今日共有 9 个 PR 被集中合并或关闭，重点覆盖了 OpenClaw 插件生态、多模型协同以及系统设置等核心模块的优化与缺陷修复。虽然社区端无新版本发布，且仅新增/活跃了 1 个长期停滞的 Issue，但开发团队显然正处于密集的代码整合与底层架构打磨阶段，项目整体在稳定性和多智能体协同方向上迈出了坚实的一步。

### 2. 版本发布
* **无新版本发布**。考虑到今日有大量涉及 OpenClaw 插件和核心基础设置的 PR 被批量关闭，预计项目正在为下一个大版本或重要的迭代版本进行代码冻结和集成测试。

### 3. 项目进展
今日共有 9 个 PR 被处理（均已关闭/合并），标志着多模块协同能力的显著提升：
* **OpenClaw 插件生态强化**：通过 [PR #2203](https://github.com/netease-youdao/LobsterAI/pull/2203) 修复了预编译本地扩展的加载问题；[PR #2202](https://github.com/netease-youdao/LobsterAI/pull/2202) 确保了浏览器插件在白名单机制下的正常运行；特别是 [PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198) 预装了 2026.6.1 官方 QQ 和 Discord 频道插件，大幅推进了 IM 平台的接入能力。
* **多智能体与计划模式优化**：修复了协同模式下的多项流式传输抖动问题。例如，[PR #2199](https://github.com/netease-youdao/LobsterAI/pull/2199) 确保在父级任务完成后仍能轮询运行中的子智能体；[PR #2200](https://github.com/netease-youdao/LobsterAI/pull/2200) 和 [PR #2204](https://github.com/netease-youdao/LobsterAI/pull/2204) 分别解决了 Qwen 和 GLM 模型在生成计划时的消息重复和标签泄漏问题。
* **系统级集成修复**：[PR #2206](https://github.com/netease-youdao/LobsterAI/pull/2206) 改进了 Windows 平台“开机启动”状态的同步逻辑，清理了历史遗留参数并增加了诊断日志。

### 4. 社区热点
* **当前活跃 Issue**：[#1392 [stale] 定时任务开关点击无反应，无法关闭](https://github.com/netease-youdao/LobsterAI/issues/1392)（更新于 06-25）。
* **分析**：这是过去 24 小时内唯一有动态的 Issue。用户报告在设置定时任务后，部分任务开关存在 UI 层面无法点击关闭的 Bug。虽然该 Issue 被标记为 `[stale]`（停滞），但它反映出用户对于**后台任务管理与状态可视化的稳定性**有明确诉求，此类影响日常使用的 UI 交互缺陷通常是用户痛点所在。

### 5. Bug 与稳定性
今日无新增严重的系统级崩溃报告，处理的历史遗留问题主要集中在“多智能体调度”与“流式输出渲染”：
1. **[高] 多智能体死锁/响应重复**：[PR #2201](https://github.com/netease-youdao/LobsterAI/pull/2201) 修复了在最终历史记录同步时，GLM 模型产生重复可见回复及重复思考块的问题。
2. **[中] 前端 UI 状态不一致**：[PR #2206](https://github.com/netease-youdao/LobsterAI/pull/2206) 修复了开机自启状态与 OS 不同步导致的设置项误导；同时，社区遗留的 [Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) 定时任务开关失效问题仍有待彻底修复。
3. **[低] UI 视觉体验**：[PR #2205](https://github.com/netease-youdao/LobsterAI/pull/2205) 更新了计划模式图标以适配主题。

### 6. 功能请求与路线图信号
* **IM 矩阵化接入**：从 [PR #2198](https://github.com/netease-youdao/LobsterAI/pull/2198) 预装 QQ 和 Discord 插件可以看出，**将 AI 助手无缝接入主流社交/协同平台**是接下来的重要产品路线图。
* **多模型（GLM/Qwen）深度适配**：多个 PR（#2200, #2204）专门针对特定大模型的输出特性（如快照抖动、标签泄漏）进行了底层适配，这表明项目正致力于打造一个**高度兼容且稳定的多模型 AI 聚合工作站**。

### 7. 用户反馈摘要
从 [Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) 的反馈来看：
* **真实痛点**：部分边缘场景下的前端交互响应存在缺陷（如特定定时任务无法关闭）。用户依赖定时任务实现自动化工作流，一旦开关失效，会导致任务空转或资源浪费。
* **使用场景**：用户重度依赖 LobsterAI 执行“设置触发 -> 自动运行”的无监管工作流，这对前端组件的可靠性和状态同步的精准度提出了较高要求。

### 8. 待处理积压
* ⚠️ **[Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)** 已被机器人标记为 `[stale]`。尽管在昨日有更新，但尚未分配修复 PR。
* **建议**：维护者应评估该 UI 缺陷的复现条件（“大部分正常，部分无法点击”通常与特定 DOM 渲染状态或数据绑定有关），确认是否与近期大量合并的前端渲染层（`area: renderer`）或设置组件重构有关，必要时重新激活并分配开发者跟进。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

这份报告基于 2026-06-24 至 2026-06-26 的 GitHub 数据，对开源 AI 智能体项目 **CoPaw** (agentscope-ai/CoPaw / QwenPaw) 的动态进行深度分析。

---

# 📊 CoPaw 项目动态日报 (2026-06-26)

## 1. 今日速览
过去 24 小时内，CoPaw 项目展现了极高的社区活跃度与开发进展，共计处理了 **27 条 Issue 更新**（新开/活跃 17，关闭 10）与 **50 条 PR 更新**（待合并 28，合并/关闭 22）。项目当前没有发布新版本，但核心贡献者与社区开发者在功能迭代、Bug 修复以及 Runtime 2.0 架构迁移后的善后工作上投入了大量精力。从前端排版、模型适配到浏览器自动化工具链，多项关键问题得到响应或实质性修复，整体处于快速迭代的稳态推进期。

## 2. 版本发布
**无新版本发布**。虽然当前版本停留在近期的 Release（数据中显示为 0 个新 Release），但从大量的 PR 与 Bug 修复进度来看，项目正在为下一个小版本（可能是 v1.1.13 或 2.0 的修订版）积蓄代码变更。

## 3. 项目进展
今日共有 22 个 PR 被合并或关闭，项目在以下方面取得了实质性向前迈进：
*   **Runtime 2.0 架构融合**：修复了 TUI（终端用户界面）在 AgentScope 2.0 迁移后 ACP 命令失效的问题 ([PR #5443](https://github.com/agentscope-ai/QwenPaw PR #5443))，并将 Mission Mode 执行引擎重新接入 Runtime v2 架构 ([PR #5442](https://github.com/agentscope-ai/QwenPaw PR #5442))。
*   **上下文与记忆机制优化**：推进了 Turn-based 追踪的自动内存系统重构 ([PR #5540](https://github.com/agentscope-ai/QwenPaw PR #5540))，以及基于 SQLite 的持久化历史记录与召回机制（Scroll context manager，[PR #5321](https://github.com/agentscope-ai/QwenPaw PR #5321)）。
*   **多渠道与插件生态扩展**：推进了完整的 Slack 渠道集成（支持多模态与流式输出，[PR #5193](https://github.com/agentscope-ai/QwenPaw PR #5193)），以及包含 12 项 BI 技能的数据分析插件 DataPaw ([PR #4622](https://github.com/agentscope-ai/QwenPaw PR #4622))。

## 4. 社区热点
当前讨论最热烈的问题集中在 **前端交互体验** 与 **深度使用场景中的上下文管理**：
*   **[Issue #5345](https://github.com/agentscope-ai/QwenPaw Issue #5345)** (8 评论)：自定义 OpenAI 兼容提供商（如 OMLX）不支持 Function Calling。这反映了高级用户强烈希望将 CoPaw 作为通用客户端，接入本地或第三方推理服务端。
*   **[Issue #2733](https://github.com/agentscope-ai/QwenPaw Issue #2733)** (6 评论)：浏览器自动化导致 Chrome 进程无法关闭，耗尽系统资源。该问题引起了大量共鸣，说明使用 CoPaw 进行 Web 交互的需求极高。
*   **[Issue #5480](https://github.com/agentscope-ai/QwenPaw Issue #5480)** (5 评论)：Console 长消息排版错乱。作为直接影响日常体验的 Bug，用户反馈十分迅速。
*   **[Issue #5455](https://github.com/agentscope-ai/QwenPaw Issue #5455)** (4 评论)：探讨将时间戳从系统上下文移至用户消息前缀。这是社区对长对话上下文稳定性（Prompt Caching 机制）的一次深度技术探讨。

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已在第一时间由社区或官方提交 Fix PR：

**🔴 严重 / 影响核心功能**
*   **前端大文件渲染崩溃**：超过 500KB 的会话历史 JSON 文件打开时直接报错白屏 ([Issue #5479](https://github.com/agentscope-ai/QwenPaw Issue #5479))。
*   **视觉请求被异常剥离**：MiniMax-M3 图片安全审核错误被错误缓存为“不支持媒体”，导致同进程内后续图片输入被强行丢弃 ([Issue #5505](https://github.com/agentscope-ai/QwenPaw Issue #5505))。**[已提交 Fix PR #5535](https://github.com/agentscope-ai/QwenPaw PR #5535)**。

**🟠 中等 / 影响特定工作流**
*   **内存泄漏回归**：浏览器工具 `stop()` 后遗留大量 Chrome 渲染进程导致内存泄漏，此为 #2733 修复后的回归问题 ([Issue #5520](https://github.com/agentscope-ai/QwenPaw Issue #5520))。**[已提交 Fix PR #5536](https://github.com/agentscope-ai/QwenPaw PR #5536)**。
*   **心跳任务超时打断**：硬编码的 120 秒超时机制导致复杂的心跳任务在执行中途被取消 ([Issue #5539](https://github.com/agentscope-ai/QwenPaw Issue #5539))。
*   **上下文膨胀级联失败**：LLM 调用失败（如 502）导致工具结果未执行裁剪，最终撑爆上下文窗口 ([Issue #5342](https://github.com/agentscope-ai/QwenPaw Issue #5342))。

**🟡 轻微 / UI 与兼容性**
*   Linux 下默认浏览器包裹在 IME 环境变量中导致启动失败 ([Issue #5528](https://github.com/agentscope-ai/QwenPaw Issue #5528))。**[已提交 Fix PR #5526](https://github.com/agentscope-ai/QwenPaw PR #5526)**。
*   模型配置页搜索框被浏览器误识别为密码输入框触发自动填充 ([Issue #5403](https://github.com/agentscope-ai/QwenPaw Issue #5403))。

## 6. 功能请求与路线图信号
从 Issues 和 PRs 中可以明显看出 CoPaw 下一步的演进方向：
*   **模型容错与高可用**：用户明确请求支持 AgentScope 2.0 的模型动态切换能力（A 模型限流时无缝切到备用模型 B）（[Issue #5527](https://github.com/agentscope-ai/QwenPaw Issue #5527)）。这预示着底层路由层需要增加重试与降级策略。
*   **生态标准化安装**：请求支持通过 `pip` 从 PyPI 直接安装插件（[Issue #5484](https://github.com/agentscope-ai/QwenPaw Issue #5484)），这表明 CoPaw 正在吸引大量第三方插件开发者，需要建立标准的 Python 包分发机制。
*   **桌面端体验增强**：引入 Tauri 原生系统托盘行为，优化关闭窗口与后台驻留逻辑（[PR #4041](https://github.com/agentscope-ai/QwenPaw PR #4041)），标志着其在本地桌面应用领域的深化。

## 7. 用户反馈摘要
提炼近期用户的真实声音：
*   **痛点**：Windows 内网（离线）环境下的兼容性较差，安装后出现白屏 ([Issue #5497](https://github.com/agentscope-ai/QwenPaw Issue #5497))；Windows 下文件预览 API 返回 404 ([Issue #5508](https://github.com/agentscope-ai/QwenPaw Issue #5508))。这反映出企业内网用户群体庞大，但跨平台文件路径处理仍有瑕疵。
*   **使用场景**：用户高度依赖 CoPaw 进行长时间、不间断的编码或复杂任务，因此对**历史记录管理**提出了更高要求（如要求增加删除单次对话功能的 [Issue #5503](https://github.com/agentscope-ai/QwenPaw Issue #5503)，以及针对大体积上下文的处理需求）。
*   **满意度**：开发者对 CoPaw 定制 Provider 和自定义 Skill 的能力感到满意，但期望文档与底层实现能更一致（如 Runtime 2.0 下缺失的 `spawn_subagent` 工具，[Issue #5523](https://github.com/agentscope-ai/QwenPaw Issue #5523)）。

## 8. 待处理积压
以下较早期的 Issue/PR 目前仍处于待处理或 Under Review 状态，建议维护团队重点关注：
*   **[Issue #5162](https://github.com/agentscope-ai/QwenPaw Issue #5162)** (创建于 06-12，仍 Open)：对话思考逻辑进入死循环。这属于核心 LLM 推理层面的严重 Bug，拖延可能导致新用户流失。
*   **[PR #5321](https://github.com/agentscope-ai/QwenPaw PR #5321)** (提交于 06-19，Under Review)：Scroll 上下文管理策略。该 PR 影响范围大，对长对话记忆有质变提升，建议加快 Code Review 进度。
*   **[PR #4622](https://github.com/agentscope-ai/QwenPaw PR #4622)** (提交于 05-22，Under Review)：DataPaw 插件。作为大型功能性贡献，停滞超过一个月可能打击社区贡献者的积极性。

---
*分析声明：本报告基于 CoPaw (QwenPaw) 仓库 2026-06-26 过去 24 小时的活动数据自动生成。总结与判断由 AI 模型基于数据客观提炼。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

以下是为您生成的 **ZeroClaw** 开源项目 2026-06-26 动态日报。

---

# 📊 ZeroClaw 项目动态日报 (2026-06-26)

### 1. 今日速览
ZeroClaw 项目在过去 24 小时内保持了极高的活跃度，共处理了 **98 条 Issue 更新（35 新增/活跃，13 关闭）** 和 **50 条 PR 更新（44 待合并，6 已合并/关闭）**。项目当前正处在 **v0.8.2 与 v0.8.3 的密集开发与重构期**，核心焦点集中在 **WASM 插件架构、安全与供应链机制、以及智能体委派控制** 三大方向。整体项目健康度优秀，社区贡献积极响应了项目的 RFC 路线图，但在安全与底层运行时方面也暴露了数个高危 Bug。

### 2. 版本发布
* **今日无新版本发布 (0 Releases)。** 
* 当前项目正全面推进 `v0.8.2`（稳定与支持面）与 `v0.8.3`（运行时与工具稳定）的里程碑，同时着手规划 `v0.9.0`（Auth、Gateway 破坏性变更）。

### 3. 项目进展
今日共有 6 个 PR 被合并或关闭，项目在测试覆盖、渠道稳定性和开发体验上取得了实质进展：
* **测试覆盖提升**：合并了 [PR #8268](https://github.com/zeroclaw-labs/zeroclaw/pull/8268)（增加 Qdrant 内存后端分类测试）和 [PR #8243](https://github.com/zeroclaw-labs/zeroclaw/pull/8243)（增加 Schema 字符串辅助函数测试），强化了核心模块的防回归能力。
* **渠道与交互优化**：关闭了 [Issue #7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873)（Telegram 媒体组应作为单次 Agent 请求分发），修复了多图发送导致多次 LLM 调用的历史问题。
* **配置与 CLI 修复**：关闭了 [Issue #7087](https://github.com/zeroclaw-labs/zeroclaw/issues/7087)，修复了 `zeroclaw models set` 错误路由到 doctor 命令而非保存配置的缺陷。

### 4. 社区热点
今日讨论度最高的议题揭示了社区对**架构治理、安全分发和 UI 现代化**的强烈诉求：
* **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (11 评论)**：关于工作道、看板自动化和标签清理的 RFC。表明随着项目扩张，维护团队正大力推进自动化治理，以减轻人工管理负担。
* **[Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (8 评论)**：RFC: 硬件 PGP、密封构建和 SLSA 来源的供应链签名。社区呼吁引入 StageX 模型来强化容器镜像和二进制文件的安全，这对企业级部署至关重要。
* **[Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) (2 评论, 1 👍)**：提议使用 Rust→Wasm 框架（如 Dioxus/Leptos/Yew）替换现有的 React/Vite Web UI。这是实现项目 "WebAssembly-first"（消除 Node.js 依赖）大目标的关键一步。

### 5. Bug 与稳定性 🔴
今日报告了多个高风险级别（`risk: high`）的安全与运行时 Bug，需引起高度警惕：
* **S0 级安全漏洞：Agent 委派权限绕过** 
  * [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)：子代理可以调用父代理策略明确排除的工具。这属于严重的数据/安全风险，目前已有相关修复 PR（[#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) 等）在推进中。
* **P1 级内存泄漏：MCP 孤儿进程堆积** 
  * [Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)：开启心跳检测时，每个 tick 会泄漏一个 stdio MCP 子进程，导致守护进程生命周期内产生大量孤儿进程（约 48 个/天）。
* **S2 级数据丢失：翻译修补导致数据残留** 
  * [Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)：`fill-translations` 修复泄漏后，陈旧的翻译映射条目仍会通过 `write_po` 重新发送泄漏文本。
* **模型提供商回归问题** 
  * [Issue #8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)：Kimi Code (Moonshot 端点) 指向了已失效的 404 URL，导致工作流阻塞。

### 6. 功能请求与路线图信号 🗺️
结合当前的活跃 PR，以下功能极有可能被纳入下一个版本：
* **自治目标模式**：[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 提出增加持久化的 "Goal Mode"，允许 Agent 持续执行目标直到完成或预算耗尽。由于已标记为 `status:accepted`，这是增强 Agent 自主性的重要一环。
* **SOP 带外审批机制**：[PR #8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) 正在为 SOP（标准作业程序）增加带外审批平面和基于优先级的拦截机制，这属于 [Tracker #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) 的关键部分。
* **上下文窗口可视化**：[PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946) 正在为 TUI、Gateway 和 CLI 添加模型上下文窗口使用率进度条，极大改善开发者的交互体验。
* **WASI 硬件接口支持**：[Issue #8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) 提出通过 Capability-gated WASI 为插件提供 GPIO/SPI/USB 等硬件访问能力，这将大幅拓展 ZeroClaw 在 IoT 领域的适用性。

### 7. 用户反馈摘要 🗣️
* **痛点 1：Token 浪费严重**。在 [Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327) 中，用户抱怨在结合 OpenAI 兼容提供商时，工具结果中的图像数据被当作纯文本发送，导致 Token 消耗剧增。
* **痛点 2：多 Agent 协作控制力弱**。从 Issue #8279 和 #8238 反馈来看，重度用户在使用 Sub-agent/Delegate 时，极其渴望精确的**权限边界隔离**（独立模式），不希望子代理继承父代理的全部上下文或工具。
* **痛点 3：多渠道集成松散**。针对 Telegram 渠道多图发送的 Bug（[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)），用户期待 Gateway 层面能更智能地聚合媒体，而不是将其拆分为多次独立思考。

### 8. 待处理积压与高优关注 ⚠️
* **高危积压**：[Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) 请求在 Web 仪表盘内支持应用升级与监督重启，虽然优先级为 P2，但风险极高，目前急需维护者审核代码合并。
* **废弃代码处理**：[Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) 指出 SkillForge（自动技能发现引擎）目前处于“孤立”状态，未接入任何运行时流程。社区在讨论是补全安全默认配置还是直接移除，需项目核心团队尽快决策。

</details>