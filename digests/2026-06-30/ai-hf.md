# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-29 22:20 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-30)

## 1. 今日速览
今日的 Hugging Face Hub 呈现出**“全能智能体”与“极限量化”**双轮驱动的态势。Qwen（3.5/3.6 系列）和 Gemma 4 生态迎来大爆发，大量基于其底座的微调与量化版本霸榜，尤其在 9B-35B 参数区间备受开发者追捧。多模态能力持续向纵深发展，从通用的图文理解，延伸至无限制 OCR、精准目标定位以及流式语音识别等高度定制化的垂类任务。此外，DeepSeek-V4 的初步亮相，预示着新一轮基础模型架构迭代的开启。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 2,925 | ⬇️ 133,350
  *一句话说明*：新一代采用 MoE 架构的强大基础对话模型，凭借极高的原生性能横扫今日点赞榜榜首。
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 👍 211 | ⬇️ 5,460
  *一句话说明*：DeepSeek 最新一代 V4 系列的 Pro 版本，备受学术界和工业界瞩目。
- **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** | 作者: deepreinforce-ai | 👍 164 | ⬇️ 1,622
  *一句话说明*：参数量高达 397B 的庞大大语言模型，代表了开源社区在冲击极限模型规模上的最新尝试。
- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** | 作者: LiquidAI | 👍 150 | ⬇️ 15,463
  *一句话说明*：非 Transformer 架构（Liquid）的超轻量级模型，专为端侧和极致推理效率设计。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | 作者: microsoft | 👍 369 | ⬇️ 7,027
  *一句话说明*：微软推出的主打“超长上下文极速处理”的 4B 模型，特别适合作为子代理运行。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,359 | ⬇️ 362,945
  *一句话说明*：百度推出的突破性 OCR 模型，主打“无限制”高精度文本图像提取，解决了复杂场景文字识别痛点。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,476 | ⬇️ 728,320
  *一句话说明*：英伟达发布的 3B 轻量级视觉模型，可在任意场景中实现精准的目标检测与定位，下载数量惊人。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** & **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** | 作者: krea | 👍 392/244 | ⬇️ 38,454/27,464
  *一句话说明*：备受期待的 Krea 第二代文生图模型，Turbo 版主打极致生成速度，Raw 版主打高保真原始画质。
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** | 作者: fal | 👍 114 | ⬇️ 0
  *一句话说明*：基于 LTX 视频生成器的 LoRA，专注于生成具有极强 3D 质感和真实感的动态视频。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 👍 741 | ⬇️ 76,154
  *一句话说明*：英伟达推出的超低延迟流式语音识别（ASR）模型，为实时人机语音交互提供强力支持。

### 🔧 专用模型（代码、数学、Agent）
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | 作者: Qwen | 👍 432 | ⬇️ 26,223
  *一句话说明*：阿里 Qwen 团队专为大模型自主代理设计的模型，强调工具调用与外部世界交互能力。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | 作者: WeiboAI | 👍 748 | ⬇️ 63,449
  *一句话说明*：基于 Qwen2 微调的 3B 小模型，在数学推理和逻辑思考（思维链）方面表现极其亮眼。
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | 作者: Chunjiang-Intelligence | 👍 129 | ⬇️ 1,463
  *一句话说明*：基于 DeepSeek-V4 深度定制的网络安全与攻防垂类大模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,330 | ⬇️ 3,089,944
  *一句话说明*：完全解除审查限制的 Qwen 3.6 MoE 微调版，因响应直接、无道德限制而受到社区狂热追捧（下载量全榜第一）。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 👍 2,499 | ⬇️ 561,577
  *一句话说明*：针对编程任务极致优化的 Gemma 4 量化版本，是本地代码助手的首选。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 934 | ⬇️ 907,682
  *一句话说明*：融合了 Qwen3.5 与“Claude 风格”的 100 万上下文量化模型，兼具超长记忆与出色对话体验。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | 作者: nvidia | 👍 378 | ⬇️ 5,392,518
  *一句话说明*：英伟达官方出品的 NVFP4 极限压缩量化版，让 35B 的 MoE 大模型能在消费级显卡上流畅运行。
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | 作者: unsloth | 👍 464 | ⬇️ 164,180
  *一句话说明*：Unsloth 迅速跟进的 GLM-5.2 的量化版，进一步降低了部署该顶配模型的硬件门槛。

---

## 3. 生态信号
当前开源模型生态正围绕**“轻量化 MoE”**与**“全能 Agent 化”**快速演进。**Qwen 家族**势头最盛，其 3.5 与 3.6 架构已成为各大社区团队做微调和量化的首选基石；同时，**Gemma 4 (12B)** 在端侧编程与终端代理领域占据了绝对主导地位。

在开源 vs 闭源的博弈中，**开源权重模型正加速向“完全无限制”演进**，以 HauhauCS 为代表的 Uncensored 微调版下载量动辄数百万，反映了企业级与极客开发者对数据隐私和去中心化审查的强烈需求。

硬件生态方面，**NVIDIA 的 NVFP4 量化技术**正深刻改变大模型的落地范式，它让 35B 级别的模型获得了消费级硬件的广泛兼容性，配合 GGUF 等格式，本地运行企业级大模型已不再是奢望。

---

## 4. 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *推荐理由*：打破传统 OCR 的长度、排版和清晰度限制。对于需要处理复杂长图表、扫描文档或建立本地 RAG 系统的开发者来说，这是一个革命性的基础组件。
2. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   *推荐理由*：想体验顶级 MoE 模型但苦于显存不足？这个模型展示了 NVFP4 量化的恐怖效率，是 4090/5090 等消费级显卡跑 30B+ 大模型的最佳实践样本。
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   *推荐理由*：针对 Coding 专门微调，非常适合搭配 Llama.cpp 本地运行，作为 VS Code 或 JetBrains 的隐私级 AI 结对编程助手。