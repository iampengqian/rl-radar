# OpenClaw 生态日报 2026-03-25

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-03-24 22:06 UTC

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

# OpenClaw 项目动态日报 (2026-03-25)

**分析师摘要**：OpenClaw 项目今日处于极度活跃状态，社区互动量巨大。随着 v2026.3.23 版本的发布，大量用户进行了升级测试，导致 Bug 报告和回归问题显著增加，尤其是围绕新版本包的完整性和 UI 构建方面。同时，核心开发团队正在积极合并大量基础设施改进 PR，显示出项目正在经历一次深度的底层架构重构和自我优化。

---

### 1. 今日速览

- **活跃度爆棚**：过去 24 小时内 Issues 和 PR 更新均达到 500 条上限，显示社区参与度极高。
- **版本动荡**：刚发布的 `v2026.3.23` 引入了对阿里云 Qwen 的支持，但同时也带来了严重的打包问题（UI 缺失、插件加载失败），导致大量用户回滚或报错。
- **生态扩展**：关于 Linux/Windows 原生客户端的呼声依然很高，同时 WeChat 插件的兼容性问题成为中文社区的新焦点。
- **底层重构**：合并了 38 个 PR，主要集中在会话持久化、自愈机制和后台任务优化，表明项目正在从功能堆叠向稳定性与自动化运维转型。

---

### 2. 版本发布

