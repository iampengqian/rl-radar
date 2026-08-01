# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 22:17 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-08-02

---

#### 📌 1. 今日速览
今日 Hugging Face Hub 迎来了多项重磅开源模型发布，**月之暗面** 凭借全新的 Kimi-K3 斩获近万点赞，登顶趋势榜首。同时，多模态与图生文模型持续爆发，百度推出的 Unlimited-OCR 以下载量与高点赞展现出极强的实用价值。此外，**Qwen 3.5 / 3.6 系列** 继续在社区微调界占据绝对统治地位，大量基于其 MoE 架构的无审查版、量化版模型霸榜。

---

#### 🔥 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - **作者**: moonshotai | **点赞**: 9,466 | **下载**: 559,924
  - **简述**: 月之暗面最新开源的核心大模型，支持图生文与特征提取，凭借出色的综合性能和压缩技术登顶榜首。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** & **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**
  - **作者**: deepseek-ai | **点赞**: 1,946 / 1,402 | **下载**: 2,814,414 / 15,366
  - **简述**: DeepSeek V4 系列轻量版/迭代版，延续的高性能使其下载量轻松突破近三百万次。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - **作者**: zai-org | **点赞**: 4,732 | **下载**: 1,683,442
  - **简述**: 智谱 AI 推出的新一代 GLM 对话模型，采用 MoE 架构，在文本生成和对话能力上表现卓越。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** (注: 此处指系列大小模型)
  - **作者**: thinkingmachines | **点赞**: 1,672 / 212 | **下载**: 59,076 / 3,998
  - **简述**: 兼具多模态能力的新锐对话模型，社区关注度正在快速上升。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - **作者**: baidu | **点赞**: 3,712 | **下载**: 2,457,387
  - **简述**: 百度推出的无限制 OCR 模型，凭借极强的场景文字提取能力成为企业级刚需，下载量爆表。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
  - **作者**: microsoft | **点赞**: 170 | **下载**: 10,525
  - **简述**: 微软开源的高效视觉语言（VL）模型，进一步推动了端侧多模态技术的发展。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  - **作者**: microsoft | **点赞**: 242 | **下载**: 2,775
  - **简述**: 专为“Computer Use（计算机操控/Agent）”设计的多模态模型，能直接理解并操作图形界面。
- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** & **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**
  - **作者**: Audio8 / owensong | **点赞**: 166 / 361 | **下载**: 3,254 / 1,565
  - **简述**: 均为聚焦端侧部署的轻量级 TTS（文本转语音）和语音合成模型，针对 CPU 与 Edge AI 优化。
- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)**
  - **作者**: lodestones | **点赞**: 91 | **下载**: 0
  - **简述**: ComfyUI 生态下基于 Krea 架构的文生图 LoRA 模型，社区口碑尚处于发酵期。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - **作者**: poolside | **点赞**: 867 | **下载**: 77,021
  - **简述**: 专攻编程与代码生成的垂类大模型，表现亮眼。
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - **作者**: Kwaipilot | **点赞**: 390 | **下载**: 10,771
  - **简述**: 强力的开发版代码模型，基于 Qwen3.5 MoE 架构微调，在多项基准测试中表现优异。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - **作者**: upstage | **点赞**: 715 | **下载**: 13,426
  - **简述**: Upstage 最新发布的 2500 亿参数巨型模型，展现了在复杂逻辑推理任务上的顶尖实力。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
  - **作者**: microsoft | **点赞**: 141 | **下载**: 5,835
  - **简述**: 微软结合 1-bit 架构的语音识别（ASR）模型，是超低功耗语音转文字的突破性尝试。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** & **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - **作者**: DavidAU / HauhauCS | **点赞**: 1,231 / 3,221 | **下载**: 1,173,001 / 1,823,436
  - **简述**: 本地部署界最受欢迎的 Qwen 3.6 去审查/无限制 微调版本，下载量惊人，是海外社区的“硬核”首选。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - **作者**: prism-ml | **点赞**: 1,131 | **下载**: 716,341
  - **简述**: 采用三进制（2-bit）极限量化的 27B 模型，让普通消费级显卡也能跑起大参数模型。
- **[unsloth 系列](https://huggingface.co/unsloth)** (包含 Kimi-K3, DeepSeek-V4, Laguna 等)
  - **作者**: unsloth | **点赞**: 累计破千 | **下载**: 累计 20 万+
  - **简述**: 著名的 Unsloth 团队第一时间为今日所有重磅模型（如 Kimi-K3, DeepSeek-V4）提供了即插即用的 GGUF 和 4-bit 量化版。

---

#### 📈 3. 生态信号
当前模型生态呈现三个显著趋势：
1. **“Qwen 基座”统治微调界**：从趋势榜可见，几乎一半的社区微调模型（尤其是 MoE 架构）都基于 Qwen 3.5 或 3.6 打造。社区对“去审查”和“角色扮演”的需求激增，推动了此类高下载量变体的诞生。
2. **端侧与极低比特量化成熟**：2-bit（Ternary）、NVFP4 等极限量化技术开始大规模应用（如 nota-ai 的 NVFP4 量化版和 prism-ml 的三进制模型），表明开源界正在跨越显存壁垒，让 200B+ 模型平民化。
3. **大厂聚焦“实用性多模态”**：百度发力 Unlimited-OCR，微软发力 Fara1.5（Computer Use）。行业已不满足于单纯的“看图说话”，而是向能提取无限长文本、能直接操控操作系统的 Agentic（智能体）多模态迈进。

---

#### 💡 4. 值得探索
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：无论是做 RAG 知识库构建还是票据/长图表处理，这都是目前开源界最值得集成的视觉提取模型，兼具极高准确率和商业落地价值。
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**：带有 `computer-use` 标签的模型代表了下一代 AI Agent 的方向，非常适合研究大模型如何理解 UI 并转化为点击、输入等系统级操作。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你在寻找本地部署、无道德限制且性能强悍的 MoE 模型，这个版本在去除护栏的同时保留了极高的指令遵循能力，是本地玩家的首选。