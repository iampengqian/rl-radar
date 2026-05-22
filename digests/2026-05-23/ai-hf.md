# Hugging Face 热门模型日报 2026-05-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-22 22:17 UTC

---

以下为您整理的《Hugging Face 热门模型日报》（2026-05-23）：

---

# 🎯 今日速览

*   **Qwen 3.6 系列全面爆发**：阿里通义千问团队发布的 `Qwen3.6` 系列模型席卷榜单，涵盖从 27B 到 MoE 架构的多种规模，并在社区引发了海量的 GGUF 量化与微调活动。
*   **DeepSeek V4 双雄吸顶**：DeepSeek 推出 `DeepSeek-V4-Pro` 与 `DeepSeek-V4-Flash`，凭借超强的文本生成能力，两者单周下载量总和突破 680 万，包揽基础模型流量榜首。
*   **生成式 AI 迈向多维融合**：视频与图像生成领域持续火热，字节跳动推出了 `Lance` 多模态生成模型，SulphurAI 的文生视频模型下载量突破 124 万。
*   **语音克隆与 3D 生成成新热点**：继文本和视频之后，语音合成迎来了极高的关注度，ResembleAI 与 Supertone 的 TTS 模型备受瞩目。

---

# 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、翻译）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,151 | ⬇️ 4,287,396
    *   **说明**: DeepSeek 最新一代旗舰文本生成模型，凭借强大的对话和推理能力以及超高下载量，成为本周当之无愧的“算力吸尘器”。
*   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    *   作者: deepseek-ai | 👍 1,189 | ⬇️ 2,556,531
    *   **说明**: V4 系列的轻量级高速度版本，主打高效与低延迟，是日常轻量级文本任务的绝佳选择。
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** 及 **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
    *   作者: tencent | 👍 274 / 198 | ⬇️ 564 / 224
    *   **说明**: 腾讯混元系列最新机器翻译模型，分别采用密集参数和 MoE 架构，凭借小体积的高效翻译表现跻身榜单。

### 🎨 多模态与生成（图像、视频、音频、多模态理解）
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 👍 2,730 | ⬇️ 10,283,716
    *   **说明**: Google 最新一代视觉语言多模态模型，不仅点赞数极高，周下载量更是突破千万，生态集成度极高。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,265 | ⬇️ 1,249,582
    *   **说明**: 顶级文本到视频生成基础模型，用户对视频创作工具的需求推动了其高达 124 万的惊人下载量。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** 及 **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 1,388 / 1,867 | ⬇️ 4,049,995 / 5,978,432
    *   **说明**: 通义千问最新视觉多模态模型，全面支持图像文本到文本的理解，MoE 架构版本以极高的性价比获得社区热捧。
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   作者: bytedance-research | 👍 640 | ⬇️ 1,001
    *   **说明**: 字节跳动推出的 Any-to-Any 多模态生成模型，横跨图像与视频生成，代表了多模态统一模型的前沿探索。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   作者: Supertone | 👍 578 | ⬇️ 37,545
    *   **说明**: 顶级的文本转语音（TTS）合成模型，在音色自然度上表现优异。
*   **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
    *   作者: ResembleAI | 👍 226 | ⬇️ 1,354
    *   **说明**: 专为短剧和情感对话设计的 TTS 与声音克隆模型，是当前 AI 影视创作工作流的热门工具。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 👍 1,494 | ⬇️ 602,483
    *   **说明**: 极具人气的图像生成模型（ComfyUI生态），周下载量超 60 万，受到大量画师和 AI 绘画爱好者的青睐。

### 🔧 专用模型（代码、视觉提取、3D）
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   作者: numind | 👍 74 | ⬇️ 7,576
    *   **说明**: 专为文档图像信息抽取打造的小型专用模型，利用视觉语言能力精准提取图像中的结构化文本。
*   **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
    *   作者: TencentARC | 👍 190 | ⬇️ 0
    *   **说明**: 腾讯ARC推出的单图生成高质量 3D 模型工具，开源即引爆了 3D 创作者圈层。

### 📦 微调与量化（社区 GGUF、量化版）
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 409 | ⬇️ 532,255
    *   **说明**: 社区大神 Unsloth 针对最新 Qwen3.6 做的高质量 GGUF 量化版，是本地部署玩家（如 LM Studio 用户）的首选。
*   **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *   作者: unsloth | 👍 331 | ⬇️ 466,060
    *   **说明**: 针对 Qwen MoE 架构的精准量化，兼顾了运行速度与智能水平，下载数据印证了其极高的实用性。
*   **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)**
    *   作者: Jackrong | 👍 160 | ⬇️ 28,599
    *   **说明**: 社区开发者将 Qwen 底座融合代码能力进行微调的量化版本，满足了极客对本地跑代码大模型的硬需求。

---

# 📈 生态信号

本周生态展现出**“开源模型家族化”**与**“多模态本地化”**的强烈趋势。**Qwen 3.6** 绝对是当前开源社区的超级主轴，从基座到 MoE 再到多模态版本全面开花，且 Unsloth 的量化版下载量级逼近五十万，说明开源社区对**在消费级设备上本地运行前沿 VLM（视觉语言模型）**有着如饥似渴的需求。此外，**DeepSeek V4** 以压倒性的千万级下载量证明了其在开源大语言模型领域的霸主地位。在生成领域，除了由 Stable Diffusion 延伸的图像生成外，**文生视频** 与 **文生语音/克隆** 的开源项目热度激增，标志着 AIGC 正从单纯的文本辅助转向多媒体内容直接生成。

---

# 🔭 值得探索

1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   **理由**: Any-to-Any（任意模态转任意模态）代表了 AGI 交互的未来方向。如果你关注视频、图像和文本的跨模态统一生成与理解，字节跳动这款模型是必须追踪的前沿风向标。
2.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **理由**: 作为单周下载量破千万的现象级模型，Gemma 4 展现了小体积（31B）下惊人的多模态指令服从能力。无论你是做应用开发还是学术研究，这都是一个极佳的开箱即用多模态基座。
3.  **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
    *   **理由**: 随着短剧和播客在消费市场的爆发，该模型展现了极强的语音情感控制与克隆能力。对于希望构建 AI 故事、虚拟人语音或音视频自媒体的开发者而言，具有极高的实用价值。