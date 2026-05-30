# OpenClaw 生态日报 2026-05-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-30 22:17 UTC

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

# OpenClaw 项目动态日报 (2026-05-31)

## 1. 今日速览

过去 24 小时，OpenClaw 项目保持**极高的社区活跃度与高负荷运转状态**。项目新增或活跃的 Issues 达到 435 条，PR 更新达 500 条（包含 344 条待合并），表明社区开发和测试热情高涨。与此同时，团队合入/关闭了 156 个 PR 并关闭了 65 个 Issues，处理吞吐量维持健康水平。今天发布了 2 个新版本（`v2026.5.28` 及其 Beta 版），核心聚焦于 **Agent 与 Codex 运行时的稳定性恢复**，反映出项目正处于从快速迭代向底层稳定性攻坚的关键阶段。

## 2. 版本发布

今天项目发布了 2 个新版本，主要针对近期突出的 Agent 和 Codex 运行时崩溃与状态混乱问题：

- **[v2026.5.28](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28) (Stable)**
- **[v2026.5.28-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28-beta.4) (Beta)**

**更新 Highlights:**
Agent 和 Codex 运行时的恢复能力得到显著增强。具体包括：
1. 子代理运行时保持更严格的 `cwd/workspace` 隔离。
2. 钩子上下文被限定在 prompt 局部作用域内，防止状态污染。
3. 会话锁在超时中止时能够正确释放，且存活状态的 OpenClaw 锁不会被错误清理。
4. 修复了重启后陈旧会话被错误续作的问题。
5. Codex app-server/helper 故障不再导致共享运行时状态崩溃。

**迁移注意事项：** 本次更新大量涉及会话状态锁与子代理隔离机制，强烈建议从 `v2026.5.27` 及更早版本升级的用户，升级后执行 `openclaw doctor --fix` 清理陈旧会话路由状态。

## 3. 项目进展

今日共有 156 个 PR 被合并或关闭，涵盖核心架构重构、安全加固、渠道修复和 UI 改进，项目整体稳健推进：

