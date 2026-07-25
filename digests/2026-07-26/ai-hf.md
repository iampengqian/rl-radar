# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 22:15 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-07-26

---

#### 📌 今日速览
1. **多模态与视觉理解全面接管榜单**：以百度无限 OCR 模型和 Qwen3.6 系列为代表，原生图文理解能力正在成为中大型模型的标配。
2. **极限量化技术进入活跃期**：1-bit 和 2-bit 极低比特量化方案（如 NVFP4, Ternary, Bonsai）大放异彩，表明社区在端侧和低算力环境部署大模型的强烈需求。
3. **“无审查”社区微调持续繁荣**：基于 Qwen3.6 MoE 架构的各类高自由度、个性化微调版本霸屏下载榜，开源社区对模型可控性的追求依然强烈。
4. **具身智能崭露头角**：OpenBMB 连发多款机器人控制与轨迹追踪模型，标志着开源生态正向物理世界交互加速拓展。

---

#### 🔥 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 4,445 | ⬇️ 707,029
    *   **一句话说明**: 采用 glm_moe_dsa 架构的全新一代对话大模型，凭借出色的综合能力和开源策略成为本周热度最高的通用基座模型之一。
*   **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
    *   作者: google | 👍 3,371 | ⬇️ 12,511,030
    *   **一句话说明**: 谷歌最新发布的 31B 多模态指令模型，下载量冠绝全场，凭借极高质量的指令遵循能力成为企业级应用的首选。
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
    *   作者: upstage | 👍 559 | ⬇️ 2,784
    *   **一句话说明**: Upstage 推出的 2500 亿参数重量级大模型，标志着该团队在超大规模开源模型上的又一次大胆尝试。
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
    *   作者: Nanbeige | 👍 402 | ⬇️ 11,573
    *   **一句话说明**: 极其轻量且高效的 3B 级别通用文本生成模型，是边缘设备部署的优质选择。
*   **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
    *   作者: Motif-Technologies | 👍 189 | ⬇️ 2,270
    *   **一句话说明**: 备受期待的新一代通用大模型测试版，主打强大的特征提取与基座潜力。
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
    *   作者: fdtn-ai | 👍 162 | ⬇️ 5,661
    *   **一句话说明**: 专为安全领域打造的超小型混合专家模型，展现了小模型在垂直细分领域的独特价值。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 3,097 | ⬇️ 2,564,264
    *   **一句话说明**: 解决行业痛点的无限长图/复杂排版 OCR 神器，以超过 250 万的下载量成为本周最刚需的生产力工具。
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 👍 2,515 | ⬇️ 6,413,105
    *   **一句话说明**: 千问最新一代 35B 总参/3B 激活的视觉 MoE 架构原版模型，凭借极高的性价比成为当前图文多模态的开源基石。
*   **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
    *   作者: microsoft | 👍 272 | ⬇️ 1,156
    *   **一句话说明**: 微软推出的新一代 Diffusers 图像生成与编辑工作流模型，预示着图像生成控制力的再次进化。
*   **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
    *   作者: nvidia | 👍 118 | ⬇️ 31,759
    *   **一句话说明**: 英伟达专为边缘计算设计的物理世界视觉生成与理解模型，是具身智能的底层基础设施。
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
    *   作者: ATH-MaaS | 👍 286 | ⬇️ 33,109
    *   **一句话说明**: 基于 Qwen3.5 升级的专业级光学字符识别多模态模型，在复杂的文档解析上表现优异。
*   **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
    *   作者: microsoft | 👍 86 | ⬇️ 1,039
    *   **一句话说明**: 面向“Computer Use（电脑操控）”的多模态智能体模型，展现了 AI 直接接管图形界面操作的强大潜力。
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
    *   作者: conradlocke | 👍 538 | ⬇️ 0
    *   **一句话说明**: 专供 ComfyUI 使用的高质量图像身份特征保持 LoRA，解决了 AI 图像编辑中人物一致性难题。

##### 🔧 专用模型（代码、数学、医疗、嵌入、具身智能）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 👍 1,276 | ⬇️ 749,449
    *   **一句话说明**: Kimi 最新放出的代码与推理特化版多模态模型，在编程能力与高强度逻辑推演上处于行业第一梯队。
*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   作者: Kwaipilot | 👍 162 | ⬇️ 841
    *   **一句话说明**: 采用最新 MoE 架构的前沿代码生成模型开发版，专为极客与专业程序员打造。
