# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 22:17 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 7 月 16 日的数据为您整理。

### 📰 今日速览
1. **Qwen 3.6 与多模态生态霸榜**：基于 Qwen 3.5/3.6 架构的衍生模型全面开花，特别是在端侧视觉理解（image-text-to-text）和 MoE（混合专家）领域占据主导地位。
2. **极限量化与本地部署狂热**：1-bit/2-bit 极低比特量化（如 Ternary-Bonsai）和 GGUF 格式迎来大爆发，社区对在纯 CPU 或低算力设备上运行 30B 级 MoE 模型的需求激增。
3. **大厂发力垂类基础模型**：百度推出了不限场景的 `Unlimited-OCR`，腾讯的 `Hy3` 和智谱的 `GLM-5.2`（MoE架构）也获得了极高的关注度，展现了国产开源大模型的强劲势头。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 3,990 | **下载**: 489,611
    *   **说明**: 智谱 AI 推出的新一代 MoE 大型对话/文本生成模型，登顶今日点赞榜，展现出强大的基础对话与生成能力。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   **作者**: tencent | **点赞**: 799 | **下载**: 10,406
    *   **说明**: 腾讯混元团队的第三代文本生成模型，以高性价比和优秀的中文理解持续吸引开发者。
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**
    *   **作者**: deepreinforce-ai | **点赞**: 891 | **下载**: 1,533,354
    *   **说明**: 拥有百万级下载量的 35B 对话模型，由于其极佳的端点兼容性和 GGUF 格式，成为本地部署的爆款。
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者**: yuxinlu1 | **点赞**: 1,198 | **下载**: 468,629
    *   **说明**: 基于 Gemma-4 架构的深度定制版，专为终端环境下的代码编写和 Agentic（智能体）工作流设计。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 2,001 | **下载**: 1,715,301
    *   **说明**: 百度推出的超强图文转换/OCR 特征提取模型，下载量惊人，几乎打破了传统 OCR 的长文本和复杂排版限制。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,757 | **下载**: 2,443,871
    *   **说明**: 今日下载量榜首！基于 Qwen3.6 的视觉 MoE 无审查微调版，社区最受欢迎的激进型多模态底座。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者**: empero-ai | **点赞**: 2,210 | **下载**: 2,006,265
    *   **说明**: 结合了视觉与强推理能力的 9B 模型，拥有 100 万超长上下文，且对本地部署（llama.cpp）极其友好。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   **作者**: thinkingmachines | **点赞**: 282 | **下载**: 0
    *   **说明**: 全能型多模态新星，同时支持图像到文本和音频到文本的处理，备受社区期待。
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
    *   **作者**: robbyant | **点赞**: 99 | **下载**: 0
    *   **说明**: 基于“世界模型”理念的图生视频（I2V）架构，主打快速且因果一致的视频生成。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   **作者**: OpenMOSS-Team | **点赞**: 211 | **下载**: 65,109
    *   **说明**: 复旦 MOSS 团队推出的语音转写专用模型，主打高精度的说话人分离（Diarize）功能。
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
    *   **作者**: Cactus-Compute | **点赞**: 236 | **下载**: 571
    *   **说明**: 基于 JAX 开发的轻量级模型，专精于函数调用和工具使用，适合构建高效 AI Agent。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   **作者**: froggeric | **点赞**: 915 | **下载**: 0
    *   **说明**: 专为 Qwen3.5 修复并优化 Jinja 聊天模板的配置文件，解决了开发者在使用 MLX 等工具时的痛点。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   **作者**: prism-ml | **点赞**: 447 | **下载**: 23
    *   **说明**: 前沿的三值化（Ternary, 2-bit）量化尝试，将 27B 模型体积压榨到极致，代表了 2026 年端侧部署的新极限。
*   **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**
    *   **作者**: unsloth | **点赞**: 180 | **下载**: 55,222
    *   **说明**: Unsloth 对 DeepSeek 最新 V4 Flash 版本进行的极速 GGUF 量化，保留了强大的推理能力。
*   **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
    *   **作者**: jlnsrk | **点赞**: 108 | **下载**: 2,188
    *   **说明**: 针对智谱 GLM-5.2 的 int4 CPU 量化版，利用专家流式处理实现 PC 端的高效推理。

---

### 📈 生态信号
1. **模型家族霸权**：**Qwen（通义千问）**家族（包括 3.5 和 3.6 版本）在榜单中处于绝对的统治地位。榜单中近一半的 LLM/Multimodal 底座均基于 Qwen 架构（包括 MoE 版和无审查微调版）。此外，**GLM**、**DeepSeek** 和 **Gemma-4** 也是社区进行 Agentic 和 代码微调的热门选择。
2. **“去中心化”与“无审查”**：榜单上出现了多个标有 `uncensored` 和 `aggressive` 的社区微调版本（如 HauhauCS），这表明在 2026 年，开发者对模型个性化和无对齐限制的需求依然极其旺盛。
3. **极限量化成主流**：Unsloth、prism-ml 等团队正在将量化推向 1-bit / 2-bit 甚至 NVFP4 的极限。结合 `llama.cpp` 和 `mlx` 生态，在消费级硬件上运行 30B+ 级别的视觉 MoE 模型已经不再是难事。

---

### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *   **理由**：拥有超过 170 万次的下载量，如果你的工作流涉及复杂的文档数字化、长图表解析或随意排版的文字提取，这个专用模型目前是开源界的性能天花板。
2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   *   **理由**：三值化（2-bit）技术对存储和内存带宽的要求极低，非常适合研究“如何在树莓派或旧款笔记本上运行 20B+ 参数的大语言模型”，是探索极限边缘计算的好范本。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *   **理由**：融合了当前最热的 Qwen3.6 MoE 架构、视觉理解以及去审查化。对于需要极高创作自由度、同时又要求模型具备视觉输入能力的本地 AI 玩家来说，它是目前的完美选择。