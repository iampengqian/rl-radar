# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 22:19 UTC

---

# 🤗 Hugging Face 热门模型日报（2026-07-28）

### 📰 今日速览
本期 Hugging Face 榜单迎来了开源大模型的“狂欢”。**Qwen3.6-35B-A3B** 毫无悬念地霸榜，其高达 600 万的下载量证明了它在开源社区的绝对统治力；紧随其后的是月之暗面发布的全新多模态巨兽 **Kimi-K3** 和智谱的 **GLM-5.2**，展现了国内大模型厂商强劲的迭代势头。此外，端侧与本地部署需求持续爆发，以 **Laguna-S-2.1** 为代表的模型衍生出了密集的量化版本（NVFP4、GGUF 等），1-bit/2-bit 极致量化正成为本地开发者的新宠。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  👤 作者: Qwen | 👍 点赞: 2,545 | ⬇️ 下载: 6,187,853
  💬 *一句话说明*：通义千问最新的 35B 激活参数的 MoE 架构基础大模型，凭借极高的性价比霸榜本期下载量第一。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  👤 作者: zai-org | 👍 点赞: 4,543 | ⬇️ 下载: 1,003,547
  💬 *一句话说明*：智谱推出的新一代高性能对话与文本生成大模型，兼顾极高人气与百万级实际部署。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  👤 作者: poolside | 👍 点赞: 750 | ⬇️ 下载: 63,605
  💬 *一句话说明*：Laguna 系列全新 2.1 版本通用文本生成模型，因其极高的社区热度引发了大量量化版本的诞生。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  👤 作者: upstage | 👍 点赞: 627 | ⬇️ 下载: 3,761
  💬 *一句话说明*：Upstage 发布的 250B 级别超大规模开源大模型，为需要超庞大参数量的企业级应用提供了新选择。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  👤 作者: Nanbeige | 👍 点赞: 491 | ⬇️ 下载: 16,518
  💬 *一句话说明*：南北阁推出的最新一代 3B 小尺寸大语言模型，主打轻量化与端侧文本生成能力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  👤 作者: moonshotai | 👍 点赞: 5,877 | ⬇️ 下载: 2,850
  💬 *一句话说明*：月之暗面最新旗舰级图文多模态模型，刚上线便空降点赞榜首，备受开发者期待。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  👤 作者: baidu | 👍 点赞: 3,321 | ⬇️ 下载: 2,645,773
  💬 *一句话说明*：百度推出的强大 OCR 模型，解决复杂长图与无限制文本识别痛点，实用性极强导致下载量惊人。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  👤 作者: microsoft | 👍 点赞: 381 | ⬇️ 下载: 1,691
  💬 *一句话说明*：微软推出的新一代文生图与图像编辑扩散模型，为高质量图像生成提供了全新基座。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  👤 作者: thinkingmachines | 👍 点赞: 1,601 | ⬇️ 下载: 36,196
  💬 *一句话说明*：一款表现出色的对话式多模态模型，能够精准理解图像与文本的复杂交互。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** / **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)**
  👤 作者: owensong | 👍 点赞: 221 / 91 | ⬇️ 下载: 483 / 349
  💬 *一句话说明*：主打纯 CPU 驱动的端侧本地语音合成（TTS）微型模型，极致压缩，适合边缘设备离线运行。

#### 🔧 专用模型（代码、数学、OCR、安全）
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  👤 作者: Kwaipilot | 👍 点赞: 238 | ⬇️ 下载: 5,312
  💬 *一句话说明*：基于 Qwen3.5-MoE 架构微调的最新代码生成专用模型，专精于多语言编程与开发辅助。
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  👤 作者: ATH-MaaS | 👍 点赞: 325 | ⬇️ 下载: 42,152
  💬 *一句话说明*：结合视觉大模型的专用 OCR 工具，针对复杂排版和图表文字提取进行了深度优化。
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**
  👤 作者: fdtn-ai | 👍 点赞: 206 | ⬇️ 下载: 6,421
  💬 *一句话说明*：超小型安全领域专用模型，主打网络防御与数据安全分析，适合直接部署在网关或边缘设备。

#### 📦 微调与量化（社区微调、GGUF、AWQ、1.58bit）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  👤 作者: HauhauCS | 👍 点赞: 3,132 | ⬇️ 下载: 1,894,395
  💬 *一句话说明*：基于最火热的 Qwen3.6 打造的“无审查版”社区微调 MoE 视觉模型，下载量近两百万。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  👤 作者: prism-ml | 👍 点赞: 657 / 1,068 | ⬇️ 下载: 2,257,928 / 648,938
  💬 *一句话说明*：采用极限 1-bit 与 2-bit 量化技术的 GGUF 模型，让 27B 大模型在普通家用电脑上流畅运行。
- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**
  👤 作者: poolside | 👍 点赞: 148 | ⬇️ 下载: 158,308
  💬 *一句话说明*：采用最新的英伟达 NVFP4 精度格式量化，在保持极低显存占用的同时最大化推理速度。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  👤 作者: DavidAU | 👍 点赞: 737 | ⬇️ 下载: 634,146
  💬 *一句话说明*：又一款高下载量的极致命名艺术“无审查版” Qwen3.6 量化模型，主打角色扮演与无限制对话。

---

### 📈 生态信号
本周生态呈现三大显著趋势：
1. **国产开源模型主导战场**：Qwen3.6 系列已成为社区微调的绝对底座（几乎所有热门 GGUF 都基于它），同时 Kimi-K3、GLM-5.2 和百度 OCR 等原生大厂模型的接连发布，表明最前沿的开源权重正向国内大厂高度集中。
2. **量化技术迈入“亚比特”时代**：以 NVFP4、Ternary（三进制 2-bit）、1-bit 为代表的新量化格式大爆发，标志着开源界正致力于将庞大参数的 MoE 模型塞进消费级显卡甚至 CPU 环境中，本地化部署门槛被极大拉低。
3. **“Uncensored（无审查）”微调需求暴涨**：榜单上出现了大量名字极长、主打“无审查”的魔改微调版，说明在合规大模型之外，社区对于角色扮演和去对齐化的原生求知需求依然旺盛。

---

### 💡 值得探索
1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：必试的基座标杆。它仅激活 3B 参数却拥有 35B 的智慧容量，其出色的吞吐量和综合能力使其成为目前替代闭源 API 的最佳开源方案。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：极具有生产力的多模态工具。如果你的业务涉及复杂长图、截图解析或文档电子化，它近 300 万的下载量证明了其开箱即用的强大泛化能力。
3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：极客与硬件玩家的首选。探索 2-bit 极限压缩如何维持大语言模型的核心逻辑能力，非常适合想在普通笔记本上运行重型 LLM 的开发者。