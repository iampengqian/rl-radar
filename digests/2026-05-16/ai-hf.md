# Hugging Face 热门模型日报 2026-05-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-15 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-16)

## 👀 今日速览
今天的大势依然被**多模态与全新一代基础大模型**所主导。Google 和 DeepSeek 的最新力作 Gemma-4 与 DeepSeek-V4 稳居下载与点赞榜首，持续震撼开源社区。多模态能力迎来大爆发，端侧视觉语言模型 MiniCPM-V 和重磅更新 MoE 架构的 Qwen3.6 成为开发者追捧的焦点。此外，**视频生成、3D重建与零样本语音克隆**等生成式任务迎来多位实力派开源玩家，展现了 AI 从单一文本向全模态交互演进的明确趋势。

---

## 🔥 热门模型

### 🧠 语言模型 (LLM & 对话模型)
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 作者: deepseek-ai | 👍 3,973 | ⬇️ 2,766,621
  - **说明**：DeepSeek V4 系列的重量级 Pro 版本，凭借强大的生成能力与开源权重，毫无悬念地夺得本周点赞量冠军。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 作者: deepseek-ai | 👍 1,094 | ⬇️ 1,624,247
  - **说明**：V4 系列的高效轻量版，兼顾性能与推理速度，下载量突破百万，是开发者在资源受限环境下的首选。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 2,647 | ⬇️ 9,827,416
  - **说明**：谷歌最新一代 Gemma 模型，凭借近千万的惊人下载量和优秀的指令遵循能力，成为目前最成功的基础模型之一。
- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | 作者: google | 👍 239 | ⬇️ 125,005
  - **说明**：专为智能体和助手场景优化的版本，展现了大模型向“任何到任何”全模态进阶的潜力。
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | 作者: openai | 👍 1,445 | ⬇️ 229,377
  - **说明**：OpenAI 开源的隐私过滤与实体识别模型，体现了在数据安全与合规审查方面日益增长的生态需求。

### 🎨 多模态与生成 (图像、视频、音频、文本到X)
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | 作者: openbmb | 👍 587 | ⬇️ 22,483
  - **说明**：面壁智能最新发布的端侧多模态视觉语言模型，极度适合移动设备等本地化部署场景。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) / [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 作者: Qwen | 👍 1,778 / 1,295 | ⬇️ 4.9M / 3.0M
  - **说明**：阿里 Qwen3.6 系列重磅更新，支持图像文本交互，其中 A3B 版本凭借极低的激活参数实现了卓越的多模态性能。
- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image) / [Dev版](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | 作者: HiDream-ai | 👍 342 / 98 | ⬇️ 11.7K / 3.8K
  - **说明**：结合了视觉大模型与图像生成能力的探索之作，证明了 Qwen3-VL 架构在生成任务上的巨大潜力。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 作者: SulphurAI | 👍 976 | ⬇️ 783,564
  - **说明**：备受瞩目的文生视频基础模型，下载量近 80 万，正迅速成为开源视频生成生态的新底座。
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | 作者: circlestone-labs | 👍 1,326 | ⬇️ 465,511
  - **说明**：专为 ComfyUI 设计的图像生成节点模型，反映了开源社区对图形化工作流的强烈偏好。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 作者: k2-fsa | 👍 888 | ⬇️ 2,189,655
  - **说明**：强大的零样本多语言语音克隆与生成模型，超两百万的下载量彰显了其在语音合成领域的统治力。
- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) / [RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | 作者: TenStrip/RuneXX | 👍 264 / 562
  - **说明**：基于 LTX 框架的图生视频与视频编辑社区模型，为短视频创作者提供了极佳的开源工具。
- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | 作者: TencentARC | 👍 76 | ⬇️ 0
  - **说明**：腾讯 ARC 团队带来的单图转 3D 模型，进一步降低了 3D 资产创建的门槛。

### 🔧 专用模型 (医疗、数学、语音处理)
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | 作者: Supertone | 👍 231 | ⬇️ 12,832
  - **说明**：专注高质量语音合成（TTS）的专用模型，在音频保真度方面表现优异。
- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | 作者: ResembleAI | 👍 83 | ⬇️ 429
  - **说明**：针对戏剧化长音频生成与声音克隆的专用模型，瞄准了有声书和播客等细分市场。
- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | 作者: jackxinning | 👍 113 | ⬇️ 10,822
  - **说明**：专为医疗问答（QA）微调的垂直领域模型，在中文和英文双语医疗基准上表现突出。
- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | 作者: sensenova | 👍 260 | ⬇️ 11,417
  - **说明**：商汤推出的多模态全能模型，具备强大的特征提取与综合认知能力。

### 📦 微调与量化 (社区微调、GGUF、AWQ)
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) / [35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** 等 | 作者: unslop | 👍 数千 | ⬇️ 超千万
  - **说明**：Unsloth 提供的 Qwen3.6 多线程预测（MTP）量化版本，极大降低了顶级多模态大模型的本地显存要求。
- **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | 作者: antirez | 👍 111 | ⬇️ 230,548
  - **说明**：由知名开发者 antirez 制作的 DeepSeek V4 量化版，方便社区通过 llama.cpp 在家用 PC 上运行。
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | 作者: Jiunsong | 👍 594 | ⬇️ 279,744
  - **说明**：移除了安全对齐限制的 Gemma 4 量化版，反映了开发者群体对无审查、高自由度模型的刚需。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍 212 | ⬇️ 0
  - **说明**：专为 Qwen 系列修复并优化对话模板（Jinja）的实用工具模型，体现了社区对基础部署体验的持续打磨。

---

## 📈 生态信号

**模型家族的更新迭代极为迅猛。** Qwen3.6 和 DeepSeek-V4 已完全确立了当前开源 LLM 领域的霸主地位，牢牢占据了下载与微调的核心生态圈。

**开源权重与闭源模型的差距进一步缩小。** 像拥有近千万下载量的 Google Gemma-4 和达到 GPT 级性能的 DeepSeek-V4 证明了“开放权重”策略正在成为顶级厂商争夺开发者心智的关键手段。同时，像 OpenAI 开源隐私过滤工具这样的动作，显示了闭源巨头也在通过特定小模型反哺开源社区。

**端侧部署与去限制化需求强劲。** Unsloth 的 GGUF 量化包与各类 ComfyUI 节点模型的热度居高不下，表明让顶级模型在消费级硬件上跑起来依然是刚需。此外，“Uncensored”版本的层出不穷，也反映了社区对 AI 审查边界的不懈探索与博弈。

---

## 💡 值得探索

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
   - **理由**：不仅有近千万的极高下载量作背书，其 31B 的参数量在推理性能和资源占用中取得了极佳的平衡，是测试新一代 LLM 能力的首选。

2. **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
   - **理由**：作为专攻端侧部署的多模态大模型，它在资源受限环境（如手机或轻薄本）下的图文理解能力尤为值得开发者测试，极具实用价值。

3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - **理由**：文生视频赛道正迎来大爆发，Sulphur-2 凭借近百万的下载量和极高的社区点赞，极有可能成为下一个 AI 视频创作者的主力基座模型。