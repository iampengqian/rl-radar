# Hugging Face 热门模型日报 2026-06-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-01 22:41 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-02)

## 📰 今日速览
本期 HF 热门榜单呈现出大模型迭代加速、端侧部署与多模态全面爆发的趋势。**DeepSeek-V4 系列**（Pro与Flash）毫无悬念地霸榜文本生成领域，斩获极高的下载与点赞量。端侧高效模型迎来了井喷，**面壁智能与 LiquidAI** 纷纷推出超低激活参数的 MoE 架构模型。多模态能力正在从纯视觉向音视频融合演进，**字节跳动 Lance 的任意模态生成** 与 **美团 LongCat 的音视频数字人** 成为技术新风向。此外，开源量化生态依旧繁荣，**Qwen 3.6 系列** 成为社区微调与量化的绝对主力基座。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,529 | ⬇️ 5,851,826
  - **说明：** DeepSeek 最新一代旗舰级大模型，凭借强大的基础能力与开源策略，持续占据开源 LLM 的流量与下载量榜首。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,339 | ⬇️ 3,511,636
  - **说明：** DeepSeek-V4 的高效轻量版本，以 MIT 协议开源，主打极速推理与高性价比，是构建各类 AI 应用的首选基座。
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 382 | ⬇️ 37,893
  - **说明：** Liquid AI 推出的全新 MoE 架构语言模型，总参数 8B 但推理时仅激活 1B，专为边缘设备与高并发场景设计。
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 439 | ⬇️ 149,543
  - **说明：** 新兴架构文本模型，在 1B 参数量级展现了优异的性能，获得了不俗的社区下载验证。
- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 688 | ⬇️ 45,698
  - **说明：** 面壁智能新一代迷你端侧模型，在极低参数下保持了极具竞争力的文本生成与指令跟随能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,566 | ⬇️ 5,154,729
  - **说明：** 阿里 Qwen 系列最新发布的 27B 视觉语言模型，以优异的图文理解与对话能力获得了超 500 万次下载。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,490 | ⬇️ 1,656,520
  - **说明：** 优秀的开源文生视频基础模型，下载量突破百万，是视频生成领域的重磅开源力量。
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 1,087 | ⬇️ 459,188
  - **说明：** 面壁智能最新的端侧多模态视觉语言模型，大幅提升了图文理解精度，非常适合移动端部署。
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 1,002 | ⬇️ 3,041
  - **说明：** 字节跳动推出的 Any-to-Any 多模态大模型，支持图像、视频、文本等多种模态的统一生成，获得了极高的社区赞誉。
- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 189 | ⬇️ 9,256
  - **说明：** 阶跃星辰的最新闪存版视觉语言模型，兼顾了多模态处理能力与高速推理。
- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 465 | ⬇️ 0
  - **说明：** 美团推出的音视频数字人/虚拟化身生成模型，展现了由音频或文本直接驱动高清视频生成的强大能力。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 770 | ⬇️ 57,627
  - **说明：** 极高质量的文本转语音（TTS）模型，在声音克隆与拟真语音合成领域表现出众。
- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)**
  - 作者: OpenMOSS-Team | 👍 93 | ⬇️ 18,564
  - **说明：** 复旦 MOSS 团队推出的支持中文的语音合成模型，具有极高的开源社区实用价值。

### 🔧 专用模型（翻译、OCR、语音处理、隐私过滤等）
- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 👍 1,098 | ⬇️ 18,131
  - **说明：** 腾讯混元最新推出的专门针对机器翻译任务优化的模型，以极小的参数量实现了媲美大模型的效果。
- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 👍 2,106 | ⬇️ 9,591,005
  - **说明：** 语音说话人分离领域的工业界标杆，下载量近千万，是构建复杂语音处理流水线不可或缺的组件。
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,578 | ⬇️ 316,092
  - **说明：** OpenAI 开源的用于识别和过滤文本中个人隐私信息（PII）的专用模型，具备极高的企业应用价值。
- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 152 | ⬇️ 3,190
  - **说明：** 飞桨团队结合视觉语言模型技术推出的最新 OCR 神器，增强了对复杂文档版面的理解力。
- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 215 | ⬇️ 59,010
  - **说明：** 专注于文档图像到结构化文本提取的视觉模型，是企业自动化处理表单和文档的利器。
- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
  - 作者: nvidia | 👍 238 | ⬇️ 577
  - **说明：** NVIDIA 推出的基于扩散模型的高质量图像超分辨率（Image-to-Image）专用模型。

### 📦 微调与量化（社区微调、GGUF、边缘计算）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,213 | ⬇️ 2,533,393
  - **说明：** 基于 Qwen 3.6 MoE 架构的无审查去 Alignment 版本，下载量超 250 万，反映了社区对无限制生成模型的极大需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 591 | ⬇️ 952,188
  - **说明：** Unsloth 专为多 Token 预测（MTP）优化的 Qwen3.6 量化版，兼顾了内存占用与极速推理。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 121 | ⬇️ 171,588
  - **说明：** NVIDIA 官方出品的 NVFP4 精度量化模型，利用软硬协同优化，在 GPU 推理上达到极致性价比。
- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
  - 作者: LiquidAI | 👍 142 | ⬇️ 55,212
  - **说明：** Liquid 新型 MoE 模型的边缘端 GGUF 格式版本，专为 CPU 及消费级设备本地运行优化。

---

## 📈 生态信号

**模型家族势头正旺：** `DeepSeek-V4` 与 `Qwen3.6` 是当前绝对的双雄。DeepSeek 统治了基础榜单，而 Qwen 系列则成为了微调、量化与多模态拓展的“底层土壤”。

**端侧 MoE 与量化趋势：** 榜单中充斥着如 `35B-A3B` (总计 350 亿，激活 30 亿) 这样的混合专家架构。这表明端侧和边缘计算模型全面倒向 MoE。同时，GGUF 和 NVFP4 等量化技术的繁荣，表明开发者越来越重视模型在消费级硬件上的落地能力。

**开源与闭源的博弈：** 高级专有模型架构正加速渗透开源生态。OpenAI 罕见地开源了专用于隐私保护的 `privacy-filter`；而腾讯、字节、美团、Nvidia 等巨头的特定任务专用模型（翻译、数字人、目标定位）均以高规格开放，标志着“特定领域高级模型开源”成为企业建立生态的新常态。

---

## 💡 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **推荐理由：** 作为罕见的 Any-to-Any 统一多模态生成模型，Lance 打破了单一生成任务的边界，值得研究人员深入探索其架构设计，以及如何利用单一模型同时驱动图、文、视频生成。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **推荐理由：** 拥有超过 250 万次的惊人下载量。这不仅提供了一个极具参考价值的去审查化 MoE 微调方案，也强烈折射出开源社区对于突破基础模型安全护栏、追求绝对生成自由度的真实诉求。
3. **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
   - **推荐理由：** 对于需要构建全球化应用的开发者而言，该模型展示了如何将大语言模型技术极致压缩并专精于“机器翻译”这一垂直任务，是垂直场景小型化替代重型 LLM 的优秀范例。