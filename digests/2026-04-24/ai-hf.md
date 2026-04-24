# Hugging Face 热门模型日报 2026-04-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-04-24 01:09 UTC

---

这里是为你生成的《Hugging Face 热门模型日报》（2026-04-24）：

# 🤗 Hugging Face 热门模型日报 (2026-04-24)

### 🎯 今日速览
- **多模态与开源更新狂潮**：今日榜单被 Qwen3.6、Kimi-K2.6 和 Gemma-4 等多模态重磅模型强势霸屏，原生视觉-语言处理能力成为当前大模型的标配。
- **“无审查”微调需求爆发**：社区对 AI 安全审查的逆向工程热情高涨，去审查化的 Gemma-4 和 Qwen3.6 微调版本占据了下载与点赞的高地。
- **3D 世界模型初露锋芒**：腾讯和英伟达相继押注 Image-to-3D 领域，预示着空间计算和 3D 生成正成为下一个多模态蓝海。
- **量化与极致压缩**：以 Unsloth 为主的社区量化团队以惊人的速度跟进了主流模型的 GGUF 版本，FP8 和 NVFP4 等新量化格式大幅降低了端侧部署的门槛。

---

### 📊 热门模型分类

#### 🧠 语言模型（LLM、对话模型、MoE）
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 作者: Qwen | 👍 1,332 | ⬇️ 717,811
  - **说明**：阿里最新的 35B 参数 MoE 架构多模态模型，凭借极高的激活效率和多模态能力登顶本周热度。
- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | 作者: zai-org | 👍 1,481 | ⬇️ 182,748
  - **说明**：智谱推出的新一代对话生成模型，采用了全新的 `glm_moe_dsa` 架构，备受社区期待。
- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | 作者: MiniMaxAI | 👍 1,041 | ⬇️ 463,243
  - **说明**：MiniMax 的强大文本生成模型，在长文本和对话能力上表现优异，下载量突破 46 万。
