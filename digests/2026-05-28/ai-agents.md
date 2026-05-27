# OpenClaw 生态日报 2026-05-28

> Issues: 361 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-27 22:29 UTC

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

以下是为您生成的 2026-05-28 OpenClaw 项目动态日报：

# 📊 OpenClaw 项目动态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时，OpenClaw 项目保持了**极高的活跃度与强劲的社区动力**。项目共处理了 **361 条 Issue 更新**（其中 208 条被关闭，解决率达 57.6%），以及 **500 条 PR 更新**（295 条待合并，205 条已合并/关闭）。伴随 `v2026.5.26` 正式版与 Beta 版的发布，核心团队集中精力攻坚了 Gateway 启动性能、事件循环阻塞等底层架构问题。整体来看，项目在快速迭代的同时，正在积极消化由新版本引入的 Channel 路由和 Plugin 状态缓存回归问题，系统健康度与社区响应率维持在优秀水平。

## 2. 版本发布
今日追踪到 **2 个最新版本发布**，核心重点在于性能与底层优化：

- **[v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)**
  - **核心亮点**：极大地提升了 Gateway 启动和响应速度。启动过程现在避免了重复的插件、通道、会话、使用成本和计划任务扫描；将用户可见的回复与较慢的后台工作分离开来；优化了 Gateway 运行时/会话缓存，减少了高负载下的性能损耗。
- **[v2026.5.26-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2)**
  - 同步包含上述正式版的底层架构优化。

