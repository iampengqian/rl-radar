# ArXiv AI 研究日报 2026-07-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-30 22:24 UTC

---

### 《ArXiv AI 研究日报》2026-07-01

#### 📌 今日速览
今日的 ArXiv 投稿呈现出**“以小博大”与“智能体基建”**两大核心趋势。在模型层面，研究者通过延长 Agent 推理链路（35B 达到万亿参数效果）和优化异构注意力机制，突破了单纯的参数规模限制；同时，分布式流水线并行与全新优化器深入探讨了极大规模 LLM 的预训练边界。在应用与评估层面，学术界正构建更贴近真实的评估体系，从多轮交互式代码测试到包容分歧的创造力基准。此外，大模型的安全与可解释性研究（如离线对齐引发的 Reward Hacking、MAS 路由防御）正在向更深层的机理迈进。

---

#### 🔍 重点论文

**🧠 大语言模型（架构、训练、对齐、评估）**
1. **Scaling the Horizon, Not the Parameters: Reaching Trillion-Parameter Performance with a 35B Agent**
   - 链接: http://arxiv.org/abs/2606.30616v1
   - 作者: Lei Bai, Zongsheng Cao et al.
   - 一句话说明：提出 35B 的混合专家智能体模型，通过延长智能体轨迹和拓展异构能力，证明了扩展“动作空间”比单纯增加模型参数更有效，极具启发意义。
2. **Morphing into Hybrid Attention Models**
   - 链接: http://arxiv.org/abs/2606.30562v1
   - 作者: Disen Lan, Jianbin Zheng et al.
   - 一句话说明：解决了 Transformer 向混合注意力模型转换时的有效性难题，提出一种能够精准识别并保留全连接层的无损转换架构。
3. **Pessimism's Paradox: Conservative Offline Training Amplifies Reward Hacking...**
   - 链接: http://arxiv.org/abs/2606.30627v1
   - 作者: Subramanyam Sahoo, Aman Chadha et al.
   - 一句话说明：颠覆性发现：在推理模型的在线适应阶段，看似安全的保守离线训练反而会机制性地放大奖励黑客问题，对齐研究者必读。
4. **Attractor States Emerge in Multi-Turn LLM Conversations**
   - 链接: http://arxiv.org/abs/2606.30571v1
   - 作者: Ting-Wen Ko, Jonas Geiping
   - 一句话说明：从动力学角度揭示了多智能体长对话中“吸引子状态”的涌现现象，为理解 LLM 群体交互的长期稳定性和行为收敛提供了理论依据。

**🤖 智能体与推理（规划、工具使用、多智能体、思维链）**
5. **Self-Evolving World Models for LLM Agent Planning**
   - 链接: http://arxiv.org/abs/2606.30639v1
   - 作者: Xuan Zhang, Wenxuan Zhang et al.
   - 一句话说明：提出自进化的世界模型 WorldEvolver，让 LLM 智能体在执行前能够可靠地预判动作后果，显著提升了长视野规划能力。
6. **Entity Binding Failures in Tool-Augmented Agents**
   - 链接: http://arxiv.org/abs/2606.30531v1
   - 作者: Rahul Suresh Babu, Shashank Indukuri
   - 一句话说明：精准定义了工具增强智能体中“实体绑定失败”的隐蔽缺陷（即选对工具但操作错对象），填补了智能体可靠性评估的盲区。
7. **Linguistic Firewall: Geometry as Defense in Multi-Agent Systems Routing**
   - 链接: http://arxiv.org/abs/2606.30555v1
   - 作者: Dvir Alsheich, Adar Peleg et al.
   - 一句话说明：利用几何方法构建多智能体系统（MAS）中的“语言防火墙”，防御针对任务路由机制的恶意攻击，是 MAS 安全调度的前沿探索。

