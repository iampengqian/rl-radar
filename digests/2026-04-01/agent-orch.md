# Agent 编排生态日报 2026-04-01

> 生成时间: 2026-03-31 22:07 UTC | 覆盖项目: 13 个

- [Claude Squad](https://github.com/smtg-ai/claude-squad)
- [Crystal](https://github.com/stravu/crystal)
- [dmux](https://github.com/standardagents/dmux)
- [Symphony](https://github.com/openai/symphony)
- [Claude Code Bridge](https://github.com/bfly123/claude_code_bridge)
- [Dorothy](https://github.com/Charlie85270/Dorothy)
- [Jean](https://github.com/coollabsio/jean)
- [OpenKanban](https://github.com/TechDufus/openkanban)
- [Claude Flow](https://github.com/ruvnet/claude-flow)
- [Kodo](https://github.com/ikamensh/kodo)
- [ORCH](https://github.com/oxgeneral/ORCH)
- [GNAP](https://github.com/farol-team/gnap)
- [Swarm Protocol](https://github.com/phuryn/swarm-protocol)

---

## 横向对比分析

## 生态全景

在 2026-04-01 的监控周期内，AI Agent 编排生态呈现出明显的**分层演化**态势。以 **Jean** 和 **Claude Flow** 为代表的项目正处于积极的功能迭代与稳定性攻坚阶段，分别聚焦于底层 Git 交互抽象和企业级安全合规。与此同时，**Claude Code Bridge**、**dmux** 和 **Dorothy** 等项目则致力于填补生态中的“最后一块拼图”，专注于终端环境兼容性、进程管理和跨平台桌面体验的精细化打磨。整体生态活动主要集中在提升 Agent 与本地开发环境（IDE、Terminal、OS）的深度融合能力，而非单纯的模型能力构建。

## 各项目活跃度对比

过去 24 小时内，各项目的活跃度差异显著。Jean 在代码合并量上领先，显示出其对稳定性的急迫需求；而 Claude Flow 在 Issue 讨论深度上更胜一筹，反映了其企业级用户对治理和成本的关注。

| 项目 | Issues | PRs | Releases | 信号 |
| :--- | :---: | :---: | :---: | :--- |
| **Jean** | 6 | 6 | 0 | **高频修复**。核心贡献者集中合并 PR，重点解决 Windows 客户端与 Worktree 核心逻辑缺陷，为下个版本蓄力。 |
| **Claude Flow** | 5 | 2 | 0 | **治理与稳定性博弈**。社区热议 Daemon 崩溃与 Token 消耗，同时引入成本追踪与 Git Hook 强制合规功能，向生产级演进。 |
| **Claude Code Bridge** | 3 | 2 | 0 | **跨平台修补**。针对 Windows 路径解析和旧版终端兼容性进行了精确修复，响应了边缘场景的用户需求。 |
| **Dorothy** | 0 | 1 | 0 | **生态扩展**。无缺陷反馈，重点推进 Linux 标准化打包，旨在降低桌面端部署门槛。 |
| **dmux** | 0 | 1 | 0 | **鲁棒性提升**。修复了带空格路径下的启动失效问题，属于底层系统交互的关键修正。 |
| *Others* | 0 | 0 | 0 | *无显著活动*。Claude Squad, Crystal 等项目暂无更新。 |

## 编排模式与架构对比

虽然各项目均属于"Agent 编排"范畴，但在处理 Agent 协调的方式上呈现出"重载"与"轻量"两种截然不同的路径：

1.  **环境级编排**
    *   **Claude Flow**: 采用**集中式管控策略**。通过 Daemon（守护进程）管理 Agent 生命周期，并引入"钩子"机制在工具调用前进行拦截（如 `block-no-verify`），实现了对 Agent 行为的强制合规审查。
    *   **Jean**: 侧重于**文件系统层的状态同步**。它不直接调度 Agent 任务，而是通过精细化的 Worktree 管理和 PR 元数据绑定，为多 Agent 并行开发提供互不干扰的物理隔离环境。

2.  **连接级编排**
    *   **Claude Code Bridge & dmux**: 属于**连接器模式**。它们不负责 Agent 的逻辑决策，而是解决 CLI 工具与终端复用器之间的通信协议问题。
    *   **差异**: `dmux` 侧重于利用 tmux 实现多 Agent 进程的**并行启动与隔离**；而 `Bridge` 侧重于跨 Pane 的**上下文感知与指令注入**（如自动提交），解决的是"如何让 Agent 看到正确的窗口"的问题。

## 共同关注的工程方向

尽管定位不同，今日活跃的项目在工程重心上表现出惊人的一致性：

*   **跨平台路径与兼容性**：从 Jean 修复 Windows 标题栏，到 Bridge 修正 `file:///` URL 解析，再到 dmux 处理路径空格，这表明 Agent 工具链正在经历从"类 Unix 优先"向"全平台原生支持"的痛苦转型，这是工具大众化的必经之路。
*   **资源约束与成本控制**：Claude Flow 的 Token 消耗问题和成本账本（PR #1487）凸显了多 Agent 系统中**上下文膨胀**带来的经济压力。如何在编排层通过压缩、缓存或调度策略降低 Token 消耗，已成为核心优化指标。
*   **系统级集成深度**：单纯的 API 调用已不再足够。项目正在向操作系统底层下沉，涉及 Git Hooks 拦截、终端转义序列处理以及 Electron 原生控件重构，试图在更底层的入口拦截和控制 AI 行为。

## 差异化定位分析

*   **Jean (AI 原生 Git 客户端)**: 定位为**Agent 的系统界面**。它试图替代传统 Git GUI，通过封装复杂的 Git 操作为可视化状态机，让 AI 能够以"人类监督+机器执行"的方式安全地管理代码仓库。
*   **Claude Flow (企业级 Agent 运行时)**: 定位为**AI 行为治理平台**。它不仅运行 Agent，更通过 Hooks 和 Cost Ledger 提供了"刹车"和"仪表盘"，适合对安全合规和成本敏感的企业团队。
*   **Claude Code Bridge / dmux (终端基础设施)**: 定位为**胶水层**。它们是轻量级的实用工具，旨在解决特定终端环境下的"Last Mile"连接问题，适合喜欢在终端环境下构建 DIY 工作流的硬核开发者。
*   **Dorothy (桌面编排器)**: 定位为**低门槛 GUI 入口**。通过 Electron 封装复杂的后端逻辑，主要服务于非技术背景用户或希望可视化管理 Agent 工作流的场景。

## 值得关注的趋势信号

1.  **私有化与数据主权回归**：Jean 社区提出的 Gitea 集成需求（Issue #276）是一个强烈信号。随着企业对代码安全性的重视，Agent 编排工具正在从仅支持 GitHub 向支持自托管 Git 服务转型，以适应防火墙内的开发环境。
2.  **从"能跑"到"可控"**：Claude Flow 中关于拦截 `--no-verify` 的讨论表明，业界关注点已从"Agent 能否写出代码"转移到"Agent 是否遵守开发规范"。**可解释性与合规性**将成为下一阶段 Agent 工具竞争的护城河。
3.  **桌面端争夺战开启**：Jean 和 Dorothy 同时在发力桌面端体验（特别是 Linux 和 Windows 支持）。这暗示着未来的 AI 编排可能不再局限于 Web SaaS 或 CLI，**本地桌面**正成为多模态 Agent 交互的新战场。

---

## Agent 编排项目详细报告

<details>
<summary><strong>Claude Squad</strong> — <a href="https://github.com/smtg-ai/claude-squad">smtg-ai/claude-squad</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Crystal</strong> — <a href="https://github.com/stravu/crystal">stravu/crystal</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>dmux</strong> — <a href="https://github.com/standardagents/dmux">standardagents/dmux</a></summary>

# Agent 编排日报：dmux (2026-04-01)

## 1. 今日速览
dmux 项目今日无新版本发布，Issue 列表平静。项目核心贡献者 **egcastro** 提交了一项关键 PR，修复了在包含空格路径下执行启动命令的 Bug，提升了跨平台兼容性。

## 2. 版本发布
*   **无**

## 3. 重点 Issues
*   **无**

## 4. 关键 PR 进展
*   **[#67 fix: preserve startup command paths with spaces when sending tmux keys](https://github.com/standardagents/dmux/pull/67)**
    *   **状态**: OPEN
    *   **作者**: egcastro
    *   **技术细节**:
        *   **问题背景**: 原有逻辑在构建 `tmux send-keys` 指令时采用简单的字符串拼接，导致当 Agent 启动命令路径包含空格（如 macOS 常见的 `Library/Application Support` 目录）时，路径解析错误。
        *   **解决方案**: 放弃字符串拼接，改用 `spawnSync` 辅助函数生成参数安全的调用指令，确保启动命令作为单一 Token 传递。
        *   **影响**: 显著提升了 dmux 在处理复杂安装路径或依赖空间路径环境时的鲁棒性。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
dmux 专注于解决多 Agent 运行时的环境隔离与进程管理问题。本次 PR #67 的修复表明项目正在深入打磨底层终端交互（tmux）的细节。对于需要在本地并行运行多个 AI Agent 的开发者而言，这种对路径解析和进程启动机制的严格修复，是确保复杂工作流稳定运行的基础，体现了项目对系统级工程质量的重视。

</details>

<details>
<summary><strong>Symphony</strong> — <a href="https://github.com/openai/symphony">openai/symphony</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Code Bridge</strong> — <a href="https://github.com/bfly123/claude_code_bridge">bfly123/claude_code_bridge</a></summary>

# Agent 编排日报：Claude Code Bridge
**日期**：2026-04-01  
**项目**：[bfly123/claude_code_bridge](https://github.com/bfly123/claude_code_bridge)

---

## 1. 今日速览
过去 24 小时内，项目共处理 **3 条 Issue**（2 条待处理，1 条已关闭）和 **2 条 PR**（均已合并）。核心聚焦点在于**跨平台兼容性修复**（Windows 路径解析、旧版 WezTerm 兼容）以及**终端生态扩展**的讨论（浅色主题、Zellij 支持）。

---

## 2. 版本发布
无新版本发布。

---

## 3. 重点 Issues

### 🟢 功能扩展诉求
| Issue | 标题 | 状态 | 核心内容 |
|-------|------|------|----------|
| [#161](https://github.com/bfly123/claude_code_bridge/issues/161) | 能支持 zellij 吗 | OPEN | 社区请求支持 Zellij 终端复用器，目前项目主要适配 tmux/WezTerm，用户希望扩展终端生态。 |
| [#157](https://github.com/bfly123/claude_code_bridge/issues/157) | 浅色tmux主题下底部状态栏依然是深色 | OPEN | 状态栏颜色被硬编码为 Cappuccin 深色主题，无法自适应浅色 tmux 主题，影响视觉一致性。 |

### 🟢 已解决
| Issue | 标题 | 状态 | 核心内容 |
|-------|------|------|----------|
| [#158](https://github.com/bfly123/claude_code_bridge/issues/158) | Windows: `_extract_cwd_path` 路径解析错误 | CLOSED | Windows 原生环境下 WezTerm 后端的 `file:///` URL 解析错误，导致 `/F:/path` 被误解析，pane 存活检测失败。已通过 PR #159 修复。 |

---

## 4. 关键 PR 进展

| PR | 标题 | 状态 | 技术细节 |
|----|------|------|----------|
| [#160](https://github.com/bfly123/claude_code_bridge/pull/160) | fix: add sleep before Enter send to fix auto-submit on older WezTerm | CLOSED ✅ | 针对旧版 WezTerm（`send-key` 指令前）的兼容性修复：在 `send_via_wezterm()` 中 `send-text` 后添加短暂延迟，确保 TUI 完成括号粘贴序列处理后再发送 `\r`，避免自动提交失败。 |
| [#159](https://github.com/bfly123/claude_code_bridge/pull/159) | fix: strip leading slash from Windows drive letter paths in `_extract_cwd_path` | CLOSED ✅ | 修正 `WeztermBackend._extract_cwd_path()` 对 Windows `file:///F:/path` URL 的解析逻辑，移除驱动器字母前的多余斜杠，使 `pane_belongs_to_cwd()` 正确匹配工作目录。 |

---

## 5. 为什么这个项目在 Agent 编排生态中值得关注

1. **填补 Claude Code CLI 与终端复用器的集成空白**  
   Claude Code Bridge 解决了 Claude Code CLI 在 tmux/WezTerm 等终端复用环境中的会话管理与跨 pane 通信问题，是构建持久化 Agent 工作流的关键基础设施。

2. **活跃的跨平台适配迭代**  
   本次 PR 修复覆盖 Windows 原生路径解析和旧版 WezTerm 兼容性，表明项目正积极拓展非 Linux/macOS 场景，降低 Agent 编排的终端环境门槛。

3. **社区驱动的终端生态扩展**  
   Issue #161（Zellij 支持）和 #157（主题适配）反映了用户群体对多样化终端工具链的需求，项目定位正从单一工具向通用终端适配层演进，具备成为 Agent 编排生态标准组件的潜力。

</details>

<details>
<summary><strong>Dorothy</strong> — <a href="https://github.com/Charlie85270/Dorothy">Charlie85270/Dorothy</a></summary>

# Agent 编排日报：Dorothy 项目动态 (2026-04-01)

## 1. 今日速览
过去 24 小时内，Dorothy 项目代码仓库无明显缺陷反馈，核心动态集中在**构建系统与跨平台支持的扩展**。项目正在积极推进 Linux 发行版的标准化打包工作。

## 2. 版本发布
过去 24 小时内**无**新版本发布。

## 3. 重点 Issues
过去 24 小时内**无**新建或更新的 Issues。社区反馈渠道目前平稳，暂未发现阻塞性问题。

## 4. 关键 PR 进展
今日共有 1 条活跃 PR，重点在于完善 CI/CD 流程与 Linux 生态兼容性。

- **[#44 [OPEN] feat: add Ubuntu/Linux .deb build support](https://github.com/Charlie85270/Dorothy/pull/44)**
    - **作者**: davebulaval
    - **核心内容**:
        1.  **构建集成**: 引入 `electron-builder` 以支持 Ubuntu/Linux (x64) 的 `.deb` 包构建。
        2.  **自动化**: 新增 `build-linux.yml` 工作流，支持 Tag 触发和手动构建。
        3.  **质量门禁**: 在 CI 中增加了冒烟测试，包括包体积检查 (>50MB)、`dpkg-deb` 元数据校验以及二进制文件存在性验证。
    - **分析**: 该 PR 显著提升了项目在 Linux 桌面端的分发能力，且 CI 逻辑中包含了较为严格的完整性检查，有助于保证发布包的质量。

## 5. 为什么这个项目在 Agent 编排生态中值得关注
Dorothy 是一个基于 Electron 构建的客户端工具。在当前的 AI Agent 编排生态中，大多数解决方案（如 LangChain, Flowise）侧重于 Web 端或后端服务。
- **桌面端体验**: Dorothy 填补了本地桌面端 Agent 编排工具的空白，提供了更原生的 OS 集成体验。
- **跨平台能力**: 随着 PR #44 的推进，项目正在补齐 Linux 短板，这对于需要在服务器或 Linux 桌面环境下运行本地 Agent 的开发者至关重要。
- **低门槛接入**: 通过提供标准的安装包，降低了非技术用户部署和使用复杂 Agent 工作流的门槛。

---
*数据来源: GitHub (Charlie85270/Dorothy)*

</details>

<details>
<summary><strong>Jean</strong> — <a href="https://github.com/coollabsio/jean">coollabsio/jean</a></summary>

# Agent 编排日报：Jean 项目动态 (2026-04-01)

## 1. 今日速览
Jean 项目今日进行了高频度的维护与修复，核心开发者 `andrasbacsai` 集中关闭了 5 个 Pull Requests，主要针对 **Windows 客户端体验** 和 **Worktree 管理** 中的关键 Bug 进行了修复。虽然无新版本 Release，但合并的 PR 涉及 UI 交互和 Git 逻辑底层，预示着即将发布稳定性更新。社区方面，出现了关于集成 `Gitea` 的新功能请求，显示出用户对去中心化 Git 工作流的需求。

## 2. 版本发布
*   **无新版本发布** (最近一次发布暂无记录，今日主要代码变更集中在 Main 分支合并)。

## 3. 重点 Issues

*   **[Feature] 支持 Gitea 集成**
    *   **分析**：Issue #276 提出将 Gitea 作为 GitHub 的替代方案。这反映了 Agent 编排工具不仅要支持代码生成，还需适应企业级私有化部署或开源偏好场景，扩展 Git Provider 是提升工具通用性的关键一步。
    *   **链接**：[coollabsio/jean Issue #276](https://github.com/coollabsio/jean/issues/276)

*   **[Bug] Worktree PR 链接丢失**
    *   **分析**：Issue #241 指出从 master 创建 worktree 后切换分支导致 PR 链接失效。这直接影响了 Agent 在多分支并行开发场景下的上下文感知能力。
    *   **链接**：[coollabsio/jean Issue #241](https://github.com/coollabsio/jean/issues/241)

*   **[Bug] Windows 客户端体验缺陷**
    *   **分析**：Issue #249 (主题不跟随系统) 和 #240 (窗口控制栏重复) 表明 Jean 正在攻坚跨平台桌面客户端的兼容性细节。
    *   **链接**：[coollabsio/jean Issue #249](https://github.com/coollabsio/jean/issues/249) | [coollabsio/jean Issue #240](https://github.com/coollabsio/jean/issues/240)

## 4. 关键 PR 进展

今日共有 **6 个 PR 被合并**，主要围绕 v0.x 版本的稳定性构建：

*   **[Merge] 修复 Worktree PR 同步逻辑 (PR #272)**
    *   **详情**：解决了 Issue #241。通过初始化 `pr_number` 和优化 `detect_and_link_pr` 逻辑，确保在分支切换后能正确同步 PR 元数据。
    *   **链接**：[coollabsio/jean PR #272](https://github.com/coollabsio/jean/pull/272)

*   **[Merge] 修复 Windows 窗口控制栏重复 (PR #271)**
    *   **详情**：移除了自定义的 `WindowsWindowControls` 组件，转而依赖原生控件，解决了 Windows 11 下标题栏按钮重叠的问题。
    *   **链接**：[coollabsio/jean PR #271](https://github.com/coollabsio/jean/pull/271)

*   **[Merge] 修复系统主题监听 (PR #275)**
    *   **详情**：重构了 `applyTheme` 辅助函数，并在 `system` 模式下订阅 `matchMedia` 变化，修复了 Windows 端修改系统主题后应用不刷新的 Bug。
    *   **链接**：[coollabsio/jean PR #275](https://github.com/coollabsio/jean/pull/275)

*   **[Merge] 优化 Worktree 加载状态 (PR #274)**
    *   **详情**：修复了新建 Worktree 时加载状态永久卡死的问题，优化了缓存更新与时序逻辑。
    *   **链接**：[coollabsio/jean PR #274](https://github.com/coollabsio/jean/pull/274)

*   **[Merge] UI 细节优化**
    *   **详情**：PR #270 为 Chat 流式传输增加了 Spinner 动画；PR #273 修复了菜单与底部控件的重叠问题。
    *   **链接**：[coollabsio/jean PR #270](https://github.com/coollabsio/jean/pull/270) | [coollabsio/jean PR #273](https://github.com/coollabsio/jean/pull/273)

## 5. 为什么这个项目在 Agent 编排生态中值得关注

Jean (`github.com/coollabsio/jean`) 不仅仅是一个 Git 客户端，它正在尝试解决 **AI Agent 与代码仓库深度交互** 的痛点：

1.  **Agent 友好的 Git 抽象**：今日关于 Worktree 的密集修复（#272, #274）表明，Jean 正在构建一个比传统 Git CLI 更适合 Agent 操作的文件系统层。Agent 需要极其稳定的环境隔离（Worktrees）来并行执行任务，Jean 正在填补这一底层基建的空白。
2.  **实时状态反馈**：PR #270 增加的流式状态指示器，对于监控长时间运行的 Agent 任务至关重要。在编排系统中，清晰地展示 Agent 的“思考”与“执行”状态是建立用户信任的关键。
3.  **私有化与开放性**：社区提出的 Gitea 集成（#276）需求揭示了企业级 Agent 编排的一个重要趋势：**数据主权**。支持自托管 Git 服务意味着 Jean 有潜力成为企业内部 DevOps Agent 的标准控制台。

**总结**：Jean 正处于从“开发者工具”向“Agent 运行时环境”演进的关键阶段，其对 Worktree 和 Git 元数据的精细处理，使其值得被任何关注 AI 自动化编程的团队纳入技术雷达。

</details>

<details>
<summary><strong>OpenKanban</strong> — <a href="https://github.com/TechDufus/openkanban">TechDufus/openkanban</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Claude Flow</strong> — <a href="https://github.com/ruvnet/claude-flow">ruvnet/claude-flow</a></summary>

# Agent 编排日报：Claude Flow (2026-04-01)

## 1. 今日速览
过去 24 小时，Claude Flow (Ruflo) 生态活跃度中等，重点关注**稳定性修复**与**企业级安全管控**。社区反馈集中在 v3.5.48 版本的 Daemon 崩溃问题以及 Token 消耗过高的性能优化上。同时，出现了关于跨项目成本核算的新功能提案。

## 2. 版本发布
*   **无新版本发布**。

## 3. 重点 Issues

### 🔴 关键稳定性问题
*   **[v3.5.48] Daemon 启动崩溃**
    Issue #1471 报告升级至最新版后，Daemon 因找不到 `agentdb/dist/controllers/index.js` 而立即崩溃。这似乎是一个依赖打包或路径解析错误。
    [查看详情](https://github.com/ruvnet/ruflo/issues/1471)

*   **Windows + Node 25 环境守护进程失效**
    Issue #1478 指出在 Windows 环境下，由于顶层 await 未解决及进程分离问题，导致 Daemon 进程在启动后立即退出，无法维持后台运行状态。
    [查看详情](https://github.com/ruvnet/ruflo/issues/1478)

### ⚠️ 性能与资源消耗
*   **极高 Token 占用**
    Issue #1477 反映 Ruflo 在会话初始化及运行期间，因频繁调用多个 Skills/MCPs/Tools 导致上下文迅速膨胀，触发 Claude Code 的自动压缩 机制，严重影响使用体验和成本。
    [查看详情](https://github.com/ruvnet/ruflo/issues/1477)

### 🛡️ 功能请求
*   **防止 AI 绕过 Git Hooks**
    Issue #1387 建议增加 `block-no-verify` 功能，以防止 AI Agent 在执行 Git 操作时使用 `--no-verify` 标志绕过 pre-commit 等钩子，强化企业级代码安全合规。
    [查看详情](https://github.com/ruvnet/ruflo/issues/1387)

## 4. 关键 PR 进展

*   **[feat] 跨项目会话成本追踪账本** (Open)
    PR #1487 提交了 `cost-ledger.cjs`，旨在解决 Claude Code 会话结束后成本数据丢失的问题。该功能允许开发者跨项目、按时间段统计 API 花费，对于多 Agent 编排的成本控制极具价值。
    [查看 PR](https://github.com/ruvnet/ruflo/pull/1487)

*   **[feat] 增加 block-no-verify PreToolUse 钩子** (Closed)
    PR #1388 配合上述 Issue #1387，通过在 `.claude/settings.json` 中注入 Bash 钩子，强制拦截带有跳过钩子参数的 Git 命令，已合并/关闭。
    [查看 PR](https://github.com/ruvnet/ruflo/pull/1388)

## 5. 为什么值得关注

Claude Flow 正在从单纯的编排工具向**企业级 AI 生产环境平台**演进。

1.  **治理与合规性**：通过 `block-no-verify` 等钩子机制，项目正在解决 "AI Agent 代码行为不可控" 的痛点，确保 AI 生成的代码符合团队既定的 Git 工作流。
2.  **可观测性**：新的 PR #1487 表明社区正在弥补 Agent 运维中缺失的一环——**成本可观测性**。在复杂的多 Agent 交互中，能够量化每个会话的边际成本是商业落地的关键。
3.  **挑战**：当前的 Daemon 稳定性问题和 Token 消耗过高的反馈，揭示了在构建通用 Agent 框架时，**底层运行时的兼容性**与**上下文窗口管理**依然是主要的技术瓶颈。

</details>

<details>
<summary><strong>Kodo</strong> — <a href="https://github.com/ikamensh/kodo">ikamensh/kodo</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ORCH</strong> — <a href="https://github.com/oxgeneral/ORCH">oxgeneral/ORCH</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>GNAP</strong> — <a href="https://github.com/farol-team/gnap">farol-team/gnap</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Swarm Protocol</strong> — <a href="https://github.com/phuryn/swarm-protocol">phuryn/swarm-protocol</a></summary>

过去24小时无活动。

</details>