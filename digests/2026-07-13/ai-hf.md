# Hugging Face 热门模型日报 2026-07-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 22:14 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 7 月 13 日的数据为您整理。

### 📰 今日速览
今日 Hugging Face 社区呈现出**“本地化推理狂飙”**与**“多模态全能化”**两大核心特征。以 Qwen3.5/3.6 为基础底座的社区魔改（如 GGUF 量化、视觉增强、深度思考）呈现爆发式增长，主导了下载量榜单。同时，大厂在垂直领域持续发力，百度推出了针对性极强的 Unlimited-OCR，Nvidia 发布了 LocateAnything-3B 等空间感知模型。此外，音频处理（语音克隆、转录）和视频生成（世界模型、面部 ID 保持）赛道也迎来了多款高热度新作。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 3,853 | 📥 441,413
  一句话：智谱推出的新一代对话大模型，凭借强大的 MoE 架构和极高的社区期待度登顶语言类榜首。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 714 | 📥 8,655
  一句话：腾讯混元系列的最新一代文本生成模型，展现了国产大模型在基础能力上的持续迭代。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** | 作者: empero-ai | 👍 773 | 📥 188,197
  一句话：基于 Qwen 底座深度微调的高性能模型，主打长上下文（1M）与媲美 Claude 的 Mythos 神话级对齐体验。
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** | 作者: meituan-longcat | 👍 182 | 📥 1,767
  一句话：美团推出的主打超长文本处理的基础大模型，为复杂业务场景的长上下文需求提供开源支持。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 1,941 | 📥 1,430,656
  一句话：百度开源的强大多模态模型，打破了传统 OCR 的分辨率限制，下载量惊人，是目前最热的图文提取工具。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,714 | 📥 1,501,653
  一句话：Nvidia 推出的 3B 视觉定位大模型，不仅能理解图像，还能精准定位万物，是具身智能和空间感知的利器。
- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | 作者: robbyant | 👍 82 | 📥 0
  一句话：主打“世界模型”概念的高效图生视频（I2V）引擎，引发了生成式社区的关注。
- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** | 作者: nineninesix | 👍 84 | 📥 2,263
  一句话：基于 Qwen3.5 架构的创新型 TTS（文本到语音）模型，展现了 LLM 底座在音频生成上的跨界潜力。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | 作者: Alissonerdx | 👍 107 | 📥 0
  一句话：专为 LTX-Video 打造的 LoRA 模型，完美解决了视频生成中常见的角色面部 ID 漂移问题。

#### 🔧 专用模型（代码、数学、医疗、嵌入、音频）
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** | 作者: google | 👍 354 | 📥 20,973
  一句话：Google 发布的专注表格数据处理的基础大模型，在零样本表格分类和回归任务上表现卓越。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 126 | 📥 14,491
  一句话：复旦大学 MOSS 团队推出的语音转写专用模型，自带说话人分离功能，实用性拉满。
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** | 作者: CohereLabs | 👍 95 | 📥 9,860
  一句话：Cohere 针对小语种（阿拉伯语）专门优化的语音识别模型，填补了特定语种的 ASR 空白。
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** | 作者: SupraLabs | 👍 105 | 📥 1,434
  一句话：仅有 51M 参数的极致轻量级 LLaRA 路由器，专为高效调度和分发 AI 请求设计。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,673 | 📥 2,596,384
  一句话：去审查版的 Qwen3.6 MoE 视觉模型量化版，下载量极高，反映了对本地无限制多模态模型的巨大需求。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 作者: unsloth | 👍 1,057 | 📥 2,905,019
  一句话：Unsloth 出品的 Qwen3.6 多标记预测（MTP）GGUF 版本，适合在消费级显卡上极速运行。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,043 | 📥 1,967,677
  一句话：结合了推理能力与长上下文的 9B 模型，凭借出色的 GGUF 量化支持登顶本周下载量前三。
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** | 作者: unsloth | 👍 152 | 📥 44,614
  一句话：让硬核玩家能够在本地把玩顶级 DeepSeek V4 架构的必备量化版本。

---

### 📈 生态信号
当前 Hugging Face 生态展现出三大鲜明趋势：
1. **Qwen 统治开发者底座**：榜单中超半数以上的微调、量化及多模态衍生模型均基于 Qwen3.5 / 3.6 家族。Qwen 已实质上成为 2026 年开源社区最受欢迎的“模型主板”。
2. **GGUF 与本地部署成为绝对主流**：排名前列的模型几乎清一色带有 GGUF 标签，且下载量（动辄数百万）远超原生权重。社区对去审查、端侧可运行模型的渴望前所未有。
3. **开源模型更加“务实与全能”**：大厂不再单纯卷参数量，而是转向 OCR（百度）、表格处理（Google）和目标定位（Nvidia）等具备高商业落地价值的专用模态。同时，多标记预测（MTP）、MoE 架构已全面下放至普通消费者的硬件中。

---

### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   **理由**：传统的 OCR 模型在处理高分辨率长图或密集文本时容易丢失细节。百度开源的这款模型标注了“Unlimited”，是替换旧版 OCR Pipeline、提升 RAG 文档解析精度的绝佳选择。
2. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
   **理由**：带有 MTP（Multi-Token Prediction，多标记预测）技术的模型能大幅提高本地推理速度。对于想要在本地体验最新架构提速红利的开发者和极客，这是目前最完美的开箱即用方案。
3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   **理由**：这不仅仅是一个视觉理解模型，更是“视觉定位”。对于从事机器人视觉、UI 自动化操作 Agent 研发的研究者，这种仅需 3B 参数即可精准定位物体的空间感知模型极具挖掘价值。