# ArXiv AI 研究日报 2026-04-25

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-04-24 22:11 UTC

---

以下为您整理的《ArXiv AI 研究日报》（2026-04-25）：

### 📰 今日速览
今日的 ArXiv 投稿呈现出强烈的**“反思与解构”**趋势：研究者不再盲目追求模型规模的扩大或通用基准测试的绝对高分，而是深入剖析大模型底层的推理机制、评估体系的有效性以及交互中的对齐漏洞。具体而言，**多智能体通信机制**与**状态less（无状态）攻击**成为了 AI 安全和 Agentic 架构的新焦点；**微调范式与时间序列切分**的重新定义揭示了传统持续学习评估中的盲区；同时，模型对特定文化（如日本文化）的畸形偏好以及人机交互中的“幻觉”诱导现象，表明 AI 的价值观对齐依然任重道远。

---

### 🌟 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）
- **When Prompts Override Vision: Prompt-Induced Hallucinations in LVLMs** 
  - 作者: P. Khayatan et al.
  - [链接](http://arxiv.org/abs/2604.21911v1)
  - **一句话说明:** 揭示了大型视觉语言模型（LVLMs）中严重的“提示诱导幻觉”现象，即文本提示会强行覆盖真实的视觉输入，对多模态对齐研究具有重要警示作用。
- **Revisiting Non-Verbatim Memorization in Large Language Models: The Role of Entity Surface Forms** 
  - 作者: Y. Nishida et al.
  - [链接](http://arxiv.org/abs/2604.21882v1)
  - **一句话说明:** 突破性地研究了 LLM 如何记忆事实知识，指出改变实体名称的“表面形式”会极大地影响模型的非字面记忆能力，为评估模型知识可靠性提供了新视角。
- **Why are all LLMs Obsessed with Japanese Culture? On the Hidden Cultural and Regional Biases of LLMs**
  - 作者: J. Fernandez de Landa et al.
  - [链接](http://arxiv.org/abs/2604.21751v1)
  - **一句话说明:** 深入探讨了 LLMs 中隐藏的文化偏见，特别是对日本文化的异常痴迷，揭示了去西方化/英语中心主义之外的另一种文化失衡风险。
- **Thinking with Reasoning Skills: Fewer Tokens, More Accuracy**
  - 作者: G. Zhao et al.
  - [链接](http://arxiv.org/abs/2604.21764v1)
  - **一句话说明:** 提出了一种提取并复用“推理技能”的方法，让推理模型在解决新问题时无需冗长的思维链，显著降低 Token 消耗并提升准确率。
- **Who Defines "Best"? Towards Interactive, User-Defined Evaluation of LLM Leaderboards**
  - 作者: M. Jung et al.
  - [链接](http://arxiv.org/abs/2604.21769v1)
  - **一句话说明:** 批评了当前静态 LLM 排行榜的局限性，提出构建交互式、用户可自定义评估权重的动态排行榜框架。

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
- **From Research Question to Scientific Workflow: Leveraging Agentic AI for Science Automation**
  - 作者: B. Balis et al.
  - [链接](http://arxiv.org/abs/2604.21910v1)
  - **一句话说明:** 引入 Agentic AI 自动将科研问题转化为可执行的科学工作流，打通了从语义理解到基础设施调度的全流程科学自动化。
- **Tool Attention Is All You Need: Dynamic Tool Gating and Lazy Schema Loading for Eliminating the MCP/Tools Tax**
  - 作者: A. Sadani, D. Kumar
  - [链接](http://arxiv.org/abs/2604.21816v1)
  - **一句话说明:** 针对 LLM 智能体使用外部工具时的上下文开销痛点，提出动态工具门控和延迟加载机制，大幅优化了可扩展 Agent 工作流的效率。
- **Learning to Communicate: Toward End-to-End Optimization of Multi-Agent Language Systems**
  - 作者: Y. Yu et al.
  - [链接](http://arxiv.org/abs/2604.21794v1)
  - **一句话说明:** 打破了多智能体系统固定通信接口的传统，通过 KV cache 等隐式表征实现智能体间的端到端通信优化。
- **Transient Turn Injection: Exposing Stateless Multi-Turn Vulnerabilities in Large Language Models**
  - 作者: N. Rayhan, S. Jahan
  - [链接](http://arxiv.org/abs/2604.21860v1)
  - **一句话说明:** 提出了一种新型的多轮对话攻击技术，利用无状态审查的漏洞分散注入恶意指令，揭示了当前 LLM 在复杂对话流中的安全防线脆弱性。

#### 🔧 方法与框架（新技术、基准测试、效率优化）
- **Fine-Tuning Regimes Define Distinct Continual Learning Problems**
  - 作者: P. Iordache, E. Burceanu
  - [链接](http://arxiv.org/abs/2604.21927v1)
  - **一句话说明:** 证明了在持续学习（CL）中，微调范式（如冻结层的选择）不仅仅是超参数，而是从根本上定义了不同的学习问题，呼吁社区重新审视基准测试。
- **GiVA: Gradient-Informed Bases for Vector-Based Adaptation**
  - 作者: N. Gangwar et al.
  - [链接](http://arxiv.org/abs/2604.21901v1)
  - **一句话说明:** 结合梯度信息改进极低参数量的向量微调方法，为超大模型的参数高效微调（PEFT）提供了比 LoRA 更极致的替代方案。
- **Bounding the Black Box: A Statistical Certification Framework for AI Risk Regulation**
  - 作者: N. Levy, G. Perl
  - [链接](http://arxiv.org/abs/2604.21854v1)
  - **一句话说明:** 为顺应全球 AI 监管趋势，提出了一个统计认证框架，能够在无需完全拆解黑盒的情况下，对高风险 AI 系统进行风险界限评估。

#### 📊 应用（垂直领域、多模态、代码生成）
- **Seeing Fast and Slow: Learning the Flow of Time in Videos**
  - 作者: Y. Wu et al.
  - [链接](http://arxiv.org/abs/2604.21931v1)
  - **一句话说明:** 填补了视频理解中“时间流速感知”的空白，使模型能够判断视频的播放速度并进行变速生成。
- **Divide-then-Diagnose: Weaving Clinician-Inspired Contexts for Ultra-Long Capsule Endoscopy Videos**
  - 作者: B. Liu et al.
  - [链接](http://arxiv.org/abs/2604.21814v1)
  - **一句话说明:** 创新性地将超长胶囊内窥镜视频的 AI 诊断转化为“分治法”视频级分析任务，极大提升了医疗长视频的实用诊断价值。
- **MathDuels: Evaluating LLMs as Problem Posers and Solvers**
  - 作者: Z. Xu et al.
  - [链接](http://arxiv.org/abs/2604.21916v1)
  - **一句话说明:** 突破传统静态数学题评估，提出让 LLM 进行左右互搏的“数学对决”，通过评估其出题和解题双重能力来更有效地区分模型智力上限。

---

### 📈 研究趋势信号
从今日的论文可以看出，**AI 的效能边界正在从“单体能力”向“系统交互”转移**。多智能体之间的内在隐式通信（如 KV cache 共享）以及工具调用的极限压缩（如 MCP 协议的优化）成为提升系统级效率的关键。同时，**AI 安全与评估正走向“微观解构”**：研究者开始质疑宏观的基准得分，转而关注时间序列切分的随机性、微调策略带来的内部方差、特定文化维度的畸形偏好以及多轮对话中的隐蔽攻击。这表明领域正趋于成熟：我们不再只问“模型能做到吗”，而是开始严谨地定义“它在什么结构下、以什么代价、面临什么隐患地做到”。

---

### 📖 值得精读
1. **Transient Turn Injection: Exposing Stateless Multi-Turn Vulnerabilities in Large Language Models** ([2604.21860v1](http://arxiv.org/abs/2604.21860v1))
   - **推荐理由:** 随着 Agent 和多轮对话系统的普及，安全性是落地的核心痛点。本文提出的新型多轮攻击方法（TTI）直击当前 LLM 无状态审查的软肋，对于构建防御机制的工程师来说具有极高的实战参考价值。
2. **Tool Attention Is All You Need: Dynamic Tool Gating and Lazy Schema Loading...** ([2604.21816v1](http://arxiv.org/abs/2604.21816v1))
   - **推荐理由:** MCP（模型上下文协议）是当前 Agent 生态构建的标准热点，但存在严重的冗余 Token 消耗问题。本文提出的“Tool Attention”机制是对现有 Agentic 工作流的一次重要底层性能优化，思路极具启发性。
3. **Seeing Fast and Slow: Learning the Flow of Time in Videos** ([2604.21931v1](http://arxiv.org/abs/2604.21931v1))
   - **推荐理由:** 视频生成与理解目前大多关注空间和时间的一致性，却忽略了“物理时间流速”这一本质维度。该论文切入角度极其新颖，将认知心理学中的“系统1/系统2”概念延伸至视觉时间流，对视频生成模型的未来发展具有方向性指引意义。