# Hugging Face 热门模型日报 2026-04-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-25 22:06 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-04-26)

## 📰 今日速览
今日 Hugging Face 趋势榜单由**多模态大模型**与**深度推理微调**主导。DeepSeek 正式发布了 V4 系列的 Pro 和 Flash 版本，凭借强悍的文本生成能力占据榜单头部。阿里 Qwen3.6 系列不仅官方多模态模型热度居高不下，其 MoE 架构（35B-A3B）更成为社区“爆改”和蒸馏推理能力的首选底座。此外，多模态生成领域迎来多点开花，腾讯的 3D 世界模型、百度文生图模型以及 OpenBMB 的语音生成模型均表现亮眼。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、基座）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 作者: deepseek-ai | 👍 2,675 | ⬇️ 78,864
  - DeepSeek 最新一代参数密集型大模型，性能强悍，登顶今日点赞榜。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 作者: deepseek-ai | 👍 684 | ⬇️ 25,391
  - V4 系列的轻量高速分支，采用 MIT 开源协议，兼顾性能与推理成本。
- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | 作者: zai-org | 👍 1,512 | ⬇️ 217,889
  - GLM 系列最新迭代，采用了创新的 MoE-DSA 架构，下载量表现优异。
- **[MiniMaxai/MiniMax-M2.7](https://huggingface.co/MiniMaxai/MiniMax-M2.7)** | 作者: MiniMaxai | 👍 1,065 | ⬇️ 477,205
  - MiniMax 新一代强力文本生成模型，上线即获近 50 万次下载，社区反响热烈。
- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | 作者: tencent | 👍 143 | ⬇️ 2,982
  - 腾讯混元系列最新文本生成模型预览版。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | 作者: moonshotai | 👍 1,024 | ⬇️ 291,840
  - Kimi 最新多模态模型，支持视觉与文本输入，采用压缩张量技术优化显存。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | 作者: Qwen | 👍 809 | ⬇️ 257,685
  - 通义千问 3.6 版本官方多模态模型，视觉与文本对话能力大幅增强。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 作者: Qwen | 👍 1,402 | ⬇️ 1,027,741
  - Qwen 极其火爆的 MoE 多模态架构，以极低的激活参数量（3B）实现 35B 级别性能。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 2,358 | ⬇️ 5,770,677
  - 谷歌 Gemma 4 代多模态指令微调模型，今日下载量突破 570 万，统治级生态扩散。
- **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | 作者: openbmb | 👍 1,234 | ⬇️ 97,967
  - 高质量多语言语音合成（TTS）模型，填补了开源社区优质语音生成的空白。
- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | 作者: baidu | 👍 562 | ⬇️ 7,517
  - 百度 ERNIE 文生图 8B 模型，Apache 2.0 协议完全开源，高质量图像生成新选择。
- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | 作者: tencent | 👍 601 | ⬇️ 2,851
  - 腾讯推出的图像到 3D 世界生成模型，展现了空间智能的前沿探索。
- **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | 作者: nvidia | 👍 271 | ⬇️ 540
  - 英伟达最新的图像转 3D 世界模型，主打高质量的 3D 资产生成。
- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | 作者: inclusionAI | 👍 175 | ⬇️ 281
  - 支持任意到任意模态生成的统一模型，底层采用 MoE 架构。

### 🔧 专用模型（代码、数学、医疗、分类、隐私）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | 作者: openai | 👍 748 | ⬇️ 21,097
  - OpenAI 发布的 Token 级分类模型，专用于数据清洗中的隐私信息过滤与脱敏。

### 📦 微调与量化（社区微调、GGUF、基座）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 作者: unsloth | 👍 762 | ⬇️ 1,488,984
  - Qwen3.6 MoE 的 GGUF 量化版，下载近 150 万次，极大地推动了端侧和本地部署。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | 作者: unsloth | 👍 402 | ⬇️ 458,273
  - 满血版 27B 多模态模型的 GGUF 量化版，本地视觉推理首选。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 429 | ⬇️ 418,743
  - 基于 Qwen MoE 的“激进去审查”版本，满足社区对无限制对话模型的需求。
- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | 作者: OBLITERATUS | 👍 501 | ⬇️ 110,832
  - Gemma-4 的去审查微调版，社区玩家解锁模型输出的经典案例。
- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | 作者: hesamation | 👍 181 | ⬇️ 104,757
  - 将 Claude 4.6 Opus 的深度推理能力蒸馏到 Qwen3.6 MoE 底座上，热度极高。
- **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | 作者: Jackrong | 👍 204 | ⬇️ 73,177
  - 融合了 Qwen、Opus 与 GLM 特性的 18B Frankenmerge（缝合怪）模型，主打复杂推理。
- **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)** & **[Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)** | 作者: deepseek-ai | 👍 362+ | ⬇️ 2,670
  - DeepSeek V4 系列的 FP8 原始基座权重，为社区后续的垂直领域微调提供底座。

---

## 📈 生态信号

**模型家族势头：** 榜单几乎被 Qwen3.6、DeepSeek-V4 和 Gemma-4 三大开源家族包揽。Qwen3.6 凭借极具性价比的 MoE 架构（35B-A3B）成为社区绝对的“基建狂魔”；DeepSeek-V4 则在基座能力上保持领先。

**开源趋势：** 头部大厂（Google、DeepSeek、Baidu）正加大开源力度。百度 ERNIE-Image 采用 Apache 2.0 协议，DeepSeek 提供 MIT 协议的 Flash 版本和 FP8 基座，显示出开源权重对闭源 API 的压迫感日益增强。

**微调与量化活动：** 社区出现两大明显趋势：一是通过 abliterated/uncensored 技术去除模型安全限制；二是利用大模型蒸馏提升小模型能力（如将 Claude Opus 的推理能力转移到 GGUF 格式的 Qwen 底座上）。同时，由 Unsloth 主导的 GGUF 量化方案依旧是本地部署的绝对主流。

---

## 💡 值得探索

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: 
   **推荐理由：** 兼具多模态视觉理解能力与 MoE 极低推理成本（仅激活 3B 参数）。它是目前开源界最具性价比的模型之一，非常适合个人开发者和资源受限环境下的多模态任务部署。

2. **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**: 
   **推荐理由：** 闭源顶级模型（Claude 4.6）与开源 MoE 架构完美结合的标杆。通过蒸馏微调，它让消费级硬件也能跑出媲美顶配闭源模型的深度思维链推理效果，非常值得研究与本地体验。

3. **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**: 
   **推荐理由：** 纯文本转高质量多语言语音领域的破局之作。在当前的 TTS 生态中，VoxCPM2 的多语言支持和自然度表现出众，对开发语音交互应用（如 AI 助手、有声读物）的开发者来说是必试模型。