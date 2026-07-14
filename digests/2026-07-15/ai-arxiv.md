# ArXiv AI 研究日报 2026-07-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-14 22:17 UTC

---

这份《ArXiv AI 研究日报》为您精选了 2026 年 7 月 13 日发布的前沿 AI 论文，涵盖了从大模型推理机制到智能体安全与具身控制的最新突破。

---

# 📰 ArXiv AI 研究日报 (2026-07-15)

## 🌟 今日速览
今日的 AI 研究呈现出**“向机制深处探索”**与**“向真实物理世界落地”**两大趋势。在大模型领域，研究重点正从单纯的规模扩展转向对**“元认知”**、**推理瓶颈**及**内部表征机械解释性**的深度剖析。同时，**多智能体安全与防御**成为 urgent 议题，针对分布式后门和红队自动化的研究标志着智能体防线正在前置。此外，以**世界基础模型**驱动的具身智能、以及结合量子计算的药物发现展现了 AI 在复杂系统和跨学科应用中的强大潜力。

---

## 📑 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）
1. **[Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data](http://arxiv.org/abs/2607.11883v1)**
   - *作者:* S. Qiu, M. Finzi et al.*
   - 💡 *核心贡献:* 提出了一种利用模型自生成数据来极限压缩神经网络的方法，证明了通过极短编码表示数据是实现泛化的关键。
2. **[Metacognition in LLMs: Foundations, Progress, and Opportunities](http://arxiv.org/abs/2607.11881v1)**
   - *作者:* G. K. Liu, A. Gani et al.*
   - 💡 *核心贡献:* 全面梳理了 LLM 中的“元认知”基础与发展，探讨了赋予透明 AI 系统自我学习与决策评估能力的关键路径。
3. **[Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction](http://arxiv.org/abs/2607.11696v1)**
   - *作者:* H. Zhu*
   - 💡 *核心贡献:* 提出“沙漏推理”机制，通过在推理阶段强制引入信息瓶颈，显著增强了大模型在少样本场景下的归纳推理能力。
4. **[Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias](http://arxiv.org/abs/2607.11871v1)**
   - *作者:* Z. Xu, S. Li et al.*
   - 💡 *核心贡献:* 跳出传统的输入输出层面，从隐藏状态表征的机械可解释性角度，剖析了“LLM 作为裁判”时的偏见来源及其缓解方法。
5. **[AdvancedMathBench: A Benchmark Suite for Advanced Mathematical Proof Generation and Verification](http://arxiv.org/abs/2607.11849v1)**
   - *作者:* L. Kong, Z. Wu et al.*
   - 💡 *核心贡献:* 填补了 LLM 在高中及奥赛级别之外的**高级数学证明**能力评估空白，提供了极具颗粒度的多学科测试基准。
6. **[How Temperature Shapes Ideological Discourse in Retrieval-Augmented Generation?](http://arxiv.org/abs/2607.11783v1)**
   - *作者:* E. Salari, H. Amamou et al.*
   - 💡 *核心贡献:* 深入研究了 RAG 系统中温度参数如何影响意识形态话语，揭示了 LLM 在检索增强下 overlooked 的偏见放大风险。

### 🤖 智能体与推理（规划、工具使用、多智能体、安全）
7. **[When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems](http://arxiv.org/abs/2607.11751v1)**
   - *作者:* Y. Hu, R. Wang*
   - 💡 *核心贡献:* 揭示了多智能体系统中的“分布式后门”攻击——恶意载荷被拆分跨过单点审查，指出现有局部监控存在致命盲区。
8. **[Agent Hacks Agent: Autoresearch for Production-Agent Red-Teaming](http://arxiv.org/abs/2607.11698v1)**
   - *作者:* X. Mao, X. Zheng et al.*
   - 💡 *核心贡献:* 针对生产级 LLM 智能体（如 Claude Code），提出了一种能跟上模型与工具快速迭代步伐的自动化红队测试框架。
9. **[An Explainable Agentic System for Detection of Conversational Scams with Summary-Based Memory](http://arxiv.org/abs/2607.11707v1)**
   - *作者:* A. O. S. Adnan, Y. Manjunath et al.*
   - 💡 *核心贡献:* 构建了基于摘要记忆的可解释智能体系统，专攻跨周/月的长期复杂对话诈骗检测。
10. **[MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents](http://arxiv.org/abs/2607.11818v1)**
    - *作者:* K. Ma, D. Feng et al.*
    - 💡 *核心贡献:* 推出包含 500+ 工具和 16 个领域的有状态执行环境，填补了多模态视觉工具调用智能体评估框架的空白。

### 🔧 方法与框架（新技术、机制解释、架构优化）
11. **[Invariant Learning Dynamics of Transformers in Inductive Reasoning Tasks](http://arxiv.org/abs/2607.11875v1)**
    - *作者:* T. Musat, T. Pimentel et al.*
    - 💡 *核心贡献:* 提供了一个广义的理论框架，从数学机制层面解释了 Transformer 语言模型归纳推理能力的涌现动力学。
12. **[An Exact Instrument for State Usage in Selective State-Space Models](http://arxiv.org/abs/2607.11796v1)**
    - *作者:* R. Bhattacharya*
    - 💡 *核心贡献:* 为 Mamba 等选择性状态空间模型提供了一个精确的“探针工具”，揭示了其内部状态模态随输入驱动的迁移规律。
13. **[Transformer-Guided Swarm Intelligence for Frugal Neural Architecture Search](http://arxiv.org/abs/2607.11826v1)**
    - *作者:* R. Amigon*
    - 💡 *核心贡献:* 结合 Transformer 引导的群体智能，提出了一种可在消费级硬件上运行的“经济型”神经网络架构搜索（NAS）新范式。

### 📊 应用（具身智能、多模态、跨学科）
14. **[Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model](http://arxiv.org/abs/2607.11643v1)**
    - *作者:* X. Li, J. Guo et al.*
    - 💡 *核心贡献:* 小米团队提出世界基础模型驱动的统一具身合成方法，解决了现有生成模型在多视角一致性与机器人具身约束下的局限。
15. **[Evidence-Backed Video Question Answering](http://arxiv.org/abs/2607.11862v1)**
    - *作者:* S. Wang, H. Zhou et al.*
    - 💡 *核心贡献:* 针对视频大模型“黑盒”问题，提出提供带有可验证视觉基础证据的回答方法，大幅提升了视频问答的可信度。

---

## 📈 研究趋势信号
今日论文反映出几个鲜明的新兴趋势：首先是**机械可解释性**已全面渗透到模型评估和安全审计中（如剖析 Judge 偏见和状态空间模型的内部迁移）。其次，**多智能体系统的安全性**正在成为核心焦点，特别是针对跨 Agent 组合的隐蔽后门和动态红队攻防，表明业界对 Agentic AI 的落地持谨慎态度。最后，**具身智能与世界模型**的融合（如小米的具身合成与动作模型路线图）标志着 AI 正加速跨越纯文本边界，向复杂的物理常识和空间一致性迈进。

---

## 📖 值得精读
1. **[When Local Monitors Miss Compositional Harm...](http://arxiv.org/abs/2607.11751v1)**
   - *推荐理由:* 随着多智能体系统的普及，单点监控的安全假设已站不住脚。该文提出的分布式后门攻击是对当前 AI 安全框架的一次重要“压力测试”，极具前瞻性和警示意义。
2. **[Inside the Unfair Judge: A Mechanistic Interpretability Account...](http://arxiv.org/abs/2607.11871v1)**
   - *推荐理由:* “LLM-as-a-Judge”是当前强化学习（RLHF）和评估体系的基础设施。跳出 Prompt 层面，深入神经元隐藏状态寻找偏见的根源，为未来的偏见缓解提供了底层的理论指引。
3. **[Think Through a Bottleneck: Hourglass Reasoning...](http://arxiv.org/abs/2607.11696v1)**
   - *推荐理由:* 提出了一种反直觉但结构优雅的推理范式（沙漏推理），仅仅通过在推理阶段强加信息隔离瓶颈，就能有效改善少样本归纳，对设计下一代推理架构具有直接启发。