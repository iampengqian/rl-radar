# Hugging Face 热门模型日报 2026-07-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-07 22:21 UTC

---

以下是为您生成的 2026-07-08《Hugging Face 热门模型日报》：

---

# 📰 Hugging Face 热门模型日报 (2026-07-08)

### 1. 今日速览
本期榜单迎来开源大模型的全面大爆发，**Qwen（通义千问）3.5/3.6 系列**已成为社区绝对的“底座霸主”，催生了大量针对 Agentic（智能体）、视觉及编程的优质微调版本。**端侧量化技术**热度空前，基于 GGUF 格式和 NVFP4 量化的模型占据了下载量榜首，显示出本地部署的强烈需求。此外，**DeepSeek-V4、GLM-5.2** 等国产大厂巨作的同台竞技，标志着开源模型在推理与多模态能力上的又一轮重大跃升。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,583 | ⬇️ 281,584
  **说明**：智谱推出的新一代采用 MoE 和 DSA 架构的大模型，凭借出色的对话与推理能力斩获本期最高点赞。
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** | 作者: deepseek-ai | 👍 423 | ⬇️ 15,538
  **说明**：DeepSeek 推出的全新 V4 代旗舰文本生成模型，在推理和逻辑任务上备受开发者期待。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 475 | ⬇️ 121
  **说明**：腾讯最新推出的混元（Hunyuan）系列 v3 文本生成模型，刚发布便冲入热榜。
- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** | 作者: deepreinforce-ai | 👍 357 | ⬇️ 280,236
  **说明**：基于 Qwen3.5 MoE 架构强化的高质量通用对话与指令微调模型，下载量惊人。
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | 作者: Qwen | 👍 560 | ⬇️ 60,736
  **说明**：通义千问专门针对复杂智能体任务（Agentic workflows）训练的 35B MoE 旗舰模型。
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | 作者: meituan-longcat | 👍 138 | ⬇️ 385
  **说明**：美团推出的二代大语言模型，针对超长上下文处理进行了深度优化。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,828 | ⬇️ 1,084,945
  **说明**：百度开源的强大多模态 OCR 模型，突破分辨率限制，支持任意尺寸图像的高精度文字提取。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,656 | ⬇️ 1,424,958
  **说明**：英伟达推出的 3B 视觉定位大模型，能精准识别并定位图像中的任意目标实体。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | 作者: krea | 👍 539 | ⬇️ 123,729
  **说明**：Krea 带来的新一代极速文生图模型，支持 Diffusers 格式，兼具高画质与极低延迟。
- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** | 作者: eric-venti-seeds | 👍 95 | ⬇️ 0
  **说明**：为 Flux2Klein 模型量身定制的 LoRA，专用于精准控制图像生成中的自然光影和阳光方向。

#### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 284 | ⬇️ 9,458
  **说明**：谷歌推出的前沿表格基础模型，在零样本下即可完美执行表格分类与回归任务。
- **[nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16](https://huggingface.co/nvidia/Nemotron-Labs-TwoTower-30B-A3B-Base-BF16)** | 作者: nvidia | 👍 131 | ⬇️ 10,936
  **说明**：英伟达推出的庞大参数双塔架构模型，专为高级特征检索与密集嵌入任务设计。
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** | 作者: mistralai | 👍 157 | ⬇️ 157
  **说明**：Mistral 基于自家底座微调的 119B MoE 大模型，据推测专为 Lean 定理证明等严谨逻辑任务打造。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-5-1M-GGUF)** | 作者: empero-ai | 👍 1,744 | ⬇️ 1,683,711
  **说明**：结合了 Qwen3.5 的推理能力与 Claude 风格的 100 万上下文社区微调版，GGUF 格式方便本地跑。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,550 | ⬇️ 2,823,988
  **说明**：基于 Qwen3.6 MoE 的去审查视觉多模态版本，下载量全榜第一，极具社区极客人气。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 👍 2,636 | ⬇️ 674,977
  **说明**：专为终端代码编写优化的 Gemma-4 12B 微调量化版，点赞数极高，深受程序员喜爱。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 989 | ⬇️ 2,842,118
  **说明**：知名量化团队 Unsloth 出品，支持多 Token 预测 (MTP) 的 Qwen3.6 27B 量化版，推理速度极快。
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** | 作者: nvidia | 👍 313 | ⬇️ 538,687
  **说明**：英伟达使用 ModelOpt 工具对 Qwen3.6 进行自家的 NVFP4 量化，显存占用极低且性能几乎无损。

---

### 3. 生态信号
当前开源生态呈现出**“Qwen 宇宙”与“大厂硬核创新”双轨并行的态势**。榜单中近 1/3 的热门模型（尤其是高下载量模型）均以 Qwen 3.5 / 3.6 作为底座，它已实质上取代 Llama 成为开发者进行微调、去审查和 Agent 化的首选。

同时，**量化技术正迅速向硬件底层演进**。除了传统的 GGUF，Nvidia 官方亲自下场为其硬件推广 NVFP4 量化格式（`nvidia/Qwen3.6-27B-NVFP4`），Unsloth 也在力推 MTP（多 Token 预测）技术。开源权重模型与闭源 API 的差距正被这种高效的本地化部署手段进一步缩小。值得注意的是，“去审查”模型和 Terminal 编程模型迎来了巨大的流量爆发。

---

### 4. 值得探索
1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：强烈建议视觉研究者尝试。仅 3B 参数即可实现“万物定位”，极高的性价比使其非常适合直接接入各类多模态 Agent 流程中执行视觉 Grounding。
2. **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：如果你在构建复杂的 AI Agent，这绝对是当前最新的国产旗舰级底座。其原生针对 Agentic 优化的特性，可能比通用对话模型更适合作为智能体大脑。
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**：谷歌在结构化数据领域的一次大胆尝试。对于数据科学家而言，它摆脱了传统 LLM 处理表格数据的幻觉问题，零样本即可执行回归与分类，非常值得在数据分析流水线中测试。