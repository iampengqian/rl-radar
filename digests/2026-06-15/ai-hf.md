# Hugging Face 热门模型日报 2026-06-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-14 22:21 UTC

---

这份报告为您梳理了 2026 年 6 月 15 日 Hugging Face Hub 上的热门模型动态。

# 🤗 Hugging Face 热门模型日报 (2026-06-15)

## 1️⃣ 今日速览
本期榜单迎来了**DeepSeek-V4-Pro**和**Google Gemma-4**系列的全面爆发，开源大模型正式进入“原生多模态”和“any-to-any（任意模态转换）”时代。开源量化生态极其繁荣，基于全新基座的“去审查/_uncensored”微调模型与GGUF量化版本主导了社区的下载量。此外，端侧及高保真图像/视频生成模型（如Ideogram 4、SCAIL-2）也展现出强劲的增长势头。

---

## 2️⃣ 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,829 | ⬇️ 3,075,369
    *   *一句话说明*: 榜单绝对的下载与点赞王者，DeepSeek 最新一代旗舰大模型，展现了极致的语言与推理能力。
*   **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** & **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,008 / 542 | ⬇️ 1,084,405 / 213,502
    *   *一句话说明*: 谷歌最新开源的 Gemma 4 统一架构基座及指令微调版，原生支持 any-to-any 任务，潜力巨大。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 482 | ⬇️ 6,643
    *   *一句话说明*: MiniMax 推出的最新一代高性能多模态大语言模型，在图文理解上表现亮眼。
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 617 | ⬇️ 15,145
    *   *一句话说明*: 月之暗面针对编程与代码任务深度优化的新一代模型，备受开发者瞩目。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 1,995 | ⬇️ 75,201
    *   *一句话说明*: 英伟达推出的超强细粒度视觉定位模型，大幅刷新了目标检测与定位的表现。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 784 | ⬇️ 198,912
    *   *一句话说明*: 谷歌将 Gemma 架构与扩散模型创新结合的产物，为图像文本生成提供了新范式。
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** & **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
    *   作者: ideogram-ai | 👍 534 / 335 | ⬇️ 8,263 / 3,763
    *   *一句话说明*: Ideogram 的高精度文生图模型，并原生提供了 FP8 和 NF4 量化版本，极大降低了显存门槛。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 👍 425 | ⬇️ 35,122
    *   *一句话说明*: 仅 40 亿参数的高质量语音合成（TTS）模型，提供接近真人的流式音频交互体验。
*   **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
    *   作者: zai-org | 👍 172 | ⬇️ 0
    *   *一句话说明*: 一款极具突破性的姿态驱动图生视频模型，在角色动画生成方面表现惊艳。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 412 | ⬇️ 4,505
    *   *一句话说明*: 专为边缘设备设计的超低延迟流式语音识别（ASR）模型，支持缓存感知，非常实用。
*   **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
    *   作者: XiaomiMiMo | 👍 113 | ⬇️ 4,108
    *   *一句话说明*: 小米端侧 AI 助手引擎，主打 Agent（智能体）调用与高效推理。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,805 | ⬇️ 2,516,709
    *   *一句话说明*: 社区下载量奇迹！基于 Qwen3.6 MoE 彻底解除安全审查的视觉模型，深受本地部署玩家追捧。
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** & **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
    *   作者: unsloth | 👍 595 / 260 | ⬇️ 926,372 / 80,118
    *   *一句话说明*: Unsloth 第一时间推出的 GGUF 格式转换版，让普通消费级显卡也能跑起最新的 Gemma 4 模型。
*   **[DavidAU/Qwen3.6-40B-Claude-4.6-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   作者: DavidAU | 👍 335 | ⬇️ 375,966
    *   *一句话说明*: 魔改气息拉满的“缝合怪”与深度去审查微调版，融合了多代模型的优点，在社群中爆火。

---

## 3️⃣ 生态信号
当前开源生态呈现三大显著趋势：
1. **MoE 架构与全能基座主导**：**DeepSeek-V4** 和 **Qwen 3.6 系列**（多为 MoE 架构）构成了当前社区的绝对底座。Google 的 Gemma 4 紧随其后，通过统一架构实现 `any-to-any`，标志着开源模型正加速向真正的多模态融合演进。
2. **“去审查”与量化平分秋色**：榜单中下载数过百万的模型，除了官方基座外，几乎全被 **Uncensored（去审查）** 微调版和 **GGUF（端侧量化）** 版本占据。这表明大量开发者正将模型本地化，并追求更少限制、更原汁原味的生成能力。
3. **生成式 AI 的细分化**：以 Ideogram 4（排版与生图）和 Nvidia LocateAnything（精准视觉定位）为代表，社区不仅关注 LLM，也在积极探索垂直领域的多模态爆发。

---

## 4️⃣ 值得探索
1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   * *理由*：作为不到 15B 参数的模型，其原生支持 `any-to-any` 且下载量破百万。生态兼容性极佳（已有全套安全库和 GGUF 支持），是个人开发者入手下一代全能大模型的最佳起点。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   * *理由*：跳出传统图文对话， Nvidia 这个仅 3B 的模型将目标检测、分割与视觉定位做到了极致，非常适合集成到需要精细视觉理解的机器人或自动化 Agent 工作流中。
3. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   * *理由*：无需多言的开源天花板。拥有最高人气和超 300 万次下载，无论是逻辑推理还是长文本处理，都是当前最值得深入研究和接入业务的首选基座模型。