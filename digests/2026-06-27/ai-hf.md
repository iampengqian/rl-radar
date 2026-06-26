# Hugging Face 热门模型日报 2026-06-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-26 22:22 UTC

---

这份报告为您梳理了 2026 年 6 月 27 日 Hugging Face Hub 上的热门模型动态。

---

# 🤗 Hugging Face 热门模型日报 (2026-06-27)

## 📌 今日速览
1. **开源巨兽与全能架构涌现**：智谱发布了超大规模的 GLM-5.2，而 Google 的 gemma-4-12B-it 以“Any-to-Any”全模态架构斩获超 230 万次下载，标志着基础模型正向高度融合的多模态演进。
2. **“去审查”与端侧量化双效合一**：以 HauhauCS 和 empero-ai 为代表的社区创作者，正大规模产出基于 Gemma-4 和 Qwen3.x 的 Uncensored（无审查）及 QAT 量化版本，受到本地部署用户的热烈追捧。
3. **多模态能力从“对话”向“精准操作”拓展**：百度推出 Unlimited-OCR 突破长图解析，英伟达（Nvidia）发布 LocateAnything-3B 将视觉能力精细化至目标定位，展示了多模态应用的深化。

---

## 🔥 热门模型分类盘点

### 🧠 语言模型 (LLM、对话模型、指令微调)
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 2,586 | ⬇️ 83,589
    *   **简介**: 智谱 AI 推出的最新一代超大规模 MoE 文本生成模型，凭借强大的对话和推理能力空降榜单前列。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 1,246 | ⬇️ 169,951
    *   **简介**: MiniMax 的最新旗舰多模态大模型，兼顾文本与视觉理解，展现了极强的综合实力。
*   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**
    *   作者: deepreinforce-ai | 👍 101 | ⬇️ 126
    *   **简介**: 拥有 3970 亿参数的顶级超大规模 MoE 语言模型，代表着开源社区在模型参数量上的极限探索。

### 🎨 多模态与生成 (图像、视频、音频、文本到X)
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,192 | ⬇️ 2,309,976
    *   **简介**: Google 最新发布的 12B 全模态模型，支持任意到任意格式转换，是今日当之无愧的下载量与人气双冠王。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 1,031 | ⬇️ 134,146
    *   **简介**: 百度推出的无限长图/文档 OCR 神器，直击长图表解析痛点，是文本图像提取的颠覆性工具。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,381 | ⬇️ 494,756
    *   **简介**: Nvidia 推出的 3B 视觉定位模型，赋予大模型像素级的目标检测和框选能力。
*   **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw) & [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   作者: krea | 👍 ~486 (合计) | ⬇️ 19,129
    *   **简介**: 备受期待的 Krea 文生图二代模型，提供 Raw（高保真）和 Turbo（极速）双版本，震撼开源绘图生态。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 705 | ⬇️ 56,434
    *   **简介**: Nvidia 推出超低延迟的流式语音识别（ASR）模型，专为实时人机语音交互设计。

### 🔧 专用模型 (代码、数学、Agent、特定任务)
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 726 | ⬇️ 54,638
    *   **简介**: 专注数学推理的 3B 模型，在轻量级体积下实现了超越同级的表现，适合科研与教育场景。
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   作者: microsoft | 👍 355 | ⬇️ 5,735
    *   **简介**: 微软推出的 4B 专属智能体模型，主打超长上下文的极速解析，专为 Agentic 工作流优化。
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   作者: Chunjiang-Intelligence | 👍 107 | ⬇️ 1,103
    *   **简介**: 基于 DeepSeek-v4 的垂直领域模型，高度专精于网络安全攻防分析。
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   作者: LiquidAI | 👍 109 | ⬇️ 8,286
    *   **简介**: 采用 Liquid 架构的 2.3 亿参数超微型模型，完美适配 IoT 设备和边缘计算。

### 📦 微调与量化 (社区微调、GGUF、NVFP4)
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,262 | ⬇️ 3,453,492
    *   **简介**: 去除安全审查的 Qwen3.6 MoE 微调版，主打无约束交互，下载量突破 345 万，现象级爆火。
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 👍 361 | ⬇️ 4,812,629
    *   **简介**: Nvidia 官方使用 NVFP4 算法压缩的 Qwen3.6 模型，在保持精度的同时大幅降低显存门槛，单日下载量高达 480 万。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 2,395 | ⬇️ 516,333
    *   **简介**: 专为编程优化的 Gemma-4 12B 模型量化版，是本地跑代码助手的绝佳选择。
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 👍 408 | ⬇️ 107,553
    *   **简介**: Unsloth 倾情打造的 GLM-5.2 GGUF 量化版，让消费级显卡也能跑起这个庞大的 MoE 模型。

---

## 📊 生态信号 (生态趋势分析)

1. **模型家族格局更新**：**Qwen 3.x** 与 **Gemma-4** 已绝对统治当前的开源微调生态，特别是在 10B-35B 区间；而国产巨头间的较量已进入深水区，智谱 **GLM-5.2** 与 **DeepSeek-v4** 正在挑战老牌强者的地位。
2. **量化格式迎来“群雄逐鹿”**：传统的 GGUF 依然是个人开发者的最爱（如各大 Coder 模型），但 Nvidia 强推的 **NVFP4** 格式正凭借极小的体积和官方背书，拿下惊人的下载基本盘。
3. **“无审查”需求高涨**：带有 `Uncensored` 或 `Abliterated` 标签的模型下载量动辄数百万。这表明开源社区对去除模型“说教味”、突破对齐限制的诉求达到了新高。
4. **视觉从“识别”到“动作”**：OCR 和检测类模型（Unlimited-OCR, LocateAnything）的火热，说明开发者不再满足于多模态聊天，而是要求模型能作为“眼睛”去执行精准的 UI 操作和长文本提取。

---

## 💡 值得探索 (重点推荐)

1. **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
   * **推荐理由**：作为 12B 级别最强全模态模型，Any-to-Any 架构让它几乎无所不能。无论你是做语音、视觉还是文本，它都应该是你近期测试的基准线。
2. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   * **推荐理由**：拥有近 500 万次下载，是体验顶配 MoE 模型性价比最高的方式。如果你有支持 FP4 的显卡，用它来搭建本地智能体服务将获得极佳体验。
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   * **推荐理由**：解决了传统 OCR 处理长图、超长表格和复杂排版的痛点。对于任何涉及文档数字化（RAG、信息抽取）的开发者，这都是一个值得集成的生产级工具。