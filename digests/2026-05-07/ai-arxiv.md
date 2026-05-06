# ArXiv AI 研究日报 2026-05-07

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-06 22:13 UTC

---

# ArXiv AI 研究日报 (2026-05-07)

## 📰 今日速览
今日的 ArXiv 投稿呈现出强烈的**“AI 智能体化与系统化”**趋势。研究界正致力于将大语言模型（LLM）从被动的生成工具，升级为具备自我进化能力、能进行深度搜索与多步规划的智能体。同时，**AI 安全与可信赖评估**（如红蓝对抗、幻觉检测、临床决策基准）成为重点关注对象，表明社区在追求性能突破的同时，正加速构建保障高风险场景应用安全的护栏。此外，底层模型架构与采样算法的持续优化，为推理效率和多模态处理提供了坚实的基础。

---

## 🌟 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

*   **Safety and accuracy follow different scaling laws in clinical large language models**
    *   链接: http://arxiv.org/abs/2605.04039v1
    *   作者: S. Wind et al.
    *   **核心贡献：** 揭示了在临床医学领域，LLM 的安全性与准确性的扩展规律并不一致，打破了“越准确越安全”的固有假设。
*   **Feature-Augmented Transformers for Robust AI-Text Detection Across Domains and Generators**
    *   链接: http://arxiv.org/abs/2605.03969v1
    *   作者: M. Mady et al.
    *   **核心贡献：** 提出基于特征增强的 Transformer 架构，有效解决了跨领域和不同生成器环境下的 AI 生成文本检测难题。
*   **Logical Consistency as a Bridge: Improving LLM Hallucination Detection...**
    *   链接: http://arxiv.org/abs/2605.03971v1
    *   作者: H. Mi et al.
    *   **核心贡献：** 通过建模响应与自我判断之间的逻辑一致性，提出了一种无需外部知识的宏观 LLM 幻觉检测新方法。
*   **Steer Like the LLM: Activation Steering that Mimics Prompting**
    *   链接: http://arxiv.org/abs/2605.03907v1
    *   作者: G. Heyman et al.
    *   **核心贡献：** 提出将提示工程转化为激活干预的统一框架，使得推理阶段的干预效果能够媲美甚至超越传统的提示方法。
*   **EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics**
    *   链接: http://arxiv.org/abs/2605.03871v1
    *   作者: S. S. Li et al.
    *   **核心贡献：** 摆脱对外部人类标注或专有模型的依赖，通过共同演化的判别性规则实现语言模型的自我进化与评估。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

*   **OpenSeeker-v2: Pushing the Limits of Search Agents...**
    *   链接: http://arxiv.org/abs/2605.04036v1
    *   作者: Y. Du et al.
    *   **核心贡献：** 开源了具有高度竞争力的深度搜索智能体全流程方案，挑战了工业巨头在复杂搜索推理方面的垄断。
*   **From Intent to Execution: Composing Agentic Workflows with Agent Recommendation**
    *   链接: http://arxiv.org/abs/2605.03986v1
    *   作者: K. Athrey et al.
    *   **核心贡献：** 引入了基于意图的智能体推荐系统，实现了多智能体工作流的自动化编排，极大降低了 MAS 的构建门槛。
*   **Correct Is Not Enough: Training Reasoning Planners with Executor-Grounded Rewards**
    *   链接: http://arxiv.org/abs/2605.03862v1
    *   作者: T. Han et al.
    *   **核心贡献：** 针对强化学习中的“奖励作弊”问题，提出基于执行器的奖励机制，确保规划模型不仅结果正确，且推理过程忠实可靠。
*   **Rethinking Reasoning-Intensive Retrieval...**
    *   链接: http://arxiv.org/abs/2605.04018v1
    *   作者: Y. Zhao et al.
    *   **核心贡献：** 重新定义了智能体搜索系统中的检索范式，强调应检索支持多步推理的互补证据，而非单纯的表面相似度匹配。

### 🔧 方法与框架（新技术、基准测试、效率优化）

*   **Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours**
    *   链接: http://arxiv.org/abs/2605.04019v1
    *   作者: R. S. R. Dheekonda et al.
    *   **核心贡献：** 提出针对智能体时代的自动化 AI 红队评估框架，将安全对抗测试的周期从数周大幅缩短至数小时。
