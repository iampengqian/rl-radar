# Hugging Face 热门模型日报 2026-07-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-04 22:15 UTC

---

这份《Hugging Face 热门模型日报》基于 2026-07-05 的数据为您整理。

### 📰 今日速览
1. **百亿参数级 MoE 与 Agent 模型成为主流**：Qwen3.5/3.6 系列（尤其是 35B-A3B 架构）主导了本周的榜单，表明开源社区正全面拥抱高效率的混合专家模型和智能体生态。
2. **去审查与社区微调大热**：带有 `abliterated` 和 `uncensored` 标签的去审查版本（如 GLM-5.2 和 Qwen3.6）迎来爆发式下载，反映了开发者对无限制推理的强烈需求。
3. **NVFP4 量化技术受瞩目**：NVIDIA 集中发布了多款 NVFP4 格式的量化模型，边缘计算和本地部署的门槛进一步降低。
4. **垂直领域多点开花**：从 OCR、3D 视频生成到网络安全攻防，专用小模型在特定任务上展现出极高的商业与实用价值。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、MoE）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者/数据**：zai-org | 👍 3,396 | ⬇️ 208,920
    *   **一句话说明**：智谱 AI 的新一代 MoE 大模型，凭借强大的对话和推理能力成为本周最受瞩目的开源基座模型之一。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **作者/数据**：deepseek-ai | 👍 367 | ⬇️ 10,306
    *   **一句话说明**：DeepSeek 最新发布的 V4 Pro 版本，集成了 DSpark 优化技术，在文本生成和复杂逻辑推理上表现卓越。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者/数据**：Qwen | 👍 532 | ⬇️ 50,188
    *   **一句话说明**：阿里 Qwen 团队专门针对 Agentic（智能体）工作流微调的 35B MoE 模型，是构建复杂自动化助理的首选。
*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
    *   **作者/数据**：deepreinforce-ai | 👍 207 | ⬇️ 33,268
    *   **一句话说明**：逼近闭源极限的超大参数量 MoE 模型，展现了 deepreinforce-ai 在大规模稠密与稀疏架构上的硬实力。

#### 🎨 多模态与生成（图像、视频、多模态对话）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/baidu-Unlimited-OCR)**
    *   **作者/数据**：baidu | 👍 1,710 | ⬇️ 988,379
    *   **一句话说明**：百度推出的强力 OCR 模型，突破传统分辨率限制，支持超高精度和无限长度的图文特征提取。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者/数据**：nvidia | 👍 2,604 | ⬇️ 1,194,542
    *   **一句话说明**：英伟达推出的轻量级（3B）视觉定位模型，能在图像中精准定位任何目标，下载量惊人。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) & [Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
    *   **作者/数据**：krea / Comfy-Org | 👍 745 (合计) | ⬇️ 89,394
    *   **一句话说明**：目前最炙手可热的文生图模型 Krea-2 及其 Turbo 加速版，已全面适配 ComfyUI 生态。
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   **作者/数据**：fal | 👍 155 | ⬇️ 0 (刚刚发布)
    *   **一句话说明**：基于 LTX 视频模型的高质量 LoRA，专注于生成具备极强物理真实感的 3D 风格视频。

#### 🔧 专用模型（代码、安全、表格、领域微调）
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   **作者/数据**：BugTraceAI | 👍 132 | ⬇️ 12,001
    *   **一句话说明**：专为网络安全和红队测试设计的 27B 模型，具备强大的漏洞分析和攻击性安全代码生成能力。
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者/数据**：google | 👍 190 | ⬇️ 1,177
    *   **一句话说明**：谷歌推出的基础表格模型，支持零样本下的表格分类与回归任务，拓宽了 LLM 在结构化数据上的应用。
*   **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)**
    *   **作者/数据**：nvidia | 👍 120 | ⬇️ 10,479
    *   **一句话说明**：英伟达推出的双塔架构 MoE 模型，通常用于高性能的搜索推荐与语义嵌入。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者/数据**：HauhauCS | 👍 2,454 | ⬇️ 2,993,053
    *   **一句话说明**：彻底去除安全对齐的 Qwen3.6 MoE 版本，由于回答风格硬核且无限制，迎来了惊人的近 300 万次下载。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者/数据**：yuxinlu1 | 👍 2,595 | ⬇️ 641,260
    *   **一句话说明**：基于 Gemma-4 的深度代码微调版，完美融合 Fable5 引擎，是本地跑代码辅助的利器。
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) & [nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
    *   **作者/数据**：nvidia | 👍 470 (合计) | ⬇️ 421,022
    *   **一句话说明**：NVIDIA 官方出品的 NVFP4 极致量化版，让消费级显卡也能满血运行百亿/I大参数模型。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者/数据**：empero-ai | 👍 1,456 | ⬇️ 1,464,047
    *   **一句话说明**：魔改 Qwen3.5 架构的轻量级模型，提供百万 token 上下文与 Claude 风格的语气，极受本地部署玩家欢迎。

---

### 📈 生态信号
当前开源大模型生态正经历**“MoE 化”**与**“去审查化”**的双重浪潮。从 Qwen3.6 到 GLM-5.2，**35B 总参数 + 3B 激活参数**的 MoE 架构已成为业界标准，完美平衡了极致性能与低推理成本。同时，社区对“Uncensored（无审查）”和“Abliterated（抹除对齐）”模型的狂热需求（如 HauhauCS 的模型斩获近 300 万下载），反映出开发者对模型默认安全机制的逆反心理以及对信息绝对控制权的追求。
在硬件适配上，**NVIDIA 主导的 NVFP4 量化格式**正在迅速抢占生态位，大有取代传统 GGUF/AWQ 之势，为端侧部署铺平了道路。总体而言，开源权重正以极快的速度逼近甚至超越部分闭源模型的能力。

---

### 💡 值得探索
1. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：
   * **理由**：如果你正在开发 AI Agent，这是必试模型。它专门针对工具调用、多步推理进行了深度优化，且运行成本极低（仅激活 3B 参数）。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：
   * **理由**：突破了传统多模态模型处理长图表、复杂截图的瓶颈，对于需要处理扫描文档、长图表的 RAG 系统来说，是一个革命性的工具。
3. **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**：
   * **理由**：细分领域的王者。对于安全研究人员和 DevSecOps 团队，它能以极低的本地成本提供专业的代码安全审计和漏洞挖掘能力。