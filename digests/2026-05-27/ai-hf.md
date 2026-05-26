# Hugging Face 热门模型日报 2026-05-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-26 22:26 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-27)

## 1. 今日速览
今日 Hugging Face 呈现出多模态与开源大语言模型并驾齐驱的繁荣景象。**DeepSeek-V4-Pro** 毫无悬念地凭借超高的点赞与下载量成为全场焦点，标志着开源文本生成的又一里程碑。同时，**Qwen3.6 系列**（涵盖 27B 及 35B MoE 架构）迎来了社区微调与量化（特别是 GGUF 和 MTP 版本）的全面爆发。此外，视频与跨模态生成领域竞争白热化，字节跳动的 **Lance**（任意到任意生成）与 **Sulphur-2**（文本到视频）均取得了亮眼的社区关注度。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、翻译）
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 4,307 | ⬇️ 5,019,884
    *   一句话说明：最新一代开源重量级文本生成旗舰模型，凭借卓越的性能和庞大的下载量，稳居开源大模型霸主地位。
*   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    *   作者: Qwen | 👍 1,474 | ⬇️ 4,577,271
    *   一句话说明：阿里 Qwen 系列高性能基础/对话模型，兼顾了优秀的性能与相对适中的参数量，是当前开源社区的“基础设施”。
*   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) / [tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
    *   作者: tencent | 👍 1,024 / 395 | ⬇️ 7,471 / 2,091
    *   一句话说明：腾讯推出的混元机器翻译模型，提供了轻量级和 MoE 架构的选择，在翻译任务上表现精准。
*   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    *   作者: sapientinc | 👍 377 | ⬇️ 103,033
    *   一句话说明：十亿参数级的小型文本生成模型，以极高的下载量证明了其在端侧/轻量级部署中的极高人气。
*   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    *   作者: openbmb | 👍 300 | ⬇️ 2,409
    *   一句话说明：面壁智能的最新一代超轻量级语言模型，为资源极度受限的设备提供了强劲的文本生成方案。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    *   作者: bytedance-research | 👍 857 | ⬇️ 1,908
    *   一句话说明：字节跳动推出的强大多模态模型，支持 Any-to-Any 生成，在图像与视频联合生成领域开辟了新路线。
*   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    *   作者: SulphurAI | 👍 1,372 | ⬇️ 1,376,847
    *   一句话说明：当前大热的 Text-to-Video 基础模型，兼具高点赞与超百万下载，成为视频生成社区的新宠。
*   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    *   作者: circlestone-labs | 👍 1,556 | ⬇️ 676,447
    *   一句话说明：专为 ComfyUI 设计的扩散模型单文件，热度极高，为图像创作者提供了极具创意的新玩法。
*   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    *   作者: openbmb | 👍 978 | ⬇️ 314,347
    *   一句话说明：MiniCPM 的最新多模态视觉版本，在图文理解任务上表现优异，是端侧多模态的代表作。
*   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    *   作者: Supertone | 👍 695 | ⬇️ 48,112
    *   一句话说明：高质量的文本到语音（TTS）合成模型，满足了对高保真、自然语音生成的需求。
*   **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
    *   作者: NemoStation | 👍 375 | ⬇️ 9,144
    *   一句话说明：专为视频理解和描述生成的视频文本模型，填补了视频Captioning领域的空白。
*   **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    *   作者: meituan-longcat | 👍 295 | ⬇️ 0
    *   一句话说明：美团推出的音频/文本驱动虚拟人视频生成模型，在数字人直播和交互场景潜力巨大。
*   **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo) / [microsoft/Lens](https://huggingface.co/microsoft/Lens)**
    *   作者: microsoft | 👍 104 / 101 | ⬇️ 908 / 673
    *   一句话说明：微软最新推出的文生图扩散模型，Turbo 版本侧重于推理加速，展示了 AI 绘图的新范式。
*   **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
    *   作者: ResembleAI | 👍 260 | ⬇️ 1,552
    *   一句话说明：结合了音视频生成与声音克隆的 TTS 模型，为短剧和互动娱乐内容生成提供了强大工具。

### 🔧 专用模型（提取、视觉语言、超分辨率）
*   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    *   作者: numind | 👍 160 | ⬇️ 20,350
    *   一句话说明：基于视觉语言模型打造的提取工具，擅长从文档图像中精准提取结构化文本。
*   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    *   作者: nvidia | 👍 109 | ⬇️ 117
    *   一句话说明：英伟达推出的图像到图像扩散模型，专注于图像超分辨率与画质增强任务。

### 📦 微调与量化（社区微调、GGUF、去审查）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 906 | ⬇️ 1,598,473
    *   一句话说明：基于 Qwen MoE 架构的激进版去审查微调，超高下载量反映了开源社区对“无限制”模型的强烈需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) & [unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    *   作者: unsloth | 👍 502 / 388 | ⬇️ 735,349 / 627,535
    *   一句话说明：知名量化团队 Unsloth 推出的 Qwen3.6 GGUF 版本，支持多 Token 预测 (MTP)，兼顾了性能与本地易用性。
*   **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) 系列**
    *   作者: Jackrong | 👍 142 / 118 | ⬇️ 16,379 / 31,597
    *   一句话说明：社区开发者对 Qwen 及 Opus 架构融合探索的 GGUF 量化版，展现了社区在模型融合上的极客精神。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 👍 421 | ⬇️ 0
    *   一句话说明：专门针对 Qwen 模型修复和优化聊天模板的工具库，对本地部署玩家（如 MLX 用户）极具价值。

---

## 3. 生态信号
本周生态最显著的特征是**“Qwen3.6 家族的全面接管”**。无论是官方 27B 和 35B MoE 的发布，还是社区迅速跟进的去审查版、GGUF 量化版（特别是结合 MTP 多令牌预测技术）以及修复模板项目，Qwen 系列已经成为了开源社区微调和本地部署的绝对底座。同时，**开源 vs 闭源的边界正在重塑**：DeepSeek V4 以顶级的参数量和开源权重持续向闭源模型施压；而微软、英伟达等巨头更倾向于发布特定任务（如文生图、超分）的专业模型。微调与量化方面，**Unsloth 和 GGUF 格式依然是本地化部署的黄金标准**，结合 MoE 架构实现的高效推理备受追捧。

---

## 4. 值得探索
1.  **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**：Any-to-Any 多模态目前正处于技术爆发期。如果你对统一的图像和视频生成架构感兴趣，Lance 提供了前沿的研究视角和极具潜力的实操价值。
2.  **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**：支持多 Token 预测（MTP）的高质量量化模型。强烈建议本地算力有限的开发者和研究者尝试，它在推理速度与生成质量之间找到了极佳的平衡点。
3.  **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**：对于 AI 绘画创作者和 ComfyUI 用户来说，这是本周绝对不可错过的高热度扩散模型，其生成风格和工作流适配度都有独到之处。