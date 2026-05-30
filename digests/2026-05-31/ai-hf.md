# Hugging Face 热门模型日报 2026-05-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-30 22:17 UTC

---

# Hugging Face 热门模型日报 (2026-05-31)

## 📰 今日速览
本期 Hugging Face 热门榜单迎来了重量级开源模型的集中爆发，**DeepSeek-V4** 系列凭借惊人的下载量与点赞数彻底点燃了开源社区。多模态与视觉模型呈现井喷态势，从视频生成、数字人到视觉定位，头部大厂（如英伟达、腾讯、字节跳动）正将竞争焦点转向边缘侧与多模态应用。此外，**Qwen3.6** 系列的混合专家与量化版本主导了社区的微调生态。端侧小模型和语音、隐私过滤等专用模型也展现出强劲的生命力。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,462 | ⬇️ 5,918,111
  - **说明：** 本期绝对的流量之王，新一代顶级开源文本生成基座，正全面重塑开源 LLM 的性能天花板。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,302 | ⬇️ 3,427,926
  - **说明：** DeepSeek-V4 的高效轻量版本，主打更快的推理速度与 MIT 开源协议，适合绝大多数开发者日常调用。
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 269 | ⬇️ 17,084
  - **说明：** Liquid AI 推出的基于新型 Liquid 架构的 MoE 模型，在极小激活参数下提供了优异的端侧推理表现。
- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 604 | ⬇️ 28,793
  - **说明：** 面向边缘设备的最新一代 1B 级小钢炮模型，越级展现了超强的文本处理能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 981 | ⬇️ 2,856
  - **说明：** 字节跳动推出的全能 Any-to-Any 模型，支持多模态图像与视频生成，展示了跨模态统一生成的潜力。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 489 | ⬇️ 18,327
  - **说明：** 英伟达发布的视觉定位大模型，精准实现图像中的目标检测与空间理解，填补了特定视觉任务空白。
- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 409 | ⬇️ 0
  - **说明：** 美团推出的音视频驱动数字人生成模型，引发了对虚拟人与视频生成结合的新一轮关注。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,453 | ⬇️ 1,557,858
  - **说明：** 社区极受欢迎的高质量文生视频扩散模型，下载量破百万，成为视频生成的基础底座。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 744 | ⬇️ 55,382
  - **说明：** 顶尖的文本到语音（TTS）合成模型，语音表现自然，受到音频生成开发者的高频点赞。
- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 134 | ⬇️ 3,400
  - **说明：** 阶跃星辰的最新视觉语言模型，以 Flash 形式提供高效的图文理解能力。

### 🔧 专用模型（代码、数学、医疗、翻译、特定任务）
- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) & [tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 👍 1,091 / 432 | ⬇️ 16,805 / 3,833
  - **说明：** 腾讯混元推出的专业翻译模型系列，包含端侧与 MoE 架构，在多语种互译任务上表现卓越。
- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 👍 2,073 | ⬇️ 9,771,170
  - **说明：** 语音分离与说话人识别的标杆级模型，下载量逼近千万，是音频处理流水线不可或缺的工具。
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,570 | ⬇️ 304,691
  - **说明：** OpenAI 开源的隐私过滤工具，用于敏感数据的 Token 识别与脱敏，极具企业级落地实用价值。
- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
  - 作者: NemoStation | 👍 454 | ⬇️ 15,780
  - **说明：** 视频到文本理解专用模型，为长视频内容理解与QA提供了优秀的解决方案。

### 📦 微调与量化（社区微调、GGUF、端侧部署）
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) & [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,954 / 1,536 | ⬇️ 5,728,121 / 4,971,730
  - **说明：** 阿里通义千问最新一代视觉语言基座/MoE模型，兼顾多模态与激活参数效率，构成了目前开源社区微调的核心底座。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,098 | ⬇️ 2,227,885
  - **说明：** 基于 Qwen3.6 的去审查社区微调版本，极受民间开发者追捧，下载量证明了其高可用性。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 564 | ⬇️ 877,938
  - **说明：** Unsloth 提供的高效 GGUF 量化版，完美适配 llama.cpp，让普通用户在消费级显卡上也能运行大参数 VLM。

---

## 📈 生态信号
**1. MoE 与端侧推理成为绝对主角：** 无论是 DeepSeek-V4、Qwen3.6 还是腾讯混元翻译模型，都在采用 MoE（混合专家）架构。用 30B 甚至更大的总参数换取优异性能，但仅激活极小参数量（如 1B-3B），完美平衡了效果与边缘侧/本地推理的成本。

**2. 多模态从“感知”向“生成”演进：** 视觉模型不再局限于图文理解（VLM），以 Lance 和 Sulphur 为代表的模型正在统一图像、音视频的生成能力；英伟达等大厂则开始深挖“定位”、“超分”等高价值细分多模态任务。

**3. 开放权重与社区微调的狂欢：** Qwen 和 DeepSeek 的基座模型带动了繁荣的下游生态。以 Unsloth、HauhauCS 为代表的社区力量，通过 GGUF 量化、去审查微调等手段，正以前所未有的速度推动顶级大模型在个人 PC 端的普及。

---

## 💡 值得探索
1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**：Any-to-Any 模型代表了目前 AI 的前沿探索方向。研究它如何统一理解和生成文本、图像及视频，对于构建未来的通用 AI 助理极具启发意义。
2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**：在数据合规要求日益严格的今天，这款模型极其适合企业级 RAG 和数据处理流水线。强烈建议开发者测试其集成的便捷性与脱敏准确性。
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**：不同于主流的 Transformer 或密集型 MLP 架构，Liquid 架构在时序数据和边缘设备上的表现独具一格，非常适合需要部署在手机、IoT 设备上的极低延迟场景。