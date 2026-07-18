# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 22:13 UTC

---

这是一份为您定制的《Hugging Face 热门模型日报》（2026-07-19）：

---

# 🤗 Hugging Face 热门模型日报 (2026-07-19)

### 📡 今日速览
今日的 Hugging Face 社区被**极限量化与端侧推理**的风暴席卷，以 1-bit 和 2-bit 为代表的极低比特模型（如 `Ternary-Bonsai-27B`）正在打破本地运行大算力模型的硬件瓶颈。**多模态与视觉理解**全面普及，基于 Qwen3.5/3.6 系列微调的视觉模型以及百度推出的 `Unlimited-OCR` 展现了极高的社区需求。此外，Google 的 `gemma-4-31B-it` 凭借超 1200 万次的下载量稳居底座模型霸主地位，而 `GLM-5.2` 与 `Hy3` 等国产大模型的开源也取得了极高的社区声誉。

---

### 🔥 热门模型分类一览

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 3,263 | ⬇️ 12,608,008
  - 说明: 谷歌新一代原生多模态对话旗舰，凭借庞大的下载量成为当前生态内最热的基础模型之一。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,125 | ⬇️ 541,662
  - 说明: 智谱开源的新一代采用 MoE 架构的对话大模型，登顶今日获赞榜，展现了卓越的指令跟随能力。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent | 👍 829 | ⬇️ 13,571
  - 说明: 腾讯混元团队发布的最新一代主力语言模型，凭借强悍的性能获得了极高的社区赞誉。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
  - 作者: GnLOLot | 👍 142 | ⬇️ 5,271
  - 说明: 面壁小小模型社区微调版，带上了类似 Opus 的思维链思考能力，展现了极高的可玩性。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 2,863 | ⬇️ 2,190,398
  - 说明: 无审查版的视觉 MoE 模型，兼顾高下载量与高点赞，是突破审查限制进行视觉研究的利器。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 2,023 | ⬇️ 2,088,470
  - 说明: 百度推出的超强大规模 OCR 模型，解决了复杂场景下的文字提取痛点，企业级刚需。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 👍 2,313 | ⬇️ 2,112,869
  - 说明: 支持 100 万上下文的视觉量化模型，兼具推理能力与实用性，火爆全网。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 👍 1,056 | ⬇️ 12,456
  - 说明: 极具潜力的新型多模态对话模型，一出道便斩获千赞，潜力无限。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
  - 作者: Wan-AI | 👍 113 | ⬇️ 2,328
  - 说明: 强悍的图生视频（I2V）生成模型，为开源视频生成赛道再添猛将。

#### 🔧 专用模型（代码、数学、医疗、嵌入、语音）
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 👍 258 | ⬇️ 86,385
  - 说明: 复旦 MOSS 团队推出的语音转文本及说话人分离专用模型，实用性极高。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 266 | ⬇️ 935
  - 说明: 专为 Function Calling（函数调用）和 Tool-use（工具使用）优化的 Jax 架构专用模型。
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  - 作者: ATH-MaaS | 👍 166 | ⬇️ 13,750
  - 说明: 基于 Qwen 架构微调的垂直领域 OCR 专用模型。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - 作者: InternScience | 👍 578 | ⬇️ 35,575
  - 说明: 专为构建复杂 Agentic（智能体）工作流设计的底座模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 440 | ⬇️ 1,218,815
  - 说明: 惊人的 1-bit 量化模型，让高达 270 亿参数的模型能在普通家用电脑上流畅运行，突破性的下载量！
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 👍 727 | ⬇️ 301,893
  - 说明: 极致的 2-bit 量化版本，体积更小，是端侧部署的奇迹。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 941 | ⬇️ 0
  - 说明: 修复了 Qwen 系列原有对话模板 Bug 的 Jinja 脚本，因直击开发者痛点而爆火。
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
  - 作者: jlnsrk | 👍 130 | ⬇️ 3,869
  - 说明: 将 GLM-5.2 压缩为 INT4 并支持纯 CPU 上的流式专家运行，极为惊艳的量化方案。

---

### 📈 生态信号
当前模型生态呈现出**“两极分化”**的有趣趋势：一方面，**Qwen (3.5/3.6)** 家族依然牢牢占据开源微调生态的半壁江山，尤其在视觉、多模态和无审查版本中势头正旺，成为了社区开发者最爱用的基座；另一方面，**极限量化技术**迎来了大爆发。以 `prism-ml` 为代表的 1-bit 和 2-bit GGUF/MLX 量化方案彻底引爆了端侧生态，证明了开发者对“在消费级硬件上跑大模型”的极度渴望。同时，闭源巨头（如 Google、百度、腾讯）正越来越积极地直接开源或通过 Hub 发布重量级工业级模型（如 OCR、视频生成），开源与闭源的边界正在因“开源权重”的繁荣而进一步模糊。

---

### 💡 值得探索

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** 🚀
   - **理由**：如果你想在自己的笔记本或普通台式机上挑战运行 27B 级别的大模型，这个 1-bit 量化版本是必试之作，它代表了目前开源界极限无损压缩的最高水平。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** 📄
   - **理由**：对于有 RAG（检索增强生成）或文档解析需求的开发者，百度放出的这个 OCR 模型拥有超百万下载量，实用性与准确率均处于业界第一梯队，非常值得接入工作流。
3. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** 🛠️
   - **理由**：零下载却近千赞！如果你正在基于 Qwen 开发应用，这个修复了原生模板 Bug 的项目是必看神器，能解决诸多由于模板渲染导致模型回复混乱的玄学问题。