- **[tencent/Hy3-preview](https://huggingface.co/tencent/Hy3-preview)** | 作者: tencent | 👍 96 | ⬇️ 13
  - **说明**：腾讯发布的文本生成模型预览版，初步展现了其在语言理解上的新探索。

#### 🎨 多模态与生成（图像、音频、3D世界模型）
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 2,313 | ⬇️ 5,103,971
  - **说明**：谷歌 Gemma 4 系列的 31B 指令微调版，支持多模态且下载量级断层领先（超 500 万），是目前最成功的开源小钢炮。
- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | 作者: google | 👍 809 | ⬇️ 3,004,998
  - **说明**：Gemma-4 的端侧极小尺寸版本，支持 Any-to-Any（任意到任意模态），下载量高达 300 万，设备端部署首选。
- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | 作者: moonshotai | 👍 888 | ⬇️ 125,825
  - **说明**：月之暗面推出的 Kimi 最新一代图生文模型，采用了 compressed-tensors 技术，热度极高。
- **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | 作者: openbmb | 👍 1,223 | ⬇️ 81,729
  - **说明**：高质量的多语种文本转语音（TTS）模型，填补了开源界顶级语音生成的空白。
- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** | 作者: baidu | 👍 542 | ⬇️ 6,394
  - **说明**：百度开源的 8B 参数文生图扩散模型，采用 Apache-2.0 商业友好协议。
- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** | 作者: tencent | 👍 577 | ⬇️ 0
  - **说明**：腾讯推出的 3D 世界模型，专注于从图像到 3D 场景的生成，极具前瞻性。
- **[nvidia/Lyra-2.0](https://huggingface.co/nvidia/Lyra-2.0)** | 作者: nvidia | 👍 263 | ⬇️ 364
  - **说明**：英伟达发布的 Image-to-3D 模型，进一步验证了 3D 生成在工业和游戏领域的潜力。
- **[NucleusAI/Nucleus-Image](https://huggingface.co/NucleusAI/Nucleus-Image)** | 作者: NucleusAI | 👍 225 | ⬇️ 1,740
  - **说明**：结合了稀疏 MoE 架构的文生图扩散模型，为图像生成提供了新的架构思路。

#### 🔧 专用模型（分类、隐私、实验性底座）
- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | 作者: openai | 👍 561 | ⬇️ 1,888
  - **说明**：OpenAI 发布的令牌分类模型，专注于隐私数据过滤与脱敏，在数据合规需求剧增的当下备受关注。
- **[robbyant/lingbot-map](https://huggingface.co/robbyant/lingbot-map)** | 作者: robbyant | 👍 161 | ⬇️ 0
  - **说明**：结合了最新学术研究（arxiv:2604.14141）的实验性空间/地图语言模型。
- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)** | 作者: inclusionAI | 👍 141 | ⬇️ 8
  - **说明**：基于扩散机制与 MoE 的统一多模态底座模型，极具学术与架构探索价值。

#### 📦 微调与量化（GGUF、无损压缩与社区魔改）
- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 作者: unsloth | 👍 708 | ⬇️ 1,283,534
  - **说明**：Unsloth 出品的 Qwen3.6 MoE 量化版，下载量破百万，是本地玩家运行最新大模型的首选。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 402 | ⬇️ 350,262
  - **说明**：激进去审查的 Qwen3.6 多模态版本，揭示了社区对无限制模型的高需求。
- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** | 作者: OBLITERATUS | 👍 482 | ⬇️ 90,064
  - **说明**：Gemma-4 E4B 的“反安全对齐”版本，专供无限制角色扮演与深度内容生成。
- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | 作者: Jiunsong | 👍 471 | ⬇️ 126,271
  - **说明**：专为快速推理优化的 Gemma4 无审查 GGUF 版本，兼顾了速度与自由度。
- **[RedHatAI/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/RedHatAI/Qwen3.6-35B-A3B-NVFP4)** | 作者: RedHatAI | 👍 89 | ⬇️ 298,020
  - **说明**：红帽推出的 NVFP4 极低比特量化版，专为 vLLM 等生产环境高效推理打造。
- **[Jackrong/Qwopus-GLM-18B-Merged-GGUF](https://huggingface.co/Jackrong/Qwopus-GLM-18B-Merged-GGUF)** | 作者: Jackrong | 👍 193 | ⬇️ 63,745
  - **说明**：社区极具创意的“缝合怪”，将 Qwen 与 GLM 的推理能力进行深度融合。

---

### 📈 生态信号
**1. 巨头混战多模态与 3D 世界模型**：Qwen、Google 和 Kimi 在多模态领域的内卷，标志着纯文本 LLM 时代已成过去。同时，腾讯和英伟达在榜单上展示了世界模型（HY-World、Lyra），预示着 3D 空间智能将成为下半年的核心发力点。
**2. 开源权重全面反哺闭源生态**：OpenAI 和 Google 等闭源巨头越来越倾向于将“边缘产品”（如隐私过滤器、轻量级端侧 Gemma）开源，以此争夺开发者标准和生态绑定。
**3. 量化格式多元化与“反审查”浪潮**：NVFP4 等硬件原生量化格式正在崛起，Unsloth 的 GGUF 转化速度可谓神速。此外，Abliterated/Uncensored 模型的高下载量说明，突破安全限制的社区微调依然是一条极为活跃的暗流。

---

### 🔭 值得探索
1. **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)**
   - **推荐理由**：作为极罕见的支持 Any-to-Any（任意模态输入输出）且体积仅为 4B 的轻量级模型，它极具潜力被嵌入到各类 PC 端和移动端的智能 Agent 中，适合开发者立刻下载进行本地设备概念验证。
2. **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**
   - **推荐理由**：它非传统的自回归架构，而是结合了视觉扩散的 MoE 统一模型，对于研究人员探索下一代 LLM 底层架构（Masked Generation / Diffusion）具有极高的研究价值。
3. **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)**
   - **推荐理由**：开源界极少有表现优秀的高质量多语种 TTS 模型，如果你的项目需要构建具有自然情感表现力的语音对话系统，这是目前不容错过的选择。