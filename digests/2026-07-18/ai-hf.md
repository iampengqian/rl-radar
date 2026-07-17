# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 22:13 UTC

---

这份《Hugging Face 热门模型日报》为您梳理 2026 年 7 月 18 日开源 AI 社区的最新动态。

---

# 🤗 Hugging Face 热门模型日报（2026-07-18）

### 📰 今日速览
1. **国产大模型强势霸榜**：智谱的 [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) 和腾讯的 [Hy3](https://huggingface.co/tencent/Hy3) 同时迎来重磅发布，在自然语言处理榜单上占据极高热度。
2. **极限量化与端侧推理爆发**：以 [Bonsai-27B](https://huggingface.co/prism-ml/Bonsai-27B-gguf) 为代表的 1-bit/2-bit 模型（甚至包含三进制 Ternary）正在通过 llama.cpp 和 Apple MLX 架构，将 30B 级别的大模型塞进消费级设备。
3. **多模态与垂直能力精细化**：以百度 [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) 和 OpenMOSS 的 [语音转写模型](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) 为代表，OCR、语音及视频生成（如 LTX 生态）在实用化和细粒度控制上取得显著进展。

---

### 🔥 热门模型精选

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,070 | 📥 534,698
  *简介*：智谱最新一代通用大模型，采用 MoE 架构，凭借出色的对话和推理能力登顶今日榜首。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 819 | 📥 12,719
  *简介*：腾讯混元第三代模型，备受社区期待的基础文本生成重磅更新。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** | 作者: InternScience | 👍 571 | 📥 34,066
  *简介*：基于 Qwen3.5 MoE 打造，专为复杂 Agent 任务（工具调用、多步推理）优化的强力模型。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,018 | 📥 1,992,355
  *简介*：百度推出的超强 OCR 模型，支持超高分辨率和无限长度图像的精准文字提取，下载量惊人。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,269 | 📥 2,096,147
  *简介*：支持 100 万超长上下文的视觉多模态模型，融合了强推理能力，其量化版广受个人开发者欢迎。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | 作者: Wan-AI | 👍 106 | 📥 2,185
  *简介*：基于图生视频（I2V）架构的 14B 大模型，擅长生成流畅且动作连贯的动态视频。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 248 | 📥 83,160
  *简介*：复旦大学 MOSS 团队的语音转文本模型，自带说话人分离功能，极具实用价值。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 342 | 📥 0
  *简介*：基于 Krea-2 的图像编辑 LoRA，能在编辑图像时完美保留人物一致性。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 作者: Cactus-Compute | 👍 256 | 📥 874
  *简介*：基于 JAX 架构的专用模型，在函数调用和工具使用基准上表现惊艳。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,824 | 📥 2,295,313
  *简介*：无审查版 Qwen3.6 MoE 视觉语言模型，迎合了社区对去对齐、自由度高的模型需求。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 作者: prism-ml | 👍 386 | 📥 1,045,182
  *简介*：划时代的 1-bit 量化大模型，在保持极高智商的同时，将 30B 级模型的运行门槛打到了消费级。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍 932 | 📥 0
  *简介*：纯粹解决痛点的工具，为 Qwen3.5/3.6 系列修复了聊天模板 bug，获得了极高点赞。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | 作者: GnLOLot | 👍 273 | 📥 154,762
  *简介*：面壁小钢炮 MiniCPM5 的深度微调版，模仿 Claude 风格并加入了思维链能力。

---

### 📈 生态信号

1. **Qwen 家族占据绝对统治力**：榜单上有近一半的微调、量化及衍生模型基于 Qwen3.5 / Qwen3.6 架构，它已实质上成为当前开源多模态和中小型 MoE 的标准基座。
2. **极限量化技术（1-bit/2-bit）大爆发**：从 [Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) 到 [GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)，将大模型压缩到极低位宽以适配 CPU（如 int4）和 Mac（MLX 架构），正成为超越单纯参数竞争的核心技术路线。
3. **开源 vs 闭源**：开源生态正在转向“高参数+极限量化下放”和“无审查微调（Uncensored）”，以此构建闭源 API 无法提供的差异化优势。

---

### 🎯 值得探索

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**（1-bit 量化革命）
   *推荐理由*：如果你想在普通笔记本或单张消费级显卡上跑起 27B 级别的大模型，这是必试之选。它展示了 llama.cpp 生态在 2026 年对内存利用的极致压榨。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**（突破分辨率限制）
   *推荐理由*：真正解决了图表、长卷轴等复杂场景的 OCR 难题，RAG 开发者和文档处理工作流的必备利器。
3. **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**（视频视角控制）
   *推荐理由*：结合 LTX 视频底模和 IC-LoRA，可以从单一提示生成多视角的一致性视频，极具 AIGC 视频创作商业潜力。