# Hugging Face 热门模型日报 2026-06-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-05 22:22 UTC

---

这里是为您生成的《Hugging Face 热门模型日报》（2026-06-06）：

# 🤗 Hugging Face 热门模型日报 (2026-06-06)

### 📰 今日速览
*   **巨头齐聚发布季**：Google 发布了强大的 Any-to-Any 模型 Gemma-4，而 DeepSeek 的 V4 系列毫无悬念地占据了下载与点赞的双料榜首，展现出极高的社区呼声。
*   **NVIDIA 全家桶狂暴轰炸**：NVIDIA 今日上榜模型高达 9 款，全面覆盖视觉定位、LLM、超分辨率以及 Cosmos3 系列的图像/视频物理生成，硬件巨头在模型层的野心一览无余。
*   **社区微调与量化热度空前**：围绕最新发布的 Qwen3.6、Gemma-4 等模型，以 Unsloth 和 HauhauCS 为代表的社区迅速推出了 GGUF 和 Uncensored 版本，单周下载量动辄数百万，证明本地化部署仍是刚需。
*   **多模态向细分领域渗透**：除了常规的图/文/视频生成，特定领域的模型（如 IDEOGRAM-4 的图像生成、美团 LongCat 的数字人、MisoTTS 的语音合成）占据了榜单近半壁江山。

---

### 🔥 热门模型分类

#### 🧠 语言模型（LLM、对话模型）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,656 | ⬇️ 5,562,821
    *   **一句话说明**：霸榜的当前最强开源大语言模型之一，以极高的下载量和点赞量证明其在复杂文本生成任务上的统治力。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 👍 1,412 | ⬇️ 3,473,265
    *   **一句话说明**：DeepSeek-V4 的高效轻量版本，兼顾性能与推理成本，适合大规模和高频调用场景。
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    *   作者: LiquidAI | 👍 526 | ⬇️ 82,709
    *   **一句话说明**：LiquidAI 推出的 8B 参数 MoE 架构新秀，以优秀的激活参数比展现了小尺寸模型的高效潜力。
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 👍 702 | ⬇️ 159,014
    *   **一句话说明**：主打高效文本生成的 1B 小型模型，适合资源极其受限的端侧部署场景。
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   作者: openbmb | 👍 770 | ⬇️ 91,235
    *   **一句话说明**：面壁智能的最新一代迷你参数模型，在保持极低部署门槛的同时大幅提升了生成质量。

#### 🎨 多模态与生成（图像、视频、音频）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 1,371 | ⬇️ 101,823
    *   **一句话说明**：NVIDIA 出品的高精度图像定位与特征提取模型，在视觉语言联合理解方面表现抢眼。
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 541 | ⬇️ 142,851
    *   **一句话说明**：谷歌最新发布的指令微调多模态模型，支持 Any-to-Any（任意到任意模态）转换。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,565 | ⬇️ 1,691,633
    *   **一句话说明**：基于 LTX-2.3 架构的强大文本到视频生成基础模型，凭借超百万的下载量成为视频生成的明星。
*   **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    *   作者: ideogram-ai | 👍 269 | ⬇️ 1,246
    *   **一句话说明**：Ideogram 4.0 图像生成模型的 fp8 量化版，用极低的显存代价提供业界顶尖的图文渲染能力。
*   **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
    *   作者: stepfun-ai | 👍 331 | ⬇️ 27,948
    *   **一句话说明**：阶跃星辰的高性能视觉语言模型，兼顾文本理解与图像感知，速度极快。
*   **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** *(及其 Text2Image / Image2Video 子系列)*
    *   作者: nvidia | 👍 142+ | ⬇️ 21,000+
    *   **一句话说明**：NVIDIA 面向物理世界生成推出的 Cosmos3 宇宙级多模态矩阵，涵盖了文生图、图生视频等全套能力。
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   作者: PaddlePaddle | 👍 244 | ⬇️ 6,881
    *   **一句话说明**：百度飞桨结合 ERNIE4.5 视觉能力推出的最新 OCR 神器，文档提取与文字识别的利器。
