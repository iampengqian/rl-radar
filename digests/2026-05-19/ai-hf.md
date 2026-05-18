# Hugging Face 热门模型日报 2026-05-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-18 22:16 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-19)

## 📰 今日速览
今日的 Hugging Face 热榜呈现出多模态与基础大模型双核驱动的态势。**DeepSeek-V4** 系列与 **Qwen3.6** 系列毫无悬念地占据了下载量与点赞数的绝对高地，开源社区对新基座的热情空前。视觉与多模态生成领域迎来大爆发，**MiniCPM-V-4.6**、文本生视频模型 **Sulphur-2** 以及 3D 生成模型 **Pixal3D** 齐聚榜首，标志着“文本到一切”的技术栈正在快速成熟。此外，端侧与本地部署需求依然旺盛，GGUF 格式的量化模型和 ComfyUI 节点生态相关资源在社区中保持着极高的活跃度。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,039 | ⬇️ 3,435,748
  - **说明**: DeepSeek 最新一代旗舰 Pro 级大模型，凭借强大的生成与推理能力霸榜，是本周最受欢迎的开源基座。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,146 | ⬇️ 1,904,105
  - **说明**: V4 系列的轻量高效版本，主推极速推理与极低延迟，适合高并发 API 部署。
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 530 | ⬇️ 145,609
  - **说明**: 基于 ZAYA1 推理基座微调的新锐 8B 模型，展现了中小型模型在特定任务上的强大潜力。
- **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)**
  - 作者: inclusionAI | 👍 75 | ⬇️ 2,406
  - **说明**: 采用 Bailing Hybrid 架构的超大规模（1T级别）模型预览版，展现了极高的参数规模探索野心。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 769 | ⬇️ 80,586
  - **说明**: 面向端侧的顶尖图文多模态模型，全能且高效，是 AI 助手端侧部署的“明星项目”。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,679 | ⬇️ 9,889,356
  - **说明**: Google 最新的 31B 指令微调多模态模型，今日下载量全局最高，开源界工业级标杆。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** & **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,329 / 1,815 | ⬇️ 3.55M / 5.61M
  - **说明**: 通义千问最新 3.6 版本多模态基座及 MoE 架构，平衡了强悍性能与极低的推理成本。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,116 | ⬇️ 1,049,229
  - **说明**: 爆火的高质量文本生成视频基础模型，下载量破百万，预示视频生成平民化时代到来。
- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 143 | ⬇️ 0
  - **说明**: 腾讯 ARC 推出的单图生 3D 模型，解决了 3D 资产创建的痛点，备受创作者瞩目。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 417 | ⬇️ 24,031
  - **说明**: 顶尖文本转语音（TTS）模型，带来极具表现力的语音合成效果。
- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 158 | ⬇️ 1,001
  - **说明**: 专为戏剧和强情感场景定制的语音克隆与生成模型，拓展了 AI 声音表现力的边界。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 408 | ⬇️ 15,495
  - **说明**: 专注于生成高质量二次元动漫风格的图像模型，在 ACG 创作者圈子里备受追捧。
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,404 | ⬇️ 545,205
  - **说明**: 适配 ComfyUI 的强大扩散模型节点/单文件，因其实用的出图效果成为工作流标配。
- **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** & **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
  - 作者: RuneXX / TenStrip | 👍 582 / 287 | ⬇️ 0 / 140,927
  - **说明**: 围绕 LTX 视频生成模型 2.3 版本的社区工作流与微调模型，视频创作生态正在繁荣发展。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[Microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 👍 577 | ⬇️ 16,011
  - **说明**: 微软基于 Qwen2.5-VL 架构魔改的多模态专用模型，展现了大厂在特定任务上的探索。
- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  - 作者: jackxinning | 👍 119 | ⬇️ 9,432
  - **说明**: 专门针对医疗问答领域微调的模型（支持中英双语），在垂直行业应用具有很高价值。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 80 | ⬇️ 241
  - **说明**: 使用 JAX 编码器-解码器架构的新型工具调用与函数执行模型，架构选型独特。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
  - 作者: antirez | 👍 143 | ⬇️ 295,917
  - **说明**: 由知名开发者 antirez 制作的 DeepSeek-V4 GGUF 量化版，极大地降低了本地运行顶级大模型的门槛。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 285 / 247 | ⬇️ 268,305 / 237,613
  - **说明**: Unsloth 出品的高质量 Qwen3.6 GGUF 量化格式，支持多token预测(MTP)，本地推理爱好者必下。
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 626 | ⬇️ 267,449
  - **说明**: 基于 Gemma-4 的无审查版本量化模型，迎合了社区对不受限对话和创作自由的需求。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 289 | ⬇️ 0
  - **说明**: 修复了 Qwen 系列聊天模板 bug 的社区热补丁，体现了开源社区协同除错的高效性。

---

## 📈 生态信号

**1. 巨头基座对决与 MoE 架构普及：** Qwen3.6 与 DeepSeek-V4 两强相争主导了目前的 LLM 格局。特别是 Qwen3.6-35B-A3B 的爆火，证明了通过 MoE 架构在极低激活参数（3B）下实现大模型（35B）性能的路线，已成为兼顾成本与效果的绝对主流。
**2. "端侧多模态"与"文本转视频"成为新引擎：** 纯文本大模型的竞争已溢出到多模态。MiniCPM-V-4.6、Gemma-4-31B 引领端侧端到端多模态潮流；同时，视频生成（Sulphur-2、LTX-2.3）正接力图像生成，成为 AIGC 的下一波红利。
**3. GGUF 量化生态与无审查需求常态化：** 几乎所有上榜的基座模型都有对应的 GGUF 热门量化版本。以 Unsloth 为代表的量化技术让 27B-35B 级别模型在个人 PC 上流畅运行成为现实；同时，去审查版本的持续火爆，反映了社区对 AI 内容创作自由度的高要求。

---

## 💡 值得探索

1. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - **理由**: 获得了超百万次的下载和极高点赞，是目前视频生成领域冉冉升起的新星。如果你对 AI 视频生成、短剧制作或相关算法研究感兴趣，这绝对是目前最不容错过的基础模型。
2. **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
   - **理由**: 单图生成 3D（Image-to-3D）是当前 3D AIGC 界的核心痛点，腾讯 ARC 的这款作品在架构上带来了新的突破。非常适合游戏开发者、元宇宙创作者及 3D 算法工程师深入研究。
3. **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
   - **理由**: 在一众巨无霸模型中突围的 8B 模型。其基于推理微调机制，展现出了“小体积、大智慧”的特点。对于算力受限但仍需复杂逻辑推理应用（如本地智能体 Agent）的开发者而言，具有极高的实操价值。