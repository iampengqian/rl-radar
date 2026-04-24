# Hugging Face 热门模型日报 2026-04-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-24 22:11 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-04-25)

## 1. 今日速览
今日 Hugging Face 迎来了**DeepSeek-V4**系列与**Google Gemma-4**的官方首发狂潮，双雄争霸成为全网焦点。同时，阿里开源的**Qwen3.6**系列凭借其强大的多模态能力和极高性价比的 MoE 架构，在社区微调、量化及去审查版本中呈现出爆发式增长。此外，世界模型与具身智能赛道开始升温，腾讯和英伟达相继推出了 image-to-3D 模型。端侧部署与本地算力平民化依然是主旋律，各类 GGUF 量化版模型包揽了榜单的大量下载。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、基座模型）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 2,388 | ⬇️ 30
    *   **简评**：DeepSeek 全新旗舰模型首发，极高的点赞量显示其备受瞩目，因刚发布故下载量处于起步阶段。
*   **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)**
    *   作者: deepseek-ai | 👍 193 | ⬇️ 3
    *   **简评**：DeepSeek-V4 Pro 的基座版，供开发者进行垂直领域微调。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) & [Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)**
    *   作者: deepseek-ai | 👍 602 / 146 | ⬇️ 23 / 3
    *   **简评**：DeepSeek-V4 的轻量快速版及基座，提供 MIT 协议，主打极速推理。
*   **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
    *   作者: zai-org | 👍 1,501 | ⬇️ 204,327
    *   **简评**：智谱 GLM 系列最新迭代，引入了 MoE 和 DSA 架构，下载量表现亮眼。
*   **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**
    *   作者: MiniMaxAI | 👍 1,055 | ⬇️ 469,402
    *   **简评**：MiniMax 强势推出的新一代大模型，兼顾了极高的社区呼声与庞大的实际部署量。
*   **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)**
    *   作者: tencent | 👍 132 | ⬇️ 1,235
    *   **简评**：腾讯混元系列的最新文本生成预览模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 👍 2,336 | ⬇️ 5,457,597
    *   **简评**：Google 发布的最新多模态指令微调模型，凭借**超 500 万**的单周下载量霸榜。
*   **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
    *   作者: moonshotai | 👍 973 | ⬇️ 208,251
    *   **简评**：月之暗面 Kimi 的多模态版本（支持压缩张量），热度与下载量双丰收。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) & [35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 749 / 1,382 | ⬇️ 162,349 / 861,178
    *   **简评**：阿里旗舰多模态模型，特别是 35B-A3B 版本，以 MoE 架构实现极高性价比，备受追捧。
*   **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)**
    *   作者: baidu | 👍 551 | ⬇️ 7,102
    *   **简评**：百度文心系列最新的 8B 参数文生图模型，开源可商用。
*   **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    *   作者: openbmb | 👍 1,227 | ⬇️ 94,124
    *   **简评**：高质量多语言 TTS 模型，填补了近期开源语音合成领域的空白。
*   **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0) & [nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)**
    *   作者: tencent / nvidia | 👍 592 / 266 | ⬇️ 2,741 / 498
    *   **简评**：腾讯与英伟达相继在 image-to-3D 及世界模型赛道发力，预示着具身智能数据生成的需求崛起。
*   **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
    *   作者: inclusionAI | 👍 164 | ⬇️ 103
    *   **简评**：结合了 Diffusers 与 Transformers 的 Any-to-Any 架构，探索通用多模态。

### 🔧 专用模型
*   **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
    *   作者: openai | 👍 679 | ⬇️ 12,664
    *   **简评**：OpenAI 开源的 Token 分类模型，用于文本隐私脱敏与过滤，极具实用价值。

### 📦 微调与量化（社区微调、GGUF、合并）
*   **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   作者: unsloth | 👍 739 | ⬇️ 1,397,244
    *   **简评**：Qwen3.6 MoE 的 GGUF 量化版，以超百万下载量证明其是当下本地部署的绝对主力。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 415 | ⬇️ 388,836
    *   **简评**：社区激进的“去审查”版本，满足用户对无限制输出的诉求。
*   **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)**
    *   作者: OBLITERATUS | 👍 493 | ⬇️ 101,144
    *   **简评**：同样是对 Gemma-4 进行的去审查版本，下载量火爆。
*   **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)**
    *   作者: Jackrong | 👍 200 | ⬇️ 70,227
    *   **简评**：将 Qwen 与 GLM 进行深度融合的 Frankenmerge 模型，试图结合两者长处。

---

## 3. 生态信号
当前开源大模型生态呈现出三大明显趋势：
首先，**MoE（混合专家）架构彻底主导社区**。Qwen3.6-35B-A3B 及其衍生模型霸榜，证明通过 MoE 在保持庞大参数带来的强劲性能的同时，大幅降低推理激活算力，已成为当前开源界的黄金法则。
其次，**多模态及世界模型重心下移**。多模态不再是语言模型的附属，Google Gemma-4 和 Qwen3.6 的视觉融合展现了极强的原生能力；同时，腾讯与英伟达押注 3D 及世界模型，标志着模型能力正快速向具身智能和空间计算延展。
最后，**社区“去审查”与端侧部署需求极其旺盛**。以 Unsloth 为代表的量化团队和 HauhauCS 等去审查微调者动辄数百万下载量。这表明开发者和极客群体迫切需要在本地算力（PC/手机）上运行不受限制、兼顾推理与视觉的最强模型。

---

## 4. 值得探索

1.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **探索理由**：斩获超 500 万下载量，性能与效率平衡到极致的最新标杆，适合作为绝大多数多模态应用更新的基线测试模型。
2.  **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
    *   **探索理由**：如果你只有消费级显卡（如 8GB/16GB 显存），这是目前最值得尝试的本地多模态全能模型，极低的资源消耗带来旗舰级的体验。
3.  **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
    *   **探索理由**：在 TTS（文本到语音）同质化严重的今天，这个模型凭借超高点赞量脱颖而出，非常适合需要极高拟真度、多语言语音合成的开发者深入研究。