# AI 开源趋势日报 2026-07-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-04 22:15 UTC

---

# 《AI 开源趋势日报》 — 2026-07-05

### 1. 今日速览
今日 GitHub AI 生态呈现出明显的**“智能体技能化”与“工具链融合”**趋势。Claude Code 等 AI 编程助手周边生态爆发，大量针对 Coding Agent 的自定义“Skills（技能）”和上下文/Token 压缩工具登上热榜。此外，**MCP（模型上下文协议）**正在加速向各类 IDE、浏览器甚至游戏引擎（如 Unity）深度渗透，成为连接大模型与本地环境的标准桥梁。开发者对**本地隐私、Token 极限压缩**的关注度达到了新高，RAG 基础设施则继续朝着多模态和向量图谱化方向演进。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- **[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc)** [JavaScript] ⭐ (+716 today)
  允许在 Claude Code 中直接调用 OpenAI Codex 审查代码或委派任务，打破了不同大模型厂商之间的工具壁垒，是跨模型协作的典型代表。
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** [TypeScript] ⭐ (+303 today)
  官方推出的 Chrome DevTools MCP 服务，赋予了 AI 编程智能体直接控制和调试浏览器前端的能力。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐ 175,455
  本地大模型推理引擎的绝对霸主，现已无缝支持 Kimi-K2.6、GLM-5.1、DeepSeek 等最新开源模型。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐ 85,359
  高吞吐量、低显存占用的 LLM 推理与服务引擎，依然是生产环境部署大模型的首选底座。
- **[crynta/terax-ai](https://github.com/crynta/terax-ai)** [TypeScript] ⭐ (+44 today)
  轻量级（仅 7MB）的终端原生 AI 开发工作区，标志着轻量级本地 AI 开发工具的探索方向。

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [JavaScript] ⭐ 83,873 (+1,089 today)
  以“穴居人”极简口吻大幅削减 65% 上下文 Token 的 Claude Code 技能插件。今日爆发式涨星，反映了开发者对降低 Agent 运行成本的狂热追求。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐ 226,009
  全方位的 Agent 性能优化系统，集成了技能、直觉、记忆和安全机制，为 Claude Code、Cursor 等提供硬核加速。
- **[alibaba/page-agent](https://github.com/alibaba/page-agent)** [TypeScript] ⭐ (+726 today)
  阿里开源的网页端 GUI 智能体，能直接通过自然语言控制 Web 交互界面，拓展了 Agent 在前端自动化的边界。
- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** [Python] ⭐ 76,093
  字节跳动开源的长周期 SuperAgent 框架，结合沙盒、记忆和技能，可处理耗时数小时的深度研究与编码任务。
- **[usestrix/strix](https://github.com/usestrix/strix)** [Python] ⭐ (+1,910 today)
  开源 AI 渗透测试工具，能自动寻找并修复应用漏洞。网络安全与 AI Agent 的结合是当前企业级应用的热点。

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** [JavaScript] ⭐ (+432 today)
  汇集了 Claude 4.8、GPT 5.5、Gemini 3.5 等最新前沿模型的系统提示词泄露库，为开发者研究大模型对齐和指令调优提供了珍贵参考。
- **[Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily)** [Rust] ⭐ (+865 today)
  基于 Rust 构建的隐私优先本地会议助手，转录速度提升 4 倍，依托 Ollama 实现完全本地化处理。
- **[CoplayDev/unity-mcp](https://github.com/CoplayDev/unity-mcp)** [C#] ⭐ (+68 today)
  将 AI 助手与 Unity 编辑器连接的 MCP 桥梁，允许大模型直接管理游戏资产、控制场景，标志着 AI 正式进军 3D/游戏工业化流水线。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐ 54,249
  LLM 驱动的多市场股票智能分析系统，展示了 Agent 在自动化抓取、分析和高频金融决策中的成熟商用价值。

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐ 162,234
  业界最核心的机器学习模型定义与训练框架，全面覆盖文本、视觉、音频及多模态模型的训练与推理。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐ 101,488
  全球深度学习研发的底层基石，持续提供强大的 GPU 加速与动态神经网络支持。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐ 52,559
  极度友好的开源项目，支持在 2 小时内从 0 训练一个 64M 参数的小型 LLM，成为个人开发者学习大模型内部机制的首选。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐ 7,154
  大模型能力评测的“试金石”，全面支持 Llama3、Qwen、GLM 等主流模型在 100+ 数据集上的表现评估。

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐ 77,634
  将代码、数据库模式或文档转化为可查询的知识图谱。RAG 与知识图谱的结合正在重塑代码库索引方式。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐ 84,267
  业界领先的深度文档解析 RAG 引擎，将 OCR 技术与 Agent 能力深度融合。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** [Go] ⭐ 45,072
  高性能、云原生的向量数据库，为海量数据的向量近似最近邻（ANN）搜索提供强力支持。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** [Python] ⭐ 26,961
  面向 Agent 的开源记忆平台，通过自托管知识图谱引擎让 AI 拥有跨会话的长期记忆。

---

### 3. 趋势信号分析
今日热榜最显著的信号是**“AI 编程智能体的周边配件化与技能化”**。以 Claude Code 为代表的终端智能体，正催生出庞大的外围开源生态，如 Token 极限压缩工具、持久化上下文记忆层、以及跨模型调度工具。这表明开发者已不满足于单纯的“AI 自动写代码”，而是将其视为一个微型操作系统，为其打造“外设”和“应用软件”。

其次，**MCP（模型上下文协议）出现了泛在化趋势**。从 Chrome 浏览器调试、终端多路复用器，一路火到了 Unity 游戏引擎。大模型正通过标准化的 MCP 协议，接管开发者的每一个工作面板。

最后，结合榜单中海量的 GPT-5.5、Claude 4.8、Gemini 3.5 等前瞻命名（暗示了下一代模型的临近或行业想象），“提示词泄露库”和“小模型极速训练”项目备受追捧。这说明社区在拥抱先进 Agent 的同时，也在极力探索对冲大厂 API 垄断的“透明化/本地化”应对方案。

---

### 4. 社区关注热点
- **Claude Code Skills 生态：** 关注如 `ECC` 和 `caveman`，掌握如何为 AI 编程助手挂载自定义技能与优化 Token，将是未来一年开发者提高生产力的关键。
- **MCP 协议在非传统领域的扩展：** 密切留意 `chrome-devtools-mcp` 和 `unity-mcp`。MCP 正在打破“仅限 IDE 使用”的边界，前端测试和游戏开发自动化有望迎来奇点。
- **本地隐私优先的 AI 原生应用：** `Meetily` 的爆火印证了，借助 Rust 和 Ollama，100% 本地化、不依赖云端的复杂应用（如实时语音会议转录）已具备极强的工程可行性。
- **Agent 与安全基础设施的结合：** `strix` 的登榜预示着“AI for Sec”赛道正在爆发，将 AI 智能体用于自动化代码审计和渗透测试是极具潜力的蓝海。