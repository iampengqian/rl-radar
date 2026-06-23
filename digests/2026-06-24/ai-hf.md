# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 22:22 UTC

---

### 📰 Hugging Face 热门模型日报（2026-06-24）

#### 1️⃣ 今日速览
本期榜单迎来了开源大模型生态的全面爆发。**DeepSeek-V4-Pro** 与智谱的 **GLM-5.2** 毫无悬念地占据了榜单绝对核心，展示了国产开源大模型在全球社区的统治级热度。多模态与统一架构成为主旋律，Google 推出的 diffusion+Gemma 融合架构与 any-to-any 模型引发大量关注。此外，端侧部署、Agent 实操与端侧无审查微调迎来了井喷，尤其是基于 Gemma-4 和 Qwen3.x 系列的社区魔改版本，下载量居高不下。

---

#### 2️⃣ 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  作者: deepseek-ai | 👍 5,029 | ⬇️ 2,245,489
  *说明: 榜单流量之王，全新一代的对话与推理大模型，凭借卓越的开源表现霸榜。*
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者: zai-org | 👍 2,184 | ⬇️ 40,127
  *说明: 智谱最新一代旗舰对话模型，采用了全新的 MoE 架构，热度极高。*
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  作者: google | 👍 1,153 | ⬇️ 1,991,703
  *说明: 谷歌新一代通用的 any-to-any 统一基础模型，支持多模态，社区下载量惊人。*
- **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**
  作者: poolside | 👍 93 | ⬇️ 2,787
  *说明: 谷歌系基础模型，专为 vLLM 和 SGLang 等高性能推理框架深度适配。*

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  作者: google | 👍 1,055 | ⬇️ 948,996
  *说明: 创新性地将 Diffusion 机制引入 MoE 架构的多模态对话模型，架构成果瞩目。*
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者: nvidia | 👍 2,315 | ⬇️ 274,025
  *说明: 英伟达推出的超精准视觉定位大模型，以极小参数量实现万物识别与定位。*
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  作者: MiniMaxAI | 👍 1,220 | ⬇️ 131,057
  *说明: MiniMax 最新发布的强大的视觉-语言多模态模型。*
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者: moonshotai | 👍 975 | ⬇️ 447,920
  *说明: Kimi 最新多模态代码模型，采用了极致的压缩张量技术，深受开发者欢迎。*
- **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
  作者: ostris | 👍 111 | ⬇️ 3,672
  *说明: 针对 Ideogram 4 旗舰文生图模型的热门风格化 LoRA 组件。*
- **[Comfy-Org/Boogu-Image](https://huggingface.co/Comfy-Org/Boogu-Image) & [Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)**
  作者: Comfy-Org / Boogu | 👍 85~111 | ⬇️ 592
  *说明: 深度集成于 ComfyUI 生态的新晋图像生成与编辑工作流基础模型。*

##### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/baidu/Unlimited-OCR)**
  作者: baidu | 👍 457 | ⬇️ 8,396
  *说明: 百度推出的无限制长文本与复杂排版 OCR 模型，解决了传统图片转文字的痛点。*
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  作者: nvidia | 👍 656 | ⬇️ 41,050
  *说明: 英伟达发布的超低延迟流式自动语音识别（ASR）专用模型。*
- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
  作者: owensong | 👍 175 | ⬇️ 0
  *说明: 超小型情感韵律合成（TTS）基座模型，致力于在端侧实现极低延迟。*
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) & [LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
  作者: LiquidAI | 👍 87~113 | ⬇️ 2,534~10,117
  *说明: LiquidAI 推出的新一代高质量文本向量表示与上下文检索（RAG）专用模型。*

##### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  作者: yuxinlu1 | 👍 2,230 | ⬇️ 456,117
  *说明: 针对编码与推理能力深度强化的 Gemma-4 社区微调版，GGUF 格式下载量极高。*
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者: HauhauCS | 👍 2,153 | ⬇️ 3,955,016
  *说明: 彻底解除安全审查的 Qwen3.6 MoE 视觉模型，本地部署下载量近 400 万，堪称社区奇迹。*
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) & [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
  作者: unsloth / zai-org | 👍 147~299 | ⬇️ 55,820~395,290
  *说明: 官方与社区快速跟进的 GLM-5.2 低资源消耗量化版，极大降低了顶级 MoE 模型的部署门槛。*
- **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**
  作者: huihui-ai | 👍 110 | ⬇️ 3,320
  *说明: 著名社区作者推出的权重消除（去审查）版本，增强了模型的指令服从度。*

---

#### 3️⃣ 生态信号
当前开源大模型生态正呈现出**“开源原生超越闭源基线”**与**“全模态大一统”**的趋势：以 DeepSeek-V4 和 GLM-5.2 为首的新一代原生稀疏架构（MoE）模型势头正旺，彻底垄断了榜单头部位置，证明高质量的开源权重依然是社区最大驱动力。

同时，模型架构的边界正在消融，如 Google 的 `diffusiongemma` 将扩散模型引入 LLM，以及 `any-to-any` 架构的普及。在微调与部署端，**“去审查化”**与**“端侧 Agent”**是两大绝对热点。HauhauCS 的 Qwen3.6 无审查版斩获近 400 万下载，证明了个人开发者在本地对信息自由的强需求；此外，诸如 `MTP` (多 token 预测) 和 `SubAgent` 等针对推理速度和智能体特性的微调技术正在被大量应用到 Gemma-4 和 Qwen3.x 家族中。

---

#### 4️⃣ 值得探索
1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：强烈推荐研究人员尝试。它打破了传统自回归（AR）模型的壁垒，将 Diffusion 架构与 MoE 有效结合，展现了全新的 Scaling 法则和多模态交互潜力。
2. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：无论是用于生产环境部署还是底座二次开发，它都是本周最不可忽视的基础模型，综合能力代表了当前开源界的最高水平。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：对于需要在本地运行完全不受限的视觉/语言模型，且硬件条件允许（支持 MoE 推理）的开发者而言，这是目前完成度最高、社区验证最充分的解决方案。