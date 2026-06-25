# Hugging Face 热门模型日报 2026-06-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 22:26 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-06-26

---

#### 1. 今日速览
今日 Hugging Face 社区迎来了**参数量在 12B-35B 区间的混合专家模型**的全面爆发，特别是在端侧部署和 Mac 本地推理生态中占据绝对主导。以 DeepSeek-V4、GLM-5.2 和 Gemma-4 为代表的全新基座模型吸引了大量社区开发者跟进修补与量化。此外，“去审查/无删减”和“Agentic（智能体化）”微调成为本周最核心的关键词，多模态技术在 OCR、语音流识别及目标检测等垂直领域取得了显著突破。

---

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 2,470 | ⬇️ 67,107
  *一句话说明*: 智谱全新一代 GLM 混合专家基座，凭借强大的对话与推理能力登顶本周点赞榜首。
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 作者: deepseek-ai | 👍 5,061 | ⬇️ 1,878,217
  *一句话说明*: DeepSeek V4 旗舰大模型，以断层领先的下载量和超高人气成为当前开源界的绝对王者。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | 作者: google | 👍 1,174 | ⬇️ 2,187,644
  *一句话说明*: 谷歌最新一代 12B “Any-to-any” 全能基座模型，下载量破百万，兼顾性能与端侧友好度。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 👍 992 | ⬇️ 502,106
  *一句话说明*: Kimi 最新代码与多模态力作，压缩张量格式大幅降低显存门槛，下载量极高。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | 作者: MiniMaxAI | 👍 1,238 | ⬇️ 154,350
  *一句话说明*: MiniMax 多模态视觉语言旗舰，展现了强悍的图文理解能力。
- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** | 作者: Qwen | 👍 232 | ⬇️ 3,389
  *一句话说明*: 阿里通义推出的原生智能体 MoE 模型，专为复杂工具调用与 Agent 流程设计。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 876 | ⬇️ 70,743
  *一句话说明*: 百度推出的无限制 OCR 图文识别模型，解决了长图与复杂排版识别的痛点。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** / **[krea/Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)** | 作者: krea | 👍 240 / 184 | ⬇️ 2,996 / 5,113
  *一句话说明*: Krea 发布的全新一代极速与写实文生图底座，迅速占领 Diffusers 生态。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 👍 2,362 | ⬇️ 407,838
  *一句话说明*: 英伟达推出的超轻型多模态目标检测/定位模型，下载量惊人，极具工业落地价值。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者: nvidia | 👍 695 | ⬇️ 50,553
  *一句话说明*: 专为实时流式场景设计的超轻量语音识别（ASR）模型，延迟极低。
- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** | 作者: owensong | 👍 201 | ⬇️ 0
  *一句话说明*: 超小型文本转语音（TTS）模型，今日崭露头角的新锐语音合成方案。

##### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | 作者: WeiboAI | 👍 714 | ⬇️ 51,717
  *一句话说明*: 3B 体积的数学推理黑马，展示了小模型在深究数学逻辑上的巨大潜力。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | 作者: microsoft | 👍 343 | ⬇️ 5,276
  *一句话说明*: 微软推出的 4B 专用模型，旨在极速处理超长文本上下文的“子智能体”。
- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** | 作者: Chunjiang-Intelligence | 👍 89 | ⬇️ 646
  *一句话说明*: 基于 DeepSeek-V4 微调的垂直领域模型，专为红蓝对抗与网络安全任务打造。
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** | 作者: LiquidAI | 👍 122 | ⬇️ 11,833
  *一句话说明*: Liquid AI 推出的轻量级文本嵌入模型，在检索增强（RAG）任务中表现亮眼。

##### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者: yuxinlu1 | 👍 2,359 | ⬇️ 495,813
  *一句话说明*: Gemma-4 12B 的个人开发者代码微调版，量化后下载量近 50 万，是端侧写代码的利器。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,234 | ⬇️ 3,520,206
  *一句话说明*: 今日**下载量霸榜**的 Qwen3.6 无删减/去审查微调版，迎合了社区对模型无限制输出的巨大需求。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | 作者: nvidia | 👍 337 | ⬇️ 4,602,255
  *一句话说明*: 英伟达使用 ModelOpt 工具将通义千问 MoE 进行 NVFP4 极致量化，总体下载量突破 450 万，硬件级优化效果显著。
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | 作者: unsloth | 👍 383 | ⬇️ 88,915
  *一句话说明*: Unsloth 带来的 GLM-5.2 GGUF 量化版，让普通用户能在消费级显卡上流畅跑起顶级大模型。
- **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)** | 作者: huihui-ai | 👍 127 | ⬇️ 4,874
  *一句话说明*: 著名去审查团队对 Gemma-4 代码模型的“权重消除”版本，移除了安全对齐限制。

---

#### 3. 生态信号
当前开源生态正上演**“百B参数下沉至端侧”**的狂欢。DeepSeek-V4、GLM-5.2 和 Qwen 3.6 三大国产基座势头盖过传统海外大厂，成为社区探索的绝对核心。值得注意的是，榜单中近半数为本地量化版（GGUF/NVFP4），且 HauhauCS 等作者的“Uncensored（无删减）”微调模型下载量动辄破百万，反映出开发者在消费级硬件上寻求“算力效率”与“表达自由”的强烈诉求。此外，1B-3B 级别的超小型专业模型（如 LocateAnything-3B 和 VibeThinker-3B）正在接管手机端与边缘设备的垂直应用场景。

---

#### 4. 值得探索

1. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**
   * **理由**: 如果你正在寻找能在本地或有限算力下运行的强大模型，英伟达官方出品的 NVFP4 量化版本堪称完美。它展示了最新硬件级优化（Model Optimizer）如何让 35B 的 MoE 模型在极低显存占用下保持高性能，是部署落地的最优解。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   * **理由*: 传统视觉模型多偏向“理解”，而这款模型完美补足了轻量级的“目标定位”能力。3B 的大小极其适合作为机器视觉、UI 自动化或具身智能的视觉前缀组件，兼具速度与工业级精度。
3. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
   * **理由*: 个人开发者极其成功的“Coder + Agentic”微调尝试。GGUF 格式让它可以无缝接入 Ollama 或 LM Studio，是给 MacBook 或轻量级开发环境配置本地 AI 代码助手的本周首选。