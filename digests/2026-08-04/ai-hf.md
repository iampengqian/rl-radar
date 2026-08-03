# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 22:19 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-08-04

---

#### 📰 1. 今日速览
今日 Hugging Face Hub 呈现出多模态突破与底层架构爆发并存的态势。月之暗面发布的 **Kimi-K3** 凭借卓越的多模态特征提取能力空降榜首，成为全场最受瞩目的明星模型。基座模型方面，**DeepSeek-V4** 与智谱的 **GLM-5.2** 双星闪耀，主导了通用大语言模型的流量。此外，基于 **Qwen3.6 架构（MoE）** 的无审查微调版本迎来了井喷，社区在边缘部署与去对齐化上的热情达到了新高。

---

#### 🔥 2. 热门模型

**🧠 语言模型（LLM、对话模型、指令微调）**
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
  - 作者: moonshotai | 👍 9,834 | ⬇️ 967,622
  - 一句话：月之暗面最新旗舰模型，以超高的点赞量空降榜首，展现了其强大的特征提取与图文理解能力。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** & **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 2,037 / 1,989 | ⬇️ 236,076 / 2,746,291
  - 一句话：DeepSeek 最新一代对话与文本生成主力，下载量破百万，是开源基座模型的标杆。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 👍 4,795 | ⬇️ 2,180,509
  - 一句话：智谱 AI 最新代际的 MoE 大模型，点赞量高居前三，文本生成能力备受开发者认可。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** / **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** / **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: Nanbeige / poolside / upstage | 👍 652 / 907 / 738
  - 一句话：各路大厂与专业机构的高性能通用大模型，覆盖了从 3B 端侧到 250B 巨型参数的全方位布局。

**🎨 多模态与生成（图像、视频、音频、文本到X）**
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** & **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**
  - 作者: MiniMaxAI / Comfy-Org | 👍 1,399 / 429 | ⬇️ 0 / 2
  - 一句话：强大的图生视频与文生视频模型，ComfyUI 官方已跟进支持，预示着视频生成工作流的新一轮迭代。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 👍 3,844 | ⬇️ 2,601,062
  - 一句话：百度推出的“无限”场景 OCR 模型，直击传统痛点，下载量惊人，成为文档处理新神器。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** & **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
  - 作者: microsoft | 👍 229 / 268
  - 一句话：微软在视觉语言（VL）与计算机控制使用领域的最新探索，强化了多模态的 Agent 属性。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** & **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**
  - 作者: owensong / Audio8 | 👍 398 / 210
  - 一句话：主打端侧、CPU 级别的轻量级本地语音合成（TTS）模型，代表了音频本地化的趋势。

**🔧 专用模型（代码、数学、医疗、嵌入）**
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**
  - 作者: Kwaipilot | 👍 443 | ⬇️ 14,339
  - 一句话：专为程序员打造的代码生成专用模型，基于 Qwen3.5 MoE 架构强化了编程能力。
- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** 
  - 作者: thinkingmachines | 👍 260 | ⬇️ 8,504
  - 一句话：轻量级多模态模型，特别适合资源受限环境下的图文交互开发。

**📦 微调与量化（社区微调、GGUF、AWQ）**
- **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** & **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: DavidAU / HauhauCS | 👍 1,423 / 3,267 | ⬇️ 1.55M / 1.89M
  - 一句话：近期最火热的 Qwen3.6 MoE 模型的无审查微调版本，下载量均破百万，显示社区对去对齐（Uncensored）的巨大需求。
- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** & **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**
  - 作者: unsloth | 👍 423 / 281
  - 一句话：Unsloth 倾力打造的量化版本，让普通开发者也能在本地消费级显卡上跑起顶尖大模型。
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)**
  - 作者: nota-ai | 👍 168 | ⬇️ 68,778
  - 一句话：采用最新的 NVFP4 量化技术，让 250B 参数的巨型模型在显存占用和推理速度上迎来质的飞跃。

---

#### 📈 3. 生态信号
从今日的榜单可以提取出三个强烈的生态信号：
1. **Qwen3.6 MoE 统治微调圈**：尽管官方尚未（或即将）发布，基于 Qwen3.6 架构（如 35B-A3B）的微调版、无审查版和量化版已经彻底霸榜，说明 Qwen 的下一代架构在社区极具号召力。
2. **开源多模态进入视频/全能时代**：以 Kimi-K3、MiniMax-H3 和百度 OCR 为代表，开源模型不再局限于纯文本，而是全面向高精度视觉（OCR/VL）和动态视频生成挺进。
3. **量化技术极速跟进**：以 Unsloth 和 Nota-ai 为代表的社区团队，已经能在旗舰模型发布的 48 小时内提供高质量的 GGUF 和 NVFP4 量化版本，极大缩短了从“云端发布”到“本地部署”的周期。

---

#### 💡 4. 值得探索
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：无论你是做 RAG 知识库构建还是文档自动化，百度这款下载量超 260 万的模型绝对值得立刻集成测试，它可能解决传统 OCR 在复杂排版下的痛点。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：对于 AIGC 视频创作者而言，配合 ComfyUI 官方的工作流，这款图生视频模型是本周最不容错过的玩具。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：需要高自由度角色扮演或无对齐限制的本地推理？这个高点赞的微调版本结合了 MoE 的低算力消耗特性，是本地部署的极佳选择。