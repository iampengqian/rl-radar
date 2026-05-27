# Hugging Face 热门模型日报 2026-05-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-27 22:29 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-28)

## 1. 今日速览
今日 Hugging Face 趋势榜被多模态与端侧模型全面占据。**DeepSeek-V4-Pro** 以超 500 万的绝对下载量领跑榜单，展现了基座大模型的强大统治力；字节跳动的 **Lance** 模型引爆了 Any-to-Any 跨模态生成的新热潮。阿里 **Qwen3.6** 系列迎来社区生态的大爆发，尤其在 MoE 架构、无审查微调及 GGUF 量化方面涌现出大量高热度模型。此外，腾讯混元翻译模型与微软的 Lens 图像生成模型也标志着大厂正加速向垂直场景和高保真图像生成发力。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、翻译）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,358 | ⬇️ 5,019,884
  - **一句话说明：** 行业顶尖的全新一代对话/文本生成大基座模型，凭借强悍性能与超高下载量稳居开源生态王者地位。
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 392 | ⬇️ 103,033
  - **一句话说明：** 轻量级（1B）文本生成模型，主打高性价比与端侧部署，适合资源受限的开发者。
- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)**
  - 作者: tencent | 👍 1,071 | ⬇️ 7,471
  - **一句话说明：** 腾讯混元最新推出的翻译模型，在多语种互译任务上表现卓越。
- **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 👍 405 | ⬇️ 2,091
  - **一句话说明：** 腾讯混元翻译模型的 MoE 大参数版本（30B总参/3B激活），提供更高级别的翻译质量。

### 🎨 多模态与生成（图像、视频、音频、Any-to-Any）
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 914 | ⬇️ 1,908
  - **一句话说明：** 强劲的 Any-to-Any 多模态模型，支持高质量的跨模态图像与视频生成，一发布即获极高关注。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 711 | ⬇️ 48,112
  - **一句话说明：** 顶尖的文本转语音（TTS）模型，在语音合成自然度与情感表现力上实现突破。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,398 | ⬇️ 1,376,847
  - **一句话说明：** 备受瞩目的文本生成视频基础模型，不仅点赞高，超百万的下载量证明了其出色的泛用性。
- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
  - 作者: meituan-longcat | 👍 341 | ⬇️ 0
  - **一句话说明：** 美团推出的音频/文本/图像联合驱动视频数字人模型，专注高保真虚拟形象生成。
- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
  - 作者: NemoStation | 👍 412 | ⬇️ 9,144
  - **一句话说明：** 专精的视频理解与描述模型，擅长视频到文本的密集字幕生成。
- **[microsoft/Lens](https://huggingface.co/microsoft/Lens) & **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
  - 作者: microsoft | 👍 117 & 115 | ⬇️ 673 & 908
  - **一句话说明：** 微软最新推出的文本生成图像系列模型，Turbo 版主打极致的生成速度优化。
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,569 | ⬇️ 690,196
  - **一句话说明：** 极其火热的 ComfyUI 生态扩散模型，下载量惊人，可能是目前最强大的社区节点式生成架构之一。
- **[stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)**
  - 作者: stabilityai | 👍 118 | ⬇️ 0
  - **一句话说明：** Stability AI 最新开源的音频/音乐生成模型，支持声音特效与长音乐创作。
- **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)**
  - 作者: nvidia | 👍 120 | ⬇️ 5,453
  - **一句话说明：** 英伟达结合了扩散模型与大语言模型机制的 14B 创新尝试，潜力巨大。

### 🔧 专用模型（提取、视觉、语音处理）
- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 174 | ⬇️ 20,350
  - **一句话说明：** 强大的企业级视觉语言模型，专为从文档图像中进行复杂结构化信息抽取而优化。
- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
  - 作者: nvidia | 👍 139 | ⬇️ 117
  - **一句话说明：** 英伟达推出的图像到图像模型，专注于极致的图像超分辨率重建。
- **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
  - 作者: pyannote | 👍 2,018 | ⬇️ 9,909,688
  - **一句话说明：** 工业界标杆级的语音说话人分离/日志处理流水线，下载量接近千万，刚需必备。

### 📦 微调与量化（社区微调、GGUF）
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,494 | ⬇️ 4,577,271
  - **一句话说明：** 阿里官方的 Qwen3.6 27B 多模态基座模型，构成了当前社区繁荣微调生态的核心底座。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 945 | ⬇️ 1,598,473
  - **一句话说明：** 去除安全审查限制的 MoE 视觉语言模型，以激进的对话风格和极低的本地部署成本备受开发者追捧。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
  - 作者: unsloth | 👍 516 | ⬇️ 735,349
  - **一句话说明：** Unsloth 带来的高质量 Qwen3.6 量化版，针对消费级显卡推理进行了极致优化。
- **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 396 | ⬇️ 627,535
  - **一句话说明：** 针对 MoE 架构优化的 GGUF 版本，让普通玩家也能跑起 35B 级别的大模型。
- **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) & **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
  - 作者: Jackrong | 👍 158 & 131 | ⬇️ 16,379 & 31,597
  - **一句话说明：** 社区基于 Qwen3.6 探索的微调与量化变体，进一步丰富了端侧部署选项。
- **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 105 | ⬇️ 10,015
  - **一句话说明：** 针对文本生成任务深度去审查的纯文本社区版本。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 433 | ⬇️ 0
  - **一句话说明：** 极具实用价值的修复工程，为 Qwen 系列模型提供了更稳定准确的 Jinja 聊天模板。

---

## 3. 生态信号
从榜单数据可以提炼出三大明显的生态信号：
1. **Qwen3.6 家族统治力极强**：阿里 Qwen3.6 系列无疑是当前开源社区的“绝对核心”，尤其是其 MoE（混合专家）架构版本（如 35B-A3B），兼顾了强悍性能与低推理成本，衍生出了大量高质量的 GGUF 量化与无审查（Uncensored）版本，展现了极强的社区二创活力。
2. **开源持续向跨模态与视频发力**：以 DeepSeek-V4-Pro 为基座，模型能力正快速横向扩展。字节跳动的 Lance 和 Sulphur-2、Anima 等模型入围热门，意味着开源社区在“Any-to-Any”全模态和复杂视频生成领域，已开始对齐甚至逼近闭源商业产品。
3. **量化技术让大模型彻底“平民化”**：Unsloth 等团队推出的 GGUF 和 MTP（多头预测）量化版本下载量动辄数十上百万。这表明，开发者的关注点已从单纯的“跑分”转向如何将庞大的 MoE/多模态模型稳定、低成本地部署在消费级硬件上。

---

## 4. 值得探索

1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **理由**：Any-to-Any 跨模态生成的最新探索。如果你关注多模态统一架构，或者需要实现文本、图像、视频的跨模态双向生成与交互，Lance 提供了目前最前沿的开源方案。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由**：大模型的去审查与 MoE 架构结合的典范。它展示了如何利用 MoE 极低的激活参数（3B）来保持 35B 级别的智能水平，同时测试模型在移除安全护栏后的原生对齐与创造力表现，极具本地部署研究价值。
3. **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
   - **理由**：在创作者生态（ComfyUI）中极具统治力的模型，接近 70 万的下载量证明其已被广泛验证。无论是工作流开发者还是 AIGC 图像/视频创作者，都值得将其纳入核心工具库测试。