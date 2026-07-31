# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 22:18 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-08-01

---

#### 📡 今日速览
1. **国内大厂主导开源大局**：Moonshot 领跑全站，Kimi-K3 凭借海量下载与点赞登顶；百度、DeepSeek 及智谱等头部模型持续霸榜，展示出强大的开源统治力。
2. **Qwen 3.6 生态迎来“魔改”狂欢**：基于 Qwen 3.6 架构（尤其是 MoE 版本）的无审查社区微调版全面爆发，去安全对齐模型需求高涨。
3. **端侧与本地部署技术激进**：2-bit 三值化（Ternary）、NVFP4 等极限量化技术走向成熟；CPU 纯本地 TTS 和 OCR 专用模型成为本周新热点。

---

#### 🔥 热门模型盘点

**🧠 语言模型（LLM、对话模型、指令微调）**
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | 👍 9,263 | ⬇️ 493,481
  *一句话说明*：本周绝对霸主，支持多模态的特征提取与文本生成，在各项指标中均展现出断层式领先。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 👍 1,923 | ⬇️ 2,923,499
  *一句话说明*：总下载量超 290 万的现象级模型，兼顾高性能与高吞吐，是当前开源社区的顶流基座。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 👍 4,705 | ⬇️ 1,651,533
  *一句话说明*：智谱 AI 推出的新一代 MoE 对话模型，兼具强大的对话体验与架构创新。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** | 👍 925 | ⬇️ 0
  *一句话说明*：DeepSeek-V4-Flash 的最新迭代版本，刚发布便冲入热榜，引发社区高度关注与跟进。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | 👍 713 | ⬇️ 12,911
  *一句话说明*：韩国 Upstage 推出的 2500 亿参数超大语言模型，标志着其在顶级开源赛道上的发力。

**🎨 多模态与生成（图像、视频、音频、文本到X）**
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/baidu/Unlimited-OCR)** | 👍 3,657 | ⬇️ 2,513,603
  *一句话说明*：百度推出的无限 OCR 模型，打破分辨率与长度限制，下载量惊人，成为文档处理新标杆。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 👍 1,663 | ⬇️ 57,259
  *一句话说明*：极具人气的图文多模态对话模型，在复杂视觉推理和图文交互上表现卓越。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | 👍 347 | ⬇️ 1,449
  *一句话说明*：主打边缘计算和纯 CPU 环境的高效本地语音合成（TTS）模型。
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | 👍 147 | ⬇️ 5,650
  *一句话说明*：微软推出的视觉语言大模型，进一步丰富了巨头在多模态领域的开源矩阵。
- **[Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow)** | 👍 106 | ⬇️ 60,162
  *一句话说明*：专为 ComfyUI 量身定制的扩散模型工作流节点，降低了图像生成的部署门槛。

**🔧 专用模型（代码、数学、医疗、嵌入）**
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 👍 367 | ⬇️ 10,241
  *一句话说明*：基于 Qwen3.5 架构的代码生成专精模型，为开发者提供强大的本地编程辅助能力。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 👍 862 | ⬇️ 76,212
  *一句话说明*：Poolside 推出的特化代码与文本生成模型，在软件工程任务中表现出极高的专业度。
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** | 👍 133 | ⬇️ 5,464
  *一句话说明*：采用 BitNet 架构的极致轻量化语音识别（ASR）模型，专为低功耗高频场景设计。

**📦 微调与量化（社区微调、GGUF、AWQ）**
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 👍 3,205 | ⬇️ 1,835,931
  *一句话说明*：基于 Qwen 3.6 MoE 的无审查“激进”微调版，下载量破百万，反映出社区对去审查模型的强烈需求。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 👍 1,124 | ⬇️ 712,835
  *一句话说明*：采用 2-bit 三值化技术的极限压缩 GGUF 模型，让消费级显卡跑起 27B 大模型变得丝滑。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 👍 1,138 | ⬇️ 1,119,057
  *一句话说明*：社区达人 DavidAU 制作的“缝合怪级”重度微调版，在角色扮演和创造力上无拘无束。
- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** | 👍 224 | ⬇️ 36,180
  *一句话说明*：Unsloth 火速跟进的 Kimi-K3 量化版，让普通开发者也能在本地体验霸榜模型的魅力。
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** | 👍 151 | ⬇️ 18,531
  *一句话说明*：采用最新 NVFP4 精度的量化版本，大幅降低了 250B 巨兽模型的显存门槛。

---

#### 📈 生态信号
本周生态展现出**“头部厂商开源占主导，社区深度定制赢下载”**的格局。以 Qwen 3.5/3.6 为绝对核心的微调生态正在爆发，尤其是基于 MoE 架构的无审查版本，屡次斩获百万级下载，表明用户对模型“个性化指令遵循”与“解除安全限制”的诉求极强。
此外，**极限量化技术**成为重大亮点。从 `Ternary-Bonsai` 的 2-bit 三值化 GGUF 到 Nota-ai 的 NVFP4 量化，社区正想尽一切办法将 27B 甚至 250B 级别的庞然大物塞进消费级硬件。同时，端侧 AI（纯 CPU 的 TTS、BitNet ASR）开始形成独立且高粘性的开发分支。

---

#### 💡 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**
   *理由*：作为榜单第一，其高达 49 万+的下载量和超 9000 点赞代表了当前开源模型的最强战力。无论是作为 API 替代品还是进行二次微调，都是不容错过的年度旗舰。
2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *理由*：250万+的恐怖下载量印证了其刚需属性。它突破了传统 OCR 的版式限制，对于做企业文档数字化、RAG 系统构建的开发者来说，是不可多得的利器。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *理由*：如果你需要一个在本地运行、摆脱了道德安全护栏限制的强大 MoE 模型，这个结合了 35B 庞大参数与 A3B 激活机制的版本提供了极佳的创意写作与角色扮演体验。