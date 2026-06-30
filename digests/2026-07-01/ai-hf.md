# Hugging Face 热门模型日报 2026-07-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 22:24 UTC

---

## 《Hugging Face 热门模型日报》
**日期**: 2026-07-01

### 1. 今日速览
今日 Hugging Face Hub 迎来了多款重磅基础模型的集中爆发。**开源大模型全面进入“第四/第五代”与“超大 MoE”时代**，智谱的 GLM-5.2、DeepSeek-V4 以及 Qwen3.6 系列霸榜，并深度融合了代理与推理能力。多模态领域呈现极其务实的落地趋势，百度的 Unlimited-OCR 和英伟达的 LocateAnything-3B 凭借极高的实用价值获得了海量下载。此外，社区围绕 GGUF 量化、去审查以及极致推理的微调版本极其活跃，开源生态的繁荣度达到新高。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 3,038 | **下载**: 142,547
    *   **一句话说明**: 智谱推出的大规模混合专家模型，凭借强大的原生对话与生成能力登顶今日点赞榜首。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSSpark)**
    *   **作者**: deepseek-ai | **点赞**: 248 | **下载**: 6,939
    *   **一句话说明**: 深度求索 V4 架构的旗舰版本，结合 DSpark 机制，展现了业界顶级的复杂文本生成与深度推理潜力。
*   **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
    *   **作者**: deepseek-ai | **点赞**: 112 | **下载**: 4,446
    *   **一句话说明**: DeepSeek-V4 系列的高效轻量版，兼顾了顶尖性能与推理响应速度。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者**: Qwen | **点赞**: 465 | **下载**: 28,480
    *   **一句话说明**: 阿里通义千问最新推出的 35B 总参数量、3B 激活参数的 MoE 模型，专为复杂智能体交互设计。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 1,484 | **下载**: 429,056
    *   **一句话说明**: 百度推出的无限制 OCR 神器，精准解决真实场景下的图文转换痛点，下载量惊人。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者**: nvidia | **点赞**: 2,514 | **下载**: 800,597
    *   **一句话说明**: 英伟达发布的 3B 视觉定位大模型，能精准识别并定位图像中的任何目标，实用度极高。
*   **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** & **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者**: krea | **点赞**: 258 / 420 | **下载**: 32,008 / 45,668
    *   **一句话说明**: Krea 带来新一代基础与加速版文生图扩散模型，持续引领开源视觉生成浪潮。
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   **作者**: fal | **点赞**: 126 | **下载**: 0
    *   **一句话说明**: 基于 LTX 视频模型的微调插件，专注于生成具备极强 3D 真实感的动态视频。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者**: yuxinlu1 | **点赞**: 2,527 | **下载**: 575,255
    *   **一句话说明**: 专为编程任务打造的高性能代码模型，凭借极强的逻辑与代码补全能力在开发者中爆火。
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   **作者**: WeiboAI | **点赞**: 755 | **下载**: 67,777
    *   **一句话说明**: 微博 AI 发布的轻量级数学推理模型，以极小参数量实现了卓越的数理逻辑解题能力。
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   **作者**: Chunjiang-Intelligence | **点赞**: 134 | **下载**: 1,519
    *   **一句话说明**: 基于 DeepSeek-V4 架构的特化模型，专注于网络安全攻防领域的代码分析与防御推理。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,355 | **下载**: 3,017,678
    *   **一句话说明**: 去除安全审查的 Qwen3.6 MoE 量化版，凭借无限制的话题生成能力斩获今日全站最高下载量。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者**: empero-ai | **点赞**: 1,047 | **下载**: 970,663
    *   **一句话说明**: 融合了 Claude 风格、支持百万 tokens 上下文的社区微调佳作，深受本地部署玩家喜爱。
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   **作者**: nvidia | **点赞**: 388 | **下载**: 5,495,402
    *   **一句话说明**: 英伟达官方向 Qwen3.6 施加 NVFP4 量化技术，在几乎不掉精度的情况下大幅降低显存门槛。
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **作者**: unsloth | **点赞**: 484 | **下载**: 180,394
    *   **一句话说明**: Unsloth 第一时间跟进的 GLM-5.2 量化版，让普通消费者也能在单卡上运行顶级大模型。

---

### 3. 生态信号
从今日的趋势可以看出，**2026 年中开源大模型已全面完成世代交替**。榜单上的绝对主力已更迭为 **GLM-5.2、DeepSeek-V4 和 Qwen3.6**，这些架构不仅默认具备多模态能力，且全面转向 MoE 架构以平衡性能与推理成本。

在应用端，**“去审查”和“端侧量化”是社区最强烈的诉求**。榜单上出现多款高达数百万下载量的 Uncensored/GGUF 版本，说明用户对本地部署、完全掌控的模型需求极其旺盛。此外，**代理能力与纯推理能力正在融合**，如 Qwen-AgentWorld 等模型的出现，预示着开源模型正从单纯的“对话工具”转变为能自主执行任务的“世界模型”。

---

### 4. 值得探索
1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**: 如果你正在寻找一个能在本地运行、拥有 300万+下载量验证且毫无内容限制的强悍 MoE 模型，这绝对是当前的首选。
2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: 对于开发者和企业而言，长文本、复杂排版的 OCR 一直是痛点，百度这个拥有 40万+下载的模型提供了极具性价比的开源解决方案，非常值得集成测试。
3.  **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**: 想要构建下一代 AI 智能体工作流？这个模型展示了通义千问在 Agent 领域的最新底座架构探索，对 Agent 开发者极具研究价值。