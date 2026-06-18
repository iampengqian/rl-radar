# Hugging Face 热门模型日报 2026-06-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-18 22:34 UTC

---

# Hugging Face 热门模型日报（2026-06-19）

### 📰 今日速览
今日的 Hugging Face Hub 迎来了开源大模型的“换代日”，**Google 的 Gemma 4** 与 **DeepSeek V4** 无疑是全场焦点。多模态和全能模型（Any-to-Any）已成为标配，超过半数的热门模型原生支持图像、音频等多模态输入输出。此外，**Unsloth** 等社区开发者依然保持极高活跃度，其释出的 GGUF 量化版本极大地推动了新模型在端侧和消费级硬件上的普及。同时，去审查和极端定制化的微调模型需求依然强劲。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 👤 作者: deepseek-ai | 👍 4,954 | ⬇️ 2,948,726
  - 💬 *点评:* 当之无愧的榜单王者，顶级下载量与点赞量证明了 DeepSeek 第四代主力模型在开源文本生成与对话领域的绝对统治力。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 👤 作者: google | 👍 1,082 | ⬇️ 1,309,625
  - 💬 *点评:* 谷歌最新发布的新一代全能基座，支持 any-to-any 转换，兼具强劲性能与适中的参数规模，备受期待。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** / **[FP8版本](https://huggingface.co/zai-org/GLM-5.2-FP8)**
  - 👤 作者: zai-org | 👍 1,325 / 88 | ⬇️ 4,307 / 24,967
  - 💬 *点评:* 采用前沿的 MoE 架构，作为备受瞩目的国产大模型新星，一经发布便引发社区热议。
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 👤 作者: CohereLabs | 👍 446 | ⬇️ 15,285
  - 💬 *点评:* Cohere 推出的最新轻量级 MoE 对话与代码模型，主打高效与实用。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 👤 作者: nvidia | 👍 2,159 | ⬇️ 183,093
  - 💬 *点评:* 英伟达推出的超强 3B 视觉定位模型，以小博大，精准解决图像特征提取难题。
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 👤 作者: google | 👍 997 | ⬇️ 527,080
  - 💬 *点评:* 将扩散模型与 Gemma 架构结合的创意尝试，在图文多模态交互方向带来全新范式。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 👤 作者: MiniMaxAI | 👍 1,096 | ⬇️ 56,162
  - 💬 *点评:* MiniMax 的新一代多模态力作，支持图像与文本的深度交互与对话。
- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  - 👤 作者: zai-org | 👍 227 | ⬇️ 0
  - 💬 *点评:* 基于扩散架构的角色动画与视频生成模型，主打姿态驱动，刚上线即斩获高关注度。
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** / **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)**
  - 👤 作者: bosonai / Zyphra | 👍 487 / 113 | ⬇️ 57,380 / 669
  - 💬 *点评:* 两款优质的开源文本转语音（TTS）模型，表现自然逼真，填补了高质量开源音频生态的空白。

#### 🔧 专用模型（代码、数学、Agent、语音识别）
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 👤 作者: moonshotai | 👍 876 | ⬇️ 229,156
  - 💬 *点评:* Kimi 团队针对代码任务深度优化的多模态模型，在复杂指令与编程能力上表现亮眼。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 👤 作者: WeiboAI | 👍 402 | ⬇️ 6,589
  - 💬 *点评:* 微博 AI 带来的轻量化数学推理模型，证明小参数模型在特定逻辑任务中同样大有可为。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 👤 作者: nvidia | 👍 535 | ⬇️ 13,033
  - 💬 *点评:* 英伟达的超轻量级流式语音识别（ASR）模型，支持缓存感知，延迟极低。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 👤 作者: microsoft | 👍 200 | ⬇️ 957
  - 💬 *点评:* 微软专为“长上下文处理 / 子 Agent”场景设计的特化小模型。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 👤 作者: yuxinlu1 | 👍 1,687 | ⬇️ 211,424
  - 💬 *点评:* 今日点赞榜首！基于 Gemma 4 的极客级代码能力微调并量化，深受本地开发者追捧。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 👤 作者: HauhauCS | 👍 1,966 | ⬇️ 3,420,052
  - 💬 *点评:* 今日下载量霸主（超 340 万）！激进去审查版本的 Qwen3.6 MoE，打破了原生模型的道德限制。
- **[unsloth/全家桶量化模型](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** *(含 Gemma4, Kimi-K2.7, GLM-5.2 等)*
  - 👤 作者: unsloth | 👍 649+ | ⬇️ 累计数百万
  - 💬 *点评:* Unsloth 团队效率惊人，第一时间为所有前沿大模型（Gemma 4, M3, GLM 5.2）提供了高质量的 GGUF 量化版本。
- **[DavidAU/Qwen3.6-40B-...-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 👤 作者: DavidAU | 👍 394 | ⬇️ 529,069
  - 💬 *点评:* 以超长名字和“缝合+去审查+代码”著称的极限微调版本，下载量惊人，体现了社区对高度自由模型的狂热。

---

### 📈 生态信号
1. **新王登基，大厂混战：** 模型版本的快速迭代令人瞩目（DeepSeek-V4、Gemma-4、Qwen3.6、GLM-5.2 同台竞技）。MoE（混合专家）架构在 10B-400B 参数区间已彻底普及，成为标配。
2. **Any-to-Any 成为共识：** 纯文本大模型正在失去顶流吸引力，榜单前列多为支持 `image-text-to-text` 甚至全能多模态的模型。
3. **开源量化生态极速响应：** 以 `unsloth` 为代表的社区基建力量极为强大。基础模型发布后几小时内即可产出高质量 GGUF 版本，大幅降低了前沿 AI 的硬件门槛。
4. **“去审查”的强烈需求：** 榜单上出现了数个下载量破百万的 "Uncensored / Obliterated" 模型，反映出部分开发者群体对摆脱原生 RLHF 安全对齐、追求无限制内容生成的强烈刚需。

---

### 💡 值得探索

1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
   - **理由：** 毫无疑问的开源 LLM 天花板，接近 300 万的下载量证明了其在推理、对话上的全能表现。如果你需要一个强大的文本基座，这是目前的版本答案。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
   - **理由：** 展现了“小而美”的极致潜力。用极低的算力成本（3B）实现了极其精准的视觉定位与图像特征提取，非常适合集成到边缘设备或实时的多模态 Agent 工作流中。

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **理由：** 如果你想在本地运行一个不被繁文缛节限制的模型，这个基于 Qwen3.6 MoE 架构的去审查版本能提供原汁原味的强力输出，是极客与内容创作者的首选配置。