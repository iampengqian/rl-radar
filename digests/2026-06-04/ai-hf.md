# Hugging Face 热门模型日报 2026-06-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-03 22:40 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-04)

## 📰 今日速览
本期 Hugging Face 热门榜单迎来了多款重量级基础模型的迭代更新。**DeepSeek-V4** 系列毫无悬念地占据了榜单核心，其 Pro 和 Flash 版本凭借极高的下载量展现出强大的生态统治力。Google 发布了 **Gemma-4-12B**，全面向 any-to-any 全模态架构转型，引起社区极大关注。此外，Nvidia 携带 **Cosmos3** 系列在视觉生成与世界模型领域强势发力；Qwen、Step 等国产模型在端侧与多模态开源领域继续保持高频更新。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,597 | ⬇️ 5,811,046
  - **说明**: DeepSeek V4 系列的旗舰版本，凭借超强的文本生成与对话能力和海量下载量，稳居当前开源大模型生态的绝对 C 位。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,384 | ⬇️ 3,542,202
  - **说明**: DeepSeek V4 的高效精简版，采用 MIT 协议，兼顾了顶尖性能与极低的部署成本，是开发者构建应用的理想选择。
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 475 | ⬇️ 60,171
  - **说明**: LiquidAI 推出的最新 2.5 代 MoE 架构语言模型，总参 8B 激活仅 1B，专为极速文本生成和边缘计算设计。
- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 756 | ⬇️ 68,494
  - **说明**: 面向端侧设备的高效微型语言模型，在极低参数量下保持了出色的生成能力，适合资源受限场景。
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 539 | ⬇️ 155,558
  - **说明**: 1B 级别的文本生成新秀，架构设计与基准测试表现亮眼，下载量增长迅速。

### 🎨 多模态与生成（图像、视频、音频）
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,587 | ⬇️ 5,377,567
  - **说明**: 阿里 Qwen3.6 系列的旗舰级多模态模型，支持图像与文本的深度融合，凭借过硬的综合性能狂揽超 500 万下载。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 1,146 | ⬇️ 78,925
  - **说明**: Nvidia 最新推出的视觉定位模型，在图像文本联合理解与目标检测任务上表现卓越。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,530 | ⬇️ 1,666,353
  - **说明**: 基于 LTX-2.3 架构的文生视频基础模型，为开源视频生成生态提供了强大且易微调的底座。
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 1,021 | ⬇️ 3,309
  - **说明**: 字节跳动推出的全能型多模态生成模型，支持从文本到图像、视频的无缝生成。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 139 | ⬇️ 463
  - **说明**: Google Gemma 4 代 12B 指令微调版，原生支持 Any-to-Any（任意模态转换），标志着 Gemma 家族正式迈入全模态时代。
- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  - 作者: stepfun-ai | 👍 230 | ⬇️ 17,965
  - **说明**: 阶跃星辰推出的最新一代极速视觉语言模型，在多模态处理上实现新突破。
- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 212 | ⬇️ 4,829
  - **说明**: 结合 ERNIE4.5 架构的视觉语言 OCR 模型，极大提升了复杂场景下的图文识别精度。
- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) & [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)**
  - 作者: nvidia | 👍 133/113 | ⬇️ 14,722/3,946
  - **说明**: Nvidia Cosmos3 系列物理世界生成与理解模型（涵盖 Text2Image, Image2Video 等），在自动驾驶与机器人仿真领域潜力巨大。
- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)**
  - 作者: OpenMOSS-Team | 👍 137 | ⬇️ 23,987
  - **说明**: 复旦 MOSS 团队推出的高质量多语种语音合成模型，在中文 TTS 领域表现优异。

### 🔧 专用模型（代码、数学、视觉特定任务）
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 👍 176 | ⬇️ 6,938
  - **说明**: 专为代码生成与编程辅助设计的思维链 MoE 模型，深度集成于开发者工具生态。
- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
  - 作者: NemoStation | 👍 510 | ⬇️ 18,315
  - **说明**: 专注于视频文本理解的轻量级多模态模型，基于 Qwen 架构打造，是视频分析任务的利器。
- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
  - 作者: nvidia | 👍 285 | ⬇️ 778
  - **说明**: 基于扩散模型的图像超分辨率专用工具，可极大提升生成图像的细节和质感。

### 📦 微调与量化（社区微调、GGUF）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,343 | ⬇️ 2,602,333
  - **说明**: 社区极其火爆的无审查去限流版本，结合了视觉能力与 MoE 架构，下载量突破 260 万，反映了用户对自由部署的强烈需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 629 | ⬇️ 1,016,595
  - **说明**: Unsloth 提供的高质量 Qwen3.6 GGUF 量化版，让消费级显卡也能流畅运行 27B 级别的大型视觉语言模型。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 153 | ⬇️ 470,059
  - **说明**: 官方利用模型优化器进行的 NVFP4 精度量化，极大降低了显存占用并保持了优秀的 MoE 推理性能。
- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
  - 作者: LiquidAI | 👍 172 | ⬇️ 87,045
  - **说明**: LFM2.5 的量化版本，进一步压榨边缘设备的本地部署潜力。

---

## 📈 生态信号
当前开源大模型生态呈现**“两强多极”**的格局。一方面，**DeepSeek V4 家族**以 MIT 协议和超高性能彻底主导了 LLM 及基础底座的下载榜；另一方面，**Qwen 家族**势头强劲，Qwen3.6 系列凭借出色的多模态能力（Vision）及超高人气，在社区微调榜占据了绝对主导地位。

从技术趋势看，**原生全模态**正在成为标配，Google 的 Gemma-4 与 Qwen3.6 均将视觉与文本深度融合。此外，**MoE（混合专家）架构的平民化**和 **NVFP4/GGUF 极致量化技术**的大规模应用，表明社区正致力于将百亿参数级别的 SOTA 模型推向个人 PC 端和手机端。最后，“无审查”微调版本持续霸榜，体现出 AI 应用层对模型生成包容度有着极高的定制化需求。

---

## 💡 值得探索

1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - **推荐理由**: Google Gemma 系列首次原生支持 Any-to-Any（任意到任意模态）生成。这不仅是视觉语言模型，更是探索多模态统一架构演进的绝佳研究对象。
2. **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
   - **推荐理由**: 专为开发者生态设计的编程模型，引入了 "Thinking" 机制。在解决复杂代码生成、重构和调试等任务时，它能提供比通用大模型更专业、更具逻辑性的辅助。
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **推荐理由**: 在传统目标检测基础上融合了强大的视觉常识推理能力。对于需要视觉精准定位（如具身智能、机器人抓取、自动驾驶标注）的开发者而言，这是一个极其轻量且开箱即用的利器。