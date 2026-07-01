# Hugging Face 热门模型日报 2026-07-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-01 22:24 UTC

---

# 🤗 Hugging Face 热门模型日报
**日期：2026年7月2日**

---

### 🌟 今日速览
今天 Hugging Face 平台迎来了**多模态能力**与**端侧大模型（MoE）**的集中爆发。百度发布的 `Unlimited-OCR` 强势登顶，标志着“无限流OCR”在开源社区取得重大突破；同时，智谱的 `GLM-5.2` 与通义千问的 `Qwen-AgentWorld-35B`（Qwen3.5系列）引发了社区狂热的微调与量化潮。此外，视频与图像生成领域由 `Krea-2` 家族与 `LTX-2.3` 占据主导，开源生态正向着“超长上下文”、“强Agent属性”和“本地极客化部署”的方向全速迈进。

---

### 🔥 热门模型盘点

#### 🧠 语言模型（LLM、对话模型、MoE）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者:** baidu | 👍 1,570 | ⬇️ 630,246
    *   **简介:** 百度推出的“无限OCR”模型，完美解决长图、复杂排版文字提取痛点，以极高的实用性霸榜今日第一。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者:** zai-org | 👍 3,166 | ⬇️ 159,967
    *   **简介:** 智谱AI最新一代底座大模型，采用了 `glm_moe_dsa` 架构，兼具强悍的文本生成与对话能力，是今日的核心焦点之一。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者:** Qwen | 👍 495 | ⬇️ 34,371
    *   **简介:** 阿里千问推出的新一代拥有35B总参、3B激活参数的 MoE 世界模型，专为 Agentic（智能体）工作流设计。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   **作者:** deepseek-ai | 👍 276 | ⬇️ 7,629
    *   **简介:** DeepSeek V4 系列的旗舰版本，融合了全新的 DSpark 推理框架，展现了顶尖的深度思考与推理潜力。
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   **作者:** LiquidAI | 👍 180 | ⬇️ 21,935
    *   **简介:** 仅 230M 参数的超微型语言模型，为极致资源受限的移动端和 IoT 设备提供了全新的本地化部署方案。

#### 🎨 多模态与生成（图像、视频、音频）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者:** nvidia | 👍 2,544 | ⬇️ 896,058
    *   **简介:** 英伟达发布的 3B 参数视觉定位模型，能精准识别并框出图片中的“任何事物”，下载量惊人。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) & [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**
    *   **作者:** krea | 👍 435 / 260 | ⬇️ 56,953 / 39,515
    *   **简介:** Krea 爆款图像生成模型的最新双星：Turbo 追求极致生成速度，Raw 则提供无与伦比的细节与质感。
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   **作者:** fal | 👍 135 | ⬇️ 0
    *   **简介:** 基于 LTX 视频生成框架的 3D 写实风格 LoRA，大幅提升了视频生成的空间立体感与真实物理表现。
*   **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
    *   **作者:** nvidia | 👍 196 | ⬇️ 136,933
    *   **简介:** 英伟达官方下场为智谱 GLM-5.2 做的 NVFP4 专用量化优化，大幅提升多模态大模型的显存效率。

#### 🔧 专用模型（代码、数学、推理）
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   **作者:** yuxinlu1 | 👍 2,549 | ⬇️ 597,090
    *   **简介:** 基于 Gemma-4 架构深度定制的专用 Coder 模型，在代码生成和逻辑推理上表现极其亮眼，深受开发者欢迎。
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   **作者:** InternScience | 👍 138 | ⬇️ 511
    *   **简介:** 面向科研场景的专用智能体模型，专为处理复杂科学文献检索与自动化实验设计打造。

#### 📦 微调与量化（社区微调、GGUF、去审查）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者:** HauhauCS | 👍 2,374 | ⬇️ 3,055,962
    *   **简介:** 今日下载数量霸主！去除安全审查的 Qwen3.6 MoE 量化版，满足了社区对无限制、高自由度模型的海量需求。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者:** empero-ai | 👍 1,143 | ⬇️ 1,113,871
    *   **简介:** 拥有 100 万超长上下文的 Claude 风格微调模型，完美适配 llama.cpp 的端侧量化版，极客圈狂热追捧。
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   **作者:** unsloth | 👍 490 | ⬇️ 212,201
    *   **简介:** Unsloth 第一时间放出的 GLM-5.2 全系 GGUF 量化版本，让普通消费级显卡也能跑起新一代大模型。
*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
    *   **作者:** deepreinforce-ai | 👍 186 | ⬇️ 5,792
    *   **简介:** 高达 397B 参数的超大模型底座（基于 Qwen3.5 MoE 架构），主要面向企业级海量算力部署需求。

---

### 📊 生态信号
1. **“Qwen3.5/3.6 MoE” 家族统治力显现：** 榜单中大量模型（如 Qwen-AgentWorld, HauhauCS的微调版, Ornith系列）均基于通义千问最新的 MoE 架构（如35B总参-3B激活）。这种“大库容量+低推理成本”的设计已成为开源社区的绝对主流。
2. **“去审查”与“超长上下文”齐飞：** HauhauCS 的 Uncensored 模型狂揽 300 万+下载，以及 Qwythos 的 1M 上下文模型热度居高不下，反映出开源社区对“数据隐私可控”、“无对齐税”和“超长文档处理”的极度渴望。
3. **硬件厂商深度绑定开源生态：** 英伟达不仅发布视觉模型，还主动为 GLM-5.2、Qwen3.6 等当红炸子鸡提供 NVFP4 量化支持，试图从底层算力和精度标准上主导开源模型的部署范式。

---

### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：如果你的工作中涉及长图表、网页截图或复杂排版的文字提取，这款“无限流 OCR”模型是目前开源界最高效的解决方案之一，实用性满分。
2. **[HauhauCS/Qwen3.6...Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：想在本地跑一个没有道德限制、思维极其活跃的私人助理？这款 GGUF 格式的 MoE 模型不仅吃显存少，而且响应极快。
3. **[yuxinlu1/gemma-4-12B-coder](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：独立开发者和小团队不容错过，经过专门代码 Composer 训练，在本地 IDE 作为 Copilot 使用体验极佳。