# AI 开源趋势日报 2026-06-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-10 22:33 UTC

---

# AI 开源趋势日报 (2026-06-11)

## 1. 今日速览

*   **AI Agent 迎来“技能插件化”爆发**：今日 GitHub Trending 榜单被各类 Agent Skills（技能框架与插件）占据，从通用编程到产品经理专属技能包，AI 代理的能力边界正在被快速标准化和模块化。
*   **“逆向工程”与系统提示词泄露成为显学**：搜集各大闭源 AI 工具（如 Cursor, Devin, Manus 等）系统提示词的仓库热度飙升，反映出社区对顶级 AI 产品“内部设定”的强烈好奇心与拆解热潮。
*   **“万物皆可 Agent”趋势加深**：医疗诊断、金融研报自动化、甚至街头调查（OSINT）等垂直场景，都出现了以 LLM 决策为核心的自动化 Agent 解决方案，且大多支持零成本本地运行。
*   **RAG 技术走向多模态与无向量化**：在 RAG/知识库领域，除了传统的向量数据库持续迭代，基于推理的无向量化 RAG 以及深度集成知识图谱的记忆层开始受到高度关注。

---

## 2. 各维度热门项目

### 🤖 AI 智能体/工作流
本类别今日热度极高，核心聚焦于**Agent 的技能扩展、指令优化及特定领域的自动化执行**。

*   **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐+781 today
    *   *说明*：为 AI 编程代理量身定制的生产级工程技能包，显著提升了 Agent 处理复杂代码任务的能力。
*   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐+2561 today 🚀
    *   *说明*：今日增速最猛的项目之一，提供一种能自动在 Reddit、X、HN 等全网平台进行主题调研并生成摘要的 Agent 技能，展现了 Agent 在 OSINT（开源情报）领域的巨大潜力。
