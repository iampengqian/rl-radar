# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 22:13 UTC

---

### 📰 Hugging Face 热门模型日报（2026-07-12）

#### 📡 今日速览
今日的 Hugging Face Hub 呈现出**多模态推理**与**MoE（混合专家）架构**全面爆发的趋势。以 Qwen3.5/3.6 为基础的微调与量化模型（尤其是 GGUF 格式）占据了绝对的主导地位，成为开发者和社区创作者的首选底座。此外，百度的 Unlimited-OCR 和英伟达的 LocateAnything 等垂直领域大放异彩，标志着开源大模型正在向更精细化的实用场景（如无限制文字提取、空间目标定位）深入。

---

#### 🔥 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,828 | ⬇️ 421,270
  基于全新 MoE 与 DSA 架构的大型对话模型，凭借卓越的推理与对话能力登顶今日点赞榜。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 696 | ⬇️ 8,210
  腾讯最新推出的 Hunyuan 系列文本生成模型，参数规模与性能表现备受开源社区瞩目。
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** | 作者: AliesTaha | 👍 199 | ⬇️ 5,053
  基于 Qwen3 的指令微调模型，主打深度的上下文追踪与逻辑推演能力。
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | 作者: meituan-longcat | 👍 176 | ⬇️ 1,572
  美团推出的超长上下文对话模型，专为处理长文本和复杂多轮对话场景优化。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,707 | ⬇️ 1,472,194
  英伟达重磅推出的 3B 参数视觉定位模型，能精准识别并提取图像中任意目标，下载数爆棚。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,929 | ⬇️ 1,380,690
  百度发布的全能 OCR 与特征提取模型，突破传统分辨率限制，企业级应用下载量极高。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 109 | ⬇️ 12,817
  复旦 MOSS 团队的音频转文本模型，自带说话人分离功能，是会议记录的利器。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | 作者: Alissonerdx | 👍 98 | ⬇️ 0
  基于 LTX-2 的图生视频 LoRA 模型，在视频生成中展现出顶级的角色脸部一致性保持能力。
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | 作者: CohereLabs | 👍 88 | ⬇️ 7,687
  Cohere 针对阿拉伯语推出的高精度自动语音识别（ASR）专用模型。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 181 | ⬇️ 0
  基于 Krea-2 的图像身份编辑 LoRA，允许用户在保持原有身份特征下进行图像风格重塑。

##### 🔧 专用模型（代码、数学、医疗、嵌入、表格）
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 👍 1,148 | ⬇️ 436,530
  针对终端编程与 Agentic（智能体）场景微调的 Gemma4 代码模型，开发者的极客玩具。
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 348 | ⬇️ 20,110
  谷歌推出的表格基础模型，支持零样本下的表格分类与回归分析，数据分析师的革命性工具。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | 作者: SupraLabs | 👍 98 | ⬇️ 1,275
  极轻量级（51M）的 LLaMA 路由模型，专为多模型推理调度与算力分发设计。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,648 | ⬇️ 2,641,936
  去除安全审查的 Qwen3.6 MoE 视觉语言量化模型，今日全站下载量第一，深受本地算力玩家追捧。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 1,047 | ⬇️ 2,904,169
  Unsloth 动力出品的 Qwen3.6 量化版，支持多 Token 预测（MTP），极大提升了端侧推理速度。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,007 | ⬇️ 1,944,961
  融合了 Claude 风格的 Qwen3.5 量化微调模型，具有极强的 1M 超长上下文推理表现。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍 851 | ⬇️ 0
  针对 Qwen3.5 系列修复并优化的聊天模板与 Jinja 配置，解决了开发者在部署时的诸多兼容痛点。
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍 849 | ⬇️ 1,216,495
  强化学习优化的 35B 对话模型量化版，兼顾了规模与本地部署的流畅度。
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | 作者: unsloth | 👍 140 | ⬇️ 38,922
  首个放出的 DeepSeek V4 Flash 架构量化版本，让高性能前沿大模型能在消费级显卡上奔跑。

---

#### 📈 生态信号
**Qwen 家族（3.5/3.6）**已在开源生态中确立了绝对的统治地位，不仅衍生出无数的微调版本，其 MoE 架构更成为社区主流。此外，**GLM-5.2** 等国产大模型的强势入局，打破了纯西方架构的主导格局。

从部署趋势来看，**GGUF 格式与 MoE 架构的结合**是当下的绝对热点，如 `HauhauCS` 的模型下载数破百万，这表明开发者在追求模型智能（参数量大）的同时，对端侧、消费级硬件的部署落地需求极其迫切。

同时，**英伟达**（NVIDIA）不再局限于提供基础通用大模型，而是开始发布极具针对性的专业领域小模型（如 `LocateAnything`），以抢占边缘计算与高精度视觉任务的市场。

---

#### 💡 值得探索

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   *推荐理由*：仅仅 3B 参数，却在目标检测与空间定位上表现惊艳。对于需要做本地图像分析、机器人视觉或自动数据标注的开发者来说，这是一个兼顾速度与精度的完美选择。
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   *推荐理由*：结合了最新 Qwen3.6 底座与 MTP（多标记预测）技术，如果你在寻找一款能在本地电脑上达到极高生成速度的智能对话模型，这绝对是目前的版本答案。
3. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
   *推荐理由*：突破了大模型仅限自然语言处理的刻板印象。TabFM 开创性地将 Transformer 应用于零样本表格理解，非常适合数据科学家和金融/商业分析师用来进行自动化回归分析。