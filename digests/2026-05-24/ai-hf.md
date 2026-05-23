# Hugging Face 热门模型日报 2026-05-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-23 22:14 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-24)

## 1. 今日速览
今天的大热门属于基础大模型与多模态领域：**Google Gemma-4-31B-it** 凭借超千万次下载强势霸榜，**DeepSeek-V4** 系列双模型（Pro 与 Flash）均获极高关注度。多模态方面，**Qwen3.6** 系列迎来全面爆发，原生视觉与 MoE 架构备受开发者青睐。同时，视频与 3D 生成赛道持续火热，**字节 Lance** 与 **Sulphur-2** 模型引发热议。此外，**腾讯混元** 专门针对翻译任务发布了多个尺寸的特化模型，标志着大模型在垂直场景的落地正日益精细化。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,187 | ⬇️ 4,510,828
  - **简介**: DeepSeek-V4 系列的旗舰 Pro 版本，凭借强悍的文本生成与对话能力获得本周最高绝对点赞数。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,205 | ⬇️ 2,703,252
  - **简介**: DeepSeek-V4 的轻量高速版，兼顾性能与推理效率，下载量突破 270 万。
- **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[7B](https://huggingface.co/tencent/Hy-MT2-7B)** / **[30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
  - 作者: tencent | 👍 407 / 143 / 289 | ⬇️ 2,564 / 1,321 / 970
  - **简介**: 腾讯混元发布的支持多尺寸（1.8B 到 30B MoE）的机器翻译专精模型，在翻译任务上表现卓越。
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
  - 作者: sapientinc | 👍 256 | ⬇️ 78,771
  - **简介**: 新晋的 10 亿参数文本生成模型，以小体积提供了极具竞争力的生成质量。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,745 | ⬇️ 10,289,284
  - **简介**: 谷歌最新的 310 亿参数多模态指令模型，支持视觉语言理解，登顶今日下载榜。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** & **[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,876 / 1,404 | ⬇️ 6,011,835 / 4,115,906
  - **简介**: 阿里 Qwen3.6 系列原生多模态大作，包含 MoE 架构和密集模型，稳居开源视觉语言模型第一梯队。
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 913 | ⬇️ 247,170
  - **简介**: 面壁蜜蜂最新版高效视觉语言模型，端侧与轻量级部署的明星项目。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,301 | ⬇️ 1,286,075
  - **简介**: 爆款文本到视频生成基础模型，下载量超百万，视频生成赛道的重要力量。
- **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
  - 作者: bytedance-research | 👍 699 | ⬇️ 1,227
  - **简介**: 字节跳动推出的 Any-to-Any 多模态生成模型，在图文视频跨模态生成上极具潜力。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 613 | ⬇️ 40,368
  - **简介**: 顶级的文本转语音（TTS）合成模型，支持高质量语音克隆与生成。
- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 195 | ⬇️ 0
  - **简介**: 腾讯推出的单图转 3D 生成模型（MIT 协议），为 3D 资产创作提供开源方案。
- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 239 | ⬇️ 1,394
  - **简介**: 专为戏剧/故事场景设计的 TTS 与声音克隆模型，极大丰富了音频表现力。

### 🔧 专用模型（代码、提取、工具调用）
- **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
  - 作者: numind | 👍 90 | ⬇️ 9,918
  - **简介**: 专攻结构化数据提取的视觉语言模型，擅长从文档图表中精准抽取信息。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 👍 126 | ⬇️ 335
  - **简介**: 基于 JAX 的定制化编解码模型，主打函数调用和高级工具使用。

### 📦 微调与量化（社区微调、GGUF）
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 434 / 346 | ⬇️ 597,584 / 507,644
  - **简介**: Unsloth 出品的高质量 Qwen3.6 视觉多模态 GGUF 量化版，让普通开发者也能在本地跑通大参数模型。
- **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** & **[v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)**
  - 作者: Jackrong | 👍 172 / 87 | ⬇️ 35,795 / 2,853
  - **简介**: 社区开发者将 Qwen 与 Opus 能力融合微调后的量化版本，强化了代码生成能力。
- **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)**
  - 作者: CohereLabs | 👍 180 | ⬇️ 4,261
  - **简介**: Cohere 视觉对话模型的最新 4-bit 量化版，优化了端侧部署内存占用。

---

## 3. 生态信号
- **模型家族势头正旺**：**Qwen3.6** 和 **DeepSeek-V4** 占据了榜单的半壁江山。Qwen 在多模态和 MoE 架构上布局深远，DeepSeek 则在基础文本与通用对话上保持着极强统治力。
- **开源 vs 闭源的进阶**：开源界正快速从“追赶闭源”转向“原生多模态与底层创新”。榜单中涌现了大量 Any-to-Any、视频及 3D 生成的前沿开源权重（如 Lance、Pixal3D），极大缩小了与顶级闭源模型的能力边界。
- **量化与微调趋势**：**Unsloth** 几乎包揽了头部模型的 GGUF 量化工作，且支持多模态量化，说明“本地化/端侧部署多模态大模型”已成为刚需。社区微调也不再局限于文本，开始向视觉编码器融合延展。

---

## 4. 值得探索
1. **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
   - **理由**：Any-to-Any 统一多模态生成的热度正在飙升，该模型代表了行业从单一模态向跨模态无缝交互演进的最新尝试，极具新闻价值和前沿探索意义。
2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
   - **理由**：虽然下载量为 0，但它解决了开源部署中开发者经常忽略的“对话模板污染”问题。对于本地大模型玩家和推理框架开发者而言，是非常实用的利器。
3. **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
   - **理由**：开放了 MIT 协议的图像到 3D 生成方案。对于游戏开发者、VR/AR 创作者来说，这是一个零成本接入高保真 3D 资产生成管道的绝佳机会。