- **[PR #88427](https://github.com/openclaw/openclaw/pull/88427) fix(auth): bound inherited oauth expiry**: 修复子代理继承的 OAuth 过期时间未被正确校验导致越界的严重鉴权问题。
- **[PR #88451](https://github.com/openclaw/openclaw/pull/88451) refactor: unify OpenAI provider identity**: 统一 OpenAI 提供商的身份标识（包含 ChatGPT/Codex OAuth 传输层重命名），大幅清理历史技术债务。
- **[PR #88459](https://github.com/openclaw/openclaw/pull/88459) refactor: extract normalization core package**: 将核心标准化/强制转换辅助函数抽取为独立工作区包 `@openclaw/normalization-core`，为后续多包架构打下基础。
- **[PR #88252](https://github.com/openclaw/openclaw/pull/88252) fix(agents): avoid full stream replay on text deltas**: 优化普通文本增量的流式响应，避免全量重解析，显著降低流式输出性能开销。
- **[PR #87929](https://github.com/openclaw/openclaw/pull/87929) fix(cron): preserve plugin delivery targets**: 修复 cron 任务插件投递目标在解析后被错误剥离导致消息无法送达的严重问题。
- **[PR #88421](https://github.com/openclaw/openclaw/pull/88421) [codex] Fix Telegram DM topic session routing**: 修复 Telegram DM 主题会话路由不一致导致消息丢失的 Bug。
- **[PR #84247](https://github.com/openclaw/openclaw/pull/84247) Feat/browser screenshot vision**: 重新设计浏览器截图视觉功能，复用现有媒体图像理解运行时，避免独立的模型配置。

## 4. 社区热点

今日社区讨论最热烈的问题集中在 **飞书渠道崩溃、Codex 运行时兼容性以及多平台会话状态丢失**：

1. **[Issue #87646](https://github.com/openclaw/openclaw/issues/87646) (👍 1, 评论 11)**: **飞书渠道升级后全面瘫痪**。升级至 `v2026.5.27` 后，飞书直接消息无法分发 (`TypeError: Cannot read properties of undefined (reading 'run')`)，被标记为 P1 和 `impact:message-loss`。此问题直接阻碍了国内用户的核心使用场景。
2. **[Issue #86820](https://github.com/openclaw/openclaw/issues/86820) (👍 6, 评论 12)**: **Codex OAuth 压缩回退失败**。会话压缩期间因回退直接调用 OpenAI API 而失败，反映出 OAuth 鉴权网关路由的脆弱性。
3. **[Issue #87650](https://github.com/openclaw/openclaw/issues/87650) (👍 4, 评论 5)**: **升级后 Codex 提供商/运行时状态不匹配，`doctor --fix` 无法自愈**，暴露出升级迁移工具覆盖面不足的问题。
4. **[Issue #87744](https://github.com/openclaw/openclaw/issues/87744) (👍 2, 评论 6)**: **Telegram 渠道在使用 Codex 后台时反复超时等待** `turn/completed`，导致会话无法产出最终回答，引发业务中断。

## 5. Bug 与稳定性

今日报告的缺陷与崩溃问题仍处于高位，部分严重影响生产环境可用性：

### 🔴 P1 严重
- **[Issue #88352](https://github.com/openclaw/openclaw/issues/88352) [Bug]: Codex 无上下文引擎启动时丢失先前会话上下文**：最新 PR #88262 引入的回归，导致无安全续作线程时直接丢失上下文。*(暂无 Fix PR)*
- **[Issue #88020](https://github.com/openclaw/openclaw/issues/88020) [Bug]: Anthropic 思考块签名过期导致硬会话失败**：长时间会话遇到签名过期时，未能恢复重试而是直接崩溃。*(暂无 Fix PR)*
- **[Issue #86996](https://github.com/openclaw/openclaw/issues/86996) Active Memory + Codex 组合导致网关严重延迟和事件循环停滞**：当启用 `active-memory` + `openclaw-honcho` 与 Codex 主模型时，系统严重降速。*(暂无 Fix PR)*

### 🟠 P2/P3 高优
- **[Issue #87801](https://github.com/openclaw/openclaw/issues/87801) `supportsAdaptiveThinking()` 遗漏 opus-4-8 模型**：导致启用推理的请求被拒绝并静默回退。*(暂无 Fix PR)*
- **[Issue #87436](https://github.com/openclaw/openclaw/issues/87436) Codex harness 运行时重建遗留 session route 状态**：即使经过 `doctor --fix` 修复也会死灰复燃。*(已关闭，可能随 v2026.5.28 修复)*

## 6. 功能请求与路线图信号

从近期高频讨论中，可以洞察出社区强烈需求的发展方向：

1. **国产大模型深度适配呼声高涨**：
   - **[Issue #86169](https://github.com/openclaw/openclaw/issues/86169) [Feature]: Add Xiaomi MiMo Token Plan provider support** (评论 8)：社区迫切需要小米 MiMo 等国产模型的 Token 计费/订阅 API 原生支持。由于当前 Provider 流程不兼容，预计短期内会被纳入正式路线图。
2. **语音/Voice 渠道能力扩展**：
   - **[Issue #73699](https://github.com/openclaw/openclaw/issues/73699) Bridge Discord voice channel I/O to text-channel agent session** (评论 5)：希望将语音作为 I/O 桥接到现有文本会话，而非作为独立隔离会话。结合已有的 `claude-cli-interactive` PR ([#81851](https://github.com/openclaw/openclaw/pull/81851))，Voice 生态的打通将是下阶段重心。
3. **多智能体成本优化提上议程**：
   - **[Issue #72629](https://github.com/openclaw/openclaw/issues/72629) Design input needed: token-cost scaling in conversational multi-agent coordination** (评论 5)：多智能体对话协调导致 Token 成本呈二次方增长，社区正在寻求核心架构层面的官方设计指导。

## 7. 用户反馈摘要

综合分析今日 500 条 Issues/PRs 动态，提炼出以下真实用户反馈：

- **升级稳定性引发广泛焦虑**：大量用户反映从 `2026.4.x` 到 `2026.5.x` 的升级体验不佳。除了核心的 Codex 路由错乱外，还出现了类似于 **[Issue #76425](https://github.com/openclaw/openclaw/issues/76425) 模块找不到 (ERR_MODULE_NOT_FOUND)** 和 **[Issue #75502](https://github.com/openclaw/openclaw/issues/75502) 降级失败** 等阻断性问题，显示出近期版本在兼容性测试和迁移路径设计上存在欠账。
- **Windows 平台体验堪忧**：用户反馈原生 Windows 环境下性能越来越差（**[Issue #76884](https://github.com/openclaw/openclaw/issues/76884)**）、GUI 加载缓慢（**[Issue #72922](https://github.com/openclaw/openclaw/issues/72922)**）以及路径解析错误（**[Issue #48780](https://github.com/openclaw/openclaw/issues/48780)**），甚至出现 `exec()` 命令输出被追加 `>` 损坏符号的离谱 Bug。
- **会话与消息可靠性是生命线**：多渠道（Telegram、Slack、Matrix）出现了消息串台/投递错误（如 **[Issue #75969](https://github.com/openclaw/openclaw/issues/75969)** Slack 响应发错线程，**[Issue #74907](https://github.com/openclaw/openclaw/issues/74907)** 孤立 `tool_use` 导致 400 错误），这类问题直接动摇用户对 AI Agent 作为生产力工具的信任。

## 8. 待处理积压

以下关键积压问题长期未得到有效解决，建议维护团队重点关注：

1. **[Issue #65156](https://github.com/openclaw/openclaw/issues/65156) [Bug] Memory vector search 完全失效 (SQLite ABI mismatch)**：自 4 月 12 日报告以来，向量记忆功能在 Ubuntu 上完全降级，影响长期记忆能力。
2. **[Issue #65538](https://github.com/openclaw/openclaw/issues/65538) [Accessibility] 屏幕阅读器在流式输出时逐 Token 朗读**：无障碍访问的核心体验问题，对视障用户极其不友好。
3. **[Issue #73814](https://github.com/openclaw/openclaw/issues/73814) 安装脚本因 `curl | bash` stdin 占用导致无限挂起**：阻断新用户首次安装体验，属于典型的 "First impression" 痛点。
4. **[Issue #66443](https://github.com/openclaw/openclaw/issues/66443) Overflow recovery 导致会话 JSONL 中 `role=user` 消息重复**：长上下文场景下的会话状态无限膨胀，缺乏清理机制。
5. **[Issue #72950](https://github.com/openclaw/openclaw/issues/72950) Plugin config 在沙箱环境中只读，无法动态配置**：阻断了企业级安全沙箱部署场景，目前每次配置变更都需要重新构建镜像。

---

## 横向生态对比

作为专注于 AI 智能体与个人 AI 助手开源生态的技术分析师，基于 2026 年 5 月 31 日各主要项目的社区动态，为您呈现本期横向对比与生态深度剖析报告。

---

### 1. 生态全景
*   **从“单体对话”向“多端协同与自主调度”全面演进**：个人 AI 助手开源生态已跨越单纯的 LLM API 套壳阶段，当前正全面向跨平台无缝衔接、多智能体网络协同以及基于事件驱动的自主任务编排发展。
*   **底层架构正经历“稳定性与安全合规”的阵痛期**：随着应用场景复杂化，会话状态混乱、上下文丢失及沙箱越权等底层缺陷集中爆发，头部项目正投入大量精力进行底层运行时的重构与攻坚。
*   **全面拥抱本地化模型与企业级交付**：生态项目正在适配国产大模型与本地推理网络（如 Ollama/vLLM），同时通过引入 OAuth2、SSO、RBAC 和精细化审计日志来满足企业级部署的合规要求。

### 2. 各项目活跃度对比

| 项目名称 | 24h Issues 动态 | 24h PRs 动态 | 今日是否发布版本 | 综合健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 435 (活跃/新增) | 500 (活跃), 344 (待合并) | 是 (`v2026.5.28` 及 beta) | 🟡 **高负荷运转**：迭代极快，但稳定性欠账多，社区反馈爆炸。 |
| **ZeroClaw** | 18 (12 新开, 6 关闭) | 50 (30 合并/关闭, 20 待合并)| 否 | 🟢 **高度聚焦**：大规模架构重构落地中，多渠道代码去重成效显著。 |
| **IronClaw** | 2 (活跃) | 24 (16 合并/关闭) | 否 | 🟢 **密集交付**：处于 Reborn 架构重构爆发期，但存在发布滞后风险。 |
| **Hermes Agent**| 50 (41 新开, 9 关闭) | 50 (40 待合并, 10 合并) | 否 | 🟡 **高频迭代**：跨端体验与本地模型集成呼声高，存在 P1 配置损坏 Bug。 |
| **NanoBot** | 7 (3 新开, 4 关闭) | 15 (9 待合并, 6 合并) | 否 | 🟢 **稳健成长**：安全加固与社区贡献齐头并进，响应速度快。 |
| **CoPaw** | 12 (活跃) | 3 (活跃) | 否 | 🟡 **需求爆发**：社区对 IDE 化集成的诉求强烈，桌面端体验亟待打磨。 |
| **PicoClaw** | 7 (活跃) | 12 (9 待合并, 3 合并) | 是 (Nightly 构建) | 🟢 **稳步推进**：主攻跨平台交互与企业级验证，稳步向 v0.3 迈进。 |
| **NanoClaw** | ~2 (活跃) | 15 (活跃, 4 合并) | 否 | 🟢 **底层优化**：专注于容器化运行修复和多群聊上下文感知。 |
| **LobsterAI** | 1 (新开) | 2 (更新, stale) | 否 | 🔴 **趋于平缓**：核心维护者资源似乎调配他处，积压了社区 PR。 |
| **NullClaw** | 0 | 0 (昨日关闭 2 PR) | 否 | 🟢 **底层沉淀**：低频维护中，专注于底层系统级线程控制（Zig 生态）。 |
| *(其他)* | **TinyClaw / Moltis / ZeptoClaw** | 过去 24h 无活动 | - | ⚪ **静默** |

### 3. OpenClaw 在生态中的定位
*   **社区规模与核心参照物**：OpenClaw 毫无疑问是当前生态中**体量最大、讨论度最高**的巨无霸（单日 400+ Issue/PR 活跃），其一举一动（如 Codex 运行时的变动）直接影响着整个赛道的走向。
*   **技术路线差异**：相比 ZeroClaw 的底层 Rust/Tauri 重构或 IronClaw 的领域契约设计，OpenClaw 目前处于**“快速填坑与底层补债”**的阶段。今日发布的 `v2026.5.28` 核心聚焦于恢复 Agent 运行时稳定性。
*   **优劣对比**：优势在于**多渠道接入极广**（飞书、Telegram、Matrix 等）且功能极其丰富；劣势在于**版本升级体验脆弱**，频发模块丢失和降级失败问题，体验不如 NanoBot 等轻量级项目顺滑。

### 4. 共同关注的技术方向
*   **多智能体协同与会话路由架构**：
    *   *OpenClaw* 正致力于解决子代理隔离和会话锁状态污染；*Hermes Agent* 和 *NanoClaw* 社区均在强烈要求跨设备、跨平台（甚至跨频道）的 Session 无缝切换与消息路由精细化控制。
*   **上下文压缩与记忆（RAG）机制**：
    *   针对长对话导致 Token 成本二次方激增的问题，*OpenClaw* 提出了多智能体成本优化的架构设计需求；*NanoBot* 提交了基于本地向量的轻量级 RAG 记忆检索；*ZeroClaw* 和 *CoPaw* 均在努力修复压缩阈值计算错误和推理内容（`reasoning_content`）丢失的问题。
*   **企业级安全与权限控制**：
    *   *NanoBot* 修复了 SSRF 和并发锁隐患；*ZeroClaw* 完成了横跨 20+ 渠道的统一 Allowlist 权限架构重构；*IronClaw* 上线了防 Prompt 注入扫描和完整的 OAuth2.0 闭环。

### 5. 差异化定位分析
*   **功能侧重**：
    *   *OpenClaw* 与 *Hermes Agent* 侧重于**通用生产力与自动化网关**（全平台消息接入、Kanban 任务调度）。
    *   *CoPaw (QwenPaw)* 明显侧重于**深度 IDE 集成与研发辅助**（如对标 Trae 的沙箱回退、Diff-view 诉求）。
    *   *NullClaw* 侧重于**底层系统级优化**（如 Zig 语言级别的线程休眠与调度）。
*   **目标用户**：
    *   *ZeroClaw* 与 *PicoClaw* 依靠良好的企业级验证（Azure Identity、XOAUTH2）吸引**企业级私有化部署用户**。
    *   *NanoBot* 通过提供良好的多包架构和 `good first issue`，更受**二次开发者和极客用户**青睐。
*   **技术架构**：
    *   基于 Rust/Tauri 的项目（如 *ZeroClaw*、*IronClaw*）正在通过 WASM、严格的领域契约（Contract）来保障跨平台桌面端的高性能和安全性；而基于 Node/Python 的项目（如 *OpenClaw*）则更多通过沙箱（bwrap）和子进程隔离来保障运行时安全。

### 6. 社区热度与成熟度
*   **快速迭代期（激进扩张）**：**OpenClaw、Hermes Agent**。社区热度极高，新功能不断涌现，但背负沉重的历史技术债，Bug 频发，P1 级阻断性问题屡见不鲜。
*   **架构重构期（蓄力突破）**：**IronClaw、ZeroClaw**。当前主要精力在打碎旧架构重构，合并了大量基础设施 PR，属于代码合并爆发但前端版本发布停滞的阶段。
*   **质量巩固期（稳扎稳打）**：**NanoBot、PicoClaw、NanoClaw**。以修复安全漏洞、打磨 UI/UX 和提升容器兼容性为主。社区响应快，PR 积压少，生命周期健康。
*   **维护停滞/静默期**：**LobsterAI、NullClaw**。LobsterAI 存在社区 PR 被标记为 Stale 而无官方介入的窘境，NullClaw 则维持着极低频的底层维护。

### 7. 值得关注的趋势信号
*   **信号一：“Agent 行为撤销与容错”成为刚性需求**
    *   *来源*：CoPaw 社区强烈要求的“文件更改 Diff-view 与一键回滚”。
    *   *参考价值*：AI 智能体不再是“只读”工具。开发者必须设计完善的沙箱快照机制或类似数据库事务的回滚能力，以缓解用户对 Agent 自主写代码/执行命令的失控焦虑。
*   **信号二：推理模型长上下文处理成为新的阿喀琉斯之踵**
    *   *来源*：OpenClaw、ZeroClaw 纷纷报告长对话触发压缩时丢失 `reasoning_content` 或导致 API 报错。
    *   *参考价值*：在 DeepSeek R1 / Claude Opus 等强推理模型普及后，传统的按 Token 裁剪上下文策略会破坏推理链条。开发者需要设计专门针对 Thinking Blocks 的上下文保留与压缩算法。
*   **信号三：本地小模型优先路由将成为分水岭**
    *   *来源*：Hermes Agent 对 Ollama 适配的呼声，以及 ZeroClaw 要求的“针对本地小模型精简 Prompt 防指令泄漏”。
    *   *参考价值*：优秀的开源 Agent 框架必须从“完全依赖云端 GPT-4/Claude”转变为“Cloud+Local 混合路由架构”。在处理简单工具调用或隐私数据时，系统能自动剥离复杂的系统提示词，路由至本地 7B/14B 模型执行。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# 🤖 NanoBot 项目动态日报 (2026-05-31)

**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **分析周期**：过去 24 小时

---

## 1. 今日速览

NanoBot 项目在过去 24 小时内保持**高度活跃且健康的迭代节奏**。社区共产生 7 条 Issue 动态（3 新开 / 4 关闭）和 15 条 PR 动态（9 待合并 / 6 已合并），缺陷修复与新特性开发齐头并进。今天的主旋律聚焦于**系统稳定性加固与安全修复**，核心维护者高效解决了一致性锁、SSRF防护、Matrix客户端验证等底层隐患。与此同时，社区贡献者正积极拓展项目边界，提交了涵盖 RAG 记忆检索、多智能体协作、语音转写等前沿功能的 PR，显示出项目正处于**能力爆发的成长期**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 **6 个 PR 被成功合并/关闭**，项目在安全性、系统调度、Provider 兼容性和前端体验上取得实质性进展：

*   **安全加固双响炮**：
    *   `fix(security): normalize IPv6-mapped IPv4 addresses in SSRF checks` ([PR #4086](https://github.com/HKUDS/nanobot/pull/4086))：修复了恶意用户可能利用 IPv6 映射的 IPv4 地址绕过 SSRF（服务器端请求伪造）防护的安全漏洞，保障了沙箱运行环境的安全基线。
    *   `fix(matrix): bound inbound media downloads` ([PR #4106](https://github.com/HKUDS/nanobot/pull/4106))：为 Matrix 通道入站媒体下载添加了严格的大小边界限制，修复了未提供文件大小时的无限下载风险。
*   **核心调度一致性修复**：
    *   `fix(agent): acquire per-session lock in process_direct` ([PR #4104](https://github.com/HKUDS/nanobot/pull/4104))：修复了 `process_direct` 绕过会话级分发锁导致 Agent 历史记录可能被并发写入损坏的严重隐患（对应 Issue #4080）。
*   **模型兼容性与功能增强**：
    *   `fix: coerce typeless Anthropic content blocks + add Dream enable toggle` ([PR #4054](https://github.com/HKUDS/nanobot/pull/4054))：一次性解决了 Anthropic 模型对工具返回类型的强制要求（#3993），并正式加入禁用 Dream 系统作业的全局开关（#3885），大幅提升了配置灵活性。
*   **WebUI 交互体验优化**：
    *   `feat(webui): refine output timeline and model controls` ([PR #4108](https://github.com/HKUDS/nanobot/pull/4108))：重构了 WebUI 的 Agent 输出时间线，带来更清晰的 Markdown 渲染、多媒体预览和可控的模型参数面板。
*   **Matrix 生态客户端适配**：
    *   `fix(matrix): handle SAS device verification` ([PR #4110](https://github.com/HKUDS/nanobot/pull/4110))：新增了对 Element X 等基于 matrix-rust-sdk 客户端的 SAS 设备验证支持，清除了 E2EE 加密消息的“未验证设备”警告。

---

## 4. 社区热点

*   **[最高讨论度] Dream 系统作业优化** ([Issue #3885](https://github.com/HKUDS/nanobot/issues/3885)，4 条评论)：
    用户反馈即使禁用 memory 技能，Dream 系统作业仍会在后台被注册到 cron 服务。这一诉求引发了关于“Agent 配置粒度”的讨论，最终官方在合入 [PR #4054](https://github.com/HKUDS/nanobot/pull/4054) 中完美解决了该问题。这反映出用户对**后台资源占用的精细化控制**有着明确需求。
*   **[高关注度] 跨智能体消息总线** ([PR #3992](https://github.com/HKUDS/nanobot/pull/3992))：
    社区开发者正在为 NanoBot 引入多实例协同工作能力。该 PR 提议建立跨实例的消息共享总线，如果合入，将标志着 NanoBot 从“单体辅助”向“多智能体协同网络”迈出关键一步。

---

## 5. Bug 与稳定性

今日新报告的 Bug 在响应速度上表现出色，多数已有对应修复方案：

1.  **[High] process_direct 绕过会话锁引发并发风险** ([Issue #4080](https://github.com/HKUDS/nanobot/issues/4080))
    *   *状态*：已修复并合入 ([PR #4104](https://github.com/HKUDS/nanobot/pull/4104))。
2.  **[Medium] Heartbeat 定时任务“空转”扰民** ([Issue #4111](https://github.com/HKUDS/nanobot/issues/4111))
    *   *现象*：无任务时向飞书等通道错误发送 "All clear." 通知。
    *   *状态*：已提交修复 PR，正在处理机制测试 ([PR #4114](https://github.com/HKUDS/nanobot/pull/4114))。
3.  **[Low-Medium] Custom Provider 丢弃空字符串推理内容** ([Issue #4105](https://github.com/HKUDS/nanobot/issues/4105))
    *   *现象*：在 Tool Call 场景下，若 `resoning_content` 为空字符串会被错误丢弃。
    *   *状态*：已确认问题，等待提交修复。

---

## 6. 功能请求与路线图信号

结合今日提交的 PR，以下功能有望在近期版本落地：

*   **🎯 记忆系统跃升：手动记忆与 RAG 检索**
    *   增加手动记忆模式 ([PR #4050](https://github.com/HKUDS/nanobot/pull/4050))，与自动记忆模式解耦。
    *   引入基于本地向量的轻量级 RAG 记忆检索 ([PR #4109](https://github.com/HKUDS/nanobot/pull/4109))。这两项合体将极大增强 Agent 的长期记忆精准度。
*   **🎤 灵活的语音转写（STT）配置**
    *   用户请求支持 OpenRouter 作为语音转录的 Provider ([PR #4113](https://github.com/HKUDS/nanobot/pull/4113))，打破了原先硬编码 Whisper 的限制。
*   **🛡️ 沙箱运行环境自定义**
    *   开发者请求允许为 bwrap 沙箱自定义绑定挂载路径 ([Issue #4107](https://github.com/HKUDS/nanobot/issues/4107))，以满足复杂工具的依赖调用诉求。

---

## 7. 用户反馈摘要

从今日的 Issue 描述中，可以描绘出目前 NanoBot 典型用户的画像与痛点：

*   **重度渠道集成用户**：用户广泛使用飞书、Matrix (特别是 iOS/Android 上的 Element X 客户端)。他们要求消息传输的**静默与稳定**（如避免 Heartbeat 误报），以及对最新加密协议的**无缝支持**。
*   **深度定制与二次开发者**：部分用户正在将 NanoBot 视作“基座”使用，配置 Custom Provider，或者接入特定的沙箱环境。他们面临的痛点集中在底层兼容性上（如 Anthropic 的数据结构严格校验、沙箱目录权限限制）。
*   **满意点**：项目提供的 `good first issue` 标签和清晰的问题模板受到了社区认可，新贡献者能够快速上手解决如 Element X 客户端兼容这类典型问题 ([Issue #4042](https://github.com/HKUDS/nanobot/issues/4042))。

---

## 8. 待处理积压

虽然整体维护极好，但仍有部分高价值 PR 停留在 Open 状态较长时间，建议维护者优先 Review 以下项：

*   **[#3997] perf(agent): 共享 Tokenizer 预热与构建状态日志** ([PR #3997](https://github.com/HKUDS/nanobot/pull/3997))：已开启 5 天，能够有效降低消息处理延迟，对性能优化有直接帮助。
*   **[#3994] refactor: 注册中心驱动的 Provider 配置** ([PR #3994](https://github.com/HKUDS/nanobot/pull/3994))：已开启 5 天，是底层架构优化的关键一步，为后续支持更多 Provider 铺路。
*   **[#3992] feat: 跨 Agent 实例消息总线** ([PR #3992](https://github.com/HKUDS/nanobot/pull/3992))：架构级重大变更，需要核心团队尽快介入架构评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the daily analysis report for the Hermes Agent project based on the provided data.

---

# 📊 Hermes Agent 开源项目日报 (2026-05-31)

## 1. 今日速览
今日 Hermes Agent 项目保持高度活跃，社区互动与代码迭代呈现双高趋势。过去 24 小时内，项目共处理了 **50 条 Issues**（新增/活跃 41，关闭 9）和 **50 条 PRs**（待合并 40，合并/关闭 10），表明核心团队和社区贡献者正在高频协同推进主分支代码。当前未发布新版本，代码库正处于高频修复与特性打磨阶段。大量 PR 集中在底层架构优化（如 Kanban 调度、内存管理线程安全）、多平台网关适配（如 SimpleX, WhatsApp）以及安全漏洞修补（`shell=True` 注入问题），整体项目健康度良好，正在为下一个大版本做蓄力准备。

## 2. 版本发布
**今日无新版本发布。** 
*(注：当前主分支处于密集的 Bug 修复和架构优化阶段，特别是针对 v0.14.0 引入的部分回归问题正在集中处理中。预计团队在合并当前积压的 40 个待合并 PR 后，可能会发布 v0.14.1 或 v0.15.0。)*

## 3. 项目进展
今日共有 10 个 PR 被合并或关闭，另有大量高质量 PR 正在等待合并，标志着项目在稳定性和多平台支持上迈出了坚实的一步：
*   **安全漏洞修补推进：** 修复了配置文件执行路径中 `shell=True` 导致的命令注入风险（[PR #35545](https://github.com/NousResearch/hermes-agent/pull/35545)），显著提升了系统底层安全边界。
*   **多平台网关体验优化：** 
    *   WhatsApp 历史记录同步机制得到修复，保留了必要的引导同步（[PR #12065](https://github.com/NousResearch/hermes-agent/pull/12065)）。
    *   WhatsApp JID 与 LID 别名解析正常化，解决了 Allowlist 模式下消息被误拦截的问题（[PR #17189](https://github.com/NousResearch/hermes-agent/pull/17189)）。
*   **Kanban 系统架构修复：** 解决了归档面板无法真正下线（"死灰复燃"）的严重体验问题（[PR #35208](https://github.com/NousResearch/hermes-agent/pull/35208), [PR #35537](https://github.com/NousResearch/hermes-agent/pull/35537)），并优化了子任务继承和 CLI 通知订阅机制。
*   **底层调度健壮性：** 引入了 RLock 以支持多外部 Memory Provider 并发，使 `MemoryManager` 实现了线程安全（[PR #35551](https://github.com/NousResearch/hermes-agent/pull/35551)）。

## 4. 社区热点
今日讨论最热烈、互动最多的话题集中在**跨端体验割裂**和**本地模型部署障碍**：
*   **跨平台会话无缝切换（强烈诉求）：** Issue [Feature: Cross-Platform Session Handoff #8366](https://github.com/NousResearch/hermes-agent/issues/8366) 获得了 **6 个赞**和大量讨论。用户强烈希望能够在 CLI、Telegram、iMessage 等设备间无缝保持 Agent 上下文的连续性，反映出“个人 AI 助理随时随地接入”的核心痛点。
*   **本地模型配置引导：** Issue [Feature: Local Model Setup Skill #523](https://github.com/NousResearch/hermes-agent/issues/523) 引发了关于如何更优雅地集成 Ollama/vLLM 的讨论。受 Liquid AI 启发，社区期望 Hermes 能在本地硬件适配和模型推荐上提供更开箱即用的体验。
*   **Telegram 网关更新崩溃：** Issue [Telegram bot token already in use #23783](https://github.com/NousResearch/hermes-agent/issues/23783) 获得了 **2 个赞**。多名用户反馈在执行 `hermes update` 时，由于旧进程未完全释放 Bot Token 导致网关崩溃，这是目前强相关的升级阻塞问题。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，按严重程度（P0-P3）梳理如下：

*   **🔥 P1 - 致命/阻断性问题：**
    *   **API Key 被静默损坏：** `redact_sensitive_text` 功能在读文件时会意外破坏配置文件中的 API Key，导致 401 认证失败（[Issue #35519](https://github.com/NousResearch/hermes-agent/issues/35519)）。*（目前尚无对应修复 PR，需紧急关注）*。
    *   **跨 Provider 污染：** 从 DeepSeek 等 thinking-mode 模型切换至 Cerebras 等严格模型时，历史记录中遗留的 `reasoning_content` 会导致 HTTP 400 报错（[Issue #35543](https://github.com/NousResearch/hermes-agent/issues/35543)）。
    *   **凭证池错误复用：** 共享相同 `base_url` 的多个自定义 Provider 会导致 Hermes 调用错误的 API 凭证（[Issue #14141](https://github.com/NousResearch/hermes-agent/issues/14141)）。

*   **⚠️ P2 - 功能性缺陷：**
    *   **反向代理回归：** v0.14.0 Dashboard 在 Traefik 等反向代理后的 `--insecure` 模式下彻底损坏（[Issue #34227](https://github.com/NousResearch/hermes-agent/issues/34227)），相关修复已提交（[PR #35547](https://github.com/NousResearch/hermes-agent/pull/35547)）。
    *   **本地大模型超时：** 辅助客户端 HTTP 默认 30s 超时，导致本地慢速 LLM 的上下文压缩必然失败（[Issue #35517](https://github.com/NousResearch/hermes-agent/issues/35517)），相关修复（[PR #21575](https://github.com/NousResearch/hermes-agent/pull/21575)）正在推进。
    *   **Discord 工具集加载失效：** 配置 `hermes-discord` 复合工具集后，工具静默丢失（[Issue #35527](https://github.com/NousResearch/hermes-agent/issues/35527)）。

## 6. 功能请求与路线图信号
基于近期的 Issues 与 PR 动向，可以洞察到项目下一阶段的演进方向：
*   **更强大的 Kanban 工作流编排：** 社区不仅要求修复 Bug，还在推动 Kanban 成为真正的任务中心。例如，请求在相同阻塞原因重复出现时引入“熔断器”机制（[Issue #29320](https://github.com/NousResearch/hermes-agent/issues/29320)），这表明 Hermes 正在被重度用于自动化调度。
*   **Memory 架构升级：** 用户提出“Brain-as-source-of-truth”概念（[Issue #27657](https://github.com/NousResearch/hermes-agent/issues/27657)），希望将外部个人知识库作为高优先级事实来源；同时要求解决记忆删除不可逆的问题，建立从短期记忆到长期记忆的归档桥梁（[Issue #35186](https://github.com/NousResearch/hermes-agent/issues/35186)）。这些与今日线程安全的 Memory PR 高度契合。
*   **非英语用户体验改善：** 暴露出 Holographic 记忆提取仅支持英文正则的短板（[Issue #35489](https://github.com/NousResearch/hermes-agent/issues/35489)），国际化支持预计将提上日程。
*   **新的云厂商支持：** 有人提交了对 Yandex Cloud AI Studio 的原生支持（[PR #35554](https://github.com/NousResearch/hermes-agent/pull/35554)），表明项目在持续扩大其模型支持生态。

## 7. 用户反馈摘要
*   **痛点 - 安全功能适得其反：** 默认开启的 `security.redact_secrets` 在读取配置文件时引发了严重误杀，导致用户（[Issue #35519](https://github.com/NousResearch/hermes-agent/issues/35519)）在不知情的情况下生成无效配置，引发了极大挫败感。
*   **痛点 - 升级体验脆弱：** 在 Telegram 平台上，一键升级 (`hermes update`) 后网关无法顺利接管的断裂体验（[Issue #23783](https://github.com/NousResearch/hermes-agent/issues/23783)），暴露了进程管理机制在优雅退出和端口复用上的不足。
*   **痛点 - 硬件兼容性差：** 使用本地弱性能显卡（如 RTX 2070S）运行 Ollama 或 MiniMax 的用户频繁遭遇超时截断（[Issue #35517](https://github.com/NousResearch/hermes-agent/issues/35517)），项目默认的超时配置对非云端用户极不友好。
*   **正向反馈：** 用户对跨平台接入（Telegram/CLI/iMessage）和 Kanban 排版工具的需求极为强烈，说明 Hermes 的全平台网关和任务规划设计方向非常契合高级用户群体的“AI OS”愿景。

## 8. 待处理积压
以下关键区域和长期问题需要维护者尽快介入，以防影响项目健康度：
1.  **高危安全漏洞未响应：** 涉及多个组件的 `shell=True` 命令注入风险（[Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560) 及 [Issue #2743](https://github.com/NousResearch/hermes-agent/issues/2743)），虽然目前已有局部修复 PR，但需从架构层面彻底排查并统一切换至 `shlex`。
2.  **P1 数据损坏问题悬而未决：** API Key 静默损坏问题（[Issue #35519](https://github.com/NousResearch/hermes-agent/issues/35519)）今日才被提出，目前尚未指派，由于影响所有开启默认安全配置的用户，属于最高优先级紧急事项。
3.  **跨上下文切换的架构缺陷：** Provider 切换时的凭证复用错误（[Issue #14141](https://github.com/NousResearch/hermes-agent/issues/14141)）已敞开超过一个月，阻断了多路由网关用户的正常使用。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

以下是为您生成的 PicoClaw 项目 2026-05-31 动态日报：

# 📊 PicoClaw 项目日报 (2026-05-31)

## 1. 今日速览
PicoClaw 项目在过去的 24 小时内保持了**极高的活跃度**与良好的开发节奏，展现了优秀的社区健康度。项目成功发布了 `v0.2.9-nightly.20260530` 自动化构建版本，正稳步推进 v0.3 正式版的演进。社区参与度迎来小高峰，共处理了 12 个 Pull Requests（其中 9 个待合并）和 7 个 Issues。从贡献者构成来看，不仅核心团队在积极修复底层 Bug（如 Codex 流式输出、工作空间安全限制），社区开发者也高频贡献了包括 Azure 身份验证、Telegram 交互优化及孟加拉语国际化等重要功能。

## 2. 版本发布
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)** 
  - **版本号**: `v0.2.9-nightly.20260530.e81d3710`
  - **说明**: 这是一个基于 main 分支的自动化构建版本。由于包含最新的代码提交，官方提示可能存在不稳定性，建议测试人员谨慎评估后使用。
  - **完整变更日志**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. 项目进展
今日共有 **3 个 PR 被合并/关闭**，主要推进了国际化支持与企业级验证集成：
- **[PR #2974](https://github.com/sipeed/picoclaw/pull/2974) feat(i18n): Add Bangla support bn-in**：成功合并，为 Web UI 增加了孟加拉语支持，完善了项目的全球化版图。
- **[PR #2971](https://github.com/sipeed/picoclaw/pull/2971) feat(provider): Add optional Azure Identity support**：成功合并，允许通过 `azidentity` 构建标签来支持 Azure 基于身份的认证机制。这极大提升了企业级用户在不允许使用 API Key 场景下的可用性。
- **[PR #2969](https://github.com/sipeed/picoclaw/pull/2969) feat(web): add chat image paste and drag-and-drop upload**：已关闭/拒绝。原本计划为 Web UI 添加图片拖拽/粘贴上传功能，可能因实现细节或代码规范问题未能合并，期待作者后续改进重新提交。

## 4. 社区热点
今日社区的关注焦点集中在**对新版本的吐槽**与**多渠道交互体验的改进**上：
- **[Issue #2952](https://github.com/sipeed/picoclaw/issues/2952) [Feature]好久没发新版本了**：用户集中反馈了三个痛点：1) exec 命令导致部分模型默认运行报错；2) QQ 渠道重启后会出现死循环重启；3) 请求 API 模型提供商界面优化（复用 key、下拉选择）。这反映了用户对 UI/UX 改进及稳定版发布的强烈渴求。
- **[PR #2975](https://github.com/sipeed/picoclaw/pull/2975) feat(telegram): treat reply as mention**：社区开发者贡献了 Telegram 群组交互优化，允许将“回复机器人的消息”等同于“@机器人”，极大提升了群聊场景下的自然交互体验。

## 5. Bug 与稳定性
今日报告了多个影响用户体验的 Bug，部分高危问题已提交修复 PR：
- 🔴 **[P0] Web UI 会话历史混乱**：**[Issue #2972](https://github.com/sipeed/picoclaw/issues/2972)** 升级至 v0.2.9 后，每次新建 Web 聊天会话都会被强制附加旧的历史消息记录，这对 Agent 的上下文管理具有极强的破坏性，目前尚无对应 Fix PR。
- 🟡 **[P1] 工作空间守卫误杀合法 URL**：**[PR #2965](https://github.com/sipeed/picoclaw/pull/2965)** 修复了启用 `restrict_to_workspace` 后，`exec` 工具将不带 `http://` 的合法 URL（如 `wttr.in/Beijing?T`）误判为绝对路径而拒绝执行的问题。
- 🟡 **[P1] OpenAI Codex 空响应**：**[PR #2967](https://github.com/sipeed/picoclaw/pull/2967)** 修复了后端流式传输文本但 `response.Completed` 返回空值导致前端显示空白的问题。
- 🟢 **[P2] Makefile 编译失败**：**[PR #2976](https://github.com/sipeed/picoclaw/pull/2976)** 修复了 Go 1.25.10 版本字符串中包含空格导致构建中断的问题。

## 6. 功能请求与路线图信号
根据今日的 Issues 和 PRs 动态，项目在下一版本可能重点演进以下方向：
- **Agent 安全与策略控制**：**[PR #2838](https://github.com/sipeed/picoclaw/pull/2838)** 正在引入基于 Frontmatter 的 `allow/deny` 工具策略过滤器，这表明 PicoClaw 正在向更安全、可控的企业级 AI Agent 架构转型。
- **富媒体多模态支持**：**[PR #2856](https://github.com/sipeed/picoclaw/pull/2856)** 虽处于 Stale 状态，但其旨在将 message 工具从纯文本升级为支持富媒体附件。配合此前被关闭的 Web 端图片上传 PR，多模态支持显然是路线图上的高优先级任务。

## 7. 用户反馈摘要
从近期 Issue 的讨论中，可以提炼出以下真实用户画像与痛点：
- **多平台兼容性痛点**：Android 10 (MIUI 12) 用户在使用 PicoClaw v0.1.3 时，依然受到“存储权限拒绝”的困扰（**[Issue #2880](https://github.com/sipeed/picoclaw/issues/2880)**），提示老版本移动端适配仍需维护。
- **模型上下文管理困惑**：用户在使用不同模型（如 MiniMax）时，发现压缩上下文的触发值始终固定在 76800 tokens（**[Issue #2968](https://github.com/sipeed/picoclaw/issues/2968)**），表明用户对 Token 计费和上下文控制非常敏感。
- **All-in-one 界面期望**：用户希望“添加模型提供商”能直接下拉选择，且具备 API 测试连接和一键拉取 `/models` 列表的功能（**[Issue #2952](https://github.com/sipeed/picoclaw/issues/2952)**），反映出当前配置文件门槛较高，急需可视化的配置中心。

## 8. 待处理积压
- ⚠️ **需要核心团队 Review 的功能 PR**：
  - **[PR #2856](https://github.com/sipeed/picoclaw/pull/2856)** (Telegram 富媒体支持) 和 **[PR #2838](https://github.com/sipeed/picoclaw/pull/2838)** (Agent 工具策略) 都因长期未更新被打上 `stale` 标签，这两个功能对项目意义重大，建议维护者抽空评估其合并可行性。
  - **[PR #2967](https://github.com/sipeed/picoclaw/pull/2967)** 和 **[PR #2976](https://github.com/sipeed/picoclaw/pull/2976)** 等多个修复合并请求处于排队状态，建议在下次 Nightly 构建前进行集中 Review。
- ⚠️ **重要未解决 Bug**：**[Issue #2972](https://github.com/sipeed/picoclaw/issues/2972)** (Web UI 混入旧历史记录) 直接影响 v0.2.9 的可用性，建议立即分配资源跟进排查。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

以下是为您生成的 2026 年 5 月 31 日 NanoClaw (github.com/qwibitai/nanoclaw) 项目动态日报：

# 📊 NanoClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
- **整体活跃度评估**：项目当前处于**高度活跃**状态。过去 24 小时内共有 15 个 Pull Requests 发生更新，显示社区开发和核心团队正在高频推进多项功能。
- **开发侧重点**：从 PR 分布来看，开发重心集中在**容器化运行时修复**（特别是针对 Apple Container 环境）、**安全边界加固**以及**周边生态工具**的扩展（如语音转写、AWS 凭证代理）。
- **社区反馈**：用户侧对多平台集成（特别是 Discord 适配器）和多实例部署的场景需求强烈，并积极贡献代码以提升多通道监控体验。

## 2. 版本发布
- **无新版本发布**。今日无官方 Release 更新。

## 3. 项目进展
今日共有 4 个 PR 被合并或关闭（其中 1 个为今日新开并快速关闭），项目在多实例部署和群聊体验上取得实质性进展：

- **多实例代理端口修复**：[#2652](https://github.com/nanocoai/nanoclaw/pull/2652) [CLOSED] 修复了 OneCLI 在多实例安装场景下 `HTTPS_PROXY`/`HTTP_PROXY` 硬编码单机端口的问题，提升了复杂部署架构下的兼容性。
- **群聊上下文感知增强**：[#2645](https://github.com/nanocoai/nanoclaw/pull/2645) [CLOSED] 引入了按代理组的 `context_messages` 窗口功能。当 AI 在群聊中被 `@mention` 时，现在能够获取并理解最近的 N 条“未读”消息，显著提升了多轮群聊的对话连贯性。
- **消息追踪属性完善**：[#2521](https://github.com/nanocoai/nanoclaw/pull/2521) [CLOSED] 在 XML 消息属性中增加了 `from-channel` 和 `from-type`，使得多通道（如 Telegram + Discord）监控仪表板能够准确区分消息来源。
- **底层性能优化**：[#6](https://github.com/nanocoai/nanoclaw/pull/6) [CLOSED] 将 IPC 繁忙轮询替换为异步 `fs.watch`，减少了同步 I/O 阻塞，提升了事件循环效率。

## 4. 社区热点
今日社区关注度最高的议题是关于跨平台消息格式解析的兼容性问题：

- **Issue [#2044](https://github.com/nanocoai/nanoclaw/issues/2044) [OPEN] - Discord v2 适配器破坏了 URL 预览抑制功能** (👍: 2, 评论: 1)
  - **背后诉求**：用户指出，在 Discord 中使用 `<URL>` 本意是抑制链接预览，但 v2 版本的 `@chat-adapter/discord` 会将其强制转换为 `[URL](URL)`，导致原本的功能失效并产生了相反的效果（强制生成预览）。这反映了用户对**消息格式控制粒度**和**平台原生特性兼容性**的强需求。

## 5. Bug 与稳定性
今日暴露了几个关键的平台兼容性 Bug 和安全隐患，部分已有修复方案：

1. **高优先级：Apple Container 文件系统挂载竞争条件**
   - **Bug 表现**：在 Apple Container 环境下，嵌套文件挂载产生幽灵 inodes，导致 `stat()` 正常但读取返回 `EACCES`，静默禁用了 MCP 服务器配置。
   - **修复 PR**：
     - [#2649](https://github.com/nanocoai/nanoclaw/pull/2649) [OPEN]：跳过损坏的嵌套文件挂载。
     - [#2650](https://github.com/nanocoai/nanoclaw/pull/2650) [OPEN]：针对 virtio-fs 挂载的覆盖延迟，增加 `container.json` 读取的重试机制。
2. **中优先级：交互式响应来源校验缺失**
   - **安全隐患**：存在越权回答 pending question 的风险。
   - **修复 PR**：[#2651](https://github.com/nanocoai/nanoclaw/pull/2651) [OPEN]：加固了 `ask_user_question` 响应边界，确保只能从原始发送通道进行回答。
3. **低优先级：Discord URL 格式化回归**
   - 如上文“社区热点”所述，Discord v2 的 URL 处理逻辑导致抑制预览功能失效（[Issue #2044](https://github.com/nanocoai/nanoclaw/issues/2044)），目前暂无关联 Fix PR。

## 6. 功能请求与路线图信号
从当前 Open 的 PR 列表中，可以捕捉到项目下一阶段的演进方向：

- **灾难恢复能力**：[#2084](https://github.com/nanocoai/nanoclaw/pull/2084) 提出增加每日项目快照及 S3 备份/单代理恢复功能，预示着项目正在向**企业级高可用性**迈进。
- **免端口 GitHub 集成**：[#2301](https://github.com/nanocoai/nanoclaw/pull/2301) 引入了基于 REST API 的 30 秒轮询模式，使得处于 NAT/防火墙背后的环境也能轻松集成 GitHub。
- **本地化语音支持**：[#2317](https://github.com/nanocoai/nanoclaw/pull/2317) 添加了基于 Whisper 的免费本地语音转写技能。
- **WebUI 控制面板（重大更新）**：尽管目前处于 Blocked 状态，[#212](https://github.com/nanocoai/nanoclaw/pull/212) 提议基于 Lit + Vite 构建包含 11 个选项卡的完整 Web 控制面板，这将是项目从 CLI 向 GUI 运维迈进的里程碑。

## 7. 用户反馈摘要
基于 Issues 和 PR 提炼的真实用户画像与痛点：

- **部署架构复杂化**：越来越多的用户开始在 NAT 网络环境下部署多实例，甚至使用 Apple Container 这种非标环境进行测试。用户对配置的灵活性提出了更高要求。
- **运维可观测性需求**：用户（如 PR [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 作者）正在自建多通道监控 Dashboard，迫切需要 NanoClaw 在底层日志中暴露更多路由元数据。
- **数据安全焦虑**：社区对误操作（如 `rm -rf`）或磁盘故障导致的数据丢失存在担忧，对开箱即用的备份解决方案有强烈诉求。

## 8. 待处理积压
以下重要 PR/Issue 长期未获最终处理，建议维护团队评估其优先级：

- **大型功能停滞**：PR [#212](https://github.com/nanocoai/nanoclaw/pull/212) (WebUI 控制面板) 自 2 月创建以来，状态标记为 `Blocked` 和 `Pending Closure`，需确认是否废弃或重定向开发资源。
- **CI/CD 规范化停滞**：PR [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) (添加 pre-commit hooks) 提交已近两周，目前仍在等待合并，这可能会延缓后续社区代码贡献的质量把控。
- **Discord 回归问题**：Issue [#2044](https://github.com/nanocoai/nanoclaw/issues/2044) 虽然有 2 个赞和一定讨论，但尚未有官方确认或指定修复者，可能影响 Discord 核心用户的体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 (2026-05-31)

作为 AI 智能体与个人 AI 助手领域的前沿开源项目分析师，现为您呈上 NullClaw (github.com/nullclaw/nullclaw) 2026年5月31日的项目动态日报。

## 1. 今日速览
过去24小时内，NullClaw 仓库整体呈现**低活跃度但保持稳步维护**的状态。今日没有新增的 Issue 或 PR，也未发布新的软件版本，项目在公开讨论区处于短暂的“静默期”。尽管如此，昨日（5月30日）项目集中关闭了2个关键的 Pull Requests，分别涉及底层的运行时兼容性修复以及月度版本号的更新。这表明核心维护团队正在后台保持代码的合并与稳定工作，项目整体健康状况依然稳固。

## 2. 版本发布
**本日无新版本发布。** 
*注：PR #938 显示项目刚于昨日完成了 `v2026.5.29` 的版本迭代与合并工作，预计短期内将处于功能沉淀期。*

## 3. 项目进展
今日虽无新合并事件，但近期关闭的 PR 集中反映了项目在**底层运行时与工程化**方面的进展：
*   **POSIX 系统休眠机制重构**：[PR #878](https://github.com/nullclaw/nullclaw/pull/878) `[CLOSED]` 
    由开发者 @vernonstinebaker 提交。该 PR 修复了 `std_compat.thread.sleep()` 在 POSIX 系统上的行为逻辑。此前使用的 `std.Io.sleep()` 会在 `std.Io.Threaded` 环境下产生协作式让步，无法真正挂起操作系统线程。此次更新切换至真实的 POSIX `nanosleep` 路径，同时保留了对 Windows/WASI 的调度器支持。对于需要精确底层线程控制的 AI 智能体并发任务而言，这是一项重要的底层稳定性和性能优化。
*   **月度版本迭代**：[PR #938](https://github.com/nullclaw/nullclaw/pull/938) `[CLOSED]`
    由开发者 @DonPrus 提交。完成了 `v2026.5.29` 版本的构建文件（`build.zig.zon`）版本号 bump，并严格通过了 `zig fmt` 和 `git diff` 的代码规范与完整性校验。

## 4. 社区热点
过去24小时内，项目**无新增讨论、评论或用户互动**。
目前的开发节奏主要由核心贡献者（如 @DonPrus, @vernonstinebaker）的提交驱动。缺乏社区热议话题，表明当前版本（v2026.5.29）在发布后运行相对平稳，尚未激发出具有传播效应的痛点或争议。

## 5. Bug 与稳定性
*   **今日新增 Bug 报告：0 条**
*   **历史潜在风险：0 条（活跃）**

*(分析师注：虽然今日无 Bug 报告，但 PR #878 的关闭暴露出之前在 POSIX 环境下，AI 智能体执行引擎在多线程休眠时可能并未真正释放系统资源。如果有在此前版本遇到宿主机 CPU 占用异常或调度延迟的用户，建议尽快检查该底层 PR 的修复逻辑。)*

## 6. 功能请求与路线图信号
*   **今日新功能请求：0 条**
*   **路线图信号：** 从昨日版本更新的代码（PR #938）来看，项目当前正处于 Zig 构建系统的常规维护周期。底层兼容性代码（如线程控制的改进）正逐步被纳入标准库（`std_compat`），暗示项目正在为更复杂的跨平台本地化 AI 智能体部署夯实底层基石。

## 7. 用户反馈摘要
过去24小时内无用户在 Issues 或 PRs 中留下使用反馈。目前难以提取直接的用户痛点，但从 PR #878 的上下文可以推测，部分进行重度多线程本地调度的开发者曾对现有的“协作式让步”机制提出过底层改进诉求。

## 8. 待处理积压
*   **当前无明显积压（Backlog）：** 
    由于今日无新增 Issue，且 PR 队列中待合并数量为 0，当前仓库处于“清空”状态。不过，鉴于项目的低活跃度表现，建议维护团队 (@DonPrus 等) 可以考虑在后续发布更多的 Roadmap 讨论帖（如探讨 LLM Tool Calling 的底层调度优化），以进一步拉动社区开源贡献者的参与度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

以下是为您生成的 **IronClaw (nearai/ironclaw)** 项目 2026-05-31 动态日报：

---

# 📊 IronClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
IronClaw 项目在过去 24 小时内保持**极其活跃**的开发状态。虽然今日没有发布新的版本，且 Issues 追踪器相对平静（0 个关闭，2 个活跃），但底层的代码合并与迭代正经历爆发式增长。项目今日共有 **24 项 Pull Request 更新**，其中 **16 项被成功合并或关闭**。从合并内容来看，项目正处于“Reborn”架构大重构的密集交付期，核心精力聚焦于 OAuth2.0 产品级认证体系打通、底层触发器架构设计，以及 AI 智能体生命周期（上下文压缩、中断、记忆写入）的健壮性增强。

## 2. 版本发布
**无新版本发布。**
*注：根据 Issue #3259 的反馈，当前 `crates.io` 仍停留在 `0.24.0` 版本，官方 GitHub 虽已 tagged `0.27.0` 但尚未同步发布。预计团队在完成当前的 Reborn 认证路由大重构后，会集中进行下游依赖的更新与发布。*

## 3. 项目进展
今日共有 16 个 PR 被合并/关闭，标志着多个重要里程碑的落地，项目整体向前迈出了一大步：

*   **Reborn 认证与 HTTP 路由闭环**：
    *   **[#4245](https://github.com/nearai/ironclaw/pull/4245) [CLOSED]**：完成了面向产品的认证 HTTP 路由接入，支持手动令牌、恢复、刷新等机制，彻底补齐了 WebUI/CLI 的鉴权底层基础设施。
    *   **[#4246](https://github.com/nearai/ironclaw/pull/4246) [CLOSED]**：将 NEAR AI MCP 凭证成功迁移至全新的产品认证体系。
*   **智能体行为与生命周期优化（新贡献者提交）**：今日合并了多个提升 Agent 稳定性与智能性的 PR：
    *   **[#4251](https://github.com/nearai/ironclaw/pull/4251) [CLOSED]**：引入了 7 个模块的结构化摘要模板，优化了上下文压缩时的关键信息保留。
    *   **[#4250](https://github.com/nearai/ironclaw/pull/4250) [CLOSED]**：修复了长久以来的痛点，支持在 LLM 流式调用期间通过 `CancellationToken` 立即中断请求，极大改善用户交互体验。
    *   **[#4252](https://github.com/nearai/ironclaw/pull/4252) [CLOSED]**：加入行为引导机制，在空闲 N 次迭代后自动提醒 Agent 调用 `memory_write`，避免上下文丢失。
*   **触发器与投递架构契约落地**：
    *   **[#4249](https://github.com/nearai/ironclaw/pull/4249) [CLOSED]** 与 **[#4248](https://github.com/nearai/ironclaw/pull/4248) [CLOSED]**：正式确立了 V1 cron 触发器和通信投递解析的领域契约，为后续开发冻结了边界。
*   **安全防护机制上线**：
    *   **[#4253](https://github.com/nearai/ironclaw/pull/4253) [CLOSED]**：增加了对身份文件（`AGENTS.md` 等）的读取时扫描，防御潜在的 Prompt 注入攻击。
*   **核心 Bug 修复**：
    *   **[#4258](https://github.com/nearai/ironclaw/pull/4258) [CLOSED]**：修复了 `builtin.http` headers 传参导致的 `Failed` 状态误判问题；**[#4259](https://github.com/nearai/ironclaw/pull/4259) [CLOSED]**：修复了工具自我检查时的调用失败异常。

## 4. 社区热点
今日讨论度最高的话题集中在版本发布滞后与认证架构的推进上：
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：这是目前社区最关注的痛点。由于底层依赖 `wasmtime` 28.x 版本存在 CVE 漏洞，下游用户被迫依赖 `crates.io` 的版本，但 IronClaw 最新 3 个版本（0.25.0-0.27.0）迟迟未发布到 crates.io，导致用户面临安全风险却无法升级。该 Issue 已累计 **12 条评论**。
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108)**：由 GitHub Actions 自动提交的 Nightly E2E 测试失败报告，表明在 `v2-engine` 的完整端到端测试中存在未解决的阻断点，需要核心团队关注。

## 5. Bug 与稳定性
*   🔴 **严重 (P0)**: **[CI/CD 回归] Nightly E2E 失败** ([#4108](https://github.com/nearai/ironclaw/issues/4108)) - 提交 `749f584` 导致 `v2-engine` 端到端测试失败。目前尚未提交针对性的 Fix PR。
*   🟡 **中等 (P1)**: **主机运行时调度崩溃** ([#4258](https://github.com/nearai/ironclaw/pull/4258)) - LLM 传递字符串化 JSON 导致调度进入错误的 "RecoveryRequired" 路径，**已修复并合并**。
*   🟢 **轻微 (P2)**: **工具自省调用失败** ([#4259](https://github.com/nearai/ironclaw/pull/4259)) - 模型并行调用 `capability_info` 检查自身时报错。**已修复并合并**。

## 6. 功能请求与路线图信号
从当前活跃的 PR 来看，下一个版本的核心路线图已非常明确：
1.  **多渠道 OAuth / SSO 全面上线**：正在推进中的 **[#4257](https://github.com/nearai/ironclaw/pull/4257)**（AuthPromptView 挑战 + WebUI OAuth 卡片）、**[#4229](https://github.com/nearai/ironclaw/pull/4229)**（GitHub 原生 SSO）以及相关的 E2E 测试 **[#4256](https://github.com/nearai/ironclaw/pull/4256)** 预示着产品即将具备企业级的 SSO 接入能力。
2.  **Notion 深度集成与 MCP 架构演进**：**[#4228](https://github.com/nearai/ironclaw/pull/4228)**（已关闭）确立了 Notion MCP 在 Reborn 架构下的核心地位。
3.  **触发器与出站通信域模型**：活跃的 XL 级 PR **[#4255](https://github.com/nearai/ironclaw/pull/4255)** 正在完善出站投递解析的领域类型，这标志着 IronClaw 正在从单纯的聊天 Agent 向“事件/定时触发驱动”的自动化架构演进。
4.  **LLM 推理能力保留**：**[#4230](https://github.com/nearai/ironclaw/pull/4230)** 正在尝试保留并解析不同提供商（OpenAI/Codex/Anthropic）的推理摘要，这将极大增强 Agent “思考过程”的可观测性。

## 7. 用户反馈摘要
*   **依赖与发布痛点**：下游 Rust 开发者对 crates.io 发布滞后感到焦虑，尤其是涉及 CVE 漏洞时，无法及时打补丁导致安全合规压力大（源自 [#3259](https://github.com/nearai/ironclaw/issues/3259)）。
*   **Agent 记忆断层**：用户在实际使用中发现，Agent 在长时间运行后经常丢失上下文，未能自动记忆关键信息。今日合并的 `memory_write` 行为引导机制 **(#4252)** 正是对这一痛点的直接回应。
*   **LLM 调用缺乏控制权**：用户抱怨发起中断后，系统仍需等待流式响应彻底结束才能停止。今日合并的“可中断飞行中 LLM 调用”功能 **(#4250)** 完美解决了这一体验瑕疵。

## 8. 待处理积压
*   ⚠️ **[核心关注]** **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259)**：鉴于涉及安全漏洞，强烈建议维护者尽快在 `crates.io` 发布包含安全补丁的 `0.25.0+` 版本，以缓解下游供应链压力。
*   ⚠️ **[大型贡献审查]** **[PR #4035](https://github.com/nearai/ironclaw/pull/4035)**：由社区贡献者提交的 Slack Reborn 适配器核心代码，标记为 `[size: XL, risk: medium]`，自 5 月 25 日提交后仍在等待深入审查，建议团队尽快排期 Review 以保持社区贡献者的热情。
*   ⚠️ **[架构巨型 PR]** **[PR #4230](https://github.com/nearai/ironclaw/pull/4230) & [PR #4254](https://github.com/nearai/ironclaw/pull/4254)**：这两个 XL 级别的 PR 分别涉及底层推理摘要和触发器核心架构，目前处于 Open 状态，需要更多维护者参与架构一致性评估。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 📊 LobsterAI 项目动态日报 (2026-05-31)

作为 AI 智能体与个人 AI 助手领域的开源项目分析师，基于过去 24 小时的 GitHub 数据，为您呈现 LobsterAI (netease-youdao/LobsterAI) 项目的最新动态与健康度评估。

---

### 1. 今日速览
过去 24 小时，LobsterAI 仓库保持了一定的活跃度，主要集中在社区代码贡献的唤醒和常规 Bug 报告。今日未发布任何新版本。项目接收到 1 条新开的 Issue，主要涉及客户端界面交互的稳定性问题；同时有 2 个此前处于静默状态的待合并 Pull Request 出现更新（目前均被标记为 `[stale]`）。整体而言，今日项目呈现出**“社区反馈持续、核心代码维护趋于平缓”**的态势。由于缺乏近期核心代码的合并（Merge）动作，项目当前的迭代速度有所放缓。

### 2. 版本发布
**本日无新版本发布。** 

### 3. 项目进展
今日**无已合并或已关闭的 PR / Issue**。
当前项目整体处于功能沉淀期或核心维护者资源调配的静默期。项目推进方面主要受限于缺乏活跃的代码合入动作，整体进展暂无明显向前迈进。

### 4. 社区热点
今日讨论或更新最活跃的内容集中在界面交互（UI/UX）与系统适配方面。虽然评论数据有限，但以下几个工单反映了社区贡献者的关注度：
*   **[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466)**：修复了 MCP 服务器表单弹窗内容过长时，底部的“取消”按钮被挤出视野的可用性问题。
*   **[PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467)**：针对 macOS 用户的重要体验修复，将快捷键显示从 Windows 习惯的 `Ctrl` 修正为 macOS 标准的 `Cmd (⌘)`。
*   **[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)**：关于执行结果窗口滚动到顶端导致应用假死的反馈，该问题已有 1 条评论互动，表明用户正在尝试定位或复现该现象。

### 5. Bug 与稳定性
今日报告了 1 个影响使用体验的 Bug，目前**尚未有对应的 fix PR 提交**：

*   🟠 **[中等] 应用交互假死**：[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)
    *   **现象**：用户在 2026.5.27 版本中，将“执行结果窗口”滚动到最顶端时，应用会发生假死（无响应）。
    *   **状态**：现象已能稳定复现，尚未有官方修复进展。

### 6. 功能请求与路线图信号
今日无新增的显性功能请求（Feature Requests）。但通过分析当前处于 `[stale]` 状态的 PR，可以提取出项目短期内应当关注的演进方向：
*   **多平台快捷键深度适配**：[PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) 暴露出项目在跨平台（特别是 macOS）细节体验上的欠账。未来版本需要将多系统兼容性测试纳入常规流程。
*   **复杂表单渲染性能与布局**：[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) 反映出弹窗组件在处理大量动态内容（如多个环境变量配置）时存在结构性缺陷，这可能是后续重构 UI 组件库的一个信号。

### 7. 用户反馈摘要
从今日的 Issue 及 PR 记录中，可以提炼出以下用户画像与真实痛点：
*   **高频操作易触发边界 Bug**：用户在频繁查看“执行结果”并快速滚动浏览时，极易触发窗口假死（[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)），这严重打断了 AI 助手的连续工作流体验。
*   **跨平台体验的一致性诉求**：Mac 用户的肌肉记忆是 `Cmd` 键，强行使用 `Ctrl` 会降低操作效率（[PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467)）。
*   **重度配置用户的可用性痛点**：高级用户在配置 MCP Server 的 env vars 或 headers 时，弹窗拉长导致操作按钮不可见（[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466)），说明重度 AI 智能体配置体验仍有优化空间。

### 8. 待处理积压
值得项目维护者高度关注的是，目前存在处于 `[stale]` 状态的代码贡献，这不利于开源社区生态的健康：
*   ⚠️ **[PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466)** 与 **[PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467)**：这两个 PR 均由贡献者 `linlihua` 于 2026-04-04 提交，至今近 2 个月未被处理，且当前被打上 `[stale]` 标签。建议维护者尽快 Review 并给予反馈，避免有效代码流失。
*   ⚠️ **[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)**：今日新建的假死 Bug，由于能 100% 复现，建议核心开发人员尽快介入评估对系统稳定性的影响。

---
*分析师注：今日项目健康度整体评估为 **观望（Watch）**。社区存在有效的痛点反馈和代码贡献，但亟需核心团队投入精力进行代码审查与 Bug 修复，以恢复项目的推进动能。*

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

# 📊 CoPaw (QwenPaw) 项目动态日报
**日期**: 2026-05-31 | **分析周期**: 过去 24 小时

---

### 1. 今日速览
过去 24 小时，CoPaw（QwenPaw）项目维持了**高活跃度的社区互动与反馈**，共产生 12 条 Issue 更新与 3 条 PR 更新。项目当前的重点似乎正向**改善桌面端用户体验与多渠道集成**倾斜。今日无新版本发布，且无任何已合并的 PR 或已关闭的 Bug（仅关闭了 1 条功能重复/已规划的 Feature），这表明项目可能正处于**新版本功能的密集开发与代码审查期**。

### 2. 版本发布
**无**。今日官方未发布任何新版本。

### 3. 项目进展
今日虽然**没有 PR 被合并**，但有 3 个高质量的待合并 PR 正在积极推进，标志着项目在多模型适配、多端协同和配置健壮性上正在演进：
*   **PR #4689 [feat]**: 优化 Provider 参数路由，解决了部分非标准 OpenAI 接口参数（如 DashScope 的 `enable_search`）被静默丢弃的问题，提升了多模型兼容性。
*   **PR #4827 [fix]**: 修复了上下文压缩阈值计算不准确的 Bug。该 PR 使系统能正确读取用户配置的 `max_input_length`，而非硬编码的回退值（128K）。
*   **PR #4821 [feat]**: 为飞书渠道新增了群组会话共享控制，支持在群聊中选择“共享同一会话”或“成员独立会话”。

### 4. 社区热点
今日社区讨论最为激烈的是**关于对标竞品（如 Trae）的代码编辑器/IDE 交互体验**的需求：
*   🔥 **[#4789] 期望支持对话回退与单次文件更改管理**：该 Issue 获得了 7 条评论和 1 个赞。用户强烈呼吁实现类似 Trae 的“沙箱回退”功能，即对话删除时，通过二次确认机制同步回退相关文件修改。这反映了用户对 Agent 执行任务时“容错与撤销”能力的极高诉求。
*   💬 **[#4408] 工作目录规范化**：获得 7 条评论。建议采用类似 `.qwenpaw` 的隐藏文件夹统一管理项目文件，表明用户对 CLI/Tauri 客户端在工作目录整洁度方面有较高要求。

### 5. Bug 与稳定性
今日报告了多个影响桌面端体验的 Bug，主要集中在 Windows 环境和协议兼容性上：
*   🔴 **严重 (P0)**: **[#4829] & [#4828] Windows 执行命令控制台闪烁**。Agent 调用 `execute_shell_command` 时会不断弹出黑窗，严重影响桌面端用户体验。（注：此问题与历史 Issue **#4123** 高度相关）。
*   🟡 **中等 (P1)**: **[#4454] `/mission` 指令导致控制台卡死**。界面完全无响应，且常规重置手段无效，严重阻塞了特定功能的使用。
*   🟡 **中等 (P1)**: **[#4824] ACP 协议连接 Claude Code 失败**。在与 VM 里的 `claude-agent-acp` 通信时，出现版本号格式不匹配及内部错误，跨 Agent 通信受阻。

### 6. 功能请求与路线图信号
结合今日的 Issues，可以明显看出项目下一阶段的演进方向：
*   **方向一：深度 IDE 化集成**
    *   **[#4825]** 支持文件更改的 Diff-view 和审阅功能。
    *   **[#4823]** 支持在对话中引用左侧目录的文件/代码索引。
    *   **[#4830]** Desktop 端输出本地路径自动识别为可点击链接。
*   **方向二：任务调度与并发控制**
    *   **[#4826]** 建议新增三种新消息处理策略（直接打断、等待完成、插队执行），对标 Hermes Agent。
*   **方向三：开箱即用的 Docker 环境**
    *   **[#4831]** 建议在官方镜像预装 `psycopg2-binary`、`pytz`、`mootdx` 等依赖。由于 PR #4689 正在优化 DashScope，若该 PR 合并，此 Docker 依赖问题可能需要配套跟进。

### 7. 用户反馈摘要
从今日的 Issues 和评论中，可以提取出用户最核心的痛点：
1.  **“Agent 只管写不管删，缺乏后悔药”**：用户对 Agent 修改文件后无法直观查看 Diff 和一键回退感到焦虑，急需更精细的沙箱管理。
2.  **“桌面端体验细节欠打磨”**：尤其是 Windows 用户，对路径不可点击、频繁弹出 cmd 黑窗等细节体验感到困扰。
3.  **“高级编排需求显现”**：用户不再满足于单纯的“一问一答”，开始要求对 Agent 的执行流（打断、挂起、插队）进行精细控制。

### 8. 待处理积压
*   ⚠️ **[#4123] Windows 控制台闪烁问题**：该 Bug 最早于 5月8日报告，至今已积累 7 条评论。今日又连续爆发了 **#4828** 和 **#4829** 两个相同的反馈，建议维护团队优先评估并在 Tauri/Electron 层面彻底解决底层进程调用参数问题。
*   ⚠️ **PR 积压处理**：目前有 3 个待合并的 PR（**#4689**, **#4827**, **#4821**），鉴于已有数天未发生代码合并，建议团队尽快安排 Code Review，以推动新版本的顺利发布。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 (2026-05-31)

## 1. 今日速览
过去 24 小时内，ZeroClaw 项目保持着**高度活跃且聚焦**的开发状态。系统共处理了 50 个 Pull Requests（其中 30 个已合并/关闭），并产生了 18 个 Issue 更新（12 个新开/活跃，6 个关闭）。从活动方向来看，项目当前正处于 **v0.7.8 桌面端/Tauri 优化**与 **v0.8.1 集成渠道/架构重构**的关键并行开发期。今日社区最显著的动作是完成了大规模的跨渠道权限校验代码重构（AllowlistAspect 迁移），同时针对 TTS、文件处理和邮件 OAuth2 等核心体验提交了多项重磅更新。

## 2. 版本发布
**今日无新版本发布。** 项目似乎正在为下一个里程碑版本（预计为 v0.7.8 或 v0.8.0-beta.2）积累核心特性。

## 3. 项目进展
今日项目整体取得了显著的基础架构进展，尤其是**“去重与标准化”**工作取得了突破性成果：
*   **跨渠道白名单架构重构落地**：由贡献者 @yijunyu 发起的庞大 PR 链（涉及 Telegram, Discord, Email, WhatsApp, Signal, Nextcloud 等 20+ 渠道）已于今日集中关闭/合并。此次迁移将各渠道内部手写的 `is_user_allowed` 等权限判断逻辑统一重构成了共享的 `aspect_std::AllowlistAspect`。这标志着项目在多渠道代码去重和标准化维护上迈出了决定性的一步。（代表 PR: [#6799](https://github.com/zeroclaw-labs/zeroclaw/pull/6799), [#6800](https://github.com/zeroclaw-labs/zeroclaw/pull/6800)）
*   **v0.8 核心架构初步成型**：极具野心的巨型 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)（引入 zerocode TUI, RPC socket 传输等）正在积极迭代并寻求首轮审查，这为 v0.8.0-beta.2 奠定了主干基础。

## 4. 社区热点
*   **长上下文与推理模型的数据丢失问题引发高度关注**：由 @Svtter 提交的 [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) 和 [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) 获得了最多评论（分别为 8 条和 4 条）。随着 DeepSeek V4 等强推理模型的普及，ZeroClaw 在多轮对话及触发主动上下文压缩时丢失 `reasoning_content` 的问题引发了开发者的深入探讨。
*   **本地/小模型优先模式呼声高涨**：[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 提出了针对本地小模型精简 Prompt、禁用宽松解析并防止指令泄漏的特性请求。该 Issue 获得了 2 个点赞，反映出社区在“利用 Ollama 等本地私有化部署”场景下对系统开销和隐私保护的真实诉求。

## 5. Bug 与稳定性
今日报告了多个影响工作流的关键性阻断 Bug（S1/S2级别）：
1.  **S1: Kimi 模型兼容性请求报错** - [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022)：`compatible.rs` 在未配置温度时默认硬编码发送 `0.7`，导致 Kimi-K2.6 模型直接返回 400 错误。目前尚无对应 Fix PR。
2.  **S1: GLM-5-turbo 上下文裁剪报错** - [#5636](https://github.com/zeroclaw-labs/zeroclaw/issues/5636)：zai-cn 提供商在执行抢占式上下文裁剪后，会触发 API 1214 (invalid messages) 错误。该 Issue 状态为处理中。
3.  **S1: Windows 桌面端构建失败** - [#6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964)：由于 Windows MANIFEST 资源重复嵌入，导致 Tauri 桌面端编译阻断。该 Bug 今日已被标记为关闭（已修复）。
4.  **S2: 插件技能加载失败** - [#7025](https://github.com/zeroclaw-labs/zeroclaw/issues/7025)：系统在 Prompt 中向模型承诺了插件自带的技能，但底层工具调用时始终失败，导致模型遭遇执行降级。

## 6. 功能请求与路线图信号
结合近期的 Feature PR，可以看出项目在渠道控制、文件处理及生态扩展上的演进信号：
*   **企业级邮件与 OAuth2 支持**：PR [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) 引入了针对 IMAP 的 XOAUTH2 认证及只读工具，极大改善了与 Outlook/Exchange 等企业级邮箱的兼容性，极有可能被纳入下个版本。
*   **更强大的二进制文件处理能力**：PR [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004) 为 `file_read` 和 `file_write` 添加了 Base64 编码选项，打破了以往仅支持 UTF-8 文本的限制。
*   **办公文档解析插件（WASM）**：Issue [#7024](https://github.com/zeroclaw-labs/zeroclaw/issues/7024) 提议通过 WASM 插件支持直接解析 DOCX/XLSX/PPTX 为 Markdown，这是 ZeroClaw 从纯文本聊天向“富媒体数字助手”转型的强烈信号。
*   **定时任务架构大重构（RFC）**：Issue [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 建议将定时任务完全路由至编排器消息管道，以从根本上修复一系列副作用导致的并发 Bug。

## 7. 用户反馈摘要
*   **路由精细控制缺失成为痛点**：从 Letta 迁移而来的用户（[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)）指出，ZeroClaw 目前缺乏“回复投放位置和方式”的控制力（例如：按指令将某些回复发送到邮件，语音发送到 Telegram）。这促使了统一输出路由模型的 RFC 提上日程。
*   **文件解析能力边界受挫**：有用户敏锐察觉到在处理非文本文件时遇到了体验瓶颈，这直接促成了上述 WASM 办公文档解析功能（#7024）的提案。
*   **社区贡献者协同机制改进**：用户 @Audacity88 主动发起审计追踪 [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)，试图找回此前因紧急回滚操作而丢失的 153 个已合并 Commit，反映出开源协同过程中对代码资产保护的高度重视。

## 8. 待处理积压
*   **待合并 PR 积压较重**：目前仓库仍有 **20 个 PR 处于待合并状态**。特别是跨频道架构重构的巨型 PR（如 [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848)）和渠道默认包裁剪 PR（[#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904)），需要维护者投入时间进行深度审查与回归测试，以免阻断 v0.7.8/0.8.1 的发布路径。
*   **安全相关配置增强需落实**：Issue [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989) 暴露出当前的 `#[secret]` 机制无法混淆 Headers 中的 Bearer Tokens，存在一定的安全隐患。虽然优先级被标为 P1，但目前尚无关联的修复 PR，需提醒安全维护者重点关注。

</details>