**[v2026.3.23](https://github.com/openclaw/openclaw/releases/tag/v2026.3.23)**
- **发布日期**: 2026-03-23
- **重要变更**:
  - **ModelStudio/Qwen 集成**: 增加了中国区和全球区的标准 DashScope 端点（按量付费），并将提供商重命名为 `Qwen (Alibaba Cloud Model Studio)`。这修正了之前仅支持 Coding Plan 端点的限制。(#43878)
  - **UI 整洁化**: 合并了按钮原语以统一界面风格。
- **破坏性变更/迁移注意**:
  - **NPM 包不完整**: 这是一个 "坏" 版本。NPM 包中缺少 `dist/control-ui/` 目录，导致升级后 Control UI 仪表盘无法访问 (503 错误)。**建议用户暂缓升级或手动构建 UI**。(#52808, #52823)
  - **插件兼容性**: 新版本对插件加载逻辑进行了调整，导致部分官方/第三方插件（如 WeChat, WhatsApp）出现兼容性问题。

---

### 3. 项目进展

今日共有 **38 个 PR 被合并**，重点在于提升系统的自动化运维能力和健壮性：

- **会话与持久化**:
  - 合并了 `FlushGuard` 机制 (#54009)，确保会话元数据和历史记录在进程终止前原子化持久化，防止数据丢失。
  - 引入 `SessionPruner` (#54002)，自动清理空闲或孤立的会话，优化网关性能。
- **自我修复与监控**:
  - 新增 `DoctorHeartbeat` (#54001)，后台定期运行诊断并自动修复环境问题。
  - 引入 `UpdateWatcher` (#53999)，支持后台监控新版本发布，为热更新铺路。
- **插件与网关**:
  - 修复了 Slack DM 的开销问题并恢复了 Codex 自动传输 (#53957)。
  - 增加了 `/v1/models` 和 `/v1/embeddings` 兼容端点 (#53992)，极大地增强了与 Open WebUI、LobeChat 等第三方前端的兼容性。

---

### 4. 社区热点

1.  **[Issue #75] Linux/Windows Clawdbot Apps**
    - **热度**: 👍 65 | 评论 48
    - **诉求**: 用户强烈要求官方支持 Linux 和 Windows 原生应用，功能对齐 macOS 版。目前移动端和 macOS 端已相对成熟，桌面端缺失限制了企业级部署。
2.  **[Issue #49836] ⚠️ Phishing Scam Detected**
    - **热度**: 👍 18 | 评论 33
    - **事件**: 社区及时揭露了一起利用 OpenClaw 名义进行的钱包钓鱼诈骗。维护者已删除恶意链接，体现了社区较高的安全警惕性。
3.  **[Issue #52885] 微信插件兼容性问题**
    - **热度**: 评论 31
    - **痛点**: 腾讯官方微信插件 `@tencent-weixin/openclaw-weixin` v1.0.3 与新版本 OpenClaw 不兼容，导致国内用户无法正常加载插件。

---

### 5. Bug 与稳定性

今日报告的 Bug 数量激增，且多集中在 **v2026.3.23** 的回归问题上：

**严重**:
- **[Bug] Control UI Assets Missing (#52808, #52823)**
  - **现象**: 升级后 UI 界面崩溃，提示 `Control UI assets not found`。
  - **原因**: NPM 发布流程遗漏了构建产物。
  - **状态**: 已确认，暂无合并修复 PR，需手动运行 `pnpm ui:build`。
- **[Bug] WhatsApp Plugin Crashes Agent (#53247)**
  - **现象**: 插件导致 Agent 崩溃，报错 `missing light-runtime-api`。
  - **原因**: 打包文件不完整。

**中等**:
- **[Bug] Session_send Fails (#52875)**: 升级后 Agent 间通信失败，无法找到会话。
- **[Bug] SSRF Check Blocks Clash Fake-IP (#25215)**: 新增的 `RFC2544` 检查误拦截了 Clash 的 fake-ip 范围，导致网络请求受阻。
- **[Bug] OAuth Token Refresh Race Condition (#26322)**: 多 Agent 共享 OAuth 令牌时导致令牌失效。

**已修复 (Pending Release)**:
- Slash commands 崩溃问题 (#52790)。
- Mistral 工具调用 ID 格式错误 (#52548)。

---

### 6. 功能请求与路线图信号

- **长期记忆与知识管理 (#50096)**: 社区正在激烈讨论 Agent 的“长期记忆”实现。目前的 `Driftnet` 似乎不能满足需求，用户希望 Agent 能具备跨会话的学习和进化能力。
- **工具执行安全控制 (#53736)**: PR 提议增加 `tools.exec.denyPatterns`，允许通过正则表达式屏蔽特定命令。这反映了用户对生产环境安全性的担忧，预计很快会被合并。
- **Hive 技能注册中心 (#53983)**: 正在构建去中心化的技能分发机制，暗示 OpenClaw 正在构建类似应用商店的生态体系。

---

### 7. 用户反馈摘要

- **升级体验极差**: 多名用户抱怨 `2026.3.22` 和 `2026.3.23` 版本不仅安装包有缺陷，还破坏了原有的插件生态。
- **文档与报错信息**: 用户指出当配置出错时（如 XDG_CONFIG_HOME 未解析），报错信息过于晦涩，难以排查 (#53628)。
- **网络与代理**: 在中国大陆及企业防火墙环境下，OAuth 登录和 API 连接问题依然频发，用户迫切需要更完善的代理支持 (#42176)。

---

### 8. 待处理积压

- **[Issue #10386] Skills Discovery Failure**: 自 2 月以来，自定义技能无法被发现的 Bug 仍未得到有效解决，影响了高级用户的自定义工作流。
- **[Issue #23829] Fallback Chain Limitation**: Fallback 机制被限制在同一 Provider 内，无法跨 Provider 切换，这在主 Provider 宕机时是一个严重的可用性风险。

---

## 横向生态对比

# 2026-03-25 AI 智能体与个人助手开源生态横向对比分析报告

**分析师**：AI 开源生态观察员
**日期**：2026-03-25

---

## 1. 生态全景

2026年3月的 AI Agent 开源生态呈现出**"架构分化与能力整合并存"**的态势。以 **OpenClaw** 为代表的平台正在经历从"功能堆叠"向"企业级稳定性"的痛苦转型，而 **NanoBot** 和 **PicoClaw** 等项目则聚焦于解决连接性（微信/企业微信）和持久化记忆等垂直痛点。**多模型路由**（摆脱对单一 LLM 的依赖）和**多模态交互**（语音/图像）成为今日技术迭代的最强音。同时，供应链安全危机（LiteLLM 事件）给狂奔的生态敲响了警钟，各项目开始通过剥离不安全依赖或重构核心架构来应对信任挑战。

---

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release 状态 | 健康度/状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | >500 (上限) | >500 (上限) | **v2026.3.23** (缺陷版) | ⚠️ **高危**：发布重大打包事故，社区动荡，但底层重构积极。 |
| **NanoBot** | 高 (安全危机) | 41 (待合并) | 无 | 🔴 **危急**：遭遇供应链攻击，需紧急修复恶意代码。 |
| **PicoClaw** | 18 | 69 (45 merged) | **Nightly** | 🟢 **活跃**：高频重构，企业微信支持完善，语音功能落地。 |
| **NanoClaw** | 中等 | 50 (37 open) | 无 | 🟡 **积压**：多模型支持 PR 拥堵，架构转型期。 |
| **LobsterAI** | 23 (新增) | 50 | 无 | 🟠 **承压**：Windows/钉钉端 Bug 激增，性能优化进行中。 |
| **TinyClaw** | 0 (沉寂) | 8 (全合并) | **v0.0.19** | 🟢 **高效**：内部开发极快，队列架构大幅优化，社区反馈滞后。 |
| **Moltis** | 11 (关闭) | 22 (全合并) | 无 | 🟢 **稳健**：Rust 架构优势显现，Docker/MCP 支持完善。 |
| **CoPaw** | 50 | 50 (33 merged) | **v0.2.0** | 🟠 **争议**：新版本发布，但 Docker 升级导致严重数据丢失。 |
| **ZeptoClaw** | 低 | 29 (21 merged) | **v0.8.2** | 🟢 **稳定**：专注工具链修复，多模态 PR 值得关注。 |
| **EasyClaw** | 0 | 3 (UI重构) | 无 | ⚪ **静默**：纯前端优化，处于发版前夕。 |

---

## 3. OpenClaw 在生态中的定位

*   **核心参照物**：OpenClaw 依然是生态中**流量最大、生态最全**的巨无霸，但正面临严重的"巨婴病"（架构臃肿、升级动荡）。
*   **优势**：
    *   **生态广度**：对主流前端（LobeChat, OpenWebUI）和 Provider（Qwen, OpenAI）的兼容性最好（`/v1/models` 端点）。
    *   **插件市场**：Hive 技能注册中心和应用商店雏形领先于 NanoBot 等竞品。
*   **技术路线差异**：
    *   相比 **Moltis** (Rust/性能优先) 和 **NanoBot** (Python/快速迭代)，OpenClaw 走的是 **TypeScript/全栈中台路线**，试图通过网关层解决一切问题，但也因此背负了沉重的 NPM 依赖包袱。
*   **对比劣势**：今日的 NPM 打包事故（UI 缺失）暴露了其 CI/CD 流程的脆弱性；而 **NanoBot** 移除 LiteLLM 的果断行动，反衬出 OpenClaw 在依赖管理上的迟滞。

---

## 4. 共同关注的技术方向

1.  **长期记忆与知识管理**
    *   **涉及项目**：OpenClaw (#50096), PicoClaw (Seahorse提案), NanoClaw (MemOS集成), Moltis (#483).
    *   **诉求**：单纯的上下文窗口已不够用。社区正在探索"海马体"机制、RAG 增强和图数据库，试图让 Agent 具备"跨会话进化"和"遗忘无关信息"的能力。
2.  **企业级 IM 深度集成**
    *   **涉及项目**：OpenClaw, NanoBot, PicoClaw, LobsterAI, CoPaw.
    *   **诉求**：微信/企业微信/钉钉的适配是今日最大热点。用户不再满足于 Web UI，强烈要求 Agent 能直接在办公 IM 中处理任务。**PicoClaw** 和 **NanoBot** 在此领域动作最快，已支持最新协议。
3.  **架构解耦与模型中立**
    *   **涉及项目**：NanoBot (移除LiteLLM), NanoClaw (Copilot/OpenCode支持), Moltis (Httpd分离).
    *   **诉求**：摆脱对 Claude/OpenAI 的单一绑定，支持本地模型（Ollama/OneAPI）和多云路由成为刚需。同时，各项目都在进行"内核瘦身"，将 HTTP/网关层与核心逻辑剥离。

---

## 5. 差异化定位分析

| 维度 | **巨无霸派** | **轻量/重构派** | **垂直/功能派** |
| :--- | :--- | :--- | :--- |
| **代表项目** | OpenClaw | Moltis, ZeptoClaw | CoPaw, LobsterAI |
| **核心逻辑** | 大而全，网关即平台 | 小而美，性能/安全优先 | 场景为王，深入业务流 |
| **技术栈** | TypeScript/Node.js | Rust (Moltis), Go/RS (Zepto) | TS/Python 混合 |
| **目标用户** | 企业开发者，需要完整方案 | 极客，边缘设备，安全敏感型 | 办公自动化用户，运维 |
| **今日动向** | 忙于修 Bug 和安抚社区 | 忙于底层架构升级 | 忙于适配微信/钉钉新接口 |

*   **NanoBot vs. NanoClaw**：两者虽名称相似，但方向迥异。**NanoBot** 正在清理依赖，回归安全；**NanoClaw** 则在激进地引入 GitHub Copilot 等新模型，试图成为"超级路由"。

---

## 6. 社区热度与成熟度

*   **第一梯队 (动荡期)**：**OpenClaw**, **CoPaw**。
    *   用户量巨大，但版本质量参差不齐，Issue 区充斥着回归 Bug 报告。正处于"破而后立"的重构深水区。
*   **第二梯队 (快速成长期)**：**NanoBot**, **PicoClaw**, **LobsterAI**。
    *   活跃度极高，针对特定痛点（微信、语音、记忆）的攻坚频繁。社区反馈直接驱动代码变更。
*   **第三梯队 (稳健/收敛期)**：**Moltis**, **TinyClaw**, **ZeptoClaw**。
    *   PR 合并效率高，代码质量稳定。虽然社区声量不如第一梯队大，但底层架构日益扎实，适合作为生产环境的基座。

---

## 7. 值得关注的趋势信号

1.  **供应链安全将成为"一票否决"项**
    *   **信号**：NanoBot 因 LiteLLM 植入恶意代码导致社区信任危机。
    *   **建议**：开发者应立即审查项目中的 `litellm` 或类似的"万能适配层"依赖。未来，**直接集成原生 SDK**（如 NanoBot 正在做的那样）将比依赖中间层更安全。
2.  **"多模态"正在下沉为基础能力**
    *   **信号**：ZeptoClaw 和 PicoClaw 都在今日合并/提交了语音和图像处理的 PR。
    *   **建议**：纯文本 Agent 的生存空间将极速萎缩。应用层开发需预留语音输入（ASR）和图像理解的多模态接口。
3.  **配置体验是当前最大痛点**
    *   **信号**：LobsterAI 和 OpenClaw 的用户都在抱怨 MCP 配置难、升级后配置丢失。
    *   **建议**：对于面向 C 端或企业级用户的 Agent 项目，**"零配置" (Zero-Config) 或 "自动检测" (Auto-Detect)** 将是核心竞争力的关键。降低 MCP 的接入门槛迫在眉睫。
4.  **边缘计算与本地模型支持**
    *   **信号**：Moltis 对 Docker/Node 的内置支持，以及各项目对本地模型死循环的修复。
    *   **建议**：Agent 框架必须考虑在无网或弱网环境下的运行能力，以及对小参数模型的容错机制（防止死循环）。

---
**总结**：今日生态呈现出"冰火两重天"的景象——头部项目在稳定性泥潭中挣扎，而腰部项目凭借垂直功能（微信/语音）和架构优势（Rust/安全）快速抢占开发者心智。对于技术决策者而言，现在是**弃用不稳定中间件、重注多模态与长期记忆架构**的最佳窗口期。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

以下是为您生成的 2026-03-25 NanoBot 项目动态日报。

---

# NanoBot 项目日报 (2026-03-25)

## 1. 今日速览
NanoBot 今日处于**极高活跃度**状态，社区与开发者互动频繁。过去24小时内，项目遭遇了严重的供应链安全危机（LiteLLM 恶意代码植入），导致大量 Issue 反馈和紧急 PR 提交。与此同时，功能性开发并未停滞，针对微信协议适配、长期记忆和心跳机制优化的 Pull Request 仍在积极推进。目前共有 **41 个 PR 待合并**，显示出社区贡献意愿强烈，但也给 Code Review 带来了不小压力。

## 2. 版本发布
*   **无新版本发布**。
    *   *注：鉴于今日爆出的严重安全漏洞，建议维护者尽快发布修复版本以移除恶意依赖。*

## 3. 项目进展
今日共有 **11 个 PR 被合并/关闭**，主要集中在生态增强与严重 Bug 修复：

*   **🔴 关键架构调整 - 移除 LiteLLM 依赖 ([PR #2448](https://github.com/HKUDS/nanobot/pull/2448))**
    *   响应今日爆发的供应链攻击事件，该 PR 彻底移除了包含恶意代码的 `litellm` 依赖，转而直接使用 OpenAI 和 Anthropic 的原生 SDK。这是一次重大的架构清理，旨在保障项目安全性。
*   **🔗 渠道适配 - 微信插件 1.0.3 支持 ([PR #2428](https://github.com/HKUDS/nanobot/pull/2428))**
    *   适配了官方微信插件的最新版本，增加了 `routeTag` / `SKRouteTag` 支持，并修复了登录 QR 码过期自动刷新等问题，显著提升了企业微信/微信渠道的稳定性。
*   **⚡ 性能优化 - 心跳无状态化 ([PR #2430](https://github.com/HKUDS/nanobot/pull/2430))**
    *   修复了心跳任务导致 Token 消耗巨大的问题（关联 Issue #2375），将心跳机制改为默认无状态，避免历史日志堆积导致的上下文爆炸。
*   **🛠️ 功能增强 - Endpoint Channel ([PR #1861](https://github.com/HKUDS/nanobot/pull/1861))**
    *   增加了兼容 OpenAI API 格式的 Endpoint Channel，允许外部应用更方便地接入 NanoBot。

## 4. 社区热点
今日社区讨论主要集中在安全漏洞与核心机制缺陷上：

1.  **🚨 供应链安全危机 ([Issue #2439](https://github.com/HKUDS/nanobot/issues/2439) & [Issue #2443](https://github.com/HKUDS/nanobot/issues/2443))**
    *   **热度**：合计 9 条评论，2 个点赞。
    *   **分析**：用户发现通过 `uv` 安装的 `nanobot-ai` 包中包含窃取凭证的恶意代码。这是今日最紧急的事件，直接促使了 PR #2448 的提出。社区对此表示极度担忧，要求官方尽快给出安全通告和清洗方案。
2.  **💸 心跳机制导致巨额 Token 消耗 ([Issue #2375](https://github.com/HKUDS/nanobot/issues/2375))**
    *   **热度**：9 条评论。
    *   **分析**：用户反馈设定每 30 分钟检查邮件的任务后，`heartbeat.jsonl` 累积了大量日志，导致单次调用消耗 56 万 Token。这反映出当前持久化历史记录机制在高频任务下的不适用性。
3.  **🤖 模型死循环问题 ([Issue #2298](https://github.com/HKUDS/nanobot/issues/2298))**
    *   **热度**：3 条评论。
    *   **分析**：在使用小参数模型（本地模型）时，Agent 容易陷入无限重复调用工具的循环。用户呼吁增加重试次数限制或相似度检测机制。

## 5. Bug 与稳定性
今日报告了多个影响使用的严重 Bug，按优先级排序：

*   **🔴 Critical - 恶意代码植入 ([Issue #2439](https://github.com/HKUDS/nanobot/issues/2439))**
    *   **现状**：依赖包 `litellm` 被发现包含凭证窃取代码。
    *   **进展**：已有修复 PR ([#2448](https://github.com/HKUDS/nanobot/pull/2448)) 等待合并。
*   **🟠 High - Cron 提醒被静默丢弃 ([Issue #2369](https://github.com/HKUDS/nanobot/issues/2369))**
    *   **现状**：调度器触发的提醒被评估器误判为“不可操作”而抑制，导致用户收不到通知。
    *   **进展**：已有修复 PR ([#2449](https://github.com/HKUDS/nanobot/pull/2449))。
*   **🟠 High - 大日志导致请求崩溃 ([Issue #2437](https://github.com/HKUDS/nanobot/issues/2437))**
    *   **现状**：读取本地大日志文件时，内存中的消息体过大，导致 LLM 请求失败。
    *   **进展**：尚在讨论中，需优化上下文截断策略。
*   **🟡 Medium - MiniMax API 兼容性问题 ([Issue #2373](https://github.com/HKUDS/nanobot/issues/2373))**
    *   **现状**：使用 MiniMax 时报错 `invalid function arguments`，疑似工具调用格式不兼容。

## 6. 功能请求与路线图信号
从开放的 PR 和 Issue 中可以看出项目未来的迭代方向：

*   **长期记忆能力**：[PR #2183](https://github.com/HKUDS/nanobot/pull/2183) 正在集成 Honcho 以实现可选的长期记忆功能，解决 Agent 无法记住长期上下文的问题。
*   **多模态支持增强**：
    *   [PR #2438](https://github.com/HKUDS/nanobot/pull/2438) 提议处理 MCP 工具返回的图像内容（如图表）。
    *   [PR #2324](https://github.com/HKUDS/nanobot/pull/2324) 旨在为 QQ 和企业微信渠道增加完整的图片/文件收发支持。
*   **语音处理优化**：[Issue #2421](https://github.com/HKUDS/nanobot/issues/2421) 建议为 Groq 转录指定语言以提高准确性。
*   **自主行为持续化**：[Issue #2442](https://github.com/HKUDS/nanobot/issues/2442) 用户希望 Agent 能在用户睡觉时自主持续执行任务（如安装技能），这涉及到 Agent 自主性边界的探讨。

## 7. 用户反馈摘要
*   **痛点**：Token 消耗不可控（心跳日志堆积）、供应链安全信任危机、本地/小模型容易陷入死循环。
*   **场景**：用户尝试将 NanoBot 接入企业微信/飞书进行办公自动化（读邮件、日程提醒），并尝试结合本地模型降低成本。
*   **满意度**：尽管存在严重安全漏洞，用户对 NanoBot 的潜力仍持积极态度（如 Issue #1358 中用户称赞其在 Docker 中运行 Whisper 的表现），但对稳定性和安全性表达了强烈不满。

## 8. 待处理积压
*   **长期未决 Issue**：
    *   [Issue #144](https://github.com/HKUDS/nanobot/issues/144)：Gemini 模型配置必须强依赖 `gemini_api_key`，导致无法正常走 OpenRouter 代理，自 2 月初至今未修复。
    *   [Issue #1358](https://github.com/HKUDS/nanobot/issues/1358)：Docker 环境下 OpenAI Codex 认证错误，长期未解决。
*   **巨型 PR 积压**：
    *   [PR #1650](https://github.com/HKUDS/nanobot/pull/1650) (Gateway Web UI) 和 [PR #2183](https://github.com/HKUDS/nanobot/pull/2183) (长期记忆) 已经开启较长时间，建议维护者优先 Review 或设置里程碑，以避免功能积压。

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 (2026-03-25)

**分析师**：AI Open Source Analyst
**数据源**：github.com/sipeed/picoclaw

---

## 1. 今日速览
PicoClaw 项目今日保持**极高的活跃度**，呈现出功能大迭代与架构重构并行的态势。
- **开发端**：过去 24 小时内共有 **69 个 PR 更新**，其中 45 个已合并/关闭，合并率较高，显示维护者正在积极清理积压代码并推进新功能。
- **生态端**：社区贡献了 **18 个 Issue 更新**，不仅报告了具体的配置 Bug，还提出了高质量的架构改进提案（如生物启发式记忆系统）。
- **核心进展**：今日重心明显向**语音交互（TTS/ASR）**和**企业微信（WeCom）全功能支持**倾斜，同时修复了数个影响用户体验的 WebUI 和配置持久化问题。
- **健康度**：项目迭代速度极快（Nightly 版本每日构建），但也引入了部分不稳定性（如 WebUI 配置丢失），需关注版本回归测试。

## 2. 版本发布
今日发布了 **`nightly: Nightly Build` (v0.2.3-nightly.20260324.4d7a629b)**。
- **性质**：自动化的每夜构建版本。
- **警告**：官方提示此版本可能不稳定，仅供测试尝鲜，生产环境部署需谨慎。
- **变更范围**：涵盖了截至 `4d7a629b` 提交的所有代码，主要包含了今日合并的企业微信重构和配置修复补丁。
- **链接**：[Releases Page](https://github.com/sipeed/picoclaw/releases)

## 3. 项目进展
今日合并的 PR 极大地增强了项目的**连接能力**和**配置健壮性**：

- **企业微信 重构与统一**：
    - PR [#1955](https://github.com/sipeed/picoclaw/pull/1955) 与 [#1408](https://github.com/sipeed/picoclaw/pull/1408) 彻底重构了 WeCom 支持。废弃了旧的分离式实现，统一为基于官方 AI Bot WebSocket API 的单一通道，支持 CLI 扫码登录、流式输出及媒体传输。这标志着 PicoClaw 在国内企业级 IM 集成方面迈出了关键一步。

- **配置持久化与安全性修复**：
    - PR [#1902](https://github.com/sipeed/picoclaw/pull/1902) 修复了“占位符消息”设置关闭后无法保存的严重体验问题。
    - PR [#1929](https://github.com/sipeed/picoclaw/pull/1929) 修复了 Web 启动器在验证配置时的安全凭据逻辑错误。
    - PR [#1967](https://github.com/sipeed/picoclaw/pull/1967) 为 Web 界面增加了认证机制，防止 LLM 绕过沙箱调用本地 API，显著提升了安全性。

- **工具链优化**：
    - PR [#1977](https://github.com/sipeed/picoclaw/pull/1977) 修复了多 API Key 场景下虚拟模型被错误持久化的问题，优化了模型管理逻辑。

## 4. 社区热点
今日社区讨论的焦点集中在**多模态能力扩展**与**系统稳定性**：

1.  **语音交互架构设计** ([#1648](https://github.com/sipeed/picoclaw/issues/1648))
    - **热度**：👍 0 | 评论 22
    - **分析**：虽然点赞数不高，但评论数极高，说明核心贡献者正在进行深度的技术方案对齐。该 Issue 旨在为 PicoClaw 增加 TTS/ASR 支持，已有对应 PR (#1939) 提交，预示着 PicoClaw 将从纯文本机器人向语音助手进化。

2.  **配置丢失严重 Bug** ([#1941](https://github.com/sipeed/picoclaw/issues/1941))
    - **热度**：👍 1 | 评论 11
    - **分析**：用户报告在 Telegram 开启时配置被清空。这类数据丢失问题通常是用户最敏感的痛点，引发了大量关于环境配置和复现步骤的讨论。

3.  **Agent 记忆系统提案** ([#1919](https://github.com/sipeed/picoclaw/issues/1919))
    - **热度**：评论 3
    - **分析**：用户 `liuy` 提出了 "Seahorse"（海马体）记忆系统架构，旨在模仿人类大脑的记忆巩固机制。这是一个高质量的 Feature Request，反映了高级用户对 Agent 长期记忆能力的迫切需求。

## 5. Bug 与稳定性
今日报告的 Bug 主要集中在配置管理和特定 Channel 的异常行为：

- **🔥 严重 - 配置被清空**
    - Issue: [#1941](https://github.com/sipeed/picoclaw/issues/1941)
    - 状态：Open
    - 描述：启用 Telegram 频道导致 PicoClaw 配置被擦除。
    - 修复进度：尚无明确 Fix PR，需高度关注。

- **🔶 中等 - Cron 任务静默丢弃响应**
    - Issue: [#1058](https://github.com/sipeed/picoclaw/issues/1058)
    - 状态：Open
    - 描述：当 `deliver=false` 时，LLM 处理完 Cron 任务后的响应被静默丢弃，用户无法感知执行结果。
    - 修复进度：问题已定位，等待修复。

- **🔶 中等 - WebUI 自定义端口连接失败**
    - Issue: [#1737](https://github.com/sipeed/picoclaw/issues/1737)
    - 状态：Open (已有 PR)
    - 描述：使用 Docker 映射非标准端口时，WebUI 聊天输入框禁用。
    - 修复进度：PR [#1957](https://github.com/sipeed/picoclaw/pull/1957) 已提交，正在修复 WebSocket 端口检测逻辑。

- **🔹 轻微 - Agent 心跳干扰对话**
    - Issue: [#1824](https://github.com/sipeed/picoclaw/issues/1824)
    - 状态：Closed (已有 PR)
    - 描述：Agent 在重启后执行心跳任务时，会打断当前的用户对话。
    - 修复进度：PR [#1980](https://github.com/sipeed/picoclaw/pull/1980) 提出了在活跃对话期间跳过心跳的修复方案。

## 6. 功能请求与路线图信号
- **🚀 高优先级：语音支持**
    - Issue [#1648](https://github.com/sipeed/picoclaw/issues/1648) 与 PR [#1939](https://github.com/sipeed/picoclaw/pull/1939) 形成了联动。PR 已经实现了 Discord/Telegram/WeChat 的语音收发。**预计下个版本将正式支持语音交互**。

- **🚀 高优先级：WebUI 增强**
    - Issue [#1950](https://github.com/sipeed/picoclaw/issues/1950) 请求 Web Chat 支持流式输出。
    - Issue [#1973](https://github.com/sipeed/picoclaw/issues/1973) 请求工具/配置修改后的“重启提示”。目前 PR [#1978](https://github.com/sipeed/picoclaw/pull/1978) 正在实现统一的重启检测机制。

- **🔮 探索性：高级记忆系统**
    - Issue [#1919](https://github.com/sipeed/picoclaw/issues/1919) 提出的 "Seahorse" 记忆系统目前处于提案阶段，尚未有对应代码实现，代表了社区对 Agent 智能化深度的期望。

## 7. 用户反馈摘要
从评论和 Issue 描述中提炼出以下用户画像与痛点：
- **部署环境多样化**：用户不仅在 x86 服务器上部署，还在 Termux (Android)、NAS (通过 Docker) 等边缘设备上运行 PicoClaw ([#1936](https://github.com/sipeed/picoclaw/issues/1936), [#1946](https://github.com/sipeed/picoclaw/issues/1946))。
- **对 WebUI 依赖加深**：用户越来越依赖 Web 启动器进行配置，对 WebUI 的 Bug（如端口检测、配置保存失败）容忍度低。
- **对 Tool 使用有深度需求**：有用户指出 ReadFileTool 基于字节的分页对 LLM 不友好，建议改为基于行 ([#1974](https://github.com/sipeed/picoclaw/issues/1974))，说明有高级用户正在深度使用 Agent 的工具链处理复杂任务。

## 8. 待处理积压
- **⚠️ 需关注：配置擦除问题** ([#1941](https://github.com/sipeed/picoclaw/issues/1941))
  - 该 Issue 影响极其恶劣，目前仍为 Open 状态，建议维护者优先排查是否与最近的 WeCom 或 WebUI 安全更新有关。

- **⚠️ 需关注：模型 API Key 配置错误** ([#1901](https://github.com/sipeed/picoclaw/issues/1901))
  - 用户反馈配置了 API Key 仍报错 `no API key configured`，可能涉及配置加载顺序或环境变量读取的回归问题。

---
*以上内容基于 GitHub 数据自动生成与 AI 分析，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 (2026-03-25)

**分析师摘要**：NanoClaw 今日维持高强度的开发迭代节奏，虽然无正式版本发布，但社区贡献呈井喷态势。主要精力集中在**多模型后端支持**、**持久化记忆集成**以及**企业级安全加固**三个方向。

---

## 1. 今日速览

项目今日整体状态**高度活跃**，正处于功能快速扩张与架构解耦的关键阶段。
*   **贡献度飙升**：过去24小时内 PR 更新高达 50 条（其中 37 条待合并），显示出社区极强的提交意愿。
*   **架构演进**：多个 PR（#1351, #1163）试图打破对 Claude Code 的单一依赖，引入 GitHub Copilot 和 OpenCode 支持，标志着项目正向“多模型路由平台”转型。
*   **稳定性隐忧**：自动化工作流检测到 `skill/apple-container` 和 `skill/compact` 分支存在持续的合并冲突（Issue #1404-#1406），且 IPC 权限及缓存失效问题频发，表明近期核心代码变动较大，主干稳定性承压。

## 2. 版本发布

*   **无新版本发布**。鉴于当前大量 Feature PR 处于待合并状态，推测项目正处于累积重大更新的周期，预计下一个版本将包含重大的架构变更。

## 3. 项目进展

今日共有 **13 条 PR 被合并或关闭**，主要集中在修复核心稳定性与文档完善，为后续大功能合并扫清障碍：

*   **核心修复**：
    *   **PR #1397** (Closed): 修复了 Host 以 root 权限运行时 IPC 文件权限错误导致 Agent 陷入死循环的严重问题（Chmod 777 方案）。
    *   **PR #1372** (Closed): 修复了诊断提示词（Diagnostics prompt）因 Markdown 链接格式错误从未被 Agent 读取的逻辑漏洞。
    *   **PR #1401** (Open/Merged context): 修复了源码变更后 Agent-runner 缓存未刷新的问题，确保开发环境即时生效。
*   **功能调整**：
    *   **PR #1399** (Closed): 引入了原生凭证代理以替代 OneCLI 网关，简化了部署依赖。
*   **清理工作**：关闭了若干过时的文档 PR（#1030, #1031）和重复的 Issues，维护了仓库整洁。

## 4. 社区热点

*   **[多模型支持之争] Issue #1163 & PR #1351**
    *   **链接**: [Issue #1163](https://github.com/qwibitai/nanoclaw/issues/1163) | [PR #1351](https://github.com/qwibitai/nanoclaw/pull/1351)
    *   **分析**: 社区强烈呼吁支持除 Claude 以外的模型（如 OpenCode, GitHub Copilot）。PR #1351 直接提交了 GitHub Copilot SDK 的集成代码。这反映出 NanoClaw 正从“Claude 专属工具”向“通用 AI Agent 容器平台”演进，企业用户对多供应商冗余和成本控制的需求迫切。
*   **[持久化记忆] Issue #1130 & PR #1256**
    *   **链接**: [Issue #1130](https://github.com/qwibitai/nanoclaw/issues/1130) | [PR #1256](https://github.com/qwibitai/nanoclaw/pull/1256)
    *   **分析**: 关于集成 MemOS 或 Mem0-graph 的讨论热度很高。用户不满足于 Agent 的无状态特性，希望能通过 RAG 或图数据库实现长期记忆。PR #1256 提议复用现有的 Qdrant/Neo4j 基础设施，展现了良好的架构兼容性。

## 5. Bug 与稳定性

今日 Bug 报告主要集中在**多实例环境**和**权限管理**，按严重程度排序：

1.  **[HIGH] 分支合并自动化瘫痪**
    *   **Issue**: [#1404](https://github.com/qwibitai/nanoclaw/issues/1404), [#1405](https://github.com/qwibitai/nanoclaw/issues/1405), [#1406](https://github.com/qwibitai/nanoclaw/issues/1406)
    *   **详情**: `skill/apple-container` 和 `skill/compact` 分支在合并主干代码时持续失败。这表明核心 API 或依赖项发生了破坏性变更，导致 Skill 生态分支无法同步，需立即手动干预。
2.  **[MEDIUM] IPC 权限死锁**
    *   **Issue**: PR #1397 已修复。
    *   **详情**: 当 Host UID 为 0 时，容器内 Node 用户 (UID 1000) 无法删除 IPC 文件，导致消息处理完全阻塞。
3.  **[MEDIUM] 新群组初始化失败**
    *   **Issue**: [#1390](https://github.com/qwibitai/nanoclaw/issues/1390), [#1391](https://github.com/qwibitai/nanoclaw/issues/1391)
    *   **详情**: 通过任何渠道创建新群组时，系统不会生成 `CLAUDE.md` 文件，导致新 Agent 启动时没有身份指令。这是一个影响极其明显的功能性 Bug，目前尚无修复 PR 合并。

## 6. 功能请求与路线图信号

*   **Web 端支持**: Issue #1273 提出了基于 NanoClaw 自身构建的多会话 Web Channel。这表明用户对脱离 Telegram/Slack 等 IM 工具、直接通过 Web UI 使用 Agent 的需求在增加。
*   **Mattermost 集成**: Issue #1379 请求增加对企业级通讯工具 Mattermost 的支持，显示了 NanoClaw 在企业私有化部署场景下的潜力。
*   **安全沙箱**: PR #1380 集成 `agentsh` 作为安全策略引擎，响应了企业用户对 Agent 在宿主机上执行任意命令的安全顾虑。

## 7. 用户反馈摘要

*   **痛点**：用户在多群组部署时遇到严重的“身份丢失”问题（缺乏 CLAUDE.md），导致 Agent 行为不可控。
*   **场景**：大量关于“持久化记忆”和“多模型切换”的讨论，说明 NanoClaw 正在被用于长期的、复杂的自动化任务，而非简单的对话机器人。
*   **评价**：用户对 NanoClaw 的架构评价很高（"wonderful tool"），但对安装复杂度和对单一模型（Claude）的强绑定表达了改进意愿。

## 8. 待处理积压

*   **PR #967 (Improve reliability for stuck sessions)**: 该 PR 已开启两周，涉及复杂的会话恢复逻辑。鉴于今日出现的多个 IPC 和会话 Bug，建议维护者优先审查此 PR 以提升系统鲁棒性。
*   **Issue #1130 (MemOS integration)**: 虽有 PR #1256 跟进，但尚未合并。记忆功能是社区高频需求，建议作为下个版本的 Milestone 重点推进。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 (2026-03-25)

**分析师**：AI 智能体与个人 AI 助手观察员

---

## 1. 今日速览

LobsterAI 项目今日处于**高活跃度开发状态**，社区反馈热烈但面临一定的稳定性挑战。过去24小时内，项目收到了 **23 条新 Issue**，主要集中在 Windows 客户端更新、MCP 配置及钉钉集成等功能的稳定性上，且目前尚无 Issue 被关闭，积压风险上升。与此同时，开发端提交了 **50 条 PR**，重点围绕性能优化（虚拟滚动、渲染去重）、新功能扩展（GitHub Copilot 集成、文件浏览）及国际化完善展开。整体而言，项目正处于功能快速迭代与性能瓶颈攻坚的并行期，需优先解决新版本引入的安装与配置体验问题。

## 2. 版本发布

**无新版本发布**。
尽管代码库活跃，但今日未有正式 Release 打出。鉴于大量 Issue 提及 `2026.3.22` 和 `2026.3.24` 版本的问题，预计下一个版本将主要集中在修复近期引入的回归 Bug。

## 3. 项目进展

今日共有 **24 条 PR** 被合并或关闭（数据隐含自统计），显示出团队合并频率较高。以下是具有代表性的重要进展：

*   **性能优化取得突破**：
    *   **PR #764**：引入虚拟滚动机制，旨在解决长对话场景下的页面卡顿和白屏问题，显著提升用户体验。
    *   **PR #736 / #770**：通过 `React.memo` 优化 Markdown 渲染组件，解决流式输出时历史消息重复解析导致的 CPU 占用过高问题。
    *   **PR #760**：修复了 Cowork 会话创建时重复写入 SQLite 的性能损耗。
*   **核心功能增强**：
    *   **PR #707**：集成 **GitHub Copilot** 认证及 API 支持，扩展了模型供给来源。
    *   **PR #773**：新增文件浏览面板，允许用户在应用内直接浏览工作目录，增强了 Agent 的工具属性。
    *   **PR #755**：支持聊天记录导出为 Markdown/JSON，满足了用户数据迁移和归档的需求。
*   **可观测性与兼容性**：
    *   **PR #768**：集成了 Opik 可观测性工具，有助于调试 AI 调用链路。

## 4. 社区热点

今日社区讨论集中在**配置困难**与**特定渠道稳定性**上：

*   **Issue #703** (Windows 更新慢)：用户反馈 Windows 客户端更新过程超过 2 分钟，且在特定进度条卡顿，严重影响升级体验。
*   **Issue #728 / #724** (MCP 配置难)：多位用户表示 MCP 服务配置后显示 "0 tools" 或无法调用。这表明 MCP 的配置门槛较高，且错误提示不够明确，导致用户产生挫败感。
*   **Issue #751 / #691** (钉钉集成异常)：钉钉机器人在最新版本中出现连接失败 ("fetch failed") 和消息重复发送的问题，影响了企业级用户的使用。

## 5. Bug 与稳定性

今日报告的 Bug 数量较多，部分涉及核心流程，严重程度分级如下：

### 🔴 严重
*   **[OpenClaw 网关启动失败 (Issue #769)](https://github.com/netease-youdao/LobsterAI/issues/769)**：用户反馈网关未能在规定时间内启动，导致核心 Agent 功能不可用。
*   **[钉钉集成崩溃 (Issue #751)](https://github.com/netease-youdao/LobsterAI/issues/751)**：最新版本钉钉机器人返回 "fetch failed"，导致对话中断。
*   **[执行模式配置失效 (Issue #735)](https://github.com/netease-youdao/LobsterAI/issues/735)**：`executionMode` 配置项无法生效，导致无法进入沙箱模式，存在安全隐患。

### 🟠 中等
*   **[Windows 开机自启失效 (Issue #692)](https://github.com/netease-youdao/LobsterAI/issues/692)**：版本 2026.3.22 引入的回归问题。*(已有潜在修复 PR #690)*
*   **[消息重复发送 (Issue #691)](https://github.com/netease-youdao/LobsterAI/issues/691)**：钉钉机器人回复 2 条消息。*(已有潜在修复 PR #757 处理重复提交)*
*   **[阿里百炼 API 报错 (Issue #732)](https://github.com/netease-youdao/LobsterAI/issues/732)**：Coding plan 提示 Token 无效，需排查鉴权逻辑。
*   **[会话删除未停止后台任务 (Issue #734)](https://github.com/netease-youdao/LobsterAI/issues/734)**：UI 删除会话后，后台 Agent 仍在运行，可能导致资源泄露。

### 🟡 轻微
*   **[记忆管理破坏文件结构 (Issue #754)](https://github.com/netease-youdao/LobsterAI/issues/754)**：修改记忆条目后会打乱 `MEMORY.md` 的原有结构。
*   **[积分显示不一致 (Issue #761)](https://github.com/netease-youdao/LobsterAI/issues/761)**：网页端与 APP 端数据不同步。

## 6. 功能请求与路线图信号

用户侧的 Feature Request 与开发侧的 PR 动态高度契合，预示了下一阶段的路线图：

*   **语音输入 (Issue #722)**：用户强烈请求支持语音输入以减少打字负担。
*   **自动检测 API 格式 (PR #762)**：针对自定义模型配置难的问题，社区贡献了自动检测 API 格式（OpenAI/Anthropic）的功能，极大降低了配置门槛，预计将很快合入。
*   **消息删除与管理 (PR #772)**：开发侧正在重构消息删除逻辑，支持多选批量删除，响应了用户对会话管理的精细化需求。

## 7. 用户反馈摘要

通过分析今日 Issue 评论，提炼出以下用户痛点：

*   **配置体验割裂**：用户在配置 MCP 和自定义模型时经常遇到“不报错但也不工作”的情况（如 Issue #724），急需更明确的错误指引或配置向导。
*   **升级体验差**：Windows 版本升级过程中的长时间卡顿（Issue #703）让用户担忧应用是否假死。
*   **对 Agent 能力的期待与担忧**：用户希望利用 Cowork (OpenClaw) 进行复杂任务，但网关启动失败（Issue #769）和无法停止后台任务（Issue #734）的问题引发了对可控性的担忧。
*   **国际化需求**：英文版适配问题（Issue #568）和硬编码中文（PR #726）表明海外用户群体正在增长，国际化适配需加速。

## 8. 待处理积压

*   **Issue 积压风险**：今日新增 23 条 Issue，关闭 0 条。建议团队尽快对 Issue 进行 Triage（分诊），特别是关于 **MCP 配置** 和 **钉钉连接** 的问题，这类阻塞型 Bug 对口碑影响较大。
*   **PR #726 (国际化)**：该 PR 修复了多处硬编码中文，对国际化推广至关重要，建议优先 Review 合并。
*   **PR #739 (MCP 修复)**：针对 MCP 连接问题提供了 Node.js 环境检测修复，可能是解决 Issue #728/#724 的关键，建议尽快验证。

---
*以上内容基于 GitHub 项目数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

以下是基于您提供的 GitHub 数据生成的 **TinyClaw** 项目动态日报（2026-03-25）。

---

# 📊 TinyClaw (TinyAGI) 项目动态日报
**日期**: 2026-03-25  
**分析周期**: 过去 24 小时

## 1. 今日速览
TinyClaw 项目今日呈现出**极高强度的维护与迭代状态**。尽管社区侧的 Issues 讨论暂时沉寂，但核心开发团队（主要贡献者 `jlia0`）极其活跃，单日完成了 **3 个版本迭代**（v0.0.17 - v0.0.19）并合并了 **8 个关键 PR**。此次更新重点解决了消息持久化、队列稳定性及 Telegram 频道的重构，标志着项目正在经历一次深度的底层架构优化，显著提升了系统的健壮性。

---

## 2. 版本发布
今日连续发布了三个版本，主要围绕 Bug 修复与底层能力增强，无破坏性 API 变更，建议所有用户尽快升级至最新版。

### 🚀 v0.0.19 (Latest)
- **发布说明**: [GitHub Release Link](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.19)
- **核心更新**:
  - **持久化修复**: 修复了计划任务消息未写入 `agent_messages` 表的问题，确保历史记录完整 (#259)。
  - **并发控制**: 解决了 `signalDone` 在调用流中的竞态条件，防止任务过早结束或挂起 (#258)。

### 🛠 v0.0.18
- **发布说明**: [GitHub Release Link](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.18)
- **核心更新**:
  - **性能优化**: 修复了 `handleTeamResponse` 中的重复响应流问题，减少了冗余输出 (8dd7f42)。

### 🌟 v0.0.17
- **发布说明**: [GitHub Release Link](https://github.com/TinyAGI/tinyclaw/releases/tag/v0.0.17)
- **核心更新**:
  - **新功能**: 引入 `skills-manager`，支持 Agent 从仓库搜索并安装技能，实现能力的动态扩展 (#254)。
  - **架构重构**: Telegram 频道已从 `node-telegram-bot-api` 迁移至 **grammY**，提升了交互性能。

---

## 3. 项目进展
今日共处理 **8 个 PR**，全部已合并/关闭，显示出极高的开发效率。项目在**消息队列可靠性**和**前端交互体验**方面取得了实质性突破。

- **[[PR #256] feat(queue): 消息即时持久化与流式响应](https://github.com/TinyAGI/tinyagi/pull/256)**  
  ✅ **已合并**  
  > **进展**: 重大架构调整。现在用户消息在入队时即写入数据库，而非等待处理结束。消除了 Web UI 中的“消息消失”延迟，实现了无缝的乐观更新体验。

- **[[PR #254] feat(skills): 技能管理器](https://github.com/TinyAGI/tinyagi/pull/254)**  
  ✅ **已合并**  
  > **进展**: 赋予 Agent 自我扩展能力的里程碑功能。Agent 现可通过 REST API 自主安装新技能，为生态系统开放奠定基础。

- **[[PR #251] fix(queue): 子进程生命周期管理](https://github.com/TinyAGI/tinyagi/pull/251)**  
  ✅ **已合并**  
  > **进展**: 解决了队列挂起的顽疾。引入了基于结果事件的超时机制（30秒强制清理），极大提升了长期运行任务的稳定性。

- **[[PR #257] fix(channels): 主动消息 SSE 事件](https://github.com/TinyAGI/tinyagi/pull/257)**  
  ✅ **已合并**  
  > **进展**: 修复了 Telegram 等渠道无法即时接收主动推送消息的问题，确保了多端同步的实时性。

---

## 4. 社区热点
今日无新增活跃 Issues，社区讨论主要围绕刚合并的 PR 展开。核心关注点集中在 **v0.0.17 引入的 Telegram 重构**以及**新的 Skills Manager** 功能上。虽然没有显式的评论数据，但从提交频率推断，内部测试与反馈正在高频进行。

---

## 5. Bug 与稳定性
今日修复了多个影响用户体验的关键 Bug，目前看来**系统稳定性显著提升**。

| 严重程度 | 问题描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| 🔴 **高** | **队列挂起**: 子进程未干净退出导致任务卡死 | ✅ 已修复 | [PR #251](https://github.com/TinyAGI/tinyagi/pull/251) |
| 🟠 **中** | **数据丢失**: 计划任务消息未持久化到 DB | ✅ 已修复 | [PR #259](https://github.com/TinyAGI/tinyagi/pull/259) |
| 🟠 **中** | **竞态条件**: `invoke` 流程中信号处理冲突 | ✅ 已修复 | [PR #258](https://github.com/TinyAGI/tinyagi/pull/258) |
| 🟡 **低** | **UI 状态异常**: Dashboard 显示 "processing" 不准确 | ✅ 已修复 | [PR #255](https://github.com/TinyAGI/tinyagi/pull/255) |

---

## 6. 功能请求与路线图信号
- **动态能力扩展**: 通过 `skills-manager` 的引入，项目释放了从“单一功能 Agent”向“可成长型 Agent”转型的强烈信号。未来的版本可能会进一步丰富 Skill Registry 的内容。
- **多渠道重构**: Telegram 迁移至 grammY 暗示项目正在优化即时通讯层面的扩展性和底层控制力，未来可能会支持更多高级交互特性（如 inline mode 等）。

---

## 7. 用户反馈摘要
虽然过去 24 小时没有公开的 Issue 评论，但从代码变更的 Commit Message 和 PR 描述中可以提炼出以下隐含的痛点（已被开发团队捕捉并修复）：
1.  **消息延迟与丢失**: 用户曾反馈发送消息后界面刷新不及时或历史记录缺失（通过 #256 和 #259 修复）。
2.  **后台任务僵死**: 长时间运行的任务偶尔会无响应，影响 Agent 可靠性（通过 #251 修复）。
3.  **多端同步慢**: Telegram 端接收推送存在延迟（通过 #257 修复）。

---

## 8. 待处理积压
- **Issues 积压**: 过去 24 小时无新 Issue，旧 Issue 列表未显示活跃更新。建议关注是否有长期未解决的 Edge Case 报告。
- **PR 状态**: 所有近期 PR 均已处理完毕，当前待合并 PR 数量为 **0**，代码库处于非常干净的状态，随时可进行下一阶段开发。

---
*分析师注：今日数据表明 TinyClaw 正处于“修正与重构期”，虽然社区噪音较低，但底层工程质量正在快速迭代。建议关注 v0.0.19 上线后的实际运行情况。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-03-25)

**分析师**: AI Open Source Analyst
**项目**: Moltis (github.com/moltis-org/moltis)

---

## 1. 今日速览
Moltis 项目今日展现出极高的维护活跃度与强劲的开发势头。过去 24 小时内，项目合并了高达 **22 个 PR**，同时关闭了 **11 个 Issue**，显示出核心团队正在高效地收尾功能并修复积压问题。尽管没有新的版本发布，但大量的代码合并（涉及核心架构重构、Docker 支持增强、多渠道适配等）表明正在为下一个重要版本进行密集准备。社区方面，关于系统提示词上下文和内存管理的讨论热度较高，反映了用户对 AI "长期记忆" 能力的关注。

## 2. 版本发布
**无**。
虽然合并了大量代码，但过去 24 小时内未发布新的 Release 版本。鉴于合并了 `moltis-httpd` 架构重构和 Docker/Node 支持等重要变更，预计近期会有新版本 Tag 生成。

## 3. 项目进展
今日共有 **22 个 PR 被合并**，项目在基础设施、兼容性和核心功能上均有显著突破：

*   **架构解耦与重构**：
    *   PR #465 提取了独立的 `moltis-httpd` crate，将 HTTP 传输层与网关业务逻辑解耦。这是一项重要的架构优化，有利于未来 TUI（终端界面）和测试模块的轻量化依赖。
*   **Docker 与 MCP 生态支持**：
    *   PR #479 在 Docker 镜像中内置了 Node.js/npm，解决了用户在容器内运行 MCP (Model Context Protocol) 服务器的痛点。
    *   PR #422 正在推进 macOS 的发布签名与公证流程，目前状态为 OPEN，是完善桌面端分发的重要一步。
*   **模型与协议兼容性**：
    *   PR #361 增加了对 OpenAI Responses API 的 SSE 支持。
    *   PR #475 添加了 MiniMax M2.7 系列模型的支持。
*   **关键 Bug 修复**：
    *   PR #481 修复了 IPv6 绑定地址解析错误导致的崩溃问题。
    *   PR #476 优化了系统提示词，移除了 DateTime 以支持本地 LLM 的 KV Cache，显著提升推理性能。
    *   PR #484 修复了技能名称验证过于严格导致有效技能被忽略的问题。

## 4. 社区热点
今日社区讨论主要集中在 AI 的 "环境感知" 与 "记忆能力"：

*   **Issue #176 [Feature]: Add datetime to system prompt context**
    *   **热度**: 👍 1 | 评论: 14
    *   **分析**: 用户强烈希望 AI 能感知当前时间。有趣的是，PR #476 今日将 datetime 从系统提示词中**移除**（为了优化 KV Cache）。这看似矛盾，实则 PR #476 是将 datetime 移到了对话历史的末尾注入，既保留了时间感知，又解决了缓存失效问题。建议维护者在 Issue 中说明这一优化策略以消除用户疑虑。
*   **Issue #460 [Bug]: WhatsApp Integration is confusing**
    *   **热度**: 👍 3 | 评论: 0 (近期活跃)
    *   **分析**: WhatsApp 集成的易用性问题获得了最多的点赞（3个），表明用户对移动端/即时通讯渠道的需求很大，且目前的配置体验仍有改进空间。

## 5. Bug 与稳定性
今日报告了若干关键 Bug，部分已由核心贡献者 `penso` 迅速修复：

1.  **[已修复] IPv6 绑定崩溃 (Critical)**
    *   Issue #447 / PR #481
    *   **详情**: 绑定 `::` 等 IPv6 地址会导致字符串解析错误（如 `:::8080`），现已通过 `SocketAddr` 标准化修复。
2.  **[已修复] Cron 工具参数解析失败**
    *   Issue #430 / PR #480
    *   **详情**: 部分 LLM（如 Qwen3-Coder）会将参数双重序列化为字符串，导致 Cron 工具不可用。现已增加自动解析逻辑。
3.  **[已修复] 技能名称验证导致技能丢失**
    *   Issue #452 / PR #484
    *   **详情**: 包含特殊字符（如括号）的有效技能名称会被验证器拒绝，导致技能被静默忽略。现已支持 slug 作为回退。
4.  **[待处理] z.ai 开箱即用问题**
    *   Issue #414
    *   **状态**: OPEN
    *   **详情**: 用户报告 `z.ai` 无法开箱即用且手册有误。目前尚未有明确的修复 PR 关联。
5.  **[待处理] 内置工具生成无效 JSON Schema**
    *   Issue #485
    *   **状态**: OPEN (新提交)
    *   **详情**: 某些严格模式的 Provider 会拒绝内置工具生成的 JSON Schema。这是一个新报告的兼容性问题。

## 6. 功能请求与路线图信号
*   **长期记忆重构**: Issue #483 和 PR #253 指出当前的 `MEMORY.md` 存在结构性缺陷（新记忆追加在末尾，但截断从头开始），导致长期使用后新记忆丢失。虽然 PR #253 已关闭，但 Issue #483 提出了重构方案，预示着内存管理系统将迎来重大升级。
*   **Node/NPX 原生支持**: Issue #118 请求在 Docker 中支持 Node，该请求已通过 PR #479 实现。这标志着项目正式拥抱 MCP 生态，允许用户直接在 Moltis 容器内运行基于 Node.js 的模型上下文协议服务器。

## 7. 用户反馈摘要
*   **痛点：配置复杂性与迁移**:
    *   Issue #458 提到从 OpenClaw 导入配置时，原本丰富的注释配置被覆盖为仅 20 行的“裸”配置。PR #478 已修复此问题，保留了配置模板中的注释，这对新手用户非常友好。
*   **痛点：模型兼容性**:
    *   用户在使用 Qwen3-Coder 等模型时遇到工具调用参数格式错误（Issue #430），表明项目正在加强对非顶级/非标准格式输出模型的鲁棒性。
*   **场景：Docker 运行 MCP**:
    *   开发者希望在一个容器内搞定所有环境（Issue #118），不想额外部署 Node 环境。内置 Node 支持将极大降低 MCP 的部署门槛。

## 8. 待处理积压
*   **PR #422 [OPEN] fix(macos): configure release signing**: 该 PR 已开启数日，涉及 macOS 的安全签名与公证，是发布 macOS 客户端的关键阻碍，建议优先 Review。
*   **Issue #414 [OPEN] z.ai network errors**: 涉及特定后端提供商的连接问题，且评论数较多（7条），需要进一步排查是文档问题还是代码兼容性问题。

---
*数据来源: GitHub Moltis Repo Activity (2026-03-25)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 (2026-03-25)

## 1. 今日速览
CoPaw 项目今日保持**极高活跃度**，随着 **v0.2.0** 正式版本的发布，项目进入了新的迭代阶段。过去 24 小时内共有 50 条 PR 更新（33 条合并/关闭）和 50 条 Issue 更新，显示社区与开发团队正在密集处理反馈。今日重心主要集中在修复 v0.1.0 版本遗留的稳定性问题（如 Docker 挂载、多会话管理）以及推进高级特性（如模型降级、路由策略、停止指令）。虽然新版本带来了 Agent 通信协议等激动人心的新功能，但 Docker 升级后的兼容性问题成为今日用户最大的痛点。

## 2. 版本发布
### ✨ **v0.2.0 正式发布**
本次更新带来了显著的架构增强，重点强化了智能体间的通信能力。

*   **Added (新增功能)**:
    *   **Inter-Agent Communication**: 引入了 `copaw agents` 和 `copaw message` CLI 命令，支持列出智能体、向频道推送消息以及智能体间发送请求，为多智能体协作奠定基础。([PR #1959](https://github.com/agentscope-ai/CoPaw/pull/1959), [PR #2161](https://github.com/agentscope-ai/CoPaw/pull/2161))
*   **建议**: 鉴于 Issue 中反馈的 Docker 升级问题，建议用户在升级前检查数据卷挂载配置，并查阅迁移指南（如有）。

## 3. 项目进展
今日共有 **33 个 PR 被合并或关闭**，项目在功能完善和错误修复方面取得了实质性进展。

*   **🔧 核心修复与优化**:
    *   **[PR #2206]**: 移除了 `litellm` 依赖，更新 `reme-ai` 至 0.3.1.3，这可能意味着模型调用层的重构。
    *   **[PR #2186]**: 增强了 `grep` 和 `glob` 搜索工具，提升了代码库检索能力。
    *   **[PR #2217]**: 修复了 Heartbeat Cron 表达式（如 `0 6 * * *`）被判定无效的问题，恢复了标准 Cron 调度功能。
    *   **[PR #2205]**: 修复了 `minimax-cn` 提供商在 Token Plan API Key 下的连接测试失败问题。

*   **🚀 新功能与体验改进**:
    *   **[PR #2189]**: 引入了内置的 **QA Agent**，能够阅读源码和文档来回答关于 CoPaw 的问题，显著提升用户自助排查能力。
    *   **[PR #1913]**: 实现了跨所有频道的统一 `/stop` 命令，解决了用户无法中断长时运行或死循环任务的痛点。

## 4. 社区热点
今日社区讨论最热烈的问题集中在**升级后的数据丢失**和**多端/多模型兼容性**上。

1.  **🔥 Docker 升级导致数据不可见 ([Issue #2097](https://github.com/agentscope-ai/CoPaw/Issue/2097))**
    *   **热度**: 12 条评论
    *   **分析**: 大量 Docker 用户反馈从 v0.07 升级到 v0.1.0 后，控制面板中 Skills 和 Workspace 文件消失。尽管 `docker volume` 中数据存在，但应用未能正确读取。这是一个阻碍级（Blocker）问题，严重影响老用户升级体验。

2.  **💬 微信 ClawBot 频道支持请求 ([Issue #2043](https://github.com/agentscope-ai/CoPaw/Issue/2043))**
    *   **热度**: 9 👍
    *   **分析**: 用户强烈希望支持微信 3 月 22 日发布的 "ClawBot" 频道，这反映了 CoPaw 用户对紧跟国内主流平台（微信）更新的强需求。

3.  **💾 上下文压缩导致任务中断 ([Issue #2047](https://github.com/agentscope-ai/CoPaw/Issue/2047) & [Issue #1974](https://github.com/agentscope-ai/CoPaw/Issue/1974))**
    *   **热度**: 8 条评论 / 4 条评论
    *   **分析**: 用户抱怨自动触发的 Memory Compaction（内存压缩）会打断正在进行的任务，且缺乏上下文恢复机制，导致智能体"失忆"。这暴露了当前长上下文管理策略在连续任务场景下的不足。

## 5. Bug 与稳定性
今日报告的 Bug 主要围绕 v0.1.0/v0.2.0 的稳定性，部分已有修复方案。

| 严重程度 | 问题描述 | 状态/PR | 链接 |
| :--- | :--- | :--- | :--- |
| **🔴 Critical** | **Docker 部署升级后 Skills/Workspace 文件不显示** (v0.07 -> v0.1.0) | OPEN (需紧急关注) | [#2097](https://github.com/agentscope-ai/CoPaw/Issue/2097) |
| **🔴 Critical** | **CoPaw 进程闲置时 CPU 占用 100%** (v0.2.0 Busy-polling) | OPEN | [#2218](https://github.com/agentscope-ai/CoPaw/Issue/2218) |
| **🟠 High** | **钉钉群聊会话 ID 混乱**，多用户共享同一会话，UI 显示错乱 | OPEN | [#2175](https://github.com/agentscope-ai/CoPaw/Issue/2175) |
| **🟠 High** | **企业微信多用户/群聊消息不响应**，仅创建者可用 | OPEN | [#2152](https://github.com/agentscope-ai/CoPaw/Issue/2152) |
| **🟠 High** | **审批超时导致任务无限等待**，未弹出审批提示 | OPEN | [#2193](https://github.com/agentscope-ai/CoPaw/Issue/2193) |
| **🟡 Medium** | **MiniMax Token Plan API Key 连接失败** | **FIXED** in PR [#2205](https://github.com/agentscope-ai/CoPaw/pull/2205) | [#2195](https://github.com/agentscope-ai/CoPaw/Issue/2195) |
| **🟡 Medium** | **Heartbeat Cron 表达式无效**，降级为默认 30 分钟 | **FIXED** in PR [#2217](https://github.com/agentscope-ai/CoPaw/pull/2217) | [#2207](https://github.com/agentscope-ai/CoPaw/Issue/2207) |

## 6. 功能请求与路线图信号
结合用户诉求与开发动向，以下功能极有可能在近期纳入正式版本：

1.  **微信 ClawBot 支持**: 社区呼声极高 (👍9)，且已有开发者提交微信相关 PR ([PR #2123](https://github.com/agentscope-ai/CoPaw/pull/2123))，预计很快会有官方或第三方适配。
2.  **模型自动降级**: [PR #2199](https://github.com/agentscope-ai/CoPaw/pull/2199) 提出的 `FallbackChatModel` 正是解决用户频繁遇到的模型超时/限流问题的关键，这与 Issue 中关于模型稳定性的抱怨高度契合。
3.  **自学习/记忆增强**: 针对用户吐槽 "Agent 记吃不记打" ([Issue #2166](https://github.com/agentscope-ai/CoPaw/Issue/2166))，社区正在讨论 Context Recovery ([Issue #2047](https://github.com/agentscope-ai/CoPaw/Issue/2047)) 和内置 Skill 追踪 ([Issue #2216](https://github.com/agentscope-ai/CoPaw/Issue/2216))，这将是下一阶段的优化重点。

## 7. 用户反馈摘要
*   **痛点**: **"升级像渡劫"**。Docker 升级后的数据丢失问题让用户感到不安。此外，**"长任务中断"**（因压缩或审批超时）严重破坏了沉浸式体验，用户希望 Agent 能更"皮实"地处理长流程。
*   **场景**: 用户多将 CoPaw 用于**微信/钉钉办公自动化**，对群聊消息识别、定时任务推送的稳定性要求极高。
*   **满意点**: 对 **QA Agent** 和 **CLI 控制增强** (`copaw message`) 表示欢迎，认为这提升了工具的可控性和专业性。

## 8. 待处理积压
*   **[Issue #2097] Docker 升级数据丢失**: **最紧急**。作为 v0.1.0 的阻碍性问题，目前尚无官方 Fix PR，建议维护者优先排查挂载路径逻辑变更。
*   **[PR #2219] 统一技能管理**: 提议允许为新建 Agent 自定义现有技能，目前处于 Open 状态，是一个高价值的用户体验改进 PR。
*   **[PR #2144] 路由策略优化**: 涉及本地/云端模型分流，虽然处于 Open 状态，但对于混合部署场景至关重要。

---
**分析师结语**: CoPaw 在 v0.2.0 迈出了多智能体通信的关键一步，但**稳定性**（特别是升级兼容性和资源占用）是目前最大的短板。建议团队在推进新功能前，优先解决 Docker 挂载和 CPU 空转问题，以稳固开发者信心。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

以下是 ZeptoClaw 项目 2026-03-25 的动态日报：

---

# 📊 ZeptoClaw 项目动态日报 (2026-03-25)

## 1. 今日速览
ZeptoClaw 今日保持**高强度的迭代节奏**，24小时内更新了 **2 个版本** (v0.8.1, v0.8.2)，主要集中在修复核心工具 的稳定性与依赖项维护。**PR 活跃度极高**，共更新 29 条，其中 21 条已合并/关闭，显示维护者对社区贡献响应迅速。目前仍有 **8 个 PR 待合并**，其中包括 ACP 协议支持和 Telegram 图片支持等重要功能，项目正处于功能快速扩展与稳定性收敛的并行期。

## 2. 版本发布
今日连续发布了两个版本，建议所有用户尽快升级至 **v0.8.2** 以获得最佳稳定性。

### v0.8.2 (最新版)
- **主要更新**：依赖项维护版本。
- **Changes**:
  - `chore(deps)`: 升级 `Swatinem/rust-cache` 至 2.9.1 ([#412](https://github.com/qhkm/zeptoclaw/pull/412))
  - `chore(deps)`: 升级 `docker/metadata-action` 至 6.0.0 ([#382](https://github.com/qhkm/zeptoclaw/pull/382))
- **链接**: [v0.8.2 Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.2)

### v0.8.1
- **主要更新**：核心工具修复与安全性增强。
- **Changes**:
  - `fix(lib)`: 加固嵌入式 ZeptoAgent 工具执行的安全性 ([#402](https://github.com/qhkm/zeptoclaw/pull/402))
  - `feat(tools)`: 修复编辑文件的模糊匹配 及输出截断问题 ([#398](https://github.com/qhkm/zeptoclaw/pull/398))
  - Telegram 频道改进与安全性提升。
- **链接**: [v0.8.1 Release](https://github.com/qhkm/zeptoclaw/releases/tag/v0.8.1)

## 3. 项目进展
今日项目整体向后端稳定性和多模态支持迈进了一大步，共有 **21 个 PR 被合并**。

- **🤖 Telegram 体验优化**：合并了长消息自动分割功能 ([#409](https://github.com/qhkm/zeptoclaw/pull/409))，解决了 LLM 回复超过 Telegram 4096字节限制导致静默失败的问题，显著提升了聊天流畅度。
- **⚙️ 核心依赖升级**：合并了大量 Dependabot PR，涵盖 Rust crates (如 `rustyline` v17.0.2, `bcrypt` v0.19.0) 和 GitHub Actions，确保了构建环境的安全与现代化。

## 4. 社区热点
今日的关注点集中在**多模态交互能力**和**社区支持渠道**上。

- **[PR #420] feat(telegram): add photo and image document support**
  - **作者**: stuartbowness
  - **状态**: Open
  - **分析**: 这是今日最受期待的功能 PR。目前 Telegram 发送图片会被静默丢弃，该 PR 旨在打通图片输入管道，使 Agent 具备"看"的能力。
  - **链接**: [PR #420](https://github.com/qhkm/zeptoclaw/pull/420)

- **[PR #356] feat(channels): ACP (Agent Client Protocol) stdio + HTTP implementation**
  - **作者**: starsy
  - **状态**: Open
  - **分析**: 实现了 ACP 协议的支持，意味着 ZeptoClaw 将能作为子进程或 HTTP 服务被其他 Agent 框架调度，生态兼容性重大突破。
  - **链接**: [PR #356](https://github.com/qhkm/zeptoclaw/pull/356)

- **[Issue #397] [feat] Do we have a community?**
  - **状态**: Closed
  - **分析**: 用户反馈配置 Qwen 模型困难，寻求社区帮助。维护者关闭此 Issue 可能是因为引导用户转向其他沟通渠道（如 Telegram 或 Discord），但也反映出**新手引导和文档**仍需加强。
  - **链接**: [Issue #397](https://github.com/qhkm/zeptoclaw/issues/397)

## 5. Bug 与稳定性
今日报告了多个关键 Bug，部分已由维护者迅速修复或提出 PR。

| 优先级 | 描述 | 状态 | 关联 PR |
| :--- | :--- | :--- | :--- |
| **P1-Critical** | **Model 路由回归**: OpenRouter 风格的路由 (`anthropic/...`) 出现启动警告和中断。 | Open | [#417](https://github.com/qhkm/zeptoclaw/pull/417) (Fix Ready) |
| **P1-Critical** | **Edit Tool 挂起**: Fuzzy matching 在处理空白字符时可能导致死循环 (已在 v0.8.1 修复部分)。 | Closed | - |
| **High** | **Telegram 并发竞态**: 连续发送消息时，打字指示符 会提前消失。 | Open | [#418](https://github.com/qhkm/zeptoclaw/pull/418) (Fix Open) |
| **High** | **Telegram 图片静默丢弃**: 处理非文本消息时崩溃或无响应。 | Open | [#420](https://github.com/qhkm/zeptoclaw/pull/420) (Feat/Fix Open) |

- **详细分析**:
  - **#416 (Provider Regressions)**: 这是一个严重的回归问题，影响使用带前缀模型 ID 的用户。维护者 qhkm 已在 PR #417 中提交了修复，等待合并。
  - **#415 (Typing Indicator)**: 涉及并发控制问题，PR #418 提出使用引用计数和 `DashMap::remove_if` 来解决 TOCTOU 竞态条件，技术方案成熟。

## 6. 功能请求与路线图信号
- **多模态支持**: [#419](https://github.com/qhkm/zeptoclaw/issues/419) 和 PR [#420](https://github.com/qhkm/zeptoclaw/pull/420) 表明，**Telegram 端的图像理解**将是下一个版本的重点功能。
- **开发者体验**: PR [#421](https://github.com/qhkm/zeptoclaw/pull/421) 建议添加 Claude Code 的 PR 指南，说明项目正致力于规范化 AI 辅助编程的工作流，降低贡献门槛。
- **协议支持**: ACP 协议 ([#356](https://github.com/qhkm/zeptoclaw/pull/356)) 若合并，将确立 ZeptoClaw 作为可被其他客户端调用的标准 Agent 后端的地位。

## 7. 用户反馈摘要
- **痛点**: **配置复杂**。用户 `PedroRosalba` 在 Issue #397 中提到配置 Qwen 模型困难，缺乏指引。
- **痛点**: **静默失败**。Telegram 用户反馈发送图片无反应 (Issue #419) 和长消息无报错截断 (PR #409 已修复)，说明用户对**明确的错误反馈**有强烈需求。
- **场景**: 用户尝试将 ZeptoClaw 与非默认模型（如 Qwen）结合使用，说明项目在**模型兼容性**方面有实际落地需求。

## 8. 待处理积压
以下重要 PR 处于 Open 状态，建议维护者优先 Review：

1.  **[PR #356] ACP Protocol Support**: 这是一个大型功能 PR，涉及架构扩展，积压时间较长，建议尽快评估合并以避免冲突。
    - 链接: [PR #356](https://github.com/qhkm/zeptoclaw/pull/356)
2.  **[PR #417] Fix Provider/Tool Regressions**: 修复了 P1 级别的 Bug，建议尽快合并并发布 v0.8.3 以修复路由回归问题。
    - 链接: [PR #417](https://github.com/qhkm/zeptoclaw/pull/417)
3.  **[PR #414] Discord Text Attachment Fix**: 修复 Discord 文本附件处理，补充了多渠道支持。
    - 链接: [PR #414](https://github.com/qhkm/zeptoclaw/pull/414)

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw 项目动态日报 (2026-03-25)

> 数据来源：github.com/gaoyangz77/easyclaw | 分析周期：过去 24 小时

## 1. 今日速览
EasyClaw 项目今日整体呈现**高产出、低交互**的“静默开发”状态。虽然过去 24 小时内没有新的 Issue 提交和新版本 Release 发布，但维护者集中关闭了 3 个关键的用户界面（UI）重构 PR。这表明项目正处于**代码整合阶段**，重点在于优化前端交互体验（账户、认证、主题），而非功能扩展。社区活跃度主要集中在代码合并上，缺乏用户讨论，暗示此次更新可能由核心团队主导推进。

## 2. 版本发布
**无新版本发布**。
尽管有 3 个 PR 被关闭，但尚未打包成新的 Release。预计这些 UI 改进将包含在下一个即将发布的版本中。

## 3. 项目进展
今日共有 **3 个 PR 被关闭**，主要集中在 **UI 迁移、组件重构与账户系统优化**。这些变更显著提升了前端代码的模块化程度和视觉一致性。

*   **UI 架构重构与主题分离** (PR [#20](https://github.com/gaoyangz77/rivonclaw/pull/20))
    *   **内容**：将侧边栏底部操作按钮提取为独立的 `<BottomActions>` 组件，并将所有内联 SVG 整合至 `icons.tsx`。
    *   **进展**：确立了 UI 组件的标准化规范，为后续图标管理和主题切换提供了坚实基础。
*   **账户交互体验重设计** (PR [#24](https://github.com/gaoyangz77/rivonclaw/pull/24))
    *   **内容**：移除了传统的 `/account` 导航页面，改为点击头像弹出的 Popover（气泡卡片）。支持已登录（显示头像、邮箱、计划）和未登录（欢迎提示）两种状态。
    *   **进展**：简化了用户账户查看流程，使界面更加轻量化，符合现代 SaaS 应用交互习惯。
*   **认证模态框与账户页面现代化** (PR [#23](https://github.com/gaoyangz77/rivonclaw/pull/23))
    *   **内容**：重构了登录/注册模态框（新增药丸状切换器、密码可见性切换、强度条、验证码行）和账户页面（分卡布局）。
    *   **进展**：大幅提升了认证流程的安全性与视觉质感，解决了旧版 UI 可能存在的交互痛点。

## 4. 社区热点
**今日无活跃讨论**。
过去 24 小时内，Issues 和 PR 区均无新评论或用户反馈。这通常意味着：
1.  当前版本（旧版）相对稳定，无紧急报错。
2.  用户群体可能正在等待包含今日合并 PR 内容的新版本发布。
3.  项目可能处于由核心开发者主导的封闭开发周期。

## 5. Bug 与稳定性
**今日无新增 Bug 报告**。
*   **稳定性评估**：由于今日关闭的 PR 均为 UI 重构类，且无新 Issue 报错，推测项目后端逻辑目前保持稳定。
*   **潜在风险**：PR #24 移除了 `/account` 导航，若用户习惯于旧的路由访问方式，可能会在下一版本发布后感到困惑（属于 Breaking Change 体验），建议在 Release Note 中予以说明。

## 6. 功能请求与路线图信号
虽然无新增功能请求 Issues，但从今日合并的 PR 可以反推出项目的**隐形路线图**：
*   **信号 1：组件化与设计系统** (来自 PR #20)
    *   项目正在建立内部设计系统，未来可能会继续提取更多通用组件，图标管理将更加规范。
*   **信号 2：用户体验（UX）精细化** (来自 PR #23, #24)
    *   加强的密码强度条和验证码行表明项目正在加强**安全性**与**合规性**。
    *   Popover 账户菜单暗示项目倾向于**单页应用（SPA）**式的流畅体验，减少页面跳转。

## 7. 用户反馈摘要
**无数据**。
由于今日无 Issue 评论，暂无法提炼用户痛点或满意点。

## 8. 待处理积压
*   **新版本发布**：随着 3 个重要 UI PR 的关闭，**下一个 Release 版本已积压**。建议维护者尽快发布新版本以验证 UI 重构后的用户反馈。
*   **文档更新**：PR #20 对图标和组件进行了重构，PR #24 改变了账户交互路径，相关的前端文档或用户指南可能需要同步更新（目前未见相关 Docs PR）。

---
**分析师点评**：EasyClaw 今日处于“暴风雨前的宁静”，虽然没有社区喧嚣，但代码库发生了实质性的 UI 变革。接下来的重点应关注新版本发布后的用户适应性反馈。

</details>