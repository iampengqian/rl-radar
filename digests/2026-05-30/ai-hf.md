# Hugging Face 热门模型日报 2026-05-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-29 22:28 UTC

---

# Hugging Face 热门模型日报 (2026-05-30)

## 📰 今日速览
本期 Hugging Face 热门榜呈现出明显的“多模态与 MoE 架构齐飞”趋势。**DeepSeek-V4 系列**毫无悬念地统治了下载与点赞榜单，展现出极强的开源统治力；同时，**Qwen3.6 系列**（尤其是 MoE 和多模态版本）引发了社区极高频的微调与 GGUF 量化热潮。在生成式领域，视频生成及 Any-to-Any 万能模型（如 Lance、Anima）成为社区新宠。此外，端侧与边缘计算模型（如 MiniCPM5-1B）的极高关注度，印证了本地化部署的强劲需求。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型）
* **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  * 作者: deepseek-ai | 👍 4,431 | ⬇️ 5,836,444
  * **说明**: 当前榜单的绝对王者，新一代文本生成旗舰大模型，各项性能拉满，是开源界的现象级基座。
* **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  * 作者: deepseek-ai | 👍 1,291 | ⬇️ 3,382,438
  * **说明**: DeepSeek-V4 的高效轻量版，提供极快的推理速度与 MIT 协议，兼顾了商业友好度与性能。
* **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
  * 作者: LiquidAI | 👍 208 | ⬇️ 8,854
  * **说明**: Liquid AI 推出的基于新型 MoE 架构的语言模型，在中小参数量级探索了非 Transformer 的可能性。
* **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  * 作者: sapientinc | 👍 405 | ⬇️ 131,828
  * **说明**: 主打端侧/设备端的十亿参数级纯文本生成模型，下载量惊人，切中了本地化离线运行的市场痛点。

### 🎨 多模态与生成（图像、视频、音频）
* **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  * 作者: Qwen | 👍 1,522 | ⬇️ 4,858,365
  * **说明**: 阿里 Qwen3.6 系列的官方 27B 视觉语言多模态版本，百万级下载，代表了当前开源多模态的最强音。
* **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  * 作者: circlestone-labs | 👍 1,592 | ⬇️ 723,317
  * **说明**: 标签包含 ComfyUI 和单文件扩散模型，社区爆款，提供极其流畅的图像生成体验与节点支持。
* **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  * 作者: SulphurAI | 👍 1,440 | ⬇️ 1,528,838
  * **说明**: 开源文本生成视频（Text-to-Video）基座模型，高达 150 万+的下载量表明视频生成工具链正在走向成熟。
* **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  * 作者: bytedance-research | 👍 974 | ⬇️ 2,738
  * **说明**: 字节跳动推出的 Any-to-Any 多模态模型，支持图像/视频联合生成，技术前沿性极高。
* **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  * 作者: openbmb | 👍 1,056 | ⬇️ 428,949
  * **说明**: 面向端侧部署的高效多模态视觉语言模型，在同体积模型中视觉能力表现卓越。
* **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  * 作者: meituan-longcat | 👍 392 | ⬇️ 0
  * **说明**: 美团推出的音频/文本/图像驱动的高保真虚拟人视频生成模型，主打数字人赛道。
* **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
  * 作者: NemoStation | 👍 444 | ⬇️ 14,727
  * **说明**: 专注于视频理解的视频-文本多模态模型，在视频字幕生成与细节描述方面表现优异。
* **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  * 作者: Supertone | 👍 738 | ⬇️ 53,824
  * **说明**: 顶级的开源语音合成（TTS）模型，提供高质量、极具表现力的声音克隆与语音生成。
* **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  * 作者: nvidia | 👍 377 | ⬇️ 7,861
  * **说明**: 英伟达推出的视觉定位模型，能基于多模态指令精准定位图像中的任何目标。
* **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** / **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** / **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
  * **说明**: 英伟达与微软近期在图像增强/超分和文生图领域发布的最新 Diffusion 模型。

### 🔧 专用模型（代码、翻译、提取）
* **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** & **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  * 作者: tencent | 👍 1,088+ | ⬇️ 18,000+
  * **说明**: 腾讯混元推出的最新一代机器翻译模型，覆盖轻量级和 MoE 大参数级，翻译质量极佳。
