# AI 开源趋势日报 2026-03-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-30 22:07 UTC

---

你好！我是专注 AI 开源生态的技术分析师。基于 2026-03-31 的 GitHub 数据，我为你整理了这份《AI 开源趋势日报》。

---

# 📅 AI 开源趋势日报 (2026-03-31)

## 1. 今日速览
**Claude Code 生态今日迎来爆发式增长**，GitHub Trending 榜单前列被 `claude-howto`、`oh-my-claudecode` 等项目霸榜，显示出开发者对 Anthropic 代码智能体工作流的极高热情。**AI 智能体向“操作系统”层级演进**，以 `NousResearch/hermes-agent` 为代表的项目强调“伴随成长”的特性，结合 `OpenBB` 等垂直领域数据平台，Agent 正在从单一任务执行者转向具备记忆和成长性的数字员工。**多模态与实时交互持续升温**，Microsoft 的 `VibeVoice` 登顶热榜，标志着开源社区在语音生成领域的“ChatGPT 时刻”正在到来。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具 (框架、SDK、推理)
*本周该领域主要侧重于底层推理优化与数据抓取工具。*

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐166,505 (+0 today)
  - **说明**：本地大模型运行的事实标准。本周更新支持了 Kimi-K2.5、GLM-5 等最新国产模型，是本地开发者的必备工具。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐74,745
  - **说明**：高吞吐、低显存的 LLM 推理引擎，生产环境部署模型的首选核心组件。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐101,277
  - **说明**：将网站转化为 LLM 可读的 Markdown 或结构化数据，是构建 RAG 和 Agent 记忆的基础设施。

### 🤖 AI 智能体/工作流 (Agent、自动化)
*今日最热赛道，重点在于“如何更好地编排和使用 Claude Code”。*

- **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** ⭐0 (+4150 today) 🔥
  - **说明**：今日增速最快项目。一份针对 Claude Code 的可视化实战指南，提供从基础概念到高级 Agent 的复制粘贴模板，解决了开发者上手新工具的痛点。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐18,435 (+1859 today)
  - **说明**：一个“能随你成长”的 Agent 框架。不仅强调任务执行，更侧重于 Agent 的长期记忆与个性化演进，是通往 AGI 路径上的重要探索。
- **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** ⭐0 (+1785 today)
  - **说明**：针对 Claude Code 的多智能体编排工具，主打团队协作场景，让 AI 像软件团队一样分工协作。
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** ⭐43,822
  - **说明**：仅需 Bash 即可构建的极简类 Claude Code Agent 框架，适合深度定制化开发。

### 📦 AI 应用 (垂直场景、产品)
*从通用聊天转向具体的金融、媒体和安全领域。*

- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** ⭐0 (+2509 today) 🔥
  - **说明**：微软推出的开源前沿语音 AI，今日 Star 数高居榜首。提供了高质量、低延迟的语音生成能力，填补了开源语音模型的空白。
- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** ⭐64,492 (+499 today)
  - **说明**：面向分析师、量化和 AI Agent 的金融数据平台。它是目前 AI + Finance 领域最成熟的开源基础设施。
- **[hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)** ⭐0 (+1138 today)
  - **说明**：实时换脸和视频深度伪造工具，仅需单张图片。尽管存在伦理争议，但在影视制作和特效领域需求巨大。

### 🧠 大模型/训练 (模型、微调、学习)
*教育与微调工具依然是热门，小白化趋势明显。*

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐89,559
  - **说明**：从零开始实现 ChatGPT 级别的 LLM，最佳的学习资源库。
- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐69,270
  - **说明**：统一高效微调 100+ LLMs 的框架，无需代码即可训练模型。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐44,784
  - **说明**：2 小时从 0 训练一个 64M 参数的小型 GPT，极佳的入门教学项目。

### 🔍 RAG/知识库 (向量库、检索)
*RAG 技术栈趋于成熟，向量数据库竞争白热化。*

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐76,620
  - **说明**：结合了 RAG 与 Agent 能力的深度文档理解引擎，解决了传统 RAG 对复杂文档解析能力弱的问题。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐51,500
  - **说明**：为 AI Agent 提供通用的记忆层，是构建长期记忆 Agent 的核心依赖。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐23,333
  - **说明**：一种基于推理的 RAG 索引新方案，试图摆脱对传统向量检索的依赖，值得关注的技术新路线。

---

## 3. 趋势信号分析

**1. Claude Code 正在重塑 AI 编程工作流**
今日榜单中，与 `Claude Code` 相关的项目占据了 Trending 榜单近 1/3 的席位（如 `claude-howto`, `oh-my-claudecode`）。这表明自 Anthropic 发布 Claude Code 以来，社区的关注点已从“模型能力”转移到“**Agent 工作流编排**”。开发者迫切需要模板、最佳实践以及多 Agent 协作框架，来充分利用模型的长上下文和推理能力。

**2. 从“工具”到“伙伴”：Agent 的记忆与成长**
`NousResearch/hermes-agent` 的流行（+1859 stars）揭示了 Agent 发展的新方向：**个性化与连续性**。以前的 Agent 是无状态的执行器，现在的趋势是构建具备长期记忆、能随用户习惯成长的“数字伙伴”。这与 `mem0` 等记忆层项目的活跃度相互印证。

**3. 语音生成 的开源突破**
Microsoft `VibeVoice` 的突然爆火（+2509 stars）补齐了开源模态的重要拼图。随着 LLM 文本能力的溢出，高质量的语音生成（TTS）和语音交互将成为下一阶段人机交互的竞争焦点。

**4. Vectorless RAG 的兴起**
在 RAG 领域，除了传统的向量数据库（Milvus, Qdrant），我们注意到 `PageIndex` 等项目开始探索“无向量”或“推理驱动”的检索方案。这暗示着社区正在尝试解决纯向量检索在精确性和复杂逻辑推理上的局限。

---

## 4. 社区关注热点

*   **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)**：如果你正在尝试接入 Claude Code 但不知从何下手，这是目前性价比最高的速成资源。
*   **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)**：值得所有语音交互开发者跟进，可能成为开源界的 TTS 新标杆。
*   **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)**：金融 AI 的基石项目，对于想做“AI 金融分析师”的开发者是必选项。
*   **[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)**：高达 11 万 Star 的项目（虽然历史积累），近期活跃度极高，是一个针对 Claude Code 的性能优化与技能增强系统，适合进阶用户。