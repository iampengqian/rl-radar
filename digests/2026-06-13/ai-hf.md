# Hugging Face 热门模型日报 2026-06-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 22:27 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-13)

## 📰 今日速览
本期 Hugging Face 热门榜单呈现出多模态模型全面爆发的趋势。DeepSeek-V4-Pro 依靠数百万的下载量稳居开源文本生成模型榜首。同时，Google 的 Gemma 4 系列成为当前社区绝对的“人气王”，不仅自身多模态能力强大，其衍生的各类量化与去审查版本全面霸榜。视觉生成领域迎来了强劲革新，Google 的 DiffusionGemma 和 Ideogram 4 引发了高度关注；而 NVIDIA 则在空间定位与流式语音识别等细分领域发力。整体而言，开源社区的量化与本地化部署需求依然高涨。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型、MoE）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 👤 作者: deepseek-ai | 👍 4,796 | ⬇️ 3,384,418
  - 💬 *说明：榜单点赞与下载双料冠军，当前开源文本生成领域的现象级 MoE 模型，生态热度极高。*

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
  - 👤 作者: nvidia | 👍 203 | ⬇️ 67,203
  - 💬 *说明：拥有 550B 总参数、55B 激活参数的超大规模 MoE 模型，为极致性能提供开源选项。*

- **[MiniMaxai/MiniMax-M3](https://huggingface.co/MiniMaxai/MiniMax-M3)**
  - 👤 作者: MiniMaxAI | 👍 237 | ⬇️ 442
  - 💬 *说明：国内大厂推出的新一代多模态大语言模型，引发社区广泛好奇。*

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
  - 👤 作者: XiaomiMiMo | 👍 97 | ⬇️ 2,607
  - 💬 *说明：小米推出的针对 Agent 场景优化的端侧大模型，深度适配低显存部署。*

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 👤 作者: nvidia | 👍 1,920 | ⬇️ 149,206
  - 💬 *说明：本期点赞数最高的多模态新星，专注于精准的图像特征提取与空间定位。*

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 👤 作者: google | 👍 609 | ⬇️ 20,669
  - 💬 *说明：Google 将 Gemma 架构引入扩散模型的重磅作品，支持对话式图像生成。*

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 👤 作者: ideogram-ai | 👍 501 | ⬇️ 4,987
  - 💬 *说明：顶流文生图模型 Ideogram 4 的官方 FP8 精度版本，兼顾生成质量与显存占用。*

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 👤 作者: zai-org | 👍 132 | ⬇️ 0
  - 💬 *说明：专注于角色动画的图生视频模型，支持姿态驱动，展示了极强的可控性。*

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  - 👤 作者: ByteDance | 👍 228 | ⬇️ 373
  - 💬 *说明：字节跳动推出的图/文生视频渲染器，在视觉连贯性上表现优异。*

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 👤 作者: bosonai | 👍 384 | ⬇️ 29,347
  - 💬 *说明：极具表现力的多模态语音合成模型，下载量惊人，代表了 TTS 领域的新高度。*

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 👤 作者: nvidia | 👍 391 | ⬇️ 3,551
  - 💬 *说明：专攻流式自动语音识别（ASR），具备缓存感知能力，非常适合实时转写。*

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  - 👤 作者: google | 👍 182 | ⬇️ 6,491
  - 💬 *说明：Google 实时文本到音频生成的最新力作，支持低延迟交互。*

- **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
  - 👤 作者: MisoLabs | 👍 195 | ⬇️ 0
  - 💬 *说明：社区新晋的高质量语音合成项目，备受开发者期待。*

### 🔧 专用模型（代码、视觉基座、Agent）

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 👤 作者: CohereLabs | 👍 332 | ⬇️ 4,054
  - 💬 *说明：基于 MoE 架构的轻量级代码专用模型，适合集成至各类 IDE 插件中。*

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 👤 作者: moonshotai | 👍 323 | ⬇️ 0
  - 💬 *说明：月之暗面推出的高级代码与视觉特征提取模型，采用高度压缩的张量格式。*

### 📦 微调与量化（GGUF、社区魔改）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 👤 作者: HauhauCS | 👍 1,722 | ⬇️ 2,393,894
  - 💬 *说明：本地部署的“狂暴版”去审查 MoE 模型，超 200 万的下载量印证了其在端侧的火爆。*

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 👤 作者: OBLITERATUS | 👍 253 | ⬇️ 43,578
  - 💬 *说明：针对 Gemma 4 的去审查微调版本，满足无限制文本生成的社区需求。*

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 👤 作者: unsloth | 👍 570 | ⬇️ 836,531
  - 💬 *说明：Unsloth 出品的高质量 GGUF 量化版 Gemma 4，兼顾多模态能力与消费级显卡运行。*

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
  - 👤 作者: unsloth | 👍 210 | ⬇️ 17,666
  - 💬 *说明：迅速跟进的 DiffusionGemma GGUF 版本，让普通玩家也能跑起大型扩散模型。*

---

## 📈 生态信号

**模型家族势头：**开源大模型的接力棒正快速传递。**DeepSeek-V4** 以高下载量稳固了其在基座模型中的统治地位；而 **Gemma 4** 系列全面向多模态演进，成为本周生态中最活跃的家族。

**多模态演进趋势：**开源界正在全速追赶闭源多模态。视觉领域出现了架构融合的趋势，尤其是以 DiffusionGemma 为代表的“LLM+扩散生成”大一统架构。

**社区量化与微调：**以 Unslouth 为代表的量化活动是开源生态的晴雨表。此外，用户对模型“去审查”的需求高涨，基于 Qwen 和 Gemma 的 Uncensored/Abliterated 版本均斩获了百万级或高点赞量。

---

## 💡 值得探索

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：Google 将大语言模型架构（Gemma）与扩散模型结合的探索极具前瞻性，值得深入研究其网络结构和图文对话生成机制。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：在多模态大模型卷文本生成之时，NVIDIA 回归视觉本质，该模型在精确目标检测、空间定位上表现卓越，是极具实用价值的视觉基座。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：作为榜单下载量断层领先的社区微调模型，它展示了 MoE 架构（35B 总参，3B 激活）在消费级硬件上的极致性价比。