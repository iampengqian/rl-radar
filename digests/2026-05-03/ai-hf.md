# Hugging Face 热门模型日报 2026-05-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-02 22:09 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-03)

## 📰 今日速览
今日的 Hugging Face 趋势榜由**多模态**和**MoE（混合专家）架构**主导。DeepSeek-V4 系列凭借其强大的文本生成能力霸榜，而 Qwen3.6 系列的发布则掀起了开源社区新一轮的下载、量化和“去审查（Uncensored）”微调狂潮。此外，端侧全能模型成为新宠，Nvidia 推出的超低激活参数推理模型和小米主打智能体与长上下文的 MiMo 引起了大量关注。在 AI 安全与隐私方面，OpenAI 发布的专有隐私过滤模型成为榜单上的一大亮点。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、基础模型）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,414 | ⬇️ 381,587
  - **说明**: DeepSeek-V4 系列的旗舰 Pro 版本，凭借卓越的文本生成与对话能力登顶本周点赞榜。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 921 | ⬇️ 345,885
  - **说明**: DeepSeek-V4 的轻量高效版，专为需要快速响应和低延迟推理的场景打造。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,181 | ⬇️ 699,348
  - **说明**: 月之暗面推出的 Kimi 最新代际模型，支持高度压缩的张量格式，下载量表现极为强劲。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,478 | ⬇️ 7,776,034
  - **说明**: 谷歌最新发布的 310 亿参数指令微调模型，一经推出便以近 800 万的惊人周下载量引爆社区。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 378 | ⬇️ 9,914
  - **说明**: 小米的大语言模型，主打 Agent（智能体）调用与超长上下文处理能力。
- **[ibm-granite/granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)** & **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b)**
  - 作者: ibm-granite | 👍 79/131 | ⬇️ 3,072/16,079
  - **说明**: IBM 面向企业级应用开源的 Granite 4.1 系列基础语言模型，注重商用安全性。
- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**
  - 作者: inclusionAI | 👍 99 | ⬇️ 535
  - **说明**: 蚂蚁集团推出的 1 万亿参数级超大规模混合架构模型，展现了国产大模型在基础架构上的探索。

### 🎨 多模态与生成（图像、视频、音频、跨模态）
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** & **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,076 / 1,571 | ⬇️ 1,070,778 / 2,397,446
  - **说明**: 阿里最新推出的图文跨模态 MoE 模型（35B 总参但仅激活 3B），实现了性能与成本的最佳平衡。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 👍 197 | ⬇️ 37,418
  - **说明**: 英伟达“全能”推理模型，总参数 30B 但仅激活 3B，支持 Any-to-Any 跨模态交互及复杂推理。
- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)**
  - 作者: XiaomiMiMo | 👍 192 | ⬇️ 28,323
  - **说明**: 小米端侧多模态力作，深度融合视觉、语言与音频处理。
- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
  - 作者: sensenova | 👍 118 | ⬇️ 1,308
  - **说明**: 商汤科技推出的多模态模型，采用 MoT（多任务混合）架构。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 69 | ⬇️ 859
  - **说明**: 社区推出的高质量动漫风格文生图专用扩散模型。
- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)**
  - 作者: facebook | 👍 109 | ⬇️ 0
  - **说明**: Meta 推出的新一代以人为中心的视觉 Transformer，专攻人体估计与理解。

### 🔧 专用模型（隐私、翻译、特定工具）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,207 | ⬇️ 99,399
  - **说明**: OpenAI 开源的数据隐私过滤模型，用于精准识别和脱敏文本中的敏感个人信息（PII）。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 77 | ⬇️ 487
  - **说明**: 极致量化（1.25bit）的腾讯混元翻译模型，适合在资源极其受限的边缘设备上部署机器翻译。
- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**
  - 作者: ibm-granite | 👍 68 | ⬇️ 1,598
  - **说明**: 仅有 97M 参数的高效多语言嵌入模型，支持多种主流推理后端。

### 📦 微调与量化（社区微调、GGUF、格式转换）
- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 👍 1,441 | ⬇️ 199,500
  - **说明**: 社区对 Gemma-4 的“去审查/去对齐”版本，打破了原版模型的伦理护栏，下载量极高。
- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** & **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 262 / 527 | ⬇️ 303,358 / 766,075
  - **说明**: 基于 Qwen3.6 系列的激进版去审查微调，专门满足了开发者在极简限制下的生成需求。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** & **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 541 / 894 | ⬇️ 983,535 / 2,001,316
  - **说明**: Unsloth 提供的高质量 GGUF 量化版本，让普通消费者也能在本地轻薄本上流畅运行 Qwen3.6 多模态大模型。
- **[unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-GGUF)**
  - 作者: unsloth | 👍 92 | ⬇️ 37,663
  - **说明**: 将英伟达全能推理模型进行 GGUF 格式转化，方便社区进行本地化部署测试。

---

## 📈 生态信号

当前 Hugging Face 生态呈现三大显著趋势：
1. **MoE 与极低激活参数架构成为绝对主流**：以 Qwen3.6-35B-A3B 和 Nemotron-3-Nano 为代表，模型参数量大但推理时激活参数极小（3B 左右）。这不仅在榜单上斩获了成百上千万的下载，还让消费级硬件运行百亿级模型成为日常。
2. **“去审查”微调持续火爆**：Google Gemma-4 和阿里 Qwen3.6 刚一发布，以 DealignAI 和 HauhauCS 为代表的社区极客就迅速跟进了 Uncensored 版本。这表明开源社区对打破大模型“安全护栏”、寻求无限制内容生成的需求极其旺盛。
3. **全能跨模态框架崛起**：从 Any-to-Any 交互到视觉语言音频三合一（如小米 MiMo），单一的文本生成模型已不再性感，端侧多模态融合正在成为科技巨头竞相抢占的高地。

---

## 💡 值得探索

1. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   - **探索理由**: 这是 OpenAI 难得一见的“工具型”开源小模型。在数据合规和隐私保护日益严格的今天，该模型可直接无缝集成到企业数据清洗流水线中，用于脱敏工作，具有极高的商用实战价值。
2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
   - **探索理由**: 极致的架构艺术。它兼具了 30B 模型的知识储备、Any-to-Any 的跨模态能力、强悍的推理思考能力以及 3B 激活参数的低功耗，非常适合作为高级 AI Agent 的核心大脑。
3. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   - **探索理由**: 本周最具性价比的 MoE 模型。对于开发者和研究人员来说，该模型在保持强大多模态能力的同时，其 Unsloth GGUF 量化版下载量已超 200 万，是本地多模态开发验证的完美基座。