# Hugging Face 热门模型日报 2026-07-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-05 22:17 UTC

---

### 📰 Hugging Face 热门模型日报（2026-07-06）

#### 📡 今日速览
今日的 Hugging Face Hub 呈现出“多模态深度融合”与“端侧智能体爆发”的双重趋势。**Qwen 3.5/3.6** 和 **GLM-5.2** 毫无悬念地占据了开源生态的绝对核心，各大硬件厂商（如 Nvidia）和社区开发者都在围绕它们疯狂产出量化版与微调版。多模态领域迎来了视觉定位和无限长文本 OCR 的重大突破。此外，具备“编码+智能体”能力的端侧量化模型（GGUF）需求激增，去审查的社区微调版依然保持着极高的热度。

---

#### 🔥 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   **作者**: zai-org | **点赞**: 3,462 | **下载**: 220,379
    *   **简介**: 智谱推出的大规模文本生成模型，凭借出色的对话与推理能力霸榜本周点赞榜首。
*   **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** & **[9B 版本](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B)**
    *   **作者**: deepreinforce-ai | **点赞**: 339+ | **下载**: 224,641+
    *   **简介**: DeepReinforce 推出的新一代多模态文本生成基座模型，支持图文输入，表现均衡。
*   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** & **[Flash 版本](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)**
    *   **作者**: deepseek-ai | **点赞**: 386+ | **下载**: 12,580+
    *   **简介**: DeepSeek V4 系列的 DSpark 进化版，拥有极强的文本生成与学术推理能力。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **作者**: nvidia | **点赞**: 2,616 | **下载**: 1,247,265
    *   **简介**: 英伟达发布的 3B 视觉定位大模型，能够通过图文指令精准定位图像中的任何目标，下载量惊人。
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **作者**: baidu | **点赞**: 1,742 | **下载**: 1,044,217
    *   **简介**: 百度推出的无限制 OCR 模型，突破了传统文本提取的边界，在企业级落地应用中极受欢迎。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** & **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**
    *   **作者**: krea | **点赞**: 513+ | **下载**: 99,049+
    *   **简介**: 备受瞩目的文生图模型 Krea-2 的 Turbo 加速版，已被原生集成进 ComfyUI 生态。

##### 🔧 专用模型（代码、数学、安全、表格）
*   **[yuxinlu1/gemma-4-12B-coder-fable5...](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** & **[Agentic 版本](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **作者**: yuxinlu1 | **点赞**: 2,608+ | **下载**: 651,758+
    *   **简介**: 基于 Gemma-4 架构的深度代码与终端智能体微调版，是开发者的本地化得力助手。
*   **[BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6](https://huggingface.co/BugTraceAI/BugTraceAI-CORE-Ultra-27B-Q6)**
    *   **作者**: BugTraceAI | **点赞**: 134 | **下载**: 12,196
    *   **简介**: 专注于网络安全与攻防演练的专用模型，展现了 AI 在 Offensive Security 领域的潜力。
*   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    *   **作者**: google | **点赞**: 220 | **下载**: 2,670
    *   **简介**: 谷歌推出的表格基础模型，支持零样本的表格分类与回归任务。
*   **[nationaldesign studio/rampart](https://huggingface.co/nationaldesignstudio/rampart)**
    *   **作者**: nationaldesign studio | **点赞**: 128 | **下载**: 2,783
    *   **简介**: 基于 BERT 的个人隐私信息（PII）脱敏与 Token 分类专用小模型。

##### 📦 微调与量化（社区微调、GGUF、去审查）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **作者**: HauhauCS | **点赞**: 2,479 | **下载**: 3,018,257
    *   **简介**: 下载量霸榜的 Qwen3.6 MoE 强力去审查版，主打 Aggressive 与完全无限制响应。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **作者**: unsloth | **点赞**: 962 | **下载**: 2,776,389
    *   **简介**: Unsloth 出品的 Qwen3.6 量化版，完美支持多令牌预测（MTP），本地推理首选。
*   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** & **[GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**
    *   **作者**: nvidia | **点赞**: 272+ | **下载**: 297,130+
    *   **简介**: Nvidia ModelOpt 团队为顶级开源大模型制作的 NVFP4 极致压缩量化版，极大降低了显存门槛。
*   **[empero-ai/Qwythos-9B-Claude-Mythos...](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   **作者**: empero-ai | **点赞**: 1,542 | **下载**: 1,533,844
    *   **简介**: 融合了 Claude 风格的 Qwen3.5 微调量化版，拥有 1M 超长上下文，兼备逻辑推理与角色扮演能力。

---

#### 📈 生态信号
当前开源生态正高度围绕 **Qwen 3.5/3.6 家族** 展开，其在图文多模态、端侧智能体以及 MoE 架构（如 A3B）上的表现彻底征服了社区。**GLM-5.2** 也势头正旺，甚至已经让 Mistral 的新款 Leanstral 黯然失色。

在量化端，**NVFP4**（Nvidia）与 **GGUF**（ Unsloth/社区）形成了双足鼎立之势，标志着开源权重正在全面加速向消费级和边缘硬件渗透。此外，**端侧 Agentic（智能体）与 Coding 专用微调版**大量涌现，去审查的需求依然高涨，反映出开发者正把本地模型作为真正的“生产力工具”而非玩具。

---

#### 💡 值得探索

1.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **理由**: 拥有极高的讨论度与超 300 万的下载量。如果你想在本地测试 MoE 架构的极限性能，并需要绕过繁琐安全护栏的纯正模型输出，这个版本是首选。
2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   **理由**: 视觉定位领域的黑马。仅用 3B 参数就能实现“定位万物”，非常适合集成到无人机、机器人视觉或自动化 UI 测试等轻量级下游任务中。
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5...](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   **理由**: 专为“终端环境”打造的编码智能体。GGUF 格式使其能轻松运行于本地 PC，开发者可将其接入 VS Code 或 CLI 中，作为完全离线的本地 Copilot 尝试。