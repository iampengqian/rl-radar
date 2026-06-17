# Hugging Face 热门模型日报 2026-06-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-17 22:30 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期**：2026-06-18

---

### 🌤️ 今日速览
1. **开源基础模型迎来大爆发**：DeepSeek-V4-Pro 与 Qwen3.6 双双登上下载与点赞榜首，标志着新一代旗舰级开源大模型正全面接管开发者生态。
2. **端侧与量化成绝对主流**：以 Unsloth 为代表的社区全面推出基于 `GGUF` 和 `FP8` 的量化版本，Gemma 4 和 Qwen3.6 的各类轻量化变体霸榜。
3. **“去审查”微调需求激增**：带有 `uncensored`（无审查）标签的社区微调模型（如 HauhauCS 和 DavidAU 的作品）下载量突破数百万，反映开发者对模型高自由度定制的强烈渴望。
4. **全能与多模态加速落地**：从 Google 的 `diffusiongemma` 到语音模型（TTS/ASR），原生多模态和实时流式处理模型正在快速细分并成熟。

---

### 🔥 热门模型分类一览

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,920 | ⬇️ 2,804,646
  - 一句话说明：榜单绝对王者，新一代顶级开源对话与逻辑推理大模型，以碾压之势主导本期趋势。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 2,154 | ⬇️ 3,683,883
  - 一句话说明：阿里通义千问最新一代 35B 参数 MoE 架构模型，总下载量第一，是多语种对话与微调的绝佳基座。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 981 | ⬇️ 666
  - 一句话说明：智谱 AI 最新发布的旗舰级 MoE 对话模型，刚刚上线便凭借极高关注度冲入榜单前三。
- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  - 作者: prefeitura-rio | 👍 318 | ⬇️ 189,986
  - 一句话说明：基于 Qwen3.5 架构的 3970 亿参数超大微调模型，展示了开源界挑战千亿级参数的魄力。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 302 | ⬇️ 1,950
  - 一句话说明：微博 AI 推出的小巧深度思考（Math/Reasoning）模型，展现了小参数模型在复杂逻辑上的潜力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 👍 974 | ⬇️ 460,173
  - 一句话说明：谷歌结合扩散模型与 Gemma 架构的创新多模态大模型，支持图文交互与对话，下载量惊人。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,137 | ⬇️ 130,389
  - 一句话说明：英伟达的高精度视觉定位（目标检测）模型，以仅 3B 参数提供企业级的图像特征提取能力。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,059 | ⬇️ 42,198
  - 一句话说明：MiniMax 的最新视觉-文本多模态大模型，是全能型 AI Agent 的强力候选。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-0.6b)**
  - 作者: nvidia | 👍 518 | ⬇️ 7,195
  - 一句话说明：支持缓存感知的端到端流式语音识别（ASR）模型，专为实时对话场景设计。
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) / [Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)**
  - 作者: bosonai / Zyphra | 👍 477 / 106 | ⬇️ 40,812 / 629
  - 一句话说明：当前开源社区最炙手可热的的高拟真文本转语音（TTS）双雄，支持高度定制化发音。
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) / [zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 作者: ideogram-ai / zai-org | 👍 567 / 222 | ⬇️ 15,477 / 0
  - 一句话说明：前者为 FP8 优化的高质量文生图模型；后者是支持姿态驱动（Pose-driven）的图生视频扩散模型。

#### 🔧 专用模型（代码、数学、Agent）
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 844 | ⬇️ 172,727
  - 一句话说明：月之暗面专为编程优化的多模态模型，在代码补全和 Agent 任务上表现极其亮眼。
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 👍 420 | ⬇️ 13,449
  - 一句话说明：Cohere 推出基于 MoE 架构的轻量级代码助手，主打低延迟、高效率。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 184 | ⬇️ 537
  - 一句话说明：微软专为超长文本和上下文处理微调的小型模型，被打上了“Explorer SubAgent”标签，专为复杂工具调用设计。

#### 📦 微调与量化（社区微调、GGUF、无审查）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,929 | ⬇️ 2,876,624
  - 一句话说明：基于 Qwen3.6 的“激进型无审查”微调版，彻底解除安全限制，下载量超 285 万，证明社区对高自由度模型的庞大需求。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 1,450 | ⬇️ 146,784
  - 一句话说明：点赞榜第一！深度融合多个编程模型的 Gemma 4 12B GGUF 版本，专供本地代码开发者使用。
- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic...GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 380 | ⬇️ 427,359
  - 一句话说明：名字极长的“缝合怪”巨作，试图在本地端侧复刻 Claude Opus 的思考与编码体验。
- **[unsloth 矩阵](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** *(包含 unsloth/diffusiongemma, unsloth/Kimi-K2.7-Code, unsloth/MiniMax-M3, unsloth/gemma-4-12b-it 等)*
  - 作者: unsloth | 👍 总计过千 | ⬇️ 总计超 76 万
  - 一句话说明：Unsloth 团队化身“量化卷王”，几乎所有上榜的旗舰模型（Gemma4, Kimi, MiniMax）他们都在第一时间提供了即插即用的 GGUF 量化版。

---

### 📈 生态信号
当前开源大模型生态正围绕**两大中国巨头**展开：**Qwen（通义千问）** 和 **DeepSeek**。榜单上超过一半的微调和量化模型都基于 Qwen3.5/3.6 构建，其 MoE 架构被社区广泛接受为新一代标准基座。

同时，**“无审查”微调模型（Uncensored）** 正在迎来爆发，动辄数百万的下载量证明，开发者和极客群体对官方模型自带的安全护栏越来越感到不耐烦，追求绝对可控、不拒绝指令的本地模型成为一种核心刚需。

在部署端，**GGUF 和 FP8 量化技术**已经成为标配。以 Unsloth 为代表的社区基建力量，正在以前所未有的速度（几乎是发布即量化）将 30B~400B 的巨型模型压缩并搬进普通开发者的显卡中。

---

### 💡 值得探索
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由**：作为开源界目前的“版本答案”，它是替代 GPT-4/Claude 等昂贵闭源 API 的首选，其惊人的下载量证明了其在生产环境中的统治力，绝对值得一试。
2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
   - **理由**：将扩散模型的生成/理解能力与 LLM 的逻辑能力融合的先锋之作。如果你关注多模态前沿架构，这个模型提供了全新的研究思路。
3. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
   - **理由**：专为程序员设计，不仅支持纯代码，还融合了多模态特征提取能力。配合 Unsloth 的量化版，非常适合在本地部署为个人的全能编程副驾驶。