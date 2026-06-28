# Hugging Face 热门模型日报 2026-06-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-28 22:18 UTC

---

### 《Hugging Face 热门模型日报》

#### 📌 今日速览
本期 Hugging Face 榜单迎来了开源大模型生态的重大升级。**Qwen3.5/3.6** 与 **Gemma-4** 架构成为各大厂商和社区微调的绝对基底，尤其在代码、智能体和无审查版本上爆发。多模态能力持续深化，百度发布了打破边界限制的 `Unlimited-OCR`，英伟达则推出了精准的视觉定位模型 `LocateAnything-3B`。此外，本地量化推理（GGUF/NVFP4）和去审查微调需求高涨，标志着开源模型在实用化和个性化部署上迈入新阶段。

---

### 🚀 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 2,800 | 下载: 118,651
  - 说明: 采用全新混合专家架构的强大对话模型，热度极高，标志着 GLM 系列的强力回归。
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
  - 作者: deepseek-ai | 点赞: 173 | 下载: 373
  - 说明: DeepSeek 最新发布的 V4 系列旗舰文本生成模型，社区正密切关注其性能突破。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 点赞: 368 | 下载: 6,779
  - 说明: 基于 Qwen3 的小型化模型，主打超长上下文处理的极速响应与子智能体协作。
- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
  - 作者: LiquidAI | 点赞: 141 | 下载: 12,384
  - 说明: 超小型化 (230M) 的液态神经网络模型，专为端侧设备和极低资源边缘部署设计。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 1,223 | 下载: 295,064
  - 说明: 百度推出的无限制 OCR 模型，能从图像中高效提取海量文本，下载量惊人。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 点赞: 2,432 | 下载: 646,451
  - 说明: 英伟达发布的 3B 级视觉定位大模型，在图像特征提取与目标定位上表现卓越。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMax-M3)**
  - 作者: MiniMaxAI | 点赞: 1,260 | 下载: 188,314
  - 说明: MiniMax 最新推出的多模态视觉语言大模型，具备强大的图文理解能力。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
  - 作者: krea | 点赞: 351 | 下载: 27,631
  - 说明: 极具人气的 Krea-2 图像生成模型的加速版本，主打高质量和高并发生成。
- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
  - 作者: fal | 点赞: 91 | 下载: 0
  - 说明: 基于 LTX 视频模型的 LoRA，专注于生成具有极强 3D 质感和真实感的动态视频。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 732 | 下载: 67,419
  - 说明: 专为实时流式语音识别设计的高效 ASR 模型，支持低延迟语音转文本。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
  - 作者: Qwen | 点赞: 397 | 下载: 23,697
  - 说明: Qwen 团队专门打造的智能体专用模型，具备强大的工具调用与世界模型推理能力。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 点赞: 743 | 下载: 59,337
  - 说明: 基于 Qwen2 微调的轻量级数学推理专用模型，在数学评测中表现亮眼。
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
  - 作者: Chunjiang-Intelligence | 点赞: 123 | 下载: 1,409
  - 说明: 基于 DeepSeek-V4 架构的特化模型，专用于网络安全攻防场景分析。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 2,301 | 下载: 3,248,724
  - 说明: 社区去审查版本的视觉 MoE 模型，下载量突破 320 万，成为本地部署的绝对爆款。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 776 | 下载: 831,529
  - 说明: 融合了 Claude 风格且支持 100 万上下文的 Qwen3.5 GGUF 量化版，极受本地玩家欢迎。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 点赞: 2,470 | 下载: 549,926
  - 说明: 专为代码编写和终端 Agent 调优的 Gemma-4 量化版，是开发者的本地利器。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
  - 作者: nvidia | 点赞: 369 | 下载: 5,235,413
  - 说明: 英伟达使用 ModelOpt 工具对热门的 Qwen3.6 MoE 进行的官方 NVFP4 量化版，下载量超 500 万，兼顾显存与速度。

---

### 📊 生态信号

当前开源模型生态呈现三大显著趋势：
1. **基座格局洗牌：** 阿里 **Qwen3.5/3.6** 和谷歌 **Gemma-4** 已成为新一代“开源万物之源”。几乎所有热门的代码、数学、智能体乃至去审查模型，均基于这两个基座衍生。DeepSeek-V4 也展现出强劲势头。
2. **本地部署狂热：** 本周榜单近一半为量化版本。**NVFP4** 等新量化格式正挑战 GGUF 的绝对地位，大幅降低了百亿参数级 MoE 模型的显存门槛。下载量超百万的模型均与此相关。
3. **去审查与垂直化：** 社区对“Uncensored（无审查）”模型的呼声极高，多模态无审查模型成为个人玩家的刚需。同时，AI 正向细分领域极速渗透，出现了专攻网络安全、视觉坐标定位和流式语音的特化模型。

---

### 💡 值得探索

1. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **推荐理由：** 作为拥有超 320 万下载量的“版本答案”，它是体验最新 Qwen3.6 MoE 架构与完全无审查多模态交互的最佳选择，非常适合本地高自由度角色扮演和图像探讨。
2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
   - **推荐理由：** 如果你对构建 AI 工作流和智能体感兴趣，这是必试模型。它原生针对工具调用和世界模型设计，能极大提升基于开源权重的 Agent 任务成功率。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **推荐理由：** 传统 OCR 技术向 VLM 演进的典范。它不仅下载量巨大，且主打“无限制”，非常适合需要处理超长密文、复杂排版或图表的研发者替换旧的 OCR 管道。