*   **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    *   作者: meituan-longcat | 👍 519 | ⬇️ 1,675
    *   **一句话说明**：美团推出的音频/文本驱动数字人生成模型，在视频Avatar细分领域表现突出。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** & **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)**
    *   作者: bosonai / MisoLabs | 👍 116 / 109
    *   **一句话说明**：本周上榜的高质量语音合成（TTS）双子星，展现了社区对拟真语音生成的持续热情。

#### 🔧 专用模型（代码、数学、语音识别等）
*   **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
    *   作者: JetBrains | 👍 223 | ⬇️ 14,709
    *   **一句话说明**：知名 IDE 厂商 JetBrains 推出的代码专用模型，内置 Thinking 机制，专为 IDE 场景的代码补全与重构优化。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 188 | ⬇️ 597
    *   **一句话说明**：NVIDIA 针对流式语音识别场景深度优化的超低延迟模型，极适合实时会议记录或同传。
*   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    *   作者: nvidia | 👍 310 | ⬇️ 901
    *   **一句话说明**：NVIDIA 的新型图像到图像扩散模型，专注于极致的图像超分辨率重构。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 1,446 | ⬇️ 2,687,304
    *   **一句话说明**：基于 Qwen3.6 MoE 架构的去审查社区魔改版，凭借激进的回复风格和极低门槛的 GGUF 格式斩获超高下载。
*   **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    *   作者: unsloth | 👍 365 | ⬇️ 296,410
    *   **一句话说明**：Unsloth 火速放出的 Google Gemma-4 的 GGUF 量化版，让普通玩家用单卡也能跑起最新多模态大模型。
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 👍 191 | ⬇️ 822,125
    *   **一句话说明**：NVIDIA 官方用 Model Optimizer 工具对 Qwen3.6 进行的定制量化，展示了新一代显卡的 FP4 极致压缩技术。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 664 | ⬇️ 1,092,323
    *   **一句话说明**：Unsloth 针对 Qwen3.6-27B 的优化量化版，进一步下放了 27B 级别模型的本地运行权限。

---

### 📈 生态信号

1. **Qwen 与 DeepSeek 系家族势头无双**：榜单中大量模型（如 DeepSeek-V4 系列、Qwen3.6 各种量化/微调版）占据半壁江山，原始权重和社区衍生品齐飞，确立了它们在开源界的统治地位。
2. **量化技术的“N卡化”与“平民化”**：除传统的 GGUF 外，NVIDIA 推出了专属的 NVFP4 量化格式（如 Nemotron-Ultra 和 Qwen3.6 的 NVFP4 版本）。高端硬件厂商正通过软硬一体的量化标准深度介入开源生态。
3. **开源权重与本地部署狂热**：极致参数比（如 MoE 架构的 A3B, A2.5B）和社区去审查微调需求高涨。大厂通过基座模型刷榜，而社区则依靠极速跟进 GGUF/量化版和 Uncensored 获取了惊人的实际下载量，证明“可用、好用、私有化”仍是开源受众的核心痛点。

---

### 💡 值得探索

1. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   *   **推荐理由**：如果你是开发者或致力于构建 AI Coding 工具链，这个模型极具探索价值。它不仅由顶级 IDE 厂商调教，还融入了“Thinking（慢思考）”能力，非常契合复杂的代码补全和重构场景。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   *   **推荐理由**：多模态模型正从“看图说话”向“精准执行”演进。该模型不仅体积小巧（3B），且专注于精准的视觉定位与特征提取，是构建机器人视觉、Agent 自动化操作等高级任务的基础级利器。
3. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   *   **推荐理由**：在大家都卷 LLaMA 和 Qwen 架构时，LiquidAI 的 LFM 架构提供了一种非 Transformer/MoE 体系的新鲜血液，其出色的参数激活比值得研究者和端侧开发者深入测试。