# Hugging Face 热门模型日报 2026-05-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-08 22:16 UTC

---

# Hugging Face 热门模型日报 (2026-05-09)

## 📰 今日速览
本周 Hugging Face 社区迎来了 **Qwen3.6 系列和 Google Gemma-4 系列**的开源狂欢，多模态大语言模型（MLLM）全面占据下载与点赞榜首。在底层技术方面，MoE（混合专家）架构持续受捧，`nvidia` 和 `Qwen` 均推出了激活参数极低但性能强悍的 `A3B` 模型。此外，**“去对齐”** 的开源微调模型热度飙升，显示出社区对无审查模型的强烈需求。跨模态生成领域同样亮眼，视频生成与零样本语音克隆模型均取得了百万级下载。

---

## 📊 热门模型分类

### 🧠 语言模型（LLM、对话模型）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,755 | ⬇️ 1,061,344
  - **一句话说明**: DeepSeek V4 系列的增强版，以极强的推理和对话能力登顶本周点赞榜，引发开源社区热议。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,000 | ⬇️ 848,696
  - **一句话说明**: DeepSeek V4 的轻量高速分支，主打极高性价比和快速推理，适合高并发场景。
- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
  - 作者: mistralai | 👍 301 | ⬇️ 21,300
  - **一句话说明**: Mistral 最新推出的 1280 亿参数中端大模型，在英语和法语任务上表现优异。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 485 | ⬇️ 26,600
  - **一句话说明**: 小米推出的最新端侧/Agent 大模型，主打长上下文处理与智能体调用能力。
- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
  - 作者: poolside | 👍 233 | ⬇️ 18,863
  - **一句话说明**: 专注于代码生成与文本理解的高效小参数模型。

### 🎨 多模态与生成（图像、视频、音频）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,568 | ⬇️ 8,731,301
  - **一句话说明**: 谷歌 Gemma 4 系列的 31B 图文多模态版，开源即巅峰，单周下载量突破 870 万。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,676 | ⬇️ 3,363,621
  - **一句话说明**: Qwen 最新 MoE 多模态架构，总参数 35B 但运行时仅需 3B 激活，极度省资源。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  - 作者: k2-fsa | 👍 811 | ⬇️ 2,242,587
  - **一句话说明**: 顶级的零样本多语种语音克隆与合成模型，下载量超 220 万，彻底颠覆开源 TTS 生态。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 444 | ⬇️ 92,968
  - **一句话说明**: 社区当前最火的文本生成视频基础模型之一。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 👍 263 | ⬇️ 89,837
  - **一句话说明**: 英伟达出品的 Omni 全模态推理模型，基于 MoE 架构，强化了逻辑推理能力。
- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
  - 作者: TenStrip | 👍 166 | ⬇️ 42,529
  - **一句话说明**: 非常受欢迎的图生视频微调模型，具备出色的动态表现力。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 239 | ⬇️ 5,077
  - **一句话说明**: 专注于生成高质量二次元风格图像的文生图模型。
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,215 | ⬇️ 457,892
  - **一句话说明**: 为 ComfyUI 设计的强力节点/模型，在美术和生成社区引发了极高关注。

### 🔧 专用模型（代码、数学、医疗、过滤、翻译）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,366 | ⬇️ 173,110
  - **一句话说明**: OpenAI 开源的隐私数据过滤工具，企业处理敏感数据和合规化的重要利器。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 135 | ⬇️ 16,778
  - **一句话说明**: 极致量化（1.25bit）的翻译模型，让端侧设备的跨语种翻译成为现实。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 108 | ⬇️ 0
  - **一句话说明**: 为解决 Qwen 系列模板兼容性问题而生的底层 Jinja 工具，开发者福音。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 962 | ⬇️ 2,500,343
  - **一句话说明**: Unsloth 出品的官方 GGUF 量化版，让普通用户也能在本地跑起顶级多模态 MoE 模型。
- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 👍 1,489 | ⬇️ 156,146
  - **一句话说明**: 本周最受关注的“去对齐”版 Gemma-4，移除了安全护栏，解锁了更自由的内容生成。
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 101 | ⬇️ 143,853
  - **一句话说明**: 无审查版 Qwen3.6 深度微调，特别强化了代码与深层对话能力，社区下载量惊人。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 626 | ⬇️ 1,312,422
  - **一句话说明**: Qwen3.6 27B 版本的高质量量化文件，兼顾性能与显存占用。
- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**
  - 作者: Jackrong | 👍 108 | ⬇️ 128,635
  - **一句话说明**: 充满想象力的“缝合”尝试，融合了 Qwen 和 DeepSeek 的特色。

---

## 📈 生态信号
**1. Qwen 与 Gemma 双雄争霸：** 目前开源权重生态已被 Google 的 Gemma-4 和阿里云的 Qwen3.6 系列主导。Qwen 凭借激进的 MoE 架构获得了极高的下载量，而 Google Gemma 则凭借多模态的强大性能斩获了千万级的绝对下载统治力。
**2. 去审查/去对齐（Uncensored）需求暗流涌动：** `dealignai` 和 `DavidAU` 的去对齐模型占据了极高的点赞与下载比例，反映出开源社区对打破大厂模型安全限制、追求生成自由的强烈诉求。
**3. 本地化与极低资源消耗成主流：** `unsloth` 提供的 GGUF 量化版本几乎成了标配，同时将 30B 级别模型压缩至 1.25bit（如 Hy-MT 翻译模型）甚至激活参数仅占 10% 的 MoE，说明“把大模型塞进手机和 PC”仍是当前最核心的技术红利。

---

## 💡 值得探索

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** 
   - **理由**：当前最值得部署的 MoE 多模态模型。它拥有 35B 的庞大知识储备，但推理时仅需激活 3B 的参数，配合 `unsloth` 的 GGUF 版本，任何拥有中端显卡的开发者都能无压力体验顶尖的多模态交互。
2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
   - **理由**：英伟达官方出品的“全能+推理”小钢炮。在 All-to-One 架构下融合多模态，且进一步强化了逻辑推理能力，非常适合用于研究大厂如何解决轻量化模型的高阶认知问题。
3. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   - **理由**：这是一个经常被忽视但极具工业实用性的 Token 分类模型。几乎所有企业落地大模型时都会面临数据隐私合规问题，OpenAI 出品的这个过滤器为构建企业级安全的 RAG 系统提供了现成的底层基建。