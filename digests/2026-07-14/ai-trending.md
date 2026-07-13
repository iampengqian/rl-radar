# AI 开源趋势日报 2026-07-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-13 22:15 UTC

---

这份《AI 开源趋势日报》基于 2026 年 7 月 14 日的 GitHub Trending 及主题搜索数据，经过严格筛选与深度分析生成。

### 第一步：数据清洗与过滤
已从 Trending 榜单中剔除与 AI 无直接关联的项目：
- **剔除项**：[OpenCut-app/OpenCut]（视频剪辑工具）、[Raphire/Win11Debloat]（系统脚本）、[hasaneyldrm/exercises-dataset]（健身数据集）。
- **保留与整合项**：保留了针对 AI 代码助手开发的 Skills 工具（如 hallmark、graphify、marketingskills）及带有明显 LLM 特征的项目。将 Trending 项目与 Search 结果去重合并。

---

### 第二步：核心项目分类
*注：以下分类依据项目核心功能归入最主要类别。数据含总 Stars 及今日新增（+Today）。*

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐176,060
  终端大模型推理引擎，已适配 2026 年最新主流模型（如 Kimi-K2.6、GLM-5.1），本地化部署基石。
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** [Python] ⭐86,161
  高吞吐量、内存高效的 LLM 推理与服务引擎，企业级高并发部署首选。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐84,570 (+1028 today)
  AI 编程技能插件，将杂乱的代码、文档和媒体转化为可查询的知识图谱，今日增长迅猛。
- **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)** [CSS] ⭐0 (+802 today)
  防“AI 味”前端设计技能包，专为 Claude Code、Cursor 等注入抗模板化设计的 System Prompt。
- **[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)** [JavaScript] ⭐0 (+260 today)
  市场营销技能包，为 AI Code Agent 装载 CRO、SEO 和文案增长工程能力。
- **[github/spec-kit](https://github.com/github/spec-kit)** [Python] ⭐0 (+508 today)
  GitHub 官方推出的“规范驱动开发”工具包，提升 Agent 准确率的工程学尝试。

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐229,235
  Agent 性能优化系统，为 Claude、Codex 等注入技能、记忆和安全本能。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐214,237
  主打伴随式成长的通用开源智能体框架。
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐185,511
  老牌全自动 AI Agent 平台，致力于让所有人都能构建和使用 AI。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐141,690
  Agent 工程平台，依然是构建复杂工作流的底层依赖。
- **[iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi)** [TypeScript] ⭐29,974
  面向各类终端 CLI Agent 的 24/7 桌面级协同应用。

#### 📦 AI 应用（垂直场景解决方案）
- **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** [Python] ⭐0 (+1148 today)
  个人量化交易 Agent，今日登顶热榜，反映 AI 在金融决策端的落地爆发。
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐119,520 (+1006 today)
  收录超百个即插即用 Agent 和 RAG 应用源码，最佳实战练手库。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐57,055
  LLM 驱动的多市场股票分析系统，支持多源行情整合与零成本定时推送。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐38,757
  文档全自动生成原生可编辑 PPT 的工具，支持图表修改与音频旁白。
- **[santifer/career-ops](https://github.com/santifer/career-ops)** [JavaScript] ⭐59,874
  本地运行的 AI 找职神器，能扫描招聘网站、给职位打分并定制简历。

#### 🧠 大模型/训练（模型生态、评测）
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐162,573
  支持 2026 年最新多模态前沿模型的 SOTA 机器学习框架。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐99,034
  手把手教你用 PyTorch 从零构建 ChatGPT，大模型原理学习的常青树。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** [Python] ⭐7,186
  支持最新 GLM-5、GPT-5.6 等百大评测集的大模型全链路评估平台。
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** [JavaScript] ⭐57,258
  系统提示词泄露库，提供 Claude 4.8、GPT-5.6 等闭源顶级模型的一手上下文。

#### 🔍 RAG/知识库（检索增强、记忆管理）
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐148,712
  生产级 Agentic 工作流开发平台，知识库与工作流编排的标杆。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐84,964
  深度融合 RAG 与 Agent 能力的开源检索增强引擎。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [JavaScript] ⭐87,104
  为所有 AI 代码助手提供跨会话持久化记忆的上下文压缩注入层。
- **[topoteretes/cognee](https://github.com/topoteretes/cognee)** [Python] ⭐27,767
  基于“知识图谱+记忆”的开源长期记忆平台，突破传统向量检索的瓶颈。
- **[memvid/memvid](https://github.com/memvid/memvid)** [Rust] ⭐15,751
  将 RAG 流水线压缩至单文件无服务器架构的极简记忆层。

---

### 第三步：《2026-07-14 AI 开源趋势日报》

#### 1. 今日速览
今日 GitHub 趋势榜被“**AI 代码工程化**”与“**垂直领域 Agent**”两大主题全面占领。以 `graphify` 和 `hallmark` 为代表的“**Skills 技能包**”正在爆发，标志着开发者已不满足于通用 AI 辅助，开始追求高度定制化、防模板化的高级上下文注入。同时，金融（`Vibe-Trading`）与职业（`career-ops`）场景的垂直 AI Agent 迎来单日超千星的关注度，印证了 AI 向生产工具落地的浪潮正愈演愈烈。

#### 2. 趋势信号分析
- **Code Agent 的“Skills 独立化”**：目前最明显的爆发信号是针对 Claude Code、Cursor 等工具的“技能插件”。过去开发者苦于 AI 写出的代码有“AI 味”（slop），如今像 `hallmark` 这样专精于反 AI 痕迹的前端提示工程包，以及专注营销的 `marketingskills` 获得海量关注。这预示着 **AI 编程正从“模型对话”向“规范驱动 + 专用上下文工程”演变**。
- **记忆工程 迎来分层化**：从今天的搜索数据看，除了传统的向量数据库，专门用于截断和压缩 Token 的代理层（如 `headroom` 减少 95% Token）、为 CLI 提供持久记忆的 `claude-mem`，以及基于知识图谱的 `cognee` 大量涌现。大模型的上下文窗口即使再大，也挡不住社区对“高效记忆压缩”的迫切刚需。
- **特定行业的全自动 Agent 供血**：以交易员 Agent `Vibe-Trading` 为首，自动化脚本和工具库（如 `daily_stock_analysis`）大热，说明在 GPT-5.6 和 Claude Opus 4.8 等新一代强推理模型的加持下，“放手让 AI 连接外部 API 进行高风险决策（如金融、求职）”已建立起初步的社区信任。

#### 3. 社区关注热点（开发者重点推荐）
- 🔥 **[Nutlope/hallmark]**：前端开发者必看，代表了“逆 AI 审美”的工程学反击，是研究如何提示大模型写出优雅、去同质化代码的绝佳范本。
- 🔥 **[HKUDS/Vibe-Trading]**：包含完整的“个人代理”设计架构，非常适合想学习 Agent 如何与外部 API、实时数据流进行多轮复杂交互的工程师。
- 🔥 **[Graphify-Labs/graphify]**：将多模态资料转化为知识图谱的创新思路，是 RAG 领域从“向量切割”向“图谱逻辑化”演进的试金石。
- 🔥 **[thedotmack/claude-mem]**：为终端 AI（如 Claude Code, Codex CLI）解决了“失忆症”痛点，这一架构极可能成为未来开发 CLI Agent 的基础组件级应用。