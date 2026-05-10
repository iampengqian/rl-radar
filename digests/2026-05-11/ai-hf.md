# Hugging Face 热门模型日报 2026-05-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-10 22:12 UTC

---

以下为您整理的《Hugging Face 热门模型日报》（2026年5月11日）：

### 📰 今日速览
本期榜单迎来了多模态模型与视频生成模型的集中爆发。Google 的 Gemma 4 系列凭借极高的下载量霸榜，其中端侧 MoE 模型 E4B 备受追捧；Qwen 系列不仅放出了 3.6 版本的视觉语言模型，其社区微调与量化生态更是呈现出井喷之势。此外，DeepSeek V4 架构稳固占据生成榜单前列，而 Sulphur-2 视频生成模型和 OpenAI 首次推出的隐私过滤工具成为了今日最大的亮点。

---

### 🏆 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  作者: deepseek-ai | 👍 3,817 | ⬇️ 1,339,144
  一句话说明：DeepSeek V4 系列的 Pro 旗舰版，凭借强大的对话与文本生成能力稳居榜单头部。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  作者: deepseek-ai | 👍 1,023 | ⬇️ 1,068,871
  一句话说明：V4 架构的高效轻量版，主打高并发与快速推理，深受开发者欢迎。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  作者: google | 👍 2,587 | ⬇️ 8,965,984
  一句话说明：Gemma 4 系列的 31B 指令微调版，下载量近千万，是目前开源社区最热的基础对话模型之一。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  作者: XiaomiMiMo | 👍 505 | ⬇️ 40,104
  一句话说明：小米推出的最新模型，主打长上下文与 Agent 能力，展现了手机厂商在端侧/本地大模型上的野心。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**
  作者: google | 👍 969 | ⬇️ 5,585,425
  一句话说明：Gemma 4 的多模态 MoE 版本，激活参数仅 4B 却拥有极强的 any-to-any 能力，极致的端侧效率使其下载量惊人。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  作者: Qwen | 👍 1,705 | ⬇️ 3,668,376
  一句话说明：通义千问最新的 MoE 架构多模态大模型，总参35B激活3B，兼顾了卓越的视觉理解能力与低资源消耗。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  作者: Qwen | 👍 1,221 | ⬇️ 2,273,063
  一句话说明：Qwen3.6 系列的 27B 密集型多模态版本，为图文理解任务提供了强有力的基座支持。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  作者: SulphurAI | 👍 529 | ⬇️ 144,251
  一句话说明：本周最热的文生视频模型，支持 GGUF 格式，大幅降低了高质量视频生成的显存门槛。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  作者: k2-fsa | 👍 831 | ⬇️ 2,212,436
  一句话说明：强大的零样本多语言语音克隆模型，下载量超两百万，是语音合成领域的刚需工具。
- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  作者: HiDream-ai | 👍 177 | ⬇️ 692
  一句话说明：结合了 Qwen3 视觉能力的图像修改模型，主打 high-level 的图像理解到生成任务。

#### 🔧 专用模型（代码、数学、医疗、嵌入、过滤）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  作者: openai | 👍 1,393 | ⬇️ 185,884
  一句话说明：OpenAI 开源的隐私数据过滤器，用于精准识别和分类文本中的敏感信息，本周备受企业开发者关注。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  作者: nvidia | 👍 271 | ⬇️ 126,335
  一句话说明：英伟达推出的全能型推理模型，具有极强的逻辑推理与多模态特征提取能力。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  作者: AngelSlim | 👍 160 | ⬇️ 17,223
  一句话说明：极度极限的 1.25bit 超低比特量化翻译模型，专为无显卡或极低配置硬件的翻译任务设计。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  作者: unsloth | 👍 984 | ⬇️ 2,657,295
  一句话说明：由 Unsloth 出品的 Qwen3.6 MoE 量化版，让普通消费级显卡也能流畅运行最新的多模态大模型。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  作者: unsloth | 👍 638 | ⬇️ 1,412,778
  一句话说明：Qwen3.6 27B 的官方出品量化版，兼顾了模型体积与多模态性能表现。
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  作者: DavidAU | 👍 118 | ⬇️ 181,147
  一句话说明：著名的 Heretic 无审查系列微调，解除了基础模型的道德护栏，适合需要高自由度生成的极客玩家。

---

### 📈 生态信号
本周生态信号呈现出 **"MoE 架构全面主导"** 和 **"端侧多模态爆发"** 两大特征。模型家族方面，**Google Gemma 4** 与 **阿里 Qwen 3.6** 平分秋色，特别是两者的 MoE 版本（E4B 与 35B-A3B）凭借优异的参数效率，正在迅速蚕食原本属于中型密集模型的市场。开源方面，尽管绝对头部（如 DeepSeek V4 Pro）依然强势，但社区下载量正在向针对本地化部署优化的开源权重倾斜。同时，以 `unsloth` 为代表的社区量化团队和以 `GGUF` 为主的量化格式几乎统治了本地推理生态，极大加速了新架构向消费级硬件的渗透。

---

### 💡 值得探索

1. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   *探索理由*：作为 OpenAI 在 HF 上少有的专注数据治理的工具型模型，它非常契合当前 AI 落地中严格的数据合规需求（如 PII 脱敏），是企业构建安全 RAG 应用的必备组件。
2. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**
   *探索理由*：如果你在开发端侧或边缘设备应用，这款模型不可错过。它展示了如何在极小激活参数（4B）下实现令人惊艳的 any-to-any 跨模态交互，堪称移动端多模态部署的教科书。
3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   *探索理由*：视频生成领域的新秀。支持 `gguf` 格式意味着它在视频创作者的本地工作流中具备极大的落地潜力，值得视频创作者和多模态研究者第一时间下载测试。