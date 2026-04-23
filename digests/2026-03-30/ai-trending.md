# AI 开源趋势日报 2026-03-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-29 22:03 UTC

---

# AI 开源趋势日报 (2026-03-30)

## 1. 今日速览
**Claude Code 生态迎来爆发式增长**，今日 GitHub Trending 榜单被 Claude 相关工具包霸榜，从入门指南、记忆增强插件到底层架构实现，开发者正在围绕 "Claude Code" 构建全栈工具链。**AI Agent 智能体从“通用”走向“垂直与技能化”**，能够自主进行网络调研、合成报告的 Research Agent 以及基于技能框架的软件开发方法论成为新热点。多模态方面，**开源实时语音与数字人技术**正在逼近甚至超越闭源产品体验，微软入局开源语音 AI 值得关注。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具 (框架、SDK、CLI)

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [TypeScript] ⭐42,613 (+908 today)
  **一句话说明**：`Bash is all you need`，从 0 到 1 构建一个 nano 级别的 Claude Code “Agent 框架”，适合想深入理解 Agent 底层运行机制的开发者。

- **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** [Python] ⭐1,121 (+1,121 today)
  **一句话说明**：Claude Code 的可视化实战指南，提供大量“复制即用”的模板，是今日涨势最猛的入门教程类项目。

- **[googleworkspace/cli](https://github.com/googleworkspace/cli)** [Rust] ⭐23,045
  **一句话说明**：Google 官方推出的统一命令行工具，集成了 AI Agent Skills，让 AI 能够直接操作 Drive、Gmail、Calendar 等办公套件。

- **[jackwener/opencli](https://github.com/jackwener/opencli)** [TypeScript] ⭐8,705
  **一句话说明**：旨在成为“通用 CLI Hub”，将任何网站或应用转化为标准化的命令行接口，专为 AI Agent 发现和调用工具而设计。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐166,416
  **一句话说明**：本地大模型推理的标配工具，现已支持 Kimi-K2.5、GLM-5 等最新模型，是本地 AI 开发的基石。

### 🤖 AI 智能体/工作流 (Agents & Workflows)

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐16,545 (+997 today)
  **一句话说明**：由知名开源模型团队 Nous Research 推出的“成长型 Agent”，主打能够随着交互不断进化和适应用户需求。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐2,229 (+2,229 today)
  **一句话说明**：今日 Trending 黑马，一个基于 Shell 的“Agentic Skills Framework”，定义了一套让 AI 具备软件开发能力的标准与方法论。

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐1,186 (+1,186 today)
  **一句话说明**：一个专用于“网络调研”的 AI Agent 技能，能自动抓取 Reddit、X、YouTube 等多源信息并生成综述报告。

- **[trycua/cua](https://github.com/trycua/cua)** [Python] ⭐13,325
  **一句话说明**：Computer-Use Agents 基础设施，提供沙箱和 SDK 用于训练和评估能控制完整桌面的 AI 智能体。

- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** [TypeScript] ⭐21,481
  **一句话说明**：集成了 400+ MCP 服务器的自动化平台，是连接 AI Agent 与现有 SaaS 工具的“胶水”层。

### 📦 AI 应用 (垂直场景 & 产品)

- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** [Python] ⭐1,190 (+1,190 today)
  **一句话说明**：微软开源的前沿语音 AI 项目，可能代表了下一代 TTS（语音合成）或语音交互的开源标准。

- **[hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)** [Python] ⭐1,131 (+1,131 today)
  **一句话说明**：单图即可实现的实时换脸与视频 Deepfake 工具，在直播和视频创作领域需求巨大。

- **[moeru-ai/airi](https://github.com/moeru-ai/airi)** [TypeScript] ⭐213 (+213 today)
  **一句话说明**：自托管的虚拟伴侣（Grok Companion），支持实时语音、玩游戏（Minecraft），致力于实现类似 Neuro-sama 的直播互动体验。

- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** [Python] ⭐63,974 (+113 today)
  **一句话说明**：面向分析师和 AI Agent 的金融数据平台，是 AI 在金融量化领域落地的首选基础设施。

### 🔍 RAG/知识库 (记忆 & 检索)

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐42,500 (+464 today)
  **一句话说明**：解决 Claude Code“无状态”痛点的插件，自动压缩、存储历史对话并在新会话中注入上下文，为 AI 加上“长期记忆”。

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** [Go] ⭐43,489
  **一句话说明**：高性能云原生向量数据库，是构建大规模 RAG 系统的工业级标配。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐51,397
  **一句话说明**：为 AI Agent 提供通用的记忆层，是构建个性化、具备持续学习能力的 Agent 的核心组件。

---

## 3. 趋势信号分析

**1. "Claude-Native" 开发栈的形成：**
今日最显著的趋势是 **Claude Code 生态的横向扩张**。从 `claude-howto` 的教程，到 `claude-mem` 的记忆增强，再到 `learn-claude-code` 的底层架构重写，这表明开发者不再满足于简单的 API 调用，而是开始针对 Claude 的特性（如强大的上下文能力、Tool Use）进行深度定制开发。Claude 正在形成一个类似“操作系统”的中间件生态。

**2. Agent 技能化 与 具身化：**
通用 Agent（如 AutoGPT）的热度正在被**具备特定技能的垂直 Agent** 取代。`last30days-skill`（调研技能）和 `superpowers`（开发技能）的上榜，说明社区关注点从“Agent 能做什么”转向了“如何教 Agent 做具体的事”。同时，`trycua/cua` 和 `moeru-ai/airi` 分别在桌面操作和虚拟形象交互上的进展，标志着 Agent 正加速走向“具身智能”（在数字世界中通过屏幕交互）。

**3. 记忆系统成为 Agent 瓶颈突破口：**
随着会话上下文长度的增加，如何有效管理记忆成为关键。`claude-mem` 的火爆指出一个明确痛点：**单纯的超长上下文并不等于好用的记忆**。通过 AI 压缩和摘要来构建分层记忆，正在成为提升 Agent 持续工作能力的标准解法。

---

## 4. 社区关注热点

- **🔥 [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)**：如果你正在尝试使用 Claude Code 进行开发，这是目前最快上手的“作弊表”，模板化程度极高。
- **🚀 [obra/superpowers](https://github.com/obra/superpowers)**：推荐架构师关注，它可能重新定义 AI 参与软件工程（Agentic SE）的流程规范。
- **💡 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**：所有基于 LLM 的应用都面临“金鱼记忆”的问题，这个项目的实现思路（Compress & Inject）极具参考价值。
- **🎤 [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)**：微软在语音 AI 领域的开源动作往往预示着未来的产品方向（如 Copilot 语音版），建议提前布局研究。