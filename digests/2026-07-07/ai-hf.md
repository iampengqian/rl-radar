# Hugging Face 热门模型日报 2026-07-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-06 22:23 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-07-07)

## 1. 今日速览
今天的 Hugging Face 热门榜单呈现出**“多模态融合、端侧推理爆发、开源智能体涌现”**的三大特征。一方面，以 Qwen3.5/3.6 为核心底座的微调模型与量化版本（GGUF/NVFP4）迎来大爆发，主导了社区的下载数据；另一方面，视觉与文本的结合（Image-text-to-text）已从概念走向实际应用，百度的 Unlimited-OCR 和英伟达的 LocateAnything 占据了多模态榜单的高位。此外，AI 智能体（Agents）与无审查/去对齐微调模型持续受到社区开发者的狂热追捧。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 3,528 | **下载**: 231,218
    *   **说明**: 强大的 MoE 架构基础对话模型，作为开源界的核心底座之一，发布即引爆社区关注。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSSpark)**
    *   **作者**: deepseek-ai | **点赞**: 409 | **下载**: 14,276
    *   **说明**: DeepSeek 最新一代旗舰文本生成模型，凭借其一贯的高性能和算法创新保持着极高的热度。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   **作者**: Qwen | **点赞**: 555 | **下载**: 57,835
    *   **说明**: 专为复杂 Agent 任务设计的 MoE 模型，展现了 Qwen 在自动化智能体生态的野心。
*   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
    *   **作者**: meituan-longcat | **点赞**: 112 | **下载**: 43
    *   **说明**: 美团团队推出的长效上下文对话模型，刚发布已吸引大量开发者测试。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 1,789 | **下载**: 1,070,230
    *   **说明**: 百度推出的高性能无限制 OCR 模型，精准击中了开发者对复杂场景图文转换的痛点。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者**: nvidia | **点赞**: 2,631 | **下载**: 1,340,559
    *   **说明**: 英伟达发布的 3B 视觉定位与特征提取模型，体积小巧但能力全面，霸榜多模态下载量。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   **作者**: krea | **点赞**: 527 | **下载**: 109,470
    *   **说明**: Krea 推出的极速文生图模型，是创意设计领域最受欢迎的开源 Diffusion 模型之一。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者**: google | **点赞**: 255 | **下载**: 7,036
    *   **说明**: 谷歌推出的针对表格数据（分类与回归）的零样本基础模型，在非文本结构化数据领域具有开创性意义。
*   **[nationaldesignstudio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
    *   **作者**: nationaldesignstudio | **点赞**: 136 | **下载**: 3,821
    *   **说明**: 基于 BERT 的个人隐私信息（PII）标记模型，支持 ONNX，非常适合隐私合规审查场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,527 | **下载**: 2,910,241
    *   **说明**: 极具攻击性和去审查的 Qwen3.6 MoE 视觉文本模型，庞大的下载量证明了社区对“无限制”模型的强烈需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **作者**: unsloth | **点赞**: 972 | **下载**: 2,818,499
    *   **说明**: Unsloth 出品的 Qwen3.6 GGUF 量化版，凭借极佳的本地运行兼容性成为端侧部署首选。
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)**
    *   **作者**: nvidia | **点赞**: 289 | **下载**: 430,676
    *   **说明**: 英伟达官方利用 Model Optimizer 量化技术的作品，展示了硬件级优化对开源大模型的降本增效。

---

## 3. 生态信号
当前 HF 模型生态呈现出以下鲜明趋势：
1. **Qwen 系列绝对统治力**：榜单中超过 40% 的热门模型基于 Qwen 3.5 或 3.6 架构微调或量化。Qwen 已经成为目前开源社区最强且最受欢迎的基座。
2. **端侧部署需求激增**：GGUF 格式和极低比特量化（如 NVFP4）模型的下载量动辄破百万，说明开发者正从“尝鲜 API”转向“本地真实部署”，`llama.cpp` 生态繁荣。
3. **去审查微调的狂欢**：带有 `Uncensored` 或 `abliterated` 标签的模型热度极高，社区对突破安全限制、获取最大模型自由度的需求依然强烈。
4. **大厂卷入细分赛道**：Google 和 Baidu 分别带来了结构化表格和 OCR 模型，开源正在从单纯的“卷文本对话”向多维度的生产力工具蔓延。

---

## 4. 值得探索

*   🌟 **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** 
    *   **推荐理由**：突破了传统 OCR 模型在排版、长图和复杂背景下的限制，高达百万的周下载量证明了它是目前构建文档解析流水线最值得尝试的模型。
*   🌟 **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **推荐理由**：如果你需要在本地运行一个兼具视觉理解能力且不受常规安全护栏限制的强力 MoE 模型，这是目前最前沿的社区作品。
*   🌟 **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **推荐理由**：在 LLM 泛滥的时代，Google 为表格数据专门推出的基础模型是一次范式探索，非常适合数据科学家用于零样本的分类和回归预测研究。