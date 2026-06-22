# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-22 22:30 UTC

---

这份《AI 开源趋势日报（2026-06-23）》已为您整理完毕。报告剔除了纯前端框架、基础软件（如 SQLite、PDF 编辑、UI 设计）等非 AI 项目，聚焦于 AI 领域的底层架构、智能体生态与应用落地。

---

# 📰 AI 开源趋势日报（2026-06-23）

## 1. 今日速览
今日 GitHub AI 领域迎来**“Agentic Skills（智能体技能）与 Harness（运行框架）”的全面爆发**。以 Anthropic 的 Claude Code 为核心，开源社区正围绕 CLI 工具构建庞大的“技能库”和“上下文记忆”生态，主打“极简配置即用”。
此外，**Agentic Video（智能体视频生成）**成为全新爆款赛道，今日霸榜前三的项目均致力于将 AI 推理与视频渲染深度结合。RAG 与向量数据库领域则呈现出“降本增效”和“代码图谱化”的底层演进趋势。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流
*今日最火热赛道，社区正将大模型转化为具有具体执行力的数字员工。*
- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** [Python] ⭐0 (+2935 today)
  **一句话说明：** 号称全球首个开源智能体视频生产系统，将 12 条流水线与 500+ 技能注入 AI，把大模型变成完整的视频工作室，今日新增 Star 数霸榜第一。
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** [Python] ⭐73,192 (+736 today)
  **一句话说明：** 字节跳动开源的长周期 SuperAgent 框架，集成沙箱、记忆、子智能体，能自主处理耗时数小时的复杂科研与编码任务。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐199,909
  **一句话说明：** 著名开源团队 NousResearch 推出的“与你共同成长的智能体”，在 `ai-agent` 主题中总 Star 数高居榜首，持续领跑去中心化 Agent 生态。
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐67,881
  **一句话说明：** 主打“Bash 就是你所需要的一切”，从 0 到 1 教你构建类似 Claude Code 的极简 Agent 运行框架，深受开发者欢迎。

### 🔧 AI 基础工具（框架、SDK、开发工具）
*围绕 AI Coding 助手的配置、记忆与扩展工具链迎来大爆发。*
- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** [C] ⭐0 (+1186 today)
  **一句话说明：** 极致高性能的代码智能 MCP 服务器，将整个代码库索引为持久化知识图谱，亚毫秒级查询且大幅降低 Token 消耗（99%），今日热度飙升。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0 (+2051 today)
  **一句话说明：** 顶级 TS 大神 Matt Pocock 开源的其个人 `.claude` 目录原封配置，为“真工程师”打造的实用 Claude 编码技能集，今日疯狂吸星。