*   **[phuryn/pm-skills](https://github.com/phuryn/pm-skills)** ⭐+775 today
    *   *说明*：产品经理专属的 Agent 技能市场，将 PM 的日常闭环（调研、战略、执行、增长）转化为 Agent 可执行的命令，是“AI 虚拟员工”落地的典型案例。
*   **[obra/superpowers](https://github.com/obra/superpowers)** ⭐+1205 today
    *   *说明*：一套完整的 Agentic 技能框架和软件开发方法论，为如何系统性地构建和调度 AI 代理提供了指导。
*   **[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)** ⭐+397 today
    *   *说明*：史上最全的闭源 AI 系统提示词泄露/合集，涵盖 Cursor, Devin, Manus 等主流工具，是研究顶级 AI 产品 Prompt 工程的绝佳宝库。
*   **[google/skills](https://github.com/google/skills)** ⭐+238 today
    *   *说明*：Google 官方推出的面向其生态和技术的 Agent Skills 集合，标志着大厂正在积极介入并标准化 Agent 的工具调用生态。

### 🔧 AI 基础工具
开发基础设施正在向多模型统一调度和端侧算力倾斜。

*   **[ollama/ollama](https://github.com/ollama/ollama)** ⭐173,783 (+stars today)
    *   *说明*：本地大模型运行的事实标准，近期快速跟进支持了包括 Kimi-K2.6、GLM-5.1 等最新一代开源模型。
*   **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐82,452
    *   *说明*：高性能、高吞吐量的 LLM 推理与服务引擎，依然是生产环境中部署大模型的核心基石。
*   **[activeloopai/hivemind](https://github.com/activeloopai/hivemind)** ⭐+47 today
    *   *说明*：旨在为所有 AI 代理提供“同一个大脑”（共享记忆与调度中枢），解决多 Agent 协作中的上下文割裂问题。
*   **[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** ⭐+204 today
    *   *说明*：一份关于如何高效使用 Claude Code 的可视化指南与模板库，是当前 AI 辅助编程不可或缺的实战手册。

### 📦 AI 应用
AI 正在视频生成、医疗、金融等垂直领域深入渗透，并以“一键运行”的形式降低门槛。

*   **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐+1471 today
    *   *说明*：凭借大模型能力实现一键生成高清短视频的爆款应用，彻底简化了图文到视频（TTS + 素材匹配）的流程。
*   **[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed)** ⭐+535 today
    *   *说明*：开源医疗 AI 项目，旨在利用大模型能力为普通开发者提供基础的医疗健康分析辅助。
*   **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐41,802
    *   *说明*：LLM 驱动的 A/H/美股智能分析系统，整合多源数据与实时新闻，通过仪表盘直观展示，主打“零成本定时运行”。

### 🔍 RAG/知识库
从单纯比拼向量检索，演进为更高级的上下文组装和记忆持久化。

*   **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** ⭐61,392
    *   *说明*：一体化本地 AI 知识库应用，强调数据本地化与隐私保护，支持无缝对接各类文档和 LLM。
*   **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐82,407
    *   *说明*：业界领先的开源深度文档理解与 RAG 引擎，特别擅长处理复杂排版 PDF 的解析和知识提取。
*   **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐32,852
    *   *说明*：提出了“无向量化”的颠覆性 RAG 方案，直接通过推理模型进行文档检索，是 RAG 技术栈的一个重要分支演进。
*   **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐81,628
    *   *说明*：专为 AI Agent 打造的持久化上下文记忆库，解决了 Agent 跨会话工作时遗忘历史的痛点。

### 🧠 大模型/训练
基础模型层面，社区关注点在于从头训练的透明化及推理模型的优化。

*   **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** ⭐+241 today
    *   *说明*：详细展示从数据下载到文本生成全流程的大模型从零训练教程，极具学术与工程参考价值。
*   **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐161,482
    *   *说明*：AI 模型界的绝对基础设施，全面覆盖文本、视觉、音频的多模态推理与训练框架。
*   **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐189,883
    *   *说明*：与模型发展高度协同的“陪伴型”代理框架，标志着开源社区在探索模型能力边界上的持续发力。

---

## 3. 趋势信号分析

从今日热榜数据中，我们可以清晰地提炼出以下关键信号：

1.  **AI Agent 进入“技能拼图”时代**：今日榜单最大的亮点是 `*-skills` 类项目的爆发。以 `last30days-skill`（日增超 2500 星）为代表，开发者已不再满足于泛泛的对话，而是通过标准化接口为 Agent 赋予特定领域的专业技能（如全网调研、产品经理工作流）。这预示着 Agent 框架的底层能力已趋于同质化，**竞争核心已向上转移至“能力插件生态”的建设**。
2.  **“白盒化”逆向工程驱动底层创新**：包含各大主流闭源 AI 工具（Cursor、Devin 等）系统提示词的合集项目热度极高。开发者通过拆解商业级产品的“灵魂提示词”，学习其约束条件与工具调用逻辑，这不仅能迅速提升个人开发者的 Prompt 水平，也在倒逼开源框架优化自身的默认指令集。
3.  **RAG 技术架构的范式转移初现端倪**：在知识库领域，`PageIndex` 提出了“无向量化”的 RAG 方案，利用推理模型取代传统的向量相似度搜索；同时 `claude-mem` 等项目强调了 Agent 的动态记忆沉淀。这表明单纯比对向量距离的传统 RAG 正在走向瓶颈，**“基于推理的深度检索”与“持久化知识图谱”** 正成为下一代知识增强技术的主流方向。

---

## 4. 社区关注热点（开发者必看）

*   🔥 **全面转向 Agent 技能开发**：强烈建议关注 [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) 和 [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)。如果你在做 AI 独立开发，将你的核心业务逻辑封装为标准化“Skill”而非单纯的“Prompt”，将能更好融入未来的 Agent 生态。
*   🕵️‍♂️ **闭源产品的内部解析**：[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) 是近期必看的“武功秘籍”。了解 Cursor、Manus 是如何通过几万字的系统提示词来约束模型行为、防止幻觉的，对你的企业级 AI 应用开发大有裨益。
*   🚀 **视频生成平民化的新里程碑**：[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) 凭借极简的一键式体验日增近 1500 星。对于自媒体和营销团队而言，基于 LLM 编排的自动化视频流水线已具备极高的可用性，值得直接部署使用。
*   🧠 **告别纯向量检索的 RAG 幻觉**：关注 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) 所倡导的“Vectorless RAG”。在处理复杂逻辑问答、财务报表等需要精准推理而非字面匹配的场景时，基于强推理模型的检索方案正成为解决传统 RAG 顽疾的新解法。