## 3. 项目进展
今日共有 205 个 PR 被合并或关闭，显著推进了系统稳定性与各渠道兼容性：
- **架构与性能优化**：PR [#86281](https://github.com/openclaw/openclaw/pull/86281) 将 Provider 认证预热移出主线程，有效缓解了事件循环阻塞问题；PR [#87399 (回port #87428)](https://github.com/openclaw/openclaw/pull/87428) 清理了 Codex app-server 的启动逻辑。
- **渠道修复**：PR [#87432](https://github.com/openclaw/openclaw/pull/87432) 及其 [回port #87435](https://github.com/openclaw/openclaw/pull/87435) 修复了 Web 搜索的 Provider 运行时配置问题；PR [#87361](https://github.com/openclaw/openclaw/pull/87361) 改进了 `openclaw doctor` 重启后的提示可操作性。
- **工作流改进**：PR [#87437](https://github.com/openclaw/openclaw/pull/87437) 和 [#87425](https://github.com/openclaw/openclaw/pull/87425) 等完善了 Mantis 自动化验证和 Telegram 工具回复的链路。

## 4. 社区热点
今日讨论最热烈的问题集中在**新版回归**、**底层会话状态竞争**以及**大模型生态更新**：
- **[#87331](https://github.com/openclaw/openclaw/issues/87331)** (👍 8, 评论 11)：5.26 版本严重回归，升级后 Codex 工具调用间歇性失败并提示 `Native hook relay unavailable`。
- **[#86702](https://github.com/openclaw/openclaw/issues/86702)** (评论 13)：核心组件 `MemoryIndexManager.close()` 在同步期间出现严重的资源竞争关闭问题。
- **[#80380](https://github.com/openclaw/openclaw/issues/80380)** (评论 13，👍 4)：社区呼吁跟进 Google 最新动作，将模型切换至正式版 `gemini-3.1-flash-lite`。
- **[#86599](https://github.com/openclaw/openclaw/issues/86599)** (评论 13)：Windows 平台上 Beta 版本地模型调用阻塞了 Gateway 事件循环，导致简单的推理耗时长达 4 分钟。

## 5. Bug 与稳定性
新版本的发布暴露了部分回归 Bug，特别是跨平台事件循环和会话状态管理方面：

**🔴 P0/P1 严重程度（影响核心流程）**：
- **Windows 事件循环阻塞**：[#86599](https://github.com/openclaw/openclaw/issues/86599) - 本地模型提供者调用阻塞了 Gateway，导致死循环（*暂无对应 fix PR*）。
- **Hook Relay 失效回归**：[#87331](https://github.com/openclaw/openclaw/issues/87331) 与 [#87317](https://github.com/openclaw/openclaw/issues/87317) - 5.26 版本中 Codex PreToolUse hook 继电器失效，阻塞所有原生工具。
- **Docker 崩溃回归**：[#87302](https://github.com/openclaw/openclaw/issues/87302) - Docker 容器在升级至 2026.5.26 后直接崩溃。
- **会话死锁与隔离失效**：[#84903](https://github.com/openclaw/openclaw/issues/84903) - 单个停滞会话阻塞了整个网关。
- **Telegram 渠道故障**：[#87357](https://github.com/openclaw/openclaw/issues/87357) 与 [#87332](https://github.com/openclaw/openclaw/issues/87332) - Telegram 插件状态缓存未设置过期时间，迅速触达 1000 行硬上限锁死新写入。已有对应修复 PR [#87434](https://github.com/openclaw/openclaw/pull/87434)。
- **Discord 嵌入式会话抢占异常**：[#86508](https://github.com/openclaw/openclaw/issues/86508) - Discord 运行中频发 `EmbeddedAttemptSessionTakeoverError`。
- **网关重启后状态被误复用**：[#86593](https://github.com/openclaw/openclaw/issues/86593) - 路由系统错误地重新附加到已经 `status:done` 的会话。已有对应修复 PR [#87378](https://github.com/openclaw/openclaw/pull/87378)。

**🟡 P2/P3 数据与状态一致性问题**：
- **OAuth 与认证**：[#86820](https://github.com/openclaw/openclaw/issues/86820) (Codex OAuth 压缩回退失败)；[#83425](https://github.com/openclaw/openclaw/issues/83425) (xAI OAuth 重定向 URI 不匹配)。
- **上下文压缩缺陷**：[#87136](https://github.com/openclaw/openclaw/issues/87136) - 使用绝对 token 阈值导致切换模型（如从 1M 上下文切到 200K）时发生上下文窗口崩溃。

## 6. 功能请求与路线图信号
从近期的 Issues 和 PRs 可以看出项目未来的演进方向：
- **AI 模型支持跟进**：用户已请求支持 Google 刚发布的 `gemini-3.1-flash-lite` 正式版 ([#80380](https://github.com/openclaw/openclaw/issues/80380))。
- **轻量级部署模式**：开发者希望引入 `Gateway-lite` 模式，以便在不加载 AI Harness 的情况下进行确定性的 Webhook/插件部署 ([#86881](https://github.com/openclaw/openclaw/issues/86881))。
- **可观测性增强**：社区提交了为插件暴露 Task Flow 生命周期钩子的事件流请求 ([#87362](https://github.com/openclaw/openclaw/issues/87362))。
- **语音与低延迟场景支持**：要求 HTTP `/v1/chat/completions` 端点引入 `lightContext/voice mode` 以降低高达 10-15s 的 TTFB 延迟 ([#68920](https://github.com/openclaw/openclaw/issues/68920))。

## 7. 用户反馈摘要
从真实的 Issue 描述中，提炼出以下用户核心体验反馈：
- **部署升级体验脆弱**：大量反馈指出在通过 Docker 或 CLI 升级到 5.26/5.27 版本后，系统容易陷入需要手动执行 `openclaw doctor --fix` 才能解决的 Crash Loop。
- **多渠道响应延迟与丢失**：Telegram 和 Discord 用户频繁反映消息重复 ([#87177](https://github.com/openclaw/openclaw/issues/87177))、中间交互的流式文本被静默覆盖丢失 ([#87326](https://github.com/openclaw/openclaw/issues/87326))，极大消耗了终端用户的耐心。
- **Token 消耗与上下文管理痛点**：用户在 Claude CLI 等 Harness 中抱怨系统隐性注入了庞大的技能目录，直接撑爆了 1M 的上下文窗口 ([#87063](https://github.com/openclaw/openclaw/issues/87063))。
- **本地与内网模型集成痛点**：在启用系统代理的情况下，本地 Ollama 嵌入完全失败，SSRF 防御机制过于严苛 ([#81249](https://github.com/openclaw/openclaw/issues/81249))。

## 8. 待处理积压
以下关键/高影响力 Issue 长期悬而未决或尚缺乏明确的修复时间表，需核心维护团队优先关注：
- **Tailscale 未认证访问漏洞 (P0)**：[#50630](https://github.com/openclaw/openclaw/issues/50630) - 结合 Tailscale serve 时，可在无身份验证的情况下将网关暴露。
- **本地 SSRF 拦截问题 (P1)**：[#81249](https://github.com/openclaw/openclaw/issues/81249) - 代理开启时本地 Ollama 无法使用。
- **会话启动预热阻塞 (P1)**：[#84771](https://github.com/openclaw/openclaw/issues/84771) - 模型预热与会话锁导致了近一分钟的启动阻塞。
- **优雅重启缺失 (P2)**：[#57425](https://github.com/openclaw/openclaw/issues/57425) - 网关重启或崩溃时，没有恢复机制，所有进行中的会话任务直接丢失。
- **长时间挂起的 PR**：如针对所有渠道的提及模式策略重构 PR [#70864](https://github.com/openclaw/openclaw/pull/70864) 规模庞大，已停滞多日等待 Proof 验证。

---

## 横向生态对比

基于 2026 年 5 月 28 日各大开源项目的社区动态，为您生成个人 AI 助手与自主智能体赛道的横向对比与技术生态分析报告。

---

### 一、 生态全景
当前 AI 智能体与个人助手开源生态正处于**从“单一对话工具”向“全渠道、多模态、企业级自动化平台”高速演进**的爆发期。各项目正在经历深度的底层架构重构（如引入 Rust/Zig 或重构事件循环）以解决困扰已久的并发阻塞与内存/上下文竞争问题。同时，**多渠道通讯网关的深度整合、本地/边缘部署的兼容性，以及对企业级权限控制（RBAC）与安全隔离的诉求**正成为区分各项目成熟度的核心指标。底层大模型生态（尤其是对 DeepSeek、Claude、Gemini 及本地 Ollama 的动态适配与推理兼容）的响应速度，直接决定了社区的开箱即用体验。

### 二、 各项目活跃度对比

以下数据基于过去 24 小时（2026-05-28）的 GitHub 仓库动态：

| 项目名称 | Issue 更新数 | PR 更新数 | 今日是否发布 Release | 核心 Focus / 状态评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 361 (关闭 208) | 500 (合并 205) | **是** (v2026.5.26) | **极高活跃**。攻坚底层网关性能与回归 Bug，解决并发与状态竞争。 |
| **Hermes Agent**| 50 (关闭 4) | 50 (合并 15) | 否 | **高频迭代**。重心在安全漏洞（鉴权/注入）修复与多网关并发能力。 |
| **ZeroClaw** | 30 (关闭 10) | 50 (合并 12) | 否 | **快速修复**。重心在 v0.8.1 缺陷修复、安全边界加固及底层架构重构。 |
| **IronClaw** | 21 (关闭 5) | 50 (合并 27) | 否 | **架构重构**。核心推进 Reborn 计划，重构子智能体与权限策略。 |
| **CoPaw** | 40 (关闭 15) | 27 (合并 15) | **是** (v1.1.9) | **版本交付**。引入 Tauri 桌面端与 Coding Mode，修复杂进程兼容性。 |
| **LobsterAI** | 2 | 23 (合并 5) | **是** (2026.5.27) | **功能扩展**。引入媒体生成与插件双向同步，处于功能大踏步阶段。 |
| **PicoClaw** | 4 | 6 (合并 1) | **是** (v0.2.9-nightly)| **高频迭代**。专注边缘部署、MQTT/WebSocket健壮性与流式输出修复。 |
| **NanoBot** | 5 (关闭 1) | 21 (合并 6) | 否 | **稳步推进**。重构记忆系统与流式超时兼容，WebUI 引入企业级特性。 |
| **NullClaw** | 7 | 9 (合并 2) | 否 | **底层维护**。专注解决跨平台（尤其是 Windows）网络与并发解析。 |
| **Moltis** | 2 | 2 (关闭 2) | 否 | **平稳维护**。清理底层实验代码，开始吸引外部商业托管平台合作。 |
| *NanoClaw* | 0 | 9 (合并 3) | 否 | **渠道适配期**。集中修复 Teams、Slack、Signal 等特定渠道接入 Bug。 |

### 三、 OpenClaw 在生态中的定位
*   **绝对的流量与规模核心**：单日近 900 条的 Issue/PR 更新量级使其成为生态中名副其实的“基础设施级”项目。相比于其他项目，OpenClaw 的社区规模和迭代速度高出一个数量级。
*   **技术路线差异（广度 vs 深度）**：当 NullClaw 还在下探到 OS 级别的 `nanosleep` 和 Zig 编译优化时，NanoBot 在重构记忆系统时，OpenClaw 已经跨过了基础可用性阶段，正在集中精力解决**极高负载下的事件循环阻塞**和**全局会话死锁**等复杂的分布式/高并发状态管理难题。
*   **核心优势与挑战**：优势在于全渠道覆盖、插件生态繁荣与极快的新模型响应。但也正因架构庞大，新版本（如 v2026.5.26）容易引发 Hook Relay 失效、Docker 升级崩溃等连锁回归反应，对其自动化测试和发布回滚机制提出了极高要求。

### 四、 共同关注的技术方向
1.  **流式请求的容错与超时治理 (OpenClaw, NanoBot, PicoClaw)**
    大模型复杂推理场景的增多暴露了硬编码超时时间的短板。生态急需解耦超时配置，尤其是兼容本地低配大模型（如 Ollama）长达数分钟的推理场景。
2.  **多渠道网关的健壮性与会话隔离**
    *   *消息路由竞争*：OpenClaw、NanoBot、Hermes 均报告了严重的会话抢占或上下文串台问题（尤其是 Telegram 和钉钉群聊）。
    *   *跨平台渲染*：NanoClaw 提出的 Emoji MCP 跨端兼容、PicoClaw 的 Tool Calls 在 WebSocket 中的丢失，说明“多端消息同步”仍是行业痛点。
3.  **企业级多租户、安全隔离与权限管控**
    *   几乎所有头部项目（Hermes, NanoBot, ZeroClaw, IronClaw）都在近期引入或重构了 RBAC、多用户空间隔离或凭证鉴权体系。
    *   针对 MCP (Model Context Protocol) 工具调用的精细化权限控制（如动态 Headers、禁用特定工具）成为新的安全标配需求。
4.  **新模型 API 规范的跟进阵痛**
    适配非 OpenAI 标准的“思考”模型（如 DeepSeek 的 extended thinking、Claude 的 reasoning content）引发了多项目的 API 解析阻断（ZeroClaw, IronClaw）。

### 五、 差异化定位分析
*   **重量级网关与编排中枢**：**OpenClaw, Hermes Agent, ZeroClaw**
    定位为完整的 Agent 网关或集群底座，强调多路由、多通道和高并发。Hermes 极其关注动态路由和 Token 开销优化，ZeroClaw 则在 TUI 安全和 WASM 插件隔离上发力最深。
*   **深度重构与底层性能极客**：**NullClaw, IronClaw**
    NullClaw 深入 Zig 和 OS 级别网络 IO 优化，追求单机极限性能；IronClaw 则在进行 Rust 层面的 Reborn 架构重构，强推沙盒执行环境与工作流声明式编排。
*   **全端应用与开箱即用体验**：**CoPaw, LobsterAI, NanoBot**
    注重 GUI 和 WebUI。CoPaw 凭借 Tauri 杀入原生桌面端并集成 Coding IDE；LobsterAI 接入了复杂的媒体生成与商业化计费模型；NanoBot 社区则在繁荣其 Web 管理面板生态。
*   **轻量级与边缘/嵌入式部署**：**PicoClaw**
    独辟蹊径，深入 MQTT 支持、TLS 证书校验和 32 位 Android 环境兼容，非常适合 IoT 或轻量级本地网关场景。

### 六、 社区热度与成熟度
*   **成熟期（大基建与修基建）**：**OpenClaw**。项目已度过蜜月期，核心挑战在于“告别脆弱的升级体验”，需解决因为修改底层缓存引发的全链路回归问题。
*   **高速扩张期（跑马圈地）**：**CoPaw, IronClaw, LobsterAI**。通过发布包含 Coding IDE、媒体生成等重大特性的版本抢占开发者心智，吸引大量外部贡献者认领任务，但测试覆盖率（如 E2E 基础设施）亟待补齐。
*   **架构重构期（脱胎换骨）**：**Hermes Agent, ZeroClaw**。目前处于偿还技术债、修复深层次安全与并发缺陷（如看板并发中毒、密钥泄露）的阶段，属于为下一波爆发蓄力。
*   **稳健维护期**：**NullClaw, Moltis, NanoClaw**。迭代速度平稳，代码合并以周边渠道适配和 Bugfix 为主。Moltis 甚至已开始吸引商业 SaaS 平台寻求官方合作。

### 七、 值得关注的趋势信号
1.  **“肥头瘦尾”的 Token 消耗危机**：Hermes 和 OpenClaw 社区强烈抗议系统隐性注入庞大的 Skill Schema 导致上下文溢出（撑爆 1M 窗口）。**未来的 Agent 框架必须引入“延迟加载/两阶段工具注入”或按需挂载机制，而非全量暴力打包。**
2.  **桌面端原生应用回潮**：基于 Tauri 的原生桌面端封装成为新风向。相比于纯 Web 或 Electron，开发者更倾向于让 Agent 以桌面常驻进程的形式存在，但这带来了与本地杀毒软件和子进程沙盒网络隔离的长期博弈。
3.  **AI 记忆系统的务实降级**：相较于早期描绘的“自主成长型”记忆，当前社区（如 CoPaw 的讨论和 NanoBot 的重构）更加务实，转向“上下文自动裁剪”和“基于向量索引的按需加载”，以防止 Token 指数级爆炸。
4.  **大模型 API 的“抗脆弱性”设计**：对于量化模型或非标模型（如输出 `"null"` 字符串而非空）的容错处理，正在成为衡量一个 Agent 框架鲁棒性的隐形指标。框架侧需要更加宽松且智能的 Response Parser。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

这份报告为您基于 2026-05-28 的 GitHub 数据梳理生成。总体来看，NanoBot 项目今日呈现出**极高的社区参与度与健康的迭代节奏**，核心团队正在重点攻克底层架构（如 Dream 记忆系统重构、Provider 流式处理）以及 MCP 连接稳定性。

---

### 📊 NanoBot 项目动态日报 (2026-05-28)

#### 1. 今日速览
过去 24 小时内，NanoBot 社区极为活跃，共产生 **5 条 Issue 更新（4 新开/1 关闭）** 与 **21 条 PR 更新（6 关闭/合并，15 条待合并）**。虽然今日无正式版本发布，但项目迎来了大量外部贡献者提交的高质量 PR，涵盖了核心架构优化（如心跳服务重构、流式超时控制）、多渠道适配（钉钉会话隔离）以及大模型提供商兼容性修复。项目的生态系统正在快速扩展，不仅引入了 GitAgent 协议提案，WebUI 也正在补齐企业级所需的权限与空间隔离功能。

#### 2. 版本发布
- **无新版本发布**。项目当前仍处于高度功能迭代与 Bug 修复阶段，预计待 `Dream` 单阶段重构及 `MCP` 重连机制等重要 PR 合并后会进行版本打包。

#### 3. 项目进展
今日共有 6 个 PR 被关闭/合并，主要推进了流式处理兼容性、架构清理及工具链集成：
- **修复 Provider 流式超时配置不生效**：[#4018](https://github.com/HKUDS/nanobot/pull/4018) 被合并。此前 Codex provider 硬编码了 60 秒的超时时间，导致用户无法像其他 provider 一样通过 `NANOBOT_STREAM_IDLE_TIMEOUT_S` 环境变量进行调优，现已修复。
- **清理单一的心跳服务架构**：[#4023](https://github.com/HKUDS/nanobot/pull/4023) 将独立运行的 `HeartbeatService` 后台循环迁移至系统级的 cron 自动注册任务中，大幅减少了专属基础设施的维护成本。
- **其他关闭的 PR**：包括对 MCP tools/list_changed 通知支持的早期迭代 [#4014](https://github.com/HKUDS/nanobot/pull/1014)、MCP 重连机制探索 [#4012](https://github.com/HKUDS/nanobot/pull/1012)，以及被标记为重复或无效的外部协议支持提案 [#4024](https://github.com/HKUDS/nanobot/pull/4024), [#4005](https://github.com/HKUDS/nanobot/pull/4005)。

#### 4. 社区热点
- **最受欢迎的第三方衍生工具**：由 Good0007 提交的 Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922) 展示了其开发的 `[nanobot-webui]` 自托管 Web 管理面板，获得了 **10 个赞和 10 条评论**。该面板提供了实时聊天、MCP 服务器配置、多用户支持等特性，反映出社区对开箱即用的 GUI 管理工具有强烈需求。
- **底层能力重构的深度探讨**：由核心贡献者提交的 `Dream` 记忆系统单阶段合并 PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) 持续吸引关注，该 PR 意在移除 Phase 1（纯 LLM 分析），转为由 AgentLoop 驱动的全生命周期管理。

#### 5. Bug 与稳定性
今日报告了多个与 Provider 和 MCP 相关的阻塞性问题，社区已快速响应并提交了 Fix PR：
- **🔴 P0 - 流式请求超时中断 (已有 Fix PR)**：Issue [#4013](https://github.com/HKUDS/nanobot/issues/4013) 报告了升级到 0.2.0 后，90秒的硬编码流式超时导致复杂任务频繁中断。由 eldar702 提交的 PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) 提供了解决方案，允许按 provider 独立配置超时时间，对本地 LLM（如 Ollama）尤为关键。
- **🔴 P0 - Codex 推理重复 ID 导致 400 错误 (已有 Fix PR)**：Issue #3633 暴露了 `openai_codex_provider` 在多轮对话中重发已存在的 reasoning item 导致崩溃。PR [#4021](https://github.com/HKUDS/nanobot/pull/4021) 通过在发送前增加去重校验并引入重试机制修复了此问题。
- **🟡 P1 - MCP 连接断开无法自动重连 (已有 Fix PR)**：PR [#4027](https://github.com/HKUDS/nanobot/pull/4027) 修复了 MCP `_mcp_connected` 状态锁死、断线无法重连的关键 Bug，引入了 reconnect callbacks。
- **🟡 P1 - 钉钉群聊上下文串台 (已有 Fix PR)**：针对钉钉群内所有用户共用同一个 session 的问题，PR [#4016](https://github.com/HKUDS/nanobot/pull/4016) 引入了 `group_user_isolation` 配置项以隔离会话。

#### 6. 功能请求与路线图信号
从近期的 PR 与 Issue 动态可以看出，项目正在向**高度模块化、企业级多用户支持**演进：
- **系统提示词模块化**：PR [#4022](https://github.com/HKUDS/nanobot/pull/4022) 提出了 toggle system prompt components 功能，表明用户对 Agent 人设设定的精细化控制需求日益增加。
- **WebUI 空间隔离与权限控制**：PR [#4007](https://github.com/HKUDS/nanobot/pull/4007) 引入了 Codex 风格的项目工作区绑定与访问控制（默认权限与全权限分离）。这释放了一个强烈信号：NanoBot 正在为多租户/团队协作的 SaaS 化或企业本地化部署铺路。
- **Dream 系统可控性**：Issue [#3885](https://github.com/HKUDS/nanobot/issues/3885) 和 [#4029](https://github.com/HKUDS/nanobot/issues/4029) 均希望对 Dream 系统作业提供独立开关和模型覆盖支持，反映出重度用户对后台资源调度的定制化诉求。

#### 7. 用户反馈摘要
- **本地模型与云端模型的体验差异**：用户普遍反馈 90s 的 stream idle timeout 对云端大模型足够，但对本地部署的大模型（需要较长的推理时间）极其不友好（[#4013](https://github.com/HKUDS/nanobot/issues/4013)）。
- **渠道接口限制的痛点**：在微信渠道中，单次 context_token 最多只能返回 10 条消息的限制影响了实际业务的使用体验（[#2772](https://github.com/HKUDS/nanobot/issues/2772)）。
- **开源生态兼容**：近期连续出现多个关于支持 GitAgent Protocol 的 PR（如 [#4019](https://github.com/HKUDS/nanobot/pull/4019)），表明外部开发者希望将 NanoBot 纳入统一的 AI Agent 开发标准协议中。

#### 8. 待处理积压
- **WebUI 联动阻塞**：Issue [#4013](https://github.com/HKUDS/nanobot/issues/4013) 中提到用户为了使用 WebUI 被迫停留在旧版本（0.1.5post2），升级就面临超时报错，强烈建议核心团队尽快 Review 并合并超时解耦 PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) 与 [#4018](https://github.com/HKUDS/nanobot/pull/4018)。
- **社区遗留 PR 亟待合入**：如七牛云 Provider 的支持 PR [#3643](https://github.com/HKUDS/nanobot/pull/3643) 已开启超过 20 天，目前已包含完整的测试用例，建议维护者进行 Review 以丰富项目的 Provider 生态。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 (2026-05-28)

## 1. 今日速览

Hermes Agent 项目在过去 24 小时内保持了极高的社区活跃度，共产生了 50 条 Issue 更新和 50 条 PR 更新。虽然今日没有发布新的软件版本，且仅有 4 个 Issue 被关闭，但社区提交了大量新开的 Issue（46个）和待合并的 PR（35个）。当前项目的关注点高度聚焦于**安全性漏洞修复**（特别是 TUI 和 WebSocket 的注入与鉴权问题）、**内存架构的重构**以及**多网关路由能力的增强**。整体来看，项目正处于功能快速迭代与社区代码审计深水区并行的健康阶段。

## 2. 版本发布
*今日无新版本发布。*

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，其中重点推进了以下核心模块的修复与优化：

- **工具调度与兼容性修复**：PR [#14188](https://github.com/NousResearch/hermes-agent/pull/14188) 被合并，通过在分发入口规范化工具名称，成功修复了 Claude 等大模型在输出工具名称时的大小写/格式漂移问题，大幅提升了工具调用的鲁棒性。
- **看板数据库稳定性提升**：PR [#33491](https://github.com/NousResearch/hermes-agent/pull/33491) 针对近期频发的看板并发问题，引入了 `busy_timeout` 锁争用缓解、写入事务深度跟踪以及损坏 JSON 的容错处理。
- **定时任务与企业级密钥管理支持**：PR [#33479](https://github.com/NousResearch/hermes-agent/pull/33479) 修复了 Cron 调度器未能正确拉取 Bitwarden Secrets Manager 密钥的致命痛点，增强了企业部署环境下的安全性。

## 4. 社区热点
今日社区讨论最热烈的话题集中在底层架构优化和多 Agent 隔离上：

- **Token 开销优化**：Issue [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)（16条评论，13点赞）提出当前每次 API 调用都会注入全量工具 Schema，导致消耗 3500-5000 tokens。社区正在热烈讨论引入“两阶段工具注入（延迟加载）”机制，这对于本地部署或低资源环境意义重大。
- **多 Agent 内存与工作空间隔离**：Issue [#9514](https://github.com/NousResearch/hermes-agent/issues/9514)（11条评论）指出当前单守护进程无法支持多 Agent 隔离运行，呼吁实现基于 Topic 的工作区与内存隔离。
- **身份验证与安全事件**：Issue [#21574](https://github.com/NousResearch/hermes-agent/issues/21574)（8条评论）记录了一起典型的“女友提示词注入”事件，引发了对单 Gateway 多用户身份隔离机制的强烈诉求。

## 5. Bug 与稳定性
今日报告了多个高危级别（P1/P2）的 Bug，部分已有 PR 跟进：

🔴 **P1 级别 - 致命错误**
- **项目目录遭静默清理**：Issue [#30151](https://github.com/NousResearch/hermes-agent/issues/30151) 报告看板的 "Scratch Workspace" 清理机制存在严重逻辑缺陷，导致用户整个项目目录被删除。（*暂无修复 PR*）
- **配置文件跨版本丢失**：Issue [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) 报告升级到 v0.13.0 后，所有自定义模型配置丢失。（*暂无修复 PR*）

🟠 **P2 级别 - 安全与鉴权**
- **TUI 网关 Shell 注入与鉴权缺失**：系统爆出严重的安全漏洞。PR [#33503](https://github.com/NousResearch/hermes-agent/pull/33503) 和 [#33504](https://github.com/NousResearch/hermes-agent/pull/33504) 修复了 TUI 网关中存在的 Shell 注入漏洞和 RPC 调用无身份校验的问题。
- **跨站 WebSocket 劫持**：PR [#33505](https://github.com/NousResearch/hermes-agent/pull/33505) 和 [#33497](https://github.com/NousResearch/hermes-agent/pull/33497) 通过强制校验 `Origin` 请求头，修复了 WebSocket 跨站劫持漏洞。
- **看板并发缓存中毒**：Issue [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) 报告在多线程和子进程并发下，SQLite WAL/SHM 会导致网关死锁。（*已通过 PR #33491 部分解决*）

## 6. 功能请求与路线图信号
从今日的 Issue 动态来看，项目正朝着**动态路由**、**分级存储**和**自进化能力**发展：

- **动态模型路由**：Issue [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) 提出根据任务复杂度（如“查天气”与“架构设计”）动态选择底层 LLM 模型，以平衡延迟与成本。
- **分层内存架构替代**：Issue [#32726](https://github.com/NousResearch/hermes-agent/issues/32726) 和 [#22612](https://github.com/NousResearch/hermes-agent/issues/22612) 提出打破当前 2200 字符的内存上限，引入 4 层存储架构和索引式 `MEMORY.md` 按需加载机制。
- **SOUL.md 自进化**：Issue [#11919](https://github.com/NousResearch/hermes-agent/issues/11919) 建议让 Persona 文件根据日常使用习惯动态演化，而不是仅初始化一次。
- **平台路由增强**：Issue [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) 请求支持根据 Telegram Topic 自动路由到不同配置的 Profile。

## 7. 用户反馈摘要
通过近期活跃的 Issue 提炼出以下真实用户画像与痛点：

- **企业/团队多用户协作阻碍**：用户非常希望将 Hermes 接入团队，但当前缺乏多用户鉴权（Issue #21574），极易被提示词注入攻击，导致不敢在多人群组中开启高权限 Agent。
- **长期记忆能力羸弱**：许多用户反馈现有的字符限制极易让 Agent “遗忘”之前纠正过的偏好（Issue #32064），且由于是会话级存储，网关一重启上下文全丢（Issue #8457）。
- **版本升级焦虑**：用户对升级感到恐惧，因为近期多次出现升级后配置丢失、看板打不开或插件不兼容的情况（Issue #25272, #24186），急需向后兼容保障。
- **Slack/Discord 集成细节痛点**：对于将 Hermes 作为运维助手的用户，由于无法解析 Attachments 格式（PR #33493），导致经常漏读 Grafana/PagerDuty 的报警上下文。

## 8. 待处理积压
以下重要高价值 Issue 长期处于 Open 状态或缺乏官方明确排期，建议维护团队重点关注：

- **[#6839] Tool Schema 导致的 Token 浪费**：作为点赞数最高的问题，直接影响运行成本，亟待纳入开发排期。
- **[#30151] & [#25272] 严重的用户数据与配置丢失问题**：P1 级别的致命错误，直接影响生产环境可用性，需尽快发布 hotfix。
- **[#508] 模型家族特定 Prompt 适配**：由核心成员 teknium1 提出的单次 System Prompt 改造计划，对输出质量影响极大，已停滞近 3 个月。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 [PicoClaw (github.com/sipeed/picoclaw)](https://github.com/sipeed/picoclaw) 项目 2026 年 5 月 28 日的动态日报：

# PicoClaw 项目动态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时内，PicoClaw 项目保持高度活跃，共处理了 4 个 Issue 更新（全部为新开或活跃）和 6 个 PR 更新（1 个已合并/关闭，5 个待合并）。项目在今天发布了最新的 `v0.2.9` Nightly 构建版本，持续进行底层架构打磨。当前工作重心明显聚焦于 **Channels（通道/WebSocket/MQTT）的健壮性优化、流式输出的缺陷修复，以及边缘部署环境的兼容性提升**。整体来看，项目正处于高频迭代期，社区反馈积极，核心维护者及贡献者对底层 Bug 的响应非常迅速。

## 2. 版本发布
- **nightly: Nightly Build (`v0.2.9-nightly.20260527.28ec5793`)**
  - **更新内容**：基于 main 分支的自动化构建，涵盖了近期合并的流式响应与通道安全性修复等代码。
  - **稳定性预警**：官方明确提示此为自动构建版本，可能存在不稳定现象，建议生产环境谨慎升级。
  - **详细变更日志**：[v0.2.9...main 对比](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 1 个重要的 PR 被关闭（或合并），另有多个核心 PR 提交待审，整体稳步推进：
- **流式数据输出能力演进**：PR [#2853 feat(pico): add ChatStream support](https://github.com/sipeed/picoclaw/pull/2853) 今日状态更新并关闭。该 PR 为 pico channel 引入了完整的 ChatStream 支持，实现了 WebSocket 客户端的实时 token 流式传输，大幅提升了前端交互体验。
- **安全与状态管理完善**：
  - PR [#2956 fix: preserve channel enabled state](https://github.com/sipeed/picoclaw/pull/2956) 修复了合并 `security.yml` 时导致渠道被意外禁用的逻辑缺陷。
  - PR [#2955 fix: verify process identity](https://github.com/sipeed/picoclaw/pull/2955) 优化了单例 PID 检查机制，防止进程 PID 被系统复用导致的网关启动失败。
- **外部通信安全加固**：PR [#2899 add configurable TLS verification for MQTT](https://github.com/sipeed/picoclaw/pull/2899) 持续推进，将 MQTT 通道的 TLS 验证改为可配置，结束了全量忽略证书校验的历史，提升了本地部署安全性。

## 4. 社区热点
今日社区关注点集中在模型渠道调用和产品体验上：
- **OAuth 认证与模型输出异常**：Issue [#2953 OpenAI/Codex OAuth returns empty response](https://github.com/sipeed/picoclaw/issues/2953) 反映了在使用 ChatGPT Codex 后端时，由于 `response.output_text.delta` 事件被忽略导致返回空响应的问题。这揭示了 PicoClaw 在对接特定主流大模型 API 流式规范时存在需要适配的边界情况。
- **发布节奏与体验痛点反馈**：Issue [#2952 [Feature]好久没发新版本了](https://github.com/sipeed/picoclaw/issues/2952) 引发了社区对产品发布周期的讨论。该用户集中指出了 `exec` 命令运行机制、QQ频道重启死循环、以及前端模型 API 密钥管理等连贯性痛点，是今日最具代表性的用户体验反馈。

## 5. Bug 与稳定性
今日共报告了 3 个明确的系统缺陷，部分已由开发者快速提交了针对性的 Fix PR：

- **🔥 [高] Pico 通道连续请求导致 tool_calls 丢失**
  - **现象**：通过 WebSocket 发起连续的工具调用请求时，后续的 `tool_calls` 消息被丢弃。
  - **状态**：**已有 Fix PR**。开发者 loafoe 迅速提交了 [#2957 fix(channels): prevent tool_calls from being dropped](https://github.com/sipeed/picoclaw/pull/2957)，精准修复了 #2892 引入的辅助消息过滤逻辑误杀问题。
  - **Issue 链接**：[#2958](https://github.com/sipeed/picoclaw/issues/2958)
- **🔥 [高] OpenAI/Codex 流式响应解析失效**
  - **现象**：OAuth 认证成功，但模型返回空响应，实质是流事件被忽略。
  - **状态**：待确认修复方案。
  - **Issue 链接**：[#2953](https://github.com/sipeed/picoclaw/issues/2953)
- **🟡 [中] 不支持 32 位 Android 系统**
  - **现象**：在 32 位 Android 环境下无法正常运行。
  - **状态**：待确认是否由于底层依赖（如 Go 编译目标架构限制）导致。
  - **Issue 链接**：[#2954](https://github.com/sipeed/picoclaw/issues/2954)

## 6. 功能请求与路线图信号
- **更智能的 Provider 与 API Key 管理界面**：用户在 [#2952](https://github.com/sipeed/picoclaw/issues/2952) 中呼吁前端 UI 支持 key 复用、提供商下拉选择以及通过 `/models` 接口一键同步模型列表。如果落地，将极大降低多模型路由管理的门槛。
- **动态 MCP (Model Context Protocol) 认证支持**：目前处于 Open 状态的 PR [#2696 feat(mcp): support per-request dynamic headers](https://github.com/sipeed/picoclaw/pull/2696) 正在推进。该功能允许在上下文中注入带前缀的 HTTP Headers 并透传给 MCP 服务器，这标志着 PicoClaw 正在向更复杂的动态多租户/鉴权型工具链场景迈进。

## 7. 用户反馈摘要
综合今日 Issues 提炼的用户核心反馈如下：
- **Agent 执行策略不够健壮**：用户指出在使用 `exec` 工具时，部分模型默认不携带 `actions:run`，导致模型反复报错重试；同时提到 PicoClaw 在某些情况下未能严格遵循设定的 `agent.md` 约束。
- **渠道状态管理过于脆弱**：安全凭证与配置文件的合并逻辑直接影响了渠道的可用性（如 Issue #2956 产生的背景），用户期望配置覆盖机制更加可预测。
- **对接大模型 API 的容错率需提升**：无论是 OpenAI 新格式的适配失败，还是 tool_calls 的意外丢失，都说明在复杂异步流式场景下的消息路由仍需加强健壮性测试。

## 8. 待处理积压
- **PR #2899 (MQTT TLS 验证配置)**：由 yangwenjie1231 提交，已停留约 8 天并标记为 `[stale]`，这是一个提升安全性的好更新，建议维护者抽空 Review 合并。
- **PR #2696 (MCP 动态 Headers 支持)**：由核心贡献者 loafoe 提交，已打开长达一个月。由于涉及 Context 深度传递和 HTTP RoundTrip 机制，可能需要更高强度的架构级审查。

---
*分析师注：PicoClaw 目前的代码提交和 Bug 修复呈现极高的关联性（如今天发现 Tool Calls 丢失，几小时内即推送对应 Fix PR），显示出项目维护团队极强的工程响应能力。建议下一阶段适当释放 Stable 版本以安抚社区（呼应 #2952），并重点加强针对不同大模型Provider的流式响应集成测试。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

这份 2026 年 5 月 28 日的 NanoClaw 项目动态日报基于最新的 GitHub 数据生成。当前项目呈现出“社区修复活跃、底层维护先行”的典型特征。

---

# NanoClaw 项目动态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时，NanoClaw 项目表现出极高的社区开发活跃度，但在 Issue 增长和版本发布方面处于短暂的静默期。今日共有 **9 个 PR 发生了状态更新**（6 个待合并，3 个关闭），且无新增 Issue 或版本发布。开发重心主要集中在**多渠道接入的 Bug 修复（如 Signal, Teams, Slack 网关）**以及**底层基础设施的升级（Node 运行时、容器网络配置）**。大量高质量的修复 PR 涌入，表明项目正处于积极的功能调优与稳定期。

## 2. 版本发布
**无**。今日未发布新版本。建议维护者在合并当前积累的渠道修复和 CLI 修复 PR 后，考虑发布一个补丁版本以快速交付修复。

## 3. 项目进展
今日关闭了 3 个 PR，推进了以下进展：
*   **NixOS 容器网络修复尝试**：[#2629](https://github.com/nanocoai/nanoclaw/pull/2629) 被关闭。该 PR 尝试在 NixOS 环境下使用 `--network=host` 和 `127.0.0.1` 替代存在兼容性问题的 `host-gateway`。虽然被关闭，但暴露了项目在非标准系统下的容器网络配置痛点。
*   **无效/误操作 PR 清理**：[#2577](https://github.com/nanocoai/nanoclaw/pull/2577) 和 [#2623](https://github.com/nanocoai/nanoclaw/pull/2623) 均被关闭，保持了 PR 列表的整洁。

整体而言，项目今日的实质性代码合并较少，主要精力在于新提交 PR 的审核与讨论阶段。

## 4. 社区热点
由于今日未新增 Issue，社区互动主要集中在核心开发者和贡献者提交的 PR 上：
*   **MCP 与渠道网关的适配问题**：由 `eldar702` 提交的 [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) 引入了重要关注。它指出了 MCP `add_reaction` 在跨平台（WhatsApp/Discord/Telegram 等）表现不一致的问题，触及了 AI 智能体在多通道通讯时的核心痛点。
*   **CI/CD 基础设施弃用预警**：由 `IamAdamJowett` 提交的 [#2608](https://github.com/nanocoai/nanoclaw/pull/2608) 虽未合并，但具有前瞻性，针对 GitHub Node 20 运行时即将在 2026 年 6 月被弃用的问题进行了全面升级，是保障项目持续集成的关键热点。

## 5. Bug 与稳定性
今日出现了多个针对特定模块和渠道的 Bug 修复 PR，严重程度和优先级如下：

*   **【高】文件传输功能失效**：[#2625](https://github.com/nanocoai/nanoclaw/pull/2625)
    *   **问题**：Teams 清单文件中 `supportsFiles: false` 被硬编码，导致上传 UI 被禁用且 Bot 侧的 `send_file` 被静默丢弃。
    *   **状态**：已提交 Fix PR。
*   **【高】CLI 核心参数被忽略**：[#2628](https://github.com/nanocoai/nanoclaw/pull/2628)
    *   **问题**：`ncl groups create --id` 标志的输入值被 `randomUUID()` 静默覆盖，导致用户无法自定义 ID。
    *   **状态**：已提交 Fix PR。
*   **【中】Signal 渠道静默崩溃**：[#2626](https://github.com/nanocoai/nanoclaw/pull/2626)
    *   **问题**：Signal 服务重启时，若 `launchctl unload` 已运行，错误会被静默吞掉，导致向导显示成功但服务未启动。
    *   **状态**：已提交 Fix PR。
*   **【中】Emoji 表情反应跨渠道失效**：[#2627](https://github.com/nanocoai/nanoclaw/pull/2627)
    *   **问题**：MCP 传递的 Emoji 短代码（如 `thumbs_up`）在除 Slack 外的其他渠道（WhatsApp/Telegram等）无法正确渲染或静默失败。
    *   **状态**：已提交 Fix PR。

## 6. 功能请求与路线图信号
从当前活跃的 PR 中可以捕捉到项目未来的演进方向：
*   **细粒度的 MCP 工具权限控制**：[#2624](https://github.com/nanocoai/nanoclaw/pull/2624) 提出了在 `McpServerConfig` 中实现 `per-server disabledTools` 的功能。这表明用户对 AI 智能体工具调用时的安全性和精细化控制需求正在上升，预计该功能在完善后将被纳入下一版本。
*   **多渠道适配层的持续演进**：从对 Teams、Slack、Signal、WhatsApp 的接连修复可以看出，构建高兼容性的统一多渠道网关仍是项目的核心路线图。

## 7. 用户反馈摘要
由于今日缺乏直接的 Issue 评论互动，用户反馈主要通过 PR 的描述侧面反映：
*   **企业级通讯整合需求强烈**：用户正在深度尝试将 NanoClaw 接入 Teams、Slack、Discord 等企业环境，并期望支持完善的文件上传和表情符号互动，而不是仅仅支持文本。
*   **高级用户的定制化诉求受阻**：有用户报告在 CLI 中尝试自定义 ID 失败（[#2628](https://github.com/nanocoai/nanoclaw/pull/2628)），表明用户希望在自动化部署中有更高的可控性。
*   **NixOS 用户群体的兼容性呼吁**：开发者正在尝试解决 NanoClaw 在 NixOS 这种特殊 Linux 发行版下的容器运行问题（[#2629](https://github.com/nanocoai/nanoclaw/pull/2629)），反映了极客/高级开发者群体的使用诉求。

## 8. 待处理积压
目前项目拥有 **6 个处于 OPEN 状态的 PR** 等待维护者审核，建议优先关注以下积压：
1.  **基础设施阻断项**：建议优先合并 [#2608](https://github.com/nanocoai/nanoclaw/pull/2608)（Node Actions 升级至 v5），以避免 2026 年 6 月即将到来的 CI/CD 失效风险。
2.  **核心体验修复**：优先审核合并 Teams 文件支持（[#2625](https://github.com/nanocoai/nanoclaw/pull/2625)）和 CLI `--id` 无效（[#2628](https://github.com/nanocoai/nanoclaw/pull/2628)）的 PR，这些是阻断用户正常使用的严重缺陷。
3.  **社区功能审核**：针对 `mmahmed` 提交的 MCP 工具禁用特性（[#2624](https://github.com/nanocoai/nanoclaw/pull/2624)），需维护者进一步确认架构设计是否符合长期规范。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-28)

**数据统计周期**：过去 24 小时 | **项目定位**：AI 智能体与个人 AI 助手开源项目

---

## 1. 今日速览
过去 24 小时内，NullClaw 项目保持了稳健的开发势头，共处理了 7 个 Issue 和 Pull Request（其中 3 个被关闭/合并，4 个处于活跃/待合并状态）。项目当前的重心明显聚焦于**跨平台网络兼容性**（尤其是 Windows DNS 解析）和**底层并发机制的稳定性**。虽然今日没有发布新版本，但多个核心 Bug 的修复 PR 已被合并，底层运行时的健壮性得到了显著提升，整体项目健康度良好。

---

## 2. 版本发布
**无新版本发布**。
*(注：当前合并的多个基础架构修复 PR 预计正在为下一个次要版本或补丁版本蓄力。)*

---

## 3. 项目进展
今日有 1 个 PR 和 1 个 Issue 被成功关闭/合并，项目在底层网络和稳定性支持上迈出了实质性的一步：

*   🎉 **PR #891 [CLOSED]** `fix(providers): preserve curl probe transport failures` 
    *   **进展意义**：此前 OpenAI 兼容提供商的健康探测机制会掩盖具体的网络错误。此 PR 保留了 `CurlDnsError`、`CurlConnectError` 等具体的传输层错误，极大改善了网络诊断能力和系统的可观测性。
*   🎉 **PR #892 [CLOSED]** `test(compat/net): add Windows getAddressList regression tests`
    *   **进展意义**：针对此前 Windows 平台解析地址的顽疾，补充了回归测试，确保后续迭代不会破坏已修复的 Windows 网络解析逻辑。
*   ✅ **Issue #890 [CLOSED]** Windows `HostResolutionFailed` 问题。随着底层解析逻辑的修复和测试就位，这一阻碍 Windows 用户体验的核心问题正式宣告解决。

---

## 4. 社区热点
今日社区最关注的问题集中在**自定义提供商的兼容性**上，反映了用户将 NullClaw 接入多元化本地/私有模型的强烈需求：

*   🔥 **Issue #936** `Custom OpenAI-compatible provider falls back to hardcoded Claude models`
    *   **热点分析**：当用户尝试通过自定义 `base_url` 接入兼容 OpenAI 接口的模型时，系统未按预期查询 `/v1/models` 接口，而是错误回退到了 Anthropic 的硬编码列表。这暴露了当前多模型路由逻辑中存在fallback过于粗暴的问题，严重影响了高级用户的自定义体验。
*   🔥 **Issue #937** `Dead flag in agent config`
    *   **热点分析**：社区指出 `compact_context` 配置项被解析但未实际生效（"Dead flag"）。这反映了用户对 Agent 上下文管理（尤其是压缩上下文以节省 Token 成本）的功能期待。

---

## 5. Bug 与稳定性
今日报告的 Bug 主要涉及配置解析死代码和模型回退逻辑错误：

1.  **高优先级 | 逻辑错误**：自定义 OpenAI 兼容提供商回退到 Claude 模型 ([Issue #936](https://github.com/nullclaw/nullclaw/issue/936))
    *   **现状**：已报告，暂无对应 fix PR。由于会导致用户的自定义模型调用完全失效，建议维护者优先排期。
2.  **低优先级 | 配置失效**：`compact_context` 标志成为死代码 ([Issue #937](https://github.com/nullclaw/nullclaw/issue/937))
    *   **现状**：已报告，暂无对应 fix PR。不影响核心稳定性，但会误导用户配置。

---

## 6. 功能请求与路线图信号
从今日的活跃 PR 和 Issue 中，可以提取出项目近期的演进路线图信号：

*   **Zig 0.16 适配与工具链升级**：[PR #887](https://github.com/nullclaw/nullclaw/pull/887) 正在解决 Zig v0.16 的构建兼容问题。这表明项目正在积极跟进底层语言生态，为未来的性能和编译收益做准备。
*   **真正的 OS 级线程挂起**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878) 提议在 POSIX 系统上将 sleep 切换到 `nanosleep`。这说明项目在高并发 AI Agent 常驻内存的场景下，对资源调度和 CPU 开销的优化正在下探至操作系统级别。

---

## 7. 用户反馈摘要
基于近 24 小时的互动数据，提炼真实用户反馈如下：

*   **痛点 (Windows 网络支持)**：从 [Issue #890](https://github.com/nullclaw/nullclaw/issue/890) 的反馈可以看出，Windows 用户在使用带有预解析主机名功能的提供商时遇到阻断性崩溃。好消息是该问题已在主分支修复并闭环。
*   **痛点 (灵活部署)**：用户群（如 @weissfl）正尝试将 NullClaw 接入自建的 LLM API 网关，但现有的硬编码模型列表机制成为了阻碍（Issue #936）。
*   **满意点 (协作效率)**：从 [PR #891](https://github.com/nullclaw/nullclaw/pull/891) 和 [PR #892](https://github.com/nullclaw/nullclaw/pull/892) 的快速合并可以看出，维护者对底层网络库的贡献响应迅速，项目在基础架构层面的迭代非常敏捷。

---

## 8. 待处理积压
以下重要 PR/Issue 等待维护者审阅，建议尽早介入：

*   🚧 **[PR #887](https://github.com/nullclaw/nullclaw/pull/887) `Fix build with zig v0.16 for win/linux`**：已开启 20+ 天。构建系统的升级是持续交付的基石，建议尽快 Review 并推进合并，以免产生合并冲突。
*   🚧 **[PR #878](https://github.com/nullclaw/nullclaw/pull/878) `fix(compat): use nanosleep on POSIX...`**：已开启近 1 个月。该 PR 涉及底层线程行为，对长时运行的 AI Agent 稳定性至关重要，需要补充基准测试后尽快排期。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) 项目动态日报
**日期**: 2026-05-28 | **分析周期**: 过去 24 小时

项目整体处于高速迭代与架构重构并行的状态。基于昨日 GitHub 活动数据，呈现以下动态分析报告。

---

### 1. 今日速览
过去 24 小时，IronClaw 展现出**极高的开发活跃度与健康的社区参与度**。项目共产生 **21 条 Issue 更新**（16 新开/活跃，5 关闭）和 **50 条 PR 更新**（23 待合并，27 已合并/关闭），合并率高达 54%，表明代码审查与主干推进非常顺畅。
当前核心焦点高度集中在 **Reborn 架构重构** 上，涉及底层 Agent 循环、权限策略、上下文压缩以及外部集成（如 GSuite OAuth 和 WebChat v2）。此外，社区反馈了关于 DeepSeek API 兼容性和 UI/UX 的关键问题。整体来看，项目核心架构正在快速走向成熟与稳定。

---

### 2. 版本发布
**无**。近 24 小时内未发布新的正式版本或 Release。目前项目仍处于高频功能迭代与架构重构阶段。

---

### 3. 项目进展
今日共有 27 个 PR 被合并或关闭，大量核心功能稳步合入主干，标志着 Reborn 架构取得了实质性突破：

*   **子智能体架构优化**：
    *   **PR #4148** (已关闭)：出于稳定性考虑，暂时从公共 schema 中移除了后台子智能体模式 (`mode` 和 `run_in_background`)，默认回退到阻塞模式，避免未完成的后台任务导致状态挂起。
    *   **PR #4087** (已合并)：引入了 `coder` 和 `explorer` 两种子智能体风格，丰富了智能体编排能力。
*   **安全与凭证管理**：
    *   **PR #4070** (已合并)：增加了 Reborn 产品级 Auth Token 刷新的生命周期管理，包括隔离未授权凭证。
    *   **PR #4136** (已合并)：将运行时缺失凭证的报错从“致命错误”转化为“Auth 门控阻塞状态”，提升了交互体验。
*   **提示词与上下文管理**：
    *   **PR #4140** (已合并)：将模型可见的代码片段内容与安全摘要严格分离，防止敏感信息泄露。
    *   **PR #4141** (已合并)：区分了安全摘要与可信技能指令的验证策略。
    *   **PR #4143** (已合并)：移除了单技能的代码段大小限制，转而使用全局总预算控制。
*   **WebUI v2 与沙盒**：
    *   **PR #4094** (已合并)：重新应用了进程级沙盒生成的审批流转机制，增强了执行安全性。

---

### 4. 社区热点
当前讨论最热烈、关注点最高的议题主要集中在第三方模型兼容性与核心系统级 API 的设计上：

1.  **DeepSeek 推理模式兼容性问题** ([Issue #3436](https://github.com/nearai/ironclaw/issue/3436))
    *   **热度**: 👍 1 | 评论: 1
    *   **分析**: 用户在使用 DeepSeek 作为底层 LLM 且开启思考模式时，遇到 `400 Bad Request` 错误。根本原因是 IronClaw 在回传上下文时未能正确处理 `reasoning_content`。这反映了项目在适配非 OpenAI 标准的第三方开源大模型时存在痛点。
2.  **Reborn 架构核心工作流设计** ([Issue #3280](https://github.com/nearai/ironclaw/issue/3280))
    *   **热度**: 评论 4
    *   **分析**: 核心贡献者 @serrrfirat 发起，旨在添加面向产品层的 `ProductWorkflow`，这是 Reborn 架构中连接适配器与宿主服务的关键门面，涉及多达十几个底层 Issue 的联动。
3.  **声明式能力策略重构** ([PR #4127](https://github.com/nearai/ironclaw/pull/4127))
    *   **分析**: 该 PR 试图将硬编码在 Rust 中的本地开发内置授权策略迁移到 TOML 配置文件中（Configuration-as-Code），这是一个具有前瞻性的重大架构调整。

---

### 5. Bug 与稳定性
今日报告了若干影响稳定性的 Bug，涵盖 CI/CD、底层运行机制和 UI 体验：

*   **P0 - 严重/阻塞**：
    *   **Nightly E2E 测试失败** ([Issue #4108](https://github.com/nearai/ironclaw/issue/4108))：Nightly E2E 计划任务运行失败（v2-engine 报错）。*状态：暂无对应修复 PR，需核心团队优先排查。*
*   **P1 - 核心功能缺陷**：
    *   **DeepSeek API 兼容性** ([Issue #3436](https://github.com/nearai/ironclaw/issue/3436))：导致思考模式下的多轮对话直接崩溃。*状态：暂无关联 PR。*
    *   **沙盒环境变量失效** ([Issue #4106](https://github.com/nearai/ironclaw/issue/4106))：Setup wizard 中的沙盒镜像检测绕过了 `SANDBOX_IMAGE` 环境变量，始终探测硬编码的默认值。*状态：暂无关联 PR。*
*   **P2 - 模型鲁棒性/边缘场景**：
    *   **量化模型工具调用失效** (已修复): 量化模型在工具调用时习惯将可选参数输出为字符串 `"null"` 而非省略，该问题已通过 [PR #4133](https://github.com/nearai/ironclaw/pull/4133) 修复合并。
*   **P3 - UI/UX 问题**：
    *   **微信端渠道删除按钮不可见** ([Issue #4115](https://github.com/nearai/ironclaw/issue/4115))：用户反馈在确认删除对话框中，移除按钮在鼠标悬停前几乎不可见。*状态：暂无关联 PR。*

---

### 6. 功能请求与路线图信号
从近期的 Issue 与 PR 动向中，可以清晰看出 IronClaw 即将迎来的版本重点：

1.  **企业级集成**：GSuite OAuth 集成已经全面铺开。目前底层 OAuth 后端 ([PR #4111](https://github.com/nearai/ironclaw/pull/4111)) 正在审查，相关的上下游跟进如 Token 刷新机制 ([Issue #4113](https://github.com/nearai/ironclaw/issue/4113)) 和 WebUI 授权提示界面 ([Issue #4112](https://github.com/nearai/ironclaw/issue/4112)) 均已提上日程。
2.  **上下文与记忆优化**：随着 [PR #4110](https://github.com/nearai/ironclaw/pull/4110) 引入上下文压缩机制的第一阶段，未来处理超长对话的内存与 Token 消耗将大幅降低。
3.  **增强 Skill 激活机制**：社区及核心开发组正在推进基于正则表达式的技能激活配置 ([PR #4144](https://github.com/nearai/ironclaw/pull/4144)) 以及基于模型选择的技能激活 ([PR #4146](https://github.com/nearai/ironclaw/pull/4146))。这意味着智能体的工具调用将更加精准和智能。

---

### 7. 用户反馈摘要
从最新的 Issue 描述和标签中，可以提炼出真实用户的以下核心反馈：
*   **私有化部署与大模型适配需求强烈**：用户不仅使用 OpenAI，也在积极接入 DeepSeek。项目在处理不同大模型“非标”行为（如 `reasoning_content` 缺失、弱模型输出 `"null"` 字符串）时的容错能力，直接影响了社区用户的体验。
*   **多端 UI 细节一致性有待提高**：用户在不同渠道（如 WeChat, WebUI v2）进行操作时，遇到了样式交互（如按钮不可见）或自动命名缺失 ([Issue #4142](https://github.com/nearai/ironclaw/pull/4142) 提及的 `Thread <uuid>` 兜底展示）等问题。
*   **运行时环境配置不够灵活**：环境变量优先级被硬编码逻辑覆盖 ([Issue #4106](https://github.com/nearai/ironclaw/issue/4106))，增加了运维和定制化部署的踩坑成本。

---

### 8. 待处理积压
以下关键 Issue/PR 虽处于开启状态，但需要维护者重点关注以防阻塞进度：

*   **[积压 PR] 重量级架构调整待 Review**：
    *   [PR #4111](https://github.com/nearai/ironclaw/pull/4111) (Add GSuite OAuth backend) 和 [PR #4110](https://github.com/nearai/ironclaw/pull/4110) (Context compaction phase one) 作为外部集成和核心内存管理的基石，目前仅有少量评论，需要核心架构师尽快推进代码审查。
*   **[积压 Issue] 阻塞性问题缺乏跟进**：
    *   [Issue #4108](https://github.com/nearai/ironclaw/issue/4108) (Nightly E2E failed)：CI 流水线的失败可能掩盖近期合入代码的潜在回归风险，建议立即排查 Commit `9df5e8db`。
    *   [Issue #4102](https://github.com/nearai/ironclaw/issue/4102) (Grant expiry enforcement)：涉及安全层面的 Token 过期与租户范围隔离，属于高风险遗留项，建议在 Reborn 正式发布前解决。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 (2026-05-28)

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 分析周期：过去 24 小时

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持了**高度活跃**的开发状态，成功发布了 `2026.5.27` 全新版本，核心引入了媒体生成与插件双向同步等重量级功能。项目今日共处理了 **23 条 Pull Requests**（其中 18 条处于待合并的活跃状态，5 条已合并/关闭），显示出庞大的功能迭代管线和极高的开发者参与度。社区侧共有 **2 个 Issues 更新**（无已关闭项），主要聚焦在长时间任务执行限制和会员登录的稳定性痛点。整体来看，项目正处在功能大踏步向前（如 Kit 商店、UI 升级）与底层稳定性打磨并存的关键阶段。

---

## 2. 版本发布

**[LobsterAI 2026.5.27](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27)** 
- **发布日期**：2026-05-27
- **核心更新**：
  - **媒体生成能力支持**：集成 Kling V3、抖音等视频生成模型，并引入基于配额的权益管理 ([PR #2064](https://github.com/netease-youdao/LobsterAI/pull/2064))。
  - **体验优化**：支持在对话输入框中点击图片附件进行全屏预览 ([PR #2061](https://github.com/netease-youdao/LobsterAI/pull/2061))。
  - **架构增强**：新增 HTML 分享服务，实现 OpenClaw 插件与技能的双向同步，并修复了网关重启引发的相关 Bug。
- **迁移注意事项**：暂无明显的破坏性变更声明，但由于引入了媒体配额管理系统，私有化部署的用户在升级时可能需要关注后端计费与配额策略的配置更新。

---

## 3. 项目进展

今日共有 5 个 PR 被合并或关闭，进一步稳固了项目的核心功能，并为新版本的发布铺平了道路：
- **新版本代码合入**：[PR #2064](https://github.com/netease-youdao/LobsterAI/pull/2064) 成功合并，将 2026.5.25/27 的特性全面推向主分支。
- **交互细节优化**：[PR #2061](https://github.com/netease-youdao/LobsterAI/pull/2061) 优化了协作输入框中的图片预览体验。
- **IM 模块修复**：[PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063) 修复了 IM 消息回复组装时未限定当前轮次及未过滤思考块的问题，提升了即时通讯场景下的对话清洁度。

---

## 4. 社区热点

目前社区最活跃、关注度最高的讨论集中在引入颠覆性新功能和底层架构优化的 PR 上（多数 PR 处于 Open 状态等待最终 Review）：
- **Kit（专家套件）商店集成 [PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060)**：提出了将 Skills 打包成 Kit 一键安装的商店概念，实现浏览器、搜索、安装及对话区深度集成。这反映了项目向 **"AI 智能体应用市场"** 迈进的重要信号。
- **定时任务模块的全面重构 [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)**：计划将任务列表从表格升级为卡片网格，并增加历史任务搜索和分组功能，直击用户对复杂任务管理体验不佳的痛点。

---

## 5. Bug 与稳定性

今日共收到 2 个重要的 Bug 反馈，均未关闭且暂无关联的修复 PR，需要重点关注：
1. **🔴 P0 级别：任务超过最大时长 [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)**
   - **现象**：用户尝试构建 24 小时连续运行的任务时，触发 `[Task timed out]` 被强制停止，且无法确认后台是否仍在静默运行。
   - **影响**：严重影响将 LobsterAI 用于长时间 RPA 或自动化批处理场景的可靠性。
2. **🟠 P1 级别：会员登录频繁失败 [Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)**
   - **现象**：付费会员登录频频受阻，导致无法使用网易的付费高级模型。
   - **影响**：直接阻塞了商业转化路径和付费用户的留存。

---

## 6. 功能请求与路线图信号

从活跃的 PR 管线和社区提案中，可以观察到项目下一阶段的演进方向：
- **长上下文管理机制**：[PR #1499](https://github.com/netease-youdao/LobsterAI/pull/1499) 提出了会话自动裁剪功能，解决长对话导致模型上下文溢出的崩溃问题。这极有可能在下一版作为核心稳定性更新合入。
- **桌面端原生体验强化**：[PR #1497](https://github.com/netease-youdao/LobsterAI/pull/1497) 为 Windows 新增了关闭按钮行为配置（最小化到任务栏 vs 退出应用）。
- **系统提示词安全管控**：[PR #1485](https://github.com/netease-youdao/LobsterAI/pull/1485) 修复了在 UI 中被禁用的技能依然在对话中被模型调用的问题，提升了路由管控的安全性。

---

## 7. 用户反馈摘要

通过对近期 Issue 的提炼，真实用户的核心痛点主要聚焦于以下两点：
1. **执行边界的不透明性**：用户对于后台任务的起停状态缺乏感知（如 Issue #2062），项目在 Agent 后台静默运行机制、超时预警等方面亟需完善状态反馈 UI。
2. **账号与付费链路的阻碍**：登录失败（Issue #1903）直接切断了用户体验高价值服务的路径。由于 LobsterAI 强依赖云端付费模型，网络及账号鉴权的容错机制将成为影响开源口碑的关键。

---

## 8. 待处理积压

仓库中积累了大量标记为 `[stale]` 的高价值 PR，等待维护团队进行 Code Review 并推进合并，建议优先关注以下几项：
- **依赖安全与工程化升级**：Dependabot 提交的安全更新已停滞近两个月，建议批量验证后合入。
  - [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：Electron 核心版本大跨步升级（40.2.1 -> 42.2.0）。
  - [PR #1491](https://github.com/netease-youdao/LobsterAI/pull/1491)，[PR #1492](https://github.com/netease-youdao/LobsterAI/pull/1492)，[PR #1493](https://github.com/netease-youdao/LobsterAI/pull/1493)：核心 GitHub Actions 依赖升级。
- **技能状态同步失效**：[PR #1501](https://github.com/netease-youdao/LobsterAI/pull/1501) 和 [PR #1505](https://github.com/netease-youdao/LobsterAI/pull/1505) 集中修复了技能列表更新不同步、禁用无效的前端状态管理 Bug。这类问题对日常使用干扰较大，建议提升处理优先级。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project daily report for 2026-05-28, structured and analyzed from an open-source project analyst's perspective:

---

# 📊 Moltis 项目动态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时，Moltis 项目整体保持稳健的活跃度，数据层面呈现“清旧账、迎新议”的特征。今日虽无新版本发布，但社区贡献与反馈仍在持续。代码库方面，维护者合并/关闭了 2 个拉取请求，其中涉及记忆系统底层向量逻辑的重构清理；社区方面，新增 2 个议题，分别报告了特定条件下的参数校验 Bug 以及来自外部商业公司的合作意向。总体而言，项目目前处于功能迭代后的平稳维护期，核心维护团队对代码质量的把控依然严格。

## 2. 版本发布
**无**。今日未发布任何新版本或补丁。

## 3. 项目进展
今日共有 2 个拉取请求被关闭，代码库主要在清理周边生态和底层实验性功能：
*   **清理向量维度自动重建索引逻辑**：PR [#1074](https://github.com/moltis-org/moltis/pull/1074) `(memory): Configurable embedding dimensions with safe auto-reindex` 被关闭。该 PR 尝试为 OpenAI 兼容的嵌入提供者添加可选的 `dimensions` 配置，并在维度变更时触发安全的自动重建索引。尽管被关闭（未合并），这表明项目在 RAG/记忆系统的向量存储灵活性上正在进行积极的技术探索。
*   **移除/搁置 Novita AI 作为第三方供应商**：PR [#451](https://github.com/moltis-org/moltis/pull/451) `feat(providers): add Novita AI as OpenAI-compatible provider` 被关闭。该 PR 历时两个月未合并，意在通过兼容端点引入 `kimi-k2.5` 和 `deepseek-v3.2` 等模型。其关闭表明维护者目前倾向于保持核心供应商列表的精简，或建议用户通过统一的 OpenAI 兼容接口自行接入。

## 4. 社区热点
今日最活跃的讨论来源于新开的两条议题，展现了项目在**技术可靠性**与**商业生态**两个维度的动态：
*   **合规与商业合作意向**：Issue [#1076](https://github.com/moltis-org/moltis/issues/1076) `Partnership inquiry — MyClaw.ai × Moltis`。由 MyClaw.ai（一家提供 OpenClaw 托管云服务的平台）发起合作邀请。这说明 Moltis 在达到 2.7K Stars 后，其“Rust 编写、单二进制、沙箱化”的安全个人 Agent 定位已经引起了周边商业托管服务的关注，项目具备良好的商业潜在价值。
*   **用户名一致性报错**：Issue [#1077](https://github.com/moltis-org/moltis/issues/1077) `[Bug]: Error: invalid params, user name must be consistent (2013)`。这是一个引发基础功能异常的 Bug，涉及底层的参数校验逻辑，引起了社区成员的关注。

## 5. Bug 与稳定性
今日记录到 1 个明确的稳定性 Bug，暂无关联的修复 PR：
*   🐛 **[中等] 用户名一致性校验异常**：[Issue #1077](https://github.com/moltis-org/moltis/issues/1077)
    *   **现象**：用户在运行最新版本时遇到 `Error: invalid params, user name must be consistent (错误代码: 2013)` 的报错拦截。
    *   **分析**：此问题可能与多会话状态同步或用户身份校验机制有关。由于报告者提供了详尽的排查清单和上下文，预计维护者能较快定位问题。目前尚待官方响应。

## 6. 功能请求与路线图信号
结合今日动态，可以提取出以下关于项目演进方向的信号：
*   **Memory/RAG 系统的高阶配置化**：尽管 PR [#1074](https://github.com/moltis-org/moltis/pull/1074) 被关闭，但“允许自定义 Embedding 维度”的需求客观存在。未来极有可能以更优雅、破坏性更小的方式（例如在全局配置文件中支持多路向量化模型）重新进入路线图。
*   **LLM 供应商的无限扩展机制**：PR [#451](https://github.com/moltis-org/moltis/pull/451) 的关闭释放了一个强烈信号——Moltis 可能不会再将所有兼容 OpenAI 协议的第三方 API 源码级内置到主库中。未来版本中，项目可能会推出更标准的“自定义 Provider”规范或插件机制，将接入权交还给用户。

## 7. 用户反馈摘要
从今日的议题和代码提交记录中，可以提炼出以下真实用户诉求：
*   **痛点：多模型切换带来的向量兼容问题**：用户在使用不同维度输出的 LLM 模型时，可能会引发 Memory 系统的检索失效。他们迫切需要一种平滑切换模型而不丢失历史记忆的解决方案。
*   **场景：云托管与多端部署**：MyClaw.ai 的合作请求证实，很多用户不仅是在本地运行单二进制，而是有将 Moltis 部署在云端、作为持久化个人智能体服务器长期运行的实际需求。

## 8. 待处理积压
目前今日新开的议题均处于**“待响应”**状态，请维护者重点关注：
1.  🔴 **[需响应] 身份校验阻断错误**：[Issue #1077](https://github.com/moltis-org/moltis/issues/1077) 已确认影响正常使用，需确认是否为回归 Bug 或部署环境配置问题。
2.  🟡 **[需定夺] 商业合作与生态拓展**：[Issue #1076](https://github.com/moltis-org/moltis/issues/1076) 需要核心团队评估是否与云托管厂商建立官方合作关系，这有助于 Moltis 的破圈和降低普通用户的部署门槛。

---
*分析备注：项目整体健康度良好。PR 的新开/合并数虽处于低位，但来自社区的 Issue 质量较高（有完整的预检清单，有商业合作意向），说明项目正在吸引更成熟的用户群体。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 (2026-05-28)

## 1. 今日速览
CoPaw (QwenPaw) 项目今日保持**高活跃度**，成功发布了备受瞩目的 `v1.1.9` 正式版，标志着项目在桌面端原生体验和 IDE 集成方面迈出了重要一步。过去 24 小时内，社区互动频繁，共产生 40 条 Issue 更新（25 新开/活跃，15 关闭）和 27 条 PR 更新（12 待合并，15 已合并/关闭），合入效率极高。新版本带来的 Tauri 2.x 桌面端及 Coding Mode 受到社区热烈欢迎，但也因此引发了一系列与子进程和系统兼容性相关的边缘 Bug。整体而言，项目迭代健康，社区贡献者参与度显著提升。

---

## 2. 版本发布
今日项目迎来了重要的版本更新，正式推送了 **v1.1.9** 及其前置测试版：

*   **[v1.1.9](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9)**
    *   **核心更新**：引入基于 Tauri 2.x 的全新原生桌面应用（支持 macOS 和 Windows）([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813))；新增 Web IDE 的 **Coding Mode（编码模式）**，采用三面板布局（文件树、带内联提示的编辑器）。
*   **[v1.1.9-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.9-beta.2)**
    *   **功能改进**：增强了桌面端（如 pywebview）的 OAuth 外部链接重定向支持 ([PR #4679](https://github.com/agentscope-ai/QwenPaw/pull/4679))；Coding Mode 激活时支持无缝重定向 ([PR #4677](https://github.com/agentscope-ai/QwenPaw/pull/4677))。

---

## 3. 项目进展
今日共有 15 个 PR 被合并或关闭，主要围绕 v1.1.9 的稳定性修复及用户体验增强，有效推进了项目的成熟度：

*   **IDE 与编码体验增强**：
    *   合并了 [PR #4716](https://github.com/agentscope-ai/QwenPaw/pull/4716)，为 Coding Mode 的 diff 编辑器增加了按代码块保留/撤销及智能复制到聊天窗口的功能。
    *   合并了 [PR #4718](https://github.com/agentscope-ai/QwenPaw/pull/4718)，修复了 Windows 环境下 SVG MIME 类型识别错误导致控制台 Logo 无法渲染的问题。
*   **会话与交互修复**：
    *   合并了 [PR #4720](https://github.com/agentscope-ai/QwenPaw/pull/4720)，实现了对话消息的时间戳格式化显示（响应了社区高频诉求）。
    *   合并了 [PR #4725](https://github.com/agentscope-ai/QwenPaw/pull/4725)，优化了工作区下载按钮的状态反馈，防止用户重复点击。
*   **底层与稳定性**：
    *   合并了 [PR #4690](https://github.com/agentscope-ai/QwenPaw/pull/4690)，修复了布尔值模式清理器导致 OpenAI 兼容提供商拒绝请求的严重 Bug。
    *   合并了 [PR #4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)，移除了 Windows 子进程创建时的 `CREATE_NO_WINDOW` 标志，以解决引发 Windows Defender 误报的问题。

---

## 4. 社区热点
今日社区讨论最活跃、热度最高的问题集中在任务认领和底层能力的优化上：

*   **🏆 [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) [OPEN] (评论: 63)**：官方发布的“Help Wanted: Open Tasks”任务看板。大量开发者在认领 P0-P2 优先级的任务，显示出社区对参与 CoPaw 贡献的极高热情。
*   **🔥 [Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) [OPEN] (评论: 3)**：开发者指出当前 Agent 记忆系统“只记录不提炼、只堆砌不学习”的痛点，建议增加“总结-关联-提醒”机制，引发了关于 CoPaw 长期记忆架构的深度探讨。
*   **💬 [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) [OPEN] (评论: 5)**：建议将工作目录的默认文件（如配置、日志等）统一收敛至类似 `.qwenpaw` 的隐藏文件夹中，以保持用户工作目录的整洁。

---

## 5. Bug 与稳定性
今日报告的 Bug 大多与最新发布的 v1.1.9 桌面端及子系统隔离有关，部分已确认并有 PR 跟进：

**🔴 严重 (导致阻塞或核心功能不可用)**
*   **macOS Tahoe 崩溃**：升级至 macOS Tahoe 26.5 后，通过飞书频道接收消息时桌面应用直接崩溃 (SIGSEGV) ([Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704))。
*   **Coding Mode 思维链丢失**：修复了在特定 `[thinking, file]` 组合下，助手消息整个消失的严重回归问题 ([PR #4728](https://github.com/agentscope-ai/QwenPaw/pull/4728) **[待合并]**)。
*   **定时任务抢占与僵尸任务**：定时任务与用户消息共享 Session 导致任务被中断 ([Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) [CLOSED])，以及配置更新后孤儿 Cron Job 未清理导致无限执行 ([Issue #4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) [CLOSED])。

**🟠 中等 (影响体验)**
*   **Windows 子进程网络隔离**：v1.1.9-beta.1 中，无法在本地 CLI 命令中执行涉及网络请求的操作（如飞书 CLI），怀疑是子进程网络隔离所致 ([Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712))。
*   **对话丢失/中断**：切换页面后历史对话记录消失 ([Issue #4713](https://github.com/agentscope-ai/QwenPaw/issues/4713))；推理未结束时新任务无法入队 ([Issue #4714](https://github.com/agentscope-ai/QwenPaw/issues/4714))。
*   **MIME 类型与杀毒误报**：SVG 渲染失败 ([Issue #4700](https://github.com/agentscope-ai/QwenPaw/issues/4700)，已在 #4718 修复) 及 Windows Defender 误报病毒 ([Issue #3718](https://github.com/agentscope-ai/QwenPaw/issues/3718)，已在 #4723 修复)。

---

## 6. 功能请求与路线图信号
从近期开放的 Issues 和 PRs 来看，CoPaw 正在向**企业级多用户管理**、**更丰富的插件生态**及**精细化 Token 管理**方向演进：

*   **企业级 RBAC 需求**：用户呼吁支持管理员和多用户体系 ([Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702))，表明 CoPaw 正在被纳入企业选型视野。
*   **Token 缓存命中统计**：请求在 Token 消耗看板中显示 Prompt 缓存命中/未命中状态，以便精准估算成本 ([Issue #4721](https://github.com/agentscope-ai/QwenPaw/issues/4721))。
*   **更优的 Hook 与进化机制**：建议内置类似 Claude Code 的 Hook 机制以支持自我学习 ([Issue #4729](https://github.com/agentscope-ai/QwenPaw/issues/4729))。
*   **即将合入的新能力**：
    *   **GitLab 技能源集成**：[PR #4719](https://github.com/agentscope-ai/QwenPaw/pull/4719) 正在审查中，将支持自托管 GitLab 实例。
    *   **数据分析插件 DataPaw**：[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) 正在审查中，提供 12 种内置 BI 技能。
    *   **小米 MiMo 模型接入**：[PR #4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) 及 [Issue #4715](https://github.com/agentscope-ai/QwenPaw/issues/4715) 提出内置小米 MiMo Token Plan 作为默认 Provider。
    *   **“一键全部批准”**：[PR #4701](https://github.com/agentscope-ai/QwenPaw/pull/4701) 提出在工具确认卡中增加全局批准按钮，极大优化自动化任务的体验。

---

## 7. 用户反馈摘要
通过对 Issue 的提炼，真实用户的痛点和使用场景主要集中在以下几个方面：

1.  **UI 交互细节待打磨**：用户反馈非常集中在“没有时间戳”（已在今日修复）、“技能改名导致 Agent 丢失报错” ([Issue #4680](https://github.com/agentscope-ai/QwenPaw/issues/4680))、“重启后无法恢复上次的会话和智能体” ([Issue #4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)) 等基础状态管理上。
2.  **工作空间污染**：用户对当前系统文件与个人文件混杂的目录结构感到困扰 ([Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408))。
3.  **长任务与并发处理薄弱**：用户在执行较长时间的脚本或定时任务时，极易被新消息“打断”或被卡死，对后台排队、异步执行机制的诉求强烈 ([Issue #4714](https://github.com/agentscope-ai/QwenPaw/issues/4714))。
4.  **第三方模型兼容性**：接入第三方思考模型（如 MiniMax-M2.5）时，遇到 XML 格式解析不兼容导致指令中断的情况 ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625))。

---

## 8. 待处理积压
以下关键 PR/Issue 仍处于 Open 状态，建议维护团队优先关注推进：

*   **核心架构重构/优化 PRs**：
    *   [PR #4655](https://github.com/agentscope-ai/QwenPaw/pull/4655) `feat(console): enhance Chat V2 session panel and tool rendering`：V2 版本会话面板优化，尚未合并。
    *   [PR #4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) `fix(coding): hide Windows git console windows in coding mode`：解决 Windows 桌面版弹出黑色控制台窗口的体验问题。
    *   [PR #4708](https://github.com/agentscope-ai/QwenPaw/pull/4708) `feat(feishu): feishu thread reply`：支持飞书话题内回复，极大提升多轮对话体验。
*   **质量保障体系建设**：
    *   [PR #4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) `feat(e2e): migrate python_e2e into CoPaw with mock infrastructure`：端到端测试基础设施迁移，对后续稳定性至关重要。
    *   [Issue #4339](https://github.com/agentscope-ai/QwenPaw/issues/4339) `修复现有测试 + security + agents/tools&utils 单测覆盖 (Phase 0-2)`：目前仍为 Open 状态，单元测试覆盖率有待按计划推进。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-28)

## 1. 今日速览
ZeroClaw 项目在过去24小时内保持了极高的社区活跃度与推进势头。虽然今日无新的版本发布，但产生了 **30 条 Issue 更新**（20 新增/活跃，10 关闭）和 **50 条 PR 更新**（38 待合并，12 已合并/关闭）。开发重心明显向 **v0.8.1 版本的缺陷修复**、**安全边界加固** 以及 **底层架构重构** 倾斜。维护者 Audacityxx 及多位核心贡献者正在高负荷运转，集中清理阻断级 Bug 和积压的技术债，项目整体处于一个非常健康的快速迭代期。

## 2. 版本发布
**无新版本发布。** 项目当前主要致力于 v0.8.1 的前期准备工作与架构梳理，主线仍在密集修复 S0/S1 级别的缺陷。

## 3. 项目进展
今日共有 12 个 PR 被合并或关闭，主要推进了以下关键领域的进展：
*   **安全与密钥管理架构升级**：由 mn13 提交的 `feat(config): generalize #[secret] via SecretField trait` (#6918) 已合并，为配置系统提供了更统一、安全的密钥处理机制。
*   **核心运行时体验优化**：合并了修复交互式终端日志干扰的 PR (#6947)，以及使 Discord 频道 429 限流重试机制重归正常的修复 (#6934)。
*   **测试基础设施加固**：替换了并行分发测试中依赖墙上时钟的脆弱断言 (#6962)，显著提升了 CI 的稳定性。
*   **多渠道 API 标准化**：引入了 `ChannelMessage::new` 和 `SendMessage::reply_to` 构造器 (#6951)，为统一各渠道消息处理奠定了基础。

## 4. 社区热点
今日最受关注的讨论主要集中在深度兼容性、长期架构演进与安全策略上：
*   **DeepSeek-V4 API 兼容性问题** ([#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059))：产生了 14 条评论和 4 个点赞。由于思考模式的解析错误，导致 DeepSeek 作为 Provider 时遭遇退化，这反映了社区对前沿大模型即时兼容性的强烈诉求。
*   **153 个提交批量回滚的恢复审计** ([#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074))：维护者正在努力追回此前因紧急回滚而丢失的代码，体现了项目对代码资产和已审核特性的严谨态度。
*   **RFC: 治理与看板自动化** ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808))：7 条评论，讨论如何通过轻量级 PR 泳道和自动标签系统来优化维护者工作流。

## 5. Bug 与稳定性
今日报告了多个高优先级的 Bug，部分已确认修复方案或正在处理中：

**S0 - 严重安全漏洞 (数据泄露风险)**
*   配置对象数组中嵌套密钥未脱敏 ([#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978))：目前暂无关联修复 PR，需高度关注。

**S1 - 工作流阻断 (Workflow Blocked)**
*   Windows 桌面构建因重复 MANIFEST 失败 ([#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964))：CI/CD 管线目前被阻断。
*   Web UI Canvas 无法接收推送帧 ([#6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965))：Web 端核心可视化功能受影响。
*   `zeroclaw onboard` 标记完成但未写入配置 ([#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975))：新用户首次配置流程受阻断。
*   工具访问策略 未对内置工具生效 ([#6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959))：存在安全隔离逃逸风险。（已关联活跃 PR #6924 进行修复）

**S2 - 行为退化**
*   Web UI WebSocket 缺失 `?agent=` 导致连接失败 ([#6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976))。
*   Matrix 频道会话失忆问题 ([#6958](https://github.com/zeroclaw-labs/zeroclaw/issues/6958))：（已有对应修复 PR #6967 提交）。

## 6. 功能请求与路线图信号
根据活跃的 RFC 和功能追踪器，v0.8.x 及后续版本的路线图正在成型：
*   **统一输出路由模型** ([#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969))：从 Letta 迁移用户的诉求引发了关于增强消息传递目的地控制的讨论。
*   **安全 UX 与凭据隔离** ([#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971))：旨在让 ZeroClaw 默认更安全，提供可见的信任信号。
*   **插件系统重构** ([#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943))：提议放弃 Extism 转向 `wasmtime` 组件模型。
*   **v0.8.1 整合队列开启** ([#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970))：维护者已建立针对 v0.8.1 渠道、Provider 和工具 PR 的官方路由追踪单。

## 7. 用户反馈摘要
从 Issue 描述和评论中，可以提炼出当前用户的几个典型切面：
*   **自托管与前沿模型追随者**：积极尝鲜 DeepSeek-V4 等最新模型，但在非 OpenAI 标准的 API 特性（如 extended thinking）上容易遇到解析阻断。
*   **高级自动化玩家**：重度依赖定时任务和多渠道转发，对 WebSocket 的流式响应持久性要求极高（如 #6969 提到的晨报推送需求）。
*   **端侧/轻量化部署受挫**：在使用无 F 键的紧凑型键盘（如 Keychron）操作 TUI 时遇到障碍；在 rootless Podman 环境下部署容器时遭遇进程意外退出。

## 8. 待处理积压
*   **PR #5164 [需作者操作]**：关于 `web_fetch` 允许私有主机的修复，该 PR 已开启近 2 个月，目前受阻于维护者审核，建议尽快推进以解决长期以来的 DNS 检查阻断问题。
*   **Issue #6915 [Blocked]**：技能作用域内临时提升工具权限的功能请求，目前处于阻塞状态，等待维护者确定最终的安全边界设计方案。

</details>