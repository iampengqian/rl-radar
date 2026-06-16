# Hugging Face 热门模型日报 2026-06-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 22:35 UTC

---

这份报告为您梳理了 2026 年 6 月 17 日 Hugging Face Hub 上的热门模型动态。

---

# 🤗 Hugging Face 热门模型日报 (2026-06-17)

## 1. 今日速览
今日 Hub 呈现出**“原生多模态”**与**“本地端侧部署”**并重的趋势。深度求索的 [deepseek-ai/DeepSeek-V4-Pro](#) 霸榜，凭借近 5000 点赞展现了国产开源大模型的统治力。同时，Google 的 Gemma 4 生态全面爆发，不仅推出了 Any-to-Any 统一架构模型，还结合扩散技术进军图像领域。以 `unsloth` 为代表的社区量化团队活跃度极高，确保了最新的旗舰模型（如 Kimi-K2.7、Gemma-4）能迅速以 GGUF 格式在消费级硬件上落地。

---

## 2. 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,894 | 📥 2,829,747
    *   一句话说明: 深度求索的最新旗舰大模型，以绝对的优势登顶今日点赞榜，展现了顶级的文本生成与推理能力。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 242 | 📥 0
    *   一句话说明: 智谱 AI 推出的最新一代大规模 MoE 模型，刚发布即引起社区高度关注。
*   **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** / **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**
    *   作者: nex-agi | 👍 307 / 226 | 📥 4,957 / 9,161
    *   一句话说明: 基于 Qwen3.5 架构的新锐多模态文本生成模型，提供了 Pro 和 Mini 两个版本以适应不同算力需求。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,051 | 📥 1,223,383
    *   一句话说明: 谷歌最新发布的 12B 统一架构模型，支持 Any-to-Any（任意转任意）多模态交互，下载量惊人。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,100 | 📥 98,698
    *   一句话说明: 英伟达推出的超强视觉定位模型，以仅 3B 的参数量实现了极高的图像特征提取效率，登顶今日点赞前三。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 942 | 📥 375,974
    *   一句话说明: 结合了 Diffusion 与 Gemma 技术的跨界多模态模型，能够进行复杂的图文对话与生成。
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** & **[RazzzHF/Realism_Engine_Ideogram_4](https://huggingface.co/RazzzHF/Realism_Engine_Ideogram_4)**
    *   作者: ideogram-ai / RazzzHF | 👍 559 / 107
    *   一句话说明: 顶级文生图模型 Ideogram 4 的官方 FP8 版本及社区写实风格微调版，在图像渲染与排版上表现卓越。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** & **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)**
    *   作者: bosonai / Zyphra | 👍 464 / 99
    *   一句话说明: 今日最热门的两款高质量文本转语音（TTS）模型，支持高拟真声音克隆与生成。

### 🔧 专用模型（代码、数学、语音识别）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 797 | 📥 102,206
    *   一句话说明: 月之暗面专为编程打造的最强代码模型，支持图像特征输入，在各项编程基准测试中处于开源前列。
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 149 | 📥 0
    *   一句话说明: 专注于数学推理领域的深度思考小模型，展现了小参数模型在理科逻辑上的潜力。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 461 | 📥 5,777
    *   一句话说明: 英伟达发布的超轻量级流式语音识别（ASR）模型，支持缓存感知，极低延迟。

### 📦 微调与量化（社区微调、GGUF）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,886 | 📥 2,716,651
    *   一句话说明: 今日当之无愧的“下载天王”，基于 Qwen3.6 的无审查视觉 MoE 模型，深受本地部署玩家追捧。
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** / **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** 等一系列 Unsloth 量化版
    *   作者: unsloth | 👍 数百 | 📥 过百万
    *   一句话说明: Unsloth 稳定发挥，第一时间为 Google Gemma 4 系列、Kimi-K2.7 提供了高质量的 GGUF 量化，打破了硬件门槛。
*   **[DavidAU/Qwen3.6-40B-Claude-4.6...GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
    *   作者: DavidAU | 👍 369 | 📥 366,279
    *   一句话说明: 著名的“缝合怪”与极限微调版本，融合了无审查、代码与推理能力，专供硬核本地跑团/代码玩家。

---

## 3. 生态信号

当前开源模型生态正加速向**全模态**演进，`image-text-to-text` 和 `any-to-any` 已成为新一代旗舰模型的标配。**模型家族阵营**方面，Gemma 4 和 Qwen 3.6 势头最猛：Google 凭借官方开源霸占多模态榜单，而 Qwen 3.6 则因其强大的基座能力，成为了社区“无审查微调”和“魔改版”的绝对主力（如 HauhauCS 版本狂揽 270 万次下载）。此外，**端侧友好化**趋势显著，Unsloth 等量化团队的活跃度甚至超过部分官方机构，证明开发者对 GGUF 等轻量部署格式的需求已从“可选项”变为“必选项”。MoE（混合专家）架构在开源界的渗透率也达到了前所未有的高度。

---

## 4. 值得探索 🔍

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **推荐理由**：作为今日热度天花板，它是目前国产开源大模型的巅峰之作。无论你是需要构建高级 AI 智能体，还是进行深度文本分析，V4-Pro 都是首选的强推理基座。
2.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   **推荐理由**：12B 的参数量非常适合在单张消费级显卡（如 RTX 4090/3090）上进行微调和部署，同时具备原生的 Any-to-Any 多模态能力，是研究多模态对齐的极佳起手式。
3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **推荐理由**：如果你在开发视觉识别、目标检测或 UI 自动化Agent，这个模型极具研究价值。3B 的体积实现了极强的视觉定位功能，极其适合嵌入到各类边缘计算或实时反馈系统中。