# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 22:16 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 7 月 22 日的数据为您整理。

### 📰 今日速览
1. **多模态与端侧OCR大爆发**：以百度 `Unlimited-OCR` 和 Google `gemma-4-31B-it` 为代表的多模态模型迎来了惊人的下载量，视觉文本理解成为当前最核心的刚需应用。
2. **极限量化（1-bit/2-bit）成为主流**：以 `Bonsai-27B` 为代表的极低比特量化模型大受追捧，搭配 GGUF 和苹果 MLX 格式，标志着在本地设备运行大参数模型已蔚然成风。
3. **开源界全面拥抱“原生推理”与“去审查”**：Qwen 3.6 系列衍生模型霸榜，融合了深度思考与无审查微调，显示出社区对高自由度、强逻辑模型的强烈渴望。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,270 | ⬇️ 545,109
    *一句话说明：* 智谱开源的第五代重磅 MoE 大模型，凭借强大的对话与生成能力登顶语言模型点赞榜。
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,196 | ⬇️ 722,058
    *一句话说明：* 月之暗面推出的最新代码与多模态模型，展现了极强的工具调用和编程实战能力。
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 作者: poolside | 👍 149 | ⬇️ 3,056
    *一句话说明：* 专为复杂软件工程和代码生成打造的最新一代高性能基础模型。
*   **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | 作者: Motif-Technologies | 👍 117 | ⬇️ 125
    *一句话说明：* 新兴架构的文本生成基础模型，当前正处于备受关注的 Beta 测试阶段。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,597 | ⬇️ 2,237,351
    *一句话说明：* 百度推出的无限制 OCR 神器，解决了复杂场景下的文字提取痛点，周下载量突破 220 万。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 3,312 | ⬇️ 12,113,203
    *一句话说明：* 谷歌最新发布的多模态指令模型，以绝对优势霸占本周总下载量榜首（超 1200 万），普及率极高。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 1,353 | ⬇️ 16,441
    *一句话说明：* 新兴的强大的多模态对话模型，支持图片和音频输入，正在多模态赛道强势崛起。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | 作者: Wan-AI | 👍 151 | ⬇️ 2,497
    *一句话说明：* 专注于人物舞蹈动作生成的图生视频模型，极大地丰富了视频生成领域的垂直应用。
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 472 | ⬇️ 0
    *一句话说明：* 专为 Krea-2 模型打造的 LoRA，实现了强大的图像身份保持与精准编辑。

#### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 299 | ⬇️ 92,265
    *一句话说明：* 复旦 MOSS 团队推出的语音转写与说话人分离模型，是音频处理的工程利器。
*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | 作者: nvidia | 👍 96 | ⬇️ 93,021
    *一句话说明：* 英伟达发布的高效 1B 参数文本嵌入模型，兼顾了速度与语义检索精度，下载量强劲。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** & **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | 作者: openbmb | 👍 147 / 107 | ⬇️ 58 / 72
    *一句话说明：* 面壁智能推出的视觉-语言-动作（VLA）具身智能模型，标志着开源模型正式深入机器人控制与追踪领域。

#### 📦 微调与量化（社区微调、GGUF、极限压缩）
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (及其 1-bit/2-bit 版本) | 作者: prism-ml | 👍 897+ | ⬇️ 432k+
    *一句话说明：* 采用 2-bit 三值化极限压缩的 27B 模型，在保持可用性的同时将内存占用降至极低，引发本地部署热潮。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,968 | ⬇️ 1,997,690
    *一句话说明：* 基于最强 MoE 架构的去审查激进版微调，完美契合了开源社区对零内容限制的偏好，下载逼近 200 万。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,385 | ⬇️ 2,133,420
    *一句话说明：* 拥有 100 万超长上下文的量化推理模型，主打“平替 Claude”的神话级表现。
*   **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | 作者: AngelSlim | 👍 156 | ⬇️ 145,102
    *一句话说明：* 腾讯 Hy3 大模型的社区高精度量化版，方便开发者在消费级硬件上体验。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 作者: DavidAU | 👍 233 | ⬇️ 62,842
    *一句话说明：* 社区知名“炼丹师”出品的超级缝合去审查多模态量化模型，是极客玩家的最爱。

---

### 📈 生态信号
1. **Qwen 3.6 统治力显现：** 阿里 Qwen 系列的 3.6 版本（尤其是 35B-A3B 的 MoE 架构）已经完全接管了社区微调榜单，结合原生思维链和去审查微调，正取代 Llama 成为极客圈的新王。
2. **极限量化重构本地部署：** 1-bit 和 2-bit（如 `Ternary-Bonsai`）技术彻底火了，结合 GGUF 和 Apple MLX 生态，让普通笔记本跑起 20B+ 级别的高性能模型成为现实。
3. **具身智能与实用工具落地：** 开源界不再只卷纯文本，MiniCPM 转向机器人操作（VLA），百度和各大厂商猛攻高精度 OCR。模型生态正在从“大而全的秀肌肉”迅速向“解决具体问题的生产力工具”过渡。

---

### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *推荐理由：* 无论你是做文档解析、RAG 系统还是信息抽取，一个稳定且无限制的 OCR 模型是刚需。千万级的周下载量证明了它在实际生产环境中的极高价值。
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   *推荐理由：* 如果你受限于显存但又想体验 27B 大参数模型的智能，这个 2-bit 模型绝对值得一试。它代表了当前模型压缩与本地推理的最前沿平衡点。
3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   *推荐理由：* 跨越模态的里程碑。将大语言模型的能力直接转化为机器人的物理动作指令，是软硬结合开发者与前沿 AI 研究者不容错过的探路之作。