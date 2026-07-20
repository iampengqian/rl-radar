# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 22:17 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-07-21）

## 1️⃣ 今日速览
今日的 Hugging Face Hub 呈现出**端侧量化**与**全能多模态**双剑合璧的趋势。以 Qwen3.5/3.6 和 Gemma-4 为底座的全能视觉对话模型强势霸榜，展现出现有开源大语言模型向多模态演进的必然性。极低比特量化技术迎来大爆发，以 `prism-ml` 的 1-bit/2-bit Bonsai 模型为代表，打破了端侧大算力需求的瓶颈。此外，垂直领域的文档解析（OCR）、实时音视频处理以及具身智能正成为开发者极力追捧的新风口。

---

## 2️⃣ 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | 👍 4,218 | ⬇️ 531,947
    *   **简介**: 智谱推出的最新一代 GLM 系列大模型，采用 MoE 架构，凭借强大的对话与生成能力获得本周超高关注度。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   **作者**: google | 👍 3,295 | ⬇️ 11,987,240
    *   **简介**: 谷歌新一代 31B 指令微调模型，支持图文理解，下载量破千万，是当前中大型开源模型的绝对基石。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   **作者**: tencent | 👍 846 | ⬇️ 13,698
    *   **简介**: 腾讯混元系列的最新一代文本生成模型，在中文理解和推理任务上表现优异。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | 👍 2,417 | ⬇️ 2,122,848
    *   **简介**: 百度推出的无限制 OCR 模型，能够处理极高分辨率和复杂排版的图文提取，直击企业级文档解析痛点。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者**: empero-ai | 👍 2,365 | ⬇️ 2,117,323
    *   **简介**: 拥有 100 万上下文窗口的多模态推理模型，在视觉与长文本理解上调校极佳，下载量惊人。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | 👍 2,931 | ⬇️ 2,007,025
    *   **简介**: 基于 Qwen3.6 MoE 架构的无审查视觉模型，填补了开源社区在无约束多模态生成领域的空白。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
    *   **作者**: Wan-AI | 👍 143 | ⬇️ 2,408
    *   **简介**: 专注于人物动作生成的图生视频（I2V）模型，展现了开源在垂直动作控制领域的突破。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   **作者**: thinkingmachines | 👍 1,253 | ⬇️ 13,462
    *   **简介**: 新型的多模态对话模型，支持文本和图像的深度融合与交互。

### 🔧 专用模型（代码、数学、医疗、嵌入、具身智能）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   **作者**: moonshotai | 👍 1,171 | ⬇️ 713,992
    *   **简介**: 月之暗面推出的最新代码与多模态能力特化模型，在前端生成与工具调用上表现卓越。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   **作者**: OpenMOSS-Team | 👍 290 | ⬇️ 87,533
    *   **简介**: 复旦 MOSS 团队的语音转写与说话人分离（Diarization）模型，是会议、访谈音频处理的利器。
*   **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)**
    *   **作者**: nvidia | 👍 85 | ⬇️ 61,708
    *   **简介**: 英伟达推出的高精度文本嵌入模型，是构建当前 RAG（检索增强生成）系统的强力核心。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** / **[RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
    *   **作者**: openbmb | 👍 100/99 | ⬇️ 0
    *   **简介**: 面向具身智能的视觉-语言-动作（VLA）模型，用于机器人操作与轨迹追踪，标志着开源向物理世界迈进。

### 📦 微调与量化（社区微调、GGUF、MLX）
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** 及 **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **作者**: prism-ml | 👍 537/847 | ⬇️ 1,262,894/338,945
    *   **简介**: 本周最火的量化项目，将庞大的 27B 模型压缩至 **1-bit 和 2-bit**，大幅降低显存要求，让消费级设备也能跑起大模型。
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   **作者**: Cactus-Compute | 👍 289 | ⬇️ 950
    *   **简介**: 基于 JAX 构建的高效函数调用与工具使用特化微调模型，提升了 Agent 架构的稳定性。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   **作者**: DavidAU | 👍 149 | ⬇️ 16,719
    *   **简介**: 著名社区作者 DavidAU 的“炼丹”力作，融合了创意写作与无审查限制的极端微调版本。

---

## 3️⃣ 生态信号
当前模型生态呈现三大显著趋势：
1. **基座模型的迭代固化**：**Qwen3.5/3.6** 和 **Gemma-4** 已经取代早期的 Llama 或 Mistral，成为本周榜单中绝对的主流底座。尤其 Qwen 系列，不仅占据了原生日榜，其更是作为基底模型滋养了榜单上超过 40% 的微调与多模态版本。
2. **极限量化大爆发**：以 `prism-ml` 为首推出的 **1-bit/2-bit (Ternary/三值化)** 技术，正引领一场轰轰烈烈的端侧革命。它打破了过去 4-bit/8-bit 量化的体积底线，实现了“百亿参数，消费级设备轻松跑”的壮举，量化社区呈现出向极低比特进化的趋势。
3. **开源向“全能与物理实体”双向延伸**：一方面，纯文本大模型 LLM 正迅速被“图/音/视”全能多模态模型（VL）所替代；另一方面，像 `openbmb` 发布的 **Robot VLA（视觉-语言-动作）** 模型表明，开源 AI 正在跨越屏幕边界，向具身智能（机器人控制）迈进。

---

## 4️⃣ 值得探索

*   **🧪 [prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)**
    *   **推荐理由**：如果你是 Mac 或本地开发者，这个 2-bit 量化版的 27B 模型绝对值得一试。它将模型体积和内存消耗压缩到了极致，是目前探索“如何在极低资源下保留 27B 模型智商”的最佳范例。
*   **🔬 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **推荐理由**：传统的多模态大模型在处理长图表或密集文档时往往会遗忘或产生幻觉，而该模型专为无限制分辨率的 OCR 优化，非常适合 RAG 系统中的企业级数据处理与前端 UI 还原。
*   **🤖 [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   **推荐理由**：具身智能是 AI 的下一个前沿。这个模型展示了如何将视觉理解转化为机器人的动作指令，对于机器人爱好者及前沿 AI 研究人员来说，是极具前瞻性的探索项目。