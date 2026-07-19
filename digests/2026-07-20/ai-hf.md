# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 22:14 UTC

---

这份《Hugging Face 热门模型日报》为您精心梳理了 2026 年 7 月 20 日平台上的最新技术动态与生态趋势。

---

# 🤗 Hugging Face 热门模型日报 (2026-07-20)

### 📰 今日速览
1. **极端量化与 1-bit 架构迎来爆发**：以 `Bonsai-27B` 为代表的 1-bit/2-bit 量化模型本周狂揽超 160 万次下载，预示着在本地高效运行超大规模模型已成为主流趋势。
2. **中文开源大模型持续发力**：`GLM-5.2`、`Qwen3.6` 及 `Hy3` 在榜单上表现强劲，尤其是 Qwen 架构几乎霸榜了社区微调与多模态模型的基座位置。
3. **多模态向“专业实用”与“实时化”演进**：百度 `Unlimited-OCR` 霸榜下载数，而 OpenMOSS 等机构开始向实时音视频流转文字（如 `MOSS-VL-Realtime`）发起新冲击。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,165 | ⬇️ 536,177
  采用 MoE 与 DSA 架构的新一代强劲对话模型，凭借出色的生成能力登顶本周点赞榜。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 作者: google | 👍 3,273 | ⬇️ 12,337,374
  Google 发布的最新 31B 指令微调模型，支持多模态输入，以超 1200 万的下载量成为本周全站“吞吐量”最大的明星模型。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** & **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | 作者: prism-ml | 👍 486 / 789 | ⬇️ 1,262,894 / 338,945
  采用极致的 1-bit 与 2-bit（三进制）量化技术，让 27B 大模型能在普通 PC 甚至移动设备上流畅运行，是目前最受追捧的端侧方案。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 835 | ⬇️ 13,698
  腾讯混元团队发布的第三代文本生成模型，为生态提供了强力的原生前端权重。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,156 | ⬇️ 2,122,848
  百度推出的超强 OCR 模型，直击长图表、复杂排版的痛点，以极高的实用价值获得了超 200 万次下载。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,895 | ⬇️ 2,084,530
  基于 Qwen3.6 MoE 的无审查视觉多模态模型，因解除了安全限制且具备强悍的推理能力，在开发者社区引发热潮。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 1,142 | ⬇️ 13,462
  一款极具潜力的图像与文本交互的对话模型，交互体验丝滑，广受好评。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** | 作者: Wan-AI | 👍 126 | ⬇️ 2,408
  专注于图像到视频生成（I2V）的扩散模型，在复杂运动（如舞蹈）控制上表现优异。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** & **[mgwr/M87](https://huggingface.co/mgwr/M87)** | 作者: 个人开发者 | 👍 420 / 158
  基于 Krea-2 的图像编辑 LoRA，主打保持角色一致性的图像重绘与风格化生成。

#### 🔧 专用模型（代码、数学、医疗、嵌入、语音）
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 276 | ⬇️ 87,533
  复旦 MOSS 团队推出的语音转文字及说话人分离模型，为会议记录场景提供了企业级开源方案。
- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** | 作者: OpenMOSS-Team | 👍 81 | ⬇️ 544
  具备实时处理能力的视觉语言模型，专为视频流与实时多模态反馈设计。
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 作者: Cactus-Compute | 👍 279 | ⬇️ 955
  基于 JAX 开发的小型专用模型，专精于函数调用与工具使用，为构建自主智能体设计。

#### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,339 | ⬇️ 2,118,995
  将 Claude 风格的深度思考注入 Qwen3.5，并带有 1M 超长上下文，是目前最受欢迎的社区融合微调量化版。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 作者: DavidAU | 👍 99 | ⬇️ 16,719
  “命名狂魔” DavidAU 的最新融合怪，结合了无审查与 Heretic 等多种微调方案，展现了社区疯狂的玩法。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** | 作者: GnLOLot | 👍 147 | ⬇️ 5,494
  面壁智能 MiniCPM5 的 1B 超微小模型，经过微调居然具备了类似 Opus 的思考能力，极具趣味性。
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | 作者: froggeric | 👍 947 | ⬇️ 0
  修复了 Qwen3.5 模型在各类推理后端的 Jinja 聊天模板 Bug，虽无文件下载，但以高点赞体现了其对生态的巨大救场作用。

---

### 📊 生态信号

本周的 Hugging Face 榜单释放出了几个极为强烈的生态信号：
1. **基座家族大洗牌**：**Qwen3.5/3.6 系列已形成绝对的统治力**，成为了多模态、MoE、无审查微调以及量化版本的核心基座。同时，**Google Gemma-4** 凭借超 1200 万的恐怖下载量证明了其在开发者本地工作流中的不可或缺性。
2. **量化步入“极限时代”**：常规的 4-bit/8-bit 已无法满足极客胃口。`prism-ml` 操刀的 Bonsai 系列（1-bit 与 2-bit Ternary 架构）大受欢迎，说明开发者正致力于打破内存瓶颈，将 27B 甚至更大规模的模型塞进消费级便携设备中。
3. **开源走向“实用主义”**：榜单上不再全是单纯的跑分怪兽。百度 `Unlimited-OCR` 解决长图识别、MOSS 解决实时语音分离、各种 Face-ID 的视频 LoRA 满足电商内容生成。开源权重模型正在以极快的速度填补闭源 API 的边缘细分空白。

---

### 💡 值得探索

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   - **推荐理由**：如果你的日常工作或开发中经常受困于复杂排版、超长网页或带图文档的解析，这款拥有超 200 万下载量、专为“无限”长度优化的 OCR 模型绝对是目前开源界的最优解。
2. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
   - **推荐理由**：想在普通笔记本或 Mac 电脑上体验 27B 大模型的威力吗？这款模型采用了前沿的 1-bit 量化技术，内存占用极小，是了解未来“轻量化端侧运行”的最佳敲门砖。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   - **推荐理由**：基于最新 Qwen3.6 MoE 架构，不仅去除了内容审查限制，还融合了视觉能力。它是目前研究与测试“完全开放、无限制的通用智能体”的最佳靶场模型。