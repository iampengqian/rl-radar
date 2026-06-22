# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 22:30 UTC

---

### 《Hugging Face 热门模型日报》
**日期**: 2026-06-23

---

#### 📰 1. 今日速览
本周 Hugging Face 平台迎来开源大模型的“诸神之战”，**DeepSeek-V4-Pro** 与 **GLM-5.2** 凭借革命性的混合专家与 DSA 架构霸榜，展现了国产大模型在开源领域的绝对统治力。端侧与高能效赛道异常火热，Google 的 **Gemma-4-12B**（支持 Any-to-Any）及各类社区微调版成为开发者的新宠。此外，空间理解与多模态能力全面渗透，Nvidia 的 **LocateAnything** 与多款融合视觉的 MoE 模型标志着 AI 从纯文本交互向全面泛化迈出了关键一步。

---

#### 🔥 2. 热门模型

**🧠 语言模型（LLM、对话模型、指令微调）**
*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 👍 5,010 | ⬇️ 2,421,858
    *   一句话说明: 本周当之无愧的“流量王”，新一代 DeepSeek 架构带来了极致的推理与对话能力，下载量展现极高的大规模落地采用率。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 2,014 | ⬇️ 33,589
    *   一句话说明: 采用最新的 `glm_moe_dsa` 架构，在保持出色对话能力的同时，大幅提升了推理效率，是开源底座模型的重量级选手。
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 👍 1,138 | ⬇️ 1,912,198
    *   一句话说明: 谷歌发布的“六边形战士”，支持 Any-to-Any 和统一多模态，以适中的参数量撬动了惊人的下载数，极受开发者欢迎。
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 👍 481 | ⬇️ 21,078
    *   一句话说明: 基于 `cohere2_moe` 架构的高效小型化模型，主打轻量级代码生成与日常对话。

**🎨 多模态与生成（图像、视频、音频、文本到X）**
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 👍 2,290 | ⬇️ 247,517
    *   一句话说明: 英伟达推出的 3B 级别全能视觉定位模型，颠覆了传统目标检测范式，以极高的点赞量成为本周最亮眼的视觉多模态模型。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 👍 1,049 | ⬇️ 874,368
    *   一句话说明: 将扩散模型与 Gemma 架构结合的跨代际实验，激活参数仅 4B，却在图文生成与多模态对话上表现惊艳。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 👍 1,207 | ⬇️ 119,967
    *   一句话说明: 强大的图文多模态模型，展现了 MiniMax 在视觉理解（VL）领域的持续深耕。
*   **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
    *   作者: ostris | 👍 101 | ⬇️ 3,244
    *   一句话说明: 基于 Ideogram 4 的高质量文生图 LoRA，能够生成极具视觉冲击力的时间流动感图像。

**🔧 专用模型（代码、数学、医疗、嵌入）**
*   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    *   作者: WeiboAI | 👍 608 | ⬇️ 32,385
    *   一句话说明: 超小参数量的数学推理神器，证明了在特定垂直领域，经过深度优化的 3B 模型也能有惊艳的逻辑思考表现。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 👍 628 | ⬇️ 34,860
    *   一句话说明: 专为实时流式语音识别设计的超轻量模型，带有缓存感知能力，是端侧 ASR 的利器。
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M) / [LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)**
    *   作者: LiquidAI | 👍 100/78 | ⬇️ 8,822/2,202
    *   一句话说明: Liquid 基础模型家族的新一代检索增强嵌入模型，提供了普通向量和晚期交互双架构，大幅降低 RAG 成本。

**📦 微调与量化（社区微调、GGUF、AWQ）**
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,109 | ⬇️ 4,078,305
    *   一句话说明: 本周下载量霸榜（超 400 万），主打“无审查”与强指令服从的 Qwen MoE 破限微调版，在开发者圈内引发巨大反响。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 👍 2,165 | ⬇️ 414,734
    *   一句话说明: 将 Gemma-4 强行微调为专门针对编程与终端代理的利器，GGUF 格式使其成为本地跑码的最佳选择。
*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) / [zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
    *   作者: unsloth / zai-org | 👍 251/133 | ⬇️ 41,846/334,716
    *   一句话说明: 官方与社区默契联动的量化双行线，FP8 满足企业级推理，GGUF 满足极客本地部署。
*   **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)**
    *   作者: Jackrong | 👍 281 | ⬇️ 214,630
    *   一句话说明: 融合了 Qwen3.6 视觉底座与编程能力的全能微调版，支持多 token 预测（MTP），量化后下载量极高。

---

#### 📈 3. 生态信号
1. **模型家族格局大洗牌**：2026 年中，**DeepSeek** 与 **Qwen (通义千问)** 已经彻底统治了开源 LLM 的基座与微调生态。榜单上近一半的模型是基于 `deepseek`、`qwen3.5/3.6` 或由其衍生的架构（如 `gemma4` 的底层也借鉴了 MoE 的思路）。
2. **开源 vs 闭源的较量**：闭源模型（如 GPT/Claude）正逐渐退居至云端 API 服务，而开源界（如 DeepSeek-V4、GLM-5.2）不仅完全开放权重，还开始原生支持 `conversational` 与 `agentic` 能力。开源正以肉眼可见的速度抹平与闭源的代差。
3. **量化与微调的狂飙**：开发者对本地部署的“无审查”和“高智商”需求依然旺盛。HauhauCS 基于混合专家的去审查微调狂揽 400 万次下载，说明个人极客对 MoE 模型的榨取能力已炉火纯青；同时，FP8 和 GGUF 已经成为模型发布的标配双生子。

---

#### 💡 4. 值得探索
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：强烈建议视觉和多模态研究者尝试。它打破了传统大模型只能做图像描述的限制，真正实现了“指哪打哪”的精准空间定位，且参数量极其友好。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：架构融合的代表作品。将 Diffusion 的生成优势与 LLM 的逻辑理解缝合在一个大模型中，是探索“Any-to-Any”未来形态的绝佳切入点。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：如果你需要一款能在本地跑起来的、没有任何道德限制且聪明绝顶的私人助理，这个微调版 MoE 模型（实际激活仅 3B）绝对不容错过。