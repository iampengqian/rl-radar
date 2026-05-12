# ArXiv AI 研究日报 2026-05-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-12 22:22 UTC

---

以下是为你整理的《ArXiv AI 研究日报》（2026-05-13）：

### 1. 今日速览
今日的 ArXiv 论文呈现出强烈的**“降本增效”与“对齐评测深化”**趋势。在大模型架构方面，研究者正突破传统静态压缩的局限，转向**动态推理**与**稀疏混合专家架构**的端侧部署优化。在训练与对齐层面，**新型优化器**（如 Muon 的权重衰减控制）和**群组偏好对齐**（DGPO）为模型的基础能力提升提供了新解法。此外，智能体研究开始从单一的简单任务向**真实长周期环境**和**原生多模态深度搜索**迈进。值得注意的是，**大模型自动化的数据工程**与**评估基准**的革新，正在成为推动 AI 落地的下一个关键红利区。

---

### 2. 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）
*   **Compute Where it Counts: Self Optimizing Language Models**
    *   作者: Y. Akhauri, M. S. Abdelfattah
    *   核心贡献: 提出 Token 级别的动态推理机制，打破静态计算预算限制，根据生成难度自适应分配计算资源，显著提升 LLM 推理效率。
    *   [论文链接](http://arxiv.org/abs/2605.10875v1)
*   **DECO: Sparse Mixture-of-Experts with Dense-Comparable Performance on End-Side Devices**
    *   作者: C. Song, W. Zhao, X. Han et al.
    *   核心贡献: 解决了 MoE 模型在端侧部署时显存访问瓶颈的痛点，在保持高模型容量的同时实现了端侧设备上与密集模型可比拟的性能。
    *   [论文链接](http://arxiv.org/abs/2605.10933v1)
*   **DGPO: Beyond Pairwise Preferences with Directional Consistent Groupwise Optimization**
    *   作者: M. Deng, Z. Li, X. Li et al.
    *   核心贡献: 提出方向一致的群组偏好优化算法，克服了传统 DPO 等成对偏好对齐方法中容易丧失推理多样性的问题。
    *   [论文链接](http://arxiv.org/abs/2605.10863v1)
*   **Muown: Row-Norm Control for Muon Optimization**
    *   作者: K. Lion, F. Hübler, B. Li et al.
    *   核心贡献: 深入剖析了新晋优化器 Muon 在大模型预训练中的不稳定性，提出通过行范数控制来解决权重谱范数漂移问题，进一步完善了 Muon 的缩放定律。
    *   [论文链接](http://arxiv.org/abs/2605.10797v1)
*   **Beyond Red-Teaming: Formal Guarantees of LLM Guardrail Classifiers**
    *   作者: N. Kezins, U. Ekka, P. Berrang et al.
    *   核心贡献: 突破了 LLM 安全研究仅依赖红队测试的局限，首次为 LLM 护栏分类器提供抵御恶意行为的形式化数学保证。
    *   [论文链接](http://arxiv.org/abs/2605.10901v1)
*   **Unmasking On-Policy Distillation: Where It Helps, Where It Hurts, and Why**
    *   作者: M. Armandpour, F. Ilhan, D. Harrison et al.
    *   核心贡献: 深入剖析了推理模型训练中“同策略蒸馏”的底层机制，明确指出了该技术何时有益、何时有害及对教师模型的选择依据。
    *   [论文链接](http://arxiv.org/abs/2605.10889v1)

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
*   **WildClawBench: A Benchmark for Real-World, Long-Horizon Agent Evaluation**
    *   作者: S. Ding, X. Dai, L. Xing et al.
    *   核心贡献: 填补了智能体评估基准的空白，摒弃虚假的沙箱和短周期任务，转向真实环境下的长周期复杂任务评估，直击当前 Agent 的能力天花板。
    *   [论文链接](http://arxiv.org/abs/2605.10912v1)
*   **Towards On-Policy Data Evolution for Visual-Native Multimodal Deep Search Agents**
    *   作者: S. Huang, H. Guo, C. Li et al.
    *   核心贡献: 提出原生多模态深度搜索智能体框架，解决了现有 Agent 将搜索返回的图像仅作为附属品的问题，实现文本与视觉上下文的联合演化推理。
    *   [论文链接](http://arxiv.org/abs/2605.10832v1)
*   **RubricEM: Meta-RL with Rubric-guided Policy Decomposition beyond Verifiable Rewards**
    *   作者: G. Li, B. D. Mishra, Z. Wang et al.
    *   核心贡献: 针对深度研究 Agent（如长报告生成）缺乏“可验证奖励”的痛点，提出基于评分准则的 Meta-RL 策略分解方法，突破了复杂智能体的强化学习瓶颈。
    *   [论文链接](http://arxiv.org/abs/2605.10899v1)
*   **The Last Word Often Wins: A Format Confound in Chain-of-Thought Corruption Studies**
    *   作者: G. Garcia
    *   核心贡献: 揭露了当前思维链可信度研究中存在的一个严重系统性混淆因素（位置偏差），指出模型往往依赖最后生成的答案格式而非中间推理步骤。
    *   [论文链接](http://arxiv.org/abs/2605.10799v1)

#### 🔧 方法与框架（新技术、基准测试、效率优化）
*   **DataMaster: Towards Autonomous Data Engineering for Machine Learning**
    *   作者: Y. Du, X. Yang, Z. Zhou et al.
    *   核心贡献: 顺应“数据为中心的 AI”趋势，提出让机器自主进行数据工程的系统，自动搜索、适配外部数据集以优化 ML Pipeline。
    *   [论文链接](http://arxiv.org/abs/2605.10906v1)
*   **ELF: Embedded Language Flows**
    *   作者: K. Hu, L. Qiu, Y. Lu et al.
    *   核心贡献: 探索将当前在图像/视频领域大获成功的连续流匹配技术应用于离散的语言建模，为下一代大模型架构提供了极具潜力的替代方案。
    *   [论文链接](http://arxiv.org/abs/2605.10938v1)
*   **Rethinking Agentic Search with Pi-Serini: Is Lexical Retrieval Sufficient?**
    *   作者: T. Hsu, J. Yang, J. Lin
    *   核心贡献: 在具备强推理能力的智能体闭环中重新审视检索器，证明了仅结合轻量级的 BM25 词汇检索，配合前沿 LLM 依然能实现极佳的深度搜索效果。
    *   [论文链接](http://arxiv.org/abs/2605.10848v1)

#### 📊 应用（垂直领域、多模态、代码生成）
*   **LoKA: Low-precision Kernel Applications for Recommendation Models At Scale**
    *   作者: L. Luo, Y. Ma, Q. Zhu et al.
    *   核心贡献: 将主导 LLM 训练的低精度计算（如 FP8）成功引入对数值极度敏感的大型推荐系统（LRMs）中，在保证精度的同时大幅提升 GPU 吞吐量。
    *   [论文链接](http://arxiv.org/abs/2605.10886v1)
*   **Training-Free Cultural Alignment of Large Language Models via Persona Disagreement**
    *   作者: H. T. Kiet, D. S. D. Minh, T. Nguyen et al.
    *   核心贡献: 提出一种免训练的文化对齐方法，通过 Persona 争论机制，在不进行微调的情况下有效纠正 LLM 中固有的文化偏见，极具工程实用价值。
    *   [论文链接](http://arxiv.org/abs/2605.10843v1)
*   **AssayBench: An Assay-Level Virtual Cell Benchmark for LLMs and Agents**
    *   作者: E. De Brouwer, C. Edwards, A. Wu et al.
    *   核心贡献: 为“虚拟细胞”这一 AI for Science 的终极愿景构建了测试基准，推动 LLM/Agent 在细胞生物学层面进行假设生成与实验设计。
    *   [论文链接](http://arxiv.org/abs/2605.10876v1)

---

### 3. 研究趋势信号
从今日的投稿可以明显察觉，**AI 的优化重心正从“算法设计”向“系统与数据的自动化”倾斜**。DataMaster 所代表的自主数据工程预示着模型迭代闭环的进一步左移。同时，**“动态性”成为打破系统性能天花板的核心关键词**：从静态量化转向根据 Token 难度动态分配算力，以及 MoE 架构在端侧重塑存储与计算平衡。在 Agent 领域，研究界正在告别“温室里的玩具测试”，转向真实复杂环境，并着手解决多模态深度搜索中视觉上下文被边缘化的问题。此外，AI 安全与对齐的研究方法正趋于严谨，从实验性的红队测试进化为可证伪的形式化验证和更科学的评估指标。

---

### 4. 值得精读
*   **Compute Where it Counts: Self Optimizing Language Models** ([2605.10875v1](http://arxiv.org/abs/2605.10875v1))
    *   **推荐理由**：现存的 LLM 推理加速研究大多“一刀切”地对待所有 Token。本文提出的“按需动态计算”思路直击痛点，不仅极具启发意义，而且有望成为未来高效 LLM 推理的标准配置。
*   **The Last Word Often Wins: A Format Confound in Chain-of-Thought Corruption Studies** ([2605.10799v1](http://arxiv.org/abs/2605.10799v1))
    *   **推荐理由**：这是一篇典型的“点醒梦中人”的文章。近年来大量关于 CoT 忠实度的研究可能都存在底层方法论的漏洞。本文揭露了大模型利用最终位置输出进行“作弊”的现象，对于所有从事大模型推理和 Prompt 工程的研究者来说，都是一篇必读的警醒之作。
*   **ELF: Embedded Language Flows** ([2605.10938v1](http://arxiv.org/abs/2605.10938v1))
    *   **推荐理由**：扩散模型和连续流匹配在视觉领域的成功令人瞩目，但将其引入离散文本语言建模一直存在巨大挑战。本文代表了当前大模型底层架构创新的一个重要且极具潜力的分支方向，适合深入研读其数学转化和工程实现。