# Hugging Face 热门模型日报 2026-04-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-28 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-04-29)

## 📰 今日速览
今日的 Hugging Face 热门榜单被 **Qwen3.6 系列的全面爆发** 所主导，其基础模型及衍生的去审查版、量化版包揽了榜单的多个头部席位，多模态能力成为标配。基础模型格局迎来重大升级，**DeepSeek-V4** 和 **Google Gemma-4** 正式登录 Hub，受到社区热烈追捧。此外，非文本生成领域同样亮点纷呈，腾讯的 3D 世界模型 HY-World、百度的 ERNIE-Image 以及开源对话大模型 GLM-5.1 的首次亮相，共同构成了今日繁荣的开源生态图景。

---

## 🔥 热门模型

### 🧠 语言模型 (LLM / 对话模型)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 作者: deepseek-ai | 👍 3,129 | ⬇️ 174,402
  - **说明**: DeepSeek V4 系列的旗舰对话版本，凭借卓越的推理与生成能力空降榜首。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 作者: deepseek-ai | 👍 819 | ⬇️ 96,948
  - **说明**: DeepSeek V4 的轻量级快速推理版本，采用 MIT 协议，主打高性价比与极速生成。
- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | 作者: zai-org | 👍 1,549 | ⬇️ 256,484
  - **说明**: 备受瞩目的 GLM 系列最新一代MoE大模型，在对话与通用任务上表现强劲。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | 作者: XiaomiMiMo | 👍 233 | ⬇️ 396
  - **说明**: 小米推出的最新端侧/Agent 语言模型，主打长上下文与智能体应用。

### 🎨 多模态与生成 (图像 / 3D / 视频)
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | 作者: Qwen | 👍 957 | ⬇️ 508,728
  - **说明**: 阿里 Qwen3.6 系列的原生多模态版本，视觉与文本能力结合，下载量惊人。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | 作者: moonshotai | 👍 1,130 | ⬇️ 489,001
  - **说明**: 月之暗面最新多模态模型，引入压缩张量技术，在特征提取和视觉理解上表现优异。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 2,416 | ⬇️ 6,558,301
  - **说明**: Google Gemma 4 代 31B 指令微调多模态模型，霸榜下载量第一（超 650 万），极高人气。
- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | 作者: tencent | 👍 622 | ⬇️ 3,134
  - **说明**: 腾讯推出的 2.0 版图像到 3D 世界生成模型，为 3D 和空间计算领域带来新工具。
- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | 作者: baidu | 👍 580 | ⬇️ 8,466
  - **说明**: 百度文心图文生图模型开源（80亿参数），标志着传统大厂持续拥抱图像生成开源生态。

### 🔧 专用模型 (隐私 / 视觉编码)
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | 作者: openai | 👍 1,018 | ⬇️ 57,743
  - **说明**: OpenAI 发布的文本 Token 分类器，用于精准识别和过滤敏感隐私数据，企业级实用工具。
- **[facebook/sapiens2](https://huggingface.co/facebook/sapiens2)** | 作者: facebook | 👍 81 | ⬇️ 0
  - **说明**: Meta 最新的人体视觉中心基础模型，非常适合人体估计、分割等科研与专业视觉任务。

### 📦 微调与量化 (GGUF / 社区衍生)
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 作者: unsloth | 👍 849 | ⬇️ 1,705,737
  - **说明**: Qwen3.6 MoE 版本的 GGUF 量化，使本地部署兼具高智能与低资源消耗，备受热捧。
- **[HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-27B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 220 | ⬇️ 215,232
  - **说明**: 针对去除 Qwen3.6 安全审查机制的社区激进版微调，反映了社区对无限制对话模型的需求。
- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | 作者: OBLITERATUS | 👍 534 | ⬇️ 134,773
  - **说明**: 针对 Gemma-4 的去审查化（Uncensored）处理版本，解除了原生的安全限制。
- **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)** | 作者: hesamation | 👍 204 | ⬇️ 141,233
  - **说明**: 社区极具创意地将 Claude Opus 的推理能力蒸馏到开源 Qwen3.6 架构中，热度极高。

---

## 📈 生态信号

**1. 模型家族势头：** 
**Qwen3.6 系列**（涵盖 27B、35B MoE 及各类量化）无疑占据了当前开源生态的统治地位，几乎占据了榜单三分之一的席位。同时，**DeepSeek V4** 和 **Gemma 4** 的加入，正式宣告了新一代基础大模型（支持多模态与原生 MoE 架构）进入白热化竞争阶段。

**2. 开源权重 vs 闭源的趋势：**
虽然 OpenAI、百度等大厂仍在释放专有任务模型（如 `privacy-filter`、`ERNIE-Image`），但榜单头部完全由开源权重模型主导。特别是基于强基座模型的“蒸馏”与“去审查”蔚然成风。社区（如 `hesamation`）利用闭源顶级模型（如 Claude Opus）的数据对开源权重进行蒸馏，打破了闭源模型的推理护城河。

**3. 量化与微调动态：**
端侧和消费级硬件部署依然是刚需。`unsloth` 的 GGUF 转换版本是当之无愧的流量密码，单周下载量动辄破百万。此外，新兴的 `DFlash` 量化格式（如 `z-lab` 推出的版本）为开发者除 GGUF 和 FP8 之外提供了更具硬件兼容性的新选择。

---

## 🎯 值得探索

1. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**: 
   Qwen3.6 系列的绝对核心。作为 MoE（混合专家）模型，总参数量达 350 亿，但每次推理仅激活 30 亿参数。这提供了媲美超大模型的视觉与语言能力，却有着极低的推理成本，是本地开发和复杂应用的首选。
2. **[hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF](https://huggingface.co/hesamation/Qwen3.6-35B-A3B-Claude-4.6-Opus-Reasoning-Distilled-GGUF)**: 
   兼具创新性与实用性。通过知识蒸馏，将前沿的闭源推理能力注入开源模型，非常适合研究当前开源模型如何缩小与顶尖闭源模型在复杂逻辑和 CoT（思维链）方面的差距。
3. **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**: 
   打破了纯语言模型内卷的格局。这是一个从单图生成高质量 3D 世界的生成模型，对于关注空间计算、自动驾驶场景生成、游戏资产生成以及元宇宙底层内容生成的开发者极具实验价值。