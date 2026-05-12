# Hugging Face 热门模型日报 2026-05-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-12 22:22 UTC

---

# Hugging Face 热门模型日报 (2026-05-13)

## 1. 今日速览
本周 Hugging Face 迎来了生成式 AI 的全面爆发，**DeepSeek-V4** 与 **Google Gemma-4** 系列的发布彻底点燃了开源社区的热情，下载量双双突破千万级别。多模态模型正在向“全能化”演进，其中以 **Qwen3.6** 系列为代表的视觉语言模型，以及主打 any-to-any 交互的模型成为今日绝对的主角。此外，视频生成和音频克隆技术迎来重大突破，**Sulphur-2** 的文生视频与 **OmniVoice** 的零样本语音克隆备受瞩目。开源权重与本地量化部署（如 GGUF 格式）的紧密结合，正持续推动大模型在端侧的普及。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 3,885 | ⬇️ 2,017,835
  - **说明**: DeepSeek-V4 系列的旗舰版，凭借强大的对话与文本生成能力，本期点赞量高居榜首，是开源 LLM 的性能天花板。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
  - 作者: deepseek-ai | 👍 1,057 | ⬇️ 1,162,290
  - **说明**: V4 系列的轻量高效版，主打高并发与快速推理，兼顾了性能与成本，下载量已破百万。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 👍 2,609 | ⬇️ 9,119,339
  - **说明**: 谷歌最新的开源指令微调模型，拥有惊人的 900 万+下载量，展现了 Gemma 家族在开源社区的统治力。
- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**
  - 作者: Zyphra | 👍 449 | ⬇️ 66,119
  - **说明**: 专注于推理能力的中小型模型，凭借极高的参数效率在榜单上崭露头角。
- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**
  - 作者: XiaomiMiMo | 👍 511 | ⬇️ 41,654
  - **说明**: 小米推出的最新模型，主打智能体与超长上下文处理，展现了终端厂商在 AI 领域的强劲势头。
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**
  - 作者: openai | 👍 1,421 | ⬇️ 190,993
  - **说明**: OpenAI 开源的隐私过滤与实体识别模型，反映了业界对 AI 数据安全和合规性的日益重视。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 1,736 | ⬇️ 3,858,503
  - **说明**: 阿里最新的 MoE 多模态大模型，兼具视觉理解与文本生成，以极高的参数效率拿下了近 400 万下载量。
- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
  - 作者: Qwen | 👍 1,256 | ⬇️ 2,446,478
  - **说明**: 同系列的 27B 密集型多模态模型，提供更稳健的泛化能力，适合处理复杂的图文任务。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**
  - 作者: moonshotai | 👍 1,272 | ⬇️ 1,423,653
  - **说明**: 月之暗面推出的最新多模态模型，支持特征提取和高度压缩，长文本和多模态能力备受期待。
- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
  - 作者: SulphurAI | 👍 721 | ⬇️ 157,648
  - **说明**: 当前最火热的文生视频基础模型之一，凭借出色的生成质量和一致性霸榜多日。
- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**
  - 作者: google | 👍 216 | ⬇️ 66,561
  - **说明**: 基于 Gemma-4 的 any-to-any 助手模型，能够处理并输出多种模态的内容，交互能力极强。
- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
  - 作者: openbmb | 👍 390 | ⬇️ 0
  - **说明**: 面向端侧的最新一代多模态小钢炮，尽管刚发布（下载量为 0），但凭借前代口碑已获大量关注。
- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**
  - 作者: HiDream-ai | 👍 269 | ⬇️ 3,418
  - **说明**: 结合了 Qwen3-VL 能力的高性能文生图模型，具有极高的艺术审美和提示词遵循能力。
- **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)**
  - 作者: TenStrip | 👍 233 | ⬇️ 64,008
  - **说明**: 优秀的图生视频模型，为动态视频创作者提供了高质量的工具。
- **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)**
  - 作者: SeeSee21 | 👍 320 | ⬇️ 9,477
  - **说明**: 专注于二次元风格的文生图特化模型，深受 ACG 社区和创作者喜爱。
