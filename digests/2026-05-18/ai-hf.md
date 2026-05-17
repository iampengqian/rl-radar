# Hugging Face 热门模型日报 2026-05-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-17 22:40 UTC

---

# 🤗 Hugging Face 热门模型日报 (2026-05-18)

## 📰 今日速览
今日 Hugging Face 趋势榜被各大科技巨头的前沿大模型强势霸榜。Google 开源的 **Gemma 4** 以近千万的超高下载量领跑，证明了开源社区对轻量级高质量模型的庞大需求；DeepSeek 和 Qwen 也分别凭借 V4 和 3.6 系列实现多点开花。多模态领域，端侧部署与视频生成迎来了爆发，**MiniCPM-V-4.6** 和 **Sulphur-2-base** 成为焦点。此外，开源界对 GGUF 等本地量化格式的热情依然高涨，同时音频生成（TTS与语音克隆）和社区防审计工具的开发也展现出极高的活跃度。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,666 | ⬇️ 9,858,626
  - 一句话说明：Google 最新的 31B 指令微调模型，凭借极高的性能和完全开源的策略，成为当前的“口碑与下载双冠王”。
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,010 | ⬇️ 3,140,341
  - 一句话说明：DeepSeek V4 系列的重磅专业版，引发了本周开源社区的广泛测试与热议。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,126 | ⬇️ 1,804,238
  - 一句话说明：V4 系列的高效精简版，主攻极致推理速度与低成本部署。
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** & **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,796 / 1,315 | ⬇️ 5.47M / 3.41M
  - 一句话说明：阿里通义千问最新一代混合专家与稠密模型，下载量破千万，是当前开源 LLM 的性能标杆。
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,457 | ⬇️ 248,131
  - 一句话说明：OpenAI 开源的文本隐私过滤器，能精准识别并分类文本中的敏感信息，填补了企业级数据安全的工具空白。
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 521 | ⬇️ 144,833
  - 一句话说明：主打高级推理能力的 8B 新锐模型，基于其推理基座模型微调而来，以小博大表现亮眼。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 688 | ⬇️ 56,518
  - 一句话说明：面壁智能最新端侧多模态视觉模型，专为移动设备等本地部署优化，热度极高。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 1,067 | ⬇️ 970,124
  - 一句话说明：高质量的开源文本到视频生成基础模型，下载量直逼百万，为视频创作生态提供了强大基座。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  - 作者: k2-fsa | 👍 896 | ⬇️ 2,061,515
  - 一句话说明：支持多语种和零样本克隆的强悍 TTS 模型，超 200 万的下载量印证了其在语音合成界的统治力。
- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  - 作者: HiDream-ai | 👍 374 | ⬇️ 14,285
  - 一句话说明：主打图像理解与生成的全能型多模态模型，将视觉层面的输入输出无缝融合。
- **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)**
  - 作者: microsoft | 👍 573 | ⬇️ 17,170
  - 一句话说明：微软最新推出的 7B 视觉语言模型，架构融合了 Qwen2.5-VL 的优秀特性。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 390 | ⬇️ 14,991
  - 一句话说明：专为二次元动漫风格打造的开源文生图模型，在小众受众中热度极高。
- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** & **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)**
  - 作者: 社区开发者 | 👍 278 / 570 | ⬇️ 135K / 0
  - 一句话说明：围绕 Lightricks 的 LTX 视频模型衍生的社区微调版本与 ComfyUI 节点工作流，大幅降低了优质视频生成门槛。
- **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)**
  - 作者: ResembleAI | 👍 130 | ⬇️ 936
  - 一句话说明：专为短视频和剧情配音设计的 TTS 模型，具备极强的声音克隆和情感表现力。
- **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
  - 作者: circlestone-labs | 👍 1,373 | ⬇️ 524,067
  - 一句话说明：可能是近期最火的 ComfyUI 创意生成插件/节点工具，为艺术家提供了强大的工作流支持。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  - 作者: jackxinning | 👍 116 | ⬇️ 9,383
  - 一句话说明：支持中英双语的垂直医疗领域问答模型，为医疗 AI 助理提供了可靠的开源方案。
- **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)**
  - 作者: TencentARC | 👍 122 | ⬇️ 0
  - 一句话说明：腾讯优图的单图转 3D 模型，解决了从 2D 到 3D 资产生成的核心痛点。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)**
  - 作者: antirez (Redis之父) | 👍 135 | ⬇️ 283,772
  - 一句话说明：由大神亲自操刀的 DeepSeek-V4 量化版本，让普通开发者也能在本地跑起新一代顶级大模型。
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
  - 作者: unsloth | 👍 227 / 209 | ⬇️ 185K / 181K
  - 一句话说明：由量化专家 Unsloth 出品的 Qwen3.6 系列 GGUF 格式模型，兼顾了内存占用与多 Token 预测性能。
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 617 | ⬇️ 268,773
  - 一句话说明：去除了安全审查机制的 Gemma4 模型量化版，主打“无限制对话”，深受极客和本地部署玩家追捧。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 264 | ⬇️ 0
  - 一句话说明：专为 Qwen 模型修复并优化对话模板的实用工具包，反映了社区对对话体验细节的极致追求。

---

## 📈 生态信号
**1. 巨头激战“中量级”开源：** 本周榜单几乎被 Google (Gemma)、DeepSeek 和 Qwen 的最新版本刷屏。特别是参数量在 30B 左右的 MoE（混合专家）和稠密模型，正成为巨头争夺开源标准的最核心战场。

**2. GGUF 与本地部署势不可挡：** 榜单中有大量基于 `gguf`、`llama.cpp` 和 `mlx` 标签的模型，从 Redis 作者亲自下场量化，到各种“无审查”微调版。这表明开发者不仅满足于云端 API，更渴望在本地硬件上拥有最高自由度的顶级大模型。

**3. 多模态向端侧与视频纵深发展：** 从 MiniCPM-V 锁定“On-Device”到 Lightricks 的 LTX-2.3 引发社区狂热的视频微调与工作流热潮。生成式 AI 正迅速从单一的“文生图”向更复杂的音视频生成及端侧多模态演进。

---

## 💡 值得探索

1. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
   - **理由**：如果你在开发需要语音交互的应用，这款拥有 200 万+下载量且支持零样本克隆的多语种 TTS 模型是不可错过的底层基建。
2. **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
   - **理由**：各大企业引入内网大模型时，数据隐私是最大痛点。OpenAI 开源的这个 Token 分类工具为构建安全的 RAG 系统提供了直接且权威的解决方案。
3. **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** (及相关 LTX 工作流)
   - **理由**：这是观察 AIGC 如何真正融入创作者生态的最佳窗口。搭配 ComfyUI，可以零成本探索最前沿的文生视频及图像控制流。