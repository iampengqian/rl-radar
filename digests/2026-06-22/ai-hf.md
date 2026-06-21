# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 22:22 UTC

---

### 🤖 Hugging Face 热门模型日报
**日期**：2026-06-22

---

#### 📰 1. 今日速览
本期 Hugging Face 趋势榜迎来了大模型底层架构和参数规模的全面迭代。**Qwen3.6** 与 **DeepSeek-V4** 等新世代架构成为榜单绝对主力，且参数规模正向 **MoE（混合专家模型）** 和 **3B-12B 极致端侧推理** 收敛。开源模型在多模态能力上突飞猛进，原生图像编辑、流式语音识别（ASR）和端到端 TTS 涌现大量高质量作品。此外，由 Unsloth 等社区驱动的 **GGUF 量化** 和 **无审查微调** 持续火热，反映了开发者对本地部署和去护栏能力的强烈需求。

---

#### 🔥 2. 热门模型分类

##### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,997 | ⬇️ 2,611,991
    *   **简介**: 深度求索的 V4 旗舰模型，以断层领先的点赞数和百万级下载量登顶，展现了其在复杂对话与推理上的绝对统治力。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 1,800 | ⬇️ 27,413
    *   **简介**: 智谱 AI 推出的新一代 GLM 基座，支持原生对话，凭借出色的中文理解与 MoE 架构迅速占据榜首梯队。
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,195 | ⬇️ 5,148,673
    *   **简介**: 通义千问最新的 35B 总参数/3B 激活参数 MoE 模型，下载量突破 500 万，是当前开源界性价比极高的全能基座。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,240 | ⬇️ 241,845
    *   **简介**: 英伟达推出的 3B 轻量级视觉定位模型，能够精准识别和定位图像中的任何目标，成为端侧多模态的新标杆。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 1,034 | ⬇️ 762,861
    *   **简介**: 谷歌将扩散模型与 Gemma 架构结合的创新之作，支持图文交互，下载量超 76 万，是生成式多模态的重大探索。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 609 | ⬇️ 27,275
    *   **简介**: 专为实时场景设计的超小型流式语音识别模型（0.6B），支持缓存感知，延迟极低，非常契合即时通讯需求。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 👍 505 | ⬇️ 76,120
    *   **简介**: 玻色造物推出的高拟真 4B TTS 模型，支持文本生成与语音克隆，在音频开源社区备受瞩目。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 556 | ⬇️ 20,277
    *   **简介**: 专注于数学推理的 3B 小模型，用极小的参数量实现了复杂的慢思考与逻辑推理能力。
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 👍 474 | ⬇️ 19,551
    *   **简介**: Cohere 基于自研 MoE 架构推出的轻量级、专为编程辅助优化的代码模型。
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   作者: LiquidAI | 👍 88 | ⬇️ 7,726
    *   **简介**: 采用 Liquid 架构的超紧凑型文本向量模型，旨在以极低的计算成本提供高质量的特征提取。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,077 | ⬇️ 3,966,691
    *   **简介**: 基于通义千问 3.6 的“无审查+激进”微调版本，移除了所有安全护栏，下载量近 400 万，反映了开源社区对模型绝对自由的渴望。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 2,076 | ⬇️ 358,677
    *   **简介**: 本期点赞量前三的社区神仙微调，将 Gemma-4 深度调优为本地终端编程神器，GGUF 格式让 12B 模型在消费级显卡上流畅运行。
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 👍 222 | ⬇️ 32,260
    *   **简介**: Unsloth 带来的 GLM-5.2 极致量化版，大幅降低了前沿大模型的显存门槛。

---

#### 📈 3. 生态信号
当前开源大模型生态正呈现出**“主干更新，枝叶繁茂”**的态势：
1. **模型家族势力洗牌**：**Qwen3.6** 与 **Gemma-4** 凭借出色的综合性能和 MoE 架构，已成为社区微调的新宠，风头盖过前代；DeepSeek-V4 与 GLM-5.2 则在超大参数与原生对话上稳扎稳打。
2. **端侧部署与量化狂热**：本期榜单超过 40% 为 GGUF 格式模型或由 Unsloth 等机构推出的量化版。开发者对在本地设备（如 Mac/PC）运行 10B-30B 级别 MoE 模型的需求极其旺盛。
3. **“无审查”运动持续发酵**：以 HauhauCS 为代表的 Uncensored 微调版获得了惊人的下载量，这表明在合规的企业级 API 之外，个人开发者对无限制、保护隐私的本地 AI 依然有着庞大的刚需。

---

#### 💡 4. 值得探索
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为本期当之无愧的“流量王”，如果你想体验当前开源 LLM 在复杂逻辑和深度对话上的最高水准，这是必试之作。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：它打破了传统 LLM 和扩散模型的边界。对于多模态研究员和开发者而言，这种将自回归与扩散架构融合的全新范式极具研究价值。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：强烈推荐给有本地写代码需求的程序员。结合了 Gemma-4 底座与深度编码微调，配合 GGUF 格式，在笔记本上即可获得极佳的 Agentic（智能体）编码体验。