- **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**
  - 作者: k2-fsa | 👍 855 | ⬇️ 2,224,595
  - **说明**: 强大的零样本语音克隆和多语言 TTS 模型，下载量超 200 万，堪称当前开源语音界的顶流。
- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
  - 作者: Supertone | 👍 120 | ⬇️ 1,837
  - **说明**: 新一代文本转语音（TTS）合成模型，提供高度拟真和富有表现力的音频生成。
- **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)**
  - 作者: sensenova | 👍 238 | ⬇️ 4,528
  - **说明**: 商汤科技推出的多模态大模型，具备全能的特征提取与交互能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)**
  - 作者: AngelSlim | 👍 167 | ⬇️ 17,260
  - **说明**: 极低比特量化的翻译专用模型，在资源受限设备上实现了出色的多语言翻译能力。
- **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)**
  - 作者: jackxinning | 👍 65 | ⬇️ 10,425
  - **说明**: 专注于医疗垂直领域的问答模型，支持中英双语，展现了 LLM 在行业的深耕。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
  - 作者: froggeric | 👍 159 | ⬇️ 0
  - **说明**: 并非基础模型，而是专门用于修复和优化 Qwen 系列 Jinja 聊天模板的实用工具库。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)**
  - 作者: unsloth | 👍 1,008 | ⬇️ 2,733,708
  - **说明**: 由 Unsloth 制作的官方级 GGUF 量化版，让普通的 PC 也能流畅运行顶尖多模态 MoE 模型。
- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**
  - 作者: unsloth | 👍 661 | ⬇️ 1,468,142
  - **说明**: 同系列 27B 模型的量化版，本地部署性价比极高，吸引了超百万次下载。
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**
  - 作者: Jiunsong | 👍 557 | ⬇️ 287,827
  - **说明**: 基于 Gemma-4 的“无删减”社区微调版，突破了官方的安全限制，在开源社区引发了大量讨论。
- **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)**
  - 作者: Jackrong | 👍 115 | ⬇️ 67,205
  - **说明**: 社区玩家融合了 Qwen 与 Opus 特性的微调量化模型，试图在本地跑出不一样的多模态体验。
- **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)**
  - 作者: havenoammo | 👍 85 | ⬇️ 43,428
  - **说明**: 社区持续折腾的产物，进一步优化了 Qwen3.6 量化过程中的细节表现。
- **[DavidAU/Qwen3.6-27B-Heretic-Uncensored...](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 136 | ⬇️ 197,110
  - **说明**: 标签繁多的极限微调版，主打“无删减”与“代码强化”，深受硬核本地玩家喜爱。

---

## 3. 生态信号
当前开源生态正在经历**“开源与闭源齐飞，参数与效率并重”**的演进。模型家族方面，**DeepSeek-V4** 和 **Gemma-4** 形成了双雄争霸的局面，而 **Qwen3.6** 则在多模态与 MoE（混合专家）架构上大放异彩。
值得注意的是，开源权重的释放速度和力度正倒逼闭源模型加快迭代，同时 **GGUF 格式与 Unsloth 等量化微调工具链**已成为生态运转的核心齿轮——大量社区开发者围绕顶尖基座模型进行量化、去审查和垂直领域微调。此外，视频生成与零样本语音克隆技术的成熟，标志着多模态正从单纯的“图文理解”跨向更复杂的“Any-to-Any”全模态交互时代。

---

## 4. 值得探索
1. **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为当前榜单点赞与实力并存的霸主，如果你需要测试目前开源 LLM 的逻辑与编码天花板，这是必试的模型。
2. **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)**：只需极少量的音频样本即可实现高质量的语音克隆，且支持多语言，非常适合语音合成研究者或独立开发者集成测试。
3. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：仅需激活极少的参数（A3B）就能驱动庞大的模型，是当前 MoE 多模态架构设计的教科书级作品，值得深入拆解其架构。