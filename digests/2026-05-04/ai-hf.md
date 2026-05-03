# Hugging Face 热门模型日报 2026-05-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-03 22:10 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-04)

## 📰 今日速览
本期 Hugging Face 热门榜单呈现出“多强争霸、多模态爆发”的格局。DeepSeek 官方凭借 V4 系列的 Pro 和 Flash 双版本强势霸榜，斩获极高人气与下载量；Google 的 Gemma-4 和 阿里 Qwen3.6 系列则在多模态和 MoE（混合专家）架构上持续发力，不仅基座模型表现出色，其衍生的社区量化版本更是迎来了下载狂潮。此外，端侧 Agent 与全模态模型（如小米 MiMo 和英伟达 Nemotron）开始崭露头角，标志着开源大模型正向“全能化”与“本地化”双线并行发展。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、基座）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,467 | ⬇️ 457,348
  - **一句话说明**: DeepSeek 最新一代旗舰级生成模型，以极高的点赞数登顶本周榜首，代表目前开源文本生成的顶流水平。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 927 | ⬇️ 413,995
  - **一句话说明**: V4 系列的轻量快速版本，兼顾性能与推理成本，深受开发者欢迎，下载量紧随 Pro 版本之后。
- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) & [granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**
  - 作者: ibm-granite | 👍 139 / 85 | ⬇️ 17,108 / 3,491
  - **一句话说明**: IBM 发布的 Granite 4.1 系列密集模型，聚焦企业级文本生成，为商业应用提供可靠的开源选择。
- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T) & [Ling-2.6-flash](https://huggingface.co/inclusionAI/Ling-2.6-flash)**
  - 作者: inclusionAI | 👍 110 / 162 | ⬇️ 642 / 1,039
  - **一句话说明**: 采用混合架构的大语言模型，拥有高达 1T 参数的庞大体量与轻量级 flash 版本，主打高级对话能力。

### 🎨 多模态与生成（图像、视频、Any-to-Any）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,492 | ⬇️ 7,907,233
  - **一句话说明**: 本周下载量绝对的王者（近 800 万次），Google 开源的高性能多模态指令微调模型，视觉理解能力极其出色。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) & [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,588 / 1,099 | ⬇️ 2,575,808 / 1,199,862
  - **一句话说明**: 阿里最新一代多模态模型，35B 版本巧妙采用 MoE 架构（激活参数仅 3B），在保持视觉能力的同时大幅降低计算开销。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) & [NVFP4](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4)**
  - 作者: nvidia | 👍 205 / 77 | ⬇️ 38,865 / 220,908
  - **一句话说明**: 英伟达“全能小钢炮”，30B 总体量仅激活 3B，支持视觉/音频等多模态，原生具备强悍的推理能力。
- **[XiaomiMiMo/MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) & [MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 200 / 405 | ⬇️ 45,473 / 11,055
  - **一句话说明**: 小米推出的多模态视觉语言/Agent 模型，主打长上下文处理，暗示着端侧智能体生态的快速扩张。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,187 | ⬇️ 755,634
  - **一句话说明**: Kimi 的多模态大作，采用了压缩张量技术，在长文本和多模态特征提取上表现抢眼。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 113 | ⬇️ 1,647
  - **一句话说明**: 社区优质的动漫风格文生图模型，满足垂直领域的 ACG 创作需求。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 97 | ⬇️ 332
  - **一句话说明**: 开源的文生视频基础模型，为社区探索视频生成机制提供了新的底座。

### 🔧 专用模型（过滤、翻译、代码等）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,230 | ⬇️ 104,695
  - **一句话说明**: OpenAI 罕见开源的 Token 分类模型，专攻文本隐私脱敏，实用性极高，深受企业开发管线欢迎。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 80 | ⬇️ 599
  - **一句话说明**: 极致压缩（1.25bit）的机器翻译专用模型，在极低资源消耗下保证翻译质量。

### 📦 微调与量化（社区微调、GGUF、去审查化）

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) & [Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 904 / 558 | ⬇️ 2,080,953 / 1,045,084
  - **一句话说明**: Unsloth 出品的高质量 GGUF 量化版，让普通用户也能在本地 PC 或消费级显卡上流畅运行 Qwen 最新大模型。
- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 👍 1,454 | ⬇️ 203,453
  - **一句话说明**: 基于Gemma-4的“去审查”版，通过特殊微调打破了模型的安全限制，用于无约束的文本生成研究。
- **[HauhauCS/Qwen3.6-27B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive) & [Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 273 / 541 | ⬇️ 320,747 / 799,579
  - **一句话说明**: 社区激进的“去审查”量化微调版本，下载量惊人，反映了开源社区对模型绝对控制权与无限制输出的强烈需求。

---

## 📈 生态信号

本周生态释放出三大强烈信号：
1. **巨头混战与模型家族化**：Qwen3.6、DeepSeek-V4 和 Gemma-4 三分天下。尤其是 MoE 架构在多模态中的普及（如 Qwen3.6 的 35B-A3B），正在重塑开源社区的算力性价比标准。
2. **“去审查”需求爆发**：榜单中出现了多个高人气、高下载的 Uncensored/Abliterated 版本。这表明部分开发者对于官方模型日益严格的安全护栏感到受限，针对模型“去对齐化”的社区微调已形成一条灰产/学术研究产业链。
3. **开源 vs 闭源的边界模糊**：以 OpenAI 和 Mistral 为代表的传统闭源大厂也在 HF 上频频试水，OpenAI 的隐私过滤模型获得了极高的关注度，显示出闭源巨头通过开放特定垂直任务模型来构建开发者生态的策略。

---

## 💡 值得探索

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - **探索理由**：千万级的周下载量证明了其统治力。无论你是研究多模态对齐机制，还是寻找一个可以直接投入生产环境的高级视觉对话模型，它都是目前的业界标杆。
2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
   - **探索理由**：将“Any-to-Any（全模态）”、“MoE 架构”与“Reasoning（复杂推理）”融合在了一个极低激活参数的模型中，非常适合探索边缘设备上的智能体部署。
3. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   - **探索理由**：不同于普通的大语言模型，这是一个专攻隐私保护的 Token 分类工具。对于构建合规的 RAG（检索增强生成）系统或企业级数据清洗流水线具有立竿见影的实用价值。