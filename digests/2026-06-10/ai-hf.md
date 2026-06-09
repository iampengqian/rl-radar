# Hugging Face 热门模型日报 2026-06-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-09 22:27 UTC

---

以下为您生成的《Hugging Face 热门模型日报》（2026-06-10）：

---

# 🤗 Hugging Face 热门模型日报 (2026-06-10)

### 📰 今日速览
今日 Hugging Face 呈现出大模型向**极小参数量 MoE（混合专家模型）演进**的显著趋势。Google 发布了备受瞩目的 Gemma-4 系列开源模型，凭借其强大的任意到任意生成能力席卷榜单。同时，DeepSeek-V4-Pro 凭借惊人的近 430 万次下载量和 4700+ 点赞，稳居开源文本生成模型的统治地位。此外，从顶级语言模型到 TTS/ASR 的端到端多模态开源方案正在快速成熟，Nvidia 和社区也通过深度量化技术大幅降低了百亿、千亿参数模型的部署门槛。

---

### 🚀 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   **作者:** deepseek-ai | **👍 点赞:** 4,740 | **⬇️ 下载:** 4,302,553
    *   **一句话说明:** 深度求索的最新旗舰文本生成模型，以绝对领先的下载量和人气，成为当前开源社区最热门的基础大模型。
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   **作者:** sapientinc | **👍 点赞:** 733 | **⬇️ 下载:** 133,351
    *   **一句话说明:** 一个仅 1B 参数的轻量级文本生成模型，展现了小参数模型在端侧推理的巨大潜力。
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   **作者:** JetBrains | **👍 点赞:** 269 | **⬇️ 下载:** 17,571
    *   **一句话说明:** JetBrains 推出的 12B 总参/2.5B 激活参模型，专为代码和逻辑推理设计，带有思维链特性。
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   **作者:** CohereLabs | **👍 点赞:** 149 | **⬇️ 下载:** 1,784
    *   **一句话说明:** Cohere 推出的轻量级 MoE 架构代码生成模型，主打高效对话与编程辅助。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者:** nvidia | **👍 点赞:** 1,723 | **⬇️ 下载:** 123,922
    *   **一句话说明:** Nvidia 空间定位多模态大模型，本周热度极高，精准解决复杂图文场景下的特征提取与定位需求。
*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   **作者:** stepfun-ai | **👍 点赞:** 358 | **⬇️ 下载:** 46,729
    *   **一句话说明:** 阶跃星辰推出的最新一代视觉语言模型，以高效能的 Flash 架构提供强大的图文理解能力。
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) & [ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
    *   **作者:** ideogram-ai | **👍 点赞:** 437 / 286 | **⬇️ 下载:** 5,915 / 5,250
    *   **一句话说明:** 顶流图像生成模型 Ideogram 4 的不同量化版本，FP8 和 NF4 显著降低了高质量文生图的显存门槛。
*   **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    *   **作者:** ByteDance | **👍 点赞:** 193 | **⬇️ 下载:** 281
    *   **一句话说明:** 字节跳动推出的创新型图像/文本到视频渲染模型，刚发布即引发多模态生成领域关注。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   **作者:** bosonai | **👍 点赞:** 277 | **⬇️ 下载:** 16,207
    *   **一句话说明:** 基于多模态架构的语音合成大模型，展现了 LLM 范式在高质量语音生成上的优异表现。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   **作者:** nvidia | **👍 点赞:** 317 | **⬇️ 下载:** 4,181
    *   **一句话说明:** 专攻流式语音识别的超轻量模型，完美契合实时人机语音交互的工程落地需求。
*   **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
    *   **作者:** google | **👍 点赞:** 164 | **⬇️ 下载:** 18,216
    *   **一句话说明:** Google 推出的实时文本到音频生成模型，支持端侧部署，极大丰富了 AI 的听觉交互生态。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   **作者:** PaddlePaddle | **👍 点赞:** 280 | **⬇️ 下载:** 10,139
    *   **一句话说明:** 百度飞桨结合 ERNIE4.5 推出的视觉语言 OCR 模型，代表了传统视觉工具与 VLM 结合的行业标杆。
*   **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)**
    *   **作者:** nvidia | **👍 点赞:** 214 | **⬇️ 下载:** 36,739
    *   **一句话说明:** Nvidia Cosmos 全能物理世界模拟器的 Nano 极致压缩版，为端侧开发提供了强大的基础架构。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者:** HauhauCS | **👍 点赞:** 1,588 | **⬇️ 下载:** 2,983,909
    *   **一句话说明:** 社区针对 Qwen3.6 打造的无审查、偏激进对话风格的 MoE 微调版，下载量突破 300 万，证明社区对开放对齐的极度渴求。
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) & **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**
    *   **作者:** unsloth | **👍 点赞:** 527 / 170 | **⬇️ 下载:** 660,140 / 127,332
    *   **一句话说明:** 针对谷歌最新 Gemma-4 的 GGUF 和 QAT（量化感知训练）格式转换，让普通开发者也能在本地快速跑起新一代多模态大模型。
*   **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
    *   **作者:** OBLITERATUS | **👍 点赞:** 124 | **⬇️ 下载:** 8,106
    *   **一句话说明:** 典型的社区去对齐微调作品，去除安全限制以满足特定场景下的无限制图文生成需求。

---

### 📈 生态信号
当前开源大模型生态正迎来 **“稀疏架构大爆发”**。榜单中密集出现了 DeepSeek-V4、Qwen3.6、Nemotron-3-Ultra、LFM2.5 等超大参数 MoE 或极低激活参数模型，这表明用极少算力调度海量参数已成为行业共识。

在开源权重方面，以 DeepSeek、Google 为代表的顶级厂商正通过降维打击（提供媲美闭源的 V4 和 Gemma-4）持续挤压中小基座团队的生存空间。此外，以 Unloth 为代表的社区量化力量空前活跃，新基座发布数小时内即可跟进多版本 GGUF/QAT 格式，极大缩短了从“实验室模型”到“消费级硬件可用”的周期。去审查的微调版本持续火爆，也印证了开源社区对模型绝对可控性的刚性需求。

---

### 💡 值得探索
1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：如果你从事计算机视觉（尤其是目标检测、具身智能或自动驾驶），这个极小参数但具备强大空间语义定位能力的模型绝对不容错过，它是解决复杂场景下指代表达的利器。
2.  **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**：结合了渲染引擎思路的全新视频生成模型，它代表了文生视频赛道从单纯的扩散模型向“可物理理解的渲染器”进化的新范式，极具研究价值。
3.  **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**：作为 Google 最新的 Any-to-Any 端侧旗舰，它不仅文本能力强劲，还直接打通了图像理解，配合其极高的社区下载量，非常适合开发者作为多模态 AI Agent 的核心大脑进行测试和二次开发。