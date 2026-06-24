# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 22:25 UTC

---

### 🗞️ Hugging Face 热门模型日报（2026-06-25）

#### 📌 今日速览
今日 Hugging Face 社区迎来开源大模型的“狂欢”。**DeepSeek-V4-Pro** 榜首霸权稳固，智谱的 **GLM-5.2** 系列凭借创新的混合专家（MoE）与量化版本（FP8）强势霸榜。AI 智能体与编程模型迎来爆发，**yuxinlu1** 基于 Gemma-4 的社区微调版下载数量惊人。此外，多模态与垂直领域表现亮眼，百度推出无限长图 OCR 模型，英伟达开源目标检测视觉大模型，Krea 则持续在图像生成端发力。

---

#### 🔥 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  👤 作者: deepseek-ai | 👍 5,046 | ⬇️ 2,052,463
  💬 *说明*：基础能力登顶的顶级开源对话模型，凭借卓越的综合性能和超 200 万的下载量稳居生态核心。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  👤 作者: zai-org | 👍 2,347 | ⬇️ 57,186
  💬 *说明*：智谱最新一代旗舰大模型，采用全新 `glm_moe_dsa` 架构，以极高的社区点赞数成为今日最受瞩目的开源新星。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-A3B-Uncensored)**
  👤 作者: HauhauCS | 👍 2,202 | ⬇️ 3,769,369
  💬 *说明*：基于 Qwen3.6 的 35B MoE 无审查视觉语言模型，彻底释放模型自由度，下载量断层领先。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  👤 作者: MiniMaxAI | 👍 1,228 | ⬇️ 143,093
  💬 *说明*：MiniMax 的新一代旗舰多模态模型（VL），兼具文本与图像深度理解能力。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  👤 作者: google | 👍 1,162 | ⬇️ 2,114,441
  💬 *说明*：谷歌最新发布的高性能小尺寸模型，支持 Any-to-Any 全模态，是当前社区微调的绝佳基座。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  👤 作者: nvidia | 👍 2,344 | ⬇️ 359,498
  💬 *说明*：英伟达推出的超轻量级目标定位视觉大模型，以仅 3B 的体积实现精准的视觉特征提取。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  👤 作者: baidu | 👍 717 | ⬇️ 45,687
  💬 *说明*：百度开源的全新 OCR 神器，打破长图和复杂版式的分辨率限制，直击传统痛点。
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  👤 作者: google | 👍 1,060 | ⬇️ 1,036,328
  💬 *说明*：融合 Diffusion 与 LLM 架构的跨界模型，展现了原生多模态生成的强大潜力。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) & [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**
  👤 作者: krea | 👍 180 / 153 | ⬇️ 878 / 1,205
  💬 *说明*：Krea 带来的极速版与写实版图像生成双引擎，在出图质量和推理延迟上取得极佳平衡。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** & **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**
  👤 作者: nvidia / owensong | 👍 677 / 191
  💬 *说明*：语音赛道双星，前者主打缓存感知的极致流式语音识别（ASR），后者主打超小型语音合成（TTS）。

##### 🔧 专用模型（代码、数学、Agent、嵌入）
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  👤 作者: moonshotai | 👍 984 | ⬇️ 480,013
  💬 *说明*：月之暗面推出的专用编程大模型，采用张量压缩技术，兼顾了强悍的代码能力与部署效率。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  👤 作者: WeiboAI | 👍 691 | ⬇️ 49,569
  💬 *说明*：基于 Qwen2 架构的小型数学推理模型，参数虽小但“思考”能力出众。
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** & **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
  👤 作者: LiquidAI | 👍 119 / 88
  💬 *说明*：LiquidAI 放出的新一代文本向量化全家桶，在 RAG 检索与相似度计算赛道提供高性价比选择。
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** & **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  👤 作者: Qwen / microsoft | 👍 127 / 335
  💬 *说明*：大厂押注 Agent 赛道，Qwen 推出专属智能体模型，微软则推出长文本加速子智能体（FastContext）。

##### 📦 微调与量化（社区微调、GGUF、FP8）
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  👤 作者: yuxinlu1 | 👍 2,292 | ⬇️ 483,139
  💬 *说明*：专治编程与推理的 Gemma-4 社区魔改 GGUF 版，将消费级硬件的代码能力榨干。
- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** & **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  👤 作者: zai-org / unsloth | 👍 157 / 343 | ⬇️ 445,304 / 76,971
  💬 *说明*：新晋顶流 GLM-5.2 的官方与社区量化版，大幅降低本地与边缘端显存门槛。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  👤 作者: empero-ai | 👍 338 | ⬇️ 63,637
  💬 *说明*：融合“类 Claude”风格的微调量化版，支持 100 万超长上下文，深受开发者喜爱。

---

#### 📈 生态信号
今日的 Hub 生态呈现三大显著趋势：
1. **超小参数 MoE 与量化正在接管长尾应用**：榜单中大量充斥 3B~12B 的视觉、编程和声学模型（如 LocateAnything-3B、VibeThinker-3B、yuxinlu1 的 GGUF），结合 FP8/GGUF 等高效量化技术，边缘端和消费级显卡已能流畅运行高度专业化的智能体。
2. **开源模型家族迭代白热化**：DeepSeek-V4 稳居下载霸主，智谱 GLM-5.2 成为新晋顶流。Qwen3.5/3.6 枝繁叶茂，不仅拓展出 MoE、Agent 专属版本，更是成为社区“无审查”和“长文本”微调的核心基座。
3. **交互模态走向纵深**：AI 正在打破文本边界。百度“无限 OCR”和英伟达的流式 ASR 解决了长文本和实时语音的核心痛点，而谷歌的 `diffusiongemma` 则预示着大语言模型架构与生成模型的融合（Any-to-Any）正逐渐成为主流标准。

---

#### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *推荐理由*：解决了多模态大模型处理超长图片（如网页、财报长截图）时分辨率截断的老大难问题。对需要搭建复杂文档处理 RAG 系统的开发者极具吸引力。
2. **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
   *推荐理由*：作为近期热度最高的模型之一，FP8 版本大幅削减了显存需求，是当下在本地或企业级算力集群中体验最新一代 MoE 旗舰能力性价比最高的途径。
3. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
   *推荐理由*：由微软推出的“子智能体”模型，主打上下文解析加速。对于开发复杂 Agent 工作流或需要频繁处理海量提示词的工程师来说，这是一个极其巧妙的效率工具。