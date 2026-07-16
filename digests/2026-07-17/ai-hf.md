# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 22:18 UTC

---

### 🤗 Hugging Face 热门模型日报 (2026-07-17)

#### 📰 今日速览
今天的 Hugging Face Hub 呈现出“极致压缩”与“端侧多模态”双轮驱动的趋势。极低比特量化技术（如 1-bit、2-bit 乃至三值化）迎来大爆发，让 27B 级别的大模型在消费级硬件上流畅运行成为现实。多模态和视觉模型（如百度无限制 OCR、百度无限制 OCR、面壁智能带思考能力的 MiniCPM5）持续火热，尤其是“视觉理解+OCR”与“带推理链的微型化模型”备受开发者追捧。此外，Qwen 3.5/3.6 俨然已成为社区微调的“底座霸主”，衍生出无数高下载量的社区版本。

---

### 🔥 热门模型一览

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 👤 zai-org | 👍 4,027 | ⬇️ 513K
    *一句话说明：* 智谱 AI 推出的最新一代对话大模型，凭借强大的 MoE 架构霸榜今日语言模型点赞榜首。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 👤 tencent | 👍 812 | ⬇️ 11.8K
    *一句话说明：* 腾讯推出的混元 v3 系列模型，原生支持高质量的文本生成，大厂基础模型发布的焦点。
*   **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | 👤 GnLOLot | 👍 131 | ⬇️ 4.1K
    *一句话说明：* 面壁智能 1B 极小参数模型的微调版，融合了类 Claude 的写作风格与思考能力，主打极致的端侧体验。
*   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 👤 deepreinforce-ai | 👍 901 | ⬇️ 1.78M
    *一句话说明：* 一个广受下载欢迎的 35B 中大型参数对话/文本生成 GGUF 模型，兼顾性能与本地部署体验。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 👤 baidu | 👍 2,009 | ⬇️ 1.85M
    *一句话说明：* 百度推出的无限制 OCR 模型，以惊人的下载量证明了视觉文本提取在企业级与开发 者生态中的硬性刚需。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 👤 HauhauCS | 👍 2,785 | ⬇️ 2.32M
    *一句话说明：* 基于 Qwen3.6 视觉架构的无审查微调模型，主打激进、不受限的图文交互，下载量惊人。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 👤 thinkingmachines | 👍 786 | ⬇️ 4
    *一句话说明：* 全新的多模态对话模型，虽处于发布初期（下载量极少），但凭借出色的概念设计引发社区高度关注。
*   **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | 👤 Wan-AI | 👍 89 | ⬇️ 1.8K
    *一句话说明：* 阿里万相推出的 14B 图生视频大模型，专攻动作生成（如舞蹈）领域。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 👤 OpenMOSS-Team | 👍 231 | ⬇️ 75.1K
    *一句话说明：* 复旦 MOSS 团队推出的音频转文本模型，支持复杂的语音分离与说话人识别。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 👤 yuxinlu1 | 👍 1,206 | ⬇️ 506K
    *一句话说明：* 专为终端代理和编程设计的模型，具备强大的工具调用能力，深受开发者喜爱。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 👤 froggeric | 👍 924 | ⬇️ 0
    *一句话说明：* 修复了 Qwen 系列聊天模板 Bug 的底层工具，虽无直接下载量，但极高点赞反映了社区对工程细节的刚需。
*   **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 👤 Cactus-Compute | 👍 247 | ⬇️ 733
    *一句话说明：* 基于 JAX 开发、主打函数调用和工具使用的小型专用架构模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 👤 prism-ml | 👍 333+587 | ⬇️ 559K+74K
    *一句话说明：* 1-bit 与 2-bit（三值化）极致量化技术的代表作，大幅削减显存需求，掀起边缘设备部署狂潮。
*   **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | 👤 unsloth | 👍 215 | ⬇️ 1.71M
    *一句话说明：* Unsloth 出品的最新 NVFP4 量化版多模态大模型，兼顾了视觉能力与极速推理，百万级下载量说明一切。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 👤 empero-ai | 👍 2,231 | ⬇️ 2.04M
    *一句话说明：* 支持百万上下文的 9B 量化模型，融合 Qwen3.5 与 Claude 风格，是目前最受欢迎的轻量级本地 AI 助手之一。
*   **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** | 👤 jlnsrk | 👍 118 | ⬇️ 2.6K
    *一句话说明：* 针对 CPU 和流式专家优化的 INT4 版本，让没有高端 GPU 的用户也能跑通最新的 GLM-5.2。

---

### 📈 生态信号

**1. 模型家族势头正旺：Qwen 系列占据半壁江山**
从榜单可以明显看出，Qwen 3.5 与 3.6 架构已经成为 2026 年开源社区最青睐的“底座”。无论是打造百万上下文、进行视觉多模态融合，还是做无审查微调，Qwen 系列在各个细分赛道（尤其是 GGUF 和端侧量化）都占据统治地位。此外，国产大模型生态（智谱 GLM-5.2、腾讯混元 Hy3、面壁 MiniCPM5、百度 OCR）正在集体爆发，在底层技术与应用落地上全面开花。

**2. 极致压缩与端侧推理彻底爆发**
1-bit/2-bit（如 prism-ml 的 Bonsai 系列）以及 NVFP4 量化技术的成熟是一个巨大拐点。27B-35B 级别的大模型不再是高端显卡的专属，普通笔记本和 CPU 设备也能通过 llama.cpp 和 MLX 实现流畅运行。开源模型正在通过“极限瘦身”抢占闭源模型（如 GPT-4、Claude）无法触及的隐私端侧市场。

**3. 推理与 Agent 化成为微调标配**
社区不再满足于单纯的“对话”，如 MiniCPM5 带有 "Thinking" 标签，以及各种 "Agentic" 标签的涌现，表明开源模型正全面拥抱内置思维链和工具调用能力。

---

### 💡 值得探索

1.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) (重点推荐给本地部署玩家)**
    *   **推荐理由：** 体验前沿的 1-bit 量化技术。如果你想在自己的 Mac 或普通游戏本上跑起一个参数量高达 27B 的大模型，而不卡顿、不爆显存，这个模型是必试之作。
2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) (重点推荐给 RAG 与应用开发者)**
    *   **推荐理由：** 具有现象级的 185 万次下载量。如果你的工作流中涉及文档解析、图表理解或 RAG 知识库构建，这款主打“无限制”的 OCR 模型将极大提升图文转化率与准确性。
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) (重点推荐给极客与程序员)**
    *   **推荐理由：** 名字虽长但极具实力。针对终端代理和编程辅助进行了深度微调，适合需要本地运行 AI 编程助手、要求强大工具调用能力的开发者。