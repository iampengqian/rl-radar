# Hugging Face 热门模型日报 2026-06-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-31 22:17 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-01)

## 👀 今日速览
*   **基础模型激战正酣**：DeepSeek-V4 系列与 Qwen3.6 架构同时爆发，牢牢占据了开源 LLM 及多模态模型的流量高地，成为当前社区最受追捧的“底座”。
*   **多媒体生成全面开花**：从拟真数字人、文本生视频到语音克隆（TTS）及音乐生成，视频与音频生成模型正在重塑开源社区的创造力边界。
*   **端侧与量化生态持续繁荣**：以 LiquidAI LFM2.5、Unsloth 微调版以及各类 GGUF 量化模型为代表的轻量化模型热度居高不下，开源社区正在积极将大模型能力向边缘计算端和消费级硬件上转移。
*   **“去审查”与高阶涌现并存**：社区对 Aggressive/Uncensored 权重展现出极大热情，同时针对特定任务（如 OCR、超分辨率、信息提取）的专用模型也迎来了集中爆发。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 4,494 | 下载: 5,886,599
    *   **一句话说明**：当前榜单的绝对流量王者，最新一代 DeepSeek-V4 的高性能版本，开源文本生成的标杆。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 点赞: 1,317 | 下载: 3,483,641
    *   **一句话说明**：DeepSeek-V4 的轻量极速版，以 MIT 协议开源，兼顾了高性能与易用性，下载量惊人。
*   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) & [LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
    *   作者: LiquidAI | 点赞: 318 / 133 | 下载: 27,677 / 41,828
    *   **一句话说明**：Liquid AI 推出的创新 MoE 架构模型，凭借独特的网络结构在 8B 级别参数中展现出优异性能。
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 点赞: 427 | 下载: 143,904
    *   **一句话说明**：小体积（1B）的文本生成黑马，主打高性价比与极速推理，适合端侧或特定任务部署。
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   作者: openbmb | 点赞: 656 | 下载: 36,730
    *   **一句话说明**：面壁智能最新一代的轻量级文本模型，继承了 MiniCPM 系列的高效与极致优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   作者: Qwen | 点赞: 1,552 | 下载: 5,064,096
    *   **一句话说明**：阿里 Qwen 系列最新的多模态大模型底座，视觉与文本能力结合的集大成者，下载量突破 500 万。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 点赞: 1,610 | 下载: 756,861
    *   **一句话说明**：极具人气的生成模型（适配 ComfyUI），在图像/视觉生成任务上备受社区创作者追捧。
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   作者: bytedance-research | 点赞: 991 | 下载: 2,948
    *   **一句话说明**：字节跳动推出的强力“任意到任意”多模态模型，支持跨模态的图像与视频生成。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 点赞: 1,468 | 下载: 1,590,236
    *   **一句话说明**：榜单最热门的 Text-to-Video 基础模型之一，提供了强大的开源视频生成能力。
*   **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    *   作者: meituan-longcat | 点赞: 438 | 下载: 0 (刚发布)
    *   **一句话说明**：美团推出的音视频生成模型，专注于高保真的数字人“视频化身”生成。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) & [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)**
    *   作者: Supertone / OpenMOSS-Team | 点赞: 754 / 82
    *   **一句话说明**：音频赛道的明星，前者代表了商业级的高品质 TTS 与语音合成，后者则提供了优秀的开源中文语音合成方案。
*   **[microsoft/Lens](https://huggingface.co/microsoft/Lens)**
    *   作者: microsoft | 点赞: 149 | 下载: 1,959
    *   **一句话说明**：微软带来的文生图扩散模型，为图像生成提供了新的探索思路。
*   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    *   作者: nvidia | 点赞: 215 | 下载: 498
    *   **一句话说明**：英伟达推出的图生图模型，专注于图像超分辨率与细节重塑。

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR、翻译）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 589 | 下载: 24,586
    *   **一句话说明**：正如其名，专注于万物定位与特征提取的 3B 视觉专用模型。
*   **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
    *   作者: PaddlePaddle | 点赞: 116 | 下载: 2,731
    *   **一句话说明**：融合了 ERNIE 视觉语言能力的最新 PaddleOCR 版本，开源 OCR 界的工业级标杆。
*   **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B) & [Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
    *   作者: tencent | 点赞: 440 / 1,094
    *   **一句话说明**：混元团队推出的最新一代机器翻译模型，兼顾了 30B 的旗舰级体验与 1.8B 的端侧极速体验。
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   作者: numind | 点赞: 208 | 下载: 57,248
    *   **一句话说明**：基于 Qwen3.5 微调的专用信息提取模型，擅长从图像或长文本中精准抽取结构化数据。
*   **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
    *   作者: pyannote | 点赞: 2,085 | 下载: 9,695,594
    *   **一句话说明**：语音说话人分离（日志化）领域的绝对王者，企业级应用不可或缺的基础工具。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 1,153 | 下载: 2,439,402
    *   **一句话说明**：基于 Qwen3.6 的去审查 MoE 模型，充分满足社区对无限制对话和创作的强烈需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 点赞: 577 | 下载: 926,440
    *   **一句话说明**：由 Unsloth 制作的高质量 GGUF 量化版，让普通用户也能在消费级显卡上流畅跑起多模态大模型。
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 点赞: 90 | 下载: 105,608
    *   **一句话说明**：英伟达官方出品的 NVFP4 精度量化版，将 35B 参数的 MoE 模型显存占用压至极低。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 点赞: 467 | 下载: 0
    *   **一句话说明**：为 MLX 和 llama.cpp 环境修复并优化 Qwen3.5/3.6 聊天模板的实用工具库。
*   **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) & [v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
    *   作者: Jackrong | 点赞: 178 / 190 | 下载: 37,241 / 124,807
    *   **一句话说明**：社区基于 Qwen 打造的微调多模态模型，并提供了易于本地部署的 GGUF 版本。

---

## 📈 生态信号
**Qwen 与 DeepSeek 系彻底统治开源中厂牌。** 阿里 Qwen3.6（含多模态与 MoE 架构）在各类基础与衍生榜单中占据了近三分之一的名额；DeepSeek-V4 则在旗舰模型下载量上遥遥领先。这表明中国大模型厂商在“开源权重”生态中已形成压倒性的社区影响力。

**“量化与端侧计算”成为配套基建。** 由于多模态和 MoE 模型参数量巨大，以 llama.cpp (GGUF)、MLX 和 NVFP4 为代表的量化格式迎来了爆发。此外，开源社区对“去审查”的追求依然高涨，Uncensored 版本往往能获得超预期的互动与下载量。同时，生成式赛道正在从纯图像全面向“长视频、数字人与高保真语音”等高维应用演进。

---

## 💡 值得探索

1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   **理由**：“任意到任意”的多模态生成是目前 AI 的前沿圣杯，该模型为探索统一的跨模态视频/图像生成提供了极佳的开源测试平台。
2.  **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    *   **理由**：音视频联合驱动的数字人生成在直播、翻译、影视制作等领域具有巨大商业潜力，值得创作者和开发者密切关注其能力边界。
3.  **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
    *   **理由**：对于需要做本地化、高隐私翻译任务的开发者而言，这个仅有 1.8B 但专精于翻译的模型是不可多得的端侧实用利器。