*   **Transformers with Selective Access to Early Representations**
    *   链接: http://arxiv.org/abs/2605.03953v1
    *   作者: S. Gunasekaran et al.
    *   **核心贡献：** 改进 Transformer 架构，允许后层选择性访问早期表示，以低成本有效解决深层网络中低级特征丢失的问题。
*   **MCJudgeBench: A Benchmark for Constraint-Level Judge Evaluation...**
    *   链接: http://arxiv.org/abs/2605.03858v1
    *   作者: J. Lee et al.
    *   **核心贡献：** 填补了多约束指令遵循评估的空白，提出了首个针对约束级别进行细粒度裁判模型评估的基准测试。
*   **QKVShare: Quantized KV-Cache Handoff for Multi-Agent On-Device LLMs**
    *   链接: http://arxiv.org/abs/2605.03884v1
    *   作者: P. Honavar et al.
    *   **核心贡献：** 提出针对端侧多智能体 LLM 的量化 KV 缓存传递框架，解决了设备间协同计算时的内存与延迟瓶颈。

### 📊 应用（垂直领域、多模态、代码生成）

*   **SymptomAI: Towards a Conversational AI Agent for Everyday Symptom Assessment**
    *   链接: http://arxiv.org/abs/2605.04012v1
    *   作者: J. Breda et al.
    *   **核心贡献：** 将 LLM 的医疗诊断能力从标准化测试推向日常对话场景，构建了面向非专业用户的日常症状评估 AI 智能体。
*   **CC-OCR V2: Benchmarking Large Multimodal Models for Literacy in Real-world Document Processing**
    *   链接: http://arxiv.org/abs/2605.03903v1
    *   作者: Z. Xu et al.
    *   **核心贡献：** 针对现实世界复杂的文档处理需求，构建了全面评估大模型 OCR 与文档理解能力的多模态基准。
*   **MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents**
    *   链接: http://arxiv.org/abs/2605.03952v1
    *   作者: J. Steinberg et al.
    *   **核心贡献：** 揭示并量化了代码智能体在面对拆解任务时可能引发组合性安全漏洞的风险，为代码生成安全提供了新基准。

---

## 📈 研究趋势信号

从今日的论文可以看出，**“智能体基础设施与安全”**已成为 AI 研究的核心主轴。一方面，研究正从单体 LLM 转向多智能体协作，重点解决工作流自动编排（#13）、端侧记忆共享（#39）和深度搜索集成（#3）等工程痛点。另一方面，随着 AI 自主权扩大，**组合性风险**引起高度警惕。传统的安全对齐已不足以应对智能体在复杂任务分解中产生的隐性风险（#5, #21）。同时，评估范式正在向**细粒度、可执行**方向演进：不再仅看最终输出，而是深入评估推理过程的忠实度（#47）、多约束级指令执行（#48）以及医疗建议的原子化事实准确性（#31）。

---

## 📖 值得精读

1. **From Intent to Execution: Composing Agentic Workflows with Agent Recommendation** (http://arxiv.org/abs/2605.03986v1)
   * **推荐理由：** 多智能体的编排是目前落地的最大痛点之一。该论文提出的意图驱动与智能体推荐机制，为构建自动化、低代码的多智能体系统提供了极具潜力的架构参考。
2. **EvoLM: Self-Evolving Language Models through Co-Evolved Discriminative Rubrics** (http://arxiv.org/abs/2605.03871v1)
   * **推荐理由：** 后训练时代的极限在哪里？本文探讨了摆脱人类偏好数据依赖，通过模型自我演化判别标准来实现持续进化。这对于探索通往无监督自我进化的超级智能路径具有重要指导意义。
3. **MOSAIC-Bench: Measuring Compositional Vulnerability Induction in Coding Agents** (http://arxiv.org/abs/2605.03952v1)
   * **推荐理由：** 视角独特且切中时弊。当开发者大量使用 AI 编程助手处理拆解的 Ticket 时，系统可能潜入组合性恶意代码。该研究为代码生成和智能体执行安全敲响了警钟，值得所有 AI 辅助研发团队深入研读。