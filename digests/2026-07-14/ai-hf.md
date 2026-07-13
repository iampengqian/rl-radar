# Hugging Face 热门模型日报 2026-07-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-13 22:15 UTC

---

这份报告为您梳理了 2026 年 7 月 14 日 Hugging Face Hub 上的最新生态动态。以下为详细内容：

### 📰 Hugging Face 热门模型日报（2026-07-14）

#### 📌 今日速览
1. **基础模型全面跨代**：Qwen3.5/3.6、GLM-5.2 和 DeepSeek-V4 已成为当前开源生态的绝对核心基座。
2. **MoE（混合专家）与量化技术主导**：30B-75B 参数规模的 MoE 架构（如 A3B/A9B 激活）成为大厂发力的重点，同时 NVFP4 等新型量化格式和 Unsloth 社区微调占据极高下载量。
3. **垂直能力极速扩展**：Nvidia 推出了 LocateAnything（3D/空间定位）和 Audex 等前沿多模态模型，而 Baidu 的 Unlimited-OCR 和 Google 的 TabFM 则在 OCR 和表格数据领域填补了空白。

---

#### 🔥 热门模型分类

##### 🧠 语言模型（LLM、对话模型、指令微调）
* **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,896 | ⬇️ 464,914
  *一句话说明*：基于全新 `glm_moe_dsa` 架构的最新一代对话大模型，凭借强大的生成能力登顶语言模型点赞榜。
* **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 754 | ⬇️ 9,157
  *一句话说明*：腾讯最新发布的 Hunyuan 系列文本生成模型，标志着国内大厂在基础模型上的持续迭代。
* **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | 作者: InternScience | 👍 524 | ⬇️ 29,801
  *一句话说明*：基于 Qwen3.5 MoE 打造的智能体专用模型，专为复杂工具调用和推理设计。
* **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | 作者: SupraLabs | 👍 113 | ⬇️ 1,573
  *一句话说明*：仅有 51M 参数的极小规模 LLaMA 路由模型，展现了“小而美”在任务分发上的实用价值。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
* **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,720 | ⬇️ 1,503,441
  *一句话说明*：Nvidia 推出的 3B 视觉定位模型，能精准理解图像文本指令并定位任何目标，下载量和热度极高。
* **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,963 | ⬇️ 1,506,937
  *一句话说明*：百度推出的无限制 OCR 模型，突破了传统图像文字提取的分辨率和长度限制。
* **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | 作者: robbyant | 👍 92 | ⬇️ 0
  *一句话说明*：主打快速推理的 14B 图生视频“世界模型”，展现了生成模型向物理规律理解迈进的趋势。
* **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 360 | ⬇️ 21,590
  *一句话说明*：Google 推出的针对表格数据（分类/回归）的基础模型，为零样本结构化数据处理提供了新范式。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
* **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 161 | ⬇️ 39,509
  *一句话说明*：复旦大学 MOSS 团队推出的语音转写与说话人分离（Diarization）专用模型。
* **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** | 作者: nvidia | 👍 142 | ⬇️ 1,058
  *一句话说明*：Nvidia 针对 Audio（音频）理解的 MoE 专用模型，深化了其在非文本模态的布局。
* **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | 作者: CohereLabs | 👍 102 | ⬇️ 11,647
  *一句话说明*：Cohere 针对小语种（阿拉伯语）定制的高精度 ASR 模型。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
* **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,703 | ⬇️ 2,512,124
  *一句话说明*：基于 Qwen3.6 的去审查/无过滤微调版本，深受社区追捧，下载量突破 250 万。
* **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,078 | ⬇️ 1,985,221
  *一句话说明*：融合了 Claude 系统提示词与 100 万上下文的 9B 模型，GGUF 格式使其成为本地部署的明星。
* **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | 作者: unsloth | 👍 161 | ⬇️ 49,423
  *一句话说明*：Unsloth 迅速跟进量化的 DeepSeek V4 Flash 版，大幅降低了体验顶尖闭源模型对标效果的门槛。
* **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 1,073 | ⬇️ 2,901,906
  *一句话说明*：支持多 Token 预测（MTP）的 Qwen3.6 GGUF 版，兼顾了高生成速度与端侧可用性。

---

#### 📈 生态信号
1. **Qwen 宇宙的统治力**：榜单中超过 40% 的衍生模型（无论是 MoE 智能体、视觉模型还是端侧 GGUF）均基于 Qwen3.5/3.6 微调或量化而来。Qwen 已然取代 Llama 成为全球开发者最爱用的开源基座。
2. **MoE 架构全面下沉**：从 Nvidia 的 75B-A9B 到社区的 35B-A3B，MoE 正在成为标配。开发者越来越倾向于使用参数量大但激活量极小的模型，以在不牺牲效果的前提下压低推理成本。
3. **量化与去审查需求爆炸**：Unsloth 提供的 NVFP4 和 GGUF 量化模型动辄数百万下载，证明“本地运行/边缘部署”需求极为强劲。同时，“Uncensored（去审查）”微调模型持续霸榜，反映了开源社区对模型输出控制的个性化追求。

---

#### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   * **理由**：传统 OCR 在处理长图、复杂排版时极易崩溃。百度此模型解决了高分辨率和无限长度的痛点，极具工业落地价值，适合集成到各类文档数字化工作流中。
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   * **理由**：结合了 MTP（多 Token 预测）技术与 GGUF 端侧量化。如果你关注如何在普通电脑上实现极速的大模型推理，这是目前最佳的研究和测试对象。
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   * **理由**：表格基础模型是一个尚待开发的蓝海。它突破了传统神经网络处理结构化数据的瓶颈，对于数据分析师和算法工程师在处理零样本分类/回归任务时，将是一个极佳的实验工具。