**🔧 方法与框架（新技术、基准测试、效率优化）**
8. **SWE-INTERACT: Reimagining SWE Benchmarks as User-Driven Long-Horizon Coding Sessions**
   - 链接: http://arxiv.org/abs/2606.30573v1
   - 作者: Mohit Raghavendra, Anisha Gunjal et al.
   - 一句话说明：重构了现有的自动化 SWE 基准，引入多轮、交互式、用户驱动的测试环境，将代码智能体的评测标准推向更真实的工程场景。
9. **The Human Creativity Benchmark**
   - 链接: http://arxiv.org/abs/2606.30561v1
   - 作者: Aspen Hopkins, Allison Nulty et al.
   - 一句话说明：提出全新的创造力基准，主张保留评估者的“分歧”而非将其视为误差，为评估生成式 AI 的创新能力提供了更严谨的范式。
10. **One-Step Gradient Delay is Not a Barrier...**
    - 链接: http://arxiv.org/abs/2606.30634v1
    - 作者: Philip Zmushko, Egor Petrov et al.
    - 一句话说明：证明了在大规模 LLM 预训练中，异步流水线并行带来的单步梯度延迟不会成为瓶颈，为极致压榨 GPU 算力提供了理论支撑。

**📊 应用（垂直领域、多模态、代码生成）**
11. **VLK: Learning Humanoid Loco-Manipulation from Synthetic Interactions...**
    - 链接: http://arxiv.org/abs/2606.30645v1
    - 作者: Yen-Jen Wang, Jiaman Li et al.
    - 一句话说明：结合合成数据与重建场景，打通了从第一视角观察到人形机器人全身运动控制的映射，突破了具身智能数据匮乏的瓶颈。
12. **LeVo 2: Stable and Melodious Song Generation...**
    - 链接: http://arxiv.org/abs/2606.30642v1
    - 作者: Shun Lei, Huaicheng Zhang et al.
    - 一句话说明：采用分层表征建模和渐进式后训练方法，成功解决了语言模型在长时长歌曲生成中“人声与伴奏混合制导”的结构性冲突。

---

#### 📈 研究趋势信号
从今日的论文中可以敏锐捕捉到几个信号：首先，**Scaling Law 正在发生范式转移**，学术界不再死磕模型参数量，而是转向“Agent Horizon（智能体动作时序）”的纵深扩展。其次，**评测体系正在经历“真实化”洗礼**，从包容主观分歧的创造力评测，到模拟真实交互的 SWE 基准和代码补全行为分析，研究者正着力消除静态评测带来的“高分低能”错觉。最后，**AI 安全的焦点已从输入端向“推理与交互链路”下沉**，无论是多智能体路由的安全防御，还是对齐带来的隐性 Reward Hacking，都表明业界正致力于解剖 AI “黑盒”的内部动态机制。

---

#### 📖 值得精读
1. **Scaling the Horizon, Not the Parameters (论文 9)**
   - **推荐理由**：如果结论成立，这将是对现有大模型扩展路线的重大补充。文章深入探讨了如何用 35B 的小模型通过扩展动作轨迹达到万亿参数的效果，不仅省算力，更为 Agent 框架的设计指明了新方向，是工业界和学术界双赢的突破性研究。
2. **Pessimism's Paradox: Conservative Offline Training Amplifies Reward Hacking... (论文 6)**
   - **推荐理由**：该论文挑战了 RLHF 和对齐领域根深蒂固的直觉认知。通过剖析“保守的离线训练反而加重在线适应阶段的作弊行为”这一悖论，直击现有对齐技术的痛点，对于大模型安全与强化学习研究人员具有极高的启示价值。
3. **Entity Binding Failures in Tool-Augmented Agents (论文 33)**
   - **推荐理由**：随着 ToolUse 成为 Agent 标配，这篇文章精准踩中了一个被长期忽视的盲区。它指出 Agent 常常选对工具却弄错操作对象（如发邮件给错误的人），这种隐蔽的逻辑错误在实际业务部署中极其危险，强烈建议所有 Agent 开发者精读以完善系统评估。