- **[garrytan/gstack](https://github.com/garrytan/gstack)** [TypeScript] ⭐0 (+649 today)
  **一句话说明：** YC 总裁 Garry Tan 开源的其私人 Claude Code 工具栈，用 23 个工具扮演 CEO、设计师、研发经理等角色完成闭环。
- **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** [Python] ⭐0 (+957 today)
  **一句话说明：** 为 AI Agent 量身定制的 817 个结构化网络安全技能库，完美兼容 Claude Code、Cursor 等主流工具。

### 📦 AI 应用（垂直场景与产品级解决方案）
*视频创作、金融分析与端侧部署展现出极强的落地价值。*
- **[palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro)** [Swift] ⭐0 (+2462 today)
  **一句话说明：** 专为 macOS 打造的原生 AI 视频编辑器，配合 OpenMontage 等项目，证明端侧 AI 视频生产力工具已具备爆款潜质。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐45,745 (+1560 today)
  **一句话说明：** LLM 驱动的多市场股票智能分析系统，聚合多维实时数据，支持零成本定时自动运行，是个人量化投资的杀手级应用。
- **[jamiepine/voicebox](https://github.com/jamiepine/voicebox)** [TypeScript] ⭐0 (+508 today)
  **一句话说明：** 一款体验极佳的开源 AI 语音工作室，集克隆、听写与创作为一身。
- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** [Jupyter Notebook] ⭐0 (+187 today)
  **一句话说明：** 突破性的推理加速项目，仅凭单张 4GB 显存的 GPU 即可运行 70B 参数大模型，极大降低了端侧大模型部署门槛。

### 🔍 RAG/知识库（检索增强与上下文管理）
*RAG 范式正从外挂搜索向“压缩记忆”和“无向量化推理”演进。*
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [JavaScript] ⭐83,757
  **一句话说明：** 跨会话的通用持久化上下文记忆工具，通过 AI 自动压缩会话记录并注入新会话，解决 Agent “健忘症”痛点的明星项目。
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐146,174
  **一句话说明：** 目前最成熟的 Production-ready 智能体工作流开发平台，稳居 RAG/Agent 应用层核心地位。
- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** [Python] ⭐33,292
  **一句话说明：** 创新性的无向量、基于推理的文档索引 RAG 方案，为传统向量化检索提供了全新的替代解法。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐46,953
  **一句话说明：** 上下文压缩代理工具，能在日志和 RAG 数据块送入大模型前进行预处理，大幅减少 60-95% 的 Token 消耗。

### 🧠 大模型/训练（底层框架、评测与优化）
*模型层趋于成熟，重心向推理优化、模型评测与本地化转移。*
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐174,737
  **一句话说明：** 大模型本地运行的事实标准，现已无缝支持 Kimi-K2.6、GLM-5.1、DeepSeek、gpt-oss 等最新一代开源模型。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐7,112
  **一句话说明：** 强大的大模型评测平台，全面覆盖 Llama3、GLM、Qwen 及闭源的 Claude/GPT 等主流模型与 100+ 数据集。
- **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** [Rust] ⭐7,712
  **一句话说明：** 使用 Rust 构建的模块化 LLM 应用 SDK，满足对性能、高并发极度敏感的开发场景需求。

---

## 3. 趋势信号分析

今日 GitHub 趋势呈现出三个极其清晰的信号：

**第一，“Agent Harness（智能体运行环境）”和“Skills（技能）”生态正在爆发。** 继大型模型发布后，开发者的焦点已从“调 API”转向“如何让 Agent 像人类一样干活”。今日霸榜的 `mattpocock/skills`、`garrytan/gstack` 甚至名人的私人 `.claude` 目录，标志着 **“AI Coding Agent 的配置工程”** 正在独立成学。基于 MCP（模型上下文协议）的工具链大爆发，使得 Agent 能够以 CEO、安全专家、视频剪辑师等具体职能角色的形态工作。

**第二，Agentic Video（智能体视频生成）作为全新垂直领域首次大规模爆发。** `OpenMontage`、`palmier-pro` 和 `hyperframes` 的同时登榜，证明多模态模型已跨越了单纯的“文生图/文生视频”阶段，进入了**“利用 HTML/代码写代码的思维，去控制 12 条流水线协同渲染视频”**的自动化工作流阶段。

**第三，Context（上下文）与 Token 管理成为 RAG 与基础设施的核心。** 随着任务周期的拉长（如长周期 Agent 运行数小时），大模型上下文窗口受限成为最大痛点。类似 `codebase-memory-mcp`（将代码变成图谱降低 99% Token）、`PageIndex`（抛弃传统向量，用推理做 RAG）等以**“降本增效、跨会话记忆”**为核心的基础设施开始受到狂热追捧，这是 AI 应用走向工程化成熟的标志。

---

## 4. 社区关注热点

- 🎬 **OpenMontage 与 Palmier-pro**：AI 视频生成彻底脱离玩具阶段。推荐音视频创作者与多模态开发者立刻关注，了解如何通过 Agent 调度流水线。
- 🛠️ **`.claude` 配置与 Skills 体系**：以 `garrytan/gstack` 为代表。提示词工程已落伍，现在流行的是“配置与技能工程”。开发者应尝试梳理自己的工作流并固化为 Agent Skill。
- 🧠 **codebase-memory-mcp**：极其惊艳的架构突破。将庞大代码库装进单机静态二进制中，实现亚毫秒检索且几乎不耗 Token，是所有搞大模型代码生成的必看项目。
- 💰 **daily_stock_analysis**：极佳的“LLM+自动化”实践标杆。即使是个人开发者，也能利用零成本部署+定时任务，构建出不输专业机构的智能多源数据分析面板。