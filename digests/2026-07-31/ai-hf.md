# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 22:19 UTC

---

### 📅 《Hugging Face 热门模型日报》 (2026-07-31)

#### 📌 今日速览
本周 Hugging Face 平台迎来了**Qwen3.6**家族的全面爆发，凭借出色的性能和 MoE（混合专家）架构，迅速占据榜单核心位置。多模态与视觉理解模型（特别是 OCR）持续火热，百度和微软纷纷推出重磅更新。此外，**“去审查”微调**成为社区最活跃的玩法，基于 Qwen3.6 等基础模型的无审查版本迎来了惊人的下载量。

---

### 🏆 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
    *   作者: Qwen | 点赞: 2,595 | 下载: 6,119,519
    *   **一句话说明:** 拥有 35B 参数、激活仅 3B 的 MoE 架构全能王，以超 600 万的周下载量成为当前开源对话与指令微调的新基石。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 4,676 | 下载: 1,527,760
    *   **一句话说明:** 采用全新 `glm_moe_dsa` 架构的最新一代对话大模型，兼顾极高的人气和庞大的下载基数。
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
    *   作者: upstage | 点赞: 702 | 下载: 12,411
    *   **一句话说明:** Upstage 推出的 2500 亿参数超大型开源文本生成模型，展现了向超大参数量探索的野心。
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
    *   作者: Nanbeige | 点赞: 582 | 下载: 24,542
    *   **一句话说明:** 极具竞争力的 3B 级别轻量级文本生成模型，适合资源受限的本地部署。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 点赞: 3,576 | 下载: 2,598,659
    *   **一句话说明:** 彻底打破传统分辨率限制的强大 OCR 模型，解决了复杂长图、大幅面场景的文字提取痛点。
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
    *   作者: thinkingmachines | 点赞: 1,652 | 下载: 45,658
    *   **一句话说明:** 备受追捧的多模态模型，展现出卓越的图文理解和对话能力。
*   **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**
    *   作者: microsoft | 点赞: 119 | 下载: 2,951
    *   **一句话说明:** 微软出品的全新视觉语言（VL）多模态模型，进一步丰富了图像到文本的生态。
*   **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** & **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)**
    *   作者: owensong | 点赞: 315 / 119 | 下载: 1,100 / 654
    *   **一句话说明:** 专为边缘计算设计的极致轻量化 TTS 模型，能在纯 CPU 环境下实现高质量本地语音合成。

#### 🔧 专用模型（代码、数学、安全、OCR）
*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
    *   作者: Kwaipilot | 点赞: 349 | 下载: 9,225
    *   **一句话说明:** 基于 Qwen3.5-MoE 打磨的编程利器，提供强大的代码生成与补全能力。
*   **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
    *   作者: ATH-MaaS | 点赞: 349 | 下载: 57,439
    *   **一句话说明:** 专门针对光学字符识别任务深度优化的专用模型。
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
    *   作者: fdtn-ai | 点赞: 239 | 下载: 9,820
    *   **一句话说明:** 主打“安全”防御的微型模型，适合用于网络流量监控或敏感文本拦截。
*   **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)**
    *   作者: microsoft | 点赞: 120 | 下载: 3,864
    *   **一句话说明:** 融合了 1-bit 神经网络架构的极致轻量级语音识别（ASR）模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 3,187 | 下载: 1,803,090
    *   **一句话说明:** “零审查”微调王者，解除基础模型的内容限制，周下载量超 180 万。
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
    *   作者: DavidAU | 点赞: 1,022 | 下载: 955,767
    *   **一句话说明:** 深度魔改的 GGUF 量化版本，是本地玩家运行无限制多模态模型的热门选择。
*   **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** & **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**
    *   作者: unsloth | 点赞: 175 / 206 | 下载: 766 / 12,178
    *   **一句话说明:** Unsloth 团队迅速跟进放出的 Kimi-K3 原版及量化版，大幅降低本地部署门槛。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 点赞: 1,115 | 下载: 697,666
    *   **一句话说明:** 将 27B 大模型进行 2-bit 三进制极端压缩的先锋，让普通消费级显卡也能跑起大参数模型。

---

### 📈 生态信号
1. **Qwen 绝对统治力：** Qwen3.5/3.6 架构（尤其是 MoE 35B-A3B）已经成为本周开源生态的核心地基，原版下载量破千万，围绕它的代码微调、视觉融合、无审查魔改版本百花齐放。
2. **“去审查”需求爆发：** 列表中带有 `Uncensored` 标签的模型多达数个，且周下载量动辄破百万。这说明在开源社区，用户对摆脱安全对齐限制、追求原生生成能力的意愿极其强烈。
3. **极端量化技术成熟：** 以 `Ternary-Bonsai` (2-bit) 和 `BitNet` 为代表的超低比特量化方案热度飙升，结合 `GGUF` 格式的统治力，印证了“让大模型跑在任何设备上”仍是目前工程界最核心的诉求。
4. **多模态垂直化：** `Unlimited-OCR` 的数百万次下载证明，目前行业不仅需要泛化多模态，更急需解决诸如“超长图 OCR”、“复杂排版识别”等具体瓶颈。

---

### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   * **理由:** 视觉落地的一大痛点就是高分辨率长图的 Token 爆炸和截断问题。这个模型承诺了“无限”分辨率，对于做文档解析、RAG 提取和自动化办公的开发者来说是必测的利器。
2. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
   * **理由:** 仅需激活 3B 参数就能撬动 35B 模型的智商。如果你在寻找新的本地基座模型，它代表了当前开源界在“性能/功耗比”上的最前沿平衡点。
3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
   * **理由:** 好奇心驱动的绝佳对象。2-bit 量化通常被认为会摧毁语言能力，但该模型能有近 70 万下载量，值得研究者一探究竟其在推理、逻辑保持上到底达到了什么可用水平。