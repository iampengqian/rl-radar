# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 22:15 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-08-03)

## 1. 今日速览
本期 Hugging Face 趋势榜由**多模态**与**MoE（混合专家）架构**主导。月之暗面的 **Kimi-K3** 与百度的 **Unlimited-OCR** 凭借极强的图文处理能力席卷榜单，成为全网焦点。中国大模型阵营（DeepSeek、智谱、Qwen 衍生版）持续发力，全面霸榜语言与多模态生态。此外，社区对“无审查”个人助手的需求激增，以 Qwen3.6 系列为基座的微调与量化版本迎来了大爆发。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,751 | ⬇️ 2,050,533
  - 简介: 智谱 AI 推出的新一代 MoE 对话大模型，凭借卓越的推理与对话能力获得极高关注度。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** & **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - 作者: deepseek-ai | 👍 1,955 / 1,681 | ⬇️ 2,785,810 / 156,173
  - 简介: DeepSeek 最新一代轻量级文本生成主力模型，下载量破百万，生态采用极快。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 👍 876 | ⬇️ 80,102
  - 简介: 专为高级指令遵循与对话生成打造的强性能基座模型。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  - 作者: Nanbeige | 👍 625 | ⬇️ 33,042
  - 简介: 南北阁实验室推出的 3B 级别轻量级文本生成模型，适合端侧部署。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 👍 719 | ⬇️ 14,863
  - 简介: 韩国 Upstage 推出的 2500 亿参数超大规模开源模型，展现了挑战一线大厂的潜力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 👍 9,625 | ⬇️ 837,202
  - 简介: 本期榜首！月之暗面的最新多模态巨作，具备极强的图文理解与特征提取能力。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 3,775 | ⬇️ 2,536,284
  - 简介: 百度推出的“无限 OCR”模型，直击复杂场景图文转换痛点，下载量位居全场第二。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  - 作者: microsoft | 👍 182 | ⬇️ 272,148
  - 简介: 微软推出的高级视觉语言（VL）模型，支持丰富的多模态对话与理解。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  - 作者: owensong | 👍 371 | ⬇️ 1,825
  - 简介: 极具潜力的本地轻量级 TTS 语音合成模型，专为 CPU 和边缘设备设计。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  - 作者: microsoft | 👍 148 | ⬇️ 8,468
  - 简介: 微软结合 BitNet 架构的超低功耗语音识别（ASR）模型。
- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)**
  - 作者: lodestones | 👍 123 | ⬇️ 0
  - 简介: 集成于 ComfyUI 生态的文生图 LoRA 模型，支持 Krea 工作流。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者: Kwaipilot | 👍 401 | ⬇️ 13,164
  - 简介: 基于 Qwen3.5 MoE 架构的强力代码生成模型，专攻开发者编程辅助场景。
- **[LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)**
  - 作者: LiquidAI | 👍 88 | ⬇️ 6,957
  - 简介: 专为高效特征提取与句子嵌入设计的小型非 Transformer 架构编码器。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  - 作者: microsoft | 👍 249 | ⬇️ 2,938
  - 简介: 27B 规模的智能体模型，具有突出的 Agentic Search（智能体搜索）和计算机操控能力。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 3,238 | ⬇️ 1,892,654
  - 简介: 社区狂热追捧的无审查版 Qwen3.6 MoE 视觉模型，下载数逼近 200 万。
- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** & **[DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**
  - 作者: unsloth | 👍 248 / 334 | ⬇️ 88,481 / 48,707
  - 简介: Unsloth 官方提供的顶级 GGUF 量化版本，大幅降低了 Kimi-K3 和 DeepSeek-V4 的本地部署门槛。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 👍 1,333 | ⬇️ 1,372,285
  - 简介: 命名狂野的极限微调版 Qwen，融合了无限制对话与 MTP（多 token 预测）技术。
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)**
  - 作者: nota-ai | 👍 153 | ⬇️ 68,199
  - 简介: 采用最新 NVFP4 量化技术的 Solar 大模型，让 250B 巨兽在单卡上运行成为可能。

---

## 3. 生态信号
当前开源生态正经历**MoE架构的全面普及**，以 Qwen3.5/3.6 MoE、DeepSeek-V4 和 GLM-5.2 为首的底层模型正在疯狂吞噬榜单。**中国大模型厂商**（月之暗面、百度、深Seek、智谱等）在权重开源方面已形成压倒性优势，持续压制传统欧美大厂。
在应用层面，社区对**去审查化**和**本地部署**的需求迎来了爆发，带有“Uncensored”标签的 Qwen3.6 微调版下载数百万。同时，**NVFP4 与 GGUF** 量化技术的成熟，让 250B 级别的超大模型也能进入消费级显卡的射程，边缘 AI 迎来真正的繁荣。

---

## 4. 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **推荐理由**：打破了传统 OCR 模型对长图、复杂图表的解析限制。对于需要处理文档、网页截图和复杂排版的 RAG（检索增强生成）开发者来说，这是一个不可多得的利器。
2. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
   - **推荐理由**：明确标注带有 `computer-use` 和 `agentic-search` 标签。如果你想研究或开发能自主操作网页和软件的 AI Agent，这个模型的开源极具研究价值。
3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   - **推荐理由**：以近万点赞登顶，不仅具备强大的多模态能力，还支持 `compressed-tensors`。对于追求高效率、高精度的多模态应用开发者，它是本周绝对不能错过的基础座舱。