*   **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
    *   作者: openbmb | 👍 175 | ⬇️ 607
    *   **一句话说明**: 面向机器人手臂控制的视觉-语言-动作 (VLA) 模型，将大语言模型的推理能力真正接入物理执行器。
*   **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
    *   作者: openbmb | 👍 127 | ⬇️ 379
    *   **一句话说明**: 专攻机器人视觉轨迹追踪的微型专用模型，是构建自动化机器人技术栈的关键组件。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 3,087 | ⬇️ 1,988,680
    *   **一句话说明**: 脱缰版 Qwen3.6 MoE，去除了所有的内容安全对齐限制，凭借激进的响应风格获得极高下载量。
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 2,465 | ⬇️ 1,570,995
    *   **一句话说明**: 融合了 Claude 风格并支持百万 Token 上下文的 9B 强推理模型 GGUF 版，在端侧长文本处理上表现惊艳。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 👍 1,566 | ⬇️ 31,575
    *   **一句话说明**: 深度定制的对话特化型多模态微调模型，以极佳的角色扮演与聊天拟真体验斩获大量点赞。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 1,028 | ⬇️ 611,685
    *   **一句话说明**: 震撼级的 2-bit (三进制) 量化版模型，将 27B 参数压缩到极限，让普通家用电脑也能跑满血大模型。
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
    *   作者: poolside | 👍 657 | ⬇️ 45,260
    *   **一句话说明**: 引起社区轰动的新锐基座模型，因其优异的基础素质，其衍生量化版（GGUF/NVFP4）全面霸榜。
    *   *(衍生版本: [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) / [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) / [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF))*
*   **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 638 | ⬇️ 2,114,963
    *   **一句话说明**: 采用 1-bit 极限压缩的标杆性量化项目，在大幅降低显存占用的情况下保留了 27B 模型的核心智力。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 👍 535 | ⬇️ 483,845
    *   **一句话说明**: 名字最硬核的社区“缝合怪”与创意写作特化版，专为突破常规逻辑、生成天马行空的内容而生。
*   **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**
    *   作者: bottlecapai | 👍 549 | ⬇️ 27,064
    *   **一句话说明**: 强化了深度思考链的 Qwen3.6 视觉微调版，显著提升了模型在复杂图文交织场景下的推理表现。
*   **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)**
    *   作者: LuffyTheFox | 👍 152 | ⬇️ 60,643
    *   **一句话说明**: 经典的 Hermes 系列无审查微调 GGUF 版本，在保持 MoE 高效推理的同时释放了模型的创作上限。
*   **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**
    *   作者: baseten | 👍 98 | ⬇️ 1,977
    *   **一句话说明**: 顶尖部署平台 Baseten 为 GLM-5.2 视觉版制作的 NVFP4 高效量化版，专为 vLLM/SGLang 极速推理优化。

---

#### 📈 生态信号
1. **Qwen3.6 家族统治力显现**：以 Qwen3.6（涵盖 27B 稠密与 35B-A3B MoE 架构）为核心底座的模型已全面占据榜单核心位置。社区基于其打造的“无审查”、“深度思考”与“创意写作”微调版呈爆发式增长。
2. **极限量化 (1-bit / 2-bit / NVFP4) 进入主流**：以往 4-bit/8-bit 是量化主流，但今天 Prism-ML 带来的 1-bit/2-bit Bonsai 方案，以及基于新一代 NVFP4 格式的模型，下载量高达数百万。这标志着大模型在 PC 端侧和移动设备上的普及速度远超预期。
3. **AI 从“聊天”向“干活”转型**：以百度 Unlimited-OCR（文档提取）、微软 Fara1.5（接管电脑操作）和 OpenBMB 机器人系列（物理执行）为代表，开源 AI 正在跨越纯文本对话的界限，快速向数字世界和物理世界的实际操作（Action）渗透。

---

#### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：无论你是做 RAG 知识库构建还是复杂票据解析，长文本和无限拼图 OCR 一直是痛点。它的超高下载量已经证明了其在企业级生产线上的实用价值，必试。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：如果你受限于显存无法运行 20B 以上规模的大模型，这个 1-bit 量化项目是见证奇迹的最佳对象。它能让你在极低的硬件损耗下，体验到中杯模型才有的逻辑推理能力。
3. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**：带有 `computer-use` 标签的模型代表了 AI 智能体的最前沿。探索它能让你直观感受到大模型是如何通过看屏幕、移鼠标、敲键盘来代你操作电脑的。