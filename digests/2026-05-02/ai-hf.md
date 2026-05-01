# Hugging Face 热门模型日报 2026-05-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-01 22:13 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-02)

## 📰 今日速览
今日的 Hugging Face 热门榜单迎来了开源基础模型的全面爆发。Google 的 **Gemma-4** 以单周超 740 万次的惊人下载量彻底点燃了开源社区，成为绝对焦点；与此同时，中国力量表现抢眼，**DeepSeek-V4-Pro**、**Qwen3.6 系列**、**Kimi-K2.6** 和 **GLM-5.1** 等重磅更新全面霸榜。模型架构上，“混合专家”与“原生多模态”已成为行业标配，而在端侧部署方面，社区对 **GGUF 量化**和**去审查微调**的需求依然呈现出旺盛的生命力。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,362 | ⬇️ 321,492
  - **说明**: DeepSeek V4 系列的专业版旗舰模型，凭借强大的通用对话与文本生成能力空降本周点赞榜首。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 905 | ⬇️ 281,356
  - **说明**: V4 系列的轻量高速版本，以极高的推理想必和庞大的下载量成为开发者的高频调用首选。
- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**
  - 作者: zai-org | 👍 1,572 | ⬇️ 279,489
  - **说明**: 智谱推出的新一代 GLM 模型，采用了 `glm_moe_dsa` 新架构，备受中文开源社区瞩目。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 344 | ⬇️ 7,944
  - **说明**: 小米最新推出的语言模型，主打 Agent 智能体与超长上下文处理能力。
- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
  - 作者: poolside | 👍 173 | ⬇️ 5,690
  - **说明**: 专为 vLLM 等高效推理引擎优化的轻量级文本生成模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,464 | ⬇️ 7,474,774
  - **说明**: Google 最新一代原生多模态指令模型，以绝对领先的 740 万次下载量统治了本周的部署热潮。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,550 | ⬇️ 2,218,739
  - **说明**: 阿里 Qwen3.6 系列的 MoE 架构多模态重磅模型，以极小的激活参数量实现了惊人的 220 万次下载。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,055 | ⬇️ 906,859
  - **说明**: Qwen3.6 的密集型多模态版本，综合视觉与文本理解能力极强，成为新的基准测试标杆。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,173 | ⬇️ 649,331
  - **说明**: 月之暗面推出的 Kimi 最新一代多模态大模型，支持特征提取与高效的压缩张量格式。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 👍 182 | ⬇️ 35,000
  - **说明**: 英伟达推出的全能推理模型，具备 any-to-any 能力且融合了强化推理机制。
- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
  - 作者: inclusionAI | 👍 238 | ⬇️ 917
  - **说明**: 结合了 Diffusers 与 MoE 架构的泛化多模态模型，展现了超越传统自回归的新生成潜力。

### 🔧 专用模型（代码、数学、医疗、嵌入、过滤等）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,175 | ⬇️ 92,567
  - **说明**: OpenAI 发布的 token 分类工具，专注于数据隐私脱敏，反映了行业对安全与合规的强烈需求。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 68 | ⬇️ 470
  - **说明**: 极致压缩的 1.25bit 腾讯混元机器翻译专用模型，展示了在极低资源消耗下跑特定任务的潜力。
- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)**
  - 作者: facebook | 👍 106 | ⬇️ 0
  - **说明**: Meta 推出的视觉 Transformer，专攻以人为中心的各种计算机视觉任务。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 878 | ⬇️ 1,940,844
  - **说明**: 社区爆款，将 Qwen3.6 MoE 多模态模型转制为 GGUF 格式，下载量近 200 万。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 529 | ⬇️ 920,570
  - **说明**: 同样由 Unsloth 带来的 Qwen3.6 密集版本 GGUF 量化，满足本地运行需求。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 519 | ⬇️ 728,262
  - **说明**: 激进去除审查机制的 Qwen MoE 模型，反映了社区对无限制内容生成的巨大需求。
- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
  - 作者: z-lab | 👍 193 | ⬇️ 14,793
  - **说明**: 社区引入 DFlash 注意力机制优化的微调版本，旨在提升推理速度与显存利用率。

---

## 📈 生态信号

**模型家族集中度加剧**：榜单已被 Gemma、DeepSeek、Qwen 三大“豪门”牢牢主导，开源生态呈现出“赢者通吃”的头部效应。值得注意的是，**Qwen3.6 几乎以一己之力撑起了大半壁江山**，证明了原生多模态+MoE架构的成功。

**开源权重主导与隐私合规兴起**：闭源模型 API 的替代品已全面转向开源权重，顶级大厂（如 OpenAI）也开始向 Hub 贡献垂直专用工具（如 privacy-filter），开源平台正成为闭源巨头沉淀边缘能力的社区。

**去审查与极致量化活跃**：从 HauhauCS 的 Uncensored 动辄大几十万的下载，到 AngelSlim 的极限 1.25bit，以及 Unsloth 动辄破百万的 GGUF 转制，可以看出：**“端侧本地部署”与“无限制对齐”是当前社区极客最真实的刚需**。

---

## 💡 值得探索

1. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**：将全能多模态与强化推理能力结合在一个高效率的架构中，非常适合作为端侧复杂 Agent 的核心大脑，其 any-to-any 机制值得深入研究。
2. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**：不同于主流的自回归 LLM，该模型结合了 Diffusers 架构与 MoE 探索非自回归生成，为多模态研究提供了全新的非共识视角。
3. **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**：凭借出色的本土化能力、全新的 MoE 架构和近 28 万次的下载验证，它正在成为中文企业级应用替代昂贵闭源 API 的最优选项之一，强烈建议进行测试。