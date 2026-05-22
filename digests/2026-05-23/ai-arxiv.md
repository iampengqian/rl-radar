# ArXiv AI 研究日报 2026-05-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-22 22:17 UTC

---

# ArXiv AI 研究日报 (2026-05-23)

## 📰 今日速览
今日的 ArXiv 投稿呈现出 AI 系统从“静态推理”向“动态交互与自我进化”演进的强烈趋势。在大模型后训练方面，**状态分布视角**的提出与对 RLVR 训练不稳定性的深度剖析，为提升 LLM 推理能力提供了新解法。在智能体系统领域，源代码级自我进化与微秒级沙盒回滚技术，标志着 AI Agent 向高度自主的工程化落地迈出关键一步。此外，向量策略优化、线性注意力架构与凸松弛分词器打破了现有底层范式，而 LLM 隐性认知偏差和评估对话中的“上下文污染”等研究，则为 AI 安全与对齐敲响了新的警钟。

---

## 🌟 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **Post-Training is About States, Not Tokens: A State Distribution View of SFT, RL, and On-Policy Distillation**
  链接: http://arxiv.org/abs/2605.22731v1 | 作者: D. Nie
  **核心贡献:** 跳出传统的损失函数视角，从状态分布的动力学角度重新统一并解释了 SFT、RL 和蒸馏等大模型后训练范式。

- **Vector Policy Optimization: Training for Diversity Improves Test-Time Search**
  链接: http://arxiv.org/abs/2605.22817v1 | 作者: R. Bahlous-Boldi et al.
  **核心贡献:** 打破了 LLM 后训练仅优化单一特定奖励的传统范式，提出向量化策略优化以提升模型在 AlphaEvolve 等测试时搜索算法中的多样性表现。

- **Clipping Bottleneck: Stabilizing RLVR via Stochastic Recovery of Near-Boundary Signals**
  链接: http://arxiv.org/abs/2605.22703v1 | 作者: S. Yang et al.
  **核心贡献:** 深入剖析了 GRPO 等强化学习目标在 LLM 推理任务中导致训练不稳定的“裁剪瓶颈”，为 RLVR 提供了新的稳定优化机制。

- **Understanding Data Temporality Impact on Large Language Models Pre-training**
  链接: http://arxiv.org/abs/2605.22769v1 | 作者: H. Pilchen et al.
  **核心贡献:** 探讨了预训练数据的时间顺序与动态分布对模型获取时敏性事实知识的影响，填补了 LLM 时间认知机理研究的空白。

- **Reducing Political Manipulation with Consistency Training**
  链接: http://arxiv.org/abs/2605.22771v1 | 作者: L. Phan et al.
  **核心贡献:** 揭示了 LLM 在处理对立政治话题时的“隐性政治偏见”，并提出通过一致性训练来缓解此类系统性对齐失败问题。

- **AMEL: Accumulated Message Effects on LLM Judgments**
  链接: http://arxiv.org/abs/2605.22714v1 | 作者: S. Temkit
  **核心贡献:** 证明并量化了 LLM 在作为自动评估器时，其判断结果会被先前对话历史的情感极性严重“污染”（累积信息效应）。

- **Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention**
  链接: http://arxiv.org/abs/2605.22791v1 | 作者: A. Hatamizadeh et al.
  **核心贡献:** 提出在线性注意力机制中解耦“擦除”与“写入”操作，解决了固定大小的压缩记忆在更新时破坏已有关联的核心痛点。

- **Tokenisation via Convex Relaxations**
  链接: http://arxiv.org/abs/2605.22821v1 | 作者: J. Tempus et al.
  **核心贡献:** 摒弃了 BPE 等传统的贪心分词算法，首次将分词器构建问题转化为线性规划问题，实现了全局最优的词汇表分配。

- **Evaluating Commercial AI Chatbots as News Intermediaries**
  链接: http://arxiv.org/abs/2605.22785v1 | 作者: M. Suzgun et al.
  **核心贡献:** 首个系统性评估商业 AI 聊天机器人（结合私有搜索与 RAG）在多语言、跨地域场景下处理新兴新闻事实准确性的基准研究。

### 🤖 智能体与推理（规划、工具使用、多智能体）

- **MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems**
  链接: http://arxiv.org/abs/2605.22794v1 | 作者: Q. Cai et al.
  **核心贡献:** 突破了智能体仅依靠“文本记忆”或“技能文件”进化的局限，提出了在自主系统中直接进行源代码级重写的智能体自我进化框架。

