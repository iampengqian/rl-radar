# Hugging Face 热门模型日报 2026-06-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-02 22:38 UTC

---

# Hugging Face 热门模型日报 (2026-06-03)

## 1. 今日速览
今日 Hugging Face 平台迎来多个重磅模型更新，开源社区彻底步入 **“MoE（混合专家架构）与多模态”** 并爆发的时代。**DeepSeek-V4** 系列凭借极高的下载与点赞数持续霸榜，确立了开源大语言模型的性能新基准。此外，**nvidia** 连发多款 Cosmos3 系列生成模型与视觉语言模型，强势布局多模态与物理世界生成领域；而 **Qwen3.6** 系列的微调与 GGUF 量化版本全面开花，再次印证了其作为当前社区最受欢迎基座模型的统治力。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、基座模型）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,566 | ⬇️ 5,829,042
  - **说明:** 当之无愧的流量之王，DeepSeek-V4 的 Pro 版本凭借顶尖的性能与庞大的生态应用需求，领跑全场语言模型。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,361 | ⬇️ 3,525,218
  - **说明:** V4 系列的轻量高效版本，以 MIT 协议开源，兼顾了极致的推理速度与商用灵活性。
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  - 作者: LiquidAI | 👍 438 | ⬇️ 47,742
  - **说明:** Liquid 公司最新推出的 8B 参数 MoE 架构模型，凭借其独特的非 Transformer 架构（LFM）在同等规模模型中脱颖而出。
- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  - 作者: openbmb | 👍 730 | ⬇️ 57,683
  - **说明:** 面向端侧设备的极限压缩模型，展现了极高的能效比，适合手机等边缘设备的本地部署。
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 463 | ⬇️ 153,029
  - **说明:** 新型 1B 规模文本生成模型，下载量表现优异，可能针对特定文本任务进行了深度优化。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,577 | ⬇️ 5,243,648
  - **说明:** 阿里巴巴最新一代旗舰视觉语言模型（VLM），支持图文理解，下载数量惊人，已成为开源多模态的基座首选。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 957 | ⬇️ 61,604
  - **说明:** 英伟达推出的 3B 视觉定位模型，旨在实现图像中任意目标的精准识别与框选，点赞数位居前列。
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 1,010 | ⬇️ 3,192
  - **说明:** 字节跳动推出的“Any-to-Any”全能生成模型，涵盖图像与视频生成，代表了多模态统一生成的趋势。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,511 | ⬇️ 1,663,826
  - **说明:** 基于 LTX-2.3 架构的文本到视频生成基础模型，获得了惊人的下载量，表明社区对开源高质量视频生成的极度渴求。
- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 484 | ⬇️ 174
  - **说明:** 美团推出的音频/文本/图像驱动的高保真数字人视频生成模型。
- **[Kwai-Keye/Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B)**
  - 作者: Kwai-Keye | 👍 98 | ⬇️ 964
  - **说明:** 快手推出的 30B 参数 MoE 多模态大模型，在视频与图像理解上具备强大潜力。
- **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) / [Super](https://huggingface.co/nvidia/Cosmos3-Super) / [Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) / [Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)**
  - 作者: nvidia | 点赞与下载量不等
  - **说明:** 英伟达 Cosmos3 系列矩阵今日集中上架，全面覆盖从文本到图像、图像到视频以及通用 Omni 基座模型，重塑生成生态。
- **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) / [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: OpenMOSS / Supertone | 👍 114 / 778
  - **说明:** 语音合成领域的两员猛将，支持高度拟真与情感控制，备受生成式应用开发者关注。

### 🔧 专用模型（代码、隐私、特定任务）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,591 | ⬇️ 300,247
  - **说明:** OpenAI 罕见开源的 Token 分类模型，专用于数据清洗中的隐私信息脱敏，直击大模型企业落地的合规痛点。
- **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  - 作者: PaddlePaddle | 👍 183 | ⬇️ 4,003
  - **说明:** 结合了 ERNIE 视觉语言能力的最新 OCR 引擎，在复杂文档解析上表现优异。
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)**
  - 作者: JetBrains | 👍 119 | ⬇️ 799
  - **说明:** 专为开发者打造的代码模型，引入了强大的“思维链”推理能力。

### 📦 微调与量化（社区微调、GGUF、格式转换）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,274 | ⬇️ 2,573,320
  - **说明:** 无审查版本的高热度微调 GGUF 模型，下载量超 250 万，证明社区对解除大模型对话限制的强烈需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 609 | ⬇️ 982,631
  - **说明:** 著名微调团队 Unsloth 产出的高品质 Qwen3.6 GGUF 量化版，极大地降低了本地部署多模态大模型的门槛。
- **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) / [stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF)**
  - 作者: LiquidAI / stepfun-ai | 👍 158 / 94
  - **说明:** 最新发布模型的官方量化版本，确保各类本地算力（如 Mac、PC）能无缝跑起新一代架构。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 👍 135 | ⬇️ 313,480
  - **说明:** 英伟达官方出品的 NVFP4 精度量化版，针对自家 GPU 进行了极致软硬协同优化。

---

## 3. 生态信号

从今日榜单可以看出，**“MoE 架构+ 多模态”** 已成为绝对主流。在榜单中，DeepSeek-V4、Qwen3.6、LiquidAI 及 Keye-VL 等绝大多数新秀均采用了 MoE 设计，这表明在不显著增加推理算力的情况下提升模型智能，已成为行业共识。

在**开源与闭源的博弈**中，以 DeepSeek、Qwen 为代表的顶尖开源权重正以惊人的下载量（动辄数百万）迅速挤压中小型闭源 API 的生存空间；而 OpenAI 主动开源 `privacy-filter` 也释放了一个信号：巨头正通过开源周边防护与工具链来融入并试图主导开源生态的治理标准。

在**量化与微调**方面，GGUF 格式依然垄断本地推理生态。Unsloth 和 HauhauCS 等社区力量的表现极为活跃，特别是无审查版和针对个人 PC 的量化版，构成了大模型向 C 端渗透的最强推力。同时，英伟达的 `NVFP4` 格式也正在试图确立新一代硬件级量化的行业标准。

---

## 4. 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** 
   * **理由:** Any-to-Any 统一多模态模型代表了生成式 AI 的未来方向。它允许用户在不同模态（文本、图像、视频）之间无缝转换，对于研究多模态底层机制和构建跨模态超级应用极具价值。
2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   * **理由:** 随着大模型进入企业级核心业务，数据隐私与合规成了刚需。OpenAI 出品的这款专用过滤工具极具实用价值，非常适合直接集成到当前的数据清洗和 RAG（检索增强生成）流水线中。
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   * **理由:** 仅 3B 参数就能实现极为精准的视觉目标定位。它不仅改变了传统 CV 检测的范式，还极其适合与机械臂、具身智能或机器人系统结合，具有极高的泛用性和二次开发潜力。