# Hugging Face 热门模型日报 2026-06-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 22:19 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-06-28）

## 1️⃣ 今日速览
本期榜单迎来了开源大模型生态的全面代际更迭。**Qwen3.6、Gemma-4、GLM-5.2 以及 DeepSeek-V4** 等新一代基座模型强势霸榜，多模态（视觉/音频）和小型化（MoE架构、端侧体积）成为绝对标配。在应用层面，**Agentic（智能体）**、**超长上下文**与**本地端侧部署（GGUF/去审查微调）**主导了社区的开发者审美，开源社区在追求极客可用性上走得越来越远。

---

## 2️⃣ 热门模型精选

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 2,670 | 下载: 98,994
    *   简介: 采用 `glm_moe_dsa` 架构的新一代大模型，凭借出色的对话与推理能力登顶本期点赞榜首。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 点赞: 1,252 | 下载: 182,714
    *   简介: MiniMax 推出的高性能原生多模态大模型，支持深度图文理解，综合能力均衡。
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   作者: LiquidAI | 点赞: 128 | 下载: 9,791
    *   简介: 仅有 230M 参数的超微型语言模型（采用 LFM 架构），主打极致的端侧高频调用与轻量化。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    *   作者: deepseek-ai | 点赞: 118 | 下载: 0
    *   简介: DeepSeek 最新旗舰级大模型，虽然刚发布尚未产生下载量，但极高的关注度预示着其强大的技术号召力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 1,133 | 下载: 212,760
    *   简介: 百度推出的无限尺寸 OCR 模型，突破了传统图像分辨率限制，在特征提取上表现卓越。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,405 | 下载: 570,466
    *   简介: NVIDIA 发布的 3B 级视觉定位大模型，能精准理解图像特征并进行目标定位，下载数极高。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) / [krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**
    *   作者: krea | 点赞: 309 / 214 | 下载: 17,445 / 17,748
    *   简介: Krea 带来的新一代文本生成图像模型，Turbo 主打极速生成，Raw 专注写实 raw 风格。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 点赞: 718 | 下载: 61,857
    *   简介: 面向实时流处理的高效语音识别模型（ASR），极低延迟，非常适合工业级落地方案。

### 🔧 专用模型（代码、数学、智能体）
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
    *   作者: microsoft | 点赞: 365 | 下载: 6,447
    *   简介: 微软专门为“超长上下文”设计的 4B 模型，被标记为 Explorer SubAgent，专为复杂长文档任务优化。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   作者: Qwen | 点赞: 356 | 下载: 18,872
    *   简介: Qwen 官方推出的深度适配 Agent（智能体）调度的 MoE 大模型（总参数 35B，激活仅 3B），适合工具链调用。
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 点赞: 741 | 下载: 57,521
    *   简介: 基于 Qwen2 微调的“理科小钢炮”，在数学推导和慢思考能力上表现极佳。
*   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**
    *   作者: Chunjiang-Intelligence | 点赞: 112 | 下载: 1,328
    *   简介: 基于 DeepSeek-V4 专门针对**网络安全**领域微调的特化模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,277 | 下载: 3,331,475
    *   简介: 榜单下载量第一！采用“去审查”并具有强烈个性化风格的微调模型，深受本地玩家狂热追捧。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 点赞: 2,424 | 下载: 536,130
    *   简介: 结合了代码能力与复杂 CoT 推理的端侧神级微调，量化 GGUF 版本下载量极高。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 点赞: 667 | 下载: 712,627
    *   简介: 完美模拟 Claude 风格，并支持 100 万上下文的极客向量化微调模型。
*   **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
    *   作者: nvidia | 点赞: 366 | 下载: 5,022,254
    *   简介: 使用 NVIDIA 官方优化工具(ModelOpt)压缩为 NVFP4 格式的 MoE 模型，在不掉精度的前提下实现了消费级显卡的完美部署。

---

## 3️⃣ 生态信号
*   **基座代际大换血：** Qwen 3.5/3.6、Gemma-4、GLM-5.2 和 DeepSeek-V4 已经完全接管了榜单，社区跟进和微调速度惊人。
*   **MoE 架构垄断与端侧狂热：** 35B 总参数但激活约 3B 的 MoE 架构成为绝对主流。同时，榜单中充斥着 GGUF 量化与 NVFP4 格式，显示开发者的重心已从“跑分评测”完全转向“如何在 Mac 或消费级 PC 上流畅运行大模型”。
*   **“去审查”与“个性化”：** 类似 HauhauCS（下载量破 300 万）和 huihui-ai 等去审查/解禁微调版本依然主导了真实的下载流量。用户对官方安全对齐的厌倦，以及对自定义人设（如 Claude Mythos 风格）的追求，正在造就一批“民间魔改顶流”。

---

## 4️⃣ 值得探索

1.  🔥 **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **推荐理由：** 本周的现象级“理财产品”。利用 MoE 架构仅需极低显存即可运行，加上极强的解禁策略，非常适合想在本地跑不受限 AI 助手的开发者测试。
2.  🌐 **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **推荐理由：** 彻底解决了大图、长图截断的痛点。对所有做 RAG、图文内容解析的工程师来说，这可能是目前鲁棒性最好的开源 OCR 方案之一。
3.  🤖 **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **推荐理由：** 想要构建本地工作流但苦于开源模型工具调用能力太弱？这是官方下场专门针对 Agent 行为和 Function Calling 优化过的版本，值得作为智能体基座进行深入评测。