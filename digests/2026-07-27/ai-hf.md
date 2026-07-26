# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-07-27）

### 📌 今日速览
今日的 Hugging Face Hub 呈现出“多模态加速落地、本地化微调大爆发”的鲜明特征。**百度**凭借突破性的 `Unlimited-OCR` 登顶热搜，**智谱**的 `GLM-5.2` 与 **月之暗面**的 `Kimi-K2.7-Code` 继续保持现象级下载量，标志着国产开源大模型生态的全面繁荣。同时，**Qwen3.5/3.6 系列**已成为社区微调和极限量化（如 1-bit/2-bit）的绝对底座。此外，**微软**在图像编辑与 Agent 领域，以及 **OpenBMB** 在具身智能领域的连番发力，为开源生态注入了新的活力。

---

### 🔥 热门模型分类一览

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,473 | ⬇️ 827,191
    *一句话说明：* 智谱推出的 MoE 大模型，以其强大的综合对话与推理能力成为本周下载量最高的基座模型之一。
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 作者: poolside | 👍 694 | ⬇️ 56,445
    *一句话说明：* 备受瞩目的高性能文本生成模型，带动了一系列官方与社区版本的量化热潮。
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | 作者: upstage | 👍 589 | ⬇️ 3,305
    *一句话说明：* Upstage 带来的 2500 亿参数级别重磅开源基座，展现了冲击第一梯队大模型的实力。
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | 作者: Nanbeige | 👍 442 | ⬇️ 14,049
    *一句话说明：* 南北阁实验室推出的最新 3B 级别轻量级 LLM，兼顾性能与极高的端侧部署友好度。
*   **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** | 作者: Motif-Technologies | 👍 193 | ⬇️ 2,400
    *一句话说明：* 新晋实力厂商 Motif 发布的测试版大模型，凭借扎实的基座能力引发社区关注。
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | 作者: fdtn-ai | 👍 184 | ⬇️ 5,978
    *一句话说明：* 专为安全审核与边缘防御设计的超小型混合专家模型，在安全垂类表现出色。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 3,198 | ⬇️ 2,593,460
    *一句话说明：* 今日霸榜神器，彻底解决长文本与复杂排版识别痛点，上线即斩获数百万下载。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 1,578 | ⬇️ 34,511
    *一句话说明：* 表现惊艳的多模态对话模型，能够精准理解复杂图像语境并进行深度交互。
*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** | 作者: microsoft | 👍 331 | ⬇️ 1,375
    *一句话说明：* 微软推出的新一代文本到图像生成与编辑扩散模型，具有极高的可控性。
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 542 | ⬇️ 0
    *一句话说明：* 基于 Krea-2 的身份保持 LoRA，在图像编辑过程中完美解决人物一致性痛点。
*   **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)** | 作者: microsoft | 👍 88 | ⬇️ 946
    *一句话说明：* Mage-Flow 的加速版，专为高指令依从性的实时图像修改而设计。
*   **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | 作者: owensong | 👍 169 | ⬇️ 298
    *一句话说明：* 极致的边缘端 TTS 语音合成模型，只需纯 CPU 即可实现极速高质量的本地语音生成。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** & **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** | 作者: openbmb | 👍 177+130 | ⬇️ 643+398
    *一句话说明：* OpenBMB 面向具身智能与机器人领域推出的视觉-语言-动作（VLA）系列模型，标志 AI 开始迈向物理世界。

#### 🔧 专用模型（代码、数学、Agent、OCR）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 1,293 | ⬇️ 730,129
    *一句话说明：* Kimi 最新代码与多模态能力特化版，凭借极强的逻辑处理与压缩技术获得了超高人气。
*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 作者: Kwaipilot | 👍 194 | ⬇️ 3,764
    *一句话说明：* 专为开发者打造的新一代高阶编码专家模型，大幅提升了复杂代码补全和纠错能力。
*   **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | 作者: microsoft | 👍 107 | ⬇️ 1,225
    *一句话说明：* 微软推出的重磅 Computer-use 模型，能够像人类一样理解屏幕像素并执行 GUI 交互操作。
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | 作者: ATH-MaaS | 👍 307 | ⬇️ 35,562
    *一句话说明：* 专注优化图文转换和视觉理解的专用多模态模型，是构建文档解析 RAG 的利器。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 作者: DavidAU | 👍 627 | ⬇️ 552,026
    *一句话说明：* 极其硬核的无审查微调版本，解除安全限制以释放 Qwen 底座的全部创作与推理潜力。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 3,111 | ⬇️ 1,927,138
    *一句话说明：* 针对视觉 MoE 架构的激进版去敏微调，凭借强悍的响应表现狂揽近 200 万次下载。
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** (1-bit) & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (2-bit) | 作者: prism-ml | 👍 1,695 | ⬇️ 2,819,274
    *一句话说明：* 极致突破显存极限的微调量化版，让普通消费级显卡也能跑得起高质量 27B 大模型。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,474 | ⬇️ 1,410,054
    *一句话说明：* 融合了 Claude 神话级表现与百万上下文的 9B 推理微调版，获得追求极致逻辑的社区用户狂热追捧。
*   **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) / [GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** | 作者: poolside | 👍 286 | ⬇️ 220,858
    *一句话说明：* 官方亲自下场放出的 NVFP4 与 GGUF 格式，大幅降低了该强大基座模型的部署门槛。
*   **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** | 作者: baseten | 👍 110 | ⬇️ 2,033
    *一句话说明：* 针对 GLM-5.2 视觉版本的最新浮点量化处理，在近乎无损精度的同时大幅提升了吞吐量。

---

### 📊 生态信号（100~200字）
当前开源大模型生态呈现三大显著趋势：
1. **国产基座霸权确立**：Qwen（3.5/3.6 系列）已经成为全球社区微调和去敏的“默认选项”，占据榜单近三分之一席位；百度、智谱与月之暗面等巨头的原神级模型下载量破百万，标志着中国大模型在开源权重领域全面压制传统欧美大厂。
2. **极限量化技术成熟**：1-bit 与 2-bit 量化（如 Bonsai 系列）不再只是玩具，数百万次下载证明低端硬件跑大模型的需求极为旺盛，且 NVFP4 新格式正在成为高精度量化的新标准。
3. **交互范式升维**：模型能力正在从“纯文本对话”向“屏幕操作”和“物理世界”跃迁。微软在 Computer-use 与 OpenBMB 在 VLA 机器人领域的探索，预示着下一阶段 AI 的主战场将是 Agent 自动化与具身智能。

---

### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *理由*：如果你曾受限于传统 OCR 对长图、跨页、复杂表格的解析能力，这个拥有超 250 万下载的模型是构建企业级文档 RAG 系统的终极解法，绝对值得一试。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   *理由*：1-bit 量化技术带来了惊人的显存压缩比。想在 8GB 显存的旧笔记本或 Mac 上体验跑满血 27B MoE 模型的丝滑感？这是目前社区给出的最佳方案。
3. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
   *理由*：PC 端 Agent 的核心基建。不同于 API 调用，你可以通过开源权重研究微软是如何让模型精准理解屏幕坐标并接管键鼠操作的，是开发本地自动化助手的绝佳起点。