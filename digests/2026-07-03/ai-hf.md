# Hugging Face 热门模型日报 2026-07-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-02 22:19 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-07-03)

## 1. 今日速览
今日的 Hugging Face 社区呈现出强烈的**“Agentic（智能体化）”与“端侧部署”**趋势。百度的 `Unlimited-OCR` 和英伟达的 `LocateAnything-3B` 展现了企业在特定多模态任务上的极致打磨，霸榜点赞与下载量。开源大模型迭代迅速，`GLM-5.2`、`DeepSeek-V4` 和 `Qwen3.6` 形成了新的“御三家”基座生态。同时，基于最新基座微调的代码、智能体模型（尤其是 GGUF 格式）迎来了社区爆发式下载，反映出开发者对本地运行高能效模型的强烈需求。

---

## 2. 热门模型分类一览

### 🧠 语言模型（LLM、对话模型、基座）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   👤 作者: zai-org | 👍 点赞: 3,248 | ⬇️ 下载: 176,154
    *   📝 **说明**: 最新一代 GLM 混合专家（MoE）基座模型，凭借出色的对话与推理能力登顶今日点赞榜首。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSPark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSPark)**
    *   👤 作者: deepseek-ai | 👍 点赞: 302 | ⬇️ 下载: 8,184
    *   📝 **说明**: DeepSeek 靠的全新 V4 系列高性能版本，集成了 DSpark 机制，在通用文本生成上表现强悍。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**
    *   👤 作者: Qwen | 👍 点赞: 511 | ⬇️ 下载: 39,448
    *   📝 **说明**: 专为 Agentic（智能体）工作流打造的 MoE 模型，激活参数仅 3B，主打多轮工具调用与复杂任务规划。
*   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**
    *   👤 作者: LiquidAI | 👍 点赞: 191 | ⬇️ 下载: 26,357
    *   📝 **说明**: 超轻量级（230M） Liquid 架构模型，适合在移动端或边缘设备上进行极速文本生成。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   👤 作者: baidu | 👍 点赞: 1,651 | ⬇️ 下载: 758,489
    *   📝 **说明**: 彻底解决复杂排版和长图识别痛点的无限制 OCR 模型，凭借极高频的刚需场景斩获超高下载量。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   👤 作者: nvidia | 👍 点赞: 2,572 | ⬇️ 下载: 1,006,831
    *   📝 **说明**: 英伟达推出的 3B 级视觉定位大模型，实现精准的“指哪打哪”，下载量突破百万。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    *   👤 作者: krea | 👍 点赞: 457 | ⬇️ 下载: 69,788
    *   📝 **说明**: 顶流文生图模型 Krea-2 的 Turbo 加速版，兼顾了极致的生成速度与高保真图像质量。
*   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)**
    *   👤 作者: fal | 👍 点赞: 143 | ⬇️ 下载: 0
    *   📝 **说明**: 基于 LTX 视频模型的 LoRA，能生成具有极强物理 3D 真实感和空间一致性的动态视频。

### 🔧 专用模型（代码、安全、表格、垂直领域）
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   👤 作者: yuxinlu1 | 👍 点赞: 2,570 | ⬇️ 下载: 614,069
    *   📝 **说明**: 专为编程优化的 Gemma-4 微调版，提供强大的代码补全与逻辑推理能力，备受程序员推崇。
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   👤 作者: BugTraceAI | 👍 点赞: 121 | ⬇️ 下载: 8,037
    *   📝 **说明**: 网络安全与攻防领域的垂直大模型，可辅助安全人员进行漏洞追踪与渗透测试代码分析。
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   👤 作者: google | 👍 点赞: 114 | ⬇️ 下载: 89
    *   📝 **说明**: 谷歌推出的表格基础模型，支持零样本下的表格分类与回归任务，为传统数据分析带来生成式 AI 的红利。

### 📦 微调与量化（社区微调、去审查、GGUF）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   👤 作者: HauhauCS | 👍 点赞: 2,397 | ⬇️ 下载: 3,078,904
    *   📝 **说明**: 榜单下载量第一！基于 Qwen3.6 激进去审查的版本，满足了社区对模型无限制输出的庞大需求。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   👤 作者: empero-ai | 👍 点赞: 1,242 | ⬇️ 下载: 1,250,562
    *   📝 **说明**: 融合了 Claude 风格、支持 100 万上下文的 Qwen3.5 融合模型，并打包为易用的 GGUF 格式。
*   **[huihui-ai/Huihui-GLM-5.2-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-GLM-5.2-abliterated-GGUF)**
    *   👤 作者: huihui-ai | 👍 点赞: 132 | ⬇️ 下载: 2,592
    *   📝 **说明**: 最快跟进 GLM-5.2 的社区量化版，通过 abliterated 技术去除对齐拦截，适合本地部署极客。

---

## 3. 生态信号
从今日的趋势可以看出：
1. **基座格局重塑**：Qwen3.5/3.6 系列、DeepSeek-V4 和 GLM-5.2 已经成为开源社区的新一代“核心基座”，大量衍生模型均基于此衍生。
2. **Agentic 与长文本成标配**：不论是 Qwen-AgentWorld 还是 Qwythos-1M，工具调用与百万级上下文正在从旗舰特性下沉为常规配置。
3. **量化与本地化狂热**：GGUF 格式依然统治着本地部署生态，HauhauCS 的去审查版下载量破 300 万，说明“开箱即用、无安全拦截、端侧可跑”是开发者最核心的痛点。此外，Nvidia 的 NVFP4 量化技术（如 GLM-5.2-NVFP4）正在成为除 GGUF 外，企业级高压缩比部署的新选择。

---

## 4. 值得探索
1.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：强烈建议有文档解析、票据处理需求的开发者尝试。它突破了传统 OCR 的尺寸和排版限制，将复杂的版面分析直接转化为结构化文本。
2.  **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：构建 AI 智能体的理想基座。总参数 35B 但激活仅 3B，这意味着在推理成本极低的情况下，依然能获得顶级的多步推理和 API 调用能力。
3.  **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**：让人耳目一新的非生成式模型。对于数据科学家而言，这个模型提供了一种通过 In-Context Learning 直接解决结构化表格预测的全新范式，非常值得研究其机制。