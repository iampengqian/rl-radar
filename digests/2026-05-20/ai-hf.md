# Hugging Face 热门模型日报 2026-05-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-19 22:23 UTC

---

这是一份为您生成的《Hugging Face 热门模型日报》（2026-05-20）：

---

# 📰 Hugging Face 热门模型日报 (2026-05-20)

### 📌 今日速览
今日 HF 生态迎来了视觉语言模型与视频生成模型的双重爆发。大语言模型方面，阿里云开源的 **Qwen3.6 系列**占据了下载与互动的绝对高地；同时，**DeepSeek-V4-Pro/Flash** 持续展现出恐怖的社区统治力。多模态与生成领域迎来大洗牌，以 **Sulphur-2** 为代表的视频生成模型和 **supertonic-3** 等语音克隆模型表现抢眼。此外，社区对端侧部署的需求激增，带动了 **Unsloth** 等量化生态以及 **ComfyUI** 工作流节点的全面繁荣。

---

### 📊 热门模型分类

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,064 | ⬇️ 3,622,763
  - **说明**: DeepSeek V4 系列的最强版本，凭借极高的生成质量霸榜，是当前开源文本生成领域的绝对顶流。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,159 | ⬇️ 1,998,112
  - **说明**: V4 系列的轻量快速版，兼顾了性能与推理成本，下载量突破逼近 200 万。
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 536 | ⬇️ 146,253
  - **说明**: 基于 ZAYA1-reasoning-base 微调的 8B 模型，主打逻辑推理能力，在中等参数量级中表现突出。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,171 | ⬇️ 1,114,657
  - **说明**: 顶级文生视频模型，支持多种 Diffusers 格式，下载量超百万，标志着开源视频生成进入新阶段。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** & **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,825 / 1,342 | ⬇️ 5,711,500 / 3,681,887
  - **说明**: 阿里最新一代视觉语言模型，不仅原版下载量炸裂，且带动了整个生态的繁荣。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,692 | ⬇️ 10,045,599
  - **说明**: Google 发布的第四代 Gemma 视觉语言模型，以超 1000 万的周下载量成为全球开发者的首选基座之一。
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 802 | ⬇️ 144,826
  - **说明**: 面向端侧部署的高效多模态模型，在资源受限环境下展现出卓越的图文理解能力。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 465 | ⬇️ 28,681
  - **说明**: 高质量文本转语音（TTS）模型，标志着开源语音合成达到广播级音质。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 417 | ⬇️ 15,794
  - **说明**: 专注于动漫风格的文生图模型，满足了对二次元高质量图像有强烈需求的社区群体。

#### 🔧 专用模型（代码、数学、医疗、嵌入及其他）
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,425 | ⬇️ 558,113
  - **说明**: ComfyUI 生态中的爆款单文件 Diffusion 模型，深受画师和图像工作流爱好者的追捧。
- **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)**
  - 作者: RuneXX | 👍 589 | ⬇️ 0
  - **说明**: 专为图生视频设计的 LTX 新版本 ComfyUI 工作流节点，为专业视频创作者提供便利。
- **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 👍 580 | ⬇️ 14,464
  - **说明**: 微软基于 Qwen2.5-VL 架构推出的多模态模型，探索特定功能的高效实现。
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 297 | ⬇️ 171
  - **说明**: 字节跳动推出的 Any-to-Any 多模态大模型，展现了在跨模态生成领域的前沿探索。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 629 | ⬇️ 268,561
  - **说明**: 无审查版的 Gemma 4 量化模型，极大满足了社区对去除安全护栏的强生成需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 327 / 269 | ⬇️ 337,076 / 296,380
  - **说明**: 由量化大师 Unsloth 打造的最新 Qwen3.6 GGUF 格式，让普通玩家也能在本地跑起顶级大模型。

---

### 📈 生态信号
本周的模型生态呈现出三大显著趋势：**首先是 Qwen3.6 与 DeepSeek-V4 的双雄争霸**。Qwen3.6 凭借极其成功的多模态设计实现了下载量大爆发，而 DeepSeek-V4 则维持了其在文本生成领域的绝对热度。**其次是“开源权重的狂欢”**，榜单头部几乎被 DeepSeek、Qwen、Google 等提供的开源或开放权重模型垄断，闭源 API 在开发者试错阶段的吸引力远不及开源生态。**最后是量化与本地化部署的极度繁荣**，Unsloth 的 GGUF 量化版本屡获高分，同时“无审查”微调版（如 supergemma4-uncensored）和 ComfyUI 整合包大受欢迎，表明用户对“本地可控”和“内容无限制”的诉求达到了空前的高度。

---

### 🎯 值得探索
1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **推荐理由**: 作为 Any-to-Any 跨模态模型，它打破了文本、图像和视频生成的边界，代表了多模态技术演进的核心方向，适合前瞻性研究者和极客尝鲜。
2. **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
   - **推荐理由**: 如果你想在本地部署一台不受约束的推理引擎，这个基于 Gemma 4 打造的无审查量化版模型是目前社区中反馈最积极的版本。
3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - **推荐理由**: 兼具百万级下载与超高点赞的文生视频大爆款，它完美兼容 Diffusers，是构建本地视频生成管线不可错过的核心基座。