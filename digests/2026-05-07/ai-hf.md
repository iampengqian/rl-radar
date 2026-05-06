# Hugging Face 热门模型日报 2026-05-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-06 22:13 UTC

---

# Hugging Face 热门模型日报 (2026-05-07)

## 1. 今日速览
今日 Hugging Face 平台迎来多个重磅模型更新，语言与多模态模型竞争白热化。**DeepSeek-V4** 系列双模型（Pro与Flash）同时登顶，以绝对优势霸榜文本生成赛道；**Google Gemma-4** 系列凭借超高的社区下载量成为当前最受欢迎的开放权重家族，而 **Qwen3.6** 的 MoE 架构（35B-A3B）更是创下超 300 万次下载的惊人记录。多模态领域，**NVIDIA** 与 **商汤** 等巨头正在推动 Any-to-Any（任意模态输入输出）模型的普及。此外，社区针对前沿模型的**去审查与极限量化**依然保持着极高的热度。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,650 | ⬇️ 786,631
  - **一句话说明：** DeepSeek-V4 系列的旗舰专业版，以极高的点赞数成为本周最受瞩目的文本生成基石模型。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 965 | ⬇️ 668,670
  - **一句话说明：** DeepSeek-V4 的轻量快速版，兼顾高性能与低推理成本，下载量迅速逼近 70 万。
- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
  - 作者: mistralai | 👍 281 | ⬇️ 16,576
  - **一句话说明：** Mistral 最新推出的 128B 参数中型大模型，支持英法双语及 vLLM 推理部署。
- **[ibm-granite/granite-4.1-8b](https://huggingface.co/ibm-granite/granite-4.1-8b) & [granite-4.1-30b](https://huggingface.co/ibm-granite/granite-4.1-30b)**
  - 作者: ibm-granite | 👍 160 / 102 | ⬇️ 21,803 / 7,329
  - **一句话说明：** IBM 发布的 Granite 4.1 系列开源模型，专为企业级文本生成任务优化。
- **[inclusionAI/Ling-2.6-1T](https://huggingface.co/inclusionAI/Ling-2.6-1T)**
  - 作者: inclusionAI | 👍 419 | ⬇️ 1,254
  - **一句话说明：** 可能基于 1T 规模数据训练的超大语言模型，主打混合架构与会话能力。
- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**
  - 作者: poolside | 👍 228 | ⬇️ 14,457
  - **一句话说明：** 专注于代码与文本生成的初创公司模型，以其出色的轻量化表现受到关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,538 | ⬇️ 8,403,901
  - **一句话说明：** 今日榜单下载量冠军（超 840 万），Gemma-4 系列最强多模态版本，社区开放权重的新标杆。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) & [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,646 / 1,154 | ⬇️ 3,030,186 / 1,613,364
  - **一句话说明：** 阿里 Qwen3.6 系列视觉语言模型，其中 35B-A3B 采用 MoE 架构以极低激活参数实现极高下载量。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,211 | ⬇️ 997,278
  - **一句话说明：** 月之暗面最新多模态大模型，支持特征提取和压缩张量，备受国内开发者瞩目。
- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**
  - 作者: nvidia | 👍 251 | ⬇️ 53,121
  - **一句话说明：** 英伟达推出的“全能”MoE模型，主打推理能力与多模态特征提取，激活参数仅 3B。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) & [MiMo-V2.5](https://huggingface.co/XiaomiMiMo/MiMo-V2.5)**
  - 作者: XiaomiMiMo | 👍 455 / 216 | ⬇️ 16,030 / 62,371
  - **一句话说明：** 小米推出的多模态模型，Pro版主打长上下文与Agent能力，基础版支持全面视听觉交互。
- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
  - 作者: sensenova | 👍 162 | ⬇️ 2,422
  - **一句话说明：** 商汤最新 8B 参数全能多模态模型，采用 MoT（Moment Tokenization）技术。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 290 | ⬇️ 55,461
  - **一句话说明：** 热门的文生视频基础模型，提供 GGUF 格式便于本地部署与推理。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 188 | ⬇️ 3,819
  - **一句话说明：** 专注于动漫风格的文生图模型，深受 ACG 社区和创作者喜爱。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,324 | ⬇️ 155,476
  - **一句话说明：** OpenAI 发布的专用于数据脱敏的 Token 分类模型，是企业合规与隐私保护的热门工具。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 99 | ⬇️ 16,554
  - **一句话说明：** 极致量化（1.25bit）的机器翻译专用模型，兼顾资源消耗与多语种翻译性能。
- **[ibm-granite/granite-embedding-97m-multilingual-r2](https://huggingface.co/ibm-granite/granite-embedding-97m-multilingual-r2)**
  - 作者: ibm-granite | 👍 83 | ⬇️ 3,746
  - **一句话说明：** IBM 推出的轻量级（97M）多语言文本嵌入模型，兼容多种推理后端（ONNX, OpenVINO）。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) & [Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 944 / 599 | ⬇️ 2,327,706 / 1,197,196
  - **一句话说明：** Unsloth 团队提供的高质量 Qwen3.6 GGUF 量化版，是普通开发者本地运行大模型的首选。
- **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**
  - 作者: dealignai | 👍 1,481 | ⬇️ 182,625
  - **一句话说明：** 社区对 Gemma-4 的去审查/无删减版微调，以极高点赞数反映了社区对完全开放模型的强烈需求。
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 80 | ⬇️ 106,958
  - **一句话说明：** 深度定制的 Qwen3.6 极限微调版，结合代码与未审查指令，展示了社区硬核玩家的微调能力。
- **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)**
  - 作者: Jackrong | 👍 96 | ⬇️ 85,712
  - **一句话说明：** 融合了 Qwen 和 DeepSeek 架构特点的社区微调量化版，带来奇特的知识融合效果。

---

## 3. 生态信号
当前开源生态正围绕 **Gemma-4、Qwen3.6 和 DeepSeek-V4** 三大“模型家族”展开激烈角逐。开源权重展现出压倒性优势，Gemma-4-31B-it 更是斩获超 840 万次下载的壮举，而 Qwen3.6-MoE 架构因在保持超大参数能力的同时大幅降低推理成本，备受开发者追捧。此外，“全模态”正成为行业共识，英伟达、小米、商汤等新发模型均向 Any-to-Any（任意输入输出）演进。在社区动态上，以 Unsloth 为主的极限量化和去审查微调热度不减，反映出开发者对于**在本地资源下无限制运行最强模型**的强烈渴望。

---

## 4. 值得探索
1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：
   MoE（混合专家）架构的典范。总参数 35B 但每次推理仅激活 3B，兼顾了庞大模型的知识储备与轻量模型的推理速度，非常适合资源受限的本地多模态探索。
2. **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**：
   探索“全能模型+强逻辑推理”的绝佳对象。同样是 MoE 架构，它被英伟达赋予了全方位特征提取与强化推理能力，是构建复杂 Agent 的潜在核心。
3. **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)**：
   如果你想了解社区对模型进行“去对齐化”和深度优化的极限在哪里，这个模型值得研究。它基于最强的 Gemma-4-31B，解除了安全限制并进行了专项性能强化。