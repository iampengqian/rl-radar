# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 22:20 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-07-25)

### 1️⃣ 今日速览
本期热门榜单呈现出**多模态文档理解**与**极限端侧推理**两大爆发趋势。百度凭借极具统治力的下载量发布了 `Unlimited-OCR`，再次证明了文档与图文转换在企业级应用中的核心刚需；同时，开源社区对 `Qwen3.6` 系列的“无审查”微调与 `GGUF` 1-bit/2-bit 极限量化热情高涨，显示出本地端侧运行大模型的强烈需求。此外，具身智能与机器人控制模型开始崭露头角，标志着开源 AI 正从数字走向物理世界。

---

### 2️⃣ 热门模型分类

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,414 | ⬇️ 667,403
  - **简介**: 智谱推出的最新一代强推理 MoE 大模型，凭借极高的点赞数成为本周最受瞩目的开源基座模型之一。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 作者: Qwen | 👍 2,502 | ⬇️ 6,460,680
  - **简介**: 阿里 Qwen 团队推出的 350 亿参数 MoE 架构模型（激活参数仅 3B），兼顾了端侧的高效性与大模型的性能。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 3,358 | ⬇️ 12,629,921
  - **简介**: 谷歌最新开源的 31B 指令微调模型，以超 1200 万的恐怖下载量霸榜，是目前使用最广泛的开源基座之一。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 作者: poolside | 👍 598 | ⬇️ 28,992
  - **简介**: 知名开发工具厂商 Poolside 推出的代码与对话生成模型，展现了垂直领域厂商的自研实力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 3,004 | ⬇️ 2,500,391
  - **简介**: 百度推出的“无限制”OCR 与图文理解模型，凭借强大的文档解析能力，单周下载量突破 250 万。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 1,542 | ⬇️ 27,883
  - **简介**: 高质量的多模态对话模型，能够处理复杂的图文交错输入，是视觉问答领域的黑马。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,263 | ⬇️ 756,668
  - **简介**: 月之暗面推出的多模态代码模型，支持图像到代码的高效转换与推理。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | 作者: microsoft | 👍 225 | ⬇️ 891
  - **简介**: 微软推出的新一代图像生成与编辑模型，支持基于文本的精细图像控制。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 530 | ⬇️ 0
  - **简介**: 基于 Krea-2 架构的图像身份一致性编辑 LoRA，在创意设计社区引起了广泛关注。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 👍 936 | ⬇️ 797,525
  - **简介**: 英伟达推出的超低延迟流式语音识别模型（ASR），专为实时端侧交互设计。

#### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** & **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | 作者: openbmb | 👍 171/122 | ⬇️ 559/349
  - **简介**: 面壁智能推出的视觉-语言-动作（VLA）模型，专为机器人控制与轨迹追踪设计，标志着开源在具身智能领域的突破。
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 作者: Kwaipilot | 👍 115 | ⬇️ 396
  - **简介**: 专为开发者打造的强代码补全与生成模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 3,067 | ⬇️ 2,057,103
  - **简介**: 去除安全对齐的 Qwen3.6 激进版微调，下载量破两百万，体现了社区对无限制 AI 的强烈需求。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 👍 632/1,004 | ⬇️ 2,028,115/595,415
  - **简介**: 采用革命性的 1-bit 和 2-bit 极限量化技术，让 27B 级别的 MoE 模型能在普通家用电脑上流畅运行。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 作者: DavidAU | 👍 473 | ⬇️ 407,421
  - **简介**: 典型的“名字越长，模型越强”的社区魔法融合微调版，主打无审查与创意写作。

---

### 3️⃣ 生态信号
当前开源生态正呈现**“向端侧要算力，向物理要交互”**的趋势。**Qwen3.6** 和 **GLM-5.2** 毫无疑问是本期榜单的核心家族，大量高下载量的模型均是基于这两者的衍生版。开源权重的迭代速度已实质性地对闭源模型产生压力。
**量化层面**，以 `prism-ml` 为代表的 1-bit/2-bit (GGUF) 极限压缩技术迎来大爆发，使得几十B级别的 MoE 模型彻底平民化；**微调层面**，“Uncensored（无审查）”依然是最强大的流量密码，满足开发者对模型绝对控制权的诉求。此外，OpenBMB 的机器人模型上榜，预示着 VLA（视觉-语言-动作）架构正在统一软件模型与硬件控制。

---

### 4️⃣ 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **理由**: 绝对的企业级刚需。超过 250 万的周下载量说明它解决了一直以来困扰开发者的复杂长文档、版式错乱的 OCR 痛点，非常建议集成测试。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - **理由**: 如果你苦于没有高端显卡无法运行 20B+ 的大模型，这款 1-bit 量化方案是不二之选。它展示了开源社区在本地推理优化上的极致想象力。
3. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
   - **理由**: 跨越数字边界的尝试。对于关注具身智能、软硬件结合的开发者来说，这是目前开源社区中极其稀缺的高质量 VLA 机器人控制基座。