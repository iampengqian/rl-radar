# Hugging Face 热门模型日报 2026-06-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-13 22:20 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-06-14)

### 📡 今日速览
今日的 Hugging Face Hub 迎来了**多模态与全能模型的全面爆发**。Google 新发布的 **Gemma 4** 家族（特别是 12B 版本）展现出极强的统治力，原生支持 Any-to-Any，迅速登顶下载与点赞榜首；开源社区紧随其后，围绕其进行的 GGUF 量化、去审查微调呈现井喷之势。此外，**DeepSeek-V4-Pro** 以超高人气证明了开源 MoE 架构在纯文本领域的持续统治力，而图像生成与音频流式处理领域也有如 Ideogram 4 和 Magenta 等重磅选手登场。

---

### 🔥 热门模型盘点

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  作者: deepseek-ai | 👍 4,812 | ⬇️ 3,250,404
  *说明: 榜单绝对人气王者，DeepSeek 最新一代超大规模对话与文本生成模型，下载量破百万，展现了顶尖开源 LLM 的超高热度。*
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  作者: google | 👍 993 | ⬇️ 1,005,883
  *说明: 谷歌最新发布的百亿级“统一架构”模型，原生支持 Any-to-Any，兼顾性能与极高的可玩性，备受瞩目。*
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  作者: CohereLabs | 👍 353 | ⬇️ 6,533
  *说明: Cohere 推出的轻量级、专为代码与日常对话优化的 MoE 模型，主打高效与实用。*
- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**
  作者: XiaomiMiMo | 👍 105 | ⬇️ 3,590
  *说明: 小米推出的新一代 Agent（智能体）专属文本生成模型，采用 DFlash 极致压缩技术。*
- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  作者: prefeitura-rio | 👍 81 | ⬇️ 5,943
  *说明: 基于 Qwen3.5 MoE 架构的 3970 亿参数海量级开源对话模型，体现了开源社区对大参数 MoE 的持续热情。*

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者: nvidia | 👍 1,956 | ⬇️ 69,443
  *说明: NVIDIA 推出的小参数级视觉神器，专攻图像特征提取与任意目标定位，点赞量高居前三。*
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  作者: google | 👍 701 | ⬇️ 92,080
  *说明: 谷歌将 Gemma 架构与扩散模型巧妙融合，打通了多模态对话与生成的边界。*
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  作者: ideogram-ai | 👍 516 | ⬇️ 6,535
  *说明: Ideogram 最新一代旗舰文生图大模型，FP8 格式发布，在文字渲染与图像理解上表现惊艳。*
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者: moonshotai | 👍 509 | ⬇️ 1,689
  *说明: 月之暗面 Kimi 最新代码版多模态模型，具备强大的图文理解与视觉特征提取能力。*
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  作者: bosonai | 👍 412 | ⬇️ 32,162
  *说明: 玻色推想发布的 4B 参数级最新端到端高质量语音合成（TTS）模型。*
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
  作者: ByteDance | 👍 235 | ⬇️ 426
  *说明: 字节跳动推出的图生视频渲染器，支持精准的文图联合驱动视频生成。*

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  作者: MiniMaxAI | 👍 411 | ⬇️ 1,031
  *说明: MiniMax 专为下一代多模态视觉与交互任务定制的 M3 核心基座模型。*
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  作者: nvidia | 👍 400 | ⬇️ 3,975
  *说明: NVIDIA 推出的超低延迟流式自动语音识别模型，支持缓存感知，极适合实时端侧部署。*
- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
  作者: google | 👍 187 | ⬇️ 7,331
  *说明: 谷歌实时高质量文本到音频生成模型，为音乐与音效生成提供实时反馈。*

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者: HauhauCS | 👍 1,760 | ⬇️ 2,411,202
  *说明: 基于通义千问 Qwen3.6 视觉 MoE 的“无限制去审查”激进版微调，社区下载量突破 240 万。*
- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
  作者: unsloth | 👍 245 | ⬇️ 42,885
  *说明: Unsloth 带来的 DiffusionGemma 量化版，让普通消费级设备也能跑通多模态大模型。*
- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)**
  作者: Jackrong | 👍 154 | ⬇️ 11,291
  *说明: 融合 Qwen3.6 与 Opus 精华的 27B 纯代码能力增强 GGUF 量化版。*

---

### 📈 生态信号
1. **新架构家族势头正旺**：榜单被三大巨头家族霸屏。**Gemma 4** 凭借原生 Any-to-Any 和极具竞争力的参数量级（12B-26B），引发社区狂热跟进；**DeepSeek V4** 持续巩固其在超大规模纯文本及代码领域的地位；Qwen 3.5/3.6 生态则通过开源社区的“MoE+Uncensored”路线向视觉、代码等垂直领域疯狂渗透。
2. **开源 vs 闭源趋势**：开源社区正在彻底接纳并普及**“全能统一”**范式。业界已经不再满足于单一的“文本生成”，音频、视频、图像理解能力正加速被整合进 10B-30B 这种最适合私有化部署的中等参数模型中。
3. **量化与微调动向**：**Unsloth** 依然稳坐 GGUF 与 QAT 量化的第一把交椅，确保 Gemma 4 家族在发布初期就能迅速适配各类边缘计算设备。同时，“去审查 / 去对齐”微调需求依旧旺盛（如 `OBLITERATED`、`Uncensored`），说明高阶开发者对模型的无缝调用与创意自由度有刚性需求。

---

### 💡 值得探索
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  *理由*: 作为基础爆款，它兼顾了多模态理解与生成能力，且对显存相对友好。无论是直接部署体验最新技术，还是作为基座模型进行二次微调，都是目前的绝佳选择。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  *理由*: 拥有超 240 万的下载量，证明了其极高可用性。如果你需要一个完全解除安全限制、响应直接且支持视觉多模态的私人助手，该模型是社区目前给出的最优解。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  *理由*: 抛弃了动辄几十B的大模型路线，NVIDIA 用仅 3B 的参数实现了强悍的图像目标定位与特征提取能力，对于 CV 研究者和工控机/移动端开发者而言，是极其难得的利器。