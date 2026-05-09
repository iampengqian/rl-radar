# Hugging Face 热门模型日报 2026-05-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-09 22:11 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-10)

## 📰 今日速览
本周 Hugging Face 平台迎来了**多模态与生成式AI的新一轮爆发**。语言模型方面，DeepSeek-V4 系列正式开源并瞬间霸榜，Qwen 稳步更新至 3.6 版本，以 MoE（混合专家）架构和高效率持续席卷开发者社区。视觉与视频生成领域大放异彩，`Sulphur-2-base` 引领文本到视频的热潮，而音频领域也迎来了强大的零样本语音克隆模型 `OmniVoice`。此外，模型端侧部署需求激增，以 `unsloth` 为主的社区量化生态空前繁荣，`DFlash` 等推测解码技术也展现出降低推理成本的新趋势。

---

## 🔥 热门模型分类

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,781 | ⬇️ 1,167,697
  - **说明**: DeepSeek V4 系列的旗舰级模型，支持文本生成与对话，凭借强大的基础能力和开源协议备受瞩目。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,011 | ⬇️ 957,448
  - **说明**: V4 系列的轻量级快速版本，主打高性价比推理，下载量逼近百万，是开发者的首选基座。
- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**
  - 作者: mistralai | 👍 309 | ⬇️ 29,683
  - **说明**: Mistral 推出的 128B 大型参数模型，支持多语言（英法），专为企业级高性能推理设计。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 498 | ⬇️ 31,447
  - **说明**: 小米推出的旗舰模型，主打智能体和超长上下文处理能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,576 | ⬇️ 8,894,303
  - **说明**: Gemma 4 系列中最受欢迎的图文多模态版本，下载量接近千万，开源多模态的绝对主力。
- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**
  - 作者: google | 👍 959 | ⬇️ 5,581,069
  - **说明**: Google Gemma 4 端侧版本，支持任意到任意模态，以极低的资源消耗在本地设备上表现优异。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 487 | ⬇️ 115,477
  - **说明**: 本周最热门的视频生成基础模型，大幅降低了高质量文生视频的门槛。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  - 作者: k2-fsa | 👍 821 | ⬇️ 2,233,532
  - **说明**: 支持多语种零样本语音克隆的开源 TTS 模型，超过 200 万次下载，堪称开源语音界的新王者。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) & [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,208 / 1,691 | ⬇️ 2.1M / 3.5M
  - **说明**: 阿里最新发布的图文多模态大模型及 MoE 版本，激活参数少但性能强悍，席卷开源榜单。
- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
  - 作者: TenStrip | 👍 186 | ⬇️ 51,779
  - **说明**: 热门的图生视频社区微调版本，提供更具艺术感的动态视觉效果。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,380 | ⬇️ 180,322
  - **说明**: OpenAI 开源的隐私数据过滤工具，用于 NLP 数据处理中的 Token 分类，是数据清洗的必备利器。
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 325 | ⬇️ 23,620
  - **说明**: 具备强悍评估结果的通用任务模型，附带详尽的 arXiv 论文支持，学术与工程两开花。
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 154 | ⬇️ 17,030
  - **说明**: 极致压缩的极致翻译模型，1.25bit 让大模型翻译能力在边缘设备上成为可能。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 972 | ⬇️ 2,581,735
  - **说明**: Unsloth 优化版 Qwen MoE 模型，下载量超 200 万，是运行本地大模型的事实标准格式。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 594 | ⬇️ 1,061,556
  - **说明**: 去除审查机制的社区无删减版模型，满足了部分开发者对完全无限制 AI 的需求。
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 114 | ⬇️ 161,548
  - **说明**: 重度微调的代码生成与无审核版本，体现了开源社区对模型能力的极限压榨。
- **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) & [gemma-4-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)**
  - 作者: z-lab | 👍 273 / 69 | ⬇️ 32,213 / 3,801
  - **说明**: 引入推测解码技术的量化版模型，代表了加速推理的新技术方向。

---

## 📈 生态信号
**模型家族格局：**本次榜单中，**Qwen 3.6** 和 **Google Gemma 4** 几乎统治了多模态生态，而 **DeepSeek V4** 则以极强的势头在纯语言模型领域攻城略地。
**开源 vs 闭源：**巨头正将顶级能力下沉至开源端侧（如 Gemma-4-E4B），同时 OpenAI 也罕见地开源了实用的处理工具，标志着“核心基座开源，云端增值闭源”的平衡模式日趋成熟。
**量化与推理革命：**GGUF 等量化下载量屡破百万，Unsloth 成为不可或缺的基础设施。更值得注意的是，MoE 架构（如 A3B）和推测解码技术正在显著降低大模型的推理门槛。去审查化的社区微调需求依然坚挺。

---

## 💡 值得探索
1. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
   - **理由**: 零样本语音克隆领域的重大突破，多语言支持且完全免费开源，非常适合想在前端应用、数字人或语音助手上做原型的开发者。
2. **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)**
   - **理由**: 使用了创新的 DFlash 推测解码技术，能在保持模型精度的同时显著提升推理速度，是部署本地大模型、优化资源消耗的极佳研究对象。
3. **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
   - **理由**: 视频生成赛道的一匹黑马，搭配 GGUF 格式说明其对消费级显卡极其友好，是测试最新开源视频生成效果的必玩项目。