# Hugging Face 热门模型日报 2026-06-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-20 22:22 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 6 月 21 日的数据为您整理而成。

### 📰 今日速览
1. **开源大模型进入“原生多模态与 Any-to-Any”时代**：以 Google `gemma-4-12B-it` 和 `diffusiongemma` 为代表，模型不再局限于文本，而是向图、文、音、视频统一处理演进。
2. **顶级开源巨头迭代交锋**：DeepSeek、智谱（GLM）和 Kimi 纷纷发布新一代旗舰级基础模型（V4、5.2、K2.7），在性能上持续向闭源模型施压。
3. **“ Агент（智能体）”与“去审查”成为社区核心驱动力**：基于 Qwen3.6 和 Gemma4 的系列微调模型霸榜，反映出开发者对极限编码能力、终端执行能力和无审查对话的强烈需求。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,982 | 📥 2,797,050
  - 一句话：社区热议的顶级开源大模型，凭借卓越的基础能力与对话表现，下载量与点赞数断层领先。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 1,678 | 📥 19,683
  - 一句话：智谱推出的新一代 MoE 架构文本生成模型，代表了国产开源大模型的前沿探索。
- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  - 作者: prefeitura-rio | 👍 326 | 📥 190,694
  - 一句话：基于 Qwen3.5 架构的 3970 亿参数超大杯开源模型，展现了地方政府（里约热内卢）推动开源大模型的魄力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,214 | 📥 235,606
  - 一句话：英伟达推出的高精度视觉定位多模态小模型，在细粒度图像理解任务上表现惊人。
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 👍 1,021 | 📥 673,464
  - 一句话：谷歌将 Diffusion 技术与 Gemma 结合的创新模型，支持图像文本到文本的多模态交互。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 1,104 | 📥 1,696,240
  - 一句话：谷歌最新 12B 统一模型，支持 Any-to-Any（任意模态转换），基础下载量极高。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,159 | 📥 85,771
  - 一句话：MiniMax 最新的视觉语言模型（VL），进一步强化了图文跨模态的理解能力。
- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 作者: zai-org | 👍 240 | 📥 0
  - 一句话：智谱推出的pose驱动图像到视频生成模型，主打高质量角色动画生成。
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** 
  - 作者: bosonai | 👍 496 | 📥 72,225
  - 一句话：基于 Qwen3 架构的 4B 多模态语音合成模型，代表了 TTS 与大语言模型的深度融合。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 582 | 📥 21,426
  - 一句话：英伟达发布的流式自动语音识别（ASR）模型，主打缓存感知与低延迟。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 506 | 📥 16,270
  - 一句话：微博 AI 推出的 3B 小参数模型，在数学推理与深度思考方面表现极其亮眼。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 242 | 📥 1,998
  - 一句话：微软推出的轻量级模型，特别针对“Explorer SubAgent”与长上下文快速处理进行了优化。
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
  - 作者: LiquidAI | 👍 80 | 📥 6,128
  - 一句话：LiquidAI 最新推出的 350M 轻量级句向量模型，适用于 RAG 架构中的高效知识检索。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,038 | 📥 3,812,636
  - 一句话：基于 Qwen3.6 MoE 的无审查社区微调版，狂揽超 380 万下载量，是本地部署玩家的新宠。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 1,974 | 📥 312,332
  - 一句话：针对编程与推理任务极限微调的 Gemma-4 量化版本，在终端代码助手领域极受欢迎。
- **[DavidAU/Qwen3.6-40B-Claude-4.6...GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 411 | 📥 587,521
  - 一句话：融合了多代 Claude Opus 风格、带“思维链”且解除限制的极限缝合量化模型。
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** & **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)**
  - 作者: unsloth | 👍 204 / 146
  - 一句话：顶尖的模型量化团队 unsloth 对最新发布的 GLM-5.2 和 Kimi-K2.7 进行的 GGUF 格式转化，大幅降低了部署门槛。

---

### 📈 生态信号
1. **基座模型家族的洗牌**：Qwen（3.5/3.6）生态依然在开源微调界占据绝对统治地位，尤其在 27B-40B 参数区间。同时，DeepSeek-V4、智谱 GLM-5.2、Kimi-K2.7 形成了新的“开源三巨头”格局，正快速抢占原本属于 Llama 系列的生态位。
2. **开源 vs 闭源**：开源权重模型正在“多模态原生”和“超长上下文”上反哺闭源社区。Google 直接开源了 Gemma-4 的 Any-to-Any 统一架构；同时，社区对“解除审查”的需求空前高涨，带动了数百万级别的恐怖下载量。
3. **GGUF 与终端执行**：本地部署趋势正从“能跑”向“好用”转变。带有 `agentic`（智能体）和 `terminal`（终端执行）标签的代码微调模型（如 `yuxinlu1` 系列）快速崛起，证明开发者迫切需要能直接在本地操作电脑/终端的强力小模型。

---

### 💡 值得探索
1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   - **理由**：作为 Any-to-Any 模型，其仅 12B 的参数量却支持跨模态生成，具有极高的研究价值和本地多模态 Agent 部署潜力。
2. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
   - **理由**：在小型参数（3B）下专攻数学与推理，非常适合需要轻量化、低延迟但要求高逻辑能力的应用场景（如边缘计算或前端思维链辅助）。
3. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
   - **理由**：微软针对性优化的 SubAgent 模型，若你正在搭建基于多智能体的工作流，它将是极其高效的节点调度与长文本处理选项。