# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 22:19 UTC

---

这份报告为您梳理了 2026 年 7 月 29 日 Hugging Face Hub 上的热门模型动态。

---

# 🤗 Hugging Face 热门模型日报 (2026-07-29)

### 📌 今日速览
1. **多模态与视觉理解迎来爆发**：以百度（Unlimited-OCR）和微软为代表的企业正密集推出强大的多模态模型，视觉理解、文档 OCR 及计算机操控成为核心突破口。
2. **中国大模型矩阵全面霸榜**：Moonshot (Kimi-K3)、智谱 (GLM-5.2) 与 Qwen3.6 系列不仅主导了基础语言模型榜单，更在多模态和代码领域展现出绝对统治力，生态下载量破千万。
3. **极限量化与本地部署需求激增**：2-bit/3-bit 极低比特量化技术（如 ternary、NVFP4）及 CPU 端语音/TTS 小模型大量涌现，标志着开源社区正全力推进 AI 向边缘端和消费级硬件的渗透。

---

### 🔥 热门模型分类

#### 🧠 语言模型（LLM、对话模型）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,592 | 📥 1.27M
  智谱新一代 MoE 大模型，兼顾对话与推理能力，凭借庞大的开源生态霸榜。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 作者: poolside | 👍 794 | 📥 67.3K
  基础文本生成模型，备受社区期待，其相关量化版本在榜单中多次出现。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | 作者: Nanbeige | 👍 524 | 📥 18.9K
  面向轻量化部署的高性能 3B 级通用语言模型。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 作者: prism-ml | 👍 672 | 📥 2.34M
  极低比特（1-bit）量化的大模型，凭借极致的显存压缩在本地部署圈引起轰动。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 3,406 | 📥 2.69M
  百度推出的无限上下文 OCR 多模态模型，解决了复杂长文档的识别痛点，下载量惊人。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | 作者: moonshotai | 👍 7,902 | 📥 99.2K
  月之暗面最新多模态特征提取模型，今日热度榜首，社区关注度极高。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | 作者: microsoft | 👍 414 | 📥 2.0K
  微软推出的新一代图像生成与编辑扩散模型，支持高质量的指令化修图。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | 作者: microsoft | 👍 178 | 📥 1.5K
  基于 Qwen3.5 的视觉 GUI 操控模型，展现了“看屏幕操作电脑”的 Agent 潜力。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | 作者: owensong | 👍 261 | 📥 645
  纯 CPU 本地运行的轻量级语音合成（TTS）模型，音质与延迟平衡极佳。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** | 作者: microsoft | 👍 87 | 📥 1.75K
  融合 1-bit 架构的语音识别模型，主打超低功耗与高效推理。

#### 🔧 专用模型（代码、数学、OCR）
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 作者: Kwaipilot | 👍 282 | 📥 6.28K
  基于 Qwen3.5 架构的 MoE 代码生成模型，专精于复杂开发任务。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,331 | 📥 681K
  月之暗面推出的代码与图文多模态特化模型，下载量稳步破百万。
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | 作者: fdtn-ai | 👍 219 | 📥 7.67K
  网络安全与数据防护专用的微型语言模型，适合集成于安全网关。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 作者: Qwen | 👍 2,567 | 📥 6.16M
  Qwen 官方发布的 MoE 架构模型，正成为目前开源社区微调的绝对基石（下载量第一）。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 3,157 | 📥 1.86M
  基于无限制调教的视觉 MoE 模型，社区微调版本中的现象级作品。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,501 | 📥 1.26M
  融合了 Claude 风格的 1M 长上下文 GGUF 模型，极受本地 llama.cpp 玩家推崇。
- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** | 作者: poolside | 👍 153 | 📥 180K
  专为 NVIDIA 新一代硬件优化的 FP4 精度模型，兼顾体积与生成质量。

---

### 📊 生态信号
今日的榜单被**“Qwen 家族”**与**“多模态落地”**双重主导。Qwen3.5/3.6 系列（包含微调版）凭借极低的激活参数（如 A3B）霸占了底座和下游微调榜单；而中国大厂（百度、月之暗面、智谱）正将开源战火烧至垂直场景，尤其是长文档 OCR 和视觉理解领域。
在部署侧，**NVFP4** 与 **Ternary（三值化/1-bit、2-bit）**正成为量化技术的新宠，推动了开源权重的彻底“轻量化”。此外，社区对“Uncensored（去审查）”和高推理能力（Claude 风格融合）的追捧依然强劲，开源生态正呈现出向终端推理、高自由度演进的趋势。

---

### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：如果你的业务涉及复杂的排版、超长截图或扫描件解析，这款高达 269 万次下载的 OCR 模型是目前多模态文档处理的最优解之一。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：使用 1-bit 技术压缩的 27B 模型。对于苦于显存不足的开发者，它能在极小的硬件损耗下，让你在普通笔记本上体验接近 30B 级别的大模型智慧。
3. **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**：微软在 Diffusion 领域的新作，支持基于指令的图像精细编辑，非常适合设计师或开发者在本地构建图片处理工作流。