- **DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback**
  链接: http://arxiv.org/abs/2605.22781v1 | 作者: Y. Dong et al.
  **核心贡献:** 针对有状态 AI 智能体（如树搜索和 RL），提出了毫秒级的沙盒状态（文件、内存、进程）检查点与回滚机制，极大扩展了智能体的探索效率。

- **LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems**
  链接: http://arxiv.org/abs/2605.22786v1 | 作者: S. Asif et al.
  **核心贡献:** 针对多智能体系统共享 Transformer KV Cache 实现潜空间通信的趋势，提出了保障信息安全与隔离的防御机制。

- **Advancing Mathematics Research with AI-Driven Formal Proof Search**
  链接: http://arxiv.org/abs/2605.22763v1 | 作者: G. Tsoukalas et al.
  **核心贡献:** 首次大规模评估了 LLM 在 Lean 等形式化语言中生成数学证明的能力，验证了其在真实高等数学研究中的可靠性边界。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **The Distillation Game: Adaptive Attacks & Efficient Defenses**
  链接: http://arxiv.org/abs/2605.22737v1 | 作者: Y. Allouah et al.
  **核心贡献:** 将模型蒸馏中的知识产权保护转化为效用受限的 Teacher 和自适应 Student 之间的 Minimax 博弈，提出了一套攻防兼顾的新框架。

- **Forecasting Scientific Progress with Artificial Intelligence**
  链接: http://arxiv.org/abs/2605.22681v1 | 作者: S. Wu et al.
  **核心贡献:** 提出了一种受时间约束的评估框架，首次系统探究并验证了 AI 模型预测和预判未来科学进展发展的能力。

### 📊 应用（垂直领域、多模态、代码生成）

- **Towards a General Intelligence and Interface for Wearable Health Data**
  链接: http://arxiv.org/abs/2605.22759v1 | 作者: G. Narayanswamy et al.
  **核心贡献:** 致力于构建可穿戴设备传感器的通用基础模型，有效将底层物理信号转化为高阶的个性化人体健康状态表征。

- **ChronoMedKG: A Temporally-Grounded Biomedical Knowledge Graph and Benchmark for Clinical Reasoning**
  链接: http://arxiv.org/abs/2605.22734v1 | 作者: M. S. Ahmed et al.
  **核心贡献:** 突破传统医疗知识图谱将疾病关联视为静态事实的限制，引入时间维度构建了全新的临床推理基准。

---

## 📈 研究趋势信号
今日论文释放出三个明确的AI演进信号：
1. **后训练向状态空间动力学演进**：业界逐渐意识到优化 Token 级别的损失函数存在天花板，基于状态分布与强化学习奖励信号的精细化控制（如 RLVR 剪枝瓶颈的修复）正成为提升大模型复杂推理能力的主流解法。
2. **智能体进入“重状态”与“深执行”时代**：智能体研究正从“提示词工程”转向底层工程化重构，毫秒级沙盒回滚和源代码级别的自我重写，表明 AI Agent 正在获得真实的“工程环境操作权”。
3. **基础架构与数据评估的安全化、严谨化**：线性注意力机制的进一步解耦、全局最优分词器的探索，以及对大模型在新闻事实核查、隐性政治偏见和冲突场景中负面外部性的深入剖析，反映出社区对 AI 底层严谨性与部署安全性的空前关注。

---

## 📖 值得精读
1. **Post-Training is About States, Not Tokens (2605.22731)**
   **推荐理由:** 本文具有极强的理论启示意义。它跳出了 SFT、RLHF 和知识蒸馏的 Loss 视角，用统一的“状态分布”来解释大模型后训练的动力学过程。这种视角的升维可能启发下一代更高效、稳定的大模型对齐算法。

2. **MOSS: Self-Evolution through Source-Level Rewriting (2605.22794)**
   **推荐理由:** 智能体自我进化领域的突破性工作。相比于目前主流的“记忆池/技能库反射”模式，MOSS 让 Agent 直接在源代码层面进行自我修复和进化，这极大提高了 Agent 解决长尾 Bug 的能力，是迈向全自动软件工程的重要里程碑。

3. **Vector Policy Optimization (2605.22817)**
   **推荐理由:** 紧扣当前“测试时计算”的研究热点。文章指出了当前大模型针对特定单一目标过度优化导致多样性丧失的问题，其提出的向量化策略为提升模型在复杂任务树搜索（如 AlphaEvolve 架构）中的泛化能力提供了极具实战价值的解法。