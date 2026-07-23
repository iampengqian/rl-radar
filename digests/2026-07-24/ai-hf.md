# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 22:18 UTC

---

### 📰 Hugging Face 热门模型日报（2026-07-24）

#### 📌 今日速览
1. **Qwen3.6 系列迎来社区大爆发**：众多基于 Qwen3.6 的微调与量化版本（尤其是无审查版）霸榜，开源社区对最新基础大模型的应用热情极高。
2. **极致量化与边缘计算成主流**：1-bit/2-bit 极低比特量化技术（如 Bonsai-27B）大受欢迎，让 27B 级别的大模型也能在消费级硬件上流畅运行。
3. **多模态能力全面泛化**：以百度 Unlimited-OCR 为首的 OCR 与图文模型登顶，标志着多模态技术正快速向语音流式识别、文本到语音及机器人动作控制（VLA）等更广阔的垂直领域落地。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,363 | ⬇️ 596,442
  - *一句话说明*：采用 MoE 架构的最新一代通用大模型，登顶本周点赞榜，展现出极强的综合对话与生成能力。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 3,346 | ⬇️ 12,666,488
  - *一句话说明*：谷歌最新发布的 31B 指令微调多模态大模型，下载量破千万，是目前最强大的开源中等规模模型之一。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,245 | ⬇️ 766,522
  - *一句话说明*：月之暗面推出的最新一代主打代码生成与多模态推理的基础大模型。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | 作者: upstage | 👍 402 | ⬇️ 362
  - *一句话说明*：Upstage 推出的 2500 亿参数超大文本生成模型，展现了企业级开源模型的算力野心。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,872 | ⬇️ 2,414,259
  - *一句话说明*：百度推出的“无限”长图与复杂图像转文本（OCR）模型，凭借极高的精度霸占多模态榜单前列。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 1,502 | ⬇️ 24,669
  - *一句话说明*：备受关注的下一代多模态对话模型，能够处理极其复杂的图文交织输入。
- **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)** | 作者: Qwen | 👍 1,795 | ⬇️ 2,497,020
  - *一句话说明*：通义千问最新发布的文本转语音模型，支持高度定制化的声音克隆与生成，下载量极高。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 👍 924 | ⬇️ 750,118
  - *一句话说明*：英伟达推出的流式语音识别（ASR）轻量级模型，专为实时语音转写优化。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | 作者: microsoft | 👍 181 | ⬇️ 411
  - *一句话说明*：微软推出的文生图与图像编辑新基底模型，展现了 Diffusion 架构的新探索。
- **[openbmb/MiniCPM-RobotManip & RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotManip)** | 作者: openbmb | 👍 163/117 | ⬇️ 408/306
  - *一句话说明*：面壁智能推出的视觉-语言-动作（VLA）模型，标志着开源大模型正式向机器人控制与轨迹追踪领域进军。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 319 | ⬇️ 111,598
  - *一句话说明*：复旦大学 MOSS 团队推出的专注于音频转写与说话人分离的专用文本生成模型。
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | 作者: fdtn-ai | 👍 117 | ⬇️ 2,747
  - *一句话说明*：主打“安全性”的超小型文本生成模型，适合对计算资源极度敏感的安全过滤任务。
- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | 作者: nvidia | 👍 97 | ⬇️ 28,493
  - *一句话说明*：英伟达专为边缘计算设备打造的基底特征提取模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,438 | ⬇️ 2,126,755
  - *一句话说明*：拥有 100 万超长上下文的 Qwen3.5 GGUF 量化版，经过特殊微调以提供类似 Claude 的神话角色扮演体验。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 3,031 | ⬇️ 2,027,080
  - *一句话说明*：基于 Qwen3.6 MoE 架构的去审查版微调模型，在强调无限制对话的社区中疯狂传播。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 👍 619/980 | ⬇️ 1,910,116/576,083
  - *一句话说明*：采用极限 1-bit 和 2-bit 三值化量化的模型，在保持可用性的前提下极大降低了 27B 模型的显存门槛。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** 及其 NVFP4/GGUF 版本 | 作者: poolside | 👍 507 | ⬇️ 13,285
  - *一句话说明*：新晋流行基底模型，其官方紧跟发布的全格式量化版展示了模型部署的标准工作流。

---

### 📊 生态信号
当前开源大模型生态呈现三个极其显著的趋势：
1. **Qwen3.6 家族绝对主导**：榜单上有近三分之一的微调模型基于 Qwen3.6（尤其是 35B-A3B MoE 架构），其生态繁荣度已远超 Llama 系列。此外，“Uncensored（无审查/去对齐）”依然是开源社区微调的最核心驱动力。
2. **极低比特量化技术的成熟**：以 `prism-ml` 的 1-bit/2-bit Bonsai 为代表的极限量化方案，搭配 GGUF 和苹果 MLX 框架，表明社区正在彻底打通“大参数模型跑在消费级电脑上”的任督二脉。
3. **开源权重的全方位扩展**：开源大厂不再只卷文本大模型，而是快速向高价值垂直领域铺开。从百度的 OCR、阿里的 TTS，到英伟达的流式 ASR，再到面壁智能的机器人 VLA 模型，多模态正变得越来越“实用化”。

---

### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**：解决了传统 OCR 对超长图、复杂排版解析不佳的痛点。两周下载量破 240 万，如果有长图表提取或文档数字化的需求，这是目前的工业级天花板，必试。
2. **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
   - **理由**：想要在 Mac 电脑本地运行 27B 大模型？这个模型展示了目前最前沿的 1-bit 量化技术。它将极大降低本地部署的内存要求，是探索边缘计算与端侧 AI 的完美样本。
3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - **理由**：跳出文本与图像，这是探索 AI 如何控制物理世界（具身智能）的前沿开源尝试。对于研究视觉-语言-动作（VLA）模型在机器人手臂控制中的应用极具参考价值。