* **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  * 作者: numind | 👍 195 | ⬇️ 49,014
  * **说明**: 专为企业级结构化数据提取设计的视觉语言模型，擅长从文档图片/文本中精准抽取信息。
* **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)**
  * 作者: PaddlePaddle | 👍 98 | ⬇️ 1,171
  * **说明**: 结合了 ERNIE4.5 架构的百度最新 OCR 视觉语言模型，在复杂场景文字提取上极具统治力。

### 📦 微调与量化（GGUF、社区魔改）
* **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  * 作者: HauhauCS | 👍 1,049 | ⬇️ 2,114,938
  * **说明**: 基于Qwen MoE的去审查化、风格激进的微调版，下载量破两百万，反映了社区对“无限制模型”的巨大需求。
* **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  * 作者: unsloth | 👍 500+ | ⬇️ 1,500,000+
  * **说明**: Unsloth 出品的高质量 Qwen3.6 GGUF 量化版，支持 MTP（多头预测），是本地部署玩家的必下模型。
* **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** & **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
  * 作者: Jackrong | 👍 343 | ⬇️ 114,986
  * **说明**: 社区针对 Qwen3.6 27B 版本制作的高优化度 GGUF 格式量化文件。
* **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
  * 作者: openbmb | 👍 549 | ⬇️ 23,629
  * **说明**: 专为极低资源设备打造的十亿参数小模型，热度极高，体现了边缘计算模型微调及落地的潜力。
* **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  * 作者: froggeric | 👍 451 | ⬇️ 0
  * **说明**: 社区开发者修复了 Qwen 系列聊天模板的格式工程仓库，对本地推理开发者（如 LM Studio 用户）极具价值。
* **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
  * 作者: OBLITERATUS | 👍 117 | ⬇️ 16,849
  * **说明**: 社区基于 Qwen3.6 进行的 DPO/微调版本，大幅降低了模型的安全对齐拒绝率。
* **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)**
  * 作者: LiquidAI | 👍 103 | ⬇️ 5,293
  * **说明**: Liquid 新型架构模型的边端量化版本，适合在个人 PC 上尝鲜非 Transformer 架构。
* **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)**
  * 作者: stepfun-ai | 👍 111 | ⬇️ 1,421
  * **说明**: 阶跃星辰更新的多模态微调/推理模型，在 Flash 版本中提升了视觉理解速度。

---

## 📈 生态信号

**1. Qwen3.6 系列成为开源生态的绝对基建**
榜单中有接近三分之一的模型与 Qwen3.6 有关。不论是官方多模态版本，还是社区 GGUF 量化、去审查微调、聊天模板修复，都说明 Qwen3.6（特别是其 MoE 和视觉版本）已经接替了 Llama 系列的地位，成为当前开发者和社区最热衷的“基座底座”。

**2. 多模态与 Any-to-Any 进化加速**
OpenBMB、字节跳动、SulphurAI 等厂商主推的视频生成和万能输入输出模型频频登上热榜。这标志着社区的关注点已从单纯的文本对话，全面转向了视听融合的生成式 AI 应用，ComfyUI 和 Diffusers 生态正在加速繁荣。

**3. DeepSeek V4 的开源降维打击**
DeepSeek V4 凭借千万级的下载量证明，在基座大模型领域，开源权重正加速挤压闭源模型的市场空间，而 MIT 协议的 Flash 版本更是为企业级应用敞开了大门。

---

## 💡 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   * **理由**: Any-to-Any（任意输入到任意输出）是当前多模态的前沿焦点。Lance 的出现提供了一个极佳的开源尝试途径，探索同一个模型如何同时优雅地处理图像与视频的生成。

2. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
   * **理由**: 在 Transformer 一统天下的时代，Liquid AI 的 LFM 架构提供了一条全新的技术路线。对于研究人员和极客来说，测试和对比这种非 Transformer 的 MoE 模型的推理速度与上下文能力将非常有启发性。

3. **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) / [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
   * **理由**: 极致轻量化的代表。如果你希望在本地 PC 甚至手机端部署一个能看图说话、进行对话的 AI 助手，这两款模型是目前最前沿、最值得测试的“端侧利器”。