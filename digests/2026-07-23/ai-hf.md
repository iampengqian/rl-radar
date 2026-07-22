# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 22:18 UTC

---

这份报告为您梳理了 2026 年 7 月 23 日 Hugging Face Hub 上的前沿动态与生态趋势。

---

# 🤗 Hugging Face 热门模型日报 (2026-07-23)

## 🌟 今日速览
1. **开源巨头狂飙**：Google 的 [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) 以超 1200 万次下载量彻底霸榜，标志着 30B 级别多模态模型已成为开发者的新标配。
2. **极限量化技术爆发**：以 1-bit 和 2-bit 为代表的极限量化技术大放异彩，[prism-ml](https://huggingface.co/prism-ml) 推出的 Bonsai 系列证明了大模型在极低精度下依然能保持惊人的下载量与活跃度。
3. **OCR 与具身智能崛起**：百度等厂商将无限制 OCR 视觉模型推向新高度；同时，以 OpenBMB 为代表的机构正在快速填补视觉-语言-动作（VLA）在机器人领域的空白。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,334 | 📥 545,109
    *一句话说明：* 智谱新一代 GLM 系列大模型，凭借超高的点赞量成为本周最受瞩目的开源对话与文本生成基础模型之一。
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 作者: prism-ml | 👍 592 | 📥 1,404,962
    *一句话说明：* 27B 参数的文本生成模型，主打 1-bit 极限量化，让消费级硬件轻松跑起大参数模型，下载量极高。
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | 作者: Nanbeige | 👍 223 | 📥 0
    *一句话说明：* 南北阁实验室推出的 3B 级别轻量级文本生成模型，刚发布即登热榜，适合资源受限的边缘端部署。
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | 作者: upstage | 👍 194 | 📥 0
    *一句话说明：* Upstage 爆肝推出的 250B 超大参数开源模型，展现了非巨头企业在千亿级开源模型上的硬核实力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 3,327 | 📥 12,113,203
    *一句话说明：* 谷歌 Gemma 第四代 31B 多模态指令模型，支持图像文本理解，凭借极佳的性价比斩获千万级下载。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,698 | 📥 2,237,351
    *一句话说明：* 百度推出的无限制 OCR 模型，突破了传统图像文字提取的分辨率和长度限制，实用价值拉满。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** & **[RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | 作者: openbmb | 👍 154/114 | 📥 58/72
    *一句话说明：* 面壁智能推出的机器人操控与追踪视觉-语言-动作（VLA）模型，标志着开源模型正向物理世界（具身智能）深度渗透。
*   **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** | 作者: nvidia | 👍 86 | 📥 6,623
    *一句话说明：* 英伟达专为边缘端设备设计的生成式世界模型，有望加速自动驾驶与物理模拟的开发。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,221 | 📥 722,058
    *一句话说明：* 月之暗面针对编程任务强化的多模态模型，凭借极高的社区认可度，成为开发者的“AI 结对编程”新利器。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 308 | 📥 92,265
    *一句话说明：* 复旦 MOSS 团队推出的高精度音频转写与说话人分离模型，完美解决会议记录痛点。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 👍 914 | 📥 590,230
    *一句话说明：* 英伟达出品的超低延迟（0.6B）流式语音识别模型，专为实时语音交互场景打造。
*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** | 作者: nvidia | 👍 102 | 📥 93,021
    *一句话说明：* 强悍的文本嵌入模型，为下一代 RAG（检索增强生成）系统提供极速且精准的向量基底。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,998 | 📥 1,997,690
    *一句话说明：* 基于 Qwen3.6 MoE 架构的去审查多模态社区微调版，激进的对齐方式在极客圈引发了狂热下载。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,415 | 📥 2,133,420
    *一句话说明：* 拥有 100 万超长上下文的推理微调模型，GGUF 格式使其成为本地运行长文档分析的神器。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 👍 936 | 📥 432,196
    *一句话说明：* 将 27B 模型进行 2-bit（三值）极限量化，大幅降低内存占用，探索本地推理的最低底线。
*   **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** | 作者: unsloth | 👍 120 | 📥 7,377
    *一句话说明：* Unsloth 对热门多模态模型 Inkling 的官方量化版，保证了原版多模态性能的同时优化了端侧运行效率。

---

## 📈 生态信号
当前开源大模型生态呈现出**“两极分化与端侧狂热”**的态势。
1. **模型家族势头**：**Qwen（通义千问）**绝对是当前社区微调的“统治者”，榜单中大量 27B-35B 的高热度社区模型（如 HauhauCS, DavidAU 等）均是基于 Qwen 架构演变而来；同时 **Llama/Gemma** 生态依然占据统治级的下载量。
2. **开源 vs 闭源**：开源权重模型正以惊人的速度逼近甚至超越早期的闭源模型。百度、谷歌等大厂直接将顶级 OCR 和 30B+ 多模态模型开源，逼迫社区走向**“垂直功能极致化”**的竞争（如专门打长上下文、专门打无审查、专门打 OCR）。
3. **量化与微调趋势**：**极限量化（1-bit, 2-bit）与 MoE 架构的结合**是本月最大的亮点。以 GGUF 和 MLX 格式为主的端侧部署技术正在消除大模型落地的最后硬件门槛。“Uncensored（去审查）”与“Reasoning（强推理）”依然是社区微调最热衷的两个标签。

---

## 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *推荐理由*：如果你在做文档分析、RAG 数据清洗或发票处理，这款模型解决了传统 OCR 模型对长图、复杂图表支持极差的问题，百万级的下载量证明了其在生产环境的可靠性。
2. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *推荐理由*：MoE 架构（A3B 意味着每次仅激活约 3B 参数）加上 Qwen3.6 的强大底座，让这个模型在消费级显卡上既能跑出极速，又能获得不受限、极具创造力的回答，是本地玩家的当前版本答案。
3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
   *推荐理由*：智谱的 GLM 系列一直以出色的中英双语能力与长文本处理闻名。GLM-5.2 作为最新迭代，点赞数高居前三，非常适合需要替换 API 或进行本地商业应用试水的开发者进行基准测试。