# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 22:31 UTC

---

以下为您整理的《Hugging Face 热门模型日报》（2026-06-12）：

---

### 📰 今日速览
今日 Hugging Face 平台迎来多项重磅更新，多模态与生成式模型呈现爆发态势。**DeepSeek-V4-Pro** 以超千万的下载量和绝对人气持续统治语言模型榜单，Google 的 **Gemma 4** 系列则在社区微调与量化生态中迎来狂欢。图像生成领域竞争白热化，**Ideogram 4** 与创新架构的 **DiffusionGemma** 强势登场。此外，端到端的语音/音频流式模型（如 Nvidia 的 ASR 和 BosonAI 的 TTS）标志着多模态正从纯视觉向全感官交互演进。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 4,780 | 下载: 4,061,006
  - **一句话说明**：当前榜单的绝对王者，最新一代超大参数 MoE 模型，展现了开源 LLM 在逻辑与生成上的极高水平。
- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** & **[NVFP4版](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)**
  - 作者: nvidia | 点赞: 198/168 | 下载: 59,066/91,117
  - **一句话说明**：Nvidia 推出的 550B 级别巨型混合专家模型，原汁原味的 BF16 与官方 NVFP4 量化版并行，专供极致性能研究。
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 点赞: 594 | 下载: 142,134
  - **一句话说明**：Liquid 架构的最新 MoE 模型，以极低的激活参数（1B）实现 8B 级别的性能，推理成本极具优势。
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 点赞: 303 | 下载: 1,859
  - **一句话说明**：Cohere 面向代码生成任务推出的轻量级 MoE 模型。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 1,866 | 下载: 131,794
  - **一句话说明**：本周人气最高的视觉模型，专为精准的图文定位与目标检测设计，为具身智能打下基础。
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 点赞: 472 | 下载: 0
  - **一句话说明**：Google 将 Gemma 架构引入扩散模型的创新之作，多模态图像生成能力备受期待。
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** & **[nf4版](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
  - 作者: ideogram-ai | 点赞: 482/316 | 下载: 7,170/6,124
  - **一句话说明**：顶尖图像生成模型 Ideogram 4 的官方极度压缩版，兼顾了生成质量与本地显卡显存占用。
- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 点赞: 367 | 下载: 50,187
  - **一句话说明**：阶跃星辰最新发布的极速视觉语言模型，在多模态理解和对话上实现高吞吐。
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 点赞: 354 | 下载: 19,948
  - **一句话说明**：高质量的端到端多模态语音合成模型，能够生成极具表现力的声音。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 372 | 下载: 4,965
  - **一句话说明**：专为流式自动语音识别设计的轻量级模型，延迟极低。
- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 作者: zai-org | 点赞: 112 | 下载: 0
  - **一句话说明**：主打姿态驱动与角色动画的图生视频扩散模型。
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 作者: ByteDance | 点赞: 222 | 下载: 305
  - **一句话说明**：字节跳动推出的图/文生视频渲染器，在视频连贯性与物理光影上表现优异。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 点赞: 748 | 下载: 134,752
  - **一句话说明**：专为文本任务特化的十亿级模型，架构新颖，在同等体积下性能表现强悍。
- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  - 作者: google | 点赞: 178 | 下载: 19,806
  - **一句话说明**：Google 针对实时音乐/音频生成推出的专用轻量化模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 1,673 | 下载: 3,057,541
  - **一句话说明**：基于 Qwen3.6 的去审查化（Uncensored）微调版，以激进的回复风格和超高下载量主导社区。
- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 点赞: 561 | 下载: 711,706
  - **一句话说明**：顶级量化团队 Unsloth 出品的 Gemma 4 GGUF 版本，普通消费级显卡即可流畅运行。
- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 点赞: 234 | 下载: 14,838
  - **一句话说明**：社区对 Gemma 4 的大胆去审查魔改版本。
- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)**
  - 作者: huihui-ai | 点赞: 142 | 下载: 6,400
  - **一句话说明**：另一个知名的 Gemma 4 消除安全对齐微调版，旨在释放模型的基础生成能力。

---

### 📈 生态信号

1. **两大模型家族势头正旺**：榜单几乎被 **Qwen (3.5/3.6代)** 和 **Google Gemma (第4代)** 包揽。Qwen 凭借极具性价比的 MoE 架构在社区获得海量下载；而 Gemma 4 则通过官方 Any-to-Any 的多模态设计，成为刷榜的核心基座。
2. **量化与去审查的双向驱动**：Unsloth 等团队的 GGUF/QAT 量化版极其活跃，说明端侧部署（本地化运行）需求巨大；同时，OBLITERATUS 等去审查版本热度不减，反映了开源社区对消除模型“安全护栏”的持续渴望。
3. **大厂卷向多模态与具身智能**：从单纯的 Text-to-Image 转向更具挑战性的图生视频、流式音频生成以及精准的视觉定位，开源生态正快速追赶甚至复刻闭源模型（如 GPT-4o）的实时多模态能力。

---

### 💡 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由**：作为目前开源领域性能天花板级别的模型，无论是作为基座进行二次微调，还是直接部署用作复杂代码/逻辑推理任务，都是当前最优选之一，极具研究与应用价值。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由**：突破了传统目标检测的瓶颈，展现了视觉语言模型（VLM）向“空间智能”和“具身智能”靠拢的趋势。对于机器人控制、自动驾驶辅助或高级图像分析应用的开发者来说，是一个不可多得的轻量级利器。
3. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
   - **理由**：相比传统的拼接式 TTS，这种端到端架构的语音模型在情感起伏、呼吸声细节和韵律拟真度上具有降维打击优势，非常适合用来构建高体验的 AI 语音助手或播客生成管线。