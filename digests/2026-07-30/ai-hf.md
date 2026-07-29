# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 22:16 UTC

---

这份《Hugging Face 热门模型日报》基于 2026 年 7 月 30 日的数据为您整理。

### 📰 今日速览
1. **多模态与视觉理解大爆发**：以 Moonshot 的 **Kimi-K3** 和百度的 **Unlimited-OCR** 为代表，原生多模态与极端长图/文本处理能力成为头部模型标配，霸榜点赞与下载量前列。
2. **“无审查”与硬核角色微调持续狂热**：基于 Qwen3.5/3.6 系列的社区微调模型（如 Heretic、Uncensored 系列）迎来了下载与点赞的狂欢，反映了社区对去除模型道德枷锁、打造个性化强约束设定的强烈需求。
3. **极限量化与端侧推理成熟**：1-bit/2-bit 极低比特量化技术（如 Ternary-Bonsai）和边缘侧语音合成模型大放异彩，标志着大模型在消费级硬件和 CPU 设备上的高效部署已成主流。

---

### 🔥 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）
*   **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | 👍 8,611 | ⬇️ 99,214
    *一句话说明：月之暗面推出的最新一代超大参数多模态特征提取模型，凭借极高的关注度空降本周榜首。*
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 👍 4,639 | ⬇️ 1,267,198
    *一句话说明：智谱 AI 推出的新一代 MoE 对话模型，兼顾了庞大的下载量与极高的人气，是开源基座模型的标杆。*
*   **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | 👍 693 | ⬇️ 4,804
    *一句话说明：Upstage 发布的 2500 亿参数超大语言模型，主打开源开放与极强的文本生成能力。*
*   **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | 👍 825 | ⬇️ 67,286
    *一句话说明：备受瞩目的新一代通用对话与指令遵循大模型，在逻辑推理上表现亮眼。*
*   **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | 👍 553 | ⬇️ 18,933
    *一句话说明：南棒（Nanbeige）推出的轻量级 3B 参数大模型，展现了小参数模型在端侧的巨大潜力。*

#### 🎨 多模态与生成（图像、视频、音频、文本到X）
*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 👍 3,510 | ⬇️ 2,694,935
    *一句话说明：百度推出的无限尺寸 OCR 模型，打破了分辨率限制，以惊人的近 300 万周下载量彻底统治视觉信息提取赛道。*
*   **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 👍 1,640 | ⬇️ 39,052
    *一句话说明：主打高质量图文对话与深度理解的多模态模型，为复杂视觉问答提供了极佳的交互体验。*
*   **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** / **[Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)** | 👍 288 / 111
    *一句话说明：专为 CPU 和边缘设备设计的超强本地文本转语音（TTS）模型，标志着语音合成正式全面步入端侧零延迟时代。*
*   **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** | 👍 97 | ⬇️ 1,754
    *一句话说明：微软结合了 BitNet 极低比特架构的语音识别模型，在保证高准确率的同时极大降低了计算开销。*
*   **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 👍 576 | ⬇️ 0
    *一句话说明：基于 Krea-2 的图像身份保持与编辑 LoRA，为工作流节点提供了精确的图像重绘能力。*

#### 🔧 专用模型（代码、数学、安全、代理）
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 👍 1,333 | ⬇️ 681,111
    *一句话说明：Kimi 专为编程优化的模型版本，在代码补全与复杂工程理解上处于业界领先地位。*
*   **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | 👍 315 | ⬇️ 6,275
    *一句话说明：基于 Qwen3.5-MoE 架构深度强化的前沿代码模型，开发者社区反响热烈。*
*   **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | 👍 199 | ⬇️ 1,543
    *一句话说明：微软推出的主打“Computer Use（计算机使用/智能体操控）”的专用模型，代表了 GUI 自动化操作的未来。*
*   **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | 👍 230 | ⬇️ 7,666
    *一句话说明：专注于系统安全与底层防御的微型大模型，适合集成到安全网关或杀毒软件中进行本地推理。*

#### 📦 微调与量化（社区微调、GGUF、AWQ）
*   **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | 👍 2,586 | ⬇️ 6,158,876
    *一句话说明：通义千问官方放出的 MoE 旗舰基座，以超 600 万的周下载量确立了其在开源社区的“万基之王”地位。*
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 👍 3,171 | ⬇️ 1,855,505
    *一句话说明：社区脱缰之作，去除安全限制并赋予模型极具侵略性的人设，在角色扮演爱好者中引发轰动。*
*   **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** / **[Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | 👍 1,094 / 687
    *一句话说明：将 27B 模型极限压缩至 1-bit/2-bit 的三值化量化版本，让普通家用电脑也能流畅跑起中大型大模型。*
*   **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | 👍 927 | ⬇️ 736,692
    *一句话说明：传奇微调者 DavidAU 结合 NEO Imatrix 技术打造的极品无审查融合模型，在创意写作上表现惊人。*
*   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 👍 2,515 | ⬇️ 1,262,662
    *一句话说明：用 Claude 的数据进行蒸馏微调的 Qwen3.5 蒸馏版，以小博大，实现了媲美一线闭源模型的推理质感。*

---

### 📈 生态信号
当前开源大模型生态呈现三个极为清晰的方向：
1. **“Qwen 宇宙”统治微调圈**：Qwen3.5 与 3.6 系列已成为开源社区绝对的事实标准，榜单中超过一半的微调与量化模型均以其为基座。尤其是 **Uncensored（无审查）** 和 **Heretic（异端）** 系标签的爆火，反映了社区对官方模型过于保守的反叛，以及对高度定制化、强人设角色的渴望。
2. **极限量化（1-bit / 2-bit）与 NVFP4 并行**：从云端到端侧，开发者对显存的压榨达到了新高度。`prism-ml` 的三值量化方案在消费级 CPU 上跑 27B 模型大受欢迎，而 `Nota-ai` 等机构则在推进 NVFP4 等新一代硬件原生支持的量化格式。
3. **实用工具型模型迎来大爆发**：纯语言模型的比拼正让位于具体场景的突破，榜单前列出现了极多非对话类任务模型。例如百度 `Unlimited-OCR` 的狂飙下载量，以及微软对 `Computer Use` 和边缘侧 `ASR/TTS` 的布局，证明产业界正加速将大模型转化为即插即用的基础组件。

---

### 💡 值得探索
1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
   *推荐理由*：如果您从事文档处理、长图解析或 RAG（检索增强生成）系统构建，这个模型打破了传统视觉模型对长宽分辨率的限制，其近 300 万的周下载量已经证明了它的工业级可靠性。
2. **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**
   *推荐理由*：标志着大模型从“聊天框”走向“操作系统”的试金石。带有 `computer-use` 标签的模型值得所有 Agent 开发者深入研究，它是构建自动化网页操作、自动办公智能体的核心引擎。
3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
   *推荐理由*：想体验开源社区“暗黑面”的最强力量？这款模型展示了当前极客社区去除底层安全对齐的最高工艺，在小说续写、游戏 NPC 驱动等不受限制的创意场景中具有极高的研究与应用价值。