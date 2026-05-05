# Hugging Face 热门模型日报 2026-05-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-05 22:17 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-06)

## 1. 今日速览
本期 Hugging Face 热门榜单迎来了基础大模型的集中爆发，以 DeepSeek-V4 系列、Qwen3.6 系列以及 Google Gemma-4 为代表的头部模型占据了绝对热度。多模态能力已逐渐成为新一代开源模型的“标配”，视觉、语音等多模态模型占据了榜单的半壁江山。此外，在端侧部署、极低比特量化以及“去对齐/无审查”微调方向上，社区展现出了极其旺盛的创造力与实际需求。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 点赞: 3,575 | 下载: 631,499
  - 一句话说明：新一代 DeepSeek 核心基座模型，以极高的点赞数登顶本周榜单，展现了其强悍的文本生成与对话能力。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 点赞: 952 | 下载: 560,958
  - 一句话说明：V4 系列的轻量级版本，主打极高的吞吐量和性价比，适合大规模快速推理。
- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
  - 作者: mistralai | 点赞: 268 | 下载: 15,024
  - 一句话说明：Mistral 最新推出的 1280 亿参数中体量模型，支持英法双语，备受开发者关注。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 点赞: 437 | 下载: 13,317
  - 一句话说明：小米开源的强推理模型，主打 Agent 智能体与长上下文处理能力。
- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)** & **[granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**
  - 作者: ibm-granite | 点赞: 155 / 99 | 下载: 19,605 / 5,527
  - 一句话说明：IBM 企业级 Granite 架构的最新迭代，针对企业级应用与商用场景进行了深度优化。
- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
  - 作者: poolside | 点赞: 218 | 下载: 12,027
  - 一句话说明：专为代码生成与软件开发任务优化的高性能小参数量模型。

### 🎨 多模态与生成（图像、视频、音频）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 2,521 | 下载: 8,206,643
  - 一句话说明：Google 排名第一的开源多模态重磅模型，支持图文理解，下载量惊人。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 点赞: 1,625 | 下载: 2,884,820
  - 一句话说明：MoE 架构的视觉语言多模态模型，激活参数极低但性能强悍。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 点赞: 1,203 | 下载: 892,962
  - 一句话说明：月之暗面 Kimi 的最新多模态模型，采用压缩张量技术，在长上下文上表现优异。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 点赞: 1,126 | 下载: 1,458,973
  - 一句话说明：通义千问旗舰级多模态模型，在视觉理解与对话能力上进一步提升。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 点赞: 241 | 下载: 44,631
  - 一句话说明：英伟达全模态 (Omni) 稀疏模型，专为复杂推理任务设计。
- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)**
  - 作者: XiaomiMiMo | 点赞: 212 | 下载: 57,759
  - 一句话说明：MiMo V2.5 多模态基座，具备强大的视觉和音频理解能力。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 点赞: 227 | 下载: 37,897
  - 一句话说明：高质量的视频生成基础模型，进一步丰富了开源视频生成生态。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 点赞: 153 | 下载: 3,262
  - 一句话说明：专注于动漫风格的高质量文生图模型。
- **[ibm-granite/granite-speech-4.1-2b](https://huggingface.co/ibm-granite/granite-speech-4.1-2b)**
  - 作者: ibm-granite | 点赞: 68 | 下载: 18,894
  - 一句话说明：IBM 开源的多语种语音识别模型，填补了企业级开源 ASR 的空白。

### 🔧 专用模型（代码、数学、嵌入、翻译）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 点赞: 1,296 | 下载: 141,317
  - 一句话说明：OpenAI 发布的隐私过滤与实体识别模型，展现了在数据安全领域的最新尝试。
- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
  - 作者: sensenova | 点赞: 153 | 下载: 2,179
  - 一句话说明：商汤基于多任务优化技术的全模态专用模型。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 点赞: 93 | 下载: 16,370
  - 一句话说明：极限 1.25bit 量化的小型机器翻译专用模型，突破端侧部署内存极限。
- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**
  - 作者: ibm-granite | 点赞: 80 | 下载: 3,104
  - 一句话说明：基于 ModernBERT 架构的超轻量级多语言文本嵌入模型，适合 RAG 系统构建。
- **[inclusionAI/Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash) & **[Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**
  - 作者: inclusionAI | 点赞: 457 / 410 | 下载: 1,310 / 1,062
  - 一句话说明：蚂蚁集团最新推出的万亿/轻量级混合架构语言模型，在复杂任务上潜力巨大。

### 📦 微调与量化（社区微调、GGUF）
- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 点赞: 1,475 | 下载: 195,870
  - 一句话说明：社区针对 Gemma-4 的“去对齐/无审查”版本，打破了模型的安全护栏限制。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 点赞: 581 | 下载: 1,147,196
  - 一句话说明：Unsloth 官方提供的 Qwen3.6 量化版，让普通消费级显卡也能流畅运行多模态大模型。
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 点赞: 926 | 下载: 2,243,715
  - 一句话说明：Qwen3.6 MoE 模型的 GGUF 量化版，凭借高性价比获得了超两百万的下载量。
- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
  - 作者: z-lab | 点赞: 239 | 下载: 24,768
  - 一句话说明：针对底层推理加速优化的 Flash 注意力机制微调版本。
- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**
  - 作者: Jackrong | 点赞: 83 | 下载: 68,132
  - 一句话说明：极具实验精神的社区交叉微调作品，尝试融合 Qwen 与 DeepSeek 的优势。

---

## 3. 生态信号
本周模型生态呈现出三大趋势：**Qwen 家族势头极其强劲**，从 9B 到 35B 的多模态和 MoE 模型霸榜下载量榜首，证明了其在开源多模态领域的王者地位。**“百模大战”进入 MoE 与多模态深水区**，DeepSeek、Nvidia、小米等一致采用 MoE 稀疏架构来平衡性能与推理成本，且“多模态/全模态”已成大模型标配。此外，**开源与端侧部署持续繁荣**，Unsloth 等提供的 GGUF 量化版本下载量动辄破百万；同时 `dealignai` 提供的去安全审查微调版本（CRACK）大受欢迎，侧面反映出开发者对 LLM 边界探索及高自由度输出的强烈需求。

---

## 4. 值得探索
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)**：英伟达推出的 Omni（全模态）模型，仅激活 3B 参数却拥有 30B 级别的推理能力，且采用了最新的 NVFP4 量化格式。对于想在本地部署跨模态（视觉/语音等）复杂推理系统的开发者来说，是极佳的探索对象。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**：单周超 820 万次的恐怖下载量，配以优秀的多模态对齐效果。它目前是评估新基座模型能力、进行二次微调的黄金标准。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**：极限 1.25bit 量化技术。将大模型压缩至此级别依然能保持翻译能力，这对于探索边缘计算（如智能手表、极低端 IoT 设备）运行大模型的开发者而言，具有极高的参考价值。