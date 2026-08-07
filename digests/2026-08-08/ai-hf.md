# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 22:09 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-08-08

---

#### 📡 1. 今日速览
本周 Hugging Face Hub 迎来了**视频生成与多模态大模型的爆发**。MiniMaxAI 发布的 `MiniMax-H3` 模型引爆了图生视频生态，带动了海量周边 LoRA、量化版及 ComfyUI 工作流组件霸榜。语言模型方面，以 `DeepSeek-V4`、`Kimi-K3` 和 `GLM-5.2` 为代表的中国大模型持续展现出极强的开源统治力，在文本生成与多模态理解榜单上全面开花。此外，基于 `Qwen3.6` 和 `Qwen3-VL` 的社区无审查微调与量化版本需求依然极为旺盛。

---

#### 🔥 2. 热门模型

**🧠 语言模型（LLM、对话模型、指令微调）**
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | 作者: moonshotai | 👍 10,272 | 📥 1,308,186
  - *说明*: 本周点赞榜绝对的断层第一，月之暗面的最新多模态文本提取/生成神作，热度与下载量双丰收。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,886 | 📥 2,430,330
  - *说明*: 智源推出的 GLM 系列 MoE 架构最新旗舰，凭借庞大的下载量展现出极广泛的企业与开发者落地应用率。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | 作者: deepseek-ai | 👍 2,737 | 📥 702,709
  - *说明*: DeepSeek V4 系列的最新高频迭代版，主打轻量极速且支持多轮对话，是当前最受欢迎的基础基座之一。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 作者: deepseek-ai | 👍 2,060 | 📥 2,577,975
  - *说明*: DeepSeek V4 通用基础版，下载量惊人，生态兼容性极强。
- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** | 作者: LiquidAI | 👍 375 | 📥 77,973
  - *说明*: 非 Transformer 架构（Liquid架构）的轻量级模型，为边缘设备提供高效率的文本生成方案。
- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** | 作者: inclusionAI | 👍 202 | 📥 3,065
  - *说明*: 蚂蚁基金推出的混合专家模型，主打极速推理与会话能力。

**🎨 多模态与生成（图像、视频、音频、文本到X）**
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** | 作者: MiniMaxAI | 👍 2,939 | 📥 18,112
  - *说明*: 引爆本周视频生成圈的核弹级模型，支持高质量的文生视频与图生视频。
- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** | 作者: Comfy-Org | 👍 930 | 📥 3,139,920
  - *说明*: 官方节点单文件版，拥有超 300 万的惊人下载量，说明该模型已被无缝接入无数创作者的 ComfyUI 工作流。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 3,953 | 📥 2,836,694
  - *说明*: 百度推出的无限长文本/高分辨率图像 OCR 提取模型，完美解决复杂场景的文字识别痛点。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | 作者: microsoft | 👍 301 | 📥 456,140
  - *说明*: 微软视觉语言多模态力作，展现了强大的图文联合理解能力。
- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** | 作者: thinkingmachines | 👍 335 | 📥 25,340
  - *说明*: 轻量级多模态对话模型，适合资源受限设备上的图文交互场景。
- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** | 作者: Audio8 | 👍 305 | 📥 12,633
  - *说明*: 极小参数量（0.6B）的文本转语音预览模型，兼顾效率与音质。
- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** | 作者: nvidia | 👍 226 | 📥 359
  - *说明*: 英伟达推出的端到端语音对话模型，低延迟、高自然度，专为实时语音交互设计。
- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** | 作者: lodestones | 👍 221 | 📥 0
  - *说明*: 适配 Krea 风格的图像生成 LoRA，深受 ComfyUI 画师群体的喜爱。

**🔧 专用模型（代码、数学、医疗、嵌入）**
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 作者: Kwaipilot | 👍 530 | 📥 17,399
  - *说明*: 面向程序员的代码生成专用 MoE 模型，基于 Qwen 架构深度优化了编程与图文输入指令。
- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** | 作者: deepgrove | 👍 222 | 📥 686
  - *说明*: 预览版因果语言模型，主打 MoE 架构推理优化。
- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** | 作者: mistralai | 👍 183 | 📥 2,480
  - *说明*: Mistral 官方推出的安全护栏模型，专为检测拦截恶意 Prompt 和过滤内容设计。

**📦 微调与量化（社区微调、GGUF、AWQ）**
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 作者: DavidAU | 👍 1,704 | 📥 2,217,339
  - *说明*: 名字虽然冗长，但它是本周最火的去审查微调版，深受热衷于打破安全限制的玩家追捧。
- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** | 作者: unsloth | 👍 584 | 📥 161,253
  - *说明*: 满血支持本地 CPU/GPU 推理的量化版，大幅降低了部署 DeepSeek V4 的硬件门槛。
- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** | 作者: LuffyTheFox | 👍 426 | 📥 332,992
  - *说明*: 针对本地运行优化的 35B MoE 无审查版，融合了 Hermes 指令集，对话体验更自由流畅。
- **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** | 作者: Abiray | 👍 127 | 📥 452,420
  - *说明*: MiniMax-H3 视频模型的多精度极致量化版，让消费级显卡也能跑得动视频生成。
- **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** | 作者: LiquidAI | 👍 143 | 📥 31,489
  - *说明*: Liquid 架构轻量模型的量化版，进一步压缩体积以适配边缘端。

---

#### 📈 3. 生态信号
1. **模型家族势头**：**Qwen（通义千问）** 依然是社区底层基座的绝对霸主（衍生出 3.5, 3.6 等多种 MoE/VL 微调版）；同时**中国大模型厂商（DeepSeek、MiniMax、Moonshot、Baidu、Zhipu）** 几乎以碾压级的下载量和口碑占据了本周开源半壁江山。
2. **视觉生态大爆发**：`MiniMax-H3` 的发布引发了类似当初 Stable Diffusion 时代的“节点化狂欢”。榜单上出现了数十个基于它的量化版、Turbo 加速 LoRA、ComfyUI 适配版，说明**视频生成正式在本地工作流中落地**。
3. **“去审查”刚需**：社区对 `Uncensored`（如 Heretic 系列）模型的下载量居高不下，反映出大量个人玩家在追求更少限制、更原生的角色扮演（RP）与文本创作能力。
4. **量化技术演进**：除了传统的 GGUF，针对特定硬件架构的 `nvfp4`、`INT8` 甚至是多格式混合量化（如 ConvRot）开始成为高参数模型本地部署的标配。

---

#### 💡 4. 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - *理由*：解决了多模态模型在处理长图、复杂网页截图时文字提取断裂或幻觉的痛点。超 280 万的下载量证明它是目前最值得集成到数据流或 RAG 系统中的 OCR 工具。
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) (及配套生态)**
   - *理由*：本周视频生成的焦点。如果你是创作者或 AIGC 开发者，通过搭配其热门加速插件（如 `lightx2v/Minimax-h3-Turbo`），能立刻感受到开源模型在图生视频质量与运镜连贯性上的最新里程碑。
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - *理由*：以超万的点赞数登顶人气榜。Kimi 在长文本和特征提取上的实力有目共睹，K3 模型作为强大的多模态基座，非常值得研究人员和开发者进行深度测试与二次微调。