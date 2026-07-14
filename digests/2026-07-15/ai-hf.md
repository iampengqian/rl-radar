# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-14 22:17 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 7 月 15 日的数据为您梳理。

---

# 🤗 Hugging Face 热门模型日报 (2026-07-15)

## 1. 今日速览
今日 Hugging Face 平台呈现出“多模态加速普及”与“端侧量化爆发”两大核心特征。以 GLM-5.2 和 Qwen3.6 为代表的新一代基础模型迅速衍生出庞大的上下游生态，包揽了榜单的半壁江山。多模态领域，Baidu 的 Unlimited-OCR 和众多图生视频模型展现出极高的实用下载量。此外，社区对无审查与高效率微调的需求激增，基于全新量化格式（如 NVFP4、2-bit Ternary）的 GGUF 模型正全面重塑本地部署的算力门槛。

---

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 👍 3,944 | ⬇️ 489,611
    *   **简评**：今日点赞榜第一的新一代混合专家（MoE）对话模型，凭借出色的基础能力迅速成为开源社区的顶流。
*   **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
    *   作者: tencent | 👍 779 | ⬇️ 10,406
    *   **简评**：腾讯最新推出的 Hunyuan 第三代文本生成模型，在中文理解与自然对话体验上表现亮眼。
*   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    *   作者: InternScience | 👍 537 | ⬇️ 30,539
    *   **简评**：基于 Qwen3.5-MoE 打造的 Agentic（智能体）专用大模型，专为复杂工具调用和任务编排优化。
*   **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**
    *   作者: nineninesix | 👍 101 | ⬇️ 5,872
    *   **简评**：基于 Qwen3.5 架构的惊艳开源 TTS（文本到语音）模型，为本地语音合成提供了极高拟真度的新选择。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   作者: baidu | 👍 1,981 | ⬇️ 1,715,301
    *   **简评**：百度推出的“无限 OCR”多模态模型，具备超长文档和复杂图像的极限文字提取能力，下载量惊人。
*   **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)**
    *   作者: robbyant | 👍 96 | ⬇️ 0
    *   **简评**：主打高效推理的 14B 图生视频“世界模型”，专为快速生成高质量动态画面而生。
*   **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
    *   作者: robbyant | 👍 104 | ⬇️ 700
    *   **简评**：采用 MoE 架构的 30B 视频生成模型，通过 3B 激活参数实现了极高质量的文本/图像到视频生成。
*   **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
    *   作者: Alissonerdx | 👍 138 | ⬇️ 0
    *   **简评**：专为视频生成打造的面部 ID 保持 LoRA，完美解决图生视频过程中的面部崩坏问题。
*   **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
    *   作者: OpenMOSS-Team | 👍 188 | ⬇️ 65,109
    *   **简评**：复旦大学 MOSS 团队推出的语音转录与人声分离模型，是会议记录与音视频处理的刚需工具。

### 🔧 专用模型（代码、数学、医疗、嵌入）
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   作者: yuxinlu1 | 👍 1,186 | ⬇️ 468,629
    *   **简评**：专为终端编程设计的复合微调模型，在代码生成与自动化 Agentic 执行方面调教极深。
*   **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
    *   作者: nvidia | 👍 116 | ⬇️ 41,755
    *   **简评**：英伟达发布的超大规模“解谜与逻辑推理”专用模型，在复杂数学与空间逻辑任务上表现强悍。

### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    *   作者: empero-ai | 👍 2,151 | ⬇️ 2,006,265
    *   **简评**：支持 100 万超长上下文的 Qwen3.5 蒸馏微调版，完美结合了推理能力与极致的 llama.cpp 量化适配。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 👍 2,727 | ⬇️ 2,443,871
    *   **简评**：完全移除安全对齐的“激进版” Qwen3.6 视觉 MoE 模型，极高的下载量证明社区对去审查算力的庞大需求。
*   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   作者: unsloth | 👍 1,088 | ⬇️ 2,904,515
    *   **简评**：Unsloth 打造的 Qwen3.6 旗舰量化版，支持多 token 预测（MTP），是目前本地端侧跑 20B+ 级别模型的最优解。
*   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    *   作者: froggeric | 👍 899 | ⬇️ 0
    *   **简评**：修复了热门 Qwen 模型 Jinja 聊天模板 Bug 的工具包，虽无直接下载，但极高的点赞反映了开发者的广泛痛点。
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
    *   作者: prism-ml | 👍 95 | ⬇️ 23
    *   **简评**：实验性极强的 2-bit 三值化（Ternary）极端压缩模型，预示着未来在边缘设备跑超大模型的新路径。

---

## 3. 生态信号
今日榜单释放出极其明显的生态演进信号：
1. **双雄争霸演变为多头并进**：**Qwen3.5/3.6 家族**展现出恐怖的统治力，几乎渗透到了视觉、语音、代码、无审查微调等每一个细分领域；同时，**GLM-5.2** 和 **Gemma-4** 正在快速抢占通用对话与端侧编码的市场份额。
2. **量化技术大爆发**：**NVFP4** 与 **Expert-Streaming (MoE 降载)**、**2-bit Ternary** 等新型量化方案大量涌现。这标志着社区不再满足于传统的 INT4/INT8，而是向着更深度的底层硬件适配（如针对 NV 架构原生加速）迈进。
3. **开发者对底层控制权的渴望**：从极受欢迎的 Chat Template 修复包，到高赞的“Uncensored（无审查）”系列模型，反映出开发者对闭源 API 的限制日益不满，转向拥抱对模型逻辑和价值观拥有绝对掌控权的开源权重。

---

## 4. 值得探索

*   🥇 **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    *   **推荐理由**：多模态大模型落地的重要场景之一就是 OCR。百度此次开源的模型拥有超百万的下载量，如果你在做文档解析、票据处理或 RAG 系统构建，这是目前最值得直接投入生产的开源方案。
*   🥈 **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    *   **推荐理由**：想体验最新旗舰大模型又受限于显存？结合了 MTP（多 Token 预测）技术与 GGUF 的 Unsloth 版本，不仅推理速度翻倍，还能在中端消费级显卡上流畅运行 27B 级别模型，是极客与本地部署爱好者的首选。
*   🥉 **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   **推荐理由**：探索角色扮演（RP）和创意写作的极限。作为仅激活 3B 参数的 MoE 模型，它去除了传统的安全道德干预，能够展现出极高的指令遵从度与创造力，是研究模型对齐偏移与创意生成的极佳素材。